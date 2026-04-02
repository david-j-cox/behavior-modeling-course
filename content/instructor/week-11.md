---
title: "Instructor Notes: Week 11 — Computational Models"
week: 11
---

## Lecture Objectives

- Students can explain what makes a model "computational" (algorithm-based, run rather than solved) and identify when computational approaches are preferable to closed-form equations.
- Students can describe the core structure of agent-based models, Monte Carlo simulation, and reinforcement learning, and can give a behavioral example of each.
- Students can write out the Q-learning update rule, identify each component (learning rate, discount factor, reward, prediction error), and trace a Q-value update by hand for a simple example.
- Students can articulate the direct intellectual lineage from the Rescorla-Wagner prediction error (Week 5) to the temporal-difference error in Q-learning, identifying both shared structure and key extensions.
- Students can apply the 8-step modeling framework to construct a Q-learning model of concurrent-schedule choice and interpret simulation output in behavioral terms.

---

## Suggested Lecture Walkthrough (~60 min)

### Opening: Why We Need Computation Beyond Equations (10 min)

Start by posing a challenge problem. Put up a slide describing a scenario: 20 organisms in a shared environment, each with its own reinforcement history, interacting with one another, with reinforcement delivered probabilistically based on group-level patterns. Ask: "How would you write a single equation for this?" Let the silence land. This motivates why some phenomena require simulation.

Briefly recap the trajectory of the course: we started with static equilibrium models (matching, discounting, demand), moved to dynamic models (Rescorla-Wagner as a difference equation, logistic ODE), and now arrive at models so complex that we must run them as programs. Frame computational models as the natural next step, not a departure.

### Agent-Based Models and McDowell's Evolutionary Model (15 min)

Introduce ABMs through the concept of emergence: simple rules at the individual level producing complex patterns at the group level. Use a non-behavioral example first if helpful (e.g., flocking behavior from three simple rules: separation, alignment, cohesion).

Then present McDowell's (2019) evolutionary theory of behavior dynamics. Walk through the key elements:
- Virtual organism with a repertoire of behaviors (bit strings).
- At each step, one behavior is emitted; the environment reinforces probabilistically.
- Reinforcement acts as selection: reinforced behaviors (and mutants of them) replace unreinforced behaviors.
- Result: the repertoire evolves over time, and response allocation across concurrent schedules converges on matching.

Emphasize that matching was never programmed in — it emerges. This is the power of ABMs: you specify micro-level rules and discover macro-level regularities.

### Pivot to Reinforcement Learning and Q-Learning (20 min)

Transition by noting that McDowell's model is one approach to implementing learning computationally. Another comes from the AI/ML tradition: reinforcement learning. The key connection: both are grounded in the same behavioral principles.

Write the Rescorla-Wagner update rule on one side of the board:

$$\Delta V = \alpha \beta (\lambda - V)$$

Write the Q-learning update rule on the other side:

$$\Delta Q = \alpha [r + \gamma \cdot \max Q' - Q]$$

Walk through the structural parallel explicitly:
- Both have a learning rate ($\alpha$).
- Both are driven by prediction error ($\lambda - V$ vs. $r + \gamma \max Q' - Q$).
- Both update an internal estimate toward a target.
- Q-learning adds: states, actions, and temporal discounting ($\gamma$).

Tell the historical story briefly: Sutton and Barto were influenced by animal learning theory. The TD error was inspired by the R-W prediction error. Schultz, Dayan, and Montague (1997) showed dopamine neurons encode TD errors. Cox and Santos (2025) bring this full circle for behavior analysts.

Then do a live walkthrough of Q-value updates for 5-6 trials of a 2-armed bandit problem (see In-Class Demonstration below). Have students predict the direction of each update before you compute it.

### Monte Carlo and Simulation as Experiment (10 min)

Briefly cover Monte Carlo simulation as a method, not a model family. Emphasize the logic: when you cannot solve the math, run it many times with random inputs and analyze the distribution of outputs. Give concrete behavioral examples: bootstrapping confidence intervals for matching-law parameters, power analysis for a proposed experiment, estimating the probability of rare behavioral events.

Connect back to the worked example: a single Q-learning run is one realization of a stochastic process. To draw reliable conclusions, you need many replications — that is Monte Carlo.

### Wrap-Up and Connection to Lab (5 min)

Summarize the three computational model families. Emphasize that the 8-step framework still applies — you just run the model instead of solving it analytically. Preview the lab: students will implement a Q-learning agent in Python and observe matching emerge from prediction-error learning.

---

## Common Confusions to Address

**"Model-free" does not mean "the model has no model."** Students often confuse "model-free RL" (meaning the agent does not build an internal model of the environment) with the idea that there is no model at all. Clarify: Q-learning IS a model of how learning works. The "model-free" label refers to what the agent learns — values from direct experience, not a representation of transition dynamics.

**How Q-values relate to matching.** Students may ask: "If Q-values represent action values, why does the agent match rather than maximize?" The answer depends on the action-selection rule. With softmax selection, the agent probabilistically favors higher-valued actions but does not exclusively choose the best one. Under concurrent VI schedules (where switching between options can collect set-up reinforcers), this probabilistic allocation converges toward matching because exclusive preference would waste set-up reinforcers on the neglected alternative.

**"Why do we need simulation when we have equations?"** Emphasize that equations and simulations are complementary, not competing. Equations give insight and transparency. Simulations handle complexity, stochasticity, emergence, and heterogeneity that equations cannot. The logistic ODE from Week 10 has a closed-form solution; the Q-learning agent on a concurrent schedule does not.

**Confusing the model with the phenomenon.** Remind students that when we say "the Q-learning agent matches," we mean the model produces matching-like output. We are not claiming that rats literally compute Q-values. The model is a formal description of a process that, when run, reproduces the behavioral pattern. Whether the mechanism is "real" is a separate empirical question.

---

## Discussion Prompts

1. **R-W to Q-learning lineage**: We showed that Q-learning is a direct descendant of the Rescorla-Wagner model. Does this mean that AI researchers "borrowed" from behavior science, or is it more accurate to say both fields independently converged on the same mathematical structure (prediction-error-driven learning)? What does the answer tell us about the generality of prediction error as a learning principle?

2. **Emergence and explanation**: McDowell's ABM and Q-learning both produce matching as an emergent property. If two completely different computational mechanisms both produce the same behavioral regularity, what does that tell us about whether matching is a "fundamental law" versus a "consequence" of more basic processes? Does emergence-based explanation satisfy you scientifically?

3. **Practical applications**: How might a behavior analyst in clinical practice use computational models? Could you build an ABM of a classroom, a therapy session, or an organizational setting? What would be the value of such a model, and what would be its limitations?

4. **Ethics of simulation**: Computational models let us run "virtual experiments" on simulated organisms. Are there ethical implications of this — either positive (reducing the need for animal research) or negative (risk of over-reliance on models that may not capture reality)?

---

## In-Class Demonstration: Q-Value Updates for a 2-Armed Bandit

Walk through Q-value updates step by step on the whiteboard or a projected spreadsheet. Use a simple 2-armed bandit (two actions, one state, no discount factor needed for the demo).

**Setup:**
- Two actions: Left, Right.
- Left pays off with probability 0.6; Right pays off with probability 0.3.
- $\alpha = 0.1$, $\gamma = 0$ (simplify by ignoring discounting for the demo).
- Initial Q-values: $Q(L) = 0$, $Q(R) = 0$.

**Walk through 6 trials:**

| Trial | Choice | Reward | Prediction Error | Q-Update | $Q(L)$ | $Q(R)$ |
|-------|--------|--------|------------------|----------|--------|--------|
| 1 | L | 1 | $1 - 0 = 1.0$ | $0 + 0.1(1.0) = 0.10$ | 0.10 | 0.00 |
| 2 | R | 0 | $0 - 0 = 0.0$ | $0 + 0.1(0.0) = 0.00$ | 0.10 | 0.00 |
| 3 | L | 1 | $1 - 0.10 = 0.90$ | $0.10 + 0.1(0.90) = 0.19$ | 0.19 | 0.00 |
| 4 | L | 0 | $0 - 0.19 = -0.19$ | $0.19 + 0.1(-0.19) = 0.17$ | 0.17 | 0.00 |
| 5 | R | 1 | $1 - 0 = 1.0$ | $0 + 0.1(1.0) = 0.10$ | 0.17 | 0.10 |
| 6 | L | 1 | $1 - 0.17 = 0.83$ | $0.17 + 0.1(0.83) = 0.25$ | 0.25 | 0.10 |

**Key teaching points during the demo:**
- After trial 1, ask: "Which direction did Q(L) move? Why?" (Up, because reward exceeded expectation.)
- After trial 4, ask: "Q(L) went DOWN. Why?" (No reward when some was expected — negative prediction error.)
- After trial 6, ask: "Q(L) is 0.25 and Q(R) is 0.10. Is the agent 'matching' yet?" (Not yet — it needs more experience. But the Q-values are already tracking the relative reinforcement probabilities.)
- Final question: "What would happen if we ran this for 1,000 trials? Where would Q(L) and Q(R) settle?" (Near 0.6 and 0.3 — the true reinforcement probabilities, since $\gamma = 0$.)

---

## Transition to Lab

The lab for this week has students implement a Q-learning agent in Python. Preview the lab by telling students:

- They will write a Q-learning agent from scratch (the update rule is only a few lines of code).
- They will simulate the agent choosing between two levers on concurrent VI schedules.
- They will plot Q-values over trials and observe convergence.
- They will compute the response ratio at steady state and compare it to the matching-law prediction.
- They will vary parameters ($\alpha$, $\gamma$, $\tau$) and observe how each affects learning speed and final allocation.

Reassure students who are less comfortable with programming: the core algorithm is just the update rule they traced by hand in class. The lab is about implementing what they already understand conceptually.

---

## Key References

- McDowell, J. J. (2019). *On the current status of the evolutionary theory of behavior dynamics.* Journal of the Experimental Analysis of Behavior, 111(1), 130-145.
- Cox, D. J., & Santos, L. (2025). AI-based reinforcement learning and behavior science: Bridging computational and behavioral approaches.
- Sutton, R. S., & Barto, A. G. (2018). *Reinforcement learning: An introduction* (2nd ed.). MIT Press.
- Schultz, W., Dayan, P., & Montague, P. R. (1997). A neural substrate of prediction and reward. *Science*, 275(5306), 1593-1599.
