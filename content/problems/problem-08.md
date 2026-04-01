---
id: 8
title: "Comparing Discounting Models with AIC"
week: 6
difficulty: "Intermediate"
modelingSteps: [4, 8]
tags: ["AIC", "model comparison", "delay discounting", "information criteria"]
---

Three models are fit to a set of delay discounting data consisting of $n = 12$ data points:

- **Model A** (hyperbolic, 1 parameter $k$): log-likelihood $= -18.2$
- **Model B** (exponential, 1 parameter $k$): log-likelihood $= -22.7$
- **Model C** (hyperboloid, 2 parameters $k$ and $s$): log-likelihood $= -16.5$

The Akaike Information Criterion is defined as:

$$\text{AIC} = -2 \ln \mathcal{L} + 2p$$

where $\ln \mathcal{L}$ is the log-likelihood and $p$ is the number of free parameters.

**(a)** Compute the AIC for each model.

**(b)** Rank the models from best (lowest AIC) to worst (highest AIC).

**(c)** Compute the $\Delta$AIC values (the difference between each model's AIC and the best model's AIC).

**(d)** Based on conventional guidelines for interpreting $\Delta$AIC, which model(s) have substantial support? Which can be ruled out? Explain your reasoning.
