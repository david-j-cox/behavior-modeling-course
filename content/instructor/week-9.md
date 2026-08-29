---
title: "Instructor Notes: Week 9 — Multilevel Modeling and Time-Series Forecasting"
week: 9
---

## Lecture Objectives

- Students should be able to explain why ignoring nested data structure inflates Type I error and identify when multilevel modeling is needed (based on ICC).
- Students should be able to describe the difference between fixed and random effects, and articulate what random intercepts and random slopes mean in behavioral terms.
- Students should be able to interpret an ACF plot and explain what temporal autocorrelation means for behavioral data.
- Students should be able to write and interpret an AR(1) model, including the meaning of the autoregressive coefficient phi.
- Students should be able to describe the components of an ARIMA(p,d,q) model and explain when differencing and moving average terms are needed.

---

## Suggested Lecture Walkthrough (~60 min)

### Part 1: Multilevel Modeling (~30 min)

**Opening hook: Why ignoring nesting is dangerous (5 min).** Start with a concrete example. Present a dataset with 5 participants, each measured across 10 sessions. Run a standard regression ignoring participant and show the p-value. Then run a multilevel model and show how the p-value changes---often dramatically. The point lands when students see that a "significant" effect disappears once you account for nesting. Emphasize: the problem is not that multilevel models are conservative; the problem is that standard models are anticonservative when data are nested.

**Introduce the ICC (5 min).** Walk through the formula: ICC = tau-squared / (tau-squared + sigma-squared). Use the worked example from the chapter (4 participants, 5 sessions each). Compute the ICC on the board or in a live demo. Ask students: "If the ICC is 0.97, what does that tell you about where the action is in this dataset?" Answer: almost all the variability is between people, not within people across sessions. Connect to study design: if ICC is very high, adding more sessions per person gives you diminishing returns---you need more people.

**Build the random-intercept model (10 min).** Start with the unconditional means model: y_ij = gamma_00 + u_0j + e_ij. Explain each term. Draw a picture: the grand mean as a horizontal line, each participant's mean as a horizontal line above or below it, and individual observations scattered around each participant's line. This visual is essential---many students grasp random effects better from a picture than from an equation.

Then add a Level 1 predictor (e.g., session number) and show how the model becomes a random-intercept model with a fixed slope. If time permits, briefly mention random slopes: "What if the effect of session number is different for different participants?" Show the equation but note that random slopes add complexity and require sufficient data.

**Shrinkage (5 min).** Explain shrinkage with an intuitive example. Participant A has 20 sessions and a mean of 45. Participant B has 2 sessions and a mean of 45. The multilevel model trusts Participant A's estimate more and shrinks Participant B's estimate toward the grand mean. This is not a bias---it is a feature. It produces better out-of-sample predictions. Connect to the concept of regularization if students have encountered it.

**Wrap up multilevel section (5 min).** Summarize: multilevel models handle nesting, estimate individual differences, and regularize through shrinkage. Reference Peugh (2010) as a practical guide students can read for implementation details, and Young (2018) as an example of multilevel modeling applied to behavioral choice data.

### Part 2: Time-Series Forecasting (~25 min)

**Pivot to temporal data (3 min).** Transition by asking: "Multilevel models handle the fact that people are different. But what about the fact that behavior unfolds over time? What if today's session is correlated with yesterday's?" Show a time-series plot of a single participant's daily response rate. Point to the obvious pattern: adjacent days look similar.

**Introduce the ACF (5 min).** Define autocorrelation at lag k. Show an ACF plot from the example data. Explain what it means when lag-1 autocorrelation is 0.7: "Knowing today's value tells you a lot about tomorrow's." Walk through how the ACF decays---this decay pattern is diagnostic of the type of time-series process.

**Build the AR(1) model (7 min).** Write x_t = phi * x_{t-1} + epsilon_t on the board. Explain each term. Emphasize the behavioral interpretation of phi: it measures persistence. High phi means behavior is sticky---hard to change from day to day. Low phi means behavior is volatile. Ask students: "After an intervention, would you expect phi to increase, decrease, or stay the same?" This generates good discussion.

Work through the 1-step forecast from the chapter example. Show how you plug in the current value to predict the next value. Show the prediction interval.

**Briefly introduce ARIMA (5 min).** Explain the three components: AR (dependence on past values), I (differencing for trends), MA (dependence on past shocks). Emphasize that ARIMA(1,0,0) is just AR(1)---students already know the AR part. The "I" handles trends (demonstrate with a quick example of differencing). The "MA" handles shocks. Do not go deep into MA theory; the conceptual understanding is sufficient.

Mention model selection via ACF/PACF patterns and information criteria (AIC/BIC). Students do not need to master ARIMA order selection this week, but they should know the tools exist.

**Time-series decomposition (3 min).** Briefly show an example of trend + seasonal + residual decomposition. Connect to behavioral data: "If your client's behavior has a weekly cycle, you want to know that before you conclude your intervention is working." Reference Cox and Vladescu (2023) and Adhikari and Agrawal (2013).

**Wrap up (2 min).** Connect the two halves: multilevel models handle between-person structure; time-series models handle within-person temporal structure. In an ideal world, you combine them. Mention that multilevel models can include autoregressive residual structures, bridging both approaches.

### Common Confusions to Address

- **Random vs. fixed effects.** Students often ask "When should an effect be random?" The answer: when you have multiple groups (participants) and you want to generalize beyond the specific groups in your sample, use random effects. If you only care about those specific groups, fixed effects suffice. In behavior science, participants are almost always treated as random.

- **What "levels" mean.** Students confuse statistical levels (Level 1 = observations, Level 2 = groups) with other uses of "level" in behavior science (e.g., level of a variable). Be explicit and consistent about terminology.

- **Stationarity.** Students may not immediately grasp why stationarity matters. Explain: if the mean of a series is changing over time, the AR coefficient is meaningless because there is no stable mean to fluctuate around. Differencing removes the trend so that the remaining fluctuations can be modeled.

- **Choosing ARIMA orders.** Students may feel overwhelmed by the (p,d,q) notation. Reassure them that in practice, automatic selection tools handle this. The conceptual understanding---what each component does---is more important than manual order selection.

---

## Discussion Prompts

1. **Nesting in your own research.** "Think about a dataset you have worked with or might collect in the future. What is the nesting structure? What are the Level 1 and Level 2 units? What do you think the ICC might be, and why?" This prompt helps students connect the abstract framework to their own work.

2. **Shrinkage and small-n designs.** "Behavior analysis traditionally uses single-subject designs with small numbers of participants. How does shrinkage in multilevel models help or hinder the analysis of such data? Is pooling information across participants a good thing or does it obscure individual patterns?" This can generate productive debate between students who value group-level generalization and those who prioritize individual analysis.

3. **Temporal dependence and intervention evaluation.** "If a client's behavior shows strong autocorrelation (phi = 0.8), what does that imply for how quickly you can detect the effect of an intervention? How might you use the AR model to set a more principled criterion for deciding whether an intervention is working?" This connects time-series modeling to clinical decision-making.

4. **Combining multilevel and time-series approaches.** "In many applied settings, you have multiple clients each observed over many sessions. You care about both individual differences and temporal dynamics. What would an ideal analysis look like? What compromises might you need to make given practical constraints (e.g., limited number of sessions)?" This forward-looking prompt previews more advanced methods.

---

## In-Class Demonstrations

**Demonstration 1: ICC and the danger of ignoring nesting.** Prepare a simulated dataset (or use the chapter example) with a clear nested structure. Fit an ordinary regression and a random-intercept model side by side. Show how the standard error of the fixed effect changes. If using software (R, Python), this can be done live. If not, prepare slides with the output. The key comparison: the multilevel model's standard error will be larger (more honest) than the ordinary regression's.

**Demonstration 2: ACF plot.** Show students an ACF plot from real or simulated behavioral time-series data. Walk through reading the plot: lag on the x-axis, autocorrelation on the y-axis, significance bands. Ask students to describe what they see before you interpret it. Then show how the ACF pattern maps to an AR(1) model.

**Demonstration 3: 1-step-ahead forecasting.** Using the AR(1) model from the chapter, demonstrate the forecasting procedure on the board or in software. Show the prediction and the prediction interval. Ask: "Would you trust this forecast? Why or why not?" Discuss what affects forecast accuracy (size of phi, variance of residuals, forecast horizon).

**Demonstration 4 (if time permits): Time-series decomposition.** Show a decomposition plot (trend + seasonal + residual) for a behavioral time series with a weekly cycle. Ask students to identify which component is largest and what the seasonal pattern might represent behaviorally.

---

## Transition to Lab

The lab session should give students hands-on experience with both model families. Suggested lab activities:

- **Activity 1: Compute ICC by hand.** Give students a small dataset (similar to the chapter example) and have them compute the ICC step by step. Then have them verify using software.

- **Activity 2: Fit a random-intercept model.** Using software (R with lme4, Python with statsmodels or similar), have students fit a random-intercept model to a provided dataset. They should extract and interpret the fixed effect, the random effect variance, and the ICC.

- **Activity 3: Plot and interpret an ACF.** Give students a time-series dataset and have them plot the ACF. Ask them to describe the temporal structure and propose an appropriate model order.

- **Activity 4: Fit an AR(1) model and forecast.** Have students fit an AR(1) model to a provided time series, interpret phi, and make a 1-step-ahead prediction with a prediction interval.

- **Extension (for advanced students): Combine both.** Provide a dataset with multiple participants observed over time. Have students fit a multilevel model with an AR(1) residual structure, combining both frameworks.

Remind students that the lab exercises connect directly to the 8-step framework: they are specifying models (Step 5), checking assumptions (Step 4), fitting to data and evaluating (Step 8).
