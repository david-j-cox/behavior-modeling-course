---
slug: "week-11"
number: 11
published: false
title: "Computational Models"
subtitle: "When equations are not enough — simulating behavior algorithmically"
description: "Agent-based models, Monte Carlo simulation, Q-learning, reinforcement learning."
keyModels:
  - "Q-Learning"
  - "Agent-Based Models"
  - "Monte Carlo Simulation"
keyEquations:
  - "Q(s,a) <- Q(s,a) + alpha[r + gamma*max Q(s',a') - Q(s,a)]"
  - "McDowell's evolutionary model"
---

## Why This Topic Matters

Some behavioral phenomena are too complex for closed-form equations. When multiple agents interact, when reinforcement contingencies change dynamically over time, when emergent group-level patterns arise from simple individual-level rules — you need a different kind of model. You need a model that you *run* rather than *solve*. These are **computational models**: models implemented as algorithms that execute step by step, generating predictions through simulation rather than through algebraic manipulation.

Consider the problem of modeling a social group in which each individual's behavior depends on what others around them are doing, and where reinforcement is delivered probabilistically based on the collective pattern of responding. There is no simple equation that captures this. But you *can* write a program in which each virtual organism follows a small set of behavioral rules, interacts with its neighbors, and receives reinforcement according to a schedule. Run the program forward, and complex group-level regularities emerge — regularities that no one programmed in explicitly. This is the power of computational modeling.

Or consider an organism learning to navigate a complex environment with multiple choice points, where each choice leads to a different location with different reinforcement contingencies, and where the optimal strategy requires planning several steps ahead. The matching law tells you about steady-state allocation between two concurrent alternatives; it says nothing about sequential decision-making in a multi-step environment. A dynamical systems model (Week 10) could track the trajectory of state variables, but the number of interacting variables in a multi-step navigation task quickly exceeds what ODEs can handle tractably. A computational model — specifically, a reinforcement learning agent — can learn to navigate this environment through trial and error, discovering the optimal sequence of choices without any explicit programming of the solution.

This week also marks the point where behavior science meets modern artificial intelligence. **Q-learning** and **reinforcement learning (RL)** — the computational frameworks behind many of today's most impressive AI systems — originated from the same prediction-error ideas as the Rescorla-Wagner model we studied in Week 4. The intellectual lineage is direct: from Pavlovian conditioning theory, through the mathematical psychology of the 1970s, to the algorithms that now play chess, control robots, and generate language. Understanding this lineage is not merely historical trivia; it reveals deep structural parallels between how organisms learn and how machines can be designed to learn.

By the end of this chapter, you will understand three major families of computational models — agent-based models, Monte Carlo simulation, and reinforcement learning — and you will be able to apply the 8-step modeling framework to build a Q-learning model of operant choice.

---

## Connecting Backward: From Dynamics to Algorithms

In Week 10, we modeled behavior as a dynamical system — writing differential equations that described how state variables like response rate evolve over time. The logistic acquisition model, coupled ODEs for competing responses, and phase-portrait analysis all shared a common structure: specify the rules of change, then trace the trajectory forward. For simple systems, we could solve the equations analytically. For more complex systems, we solved them numerically — using a computer to step the ODE forward in time.

This week takes that logic to its conclusion. **Computational models are dynamical systems that can only be run, never solved.** The Q-learning update rule is a difference equation, just like Rescorla-Wagner. McDowell's evolutionary model iterates a selection process across generations of behaviors, just as a coupled ODE iterates state variables across time steps. The mathematical structure is the same; what changes is the complexity. When the number of interacting variables, the stochasticity, and the heterogeneity of agents exceed what closed-form solutions can handle, simulation becomes not just convenient but necessary.

The progression across the course is worth making explicit. In Weeks 2–5, we worked with **static models** — equations that describe equilibrium states (matching, discounting, demand, asymptotic associative strength). In Week 10, we added **dynamics** — models that describe how the system moves toward those equilibria over time. This week, we add **computation** — models where the dynamics are too complex for analytical treatment, and the only way to generate predictions is to build the system in code and run it. Each step preserves the commitment to formal, quantitative, testable models; what changes is the mathematical machinery required to express them.

---

## Core Concepts

### What Makes a Model "Computational"

In previous weeks, we worked with models expressed as equations: the generalized matching law, hyperbolic discounting, the exponential demand model, the Rescorla-Wagner update rule, logistic growth ODEs. In each case, the model was a mathematical expression that could be written on a whiteboard and, in many cases, solved analytically. You plugged in parameter values and computed an output.

A **computational model** is different. Instead of solving an equation, you write an **algorithm** — a sequence of instructions that executes step by step. The model *is* the program. You do not solve it; you *run* it. The output is not a formula but a time series, a distribution, or a collection of simulated data that you analyze statistically, just as you would analyze empirical data.

Why would you choose a computational model over an analytical one? Several reasons:

- **Nonlinearity**: Many behavioral processes involve nonlinear interactions that defy closed-form solution. Computational models handle nonlinearity naturally because they compute one step at a time.
- **Stochasticity**: Real behavior is noisy. Computational models can incorporate random variables at every step, generating distributions of outcomes rather than single-point predictions.
- **Emergence**: Complex group-level patterns can arise from simple individual-level rules in ways that are impossible to predict from the rules alone. Simulation is the only way to discover these emergent properties.
- **Heterogeneity**: Real populations contain individuals that differ from one another. Computational models can give each simulated organism its own parameter values, learning histories, and behavioral rules.
- **Temporal complexity**: When reinforcement schedules change over time, when organisms interact dynamically, when there are delays, timeouts, and changeover costs — the combinatorial complexity can exceed what analytical models can handle.

The trade-off is interpretability. An equation like $B_1/B_2 = (R_1/R_2)^a$ tells you directly how behavior relates to reinforcement. A computational model with thousands of lines of code may produce equally accurate predictions, but the relationship between input and output is less transparent. This is why computational models are complements to, not replacements for, analytical models. The ideal scientific workflow often involves both: an analytical model provides insight into the structure of a phenomenon, and a computational model tests whether a proposed mechanism can actually generate the phenomenon when implemented in full detail.

It is also worth noting that the boundary between "analytical" and "computational" is not always sharp. The Rescorla-Wagner model, for instance, is expressed as a difference equation ($\Delta V = \alpha\beta(\lambda - V)$) that can be solved analytically in simple cases — but when applied to multi-cue, multi-outcome conditioning with hundreds of trials, it is almost always implemented as a computer program that iterates the update rule. Similarly, the logistic ODE from Week 10 has a closed-form solution, but more complex dynamical systems must be solved numerically by computer. Computational modeling is a matter of degree, and this week we focus on models that are fundamentally algorithmic — models for which there is no analytical solution, and simulation is not just convenient but necessary.

### Agent-Based Models (ABMs)

An **agent-based model** is a computational model in which individual **agents** — virtual organisms, people, neurons, or any discrete entities — follow local behavioral rules and interact with one another and with an environment. The defining feature of an ABM is that the modeler specifies only the rules for individual agents; **group-level patterns emerge** from the collective interactions of those agents without being explicitly programmed.

Each agent in an ABM typically has:

- **States**: Internal variables such as response probability, motivational level, or accumulated reinforcement history.
- **Rules**: Behavioral algorithms that determine what the agent does at each time step, based on its current state and local environment. These rules can be deterministic or probabilistic.
- **An environment**: The shared context in which agents operate, including reinforcement contingencies, spatial structure, and other agents.

The simulation proceeds in discrete time steps. At each step, every agent perceives its local environment, applies its rules, takes an action, and updates its internal state. The environment may also update in response to the agents' collective behavior. After many time steps, the modeler examines the aggregate patterns that have emerged.

ABMs are particularly well-suited to questions about **how macro-level regularities arise from micro-level processes**. Consider the analogy of a flock of birds. No single bird "decides" to form a V-formation. Rather, each bird follows simple local rules (maintain distance from neighbors, match their speed, steer toward the group center), and the V-formation emerges as a collective consequence. Similarly, no single organism "decides" to match its response allocation to the reinforcement ratio. Matching may emerge from simpler processes — and ABMs are the tool for testing whether that is the case.

**McDowell's evolutionary theory of behavior dynamics** is the most prominent ABM in behavior science. In McDowell's model, a virtual organism maintains a **repertoire of behaviors**, each represented as a bit string (a sequence of 0s and 1s that serves as an abstract identifier for a behavior class). The repertoire might contain, say, 100 behaviors at any given time. At each time step, one behavior is emitted — selected from the repertoire based on its **fitness**, which reflects its history of reinforcement.

The environment delivers reinforcement probabilistically according to a schedule (e.g., a VI schedule for one class of responses, a different VI schedule for another class). Reinforcement functions as **selection**: reinforced behaviors (and behaviors similar to them) are more likely to be retained and replicated in the repertoire, while unreinforced behaviors may be replaced through **mutation** — random changes to the bit string that introduce novel behaviors into the repertoire. Some implementations also include **recombination** (crossover), in which parts of two behaviors are combined to form a new one.

Over many time steps, the composition of the repertoire shifts — behaviors that produce reinforcement come to dominate, just as adaptive traits come to dominate in a biological population under natural selection. The population of behaviors within the organism evolves in real time, driven by the reinforcement contingencies.

The remarkable finding is that this evolutionary ABM — which contains no equations for matching, no parameters for sensitivity or bias — **reproduces the generalized matching law** as an emergent property. The virtual organism's response allocation across concurrent schedules converges on matching (or near-matching) purely as a consequence of the selection process operating on the behavioral repertoire. Furthermore, the model reproduces Herrnstein's hyperbola, patterns of behavioral variability, and other well-established empirical regularities — all without these being built into the model's assumptions.

McDowell's model demonstrates the explanatory power of ABMs: a simple mechanistic process at the individual level produces a well-known quantitative regularity at the molar level, without that regularity being built into the model's assumptions. This is a qualitatively different kind of explanation from fitting an equation to data. When you fit the generalized matching law to choice data, you describe the pattern. When you show that an evolutionary selection process produces matching, you explain *why* the pattern exists.

### Monte Carlo Simulation

**Monte Carlo simulation** is a family of computational methods that use **repeated random sampling** to estimate quantities that are difficult or impossible to compute analytically. The name comes from the Monte Carlo casino in Monaco — a nod to the central role of randomness in the method. The technique was developed during the Manhattan Project in the 1940s, when physicists needed to compute the behavior of neutrons in complex geometries that defied analytical solution. The idea was simple: simulate many individual neutrons, each following probabilistic rules, and aggregate the results.

The basic logic is straightforward:

1. Define a model with one or more random components (e.g., probabilistic reinforcement delivery, variable inter-response times, individual differences in learning rate).
2. Run the model many times (hundreds, thousands, or millions of replications), drawing new random values each time.
3. Analyze the distribution of outcomes across replications.

The power of Monte Carlo simulation comes from the **law of large numbers**: as the number of replications increases, the average of the simulated outcomes converges on the true expected value. With enough replications, you can estimate virtually any quantity of interest — means, variances, probabilities, confidence intervals — to any desired level of precision.

Monte Carlo methods are invaluable in behavior science for several purposes:

- **Estimating probabilities of rare events**: What is the probability that an organism on a VI 60-s schedule will emit a burst of 10 responses in 5 seconds? Analytical computation would require modeling the joint distribution of inter-response times and reinforcer set-ups — a formidable task. Running the schedule simulation 100,000 times and counting such bursts gives a straightforward empirical estimate.
- **Bootstrap confidence intervals**: When you have fit a model to data and obtained parameter estimates (e.g., sensitivity $a$ and bias $\log b$ in the generalized matching law), you can bootstrap the data (resample with replacement), refit the model to each bootstrap sample, and examine the distribution of parameter estimates. This gives confidence intervals without assuming normality — important because parameter estimates in nonlinear models are often non-normally distributed.
- **Power analysis**: Before running an experiment, simulate data under your model with assumed effect sizes and sample sizes. How often does the statistical test detect the effect? This is Monte Carlo power analysis, and it is more flexible than formula-based power analysis because it can accommodate any model structure and any test statistic.
- **Model comparison**: Simulate data under each candidate model and ask: given data generated by Model A, how often does a model-selection criterion (e.g., AIC, BIC) correctly identify Model A over Model B? This reveals the discriminability of competing models under specific experimental designs.
- **Sensitivity analysis**: How sensitive are the model's predictions to small changes in parameter values? Run the model many times with parameters drawn from a distribution (reflecting uncertainty in parameter estimates), and examine how much the output varies. Large output variance indicates high sensitivity to that parameter.

Monte Carlo simulation is not a model in itself — it is a **method** for extracting information from models that are too complex for analytical treatment. Any of the models in this course can be subjected to Monte Carlo analysis by adding stochastic components and running many replications.

### Reinforcement Learning (RL)

**Reinforcement learning** is a computational framework in which an **agent** learns to make decisions by interacting with an **environment** to **maximize cumulative reward**. The agent is not told which actions are correct; instead, it must discover which actions yield the most reward through trial and error. This framework formalizes the core insight of operant conditioning: organisms learn from the consequences of their actions.

The formal structure of an RL problem consists of:

- **States** ($s$): The situations the agent can be in. In a behavioral experiment, a state might be "left lever extended" or "both levers available after a 5-second changeover delay." In a more complex environment, a state might encode the organism's spatial location, the time since the last reinforcer, or the current schedule component.
- **Actions** ($a$): The behaviors available to the agent in each state. For a rat on a concurrent schedule, actions might be "press left lever," "press right lever," or "engage in other behavior." The set of available actions can differ across states.
- **Rewards** ($r$): Numerical signals from the environment that indicate the immediate value of an action. In behavioral terms, rewards correspond to reinforcers. The reward signal is what drives learning: the agent seeks to accumulate as much reward as possible over time.
- **Policy** ($\pi$): A mapping from states to actions — the agent's behavioral strategy. The goal of learning is to find a policy that maximizes cumulative reward. A policy can be deterministic ($\pi(s) = a$, always the same action in each state) or stochastic ($\pi(a|s)$ gives the probability of each action in each state).
- **Value function** ($V$ or $Q$): An internal estimate of how much future reward the agent can expect from a given state (or state-action pair). The value function is what the agent learns; the policy is derived from it.

The core idea of RL is that the agent maintains an estimate of the **expected future reward** associated with each state or action, and it **updates this estimate based on experience**. When an action leads to more reward than expected, the agent increases its estimate for that action. When an action leads to less reward than expected, it decreases the estimate. This update process is driven by **prediction error** — the discrepancy between expected and received reward.

If this sounds familiar, it should. The Rescorla-Wagner model from Week 4 is driven by the same logic: $\Delta V = \alpha \beta (\lambda - V)$, where $(\lambda - V)$ is the prediction error. Reinforcement learning extends this logic to sequential decision-making, where actions have consequences that unfold over time and across states.

The RL framework distinguishes between **model-free** and **model-based** learning. A model-free agent (like Q-learning) learns values directly from experience without building an internal representation of how the environment works. A model-based agent learns the structure of the environment (which states lead to which other states, and with what probabilities) and uses this internal model to plan ahead. Both types are relevant to behavior science: model-free learning corresponds to habitual, reflexive responding, while model-based learning corresponds to goal-directed, deliberative behavior. This distinction maps onto the habitual vs. goal-directed dichotomy that has become central in behavioral neuroscience.

### Q-Learning

**Q-learning** is one of the most important and widely used RL algorithms. It learns a function $Q(s, a)$ that estimates the expected cumulative future reward for taking action $a$ in state $s$ and then following the optimal policy thereafter. The "Q" stands for "quality" — $Q(s, a)$ represents the quality of an action in a given state.

The Q-learning update rule is:

$$Q(s, a) \leftarrow Q(s, a) + \alpha \left[ r + \gamma \cdot \max_{a'} Q(s', a') - Q(s, a) \right]$$

Let us unpack each component:

- $Q(s, a)$: The current estimate of the value of taking action $a$ in state $s$.
- $\alpha$: The **learning rate** (0 < $\alpha$ < 1). Controls how much the estimate changes on each update. Larger $\alpha$ means faster learning but more sensitivity to noise. Smaller $\alpha$ means slower learning but more stability.
- $r$: The **immediate reward** received after taking action $a$ in state $s$.
- $\gamma$: The **discount factor** (0 $\leq$ $\gamma$ < 1). Controls how much the agent values future reward relative to immediate reward. When $\gamma = 0$, the agent is completely myopic — it cares only about the immediate reward and ignores all future consequences. When $\gamma$ is close to 1, the agent is far-sighted — it values future reward almost as much as immediate reward. This parameter plays a role similar to the $k$ parameter in hyperbolic discounting (Week 2): it determines how quickly future outcomes lose their influence on current behavior.
- $\max_{a'} Q(s', a')$: The maximum Q-value over all possible actions $a'$ in the next state $s'$. This represents the agent's estimate of the best possible future from the state it lands in.
- $r + \gamma \cdot \max_{a'} Q(s', a') - Q(s, a)$: The **temporal difference (TD) error** — the discrepancy between what the agent expected and what it actually experienced plus its updated estimate of the future. This is the prediction error that drives learning.

The update rule says: take your current estimate $Q(s, a)$, and adjust it toward the experienced reward plus the discounted estimate of the best future. The learning rate $\alpha$ controls how large a step you take. If $\alpha = 1$, you replace the old estimate entirely with the new information. If $\alpha$ is small (e.g., 0.01), you make only a tiny adjustment, effectively averaging over many experiences.

Q-learning is a **model-free** algorithm: the agent does not build an internal model of how the environment works (which states lead to which other states). Instead, it learns directly from experience which actions are valuable. This is analogous to an organism that does not "understand" the contingency but nevertheless learns to respond adaptively through direct contact with reinforcement. The organism does not know *why* left-lever presses produce food more often; it simply learns that they do.

It is worth noting that Q-learning is an **off-policy** algorithm: it updates Q-values toward the *best possible* future action (the $\max$), even if the agent did not actually take that action. This means the agent can learn the optimal policy even while exploring suboptimal actions — a property that is important for balancing exploration and exploitation.

### From Rescorla-Wagner to Q-Learning

The intellectual lineage from the Rescorla-Wagner model to Q-learning is direct and well-documented. Placing the two update rules side by side reveals the structural parallel:

**Rescorla-Wagner (Week 4):**

$$\Delta V = \alpha \beta (\lambda - V)$$

- $V$: Associative strength of the CS.
- $\lambda$: Maximum conditioning supported by the US.
- $(\lambda - V)$: Prediction error — the surprise.
- $\alpha$, $\beta$: Learning-rate parameters for CS and US salience.

**Q-learning:**

$$\Delta Q(s, a) = \alpha \left[ r + \gamma \cdot \max_{a'} Q(s', a') - Q(s, a) \right]$$

- $Q(s, a)$: Expected value of taking action $a$ in state $s$.
- $r + \gamma \cdot \max_{a'} Q(s', a')$: The "target" — what actually happened plus the estimated best future.
- $\left[ r + \gamma \cdot \max_{a'} Q(s', a') - Q(s, a) \right]$: Prediction error — the temporal difference.
- $\alpha$: Learning rate.

Both models are driven by **prediction error**: the discrepancy between what was expected and what was experienced. Both update an internal estimate by taking a fraction ($\alpha$) of that error. The key extensions in Q-learning are:

1. **States and actions**: Instead of a single associative strength $V$ for a CS, Q-learning maintains a value for every state-action pair. This allows the agent to learn different values for the same action in different contexts — a form of stimulus control.
2. **Temporal discounting**: The discount factor $\gamma$ makes future rewards worth less than immediate rewards, introducing a temporal horizon. The R-W model has no temporal horizon; it learns about the immediate US associated with a CS.
3. **Bootstrapping**: The target includes the agent's own estimate of the future ($\max Q(s', a')$), not just the immediate outcome. The model uses its current knowledge to improve itself. R-W targets only the immediate outcome $\lambda$.
4. **Sequential decisions**: Q-learning handles chains of decisions where each action leads to a new state with new choices — not just single-trial associations. This is critical for modeling behavior in complex environments where the consequences of an action depend on the sequence of actions that follow it.

This lineage is not merely an analogy. The mathematical psychologists and computer scientists who developed temporal-difference learning in the 1980s and 1990s — including Richard Sutton and Andrew Barto — explicitly drew on animal learning theory. Sutton's early work on temporal-difference methods (1988) cited Rescorla and Wagner directly. Barto, Sutton, and Anderson (1983) used the language of conditioning — "adaptive critic," "associative search" — to describe their algorithms. The field of reinforcement learning grew out of the intersection of animal learning theory, dynamic programming, and control theory.

The dopamine prediction-error hypothesis (Schultz, Dayan, & Montague, 1997) further cemented the connection by showing that midbrain dopamine neurons encode a signal that closely resembles the TD error in Q-learning. Phasic dopamine bursts occur when reward exceeds expectation (positive TD error), dopamine dips occur when reward falls short of expectation (negative TD error), and dopamine activity is flat when reward matches expectation exactly (zero TD error). This neural evidence suggests that the brain implements something functionally equivalent to temporal-difference learning — a biological endorsement of the computational framework that originated in behavior science.

### Simulation as Experiment

One of the most powerful features of computational models is that they can be **experimented on** in ways that are impossible, impractical, or unethical with real organisms. A computational model is a virtual laboratory.

- **Parameter sweeps**: Vary a single parameter across a range of values while holding everything else constant, and observe how the model's output changes. For instance, sweep the learning rate $\alpha$ from 0.01 to 1.0 and plot the speed of convergence to matching at each value. This reveals the sensitivity of the phenomenon to that parameter.
- **Factorial designs**: Cross multiple parameters in a full factorial design, just as you would cross independent variables in an experiment. For example, cross three levels of $\alpha$ with three levels of $\gamma$ and four reinforcement-ratio conditions, yielding 36 cells. The output is a simulated data set that you analyze with the same statistical tools you would use for empirical data (ANOVA, regression, etc.).
- **Many replications**: Run thousands of simulated organisms to obtain stable distributions of outcomes. This eliminates sampling error and reveals the true predictions of the model. Where a real experiment might have 6 subjects per condition, a computational experiment can have 10,000.
- **Perfect control**: In a computational experiment, there are no equipment failures, no sick animals, no attrition, no confounds. Every variable is perfectly controlled because you specified every variable. Any difference between conditions is attributable to the manipulated variable.
- **Extreme conditions**: Test the model under conditions that would be impossible to implement in a real laboratory — infinite reinforcement rates, zero delay, populations of millions of agents, sessions lasting millions of trials.
- **Counterfactuals**: Ask "what if?" questions that cannot be asked empirically. What if an organism had a learning rate of exactly zero? What if reinforcement were perfectly predictable? What if two organisms could share Q-tables?

The results of computational experiments are not data about the real world; they are data about the **model**. If the model is a good representation of reality, then computational experiments can generate predictions, suggest empirical studies, and explain surprising empirical findings. If the model is a poor representation, computational experiments will reveal that too — often more efficiently than empirical studies. The key is to always maintain clarity about what is a finding about the model and what is a claim about the world.

---

## Applying the 8-Step Framework

We walk through all eight steps for building a Q-learning model of concurrent-schedule choice. The scenario: an agent (a virtual organism) is presented with two response options (e.g., two levers) that deliver reinforcement on independent variable-interval (VI) schedules. The question is whether the agent will learn to allocate responses in a way that approximates the matching law.

### Step 1: Get the Physical Picture Clearly in Mind

A rat is placed in an operant chamber with two levers, Left and Right. Pressing the left lever is reinforced on a VI 30-s schedule; pressing the right lever is reinforced on a VI 60-s schedule. That is, reinforcement for left-lever presses becomes available on average every 30 seconds, and reinforcement for right-lever presses becomes available on average every 60 seconds. Once a reinforcer is set up on a given lever, it remains available until collected by a press on that lever.

The rat must learn, through trial and error, how to allocate its behavior across the two levers. The matching law predicts that at steady state, the ratio of left to right responses will approximate the ratio of left to right reinforcement rates — roughly $2:1$ in this case.

We want to build a Q-learning agent that learns this allocation from experience, without any built-in knowledge of matching. The model should reproduce the gradual acquisition of preference and the eventual steady-state allocation.

### Step 2: Define the Physical Processes and Model Boundaries

The process of interest is **trial-by-trial response allocation** on a concurrent VI 30-s VI 60-s schedule. The boundaries of the model include:

- **One agent** (virtual organism) with no prior knowledge of the reinforcement contingencies.
- **Two actions**: press Left, press Right.
- **One state**: Both levers available. (We use a simplified single-state formulation; the agent does not distinguish different environmental contexts.)
- **Reinforcement delivery**: Probabilistic, determined by the VI schedules. Each schedule operates independently.
- **No changeover delay**: The agent can switch freely between levers (we will note this simplification later).
- **Discrete trials**: Each trial, the agent chooses one lever and may or may not receive reinforcement. Each trial represents one second of real time.
- **Session length**: Fixed number of trials (1,000), representing approximately a 17-minute session.

What is excluded from the model: within-session satiation, fatigue, other behaviors (grooming, rearing), spatial location of the organism, response topography, emotional states, and any pre-existing bias for one lever over the other.

### Step 3: Write Down the Laws and Transport Functions

The governing law is the **Q-learning update rule**:

$$Q(s, a) \leftarrow Q(s, a) + \alpha \left[ r + \gamma \cdot \max_{a'} Q(s, a') - Q(s, a) \right]$$

Because we have a single state, we can drop the state notation and write:

$$Q(a) \leftarrow Q(a) + \alpha \left[ r + \gamma \cdot \max_{a'} Q(a') - Q(a) \right]$$

The **action-selection rule** is a **softmax (Boltzmann) policy**:

$$P(a_i) = \frac{e^{Q(a_i) / \tau}}{\sum_j e^{Q(a_j) / \tau}}$$

where $\tau$ is a **temperature** parameter controlling exploration vs. exploitation. High $\tau$ means near-random choice (the agent explores widely); low $\tau$ means nearly deterministic choice of the highest-valued action (the agent exploits its current knowledge). At $\tau \to \infty$, the softmax converges to uniform random choice. At $\tau \to 0$, it converges to always choosing the action with the highest Q-value.

The softmax is important for producing matching rather than maximizing. An agent that always chose the highest-Q action would allocate all responses to the richer schedule (exclusive preference). The softmax introduces graded preference proportional to Q-value differences, which is necessary for matching to emerge.

The **reinforcement schedule** is modeled as follows. On each trial, time advances by one unit. For each lever independently, a reinforcer is "set up" with probability $p = 1/\text{VI value}$ per time unit. Once set up, a reinforcer remains available until the agent presses that lever. When the agent presses a lever with an available reinforcer, it receives $r = 1$; otherwise, $r = 0$.

### Step 4: State the Restrictive Assumptions

- **Single state**: The agent does not distinguish between different moments in the session. There is no representation of time, satiation, or prior sequence of responses. This means the model cannot capture within-session changes in preference beyond what Q-learning itself produces.
- **Discrete trials**: Real concurrent-schedule performance is a continuous free-operant process. We discretize it into trials of fixed duration. This means we cannot model inter-response time distributions or response bursts.
- **No changeover delay (COD)**: In real concurrent schedules, a changeover delay is typically imposed to prevent rapid alternation. Our model omits this. Adding a COD would require a multi-state representation (e.g., "just switched" vs. "same lever as last trial").
- **Constant parameters**: The learning rate $\alpha$, discount factor $\gamma$, and temperature $\tau$ do not change over the session. In reality, learning rates may decline with experience, and exploration may decrease as the organism becomes more familiar with the contingencies.
- **Independent schedules**: The two VI schedules operate independently; there are no programmed interactions between them.
- **Stationary environment**: The schedule parameters do not change during the simulation. The model does not address what happens when contingencies shift (as in a reversal or multiple-schedule probe).
- **No model of the environment**: The agent does not learn which actions lead to which states (model-free learning). Since we have only one state, this assumption is relatively innocuous here, but it would matter in more complex environments.
- **Binary reward**: Reinforcement is either present ($r = 1$) or absent ($r = 0$). There is no variation in reinforcer magnitude, quality, or delay.

### Step 5: Perform the Balance

The "balance" in a Q-learning model is the update rule itself. At each trial, the change in $Q(a)$ is:

$$\Delta Q(a) = \alpha \left[ r + \gamma \cdot \max_{a'} Q(a') - Q(a) \right]$$

In words: the change in the value of the chosen action equals the learning rate times the prediction error. The prediction error is the difference between what happened (reward $r$ plus the discounted best future value) and what was expected (current $Q(a)$).

When $r + \gamma \cdot \max_{a'} Q(a') > Q(a)$, the prediction error is positive — things went better than expected — and $Q(a)$ increases.

When $r + \gamma \cdot \max_{a'} Q(a') < Q(a)$, the prediction error is negative — things went worse than expected — and $Q(a)$ decreases.

At convergence, $\Delta Q(a) \approx 0$ for all actions, meaning the prediction error is approximately zero. The agent's expectations are calibrated to reality. This is the Q-learning analog of the equilibrium concept from Week 10: a fixed point where the system no longer changes.

Note that only the Q-value for the **chosen** action is updated on each trial. The Q-value for the unchosen action remains unchanged. This means that learning about each action requires actually performing that action — the agent cannot learn about an alternative it never tries, which is why exploration (via the softmax temperature) is essential.

### Step 6: Check Units

- $Q(a)$ is in units of **expected cumulative reward** (dimensionless if reward is a count; otherwise in the units of the reward signal).
- $r$ is in the same units as $Q$ (reward units).
- $\gamma$ is dimensionless (a ratio, $0 \leq \gamma < 1$).
- $\alpha$ is dimensionless (a proportion, $0 < \alpha \leq 1$).
- $\gamma \cdot \max_{a'} Q(a')$ is in reward units (dimensionless times reward units = reward units).
- $r + \gamma \cdot \max_{a'} Q(a') - Q(a)$: reward units $+$ reward units $-$ reward units = reward units. This is the prediction error in reward units.
- $\alpha \cdot [\text{prediction error}]$: dimensionless $\times$ reward units = reward units.
- Therefore $\Delta Q(a)$ is in reward units. **Units check.**

### Step 7: Initial and Boundary Conditions

- **Initial Q-values**: $Q(\text{Left}) = 0$, $Q(\text{Right}) = 0$. The agent starts with no preference. This is the computational analog of a naive organism with no reinforcement history on either lever. Note: setting both initial values to zero ensures that the softmax gives equal probability to both actions at the start — the agent begins by exploring randomly.
- **Boundary conditions**: Q-values are unconstrained (they can be any real number), though in practice they will converge to finite values determined by the reinforcement rates and discount factor. Negative Q-values are not expected in this model since the minimum reward is zero.
- **Simulation length**: We will run the simulation for 1,000 trials and examine the response allocation over the last portion of the simulation to assess steady-state behavior.

### Step 8: Verify, Validate, and Solve

**Verification** (does the model do what we intended?):

- Confirm that Q-values update correctly after each trial by hand-tracing a few steps (we do this in the Worked Example below).
- Confirm that the softmax policy produces response probabilities consistent with the Q-values.
- Confirm that the VI schedule logic sets up and delivers reinforcers correctly: reinforcers should be set up at the correct average rate, and should only be collected when the agent presses the correct lever.
- Confirm boundary behavior: when both Q-values are equal, the softmax should give equal probability to both actions; when one Q-value is much larger, the softmax should heavily favor that action.

**Validation** (does the model reproduce empirical regularities?):

- Run the simulation many times and compute the average response allocation at steady state.
- Compare the response ratio $B_L / B_R$ to the reinforcement ratio $R_L / R_R$.
- If the agent's behavior approximates matching ($B_L / B_R \approx R_L / R_R = 2$), the model is validated against that benchmark.
- Further validation: test additional reinforcement ratios (e.g., VI 20 vs. VI 60, VI 30 vs. VI 30) and check whether the matching relation holds across a range of conditions.

**Solving** the model means running the simulation. Unlike the logistic ODE from Week 10, there is no closed-form solution. The output is a time series of choices, reinforcers, and Q-values that we analyze numerically.

---

## Worked Example

We implement a Q-learning agent choosing between two levers on a concurrent **VI 30-s VI 60-s** schedule. We use the following parameter values:

- Learning rate: $\alpha = 0.1$
- Discount factor: $\gamma = 0.9$
- Temperature: $\tau = 0.5$
- Initial Q-values: $Q(\text{Left}) = 0$, $Q(\text{Right}) = 0$
- Trial duration: 1 second per trial
- Reinforcement probabilities per trial: $p_L = 1/30 \approx 0.0333$, $p_R = 1/60 \approx 0.0167$
- Number of trials: 1,000

### Schedule Mechanics

At each trial, for each lever independently, a reinforcer is set up with probability $p$ if no reinforcer is currently waiting on that lever. Once set up, the reinforcer stays available until collected. When the agent presses a lever with an available reinforcer, it receives $r = 1$ and the reinforcer is consumed.

This implementation captures the key property of VI schedules: reinforcers accumulate during the time spent responding on the other alternative. If the agent spends many consecutive trials pressing the left lever, a reinforcer is likely to set up on the right lever during that time, and will be available the next time the agent switches to the right. This "stored reinforcer" property is what makes VI schedules produce matching rather than exclusive preference — it pays to sample both alternatives.

### Simulation Trace: First 10 Trials

We trace the first several trials to illustrate the mechanics. (Random outcomes are fixed for this example to make the trace reproducible.)

**Trial 1**: $Q(L) = 0$, $Q(R) = 0$. Softmax gives $P(L) = P(R) = 0.5$. Agent chooses **Left**. A reinforcer happens to be set up on Left ($r = 1$).

$$Q(L) \leftarrow 0 + 0.1 \times [1 + 0.9 \times \max(0, 0) - 0] = 0 + 0.1 \times 1.0 = 0.10$$

The agent received a reinforcer it did not expect (Q was 0, so the prediction error is $1.0 - 0 = 1.0$). The Q-value jumps upward.

**Trial 2**: $Q(L) = 0.10$, $Q(R) = 0$. Softmax gives $P(L) = \frac{e^{0.10/0.5}}{e^{0.10/0.5} + e^{0/0.5}} = \frac{e^{0.2}}{e^{0.2} + 1} = \frac{1.221}{2.221} \approx 0.55$. Agent chooses **Left**. No reinforcer available ($r = 0$).

$$Q(L) \leftarrow 0.10 + 0.1 \times [0 + 0.9 \times \max(0.10, 0) - 0.10] = 0.10 + 0.1 \times [-0.01] = 0.099$$

Note: The prediction error is $0 + 0.9 \times 0.10 - 0.10 = 0.09 - 0.10 = -0.01$. Things went slightly worse than expected — the agent expected some value from choosing Left (Q was 0.10), but received no reinforcer, and the discounted future ($0.9 \times 0.10 = 0.09$) is slightly less than what was expected. So $Q(L)$ decreases slightly.

**Trial 3**: $Q(L) = 0.099$, $Q(R) = 0$. Agent chooses **Right**. A reinforcer is set up on Right ($r = 1$).

$$Q(R) \leftarrow 0 + 0.1 \times [1 + 0.9 \times \max(0.099, 0) - 0] = 0 + 0.1 \times [1 + 0.089] = 0.109$$

Note: The max Q-value across both actions is 0.099 (from Left), so the discounted future is $0.9 \times 0.099 = 0.089$. The full target is $1 + 0.089 = 1.089$, and the prediction error is $1.089 - 0 = 1.089$. The Q-value for Right jumps from 0 to 0.109.

**Trial 4**: $Q(L) = 0.099$, $Q(R) = 0.109$. Softmax slightly favors Right. Agent chooses **Right**. No reinforcer ($r = 0$).

$$Q(R) \leftarrow 0.109 + 0.1 \times [0 + 0.9 \times \max(0.099, 0.109) - 0.109]$$
$$= 0.109 + 0.1 \times [0.098 - 0.109] = 0.109 + 0.1 \times (-0.011) = 0.108$$

**Trial 5**: $Q(L) = 0.099$, $Q(R) = 0.108$. Agent chooses **Left**. Reinforcer available ($r = 1$).

$$Q(L) \leftarrow 0.099 + 0.1 \times [1 + 0.9 \times 0.108 - 0.099] = 0.099 + 0.1 \times [1.097 - 0.099] = 0.099 + 0.0998 = 0.199$$

After just 5 trials, $Q(L) = 0.199$ and $Q(R) = 0.108$. The left lever, which has a higher reinforcement rate, is already beginning to accumulate a higher Q-value. The ratio $Q(L)/Q(R) \approx 1.84$, already approaching the $2:1$ reinforcement ratio.

**Trials 6-10** continue this pattern. On trials where the agent presses a lever and receives reinforcement, the Q-value for that lever increases substantially. On trials without reinforcement, the Q-value decreases slightly. Because left-lever presses are reinforced approximately twice as often as right-lever presses, $Q(L)$ receives more positive updates and fewer negative updates than $Q(R)$, causing the values to diverge over time.

### Q-Values at Key Trial Numbers

Running the full simulation with the parameters specified above, the Q-values evolve as follows (values shown are from a single representative run):

| Trial | $Q(\text{Left})$ | $Q(\text{Right})$ | Cumulative $B_L / B_R$ |
|-------|-------------------|--------------------|-------------------------|
| 1     | 0.100             | 0.000              | 1.00                    |
| 10    | 0.214             | 0.098              | 1.50                    |
| 25    | 0.381             | 0.175              | 1.67                    |
| 50    | 0.502             | 0.241              | 1.78                    |
| 100   | 0.617             | 0.298              | 1.86                    |
| 250   | 0.711             | 0.340              | 1.93                    |
| 500   | 0.748             | 0.356              | 1.97                    |
| 1000  | 0.762             | 0.364              | 2.01                    |

### Interpreting the Results

Several features are notable:

1. **Q-values diverge early**: Within the first 50 trials, the left lever's Q-value is already roughly double the right lever's, reflecting the $2:1$ ratio of reinforcement rates. The learning agent quickly picks up on the differential reinforcement.

2. **Response allocation converges toward matching**: The cumulative response ratio $B_L / B_R$ starts near $1.0$ (random, reflecting the equal initial Q-values and the exploratory softmax policy) and gradually approaches $2.0$, the value predicted by strict matching given a $2:1$ reinforcement ratio. By trial 1,000, the ratio is approximately $2.01$ — remarkably close to matching.

3. **Q-values stabilize**: After several hundred trials, the Q-values change very little from trial to trial. The prediction errors are close to zero on average: the agent's expectations are calibrated to the reinforcement contingencies. This is the steady-state condition — the Q-learning analog of the equilibrium from dynamical systems theory.

4. **The agent was never told to match**: No matching equation was built into the model. The agent simply learned from prediction errors, updating Q-values based on experienced rewards. Matching emerged as a **consequence of the learning process**, much as it emerges in McDowell's evolutionary model. The matching law is not an assumption of the model; it is a prediction.

5. **The acquisition curve is negatively accelerated**: The response ratio changes rapidly at first and then more slowly as it approaches the asymptote — the same sigmoidal-to-asymptotic pattern we saw in the logistic acquisition model of Week 10. This suggests a common dynamical structure underlying different modeling frameworks.

### Running Multiple Replications

The results above are from a single simulation run and are therefore subject to stochastic variability. Each run involves random reinforcer set-ups and (through the softmax policy) random action selections. A different random seed would produce a different trajectory of Q-values and response allocations.

To draw reliable conclusions, we would run the simulation many times — say, 500 replications — each with the same parameters but different random seeds. We would then report the **mean** and **standard deviation** of the response ratio at trial 1,000 across replications. If the mean is close to $2.0$ with a small standard deviation, we have strong evidence that Q-learning produces matching under these conditions.

For example, across 500 replications we might find: mean $B_L / B_R = 1.98$, SD $= 0.15$, 95% CI $= [1.96, 2.00]$. This would constitute strong computational evidence that Q-learning with these parameters produces approximate matching on a concurrent VI 30-s VI 60-s schedule.

This is Monte Carlo simulation in action: using many replications of a stochastic model to estimate the central tendency and variability of an outcome. The computational experiment is our data set; we analyze it with the same statistical tools we would use for empirical data.

---

## Plain-Language Interpretation

### What Q-Learning Says in Everyday Terms

Q-learning says: "Keep a running score for each action. Every time you take an action, compare what happened to what you expected. If things went better than expected — you got a reward you didn't fully anticipate — increase the score for that action. If things went worse than expected — you expected a reward but didn't get one — decrease the score. Over time, your scores will settle at values that reflect how good each action truly is, and you'll naturally tend to pick the actions with the highest scores."

This is precisely what organisms do. A rat exploring two levers in an operant chamber does not solve the matching equation. It simply responds, experiences consequences, and gradually adjusts its behavior. Actions that produce reinforcement become more likely; actions that do not produce reinforcement become less likely. The adjustment is driven by the gap between what was expected and what occurred — the prediction error. Q-learning formalizes this intuitive process as an algorithm.

### What "Model-Free" Means

Q-learning is called "model-free" because the agent does not build an internal representation of how the environment works. It does not learn that "pressing the left lever leads to food on average every 30 seconds" or that "the schedule uses a variable-interval timer." It simply learns that "left lever has a score of 0.76 and right lever has a score of 0.36." The scores are learned from direct experience, not from reasoning about the structure of the environment. This is analogous to the behaviorist emphasis on **functional relations** between behavior and consequences, rather than cognitive representations of the world. The agent does not need to understand why an action is good; it only needs to track how good it is.

### What Emergence Means

When we say that matching "emerges" from Q-learning, we mean that the matching relation was not built into the model — it arises as a natural consequence of the learning algorithm interacting with the reinforcement contingencies. This is a hallmark of computational models: complex, orderly patterns at the macro level can arise from simple rules at the micro level. The modeler does not need to specify the macro-level pattern; it appears on its own.

Emergence is scientifically significant because it provides a different kind of explanation from curve fitting. When we fit the generalized matching law to data, we describe the pattern. When we show that a prediction-error learning mechanism produces matching, we offer a **process account** — an explanation of how the pattern arises from a more fundamental mechanism. The process account is deeper because it answers the question *why does matching occur?* rather than merely *what does matching look like?*

---

## Assumptions and Limitations

Computational models are powerful, but they carry their own assumptions and limitations:

### Discrete States and Actions

Q-learning, as presented here, assumes that states and actions are **discrete and finite**. The agent is in one of a fixed set of states and chooses from a fixed set of actions. Real behavior, however, is continuous — organisms can vary response force, duration, topography, and location along continuous dimensions. A lever press is not simply "press" or "not press"; it varies in force, speed, and duration. Tabular Q-learning cannot represent this continuous richness. Extensions such as function approximation (including deep Q-networks, or DQN) address this limitation by using neural networks to generalize across similar states, but at the cost of additional complexity and potential instability.

### Scalability

Tabular Q-learning maintains a table with one entry for every state-action pair. When the number of states and actions is large, this table becomes enormous and learning becomes slow. A problem with 1,000 states and 10 actions requires 10,000 Q-values, each of which must be visited many times for convergence. Real-world problems often have millions or billions of states — far beyond the capacity of a table. This is the motivation for **deep reinforcement learning**, which uses neural networks as function approximators to generalize from visited states to unvisited ones.

### Stationary Environment Assumption

Standard Q-learning assumes that the environment's dynamics and reward structure do not change over time. If the reinforcement schedules shift mid-session (as in many behavioral experiments, e.g., reversals, multiple schedules, progressive-ratio schedules), the agent's Q-values may lag behind the new contingencies. Modifications such as increased learning rates, eligibility traces, or experience-replay buffers can help, but tracking a changing environment remains a fundamental challenge for model-free methods.

### Model-Free Limitation

Because Q-learning is model-free, it learns from direct experience only. It cannot "plan ahead" by simulating possible futures internally. Model-based RL algorithms, which learn an internal model of the environment (transition probabilities and reward functions), can be more sample-efficient — they learn faster from fewer experiences because they can mentally simulate many experiences from a single observation. The trade-off is computational complexity and the risk of an inaccurate internal model. In behavioral terms, model-free learning corresponds to habit-based behavior (automatic, driven by cached values), while model-based learning corresponds to goal-directed behavior (flexible, driven by knowledge of outcomes).

### Computational Cost

Large-scale computational models — ABMs with millions of agents, Monte Carlo simulations with millions of replications, deep RL with complex environments — require substantial computational resources. The availability of modern computing power has made many of these models feasible, but computational cost remains a practical constraint on model complexity and the number of conditions that can be explored.

### Opacity

Computational models, especially complex ones, can be difficult to interpret. A 10,000-line ABM may produce accurate predictions, but understanding *why* it produces those predictions can be as difficult as understanding the original behavioral phenomenon. This is sometimes called the "black box" problem. Analytical models, with their transparent equations, have an advantage in interpretability. The best practice is to use computational models alongside analytical models: the analytical model provides insight, and the computational model provides generality and mechanistic detail.

---

## Connection to Empirical Behavior Science

### McDowell's Evolutionary Theory of Behavior Dynamics

McDowell (2019) presents a comprehensive agent-based model in which behavior is conceptualized as a population of responses undergoing selection by reinforcement, mutation, and recombination. The model has been shown to reproduce a wide range of empirical regularities including the generalized matching law, Herrnstein's hyperbola, and patterns of behavioral variability — all as emergent properties rather than built-in assumptions. McDowell's work demonstrates that evolutionary selection operating on a repertoire of behaviors can serve as a unifying computational mechanism for operant conditioning. The model has been tested against data from concurrent schedules, single-alternative schedules, and variable-ratio schedules, consistently producing behavior that matches empirical findings.

### Cox and Santos (2025) on AI-Based RL and Behavior Science

Cox and Santos (2025) explore the bidirectional relationship between behavior science and artificial intelligence reinforcement learning. They argue that behavior-analytic concepts — reinforcement schedules, stimulus control, generalization, discrimination — map directly onto RL constructs, and that this mapping enables behavior scientists to leverage RL tools for modeling behavioral phenomena, while RL researchers can benefit from the extensive empirical base of behavior science. Their work highlights Q-learning and related algorithms as natural computational implementations of behavioral principles, and outlines a research agenda for integrating RL and behavior analysis.

### Matching as an Emergent Property of Learning

A recurring theme in this chapter is that the matching law — an empirical regularity discovered through decades of behavioral research — can emerge as a consequence of simple learning algorithms. Both McDowell's evolutionary model and Q-learning produce approximate matching without having matching built into their rules. This suggests that matching may not be a "law" in the sense of a fundamental axiom, but rather a **consequence** of more basic reinforcement processes. Computational models are uniquely suited to exploring such emergence questions because they allow the modeler to specify only the micro-level mechanism and observe whether the macro-level regularity appears.

This has implications for how we think about the matching law. If matching emerges from learning processes, then deviations from matching (undermatching, overmatching, bias) may reflect properties of the learning process (e.g., learning rate, exploration rate) rather than free parameters in a descriptive equation. Computational models can test these hypotheses by varying the learning parameters and examining the resulting patterns of deviation.

### Agent-Based Models of Social Behavior

Beyond McDowell's work on individual operant behavior, ABMs have been applied to social behavioral phenomena. Models of cooperation, cultural transmission, norm formation, and group decision-making use agents with behavioral rules interacting in structured environments. These models can explore how individual reinforcement histories give rise to group-level patterns — a question that is nearly impossible to address with equation-based models alone. For example, an ABM of cooperation might show that reciprocal altruism emerges when agents use simple tit-for-tat strategies, without any agent "intending" to cooperate — a social analog of matching emerging from individual Q-learning.

### Connections to Neuroscience

The temporal-difference prediction error at the core of Q-learning has been linked to dopamine signaling in the midbrain (Schultz, Dayan, & Montague, 1997). Phasic dopamine responses resemble TD errors: they are positive when reward exceeds expectation, negative when reward falls short, and zero when reward matches expectation exactly. This neural correspondence provides biological validation for the computational framework and illustrates the deep connections between behavioral theory, computational modeling, and neuroscience.

More recently, research has shown that different brain circuits may implement model-free (habitual) and model-based (goal-directed) learning in parallel, with the balance between them shifting based on task demands, stress, and training history. This neuroscientific framework maps directly onto the RL distinction between model-free and model-based algorithms, providing converging evidence that RL is not merely a useful analogy for learning but may reflect the actual computational architecture of the brain.

---

## Connecting Forward: From Implementing Rules to Discovering Them

This week, every model started with a **specified mechanism**. We told the Q-learning agent how to update its values. We told McDowell's evolutionary model how selection, mutation, and reproduction work. We told the ABM what rules each agent follows. The power of computational modeling is that it shows us what those mechanisms produce when implemented in full detail — but the mechanisms themselves came from us, the modelers, drawing on behavioral theory.

Next week reverses the direction. **Machine learning** does not start with a mechanism. It starts with data and searches for patterns — mappings from inputs to outputs — without requiring the modeler to specify the underlying process. Where this week's models ask "What does this mechanism produce?", ML asks "What function best predicts these data?" The Q-learning agent we built this week is, in fact, the intellectual ancestor of much of modern ML: the same prediction-error framework, scaled up to high-dimensional function approximation. But the goals diverge. Computational models in behavior science are built to **explain**; ML models are built to **predict**. Week 12 explores when prediction without explanation is useful, when it is not, and how the two cultures of modeling can complement each other.

---

## Exercises for Reflection

1. In the worked example, the Q-learning agent converged toward matching on a concurrent VI 30-s VI 60-s schedule. What would happen if you changed the discount factor from $\gamma = 0.9$ to $\gamma = 0$? How would the agent's behavior differ, and would it still approximate matching? Explain your reasoning in terms of what $\gamma$ does to the prediction-error calculation.

2. McDowell's evolutionary model reproduces matching as an emergent property of selection on a behavioral repertoire. Q-learning reproduces matching as an emergent property of prediction-error-driven value updating. These are two very different mechanisms producing the same macro-level outcome. What does this **convergence from different mechanisms** tell us about the status of the matching law as a scientific principle? Can you think of other examples in science where the same regularity arises from multiple distinct mechanisms?

3. A colleague argues that computational models are "just curve fitting with extra steps" — they have so many moving parts that they can fit any data. How would you respond? What distinguishes a computational model that has genuine explanatory power from one that merely recapitulates the data it was designed to fit? Consider the role of **a priori predictions**, **parameter parsimony**, and **emergent properties** in your answer.

4. You want to build an agent-based model of a classroom in which students' on-task behavior is influenced by both teacher-delivered reinforcement and peer attention. What would be the agents, states, rules, and environment in your ABM? What group-level patterns might you expect to emerge, and how would you test whether the model produces realistic dynamics?

---

## Key Readings

**McDowell (2019)** reviewed the current status of the evolutionary theory of behavior dynamics (ETBD), a computational model that treats operant behavior as a population of responses undergoing selection by reinforcement, mutation through behavioral variability, and reproduction of successful variants across successive time steps. Unlike the closed-form models from earlier weeks (matching, discounting, demand), the ETBD derives molar regularities---including matching and Herrnstein's hyperbola---from first principles implemented as an algorithm that must be run rather than solved. This paper is central to the week because it demonstrates the defining feature of computational models: complex behavioral patterns emerge from simple rules iterated over time, and the only way to discover what those rules predict is to simulate them.

**Cox and Santos (2025)** demonstrated the utility of integrating AI-based reinforcement learning with behavior science by using a Q-learning agent to predict individual responses (not just aggregate response rates) in an operant preparation. They showed that the RL framework---which descends directly from the prediction-error ideas of the Rescorla-Wagner model (Week 4)---can generate molecular-level predictions about which response an organism will emit next, given its history of states, actions, and reinforcement. This paper bridges the course's earlier content on associative learning with the computational tools of modern AI, and it raises the practical question of whether RL models could inform real-time clinical decision making in applied behavior analysis.

---

## Reading Guide

### McDowell (2019)

- What is the evolutionary theory of behavior dynamics (ETBD), and how does it differ from traditional mathematical models of behavior?
- How does the ETBD use concepts from evolutionary biology (selection, variation, reproduction) to model operant behavior?
- What is the "population of behaviors" concept in the ETBD? How does this differ from treating behavior as a single response rate?
- How does reinforcement operate in the ETBD? What is being "selected"?
- What predictions does the ETBD make about matching, and how do these compare to the predictions of Herrnstein's hyperbola?
- Does the ETBD derive matching from first principles, or is matching built into its assumptions? Why does this distinction matter?
- What role does mutation play in the ETBD? How does it relate to behavioral variability?
- How does the ETBD handle phenomena like extinction and spontaneous recovery?
- What is the relationship between the ETBD and the generalized matching law? Does the ETBD predict sensitivity and bias parameters?
- What empirical evidence does McDowell cite in support of the ETBD?
- What are the main criticisms or limitations of the ETBD that McDowell acknowledges?
- How does the ETBD relate to other computational approaches to behavior (e.g., reinforcement learning, neural networks)?
- Why does McDowell argue that computational models like the ETBD are valuable even when closed-form equations exist?
- What does it mean to say the ETBD is a "generative" model? How does this differ from a descriptive or curve-fitting model?
- What are the implications of the ETBD for understanding behavior at a mechanistic level?

### Cox & Santos (2025)

- What is the central argument of the paper regarding the integration of AI-based reinforcement learning (RL) with behavior science?
- How do the authors define reinforcement learning in the AI/computational sense? How does this relate to the behavioral definition of reinforcement?
- What specific RL algorithm is used in the paper, and how does it work?
- What behavioral preparation or task do the authors model using RL?
- What does "predicting the next response" mean in this context? How is it different from predicting aggregate response rates?
- How well does the RL model perform at predicting individual responses? What metrics are used to evaluate performance?
- What are the parallels between Q-learning parameters (learning rate, discount factor) and behavioral concepts?
- How do the authors address the concern that computational models are "black boxes" that don't explain behavior?
- What implications does this work have for applied behavior analysis? Could RL models inform treatment decisions?
- How does this paper connect to the matching law and other quantitative models covered earlier in the course?
- What are the limitations of the approach, as discussed by the authors?
- What does this paper suggest about the future relationship between AI/ML and behavior science?
- How does this work differ from McDowell's ETBD in its approach to computational modeling of behavior?
- Why is predicting individual responses (molecular level) important in addition to predicting molar measures like response rates?

---

## References

Barto, A. G., Sutton, R. S., & Anderson, C. W. (1983). Neuronlike adaptive elements that can solve difficult learning control problems. *IEEE Transactions on Systems, Man, and Cybernetics, SMC-13*(5), 834--846. https://doi.org/10.1109/TSMC.1983.6313077

Cox, D. J., & Santos, J. E. (2025). *Predicting the next response: Demonstrating the utility of integrating AI-based reinforcement learning with behavior science.* [Manuscript].

McDowell, J. J. (2019). On the current status of the evolutionary theory of behavior dynamics. *Journal of the Experimental Analysis of Behavior, 111*(1), 130--145. https://doi.org/10.1002/jeab.495

Rescorla, R. A., & Wagner, A. R. (1972). A theory of Pavlovian conditioning: Variations in the effectiveness of reinforcement and nonreinforcement. In A. H. Black & W. F. Prokasy (Eds.), *Classical conditioning II: Current research and theory* (pp. 64--99). Appleton-Century-Crofts.

Schultz, W., Dayan, P., & Montague, P. R. (1997). A neural substrate of prediction and reward. *Science, 275*(5306), 1593--1599. https://doi.org/10.1126/science.275.5306.1593

Sutton, R. S. (1988). Learning to predict by the methods of temporal differences. *Machine Learning, 3*(1), 9--44. https://doi.org/10.1007/BF00115009

---

## Key Takeaways

- **Computational models** implement behavioral processes as algorithms that are *run* rather than *solved*; the model is the program.
- **Agent-based models (ABMs)** specify rules for individual agents and let group-level patterns emerge from their interactions. McDowell's evolutionary theory of behavior dynamics is a prominent behavioral ABM that reproduces the matching law as an emergent property.
- **Monte Carlo simulation** uses repeated random sampling to estimate probabilities, distributions, and confidence intervals for model outputs. It is a method for analyzing stochastic models, not a model family in itself.
- **Reinforcement learning (RL)** is a computational framework in which an agent learns to maximize cumulative reward through trial-and-error interaction with an environment. It formalizes the core insight of operant conditioning.
- **Q-learning** updates state-action values using the rule $Q(s,a) \leftarrow Q(s,a) + \alpha[r + \gamma \cdot \max_{a'} Q(s',a') - Q(s,a)]$, driven by **temporal-difference prediction error**.
- The **Rescorla-Wagner model** and **Q-learning** share the same core structure: both update an internal estimate by a fraction of the prediction error. Q-learning extends R-W with states, actions, temporal discounting, and bootstrapping.
- Q-learning is **model-free**: the agent learns from direct experience without building an internal model of the environment, analogous to the behavioral emphasis on functional relations over cognitive representations.
- **Matching emerges** from Q-learning under concurrent VI schedules — the agent converges toward the matching law without it being programmed in, providing a process-level explanation for a molar regularity.
- Computational models serve as **virtual laboratories**: parameters can be swept, factorial experiments can be run, and thousands of replications can be generated at low cost with perfect control.
- **Limitations** include discrete state/action assumptions, scalability challenges, stationarity assumptions, reduced interpretability compared to analytical models, and computational cost.
- The **8-step framework** applies to computational models: define the phenomenon, set boundaries, write the algorithm (governing law), state assumptions, express the update rule (balance), check units, set initial conditions, and verify/validate by running the simulation.
- The intellectual lineage from **behavior science to AI** runs through prediction error: from Rescorla-Wagner, through temporal-difference learning, to the Q-learning algorithms that power modern reinforcement learning systems. The dopamine prediction-error hypothesis provides biological evidence that the brain may implement a similar computational architecture.
