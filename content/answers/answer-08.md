---
id: 8
---

## Solution: Comparing Discounting Models with AIC

### (a) Compute AIC for Each Model

The formula is:

$$\text{AIC} = -2\ln\mathcal{L} + 2p$$

where $\ln\mathcal{L}$ is the log-likelihood and $p$ is the number of free parameters.

**Model A (hyperbolic, $p = 1$):**

$$\text{AIC}_A = -2(-18.2) + 2(1) = 36.4 + 2 = 38.4$$

**Model B (exponential, $p = 1$):**

$$\text{AIC}_B = -2(-22.7) + 2(1) = 45.4 + 2 = 47.4$$

**Model C (hyperboloid, $p = 2$):**

$$\text{AIC}_C = -2(-16.5) + 2(2) = 33.0 + 4 = 37.0$$

### (b) Rank the Models

| Rank | Model | AIC |
|---|---|---|
| 1 (best) | C (hyperboloid) | 37.0 |
| 2 | A (hyperbolic) | 38.4 |
| 3 (worst) | B (exponential) | 47.4 |

### (c) Compute $\Delta$AIC Values

The $\Delta$AIC is the difference between each model's AIC and the minimum AIC:

$$\Delta\text{AIC}_i = \text{AIC}_i - \text{AIC}_{\min}$$

$$\text{AIC}_{\min} = 37.0 \quad (\text{Model C})$$

| Model | AIC | $\Delta$AIC |
|---|---|---|
| C (hyperboloid) | 37.0 | $37.0 - 37.0 = 0.0$ |
| A (hyperbolic) | 38.4 | $38.4 - 37.0 = 1.4$ |
| B (exponential) | 47.4 | $47.4 - 37.0 = 10.4$ |

### (d) Interpretation

The conventional guidelines for interpreting $\Delta$AIC (Burnham & Anderson, 2002) are:

- $\Delta\text{AIC} < 2$: **Substantial support** — the model is competitive with the best model.
- $2 \leq \Delta\text{AIC} \leq 10$: **Some support**, but considerably less than the best model.
- $\Delta\text{AIC} > 10$: **Essentially no support** — the model can be ruled out.

Applying these guidelines:

**Model C (hyperboloid, $\Delta$AIC = 0.0):** This is the best-fitting model by AIC. It provides the best balance of goodness-of-fit and parsimony.

**Model A (hyperbolic, $\Delta$AIC = 1.4):** With $\Delta$AIC $< 2$, Model A has **substantial support** and cannot be meaningfully distinguished from Model C based on these data. Despite having a lower log-likelihood ($-18.2$ vs. $-16.5$), its advantage of having one fewer parameter nearly offsets the difference in fit. Given that Models A and C are essentially tied, the principle of parsimony might favor the simpler Model A.

**Model B (exponential, $\Delta$AIC = 10.4):** With $\Delta$AIC $> 10$, Model B has **essentially no support** relative to the best model. The exponential discounting function provides a substantially worse fit to these data, and this poor fit is not offset by any advantage in parsimony (it has the same number of parameters as Model A). Model B can be confidently ruled out.

**Summary:** The data support hyperbolic-family models (A and C) over the exponential model (B). The extra parameter in the hyperboloid model provides only a modest improvement in fit. For these data, either the hyperbolic or hyperboloid model would be a defensible choice.
