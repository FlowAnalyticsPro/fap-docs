---
id: premiere-configuration
slug: /premiere-configuration
title: "2.3 The initial configuration"
sidebar_label: "2.3 The initial configuration"
sidebar_position: 3
guide_version: "8.1"
video: XCGr0IhHkws
---

## What this step is for

Before computing the metrics of a new product, FAP needs to know which issues to count and how to read your workflow. That is the purpose of the initial configuration. Two settings are mandatory: the issue types and the workflow. The others can be adjusted right away or later.

## How to get there

Products portfolio › product card › Review configuration.

The product settings open on the Issue Types tab. Until the two mandatory settings are done, the header shows that the metrics computation is required and the other tabs remain locked.

## 1. Issue Types (mandatory)

A first selection is suggested: check it.

- **Use for KPI calculation**: check the types that represent the work delivered by the team. Leave out epics and sub-tasks.
- **Use for bugs**: check the types that represent bugs.

If you use classes of service, choose the field that holds them. Click Apply: FAP moves on to the workflow.

<figure>

![The Issue Types tab](/img/fiches/premiere-configuration/en/figure-7.png)

<figcaption>Figure 7 – The Issue Types tab</figcaption>
</figure>

## 2. Workflow (mandatory)

FAP maps the steps of your tool to three categories: To Do, WIP and Done.

- Drag each step left in Unmapped Steps to its category, then order the steps in the order of the flow.
- For each WIP step, the switch indicates whether it is active work (development, testing, review) or waiting (“ready for…” steps, queues). Turn it off for waiting steps: this distinction is used to calculate efficiency.

Click Apply. All the settings tabs become available.

<figure>

![The Workflow tab](/img/fiches/premiere-configuration/en/figure-8.png)

<figcaption>Figure 8 – The Workflow tab</figcaption>
</figure>

## 3. Working Days (recommended)

Flow times are counted in working days. Check that the calendar is the team’s: time zone, working days and hours, public holidays of the country and region, non-working days specific to the team. By default, the product uses the instance settings. Click Apply.

<figure>

![The Working Days tab](/img/fiches/premiere-configuration/en/figure-9.png)

<figcaption>Figure 9 – The Working Days tab</figcaption>
</figure>

## 4. Default Settings (optional)

These settings define what the dashboards and charts show when they open: the unit of Scrum Predictability, the throughput cycle, how flow times are grouped, and the filters offered in the charts. Click Apply.

<figure>

![The Default Settings tab](/img/fiches/premiere-configuration/en/figure-10.png)

<figcaption>Figure 10 – The Default Settings tab</figcaption>
</figure>

The other tabs, Custom Dashboards, KPI's Goals and Custom Charts, are not needed at the start. You will come back to them once the first metrics are computed.

## 5. Close and start the computation

Click Close. The computation of the metrics starts automatically and the product card, in the portfolio, shows its progress. The product is ready when the card shows the breakdown of its issues.

<figure>

![The product card while the metrics are being computed](/img/fiches/premiere-configuration/en/figure-11.png)

<figcaption>Figure 11 – The product card while the metrics are being computed</figcaption>
</figure>

## Good to know

- Only administrators can do the initial configuration. In the Jira module, any user can.
- Take the time to set up the workflow carefully: all flow times depend on it.
- Any later change to the issue types, the workflow or the working days starts a new computation of the metrics.

## See also

[2.1 The products portfolio](./portefeuille-metriques-flux-produits.md) · [2.2 Importing a product](./importer-produit.md) · 2.9 Product settings
