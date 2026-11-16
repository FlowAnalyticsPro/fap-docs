// Contrôles automatiques des fiches du guide (lancés par « npm run check » et en CI).
//
// - chaque fiche FR a ses champs obligatoires et un identifiant stable (= son adresse) ;
// - chaque fiche FR a sa traduction EN, avec le même identifiant ;
// - les repères d'édition et le résumé d'aide (popup FAP), s'ils existent, sont complets ;
// - aucun identifiant déjà publié n'a disparu (scripts/published-ids.json).

import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const ROOT = path.resolve(import.meta.dirname, '..');
const FR_DIR = path.join(ROOT, 'docs');
const EN_DIR = path.join(ROOT, 'i18n/en/docusaurus-plugin-content-docs/current');
const EN_SIDEBAR = path.join(ROOT, 'i18n/en/docusaurus-plugin-content-docs/current.json');
const PUBLISHED = JSON.parse(fs.readFileSync(path.join(ROOT, 'scripts/published-ids.json'), 'utf8'));
const EDITIONS = ['cloud', 'on-premise', 'jira'];
const ID_FORMAT = /^[a-z0-9]+(-[a-z0-9]+)*$/;

const errors = [];
const fail = (file, message) => errors.push(`${path.relative(ROOT, file)} : ${message}`);

function listFiles(dir, predicate) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, {withFileTypes: true}).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return listFiles(full, predicate);
    return predicate(entry.name) ? [full] : [];
  });
}

const isFiche = (name) => /\.mdx?$/.test(name);

function checkHelp(file, help) {
  if (help === undefined) return;
  if (typeof help.objective !== 'string' || help.objective.trim() === '') {
    fail(file, 'help.objective est obligatoire (1 ou 2 phrases)');
  }
  if (!Array.isArray(help.keyPoints) || help.keyPoints.length !== 3) {
    fail(file, 'help.keyPoints doit contenir exactement 3 points');
  }
  if (help.howToRead !== undefined && typeof help.howToRead !== 'string') {
    fail(file, 'help.howToRead doit être un texte');
  }
  if (typeof help.video !== 'boolean') {
    fail(file, 'help.video doit valoir true ou false');
  }
}

function checkFiche(file) {
  const {data} = matter(fs.readFileSync(file, 'utf8'));
  for (const field of ['id', 'slug', 'title', 'sidebar_label', 'guide_version']) {
    if (data[field] === undefined || String(data[field]).trim() === '') {
      fail(file, `champ « ${field} » manquant`);
    }
  }
  if (data.id && !ID_FORMAT.test(data.id)) {
    fail(file, `identifiant « ${data.id} » invalide (minuscules, chiffres et tirets)`);
  }
  if (data.id && data.slug !== `/${data.id}`) {
    fail(file, `le slug doit être « /${data.id} » (l'adresse de la fiche = son identifiant)`);
  }
  if (data.editions !== undefined) {
    if (!Array.isArray(data.editions) || data.editions.some((e) => !EDITIONS.includes(e))) {
      fail(file, `editions doit être une liste parmi : ${EDITIONS.join(', ')}`);
    }
  }
  checkHelp(file, data.help);
  return data;
}

// Fiches françaises (langue de référence)
const frFiles = listFiles(FR_DIR, isFiche);
const ids = new Map();
for (const file of frFiles) {
  const data = checkFiche(file);
  if (!data.id) continue;
  if (ids.has(data.id)) {
    fail(file, `identifiant « ${data.id} » déjà utilisé par ${path.relative(ROOT, ids.get(data.id))}`);
  }
  ids.set(data.id, file);

  // Traduction anglaise au même emplacement relatif
  const enFile = path.join(EN_DIR, path.relative(FR_DIR, file));
  if (!fs.existsSync(enFile)) {
    fail(file, `traduction anglaise manquante (${path.relative(ROOT, enFile)})`);
    continue;
  }
  const en = checkFiche(enFile);
  if (en.id !== data.id) {
    fail(enFile, `identifiant « ${en.id} » différent de la version française (« ${data.id} »)`);
  }
  if (en.guide_version !== data.guide_version) {
    fail(enFile, 'guide_version différente de la version française');
  }
  if (JSON.stringify(en.editions ?? []) !== JSON.stringify(data.editions ?? [])) {
    fail(enFile, 'editions différentes de la version française');
  }
  if ((en.help === undefined) !== (data.help === undefined)) {
    fail(enFile, 'le résumé d\'aide (help) doit exister dans les deux langues, ou dans aucune');
  }
  if (en.help && data.help && en.help.video !== data.help.video) {
    fail(enFile, 'help.video différent de la version française');
  }
}

// Fiches anglaises sans original français
for (const file of listFiles(EN_DIR, isFiche)) {
  if (!fs.existsSync(path.join(FR_DIR, path.relative(EN_DIR, file)))) {
    fail(file, 'fiche anglaise sans version française');
  }
}

// Libellés des parties traduits en anglais
const enSidebar = JSON.parse(fs.readFileSync(EN_SIDEBAR, 'utf8'));
for (const file of listFiles(FR_DIR, (name) => name === '_category_.json')) {
  const {label} = JSON.parse(fs.readFileSync(file, 'utf8'));
  const key = `sidebar.guide.category.${label}`;
  if (!enSidebar[key] || enSidebar[key].message === label) {
    fail(file, `libellé « ${label} » non traduit dans ${path.relative(ROOT, EN_SIDEBAR)}`);
  }
}

// Identifiants déjà publiés : ils ne doivent jamais disparaître
for (const id of PUBLISHED) {
  if (!ids.has(id)) {
    errors.push(`Identifiant publié « ${id} » introuvable : une adresse publiée ne doit jamais changer.`);
  }
}

if (errors.length > 0) {
  console.error(`✗ ${errors.length} problème(s) dans les fiches :\n- ${errors.join('\n- ')}`);
  process.exit(1);
}
console.log(`✓ ${ids.size} fiche(s) vérifiée(s) en FR et en EN.`);
