---
id: 11
---

## Solution: Multilevel Model for Nested Behavioral Data

### (a) Participant Means and Grand Mean

**Participant means** (responses per minute):

**P1:** $\bar{Y}_1 = \frac{22 + 24 + 23 + 25 + 24 + 22}{6} = \frac{140}{6} = 23.333$

**P2:** $\bar{Y}_2 = \frac{41 + 38 + 40 + 42 + 39 + 40}{6} = \frac{240}{6} = 40.000$

**P3:** $\bar{Y}_3 = \frac{15 + 17 + 14 + 16 + 18 + 16}{6} = \frac{96}{6} = 16.000$

**P4:** $\bar{Y}_4 = \frac{33 + 31 + 34 + 32 + 33 + 33}{6} = \frac{196}{6} = 32.667$

**P5:** $\bar{Y}_5 = \frac{28 + 30 + 27 + 29 + 31 + 29}{6} = \frac{174}{6} = 29.000$

**Grand mean** (across all 30 observations):

$$\bar{Y}_{..} = \frac{140 + 240 + 96 + 196 + 174}{30} = \frac{846}{30} = 28.200$$

| Participant | Mean Response Rate |
|---|---|
| P1 | 23.333 |
| P2 | 40.000 |
| P3 | 16.000 |
| P4 | 32.667 |
| P5 | 29.000 |
| **Grand Mean** | **28.200** |

### (b) Between-Participant Variance ($\tau^2$) and Within-Participant Variance ($\sigma^2$)

**Between-participant variance** $\tau^2$ (using the population variance formula, dividing by $N = 5$):

$$\tau^2 = \frac{1}{N}\sum_{j=1}^{N}(\bar{Y}_j - \bar{Y}_{..})^2$$

Computing each squared deviation:

$$(\bar{Y}_1 - \bar{Y}_{..})^2 = (23.333 - 28.200)^2 = (-4.867)^2 = 23.688$$

$$(\bar{Y}_2 - \bar{Y}_{..})^2 = (40.000 - 28.200)^2 = (11.800)^2 = 139.240$$

$$(\bar{Y}_3 - \bar{Y}_{..})^2 = (16.000 - 28.200)^2 = (-12.200)^2 = 148.840$$

$$(\bar{Y}_4 - \bar{Y}_{..})^2 = (32.667 - 28.200)^2 = (4.467)^2 = 19.954$$

$$(\bar{Y}_5 - \bar{Y}_{..})^2 = (29.000 - 28.200)^2 = (0.800)^2 = 0.640$$

$$\tau^2 = \frac{23.688 + 139.240 + 148.840 + 19.954 + 0.640}{5} = \frac{332.362}{5} = 66.472$$

**Within-participant variance** $\sigma^2$ (compute each participant's sample variance using $n - 1 = 5$, then average):

**P1:** Deviations from 23.333: $(-1.333, 0.667, -0.333, 1.667, 0.667, -1.333)$

$$s_1^2 = \frac{1.778 + 0.444 + 0.111 + 2.778 + 0.444 + 1.778}{5} = \frac{7.333}{5} = 1.467$$

**P2:** Deviations from 40.000: $(1, -2, 0, 2, -1, 0)$

$$s_2^2 = \frac{1 + 4 + 0 + 4 + 1 + 0}{5} = \frac{10}{5} = 2.000$$

**P3:** Deviations from 16.000: $(-1, 1, -2, 0, 2, 0)$

$$s_3^2 = \frac{1 + 1 + 4 + 0 + 4 + 0}{5} = \frac{10}{5} = 2.000$$

**P4:** Deviations from 32.667: $(0.333, -1.667, 1.333, -0.667, 0.333, 0.333)$

$$s_4^2 = \frac{0.111 + 2.778 + 1.778 + 0.444 + 0.111 + 0.111}{5} = \frac{5.333}{5} = 1.067$$

**P5:** Deviations from 29.000: $(-1, 1, -2, 0, 2, 0)$

$$s_5^2 = \frac{1 + 1 + 4 + 0 + 4 + 0}{5} = \frac{10}{5} = 2.000$$

**Average within-participant variance:**

$$\sigma^2 = \frac{s_1^2 + s_2^2 + s_3^2 + s_4^2 + s_5^2}{5} = \frac{1.467 + 2.000 + 2.000 + 1.067 + 2.000}{5} = \frac{8.534}{5} = 1.707$$

**Summary:**

| Variance Component | Symbol | Value |
|---|---|---|
| Between-participant | $\tau^2$ | 66.472 |
| Within-participant | $\sigma^2$ | 1.707 |

### (c) Intraclass Correlation Coefficient

$$\text{ICC} = \frac{\tau^2}{\tau^2 + \sigma^2} = \frac{66.472}{66.472 + 1.707} = \frac{66.472}{68.179} = 0.975$$

**Interpretation:** The ICC of 0.975 indicates that **97.5% of the total variance in response rates is attributable to differences between participants**, and only 2.5% is due to within-participant session-to-session fluctuation.

This is an extremely high ICC, meaning:

1. **Participants differ enormously from one another** in their baseline response rates on the VI-30s schedule (ranging from about 16 to 40 responses/min).
2. **Each participant is highly consistent across sessions** (within-person variability is small).
3. Observations within the same participant are very strongly correlated — knowing which participant generated a data point tells you almost everything about the expected response rate.

An ICC this high strongly justifies using a multilevel model, because the assumption of independence across all 30 observations (required by ordinary regression) is grossly violated.

### (d) Why a Pooled Average Would Be Misleading

If a researcher ignores the nesting and computes a single pooled mean and variance across all 30 observations, several problems arise:

**1. Inflated total variance and misleading summary statistics.** The pooled variance would combine between-participant and within-participant variability into a single number. The pooled variance would be approximately:

$$s_{\text{pooled}}^2 \approx \tau^2 + \sigma^2 = 66.472 + 1.707 = 68.179$$

This gives a standard deviation of $\sqrt{68.179} \approx 8.26$, which grossly overstates how variable any single participant's behavior is. Each participant's SD is only about $\sqrt{1.707} \approx 1.31$.

**2. Pseudoreplication and incorrect standard errors.** With 30 observations treated as independent, the standard error of the grand mean would be estimated as $8.26 / \sqrt{30} = 1.51$. But the 6 observations within each participant are not independent — they are essentially replicates of that participant's rate. The **effective sample size** for estimating the population mean is closer to $N = 5$ (participants), not $n = 30$ (observations). The correct standard error should be based on the between-participant variability: $\sqrt{66.472/5} = \sqrt{13.294} = 3.65$. The naive analysis underestimates the standard error by a factor of about 2.4, leading to confidence intervals that are far too narrow and $p$-values that are far too small.

**3. Inflated Type I error.** Because standard errors are underestimated, hypothesis tests will reject the null hypothesis too often. The nominal $\alpha = 0.05$ test may have an actual Type I error rate far exceeding 5%.

**4. Loss of substantively important information.** The large individual differences ($\tau^2 = 66.47$) are scientifically interesting — they reflect genuine variation in how different organisms respond on a VI schedule. A pooled analysis obscures this structure entirely.

### (e) Multilevel Model with Session-Level Predictor

To test whether response rate changes linearly across sessions, we write a two-level model where sessions (Level 1) are nested within participants (Level 2).

**Level 1 (within-participant):**

$$Y_{ij} = \beta_{0j} + \beta_{1j}(\text{Session}_{ij}) + e_{ij}$$

where:
- $Y_{ij}$ is the response rate for participant $j$ in session $i$
- $\beta_{0j}$ is participant $j$'s intercept (expected response rate at session 0, or session 1 if session is centered)
- $\beta_{1j}$ is participant $j$'s slope (the per-session change in response rate)
- $\text{Session}_{ij}$ is the session number (coded 1 through 6, or centered as $0, 1, 2, 3, 4, 5$)
- $e_{ij} \sim N(0, \sigma^2)$ is the within-participant residual

**Level 2 (between-participant):**

$$\beta_{0j} = \gamma_{00} + u_{0j}$$

$$\beta_{1j} = \gamma_{10} + u_{1j}$$

where:
- $\gamma_{00}$ is the **fixed-effect intercept** — the average response rate across participants at the reference session
- $\gamma_{10}$ is the **fixed-effect slope** — the average linear trend across participants (this is the parameter of primary interest for testing whether response rates change over sessions)
- $u_{0j} \sim N(0, \tau_{00}^2)$ is the random intercept for participant $j$ — the deviation of participant $j$'s baseline rate from the grand average
- $u_{1j} \sim N(0, \tau_{11}^2)$ is the random slope for participant $j$ — the deviation of participant $j$'s trend from the average trend

The random effects are assumed to follow a multivariate normal distribution:

$$\begin{pmatrix} u_{0j} \\ u_{1j} \end{pmatrix} \sim N\left(\begin{pmatrix} 0 \\ 0 \end{pmatrix}, \begin{pmatrix} \tau_{00}^2 & \tau_{01} \\ \tau_{01} & \tau_{11}^2 \end{pmatrix}\right)$$

where $\tau_{01}$ is the covariance between random intercepts and random slopes.

**Combined (reduced-form) equation:**

Substituting the Level 2 equations into Level 1:

$$Y_{ij} = \gamma_{00} + \gamma_{10}(\text{Session}_{ij}) + u_{0j} + u_{1j}(\text{Session}_{ij}) + e_{ij}$$

**Role of each level:**

- **Level 1** captures the within-participant trajectory over sessions. It allows each participant to have their own intercept and slope, modeling the session-by-session variation in response rate.
- **Level 2** models the between-participant variation in those intercepts and slopes. It decomposes each participant's intercept and slope into a population average (fixed effect) plus a participant-specific deviation (random effect).

**Testing the session trend:** The hypothesis that response rate does not change over sessions corresponds to $H_0: \gamma_{10} = 0$. This can be tested using a $t$-test or likelihood ratio test. The multilevel model correctly accounts for the non-independence of repeated sessions within participants, yielding valid standard errors and $p$-values. Based on the data in this problem, where each participant's rates appear relatively stable across sessions, we would expect $\gamma_{10}$ to be close to zero.
