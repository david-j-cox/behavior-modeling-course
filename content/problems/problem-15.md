---
id: 15
title: "Dynamical Systems Meet Model Comparison"
week: 10
difficulty: "Advanced"
modelingSteps: [1, 3, 5, 8]
tags: ["dynamical systems", "model comparison", "AIC", "matching law", "demand", "synthesis"]
---

A researcher studies preference acquisition on a two-alternative concurrent variable-interval (conc VI 30-s VI 120-s) schedule. Over 20 consecutive 5-minute blocks, she records the proportion of responses allocated to the richer alternative, $B_1 / (B_1 + B_2)$. The data show an initial proportion near 0.50 (indifference) that gradually shifts toward the matching-law equilibrium across blocks. The following table gives the observed response proportions:

| Block ($t$) | Proportion $p(t)$ |
|:-----------:|:------------------:|
| 1  | 0.50 |
| 2  | 0.52 |
| 3  | 0.55 |
| 4  | 0.58 |
| 5  | 0.61 |
| 6  | 0.64 |
| 7  | 0.67 |
| 8  | 0.69 |
| 9  | 0.71 |
| 10 | 0.73 |
| 11 | 0.74 |
| 12 | 0.75 |
| 13 | 0.76 |
| 14 | 0.77 |
| 15 | 0.78 |
| 16 | 0.78 |
| 17 | 0.79 |
| 18 | 0.79 |
| 19 | 0.80 |
| 20 | 0.80 |

**(a)** **Static model (Weeks 2-3).** The generalized matching law predicts the equilibrium response allocation:

$$\log\left(\frac{B_1}{B_2}\right) = a \cdot \log\left(\frac{R_1}{R_2}\right) + \log\,b$$

where $R_1/R_2 = 120/30 = 4$ is the reinforcement rate ratio. Assuming strict matching ($a = 1$, $\log\,b = 0$), compute the predicted equilibrium proportion $p^* = B_1/(B_1 + B_2)$. This static model assigns $p^* $ to every block. Compute the residual sum of squares (RSS) of this static prediction against all 20 data points.

**(b)** **Dynamical model (Week 10).** Formulate a logistic ordinary differential equation (ODE) describing the trajectory of $p(t)$ toward the matching equilibrium:

$$\frac{dp}{dt} = r \cdot p(1 - p)\left(\frac{p^* - p}{p^*(1 - p^*)}\right)$$

where $r$ is a rate parameter governing the speed of acquisition and $p^* = 0.80$ is the equilibrium. Explain the role of each factor in the equation. Show that $p = 0$, $p = 1$, and $p = p^*$ are all fixed points, and determine which is stable.

**(c)** Using a simple forward-Euler approximation with step size $\Delta t = 1$ block:

$$p(t+1) = p(t) + r \cdot p(t)(1 - p(t))\left(\frac{p^* - p(t)}{p^*(1-p^*)}\right) \cdot \Delta t$$

Starting from $p(1) = 0.50$ and using $r = 0.30$, compute $p(t)$ for blocks $t = 1$ through $t = 20$. Report your values to two decimal places. Then compute the RSS for this dynamical model against the same 20 data points.

**(d)** **Model comparison (Week 6).** The static model has $k_{\text{static}} = 0$ free parameters (all values are derived from the schedule). The dynamical model has $k_{\text{dyn}} = 1$ free parameter ($r$). Using the small-sample AIC formula:

$$\text{AIC}_c = n \ln\left(\frac{\text{RSS}}{n}\right) + 2k + \frac{2k(k+1)}{n - k - 1}$$

compute AIC$_c$ for both models. Which model is preferred? Compute the AIC$_c$ difference ($\Delta$AIC$_c$) and the evidence ratio $e^{-\Delta/2}$.

**(e)** **Synthesis.** Discuss: Under what experimental conditions would the static matching-law description be sufficient, and under what conditions does a dynamical model add scientific value? Consider factors such as session length, the research question (steady-state vs. acquisition), and the tradeoff between parsimony and explanatory scope. When, if ever, should a researcher prefer the model with a higher AIC?
