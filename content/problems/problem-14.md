---
id: 14
title: "Decision Tree vs. Logistic Regression for Treatment Response"
week: 12
difficulty: "Intermediate"
modelingSteps: [4, 8]
tags: ["decision tree", "logistic regression", "overfitting", "Gini impurity", "model comparison"]
---

A clinic collects data on 20 cases to predict treatment outcome (Success or Failure) based on three features: baseline problem behavior rate (High or Low), behavioral function (Attention or Escape), and treatment type (FCT or DRA). The data are:

| Case | Baseline | Function | Treatment | Outcome |
|------|----------|----------|-----------|---------|
| 1 | High | Attention | FCT | Success |
| 2 | High | Attention | FCT | Success |
| 3 | High | Escape | FCT | Failure |
| 4 | Low | Attention | FCT | Success |
| 5 | Low | Escape | FCT | Success |
| 6 | High | Escape | DRA | Success |
| 7 | High | Attention | DRA | Failure |
| 8 | Low | Attention | DRA | Success |
| 9 | Low | Escape | DRA | Failure |
| 10 | High | Escape | FCT | Failure |
| 11 | Low | Attention | FCT | Success |
| 12 | High | Attention | FCT | Success |
| 13 | Low | Escape | DRA | Success |
| 14 | High | Escape | DRA | Success |
| 15 | Low | Attention | DRA | Success |
| 16 | High | Attention | DRA | Failure |
| 17 | Low | Escape | FCT | Success |
| 18 | High | Escape | FCT | Success |
| 19 | Low | Attention | FCT | Success |
| 20 | Low | Escape | DRA | Failure |

**(a)** Compute the Gini impurity of the full dataset (all 20 cases).

**(b)** Compute the Gini impurity for a split on the "Function" feature. Determine whether this split reduces impurity compared to the unsplit dataset, and compute the information gain (reduction in Gini impurity).

**(c)** A logistic regression model achieves 80% accuracy on the training data (16 of 20 correct). A decision tree achieves 95% accuracy (19 of 20 correct). Explain why the tree's higher training accuracy does not necessarily mean it is the better model.

**(d)** The clinic collects 10 new cases. On these new cases, the decision tree achieves only 65% accuracy, while the logistic regression achieves 75% accuracy. Explain what has happened, using the concept of overfitting.

**(e)** Based on all of the above, recommend which model the clinic should deploy for future predictions. Justify your recommendation.
