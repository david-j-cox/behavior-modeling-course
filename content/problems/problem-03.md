---
id: 3
title: "Fitting the Generalized Matching Equation"
week: 2
difficulty: "Intermediate"
modelingSteps: [3, 5, 6]
tags: ["matching law", "generalized matching", "sensitivity", "bias", "linear regression"]
---

A pigeon is exposed to a concurrent VI VI schedule across five conditions. The response counts ($B_1$, $B_2$) and reinforcement counts ($R_1$, $R_2$) for each condition are:

| Condition | $B_1$ | $B_2$ | $R_1$ | $R_2$ |
|-----------|--------|--------|--------|--------|
| 1 | 40 | 58 | 20 | 40 |
| 2 | 55 | 50 | 30 | 30 |
| 3 | 70 | 35 | 45 | 20 |
| 4 | 80 | 28 | 55 | 15 |
| 5 | 62 | 45 | 35 | 25 |

The generalized matching equation is:

$$\log\!\left(\frac{B_1}{B_2}\right) = a \cdot \log\!\left(\frac{R_1}{R_2}\right) + \log b$$

**(a)** Compute $\log(B_1/B_2)$ and $\log(R_1/R_2)$ for each condition (use base-10 logarithms).

**(b)** Using these values, estimate the sensitivity parameter $a$ (slope) and bias parameter $\log b$ (intercept) via least-squares linear regression.

**(c)** Interpret the values of $a$ and $\log b$. What do they tell you about this pigeon's behavior?
