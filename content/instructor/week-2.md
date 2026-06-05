---
title: "Instructor Notes: Week 2 — Matching and Discounting"
week: 2
---

This week covers two historical quantitative models together: the matching law (choice as behavior allocation) and delay discounting (how subjective value declines with delay). The material is naturally taught as two lecture sessions. Part 1 below covers matching; Part 2 covers discounting. Adjust pacing to your schedule---some instructors split this across two class meetings, others compress into one longer session.

## Lecture Objectives

By the end of this week, students should be able to:

**Matching Law**

- Explain why choice is defined as behavior allocation in behavior science, and describe the concurrent VI-VI procedure that generated the matching law
- Write Herrnstein's single-alternative matching equation ($R = kr/(r + r_e)$) from memory and interpret both parameters ($k$ and $r_e$) in behavioral terms
- Write the generalized matching equation in log-ratio form, perform the log-ratio transformation on a dataset, and interpret the slope ($s$) and intercept ($\log b$) of the resulting regression
- Distinguish between strict matching, undermatching, and overmatching, and identify procedural and organismic factors that produce each

**Discounting**

- Explain why subjective value declines with delay and articulate the difference between exponential and hyperbolic discounting in both verbal and mathematical terms
- Interpret the $k$ parameter as a measure of discount rate and connect higher/lower $k$ values to impulsive/self-controlled choice
- Explain what a preference reversal is, why hyperbolic (but not exponential) discounting predicts it, and why this matters for real-world self-control
- Compute AUC from a set of indifference points and explain its advantages and limitations relative to parametric measures

**Both**

- Apply all eight steps of the modeling framework to a concurrent-schedule choice scenario and to Mazur's hyperbolic discounting function

---

## Part 1: Matching Law

### Suggested Lecture Walkthrough (~60 min)

#### Opening: The Phenomenon of Choice (10 min)

Begin with a concrete demonstration of why choice matters. Present data from a classic concurrent VI-VI experiment (Herrnstein, 1961, is ideal). Show the raw data first: response counts and reinforcer counts on each key across several conditions. Ask students what pattern they notice before introducing any equations. The goal is for them to see that response ratios track reinforcement ratios before you formalize this observation.

Emphasize that choice is everywhere---not just in the lab. Every moment, organisms are allocating behavior across available alternatives. The concurrent schedule is simply the preparation that makes this allocation measurable.

#### Herrnstein's Single-Alternative Equation (10 min)

Transition to the single-schedule case. Present data from a single VI schedule where reinforcement rate varies across conditions: response rate increases with reinforcement rate but negatively accelerates. Ask students what function might describe this shape.

Introduce $R = kr/(r + r_e)$. Walk through each parameter:
- $k$: the ceiling on response rate. What constrains it? Motor capacity, motivational limits, schedule constraints.
- $r_e$: extraneous reinforcement. This is the concept students find hardest. Spend time on it. Explain that the organism is always choosing between the measured operant and everything else it could do. $r_e$ quantifies "everything else."

**Typical student struggle:** Students often ask "How can you measure extraneous reinforcement if it is extraneous?" Clarify that $r_e$ is estimated from the curve fit, not measured directly. It is the reinforcement rate at which responding reaches half its ceiling---a parameter inferred from the data, not observed independently.

#### The Generalized Matching Equation (15 min)

Return to the concurrent-schedule case. Show that while response ratios approximately equal reinforcement ratios, the match is not perfect. Introduce the idea of deviations: undermatching and bias.

Present the GME in its power-function form first:

$$\frac{B_1}{B_2} = b\left(\frac{r_1}{r_2}\right)^s$$

Then show how taking the log of both sides linearizes the relationship. This is the critical transformation and a common point of confusion.

**Typical student struggle:** The log-ratio transformation. Many students have not worked with logarithms since introductory math. Take 5 minutes to review: $\log(a/b) = \log(a) - \log(b)$; $\log(x^s) = s \cdot \log(x)$. Show a concrete numerical example: if $B_1/B_2 = 4$, then $\log(B_1/B_2) = 0.602$.

Walk through the meaning of $s$ and $b$:
- $s = 1$: strict matching. Draw the line with slope 1 through the origin.
- $s < 1$: undermatching. Draw the shallower line. Explain in words: the pigeon does not fully differentiate.
- $s > 1$: overmatching. Draw the steeper line.
- $\log(b) \neq 0$: bias. Shift the line up or down.

**Typical student struggle:** Interpreting $s$ and $b$ jointly. Students may confuse bias (intercept shift) with sensitivity (slope change). Use a graph with two lines: same slope but different intercepts (pure bias difference), and same intercept but different slopes (pure sensitivity difference).

#### Connecting to the 8-Step Framework (10 min)

Briefly walk through how the chapter applies the 8-step framework to concurrent VI-VI choice. Highlight:
- Step 1: The importance of knowing the procedure cold before writing equations
- Step 4: The assumptions that are easy to overlook (steady state, molar aggregation, independent schedules)
- Step 6: Dimensional consistency is trivial here because everything is in log ratios (dimensionless), but note this explicitly
- Step 8: What verification looks like (equal reinforcement should produce equal responding if no bias)

#### Applications and Broader Significance (10 min)

Briefly cover applied uses: functional analysis, treatment evaluation, and clinical decision-making. Reference the assigned readings:
- **McDowell (1989)** on quantitative models applied to human behavior---use this to show that matching is not just a pigeon phenomenon
- **Reed and Kaplan (2011)** as a tutorial for applied researchers---assign this as the primary "how to" reading
- **Fisher and Mazur (1997)** on matching in applied contexts---highlight the bridge between basic and applied research

#### Wrap-Up and Transition (5 min)

Summarize the key parameters ($s$, $b$, $k$, $r_e$) and their behavioral interpretations. Note that the matching law is a molar, steady-state description---it tells you where behavior ends up, not how it gets there moment to moment. Then pivot to Part 2: matching describes how behavior is allocated when alternatives differ in reinforcement *rate*; discounting describes how value changes when reinforcement is *delayed*.

---

## Part 2: Discounting

### Suggested Lecture Walkthrough (~60 min)

#### Opening: The Phenomenon (10 min)

Start with a live demonstration, not a definition. Pose a choice to the class:

> "Would you prefer $50 right now or $100 in 6 months?"

Get a show of hands. Then shift the time frame:

> "Would you prefer $50 in 12 months or $100 in 18 months?"

Most students will switch toward the larger-later option when both rewards are far away. Point out what just happened: the delay *between* the two options is identical (6 months), but preferences changed. This is a preference reversal. Ask: "If your preferences are consistent, should this happen?" Use this as the motivating puzzle for the entire lecture.

Briefly define temporal discounting and indifference points. Explain how indifference points are measured (titrating or adjusting-amount procedures). Sketch a generic discount curve on the board---value on the y-axis, delay on the x-axis---and note that the shape of this curve is the central question.

#### The Exponential Baseline (10 min)

Introduce exponential discounting ($V = Ae^{-kD}$) as the "rational" benchmark. Explain what constant proportional decline means: each additional unit of delay reduces value by the same percentage. Draw the exponential curve. Emphasize its key prediction: no preference reversals, because the ratio of two exponential curves is constant over time.

Explain why economists adopted this form: it is time-consistent, it satisfies standard axioms of rational choice, and it is mathematically convenient. Then note that organisms---including the students themselves, as they just demonstrated---do not behave this way.

#### Why Hyperbolic Fits Better (15 min)

Introduce Mazur's hyperbolic ($V = A/(1+kD)$). Draw it alongside the exponential. Highlight the key visual difference: the hyperbolic drops steeply at short delays and flattens at long delays, while the exponential drops at a constant proportional rate throughout.

Walk through the preference reversal prediction explicitly. Draw two hyperbolic curves for a smaller-sooner and larger-later reward. Show the crossing point. Explain: at long delays both curves are in their flat tails, and the larger reward dominates. As both options approach, the smaller-sooner curve rises faster (steeper initial slope), and the curves cross. This is the formal basis for the demonstration at the start of class.

Show the worked example from the chapter (or use your own data). Fit the hyperbolic and exponential to the same data. Students should see that the exponential $k$ estimates drift systematically downward across delays---the signature of hyperbolic data being forced into an exponential model. The hyperbolic $k$ estimates are much more stable.

**Common student confusion #1:** "Why does the hyperbolic beat the exponential?" Students sometimes think it is just a curve-fitting trick. Emphasize that the models make *different qualitative predictions* (reversals vs. no reversals) and the hyperbolic is correct on this count. The better quantitative fit is a bonus, not the primary evidence.

#### The k Parameter (10 min)

Discuss interpretation of $k$. Higher $k$ = steeper curve = more impulsive. Lower $k$ = shallower curve = more self-controlled. Show how $k$ varies across clinical populations (substance use disorders, ADHD, obesity).

**Common student confusion #2:** "What does $k$ *mean* in practice?" Students may struggle with the units ($1/\text{time}$). Offer a concrete interpretation: $k = 0.10$ per week means that a 10-week delay cuts value roughly in half ($V = A/(1 + 0.10 \times 10) = A/2$). More generally, the half-life of value is $1/k$ (the delay at which value drops to half the face amount). This gives $k$ an intuitive temporal meaning.

Mention the **magnitude effect**: $k$ is not constant across amounts. Larger rewards are discounted less steeply. This is important because it violates the simple model and tells us something about how organisms process amount and delay information.

**Common student confusion #3:** "If $k$ varies across reward types, is it really a trait measure of impulsivity?" This is a genuine open question in the field. Acknowledge the tension. Some researchers treat $k$ as a trans-situational trait; others view it as outcome-specific. The empirical evidence supports partial specificity. This is a good place to preview more complex models (hyperboloid, multi-attribute models).

#### Area Under the Curve (5 min)

Introduce AUC as a model-free alternative. Walk through the normalization and trapezoid computation. Emphasize that AUC complements, rather than replaces, parametric measures. Use AUC when you want to compare discounting without committing to a specific functional form. Use $k$ (or the hyperboloid) when you care about the shape of the function or want a mechanistic interpretation.

#### Wrap-Up and 8-Step Framework (10 min)

Quickly walk through how the 8-step framework applies to Mazur's model. Students have now seen it applied to matching (Part 1) and to discounting. Emphasize the value of Step 4 (assumptions)---many of the limitations of the discounting model come from assumptions that are stated in Step 4 and then known to be violated (e.g., amount-independent $k$).

---

## Assigned Readings

**Matching**

- McDowell, J. J. (1989). Two modern developments in matching theory. *The Behavior Analyst, 12*(2), 153--166. https://doi.org/10.1007/BF03392492
- Fisher, W. W., & Mazur, J. E. (1997). Basic and applied research on choice responding. *Journal of Applied Behavior Analysis, 30*(3), 387--410. https://doi.org/10.1901/jaba.1997.30-387
- Reed, D. D., & Kaplan, B. A. (2011). The matching law: A tutorial for practitioners. *Behavior Analysis in Practice, 4*(2), 15--24. https://doi.org/10.1007/BF03391780

**Discounting**

- Rachlin, H. (2006). Notes on discounting. *Journal of the Experimental Analysis of Behavior, 85*(3), 425--435. https://doi.org/10.1901/jeab.2006.85-05
- Critchfield, T. S., & Kollins, S. H. (2001). Temporal discounting: Basic research and the analysis of socially important behavior. *Journal of Applied Behavior Analysis, 34*(1), 101--122. https://doi.org/10.1901/jaba.2001.34-101
- Odum, A. L., Becker, R. J., Haynes, J. M., Galizio, A., Frye, C. C. J., Downey, H., Friedel, J. E., & Perez, D. M. (2020). Delay discounting of different outcomes: Review and theory. *Journal of the Experimental Analysis of Behavior, 113*(3), 657--679. https://doi.org/10.1002/jeab.589

**Supplemental**

- Cox, D. J., & Dallery, J. (2018). Influence of second outcome on monetary discounting. *Behavioural Processes, 153*, 84--91. https://doi.org/10.1016/j.beproc.2018.05.012
- Strickland, J. C., & Johnson, M. W. (2021). Rejecting impulsivity as a psychological construct: A theoretical, empirical, and sociocultural argument. *Psychological Review, 128*(2), 336--361. https://doi.org/10.1037/rev0000263

---

## Discussion Prompts

**Matching**

1. **Applied matching analysis.** "Imagine you are conducting a functional analysis and discover that a client's problem behavior produces attention on a roughly VI 30-s schedule, while appropriate communication produces attention on a roughly VI 300-s schedule. What does the matching law predict about the allocation of behavior? What would you need to change---and by how much---to shift the allocation?"

2. **Undermatching as a feature.** "Undermatching means organisms do not fully differentiate between better and worse options. Is this always maladaptive? Can you think of situations---ecological or clinical---where undermatching would be beneficial?"

3. **Matching vs. maximizing.** "Some researchers argue that organisms maximize overall reinforcement rate rather than match. Under concurrent VI-VI schedules, matching and maximizing make similar predictions. Can you think of a schedule arrangement where the two theories would make different predictions?"

4. **Limits of the molar account.** "The GME describes session-wide aggregates. What information is lost when you collapse an entire session into two numbers (total responses on each key)? What might you learn from a more molecular analysis?"

**Discounting**

5. **Outcome specificity and impulsivity:** If discounting rates differ across outcome types within the same individual (e.g., money vs. health vs. food), what does that mean for using $k$ as a trait measure of impulsivity? Can someone be "impulsive" for food but "self-controlled" for money? What are the implications for clinical assessment?

6. **Preference reversals and self-control strategies:** Preference reversals explain why people make plans for the future (e.g., saving for retirement, committing to a diet) but then abandon them when the smaller-sooner option becomes available. What behavioral interventions exploit this insight? (Hint: think about commitment devices, precommitment, and how they work mathematically in terms of the discount function.)

7. **The magnitude effect and equity:** Larger rewards are discounted less steeply. This means that wealthier individuals (for whom any given dollar amount is relatively "larger" against their wealth) might appear to be more self-controlled. Is steep discounting a property of the individual, a property of the reinforcer magnitude, or an interaction? What are the implications for interpreting group differences in $k$?

8. **Descriptive vs. mechanistic:** Mazur's hyperbolic function describes the shape of discounting well, but it does not explain *why* discounting is hyperbolic. What kinds of mechanistic processes might generate a hyperbolic form? (Examples to prompt discussion: Weber-Fechner-like logarithmic time perception, memory decay, competition among temporal representations.)

---

## In-Class Demonstrations

### Matching Demonstration 1: Computing Log Ratios by Hand

Distribute a small dataset (4--5 concurrent VI-VI conditions with response counts and reinforcer counts on each alternative). Have students:

1. Compute $B_1/B_2$ and $r_1/r_2$ for each condition
2. Compute $\log(B_1/B_2)$ and $\log(r_1/r_2)$ (provide calculators or allow phone calculators)
3. Plot the log-ratio points on graph paper or a whiteboard grid
4. Estimate the slope and intercept by eye
5. State whether the organism is undermatching, overmatching, or strict matching, and whether there is bias

This exercise takes about 10 minutes and gives students hands-on experience with the transformation that they will use in the lab. It also reveals who is struggling with logarithms early enough to address the issue.

### Matching Demonstration 2: Visualizing Sensitivity and Bias

Prepare a slide (or draw on the board) with a log-ratio coordinate system. Plot three lines:

- Line A: slope = 1.0, intercept = 0 (strict matching, no bias)
- Line B: slope = 0.7, intercept = 0 (undermatching, no bias)
- Line C: slope = 1.0, intercept = 0.15 (strict matching, bias toward alternative 1)

Ask students to describe---in behavioral terms---what organism B is doing differently from organism A, and what organism C is doing differently from organism A. This reinforces the distinction between sensitivity and bias and grounds the parameters in behavioral descriptions.

### Discounting Demonstration 1: Estimate Your Own Indifference Points

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

### Discounting Demonstration 2: Estimate k

Using the indifference points from the previous demonstration, have students pick one data point and compute $k$ using the rearranged Mazur equation:

$$k = \frac{A - V}{V \cdot D}$$

Then have them compute $k$ from a second data point at a different delay. Are the two estimates similar? If yes, the hyperbolic model is a reasonable description of their data. If the estimates diverge substantially, discuss what might be happening (measurement noise, non-hyperbolic discounting, magnitude effects if they interpreted the task differently).

### Discounting Demonstration 3: Preference Reversal Demonstration

Present two choices in sequence:

> Choice A: "Would you prefer $50 in 26 weeks or $100 in 52 weeks?"
> Choice B: "Would you prefer $50 today or $100 in 26 weeks?"

Tally responses for each. If a substantial fraction of students chose $100 in Choice A but $50 in Choice B, you have demonstrated a preference reversal in real time. Connect this back to the crossing of hyperbolic discount curves.

---

## Transition to Lab

This week's lab has two halves that mirror the two lecture topics.

**Matching.** Students fit the generalized matching equation to real concurrent VI-VI data. The dataset includes multiple pigeons, each exposed to 5--7 conditions. The lab walks students through: (a) computing log ratios, (b) running OLS regression to estimate $s$ and $\log(b)$ for each pigeon, (c) plotting the data with the fitted line, and (d) interpreting the parameters in a brief written summary. Remind students that log base 10 is the convention used in the matching literature (not natural log)---this avoids a common error in the lab.

**Discounting.** Students import a dataset of indifference points from multiple hypothetical participants, fit both the hyperbolic ($V = A/(1+kD)$) and exponential ($V = Ae^{-kD}$) models using nonlinear least-squares regression, compare model fits (SSR, $R^2$, and optionally AIC/BIC), compute AUC for each participant, visualize discount curves with observed data overlaid on fitted functions, and interpret $k$ values in behavioral terms across participants.

**Setup notes:**

- Ensure the lab notebook or script is ready with the datasets preloaded. Students should not need to spend time entering data.
- Students who finish early can compare parameters across subjects and discuss individual differences in sensitivity, bias, and discount rate.

The lab reinforces the lecture by giving students hands-on experience with the entire modeling pipeline: data, model specification, parameter estimation, model comparison, and interpretation. Emphasize that the goal is not just to get a number out of the software but to understand what the number means and whether the model earned the right to be taken seriously.
