---
title: "The 8-Step Modeling Framework"
---

## Introduction

The backbone of this course is an 8-step modeling framework adapted from engineering and the physical sciences. In those fields, a similar framework guides the construction of models for heat transfer, fluid dynamics, chemical reactions, and similar physical processes. The logic, however, is entirely general. Any phenomenon that can be described formally, including behavioral phenomena, can be modeled using this general approach.

It's important to note that the framework is not a rigid recipe to be followed once and discarded. Rather, it is a disciplined decision-making guide. Each step forces the modeler to make a decision, and each decision is recorded so that others can evaluate it. The result is a model-making process that is transparent, testable, and improvable.

Below, each step is presented first in its original engineering and physical sciences language and then translated into behavior-science terms, followed by a definition, explanation of why it matters, a behavioral example, and common mistakes.

## The Translation Table

| Step | Engineering / Physics Language | Behavior-Science Language |
|------|-------------------------------|--------------------------|
| 1 | Get the physical picture clearly in mind | Identify all environmental and behavioral components of the behavioral phenomenon |
| 2 | Define the physical processes and boundaries | Define the behavioral principles, processes, and intended scope of the model |
| 3 | Write down the laws and transport functions | Write down the behavioral principles, known quantitative laws, and functional relationships |
| 4 | State the restrictive assumptions | State all simplifying assumptions explicitly |
| 5 | Perform the balance in words, then symbols | Write the model verbally, then express it mathematically |
| 6 | Check units | Verify dimensional consistency |
| 7 | Write down initial and boundary conditions | Specify starting values and constraints |
| 8 | Verify, validate, and solve | Check the math, test against data, derive predictions |

## The Eight Steps

### Step 1: Identify All Environmental and Behavioral Components of the Phenomenon

**Definition.** Before writing a single equation, the modeler must understand the phenomenon under study. What does the organism do? Under what conditions? What are the relevant environmental arrangements?

**Why it matters.** A model of delay discounting requires understanding the sequence of environmental events that procede an organism choosing between smaller-sooner and larger-later reinforcer. A model of demand requires understanding how 'price' and 'consumption' are defined procedurally and behaviorally. Skipping this step leads to models that might be mathematically elegant, but behaviorally meaningless or confused. 

**Behavioral example.** You want to model how pigeons allocate pecks across two concurrently available VI schedules. Before writing any equations, you have to describe the procedure (two keys, two independent VI schedules, a changeover delay), the typical data pattern (relative response rates roughly track relative reinforcement rates), and the conditions under which the pattern is likelt to hold. Anything unknown or unsanswered you'll have to make assumptions about.

**Common mistakes.** Jumping straight to equations without understanding the empirical phenomenon. Relying on secondhand descriptions of procedures rather than reading the primary literature. Failing to specify what is being measured and how.

### Step 2: Define the Behavioral Principles, Processes, and Intended Scope of the Model

**Definition.** No model captures everything. The modeler has to decide which behavioral processes are in scope and which are excluded. Will the model address only steady-state responding, or also acquisition and extinction? Does it cover a single operant class or multiple concurrent operants?

**Why it matters.** Defining boundaries is not a weakness; it is a disciplined decision about what the model is intended to explain. A model that tries to explain everything typically explains nothing well. Clear scope also tells readers what the model does not claim.

**Behavioral example.** For a model of matching, you might decide: the model covers steady-state choice between two concurrently available VI schedules. It does not cover acquisition of preference, effects of schedule changes, or behavior during the changeover delay.

**Common mistakes.** Making scope too broad (trying to explain all of choice with one equation). Making scope too narrow without acknowledging what is excluded. Failing to state the scope at all, leaving readers to guess what the model is supposed to cover.

### Step 3: Write Down the Behavioral Principles, Known Quantitative Laws, and Functional Relationships

**Definition.** In physics, one might invoke Newton's laws or Fourier's law of heat conduction. In behavior science, the analogs are established quantitative relationships: the matching law, the demand function, the discounting function, principles of reinforcement and punishment, Rescorla-Wagner learning rules, and so forth.

**Why it matters.** This step makes explicit which known regularities the model will incorporate. It connects the model to existing knowledge and ensures the modeler is building on, rather than ignoring, the empirical record.

**Behavioral example.** For modeling VI schedule performance, you invoke Herrnstein's matching law: the principle that relative response rate equals relative reinforcement rate. For modeling choice between delayed rewards, you invoke the hyperbolic discounting function.

**Common mistakes.** Invoking a principle without verifying that it applies to the phenomenon in question. Ignoring well-established laws because they are inconvenient. Treating a descriptive regularity as if it were a mechanistic explanation.

### Step 4: State All Simplifying Assumptions Explicitly

**Definition.** Every model simplifies reality. The assumptions must be stated plainly so that readers can evaluate whether the model's conclusions depend on assumptions that may not hold.

**Why it matters.** Unstated assumptions are the most dangerous kind. They hide the conditions under which the model might fail. When a model's predictions go wrong, the first place to look is the assumptions. If they are not written down, diagnosis is impossible.

**Behavioral example.** Common assumptions in behavior-science models include: steady-state responding, independence of alternatives, motivating operations held constant, absence of extraneous reinforcement, perfect detection of responses, and stable preference.

**Common mistakes.** Assuming steady state without verifying it. Failing to list assumptions because they seem "obvious". Confusing assumptions with facts (an assumption is something you treat as true for modeling purposes, not something you have demonstrated).

### Step 5: Write the Model Verbally, Then Express It Mathematically

**Definition.** In engineering, a "balance" refers to an accounting of inputs, outputs, and accumulations (e.g., mass balance, energy balance). In behavior science, the analog is a formal accounting of the behavioral processes specified in earlier steps. First describe in plain language what the model claims, then write the equation.

**Why it matters.** The two-stage approach catches logical errors before they become algebraic ones. If you cannot state in words what the model claims, you do not yet understand it well enough to write it in symbols. 

**Behavioral example.** Verbal: "Response rate on a schedule is a hyperbolic function of the reinforcement rate on that schedule, with an asymptote determined by the organism's maximum response output and the half-maximum point determined by extraneous reinforcement." Mathematical: $R = \frac{k \cdot r}{r + r_e}$.

**Common mistakes.** Writing equations without first articulating the verbal logic. Using symbols before defining them. Producing equations that do not match the verbal description.

### Step 6: Verify Dimensional Consistency

**Definition.** If the left side of an equation has units of responses per minute, then the right side must also reduce to responses per minute.

**Why it matters.** Unit checking is a simple but powerful error-detection tool. It also significantly improves your understanding. If you cannot state the units of every term in your model, you may not fully understand what the model claims. Many published errors in modeling could have been caught by a unit check.

**Behavioral example.** In $R = \frac{k \cdot r}{r + r_e}$: $R$ is in responses/min, $k$ is in responses/min, $r$ is in reinforcers/min, $r_e$ is in reinforcers/min. The fraction $\frac{r}{r + r_e}$ is dimensionless. So the right side is responses/min, matching the left side.

**Common mistakes.** Adding quantities with different units. Failing to check units at all. Assuming a parameter is dimensionless without verifying.

### Step 7: Specify Starting Values and Constraints

**Definition.** When does the model begin? What is the initial response rate, the initial value of a reinforcer, or the starting state of the organism? What are the boundary conditions? Does the model apply only within a certain range of reinforcer rates, only to food-maintained behavior, only to adult humans?

**Why it matters.** These conditions determine when and where the model's predictions are valid. A model without boundary conditions is a model that claims to apply everywhere, which is almost never true. Starting values matter particularly for dynamic models, where different initial conditions can produce qualitatively different trajectories.

**Behavioral example.** For $R = \frac{k \cdot r}{r + r_e}$: $k > 0$, $r_e > 0$, the model applies to steady-state VI performance, typically after 20--30 sessions of stable responding.

**Common mistakes.** Applying a model outside its stated boundary conditions. Failing to specify what happens at extreme values ($r = 0$, $r \to \infty$). Not stating the range of conditions over which the model has been validated.

### Step 8: Check the Math, Test Against Data, and Derive Predictions

**Definition.** This step has three parts. *Verification* asks whether the mathematics are internally consistent: Does the model do what you think it does? *Validation* asks whether the model accounts for empirical data: Does it predict what organisms actually do? *Solving* means deriving the model's predictions under specific conditions.

**Why it matters.** A model that has not been tested is a conjecture (which is okay, just not the end of the story). Verification catches mathematical errors. Validation catches theoretical errors. Solving is what makes the model useful: It is how you generate the predictions that motivate experiments and applications.

**Behavioral example.** For Herrnstein's hyperbola: Verification: at $r = 0$, $R = 0$ (sensible); as $r \to \infty$, $R \to k$ (sensible ceiling). Validation: fit the model to data from multiple VI schedule values and assess goodness of fit via $R^2$, residual analysis, or information criteria. Solving: given $k = 80$ responses/min and $r_e = 5$ reinforcers/min, predict $R$ at $r = 10$: $R = \frac{80 \cdot 10}{10 + 5} \approx 53.3$ responses/min.

**Common mistakes.** Skipping verification ("the math must be right"). Validating against only one dataset. Confusing good curve fit with theoretical support. Not deriving novel predictions that could distinguish the model from competitors.

## Complete Walkthrough: Herrnstein's Hyperbola

To illustrate the full framework in action, here is a complete walkthrough applied to Herrnstein's (1970) single-alternative matching law.

### Step 1: Phenomenon

A food-deprived rat presses a lever in an operant chamber. Presses are reinforced with food pellets on a variable-interval (VI) schedule. Across conditions, the VI parameter changes (e.g., VI 30-s, VI 60-s, VI 120-s, VI 240-s), producing different rates of reinforcement. After extended exposure to each condition, the rat's response rate stabilizes. The empirical regularity: response rate increases with reinforcement rate, but the relationship is negatively accelerated. For example, doubling the reinforcement rate does not double response rate.

### Step 2: Scope

The model covers steady-state response rate as a function of obtained reinforcement rate for a single operant maintained by a single VI schedule. It does not cover ratio schedules, concurrent schedules, acquisition, extinction, within-session changes, or the molecular pattern of responding (e.g., inter-response times).

### Step 3: Principles and Laws

We invoke the matching principle: organisms distribute behavior in proportion to obtained reinforcement. For the single-alternative case, this means response rate on the measured alternative depends on the reinforcement available from that alternative relative to all sources of reinforcement, including unmeasured (extraneous) sources.

### Step 4: Assumptions

1. The organism is at steady state (response rate is stable within and across sessions).
2. There exists a constant level of extraneous reinforcement ($r_e$) from unmeasured sources.
3. The organism has a finite maximum response rate ($k$) determined by physical and motivational constraints.
4. Motivation (deprivation level) is constant across conditions for measured and unmeasured reinforcement.
5. The VI schedule arranges reinforcement independently of response rate (no feedback function is modeled).

### Step 5: Verbal Model, Then Mathematical Model

**Verbal:** The rate of responding on the measured alternative equals the organism's maximum response rate, scaled by the proportion of total reinforcement that comes from the measured alternative.

**Mathematical:**

$$R = \frac{k \cdot r}{r + r_e}$$

where:
- $R$ = response rate (responses/min)
- $k$ = asymptotic response rate (responses/min)
- $r$ = obtained reinforcement rate on the measured alternative (reinforcers/min)
- $r_e$ = extraneous reinforcement rate (reinforcers/min)

In plain language: the equation describes a hyperbolic curve. When reinforcement is low relative to extraneous reinforcement, responding is low. As reinforcement increases, responding rises but gradually levels off at a ceiling of $k$. The parameter $r_e$ governs the curvature, where larger $r_e$ means more extraneous reinforcement competing with the measured source, so it takes more reinforcement to increase measured responding toward the ceiling.

### Step 6: Unit Check

- Left side: $R$ in responses/min.
- Right side: $k$ in responses/min; $r$ in reinforcers/min; $r_e$ in reinforcers/min.
- $\frac{r}{r + r_e} = \frac{\text{reinforcers/min}}{\text{reinforcers/min}} = \text{dimensionless}$.
- $k \times \text{dimensionless} = \text{responses/min}$.

Units match.

### Step 7: Starting Values and Constraints

- $k > 0$: maximum response rate must be positive.
- $r_e > 0$: extraneous reinforcement must be positive (zero would mean the measured alternative is the only source of reinforcement, which is biologically implausible).
- The model applies to stable-state VI performance, typically after 20-30 sessions per condition.
- The model is intended for VI schedules where the feedback function between response rate and reinforcement rate is relatively flat.

### Step 8: Verify, Validate, Solve

**Verify.** When $r = 0$: $R = \frac{k \cdot 0}{0 + r_e} = 0$. No reinforcement, no responding. Sensible. When $r \to \infty$: $R \to \frac{k \cdot r}{r} = k$. Response rate approaches the ceiling. Sensible. When $r = r_e$: $R = \frac{k}{2}$. Response rate is half-maximal when reinforcement from the measured source equals extraneous reinforcement. This gives $r_e$ a clear behavioral interpretation.

**Validate.** Fit the model to data from de Villiers and Herrnstein (1976), who compiled VI schedule data from multiple species and laboratories. Assess fit using $R^2$ and residual plots. The model typically accounts for 90% or more of the variance in steady-state VI data (https://psycnet.apa.org/record/1977-20426-001).

**Solve.** Suppose $k = 80$ responses/min and $r_e = 5$ reinforcers/min. Predict response rate at $r = 10$ reinforcers/min:

$$R = \frac{80 \cdot 10}{10 + 5} = \frac{800}{15} \approx 53.3 \text{ responses/min}$$

At $r = 2$ reinforcers/min:

$$R = \frac{80 \cdot 2}{2 + 5} = \frac{160}{7} \approx 22.9 \text{ responses/min}$$

These predictions can be compared to observed data to evaluate the model.

## Guidance on Iteration

The 8-step framework is presented as a numbered list, but modeling is rarely a strictly sequential process. In practice, you will cycle through the steps repeatedly. For example:

- Writing the math (Step 5) may reveal that your assumptions (Step 4) were incomplete.
- Checking units (Step 6) may force you to reconsider the functional form you chose in Step 3.
- Testing against data (Step 8) may reveal systematic misfits that send you back to Step 2 to reconsider the scope of the model.
- A reviewer might question an assumption, requiring you to revisit Step 4 and then propagate the change through Steps 5-8.

The framework is a scaffold, not a straitjacket. Its value is in ensuring that every important decision gets made and recorded as opposed to dictating an order of events guaranteed to produce a final outcome. When you return to an earlier step, update all subsequent steps to maintain consistency. The final product should read as if the steps were followed in order, even if the actual process involved considerable back-and-forth. 

By the end of this course, you will hopefully become fluent enough with this framework that is shifts from a checklist to consult to a decision-making pattern for how to move from a behavioral phenomenon you observed to a formal, testable model.
