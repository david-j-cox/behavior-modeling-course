---
id: 16
---

## Solution: From Mechanism to Prediction: Comparing Mechanistic and ML Approaches

### (a) Mechanistic Model Assessment — Generalized Matching Law

The generalized matching law predicts that the log response ratio is a linear function of the log reinforcement ratio:

$$\log\left(\frac{B_1}{B_2}\right) = a \cdot \log\left(\frac{R_1}{R_2}\right) + \log\,b$$

This model uses only $\log(R_1/R_2)$ and ignores both $R_{\text{total}}$ and session length. This is not an oversight — it is a **theoretical commitment**. The matching law embodies the principle that the *relative* allocation of behavior is controlled by the *relative* allocation of reinforcement. Under the molar matching framework, only the ratio of reinforcement rates matters, not their absolute magnitudes. The bias parameter $\log\,b$ captures systematic side preference unrelated to the reinforcement contingency.

**Is this a strength or a limitation?**

It is both, depending on the context:

- **Strength:** By restricting the model to a single, theoretically motivated predictor, the matching law achieves parsimony and interpretability. The sensitivity parameter $a$ has a clear behavioral meaning: $a < 1$ indicates undermatching (common in concurrent VI VI), $a = 1$ indicates strict matching, and $a > 1$ indicates overmatching. The model's success with only 2 parameters and 1 predictor — achieving $R^2 = 0.89$ on test data — demonstrates that reinforcement ratios account for the vast majority of variance in choice.

- **Limitation:** There are well-documented conditions under which absolute reinforcement rate and session length affect choice allocation:

  1. **Changeover delay and ratio effects.** At very low overall reinforcement rates, long inter-reinforcement intervals can alter the effective contingency by changing the probability of reinforcement following a changeover response.
  2. **Session-length effects.** In shorter sessions, behavior may not reach steady state, and the transient period constitutes a larger fraction of the data. The matching law describes equilibrium behavior and may systematically mispredict if sessions are too short.
  3. **Satiation and deprivation.** Higher overall reinforcement rates in long sessions may produce satiation effects that alter preference, an effect the matching law cannot capture.

If these factors are present in the dataset, the matching law will produce **systematic residuals** correlated with $R_{\text{total}}$ and session length, rather than the random residuals expected from a well-specified model. A researcher should always plot residuals against the omitted variables to check for such patterns.

### (b) Q-Learning Analysis

The Q-learning agent achieves the lowest $R^2$ on both training (0.78) and test (0.75) sets. This underperformance relative to even a two-parameter regression has several explanations:

**1. Indirect fitting.** The generalized matching law and the decision tree are fit *directly* to the observed $\log(B_1/B_2)$ values — they adjust their parameters to minimize prediction error on the outcome variable. The Q-learning agent, by contrast, is not directly optimized to match the observed response ratios. Instead, it simulates the session's reinforcement schedule and generates choice behavior through its own internal dynamics (Q-value updates and softmax selection). The resulting $\log(B_1/B_2)$ is an *emergent* property of the simulation, not a directly fitted quantity. This mismatch between the agent's objective (maximizing reward via Q-value updates) and the evaluation criterion (predicting observed response ratios) introduces a systematic source of error.

**2. Sensitivity to $\alpha$ and $\beta$.** The learning rate $\alpha = 0.10$ determines how quickly Q-values update in response to new reinforcement. If this value is too small, the agent may not reach steady state within the simulated session, producing choice proportions that reflect the transient learning phase rather than the asymptotic allocation. If too large, Q-values become volatile and the steady-state allocation is noisy. The inverse temperature $\beta = 5.0$ controls how deterministically the agent translates Q-value differences into choice probabilities. A higher $\beta$ would produce sharper preference, while a lower $\beta$ would produce more stochastic choice. Neither $\alpha$ nor $\beta$ was optimized on the training data here — they were set a priori. Optimizing these parameters could improve fit, but would also increase the risk of overfitting given the indirect nature of the mapping from parameters to predictions.

**3. Stochastic simulation.** Each Q-learning simulation run produces a stochastic trajectory. Even with the same $\alpha$ and $\beta$, different runs yield different $\log(B_1/B_2)$ values. This stochasticity adds irreducible noise to the predictions. Averaging over many simulation runs would reduce this variance but would not eliminate the bias introduced by points 1 and 2.

**4. Model mismatch.** The Q-learning agent assumes a specific learning mechanism (incremental reward-prediction-error updating) that may not match the actual process generating the pigeons' choice behavior. If pigeons use a molecular strategy more akin to melioration, or if their behavior is better described by a molar matching process with no trial-level learning, then even a perfectly parameterized Q-learning agent will systematically deviate from the data.

Despite its lower predictive accuracy, the Q-learning model offers something the other two models do not: a **process account** of how preference develops over time within a session. This may be more valuable for certain research questions than raw predictive accuracy.

### (c) Decision Tree Analysis — Overfitting

The decision tree's training $R^2$ of 0.97 and test $R^2$ of 0.82 exhibit a **15-point gap**, the hallmark of overfitting. The matching law's corresponding gap is only 2 points (0.91 to 0.89).

**Why the tree overfits:**

1. **High flexibility relative to sample size.** A decision tree with max depth = 4 can create up to $2^4 = 16$ terminal nodes (leaves). With 40 training observations, this means an average of only 2.5 observations per leaf. The tree has enough flexibility to carve the feature space into small regions tailored to the idiosyncrasies of the training set.

2. **Exploiting irrelevant features.** The tree has access to all four features, including $R_{\text{total}}$ and session length. In a sample of 40 sessions, there may be spurious correlations between these features and $\log(B_1/B_2)$ that arise from sampling variability rather than genuine relationships. The tree will find and exploit these correlations, creating splits like "if $R_{\text{total}} > 73$ and session length = 60 min, predict $\log(B_1/B_2) = 0.42$" that fit training noise. These splits do not generalize.

3. **No regularization.** Unlike the matching law, which is constrained by its linear functional form, the tree imposes no smoothness or parametric structure on the prediction function. Each split creates a discontinuity, and the tree can accommodate any pattern — including noise — without penalty.

**Why the matching law generalizes better:** The matching law is constrained by a strong theoretical prior: choice ratios are a power function of reinforcement ratios. This structural assumption acts as a form of **implicit regularization**. The model cannot fit noise because its functional form does not permit arbitrary patterns. With only 2 free parameters, it is nearly impossible to overfit 40 observations.

**Proposed modification to improve the decision tree:**

Several approaches could help:

- **Pruning or reducing max depth.** Limiting the tree to depth 2 or 3 would reduce the number of leaves and force the tree to capture only the most robust patterns. Cross-validation could be used to select the optimal depth.
- **Random forest or gradient-boosted ensemble.** Averaging predictions across many decorrelated trees (bagging) reduces variance and improves generalization. A random forest with 100 trees and max depth = 3 would likely outperform the single depth-4 tree on test data.
- **Feature selection.** Restricting the tree to only $\log(R_1/R_2)$ — the feature the matching law uses — would prevent it from exploiting spurious correlations with $R_{\text{total}}$ and session length. If the matching law's theoretical claim is correct, removing the irrelevant features would improve the tree's test performance.

### (d) The Prediction-Explanation Gap

If the matching law and the decision tree produced identical test $R^2$ values, they would be equally accurate at **prediction** — that is, at forecasting $\log(B_1/B_2)$ for new sessions. But prediction accuracy is only one dimension on which models can be evaluated. The claim that "equally accurate means equally good" conflates prediction with explanation and ignores several critical differences:

**1. Explanation vs. prediction.**

- The matching law provides an **explanation** of choice: organisms allocate behavior in proportion to relative reinforcement. The parameters $a$ and $\log\,b$ have theoretical meaning — sensitivity and bias — that connect to decades of behavioral theory. The model tells us *why* $B_1/B_2$ takes the value it does: because $R_1/R_2$ is what it is, and the organism is sensitive to that ratio with parameter $a$.
- The decision tree provides a **prediction rule**: a series of if-then splits that map features to outputs. It does not explain why the organism makes the choices it does. A split like "if $\log(R_1/R_2) > 0.3$, go left" identifies a useful threshold for prediction but says nothing about the behavioral process that generates the threshold.

**2. Counterfactual reasoning.** The matching law supports **counterfactual inference**: if we changed the reinforcement ratio from 4:1 to 2:1, the model predicts exactly how choice would change (by a factor governed by $a$). This is because the model's structure embodies the causal claim that reinforcement ratios *control* choice ratios. The decision tree supports no such inference. Its splits are descriptive summaries of the training data, not causal claims. A new reinforcement ratio that falls in the same leaf as a training ratio will receive the same prediction, but the tree provides no principled way to predict the effect of an intervention on the schedule.

**3. Generalization beyond the training domain.** The matching law can extrapolate to reinforcement ratios outside the range observed in the training data because its functional form (a power function) is defined for all positive ratios. The decision tree can only interpolate within the feature space it has seen — for inputs outside the range of any split, it defaults to the nearest leaf, which may be arbitrarily wrong.

**4. Scientific communication and accumulation.** The matching law's parameters can be compared across studies, species, and conditions. A sensitivity exponent of $a = 0.85$ can be meaningfully compared to the $a = 0.80$ found in another laboratory, contributing to cumulative knowledge about matching. The decision tree's splits are idiosyncratic to the training data and have no currency in the broader scientific literature.

**5. Parsimony and identifiability.** The matching law achieves its test $R^2$ with 2 parameters. The decision tree achieves the same $R^2$ with many more effective parameters (each split threshold is a free parameter). Parsimony matters not for its own sake, but because models with fewer parameters are less likely to be fitting noise and more likely to have captured genuine regularities.

In summary, two models can be equally good at prediction while being vastly different in their value for scientific understanding. Prediction is necessary but not sufficient for explanation. A model that predicts well but explains nothing is a useful engineering tool; a model that both predicts and explains is a scientific contribution.

### (e) Synthesis and Recommendations

**Goal 1: Predicting choice allocation on a new schedule not yet run in the lab.**

**Recommended model: Generalized Matching Law (Model A).**

The matching law achieves the highest test $R^2$ (0.89) and, crucially, it can **extrapolate** to novel reinforcement ratios because its functional form (a power function of $R_1/R_2$) is defined across the entire positive real line. If the new schedule's $\log(R_1/R_2)$ is within or modestly outside the range of the training data, the matching law will produce reliable, interpretable predictions. The decision tree would be limited to interpolation within observed feature ranges, and the Q-learning agent would need to simulate the new schedule, introducing stochastic variability and dependence on potentially misspecified parameters.

**Goal 2: Understanding the real-time learning process by which pigeons acquire preference.**

**Recommended model: Q-Learning Agent (Model B).**

Despite its lower predictive $R^2$, the Q-learning agent is the only model that provides a **process account** of how preference develops over time. It models the trial-by-trial updating of action values and the translation of those values into choice probabilities. This makes it uniquely suited for investigating questions about learning dynamics: How quickly does preference shift after a schedule change? How does the learning rate vary across conditions? Is the organism's exploration-exploitation tradeoff consistent with a softmax rule or better described by an $\varepsilon$-greedy rule? None of these questions can even be *formulated* within the matching law or decision tree frameworks. The Q-learning model's parameters ($\alpha$ and $\beta$) directly map onto psychologically meaningful quantities — learning speed and choice determinism — that can be compared across conditions and organisms.

**Goal 3: Screening a large set of environmental variables to discover which ones matter for choice.**

**Recommended model: Decision Tree Regressor (Model C).**

When the goal is exploratory data analysis — identifying which features, out of many candidates, are most predictive of the outcome — the decision tree (or, better, a random forest with feature importance measures) excels. Unlike the matching law, which is restricted to $\log(R_1/R_2)$ by theoretical commitment, the tree can evaluate $R_{\text{total}}$, session length, and any other features the researcher provides. The tree's feature importance scores and split structure reveal which variables the data consider most informative. This is precisely the scenario where the tree's flexibility is an asset rather than a liability. The discoveries made through this screening can then inform the development of more principled mechanistic models. Note that a random forest ensemble with cross-validation would be preferable to a single tree for this purpose, to reduce the risk of highlighting spurious features.

**Goal 4: Publishing a theoretical account of the matching law in a behavior-analytic journal.**

**Recommended model: Generalized Matching Law (Model A).**

For this goal, the model must connect to the theoretical tradition in behavior analysis, use parameters that are interpretable and comparable across studies, and demonstrate that the matching law's functional form adequately describes the data. The sensitivity parameter $a = 0.85$ and bias $\log\,b = 0.03$ are directly comparable to the extensive literature reporting these values across species, schedules, and laboratories. Reporting that a Q-learning agent or decision tree also fits the data is informative as a supplementary analysis but does not advance matching-law theory. The matching law's parsimony, interpretability, and deep connection to the molar-molecular debate in behavior analysis make it the appropriate framework for a theoretical contribution to this audience.

**General principle:** There is no universally "best" model. The matching law is best for theory-driven prediction and explanation. The Q-learning agent is best for modeling the dynamics of learning. The decision tree is best for flexible prediction and feature discovery. A complete research program will often use all three at different stages: the tree to explore, the matching law to explain, and the Q-learning agent to model process.
