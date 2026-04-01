---
slug: "key-equations"
letter: "A"
title: "Key Equations"
description: "A reference compilation of every major equation from the course, organized by week."
---

## Week 1: Introduction to Modeling

**Linear Cumulative Response Model**

$$R = k \cdot t$$

where $R$ is the cumulative number of responses, $k$ is the response rate (responses/min), and $t$ is elapsed time (min). In words: total responses grow at a constant rate over time.

## Week 2: The Matching Law

**Herrnstein's Single-Alternative Hyperbola**

$$R = \frac{k \cdot R_e}{R_e + r_e}$$

where $R$ is response rate, $k$ is the asymptotic response rate, $R_e$ is the programmed reinforcement rate, and $r_e$ is the extraneous reinforcement rate. In words: response rate is a hyperbolic function of reinforcement rate, approaching a ceiling $k$.

**Generalized Matching Equation**

$$\log\!\left(\frac{B_1}{B_2}\right) = a \cdot \log\!\left(\frac{R_1}{R_2}\right) + \log(b)$$

where $a$ is sensitivity to reinforcement ratios and $b$ is bias. In words: the log ratio of responses matches the log ratio of reinforcers, scaled by sensitivity, with a constant bias.

## Week 3: Discounting

**Mazur's Hyperbolic Model**

$$V = \frac{A}{1 + kD}$$

where $V$ is subjective value, $A$ is the undiscounted amount, $k$ is the discount rate, and $D$ is delay. In words: value decreases hyperbolically as delay increases.

**Exponential Model**

$$V = A \cdot e^{-kD}$$

In words: value decreases exponentially with delay. The exponential model predicts consistent preferences over time; the hyperbolic model predicts preference reversals.

**Hyperboloid Model**

$$V = \frac{A}{(1 + kD)^s}$$

Adds a scaling exponent $s$ that controls the curvature of discounting.

## Week 4: Demand

**Hursh-Silberberg Exponential Demand Equation**

$$\log Q = \log Q_0 + k \cdot (e^{-\alpha C} - 1)$$

where $Q$ is consumption, $Q_0$ is demand intensity (consumption at zero price), $\alpha$ is the essential value parameter (rate of decline), $k$ is the range of consumption in log units, and $C$ is price. In words: consumption declines exponentially with price, at a rate determined by how essential the commodity is.

**$P_{\max}$ (approximate)**

$$P_{\max} \approx \frac{1}{\alpha \cdot Q_0 \cdot k^{1.5}}$$

The price at which response output is maximized.

## Week 5: Respondent Conditioning

**Rescorla-Wagner Model**

$$\Delta V = \alpha \cdot \beta \cdot (\lambda - V_{\text{total}})$$

where $\Delta V$ is the change in associative strength, $\alpha$ is CS salience, $\beta$ is US processing rate, $\lambda$ is asymptotic associative strength, and $V_{\text{total}}$ is the sum of associative strengths of all CSs present. In words: learning is proportional to prediction error -- the discrepancy between what is expected and what occurs.

## Week 6: Model Comparisons

**Akaike Information Criterion**

$$\text{AIC} = -2 \ln(L) + 2k$$

where $L$ is the maximum likelihood and $k$ is the number of estimated parameters. In words: AIC balances fit against complexity by penalizing each additional parameter.

**Bayesian Information Criterion**

$$\text{BIC} = -2 \ln(L) + k \cdot \ln(n)$$

where $n$ is the number of observations. BIC imposes a stronger penalty for complexity than AIC when $n > 7$.

**Corrected AIC**

$$\text{AIC}_c = \text{AIC} + \frac{2k(k+1)}{n - k - 1}$$

Use when the ratio $n/k < 40$.

## Week 8: Probabilistic Models

**Poisson Distribution**

$$P(X = k) = \frac{(\lambda t)^k \cdot e^{-\lambda t}}{k!}$$

In words: the probability of observing exactly $k$ events in time $t$, given a constant rate $\lambda$.

**Bayes' Theorem**

$$P(H \mid D) = \frac{P(D \mid H) \cdot P(H)}{P(D)}$$

In words: the posterior probability of a hypothesis given data equals the likelihood of the data given the hypothesis, times the prior, divided by the marginal probability of the data.

## Week 9: Multilevel Models

**Random-Intercept, Random-Slope Model**

$$y_{ij} = (\gamma_{00} + u_{0j}) + (\gamma_{10} + u_{1j}) x_{ij} + e_{ij}$$

where $\gamma$ terms are fixed effects, $u$ terms are random effects (subject-level deviations), and $e$ is the residual. In words: each subject gets their own intercept and slope, drawn from a group-level distribution.

## Week 10: Dynamical Systems

**Logistic Growth Model**

$$\frac{dx}{dt} = r \cdot x \cdot \left(1 - \frac{x}{K}\right)$$

In words: the rate of change in responding equals growth proportional to the current rate, braked by proximity to the ceiling $K$.

**Analytical Solution**

$$x(t) = \frac{K}{1 + \left(\frac{K - x_0}{x_0}\right) e^{-rt}}$$

## Week 11: Computational Models

**Q-Learning Update Rule**

$$Q(s, a) \leftarrow Q(s, a) + \alpha \left[ R + \gamma \max_{a'} Q(s', a') - Q(s, a) \right]$$

where $Q(s,a)$ is the expected value of action $a$ in state $s$, $\alpha$ is the learning rate, $R$ is reward, and $\gamma$ is the discount factor. In words: update the value estimate by a fraction of the prediction error.

## Week 12: Machine Learning

**Neural Network (Single Layer)**

$$\hat{y} = f(W \cdot x + b)$$

where $W$ is the weight matrix, $x$ is the input, $b$ is the bias vector, and $f$ is an activation function. In words: the output is a nonlinear transformation of a weighted sum of inputs.
