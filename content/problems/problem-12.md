---
id: 12
title: "Building a DRA Model from Scratch"
week: 7
difficulty: "Advanced"
modelingSteps: [1, 2, 3, 4, 5, 6]
tags: ["model construction", "DRA", "differential equations", "flow diagram", "dimensional analysis"]
---

A clinic implements Differential Reinforcement of Alternative behavior (DRA) for a client whose problem behavior is maintained by attention. Currently, problem behavior occurs at $x_0 = 8$ episodes/hour and the alternative behavior (manding for attention) occurs at $y_0 = 2$ episodes/hour.

The treatment works as follows: attention is withheld for problem behavior (extinction) and delivered contingent on the alternative behavior (reinforcement). Under these contingencies, problem behavior decays at a rate proportional to its current level, and the alternative behavior grows at a rate proportional to its current level but is bounded by a carrying capacity.

The proposed differential equations are:

$$\frac{dx}{dt} = -\delta \cdot x$$

$$\frac{dy}{dt} = \rho \cdot y \cdot \left(1 - \frac{y}{K}\right)$$

where $x(t)$ is problem behavior rate (episodes/hour), $y(t)$ is alternative behavior rate (episodes/hour), $\delta$ is the decay rate constant, $\rho$ is the growth rate constant, and $K$ is the carrying capacity for the alternative behavior.

**(a)** Identify the state variables, parameters, independent variable, and dependent variables in this model. Draw a flow diagram (stock-and-flow) showing how each behavior changes over time.

**(b)** Derive or justify the two differential equations above. Explain the biological/behavioral rationale for each term.

**(c)** State at least four assumptions embedded in this model.

**(d)** Check the dimensional consistency of both differential equations. Show that the units on the left-hand side match the units on the right-hand side for each equation.

**(e)** Using the parameter values $\delta = 0.15 \text{ hr}^{-1}$, $\rho = 0.30 \text{ hr}^{-1}$, and $K = 12$ episodes/hour, solve for $x(t)$ analytically. Then find the equilibria of the $y$ equation and determine their stability.

**(f)** Using your solution from part (e), predict at what time problem behavior drops below 1 episode/hour. Interpret this result in clinical terms.
