---
week: 5
title: "Behavioral Momentum and Response Persistence"
description: "Fit behavioral momentum equations to resistance-to-change data across three disruptors: prefeeding, extinction, and alternative reinforcement."
notebooks:
  - filename: "behavioral_momentum_lab.ipynb"
    title: "Behavioral Momentum Lab"
dataFiles:
  - "momentum_data.csv"
  - "behavioral_momentum_extinction_data.csv"
  - "behavioral_momentum_alternative_data.csv"
instructorNotebooks:
  - filename: "behavioral_momentum_lab_solution.ipynb"
    title: "Behavioral Momentum Lab (Solution)"
  - filename: "momentum_data_creation.ipynb"
    title: "Dataset Creation"
---

## Behavioral Momentum and Response Persistence Lab

Behavioral momentum theory (Nevin, 1992; Nevin & Shahan, 2011) provides a quantitative framework for understanding why behavior persists in the face of disruption. The central finding is that behavior maintained by higher rates of reinforcement is more resistant to change, analogous to how a more massive object in motion is harder to stop. A key strength of the theory is that this same idea is expressed across *different disruptors*, each with its own equation.

### Part 1: Prefeeding

You will work with data from a simulated multiple-schedule experiment in which subjects responded under both rich and lean reinforcement components. After stable baselines were established, responding was disrupted via prefeeding at graded amounts (0, 25, 50, 75, and 100g). Your task is to calculate proportion of baseline responding under each disruption level, fit the behavioral momentum equation to describe how responding decreases as a function of disruption intensity, and compare resistance to change across the two reinforcement contexts.

The key equation you will fit is:

log(Bx/B0) = -x * c / (r * S)

where Bx is the disrupted response rate, B0 is the baseline rate, x is the disruption level, c is sensitivity to disruption, r is the reinforcement rate in the component, and S captures the stimulus-reinforcer relation.

### Part 2: Other Disruptors

Prefeeding is only one way to disrupt responding. In this part you will fit two further forms from Nevin and colleagues to data where the disruptor is **extinction** and where it is **alternative reinforcement**. The required reading (Nevin et al., 1983) develops these forms; you will dig into the equations and fit them per condition.

- **Resistance to extinction:** Bt/B0 = 10^(-t * (c + d*r) / sqrt(r)), fit for c, d, r, and B0.
- **Alternative reinforcement:** Bx/B0 = 10^(-p * Ra / sqrt(r + Ra)), fit for p, r, and B0.

**Hints for Part 2:**

- **Parameter bounds matter.** For extinction: c and d should be positive, r should be > 0.1, and B0 should be a reasonable baseline rate. For alternative reinforcement: p should be positive, r should be > 0.1.
- **Initial guesses.** B0 should be close to the baseline response rate in the data; r is the reinforcement rate (look at the experimental conditions); c, d, and p are scaling parameters (start with small positive values).

Through these exercises you will gain hands-on experience with the quantitative tools behavioral momentum theory offers for predicting and interpreting response persistence across qualitatively different disruptors.
