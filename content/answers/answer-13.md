---
id: 13
---

## Solution: Q-Learning on a Concurrent Schedule

### (a) Q-Value Updates for Trials 1--4

The update rule with $\gamma = 0$ is:

$$Q(a) \leftarrow Q(a) + \alpha \left[ r - Q(a) \right]$$

with $\alpha = 0.1$. Only the Q-value of the chosen action is updated; the other remains unchanged.

**Trial 1: Choose Left, reward $r = 0$**

$$Q_L \leftarrow 0 + 0.1 \times [0 - 0] = 0 + 0 = 0$$

$$Q_R \text{ unchanged} = 0$$

**Trial 2: Choose Left, reward $r = 1$**

$$Q_L \leftarrow 0 + 0.1 \times [1 - 0] = 0 + 0.1 = 0.1$$

$$Q_R \text{ unchanged} = 0$$

**Trial 3: Choose Right, reward $r = 0$**

$$Q_R \leftarrow 0 + 0.1 \times [0 - 0] = 0 + 0 = 0$$

$$Q_L \text{ unchanged} = 0.1$$

**Trial 4: Choose Left, reward $r = 1$**

$$Q_L \leftarrow 0.1 + 0.1 \times [1 - 0.1] = 0.1 + 0.1 \times 0.9 = 0.1 + 0.09 = 0.19$$

$$Q_R \text{ unchanged} = 0$$

**Summary table:**

| Trial | Choice | Reward | $Q_L$ before | $Q_L$ after | $Q_R$ before | $Q_R$ after |
|-------|--------|--------|-------------|-------------|-------------|-------------|
| 1 | Left | 0 | 0.000 | 0.000 | 0.000 | 0.000 |
| 2 | Left | 1 | 0.000 | 0.100 | 0.000 | 0.000 |
| 3 | Right | 0 | 0.100 | 0.100 | 0.000 | 0.000 |
| 4 | Left | 1 | 0.100 | 0.190 | 0.000 | 0.000 |

### (b) Softmax Choice Probabilities After Trial 4

After trial 4, $Q_L = 0.19$ and $Q_R = 0$, with $\tau = 0.5$.

$$P(\text{Left}) = \frac{e^{Q_L / \tau}}{e^{Q_L / \tau} + e^{Q_R / \tau}} = \frac{e^{0.19 / 0.5}}{e^{0.19 / 0.5} + e^{0 / 0.5}}$$

Computing the exponents:

$$\frac{Q_L}{\tau} = \frac{0.19}{0.5} = 0.38$$

$$\frac{Q_R}{\tau} = \frac{0}{0.5} = 0$$

$$e^{0.38} \approx 1.4623$$

$$e^{0} = 1$$

$$P(\text{Left}) = \frac{1.4623}{1.4623 + 1} = \frac{1.4623}{2.4623} \approx 0.5939$$

$$P(\text{Right}) = 1 - P(\text{Left}) = 1 - 0.5939 = 0.4061$$

After just 4 trials, the agent has a modest preference for Left (about 59% vs. 41%), reflecting the two rewards received on Left and no rewards received on Right.

### (c) Steady-State Q-Values

With $\gamma = 0$, the update rule is:

$$Q(a) \leftarrow Q(a) + \alpha [r - Q(a)]$$

This is a stochastic approximation (Robbins-Monro) of the expected value of the immediate reward. To see why, consider the expected update when action $a$ is chosen:

$$\mathbb{E}[\Delta Q(a)] = \alpha [\mathbb{E}[r \mid a] - Q(a)]$$

At steady state, $\mathbb{E}[\Delta Q(a)] = 0$, which requires:

$$\mathbb{E}[r \mid a] - Q^*(a) = 0$$

$$Q^*(a) = \mathbb{E}[r \mid a]$$

For Left: rewards are $1$ with probability $p_L = 0.10$ and $0$ otherwise, so:

$$Q^*_L = \mathbb{E}[r \mid \text{Left}] = 1 \times 0.10 + 0 \times 0.90 = 0.10$$

For Right: rewards are $1$ with probability $p_R = 0.05$ and $0$ otherwise, so:

$$Q^*_R = \mathbb{E}[r \mid \text{Right}] = 1 \times 0.05 + 0 \times 0.95 = 0.05$$

The key insight is that $\gamma = 0$ means the agent only cares about the immediate reward on the current trial. There is no bootstrapping from future states. Therefore, the Q-value for each action converges to the mean immediate payoff for that action, which is simply the reinforcement probability (since reward magnitude is 1).

### (d) Steady-State Choice Probability Ratio

Using the steady-state Q-values $Q^*_L = 0.10$ and $Q^*_R = 0.05$ with $\tau = 0.5$:

$$\frac{Q^*_L}{\tau} = \frac{0.10}{0.5} = 0.20$$

$$\frac{Q^*_R}{\tau} = \frac{0.05}{0.5} = 0.10$$

$$P(\text{Left}) = \frac{e^{0.20}}{e^{0.20} + e^{0.10}}$$

Computing:

$$e^{0.20} \approx 1.2214$$

$$e^{0.10} \approx 1.1052$$

$$P(\text{Left}) = \frac{1.2214}{1.2214 + 1.1052} = \frac{1.2214}{2.3266} \approx 0.5250$$

$$P(\text{Right}) = 1 - 0.5250 = 0.4750$$

The **choice probability ratio** is:

$$\frac{P(\text{Left})}{P(\text{Right})} = \frac{0.5250}{0.4750} \approx 1.105$$

The **reinforcement ratio** is:

$$\frac{p_L}{p_R} = \frac{0.10}{0.05} = 2.0$$

The choice ratio (1.105) is much less extreme than the reinforcement ratio (2.0). The agent shows **undermatching**: it allocates more choices to Left, but not in proportion to the 2:1 reinforcement advantage.

### (e) Does the Agent Exhibit Matching?

**No, this Q-learning agent does not exhibit matching.** The matching law predicts that the choice ratio should equal the reinforcement ratio:

$$\frac{B_L}{B_R} = \frac{r_L}{r_R} = \frac{0.10}{0.05} = 2.0$$

The agent's steady-state choice ratio is approximately 1.105, which represents substantial undermatching.

**Why matching fails — the role of softmax and $\tau$:**

The softmax rule converts Q-value differences into choice probabilities via:

$$\frac{P(\text{Left})}{P(\text{Right})} = e^{(Q^*_L - Q^*_R)/\tau}$$

Substituting:

$$\frac{P(\text{Left})}{P(\text{Right})} = e^{(0.10 - 0.05)/0.5} = e^{0.10} \approx 1.105$$

For matching, we would need $e^{(Q^*_L - Q^*_R)/\tau} = p_L / p_R$. This would require:

$$\frac{Q^*_L - Q^*_R}{\tau} = \ln\left(\frac{p_L}{p_R}\right) = \ln(2) \approx 0.693$$

But the actual value is $(0.10 - 0.05)/0.5 = 0.10$, which is far smaller than 0.693. The problem is that softmax responds to absolute Q-value differences, not to their ratio. Because the Q-values (0.10 and 0.05) are both close to zero, the absolute difference $Q^*_L - Q^*_R = 0.05$ is small, and softmax with $\tau = 0.5$ does not amplify it enough to produce a 2:1 choice ratio.

**The role of $\gamma = 0$:**

Setting $\gamma = 0$ ensures that Q-values converge to immediate expected rewards ($Q^*_L = 0.10$, $Q^*_R = 0.05$). If $\gamma > 0$, the agent would incorporate expected future rewards, and the Q-values would generally be larger (potentially amplifying the difference between them). However, even with $\gamma > 0$, matching is not guaranteed — it would depend on the specific task structure.

**The role of $\tau$:**

The temperature parameter $\tau$ controls how sensitive the softmax function is to Q-value differences. As $\tau \to 0$, the agent becomes "greedy" (always choosing the action with the highest Q-value), producing extreme overmatching (or exclusive preference). As $\tau \to \infty$, choices become random (50/50), producing indifference. At intermediate values like $\tau = 0.5$, the degree of matching depends on the magnitude of the Q-value differences relative to $\tau$. To achieve exact matching for this problem, one would need:

$$\tau = \frac{Q^*_L - Q^*_R}{\ln(p_L / p_R)} = \frac{0.05}{\ln(2)} \approx \frac{0.05}{0.693} \approx 0.072$$

This much lower temperature would make the agent far more sensitive to the Q-value difference, producing the 2:1 choice ratio that matching requires. In general, Q-learning with softmax does not inherently produce matching; it can approximate matching only under specific parameter configurations.
