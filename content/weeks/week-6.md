---
slug: "week-6"
number: 6
published: true
title: "Model Comparisons"
subtitle: "How to choose between competing accounts of the same data"
description: "AIC, BIC, cross-validation, parsimony, and the bias-variance tradeoff."
keyModels:
  - "AIC"
  - "BIC"
  - "Cross-Validation"
keyEquations:
  - "AIC = 2K - 2ln(L)"
  - "BIC = K*ln(N) - 2ln(L)"
  - "R^2 = 1 - SS_res/SS_tot"
---

## Why This Topic Matters

By this point in the course, you have encountered several quantitative models of behavioral phenomena: the matching law, delay discounting functions, demand curves, and learning rules. A recurring theme has been that more than one mathematical function can describe the same dataset. The generalized matching law and the strict matching law both describe concurrent-schedule data. Mazur's hyperbolic and Myerson and Green's hyperboloid both describe delay discounting. The exponential demand model and the linear demand model both describe consumption as price changes. When multiple models compete, how do you choose?

The naive answer is: pick the one that fits best. But this answer is wrong in an important and instructive way. Any model can be made to fit any dataset perfectly if you give it enough parameters. A polynomial of degree $N-1$ will pass through every one of $N$ data points with zero residual error. Yet such a model is useless: it has memorized the noise in your particular dataset and will fail catastrophically when applied to new data. This is the problem of **overfitting**, and it is the central motivation for formal model comparison.

Model comparison is not an academic exercise. In applied behavior analysis, choosing the wrong model leads to wrong predictions, and wrong predictions lead to wrong clinical decisions. If you select a discounting model that overfits one client's data, your predictions about that client's choices in new situations will be unreliable. If you choose a demand model with too few parameters, you may miss a real feature of a client's consumption pattern that matters for intervention design. Model comparison is about finding the right balance between accuracy and simplicity --- between explaining the data you have and predicting the data you have not yet seen.

This week introduces the formal tools for striking that balance: residual analysis, variance accounted for, information criteria (AIC and BIC), cross-validation, and the bias-variance tradeoff. These are not competing approaches; they are complementary lenses on the same fundamental question: Does the improvement in fit from adding complexity justify the cost?

The practical importance of this topic cannot be overstated. Every time you fit a model in this course --- whether to discounting data, demand data, or matching data --- you are implicitly making a model comparison choice. This week makes that choice explicit and principled. By the end of the week, you will have a toolkit for defending your model selection decisions with quantitative evidence rather than intuition.

---

## Core Concepts

### The Overfitting Problem

Consider fitting polynomials to a set of data points. A straight line ($y = a + bx$, 2 parameters) might capture the overall trend but miss curvature. A quadratic ($y = a + bx + cx^2$, 3 parameters) might capture the curvature nicely. A cubic adds another parameter and might improve the fit slightly. If you have 6 data points, a degree-5 polynomial (6 parameters) will pass through every single point --- zero error, perfect fit.

But that "perfect" fit is an illusion. The degree-5 polynomial has not learned the underlying relationship; it has memorized the specific noise in those 6 observations. If you collect 6 new observations from the same process, the degree-5 polynomial will likely perform terribly, oscillating wildly between the original data points while the simpler quadratic generalizes gracefully.

This is **overfitting**: the model captures noise rather than signal. The hallmark of overfitting is a large gap between how well the model describes the data it was fit to (training error) and how well it predicts new data (test error). Adding parameters always improves training error. It does not always improve --- and often worsens --- test error.

In behavior science, overfitting is a real and practical concern. Behavioral datasets are often small (5--7 delay values in a discounting task, 5--10 prices in a demand assessment). With so few data points, complex models with many free parameters can easily overfit. The tools introduced this week exist precisely to guard against this.

To build intuition, consider a concrete behavioral example. Suppose you have 5 indifference points from a delay discounting task. You could fit Mazur's hyperbolic (1 free parameter, $k$), which would capture the overall declining trend with some residual error. Or you could fit a 4th-degree polynomial (5 parameters), which would pass through every data point perfectly. The polynomial "explains" 100% of the variance, but it does so by memorizing the exact noise in this particular participant's data. If you then asked the polynomial to predict the indifference point at a delay not tested, its prediction might be absurd --- perhaps a negative dollar amount or a value greater than the undiscounted reward. The hyperbolic model, despite its imperfect fit, would produce a sensible prediction because its functional form encodes the real structure of discounting.

### Parsimony (Occam's Razor)

**Parsimony** is the principle that, all else being equal, the simplest adequate model is preferred. This is sometimes called Occam's Razor: do not multiply entities beyond necessity. In modeling terms, do not add parameters beyond what the data justify.

But the principle raises immediate questions. How do you quantify "simple"? Is a model with 2 parameters always simpler than a model with 3? What if the 3-parameter model is a more natural expression of a known behavioral process? And how do you quantify "adequate"? Is a model adequate if it accounts for 90% of variance? 95%? 99%?

These questions have no universal answers, but the tools in this chapter provide principled, quantitative frameworks for addressing them. AIC and BIC formalize parsimony by imposing a penalty for each additional parameter. Cross-validation operationalizes adequacy by measuring predictive accuracy on held-out data. The bias-variance tradeoff explains why parsimony works: simpler models may be slightly biased, but they are more stable across datasets.

Parsimony is not mere aesthetic preference or intellectual laziness. It has deep connections to the philosophy of science and to statistical theory. From a philosophy-of-science perspective, parsimony reflects the idea that a model's explanatory power comes from what it *excludes*, not just what it includes. A model that can accommodate any outcome explains nothing. From a statistical perspective, parsimony is a defense against overfitting: every unnecessary parameter is an opportunity for the model to fit noise rather than signal.

In behavior science, parsimony has a long tradition. The matching law in its strict form ($B_1/B_2 = r_1/r_2$) is a remarkably parsimonious account of choice: zero free parameters beyond the data themselves. The generalized matching law adds two parameters (bias and sensitivity) and fits better, but the improvement must be justified. Mazur's hyperbolic discounting function, with a single free parameter $k$, has persisted in the literature precisely because it achieves excellent fits with minimal complexity. When researchers have proposed more complex alternatives, the burden has been on them to show that the added complexity is warranted.

### Residuals and Residual Analysis

A **residual** is the difference between an observed value and the value predicted by a model:

$$e_i = y_i - \hat{y}_i$$

where $y_i$ is the observed value for data point $i$ and $\hat{y}_i$ is the model's prediction.

Residuals are the foundation of model evaluation. A good model produces residuals that are:

- **Small** in magnitude (the model's predictions are close to the data).
- **Random** in pattern (no systematic trends remain in what the model fails to capture).
- **Homoscedastic** (roughly equal in spread across the range of predicted values).

When residuals show **systematic patterns** --- for example, the model consistently overpredicts at low values and underpredicts at high values, forming a U-shaped pattern --- this signals **model misspecification**. The model is missing a feature of the data that a better model would capture. Residual analysis is therefore a diagnostic tool: before asking which model is "best," ask whether any model under consideration is adequate by examining its residuals.

A simple but powerful diagnostic is the **residual plot**: a scatterplot of residuals ($e_i$) against predicted values ($\hat{y}_i$) or against the independent variable. Random scatter around zero indicates a well-specified model. Curvature, fanning, or other structure in the residual plot indicates a problem.

Consider a concrete example. If you fit an exponential discounting function to data that are actually hyperbolic, the residuals will show a characteristic pattern: the exponential will overpredict at short and long delays (where the hyperbolic curve is steeper or shallower than the exponential) and underpredict at intermediate delays. This systematic pattern in the residual plot is a red flag, even if the $R^2$ looks reasonable. The residual plot tells you something the $R^2$ cannot: the model's functional form is wrong, not just imprecise.

**Types of residual patterns and what they mean:**

- **Random scatter around zero**: The model is well-specified. Remaining error is noise.
- **Curved pattern (U-shaped or inverted-U)**: The model is missing a nonlinear feature. Consider a model with curvature.
- **Fan-shaped pattern (spread increases with predicted value)**: The variance of the residuals is not constant (**heteroscedasticity**). Consider transforming the data or using weighted regression.
- **Trend (residuals increase or decrease systematically)**: The model is missing a linear component or the slope is misestimated.

Residual analysis should always precede numerical model comparison. There is no point computing AIC for a model whose residual plot reveals gross misspecification.

### Variance Accounted For ($R^2$)

The coefficient of determination, $R^2$, quantifies the proportion of variance in the observed data that the model explains:

$$R^2 = 1 - \frac{SS_{res}}{SS_{tot}}$$

where:

- $SS_{res} = \sum_{i=1}^{N}(y_i - \hat{y}_i)^2$ is the **residual sum of squares** (variance left unexplained by the model).
- $SS_{tot} = \sum_{i=1}^{N}(y_i - \bar{y})^2$ is the **total sum of squares** (total variance in the data around its mean).

An $R^2$ of 0.90 means the model accounts for 90% of the variance in the data; 10% remains unexplained. The remaining 10% could be measurement error, individual variability, or systematic features that the model does not capture.

$R^2$ is intuitive and widely used, but it has a critical limitation for model comparison: **$R^2$ can never decrease when you add parameters**. A model with 5 parameters will always have an $R^2$ at least as high as a model with 3 parameters, regardless of whether those extra parameters capture real signal or just noise. This means $R^2$ alone cannot distinguish a genuinely better model from an overfitting model.

To see why, consider that adding a parameter gives the optimization algorithm one more degree of freedom to adjust the curve. At worst, the algorithm can set the new parameter to a value that has no effect, recovering the simpler model. At best, the new parameter captures additional structure. Either way, $SS_{res}$ cannot increase, so $R^2$ cannot decrease.

Some researchers use **adjusted $R^2$**, which imposes a penalty for additional parameters:

$$R^2_{adj} = 1 - \frac{SS_{res} / (N - K)}{SS_{tot} / (N - 1)}$$

where $N$ is the number of data points and $K$ is the number of estimated parameters. Adjusted $R^2$ can decrease when a new parameter does not improve fit enough to justify the added complexity, making it a better (though still imperfect) tool for model comparison.

**Benchmarks for $R^2$ in behavior science:**

- In well-controlled **laboratory settings** with steady-state data, $R^2 > 0.85$ to $0.90$ is typically expected. Models of matching, discounting, and demand routinely achieve these values with group or individual data from experienced subjects.
- In **applied settings** with more variable data, $R^2 > 0.60$ to $0.65$ may be acceptable. Clinical populations, shorter assessments, and less controlled conditions introduce variability that even a correct model cannot capture.
- In **translational research** bridging lab and clinic, values in between these ranges are common and acceptable when accompanied by evidence that residuals are random.

These are guidelines, not rigid cutoffs. The appropriate benchmark depends on the phenomenon, the population, and the research question. An $R^2$ of 0.70 for a complex clinical dataset may represent a better scientific achievement than an $R^2$ of 0.95 for a well-controlled pigeon experiment, if the former captures a real and useful regularity in a noisy domain.

### Loss Metrics

Beyond $R^2$, several **loss metrics** quantify how far a model's predictions are from the observed data. Each has its strengths and is appropriate in different contexts.

**Mean Absolute Error (MAE):**

$$MAE = \frac{1}{N} \sum_{i=1}^{N} |y_i - \hat{y}_i|$$

MAE is the average absolute deviation between predicted and observed values. Its primary advantage is **interpretability**: MAE is expressed in the original units of the dependent variable. If you are modeling indifference points in dollars, an MAE of \$2.50 means the model's predictions are off by \$2.50 on average. MAE treats all errors equally regardless of their sign or magnitude.

MAE is particularly useful when communicating results to clinicians or other non-technical audiences. Saying "the model's predictions are off by about \$2.50 on average" is immediately understandable in a way that "the model has an $R^2$ of 0.93" may not be.

**Mean Squared Error (MSE):**

$$MSE = \frac{1}{N} \sum_{i=1}^{N} (y_i - \hat{y}_i)^2$$

MSE squares each error before averaging. This means large errors are penalized disproportionately. A model that is off by 10 on one point contributes 100 to the sum; a model that is off by 5 on two points contributes only 50. MSE is appropriate when large errors are especially undesirable --- for example, when a large misprediction would lead to a clinically significant decision error. Its limitation is that the units are the square of the original units (e.g., dollars squared), making direct interpretation less intuitive.

**Root Mean Squared Error (RMSE):**

$$RMSE = \sqrt{MSE} = \sqrt{\frac{1}{N} \sum_{i=1}^{N} (y_i - \hat{y}_i)^2}$$

RMSE takes the square root of MSE, returning the metric to the original units while retaining the property of penalizing large errors more heavily than MAE. RMSE combines the penalty structure of MSE with the interpretability of MAE. It is perhaps the most commonly reported loss metric in behavior science.

**Comparing MAE and RMSE:** When MAE and RMSE are close in value, the model's errors are relatively uniform in size. When RMSE is much larger than MAE, a few data points have disproportionately large errors. This comparison itself is diagnostic: a large RMSE-to-MAE ratio suggests the model struggles with specific regions of the data (e.g., extreme delays or very low prices).

**Important limitation:** None of these loss metrics penalize model complexity. A model with more parameters will always achieve equal or lower MAE, MSE, and RMSE on the data it was fit to. Like $R^2$, these metrics are necessary but insufficient for model comparison. They tell you how well the model fits but not whether the fit is achieved efficiently.

### Akaike Information Criterion (AIC)

The **Akaike Information Criterion** addresses the limitations of raw fit metrics by explicitly penalizing model complexity:

$$AIC = 2K - 2\ln(L)$$

where:

- $K$ is the number of estimated parameters in the model.
- $L$ is the **maximum likelihood** of the data given the model (the probability of observing the data if the model, with its best-fitting parameters, were true).
- $\ln(L)$ is the natural logarithm of the likelihood.

**Lower AIC is better.** The term $-2\ln(L)$ measures lack of fit (smaller likelihood = worse fit = larger value). The term $2K$ is the **complexity penalty**: each additional parameter adds 2 to the AIC, regardless of how much it improves the likelihood. A parameter is "worth" adding only if it improves the log-likelihood by more than 1 unit.

AIC has an **information-theoretic** foundation. It estimates the expected Kullback-Leibler (KL) divergence between the model and the true data-generating process, up to a constant. The KL divergence measures the information lost when you use the model to approximate reality. In plain terms, AIC estimates how much information is lost when you use the model to approximate the true process that generated the data, with a penalty for the number of parameters used in the approximation. The model with the lowest AIC loses the least information.

To build intuition about likelihood: imagine the model, with its best-fitting parameters, generates a probability distribution over possible datasets. The likelihood asks: under that distribution, how probable is the dataset you actually observed? A model that assigns high probability to the observed data fits well. A model that assigns low probability does not. The log-likelihood converts this probability to an additive scale where differences are easier to interpret.

**AIC differences ($\Delta$AIC)** are often more informative than raw AIC values. The raw AIC value depends on the sample size and the scale of the data and is not interpretable in isolation. But the difference between two models' AIC values is directly interpretable. If Model A has AIC = 42 and Model B has AIC = 48, the difference is 6 units in favor of Model A. A common guideline:

- $\Delta$AIC $< 2$: Models are essentially equivalent; the data do not strongly distinguish them.
- $\Delta$AIC between 4 and 7: Moderate evidence favoring the model with lower AIC.
- $\Delta$AIC $> 10$: Strong evidence favoring the model with lower AIC.

These guidelines come from Burnham and Anderson (2002) and are widely used in ecology, psychology, and increasingly in behavior science.

For small samples (when $N/K < 40$, which is almost always true in behavioral research), a corrected version, **AICc**, is recommended:

$$AICc = AIC + \frac{2K(K+1)}{N - K - 1}$$

AICc adds an extra penalty that becomes negligible as $N$ grows large but provides important correction when data are sparse. With $N = 6$ and $K = 2$, for example, the correction term is $\frac{2 \cdot 2 \cdot 3}{6 - 2 - 1} = \frac{12}{3} = 4$, which is substantial --- it doubles the base complexity penalty. In behavioral research, where sample sizes are routinely in the single digits, AICc should generally be used instead of AIC.

### Bayesian Information Criterion (BIC)

The **Bayesian Information Criterion** is similar to AIC but imposes a stronger penalty for complexity:

$$BIC = K \cdot \ln(N) - 2\ln(L)$$

where:

- $K$ is the number of estimated parameters.
- $N$ is the number of data points.
- $L$ is the maximum likelihood.

The key difference from AIC is the complexity penalty: $K \cdot \ln(N)$ instead of $2K$. Since $\ln(N) > 2$ whenever $N > 7$ (which is almost always the case in behavioral research), BIC penalizes extra parameters more heavily than AIC for any reasonably sized dataset. As $N$ grows, BIC's penalty grows (because $\ln(N)$ increases) while AIC's stays fixed at $2K$. This means the two criteria can produce different model rankings, especially with larger datasets.

**Lower BIC is better**, just as with AIC.

BIC has a **Bayesian** foundation. It approximates the log of the marginal likelihood (or "evidence") for the model, under certain regularity conditions. The marginal likelihood integrates over all possible parameter values, weighted by their prior probability, rather than evaluating only at the best-fitting values. This integration naturally penalizes complex models more heavily, because their parameter spaces are larger and most of that space is wasted on poor-fitting parameter combinations. BIC tends to favor **simpler models** than AIC does, especially with large samples.

**When to use AIC vs. BIC:**

- Use **AIC** (or AICc) when your goal is predictive accuracy and you are comparing models that are all approximations (none is assumed to be "true"). This is the more common situation in behavior science.
- Use **BIC** when you are trying to identify the "true" model from a set of candidates and want a stronger guard against overfitting.
- In practice, when AIC and BIC agree, you can be more confident in the selection. When they disagree (AIC prefers a more complex model, BIC a simpler one), report both and discuss the tension. The disagreement itself is informative: it tells you that the extra parameter's contribution is in the gray zone --- beneficial enough for prediction but perhaps not enough to conclude it reflects a real feature of the data-generating process.

**A note on interpretation:** Neither AIC nor BIC tells you the probability that a model is correct. They rank models in terms of expected predictive accuracy (AIC) or evidence (BIC), but these rankings are always relative to the candidate set. If all candidates are poor, the "winner" is still poor. Always combine information criteria with residual analysis and substantive judgment.

### Cross-Validation

**Cross-validation** takes a fundamentally different approach to model comparison. Instead of penalizing complexity mathematically, it measures predictive accuracy directly by evaluating the model on data it has never seen.

The basic idea is simple:

1. **Hold out** some data (the test set).
2. **Fit** the model to the remaining data (the training set).
3. **Evaluate** the model's predictions on the held-out test set.
4. A model that predicts the test set well is a model that generalizes; a model that performs much worse on the test set than the training set is overfitting.

This procedure directly operationalizes the question that motivates model comparison: How well will this model perform on data it was not fit to?

**$k$-fold cross-validation** systematizes this procedure:

1. Divide the data into $k$ roughly equal subsets (folds).
2. For each fold, fit the model to the other $k - 1$ folds and evaluate predictions on the held-out fold.
3. Average the prediction error across all $k$ folds.

Common choices are $k = 5$ or $k = 10$. **Leave-one-out cross-validation (LOOCV)** sets $k = N$, holding out one data point at a time. LOOCV is computationally expensive but uses the maximum amount of training data at each step, which can be advantageous with small datasets.

**How cross-validation penalizes complexity without an explicit penalty term:** A complex model that overfits the training data will have learned idiosyncratic features of those specific data points. When it encounters a held-out data point, those idiosyncratic features are absent, and the model's predictions suffer. A simpler model that has captured only the general trend will generalize better. The test-set evaluation automatically detects overfitting without any formula-based penalty.

Cross-validation has the advantage of making no assumptions about the form of the likelihood or the penalty structure. It directly answers the question: "How well does this model predict data it was not fit to?" Its limitation is that it requires enough data to split into meaningful training and test sets. With only 5 or 6 data points (common in discounting or demand tasks), cross-validation may be unreliable because each fold is tiny. Fitting a model to 4 or 5 data points and testing on 1 introduces high variability in the cross-validated error estimate.

For this reason, **AIC and BIC are often preferred over cross-validation in behavior science**, where sample sizes per individual are small. Cross-validation becomes more practical with group-level data or with datasets that include many conditions per participant.

**A walkthrough of LOOCV with discounting data:** Suppose you have 6 delay-indifference point pairs and want to compare the hyperbolic and hyperboloid models using LOOCV. You would:

1. Remove the first data point (delay = 1 day, indifference point = \$95).
2. Fit both models to the remaining 5 data points.
3. Use each fitted model to predict the indifference point at delay = 1 day.
4. Record the squared prediction error for each model.
5. Repeat for all 6 data points, each time holding out one point and fitting to the other 5.
6. Average the 6 squared prediction errors for each model.
7. The model with the lower average squared prediction error generalizes better.

The catch: fitting a model to 5 data points and predicting 1 is inherently noisy. A single outlying data point that happens to be held out can dominate the cross-validated error. With 6 folds, you have only 6 error estimates to average, which may not be enough to produce a stable ranking. This is why cross-validation results with small $N$ should be interpreted cautiously and ideally alongside information criteria.

### Choosing Among Comparison Methods

With several comparison tools available, a natural question is: "Which one should I use?" The answer depends on the research context, but some general guidelines apply:

**For standard model comparison in behavioral research** (comparing 2--4 candidate models with $N < 20$ data points per individual): Use **AICc** as the primary criterion, report **$R^2$** for descriptive context, and examine **residual plots** for every model. This combination is sufficient for most published behavioral research.

**When AIC and BIC disagree**: Report both and discuss the tension. The disagreement tells you that the extra parameter provides moderate but not overwhelming improvement. Consider the research question: if you need the most accurate predictions possible (e.g., for a clinical application), lean toward AIC's recommendation. If you want to make a claim about the underlying process (e.g., "discounting is hyperbolic, not hyperboloid"), lean toward BIC's more conservative selection.

**When you have enough data** (e.g., many conditions per participant, or group-level comparison): Add **cross-validation** to the analysis. Cross-validation provides a direct check on the AIC/BIC rankings. If all three methods agree, you can be very confident. If they disagree, investigate why.

**Always, regardless of sample size**: Generate and inspect **residual plots**. No numerical metric can substitute for visual inspection of residuals. A model with the best AIC but systematic residuals is still misspecified.

### The Bias-Variance Tradeoff

The bias-variance tradeoff is the conceptual framework that unifies all of the preceding tools. It explains *why* model comparison is necessary and *why* the best-fitting model is not always the best model.

Every model's prediction error can be decomposed into three components:

$$\text{Total Error} = \text{Bias}^2 + \text{Variance} + \text{Irreducible Noise}$$

- **Bias** is the systematic error introduced by simplifying assumptions. A model that is too simple (e.g., fitting a line to curved data) has high bias because its functional form cannot capture the true relationship, no matter how much data you collect. The line will always miss the curvature. This is **underfitting**.
- **Variance** is the error introduced by sensitivity to the particular dataset. A model that is too complex (e.g., a high-degree polynomial) has high variance because it will fit very differently depending on which particular data points happen to be in the sample. Collect a different sample from the same participant, and the complex model's parameter estimates may change dramatically. This is **overfitting**.
- **Irreducible noise** is the random variability inherent in the data that no model can capture. This includes measurement error, moment-to-moment fluctuations in attention, and all the sources of variability that are outside the model's scope.

The tradeoff arises because bias and variance typically move in opposite directions as model complexity changes:

- **Simple models** (few parameters): High bias, low variance. They may miss real patterns (underfitting) but are stable across datasets. Give a simple model different samples from the same participant, and you will get similar parameter estimates and similar predictions each time.
- **Complex models** (many parameters): Low bias, high variance. They can capture intricate patterns but are unstable, fitting noise in each particular dataset (overfitting). Give a complex model different samples, and you may get wildly different parameter estimates.

The **optimal model** minimizes total error by finding the sweet spot where the combined effect of bias and variance is smallest. This is precisely what AIC, BIC, and cross-validation attempt to identify, each from a different theoretical perspective.

In behavior science, the bias-variance tradeoff has practical consequences. With the small sample sizes typical of single-subject research, variance is a particularly serious concern. A model with one too many free parameters can produce wildly different parameter estimates across subjects or conditions, undermining the generality of conclusions. Parsimony is not mere aesthetics; it is a statistical necessity.

Consider a clinical example. You are using a demand curve to characterize a client's reinforcer pathology. If you use a model with too many parameters, the parameter estimates for this client may be unstable --- run the assessment again next week, and you might get very different values, leading to different clinical recommendations. A simpler model with fewer parameters might give slightly less precise estimates, but those estimates will be more reliable across repeated assessments. In clinical decision-making, reliability is often more important than precision.

**The bias-variance tradeoff and each comparison tool:**

- **$R^2$ and loss metrics** do not account for the tradeoff at all. They measure only fit (inversely related to bias) and ignore variance entirely. This is why they always favor more complex models.
- **AIC** approximates the total error (bias$^2$ + variance) under certain conditions. Its penalty term ($2K$) is a rough estimate of the variance contribution from $K$ parameters.
- **BIC** provides a stronger penalty that more aggressively guards against variance, at the cost of potentially allowing more bias.
- **Cross-validation** directly estimates the total error by measuring prediction accuracy on unseen data. Both bias and variance contribute to poor cross-validated performance.
- **Adjusted $R^2$** provides a rough adjustment for variance but is less principled than AIC or BIC.

Understanding the bias-variance tradeoff helps you understand *why* these tools sometimes disagree: they make different implicit tradeoffs between the cost of bias and the cost of variance.

**A behavioral analogy:** Consider a behavior therapist developing a treatment plan. An overly specific plan (targeting 15 different behaviors with 15 different interventions) is like a high-variance model: it might be optimized for this particular client at this particular moment, but it will be fragile and hard to implement consistently. An overly general plan (one intervention for everything) is like a high-bias model: it is easy to implement consistently but may miss important features of the client's behavioral profile. The best plan, like the best model, finds the sweet spot.

---

## Applying the 8-Step Framework

This week, we apply the 8-step modeling framework to the task of comparing three candidate models of delay discounting data: the exponential model, Mazur's hyperbolic model, and Myerson and Green's hyperboloid model. The "phenomenon" this week is model selection itself --- the process of choosing among competing quantitative accounts.

### Step 1: Get the Behavioral Phenomenon Clearly in Mind

A person is presented with choices between a smaller-sooner and a larger-later reward at several delays. At each delay, the researcher identifies the **indifference point**: the smaller-sooner amount that is subjectively equivalent to the larger-later amount. As delay increases, the indifference point decreases --- the person discounts the future reward more heavily. We have a set of delay-indifference point pairs and want to determine which mathematical function best describes the discounting pattern.

The phenomenon, then, is not discounting per se (that was the focus of an earlier week). The phenomenon is the **model selection problem**: given data and multiple candidate models, how do we make a principled choice? This is a higher-order modeling activity --- modeling the process of modeling.

### Step 2: Define the Behavioral Processes and Scope of the Model

The scope is narrow and specific: we are not modeling why discounting occurs (that would require a process model). We are comparing three descriptive functions to determine which provides the best balance of fit and parsimony for a given dataset. The model applies to steady-state discounting data from a single individual.

We exclude from scope: within-session variability, learning effects across assessments, the influence of reward type or magnitude on model selection, and group-level model comparison (though all of these are important extensions). Our comparison is for one participant, one reward type, one dataset.

### Step 3: Identify the Behavioral Principles and Quantitative Laws

Three candidate models, each with an empirical and theoretical pedigree:

**Exponential discounting:**

$$V = A \cdot e^{-kD}$$

This model has 1 free parameter ($k$), assuming $A$ is the undiscounted amount (known, not estimated). It predicts a constant proportional decrease in value per unit of delay --- that is, the fraction of value lost per day is the same whether the delay is 1 day or 100 days. It is the normative model from economics and follows from the assumption of constant discount rate.

**Mazur's hyperbolic discounting:**

$$V = \frac{A}{1 + kD}$$

This model also has 1 free parameter ($k$). It predicts steeper discounting at short delays and shallower discounting at long delays, producing the characteristic "hyperbolic" curve. Unlike the exponential, it implies a decreasing discount rate: proportionally more value is lost per unit time at short delays than at long delays. This property leads to preference reversals, which are well-documented empirically. It is the dominant descriptive model in behavior science (Mazur, 1987).

**Myerson and Green's hyperboloid discounting:**

$$V = \frac{A}{(1 + kD)^s}$$

This model has 2 free parameters ($k$ and $s$). When $s = 1$, it reduces to Mazur's hyperbolic. When $s < 1$, the curve is less bowed than the hyperbolic; when $s > 1$, it is more bowed. The additional parameter $s$ controls the degree of curvature, allowing the model to accommodate individual differences in the shape of the discounting function. It nests the hyperbolic as a special case, making the comparison particularly clean: the question is whether the extra parameter $s$ is justified.

### Step 4: State All Simplifying Assumptions

- Indifference points are measured without error (or at least, measurement error is small relative to the discounting effect).
- The discount function is the same across all delays (no context effects, order effects, or learning across the assessment).
- The undiscounted amount $A$ is known and does not need to be estimated.
- The data are from a single individual at steady state.
- Residuals are assumed to be normally distributed with constant variance for likelihood-based comparisons (AIC, BIC). This assumption is needed to write down the likelihood function.
- The three candidate models represent a reasonable set of alternatives. (We are not testing every conceivable discounting model, only these three.)

### Step 5: Write the Model Verbally, Then Mathematically

We have already stated the three models mathematically in Step 3. The comparison framework is:

1. Fit each model to the data by minimizing the sum of squared residuals (equivalently, maximizing the normal likelihood under the assumption of normally distributed errors).
2. Record the residual sum of squares ($SS_{res}$), the number of parameters ($K$), and the sample size ($N$).
3. Compute $R^2$, AIC, and BIC for each model.
4. Generate residual plots for each model to check for systematic misspecification.
5. Compare models on all metrics, giving priority to AIC and BIC because they penalize complexity.

Verbally: "We ask which of three discounting functions --- exponential, hyperbolic, or hyperboloid --- best describes this participant's data when the penalty for using extra parameters is taken into account."

### Step 6: Verify Dimensional Consistency

For each model, $V$ is in the same units as $A$ (e.g., dollars), $D$ is in units of time (e.g., days), and $k$ has units of $1/\text{time}$ (e.g., $1/\text{days}$). In the hyperboloid, $s$ is dimensionless (it is an exponent). The argument of the exponential ($kD$) is dimensionless (time$^{-1}$ multiplied by time), as required for an exponent. The denominator of the hyperbolic and hyperboloid is dimensionless ($1$ plus a dimensionless product, raised to a dimensionless power). Units are consistent across all three models.

For AIC and BIC: $K$ is a count (dimensionless), $N$ is a count (dimensionless), and $\ln(L)$ is dimensionless (the log of a probability density, though its interpretation requires care). AIC and BIC are on the same dimensionless scale across models, which is what allows comparison.

### Step 7: Specify Starting Values and Constraints

- $k > 0$ (discounting must be positive; a negative $k$ would imply increasing value with delay, which contradicts the phenomenon).
- $s > 0$ for the hyperboloid (negative $s$ would invert the function in ways that are not behaviorally meaningful).
- Starting value for $k$: A common heuristic is $k_0 = 1 / D_{median}$, where $D_{median}$ is the median delay in the dataset. This places the initial estimate in a region where the function shows moderate discounting.
- Starting value for $s$: $s_0 = 1$ (the hyperbolic special case). This is a natural starting point because it is the nested model.
- The models apply to data where $D \geq 0$ and $0 \leq V \leq A$.
- The fitting algorithm (e.g., Levenberg-Marquardt or other nonlinear least-squares solver) should be run from multiple starting values to guard against convergence to local minima.

### Step 8: Check the Math, Test Against Data, and Derive Predictions

**Verify:** Each model produces sensible boundary behavior. At $D = 0$, all three models yield $V = A$ (the full undiscounted amount). As $D \to \infty$, all three models yield $V \to 0$ (complete discounting). These are qualitatively correct and match what we know about discounting behavior.

**Validate:** Fit each model to the data, compute the comparison metrics, and select the model with the best balance of fit and parsimony. The Worked Example below illustrates this process with specific numbers.

**Solve:** Once a model is selected, use it to predict indifference points at new delays not included in the original data. This is the practical payoff of model comparison: reliable out-of-sample prediction. For example, if the selected model is the hyperbolic with $k = 0.025$, we can predict the indifference point at a delay of 500 days: $V = 100 / (1 + 0.025 \times 500) = 100 / 13.5 = \$7.41$.

---

## Worked Example

### The Data

A participant completes a delay discounting task with a larger-later amount of $A = \$100$ at six delays. The indifference points are:

| Delay (days) | Indifference Point (\$) |
|:---:|:---:|
| 1 | 95.0 |
| 7 | 82.0 |
| 30 | 55.0 |
| 90 | 30.0 |
| 180 | 18.0 |
| 365 | 10.0 |

These data show a clear pattern of declining subjective value with increasing delay, with the decline being steeper at shorter delays and shallower at longer delays --- a pattern suggestive of hyperbolic rather than exponential discounting.

### Fitting the Three Models

We use nonlinear least-squares regression to fit each model, minimizing $SS_{res} = \sum (y_i - \hat{y}_i)^2$.

**Exponential model:** $V = 100 \cdot e^{-0.0065 \cdot D}$, with $K = 1$

| Delay | Observed | Predicted | Residual |
|:---:|:---:|:---:|:---:|
| 1 | 95.0 | 99.35 | -4.35 |
| 7 | 82.0 | 95.55 | -13.55 |
| 30 | 55.0 | 82.27 | -27.27 |
| 90 | 30.0 | 55.72 | -25.72 |
| 180 | 18.0 | 31.04 | -13.04 |
| 365 | 10.0 | 9.44 | 0.56 |

$SS_{res} = 4.35^2 + 13.55^2 + 27.27^2 + 25.72^2 + 13.04^2 + 0.56^2$
$SS_{res} = 18.92 + 183.60 + 743.65 + 661.52 + 170.04 + 0.31 = 1778.04$

Notice the residuals: they are large and negative at intermediate delays, revealing a systematic pattern. The exponential decays too slowly at short delays and too quickly at intermediate delays. This systematic pattern is a clear sign of model misspecification.

**Hyperbolic model (Mazur):** $V = \frac{100}{1 + 0.025 \cdot D}$, with $K = 1$

| Delay | Observed | Predicted | Residual |
|:---:|:---:|:---:|:---:|
| 1 | 95.0 | 97.56 | -2.56 |
| 7 | 82.0 | 85.11 | -3.11 |
| 30 | 55.0 | 57.14 | -2.14 |
| 90 | 30.0 | 30.77 | -0.77 |
| 180 | 18.0 | 18.18 | -0.18 |
| 365 | 10.0 | 9.88 | 0.12 |

$SS_{res} = 6.55 + 9.67 + 4.58 + 0.59 + 0.03 + 0.01 = 21.44$

The residuals are dramatically smaller and show no systematic pattern. The largest residual is about 3 dollars, compared to 27 dollars for the exponential. The hyperbolic captures the shape of the data far better.

**Hyperboloid model (Myerson & Green):** $V = \frac{100}{(1 + 0.022 \cdot D)^{1.05}}$, with $K = 2$

| Delay | Observed | Predicted | Residual |
|:---:|:---:|:---:|:---:|
| 1 | 95.0 | 97.72 | -2.72 |
| 7 | 82.0 | 85.84 | -3.84 |
| 30 | 55.0 | 57.91 | -2.91 |
| 90 | 30.0 | 30.47 | -0.47 |
| 180 | 18.0 | 17.49 | 0.51 |
| 365 | 10.0 | 9.27 | 0.73 |

$SS_{res} = 7.40 + 14.75 + 8.47 + 0.22 + 0.26 + 0.53 = 31.63$

The hyperboloid with $s = 1.05$ fits slightly worse than the hyperbolic in this case. This is because $s$ is very close to 1.0, meaning the hyperboloid is essentially the hyperbolic with a slightly different $k$ value. The optimizer has not found a meaningfully better solution by adding the extra parameter --- the data simply do not require the additional flexibility.

### Computing $R^2$

First, compute $SS_{tot}$:

$\bar{y} = (95 + 82 + 55 + 30 + 18 + 10) / 6 = 290 / 6 = 48.33$

$SS_{tot} = (95 - 48.33)^2 + (82 - 48.33)^2 + (55 - 48.33)^2 + (30 - 48.33)^2 + (18 - 48.33)^2 + (10 - 48.33)^2$

$SS_{tot} = 2177.51 + 1132.45 + 44.49 + 336.09 + 919.71 + 1469.35 = 6079.60$

Now:

| Model | $SS_{res}$ | $R^2$ |
|:---:|:---:|:---:|
| Exponential | 1778.04 | $1 - 1778.04/6079.60 = 0.708$ |
| Hyperbolic | 21.44 | $1 - 21.44/6079.60 = 0.996$ |
| Hyperboloid | 31.63 | $1 - 31.63/6079.60 = 0.995$ |

By $R^2$ alone, the hyperbolic and hyperboloid are nearly identical ($R^2 = 0.996$ vs. $0.995$), and both vastly outperform the exponential ($R^2 = 0.708$). But remember: $R^2$ does not account for the hyperboloid's extra parameter. We need AIC and BIC for a fair comparison.

### Computing AIC and BIC

Under the assumption of normally distributed residuals, the log-likelihood for a model with $N$ observations and residual sum of squares $SS_{res}$ is:

$$\ln(L) = -\frac{N}{2}\ln(2\pi) - \frac{N}{2}\ln\left(\frac{SS_{res}}{N}\right) - \frac{N}{2}$$

We compute the full AIC and BIC using $N = 6$:

**Exponential** ($K = 1$):
- $\ln(SS_{res}/N) = \ln(1778.04/6) = \ln(296.34) = 5.691$
- $\ln(L) = -3\ln(2\pi) - 3(5.691) - 3 = -5.502 - 17.073 - 3 = -25.575$
- $AIC = 2(1) - 2(-25.575) = 2 + 51.15 = 53.15$
- $BIC = 1 \cdot \ln(6) - 2(-25.575) = 1.792 + 51.15 = 52.94$

**Hyperbolic** ($K = 1$):
- $\ln(SS_{res}/N) = \ln(21.44/6) = \ln(3.573) = 1.274$
- $\ln(L) = -3\ln(2\pi) - 3(1.274) - 3 = -5.502 - 3.822 - 3 = -12.324$
- $AIC = 2(1) - 2(-12.324) = 2 + 24.648 = 26.65$
- $BIC = 1 \cdot \ln(6) - 2(-12.324) = 1.792 + 24.648 = 26.44$

**Hyperboloid** ($K = 2$):
- $\ln(SS_{res}/N) = \ln(31.63/6) = \ln(5.272) = 1.663$
- $\ln(L) = -3\ln(2\pi) - 3(1.663) - 3 = -5.502 - 4.989 - 3 = -13.491$
- $AIC = 2(2) - 2(-13.491) = 4 + 26.982 = 30.98$
- $BIC = 2 \cdot \ln(6) - 2(-13.491) = 3.584 + 26.982 = 30.57$

### Computing AICc

Given the small sample size ($N = 6$), we should also compute AICc:

**Exponential** ($K = 1$): $AICc = 53.15 + \frac{2(1)(2)}{6 - 1 - 1} = 53.15 + 1.0 = 54.15$

**Hyperbolic** ($K = 1$): $AICc = 26.65 + \frac{2(1)(2)}{6 - 1 - 1} = 26.65 + 1.0 = 27.65$

**Hyperboloid** ($K = 2$): $AICc = 30.98 + \frac{2(2)(3)}{6 - 2 - 1} = 30.98 + 4.0 = 34.98$

Notice that AICc increases the hyperboloid's penalty substantially (from 30.98 to 34.98), widening the gap between the hyperbolic and hyperboloid. With small $N$, the cost of extra parameters is higher.

### Summary Table

| Model | $K$ | $R^2$ | $SS_{res}$ | AIC | AICc | BIC |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Exponential | 1 | 0.708 | 1778.04 | 53.15 | 54.15 | 52.94 |
| Hyperbolic | 1 | 0.996 | 21.44 | 26.65 | 27.65 | 26.44 |
| Hyperboloid | 2 | 0.995 | 31.63 | 30.98 | 34.98 | 30.57 |

### Interpretation

The hyperbolic model wins decisively on every metric. Compared to the exponential, the hyperbolic has $\Delta$AIC = 26.5 and $\Delta$BIC = 26.5 --- overwhelming evidence in favor of the hyperbolic. The exponential simply cannot capture the shape of these data. Its $R^2$ of 0.708 confirms that it leaves nearly 30% of the variance unexplained, and its residuals show clear systematic misspecification.

The more interesting comparison is between the hyperbolic and the hyperboloid. The hyperbolic has lower AIC by 4.33 units and lower BIC by 4.13 units. Using AICc (more appropriate for $N = 6$), the gap widens to 7.33 units. All criteria favor the simpler hyperbolic model. The hyperboloid's extra parameter ($s = 1.05$) provides virtually no improvement --- $s$ is close to 1.0, which is the hyperbolic special case. The added complexity is not justified by the data.

This outcome illustrates a key principle: **the hyperboloid is not a "worse" model in general --- it is simply unnecessary for this particular dataset.** For a different participant whose discounting function deviates more from the standard hyperbolic shape (e.g., $s$ substantially different from 1), the hyperboloid might win. Model comparison is always relative to the data at hand.

### Computing Loss Metrics

For completeness, we compute MAE and RMSE for each model:

| Model | MAE | RMSE |
|:---:|:---:|:---:|
| Exponential | $(4.35 + 13.55 + 27.27 + 25.72 + 13.04 + 0.56)/6 = 14.08$ | $\sqrt{1778.04/6} = 17.22$ |
| Hyperbolic | $(2.56 + 3.11 + 2.14 + 0.77 + 0.18 + 0.12)/6 = 1.48$ | $\sqrt{21.44/6} = 1.89$ |
| Hyperboloid | $(2.72 + 3.84 + 2.91 + 0.47 + 0.51 + 0.73)/6 = 1.86$ | $\sqrt{31.63/6} = 2.30$ |

The hyperbolic's MAE of \$1.48 means its predictions are off by less than \$1.50 on average --- excellent accuracy for a clinical assessment. The RMSE of \$1.89 is close to the MAE, indicating that errors are relatively uniform in size (no single data point is driving the error). The exponential's MAE of \$14.08 means its predictions are off by more than \$14 on average --- clearly inadequate.

Note the RMSE-to-MAE ratio for the exponential: $17.22 / 14.08 = 1.22$. This ratio, while not extreme, indicates that some residuals are larger than others --- consistent with the systematic residual pattern we identified earlier. For the hyperbolic, the ratio is $1.89 / 1.48 = 1.28$, which is similar, suggesting the residuals are relatively uniform. For the hyperboloid, the ratio is $2.30 / 1.86 = 1.24$, also suggesting uniform residuals.

### What Would Make the Hyperboloid Win?

The worked example above showed the hyperbolic winning. But this is not always the case, and it is instructive to consider when the hyperboloid would be preferred. Imagine a participant whose discounting function is noticeably more bowed than the standard hyperbolic --- perhaps their indifference points drop off very steeply at short delays but then flatten out more than the hyperbolic predicts at long delays. For such a participant, $s$ might be substantially different from 1.0 (say, $s = 0.6$ or $s = 1.5$), and the hyperboloid's improved fit would be large enough to overcome the AIC/BIC penalty.

This point is important: the "right" model depends on the individual's data. In a study with 50 participants, the hyperbolic might be preferred for 35, the hyperboloid for 12, and the exponential for 3. Reporting model comparison results at the individual level, not just the group level, is good practice. One-size-fits-all model selection can mask meaningful individual differences in the shape of behavior.

### Making a Prediction

The practical payoff of model selection is reliable prediction. Having selected the hyperbolic model with $k = 0.025$, we can now predict indifference points at delays not included in the original assessment:

- At $D = 14$ days: $V = 100 / (1 + 0.025 \times 14) = 100 / 1.35 = \$74.07$
- At $D = 500$ days: $V = 100 / (1 + 0.025 \times 500) = 100 / 13.5 = \$7.41$
- At $D = 730$ days (2 years): $V = 100 / (1 + 0.025 \times 730) = 100 / 19.25 = \$5.19$

These predictions are useful only to the extent that the model is well-chosen. If we had used the exponential model (with its $R^2$ of 0.708 and systematic residuals), these predictions would be unreliable. Model comparison is what gives us confidence that these predictions are trustworthy.

---

## Plain-Language Interpretation

AIC and BIC both ask the same fundamental question: **"Does the improvement in fit from adding a parameter justify the added complexity?"** They are like a penalty for being fancy. Every parameter you add must earn its keep by improving the model's account of the data by more than the penalty it incurs.

Think of it this way. You are packing for a trip. Every item you add to your suitcase has a cost (weight, space) and a benefit (usefulness at your destination). A model parameter is like an item in your suitcase. Some items are essential --- without them, the trip fails. Others are marginal --- nice to have but not worth the extra weight. AIC and BIC are like a weight limit that forces you to justify each item.

A model that explains 95% of variance with 2 parameters may be better than one that explains 96% with 4 parameters. The extra 1% of variance explained might just be noise, and the two extra parameters make the model less stable and less interpretable. AIC and BIC formalize this intuition by converting it from a vague preference into a quantitative comparison.

Here is another way to think about it. Imagine you are describing a friend to someone who has never met them. You could give a 2-sentence description ("Tall, works at a bakery") or a 200-page biography. The 2-sentence description is incomplete but captures the essentials. The 200-page biography is more "accurate" but most of it is noise --- specific events and details that would not help you recognize the friend on the street. A good model, like a good description, captures the essential pattern and omits the noise.

$R^2$ tells you how well the model describes the data. AIC and BIC tell you how well the model *deserves* to describe the data given how many parameters it uses. Loss metrics (MAE, MSE, RMSE) tell you how far off the predictions are in concrete, interpretable units. Cross-validation tells you how well the model predicts data it has not seen. Together, these tools give a comprehensive picture of model quality. No single metric is sufficient; the full picture requires multiple perspectives.

---

## Assumptions and Limitations

Every model comparison tool rests on assumptions, and knowing these assumptions is essential for interpreting results correctly.

**AIC assumptions:**
- AIC is derived as a large-sample approximation to the expected Kullback-Leibler divergence. With small samples (common in behavioral research), the approximation may be poor. Using AICc partially addresses this, but even AICc is an approximation.
- AIC assumes the candidate models are fit by maximum likelihood (or an equivalent method such as least squares under normality).
- AIC does not assume that the "true" model is among the candidates. It selects the model that is closest to the truth in a predictive sense, even if all candidates are wrong. This is a strength in behavior science, where all models are known to be approximations.

**BIC assumptions:**
- BIC assumes that the true data-generating model **is** in the candidate set. If this assumption is violated, BIC's selection may be suboptimal. In practice, this assumption is almost certainly false, but BIC's stronger complexity penalty can still be useful as a guard against overfitting.
- BIC's stronger complexity penalty means it tends to underfit when the true model is moderately complex and the sample is small.
- BIC is a large-sample approximation to the log marginal likelihood. Like AIC, it becomes more accurate as $N$ grows.

**Cross-validation assumptions:**
- Cross-validation requires enough data to produce meaningful training and test sets. With 5 or 6 data points, individual folds may be too small for reliable estimation, and cross-validated error estimates may have high variability.
- Results can depend on how the data are split, especially with small $N$. LOOCV avoids this but can itself be high-variance.
- Cross-validation assumes that training and test data are drawn from the same distribution. If a participant's behavior changes between conditions (e.g., due to fatigue or learning), this assumption is violated.

**General limitations:**
- All comparison methods assume **independent observations**. If data points are serially correlated (e.g., sequential trials within a session where the response on one trial affects the next), standard AIC and BIC may underestimate model complexity. Specialized methods exist for correlated data but are beyond the scope of this chapter.
- No comparison method tells you that a model is **"true."** It tells you which model is best *among those considered*. If all candidates are poor, the "best" model may still be inadequate. Always check residuals.
- Model comparison is always **relative, never absolute**. A model can win the comparison and still have systematic residuals that signal misspecification. The comparison tells you which model is best in the set; residual analysis tells you whether the best model is good enough.
- The candidate set matters. If you compare three bad models, you will select the least bad one. If you compare three good models, you will identify subtle differences among them. The quality of model comparison depends on the quality of the models being compared.

---

## Connection to Empirical Behavior Science

Model comparison is not an abstract statistical exercise in behavior science --- it is a routine and consequential part of published research across multiple domains.

**Delay discounting.** The comparison of exponential, hyperbolic, and hyperboloid discounting models is one of the most thoroughly studied model comparisons in the behavioral literature. Mazur (1987) established the hyperbolic model as the dominant descriptive account of discounting in non-human animals. Mazur (2001) extended the hyperbolic framework to more complex choice situations, comparing it against exponential and other alternatives using systematic model comparison. Mazur (2006) provided a broader review of mathematical models in the experimental analysis of behavior, emphasizing the importance of formal model evaluation. Myerson and Green (1995) introduced the hyperboloid and showed that the additional $s$ parameter improved fit for some individuals and commodities, particularly when discounting functions were steeper or shallower than the standard hyperbolic shape. More recent work has compared these models using AIC and BIC, generally finding that the simple hyperbolic is preferred unless the dataset is large enough and the individual's discounting function is sufficiently non-standard to justify the extra parameter.

**The matching law.** McDowell (2005) compared strict matching, generalized matching, and alternative formulations of the matching law, using variance accounted for and other fit metrics to evaluate competing quantitative accounts of concurrent-schedule behavior. The generalized matching law (with bias and sensitivity parameters) consistently outperforms strict matching on fit, but the question of whether the improvement is always justified is exactly the kind of model comparison question addressed by the tools in this chapter. More broadly, model comparison in matching research has helped clarify when and why deviations from strict matching (bias, undermatching) occur and whether they reflect genuine behavioral processes or measurement artifacts.

**Behavioral economics and demand.** The comparison between Hursh and Silberberg's (2008) exponential demand model and alternative demand functions (e.g., linear, power, log-linear) has become standard in behavioral pharmacology and applied behavior analysis. Researchers routinely report $R^2$, AIC, or both when justifying their choice of demand model. The exponential model's dominance in recent years is itself a product of systematic model comparison: it was shown to provide a better balance of fit and interpretability than earlier alternatives.

**Loss metrics in applied behavior analysis.** Cox and Vladescu (2023) discussed the use of loss metrics (MAE, MSE, RMSE) in evaluating quantitative models of behavioral data, emphasizing the importance of selecting metrics that match the goals of the analysis. Their work highlights that no single metric is universally best --- the choice depends on whether the researcher prioritizes average accuracy (MAE), penalizing large errors (MSE/RMSE), or predictive generalization (cross-validation). This work has been particularly influential in encouraging behavior analysts to go beyond $R^2$ as the sole measure of model adequacy.

**General practice.** Across these domains, the trend in behavior science is toward more rigorous and transparent model comparison. Journals increasingly expect researchers to report information criteria alongside $R^2$, to compare multiple candidate models rather than fitting only one, and to justify their model choice on grounds of parsimony as well as fit. The tools in this chapter are becoming standard practice, and fluency with them is increasingly essential for both producing and critically evaluating quantitative behavioral research.

### Connecting Backward: Model Comparison in Earlier Weeks

Every model encountered in this course so far has been presented alongside alternatives, and model comparison has been implicit in the decision to adopt one formulation over another.

**Week 1 (Introduction):** We introduced the linear cumulative-response model $R = k \cdot t$. This model assumes constant response rate. In a sense, every subsequent week has been an exercise in model comparison: testing whether a more complex model (one with curvature, with multiple processes, with additional parameters) provides a better account of behavior than the simple linear baseline. The tools in this chapter formalize that comparison.

**Week 2 (Matching):** The strict matching law, the generalized matching law, and alternative choice models all describe concurrent-schedule data. We noted that the generalized matching law fits better, but did not have a formal framework for deciding whether the improvement justified the extra parameters. Now we do: AIC and BIC provide that framework. You can revisit the matching data from Week 2 and apply this week's tools to make a formal comparison.

**Week 3 (Discounting):** The worked example in this chapter directly addresses the model comparison that was deferred in the discounting week. There, we presented the hyperbolic model; here, we formally justify it against exponential and hyperboloid alternatives.

**Week 4 (Demand):** The exponential demand model was presented as the standard, but alternative demand functions exist. Model comparison using AIC is now standard in demand research, and this week's tools explain why.

**Week 5 (Learning):** The Rescorla-Wagner model was compared informally with other learning rules. Formal model comparison (e.g., using AIC to compare Rescorla-Wagner with Pearce-Hall or other associative models) is an active area of research in computational learning theory.

### Connecting Forward: Model Comparison in Later Weeks

Model comparison will remain a recurring theme throughout the rest of the course:

**Week 7 onward:** As models become more complex (signal detection, dynamical systems, computational models), the risk of overfitting increases and the need for formal comparison becomes more acute. The tools from this week --- AIC, BIC, residual analysis, cross-validation --- will be applied to every subsequent model.

**Machine learning models:** When we encounter machine learning approaches later in the course, model comparison takes on an even more central role. Cross-validation becomes the primary tool because ML models often lack closed-form likelihoods that AIC and BIC require. The bias-variance tradeoff is the core organizing principle of machine learning.

**Multi-model inference:** Advanced treatments of model comparison go beyond selecting a single winner and instead weight predictions across multiple models according to their AIC or BIC values (model averaging). While this is beyond the scope of this chapter, it represents a natural extension that some students may encounter in their research.

---

## Exercises for Reflection

1. A colleague fits a 4-parameter model to a dataset with 6 data points and reports $R^2 = 0.99$. They claim the model provides an excellent account of the data. What concerns would you raise, and what additional analyses would you recommend? How would you explain the problem to someone who is not familiar with overfitting?

2. You are comparing two models of demand: the exponential model (2 parameters: $Q_0$ and $\alpha$) and a modified model with an additional shape parameter (3 parameters). AIC favors the 3-parameter model, but BIC favors the 2-parameter model. How would you interpret this disagreement, and what would you recommend? Under what circumstances might you side with AIC, and under what circumstances with BIC?

3. Consider the bias-variance tradeoff in the context of single-subject research. With data from a single participant across 5 conditions, how does the small sample size affect the tradeoff? Would you generally lean toward simpler or more complex models in this context, and why? How might your answer change if you had data from 50 conditions?

4. A research team uses cross-validation to compare models and finds that the hyperbolic discounting model has lower cross-validated RMSE than the exponential model, but higher cross-validated RMSE than the hyperboloid model. However, AIC and BIC both favor the hyperbolic. How would you reconcile these findings? What might explain the discrepancy between cross-validation and information criteria in this case?

---

## Key Takeaways

- **Overfitting** occurs when a model captures noise rather than signal. Adding parameters always improves fit to the training data but can worsen predictions for new data. With the small sample sizes common in behavior science, overfitting is a constant concern.
- **Parsimony** (Occam's Razor) favors the simplest model that adequately describes the data. AIC and BIC formalize this principle by imposing mathematical penalties for model complexity.
- **Residual analysis** is a diagnostic tool that should precede numerical model comparison: systematic patterns in residuals signal model misspecification, regardless of $R^2$ or other summary metrics.
- **$R^2$** quantifies variance explained but always increases with more parameters, making it insufficient alone for model comparison. Use adjusted $R^2$ or information criteria instead.
- **Loss metrics** (MAE, MSE, RMSE) measure prediction error in interpretable units but do not penalize complexity. They are useful for communicating model accuracy but cannot distinguish between a good model and an overfitting model.
- **AIC** ($2K - 2\ln(L)$) balances fit against complexity with an information-theoretic foundation. Lower is better. Use AICc for small samples (which is almost always in behavior science).
- **BIC** ($K \cdot \ln(N) - 2\ln(L)$) imposes a stronger complexity penalty than AIC and is preferred when avoiding overfitting is the priority. Lower is better.
- **Cross-validation** directly measures predictive accuracy on unseen data without relying on mathematical penalties, but requires sufficient data to be reliable.
- The **bias-variance tradeoff** explains why model comparison is necessary: simple models are biased but stable; complex models are flexible but noisy. The best model minimizes total error by finding the sweet spot.
- **Model comparison is always relative**: it identifies the best model among those considered, not the "true" model. All candidates might be inadequate, and the comparison is only as good as the candidate set.
- In behavior science, model comparison is standard practice in discounting (Mazur, 2001, 2006), matching (McDowell, 2005), demand, and learning research. Reporting AIC/BIC alongside $R^2$ is increasingly expected in quantitative behavioral publications.
