---
id: 12
---

## Solution: Building a DRA Model from Scratch

### (a) Identify Components and Draw a Flow Diagram

**State variables** (quantities that change over time):

- $x(t)$: rate of problem behavior (episodes/hour)
- $y(t)$: rate of alternative behavior (episodes/hour)

**Parameters** (constants that govern the dynamics):

- $\delta$: decay rate constant for problem behavior (hr$^{-1}$)
- $\rho$: growth rate constant for alternative behavior (hr$^{-1}$)
- $K$: carrying capacity for alternative behavior (episodes/hour)

**Independent variable:** $t$ (time, in hours)

**Dependent variables:** $x(t)$ and $y(t)$ (they depend on $t$)

**Flow diagram:**

The model has two stocks (state variables) with the following flows:

```
                  ┌─────────────────┐
                  │   x(t)          │
                  │ Problem Behavior│
                  │   Stock         │
                  └────────┬────────┘
                           │
                           ▼
                    ───────────────
                    Decay outflow
                    δ · x
                    ───────────────

                  ┌─────────────────┐
     ─────────►   │   y(t)          │
     Growth       │ Alternative     │
     inflow       │ Behavior Stock  │
     ρ·y·(1-y/K) └─────────────────┘
```

The problem behavior stock has a single outflow (decay) proportional to $x$. The alternative behavior stock has a net inflow governed by logistic growth. There is no direct coupling between the two stocks — they evolve independently under this model.

### (b) Derive and Justify the Differential Equations

**Problem behavior — exponential decay:**

$$\frac{dx}{dt} = -\delta \cdot x$$

Under DRA, attention is withheld following problem behavior (extinction). The rate of decay at any moment is proportional to how much problem behavior currently exists: the more there is, the more there is to extinguish, but each unit of behavior has the same per-unit probability of dropping out per unit time. This yields first-order exponential decay, the simplest model of extinction. The negative sign ensures that $x$ decreases over time.

**Alternative behavior — logistic growth:**

$$\frac{dy}{dt} = \rho \cdot y \cdot \left(1 - \frac{y}{K}\right)$$

When the alternative behavior contacts reinforcement, it grows. The $\rho \cdot y$ term captures the idea that growth is proportional to the current level of alternative behavior (a form of "behavioral momentum" — the more often manding occurs, the more opportunities it has to be reinforced, further increasing its rate). The $(1 - y/K)$ term introduces a ceiling: as $y$ approaches the carrying capacity $K$, growth slows because there are only so many opportunities per hour for attention-maintained manding. At $y = K$, the growth rate is zero.

### (c) At Least Four Assumptions

1. **Independence of behaviors:** The model assumes that problem behavior and alternative behavior evolve independently. In reality, they may compete for the same time or the same reinforcer, creating a direct coupling.

2. **Constant parameters:** The decay rate $\delta$ and growth rate $\rho$ are assumed constant over time. In practice, extinction bursts, emotional side effects, or changes in therapist fidelity could cause these rates to vary.

3. **Continuous time and continuous rates:** The model treats behavior rates as continuous, differentiable functions of time. In reality, behavior occurs in discrete episodes, and rates are computed over finite observation windows.

4. **Single-operant extinction for problem behavior:** The model assumes that withholding reinforcement leads to simple exponential decay. It does not account for extinction bursts (temporary increases in problem behavior), spontaneous recovery, or resurgence.

5. **No interaction effects:** There is no term in either equation representing how one behavior's rate affects the other's rate of change (e.g., response competition or substitutability).

6. **Fixed carrying capacity:** The ceiling $K$ is assumed constant. In practice, the maximum sustainable rate of manding could change as the client's skills develop or as the environment changes.

### (d) Dimensional Consistency

**Problem behavior equation:**

$$\frac{dx}{dt} = -\delta \cdot x$$

- Left-hand side: $\frac{[x]}{[t]} = \frac{\text{episodes/hour}}{\text{hour}} = \text{episodes/hour}^2$

- Right-hand side: $[\delta] \cdot [x] = \text{hr}^{-1} \cdot \text{episodes/hour} = \text{episodes/hour}^2$

The units match: both sides have dimensions of episodes $\cdot$ hour$^{-2}$. $\checkmark$

**Alternative behavior equation:**

$$\frac{dy}{dt} = \rho \cdot y \cdot \left(1 - \frac{y}{K}\right)$$

- Left-hand side: $\frac{[y]}{[t]} = \frac{\text{episodes/hour}}{\text{hour}} = \text{episodes/hour}^2$

- Right-hand side: $[\rho] \cdot [y] \cdot \left[\frac{y}{K}\right]$

  The term $(1 - y/K)$ is dimensionless because $[y] = [K] = \text{episodes/hour}$, so $y/K$ is dimensionless and $(1 - y/K)$ is dimensionless.

  Therefore: $[\rho] \cdot [y] = \text{hr}^{-1} \cdot \text{episodes/hour} = \text{episodes/hour}^2$

The units match: both sides have dimensions of episodes $\cdot$ hour$^{-2}$. $\checkmark$

### (e) Solve for $x(t)$ and Find Equilibria for $y(t)$

**Solving for $x(t)$:**

The equation $\frac{dx}{dt} = -\delta x$ is a first-order linear ODE with the well-known solution:

$$x(t) = x_0 \, e^{-\delta t}$$

Substituting $x_0 = 8$ episodes/hour and $\delta = 0.15$ hr$^{-1}$:

$$x(t) = 8 \, e^{-0.15t}$$

where $t$ is measured in hours.

**Finding equilibria of $y(t)$:**

At equilibrium, $\frac{dy}{dt} = 0$:

$$\rho \cdot y \cdot \left(1 - \frac{y}{K}\right) = 0$$

This equation is satisfied when either factor is zero:

1. $y^* = 0$ (the trivial equilibrium — alternative behavior is absent)
2. $1 - \frac{y}{K} = 0 \implies y^* = K = 12$ episodes/hour (the carrying capacity equilibrium)

**Stability analysis:**

Let $f(y) = \rho \, y \left(1 - \frac{y}{K}\right)$. We compute $f'(y)$:

$$f'(y) = \rho \left(1 - \frac{2y}{K}\right)$$

At $y^* = 0$:

$$f'(0) = \rho \left(1 - 0\right) = \rho = 0.30 > 0$$

Since $f'(0) > 0$, the equilibrium $y^* = 0$ is **unstable**. Any small positive perturbation will cause $y$ to grow away from zero.

At $y^* = K = 12$:

$$f'(12) = 0.30 \left(1 - \frac{2 \times 12}{12}\right) = 0.30 \times (1 - 2) = -0.30 < 0$$

Since $f'(K) < 0$, the equilibrium $y^* = 12$ is **stable**. Small perturbations away from $K$ will decay back toward $K$.

**Interpretation:** Starting from $y_0 = 2$ episodes/hour (which is between 0 and $K$), the alternative behavior will grow logistically and approach $y^* = 12$ episodes/hour as $t \to \infty$.

### (f) Time for Problem Behavior to Drop Below 1 Episode/Hour

We need to find $t$ such that $x(t) < 1$:

$$8 \, e^{-0.15t} = 1$$

$$e^{-0.15t} = \frac{1}{8}$$

$$-0.15t = \ln\left(\frac{1}{8}\right) = -\ln(8)$$

$$t = \frac{\ln(8)}{0.15}$$

Computing:

$$\ln(8) = \ln(2^3) = 3\ln(2) \approx 3 \times 0.6931 = 2.0794$$

$$t = \frac{2.0794}{0.15} \approx 13.86 \text{ hours}$$

**Clinical interpretation:** Under this model, problem behavior is predicted to drop below 1 episode/hour after approximately 13.9 hours of treatment exposure. This corresponds to the time required for an 87.5% reduction from baseline ($8 \to 1$ episodes/hour). In a clinical setting, if the client receives (for example) 3 hours of DRA treatment per day, the model predicts it would take roughly 4--5 treatment days to reach this criterion. This provides the treatment team with a concrete, quantitative expectation for treatment progress, though the actual timeline will depend on how well the model's assumptions (constant $\delta$, no extinction bursts, etc.) hold in practice.
