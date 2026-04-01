---
id: 5
---

## Solution: Rescorla-Wagner Acquisition

### (a) Trial-by-Trial Computations

The update rule is:

$$\Delta V = \alpha \beta (\lambda - V)$$

with $\alpha = 0.3$, $\beta = 0.4$, $\lambda = 100$, and $V_0 = 0$.

The combined learning rate is $\alpha \beta = 0.3 \times 0.4 = 0.12$.

**Trial 1:**

$$\Delta V_1 = 0.12 \times (100 - 0) = 0.12 \times 100 = 12.00$$

$$V_1 = 0 + 12.00 = 12.00$$

**Trial 2:**

$$\Delta V_2 = 0.12 \times (100 - 12.00) = 0.12 \times 88.00 = 10.56$$

$$V_2 = 12.00 + 10.56 = 22.56$$

**Trial 3:**

$$\Delta V_3 = 0.12 \times (100 - 22.56) = 0.12 \times 77.44 = 9.293$$

$$V_3 = 22.56 + 9.293 = 31.853$$

**Trial 4:**

$$\Delta V_4 = 0.12 \times (100 - 31.853) = 0.12 \times 68.147 = 8.178$$

$$V_4 = 31.853 + 8.178 = 40.031$$

**Trial 5:**

$$\Delta V_5 = 0.12 \times (100 - 40.031) = 0.12 \times 59.969 = 7.196$$

$$V_5 = 40.031 + 7.196 = 47.227$$

**Summary table:**

| Trial | $V$ before trial | $\lambda - V$ | $\Delta V$ | $V$ after trial |
|---|---|---|---|---|
| 1 | 0.000 | 100.000 | 12.000 | 12.000 |
| 2 | 12.000 | 88.000 | 10.560 | 22.560 |
| 3 | 22.560 | 77.440 | 9.293 | 31.853 |
| 4 | 31.853 | 68.147 | 8.178 | 40.031 |
| 5 | 40.031 | 59.969 | 7.196 | 47.227 |

### (b) Does $\Delta V$ Increase, Decrease, or Stay Constant?

$\Delta V$ **decreases** across trials: $12.00 \to 10.56 \to 9.29 \to 8.18 \to 7.20$.

This happens because $\Delta V = \alpha \beta (\lambda - V)$, and the term $(\lambda - V)$ shrinks as $V$ grows. On each trial, more of the available associative strength has already been acquired, so the "surprise" (the discrepancy between what is expected and what occurs) gets smaller. This produces the characteristic negatively accelerated learning curve of the Rescorla-Wagner model.

### (c) Will $V$ Ever Exactly Reach $\lambda$?

**No.** Each trial adds a fraction of the remaining gap $(\lambda - V)$ to $V$. Specifically:

$$V_{n+1} = V_n + \alpha\beta(\lambda - V_n) = (1 - \alpha\beta)V_n + \alpha\beta\lambda$$

This means that after each trial, the gap to the asymptote is multiplied by $(1 - \alpha\beta) = 0.88$:

$$\lambda - V_{n+1} = (1 - \alpha\beta)(\lambda - V_n)$$

Since $0 < (1 - \alpha\beta) < 1$, the gap shrinks geometrically but never reaches zero in a finite number of trials. $V$ **asymptotically approaches** $\lambda = 100$ but never exactly equals it. After $n$ trials:

$$V_n = \lambda\left[1 - (1 - \alpha\beta)^n\right] = 100\left[1 - (0.88)^n\right]$$

For example, after 20 trials: $V_{20} = 100(1 - 0.88^{20}) = 100(1 - 0.0776) = 92.24$.
