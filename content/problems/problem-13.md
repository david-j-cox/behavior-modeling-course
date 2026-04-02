---
id: 13
title: "Q-Learning on a Concurrent Schedule"
week: 11
difficulty: "Advanced"
modelingSteps: [3, 5, 8]
tags: ["Q-learning", "reinforcement learning", "softmax", "matching law", "concurrent schedules"]
---

An agent chooses between two levers on a concurrent variable-ratio schedule. The Left lever pays off with probability $p_L = 0.10$ per trial (reward $= 1$), and the Right lever pays off with probability $p_R = 0.05$ per trial (reward $= 1$). The agent uses a Q-learning algorithm with the following parameters:

- Learning rate: $\alpha = 0.1$
- Discount factor: $\gamma = 0$ (no future discounting; only immediate reward matters)
- Softmax temperature: $\tau = 0.5$
- Initial Q-values: $Q_L = Q_R = 0$

The Q-value update rule is:

$$Q(a) \leftarrow Q(a) + \alpha \left[ r + \gamma \max_{a'} Q(a') - Q(a) \right]$$

Since $\gamma = 0$, this simplifies to:

$$Q(a) \leftarrow Q(a) + \alpha \left[ r - Q(a) \right]$$

The softmax action selection rule is:

$$P(\text{Left}) = \frac{e^{Q_L / \tau}}{e^{Q_L / \tau} + e^{Q_R / \tau}}$$

The following trial sequence is observed:

| Trial | Choice | Reward |
|-------|--------|--------|
| 1 | Left | 0 |
| 2 | Left | 1 |
| 3 | Right | 0 |
| 4 | Left | 1 |

**(a)** Compute the Q-value updates for both $Q_L$ and $Q_R$ after each of the 4 trials. Present your results in a table.

**(b)** After trial 4, compute the softmax choice probabilities $P(\text{Left})$ and $P(\text{Right})$.

**(c)** Predict the steady-state Q-values analytically. With $\gamma = 0$, explain why $Q(a)$ converges to the expected immediate reward for action $a$.

**(d)** Using the steady-state Q-values, compute the steady-state choice probability ratio $P(\text{Left}) / P(\text{Right})$. Compare this to the reinforcement ratio $p_L / p_R$.

**(e)** Does this Q-learning agent exhibit matching (i.e., the choice ratio equals the reinforcement ratio)? Explain why or why not, and discuss the role of the $\gamma = 0$ assumption and the softmax temperature $\tau$ in determining the degree of deviation from matching.
