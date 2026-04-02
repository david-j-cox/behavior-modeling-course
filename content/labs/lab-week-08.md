---
week: 8
title: "Probability Theory and Probabilistic Models"
description: "Apply Bayesian updating and Monte Carlo simulation to behavioral assessment data."
notebooks:
  - filename: "probability_lab.ipynb"
    title: "Probability Lab"
dataFiles:
  - "functional_analysis_data.csv"
instructorNotebooks:
  - filename: "fa_data_creation.ipynb"
    title: "Dataset Creation"
---

## Probability Theory and Probabilistic Models Lab

Probabilistic reasoning is fundamental to drawing inferences from behavioral data. In applied behavior analysis, practitioners routinely make judgments about the function of problem behavior based on patterns observed in functional analysis (FA) conditions. Typically these judgments rely on visual analysis, but Bayesian methods offer a complementary, quantitative approach to updating beliefs about behavioral function as data accumulate.

In this lab, you will implement a Bayesian updating procedure for functional assessment. Starting from a uniform prior over four possible functions (attention, escape, tangible, automatic), you will sequentially incorporate observed FA session outcomes to derive posterior probability distributions over functions. You will also implement a Monte Carlo simulation to estimate confidence intervals for a behavioral parameter, giving you practical experience with simulation-based inference. Together, these exercises illustrate how probability theory can formalize the reasoning that behavior analysts already engage in when interpreting assessment data.
