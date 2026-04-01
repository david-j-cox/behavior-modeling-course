---
id: 6
title: "Logistic Acquisition Model"
week: 10
difficulty: "Intermediate"
modelingSteps: [3, 5, 8]
tags: ["logistic model", "ODE", "equilibria", "stability", "acquisition"]
---

A researcher models the acquisition of lever pressing in a rat using the logistic ordinary differential equation (ODE):

$$\frac{dx}{dt} = r \cdot x \cdot \left(1 - \frac{x}{K}\right)$$

where $x(t)$ is the response rate (responses/min) at time $t$ (minutes), $K = 40$ responses/min is the carrying capacity, $r = 0.10$/min is the intrinsic growth rate, and $x_0 = 3$ responses/min is the initial response rate.

**(a)** Write the analytical (closed-form) solution $x(t)$ for this ODE with the given initial condition.

**(b)** Compute $x(t)$ at $t = 5, 15, 30,$ and $60$ minutes.

**(c)** Find all equilibria of the ODE and determine whether each is stable or unstable. Justify your answers.
