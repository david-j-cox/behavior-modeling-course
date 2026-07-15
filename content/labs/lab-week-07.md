---
week: 7
title: "How to Construct a Model"
description: "Build lifecycle diagrams, derive equations, and run simulations for two environment-behavior relations of your choosing."
notebooks:
  - filename: "model_demonstrations.ipynb"
    title: "Model Demonstrations"
solutionNotebooks:
  - filename: "model_demonstrations_solution.ipynb"
    title: "Model Demonstrations (Solution)"
dataFiles: []
---

## How to Construct a Model Lab

This week, we focus on how to construct a model for some phenomenon you are interested in describing quantitatively. The chapters focused on how to build lifecycle diagrams and flow diagrams to start mapping out what variables are in your model and how they might relate. As with past chapters, we can then use the model we created to describe data we have collected, and use various techniques to improve those model fits (e.g., changing mathematically how the different variables relate).

From there, the chapters also covered how we might create a recursive model, a difference model, and a differential model, which allows us to run simulations to get a better feel for our models. This can be incredibly useful to determine when our model might make illogical predictions (e.g., response rates less than zero; exponentially growing response rates). It can also allow us to visualize how different parameters of our model influence our behavioral predictions.

During the in-class demo, we walked through two examples of how to do this for lever pressing under a random ratio (RR) schedule and salivary responding to a conditioned stimulus (CS). We also walked through how we can convert that equation into code to either fit data that we have collected or to run simulations. In each case, the models were one-variable models.

### Assignment

Identify two different environment-behavior relations that you are interested in modeling. For each, create:

1. A life-cycle diagram
2. The basic equation relating environmental variables to behavior
3. The set of recursive, difference, and differential equations
4. The code to fit the model to a fake dataset
5. Simulations varying the parameters for each of the equations in step 3
