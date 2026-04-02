---
week: 3
title: "Demand"
description: "Fit the exponential demand equation to participant consumption data and analyze the results."
notebooks:
  - filename: "demand_analysis.ipynb"
    title: "Demand Analysis"
instructorNotebooks:
  - filename: "demand_data_creation.ipynb"
    title: "Dataset Creation"
dataFiles:
  - "participant_data.csv"
---

## Demand Lab

This week, we are focusing on the family of equations within the demand area of behavior analysis. The purpose of this lab is to use your programming skills to explore demand. In this assignment, you will fit the exponential demand equation proposed by Hursh & Silberberg (2008) to participant consumption data.

In this folder, there is a single dataset with participant data common in demand experiments. Specifically, each row has a single participant with consumption at a range of price points (i.e., $0.01, $0.05, $0.25, $1, $5, $10, $33, $100, $250, $500, $1000). The Q0 and alpha values used to generate each participant's data are also present. However, noise was added once generated. Your job is to calculate Q0 from the participant's data directly, calculate the k value from the dataset as a whole, and then systematically loop through each participant and fit the exponential equation, estimating alpha for each participant.

### General Steps

1. Read in the dataset
2. Transform the dataset to be in long form
3. Transform the price to a numeric value
4. Calculate the parameter k or choose its constant value
5. Create a function that calculates the consumption Q using the exponential demand equation
6. Apply the function to each row in the dataset to identify the predicted consumption
7. Graph and analyze the results -- calculate the goodness of fit metrics and display them to interpret the model's goodness of fit

### Things to Watch Out For

- The log of 0 is undefined because there's no number you can raise that will give you zero.
- Often to avoid the log(0) issue, people will add a constant to all values in the dataset before taking the log (i.e., all numbers in the series are adjusted up by 0.001 before the log transform is applied).

### Reference

Hursh, S. R., & Silberberg, A. (2008). Economic demand and essential value. *Psychological Review*, 115(1), 186-198. https://doi.org/10.1037/0033-295X.115.1.186
