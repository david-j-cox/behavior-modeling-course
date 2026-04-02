---
week: 2
title: "Matching and Discounting"
description: "Fit the generalized matching equation and discounting models to participant data and interpret the outputs."
notebooks:
  - filename: "week_02_matching_law_lab.ipynb"
    title: "Matching Law Lab"
  - filename: "discounting_analyses.ipynb"
    title: "Discounting Analyses"
instructorNotebooks:
  - filename: "gme_lab_dataset_creation.ipynb"
    title: "Dataset Creation (Matching)"
  - filename: "discounting_data_creation.ipynb"
    title: "Dataset Creation (Discounting)"
dataFiles:
  - "gme_data_P01.csv"
  - "gme_data_P02.csv"
  - "gme_data_P03.csv"
  - "gme_data_P04.csv"
  - "gme_data_P05.csv"
  - "gme_data_P06.csv"
  - "gme_data_P07.csv"
  - "gme_data_P08.csv"
  - "gme_data_P09.csv"
  - "gme_data_P10.csv"
  - "discounting_data.csv"
  - "participant_data.csv"
  - "params_data.csv"
---

## Part 1: Matching Law

This week, we are focusing on the generalized matching equation (GME). The purpose of this lab is to use your programming skills to fit the GME to participant data and interpret the outputs. In the folder, there are 10 hypothetical datasets with participant data common to matching law experiments. Your job is what a researcher's job might be. That is, see how well the data are fit by the GME for each individual as well as any trends that might be worth discussing at the group level.

The following packages will likely help accomplish this task: `pandas`, `numpy`, `matplotlib`, `seaborn`, and `scipy` (`linregress` function). These are not the only ways you might accomplish the goal, but they certainly have everything you need.

## Part 2: Discounting

We are also focusing on the family of equations within the discounting area of the literature. The purpose of this part of the lab is to use your programming skills to fit the hyperbolic, hyperboloid, and Area Under the Curve equations to participant data and interpret the outputs.

In the folder, there is a single dataset with participant data common to discounting experiments. Specifically, each row has a set of indifference points relative to seven different indifference points (columns) along with information about the amount and commodity specific to those indifference points.

Your job is what a researcher's job might be. That is: (1) see how well the data are fit by the hyperbolic and hyperboloid models; (2) once fit, see if there are any trends in discounting relative to changes in amount, commodity, or sign (gain vs. loss).

The following packages will likely help accomplish this task: `pandas`, `numpy`, `matplotlib`, `seaborn`, `scipy` (for fitting and calculating AUC), and `scikit-learn` (for r2 values).

As a bonus, in the folder, you will also see a `params_data.csv`. These were the raw k and s parameters used to create each participant's data while also adding noise pulled from the normal distribution between -10 and 10. You could compare how well your package derived the original parameters when noise is involved.
