---
title: "Instructor Notes: Week 5 — Behavioral Momentum and Response Persistence"
week: 5
---

## Lecture Objectives

- Students should be able to state the behavioral momentum metaphor and explain the core distinction between response rate (governed by the operant contingency) and resistance to change (governed by the Pavlovian stimulus-reinforcer contingency).
- Students should be able to write the basic resistance-to-change equation, define each term, and use it to predict the relative disruption of behavior across rich and lean contexts.
- Students should be able to explain why behavioral momentum theory treats persistence as a Pavlovian phenomenon and articulate the clinical implications of this claim.
- Students should be able to connect behavioral momentum theory to resurgence and relapse, and describe at least one treatment-design tension the theory exposes (e.g., enriching a context to increase desirable behavior may also make problem behavior more persistent).
- Students should be able to apply the 8-step modeling framework to a resistance-to-change scenario.

---

## Suggested Lecture Walkthrough (~60 min)

### Opening: Connecting Backward and Framing the Phenomenon (10 min)

Open by linking to last week. The Rescorla-Wagner model explained how organisms *learn* predictive relationships. This week asks a different question: once behavior is established, why does it *persist*---sometimes stubbornly---when conditions change?

Make the phenomenon concrete before any equations. Offer everyday cases of persistence: the pigeon that keeps pecking after the contingency changes, the child whose tantrums continue after a new intervention begins, the person who relapses after quitting. Ask: "Why do some behaviors collapse the moment conditions change, while others keep going?" Establish that persistence is not random---it is predictable, quantifiable, and governed by identifiable variables.

Introduce the central metaphor: behavior has **velocity** (response rate) and **mass** (resistance to disruption). These two properties are controlled by *different* variables. This is the conceptual heart of the week.

### Behavioral Momentum Theory and the Multiple Schedule (10 min)

Describe the standard preparation: a multiple schedule with two components that differ in reinforcement rate (e.g., a rich VI and a lean VI), each signaled by its own stimulus. Baseline response rates are measured, then a disruptor is introduced (prefeeding, extinction, alternative reinforcement). Resistance to change is measured as the proportional decline in responding relative to baseline.

Key empirical finding to emphasize: behavior in the *richer* component is proportionally *less* disrupted, even when baseline response rates are similar across components. Reinforcement rate, not response rate, predicts persistence.

### The Pavlovian Nature of Persistence (10 min)

This is the conceptual move students find most surprising. Response rate is shaped by the *operant* (response-reinforcer) contingency, but resistance to change tracks the *Pavlovian* (stimulus-reinforcer) contingency---the relationship between the component stimulus and the rate of reinforcement delivered in its presence.

The evidence: adding response-independent reinforcement to a component *increases* resistance to change even though it can *decrease* response rate (because it weakens the response-reinforcer contingency). Rate and persistence dissociate. Hammer this point: two behaviors occurring at the same rate can have very different "mass."

### The Equations (10 min)

Present the basic resistance-to-change relation:

$$\log \left( \frac{B_x}{B_0} \right) = -\frac{x}{r \cdot d}$$

Define each term:
- $B_0$: baseline response rate (before disruption)
- $B_x$: response rate during disruption of magnitude $x$
- $r$: reinforcement rate in the component (the Pavlovian stimulus-reinforcer relation)
- $d$: a sensitivity parameter scaling the effect of disruption
- $x$: magnitude of the disruptor

The logic: larger $r$ (a richer context) makes the right-hand side smaller in magnitude, so the proportional decline is smaller---behavior persists. Then introduce the augmented model, which expresses baseline behavior itself as a power function of reinforcement:

$$\frac{B}{B_0} = d \cdot r^{b}$$

Note that the augmented model lets the same reinforcement variable account for both baseline rate and resistance, which is conceptually economical. Do not over-formalize---the goal is for students to read $r$ as "the mass-conferring variable."

### Key Predictions and Clinical Implications (5 min)

State the headline prediction: enriching the reinforcement context increases persistence. Then surface the clinical tension directly---this is the section students remember. If you deliver reinforcement in a context to increase a desirable behavior (e.g., DRA), you may simultaneously increase the behavioral momentum of *whatever else* occurs in that context, including problem behavior. Persistence is a property of the context, not just the target response.

### Wrap-Up and 8-Step Framework (5 min)

Walk through how the 8-step framework applies to a resistance-to-change scenario. Emphasize Step 2 (scope: BMT models persistence under disruption, not acquisition or steady-state rate per se) and Step 4 (assumptions: the operative reinforcement rate is the one signaled by the component stimulus; disruptors are assumed to act multiplicatively). Preview the lab, which makes these predictions quantitative.

### Assigned Readings

- Nevin, J. A., Mandell, C., & Atak, J. R. (1983). The analysis of behavioral momentum. *Journal of the Experimental Analysis of Behavior, 39*(1), 49--59. https://doi.org/10.1901/jeab.1983.39-49
- Nevin, J. A., & Shahan, T. A. (2011). Behavioral momentum theory: Equations and applications. *Journal of Applied Behavior Analysis, 44*(4), 877--895. https://doi.org/10.1901/jaba.2011.44-877
- Nevin, J. A. (2002). Measuring behavioral momentum. *Behavioural Processes, 57*(2--3), 187--198. https://doi.org/10.1016/S0376-6357(02)00013-X
- Shahan, T. A., & Craig, A. R. (2017). Resurgence as choice. *Behavioural Processes, 141*(Pt 1), 100--127. https://doi.org/10.1016/j.beproc.2017.01.006

---

## Discussion Prompts

1. **The treatment-design paradox.** Behavioral momentum theory predicts that enriching the reinforcement context will make behavior more persistent. But in clinical settings, we sometimes want to make problem behaviors *less* persistent. If you are delivering reinforcement to reduce problem behavior (e.g., via DRA), are you simultaneously increasing the behavioral momentum of whatever behavior is occurring in that context? How would you design around this tension?

2. **Rate vs. mass.** Two clients emit a target behavior at the same rate, but one persists under disruption and the other does not. What does behavioral momentum theory say is responsible for the difference, and what would you measure to confirm it? Why is response rate alone a poor index of "how strong" a behavior is?

3. **The operant/respondent distinction.** Behavioral momentum theory claims that persistence is governed by the Pavlovian stimulus-reinforcer relation, not the operant response-reinforcer relation. How would you explain this to a practitioner who has only ever thought about behavior in operant terms? What would you point to as the strongest evidence?

4. **Resurgence and relapse.** Resurgence (the return of a previously reinforced behavior when an alternative is removed) and other forms of relapse are major clinical concerns. How does framing persistence in terms of reinforcement context (rather than the response itself) change how you would try to prevent relapse?

---

## In-Class Demonstrations

### Demonstration 1: Resistance to Change in Rich vs. Lean Contexts

Present a simplified two-component scenario:

- **Rich component:** reinforcement rate $r = 60$/hr, baseline response rate $B_0 = 40$ resp/min
- **Lean component:** reinforcement rate $r = 15$/hr, baseline response rate $B_0 = 40$ resp/min

Introduce a disruptor of magnitude $x = 1$ with sensitivity $d = 1$. Compute the proportional change for each:

- Rich: $\log(B_x/B_0) = -1/(60 \cdot 1) = -0.017$; $B_x/B_0 \approx 0.96$ (about a 4% reduction)
- Lean: $\log(B_x/B_0) = -1/(15 \cdot 1) = -0.067$; $B_x/B_0 \approx 0.86$ (about a 14% reduction)

The key teaching point: baseline rates are *identical* (40 resp/min in both), yet the richer context is far more resistant to the same disruptor. Have students recompute with a stronger disruptor ($x = 3$) to see the gap widen. Discuss what this means for choosing the context in which to build clinically important behavior.

### Demonstration 2: The Rate-Persistence Dissociation

Set up a thought experiment (or use class-generated numbers). In Component A, the response-reinforcer contingency is strong, producing a high response rate. In Component B, you add response-*independent* reinforcement: this lowers the response rate (the operant contingency is diluted) but raises the total reinforcement rate signaled by the stimulus.

Ask students to predict: which component shows more resistance to change? Most will guess A (higher rate). Reveal that B---despite its *lower* rate---is predicted to be *more* persistent, because resistance tracks the stimulus-reinforcer (Pavlovian) relation. This makes the central dissociation vivid and sets up Discussion Prompt 2.

---

## Transition to Lab

This week's lab makes resistance-to-change predictions quantitative. Students will:

- **Compute predicted resistance to change** for multiple-schedule components that differ in reinforcement rate, using the basic equation, and plot proportional response rate ($B_x/B_0$) against disruptor magnitude for each component.
- **Explore the reinforcement-ratio manipulation.** Students will vary the ratio of reinforcement rates between the rich and lean components and observe how the predicted difference in resistance grows or shrinks.
- **Fit the augmented model** to baseline data, estimating $d$ and $b$, and interpret what the parameters say about the context.
- **Connect to relapse.** Students will simulate a simple resurgence scenario and relate the outcome back to the reinforcement context in which the behavior was originally trained.

Encourage students to connect their simulation output back to the 8-step framework: the lab is Step 8 (test against data, derive predictions) made concrete, and it should make the rate-versus-mass distinction something they can see in a plot rather than just assert in words.
