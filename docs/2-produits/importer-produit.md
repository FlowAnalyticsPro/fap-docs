---
id: importer-produit
slug: /importer-produit
title: "2.2 Importer un produit"
sidebar_label: "2.2 Importer un produit"
sidebar_position: 2
guide_version: "8.1"
---

## À quoi sert cet écran

L’assistant d’import crée un nouveau produit à partir d’un projet ou d’un board Jira, ou d’un fichier Excel.

## Comment y accéder

Portefeuille des produits › Nouveau produit.

## Depuis Jira

1. Choisissez Jira comme source de données.
2. Saisissez vos informations de connexion Jira : le serveur, votre nom d’utilisateur et la méthode d’identification. Selon votre Jira, il s’agit d’un jeton d’API, d’un jeton d’accès personnel (PAT) ou d’un mot de passe. Cliquez sur Se connecter.
3. Choisissez d’importer un projet ou un board, puis saisissez au moins trois caractères de son nom et sélectionnez-le dans la liste. Le nombre de projets ou de boards encore importables est indiqué.
4. Choisissez la période de calcul des indicateurs.
5. Lancez l’import. Vous revenez au portefeuille, où la carte du nouveau produit affiche la progression.

**Module Jira** : l’étape de connexion n’existe pas. FAP utilise directement votre accès Jira.

<figure>

![Le choix du projet ou du board Jira](/img/fiches/importer-produit/figure-5.png)

<figcaption>Figure 5 – Le choix du projet ou du board Jira</figcaption>
</figure>

## Depuis Excel

Les fichiers .xlsx et .xls sont acceptés. Chaque ligne du fichier correspond à un ticket.

1. Choisissez Excel comme source de données.
2. Sélectionnez votre fichier.
3. Choisissez entre créer un nouveau produit, auquel vous donnez un nom, ou mettre à jour un produit Excel existant. Cliquez sur Suivant.
4. Un aperçu des premières lignes s’affiche. Associez chaque colonne du fichier à un champ de FAP, ou indiquez qu’elle doit être ignorée.
5. Cliquez sur Importer. FAP affiche le résultat de l’import.

Les correspondances suivantes sont obligatoires :

- la clé du ticket, son résumé, son type et sa priorité ;
- au moins une colonne d’étape dans chacune des catégories À faire, En cours et Terminé. Ces colonnes contiennent la date à laquelle le ticket est entré dans l’étape.

<figure>

![La correspondance des colonnes Excel](/img/fiches/importer-produit/figure-6.png)

<figcaption>Figure 6 – La correspondance des colonnes Excel</figcaption>
</figure>

## Bon à savoir

- Un produit Excel ne se met pas à jour tout seul : pour actualiser ses données, importez à nouveau un fichier dans ce produit.
- Deux produits ne peuvent pas porter le même nom.

## Voir aussi

2.3 La première configuration · 2.9 Réglages du produit
