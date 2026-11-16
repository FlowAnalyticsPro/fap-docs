---
id: notions-cles
slug: /notions-cles
title: "1.2 Key concepts"
sidebar_label: "1.2 Key concepts"
sidebar_position: 2
guide_version: "8.1"
---

To use FAP well, you only need to know a few concepts. They match the items you create in each module.

## Flow Metrics

### The product

A product is a team’s data source in the Flow Metrics module. It matches a Jira project or board that you import into FAP, or an Excel file.

FAP calculates the product’s metrics over a calculation period. To do this, it relies on the product settings: the workflow stages, the issue types taken into account and the working days. Accurate settings give reliable metrics.

A product’s metrics can be shown for the whole product, or for a version, a sprint, a feature (Jira epic), a label, a component or a class of service.

### The program

A program groups several products to give a consolidated view, for example of a set of teams working on the same offering. It is split into increments and iterations. It can carry objectives.

## DORA Metrics

### The DORA view

A DORA view gathers the delivery data of an item in your code management tool: a GitHub repository or organization, or a GitLab project or group. FAP derives the four DORA Metrics from it.

### The DORA program

A DORA program groups at least two DORA views to give a consolidated view of the delivery of several teams or several applications.

## Assessments

The Assessments module relies on three concepts:

- **the template**, or assessment grid, which describes what is assessed;
- **the team assessment**, which measures a team against a template, at different dates;
- **the assessment program**, which consolidates the assessments of several teams.

## Links between items

Items from different modules can be linked, so you can switch between perspectives on the same team:

- a DORA view can be linked to a product, and a DORA program to a program;
- a team assessment can be linked to a product, and an assessment program to a program.

When a link exists, a button appears in the dashboard header, for example “DORA Metrics” or “Assessment”. It takes you straight to the linked item.

<figure>

![DORA view header: the Flow Metrics and Assessment buttons lead to the linked items](/img/fiches/notions-cles/en/figure-1.png)

<figcaption>Figure 1 – DORA view header: the Flow Metrics and Assessment buttons lead to the linked items</figcaption>
</figure>

<figure>

![Product header: the Assessment and DORA Metrics buttons lead to the linked items](/img/fiches/notions-cles/en/figure-2.png)

<figcaption>Figure 2 – Product header: the Assessment and DORA Metrics buttons lead to the linked items</figcaption>
</figure>

<figure>

![Team assessment header: the Flow Metrics and DORA Metrics buttons lead to the linked items](/img/fiches/notions-cles/en/figure-3.png)

<figcaption>Figure 3 – Team assessment header: the Flow Metrics and DORA Metrics buttons lead to the linked items</figcaption>
</figure>
