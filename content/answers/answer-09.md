---
id: 9
---

## Solution: Fitting the Hursh-Silberberg Exponential Demand Equation

### (a) Shape of the Demand Curve

When plotting $\log Q$ as a function of $\log C$, the exponential demand equation produces a characteristic curvilinear function with three distinct regions:

1. **Low prices (left portion):** The curve is relatively flat, indicating **inelastic demand**. Consumption decreases only slightly as price increases. The organism defends its consumption level, and total expenditure (responses) increases proportionally with price. This reflects the reinforcer functioning as a "necessity."

2. **Moderate prices (middle portion):** The curve begins to bend downward. This transitional zone contains $P_{\max}$, the price at which the organism's expenditure (total responding) reaches its maximum. At this inflection zone, demand transitions from inelastic to elastic.

3. **High prices (right portion):** The curve drops steeply, indicating **elastic demand**. Consumption falls rapidly with further price increases, and total expenditure declines. The cost of maintaining consumption has become prohibitive.

The overall shape is a negatively decelerating function in log-log coordinates, beginning near a horizontal asymptote at $\log Q_0$ and curving downward with increasing price.

### (b) Predicted Consumption at Each Price

The model is:

$$\log Q = \log Q_0 + k\left(e^{-\alpha \cdot Q_0 \cdot C} - 1\right)$$

With $Q_0 = 88.5$, $\alpha = 0.00038$, $k = 2.2$:

First, note that $\alpha \cdot Q_0 = 0.00038 \times 88.5 = 0.033630$ and $\log Q_0 = \log_{10}(88.5) = 1.9469$.

We compute the exponent $-\alpha \cdot Q_0 \cdot C$ for each price, then $e^{-\alpha \cdot Q_0 \cdot C}$, and finally $\log Q$:

**$C = 1$:**

$$-\alpha \cdot Q_0 \cdot C = -0.033630 \times 1 = -0.03363$$

$$e^{-0.03363} = 0.96693$$

$$\log Q = 1.9469 + 2.2(0.96693 - 1) = 1.9469 + 2.2(-0.03307) = 1.9469 - 0.07276 = 1.8741$$

$$Q_{\text{pred}} = 10^{1.8741} = 74.83$$

**$C = 5$:**

$$-\alpha \cdot Q_0 \cdot C = -0.033630 \times 5 = -0.16815$$

$$e^{-0.16815} = 0.84527$$

$$\log Q = 1.9469 + 2.2(0.84527 - 1) = 1.9469 + 2.2(-0.15473) = 1.9469 - 0.34040 = 1.6065$$

$$Q_{\text{pred}} = 10^{1.6065} = 40.40$$

**$C = 10$:**

$$-\alpha \cdot Q_0 \cdot C = -0.033630 \times 10 = -0.33630$$

$$e^{-0.33630} = 0.71441$$

$$\log Q = 1.9469 + 2.2(0.71441 - 1) = 1.9469 + 2.2(-0.28559) = 1.9469 - 0.62830 = 1.3186$$

$$Q_{\text{pred}} = 10^{1.3186} = 20.83$$

**$C = 20$:**

$$-\alpha \cdot Q_0 \cdot C = -0.033630 \times 20 = -0.67260$$

$$e^{-0.67260} = 0.51039$$

$$\log Q = 1.9469 + 2.2(0.51039 - 1) = 1.9469 + 2.2(-0.48961) = 1.9469 - 1.07714 = 0.8698$$

$$Q_{\text{pred}} = 10^{0.8698} = 7.41$$

**$C = 40$:**

$$-\alpha \cdot Q_0 \cdot C = -0.033630 \times 40 = -1.34520$$

$$e^{-1.34520} = 0.26050$$

$$\log Q = 1.9469 + 2.2(0.26050 - 1) = 1.9469 + 2.2(-0.73950) = 1.9469 - 1.62690 = 0.3200$$

$$Q_{\text{pred}} = 10^{0.3200} = 2.09$$

**$C = 80$:**

$$-\alpha \cdot Q_0 \cdot C = -0.033630 \times 80 = -2.69040$$

$$e^{-2.69040} = 0.06788$$

$$\log Q = 1.9469 + 2.2(0.06788 - 1) = 1.9469 + 2.2(-0.93212) = 1.9469 - 2.05067 = -0.1038$$

$$Q_{\text{pred}} = 10^{-0.1038} = 0.79$$

**$C = 160$:**

$$-\alpha \cdot Q_0 \cdot C = -0.033630 \times 160 = -5.38080$$

$$e^{-5.38080} = 0.00460$$

$$\log Q = 1.9469 + 2.2(0.00460 - 1) = 1.9469 + 2.2(-0.99540) = 1.9469 - 2.18988 = -0.2430$$

$$Q_{\text{pred}} = 10^{-0.2430} = 0.57$$

**Summary table:**

| $C$ | $-\alpha Q_0 C$ | $e^{-\alpha Q_0 C}$ | $\log Q_{\text{pred}}$ | $Q_{\text{pred}}$ | $Q_{\text{obs}}$ |
|---|---|---|---|---|---|
| 1 | $-0.0336$ | 0.9669 | 1.8741 | 74.83 | 85 |
| 5 | $-0.1682$ | 0.8453 | 1.6065 | 40.40 | 78 |
| 10 | $-0.3363$ | 0.7144 | 1.3186 | 20.83 | 65 |
| 20 | $-0.6726$ | 0.5104 | 0.8698 | 7.41 | 45 |
| 40 | $-1.3452$ | 0.2605 | 0.3200 | 2.09 | 20 |
| 80 | $-2.6904$ | 0.0679 | $-0.1038$ | 0.79 | 5 |
| 160 | $-5.3808$ | 0.0046 | $-0.2430$ | 0.57 | 1 |

**Note:** The predicted values are substantially lower than the observed values at every price. This indicates that the provided parameters ($Q_0 = 88.5$, $\alpha = 0.00038$, $k = 2.2$) produce a demand curve that drops off more steeply than the observed data. In practice, nonlinear regression software would find parameters that minimize the sum of squared residuals (typically on the $\log Q$ scale, not the raw $Q$ scale). The large residuals here illustrate that fitting is performed in log-transformed space; the parameters may provide a better fit to $\log Q_{\text{obs}}$ versus $\log Q_{\text{pred}}$ than to the raw values. Nevertheless, we proceed with the computation as specified.

### (c) Residuals and $\text{SS}_{res}$

The residual at each price is $Q_{\text{obs}} - Q_{\text{pred}}$:

| $C$ | $Q_{\text{obs}}$ | $Q_{\text{pred}}$ | Residual |
|---|---|---|---|
| 1 | 85 | 74.83 | $10.17$ |
| 5 | 78 | 40.40 | $37.60$ |
| 10 | 65 | 20.83 | $44.17$ |
| 20 | 45 | 7.41 | $37.59$ |
| 40 | 20 | 2.09 | $17.91$ |
| 80 | 5 | 0.79 | $4.21$ |
| 160 | 1 | 0.57 | $0.43$ |

$$\text{SS}_{res} = (10.17)^2 + (37.60)^2 + (44.17)^2 + (37.59)^2 + (17.91)^2 + (4.21)^2 + (0.43)^2$$

$$= 103.43 + 1413.76 + 1950.99 + 1413.01 + 320.77 + 17.72 + 0.18$$

$$= 5219.86$$

As noted above, this large $\text{SS}_{res}$ on the raw scale is expected because the exponential demand equation is typically fit by minimizing residuals in **log-transformed** space. If we instead compute residuals on the log scale:

| $C$ | $\log Q_{\text{obs}}$ | $\log Q_{\text{pred}}$ | Log Residual |
|---|---|---|---|
| 1 | 1.929 | 1.874 | $0.055$ |
| 5 | 1.892 | 1.607 | $0.285$ |
| 10 | 1.813 | 1.319 | $0.494$ |
| 20 | 1.653 | 0.870 | $0.783$ |
| 40 | 1.301 | 0.320 | $0.981$ |
| 80 | 0.699 | $-0.104$ | $0.803$ |
| 160 | 0.000 | $-0.243$ | $0.243$ |

$$\text{SS}_{res}^{(\log)} = 0.055^2 + 0.285^2 + 0.494^2 + 0.783^2 + 0.981^2 + 0.803^2 + 0.243^2$$

$$= 0.003 + 0.081 + 0.244 + 0.613 + 0.962 + 0.645 + 0.059 = 2.607$$

These residuals are still substantial, confirming that the given parameters do not represent an optimal fit to these particular data. A true best-fit solution would yield smaller residuals. The exercise illustrates the mechanics of computing predictions and evaluating fit.

### (d) Essential Value

The essential value is defined as:

$$EV = \frac{1}{Q_0 \cdot \alpha \cdot k}$$

Substituting the parameter values:

$$EV = \frac{1}{88.5 \times 0.00038 \times 2.2}$$

First compute the denominator:

$$88.5 \times 0.00038 = 0.033630$$

$$0.033630 \times 2.2 = 0.073986$$

$$EV = \frac{1}{0.073986} = 13.52$$

**Interpretation:** The essential value quantifies how essential or valuable the reinforcer is to the organism. A higher $EV$ means the organism is willing to pay more (in responses) before consumption begins to drop sharply. An $EV$ of 13.52 for sucrose indicates a moderate level of reinforcer value. For comparison, essential commodities like food for food-restricted animals typically yield higher $EV$ values, while less essential reinforcers (e.g., novel stimuli) yield lower values. The essential value is inversely related to $\alpha$: a smaller $\alpha$ means that demand persists across higher prices before becoming elastic, indicating a more essential reinforcer.

### (e) $P_{\max}$ and Its Behavioral Significance

The price at maximum expenditure is:

$$P_{\max} = \frac{1}{\alpha \cdot Q_0 \cdot k} \cdot e^{-1} \approx \frac{0.368}{\alpha \cdot Q_0 \cdot k}$$

We already computed $\alpha \cdot Q_0 \cdot k = 0.073986$:

$$P_{\max} = \frac{0.368}{0.073986} = 4.97$$

So $P_{\max} \approx 5.0$, meaning that the maximum total responding (expenditure = $Q \times C$) is predicted to occur at approximately FR 5.

**Behavioral significance:** $P_{\max}$ is the price at which the organism works the hardest (emits the most total responses in a session). It marks the transition point between inelastic and elastic demand:

- **Below $P_{\max}$ (e.g., FR 1):** Demand is **inelastic**. As price increases, consumption decreases only slightly, and total responding (expenditure) increases. The organism compensates for higher prices by working more to maintain consumption near $Q_0$.

- **Above $P_{\max}$ (e.g., FR 10, 20, 40, ...):** Demand is **elastic**. As price increases, consumption decreases rapidly enough that total responding actually declines. The cost of maintaining consumption has become too high, and the organism begins to "give up."

$P_{\max}$ is a clinically and experimentally useful metric because it identifies the price at which a reinforcer's motivating efficacy begins to break down. For substance abuse research, commodities with high $P_{\max}$ values are those for which organisms will tolerate extreme costs before reducing consumption — a hallmark of addiction.
