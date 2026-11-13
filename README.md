# fap-docs

Guide utilisateur de Flow Analytics Pro, publié sur **https://docs.flowanalyticspro.com**
en français (langue par défaut) et en anglais (`/en/`).

Site construit avec [Docusaurus](https://docusaurus.io/) et publié sur GitHub Pages.

## Organisation

| Emplacement | Contenu |
| --- | --- |
| `docs/<partie>/` | Fiches en français, une par fichier. Un dossier par partie du guide. |
| `docs/<partie>/_category_.json` | Libellé et ordre de la partie dans le sommaire. |
| `i18n/en/docusaurus-plugin-content-docs/current/` | Fiches en anglais, au même emplacement que la version française. |
| `i18n/en/docusaurus-plugin-content-docs/current.json` | Libellés anglais des parties. |
| `i18n/*/code.json`, `i18n/en/docusaurus-theme-classic/navbar.json` | Textes de l'interface du site. |
| `templates/fiche-ecran.md` | Modèle d'une fiche liée à un écran de FAP. |
| `scripts/check-fiches.mjs` | Contrôles automatiques des fiches. |
| `scripts/published-ids.json` | Identifiants déjà publiés : ils ne doivent plus changer. |
| `src/` | Apparence du site (design system FAP) et composants. |
| `static/img/` | Logo et images. |

## Identifiant d'une fiche

Chaque fiche a un identifiant stable (`id`), par exemple `presentation-fap`.
Il sert d'adresse à la page (`docs.flowanalyticspro.com/presentation-fap`) et, pour les fiches
liées à un écran, d'identifiant d'aide dans FAP. **Une fois publié, il ne change plus.**

## Ajouter une fiche

1. Créer la fiche française dans `docs/<partie>/<identifiant>.md`, à partir du modèle.
2. Créer la fiche anglaise au même emplacement sous `i18n/en/docusaurus-plugin-content-docs/current/`.
3. Ajouter l'identifiant à `scripts/published-ids.json`.
4. Lancer `npm test`.

## Commandes

```bash
npm ci              # installer les dépendances
npm start           # aperçu local en français
npm run start:en    # aperçu local en anglais
npm test            # contrôler les fiches et construire le site
```

## Publication

Le workflow `.github/workflows/deploy.yml` contrôle et construit le site à chaque PR,
puis le publie sur GitHub Pages à chaque fusion sur `main`.
