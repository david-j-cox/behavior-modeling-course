---
week: 6
title: "Model Comparisons"
description: "Compare regression and classification models using a variety of fit metrics including information criteria."
notebooks:
  - filename: "model_comparisons.ipynb"
    title: "Model Comparisons"
instructorNotebooks:
  - filename: "model_comparisons_solution.ipynb"
    title: "Model Comparisons (Solution)"
dataFiles:
  - "participant_discounting_data.csv"
  - "challenging_behavior_data.csv"
---

## Model Comparisons Lab

This week, we focus broadly on the topic of model comparisons. This week is less hands-on and more about ensuring that you understand the tools at your disposal. Models generally come in two flavors: regression (continuous or ordinal output) and classification (categorical output). The readings this week highlighted the many different ways we can think about comparing how close our model outputs are to the observed data (i.e., the various fit metrics).

When comparing models, we are choosing one (or more) fit metrics and seeing which model(s) lead to better fit metrics. The loss metric(s) we choose are often determined by our data, the audience, historical precedence, and potentially the downstream deployment environment. Unfortunately, there's no easy decision tree for making this decision. The "right" choice is often determined by thinking critically about your situation, what the model is doing, and how you can interpret the loss metric relative to the "meaning" of the data you are modeling. The nice thing is that choosing a loss metric is the hard part. Once a metric is chosen, comparing models is easy.

The only wrinkle is that models with a greater number of parameters have greater flexibility and, therefore, tend to have lower loss metric values. But the sacrifice is complexity and potentially transparency and explainability. This is where the information criteria metrics are useful (e.g., BIC, AIC, AICc). The idea with these is to penalize models for having more parameters to try to "even the scales." You should always include some measure of information criteria if you are comparing models with different numbers of parameters.

### Part 1: Discounting Model Comparison (Regression)

The first dataset contains discounting data from Module 3. This dataset will allow you to compare the following models of discounting: exponential, hyperbolic, Myerson and Green's hyperboloid, and Rachlin's hyperboloid. For every row and for each of the four models, you should obtain the following fit metrics: **r-squared, MAE, RMSE, AIC, BIC, and AICc**.

### Part 2: Challenging Behavior Prediction (Classification)

The second dataset is a hypothetical dataset for a classification task. It was randomly created to allow you to predict whether or not challenging behavior will occur during a session (yes=1, no=0). To introduce yourself to different modeling techniques, try fitting the following: **logistic regression, decision tree, random forest, and a support vector machine**. You should obtain the following fit metrics: **accuracy, precision, recall, F1 score, Matthews Correlation Coefficient (MCC), and ROC-AUC**.

### Useful Packages

`scipy.optimize`, `scipy.stats`, `sklearn.metrics`, `sklearn.linear_model`, `sklearn.tree`, `sklearn.ensemble`, and `sklearn.svm`.
