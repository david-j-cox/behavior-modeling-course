---
title: "Instructor Notes: Week 2 — Matching Law"
week: 2
---

## Lecture Objectives

By the end of this lecture, students should be able to:

- Explain why choice is defined as behavior allocation in behavior science, and describe the concurrent VI-VI procedure that generated the matching law
- Write Herrnstein's single-alternative matching equation ($R = kr/(r + r_e)$) from memory and interpret both parameters ($k$ and $r_e$) in behavioral terms
- Write the generalized matching equation in log-ratio form, perform the log-ratio transformation on a dataset, and interpret the slope ($s$) and intercept ($\log b$) of the resulting regression
- Distinguish between strict matching, undermatching, and overmatching, and identify procedural and organismic factors that produce each
- Apply all eight steps of the modeling framework to a concurrent-schedule choice scenario

## Suggested Lecture Walkthrough

**Estimated duration: 60 minutes**

### Opening: The Phenomenon of Choice (10 min)

Begin with a concrete demonstration of why choice matters. Present data from a classic concurrent VI-VI experiment (Herrnstein, 1961, is ideal). Show the raw data first: response counts and reinforcer counts on each key across several conditions. Ask students what pattern they notice before introducing any equations. The goal is for them to see that response ratios track reinforcement ratios before you formalize this observation.

Emphasize that choice is everywhere---not just in the lab. Every moment, organisms are allocating behavior across available alternatives. The concurrent schedule is simply the preparation that makes this allocation measurable.

### Herrnstein's Single-Alternative Equation (10 min)

Transition to the single-schedule case. Present data from a single VI schedule where reinforcement rate varies across conditions: response rate increases with reinforcement rate but negatively accelerates. Ask students what function might describe this shape.

Introduce $R = kr/(r + r_e)$. Walk through each parameter:
- $k$: the ceiling on response rate. What constrains it? Motor capacity, motivational limits, schedule constraints.
- $r_e$: extraneous reinforcement. This is the concept students find hardest. Spend time on it. Explain that the organism is always choosing between the measured operant and everything else it could do. $r_e$ quantifies "everything else."

**Typical student struggle:** Students often ask "How can you measure extraneous reinforcement if it is extraneous?" Clarify that $r_e$ is estimated from the curve fit, not measured directly. It is the reinforcement rate at which responding reaches half its ceiling---a parameter inferred from the data, not observed independently.

### The Generalized Matching Equation (15 min)

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

### Connecting to the 8-Step Framework (10 min)

Briefly walk through how the chapter applies the 8-step framework to concurrent VI-VI choice. Highlight:
- Step 1: The importance of knowing the procedure cold before writing equations
- Step 4: The assumptions that are easy to overlook (steady state, molar aggregation, independent schedules)
- Step 6: Dimensional consistency is trivial here because everything is in log ratios (dimensionless), but note this explicitly
- Step 8: What verification looks like (equal reinforcement should produce equal responding if no bias)

### Applications and Broader Significance (10 min)

Briefly cover applied uses: functional analysis, treatment evaluation, and clinical decision-making. Reference the assigned readings:
- **McDowell (1989)** on quantitative models applied to human behavior---use this to show that matching is not just a pigeon phenomenon
- **Reed and Kaplan (2011)** as a tutorial for applied researchers---assign this as the primary "how to" reading
- **Fisher and Mazur (1997)** on matching in applied contexts---highlight the bridge between basic and applied research

### Wrap-Up and Preview (5 min)

Summarize the key parameters ($s$, $b$, $k$, $r_e$) and their behavioral interpretations. Note that the matching law is a molar, steady-state description---it tells you where behavior ends up, not how it gets there moment to moment. Preview that later weeks will cover models (e.g., computational models, dynamical systems) that address the process by which matching emerges.

## Discussion Prompts

1. **Applied matching analysis.** "Imagine you are conducting a functional analysis and discover that a client's problem behavior produces attention on a roughly VI 30-s schedule, while appropriate communication produces attention on a roughly VI 300-s schedule. What does the matching law predict about the allocation of behavior? What would you need to change---and by how much---to shift the allocation?"

2. **Undermatching as a feature.** "Undermatching means organisms do not fully differentiate between better and worse options. Is this always maladaptive? Can you think of situations---ecological or clinical---where undermatching would be beneficial?"

3. **Matching vs. maximizing.** "Some researchers argue that organisms maximize overall reinforcement rate rather than match. Under concurrent VI-VI schedules, matching and maximizing make similar predictions. Can you think of a schedule arrangement where the two theories would make different predictions?"

4. **Limits of the molar account.** "The GME describes session-wide aggregates. What information is lost when you collapse an entire session into two numbers (total responses on each key)? What might you learn from a more molecular analysis?"

## In-Class Demonstrations

### Demonstration 1: Computing Log Ratios by Hand

Distribute a small dataset (4--5 concurrent VI-VI conditions with response counts and reinforcer counts on each alternative). Have students:

1. Compute $B_1/B_2$ and $r_1/r_2$ for each condition
2. Compute $\log(B_1/B_2)$ and $\log(r_1/r_2)$ (provide calculators or allow phone calculators)
3. Plot the log-ratio points on graph paper or a whiteboard grid
4. Estimate the slope and intercept by eye
5. State whether the organism is undermatching, overmatching, or strict matching, and whether there is bias

This exercise takes about 10 minutes and gives students hands-on experience with the transformation that they will use in the lab. It also reveals who is struggling with logarithms early enough to address the issue.

### Demonstration 2: Visualizing Sensitivity and Bias

Prepare a slide (or draw on the board) with a log-ratio coordinate system. Plot three lines:

- Line A: slope = 1.0, intercept = 0 (strict matching, no bias)
- Line B: slope = 0.7, intercept = 0 (undermatching, no bias)
- Line C: slope = 1.0, intercept = 0.15 (strict matching, bias toward alternative 1)

Ask students to describe---in behavioral terms---what organism B is doing differently from organism A, and what organism C is doing differently from organism A. This reinforces the distinction between sensitivity and bias and grounds the parameters in behavioral descriptions.

## Transition to Lab

The lab for this week has students fit the generalized matching equation to real concurrent VI-VI data. The dataset includes multiple pigeons, each exposed to 5--7 conditions.

**Setup notes:**

- Ensure the lab notebook or script is ready with the dataset preloaded. Students should not need to spend time entering data.
- The lab walks students through: (a) computing log ratios, (b) running OLS regression to estimate $s$ and $\log(b)$ for each pigeon, (c) plotting the data with the fitted line, and (d) interpreting the parameters in a brief written summary.
- Remind students during the lecture that log base 10 is the convention used in the matching literature (not natural log). This avoids a common error in the lab.
- Students who finish early can be directed to compare parameters across pigeons and discuss individual differences in sensitivity and bias.
