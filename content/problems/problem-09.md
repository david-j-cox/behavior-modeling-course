---
id: 9
title: "Fitting the Hursh-Silberberg Exponential Demand Equation"
week: 4
difficulty: "Intermediate"
modelingSteps: [3, 5, 8]
tags: ["demand", "Hursh-Silberberg", "essential value", "exponential demand", "nonlinear fitting"]
---

A rat lever-presses for sucrose pellets on a series of fixed-ratio (FR) schedules. Each FR value represents the unit price $C$ (responses per pellet). The following data record the number of pellets consumed per session at each price:

| FR Price $C$ | Observed Consumption $Q$ (pellets/session) |
|---|---|
| 1 | 85 |
| 5 | 78 |
| 10 | 65 |
| 20 | 45 |
| 40 | 20 |
| 80 | 5 |
| 160 | 1 |

The Hursh and Silberberg (2008) exponential demand equation is:

$$\log Q = \log Q_0 + k\left(e^{-\alpha \cdot Q_0 \cdot C} - 1\right)$$

where $Q_0$ is the demand intensity (consumption at zero price), $\alpha$ is the rate of change in elasticity (the essential-value parameter), $k$ is the range of consumption in log units, and $C$ is price.

Assume nonlinear regression has yielded the following best-fit parameter estimates: $Q_0 = 88.5$, $\alpha = 0.00038$, $k = 2.2$.

**(a)** Describe the expected shape of the demand curve when plotting $\log Q$ as a function of $\log C$. What behavioral pattern does each region of the curve reflect?

**(b)** Using the best-fit parameters, compute the predicted $\log Q$ and predicted $Q$ at each of the seven FR prices. Present your results in a table.

**(c)** Compute the residual ($Q_{\text{obs}} - Q_{\text{pred}}$) at each price. Then compute the sum of squared residuals $\text{SS}_{res}$.

**(d)** Compute the essential value $EV = 1/(Q_0 \cdot \alpha \cdot k)$. Interpret what this value means in the context of demand for sucrose.

**(e)** The price at which maximal responding occurs is approximated by:

$$P_{\max} = \frac{1}{\alpha \cdot Q_0 \cdot k} \cdot \left(e^{-1}\right) \approx \frac{0.368}{\alpha \cdot Q_0 \cdot k}$$

Compute $P_{\max}$ and explain its behavioral significance. At prices below $P_{\max}$, is demand elastic or inelastic? What about above $P_{\max}$?
