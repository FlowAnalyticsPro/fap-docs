---
id: produit-graphiques
slug: /produit-graphiques
title: "2.5 Les graphiques"
sidebar_label: "2.5 Les graphiques"
sidebar_position: 5
guide_version: "8.1"
video: -he4JJysjP0
---

## À quoi sert cet écran

L’onglet Graphiques regroupe tous les graphiques d’un produit. Là où le tableau de bord donne des repères, les graphiques permettent d’analyser le flux en détail : temps de flux, débit, travail en cours, sprints et échéances.

## Comment y accéder

En-tête du produit › Graphiques.

## Ce que vous voyez

- **Graphiques Flow Analytics Pro** : les graphiques fournis par FAP.
- **Graphiques personnalisés** : les graphiques créés pour ce produit, avec le bouton Gérer.

| Thème | Graphiques |
| --- | --- |
| Débit | Suivi du débit, Histogramme de débit |
| Temps de flux | Histogramme du temps de flux, Nuage de points du temps de flux, Évolution du temps de flux, Flux XmR, Poids des tickets vs Temps de Cycle |
| Flux et travail en cours | Flux par étape, Flux d’efficience, Vieillissement, Flux cumulé |
| Sprints | Sprint Burnup, Sprint Burndown, Vélocité |
| Échéances | Nuage de points des échéances, Histogramme des échéances |

<figure>

![Les graphiques d’un produit](/img/fiches/produit-graphiques/figure-14.png)

<figcaption>Figure 14 – Les graphiques d’un produit</figcaption>
</figure>

## Ce que vous pouvez faire

- **Ouvrir un graphique** : cliquez sur son nom. Le graphique s’affiche avec ses filtres à gauche.
- **Filtrer** : choisissez la période, les types de tickets, une version, une feature, un sprint…, puis cliquez sur Appliquer. Le haut du panneau porte les réglages propres au graphique, par exemple le cycle du débit (hebdomadaire, mensuel…). RÀZ filtres revient aux valeurs par défaut.
- **Voir les tickets derrière un chiffre** : cliquez sur une barre. La liste de ses tickets s’affiche à droite. Cliquez sur un ticket pour voir son détail : ses temps de flux et son parcours dans le flux, étape par étape.
- **Afficher les valeurs en tableau** : cliquez sur Tableau, puis sur Graphique pour revenir.
- **Demander une analyse à Alice** : cliquez sur Analyser avec Alice. Vous retrouvez les dernières analyses du graphique : lisez-les, exportez-les en HTML ou en PDF, ou lancez une nouvelle analyse en précisant si besoin votre contexte.
- **Créer vos propres graphiques** : cliquez sur Gérer. Voir la fiche 2.9, Graphiques personnalisés.

<figure>

![Un graphique ouvert, avec les tickets d’une période](/img/fiches/produit-graphiques/figure-15.png)

<figcaption>Figure 15 – Un graphique ouvert, avec les tickets d’une période</figcaption>
</figure>

## Bon à savoir

- FAP garde les 3 dernières analyses d’Alice de chaque graphique. Si Alice est désactivée pour votre instance, vous pouvez les lire mais pas en lancer de nouvelles.
- Une analyse d’Alice porte sur la période et les filtres du moment où elle a été lancée. FAP vous prévient s’ils diffèrent du graphique affiché.
- Le filtre Classe de service n’apparaît que si son champ est défini dans les réglages du produit.
- Chaque graphique a sa propre fiche : à quoi il sert, comment le lire et les signaux à surveiller.

## Voir aussi

[2.4 Les tableaux de bord](./produit-tableaux-de-bord.md) · 2.10 Ce qu’il faut savoir sur tous les graphiques · 2.9 Réglages du produit — Graphiques personnalisés, Réglages par défaut
