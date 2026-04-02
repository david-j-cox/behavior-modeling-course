---
id: 10
title: "Bayesian Updating for Functional Assessment"
week: 8
difficulty: "Intermediate"
modelingSteps: [3, 5, 8]
tags: ["Bayesian updating", "Beta-Binomial", "functional assessment", "credible interval", "prior distribution"]
---

A clinician is conducting a descriptive functional assessment of a child's problem behavior. Before collecting data, the clinician has no strong prior belief about whether the behavior is maintained by escape from demands. She represents her initial uncertainty using a $\text{Beta}(2, 2)$ prior distribution on $\theta$, where $\theta$ is the probability that a given interval of problem behavior is followed by escape (i.e., is consistent with escape-maintained behavior).

The clinician then observes $n = 15$ intervals in which problem behavior occurs. Of these, $y = 12$ intervals show problem behavior followed by escape from demands, and $n - y = 3$ intervals show problem behavior **not** followed by escape.

**(a)** Write the probability density function of the $\text{Beta}(2,2)$ prior. Compute its mean and variance. Sketch or describe its shape.

**(b)** Using Beta-Binomial conjugacy, derive the posterior distribution for $\theta$ after observing the data. State the updated parameters explicitly.

**(c)** Compute the posterior mean. Then compute an approximate 95% credible interval for $\theta$ using the formula:

$$\text{CI} \approx \hat{\theta} \pm 1.96 \sqrt{\frac{\hat{\theta}(1 - \hat{\theta})}{a' + b'}}$$

where $\hat{\theta}$ is the posterior mean and $a'$ and $b'$ are the posterior Beta parameters.

**(d)** Suppose instead the clinician had used a more informative prior, $\text{Beta}(10, 10)$, reflecting a strong prior belief that $\theta \approx 0.5$. Without doing full calculations, explain qualitatively how the posterior mean and the width of the credible interval would change relative to part (c).

**(e)** Compare the Bayesian posterior mean from part (c) to the simple sample proportion $\hat{p} = 12/15 = 0.80$. Why do they differ? Under what conditions would the difference between the Bayesian estimate and the sample proportion be largest?
