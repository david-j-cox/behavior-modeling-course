---
title: "Instructor Notes: Week 3 — Demand"
week: 3
---

## Lecture Objectives

- Students should be able to explain the concept of demand and articulate why the relationship between price and consumption is more informative than preference at a single price point.
- Students should be able to write the exponential demand equation, identify each parameter, and explain what each parameter captures behaviorally.
- Students should be able to compute essential value ($1/\alpha$) and interpret it in plain language, including comparing essential values across commodities or individuals.
- Students should be able to distinguish between elastic and inelastic demand, identify $P_{max}$ on a demand curve, and explain its practical significance.
- Students should be able to apply the 8-step modeling framework to the demand equation and articulate the assumptions underlying the model.

---

## Suggested Lecture Walkthrough (~60 min)

### Opening: From Preference to Demand (10 min)

Begin with a concrete scenario. Present two hypothetical reinforcers that are equally preferred in a paired-stimulus preference assessment. Ask: "If both are chosen 50% of the time when they're free, does that mean they're equally effective reinforcers?" Let students discuss briefly, then introduce the key insight---preference at zero (or near-zero) price does not capture how hard an organism will work. This motivates the demand framework.

Show a simple demand curve (consumption on y-axis, price on x-axis) without the equation. Point out the two regions: the flat part (inelastic) and the steep decline (elastic). Introduce the idea that the shape of this curve tells us something fundamental about reinforcer value.

### Unit Price (5 min)

Define unit price as responses per unit of reinforcer. Work through two or three examples: FR 10 with 1 pellet (unit price = 10), FR 20 with 2 pellets (unit price = 10), FR 5 with 0.5 pellets (unit price = 10). Emphasize that unit price allows comparison across different schedule-magnitude combinations. Briefly note the unit price equivalence assumption and flag that it is testable and sometimes violated.

### Building the Equation (15 min)

This is the core technical section. Build up to the full equation in stages:

1. **Start with the idea**: We need a function that starts at $Q_0$ when price is zero and declines as price increases. What mathematical form would do this?
2. **Exponential decay**: Introduce $e^{-\alpha C}$ as a decay function. Show that this starts at 1 when $C = 0$ and approaches 0 as $C$ grows. Note that this alone would give linear decay in log space.
3. **The normalization**: Explain why $Q_0$ appears in the exponent ($\alpha \cdot Q_0 \cdot C$). Without it, $\alpha$ values are not comparable across commodities with different baseline consumption levels. This is a critical conceptual point---spend time on it.
4. **The $k$ constant**: Explain that $k$ sets the range of the curve in log units. Show what happens when $k$ changes (the floor of the curve moves up or down). Note the convention of fixing $k$ across conditions.
5. **Full equation**: Write the complete equation and confirm it reduces correctly at $C = 0$.

**Common confusions to address explicitly:**

- **What $k$ does**: Students often think $k$ controls the steepness of the curve. Clarify that $k$ controls the range (floor), while $\alpha$ controls the steepness (rate of decline). Demonstrate with two curves that have the same $\alpha$ but different $k$ values.
- **Log-log space**: Students may be unfamiliar with plotting in log-log coordinates. Explain why this is standard: demand curves span orders of magnitude in both price and consumption, so linear axes compress the interesting parts of the curve. Show the same data plotted in linear and log-log space.
- **Why the exponential form**: Students may wonder why not use a power function or polynomial. The exponential form was chosen because it (a) normalizes for $Q_0$, (b) yields a single rate parameter $\alpha$ that is directly interpretable, and (c) produces essential value as a simple reciprocal. Earlier models (e.g., Hursh et al., 1988) used power functions that lacked these properties.

### Essential Value and $P_{max}$ (10 min)

Define essential value as $1/\alpha$. Work through a numerical example: if $\alpha = 0.0003$, then $EV = 3{,}333$. Compare to a second commodity with $\alpha = 0.005$ ($EV = 200$). Ask students: "Which commodity would you expect the organism to keep working for at high prices?"

Introduce $P_{max} = 0.368 / (\alpha \cdot Q_0 \cdot k)$. Compute it for the same examples. Explain the behavioral meaning: below $P_{max}$, total output is still increasing with price (the organism works harder); above $P_{max}$, total output is decreasing (the organism is giving up). Connect this to the inelastic/elastic distinction.

### Open vs. Closed Economies (5 min)

Explain the distinction with a vivid example. A rat that earns all its food in the chamber (closed) vs. a rat that gets supplemental food afterward (open). Ask: "In which case would you expect the rat to work harder at high prices?" Emphasize that demand parameters are not comparable across economic contexts.

### Applied Connections (10 min)

Cover three application domains briefly:

1. **Drug self-administration**: Essential value as a measure of abuse liability. Reference Hursh & Silberberg (2008).
2. **Reinforcer assessment**: Francisco, Madden, & Borrero (2009) showed that demand analysis reveals differences between reinforcers that preference assessments miss.
3. **Token economies**: How demand analysis can inform the pricing structure of a token economy.

### Wrap-Up (5 min)

Return to the opening scenario. Now ask: "How would you determine which of the two equally-preferred reinforcers is actually more effective?" Students should articulate the demand-analysis approach. Preview the lab session.

### Assigned Readings

- **Hursh, S. R., & Silberberg, A. (2008)**. Economic demand and essential value. *Psychological Review, 115*(1), 186--198. https://doi.org/10.1037/0033-295X.115.1.186
- **Francisco, M. T., Madden, G. J., & Borrero, J. C. (2009)**. Behavioral economics: Principles, procedures, and utility for applied behavior analysis. *The Behavior Analyst Today, 10*(2), 277--294. https://doi.org/10.1037/h0100671
- **Hursh, S. R., Madden, G. J., Spiga, R., DeLeon, I. G., & Francisco, M. T. (2013)**. The translational utility of behavioral economics: The experimental analysis of consumption and choice. In G. J. Madden, W. V. Dube, T. D. Hackenberg, G. P. Hanley, & K. A. Lattal (Eds.), *APA handbook of behavior analysis: Vol. 2. Translating principles into practice* (pp. 191--224). American Psychological Association. https://doi.org/10.1037/13938-008

---

## Discussion Prompts

1. **Reinforcer selection**: "You have a client for whom you have identified three potential reinforcers via a paired-stimulus preference assessment. All three are chosen about equally. How would you use demand analysis to decide which reinforcer to use in treatment? What practical considerations would affect whether you could actually conduct a demand assessment in a clinical setting?"

2. **Policy implications**: "A state agency is considering raising the 'price' of cigarettes through taxation. How would you use the demand framework to predict the effect on consumption? What would it mean if cigarettes have high essential value for a particular population? What are the limitations of this analysis?"

3. **$Q_0$ vs. essential value**: "A colleague argues that the best reinforcer is simply the one the client consumes the most of when it is freely available. How would you respond? Under what circumstances might a reinforcer with a lower $Q_0$ actually be more useful clinically than one with a higher $Q_0$?"

4. **Model assumptions**: "The demand equation assumes a single commodity in a closed economy. How realistic is this for applied settings? What happens to demand when substitutes are available, and how might you account for this?"

---

## In-Class Demonstrations

### Demonstration 1: Auction Game

Give each student 100 "tokens" (play money or points on a sheet). Present two commodities: a preferred snack (e.g., candy) and a less-preferred item (e.g., a pencil). Conduct multiple rounds where the price of each item increases (Round 1: 1 token, Round 2: 5 tokens, Round 3: 15 tokens, Round 4: 40 tokens, Round 5: 80 tokens). Students record how many units they would purchase at each price. Aggregate the class data and plot the two demand curves. Compute approximate $Q_0$ and note which commodity shows more elastic demand. This provides an experiential foundation for the concepts before the equation is introduced.

### Demonstration 2: Parameter Exploration

Using a projected spreadsheet or graphing tool (Desmos, GeoGebra, or a simple Python script), display the exponential demand equation with sliders for $Q_0$, $\alpha$, and $k$. Let students predict what will happen when each parameter changes, then move the sliders. Key manipulations:
- Increase $\alpha$: Curve bends earlier, consumption drops faster.
- Increase $Q_0$: Curve shifts up at the y-intercept.
- Change $k$: The floor of the curve moves (range changes) but the bend point shifts only slightly.

This interactive demonstration helps students separate the roles of the three parameters.

### Demonstration 3: Real Data Fitting

Show a published dataset (e.g., from Hursh & Silberberg, 2008) and walk through the curve-fitting process live. Use R or Python to fit the exponential demand equation to the data. Display the parameter estimates, predicted curve, and residuals. This previews the lab activity and demystifies the fitting process.

---

## Transition to Lab

The lab session for this week focuses on hands-on demand curve fitting and essential value computation. Students will:

1. Receive a dataset containing consumption values across multiple FR values for two different commodities (or two different organisms).
2. Fit the exponential demand equation to each dataset using provided code templates (Python or R).
3. Estimate $Q_0$, $\alpha$, and $k$ (or fix $k$ and estimate the other two).
4. Compute essential value ($1/\alpha$) and $P_{max}$ for each commodity/organism.
5. Plot the observed data and fitted curves in log-log space.
6. Write a brief interpretation comparing the two demand curves, explaining what the parameter differences mean in behavioral terms.

The lab should reinforce that demand analysis is not just an abstract framework---it is a practical tool that can be applied to real data with standard software. Encourage students to experiment with starting values and observe how the optimization converges (or fails to converge) under different initial conditions.
