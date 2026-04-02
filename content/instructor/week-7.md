---
title: "Instructor Notes: Week 7 — How to Construct a Model"
week: 7
---

## Lecture Objectives

By the end of this lecture, students should be able to:

- Draw a life-cycle diagram for a discrete-time behavioral process and a flow diagram for a continuous-time behavioral process, labeling all states, transitions, pools, and flows.
- Translate a flow diagram into a differential equation using the recipe: derivative equals sum of inflows minus sum of outflows, and translate a life-cycle diagram into a difference equation.
- Perform a dimensional analysis on any model equation, verifying that all additive terms share the same units and identifying errors when they do not.
- Conduct a one-at-a-time sensitivity analysis on a simple model, interpret the results, and explain which parameters the model is most sensitive to and why that matters for intervention design.
- Implement the Euler method to simulate a simple differential equation model forward in time, choosing an appropriate step size and checking for convergence.

---

## Suggested Lecture Walkthrough (~60 min)

This is the most hands-on week of the course. The lecture should feel more like a workshop than a traditional talk. Minimize slides; maximize board work and student participation.

### Opening (5 min)

Start with the core message: **the hardest part of model building is starting.** Students freeze because they think the model needs to be perfect from the outset. Disarm this by showing a first draft of a famous model that was later revised (e.g., early versions of the Rescorla-Wagner model, or Herrnstein's original single-alternative matching equation before the generalized form). The point: every model starts rough.

### Otto and Day's Iterative Process (10 min)

Walk through the seven steps from Otto and Day (2007), Chapters 2 and 4. Emphasize the cyclic nature---draw the cycle on the board as a loop, not a straight line. Key message: returning to an earlier step is not failure; it is how modeling works.

Map Otto and Day's steps onto the 8-step framework the students already know. Show the correspondence explicitly so students see that they are not learning a new system but deepening the one they have been using since Week 1.

### Diagrams: The Core Activity (20 min)

This is the centerpiece of the lecture. Spend the most time here.

**Life-cycle diagrams (8 min).** Present the discrete-trial teaching example from the chapter. Draw the diagram on the board step by step, asking students to contribute each node and arrow. Then translate the diagram into an equation together. Reference Otto and Day Chapter 2 for additional examples.

**Flow diagrams (12 min).** Present the concurrent schedule example. Draw two pools on the board, then ask: What flows in? What flows out? What connects the pools to each other? Let students propose the arrows and labels. Then apply the recipe: derivative = inflows - outflows. Write the equation on the board.

**Key teaching moment:** After drawing the flow diagram and writing the equation, go back and count: Does every arrow in the diagram correspond to a term in the equation? Does every term in the equation correspond to an arrow in the diagram? If not, something is wrong. This cross-check is the single most useful habit students can develop.

**Have students draw their own.** Ask each student (or pair of students) to pick a behavioral phenomenon they study or are interested in and spend 3-4 minutes drawing a flow diagram for it. Circulate and provide feedback. Common issues: students try to include too many variables (remind them to start simple), students forget to label arrows with rate expressions, students confuse state variables with parameters.

### Dimensional Analysis (5 min)

Work through one example on the board. Write an equation, write the units of every term next to it, and show the check. Then deliberately introduce a unit error and ask students to find it. This should be fast and concrete.

### The Euler Method (10 min)

Demo the Euler method by computing 5-6 steps on the board for a simple model (e.g., $\frac{dB}{dt} = r - dB$). Use round numbers so arithmetic is easy. After computing the steps, sketch the trajectory on the board. Then show what happens with a much larger step size (instability). Then show the exact solution and compare.

Reference: Otto and Day Chapter 4 covers numerical methods in the context of biological models.

### Sensitivity Analysis (5 min)

Show the sensitivity analysis table from the worked example (varying $\alpha$). Point out the nonlinear effect: small changes in $\alpha$ produce large changes in $n_{20}$ because of geometric compounding. Ask students: What does this mean for someone designing a reinforcement-based intervention?

### Wrap-Up (5 min)

Return to the opening message: model building is iterative. The tools they learned today---diagrams, the diagram-to-equation recipe, dimensional analysis, Euler simulation, sensitivity analysis---are the practical skills that make iteration productive rather than aimless.

---

## Common Points of Confusion

- **Students try to model everything at once.** They want to include every variable they can think of. Redirect: start with the simplest model that captures the core phenomenon. You can always add complexity later. A model with 15 variables and 30 parameters is not more scientific than one with 2 variables and 3 parameters---it is just harder to understand and fit.

- **Students confuse the diagram with the model.** The diagram is a tool for building the model, not the model itself. The model is the equation (or set of equations) that the diagram translates into.

- **Students struggle with the direction of arrows in flow diagrams.** Reinforce the convention: arrows point in the direction of flow. An arrow into a pool is an inflow (positive term). An arrow out of a pool is an outflow (negative term). If students get confused, have them think of water flowing between tanks.

- **Students do not check units.** They write equations and move straight to simulation. Build the habit early: after every equation, write the units. It takes 30 seconds and catches real errors.

- **Students are intimidated by the Euler method.** Demystify it: "You are just multiplying the rate of change by the time step and adding it to the current value. That is all." The formula $x_{n+1} = x_n + f(x_n) \cdot \Delta t$ is one line of arithmetic repeated.

---

## Discussion Prompts

1. **From verbal to formal.** Pick a behavioral principle from your training (e.g., "extinction bursts occur when reinforcement is withdrawn," "schedules of reinforcement affect response patterns"). What would a flow diagram of that principle look like? What are the pools, what are the flows, and what determines the rates?

2. **Scope decisions.** When building a model of a token economy, we excluded within-day dynamics, peer interactions, and response topography. For each of these excluded factors, discuss: Under what circumstances would excluding it be a problem? When would it be safe to ignore?

3. **Sensitivity and practice.** If a model of a behavioral intervention is highly sensitive to a parameter that is hard to measure (e.g., the rate of natural reinforcement for problem behavior), what are the practical implications? Does high sensitivity make the model more useful or less useful for practitioners?

4. **Euler accuracy.** The Euler method introduces approximation error. In what behavioral modeling contexts would this error matter, and in what contexts would it be negligible? How would you decide whether your step size is small enough?

---

## In-Class Demonstrations

### Demonstration 1: Drawing a Flow Diagram for Operant Conditioning

**Setup:** Draw two boxes on the board labeled "Response Strength" and "Alternative Behavior." This connects to the in-class demonstration document's operant lever-pressing example.

**Procedure:**
1. Ask students: What increases response strength? (Reinforcement.) Draw an inflow arrow and label it with a reinforcement rate.
2. Ask: What decreases response strength? (Extinction, fatigue, satiation.) Draw outflow arrows.
3. Ask: Does the alternative behavior pool affect the response strength pool? (Yes---behavioral competition.) Draw a bidirectional arrow between the pools.
4. Now write the equation: $\frac{dR}{dt} = \text{reinforcement inflow} - \text{extinction outflow} - \text{competition flow}$.
5. Ask students to propose specific functional forms for each term (e.g., reinforcement inflow proportional to reinforcement rate, extinction outflow proportional to current response strength).

**Connection to demonstration document:** Reference the operant lever-pressing scenario where a rat's lever pressing is maintained by food reinforcement. The flow diagram formalizes the verbal description of contingencies into a mathematical structure.

### Demonstration 2: Building a Recursion Equation as a Class

**Setup:** Present a simple respondent conditioning scenario, connecting to the demonstration document's salivation example: a dog is presented with a tone (CS) followed by food (US). Over trials, the dog begins salivating to the tone.

**Procedure:**
1. Define the state variable: $V_t$ = associative strength of the CS on trial $t$.
2. Ask: What happens on each trial? (The CS is presented, the US occurs, learning happens.)
3. Draw the life-cycle diagram: CS presentation $\to$ US presentation $\to$ Learning update $\to$ next trial.
4. Ask: How does $V$ change? Write the Rescorla-Wagner update: $V_{t+1} = V_t + \alpha \cdot \beta \cdot (\lambda - V_t)$.
5. Compute 5 trials on the board with $V_0 = 0$, $\alpha = 0.3$, $\beta = 0.5$, $\lambda = 1.0$.
6. Plot the trajectory. Ask: What shape is this? (Negatively accelerated approach to asymptote.)

**Key teaching point:** The life-cycle diagram made the equation obvious. Each element in the diagram (CS, US, learning) maps to a part of the equation. The diagram is the scaffold; the equation is the structure.

### Demonstration 3: Euler Method Live Computation

**Setup:** Use the behavioral allocation model $\frac{dB}{dt} = r - d \cdot B$ with $r = 10$, $d = 0.2$, $B_0 = 0$.

**Procedure:**
1. Compute 10 Euler steps with $\Delta t = 1.0$ on the board.
2. Compute 5 Euler steps with $\Delta t = 2.0$ on the board.
3. Show the exact solution: $B(t) = 50(1 - e^{-0.2t})$.
4. Compare all three at $t = 10$. The smaller step size is closer to the exact answer.
5. Ask: What would happen with $\Delta t = 20$? (The method would overshoot and oscillate---instability.)

---

## Transition to Lab

The lab this week is the most hands-on of the course. Students will build and simulate a model from scratch in Python.

**Lab activities:**
- Translate a flow diagram into a system of differential equations.
- Implement the Euler method to simulate the system forward in time.
- Plot the trajectories and compare to analytic solutions (where available).
- Conduct a sensitivity analysis by systematically varying parameters and recording the effect on key outputs.
- Fit a simple model to provided data using least squares.

**Preparation:** Ensure students have access to a Python environment with NumPy and Matplotlib. The lab notebook will provide scaffolded code cells, but the core modeling decisions (which variables, which equations, which parameters to vary) are left to the students.

**Connection to lecture:** The lab extends the board-level demonstrations into computational practice. Students who understood the diagrams and the Euler steps on the board should find the Python implementation straightforward---the code is just the board work automated and repeated for many more steps.

**Tip:** Encourage students to write their equations as comments in the code before implementing them. This bridges the gap between the mathematical notation on the board and the Python syntax in the notebook. For example:

```
# dB/dt = r - d * B
# Euler step: B_next = B + (r - d * B) * dt
```

This small habit prevents transcription errors and makes the code self-documenting.
