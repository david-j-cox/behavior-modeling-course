---
id: 7
---

## Solution: Extinction as Exponential Decay

### (a) Analytical Solution

The ODE is:

$$\frac{dx}{dt} = -a \cdot x$$

This is a first-order linear ODE with constant coefficient. Separating variables:

$$\frac{dx}{x} = -a \, dt$$

Integrating both sides:

$$\ln|x| = -at + C$$

$$x(t) = e^{C} \cdot e^{-at} = x(0) \cdot e^{-at}$$

With $x(0) = 50$ and $a = 0.2$:

$$x(t) = 50\,e^{-0.2t}$$

### (b) Compute $x(t)$ at Specific Times

| $t$ (min) | $-0.2t$ | $e^{-0.2t}$ | $x(t) = 50\,e^{-0.2t}$ (resp/min) |
|---|---|---|---|
| 1 | $-0.2$ | 0.8187 | 40.94 |
| 2 | $-0.4$ | 0.6703 | 33.52 |
| 5 | $-1.0$ | 0.3679 | 18.39 |
| 10 | $-2.0$ | 0.1353 | 6.77 |
| 20 | $-4.0$ | 0.01832 | 0.92 |

After 20 minutes, the response rate has declined from 50 to less than 1 response per minute.

### (c) Half-Life

The half-life $t_{1/2}$ is the time at which $x(t_{1/2}) = \frac{1}{2}x(0) = 25$ resp/min:

$$25 = 50\,e^{-0.2\,t_{1/2}}$$

$$\frac{1}{2} = e^{-0.2\,t_{1/2}}$$

$$\ln\!\left(\frac{1}{2}\right) = -0.2\,t_{1/2}$$

$$-0.6931 = -0.2\,t_{1/2}$$

$$t_{1/2} = \frac{0.6931}{0.2} = 3.466 \text{ minutes}$$

Note that the half-life depends only on $a$, not on $x(0)$: in general, $t_{1/2} = \frac{\ln 2}{a}$.

### (d) Limitations of the Exponential Decay Model

**Limitation 1 — No extinction burst.** Empirical extinction data frequently show an initial *increase* in response rate (an "extinction burst") at the onset of extinction, before responding declines. The exponential decay model predicts a strictly monotonic decrease from the very first moment, with the fastest rate of decline occurring at $t = 0$. It cannot capture the burst.

**Limitation 2 — No spontaneous recovery.** After a period of extinction, organisms typically show partial recovery of responding at the start of the next session (spontaneous recovery). The exponential model predicts $x(t) \to 0$ as $t \to \infty$ with no mechanism for recovery. It treats extinction as a permanent, one-directional process.

**Limitation 3 — Smooth, continuous decline.** Real extinction data are often irregular, showing bouts of responding interspersed with pauses. The exponential model predicts a smooth curve and cannot capture the variability in local response rates that characterizes actual extinction.

**Limitation 4 — Response rate never reaches zero.** The model predicts $x(t) > 0$ for all finite $t$, meaning the organism is always responding at some small positive rate. In practice, organisms eventually stop responding entirely. A model with a threshold or absorbing barrier at $x = 0$ would be more realistic.

These limitations suggest that while exponential decay may be a useful first approximation, more complex models — such as piecewise models incorporating a burst phase, or models with a resurgence component — would be needed for a fuller account of extinction.
