---
id: 16
title: "From Mechanism to Prediction: Comparing Mechanistic and ML Approaches"
week: 12
difficulty: "Advanced"
modelingSteps: [1, 2, 3, 5, 8]
tags: ["machine learning", "mechanistic models", "prediction", "matching law", "Q-learning", "synthesis"]
---

A laboratory dataset contains 60 sessions of pigeon choice on concurrent VI VI schedules. Each session varies in the reinforcement-rate ratio ($R_1/R_2$) and the overall reinforcement rate ($R_1 + R_2$). For each session, the dataset records the following features and outcome:

| Feature | Description |
|---------|-------------|
| $\log(R_1/R_2)$ | Log reinforcement-rate ratio (ranges from $-1.2$ to $1.2$) |
| $R_{\text{total}}$ | Total reinforcers per hour (ranges from 20 to 120) |
| Session length | Session duration in minutes (30 or 60) |
| **Outcome:** $\log(B_1/B_2)$ | Log response-rate ratio (the quantity to be predicted) |

A random subset of 40 sessions is used for training; the remaining 20 sessions are the test set.

The following results are obtained by three modeling approaches:

**Model A — Generalized Matching Law (Week 2):**

$$\log\left(\frac{B_1}{B_2}\right) = a \cdot \log\left(\frac{R_1}{R_2}\right) + \log\,b$$

Fitted on the 40 training sessions: $\hat{a} = 0.85$, $\log\,\hat{b} = 0.03$, training $R^2 = 0.91$, test $R^2 = 0.89$.

**Model B — Q-Learning Agent (Week 11):**

A Q-learning agent with $\alpha = 0.10$ (learning rate) and $\beta = 5.0$ (inverse temperature in a softmax choice rule) is trained on the 40 training sessions by simulating each session's reinforcement schedule. The agent's steady-state choice proportions are converted to $\log(B_1/B_2)$. Training $R^2 = 0.78$, test $R^2 = 0.75$.

**Model C — Decision Tree Regressor (Week 12):**

A decision tree with maximum depth = 4 is trained on all four features ($\log(R_1/R_2)$, $R_{\text{total}}$, session length) to predict $\log(B_1/B_2)$. Training $R^2 = 0.97$, test $R^2 = 0.82$.

**(a)** **Mechanistic model assessment.** The generalized matching law uses only $\log(R_1/R_2)$ as a predictor and has 2 parameters ($a$ and $\log\,b$). Explain why this model ignores $R_{\text{total}}$ and session length. Is this a limitation or a strength? Under what circumstances could ignoring these features lead to systematic prediction errors?

**(b)** **Q-learning analysis.** The Q-learning agent has lower $R^2$ than the other two models on both training and test sets. Explain why a reinforcement-learning model might underperform a simple regression on this task, despite being a more "detailed" model of the choice process. In your answer, address the role of the learning rate $\alpha$, the inverse temperature $\beta$, and the fact that the agent must learn from simulated experience rather than being directly fitted to the response ratios.

**(c)** **Decision tree analysis.** The decision tree achieves the highest training $R^2$ (0.97) but its test $R^2$ (0.82) drops substantially. Meanwhile, the matching law's test $R^2$ (0.89) exceeds the tree's. Explain this pattern in terms of overfitting, and describe how the tree's use of all four features contributes to this outcome. Propose one modification to the decision-tree approach that might improve its test performance.

**(d)** **The prediction-explanation gap.** Suppose the matching law and the decision tree had identical test $R^2$ values. A colleague argues that in this case the two models are "equally good." Construct a detailed argument for why this claim is incorrect. Address what each model does and does not reveal about the behavioral process generating the data. In your answer, distinguish between prediction (forecasting outcomes) and explanation (identifying the causal or functional mechanism).

**(e)** **Synthesis and recommendations.** A new researcher joins the lab and asks: "Which model should I use?" Argue that the answer depends on the research goal. For each of the following goals, recommend one of the three models and justify your choice:

1. Predicting choice allocation on a new schedule not yet run in the lab.
2. Understanding the real-time learning process by which pigeons acquire preference.
3. Screening a large set of environmental variables to discover which ones matter for choice.
4. Publishing a theoretical account of the matching law in a behavior-analytic journal.
