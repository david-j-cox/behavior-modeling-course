---
id: 4
---

## Solution: Fitting Mazur's Hyperbolic Discounting Model

### (a) Compute Implied $k$ at Each Delay

Starting from Mazur's model:

$$V = \frac{A}{1 + kD}$$

Solving for $k$:

$$V(1 + kD) = A$$

$$1 + kD = \frac{A}{V}$$

$$k = \frac{A/V - 1}{D} = \frac{A - V}{V \cdot D}$$

Now compute $k$ for each delay with $A = 100$:

**Delay $D = 1$ day, $V = 95$:**

$$k = \frac{100 - 95}{95 \times 1} = \frac{5}{95} = 0.0526 \text{ day}^{-1}$$

**Delay $D = 7$ days, $V = 75$:**

$$k = \frac{100 - 75}{75 \times 7} = \frac{25}{525} = 0.0476 \text{ day}^{-1}$$

**Delay $D = 30$ days, $V = 50$:**

$$k = \frac{100 - 50}{50 \times 30} = \frac{50}{1500} = 0.0333 \text{ day}^{-1}$$

**Delay $D = 90$ days, $V = 25$:**

$$k = \frac{100 - 25}{25 \times 90} = \frac{75}{2250} = 0.0333 \text{ day}^{-1}$$

**Delay $D = 365$ days, $V = 10$:**

$$k = \frac{100 - 10}{10 \times 365} = \frac{90}{3650} = 0.0247 \text{ day}^{-1}$$

**Summary:**

| $D$ (days) | $V$ (\$) | Implied $k$ (day$^{-1}$) |
|---|---|---|
| 1 | 95 | 0.0526 |
| 7 | 75 | 0.0476 |
| 30 | 50 | 0.0333 |
| 90 | 25 | 0.0333 |
| 365 | 10 | 0.0247 |

### (b) Why the Estimates Differ

The five values of $k$ are not identical because each estimate is derived from a single data point, and:

1. **Measurement noise:** Each indifference point contains random variability from the participant's choices.
2. **Model misspecification:** If the data do not perfectly follow a hyperbolic function, different delays will imply different $k$ values. The systematic decrease in implied $k$ with increasing delay may suggest that a two-parameter model (e.g., the hyperboloid $V = A/(1+kD)^s$) would provide a better fit.

**Strategy for a single estimate:** Use **nonlinear least-squares regression** to find the value of $k$ that minimizes the sum of squared residuals:

$$\text{SS}_{res} = \sum_{i=1}^{5}\left(V_i - \frac{A}{1 + kD_i}\right)^2$$

### (c) Best-Fitting $k$ via Nonlinear Least Squares

We seek the $k$ that minimizes $\text{SS}_{res}$. The median of the individual estimates ($k \approx 0.0333$) provides a reasonable starting point. Through iterative optimization (e.g., grid search or gradient descent), we find:

$$k^* \approx 0.035 \text{ day}^{-1}$$

**Predicted values and residuals at $k = 0.035$:**

| $D$ (days) | Observed $V$ | $\hat{V} = \frac{100}{1 + 0.035D}$ | Residual ($V - \hat{V}$) |
|---|---|---|---|
| 1 | 95 | $\frac{100}{1.035} = 96.62$ | $-1.62$ |
| 7 | 75 | $\frac{100}{1.245} = 80.32$ | $-5.32$ |
| 30 | 50 | $\frac{100}{2.050} = 48.78$ | $1.22$ |
| 90 | 25 | $\frac{100}{4.150} = 24.10$ | $0.90$ |
| 365 | 10 | $\frac{100}{13.775} = 7.26$ | $2.74$ |

$$\text{SS}_{res} = (-1.62)^2 + (-5.32)^2 + (1.22)^2 + (0.90)^2 + (2.74)^2$$

$$= 2.62 + 28.30 + 1.49 + 0.81 + 7.51 = 40.73$$

The largest residual occurs at $D = 7$, where the model overpredicts the indifference point. This pattern is consistent with the systematic trend in implied $k$ values noted in part (b).

### (d) Interpretation

The parameter $k = 0.035 \text{ day}^{-1}$ is the **discount rate**. It quantifies how rapidly the subjective value of a reward declines as the delay to receiving it increases.

- A **larger** $k$ indicates steeper discounting — the individual is more impulsive, strongly preferring immediate over delayed rewards.
- A **smaller** $k$ indicates shallower discounting — the individual is more patient.

For this participant, $k = 0.035$ means that a reward delayed by $1/k \approx 29$ days would be valued at half of its face value. This is a moderate level of discounting. For comparison, clinical populations with substance use disorders typically show $k$ values an order of magnitude larger, while non-clinical adults often show $k$ values in the range of 0.01 to 0.05 day$^{-1}$ for monetary rewards of this size.
