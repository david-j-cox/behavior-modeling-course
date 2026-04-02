---
id: 10
---

## Solution: Bayesian Updating for Functional Assessment

### (a) Prior Distribution

The $\text{Beta}(a, b)$ distribution has the probability density function:

$$f(\theta \mid a, b) = \frac{\theta^{a-1}(1-\theta)^{b-1}}{B(a, b)}$$

where $B(a, b) = \frac{\Gamma(a)\Gamma(b)}{\Gamma(a+b)}$ is the Beta function.

For the $\text{Beta}(2, 2)$ prior:

$$f(\theta \mid 2, 2) = \frac{\theta^{1}(1-\theta)^{1}}{B(2,2)} = \frac{\theta(1-\theta)}{B(2,2)}$$

The Beta function is:

$$B(2,2) = \frac{\Gamma(2)\Gamma(2)}{\Gamma(4)} = \frac{1! \times 1!}{3!} = \frac{1}{6}$$

So the density is:

$$f(\theta \mid 2,2) = 6\,\theta(1-\theta)$$

**Mean:**

$$E[\theta] = \frac{a}{a+b} = \frac{2}{2+2} = \frac{2}{4} = 0.50$$

**Variance:**

$$\text{Var}[\theta] = \frac{ab}{(a+b)^2(a+b+1)} = \frac{2 \times 2}{(4)^2(5)} = \frac{4}{80} = 0.05$$

**Standard deviation:** $\sqrt{0.05} = 0.2236$.

**Shape:** The $\text{Beta}(2,2)$ distribution is a symmetric, unimodal distribution centered at $\theta = 0.5$. It is a gentle inverted-U shape (a parabola), placing most mass between roughly 0.2 and 0.8. This represents a weakly informative prior: the clinician believes all values of $\theta$ are plausible, with a mild preference for moderate values and some downweighting of extreme values near 0 and 1. The total "pseudo-count" is $a + b = 4$, equivalent to having observed 2 successes and 2 failures in a hypothetical prior sample of 4.

### (b) Posterior Distribution via Beta-Binomial Conjugacy

The Beta distribution is the conjugate prior for the Binomial likelihood. If the prior is $\text{Beta}(a, b)$ and we observe $y$ successes in $n$ trials, the posterior is:

$$\theta \mid y \sim \text{Beta}(a + y, \; b + n - y)$$

This follows from:

$$f(\theta \mid y) \propto f(y \mid \theta) \cdot f(\theta) \propto \theta^y(1-\theta)^{n-y} \cdot \theta^{a-1}(1-\theta)^{b-1} = \theta^{a+y-1}(1-\theta)^{b+n-y-1}$$

which is the kernel of a $\text{Beta}(a+y, \; b+n-y)$ distribution.

With $a = 2$, $b = 2$, $y = 12$, $n = 15$:

$$a' = a + y = 2 + 12 = 14$$

$$b' = b + (n - y) = 2 + 3 = 5$$

$$\theta \mid y \sim \text{Beta}(14, 5)$$

### (c) Posterior Mean and 95% Credible Interval

**Posterior mean:**

$$E[\theta \mid y] = \frac{a'}{a' + b'} = \frac{14}{14 + 5} = \frac{14}{19} = 0.7368$$

**Approximate 95% credible interval:**

Using the normal approximation formula provided:

$$\text{CI} \approx \hat{\theta} \pm 1.96\sqrt{\frac{\hat{\theta}(1-\hat{\theta})}{a' + b'}}$$

First compute the standard error term:

$$\hat{\theta}(1-\hat{\theta}) = 0.7368 \times 0.2632 = 0.19394$$

$$\frac{\hat{\theta}(1-\hat{\theta})}{a' + b'} = \frac{0.19394}{19} = 0.010207$$

$$\sqrt{0.010207} = 0.10103$$

$$\text{Margin} = 1.96 \times 0.10103 = 0.19802$$

$$\text{CI} = 0.7368 \pm 0.1980$$

$$\text{CI} = (0.5388, \; 0.9348)$$

**Interpretation:** After observing 12 out of 15 intervals consistent with escape maintenance, we are approximately 95% confident that the true probability $\theta$ lies between 0.54 and 0.93. The posterior is concentrated well above 0.5, providing evidence that escape is the predominant maintaining function.

For reference, the exact posterior variance of the $\text{Beta}(14, 5)$ distribution is:

$$\text{Var}[\theta \mid y] = \frac{a'b'}{(a'+b')^2(a'+b'+1)} = \frac{14 \times 5}{(19)^2(20)} = \frac{70}{7220} = 0.009695$$

$$\text{SD} = \sqrt{0.009695} = 0.09846$$

This gives an exact-based approximate 95% CI of $0.7368 \pm 1.96(0.09846) = (0.5438, 0.9298)$, which is close to our computation above.

### (d) Effect of a More Informative Prior: $\text{Beta}(10, 10)$

The $\text{Beta}(10, 10)$ prior has:

- **Mean:** $10/20 = 0.50$, same center as $\text{Beta}(2,2)$.
- **Total pseudo-count:** $10 + 10 = 20$, compared to $2 + 2 = 4$ for the original prior. This means the prior carries the weight of 20 hypothetical observations, which is **larger** than the actual sample size of $n = 15$.

The posterior would be $\text{Beta}(10 + 12, \; 10 + 3) = \text{Beta}(22, 13)$, with posterior mean:

$$\frac{22}{35} = 0.6286$$

Qualitative effects compared to part (c):

1. **The posterior mean would be pulled more toward 0.5.** With $\text{Beta}(2,2)$, the posterior mean was 0.737, close to the data proportion of 0.80. With $\text{Beta}(10,10)$, the posterior mean would be 0.629, pulled substantially toward the prior mean of 0.50. The informative prior "resists" the data more strongly because it carries more weight.

2. **The credible interval would be narrower** because the total posterior pseudo-count is $22 + 13 = 35$ (vs. $14 + 5 = 19$), yielding a smaller posterior variance. More total information (prior + data) means more precision.

3. **More data would be needed to "overwhelm" this prior.** The tension between prior and likelihood is resolved in favor of whichever carries more information. With $a + b = 20$ prior pseudo-observations versus $n = 15$ actual observations, the prior still dominates. The clinician would need a substantially larger sample to move the posterior decisively toward the observed proportion.

### (e) Comparison to the Simple Proportion

The sample proportion (maximum likelihood estimate) is:

$$\hat{p} = \frac{y}{n} = \frac{12}{15} = 0.800$$

The Bayesian posterior mean from part (c) is:

$$\hat{\theta}_{\text{Bayes}} = \frac{14}{19} = 0.737$$

**Why they differ:** The Bayesian estimate is a weighted compromise between the prior mean (0.50) and the sample proportion (0.80). Algebraically:

$$\hat{\theta}_{\text{Bayes}} = \frac{a + y}{a + b + n} = \frac{a + b}{a + b + n} \cdot \underbrace{\frac{a}{a + b}}_{\text{prior mean}} + \frac{n}{a + b + n} \cdot \underbrace{\frac{y}{n}}_{\text{sample proportion}}$$

$$= \frac{4}{19}(0.50) + \frac{15}{19}(0.80) = 0.1053 + 0.6316 = 0.7368$$

The posterior mean is a precision-weighted average of the prior mean and the data mean, with weights proportional to each source's pseudo-sample size.

**When the difference is largest:**

1. **Small sample sizes:** When $n$ is small relative to $a + b$, the prior has more influence. With $n = 15$ and $a + b = 4$, the prior weight is modest ($4/19 \approx 21\%$). If $n$ were only 3 or 4, the prior would dominate.

2. **Strong prior-data conflict:** When the prior mean and the sample proportion are far apart, the "shrinkage" toward the prior is more visible. Here, the prior mean is 0.50 and the data suggest 0.80 — a moderate conflict. If the data showed $12/12 = 1.00$, the shrinkage would be even more pronounced.

3. **Informative priors:** As shown in part (d), a $\text{Beta}(10,10)$ prior with the same data yields a posterior mean of 0.629, a much larger discrepancy from $\hat{p} = 0.80$. More informative priors produce larger differences.

As $n \to \infty$, the posterior becomes dominated by the likelihood, and the Bayesian estimate converges to the sample proportion regardless of the prior. This asymptotic agreement is a consequence of Bayesian consistency.
