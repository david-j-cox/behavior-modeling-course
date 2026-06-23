---
week: 12
title: "Machine Learning and Artificial Intelligence"
description: "Use decision trees and random forests to classify behavioral function from functional analysis data."
notebooks:
  - filename: "ml_lab.ipynb"
    title: "ML Classification Lab"
dataFiles:
  - "fa_classification_data.csv"
instructorNotebooks:
  - filename: "ml_lab_solution.ipynb"
    title: "ML Classification Lab (Solution)"
  - filename: "fa_classification_data_creation.ipynb"
    title: "Dataset Creation"
---

## Machine Learning and Artificial Intelligence Lab

This week introduces supervised machine learning as a tool for prediction and classification in behavior science. The specific application is classifying the function of problem behavior from functional analysis (FA) summary data -- a task that clinicians perform routinely based on visual inspection of FA graphs.

You will work with a simulated dataset of 60 participants, each characterized by response rates across four FA conditions (attention, escape, tangible, and play/control). Your goal is to build a classifier that can predict the behavioral function from these features. You will start with a single decision tree, which is highly interpretable and mirrors the kind of rule-based reasoning clinicians use (e.g., "if the rate in the attention condition is elevated relative to play, the function is likely social-positive reinforcement").

From there, you will explore overfitting by comparing training and test accuracy across different tree depths, then build a random forest to see whether an ensemble of trees improves predictive performance. The lab concludes with a discussion of the prediction-explanation tradeoff: more complex models may predict better, but simpler models are easier to interpret and communicate to practitioners.

### Assignment

Complete all tasks in the Jupyter notebook. You will need scikit-learn, pandas, and matplotlib. Focus not only on model accuracy but on understanding *why* the models make the predictions they do.
