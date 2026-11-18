---
id: produit-graphiques
slug: /produit-graphiques
title: "2.5 The charts"
sidebar_label: "2.5 The charts"
sidebar_position: 5
guide_version: "8.1"
---

## What this screen is for

The Charts tab brings together all the charts of a product. Where the dashboard gives you landmarks, the charts let you analyze the flow in detail: flow times, throughput, work in progress, sprints and due dates.

## How to get there

Product header › Charts.

## What you see

- **Flow Analytics Pro’s Charts**: the charts provided by FAP.
- **Custom Charts**: the charts created for this product, with the Manage button.

| Topic | Charts |
| --- | --- |
| Throughput | Throughput Run, Throughput Histogram |
| Flow time | Flow Time Histogram, Flow Time Scatterplot, Flow Time Evolution, Flow XmR Chart, Story Point vs Cycle Time |
| Flow and work in progress | Flow Time Breakdown, Flow Efficiency, Aging, Cumulative Flow |
| Sprints | Sprint Burnup, Sprint Burndown, Velocity |
| Due dates | Due Date Scatterplot, Due Date Histogram |

<figure>

![The charts of a product](/img/fiches/produit-graphiques/en/figure-14.png)

<figcaption>Figure 14 – The charts of a product</figcaption>
</figure>

## What you can do

- **Open a chart**: click its name. The chart is displayed with its filters on the left.
- **Filter**: choose the period, the issue types, a version, a feature, a sprint…, then click Apply. The top of the panel holds the chart’s own settings, for example the throughput cycle (weekly, monthly…). Reset Filters goes back to the default values.
- **See the issues behind a figure**: click a bar. Its issues are listed on the right. Click an issue to see its details: its flow times and its path through the workflow, stage by stage.
- **Show the values as a table**: click Table, then Chart to go back.
- **Ask Alice for an analysis**: click Analyze with Alice. You find the latest analyses of the chart: read them, export them as HTML or PDF, or start a new analysis, adding your context if needed.
- **Create your own charts**: click Manage. See section 2.9, Custom Charts.

<figure>

![A chart opened, with the issues of a period](/img/fiches/produit-graphiques/en/figure-15.png)

<figcaption>Figure 15 – A chart opened, with the issues of a period</figcaption>
</figure>

## Good to know

- FAP keeps the last 3 Alice analyses of each chart. If Alice is disabled for your instance, you can read them but not start new ones.
- An Alice analysis covers the period and filters in place when it was started. FAP warns you if they differ from the chart displayed.
- The Class of Service filter only appears if its field is defined in the product settings.
- Each chart has its own section: what it is for, how to read it and the signals to watch.

## See also

[2.4 The dashboards](./produit-tableaux-de-bord.md) · 2.10 What to know about all the charts · 2.9 Product settings — Custom Charts, Default Settings
