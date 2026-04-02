---
week: 9
title: "Multilevel Modeling and Time-Series Forecasting"
description: "Fit multilevel models to nested behavioral data and compare to single-level approaches."
notebooks:
  - filename: "multilevel_lab.ipynb"
    title: "Multilevel Modeling Lab"
dataFiles:
  - "nested_behavior_data.csv"
instructorNotebooks:
  - filename: "nested_data_creation.ipynb"
    title: "Dataset Creation"
---

## Multilevel Modeling and Time-Series Forecasting Lab

Behavioral data are almost always nested: responses are nested within sessions, sessions are nested within participants, and participants may be nested within groups or settings. Ignoring this nesting structure when fitting statistical models can lead to biased parameter estimates and artificially narrow confidence intervals.

In this lab you will work with a dataset containing session-level response rates from eight participants, each observed across twenty sessions under varying reinforcement rates. You will begin by fitting a single-level ordinary least squares regression that ignores the nesting of sessions within participants. You will then fit a multilevel (mixed-effects) model that accounts for participant-level variation in both intercepts and slopes, compare the two approaches using information criteria, and interpret the fixed and random effects in behavioral terms.

As an optional extension, you will decompose the session-by-session data for a single participant into trend and residual components, providing a brief introduction to time-series thinking that will be developed further in later weeks.

### Assignment

1. Load and explore the nested behavioral dataset.
2. Fit an OLS regression pooling all data and examine the residuals.
3. Fit a random-intercept mixed-effects model using `statsmodels.formula.api.mixedlm`.
4. Extend to a random-intercept-and-slope model.
5. Compare single-level and multilevel models using AIC and BIC.
6. Interpret the fixed effects and random effects in the context of the matching law and reinforcement rate-response rate relations.
7. Visualize participant-level regression lines.
8. (Optional) Perform a simple time-series decomposition on one participant's data.
