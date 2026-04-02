---
week: 5
title: "Behavioral Momentum and Response Persistence"
description: "Analyze resistance to change across reinforcement contexts using behavioral momentum theory."
notebooks:
  - filename: "behavioral_momentum_lab.ipynb"
    title: "Behavioral Momentum Lab"
dataFiles:
  - "momentum_data.csv"
instructorNotebooks:
  - filename: "momentum_data_creation.ipynb"
    title: "Dataset Creation"
---

## Behavioral Momentum and Response Persistence Lab

Behavioral momentum theory (Nevin, 1992; Nevin & Shahan, 2011) provides a quantitative framework for understanding why behavior persists in the face of disruption. The central finding is that behavior maintained by higher rates of reinforcement is more resistant to change, analogous to how a more massive object in motion is harder to stop.

In this lab, you will work with data from a simulated multiple-schedule experiment in which subjects responded under both rich and lean reinforcement components. After stable baselines were established, responding was disrupted via prefeeding at graded amounts (0, 25, 50, 75, and 100g). Your task is to calculate proportion of baseline responding under each disruption level, fit the behavioral momentum equation to describe how responding decreases as a function of disruption intensity, and compare resistance to change across the two reinforcement contexts.

The key equation you will fit is:

log(Bx/B0) = -x * c / (r * S)

where Bx is the disrupted response rate, B0 is the baseline rate, x is the disruption level, c is sensitivity to disruption, r is the reinforcement rate in the component, and S captures the stimulus-reinforcer relation. Through this exercise, you will gain hands-on experience with the quantitative tools that behavioral momentum theory offers for predicting and interpreting response persistence.
