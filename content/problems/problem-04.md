---
id: 4
title: "Fitting Mazur's Hyperbolic Discounting Model"
week: 3
difficulty: "Intermediate"
modelingSteps: [3, 5, 8]
tags: ["delay discounting", "hyperbolic model", "Mazur", "nonlinear fitting"]
---

A participant completes a delay discounting task with a delayed amount of $A = \$100$. The indifference points (the immediate amount judged equivalent to the delayed reward) at five delays are:

| Delay $D$ (days) | Indifference Point $V$ (\$) |
|---|---|
| 1 | 95 |
| 7 | 75 |
| 30 | 50 |
| 90 | 25 |
| 365 | 10 |

Mazur's hyperbolic discounting model is:

$$V = \frac{A}{1 + kD}$$

**(a)** For each delay, solve the equation for $k$ and compute the implied value of $k$.

**(b)** These five estimates of $k$ will not be identical. Explain why, and describe a strategy for obtaining a single best-fitting estimate of $k$.

**(c)** Using nonlinear least squares (or a similar approach), estimate the best-fitting $k$. Show the predicted $V$ at each delay and the residuals.

**(d)** Interpret the value of $k$ in behavioral terms.
