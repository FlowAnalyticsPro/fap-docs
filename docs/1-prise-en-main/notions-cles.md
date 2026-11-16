---
id: notions-cles
slug: /notions-cles
title: "1.2 Les notions clés"
sidebar_label: "1.2 Les notions clés"
sidebar_position: 2
guide_version: "8.1"
---

Pour bien utiliser FAP, il suffit de connaître quelques notions. Elles correspondent aux éléments que vous créez dans chaque module.

## Métriques de flux

### Le produit

Un produit est la source de données d’une équipe dans le module Métriques de flux. Il correspond à un projet ou à un board Jira que vous importez dans FAP, ou à un fichier Excel.

FAP calcule les indicateurs du produit sur une période de calcul. Il s’appuie pour cela sur les réglages du produit : les étapes du flux de travail, les types de tickets pris en compte et les jours ouvrés. Des réglages justes donnent des indicateurs fiables.

Les indicateurs d’un produit peuvent s’afficher pour l’ensemble du produit, ou pour une version, un sprint, une feature (epic Jira), un label, un composant ou une classe de service.

### Le programme

Un programme regroupe plusieurs produits pour donner une vision consolidée, par exemple celle d’un ensemble d’équipes qui travaillent sur une même offre. Il se découpe en incréments et en itérations. Il peut porter des objectifs.

## DORA Metrics

### La vue DORA

Une vue DORA rassemble les données de livraison d’un élément de votre outil de gestion du code : un dépôt ou une organisation GitHub, un projet ou un groupe GitLab. FAP en tire les quatre DORA Metrics.

### Le programme DORA

Un programme DORA regroupe au moins deux vues DORA pour donner une vision consolidée de la livraison de plusieurs équipes ou de plusieurs applications.

## Évaluations

Le module Évaluations repose sur trois notions :

- **le modèle**, ou grille d’évaluation, qui décrit ce que l’on évalue ;
- **l’évaluation d’équipe**, qui mesure une équipe à partir d’un modèle, à différentes dates ;
- **le programme d’évaluations**, qui consolide les évaluations de plusieurs équipes.

## Les liens entre les éléments

Les éléments des différents modules peuvent être liés entre eux, pour passer d’un regard à l’autre sur une même équipe :

- une vue DORA peut être liée à un produit, et un programme DORA à un programme ;
- une évaluation d’équipe peut être liée à un produit, et un programme d’évaluations à un programme.

Lorsqu’un lien existe, un bouton apparaît dans l’en-tête du tableau de bord, par exemple « Métriques DORA » ou « Évaluation ». Il vous mène directement à l’élément lié.

<figure>

![En-tête d’une vue DORA : les boutons Métriques de flux et Évaluation mènent aux éléments liés](/img/fiches/notions-cles/figure-1.png)

<figcaption>Figure 1 – En-tête d’une vue DORA : les boutons Métriques de flux et Évaluation mènent aux éléments liés</figcaption>
</figure>

<figure>

![En-tête d’un produit : les boutons Évaluation et Métriques DORA mènent aux éléments liés](/img/fiches/notions-cles/figure-2.png)

<figcaption>Figure 2 – En-tête d’un produit : les boutons Évaluation et Métriques DORA mènent aux éléments liés</figcaption>
</figure>

<figure>

![En-tête d’une évaluation d’équipe : les boutons Métriques de flux et Métriques DORA mènent aux éléments liés](/img/fiches/notions-cles/figure-3.png)

<figcaption>Figure 3 – En-tête d’une évaluation d’équipe : les boutons Métriques de flux et Métriques DORA mènent aux éléments liés</figcaption>
</figure>
