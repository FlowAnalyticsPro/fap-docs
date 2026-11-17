---
id: importer-produit
slug: /importer-produit
title: "2.2 Importing a product"
sidebar_label: "2.2 Importing a product"
sidebar_position: 2
guide_version: "8.1"
---

## What this screen is for

The import wizard creates a new product from a Jira project or board, or from an Excel file.

## How to get there

Products portfolio › New product.

## From Jira

1. Choose Jira as the data source.
2. Enter your Jira credentials: the server, your username and the authentication method. Depending on your Jira, this is an API token, a personal access token (PAT) or a password. Click Connect.
3. Choose to import a project or a board, then type at least three characters of its name and select it in the list. The number of projects or boards that can still be imported is shown.
4. Choose the KPI calculation period.
5. Start the import. You return to the portfolio, where the new product’s card shows the progress.

**Jira module**: there is no connection step. FAP uses your Jira access directly.

<figure>

![Choosing the Jira project or board](/img/fiches/importer-produit/en/figure-5.png)

<figcaption>Figure 5 – Choosing the Jira project or board</figcaption>
</figure>

## From Excel

.xlsx and .xls files are accepted. Each row of the file is an issue.

1. Choose Excel as the data source.
2. Select your file.
3. Choose between creating a new product, which you give a name, or updating an existing Excel product. Click Next.
4. A preview of the first rows is displayed. Map each column of the file to a FAP field, or indicate that it must be ignored.
5. Click Import. FAP displays the result of the import.

The following mappings are required:

- the issue key, its summary, its type and its priority;
- at least one step column in each of the To Do, In Progress and Done categories. These columns contain the date on which the issue entered the step.

<figure>

![Mapping the Excel columns](/img/fiches/importer-produit/en/figure-6.png)

<figcaption>Figure 6 – Mapping the Excel columns</figcaption>
</figure>

## Good to know

- An Excel product does not update itself: to refresh its data, import a new file into this product.
- Two products cannot have the same name.

## See also

2.3 The initial configuration · 2.9 Product settings
