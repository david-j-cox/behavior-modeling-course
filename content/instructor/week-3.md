---
title: "Instructor Notes: Week 3 — Discounting"
week: 3
---

## Lecture Objectives

- Students should be able to explain why subjective value declines with delay and articulate the difference between exponential and hyperbolic discounting in both verbal and mathematical terms.
- Students should be able to interpret the $k$ parameter as a measure of discount rate and connect higher/lower $k$ values to impulsive/self-controlled choice.
- Students should be able to explain what a preference reversal is, why hyperbolic (but not exponential) discounting predicts it, and why this matters for real-world self-control.
- Students should be able to compute AUC from a set of indifference points and explain its advantages and limitations relative to parametric measures.
- Students should be able to walk through all 8 steps of the modeling framework applied to Mazur's hyperbolic discounting function.

---

## Suggested Lecture Walkthrough (~60 min)

### Opening: The Phenomenon (10 min)

Start with a live demonstration, not a definition. Pose a choice to the class:

> "Would you prefer $50 right now or $100 in 6 months?"

Get a show of hands. Then shift the time frame:

> "Would you prefer $50 in 12 months or $100 in 18 months?"

Most students will switch toward the larger-later option when both rewards are far away. Point out what just happened: the delay *between* the two options is identical (6 months), but preferences changed. This is a preference reversal. Ask: "If your preferences are consistent, should this happen?" Use this as the motivating puzzle for the entire lecture.

Briefly define temporal discounting and indifference points. Explain how indifference points are measured (titrating or adjusting-amount procedures). Sketch a generic discount curve on the board---value on the y-axis, delay on the x-axis---and note that the shape of this curve is the central question.

### The Exponential Baseline (10 min)

Introduce exponential discounting ($V = Ae^{-kD}$) as the "rational" benchmark. Explain what constant proportional decline means: each additional unit of delay reduces value by the same percentage. Draw the exponential curve. Emphasize its key prediction: no preference reversals, because the ratio of two exponential curves is constant over time.

Explain why economists adopted this form: it is time-consistent, it satisfies standard axioms of rational choice, and it is mathematically convenient. Then note that organisms---including the students themselves, as they just demonstrated---do not behave this way.

### Why Hyperbolic Fits Better (15 min)

Introduce Mazur's hyperbolic ($V = A/(1+kD)$). Draw it alongside the exponential. Highlight the key visual difference: the hyperbolic drops steeply at short delays and flattens at long delays, while the exponential drops at a constant proportional rate throughout.

Walk through the preference reversal prediction explicitly. Draw two hyperbolic curves for a smaller-sooner and larger-later reward. Show the crossing point. Explain: at long delays both curves are in their flat tails, and the larger reward dominates. As both options approach, the smaller-sooner curve rises faster (steeper initial slope), and the curves cross. This is the formal basis for the demonstration at the start of class.

Show the worked example from the chapter (or use your own data). Fit the hyperbolic and exponential to the same data. Students should see that the exponential $k$ estimates drift systematically downward across delays---the signature of hyperbolic data being forced into an exponential model. The hyperbolic $k$ estimates are much more stable.

**Common student confusion #1:** "Why does the hyperbolic beat the exponential?" Students sometimes think it is just a curve-fitting trick. Emphasize that the models make *different qualitative predictions* (reversals vs. no reversals) and the hyperbolic is correct on this count. The better quantitative fit is a bonus, not the primary evidence.

### The k Parameter (10 min)

Discuss interpretation of $k$. Higher $k$ = steeper curve = more impulsive. Lower $k$ = shallower curve = more self-controlled. Show how $k$ varies across clinical populations (substance use disorders, ADHD, obesity).

**Common student confusion #2:** "What does $k$ *mean* in practice?" Students may struggle with the units ($1/\text{time}$). Offer a concrete interpretation: $k = 0.10$ per week means that a 10-week delay cuts value roughly in half ($V = A/(1 + 0.10 \times 10) = A/2$). More generally, the half-life of value is $1/k$ (the delay at which value drops to half the face amount). This gives $k$ an intuitive temporal meaning.

Mention the **magnitude effect**: $k$ is not constant across amounts. Larger rewards are discounted less steeply. This is important because it violates the simple model and tells us something about how organisms process amount and delay information.

**Common student confusion #3:** "If $k$ varies across reward types, is it really a trait measure of impulsivity?" This is a genuine open question in the field. Acknowledge the tension. Some researchers treat $k$ as a trans-situational trait; others view it as outcome-specific. The empirical evidence supports partial specificity. This is a good place to preview more complex models (hyperboloid, multi-attribute models).

### Area Under the Curve (5 min)

Introduce AUC as a model-free alternative. Walk through the normalization and trapezoid computation. Emphasize that AUC complements, rather than replaces, parametric measures. Use AUC when you want to compare discounting without committing to a specific functional form. Use $k$ (or the hyperboloid) when you care about the shape of the function or want a mechanistic interpretation.

### Wrap-Up and 8-Step Framework (10 min)

Quickly walk through how the 8-step framework applies to Mazur's model. Students have now seen it applied twice (Week 1 and now). Emphasize the value of Step 4 (assumptions)---many of the limitations of the discounting model come from assumptions that are stated in Step 4 and then known to be violated (e.g., amount-independent $k$).

### Recommended Readings

- **Rachlin, H. (2006).** Notes on discounting. *Journal of the Experimental Analysis of Behavior, 85*, 425--435. Foundational conceptual treatment.
- **Critchfield, T. S., & Kollins, S. H. (2001).** Temporal discounting: Basic research and the analysis of socially important behavior. *Journal of Applied Behavior Analysis, 34*, 101--122. Translational relevance.
- **Odum, A. L., et al. (2020).** Discounting of different outcomes. Demonstrates outcome specificity of discounting.
- **Cox, D. J., & Dallery, J. (2018).** Effects of a second outcome on discounting. Shows that discounting is context-dependent, not just trait-dependent.

---

## Discussion Prompts

1. **Outcome specificity and impulsivity:** If discounting rates differ across outcome types within the same individual (e.g., money vs. health vs. food), what does that mean for using $k$ as a trait measure of impulsivity? Can someone be "impulsive" for food but "self-controlled" for money? What are the implications for clinical assessment?

2. **Preference reversals and self-control strategies:** Preference reversals explain why people make plans for the future (e.g., saving for retirement, committing to a diet) but then abandon them when the smaller-sooner option becomes available. What behavioral interventions exploit this insight? (Hint: think about commitment devices, precommitment, and how they work mathematically in terms of the discount function.)

3. **The magnitude effect and equity:** Larger rewards are discounted less steeply. This means that wealthier individuals (for whom any given dollar amount is relatively "larger" against their wealth) might appear to be more self-controlled. Is steep discounting a property of the individual, a property of the reinforcer magnitude, or an interaction? What are the implications for interpreting group differences in $k$?

4. **Descriptive vs. mechanistic:** Mazur's hyperbolic function describes the shape of discounting well, but it does not explain *why* discounting is hyperbolic. What kinds of mechanistic processes might generate a hyperbolic form? (Examples to prompt discussion: Weber-Fechner-like logarithmic time perception, memory decay, competition among temporal representations.)

---

## In-Class Demonstrations

### Demonstration 1: Estimate Your Own Indifference Points

Give students a brief paper-and-pencil (or digital) questionnaire:

> "For each delay below, what is the most you would pay right now to guarantee receiving $100 at that delay? In other words, what amount of money right now feels equivalent to $100 at each delay?"

| Delay | Your Indifference Point |
|:------|:-----------------------:|
| 1 week | $\_\_\_ |
| 1 month | $\_\_\_ |
| 3 months | $\_\_\_ |
| 6 months | $\_\_\_ |
| 1 year | $\_\_\_ |
| 5 years | $\_\_\_ |

Have students plot their own data (delay on x-axis, indifference point on y-axis). Ask: Does the curve look more like an exponential decay or a hyperbola? Most students will see the characteristic steep-then-flat pattern. If time permits, have a few students share their plots to show individual differences in steepness.

### Demonstration 2: Estimate k

Using the indifference points from Demonstration 1, have students pick one data point and compute $k$ using the rearranged Mazur equation:

$$k = \frac{A - V}{V \cdot D}$$

Then have them compute $k$ from a second data point at a different delay. Are the two estimates similar? If yes, the hyperbolic model is a reasonable description of their data. If the estimates diverge substantially, discuss what might be happening (measurement noise, non-hyperbolic discounting, magnitude effects if they interpreted the task differently).

### Demonstration 3: Preference Reversal Demonstration

Present two choices in sequence:

> Choice A: "Would you prefer $50 in 26 weeks or $100 in 52 weeks?"
> Choice B: "Would you prefer $50 today or $100 in 26 weeks?"

Tally responses for each. If a substantial fraction of students chose $100 in Choice A but $50 in Choice B, you have demonstrated a preference reversal in real time. Connect this back to the crossing of hyperbolic discount curves.

---

## Transition to Lab

This week's lab focuses on the computational side of discounting. Students will:

- Import a dataset of indifference points from multiple hypothetical participants.
- Fit both the hyperbolic ($V = A/(1+kD)$) and exponential ($V = Ae^{-kD}$) models using nonlinear least-squares regression.
- Compare model fits using sum of squared residuals, $R^2$, and (optionally) AIC/BIC.
- Compute AUC for each participant.
- Visualize discount curves with observed data overlaid on fitted functions.
- Interpret $k$ values in behavioral terms and compare across participants.

The lab reinforces the lecture by giving students hands-on experience with the entire modeling pipeline: data, model specification, parameter estimation, model comparison, and interpretation. Emphasize that the goal is not just to get a number out of the software but to understand what the number means and whether the model earned the right to be taken seriously.
