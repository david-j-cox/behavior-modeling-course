---
id: 15
---

## Solution: Dynamical Systems Meet Model Comparison

### (a) Static Model — Matching Law Equilibrium

Under strict matching ($a = 1$, $\log\,b = 0$), the generalized matching law gives:

$$\log\left(\frac{B_1}{B_2}\right) = 1 \cdot \log\left(\frac{R_1}{R_2}\right) + 0 = \log(4)$$

Therefore:

$$\frac{B_1}{B_2} = 4$$

Converting to a proportion:

$$p^* = \frac{B_1}{B_1 + B_2} = \frac{4}{4 + 1} = \frac{4}{5} = 0.80$$

The static model predicts $p(t) = 0.80$ for every block. The RSS is computed by summing the squared deviations of each observed data point from 0.80:

| Block | Observed $p(t)$ | Residual $(p(t) - 0.80)$ | Residual$^2$ |
|:-----:|:---------------:|:-------------------------:|:------------:|
| 1  | 0.50 | $-0.30$ | 0.0900 |
| 2  | 0.52 | $-0.28$ | 0.0784 |
| 3  | 0.55 | $-0.25$ | 0.0625 |
| 4  | 0.58 | $-0.22$ | 0.0484 |
| 5  | 0.61 | $-0.19$ | 0.0361 |
| 6  | 0.64 | $-0.16$ | 0.0256 |
| 7  | 0.67 | $-0.13$ | 0.0169 |
| 8  | 0.69 | $-0.11$ | 0.0121 |
| 9  | 0.71 | $-0.09$ | 0.0081 |
| 10 | 0.73 | $-0.07$ | 0.0049 |
| 11 | 0.74 | $-0.06$ | 0.0036 |
| 12 | 0.75 | $-0.05$ | 0.0025 |
| 13 | 0.76 | $-0.04$ | 0.0016 |
| 14 | 0.77 | $-0.03$ | 0.0009 |
| 15 | 0.78 | $-0.02$ | 0.0004 |
| 16 | 0.78 | $-0.02$ | 0.0004 |
| 17 | 0.79 | $-0.01$ | 0.0001 |
| 18 | 0.79 | $-0.01$ | 0.0001 |
| 19 | 0.80 | $0.00$  | 0.0000 |
| 20 | 0.80 | $0.00$  | 0.0000 |

$$\text{RSS}_{\text{static}} = 0.0900 + 0.0784 + 0.0625 + 0.0484 + 0.0361 + 0.0256 + 0.0169 + 0.0121 + 0.0081 + 0.0049 + 0.0036 + 0.0025 + 0.0016 + 0.0009 + 0.0004 + 0.0004 + 0.0001 + 0.0001 + 0.0000 + 0.0000$$

$$\text{RSS}_{\text{static}} = 0.3926$$

The static model captures the final equilibrium accurately but misses the entire acquisition trajectory. Nearly all of its error comes from the early blocks where the organism has not yet shifted its responding toward the richer alternative.

### (b) Dynamical Model — Logistic ODE

The proposed ODE is:

$$\frac{dp}{dt} = r \cdot p(1 - p)\left(\frac{p^* - p}{p^*(1 - p^*)}\right)$$

**Role of each factor:**

- $r$: The rate parameter controlling how quickly the organism's preference shifts. Larger $r$ means faster acquisition.
- $p(1-p)$: The logistic growth factor. This ensures the rate of change is fastest at intermediate values of $p$ and slows as $p$ approaches 0 or 1. It respects the natural boundaries of a proportion (0 and 1).
- $(p^* - p)$: The "error" or distance from equilibrium. When $p < p^*$, this term is positive, driving $p$ upward. When $p > p^*$, it is negative, driving $p$ downward. At $p = p^*$, the derivative is zero — the system has reached its equilibrium.
- $1/(p^*(1-p^*))$: A normalization constant that scales the dynamics so that $r$ is interpretable regardless of the location of $p^*$. For $p^* = 0.80$, this equals $1/(0.80 \times 0.20) = 6.25$.

**Fixed points:** Setting $dp/dt = 0$:

$$r \cdot p(1-p)\left(\frac{p^* - p}{p^*(1-p^*)}\right) = 0$$

Since $r \neq 0$ and $1/(p^*(1-p^*)) \neq 0$, the solutions are:

1. $p = 0$ (extinction — no responding on alternative 1)
2. $p = 1$ (exclusive preference for alternative 1)
3. $p = p^* = 0.80$ (matching equilibrium)

**Stability analysis:** Consider small perturbations around each fixed point. Define $f(p) = r \cdot p(1-p)(p^* - p)/(p^*(1-p^*))$. A fixed point $\bar{p}$ is stable if $f'(\bar{p}) < 0$.

Expanding $f(p) = \frac{r}{p^*(1-p^*)} \left[ p(1-p)(p^* - p) \right]$:

The cubic inside the brackets is $p(1-p)(p^*-p) = p^* p - p^* p^2 - p^2 + p^3$.

Taking the derivative with respect to $p$:

$$\frac{d}{dp}\left[p(1-p)(p^*-p)\right] = (1-p)(p^*-p) + p(-1)(p^*-p) + p(1-p)(-1)$$

$$= (1-p)(p^*-p) - p(p^*-p) - p(1-p)$$

Evaluating at each fixed point:

- At $p = 0$: $(1)(p^*) - 0 - 0 = p^* = 0.80 > 0$. Since $f'(0) > 0$, $p = 0$ is **unstable**.
- At $p = 1$: $0 - 0 - (1)(0) = 0$. We need higher-order analysis, but approaching from below, $f(p)$ is negative for $p$ slightly less than 1 when $p > p^*$, so $p = 1$ is **unstable** (trajectories move away from 1 back toward $p^*$).
- At $p = p^* = 0.80$: $(1-0.80)(0) - 0.80(0) - 0.80(0.20) = -0.16 < 0$. Since $f'(p^*) < 0$, $p = p^*$ is **stable**.

The matching equilibrium is the only stable fixed point for $p \in (0,1)$. Regardless of the starting point (provided $0 < p(1) < 1$), the system converges to $p^*$.

### (c) Forward-Euler Numerical Solution

Using $p^* = 0.80$, $r = 0.30$, $\Delta t = 1$, and the normalization constant $1/(p^*(1-p^*)) = 1/(0.16) = 6.25$:

$$p(t+1) = p(t) + 0.30 \times p(t)(1-p(t)) \times \frac{0.80 - p(t)}{0.16}$$

Starting from $p(1) = 0.50$:

**Block 1:** $p(1) = 0.50$

$\Delta p = 0.30 \times 0.50 \times 0.50 \times \frac{0.30}{0.16} = 0.30 \times 0.25 \times 1.875 = 0.1406$

$p(2) = 0.50 + 0.1406 = 0.64$

**Block 2:** $p(2) = 0.64$

$\Delta p = 0.30 \times 0.64 \times 0.36 \times \frac{0.16}{0.16} = 0.30 \times 0.2304 \times 1.00 = 0.0691$

$p(3) = 0.64 + 0.0691 = 0.71$

**Block 3:** $p(3) = 0.71$

$\Delta p = 0.30 \times 0.71 \times 0.29 \times \frac{0.09}{0.16} = 0.30 \times 0.2059 \times 0.5625 = 0.0347$

$p(4) = 0.71 + 0.0347 = 0.74$

**Block 4:** $p(4) = 0.74$

$\Delta p = 0.30 \times 0.74 \times 0.26 \times \frac{0.06}{0.16} = 0.30 \times 0.1924 \times 0.375 = 0.0216$

$p(5) = 0.74 + 0.0216 = 0.77$

**Block 5:** $p(5) = 0.77$

$\Delta p = 0.30 \times 0.77 \times 0.23 \times \frac{0.03}{0.16} = 0.30 \times 0.1771 \times 0.1875 = 0.0100$

$p(6) = 0.77 + 0.0100 = 0.78$

**Block 6:** $p(6) = 0.78$

$\Delta p = 0.30 \times 0.78 \times 0.22 \times \frac{0.02}{0.16} = 0.30 \times 0.1716 \times 0.125 = 0.0064$

$p(7) = 0.78 + 0.0064 = 0.78$ (rounds to 0.78)

For subsequent blocks, $\Delta p$ becomes progressively smaller as $p$ approaches $p^*$. Continuing the iteration:

| Block ($t$) | Predicted $p(t)$ |
|:-----------:|:----------------:|
| 1  | 0.50 |
| 2  | 0.64 |
| 3  | 0.71 |
| 4  | 0.74 |
| 5  | 0.77 |
| 6  | 0.78 |
| 7  | 0.78 |
| 8  | 0.79 |
| 9  | 0.79 |
| 10 | 0.79 |
| 11 | 0.79 |
| 12 | 0.80 |
| 13 | 0.80 |
| 14 | 0.80 |
| 15 | 0.80 |
| 16 | 0.80 |
| 17 | 0.80 |
| 18 | 0.80 |
| 19 | 0.80 |
| 20 | 0.80 |

Now compute the RSS:

| Block | Observed | Predicted | Residual | Residual$^2$ |
|:-----:|:--------:|:---------:|:--------:|:------------:|
| 1  | 0.50 | 0.50 | 0.00  | 0.0000 |
| 2  | 0.52 | 0.64 | $-0.12$ | 0.0144 |
| 3  | 0.55 | 0.71 | $-0.16$ | 0.0256 |
| 4  | 0.58 | 0.74 | $-0.16$ | 0.0256 |
| 5  | 0.61 | 0.77 | $-0.16$ | 0.0256 |
| 6  | 0.64 | 0.78 | $-0.14$ | 0.0196 |
| 7  | 0.67 | 0.78 | $-0.11$ | 0.0121 |
| 8  | 0.69 | 0.79 | $-0.10$ | 0.0100 |
| 9  | 0.71 | 0.79 | $-0.08$ | 0.0064 |
| 10 | 0.73 | 0.79 | $-0.06$ | 0.0036 |
| 11 | 0.74 | 0.79 | $-0.05$ | 0.0025 |
| 12 | 0.75 | 0.80 | $-0.05$ | 0.0025 |
| 13 | 0.76 | 0.80 | $-0.04$ | 0.0016 |
| 14 | 0.77 | 0.80 | $-0.03$ | 0.0009 |
| 15 | 0.78 | 0.80 | $-0.02$ | 0.0004 |
| 16 | 0.78 | 0.80 | $-0.02$ | 0.0004 |
| 17 | 0.79 | 0.80 | $-0.01$ | 0.0001 |
| 18 | 0.79 | 0.80 | $-0.01$ | 0.0001 |
| 19 | 0.80 | 0.80 | 0.00  | 0.0000 |
| 20 | 0.80 | 0.80 | 0.00  | 0.0000 |

$$\text{RSS}_{\text{dyn}} = 0.1514$$

**Note:** With $r = 0.30$, the dynamical model converges to the equilibrium faster than the data suggest — the predicted trajectory overshoots in the early blocks (the model reaches near-equilibrium by block 6, while the data take closer to 15 blocks). This indicates that $r = 0.30$ is too large for this dataset. A better-fitting value of $r$ could be found by minimizing RSS over $r$, but even with this suboptimal parameter, the dynamical model ($\text{RSS} = 0.1514$) already outperforms the static model ($\text{RSS} = 0.3926$) because it at least captures the general sigmoidal approach to equilibrium.

### (d) Model Comparison via AIC$_c$

We have $n = 20$ data points.

**Static model:** $k_{\text{static}} = 0$ free parameters, $\text{RSS}_{\text{static}} = 0.3926$.

$$\text{AIC}_{c,\text{static}} = n \ln\!\left(\frac{\text{RSS}}{n}\right) + 2k + \frac{2k(k+1)}{n - k - 1}$$

$$= 20 \ln\!\left(\frac{0.3926}{20}\right) + 0 + 0$$

$$= 20 \ln(0.01963)$$

$$= 20 \times (-3.9296)$$

$$= -78.59$$

**Dynamical model:** $k_{\text{dyn}} = 1$ free parameter, $\text{RSS}_{\text{dyn}} = 0.1514$.

$$\text{AIC}_{c,\text{dyn}} = 20 \ln\!\left(\frac{0.1514}{20}\right) + 2(1) + \frac{2(1)(2)}{20 - 1 - 1}$$

$$= 20 \ln(0.00757) + 2 + \frac{4}{18}$$

$$= 20 \times (-4.8844) + 2 + 0.2222$$

$$= -97.69 + 2 + 0.22$$

$$= -95.47$$

**Model comparison:**

$$\Delta\text{AIC}_c = \text{AIC}_{c,\text{static}} - \text{AIC}_{c,\text{dyn}} = -78.59 - (-95.47) = 16.88$$

The dynamical model has the lower (more negative) AIC$_c$, so it is preferred. The AIC$_c$ difference of 16.88 is very large.

**Evidence ratio:**

$$\text{Evidence ratio} = e^{\Delta/2} = e^{16.88/2} = e^{8.44} \approx 4,633$$

The data provide approximately 4,633:1 evidence in favor of the dynamical model over the static model. By conventional guidelines, $\Delta\text{AIC}_c > 10$ indicates essentially no support for the worse-fitting model. Even though the dynamical model uses one additional parameter, the improvement in fit is so substantial that the complexity penalty is negligible.

### (e) Synthesis — When Is a Dynamical Model Worth the Complexity?

**When the static model suffices:**

- **Steady-state research questions.** If the investigator's question concerns the *endpoint* of preference — for example, does the organism match, undermatch, or overmatch? — then the generalized matching law with its two parameters ($a$ and $\log\,b$) is the appropriate model. It is parsimonious, widely understood, and directly interpretable.
- **Long sessions with experienced subjects.** When subjects have extensive training and sessions are long enough for behavior to stabilize, the acquisition phase represents a small fraction of the data. A static description of the stable-state allocation captures nearly all the variance.
- **Descriptive economy.** In applied settings where the clinician simply needs to know the expected allocation at equilibrium (e.g., in a concurrent-schedule preference assessment), the static model provides an efficient summary.

**When the dynamical model adds value:**

- **Acquisition and transition research.** If the research question concerns *how* preference changes over time — the speed of acquisition, the sensitivity to sudden schedule changes, or individual differences in learning rate — a static model is structurally incapable of addressing the question. The trajectory is the phenomenon of interest.
- **Short sessions or early training.** When organisms have not yet reached equilibrium, the static model systematically mispredicts behavior. As shown in parts (a) and (c), the static model assigns large errors to the early blocks, while the dynamical model captures the approach to asymptote.
- **Mechanistic insight.** The rate parameter $r$ has a substantive interpretation: it reflects the speed at which the organism adjusts its allocation in response to the reinforcement contingency. Comparing $r$ across conditions, species, or pharmacological manipulations can reveal information about the underlying learning or decision process that the static model cannot provide.
- **Perturbation analysis.** If the schedule changes mid-session, a dynamical model can predict the re-equilibration trajectory. The static model can only predict the new equilibrium, not the path to it.

**When to prefer the higher-AIC model:**

AIC selects the model that best balances fit and parsimony *for the data at hand*. However, a researcher might legitimately prefer a model with higher AIC in the following circumstances:

1. **Different research goals.** If the research question is about equilibrium and the dynamical model's advantage comes entirely from fitting transitional data that are not of interest, the researcher may prefer the static model for its interpretive simplicity. Model selection criteria answer "which model best describes these data?" — but the scientist must decide "which data are relevant to my question?"

2. **Generalizability concerns.** The dynamical model's superior fit in this dataset depends on having time-series data during acquisition. If future applications involve only steady-state data, the dynamical model's extra parameter ($r$) becomes unidentifiable. A model that cannot be fitted in the target context is useless regardless of its AIC on the current data.

3. **Theoretical coherence.** If the static model connects to a broader theoretical framework (e.g., molar theories of matching) and the dynamical model is ad hoc, the researcher might prefer the theoretically grounded model while noting the AIC discrepancy as motivation for developing a dynamical extension of the theory.

The overarching lesson is that model comparison is a tool, not a decision algorithm. AIC$_c$ provides a principled quantitative comparison, but the final modeling choice must also consider the research question, the domain of intended application, and the theoretical context.
