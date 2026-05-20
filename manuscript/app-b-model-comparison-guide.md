# Appendix B: Comparing Models: A Decision Guide

## When to Use Which Method

Choosing the right model comparison method depends on the relationship between the candidate models and the characteristics of the data.

| Situation | Recommended Method | Key Consideration |
|:----------|:-------------------|:------------------|
| Models are nested (one is a special case of the other) | Likelihood ratio test | Requires nested structure; test statistic is chi-squared |
| Non-nested, same number of parameters | Compare log-likelihoods directly | The model with higher likelihood fits better |
| Non-nested, different numbers of parameters | AIC or BIC | Penalizes complexity to prevent overfitting |
| Small sample relative to parameters ({$$}n/k < 40{/$$}) | AICc | Corrects for small-sample bias in AIC |
| Want to quantify evidence strength | Bayes factors or evidence ratios | Provides a continuous measure of relative evidence |
| Concerned about generalization | Cross-validation | Directly tests predictive accuracy on held-out data |

## Interpreting AIC Differences

| {$$}\Delta{/$$}AIC | Interpretation |
|:------------|:---------------|
| 0--2 | Substantial support for both models |
| 4--7 | Considerably less support for the higher-AIC model |
| > 10 | Essentially no support for the higher-AIC model |

## Interpreting Bayes Factors

| Bayes Factor ({$$}BF_{10}{/$$}) | Evidence for Model 1 over Model 0 |
|:--------------------------|:-----------------------------------|
| 1--3 | Anecdotal |
| 3--10 | Moderate |
| 10--30 | Strong |
| 30--100 | Very strong |
| > 100 | Extreme |

## Decision Flowchart (Text Version)

1. **Are the models nested?**
   - Yes: Use a likelihood ratio test. If the simpler model is not rejected, prefer it on grounds of parsimony.
   - No: Proceed to step 2.

2. **Do the models have the same number of parameters?**
   - Yes: Compare likelihoods directly. The higher likelihood indicates better fit. Also examine residual patterns.
   - No: Proceed to step 3.

3. **Is your sample large relative to the number of parameters?**
   - Yes ({$$}n/k \geq 40{/$$}): Use AIC or BIC. AIC tends to favor more complex models; BIC tends to favor simpler ones.
   - No ({$$}n/k < 40{/$$}): Use AICc to correct for small-sample bias.

4. **Do you want a continuous measure of evidence?**
   - Yes: Compute Akaike weights from AIC values, or compute Bayes factors if you have prior distributions.

5. **Always: Plot residuals.** No numerical criterion substitutes for visual inspection of whether the model captures the systematic structure in the data.

6. **Always: Consider theoretical plausibility.** A model with slightly worse AIC but strong theoretical grounding may be preferable to a purely empirical fit.
