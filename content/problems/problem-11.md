---
id: 11
title: "Multilevel Model for Nested Behavioral Data"
week: 9
difficulty: "Intermediate"
modelingSteps: [3, 5, 8]
tags: ["multilevel model", "ICC", "nested data", "variance components", "VI schedule"]
---

Five participants (P1--P5) each complete 6 sessions on a variable-interval 30-s (VI-30s) schedule of reinforcement. The response rates (responses per minute) for each participant across sessions are:

| Session | P1 | P2 | P3 | P4 | P5 |
|---|---|---|---|---|---|
| 1 | 22 | 41 | 15 | 33 | 28 |
| 2 | 24 | 38 | 17 | 31 | 30 |
| 3 | 23 | 40 | 14 | 34 | 27 |
| 4 | 25 | 42 | 16 | 32 | 29 |
| 5 | 24 | 39 | 18 | 33 | 31 |
| 6 | 22 | 40 | 16 | 33 | 29 |

**(a)** Compute the mean response rate for each participant and the grand mean across all 30 observations.

**(b)** Compute the between-participant variance $\tau^2$ (the variance of the five participant means around the grand mean) and the within-participant variance $\sigma^2$ (the average of each participant's session-level variance). Use the population variance formula (dividing by $N$, not $N-1$) for $\tau^2$ and the sample variance formula (dividing by $n-1$) for each participant's within-person variance, then average those.

**(c)** Compute the intraclass correlation coefficient:

$$\text{ICC} = \frac{\tau^2}{\tau^2 + \sigma^2}$$

Interpret this value. What does a high ICC imply about the structure of these data?

**(d)** Suppose a researcher ignores the nesting and simply computes a single pooled mean and pooled variance across all 30 observations. Explain why this would be misleading. What specific inferential problems would arise?

**(e)** Now suppose the researcher wants to test whether response rate changes across sessions (i.e., whether there is a linear trend over time). Write the two-level multilevel model equations. Define all terms and explain the role of each level.
