---
id: portefeuille-metriques-flux-produits
slug: /portefeuille-metriques-flux-produits
title: "2.1 Le portefeuille des produits"
sidebar_label: "2.1 Le portefeuille des produits"
sidebar_position: 1
guide_version: "8.1"
---

## À quoi sert cet écran

Le portefeuille liste tous les produits de votre instance. C’est le point de départ du module Métriques de flux : vous y suivez l’état de vos produits, vous les ouvrez, vous en importez de nouveaux.

## Comment y accéder

Menu latéral › Métriques de flux — Produits.

<figure className="figure-rail">

![L’entrée Métriques de flux — Produits du menu latéral](/img/fiches/portefeuille-metriques-flux-produits/figure-1.png)

<figcaption>Figure 1 – L’entrée Métriques de flux — Produits du menu latéral</figcaption>
</figure>

## Ce que vous voyez

- **L’en-tête** indique le nombre de produits et propose le bouton Nouveau produit.
- **Les produits**, présentés en cartes ou en liste. Les produits marqués comme favoris apparaissent en premier, les autres ensuite.
- **La recherche et les filtres par type (Scrum ou Kanban) et par source (Jira ou Excel)** permettent de retrouver rapidement un produit.

Chaque carte affiche le nom du produit et son état. Pour un produit prêt, elle montre aussi la répartition de ses tickets : à faire, en cours et terminés, ainsi que sa progression, c’est-à-dire la part des tickets terminés dans l’ensemble des tickets du backlog.

<figure>

![Le portefeuille des produits, affiché en cartes](/img/fiches/portefeuille-metriques-flux-produits/figure-2.png)

<figcaption>Figure 2 – Le portefeuille des produits, affiché en cartes</figcaption>
</figure>

<figure>

![Le portefeuille des produits, affiché en liste](/img/fiches/portefeuille-metriques-flux-produits/figure-3.png)

<figcaption>Figure 3 – Le portefeuille des produits, affiché en liste</figcaption>
</figure>

## Les états d’un produit

Selon l’avancement, la carte d’un produit affiche :

- **une barre de progression**, pendant l’import, le calcul des indicateurs ou la suppression. Elle indique le nombre de tickets importés et le temps restant estimé. Le produit ne peut pas être ouvert pendant ce temps.
- **le bouton Revoir la configuration**, une fois l’import terminé : le produit doit être configuré avant le premier calcul. Voir la fiche 2.3. Le même bouton apparaît lorsqu’une configuration doit être vérifiée de nouveau.
- **le bouton Démarrer le calcul**, lorsque la configuration est faite mais que les indicateurs ne sont pas encore calculés.
- **la répartition des tickets**, lorsque le produit est prêt. Cliquez sur son nom pour ouvrir son tableau de bord.

Une bande de couleur, sur le bord droit de la carte, signale l’état du produit : grise pendant le chargement, jaune quand la configuration est à faire ou à revoir, ou pendant le calcul des indicateurs, verte quand le produit est prêt ou prêt pour le calcul, rouge quand une erreur s’est produite pendant l’import.

<figure>

![Les états d’une carte : chargement, configuration à revoir, prêt pour le calcul, prêt, erreur d’import](/img/fiches/portefeuille-metriques-flux-produits/figure-4.png)

<figcaption>Figure 4 – Les états d’une carte : chargement, configuration à revoir, prêt pour le calcul, prêt, erreur d’import</figcaption>
</figure>

## Ce que vous pouvez faire

- **Ouvrir un produit** : cliquez sur son nom.
- **Importer un produit** : cliquez sur Nouveau produit. Voir la fiche 2.2.
- **Ajouter ou retirer un favori** : cliquez sur l’étoile de la carte.
- **Basculer entre cartes et liste** : cliquez sur le bouton en haut à droite, Liste ou Cartes.
- **Supprimer un produit** : cliquez sur la corbeille de la carte, puis confirmez. La suppression est définitive.

## Bon à savoir

- Mettez en favoris les produits que vous consultez le plus : ils restent en tête du portefeuille.
- Seuls les administrateurs peuvent ouvrir un produit qui n’est pas encore configuré. Dans le module Jira, tout utilisateur le peut.

## Voir aussi

2.2 Importer un produit · 2.3 La première configuration
