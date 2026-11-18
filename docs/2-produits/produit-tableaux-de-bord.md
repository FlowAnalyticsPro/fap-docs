---
id: produit-tableaux-de-bord
slug: /produit-tableaux-de-bord
title: "2.4 Les tableaux de bord"
sidebar_label: "2.4 Les tableaux de bord"
sidebar_position: 4
guide_version: "8.1"
---

## À quoi sert cet écran

Le tableau de bord donne, en un coup d’œil, l’état du flux d’un produit : temps de flux, débit, travail en cours, efficience, anomalies et prévision. C’est l’écran qui s’affiche à l’ouverture d’un produit.

## Comment y accéder

Portefeuille des produits › nom du produit, ou bouton Tableau de bord dans l’en-tête du produit.

## Ce que vous voyez

- **L’en-tête du produit** : le nom du produit, les boutons d’accès aux autres écrans, la période de calcul et la date de la dernière mise à jour des données (« À jour le… »). Les boutons Évaluation et Métriques DORA apparaissent lorsqu’une évaluation ou une vue DORA est liée au produit.
- **Le bandeau du backlog** : le nombre de tickets à faire, en cours, terminés et bloqués, et la progression, c’est-à-dire la part des tickets terminés.
- **La barre de sélection** : Vue choisit ce que vous regardez (le produit entier, une version, un sprint, une feature, un label, un composant ou une classe de service), Tableau de bord passe du tableau de bord par défaut à un tableau de bord personnalisé, et Type de tickets limite les cartes à un type de ticket.
- **Les cartes** : chacune présente un indicateur ou un petit graphique.

<figure>

![Le tableau de bord par défaut d’un produit](/img/fiches/produit-tableaux-de-bord/figure-12.png)

<figcaption>Figure 12 – Le tableau de bord par défaut d’un produit</figcaption>
</figure>

### Les cartes du tableau de bord par défaut

Le tableau de bord par défaut est fourni par FAP. Il ne peut pas être modifié.

| Carte | Ce qu’elle montre |
| --- | --- |
| Temps du flux | Les trois temps de flux : le temps de traversée, du début à la fin du flux, le temps de réaction, passé dans les étapes à faire, et le temps de cycle, passé dans les étapes en cours. |
| Efficience | La part du temps de cycle passée dans des étapes de travail actif, plutôt qu’en attente. |
| Prédict. Scrum | Pour un produit Scrum, la part du travail engagé dans les sprints qui a été terminée. |
| Débit | Le nombre de tickets terminés par cycle : par semaine, toutes les 2 semaines… |
| Vieillissement | L’âge moyen des tickets à faire ou en cours. À comparer avec le temps de traversée pour mesurer le risque. |
| Taux d’anomalie | Le nombre d’anomalies par ticket. |
| Prévision | Une simulation de Monte Carlo : combien de tickets peuvent être terminés d’ici un mois, ou quand les tickets restants le seront. |
| Backlog des priorités | Les tickets par priorité, répartis entre à faire, en cours et terminés. |
| Temps de flux par | Les temps de flux regroupés par type de ticket, ou selon le regroupement choisi. |
| Tickets du backlog | La répartition des tickets entre à faire, en cours et terminés. |

## Ce que vous pouvez faire

- **Afficher la définition d’une carte** : survolez le ⓘ placé devant son titre.
- **Changer de point de vue** : choisissez une version, un sprint ou une feature dans Vue. Pour un sprint, FAP affiche ses dates, les jours restants et son objectif.
- **Filtrer par type de ticket** : choisissez un type dans Type de tickets, par exemple Story ou Bug. Toutes les cartes sont recalculées.
- **Régler une carte** : cliquez sur sa roue dentée, quand elle en a une. Pour le Débit, par exemple, vous choisissez le cycle : hebdomadaire, toutes les 2 semaines, mensuel…
- **Afficher une carte en plein écran** : cliquez sur l’icône d’agrandissement de la carte.
- **Passer de Combien à Quand** dans la carte Prévision.
- **Changer de tableau de bord** : choisissez un tableau de bord personnalisé dans Tableau de bord. Il peut rassembler des indicateurs, des graphiques, des DORA Metrics de la vue liée ou les résultats de l’évaluation liée.
- **Créer ou modifier un tableau de bord personnalisé** : cliquez sur Configurer. Voir la fiche 2.9, Tableaux de bord personnalisés.
- **Mettre à jour les données** : selon la configuration de votre instance, l’icône placée à côté de la date de mise à jour lance la mise à jour depuis Jira.
- **Aller vers les éléments liés** : cliquez sur Évaluation ou Métriques DORA.

<figure>

![Un tableau de bord personnalisé, avec des DORA Metrics et une évaluation](/img/fiches/produit-tableaux-de-bord/figure-13.png)

<figcaption>Figure 13 – Un tableau de bord personnalisé, avec des DORA Metrics et une évaluation</figcaption>
</figure>

## Comment le lire

Le tableau de bord donne des repères, pas un diagnostic. Lisez-le en trois temps :

1. **La vitesse** : le temps du flux et le débit disent combien de temps prend un ticket et combien l’équipe en termine.
2. **Le travail en cours** : un vieillissement élevé, proche du temps de traversée, signale du travail qui stagne ; une efficience basse, beaucoup d’attente entre les étapes.
3. **La qualité et la suite** : le taux d’anomalie, puis la prévision.

Lorsque des objectifs de performance sont définis, une pastille de couleur à côté de la valeur la compare à son objectif. Pour comprendre un chiffre, poursuivez dans les graphiques ou la liste des tickets.

## Bon à savoir

- Toutes les cartes sont calculées sur la période de calcul du produit.
- Le sélecteur Vue s’applique aussi aux graphiques et à la liste des tickets.
- La carte Prédict. Scrum ne concerne que les produits Scrum : pour un board Kanban, elle affiche « Aucun sprint trouvé ».

## Voir aussi

[2.3 La première configuration](./premiere-configuration.md) · 2.5 Les graphiques · 2.6 La liste des tickets · 2.7 La prévision · 2.9 Réglages du produit — Tableaux de bord personnalisés, Objectifs de performance
