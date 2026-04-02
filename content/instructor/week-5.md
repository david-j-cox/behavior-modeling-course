---
title: "Instructor Notes: Week 5 — Respondent Conditioning"
week: 5
---

## Lecture Objectives

- Students should be able to state the Rescorla-Wagner equation, define each parameter, and explain why prediction error---not contiguity---is the driving force of associative learning.
- Students should be able to compute associative strength values across multiple trials given specific parameter values, and recognize the negatively accelerated learning curve that results.
- Students should be able to explain blocking, conditioned inhibition, and overexpectation as direct consequences of the Rescorla-Wagner model's summation assumption and prediction error rule.
- Students should be able to describe behavioral momentum theory's distinction between response rate (governed by the operant contingency) and resistance to change (governed by the Pavlovian contingency), and articulate its clinical implications.
- Students should be able to contrast the Rescorla-Wagner model's fixed associability with Mackintosh's variable associability and identify at least one phenomenon (e.g., learned irrelevance) that distinguishes the two models.

---

## Suggested Lecture Walkthrough (~60 min)

### Opening: The Phenomenon (10 min)

Begin with classical conditioning as a phenomenon, not a model. Describe a standard tone-food preparation. Ask students: "Why does the rat start approaching the food magazine when it hears the tone?" Accept answers---they will likely mention pairing, association, contiguity.

Then introduce the blocking paradigm. Describe the two-phase procedure (Phase 1: A+; Phase 2: AB+; Test: B alone). Ask students to predict the result under a contiguity account. Most will predict B should be conditioned. Reveal the actual result: B shows little or no conditioning. This is the motivating puzzle.

Key point to emphasize: contiguity is present in Phase 2---B is paired with the US on every trial---yet learning does not occur. Something beyond contiguity must matter.

### Building to the Equation (15 min)

Introduce prediction error informally first. "The organism learns when it is surprised." Walk through what "surprise" means quantitatively: the discrepancy between what is expected ($V$) and what happens ($\lambda$).

Then introduce the equation:

$$\Delta V = \alpha \beta (\lambda - V)$$

Define each term carefully:
- $V$: what the organism currently expects (associative strength)
- $\lambda$: what actually happens (asymptote supported by the US)
- $\lambda - V$: the surprise (prediction error)
- $\alpha$: how noticeable the CS is (salience)
- $\beta$: how effective the US is (learning rate)

Emphasize that this is a **difference equation**---it updates trial by trial. It is not continuous.

### Numerical Demonstration of Acquisition (10 min)

Work through the first 5 trials of the acquisition example from the chapter on the board (or slide). Use $\alpha = 0.3$, $\beta = 0.5$, $\lambda = 1.0$, $V_0 = 0$. Have students compute along with you. Point out the shrinking prediction error and the negatively accelerated curve.

Ask: "What happens if we keep going? Does $V$ ever reach exactly 1.0?" (Answer: No---it approaches asymptotically.)

### Blocking Demonstration (10 min)

This is the payoff. Walk through the blocking calculation step by step:

1. After Phase 1: $V_A \approx 0.95$, $V_B = 0$.
2. Phase 2, Trial 1: Prediction error = $\lambda - (V_A + V_B) = 1.0 - 0.95 = 0.05$.
3. $\Delta V_B = 0.3 \times 0.5 \times 0.05 = 0.0075$.
4. After 5 trials: $V_B \approx 0.02$.

Compare to conditioning B alone for 5 trials: $V_B \approx 0.56$. The difference is dramatic.

Ask students: "Where in the equation does blocking come from?" Guide them to see that it comes from the shared prediction error---$V$ in the error term is the **sum** of all CSs present, not just the one being updated.

### Common Confusions to Address

- **Why do compound stimuli share the error?** Students often ask why both A and B are updated using the same prediction error. Emphasize the summation assumption: the organism's total expectation is $V_A + V_B$, and the error is computed against this total. Each CS gets "credit" (or "blame") proportional to its own $\alpha$.

- **What does negative $V$ mean?** Students find conditioned inhibition conceptually difficult. Use a concrete example: "The tone means food is coming. The light means food is NOT coming. When you hear the tone, you expect food. When you see the light with the tone, you reduce your expectation." Negative $V$ is an active signal of non-occurrence, not merely the absence of learning.

- **Trial-level vs. real-time.** Some students will ask about what happens within a trial. Acknowledge that the Rescorla-Wagner model is silent on within-trial dynamics. Mention that real-time models (e.g., TD models, the Temporal model) address this, but they are beyond this week's scope.

### Behavioral Momentum (10 min)

Shift from associative learning to resistance to change. Present the core metaphor: behavior has velocity (rate) and mass (resistance to disruption). These are controlled by different variables.

Describe a typical multiple-schedule experiment: two components with different reinforcement rates. Introduce disruption (e.g., prefeeding). Show that behavior in the richer component is proportionally less disrupted.

Present the basic equation:

$$\log \left( \frac{B_x}{B_o} \right) = -x \cdot \frac{c}{r}$$

Highlight the clinical implication: problem behaviors maintained in rich contexts (lots of reinforcement) will be hardest to reduce.

### Mackintosh's Attention Model (5 min)

Briefly introduce the idea that $\alpha$ might not be fixed. If a CS has a history of being a poor predictor, the organism "tunes it out"---$\alpha$ decreases. If it is a good predictor, $\alpha$ increases. This explains learned irrelevance, which R-W cannot handle.

Do not belabor the formal details of Mackintosh's rule. The key takeaway is that attention is a learnable process, and models can capture this by allowing parameters to change.

### Assigned Readings

- Nevin, J. A., Mandell, C., & Atak, J. R. (1983). The analysis of behavioral momentum. *Journal of the Experimental Analysis of Behavior*, *39*(1), 49--59.
- Mackintosh, N. J. (1975). A theory of attention: Variations in the associability of stimuli with reinforcement. *Psychological Review*, *82*(4), 276--298.
- Matzel, L. D., Schachtman, T. R., & Miller, R. R. (1988). Learned irrelevance exceeds the sum of the CSpreexposure and USpreexposure effects. *Journal of Experimental Psychology: Animal Behavior Processes*, *14*(3), 311--319.

---

## Discussion Prompts

1. The Rescorla-Wagner model was published in 1972, and the temporal difference learning algorithm that powers modern AI was published in the 1980s--1990s. Both are fundamentally about prediction error. What does it mean for behavior science that one of its core models became foundational to an entirely different field? Does this validate the model, or does it merely show that a mathematical idea can be useful in multiple contexts without being "true" in either?

2. Behavioral momentum theory predicts that enriching the reinforcement context will make behavior more persistent. But in clinical settings, we sometimes want to make problem behaviors less persistent. Does this create a paradox? If you are delivering reinforcement to reduce problem behavior (e.g., via DRA), are you simultaneously increasing the behavioral momentum of whatever behavior is occurring in that context?

3. The Rescorla-Wagner model treats all learning as changes in a single quantity ($V$). Is this realistic? Think about your own learning experiences---does it feel like a single "associative strength" is being updated, or is something more complex happening? How would you test whether a single-quantity model is adequate?

4. Mackintosh says organisms learn to attend to good predictors and ignore poor ones. The Rescorla-Wagner model says organisms simply learn the predictive value of each stimulus. In everyday clinical work, which perspective seems more useful? Can you think of a clinical scenario where the distinction matters?

---

## In-Class Demonstrations

### Demonstration 1: Blocking Calculation on the Board

Walk through the full blocking calculation interactively. Have students compute each trial's values while you record them on the board. Use two columns side by side:

- **Left column:** B conditioned alone for 5 trials ($V_B$ grows to ~0.56)
- **Right column:** B conditioned in compound with pre-trained A for 5 trials ($V_B$ grows to ~0.02)

The visual contrast between the two columns makes blocking vivid. Ask students to identify the exact point in the equation where blocking "happens" (answer: the summation of $V_A + V_B$ in the error term).

### Demonstration 2: Overexpectation Prediction

After blocking, introduce overexpectation as a novel prediction. Set up:

- Train A alone: $V_A \to 0.95$
- Train B alone: $V_B \to 0.95$
- Present AB compound with the US ($\lambda = 1.0$)

Ask students: "What is the prediction error on the first compound trial?" ($\lambda - (V_A + V_B) = 1.0 - 1.9 = -0.9$). Both A and B **lose** strength even though the US is presented. This is counterintuitive and is a strong test of the model. Have students calculate 2--3 trials to see both $V_A$ and $V_B$ decrease.

### Demonstration 3: Behavioral Momentum Comparison

Present a simplified scenario with two components:

- **Rich component:** reinforcement rate $r = 60$/hr, baseline response rate $B_o = 40$ resp/min
- **Lean component:** reinforcement rate $r = 15$/hr, baseline response rate $B_o = 40$ resp/min

Introduce a disruptor of magnitude $x = 1$ with $c = 1$.

Compute the proportional change for each:

- Rich: $\log(B_x / B_o) = -1/60 = -0.017$; $B_x / B_o = 0.96$ (4% reduction)
- Lean: $\log(B_x / B_o) = -1/15 = -0.067$; $B_x / B_o = 0.86$ (14% reduction)

This shows concretely how the same disruptor produces less disruption in the richer context. Discuss what this means for clinical interventions.

---

## Transition to Lab

This week's lab covers:

- **Simulating Rescorla-Wagner learning curves.** Students will implement the R-W equation in code (Python or spreadsheet) and generate acquisition curves for different parameter values. They will reproduce the table from the worked example computationally and verify their results match the analytical solution $V_n = \lambda(1 - (1 - \alpha\beta)^n)$.

- **Simulating blocking.** Students will extend their simulation to a two-phase blocking design and compare $V_B$ in the blocking condition vs. a control condition (B conditioned alone). They will produce plots showing the dramatic difference.

- **Comparing behavioral momentum predictions.** Students will compute predicted resistance to change for components with different reinforcement rates and plot the results. They will explore how changing the reinforcement ratio between components affects the predicted difference in resistance.

- **Parameter exploration.** Students will systematically vary $\alpha$ and $\beta$ to see how each parameter affects the speed and shape of the learning curve. This builds intuition for what the parameters "do" in the model.

Encourage students to connect their simulation output back to the 8-step framework: the simulation is Step 8 (check the math, test against data, derive predictions) made concrete.
