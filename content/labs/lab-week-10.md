---
week: 10
title: "Dynamical Systems Models"
description: "Implement and analyze the logistic ODE as a model of behavioral acquisition using numerical and analytical methods."
notebooks:
  - filename: "dynamical_systems_lab.ipynb"
    title: "Dynamical Systems Lab"
dataFiles:
  - "acquisition_data.csv"
solutionNotebooks:
  - filename: "dynamical_systems_lab_solution.ipynb"
    title: "Dynamical Systems Lab (Solution)"
instructorNotebooks:
  - filename: "acquisition_data_creation.ipynb"
    title: "Dataset Creation"
---

## Dynamical Systems Models Lab

Many behavioral processes unfold over time in ways that are well described by differential equations. The logistic ordinary differential equation (ODE), dx/dt = r * x * (1 - x/K), provides a simple but powerful model of acquisition: responding starts slowly, accelerates as the behavior contacts reinforcement, and then decelerates as it approaches a carrying-capacity asymptote.

In this lab you will implement the logistic ODE numerically using Euler's method, explore how the parameters r (growth rate) and K (carrying capacity) shape the acquisition curve, find the equilibrium points analytically, perform a linear stability analysis, and construct a phase portrait. You will then fit the analytical solution of the logistic equation to empirical acquisition data using nonlinear least squares, comparing the fitted curve to the raw data.

### Assignment

1. Implement Euler's method for the logistic ODE and plot the resulting acquisition curves.
2. Vary the initial condition x0 and the parameters r and K to see how they affect the shape and speed of acquisition.
3. Find the equilibrium points of the logistic ODE analytically.
4. Perform a linear stability analysis by evaluating f'(x*) at each equilibrium.
5. Create a phase portrait (dx/dt vs. x) with directional arrows.
6. Load the empirical acquisition dataset and fit the logistic analytical solution using `scipy.optimize.curve_fit`.
7. Plot the fitted curve alongside the data and report the estimated parameters.
8. Discuss the biological and behavioral interpretation of r and K.
