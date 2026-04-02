---
title: "Instructor Notes: Week 6 — Model Comparisons"
week: 6
---

## Lecture Objectives

- Students can explain why raw goodness-of-fit (R-squared, SSres) is insufficient for model selection and articulate the overfitting problem.
- Students can compute and interpret AIC, BIC, and at least one loss metric (MAE, MSE, or RMSE) for competing models.
- Students can describe the bias-variance tradeoff and explain how it motivates parsimony in model selection.
- Students can use residual plots to diagnose model misspecification before comparing models numerically.
- Students can apply AIC/BIC comparison to real discounting, matching, or demand datasets and make a justified model selection.

---

## Suggested Lecture Walkthrough (~60 minutes)

### Opening: The Overfitting Demo (10 min)

Begin with a visual demonstration. Show a scatterplot of 6 data points (use the discounting data from the worked example or similar). Fit a straight line, a quadratic, a cubic, and a degree-5 polynomial. Project all four fits overlaid on the same plot.

Key moment: the degree-5 polynomial passes through every point perfectly. Ask the class: "Is this the best model?" Students will intuitively sense something is wrong. Use this to introduce the overfitting concept: perfect fit to training data does not mean good predictions for new data. Show what happens when you generate a second dataset from the same process --- the polynomial oscillates wildly while the simpler model generalizes.

### Residual Analysis (8 min)

Show residual plots for the exponential vs. hyperbolic fits to discounting data. The exponential residuals will show a clear systematic pattern (U-shaped or arched), while the hyperbolic residuals scatter randomly around zero. Emphasize: before computing any comparison metric, always look at residuals. A model with systematic residuals is misspecified, regardless of its R-squared.

Briefly demonstrate residual plots for a well-fitting model vs. a poorly fitting one. Have students practice identifying the pattern (or lack thereof).

### R-squared and Its Limitations (7 min)

Present R-squared as the proportion of variance explained. Compute it for the worked example. Then make the critical point: R-squared never decreases when you add parameters. Show the degree-5 polynomial has R-squared = 1.000. This is why R-squared alone cannot be used for model comparison.

Introduce adjusted R-squared as a partial remedy. Mention benchmarks: R-squared > 0.85-0.90 in lab settings, > 0.60-0.65 in applied settings. Stress that these are guidelines, not cutoffs.

### Loss Metrics: MAE, MSE, RMSE (5 min)

Cover these quickly. The key teaching points are: (1) MAE is most interpretable (original units, easy to explain to clinicians), (2) MSE penalizes large errors more, (3) RMSE combines penalty with interpretability, and (4) none of them penalize complexity. Reference Cox and Vladescu (2023) for a treatment of loss metrics in applied behavior analysis.

### AIC (10 min)

This is the core of the lecture. Present the formula: AIC = 2K - 2ln(L). Explain each component:

- The -2ln(L) term measures lack of fit. Make sure students understand that likelihood is the probability of the data given the model. Higher likelihood = better fit = lower -2ln(L).
- The 2K term is the complexity penalty. Each parameter costs 2 AIC units.
- Lower AIC is better.

**Common student confusion: "What is likelihood?"** Many students have not encountered maximum likelihood. Provide a brief, intuitive explanation: if the model is correct and these are the best parameters, how probable would it be to see exactly this data? The model that makes the observed data most probable (highest likelihood) fits best. AIC then asks whether that fit improvement is worth the parameter cost.

**Common student confusion: "Lower is better? That's backwards."** Emphasize that AIC measures information loss, like a golf score. Less is better. Draw the analogy explicitly.

Present delta-AIC interpretation guidelines: < 2 is negligible, 4-7 is moderate, > 10 is strong.

Mention AICc for small samples. With N = 6 and K = 2, the correction is substantial and should always be used.

### BIC (5 min)

Present BIC = K * ln(N) - 2ln(L). Compare to AIC: the only difference is the complexity penalty. Since ln(N) > 2 for N > 7, BIC penalizes complexity more heavily.

**Common student confusion: "When do I use AIC vs. BIC?"** Give the practical rule: when they agree, report both and move on. When they disagree, report both and discuss. AIC is better for prediction; BIC is better for identifying the "true" model. In practice for behavior science, AIC (or AICc) is more commonly used because samples are small and we are usually interested in prediction.

### Cross-Validation (8 min)

Explain the hold-out logic. Walk through k-fold cross-validation step by step. Emphasize that cross-validation directly tests what we care about: prediction on new data.

Acknowledge the practical limitation: with 5-6 data points (typical in discounting and demand), cross-validation is difficult. Each fold is tiny. This is why AIC/BIC are often preferred in behavior science --- they work with the full dataset.

### The Bias-Variance Tradeoff (7 min)

This is the conceptual capstone. Draw the classic U-shaped curve: x-axis is model complexity, y-axis is prediction error. Show bias decreasing, variance increasing, and total error forming a U. The optimal model sits at the bottom.

Connect back: AIC, BIC, and cross-validation are all trying to find the bottom of this U. They just approach it from different angles.

Relate to single-subject research: with small N, variance is a bigger concern, so parsimony matters more. This is why behavior analysts should generally prefer simpler models unless the data clearly demand complexity.

---

## Common Student Confusions

- **"What does likelihood mean, exactly?"** Be prepared to spend extra time here. Many students conflate likelihood with probability. Use concrete examples: if the model says the predicted value is 50 and the observed value is 52, how probable is that residual under a normal error model?
- **"Lower is better for AIC and BIC, but higher is better for R-squared?"** Yes. Emphasize that AIC/BIC measure information loss (bad), while R-squared measures variance explained (good). Opposite scales, same goal.
- **"If AIC and BIC disagree, which one wins?"** Neither "wins." Report both. Discuss why they disagree (usually because the extra parameter provides a modest improvement that AIC considers worthwhile but BIC does not). This is an opportunity to discuss the purpose of the analysis.
- **"Can I use AIC to compare models with different dependent variables?"** No. AIC (and BIC) can only compare models fit to the same dataset with the same dependent variable. This comes up when students try to compare a model of response rate with a model of proportion.

---

## Key References for This Week

- Mazur, J. E. (1987). An adjusting procedure for studying delayed reinforcement. In M. L. Commons et al. (Eds.), *Quantitative analyses of behavior* (Vol. 5, pp. 55-73).
- Mazur, J. E. (2001). Hyperbolic value addition and general models of animal choice. *Psychological Review, 108*, 96-112.
- Mazur, J. E. (2006). Mathematical models and the experimental analysis of behavior. *Journal of the Experimental Analysis of Behavior, 85*, 275-291.
- McDowell, J. J. (2005). On the classic and modern theories of matching. *Journal of the Experimental Analysis of Behavior, 84*, 111-127.
- Myerson, J., & Green, L. (1995). Discounting of delayed rewards: Models of individual choice. *Journal of the Experimental Analysis of Behavior, 64*, 263-276.
- Cox, D. J., & Vladescu, J. C. (2023). Quantitative model evaluation in behavior analysis. Relevant treatment of loss metrics and model evaluation practices.
- Burnham, K. P., & Anderson, D. R. (2002). *Model selection and multimodel inference* (2nd ed.). Springer. The authoritative reference on AIC-based model selection.

---

## Discussion Prompts

1. **The "all models are wrong" question.** George Box famously said "All models are wrong, but some are useful." If no model is true, what does it mean to select the "best" model? How does this affect how you interpret AIC or BIC results?

2. **Parsimony in practice.** A colleague argues that parsimony is just laziness --- that we should always use the most complex model available because it will capture the most detail. How would you respond, using the bias-variance tradeoff?

3. **Clinical implications.** You are selecting a discounting model to predict a client's future choices as part of a treatment plan. Would you prioritize R-squared, AIC, BIC, or cross-validation? Why might your answer differ from a researcher publishing a group study?

4. **When metrics disagree.** Present a scenario where R-squared favors Model A, AIC favors Model B, and BIC favors Model C. What would you do? Is this a failure of the methods, or an informative outcome?

---

## In-Class Demonstrations

### Visual Model Comparison

Prepare a single dataset (the worked example from the chapter works well) and three overlaid model fits: exponential, hyperbolic, and hyperboloid. Use a projected graph with the data as points and each model as a different colored curve.

Ask students to visually predict which model fits best before showing any numbers. Then reveal R-squared, AIC, and BIC. Discuss whether the visual impression matches the quantitative result.

Follow up by showing the residual plots for each model side by side. The exponential's systematic residuals should be visually striking compared to the hyperbolic's random scatter.

### Parameter Sensitivity Demo

If time permits, show what happens to model comparison results as you change one data point. Move the longest-delay indifference point up or down and recompute AIC/BIC. This demonstrates that model selection can be sensitive to individual data points with small N, reinforcing the importance of data quality and the limitations of any comparison method.

---

## Transition to Lab

This week's lab has students fitting multiple models to behavioral data and computing comparison metrics hands-on. The lab will cover:

- Fitting exponential, hyperbolic, and hyperboloid models to delay discounting data using nonlinear least-squares in Python (or R).
- Computing R-squared, AIC, AICc, and BIC for each fitted model.
- Generating and interpreting residual plots.
- Comparing models across multiple participants to see how the "winning" model can vary by individual.
- Computing MAE and RMSE to practice with loss metrics.

Remind students that the lab is where these concepts become concrete. Lecture provides the "why" and the formulas; lab provides the "how." Encourage them to bring laptops with their computing environment ready to go.

Specific setup note: students will need their curve-fitting workflow from previous labs. If any students had environment issues in prior weeks, prompt them to resolve those before lab day.
