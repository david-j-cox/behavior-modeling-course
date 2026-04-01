---
id: 3
---

## Solution: Fitting the Generalized Matching Equation

### (a) Compute Log Ratios

The generalized matching equation is:

$$\log\!\left(\frac{B_1}{B_2}\right) = a \cdot \log\!\left(\frac{R_1}{R_2}\right) + \log b$$

Let $y = \log(B_1/B_2)$ and $x = \log(R_1/R_2)$. We compute these for each condition:

**Condition 1:**

$$x_1 = \log\!\left(\frac{20}{40}\right) = \log(0.500) = -0.3010$$

$$y_1 = \log\!\left(\frac{40}{58}\right) = \log(0.6897) = -0.1612$$

**Condition 2:**

$$x_2 = \log\!\left(\frac{30}{30}\right) = \log(1.000) = 0.0000$$

$$y_2 = \log\!\left(\frac{55}{50}\right) = \log(1.100) = 0.0414$$

**Condition 3:**

$$x_3 = \log\!\left(\frac{45}{20}\right) = \log(2.250) = 0.3522$$

$$y_3 = \log\!\left(\frac{70}{35}\right) = \log(2.000) = 0.3010$$

**Condition 4:**

$$x_4 = \log\!\left(\frac{55}{15}\right) = \log(3.667) = 0.5643$$

$$y_4 = \log\!\left(\frac{80}{28}\right) = \log(2.857) = 0.4559$$

**Condition 5:**

$$x_5 = \log\!\left(\frac{35}{25}\right) = \log(1.400) = 0.1461$$

$$y_5 = \log\!\left(\frac{62}{45}\right) = \log(1.378) = 0.1392$$

**Summary table:**

| Condition | $x = \log(R_1/R_2)$ | $y = \log(B_1/B_2)$ |
|---|---|---|
| 1 | $-0.3010$ | $-0.1612$ |
| 2 | $0.0000$ | $0.0414$ |
| 3 | $0.3522$ | $0.3010$ |
| 4 | $0.5643$ | $0.4559$ |
| 5 | $0.1461$ | $0.1392$ |

### (b) Estimate Sensitivity and Bias via Least-Squares Regression

We need the slope $a$ and intercept $\log b$ from the linear regression $y = a \cdot x + \log b$.

**Compute the means:**

$$\bar{x} = \frac{-0.3010 + 0.0000 + 0.3522 + 0.5643 + 0.1461}{5} = \frac{0.7616}{5} = 0.1523$$

$$\bar{y} = \frac{-0.1612 + 0.0414 + 0.3010 + 0.4559 + 0.1392}{5} = \frac{0.7763}{5} = 0.1553$$

**Compute the slope $a$:**

$$a = \frac{\sum_{i=1}^{5}(x_i - \bar{x})(y_i - \bar{y})}{\sum_{i=1}^{5}(x_i - \bar{x})^2}$$

Compute each deviation and product:

| $i$ | $x_i - \bar{x}$ | $y_i - \bar{y}$ | $(x_i - \bar{x})(y_i - \bar{y})$ | $(x_i - \bar{x})^2$ |
|---|---|---|---|---|
| 1 | $-0.4533$ | $-0.3165$ | $0.14346$ | $0.20548$ |
| 2 | $-0.1523$ | $-0.1139$ | $0.01735$ | $0.02320$ |
| 3 | $0.1999$ | $0.1457$ | $0.02913$ | $0.03996$ |
| 4 | $0.4120$ | $0.3006$ | $0.12385$ | $0.16974$ |
| 5 | $-0.0062$ | $-0.0161$ | $0.00010$ | $0.00004$ |

$$\sum (x_i - \bar{x})(y_i - \bar{y}) = 0.14346 + 0.01735 + 0.02913 + 0.12385 + 0.00010 = 0.31389$$

$$\sum (x_i - \bar{x})^2 = 0.20548 + 0.02320 + 0.03996 + 0.16974 + 0.00004 = 0.43842$$

$$a = \frac{0.31389}{0.43842} = 0.716$$

**Compute the intercept $\log b$:**

$$\log b = \bar{y} - a \cdot \bar{x} = 0.1553 - 0.716 \times 0.1523 = 0.1553 - 0.1090 = 0.046$$

Therefore $b = 10^{0.046} = 1.112$.

### (c) Interpretation

**Sensitivity ($a = 0.716$):**

The sensitivity parameter measures how strongly the response ratio tracks the reinforcement ratio. A value of $a = 1.0$ indicates strict matching. The obtained value of $a = 0.716$ indicates **undermatching**: the pigeon's response ratios change less than proportionally with changes in the reinforcement ratio. This is the most common finding in matching research and may reflect incomplete discrimination between the two alternatives, changeover costs, or other factors that reduce sensitivity to the reinforcement contingency.

**Bias ($\log b = 0.046$, $b = 1.112$):**

The bias parameter reflects a constant preference for one alternative independent of the reinforcement ratio. A value of $\log b = 0$ (i.e., $b = 1$) would indicate no bias. The obtained value of $\log b = 0.046$ indicates a very slight bias toward Alternative 1 — the pigeon allocates slightly more responding to Alternative 1 than would be predicted from the reinforcement ratio alone. This small bias could reflect a minor position preference, a slight difference in response effort, or sampling variability.
