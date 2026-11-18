---
id: produit-tableaux-de-bord
slug: /produit-tableaux-de-bord
title: "2.4 The dashboards"
sidebar_label: "2.4 The dashboards"
sidebar_position: 4
guide_version: "8.1"
video: Z4QfQNLTAN8
---

## What this screen is for

The dashboard gives, at a glance, the state of a product’s flow: flow times, throughput, work in progress, efficiency, bugs and forecast. It is the screen that is displayed when you open a product.

## How to get there

Products portfolio › product name, or Dashboard button in the product header.

## What you see

- **The product header**: the product name, the buttons to the other screens, the computation period and the date of the last data update (“Updated…”). The Assessment and DORA Metrics buttons appear when an assessment or a DORA view is linked to the product.
- **The backlog banner**: the number of issues to do, in progress, done and blocked, and the progress, that is the share of done issues.
- **The selection bar**: View chooses what you look at (the whole product, a version, a sprint, a feature, a label, a component or a class of service), Dashboard switches from the default dashboard to a custom dashboard, the Configure button lets you create your own dashboards, and Issue Type limits the cards to one issue type.
- **The cards**: each one presents a metric or a small chart.

<figure>

![The default dashboard of a product](/img/fiches/produit-tableaux-de-bord/en/figure-12.png)

<figcaption>Figure 12 – The default dashboard of a product</figcaption>
</figure>

### The cards of the default dashboard

The default dashboard is provided by FAP. It cannot be modified.

| Card | What it shows |
| --- | --- |
| Flow Time | The three flow times: the lead time, from the start to the end of the flow, the reaction time, spent in the to-do steps, and the cycle time, spent in the in-progress steps. |
| Efficiency | The share of the cycle time spent in active work steps rather than waiting. |
| Scrum Predict. | For a Scrum product, the share of the work committed in the sprints that was completed. |
| Throughput | The number of issues completed per cycle: per week, every 2 weeks… |
| Aging | The average age of the issues to do or in progress. To be compared with the lead time to measure the risk. |
| Defect | The number of bugs per issue. |
| Forecast | A Monte Carlo simulation: how many issues can be completed in the next month, or when the remaining issues will be. |
| Backlog Priority | The issues by priority, split between to do, in progress and done. |
| Flow Time By | The flow times grouped by issue type, or by the chosen grouping. |
| Issue Backlog | The breakdown of the issues between to do, in progress and done. |

## What you can do

- **Display the definition of a card**: hover over the ⓘ in front of its title.
- **Change the point of view**: choose a version, a sprint or a feature in View. For a sprint, FAP shows its dates, the remaining days and its goal.
- **Filter by issue type**: choose a type in Issue Type, for example Story or Bug. All the cards are recalculated.
- **Set up a card**: click its gear, when it has one. For Throughput, for example, you choose the cycle: weekly, every 2 weeks, monthly…
- **Display a chart full screen**: on a card that presents a chart, click the expand icon.
- **Switch from How Many to When** in the Forecast card.
- **Create your own dashboards**: click Configure to create or modify a custom dashboard. It can bring together metrics, charts, DORA Metrics of the linked view or the results of the linked assessment. See section 2.9, Custom Dashboards.
- **Change dashboard**: choose a custom dashboard in Dashboard.
- **Update the data**: depending on the configuration of your instance, the icon next to the update date starts the update from Jira.
- **Go to the linked items**: click Assessment or DORA Metrics.

<figure>

![A custom dashboard, with DORA Metrics and an assessment](/img/fiches/produit-tableaux-de-bord/en/figure-13.png)

<figcaption>Figure 13 – A custom dashboard, with DORA Metrics and an assessment</figcaption>
</figure>

## How to read it

The dashboard gives benchmarks, not a diagnosis. Read it in three steps:

1. **Speed**: flow time and throughput tell how long an issue takes and how many the team completes.
2. **Work in progress**: a high aging, close to the lead time, signals work that is stalling; a low efficiency, a lot of waiting between steps.
3. **Quality and what comes next**: the defect rate, then the forecast.

When performance goals are defined, each card is compared with its goal. To understand a figure, go on with the charts or the issues list.

## Good to know

- All the cards are computed over the product’s computation period.
- If the data has not been updated for more than 24 hours, the “Updated…” date turns red, with a warning.
- The Scrum Predict. card only concerns Scrum products: for a Kanban board, it shows “No sprints found”.

## See also

[2.3 The initial configuration](./premiere-configuration.md) · [2.5 The charts](./produit-graphiques.md) · 2.6 The issues list · 2.7 The forecast · 2.9 Product settings — Custom Dashboards, KPI's Goals
