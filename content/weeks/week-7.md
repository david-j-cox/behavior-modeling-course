---
slug: "week-7"
number: 7
published: false
title: "How to Construct a Model"
subtitle: "From question to equation: The practical craft of model building"
description: "Hands-on model building, sensitivity analysis, parameter estimation, dimensional analysis."
keyModels:
  - "Life-Cycle Diagrams"
  - "Flow Diagrams"
  - "Sensitivity Analysis"
keyEquations:
  - "dx/dt = (inputs) - (outputs)"
  - "Euler: x_{n+1} = x_n + f(x_n) * dt"
---

## Why This Topic Matters
Up to this point, we have focused on understanding, analyzing, and comparing existing models. You have encountered the matching law, discounting functions, demand curves, and associative models. You have learned to identify parameters, check dimensional consistency, and evaluate goodness of fit. All of that work took place on models someone else had already built.

This week you get to build the model yourself from the ground up. 

The shift from user to builder is the hardest transition in a modeling course but the most important one. Analyzing a finished model is like reading a well-edited essay. You can appreciate its structure, evaluate its arguments, and spot its weaknesses. Building a model is like writing that essay from a blank page. Staring at a blinkingg cursor on a blank page is where most people get stuck.

The biggest barrier to model building is rarely the mathematics. Rarther, it is the assumption that the model must be correct and complete from the start. It does not. Model building is an iterative process and rarely ends. You start with the simplest representation you can write down, check it against what you know, find where it fails, and revise. The first version of every successful model in science was wrong in important ways. The value of the first version is that it gave the modeler something to criticize and improve.

Otto and Day (2007) formalized this iterative process into a set of explicit steps. Their approach maps closely onto the 8-step framework we have used throughout the course thus far and provides a task anlysis for going from a behavioral question to a working mathematical model. This week teaches that sequence of steps.

The practical skills you develop here are the core skills of quantitative behavior science. These include drawing diagrams, translating diagrams into equations, checking units, running sensitivity analyses, and estimating parameters. They are the tools you will use in every subsequent week of the course, and they are the tools you will need if you ever want to build a model of a behavioral phenomenon in your own research.

There is also a theoretical benefit to model building that goes beyond the model itself. The act of mathematically formalizing a behavioral phenomenon forces you to confront what you actually know and what you assume. Can you specify the functional relationship between reinforcement rate and response rate? Can you say what happens to behavior when two contingencies are in effect simultaneously? If not, the model-building process reveals the gap and that gap is a research question waiting to be asked. Many of the most productive lines of research in quantitative behavior analysis began with someone trying to build a model and discovering that the necessary data did not yet exist or there were many assumptions that needed to be tested.

---
## Core Concepts
### The Iterative Modeling Process
Otto and Day (2007) describe model construction as a cycle with seven steps:

1. **Formulate the question.** What do you want the model to do? Predict behavior under new conditions? Explain a known regularity? Identify which processes are necessary and sufficient to produce a phenomenon?

2. **Determine the basic ingredients.** What are the essential variables and parameters? What can be measured? What must be estimated?

3. **Qualitative description.** Draw a diagram (i.e., a picture) of how the parts of the system interact. This is the most underappreciated step. A good diagram does most of the intellectual work and the math follows from it.

4. **Quantitative description.** Translate the diagram into equations. Each arrow in the diagram becomes a term in an equation. Each box or node becomes a variable with its own equation.

5. **Analyze the equations.** Find equilibria, check stability, solve for special cases. Determine what the model predicts under different parameter values.

6. **Checks and balances.** Verify dimensional consistency. Test limiting cases. Compare predictions to known results. If the model fails these checks, return to an earlier step and revise.

7. **Relate back to the original question.** Does the model answer the question you started with? If not, what is missing? What new questions does the model raise?

These steps are cyclic, not conducted sequentially and a single time. You will often return to Step 1 after reaching Step 6 because the process of building the model clarifies what the real question is. You will revise your diagram after analyzing the equations because the analysis reveals dynamics you did not anticipate. This cycling is not a sign of failure; iteration is how modeling works.

The 8-step framework used in this course maps onto Otto and Day's cycle with additional emphasis on stating assumptions explicitly (Step 4 of our framework) and specifying starting values and constraints (Step 7 of our framework). The two systems are complementary, not competing.

An example: Consider a graduate student who wants to model how a child's tantrums change during an extinction procedure. On the first pass, she draws a simple diagram with one variable (tantrum rate) decreasing over time due to extinction. She writes an exponential decay equation, simulates it, and compares it to data. The model captures the overall downward trend but misses the extinction burst. So she returns to Step 3 and adds a process for the extinction burst (perhaps a temporary increase in response variability when reinforcement is first withheld). She redraws the diagram, adds a term to the equation, simulates again. Now the model captures the burst but the timing is off. She adjusts parameters (Step 7), checks units again (Step 6), and iterates. After three or four cycles, she has a model that captures the key features of the data and makes testable predictions about how the burst magnitude depends on the reinforcement history. Each cycle brought the model closer to being useful. Not perfect, but useful. And, once she has a useful model, she can then start comparing how well it generalizes to new data from new experiments and clinical settings. 

---
### Life-Cycle Diagrams
A life-cycle diagram is used for discrete-time processes (i.e., systems where events occur in identifiable, sequential stages within each time step). The diagram shows the stages as nodes (circles or boxes) and the transitions between stages as arrows. Each arrow carries a label indicating the rate, probability, or rule governing that transition.

Life-cycle diagrams are natural for any process that can be described as "first this happens, then this happens, then this happens, and then the cycle repeats." 

**Behavior Analytic Example: Discrete-Trial Teaching.**
Consider a discrete-trial teaching session for a child receiging ABA services. Each trial follows a fixed sequence:
1. Antecedent (A): The therapist presents a discriminative stimulus (e.g., holds up a card and says "What is this?").
2. Response (R): The child either emits the target response (correct) or does not (incorrect/no response).
3. Consequence (C): If correct, the therapist delivers reinforcement (praise, token). If incorrect, the therapist provides a correction.
4. Inter-trial interval (ITI): A brief pause before the next trial begins.

The life-cycle diagram for one trial looks like this:
$$A \xrightarrow{p} R_{\text{correct}} \xrightarrow{1} C_{\text{reinf}} \xrightarrow{1} \text{ITI}$$

$$A \xrightarrow{1-p} R_{\text{incorrect}} \xrightarrow{1} C_{\text{corr}} \xrightarrow{1} \text{ITI}$$

where $p$ is the probability of a correct response on a given trial. After the ITI, the cycle returns to A. Over trials, $p$ may change as a function of the reinforcement and correction history.

The key feature of a life-cycle diagram is that time advances in discrete steps (trials), and within each step the system passes through a fixed sequence of stages. The diagram makes the structure of each time step explicit.

**Building equations from life-cycle diagrams.** The diagram tells you what to track and how it changes. If $p_t$ is the probability of a correct response on trial $t$, you need a rule for how $p$ changes from trial to trial. A simple learning rule might be:

$$p_{t+1} = p_t + \alpha \cdot (1 - p_t) \cdot \mathbb{1}[\text{correct and reinforced}] - \beta \cdot p_t \cdot \mathbb{1}[\text{incorrect}]$$

where $\alpha$ governs the effect of reinforcement on increasing correct responding, $\beta$ governs the effect of errors on decreasing correct responding, and $\mathbb{1}[\cdot]$ is an indicator function that equals 1 when the condition is met and 0 otherwise.

Notice how the diagram helped us build the equation. We did not have to invent the equation from nothing. The diagram told us there are two possible outcomes on each trial (correct, incorrect), each with its own consequence, and the equation has one term for each outcome. If we later added a third outcome to the diagram (e.g., "prompted correct"), we would add a third term to the equation. The diagram is the blueprint; the equation is the building.

**When to use life-cycle diagrams.** Life-cycle diagrams are appropriate whenever:
- The process unfolds in discrete, identifiable steps (trials, sessions, episodes).
- The order of events within a step matters.
- The transition from one step to the next depends on what happened during the current step.

Examples from behavior science include: discrete-trial instruction, session-by-session changes in performance, trial-based functional analyses, and any procedure with a clear cycle of antecedent-behavior-consequence.

---
### Flow Diagrams
A flow diagram is used for continuous-time processes. That is, systems where quantities change smoothly over time rather than jumping from stage to stage. The diagram shows pools (also called stocks or state variables) as boxes and flows between pools as arrows. Each arrow is labeled with a rate expression that specifies how fast material moves along that pathway.

Flow diagrams are natural for any process that can be described as "this pool fills up while that pool drains, and the rates depend on the current levels."

**Behavior Analytic Example: Concurrent Schedule Behavior Allocation.**
Consider an organism choosing between two response alternatives (left and right) on a concurrent VI VI schedule. We can think of the organism's behavioral tendency toward each alternative as a "pool" of behavior allocation:
- $B_L$ = allocation to the left alternative
- $B_R$ = allocation to the right alternative

The flow diagram has two pools. Reinforcement on the left key increases $B_L$ (an inflow). Time without reinforcement on the left key decreases $B_L$ (an outflow due to extinction or decay). The same logic applies to $B_R$. Additionally, there may be direct competition: increases in $B_L$ may come at the expense of $B_R$, representing a flow from one pool to the other.

The flow diagram looks conceptually like:
$$\text{Reinforcement}_L \longrightarrow \boxed{B_L} \longrightarrow \text{Decay}_L$$

$$\text{Reinforcement}_R \longrightarrow \boxed{B_R} \longrightarrow \text{Decay}_R$$

$$\boxed{B_L} \longleftrightarrow \boxed{B_R} \quad (\text{competition/reallocation})$$

Each arrow represents a rate of flow. The reinforcement arrows have rates proportional to the obtained reinforcement rate on each alternative. The decay arrows have rates proportional to the current level of allocation (first-order decay). The competition arrows represent reallocation of behavior between alternatives.

The recipe to translate a flow diagram to a differential equation is:
$$\frac{dx}{dt} = \sum(\text{rates entering } x) - \sum(\text{rates exiting } x)$$

This is the fundamental principle. For the left alternative:
$$\frac{dB_L}{dt} = r_L \cdot f(B_L) - d \cdot B_L - c \cdot (B_L - B_R)$$

where $r_L$ is the reinforcement rate on the left, $f(B_L)$ is some function relating current allocation to the effectiveness of reinforcement, $d$ is the decay rate, and $c$ is a competition parameter. An analogous equation holds for $B_R$.

The details of $f$ and the specific form of the competition term depend on the theory you are building. The point is that the flow diagram tells you the structure of the equation. Each arrow contributes a term, inflows are positive, outflows are negative.

**When to use flow diagrams.** Flow diagrams are appropriate whenever:
- The process involves quantities that change continuously (or approximately continuously) over time.
- Multiple interacting variables influence each other simultaneously.
- You are interested in rates of change, equilibria, and dynamic trajectories.

Examples from behavior science might include behavior allocation across concurrent schedules, the dynamics of behavioral momentum during disruption, cumulative reinforcement histories, and real-time models of response-by-response choice. Flow diagrams are especially powerful for systems with feedback loops where the output of one process feeds back to influence another (e.g., reinforcement rate depending on response rate, which in turn depends on reinforcement rate).

**Comparing life-cycle and flow diagrams.** The two diagram types are not competing alternatives. Each is a tool best suited to different situations. Sometimes a phenomenon can be modeled either way. Acquisition of a new response, for example, can be modeled as a discrete-time life-cycle process (trial by trial) or as a continuous-time flow process (smooth change in response probability). The choice depends on whether the discrete or continuous representation better matches the data and the question. In practice, many behavior-science phenomena have elements of both. Trials are discrete, but sessions are closely spaced enough that session-to-session change looks continuous. The modeler must choose a level of description, and the diagram type follows from that choice.

---
### From Diagram to Equation
The most important practical skill in model building is the mechanical translation from diagram to equation. This translation is systematic and, once learned, prevents many errors.

**For life-cycle diagrams (discrete time):**
1. Identify the state variable(s) you want to track (e.g., probability of correct responding, number of organisms in a stage).
2. For each transition arrow that affects the state variable, write a term describing how it changes the variable in one time step.
3. Sum all terms to get the update rule: $x_{t+1} = x_t + \sum(\text{change terms})$.

**For flow diagrams (continuous time):**
1. Identify each pool (state variable).
2. For each arrow entering the pool, write a rate expression (positive term).
3. For each arrow exiting the pool, write a rate expression (negative term).
4. The derivative equals the sum: $\frac{dx}{dt} = \sum(\text{inflow rates}) - \sum(\text{outflow rates})$.

The diagram is a visual check on your equation. If you wrote an equation with three terms but your diagram has four arrows, something is missing. If you have a positive term where the diagram shows an outflow, the sign is wrong. The diagram and the equation have to be consistent. If they are not, one of them has an error.

This mechanical process removes the mystique from mathematical modeling. You do not need to magically create the equation out of thin air. You draw the picture, label the arrows, and read off the equation. The intellectual work where your domain expertise is required is in drawing the right picture.

A common mistake is to try to write the equation first without drawing a diagram. This approach works for very simple models but fails quickly as complexity increases. Without a diagram, it is easy to forget a process, double-count a flow, or get a sign wrong. The diagram is a visual accounting system that heps to prevent these errors. Even experienced modelers draw diagrams first because it saves time and prevents mistakes.

**Multiple state variables.** Many interesting behavioral models (epecially at the boundaries of what we know) involve more than one state variable. When you have two or more pools in a flow diagram, you get a system of equations with one equation per pool. These equations are coupled. That is, the rate of change of one variable depends on the current value of another. For example, in the concurrent schedule model above, $\frac{dB_L}{dt}$ depends on $B_R$ (through the competition term), and $\frac{dB_R}{dt}$ depends on $B_L$. Coupled systems can produce dynamics that no single equation could generate on its own, including oscillations, stable coexistence, and winner-take-all outcomes.

An example might be useful usin a classic predator-prey analog in behavior science. A therapist delivers consequences (the "predator") that reduce challenging behavior (the "prey"), but the therapist's behavior is itself influenced by the level of challenging behavior. When challenging behavior is high, the therapist intervenes more actively; when challenging behavior is low, the therapist may reduce vigilance. This creates a feedback loop:

$$\frac{dC}{dt} = r_C \cdot C - a \cdot P \cdot T$$

$$\frac{dT}{dt} = b \cdot C \cdot T - d_T \cdot T$$

where $C$ is challenging behavior rate, $T$ is therapist intervention intensity, $r_C$ is the natural growth rate of challenging behavior, $a$ is the effectiveness of therapist intervention, $b$ is the degree to which challenging behavior elicits therapist intervention, and $d_T$ is the decay rate of therapist vigilance. This system can produce oscillatory dynamics with cycles of challenging behavior increasing, therapist responding, challenging behavior decreasing, therapist relaxing, and challenging behavior increasing again. Whether such oscillations actually occur in practice is an empirical question, but the model generates the prediction and tells you what to look for in the data.

**Summary of the diagram-to-equation process.** The recipe can be stated in three rules:
1. Every pool in the diagram gets its own equation.
2. Every arrow in the diagram contributes one term to the equation of the pool it enters (positive) or exits (negative).
3. Every equation must pass a dimensional analysis check before proceeding.

If you follow these three rules, you are unlikelt to miss a term, get a sign wrong, or write a dimensionally inconsistent equation. The rules do not guarantee that the model is correct, only that it is internally consistent and faithfully represents the diagram.

---
### Sensitivity Analysis
Sensitivity analysis asks: How does the model's output change when you change a parameter?

The procedure is straightforward:
1. Choose a baseline set of parameter values.
2. Select one parameter to vary.
3. Systematically change that parameter over a range of values while holding all others constant.
4. Record how the model's output (the dependent variable of interest) changes.
5. Repeat for each parameter.

The results tell you which parameters the model is sensitive to (small changes in the parameter produce large changes in output) and which the model is robust to (large changes in the parameter produce little change in output).

Sensitivity analysis is important in behavior science for three reasons. First, it identifies the leverage points in a behavioral system. If a model of a token economy is highly sensitive to the exchange ratio but insensitive to the delay between token delivery and exchange, that tells the practitioner where to focus intervention design efforts. Second, it reveals identifiability problems. If two parameters have similar effects on the output, it may be impossible to estimate both from data (i.e., the model is overparameterized for the available data). Finally, it provides robustness checks. If the model's qualitative predictions change significantly with small parameter perturbations, the predictions are not trustworthy.

An example may help.  Suppose you have the token economy model from the 8-step walkthrough:
$$P(t) = P^* + (P_0 - P^*) \cdot e^{-\lambda t}$$

You want to know which parameter matters most: $\lambda$ (rate of adjustment) or $r_t$ (token economy reinforcement rate, which determines $P^*$). Fix baseline values at $P_0 = 20$, $r_p = 3$, $r_t = 7$, $\lambda = 0.3$. Then:
- Vary $\lambda$ from 0.1 to 0.5 while holding everything else fixed. Record $P(10)$.
- Vary $r_t$ from 3 to 11 while holding everything else fixed. Record $P(10)$.

Compare the range of $P(10)$ values across each sweep. If $P(10)$ changes more when you vary $\lambda$ than when you vary $r_t$, the model is more sensitive to the rate of adjustment. If the reverse, the model is more sensitive to the intervention intensity. This information directly informs clinical practice: should you focus on making the token economy more influential ($r_t$) or on facilitating faster behavior change ($\lambda$, perhaps through prompting or shaping)?

Standard sensitivity analysis has a known limitation in that it varies one parameter at a time. This misses interactions where the effect of changing one parameter depends on the value of another. For example, the effect of increasing $r_t$ might depend on whether $\lambda$ is large or small. More sophisticated methods (e.g., global sensitivity analysis, Latin hypercube sampling) exist but are beyond the scope of this week. For now, one-at-a-time analysis provides a useful first look at model behavior.

---
### Parameter Estimation
Once you have a model, you need to find the parameter values that best describe your data. This is parameter estimation or model fitting.

**Least squares:** Find the parameter values that minimize the sum of squared differences between the model's predictions and the observed data:

$$\text{SS} = \sum_{i=1}^{n} (y_i - \hat{y}_i(\theta))^2$$

where $y_i$ is the observed value, $\hat{y}_i(\theta)$ is the model's prediction given parameters $\theta$, and the sum runs over all data points. The values of $\theta$ that minimize SS are the least-squares estimates.

**Maximum likelihood:** Find the parameter values that make the observed data most probable under the model. If the model specifies a probability distribution for each observation, the likelihood is:

$$\mathcal{L}(\theta) = \prod_{i=1}^{n} P(y_i \mid \theta)$$

Maximizing $\mathcal{L}(\theta)$ (or equivalently, minimizing $-\ln \mathcal{L}(\theta)$) gives the maximum likelihood estimates. Maximum likelihood is more general than least squares and provides a natural connection to model comparison (AIC, BIC which were covered in Week 6).

When to use which method:
- Least squares is appropriate when you assume that the errors (deviations between model predictions and data) are normally distributed with constant variance. It is computationally simple, widely available in software, and produces estimates that are easy to interpret.
- Maximum likelihood is appropriate when you have a specific probabilistic model for how data are generated. It handles non-normal error distributions (e.g., count data following a Poisson distribution, binary outcomes following a Bernoulli distribution). It is the foundation for AIC and BIC model comparison (Week 6).
- For many behavioral datasets (e.g., rate data, proportion data, latency data) maximum likelihood with an appropriate error distribution is preferable to least squares. However, least squares remains a good starting point and is often "good enough" for initial model exploration.

Practical advice:
- Always plot the model's predictions against the data after fitting. Numbers alone can be misleading. A plot reveals systematic deviations that summary statistics may obscure.
- Check that the optimization converged. Try multiple starting values to avoid local minima. If different starting values give different estimates, the optimization landscape may have multiple minima which is a warning sign that the model may be overparameterized or that the data are insufficient.
- Report confidence intervals or standard errors for parameter estimates, not just point estimates. A parameter estimate of $\alpha = 0.15$ with a 95% confidence interval of $[0.01, 0.29]$ tells a very different story than $\alpha = 0.15$ with an interval of $[0.14, 0.16]$.
- A good fit does not mean a good model. It means the model can describe the data. Whether it explains the data is a separate question.
- Examine the residuals (observed minus predicted values). If residuals show a systematic pattern (e.g., the model consistently overpredicts at low values and underpredicts at high values), the model's functional form may be wrong.

---
### Dimensional Analysis
Dimensional analysis is the practice of verifying that every term in an equation has consistent units. It is the fastest and most reliable error-detection tool in model building.

The rule is simple: you can only add or subtract quantities with the same units. You can multiply or divide quantities with any units (the result has combined units). Every equation must balance dimensionally.

**Example:** Consider the update rule for response probability:

$$p_{t+1} = p_t + \alpha \cdot r_t - \beta \cdot p_t$$

- $p_{t+1}$ and $p_t$ are probabilities (dimensionless, between 0 and 1).
- $\alpha \cdot r_t$ must also be dimensionless. If $r_t$ is in reinforcers per minute, then $\alpha$ must have units of minutes per reinforcer. This ensures the product is dimensionless.
- $\beta \cdot p_t$ must be dimensionless. Since $p_t$ is dimensionless, $\beta$ must also be dimensionless (or more precisely, have units of per time step, which is absorbed into the discrete-time convention).

If you find yourself adding a rate (responses per minute) to a count (responses), the equation is wrong. If you find a probability exceeding 1 or going below 0, something is wrong with the model's structure or parameter ranges.

**Dimensional analysis in practice:**

1. Write the units of every variable and parameter next to the equation.
2. For each term on the right-hand side, multiply/divide the units.
3. Verify that every additive term has the same units as the left-hand side.
4. If any term fails, you have found an error. Fix it before proceeding.

This step takes two minutes and catches errors that would otherwise take hours to debug computationally.

**Common dimensional analysis mistakes in behavioral models:**

- **Confusing rates and counts.** Response rate (responses/min) and total responses (count) have different units. An equation that predicts response rate cannot have a term that is a raw count without a time conversion.
- **Forgetting the time step in discrete models.** In a difference equation like $n_{t+1} = n_t + \text{(something)}$, the "something" must have the same units as $n$. If $n$ is a count and the "something" involves a rate, you need a $\Delta t$ factor to convert.
- **Dimensionless parameters that are not.** Sometimes a parameter appears dimensionless but actually carries hidden units. For example, a "learning rate" parameter $\alpha$ in a trial-by-trial model implicitly has units of "per trial." Making these units explicit prevents errors when converting between trial-level and time-level models.
- **Probabilities and proportions.** These are dimensionless by definition. Any term added to a probability must also be dimensionless. If your model has $p_{t+1} = p_t + r_t$ where $r_t$ is a rate in reinforcers/min, the equation is dimensionally incorrect---you need a scaling factor to make $r_t$ dimensionless.

**Dimensional analysis as a thinking tool.** Beyond catching errors, dimensional analysis can actually help you build models. If you know what units the left-hand side has, and you know the units of the quantities available on the right-hand side, dimensional analysis constrains how those quantities can be combined. This is especially useful when you are uncertain about the functional form of a relationship: the units tell you which combinations of variables are even possible.

---

### The Euler Method

Many models in behavior science are expressed as differential equations---they specify how a variable changes continuously over time. But computers work in discrete steps, and data are collected at discrete time points. The **Euler method** is the simplest way to bridge this gap.

The idea is to approximate continuous change with small discrete steps. If the model says:

$$\frac{dx}{dt} = f(x)$$

then over a small time interval $\Delta t$, the change in $x$ is approximately:

$$\Delta x \approx f(x) \cdot \Delta t$$

This gives the **Euler update rule:**

$$x_{n+1} = x_n + f(x_n) \cdot \Delta t$$

Starting from an initial value $x_0$, you compute $x_1$, then $x_2$, then $x_3$, and so on. Each step advances time by $\Delta t$.

**Example:** Suppose behavioral allocation $B$ changes according to:

$$\frac{dB}{dt} = r - d \cdot B$$

where $r$ is the reinforcement input rate and $d$ is the decay rate. The Euler approximation is:

$$B_{n+1} = B_n + (r - d \cdot B_n) \cdot \Delta t$$

With $r = 5$, $d = 0.1$, $B_0 = 0$, and $\Delta t = 0.5$:

- $B_1 = 0 + (5 - 0.1 \cdot 0) \cdot 0.5 = 2.5$
- $B_2 = 2.5 + (5 - 0.1 \cdot 2.5) \cdot 0.5 = 2.5 + 2.375 = 4.875$
- $B_3 = 4.875 + (5 - 0.1 \cdot 4.875) \cdot 0.5 = 4.875 + 2.256 = 7.131$
- And so on, gradually approaching the equilibrium $B^* = r/d = 50$.

**Step size matters.** Smaller $\Delta t$ gives more accurate results but requires more computation. Larger $\Delta t$ is faster but less accurate, and if $\Delta t$ is too large, the method can become **unstable**---the approximation oscillates wildly or diverges instead of converging. A good rule of thumb is to start with a small $\Delta t$, then halve it and check whether the results change. If halving $\Delta t$ does not meaningfully change the output, your step size is small enough.

**Limitations of the Euler method:** It is a first-order method, meaning the error per step is proportional to $(\Delta t)^2$ and the total accumulated error is proportional to $\Delta t$. More sophisticated methods (e.g., Runge-Kutta) achieve higher accuracy for the same step size but are more complex to implement. For the purposes of this course, Euler is sufficient for building intuition and running simple simulations.

**Practical guidelines for choosing $\Delta t$:**

1. Start with a $\Delta t$ that is small relative to the fastest timescale in your system. If the fastest process has a time constant of $\tau$ (e.g., $\tau = 1/d$ in the decay example above), set $\Delta t \ll \tau$.
2. Run the simulation. Then halve $\Delta t$ and run again. If the results change meaningfully, halve again. When halving $\Delta t$ no longer changes the results by more than a few percent, your step size is adequate.
3. For systems with multiple time scales (e.g., fast reinforcement effects and slow extinction), $\Delta t$ must be small enough for the fastest process.

**Why the Euler method matters for this course.** The Euler method is not just a computational technique---it is a conceptual bridge. Many students find differential equations abstract and intimidating. The Euler method makes them concrete: "the next value equals the current value plus the rate of change times the step size." This is arithmetic that any student can do by hand. Once the abstraction barrier is removed, differential equations become a natural and powerful language for describing behavioral dynamics.

---

## Applying the 8-Step Framework

This section applies the full 8-step framework to construct a model from scratch. The goal is to model the effect of a **token economy** on **problem behavior** in a clinical setting.

**Step 1: Get the behavioral phenomenon clearly in mind.**

A child in a classroom engages in disruptive behavior (e.g., calling out, leaving seat). The teacher implements a token economy: the child earns tokens for periods without disruptive behavior (DRO---differential reinforcement of other behavior) and exchanges tokens for preferred activities at the end of the day. Over days, the rate of problem behavior decreases. We want to model this decrease quantitatively.

Before proceeding, we need to specify what we mean by "disruptive behavior" and how it is measured. For this model, disruptive behavior is operationally defined as any instance of calling out without raising hand or leaving the assigned seat without permission. The measurement is a daily frequency count: the total number of instances recorded during the school day.

We observe the following pattern: problem behavior starts at a high rate (roughly 15--25 instances per day during baseline), decreases rapidly in the first few days of the intervention, and then decreases more slowly, eventually reaching a low but nonzero steady state (roughly 3--8 instances per day). The rate of decrease depends on how many tokens are earned and how preferred the backup reinforcers are. The nonzero steady state is notable---the token economy reduces problem behavior substantially but does not eliminate it entirely.

**Step 2: Define the behavioral processes and scope of the model.**

We model the daily rate of problem behavior as a function of the token economy parameters. We do not model within-day dynamics, the specific topography of problem behavior, or social interactions with peers. The model covers a single child, a single response class (disruptive behavior), and a single intervention (token economy with DRO).

The key processes are:
- Problem behavior produces some natural maintaining reinforcement (e.g., attention, escape).
- The token economy provides an alternative source of reinforcement contingent on the absence of problem behavior.
- Over days, the relative value of the token economy reinforcement versus the natural reinforcement shifts behavioral allocation away from problem behavior.

**Step 3: Identify the behavioral principles and quantitative laws.**

- **Reinforcement:** Behavior is maintained by its consequences.
- **Behavioral allocation:** The matching law suggests that the proportion of behavior allocated to an alternative is a function of the relative reinforcement obtained from that alternative.
- **Behavioral momentum / resistance to change:** Behavior with a longer reinforcement history is more resistant to disruption, so the initial rate of change may depend on the history.

We will use a simple reallocation model rather than the full matching law, keeping the model tractable. Note the deliberate choice here: the matching law is a more complete framework, but it requires specifying multiple concurrent response alternatives and their reinforcement rates. For a first model, we simplify to a single target behavior and its trajectory over time. If this simple model fails to capture the data, the matching law provides a natural direction for elaboration.

**Step 4: State all simplifying assumptions.**

This step is crucial. Every assumption you state is a potential point of model failure---and therefore a potential direction for improvement. Being explicit about assumptions is what separates principled modeling from ad hoc curve fitting.

1. Problem behavior is maintained by a single source of reinforcement at a constant rate $r_p$ (reinforcers per day from natural contingencies).
2. The token economy provides reinforcement at rate $r_t$ (token-mediated reinforcers per day), which is constant once the intervention is in place.
3. Total behavioral output is constant: any decrease in problem behavior corresponds to an increase in appropriate behavior.
4. The rate of change in problem behavior is proportional to the difference between current allocation and the allocation predicted by the reinforcement ratio.
5. Day-to-day changes are smooth enough to model with a continuous-time approximation.
6. The child's motivation for the backup reinforcers does not change over the course of the intervention (no satiation on the token economy rewards).
7. Implementation fidelity is perfect: the teacher delivers tokens consistently according to the schedule.

Each of these assumptions is, strictly speaking, wrong. Natural reinforcement rates fluctuate. Token economy effectiveness varies. Motivation changes. Implementation is imperfect. But the model must start somewhere, and each assumption can be relaxed in future iterations if the data demand it.

**Step 5: Write the model verbally, then mathematically.**

*Verbally:* Problem behavior decreases over days at a rate proportional to how far the current rate is from the equilibrium rate predicted by the reinforcement contingencies. The equilibrium rate is determined by the ratio of natural reinforcement for problem behavior to the total reinforcement available (natural plus token economy).

*Drawing the flow diagram:*

There is one pool: $P$, the rate of problem behavior. There is one inflow (natural reinforcement maintaining problem behavior) and one outflow (the token economy drawing behavior away from problem behavior toward appropriate behavior).

$$\text{Natural reinforcement} \longrightarrow \boxed{P} \longrightarrow \text{Token economy reallocation}$$

The inflow rate drives $P$ toward the level sustained by natural reinforcement alone. The outflow rate drives $P$ toward a lower level by providing competing reinforcement.

*Mathematically:* We use a first-order approach-to-equilibrium model:

$$\frac{dP}{dt} = -\lambda \cdot (P - P^*)$$

where:
- $P$ is the current rate of problem behavior (responses per day)
- $P^*$ is the equilibrium rate of problem behavior under the token economy
- $\lambda$ is the rate constant governing how quickly behavior adjusts (per day)
- $t$ is time in days

The equilibrium $P^*$ is determined by the reinforcement contingencies:

$$P^* = P_0 \cdot \frac{r_p}{r_p + r_t}$$

where $P_0$ is the baseline rate of problem behavior (before the token economy), $r_p$ is the rate of natural reinforcement for problem behavior, and $r_t$ is the effective rate of reinforcement from the token economy.

The solution to this differential equation is:

$$P(t) = P^* + (P_0 - P^*) \cdot e^{-\lambda t}$$

This is exponential decay from $P_0$ to $P^*$.

**Step 6: Verify dimensional consistency.**

- $P$ is in responses per day.
- $P^*$ is in responses per day (same units as $P$---correct).
- $P_0$ is in responses per day.
- $\lambda$ is in per day (day$^{-1}$).
- $t$ is in days.
- $\lambda \cdot t$ is dimensionless (day$^{-1} \times$ day)---correct for an exponent.
- $\frac{r_p}{r_p + r_t}$ is dimensionless (reinforcers per day divided by reinforcers per day)---correct.
- $(P_0 - P^*) \cdot e^{-\lambda t}$ is in responses per day---matches $P$.

All terms are dimensionally consistent.

**Step 7: Specify starting values and constraints.**

- $P_0 > 0$ (there must be a baseline rate of problem behavior for the intervention to be meaningful).
- $P^* \geq 0$ (the equilibrium rate cannot be negative). Since $P^* = P_0 \cdot \frac{r_p}{r_p + r_t}$ and all rates are non-negative, this is guaranteed.
- $\lambda > 0$ (behavior must actually change over time for the model to apply).
- $r_p > 0$ (if there is no maintaining reinforcement, there is no problem behavior to model).
- $r_t \geq 0$ ($r_t = 0$ means no intervention, in which case $P^* = P_0$ and nothing changes).

At $t = 0$, $P(0) = P^* + (P_0 - P^*) \cdot e^0 = P_0$. This is correct: at the start, problem behavior is at baseline.

As $t \to \infty$, $P(t) \to P^*$. This is correct: the model predicts that problem behavior asymptotes at the level determined by the reinforcement ratio.

**Step 8: Check the math, test against data, and derive predictions.**

*Verify limiting cases:*
- If $r_t = 0$ (no token economy), $P^* = P_0$ and $P(t) = P_0$ for all $t$. The model predicts no change without intervention. Correct.
- If $r_t \to \infty$ (extremely powerful token economy), $P^* \to 0$ and the model predicts problem behavior drops to zero. This is an idealization but qualitatively correct.
- If $\lambda$ is very large, the transition is rapid; if $\lambda$ is very small, it is slow. Both make behavioral sense.

*Derive a prediction:* Suppose $P_0 = 20$ responses/day, $r_p = 3$ reinforcers/day, $r_t = 7$ reinforcers/day, and $\lambda = 0.3$ per day. Then:

$$P^* = 20 \cdot \frac{3}{3 + 7} = 20 \cdot 0.3 = 6 \text{ responses/day}$$

$$P(t) = 6 + (20 - 6) \cdot e^{-0.3t} = 6 + 14 \cdot e^{-0.3t}$$

At $t = 5$ days: $P(5) = 6 + 14 \cdot e^{-1.5} = 6 + 14 \cdot 0.223 = 6 + 3.12 = 9.12$ responses/day.

At $t = 10$ days: $P(10) = 6 + 14 \cdot e^{-3.0} = 6 + 14 \cdot 0.050 = 6 + 0.70 = 6.70$ responses/day.

The model predicts that problem behavior drops from 20 to about 9 in the first 5 days, then more slowly approaches 6 over the next 5 days. This negatively accelerated pattern matches what is commonly observed in practice.

*Test against data:* To validate, collect daily rates of problem behavior during a token economy intervention. Fit the model using nonlinear least squares to estimate $\lambda$ and $P^*$ (or equivalently, $r_p$ and $r_t$ if those are not directly observable). Compare the fitted curve to the data. Assess residuals for systematic deviations.

*Iterate:* Suppose the residuals show that problem behavior decreases faster than predicted in the first few days but slower than predicted later. This systematic deviation suggests that the constant-$\lambda$ assumption is wrong---perhaps the rate of adjustment itself changes over time (e.g., initial novelty effects wear off). This observation sends us back to Steps 2--4 to revise the model, perhaps by making $\lambda$ a decreasing function of time. The cycle continues until the model captures the essential features of the data or until we run out of data to constrain additional parameters.

**Lessons from this walkthrough.** Several features of this example are worth highlighting:

- The flow diagram was simple---one pool, two arrows. Yet it produced a model with clear, testable predictions.
- The dimensional analysis was quick and confirmed the equation was internally consistent.
- The limiting-case analysis (Step 8) provided immediate sanity checks without any data fitting.
- The numerical predictions ($P(5) \approx 9.12$, $P(10) \approx 6.70$) give concrete expectations that can be compared to observations.
- The model's simplicity also reveals its limitations, pointing toward specific refinements rather than vague dissatisfaction.

---
## Worked Example
### Response Acquisition Under Continuous Reinforcement
We will build a model of how a new operant response is acquired when every response produces reinforcement (continuous reinforcement, CRF).

The phenomenon: A rat is placed in an operant chamber. At first, it rarely presses the lever. Each press produces a food pellet. Over time, the rate of lever pressing increases, eventually reaching a stable level. The acquisition curve typically shows an S-shape: slow initial responding (the organism has not yet contacted the reinforcement contingency), followed by a rapid increase (each reinforced response increases the probability of emitting a similar response in the currnte context, which leads to more reinforced responses), followed by a leveling off due to physical or motivational constraints impose a ceiling.

We want a model that captures at least the initial accelerating phase of acquisition. A more complete model would also capture the deceleration and asymptote, which we address below.

**Life-cycle diagram.** Within each time step (say, one minute), the following events occur:
1. The organism begins with a low, but non-zero probability of pressing the lever.
2. The two response options we track are (a) to press the lever or (b) to not. The probability of pressing the lever is proportional to $n_t$.
3. If the organism presses the lever, reinforcement is delivered with probability $p$ (under CRF, $p = 1$).
4. Reinforcement increases the probability of responding for the next time step by a factor $\alpha$.
5. Simultaneously, response probability decays by a factor $\beta$ due to fatigue or competing behaviors.

The cycle repeats at the next time step.

**Translating to a difference equation.** The diagram tells us that response probability increases due to reinforcement and decreases due to fatigue or response competition:

$$r_{t+1} = n_t + \alpha \cdot p \cdot r_t - \beta \cdot r_t$$

This can be simplified:

$$r_{t+1} = r_t \cdot (1 + \alpha \cdot p - \beta)$$

where:
- $r_t$ is the response probability at time step $t$ (arbitrary units, $r_0 > 0$)
- $\alpha$ is the reinforcement effect parameter (dimensionless, $\alpha > 0$)
- $p$ is the probability of reinforcement given a response ($0 \leq p \leq 1$; under CRF, $p = 1$)
- $\beta$ is the response probability decay parameter (dimensionless, $0 < \beta < 1$)

**Dimensional check.** All terms are in the same arbitrary units as $r_t$. The quantities $\alpha \cdot p$ and $\beta$ are dimensionless. The product $r_t \cdot (1 + \alpha \cdot p - \beta)$ has the same units as $r_t$. Consistent.

**Behavior of the model.** Define the growth factor $G = 1 + \alpha \cdot p - \beta$.
- If $G > 1$ (i.e., $\alpha \cdot p > \beta$), the response probability grows geometrically. Reinforcement effect exceeds decay, and the rate of responding curve is an acquisition curve.
- If $G = 1$ (i.e., $\alpha \cdot p = \beta$), the response probability is stable. The influence of reinforcement on response probability exactly balances decay.
- If $G < 1$ (i.e., $\alpha \cdot p < \beta$), the response probability decays. Decay exceeds reinforcement, and the rate of responding is a reduction curve.

This simple model captures geometric growth but has currently no ceiling. As a result, $r_t$ would increase without bound if $G > 1$. A more realistic model would include an asymptote. For now, we keep it simple and note this limitation. But, we come back to it in a bit. 

**Simulation with specific parameter values.**
Let $r_0 = 1$ (initial response probability), $\alpha = 0.15$ (reinforcement effect), $p = 1.0$ (CRF), $\beta = 0.05$ (decay rate).

Then $G = 1 + 0.15 \cdot 1.0 - 0.05 = 1.10$.

| Time step ($t$) | $r_t$ |
|:---:|:---:|
| 0 | 1.000 |
| 1 | 1.100 |
| 2 | 1.210 |
| 3 | 1.331 |
| 4 | 1.464 |
| 5 | 1.611 |
| 6 | 1.772 |
| 7 | 1.949 |
| 8 | 2.144 |
| 9 | 2.358 |
| 10 | 2.594 |
| 11 | 2.853 |
| 12 | 3.138 |
| 13 | 3.452 |
| 14 | 3.797 |
| 15 | 4.177 |
| 16 | 4.595 |
| 17 | 5.054 |
| 18 | 5.560 |
| 19 | 6.116 |
| 20 | 6.727 |

The response probability grows geometrically, roughly doubling every 7-8 time steps. Under CRF with these parameters, the model predicts accelerating acquisition. This acceleration is a direct consequence of the multiplicative structure of the model. In each time step, response probability is multiplied by $G = 1.10$, so the absolute increase per step grows as $r_t$ grows. In the first step, the increase is $0.1 \times 1.0 = 0.1$. By step 20, the increase is $0.1 \times 6.116 = 0.612$. This compounding is characteristic of a positive feedback system. More responding leads to more reinforcement, which leads to yet more responding.

The state variable $r_t$ represents response probability, not response rate directly. To connect the model to observable data, we would need a mapping from $r_t$ to actual response rate. For example, response rate could be proportional to $r_t$, or could be a saturating function of $r_t$. This mapping is itself a modeling decision that would need to be specified and justified.

**Sensitivity analysis: Varying $\alpha$.**
We now examine how the model's output at $t = 20$ changes as we vary $\alpha$ while holding $p = 1.0$, $\beta = 0.05$, and $r_0 = 1$ constant.

| $\alpha$ | $G = 1 + \alpha - 0.05$ | $r_{20} = G^{20}$ |
|:---:|:---:|:---:|
| 0.05 | 1.00 | 1.000 |
| 0.08 | 1.03 | 1.806 |
| 0.10 | 1.05 | 2.653 |
| 0.12 | 1.07 | 3.870 |
| 0.15 | 1.10 | 6.727 |
| 0.20 | 1.15 | 16.367 |
| 0.25 | 1.20 | 38.338 |

The model is highly sensitive to $\alpha$. A change from $\alpha = 0.10$ to $\alpha = 0.20$ doubles the reinforcement effect and produces more than a six-fold increase in the response probability at $t = 20$. This sensitivity makes sense. In a geometric growth model, small changes in the growth rate compound over time.

This sensitivity analysis tells us that if we want to predict acquisition accurately, we need a precise estimate of $\alpha$. It also tells us that from a practical standpoint, interventions that increase the effectiveness of reinforcement (e.g., using more preferred reinforcers, reducing delay to reinforcement) can have outsized effects on acquisition speed (assuming the model is correct and complete enough to be useful).

The table above also reveals an important property of systems with geometric growth. Specifically, they are disproportionately sensitive to parameters that affect the growth rate. A 100% increase in $\alpha$ (from 0.10 to 0.20) produces more than a 500% increase in $r_{20}$. This is because each increment to $\alpha$ compounds across all 20 time steps. In practical terms, this would mean that even small improvements in reinforcement effectiveness can significantly accelerate learning. It also means that small decrements can significantly slow it. This is a result that would be difficult to derive from verbal reasoning alone but is readily observable from the model. All of this, again, assuming the model is correct and complete enough to be useful. 

As noted above, the geometric growth model has a significant limitation. It has no mechanism for satiation, competing responses, or schedule thinning. It predicts that response tendency grows without bound as long as $G > 1$, which is clearly unrealistic. How might we modify our model to handle this?

**Adding a ceiling.** To prevent unbounded growth, we can introduce a response capacity $K$:
$$r_{t+1} = r_t + \alpha \cdot p \cdot r_t \cdot \left(1 - \frac{r_t}{K}\right) - \beta \cdot r_t$$

This is a logistic-growth analog commonly used in behavioral ecology where environmental carrying capacities limit the growth of populations. When $r_t$ is small relative to $K$, the model behaves like the original. As $r_t$ approaches $K$, the reinforcement effect diminishes (a form of saturation or ceiling effect). This extension produces the S-shaped acquisition curve commonly observed in learning data: slow start, rapid middle phase, and gradual leveling off.

**Simulating the logistic version.** With $r_0 = 1$, $\alpha = 0.15$, $p = 1.0$, $\beta = 0.05$, and $K = 10$:

| Time step ($t$) | $r_t$ (geometric) | $r_t$ (logistic, $K = 10$) |
|:---:|:---:|:---:|
| 0 | 1.000 | 1.000 |
| 5 | 1.611 | 1.547 |
| 10 | 2.594 | 2.180 |
| 15 | 4.177 | 2.730 |
| 20 | 6.727 | 3.140 |
| 25 | 10.835 | 3.413 |
| 30 | 17.449 | 3.572 |

Note how the logistic model levels off as $r_t$ approaches $K$ instead of growing without bound. The logistic model is more realistic for most behavioral applications because there are natural ceilings on response rate imposed by physical constraints, competing behaviors, and satiation.

**Connecting the worked example to the framework.** This worked example illustrates several principles:
- Start simple (the geometric model), then add complexity (the logistic extension): The geometric model was clearly unrealistic (unbounded growth), but it was useful as a starting point because its behavior was easy to understand and it revealed exactly what was missing.
- The sensitivity analysis guided our understanding: We learned that $\alpha$ is the critical parameter which holds for the geometric and logistic versions.
- The diagram drove the equation: The life-cycle diagram told us which terms to include. Adding the response capacity was a modification of one term, not a complete rewrite.
- Dimensional consistency was maintained throughout: Every extension was checked for units before simulation.

---
## Plain-Language Interpretation
Building a model is like drawing a map. You start by deciding what territory to include. Obviously you can't map everything. As an analogy, the entire world doesn't fit on a single sheet of paper. So you choose: the campus, the neighborhood, the city. This is the scope of your model (Steps 1-2 of the framework).

Next, you identify the roads, buildings, and landmarks that matter for your purpose. If you are mapping walking routes, you include sidewalks and crosswalks. If you are mapping bus routes, you include stops and lanes. These are your variables and processes (Step 3).

Then you sketch the map. You start with a rough sketch; a quick pencil drawing that shows the major features and how they connect. This is the diagram (the qualitative description in Otto and Day's framework). The sketch doesn't need to be perfect. It needs to capture the essential spatial relationships.

The math is just a precise version of the sketch. Where the sketch shows "this road connects A to B", the equation specifies the distance, the speed limit, and the travel time. Where the sketch shows "traffic flows from the highway onto the exit ramp", the equation specifies the rate of flow as a function of congestion.

If the map does not match the territory then you revise it (e.g., if you follow the map and end up in the wrong place). You don't conclude that the territory is wrong. You redraw the map. This is the iterative process at the core of model building.

The tools we reviewed this week are the drafting tools for your map. They include: life-cycle diagrams, flow diagrams, dimensional analysis, and sensitivity analysis. These tools don't replace the need to know the territory (behavior science), but they make the mapping process systematic and less error prone.

One more aspect of the analogy is worth noting. A map is useful precisely because it leaves things out. A map that reproduced every blade of grass and every crack in the sidewalk would be as large as the territory itself and no easier to navigate. The same is true of models. A model that included every variable, every process, and every individual difference would be as complex as the phenomenon it is trying to explain. Building in complexity has utility when asking certain basic or theoretical questions. But, adding complexity can reduce practical utility. The practical art of model building is in choosing which details to include and which to omit. And, thinking about this as an iterative process ensures that if you omit something important, you will discover it when the model fails to match the data.

---
## Assumptions and Limitations
All models are simplifications and, therefore, require simplifying assumptions. It is important to udnerstand what assumptions you have to make at each stage of model building so that you understand the limitations of your model and the aproach you are using to build a model. 

There are several limitations that arise from the assumptions of life-cycle diagrams. First, a life-cycle diagram assumes that events follow a fixed sequence within each time step. If the actual process involves variable ordering or simultaneous events, the diagram may impose false structure. Second, a flow diagram assumes that the pools and flows capture the essential dynamics. If the real system has important discrete events then a continuous-flow model may miss them (e.g., schedule transitions, session boundaries). Lastly, life-cycle and flow diagrams force you to decide which variables are state variables and which are parameters. Your decisions here might be wrong. What you treated as a constant parameter might actually vary in ways that matter.

There are also several limitations to sensitivity analysis. One-at-a-time sensitivity analysis misses interactions between parameters. Using our example above, the effect of changing $\alpha$ might depend on the value of $\beta$, but varying them independently may not reveal this interaction. Sensitivity analysis also explores the model's behavior, not reality. High sensitivity to a parameter in the model does not mean the real system is sensitive to the corresponding real-world quantity. 

Though mentioned in previous weeks, its worth reiterating that parameter estimation has known limitations. A good fit does not validate a model. Multiple different models (with different assumptions and mechanisms) can fit the same data equally well. Relatedly, parameter estimates are only as good as the data. If the data do not span a wide enough range of conditions, parameters are might be poorly identified.

From the computational side, it is useful to also be aware of the limitations to Euler method. Also model fits depend on step sizes to modify parameter sizes for comparison to real date. And, the accuracy of parameter estimation depends directly on that step size. Too large a $\Delta t$ produces inaccurate results or instability. Relatedly, the Euler method is first-order where error accumulates linearly with the number of steps. For long simulations, this can matter.

---
## Connection to Behavior Science
Behavior analysts have, arguably, always been process thinkers. Functional analysis asks what antecedents and consequences maintain behavior? This is, in essence, drawing a flow diagram. The behavior analyst identifies the inputs to and outputs from a behavioral pattern. The step from informal process thinking to formal model construction is smaller than most behavior analysts realize. If you can describe a three-term or four-term contingency, you can draw a flow diagram. If you can draw a flow diagram, you can write a differential equation.

Consider a standard functional analysis for automatically reinforced self-injurious behavior (SIB). The verbal hypothesis might be that "SIB is maintained by automatic reinforcement; it produces sensory stimulation that functions as a reinforcer." A flow diagram version would show a single pool (SIB rate) with an inflow (automatic reinforcement, proportional to the current SIB rate) and an outflow (fatigue, satiation, or competing behaviors). This gives:

$$\frac{d(\text{SIB})}{dt} = a \cdot \text{SIB} - b \cdot \text{SIB} = (a - b) \cdot \text{SIB}$$

where $a$ is the automatic reinforcement rate and $b$ is the decay rate. If $a > b$, the rate of SIB increases; if $a < b$, the rate of SIB decreases; if $a = b$, the rate of SIB is stable. This is exactly the kind of analysis that the flow diagram makes transparent. The verbal hypothesis tells you the direction; the formal model tells you the magnitude and trajectory.

Otto and Day's (2007) textbook on biodynamics provides one of the most straightforward recipes to translate biological process diagrams into mathematical models. Their life-cycle and flow diagram methods were developed for population biology, but the same methods apply directly to behavioral processes. A population of responses growing and changing through contact with reinforcement is formally analogous to a population of organisms growing under favorable conditions. The mathematics of growth, decay, competition, and equilibrium are the same.

The analogy is more than superficial. In population biology, organisms reproduce, compete for resources, and die. In behavior science, responses are emitted, reinforced (selected), and extinguished. The mathematical tools that population biologists use to model selection (i.e., growth equations, competition equations, fitness landscapes) are available to behavior scientists to model reinforcement, competition between response classes, and the evolution of behavioral repertoires. Otto and Day (2007) provide the bridge between these fields, and this week's methods draw heavily on that bridge.

To close, it might be useful to make explicit the fact that not every model-building effort succeeds. That is acceptable and useful. A model that fails to fit the data is informative. The pattern of failure (which conditions does the model get right? which does it get wrong?) helps the modeler identify which processes are missing or misspecified. In the history of behavior science, some of the most important insights have come from model failures. For example, the failure of simple matching to account for concurrent-chain performance led to the development of delay-reduction theory; the failure of exponential discounting to account for preference reversals led to the adoption of hyperbolic discounting. Building models gives you a systematic way to fail productively. 

---
## Exercises for Reflection
1. Choose a behavioral phenomenon from your own research or clinical experience. Draw a flow diagram showing the key variables and the flows between them. Then translate the diagram into a differential equation using the recipe: $\frac{dx}{dt} = \sum(\text{inflows}) - \sum(\text{outflows})$. Check the dimensional consistency of your equation.

2. The token economy model in the 8-step walkthrough assumes that the reinforcement rate $r_p$ is constant. In practice, $r_p$ might change (e.g., peers stop attending to problem behavior over time). How would you modify the model to account for a declining $r_p$? Write the modified equation and describe qualitatively how the model's predictions would change.

3. Run a sensitivity analysis (by hand or with a calculator) on the response acquisition model from the worked example. Instead of varying $\alpha$, vary $\beta$ from 0.01 to 0.20 while holding $\alpha = 0.15$ and $p = 1.0$. How does $n_{20}$ change? Is the model more sensitive to $\alpha$ or to $\beta$? What does this tell you about the relative importance of reinforcement effectiveness versus decay/extinction?

4. The Euler method approximates continuous change with discrete steps. Using the behavior allocation model $\frac{dB}{dt} = r - d \cdot B$ with $r = 5$, $d = 0.1$, and $B_0 = 0$, compute $B$ at $t = 5$ using (a) $\Delta t = 1.0$ (5 steps), (b) $\Delta t = 0.5$ (10 steps), and (c) the exact solution $B(t) = \frac{r}{d}(1 - e^{-dt})$. How close is each Euler approximation to the exact solution? What does this tell you about the importance of step size?

5. Consider a DRA (differential reinforcement of alternative behavior) procedure in which a behavior technician reinforces an alternative communicative response while problem behavior contacts extinction. Draw a flow diagram with two pools: problem behavior ($P$) and alternative behavior ($A$). Include inflows (reinforcement for $A$, natural reinforcement for $P$), outflows (extinction/decay for each), and competition between the pools. Translate your diagram into a system of two differential equations. What does the model predict about the steady-state ratio of $A$ to $P$?

---
## Key Readings
**Otto and Day (2007, Chapter 2)** presented a systematic recipe for constructing mathematical models from scratch, organized as a sequence of steps: formulate the question, identify the variables, draw a diagram, write the equations, and analyze the result. They emphasized that model building is iterative; the first version will be wrong and the value comes from having something concrete to criticize and improve. For this week, the chapter provides the scaffolding that transforms the 8-step framework from an abstract checklist into a practical workflow. The life-cycle and flow diagrams they introduce are especially important, because they make the intellectual work of model construction visual and explicit before any equations are written.

**Otto and Day (2007, Chapters 5-6)** covered numerical and graphical techniques for understanding model behavior when analytical solutions are unavailable or uninformative. They introduced Euler's method for numerically solving differential equations, phase-plane diagrams for visualizing two-variable systems, nullclines for locating equilibria, and sensitivity analysis for determining how model outputs depend on parameter values. These techniques are the practical tools of model building. And, they allow the modeler to develop intuition about what a model predicts, identify parameter regions where behavior changes qualitatively, and detect unrealistic predictions before investing in formal analysis. For the course, this chapter completes the transition from model consumer to model constructor by equipping you with the computational skills to explore your own models.

---
## Reading Guide
### Otto & Day (2007): How to Construct a Model
- What is the primary hurdle most new modelers face, and what first step do Otto & Day suggest to overcome it?
- The authors introduce seven steps for model construction (Box 2.1). List these seven steps. Why might it be helpful to treat them as iterative rather than strictly sequential?
- According to the authors, how does modeling start conceptually, even before equations are written down? What's the benefit of beginning with toy examples?
- What distinguishes a dynamical model from other types of models in biology? Give one example of a behavior-analytic phenomenon that would benefit from a dynamical modeling approach.
- Explain the difference between deterministic and stochastic models. Why might deterministic models be more appropriate for the current course and lab work?
- What makes Step 1---formulating a good question---so difficult for many students? How do Otto & Day suggest you find a starting point?
- What are some strategies for simplifying reality when choosing model variables? Why is simplification critical at early stages of modeling?
- How can notational conventions like $n(t)$ help prevent errors in reasoning when working with models?
- When deciding between a discrete-time and continuous-time model, what key conceptual and behavioral tradeoffs should you consider?
- Why do modelers often treat inherently discrete quantities (e.g., number of individuals) as continuous variables? When might this abstraction break down?
- Explain the difference between a recursion equation, a difference equation, and a differential equation. What kind of model uses each?
- What is the purpose of identifying constraints on variables and parameters during model construction?
- Why is it useful to build a table of all variables and parameters before writing your model equations?
- Describe the difference between a life-cycle diagram and a flow diagram. When is each most useful?
- Describe a situation in behavior analysis where a "life-cycle diagram" might be useful. Do the same for a "flow diagram."
- Why is the order of events especially important in discrete-time models?
- What does it mean to say a model "fails to capture the essence of the biological process"?
- What is the process for turning a flow diagram into equations for a continuous-time model?
- How do you know when your model is "done"?

### Otto & Day (2007): Numerical and Graphical Techniques
- What are the two broad reasons Otto & Day give for using numerical techniques instead of analytical solutions?
- What is the Euler method, and in what types of models is it used?
- What are the limitations of the Euler method?
- How do numerical approaches relate to the concept of iteration in behavior analysis?
- What are difference equations, and how do they differ from differential equations?
- Why is it useful to simulate your model with different parameter values?
- What is a phase-plane diagram, and what kind of model does it apply to?
- Describe a behavior-analytic phenomenon that might benefit from visualizing its dynamics using a phase-plane diagram.
- What is a nullcline, and how does it help identify equilibrium points in a system?
- Why are vector fields useful in analyzing model behavior?
- How do you interpret the arrows in a vector field plot?
- Otto & Day describe both local and global stability. What's the difference?
- Describe a scenario in behavior analysis where local stability might matter more than global stability.
- What role does simulation play in understanding complex or nonlinear behavior systems?
- How can graphical tools help you detect whether your model is behaving unrealistically?
- What are bifurcation diagrams, and what kind of question do they help answer?
- Think of a behavior-analytic example where a bifurcation diagram could reveal an important insight.
- What are the advantages of using computer simulations for model analysis?
- What are the risks of relying too much on simulations without doing checks and balances?

---
## References
Baum, W. M. (1974). On two types of deviation from the matching law: Bias and undermatching. *Journal of the Experimental Analysis of Behavior, 22*(1), 231--242. https://doi.org/10.1901/jeab.1974.22-231

Estes, W. K. (1950). Toward a statistical theory of learning. *Psychological Review, 57*(2), 94--107. https://doi.org/10.1037/h0058559

Herrnstein, R. J. (1961). Relative and absolute strength of response as a function of frequency of reinforcement. *Journal of the Experimental Analysis of Behavior, 4*(3), 267--272. https://doi.org/10.1901/jeab.1961.4-267

Hull, C. L. (1943). *Principles of behavior: An introduction to behavior theory*. Appleton-Century.

Mazur, J. E. (1987). An adjusting procedure for studying delayed reinforcement. In M. L. Commons, J. E. Mazur, J. A. Nevin, & H. Rachlin (Eds.), *Quantitative analyses of behavior: Vol. 5. The effect of delay and of intervening events on reinforcement value* (pp. 55--73). Erlbaum.

Otto, S. P., & Day, T. (2007). *A biologist's guide to mathematical modeling in ecology and evolution*. Princeton University Press.

---
## Key Takeaways
- **Model building is iterative.** Start simple, check, revise. The first model is always wrong in important ways, and that is fine. The purpose of the first model is to give you something concrete to improve.

- **Diagrams first, equations second.** Life-cycle diagrams (for discrete-time processes) and flow diagrams (for continuous-time processes) do most of the intellectual work. The equation follows mechanically from the diagram.

- **The diagram-to-equation recipe.** For flow diagrams: $\frac{dx}{dt} = \sum(\text{inflow rates}) - \sum(\text{outflow rates})$. For life-cycle diagrams: $x_{t+1} = x_t + \sum(\text{change terms})$. Every arrow in the diagram contributes a term.

- **Dimensional analysis catches errors.** Every additive term in an equation must have the same units. Checking units takes two minutes and prevents hours of debugging.

- **Sensitivity analysis identifies leverage points.** By varying one parameter at a time and observing how the output changes, you learn which parameters matter most. Knowing which parameters matter most is useful for scientific understanding and for practical intervention design.

- **Parameter estimation connects models to data.** Least squares and maximum likelihood are the primary tools. A good fit is necessary but not sufficient for a good model.

- **The Euler method bridges continuous models and discrete computation.** $x_{n+1} = x_n + f(x_n) \cdot \Delta t$. Smaller step sizes are more accurate. Always check for convergence by halving $\Delta t$.

- **Behavioral processes map naturally to modeling frameworks.** Three-term contingencies are flow diagrams. Discrete-trial procedures are life-cycle diagrams. The step from behavioral process thinking to formal modeling is smaller than it appears.

- **Start with diagrams, not equations.** The diagram is where the thinking happens. Draw the pools and arrows first. Label them. Check that they capture the processes you care about. Then read off the equation. Following the order of diagram first and equation second prevents errors and helps to build understanding.

- **The iterative cycle is the method.** Formulate, build, check, revise. You will go around this loop multiple times for any model worth building. Each pass improves the model and improves your understanding of the phenomenon. Embrace the iteration rather than resisting it.
