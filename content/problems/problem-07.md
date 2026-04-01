---
id: 7
title: "Extinction as Exponential Decay"
week: 10
difficulty: "Advanced"
modelingSteps: [3, 5, 7, 8]
tags: ["extinction", "exponential decay", "ODE", "half-life", "model limitations"]
---

A researcher models the extinction of lever pressing in a rat using the first-order linear ODE:

$$\frac{dx}{dt} = -a \cdot x$$

where $x(t)$ is the response rate (responses/min) at time $t$ (minutes), $x(0) = 50$ responses/min, and $a = 0.2$/min.

**(a)** Solve this ODE analytically to obtain $x(t)$.

**(b)** Compute $x(t)$ at $t = 1, 2, 5, 10,$ and $20$ minutes. Present your results in a table.

**(c)** Find the half-life of responding — that is, the time $t_{1/2}$ at which $x(t_{1/2}) = \frac{1}{2} x(0)$.

**(d)** Discuss at least two limitations of this model as a description of real extinction data. What features of empirical extinction curves does this model fail to capture?
