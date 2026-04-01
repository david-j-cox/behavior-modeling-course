---
id: 6
---

## Solution: Logistic Acquisition Model

### (a) Analytical Solution

The logistic ODE is:

$$\frac{dx}{dt} = r \cdot x \cdot \left(1 - \frac{x}{K}\right)$$

This is a separable ODE. The standard analytical solution with initial condition $x(0) = x_0$ is:

$$x(t) = \frac{K}{1 + \left(\frac{K - x_0}{x_0}\right)e^{-rt}}$$

Substituting $K = 40$, $x_0 = 3$, and $r = 0.10$:

$$x(t) = \frac{40}{1 + \left(\frac{40 - 3}{3}\right)e^{-0.10t}} = \frac{40}{1 + \frac{37}{3}e^{-0.10t}} = \frac{40}{1 + 12.333\,e^{-0.10t}}$$

### (b) Compute $x(t)$ at Specific Times

**At $t = 5$ min:**

$$x(5) = \frac{40}{1 + 12.333\,e^{-0.50}} = \frac{40}{1 + 12.333 \times 0.6065} = \frac{40}{1 + 7.480} = \frac{40}{8.480} = 4.72 \text{ resp/min}$$

**At $t = 15$ min:**

$$x(15) = \frac{40}{1 + 12.333\,e^{-1.50}} = \frac{40}{1 + 12.333 \times 0.2231} = \frac{40}{1 + 2.752} = \frac{40}{3.752} = 10.66 \text{ resp/min}$$

**At $t = 30$ min:**

$$x(30) = \frac{40}{1 + 12.333\,e^{-3.00}} = \frac{40}{1 + 12.333 \times 0.04979} = \frac{40}{1 + 0.6141} = \frac{40}{1.6141} = 24.78 \text{ resp/min}$$

**At $t = 60$ min:**

$$x(60) = \frac{40}{1 + 12.333\,e^{-6.00}} = \frac{40}{1 + 12.333 \times 0.002479} = \frac{40}{1 + 0.03057} = \frac{40}{1.03057} = 38.81 \text{ resp/min}$$

**Summary table:**

| $t$ (min) | $e^{-0.10t}$ | $1 + 12.333\,e^{-0.10t}$ | $x(t)$ (resp/min) |
|---|---|---|---|
| 5 | 0.6065 | 8.480 | 4.72 |
| 15 | 0.2231 | 3.752 | 10.66 |
| 30 | 0.04979 | 1.614 | 24.78 |
| 60 | 0.002479 | 1.031 | 38.81 |

The response rate starts at 3 resp/min, accelerates through the middle of the session, and approaches the carrying capacity of 40 resp/min.

### (c) Equilibria and Stability

Equilibria occur where $\frac{dx}{dt} = 0$:

$$r \cdot x \cdot \left(1 - \frac{x}{K}\right) = 0$$

This equation equals zero when:

1. $x^* = 0$ (no responding), or
2. $1 - x/K = 0 \implies x^* = K = 40$ resp/min (responding at carrying capacity).

**Stability analysis** using the derivative of $f(x) = rx(1 - x/K)$:

$$f'(x) = r\left(1 - \frac{2x}{K}\right)$$

**At $x^* = 0$:**

$$f'(0) = r\left(1 - 0\right) = r = 0.10 > 0$$

Since $f'(0) > 0$, the equilibrium at $x^* = 0$ is **unstable**. If the organism is responding at any rate above zero, responding will increase and move away from this equilibrium. Behaviorally, once responding begins it will not spontaneously return to zero.

**At $x^* = K = 40$:**

$$f'(40) = r\left(1 - \frac{80}{40}\right) = 0.10 \times (1 - 2) = -0.10 < 0$$

Since $f'(K) < 0$, the equilibrium at $x^* = 40$ is **stable**. If responding is perturbed slightly above or below 40 resp/min, it will return to 40. This represents a stable steady-state response rate — the behavioral "carrying capacity" of this schedule.
