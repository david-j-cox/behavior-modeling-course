---
title: "Instructor Notes: Week 10 — Dynamical Systems"
week: 10
---

This is the NEW week added to the syllabus. Students have now seen algebraic models (weeks 2-5), model comparison (week 6), model construction (week 7), probabilistic models (week 8), and multilevel/time-series models (week 9). This week introduces continuous-time dynamics — a major conceptual leap.

## Lecture Objectives

- Students can write and interpret a simple ODE (dx/dt = f(x))
- Students can find equilibria by setting dx/dt = 0 and assess their stability
- Students can describe a phase portrait and explain what arrows represent
- Students can connect static models from earlier weeks to their dynamical underpinnings
- Students understand the logistic growth model as a model of response acquisition

## Suggested Lecture Walkthrough

Approximate total time: 60 minutes.

### Opening (10 min)

"Every model we've seen so far describes an endpoint — matching equilibrium, asymptotic discounting, steady-state demand. But how does the organism GET there? That's dynamics." Use a concrete visual: show an acquisition curve and ask what equation could describe it.

### Core concepts (20 min)

State variables, phase space, equilibrium. Keep it concrete — response rate is the state variable, the number line is the phase space. Build the logistic equation step by step on the board: growth term (r·x), ceiling term (1 - x/K), combine them. Sketch the inverted parabola (dx/dt vs x) and show how it tells you the direction of change.

### Stability analysis (15 min)

Find equilibria (x=0 and x=K). Compute f'(x) at each. x=0: positive derivative → unstable. x=K: negative derivative → stable. Behavioral interpretation: even a tiny bit of responding grows (x=0 unstable); steady-state performance is robust to perturbation (x=K stable).

### Connections backward (10 min)

"The matching law describes WHERE behavior ends up. A dynamical model describes HOW it gets there." Similarly for Rescorla-Wagner — it's already a difference equation. This is the thread that connects the whole course.

### Wrap-up (5 min)

Preview coupled ODEs for competing responses. Preview computational models (Week 11) as numerical integration of these equations.

### Common student difficulties

The derivative notation (dx/dt) is intimidating. Reassure: it just means "rate of change." Stability analysis via eigenvalues/derivatives feels abstract — anchor it with the marble-in-a-bowl analogy. Students may not see why dynamical models add value over static models — emphasize prediction of trajectories, not just endpoints.

### Assigned Readings

- **Strogatz, S. H. (2015). *Nonlinear dynamics and chaos* (2nd ed.), Chapter 2: Flows on the line (pp. 15–37). Westview Press.** — The clearest introduction to one-dimensional ODEs, equilibria, stability, and phase portraits available at any level. Students do not need the full textbook; Chapter 2 alone covers everything they need for this week's content. If students want more, Chapter 5 (pp. 117–140) covers two-dimensional systems and phase-plane analysis.

- **Marr, M. J. (1992). Behavior dynamics: One perspective. *Journal of the Experimental Analysis of Behavior*, *57*(3), 249–266.** — Written by a behavior analyst for behavior analysts, this paper argues that dynamical systems thinking is a natural framework for understanding behavioral processes. It introduces key concepts (state space, trajectories, attractors, bifurcations) in behavioral language and connects them to operant phenomena. Essential reading for understanding *why* this mathematical framework matters for our field.

- **Nevin, J. A., & Grace, R. C. (2000). Behavioral momentum and the law of effect. *Behavioral and Brain Sciences*, *23*(1), 73–90. (Target article only; commentaries optional.)** — Formalizes behavioral momentum theory using dynamical concepts: resistance to change as stability, disruption as perturbation, reinforcement context as a parameter governing attractor depth. This paper makes the connection between Week 5's behavioral momentum discussion and this week's dynamical formalism explicit. Students should focus on the mathematical framework sections, not the commentaries.

## Discussion Prompts

- "Behavioral momentum theory says higher reinforcement rate means more resistance to disruption. In dynamical systems terms, what does 'resistance to disruption' mean?"
- "The logistic model predicts that x=0 is unstable — any responding at all will grow. But sometimes organisms placed in a new chamber never start responding. How would you modify the model to account for this?"
- "Can you think of a behavioral phenomenon that oscillates rather than reaching a steady state? What kind of attractor would produce oscillations?"
- "Rescorla-Wagner is a difference equation. What would a continuous-time version look like? What would change about its predictions?"

## In-Class Demonstrations

- Build the logistic model on the board step by step. Start from the verbal description ("responding grows but hits a ceiling"), translate to the equation, sketch the phase portrait.
- Compute x(t) at t = 10, 20, 30 min with K=60, r=0.15, x₀=2 (the worked example from the chapter). Plot the sigmoidal curve.
- If time: draw a phase portrait for a coupled system (competing responses) and discuss qualitatively.

## Transition to Lab

The lab for this week has students implement dynamical systems models in Python (NumPy + Matplotlib). The core activities build from numerical simulation of a single ODE through phase portrait construction to coupled systems. Students who completed the Week 7 lab (model construction and Euler's method) will have a head start; for those who did not, the first activity includes a brief setup walkthrough.

Preview the lab by telling students:

- They will simulate acquisition using the logistic ODE — the same model they worked through analytically in the chapter.
- They will build phase portraits from scratch by computing $f(x)$ across a range of $x$ values.
- They will explore how changing parameters reshapes trajectories and stability — the sensitivity analysis skills from Week 7 applied to dynamical models.
- They will extend to a coupled system (competing responses) and observe how two-dimensional dynamics produce qualitatively different behavior than one-dimensional dynamics.

### Activity 1: Simulate the Logistic Acquisition Model with Euler's Method

Students implement the logistic ODE $\frac{dx}{dt} = r \cdot x \cdot (1 - x/K)$ using Euler's method. Provide the parameter values from the chapter worked example: $K = 60$, $r = 0.15$, $x_0 = 2$, step size $dt = 0.1$, total time $T = 60$ minutes.

Students should:
- Write the Euler update: `x_new = x + dt * r * x * (1 - x / K)`
- Store and plot $x(t)$ over the full 60-minute window
- Overlay the analytical solution $x(t) = K / (1 + ((K - x_0)/x_0) \cdot e^{-rt})$ to verify their numerical solution
- Confirm that the two curves are visually indistinguishable (validating the numerical method)
- Compute and report the maximum absolute error between numerical and analytical solutions

This activity reinforces Step 8 of the framework: verify the math by checking the simulation against a known solution.

### Activity 2: Phase Portrait Construction

Students construct the phase portrait for the logistic model by plotting $f(x) = r \cdot x \cdot (1 - x/K)$ as a function of $x$.

Students should:
- Create a vector of $x$ values from $-5$ to $70$ (slightly beyond the equilibria at 0 and 60)
- Compute and plot $f(x)$ vs. $x$ — the resulting inverted parabola
- Mark the equilibria where $f(x) = 0$ (at $x = 0$ and $x = K$)
- Add arrows on the $x$-axis indicating the direction of flow: rightward where $f(x) > 0$, leftward where $f(x) < 0$
- Annotate stability: label $x = 0$ as unstable and $x = K$ as stable
- Interpret the phase portrait in one paragraph: what does it tell you about the behavior of the system that the time-series plot does not?

### Activity 3: Sensitivity Analysis — Varying $r$ and $K$

Students systematically vary parameters to build intuition for what each parameter controls.

Students should:
- Hold $K = 60$ and simulate acquisition for $r = 0.05, 0.15, 0.30, 0.50$. Plot all four trajectories on a single figure. Describe in words what $r$ controls (speed of acquisition, not the asymptote).
- Hold $r = 0.15$ and simulate for $K = 20, 40, 60, 80$. Plot all four on a single figure. Describe what $K$ controls (the ceiling rate).
- Create a 2D heatmap or contour plot showing the time to reach 90% of $K$ (i.e., the time at which $x(t) \geq 0.9K$) as a function of $r$ and $K$. Describe the pattern.

Connect this to Week 7: this is formal sensitivity analysis applied to a dynamical model. Which parameter has a larger effect on the shape of the acquisition curve?

### Activity 4: Coupled ODE System — Competing Responses

Students extend to a two-variable system using the Lotka–Volterra competition model from the chapter:

$$\frac{dx}{dt} = a \cdot x - b \cdot x \cdot y$$
$$\frac{dy}{dt} = c \cdot y - d \cdot x \cdot y$$

Use parameter values: $a = 0.4$, $b = 0.01$, $c = 0.3$, $d = 0.01$, initial conditions $x_0 = 5$, $y_0 = 5$, $dt = 0.05$, $T = 100$.

Students should:
- Implement Euler's method for the coupled system (two update equations per step)
- Plot $x(t)$ and $y(t)$ on the same time-series figure
- Create a phase-plane plot: $y$ vs. $x$, with the trajectory drawn as a curve and an arrow indicating the direction of time
- Find the equilibria algebraically (set both equations to zero) and mark them on the phase-plane plot
- Vary the initial conditions ($x_0 = 20, y_0 = 5$ and $x_0 = 5, y_0 = 20$) and overlay the new trajectories on the phase-plane plot
- Describe in behavioral terms: if $x$ and $y$ represent two competing operant responses, what does the model predict about how the organism allocates behavior over time?

### Extension (for advanced students)

Add stochastic noise to the logistic model: at each time step, add a random perturbation drawn from $N(0, \sigma^2)$ to the deterministic update. Run 50 replications and plot all trajectories on a single figure. Observe how noise affects the approach to equilibrium. Does the system still converge to $K$? How does increasing $\sigma$ affect the variability of trajectories? This previews the Monte Carlo methods covered in Week 11.

Remind students that the lab exercises connect directly to the 8-step framework: they are specifying models (Step 3), implementing the balance (Step 5), checking numerics against analytics (Step 8), and conducting sensitivity analysis (a form of validation). The skills built here — numerical simulation, phase portrait analysis, sensitivity sweeps — are the foundation for the computational models in Week 11.

---

## Key References

- Strogatz, S. H. (2015). *Nonlinear dynamics and chaos: With applications to physics, biology, chemistry, and engineering* (2nd ed.). Westview Press.
- Marr, M. J. (1992). Behavior dynamics: One perspective. *Journal of the Experimental Analysis of Behavior*, *57*(3), 249–266.
- Nevin, J. A., & Grace, R. C. (2000). Behavioral momentum and the law of effect. *Behavioral and Brain Sciences*, *23*(1), 73–130.
- Otto, S. P., & Day, T. (2007). *A biologist's guide to mathematical modeling in ecology and evolution*. Princeton University Press. (Chapters 2 and 4.)
- Nevin, J. A. (1992). An integrative model for the study of behavioral momentum. *Journal of the Experimental Analysis of Behavior*, *57*(3), 301–316.
