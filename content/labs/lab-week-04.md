---
week: 4
title: "Associative Learning Models"
description: "Implement the Rescorla-Wagner and Mackintosh models as recursive update rules and reproduce classic conditioning phenomena."
notebooks:
  - filename: "associative_learning_lab.ipynb"
    title: "Associative Learning Lab"
instructorNotebooks:
  - filename: "associative_learning_lab_solution.ipynb"
    title: "Associative Learning Lab (Solution)"
  - filename: "associative_learning_data_creation.ipynb"
    title: "Dataset Creation"
dataFiles: []
---

## Associative Learning Models Lab

This week, we focus on respondent conditioning -- stimulus-stimulus learning -- and the quantitative models that describe how organisms learn predictive relationships between events. Both models in this lab are **recursive**: the state of the system at trial `t` (the associative strengths, and for Mackintosh the attention weights) becomes part of the input at trial `t+1`. Formally:

X(t+1) = f(X(t), I(t))

where X(t) is the state at time t, I(t) is the input or event at time t (a CS, the US, a prediction error), and f is the transition rule. Because both parts are simulations, no data files are required.

### Part 1: The Rescorla-Wagner Model

The Rescorla-Wagner (1972) model is the foundational quantitative account of associative learning. Its central claim is that learning is driven by *prediction error*: associative strength changes only to the extent that the outcome of a trial differs from what the organism already expected. For each stimulus present on a trial,

ΔV_i = α_i * β * (λ - V_total),  where  V_total = Σ V_i

Here α_i is the salience of stimulus i, β is the learning rate of the US, λ is the asymptote supported by the US (1.0 when it occurs, 0.0 when it does not), and V_total is the summed associative strength of all stimuli present on that trial.

Your task is to implement this update rule as a function and use it to reproduce four classic phenomena that all emerge from the shared prediction-error term:

- **Blocking:** a CS that already predicts the US prevents learning to a newly added CS.
- **Overshadowing:** when two CSs are trained together, the more salient one captures more associative strength.
- **Overexpectation:** two separately conditioned CSs, then trained together, both *lose* strength because their summed prediction overshoots λ.
- **Conditioned inhibition:** a CS paired with the absence of an otherwise-predicted US acquires *negative* associative strength.

**Hints:**

- Represent each trial as the set of stimuli present plus the US asymptote λ for that trial. Build the phenomenon by choosing the right sequence of trials across phases.
- Compute `V_total` from the stimuli present *before* updating, then apply ΔV to each present stimulus.

### Part 2: The Mackintosh Model (Recursive Associability)

The Mackintosh (1975) model extends prediction-error learning with a dynamic *associability* (attention) term. A stimulus that predicts the US better than its competitors gains associability across trials, while a poorer predictor loses it. This lets the model capture attentional phenomena that fixed-salience Rescorla-Wagner cannot.

Your task is to implement the Mackintosh update rules for association strength `V` and associability `alpha`, then write simulation functions for (a) basic conditioning, (b) overshadowing, and (c) blocking, and visualize how V and alpha evolve across trials for a range of learning rates (theta).

**Hints:**

- **Recursive nature:** both the associability (alpha) and the association strength (V) update based on their previous values.
- **Phenomenon validation:** your outputs should show basic conditioning (V rises toward λ while alpha adjusts), overshadowing (CS1 with higher alpha gains more V than CS2), and blocking (CS2 shows minimal learning when CS1 already predicts the US).

### References

- Rescorla, R. A., & Wagner, A. R. (1972). A theory of Pavlovian conditioning: Variations in the effectiveness of reinforcement and nonreinforcement.
- Mackintosh, N. J. (1975). A theory of attention: Variations in the associability of stimuli with reinforcement. *Psychological Review*, 82(4), 276-298.
