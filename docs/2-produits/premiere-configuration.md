---
id: premiere-configuration
slug: /premiere-configuration
title: "2.3 La première configuration"
sidebar_label: "2.3 La première configuration"
sidebar_position: 3
guide_version: "8.1"
video: XCGr0IhHkws
---

## À quoi sert cette étape

Avant de calculer les indicateurs d’un nouveau produit, FAP doit savoir quels tickets compter et comment lire votre flux de travail. C’est l’objet de la première configuration. Deux réglages sont obligatoires : les types de tickets et le flux d’activité. Les autres peuvent être ajustés tout de suite ou plus tard.

## Comment y accéder

Portefeuille des produits › carte du produit › Revoir la configuration.

Les réglages du produit s’ouvrent sur l’onglet Types de tickets. Tant que les deux réglages obligatoires ne sont pas faits, l’en-tête signale que le calcul des indicateurs est nécessaire et les autres onglets restent verrouillés.

## 1. Types de tickets (obligatoire)

Une première sélection est proposée : vérifiez-la.

- **Utiliser pour les indicateurs** : cochez les types qui représentent le travail livré par l’équipe. Laissez de côté les epics et les sous-tâches.
- **Utiliser pour les bugs** : cochez les types qui représentent des anomalies.

Si vous utilisez des classes de service, choisissez le champ qui les porte. Cliquez sur Appliquer : FAP passe au flux d’activité.

<figure>

![L’onglet Types de tickets](/img/fiches/premiere-configuration/figure-7.png)

<figcaption>Figure 7 – L’onglet Types de tickets</figcaption>
</figure>

## 2. Flux d’activité (obligatoire)

FAP ramène les étapes de votre outil à trois catégories : À faire, En cours et Terminé.

- Glissez chaque étape restée dans Étapes sans correspondance vers sa catégorie, puis ordonnez les étapes dans l’ordre du flux.
- Pour chaque étape en cours, l’interrupteur indique s’il s’agit de travail actif (développement, test, revue) ou d’attente (étapes « prêt pour… », files d’attente). Désactivez-le pour les étapes d’attente : cette distinction sert au calcul de l’efficience.

Cliquez sur Appliquer. Tous les onglets des réglages deviennent accessibles.

<figure>

![L’onglet Flux d’activité](/img/fiches/premiere-configuration/figure-8.png)

<figcaption>Figure 8 – L’onglet Flux d’activité</figcaption>
</figure>

## 3. Jours ouvrés (recommandé)

Les temps de flux sont comptés en jours ouvrés. Vérifiez que le calendrier est celui de l’équipe : fuseau horaire, jours et horaires de travail, jours fériés du pays et de la région, jours non ouvrés propres à l’équipe. Par défaut, le produit reprend les réglages de l’instance. Cliquez sur Appliquer.

<figure>

![L’onglet Jours ouvrés](/img/fiches/premiere-configuration/figure-9.png)

<figcaption>Figure 9 – L’onglet Jours ouvrés</figcaption>
</figure>

## 4. Réglages par défaut (facultatif)

Ces réglages définissent ce qu’affichent les tableaux de bord et les graphiques à leur ouverture : l’unité de la prédictibilité Scrum, le rythme du débit, le regroupement des temps de flux, et les filtres proposés dans les graphiques. Cliquez sur Appliquer.

<figure>

![L’onglet Réglages par défaut](/img/fiches/premiere-configuration/figure-10.png)

<figcaption>Figure 10 – L’onglet Réglages par défaut</figcaption>
</figure>

Les autres onglets, tableaux de bord personnalisés, objectifs de performance et graphiques personnalisés, ne sont pas nécessaires au départ. Vous y reviendrez une fois les premiers indicateurs calculés.

## 5. Fermer et lancer le calcul

Cliquez sur Fermer. Le calcul des indicateurs démarre automatiquement et la carte du produit, dans le portefeuille, affiche sa progression. Le produit est prêt lorsque la carte affiche la répartition de ses tickets.

<figure>

![La carte du produit pendant le calcul des indicateurs](/img/fiches/premiere-configuration/figure-11.png)

<figcaption>Figure 11 – La carte du produit pendant le calcul des indicateurs</figcaption>
</figure>

## Bon à savoir

- Seuls les administrateurs peuvent faire la première configuration. Dans le module Jira, tout utilisateur le peut.
- Prenez le temps de bien régler le flux d’activité : tous les temps de flux en dépendent.
- Toute modification ultérieure des types de tickets, du flux d’activité ou des jours ouvrés relance le calcul des indicateurs.

## Voir aussi

[2.1 Le portefeuille des produits](./portefeuille-metriques-flux-produits.md) · [2.2 Importer un produit](./importer-produit.md) · 2.9 Réglages du produit
