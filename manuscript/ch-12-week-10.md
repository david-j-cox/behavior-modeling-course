# Chapter 12: Dynamical Systems Models

> Week 10 of the 13-week sequence.

## Why This Topic Matters

Behavior unfolds in real time. An organism does not simply "have" a response rate the way a rock has a mass; rather, response rates emerge, shift, accelerate, and sometimes collapse across seconds, minutes, and sessions. Whenever we say that behavior is "acquired," "extinguished," or "in transition," we are implicitly invoking a dynamical process — a process whose state changes over time according to some rule. Dynamical systems theory provides the mathematical language for such processes.

Many behavioral phenomena involve **feedback loops**. A response produces a reinforcer, which alters the probability of future responding, which changes the reinforcement rate, and so on. Stability, instability, oscillation, and abrupt transitions are all natural vocabulary in dynamical systems theory, and they map directly onto behavioral phenomena: steady-state performance, behavioral variability, cyclic patterns in adjunctive behavior, and the sudden shifts observed in resurgence or relapse. By formalizing these intuitions, dynamical models let us make quantitative predictions about **temporal trajectories** — not just endpoints — of behavior.

---

## Core Concepts

### State Variables

**State variables** are the quantities that define the system at any moment. In a behavioral model, a state variable might be response rate (responses per minute), cumulative reinforcers earned, or the strength of a stimulus–response association. At any given instant, the values of all state variables together specify the complete "status" of the system.

### Phase Space and Phase Portraits

The collection of all possible values of the state variables defines the **phase space** (or state space). For a single state variable like response rate, the phase space is a line; for two interacting variables, it is a plane. A **phase portrait** is a graphical representation of trajectories through phase space, showing how the system evolves from various initial conditions. Arrows on the portrait indicate the direction and speed of change.

### Equilibrium Points

An **equilibrium point** (or fixed point) is a state where the system, once there, remains there — meaning the rate of change is zero. In behavioral terms, this corresponds to steady-state performance. Equilibria come in three varieties:

- **Stable equilibrium**: the system returns to the point after a small perturbation (like a marble at the bottom of a bowl).
- **Unstable equilibrium**: any small perturbation drives the system away (like a marble balanced on a hilltop).
- **Saddle point**: stable in some directions but unstable in others (possible in systems with two or more state variables).

### Attractors and Limit Cycles

**Attractors** are states or sets of states toward which the system tends over time. A stable equilibrium is the simplest attractor, but dynamical systems can also exhibit **limit cycles** — sustained oscillations that the system settles into regardless of initial conditions. In behavioral terms, a limit cycle might describe a response pattern that waxes and wanes rhythmically within a session.

### Bifurcations

**Bifurcations** are qualitative changes in the system's behavior that occur when a parameter crosses a critical value. For example, a stable equilibrium might suddenly become unstable when a reinforcement rate drops below a threshold, causing a dramatic shift in behavioral allocation. Bifurcation analysis helps identify the parameter values where such transitions occur.

### Linear Stability Analysis

**Linear stability analysis** is a technique for determining the stability of an equilibrium by examining the **eigenvalues** of the **Jacobian matrix** evaluated at that point. For a single-variable system {$$}\frac{dx}{dt} = f(x){/$$}, the Jacobian reduces to the derivative {$$}f'(x^*){/$$} evaluated at the equilibrium {$$}x^*{/$$}. The rule is straightforward:

- If all eigenvalues have **negative real parts**, the equilibrium is **stable**.
- If any eigenvalue has a **positive real part**, the equilibrium is **unstable**.
- Complex eigenvalues indicate **oscillatory** approach to or departure from equilibrium.

### ODEs vs. Difference Equations

Dynamical models may be expressed as **ordinary differential equations (ODEs)** for continuous-time processes or as **difference equations** for discrete-time (trial-by-trial) processes. ODEs use derivatives ({$$}\frac{dx}{dt}{/$$}) to describe instantaneous rates of change, while difference equations use update rules ({$$}x_{n+1} = f(x_n){/$$}) to describe change from one discrete step to the next. Both formulations describe how the state at the next moment depends on the current state.

---

## Main Model Families

### Single ODE Models

The simplest dynamical model tracks a single state variable over continuous time:

{$$}\frac{dx}{dt} = f(x){/$$}

This says: the rate of change of {$$}x{/$$} at any instant is some function of the current value of {$$}x{/$$}.

A classic example is the **logistic growth equation** as a model of response acquisition:

{$$}\frac{dx}{dt} = r \cdot x \cdot \left(1 - \frac{x}{K}\right){/$$}

Here {$$}x{/$$} is response rate, {$$}K{/$$} is the asymptotic (carrying capacity) rate, and {$$}r{/$$} is an intrinsic growth-rate parameter. In plain language: when responding is low relative to the ceiling, the rate accelerates approximately exponentially — each reinforced response begets more responding. As {$$}x{/$$} approaches {$$}K{/$$}, the factor {$$}(1 - x/K){/$$} shrinks toward zero, decelerating growth. The result is the classic S-shaped (sigmoidal) acquisition curve.

### Coupled ODE Systems

When two or more behavioral processes interact, we need coupled equations. A **Lotka–Volterra analog** for competing responses takes the form:

{$$}\frac{dx}{dt} = a \cdot x - b \cdot x \cdot y{/$$}

{$$}\frac{dy}{dt} = c \cdot y - d \cdot x \cdot y{/$$}

Here {$$}x{/$$} and {$$}y{/$$} are rates of two competing responses. The first term in each equation ({$$}a \cdot x{/$$} or {$$}c \cdot y{/$$}) represents baseline growth driven by reinforcement of that response. The interaction terms ({$$}-b \cdot x \cdot y{/$$} and {$$}-d \cdot x \cdot y{/$$}) capture mutual suppression: time and effort spent on one response reduce the other. This structure can model concurrent-schedule performance, where two operanda compete for behavioral allocation, or the dynamics of behavioral momentum theory, where response rate and reinforcement context interact.

### Discrete Dynamical Systems

For trial-by-trial processes, we use difference equations:

{$$}x_{n+1} = f(x_n){/$$}

This says: the state on the next trial is some function of the state on the current trial. For instance, a learning rule might update associative strength after each trial based on prediction error. Discrete maps can exhibit rich dynamics including fixed points, periodic orbits, and even chaos, depending on the form of {$$}f{/$$}. The Rescorla–Wagner model is a prominent example from behavioral science.

---

## Applying the 8-Step Framework

We walk through all eight steps for a dynamical model of operant response acquisition using the logistic ODE.

### Step 1: Get the Physical Picture Clearly in Mind

An organism (say, a rat) is placed in an operant chamber with a lever. Initially, the rat rarely presses the lever. Over the course of a session, lever pressing increases — first slowly, then rapidly, then gradually leveling off at a steady rate. We want a mathematical model that describes how response rate changes over time during this acquisition process.

### Step 2: Define the Physical Processes and Model Boundaries

The process of interest is the change in response rate over time within a single extended session (or across sessions, with time measured cumulatively). The boundaries of the model include: one organism, one operandum (lever), one reinforcement schedule (e.g., continuous reinforcement), and no competing alternatives. We are not modeling the reinforcement mechanism itself, only the resulting trajectory of response rate.

### Step 3: Write Down the Laws and Transport Functions

We adopt the logistic growth equation as our governing law:

{$$}\frac{dx}{dt} = r \cdot x \cdot \left(1 - \frac{x}{K}\right){/$$}

This equation encodes two assumptions: (1) that low-rate responding tends to accelerate (positive feedback from reinforcement), and (2) that there is a ceiling rate {$$}K{/$$} imposed by physical constraints and schedule saturation. The "transport" from low to high responding is driven by the term {$$}r \cdot x{/$$}, and is braked by the factor {$$}(1 - x/K){/$$}.

### Step 4: State the Restrictive Assumptions

- Time is treated as continuous, even though responses are discrete events.
- The environment is stationary: the reinforcement schedule does not change, and there are no disruptions.
- Only a single operant response is modeled; no competing responses are considered.
- The model is deterministic; stochastic variability in responding is ignored.
- Parameters {$$}r{/$$} and {$$}K{/$$} are constants (they do not change with time or experience).
- Motivational state is constant (no satiation or deprivation changes within the session).

### Step 5: Perform the Balance

In words: the rate of change of responding equals the current response rate multiplied by a growth rate, reduced by a factor that approaches zero as the response rate approaches its ceiling.

{$$}\frac{dx}{dt} = r \cdot x \cdot \left(1 - \frac{x}{K}\right){/$$}

This is the balance equation, expressing the "input" to behavior change (reinforcement-driven growth, {$$}r \cdot x{/$$}) against the "constraint" (the ceiling factor, {$$}1 - x/K{/$$}).

### Step 6: Check Units

Let {$$}x{/$$} be in responses per minute (resp/min). Then {$$}dx/dt{/$$} is in resp/min{$$}^2{/$$}. {$$}K{/$$} is in resp/min, so {$$}x/K{/$$} is dimensionless, and {$$}(1 - x/K){/$$} is dimensionless. Therefore {$$}r{/$$} must have units of min{$$}^{-1}{/$$} so that {$$}r \cdot x \cdot (1 - x/K){/$$} yields resp/min{$$}^2{/$$}. Units check.

### Step 7: Initial and Boundary Conditions

The initial condition is {$$}x(0) = x_0{/$$}, where {$$}x_0{/$$} is the response rate at the beginning of the observation period. We also have the implicit boundaries that {$$}x \geq 0{/$$} (negative response rates are not meaningful) and {$$}x \leq K{/$$} (the ceiling).

### Step 8: Verify, Validate, and Solve

The logistic ODE has an exact **analytical solution**:

{$$}x(t) = \frac{K}{1 + \left(\frac{K - x_0}{x_0}\right) e^{-r t}}{/$$}

This closed-form expression gives the response rate at any time {$$}t{/$$} given the parameters and initial condition.

**Verification**: At {$$}t = 0{/$$}, {$$}x(0) = K / (1 + (K - x_0)/x_0) = K / (K/x_0) = x_0{/$$}. Correct. As {$$}t \to \infty{/$$}, the exponential vanishes, giving {$$}x = K{/$$}. Correct. Taking the derivative and substituting back confirms the ODE is satisfied.

**Validation** would involve fitting this function to empirical acquisition data and assessing goodness of fit.

---

## Worked Example

We model acquisition of lever pressing in a rat with the following parameter values:

- {$$}K = 60{/$$} responses per minute (asymptotic rate)
- {$$}r = 0.15{/$$} per minute (growth-rate parameter)
- {$$}x_0 = 2{/$$} responses per minute (initial rate from occasional exploratory presses)

The solution becomes:

{$$}x(t) = \frac{60}{1 + \frac{58}{2} \cdot e^{-0.15t}} = \frac{60}{1 + 29 \cdot e^{-0.15t}}{/$$}

### Equilibrium Analysis

Setting {$$}dx/dt = 0{/$$} gives {$$}r \cdot x \cdot (1 - x/K) = 0{/$$}, which yields two equilibria: {$$}x = 0{/$$} and {$$}x = K = 60{/$$}.

To assess stability, we compute {$$}f'(x) = r(1 - 2x/K){/$$}:

- At {$$}x = 0{/$$}: {$$}f'(0) = 0.15 > 0{/$$} (positive), so **{$$}x = 0{/$$} is unstable**. Any small amount of responding will grow.
- At {$$}x = 60{/$$}: {$$}f'(60) = 0.15(1 - 2) = -0.15 < 0{/$$} (negative), so **{$$}x = 60{/$$} is stable**. The system returns here after perturbation.

### Phase Portrait Description

On a horizontal axis labeled {$$}x{/$$} (response rate, 0 to 70), the function {$$}f(x) = 0.15 \cdot x \cdot (1 - x/60){/$$} forms an inverted parabola passing through {$$}x = 0{/$$} and {$$}x = 60{/$$}, with a maximum at {$$}x = 30{/$$}. For {$$}0 < x < 60{/$$}, {$$}f(x) > 0{/$$}, so {$$}x{/$$} increases (arrows point right on the number line). For {$$}x > 60{/$$}, {$$}f(x) < 0{/$$}, so {$$}x{/$$} decreases (arrows point left). This confirms that {$$}x = 0{/$$} is unstable (arrows diverge) and {$$}x = 60{/$$} is stable (arrows converge).

### Computing {$$}x(t){/$$} at Specific Times

**At {$$}t = 10{/$$} minutes:**

{$$}x(10) = \frac{60}{1 + 29 \cdot e^{-1.5}} = \frac{60}{1 + 29 \times 0.2231} = \frac{60}{1 + 6.470} = \frac{60}{7.470} \approx 8.03 \text{ resp/min}{/$$}

**At {$$}t = 20{/$$} minutes:**

{$$}x(20) = \frac{60}{1 + 29 \cdot e^{-3.0}} = \frac{60}{1 + 29 \times 0.0498} = \frac{60}{1 + 1.443} = \frac{60}{2.443} \approx 24.56 \text{ resp/min}{/$$}

**At {$$}t = 30{/$$} minutes:**

{$$}x(30) = \frac{60}{1 + 29 \cdot e^{-4.5}} = \frac{60}{1 + 29 \times 0.0111} = \frac{60}{1 + 0.322} = \frac{60}{1.322} \approx 45.39 \text{ resp/min}{/$$}

### Trajectory Summary

The trajectory shows the classic **sigmoidal shape**: slow initial growth (2 to about 8 resp/min in the first 10 minutes), rapid acceleration through the middle range (8 to 45 resp/min between minutes 10 and 30), and deceleration as the ceiling is approached. By about 45 minutes, the rate is within a few responses per minute of the asymptote at 60.

---

## Connecting Backward: Static Models as Dynamical Snapshots

Many of the models from earlier weeks in this course describe **equilibrium states** — the endpoints that a dynamical process settles into. Dynamical systems theory reveals these static descriptions as snapshots of underlying temporal processes.

**The matching law (Week 2)** describes the equilibrium allocation of behavior across concurrent schedules. From a dynamical perspective, matching is the stable attractor of a system where response allocation adjusts over time in response to relative reinforcement rates. The generalized matching law tells us *where* the system ends up; a dynamical model tells us *how it gets there* and how quickly it recovers from perturbation.

**Delay discounting (Week 2)** can be viewed as a dynamic process of value change over time. As the delay to a reinforcer decreases (the moment of choice approaches), the subjective value of the delayed option rises along the discount function. This temporal unfolding of value is inherently dynamical and can produce preference reversals when two discount curves cross.

**The Rescorla–Wagner model (Week 4)** is already a discrete dynamical system. The update rule {$$}\Delta V = \alpha \beta (\lambda - V){/$$} is a first-order difference equation. The associative strength {$$}V{/$$} is the state variable, and the prediction error {$$}(\lambda - V){/$$} drives the system toward the equilibrium {$$}V = \lambda{/$$}. Everything we learn this week about stability and convergence applies directly to that learning rule.

**Demand curves (Week 3)** describe equilibrium consumption at each price point. The exponential demand model tells us how much behavior is allocated at steady state for a given unit price; it does not describe the transient adjustments an organism makes when price changes. A dynamical model of demand would describe the trajectory from old equilibrium to new.

---

## Connecting Forward: Dynamics in Computation and ML

The dynamical systems perspective extends naturally into the computational and data-driven approaches covered in coming weeks.

**Computational models (Week 11)** implement dynamical rules as step-by-step algorithms. A simulation of the logistic acquisition model, for example, uses Euler's method or a Runge–Kutta solver to numerically integrate the ODE. Every computational model that updates state variables on each time step is, at its core, implementing a dynamical system.

**Q-learning** is a dynamical system that updates a table of action values. The Q-value update rule {$$}Q(s,a) \leftarrow Q(s,a) + \alpha [r + \gamma \max_{a'} Q(s',a') - Q(s,a)]{/$$} is a difference equation in which Q-values are state variables converging (under appropriate conditions) toward a fixed-point equilibrium. The learning rate {$$}\alpha{/$$} controls the speed of convergence, just as {$$}r{/$$} does in our logistic model.

**Neural network training** is gradient descent on a loss landscape — a high-dimensional dynamical system. The weights are state variables, the loss function defines the landscape, and the learning rate governs step size. Concepts like attractors (local minima), saddle points, and bifurcations (sharp transitions in learned representations) carry over directly from the theory developed this week.

**Machine learning models (Week 12)** can learn dynamical relationships from data. Recurrent neural networks and state-space models are explicitly designed to capture temporal dependencies. When we fit such models to behavioral time series, we are using data-driven methods to discover the dynamical rules governing behavior — closing the loop between theory-driven and data-driven modeling.

---

## Plain-Language Interpretation

### What the Logistic Equation Says in Words

The logistic equation, {$$}\frac{dx}{dt} = r \cdot x \cdot (1 - x/K){/$$}, says: the rate at which responding speeds up depends on two things. First, how much responding is already happening (the {$$}x{/$$} term) — more responding generates more reinforcement, which generates more responding, a positive feedback loop. Second, how much room is left to grow (the {$$}1 - x/K{/$$} term) — as the organism approaches its maximum rate, further acceleration becomes harder. Perhaps the schedule delivers reinforcers less efficiently at high rates, or physical fatigue imposes limits, or the session has finite reinforcers available.

### What Equilibrium Means Behaviorally

An equilibrium is a response rate at which there is no tendency to change. The stable equilibrium at {$$}x = K{/$$} is the steady-state rate: if the organism is momentarily perturbed — a brief distraction lowers its rate, or a burst of extra responses raises it — the system will drift back to {$$}K{/$$}. This is the dynamical-systems formalization of what behavior analysts call "steady state."

### What Stability Means

Stability means that the system **returns to its equilibrium after a perturbation**. A stable equilibrium acts like a valley: push the system away, and it rolls back. In behavioral terms, a stable steady state is one that is robust to minor disruptions. The rat may pause briefly to groom, but lever pressing returns to its characteristic rate. The eigenvalue (or derivative) being negative at the equilibrium is the mathematical guarantee of this return.

### What Instability of {$$}x = 0{/$$} Means

The instability of {$$}x = 0{/$$} means that even a tiny amount of responding ({$$}x_0 > 0{/$$}) will grow rather than collapse back to zero. Behaviorally, this captures the observation that once an organism emits even a few reinforced responses, acquisition tends to proceed. Zero responding is a precarious state — any perturbation away from it (an accidental lever press, a shaped approximation) initiates the acquisition process.

---

## Assumptions and Limitations

The logistic model is a useful starting point, but its assumptions are strong:

- **Continuous approximation**: Real acquisition consists of discrete responses at variable intervals. The continuous ODE is an approximation that works best when response rates are moderate to high.
- **No competing behaviors**: The model tracks a single response. In reality, organisms always have alternative behaviors available.
- **No satiation**: Motivational state is assumed constant. In practice, within-session satiation can produce systematic decreases in responding.
- **Fixed ceiling**: The asymptote {$$}K{/$$} is assumed constant, but in practice it may shift with extended training or changes in schedule parameters.
- **Deterministic**: The model omits the substantial trial-to-trial variability evident in individual-organism data.
- **Phenomenological**: The logistic equation describes the *shape* of acquisition without deriving it from reinforcement principles. A more mechanistic model might derive the growth rate from the specific schedule contingency, reinforcer magnitude, and the organism's learning rule. The logistic equation is best understood as a descriptive first step.

Dynamical systems theory provides the tools for richer, more mechanistic models, but every additional complexity must be justified by what it adds in explanatory or predictive power.

---

## Connection to Empirical Behavior Science

Dynamical systems models have been applied to several domains in behavior science:

- **Acquisition curves**: Across many species and schedule types, acquisition curves often show sigmoidal shapes consistent with logistic or similar growth models. The logistic provides a two-parameter ({$$}r{/$$}, {$$}K{/$$}) summary of the acquisition trajectory.
- **Behavioral momentum theory**: This framework has been formalized using coupled differential equations relating response rate to reinforcement context. Disruption is modeled as a perturbation, and resistance to change is linked to stability properties of the equilibrium. Higher reinforcement rates in a context produce a "deeper" attractor basin, meaning greater resistance to disruption.
- **Resurgence and relapse**: These phenomena involve transitions between behavioral states that can be modeled as movements through phase space. When a previously reinforced response is placed on extinction while an alternative is reinforced, and then the alternative is also extinguished, the return to the original response can be described as the system moving toward a new attractor after a bifurcation in the reinforcement landscape.
- **Choice dynamics**: Dynamical models of concurrent-schedule performance describe how response allocation evolves over time toward a stable matching equilibrium. The Lotka–Volterra-style competition model captures mutual suppression between alternatives, and the equilibrium of such a system can correspond to matching or undermatching depending on parameter values.

---

## Exercises for Reflection

1. The logistic model treats responding as continuous, but actual responses are discrete events separated by inter-response times. Under what conditions is the continuous approximation reasonable, and when might a discrete-time model be preferable? What features of the data would help you decide?

2. The phase-portrait analysis showed that {$$}x = 0{/$$} is an unstable equilibrium. But in practice, many organisms placed in a new operant chamber with no shaping never begin pressing the lever. How might you modify the model to accommodate a "threshold" below which behavior does not spontaneously grow?

3. Behavioral momentum theory proposes that resistance to disruption is a function of the reinforcement context. How would you formalize "disruption" in a dynamical systems model? Would it be a change in a parameter, a perturbation to a state variable, or something else?

4. Consider a behavior that oscillates rather than reaching a stable steady state — for example, adjunctive polydipsia that waxes and wanes within a session. What kind of dynamical structure (attractor type) might produce such oscillations, and what would the phase portrait look like?

---

## Key Readings

**Myerson and Miezin (1980)** presented a kinetic model of choice that applies systems analysis to concurrent schedule performance. Starting from the matching law, they derived coupled differential equations (Equations 4a and 4b) describing how preference between two alternatives changes over time as a function of obtained reinforcement rates. The key insight is that reinforcing one response simultaneously increases preference for that response and decreases preference for the alternative---a dynamical feedback process. For concurrent VI-VI schedules, the model predicts exponential acquisition of preference (Equation 7), and for concurrent VR-VR schedules, the solution is a logistic function (Equation 8)---connecting directly to the logistic ODE covered in this week's main content. The paper also develops a molecular-level "switching model" (Equations 13--14) formulated in terms of transition probabilities between alternatives, and shows that the molar predictions (matching at equilibrium, sigmoidal acquisition) can be derived from this more fundamental process. The constant sum of transition probabilities and the inverted-U relationship between switching rate and preference strength are unique, testable predictions. This paper is an exemplary application of dynamical systems thinking to a core behavioral phenomenon and demonstrates how the matching law emerges as the equilibrium of a dynamical process.

**Myerson and Hale (1988)** extended this work by directly comparing the kinetic model's predictions against melioration theory (Herrnstein & Vaughan, 1980) for choice in transition. Both models predict the same steady-state outcomes (matching), but they diverge in their predictions about the *path* behavior takes to get there---precisely the kind of question dynamical systems models are designed to answer.

---

## Reading Guide

Complete these questions while reading the assigned articles. The questions are designed to help you identify the main ideas and connect them to the course material. Write brief answers (2–4 sentences each unless otherwise noted).

### Strogatz (2015), Chapter 2 — Flows on the Line

This chapter introduces the mathematics of one-dimensional ordinary differential equations (ODEs). It is the technical foundation for everything else this week.

1. Strogatz defines a "flow on the line" as {$$}\dot{x} = f(x){/$$}. In your own words, what does {$$}\dot{x}{/$$} represent, and what does this equation tell you about how a system evolves over time?

2. What is a **fixed point**? How do you find fixed points given {$$}\dot{x} = f(x){/$$}? Why does Strogatz call them "fixed"?

3. Strogatz distinguishes between **stable** and **unstable** fixed points. Explain the difference using his graphical method (plotting {$$}f(x){/$$} and reading off the direction of arrows). What determines stability from the graph alone?

4. Explain the **linear stability analysis** criterion: if {$$}f'(x^*) < 0{/$$}, the fixed point {$$}x^*{/$$} is stable; if {$$}f'(x^*) > 0{/$$}, it is unstable. Why does the sign of the derivative at the fixed point determine stability? Connect this to the graphical intuition from question 3.

5. Strogatz introduces the concept of a **bifurcation** — a qualitative change in the system's behavior as a parameter varies. Give one example from the chapter and describe what changes about the fixed points at the bifurcation value.

6. Consider the logistic equation from this week's chapter: {$$}\dot{x} = r \cdot x \cdot (1 - x/K){/$$}. Using Strogatz's graphical method, sketch {$$}f(x){/$$} vs. {$$}x{/$$} and identify the fixed points. Which is stable? Which is unstable? How does this match the analysis in the course chapter?

### Marr (1992) — Behavior Dynamics: One Perspective

This paper argues that dynamical systems theory provides a natural framework for understanding behavioral processes. It is written by a behavior analyst for a behavior-analytic audience.

1. Marr argues that behavior analysis has historically focused on **steady-state** descriptions. What does he mean by this, and why does he see it as a limitation? What kinds of behavioral questions does a steady-state focus leave unanswered?

2. What does Marr mean by "**state space**" in a behavioral context? Give an example of what the state variables might be for an operant conditioning preparation, and describe what a trajectory through that state space would represent.

3. Marr discusses **attractors** as states toward which a behavioral system tends. How does this concept relate to what behavior analysts call "steady-state performance"? Is a steady state the same thing as an attractor, or is the relationship more nuanced?

4. Marr raises the idea that some behavioral phenomena may involve **bifurcations** — sudden qualitative changes in the pattern of behavior when a parameter (such as reinforcement rate) crosses a threshold. Can you think of a behavioral phenomenon from earlier in the course (e.g., from matching, demand, or behavioral momentum) that might be described as a bifurcation? Explain your reasoning.

5. What is Marr's central argument about why behavior analysts should adopt dynamical systems thinking? Do you find it persuasive? What would a skeptic say?

6. How does Marr's perspective connect to the **8-step modeling framework** used in this course? Specifically, which steps of the framework does a dynamical systems approach change or enrich compared to the static models from Weeks 2–5?

### Nevin & Grace (2000) — Behavioral Momentum and the Law of Effect

This paper formalizes behavioral momentum theory and connects it to the dynamical systems concepts from the other two readings. Focus on the target article (pp. 73–90), not the commentaries.

1. Nevin and Grace distinguish between **response rate** (controlled by the response–reinforcer contingency) and **resistance to change** (controlled by the stimulus–reinforcer relation). In dynamical systems terms from Strogatz, which of these corresponds to the *location* of an equilibrium, and which corresponds to its *stability*? Explain.

2. The authors model disruption as a force that pushes the system away from its current state. Using the dynamical systems vocabulary from this week, what is the technical term for this kind of event? (Hint: think about what happens when you push a marble out of a bowl.)

3. Nevin and Grace argue that richer reinforcement contexts produce greater resistance to change. Translate this claim into dynamical systems language: what does "richer reinforcement context" correspond to in terms of the attractor landscape, and what does "greater resistance to change" mean about the shape of the basin of attraction?

4. The paper presents data from multiple-schedule experiments where behavior in one component is more resistant to disruption than behavior in another component. How does this empirical pattern map onto the concept of **stability** as defined by Strogatz? What would the phase portrait look like for two components with different reinforcement rates?

5. Nevin and Grace connect behavioral momentum to Newtonian mechanics through the metaphor of mass and velocity. Is this metaphor helpful or misleading? Does the dynamical systems framework from Marr (1992) and Strogatz (2015) offer a more precise way to formalize the same ideas? Explain.

6. Consider a clinical scenario: a child's problem behavior is maintained by rich reinforcement in one context (e.g., attention from caregivers at home) but receives leaner reinforcement in another context (e.g., a structured classroom). Based on Nevin and Grace's framework and the dynamical systems concepts from this week, predict how resistant the problem behavior will be to a treatment intervention (disruption) in each context. What does this imply for treatment planning?

### Synthesis Questions

After completing all three readings, answer the following:

1. All three readings use different language to describe the same core idea: that behavioral systems evolve over time toward characteristic states, and the stability of those states depends on the reinforcement environment. In one paragraph, state this core idea in your own words, drawing on terminology from all three readings.

2. The static models from earlier in the course (matching law, discounting, demand) describe **where** behavior ends up. The dynamical models from this week describe **how** it gets there. Give a concrete example of a behavioral question that a static model cannot answer but a dynamical model can.

3. Identify one limitation shared by all three readings. What aspect of behavioral dynamics do they leave unaddressed? (Hint: think about what kinds of models are covered in Week 11.)

---

## References

Herrnstein, R. J., & Vaughan, W., Jr. (1980). Melioration and behavioral allocation. In J. E. R. Staddon (Ed.), *Limits to action: The allocation of individual behavior* (pp. 143--176). Academic Press.

Marr, M. J. (1992). Behavior dynamics: One perspective. *Journal of the Experimental Analysis of Behavior, 57*(3), 249--266. https://doi.org/10.1901/jeab.1992.57-249

Myerson, J., & Hale, S. (1988). Choice in transition: A comparison of melioration and the kinetic model. *Journal of the Experimental Analysis of Behavior, 49*(2), 291--302. https://doi.org/10.1901/jeab.1988.49-291

Myerson, J., & Miezin, F. M. (1980). The kinetics of choice: An operant systems analysis. *Psychological Review, 87*(2), 160--174. https://doi.org/10.1037/0033-295X.87.2.160

Nevin, J. A., & Grace, R. C. (2000). Behavioral momentum and the law of effect. *Behavioral and Brain Sciences, 23*(1), 73--90. https://doi.org/10.1017/S0140525X00002405

Strogatz, S. H. (2015). *Nonlinear dynamics and chaos: With applications to physics, biology, chemistry, and engineering* (2nd ed.). Westview Press.

---

## Key Takeaways

- **Dynamical systems models** describe how behavioral state variables change over time, using ODEs (continuous time) or difference equations (discrete time).
- **State variables** (e.g., response rate) move through a **phase space** according to governing equations; **phase portraits** visualize these trajectories.
- **Equilibrium points** correspond to steady-state behavior; their **stability** (determined by eigenvalues or derivatives) dictates whether the organism returns to a given performance level after perturbation.
- The **logistic growth model**, {$$}\frac{dx}{dt} = r \cdot x \cdot (1 - x/K){/$$}, captures the sigmoidal shape of acquisition with two equilibria: an unstable zero and a stable asymptote at {$$}K{/$$}.
- The **analytical solution**, {$$}x(t) = K / (1 + ((K - x_0)/x_0) \cdot e^{-rt}){/$$}, provides quantitative predictions about response rates at any time point.
- **Coupled ODE systems** extend the framework to interacting behavioral processes such as competing responses and reinforcement context.
- **Bifurcation analysis** identifies parameter thresholds where qualitative changes in behavior occur — such as a stable equilibrium becoming unstable when reinforcement conditions change.
- Static models from earlier weeks (matching, discounting, demand, Rescorla–Wagner) describe **equilibrium snapshots** of underlying dynamical processes.
- The **8-step framework** guides model construction: picture the phenomenon, define boundaries, write governing equations, state assumptions, perform the balance, check units, set initial conditions, and verify/validate/solve.
- Dynamical systems models are most valuable when the **trajectory of behavior over time** — not just its endpoint — is of scientific interest.

## Recommended Readings

**Required:**

- Myerson, J. & Miezin, F. M. (1980). The kinetics of choice: An operant systems analysis. *Psychological Review*, *87*, 160-174.
- Myerson, J. & Hale, S. (1988). Choice in transition: A comparison of melioration and the kinetic model. *Journal of the Experimental Analysis of Behavior*, *49*, 291-302.


## Lab: Dynamical Systems Models

A> **Run this lab.** Notebooks and data files are available at:
A> [https://www.behavioral-data-science.org/book/labs/week-10](https://www.behavioral-data-science.org/book/labs/week-10)
A>
A> The companion materials include starter notebooks, the dataset(s) referenced below, and instructor-prepared solutions.

## Dynamical Systems Models Lab

Many behavioral processes unfold over time in ways that are well described by differential equations. The logistic ordinary differential equation (ODE), dx/dt = r * x * (1 - x/K), provides a simple but powerful model of acquisition: responding starts slowly, accelerates as the behavior contacts reinforcement, and then decelerates as it approaches a carrying-capacity asymptote.

In this lab you will implement the logistic ODE numerically using Euler's method, explore how the parameters r (growth rate) and K (carrying capacity) shape the acquisition curve, find the equilibrium points analytically, perform a linear stability analysis, and construct a phase portrait. You will then fit the analytical solution of the logistic equation to empirical acquisition data using nonlinear least squares, comparing the fitted curve to the raw data.

### Assignment

1. Implement Euler's method for the logistic ODE and plot the resulting acquisition curves.
2. Vary the initial condition x0 and the parameters r and K to see how they affect the shape and speed of acquisition.
3. Find the equilibrium points of the logistic ODE analytically.
4. Perform a linear stability analysis by evaluating f'(x*) at each equilibrium.
5. Create a phase portrait (dx/dt vs. x) with directional arrows.
6. Load the empirical acquisition dataset and fit the logistic analytical solution using `scipy.optimize.curve_fit`.
7. Plot the fitted curve alongside the data and report the estimated parameters.
8. Discuss the biological and behavioral interpretation of r and K.
