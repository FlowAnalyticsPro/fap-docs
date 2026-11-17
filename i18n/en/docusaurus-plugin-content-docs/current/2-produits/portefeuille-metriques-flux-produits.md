---
id: portefeuille-metriques-flux-produits
slug: /portefeuille-metriques-flux-produits
title: "2.1 The products portfolio"
sidebar_label: "2.1 The products portfolio"
sidebar_position: 1
guide_version: "8.1"
---

## What this screen is for

The portfolio lists all the products of your instance. It is the starting point of the Flow Metrics module: there you track the status of your products, open them and import new ones.

## How to get there

Side menu › Flow Metrics — Products.

<figure className="figure-rail">

![The Flow Metrics — Products entry of the side menu](/img/fiches/portefeuille-metriques-flux-produits/en/figure-1.png)

<figcaption>Figure 1 – The Flow Metrics — Products entry of the side menu</figcaption>
</figure>

## What you see

- **The header** shows the number of products and offers the New product button.
- **The products**, displayed as cards or as a list. Products marked as favorites come first, the others after them.
- **The search and the filters by type (Scrum or Kanban) and by source (Jira or Excel)** help you find a product quickly.

Each card shows the product’s name and its status. For a ready product, it also shows the breakdown of its issues: to do, in progress and done, as well as its progress, that is the share of done issues among all the issues in the backlog.

<figure>

![The products portfolio, displayed as cards](/img/fiches/portefeuille-metriques-flux-produits/en/figure-2.png)

<figcaption>Figure 2 – The products portfolio, displayed as cards</figcaption>
</figure>

<figure>

![The products portfolio, displayed as a list](/img/fiches/portefeuille-metriques-flux-produits/en/figure-3.png)

<figcaption>Figure 3 – The products portfolio, displayed as a list</figcaption>
</figure>

## The statuses of a product

Depending on its progress, a product’s card shows:

- **a progress bar**, during the import, the calculation of the metrics or the deletion. It shows the number of imported issues and the estimated time remaining. The product cannot be opened in the meantime.
- **the Start configuration button**, once the import is complete: the product must be configured before the first calculation. See section 2.3.
- **the Start calculation button**, when the configuration is done but the metrics have not been calculated yet.
- **the Review configuration button**, when a configuration needs to be checked again.
- **the breakdown of issues**, when the product is ready. Click its name to open its dashboard.

A colored band, on the right edge of the card, signals the product’s status: gray while loading, yellow when the configuration is to be done or reviewed, green when the product is ready or ready for calculation, red when an error occurred during the import.

<figure>

![The statuses of a card: loading, configuration to review, ready for calculation, ready, import error](/img/fiches/portefeuille-metriques-flux-produits/en/figure-4.png)

<figcaption>Figure 4 – The statuses of a card: loading, configuration to review, ready for calculation, ready, import error</figcaption>
</figure>

## What you can do

- **Open a product**: click its name.
- **Import a product**: click New product. See section 2.2.
- **Add or remove a favorite**: click the card’s star.
- **Switch between cards and list**: click the button at the top right, List or Cards.
- **Delete a product**: click the card’s trash can, then confirm. Deletion is permanent.

## Good to know

- Add the products you view most often to your favorites: they stay at the top of the portfolio.
- Only administrators can open a product that is not configured yet. In the Jira module, any user can.

## See also

2.2 Importing a product · 2.3 The initial configuration
