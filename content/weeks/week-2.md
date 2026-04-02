---
slug: "week-2"
number: 2
published: true
title: "Historical Models -- Matching Law"
subtitle: "How organisms allocate behavior across alternatives"
description: "Herrnstein's hyperbola, the generalized matching equation, sensitivity and bias."
keyModels:
  - "Herrnstein Hyperbola"
  - "Generalized Matching Equation"
  - "Strict Matching"
keyEquations:
  - "R = (k * r) / (r + r_e)"
  - "log(B1/B2) = s * log(r1/r2) + log(b)"
---

## Why This Topic Matters

Choice is among the most pervasive features of behavior. At every moment, an organism is doing one thing rather than another---pressing a lever rather than grooming, studying rather than scrolling, ordering one menu item rather than another. Because choice is ubiquitous, a science of behavior must have something quantitative to say about it. For most of the twentieth century, behavior science could describe choice qualitatively---organisms prefer more reinforcement to less, sooner to later---but it could not predict the precise allocation of behavior across alternatives. The matching law changed that.

In 1961, Richard Herrnstein placed pigeons in operant chambers with two response keys, each associated with an independent variable-interval (VI) schedule of food reinforcement. He measured the proportion of pecks directed at each key and the proportion of reinforcers obtained from each key. The result was striking in its simplicity: the relative rate of responding on a key approximately equaled the relative rate of reinforcement obtained from that key. If 70% of the reinforcers came from the left key, about 70% of the pecks went to the left key. This was not a loose tendency; it was a tight quantitative regularity that held across a wide range of schedule parameters, across species, and across response types. Herrnstein called it the matching law.

The matching law matters for this course because it was the first demonstration that behavior science could produce quantitative laws comparable to those in physics and economics. It showed that organisms are not merely sensitive to reinforcement---they are exquisitely calibrated to the relative rates, amounts, and delays of reinforcement across alternatives. The matching law also generated an entire research tradition aimed at refining, extending, and explaining the original finding. The generalized matching equation, Herrnstein's single-alternative hyperbola, and modern computational accounts of choice all trace their lineage to that initial discovery. This week, we apply the 8-step modeling framework to these models and learn how to fit, interpret, and evaluate them.

---

## Core Concepts

### Choice as Behavior Allocation

From a behavior-analytic perspective, **choice** is not a mental event or a decision process hidden inside the organism. Choice is simply the allocation of behavior across available alternatives. When two keys are available and the pigeon pecks the left key more often than the right, the pigeon is "choosing" the left key in the only sense that matters for a natural science of behavior: it is allocating more behavior to that alternative.

This framing has an important consequence: choice becomes a continuous, measurable variable rather than a discrete, all-or-nothing event. We do not ask "Which key did the pigeon choose?" as if each peck were an independent decision. Instead, we ask "How did the pigeon distribute its behavior across the two keys over the session?" The answer is a ratio---and ratios are what the matching law describes.

The behavior-allocation view also means that choice is always happening, even when we do not set up an explicit choice procedure. In a single-schedule arrangement, the organism is still choosing between the measured operant and all other available activities (grooming, exploring, resting). Herrnstein's insight was to recognize that the single-schedule case is just a special case of choice, and that recognizing this fact leads directly to quantitative predictions about response rate.

This conceptual shift---from "choice as decision" to "choice as allocation"---is foundational for everything that follows. It turns choice into a dependent variable that can be measured on a continuous scale, modeled with equations, and predicted from environmental parameters. It also means that the matching law is not merely a finding about concurrent schedules; it is a general statement about how behavior is distributed in any environment where multiple sources of reinforcement are available.

### Herrnstein's Single-Alternative Matching

Herrnstein (1970) extended the matching law to the single-schedule case by reasoning as follows: if an organism always distributes behavior in proportion to relative reinforcement, then behavior on a single measured schedule depends not only on the reinforcement that schedule provides but also on all other sources of reinforcement available in the environment. These unmeasured sources---reinforcement from grooming, exploring, resting, and other activities---are collectively called **extraneous reinforcement** and denoted $r_e$.

The resulting model is known as **Herrnstein's hyperbola**:

$$R = \frac{k \cdot r}{r + r_e}$$

where:

- $R$ is the observed response rate on the measured alternative (responses per minute)
- $r$ is the obtained reinforcement rate on the measured alternative (reinforcers per minute)
- $k$ is the **asymptotic response rate**---the maximum rate the organism would achieve if all reinforcement in the environment came from the measured alternative. It reflects motor capacity and motivational ceiling.
- $r_e$ is the **extraneous reinforcement rate**---the aggregate reinforcement from all unmeasured sources. It controls the curvature of the function.

The equation describes a rectangular hyperbola. When $r$ is small relative to $r_e$, the function is approximately linear---small increases in reinforcement produce proportional increases in responding. As $r$ grows large relative to $r_e$, the function negatively accelerates and response rate approaches $k$ asymptotically. The half-maximum point occurs at $r = r_e$, where $R = k/2$. This gives $r_e$ a direct behavioral interpretation: it is the reinforcement rate at which responding reaches half its ceiling.

To build further intuition, consider the two extreme cases. When $r$ is very small---say, the organism earns only one reinforcer per hour---the extraneous reinforcement from all other activities in the chamber dominates. The term $r + r_e$ is approximately $r_e$, and the equation simplifies to $R \approx (k/r_e) \cdot r$, which is a straight line through the origin with slope $k/r_e$. Responding increases linearly with reinforcement in this range. At the other extreme, when $r$ is very large---say, several reinforcers per minute---the term $r + r_e$ is approximately $r$, and the equation simplifies to $R \approx k$. No matter how much reinforcement is added, the organism cannot respond faster than $k$. The transition between these regimes is governed by $r_e$: a small $r_e$ means the organism reaches its ceiling at relatively low reinforcement rates, while a large $r_e$ means the organism needs more reinforcement before saturation effects appear.

Herrnstein's hyperbola was a landmark because it derived the well-known negatively accelerated relationship between VI reinforcement rate and response rate from a single principle---matching---applied to the total reinforcement context. It unified single-schedule performance with concurrent-schedule choice under one quantitative framework. The equation also has practical significance: it provides a way to estimate how much "background" reinforcement is available in a given environment, which is relevant to applied questions about the effectiveness of reinforcement-based interventions.

Why does the hyperbolic form arise? Consider the matching principle in its simplest form for the single-schedule case. The organism distributes its total behavioral output ($k$) across the measured operant and extraneous alternatives in proportion to the reinforcement each provides:

$$R = k \cdot \frac{r}{r + r_e}$$

The fraction $r / (r + r_e)$ is the proportion of total reinforcement that comes from the measured alternative. The organism allocates the same proportion of its total behavioral output to that alternative. This is matching applied at the molar level, and it produces the hyperbola directly.

### The Generalized Matching Equation (GME)

The original matching law states that relative response rate equals relative reinforcement rate. In practice, however, the match is rarely exact. Organisms sometimes **undermatch** (allocating behavior less extremely than reinforcement ratios would predict) or show a systematic **bias** toward one alternative. To accommodate these deviations, Baum (1974) proposed the **generalized matching equation**:

$$\log\left(\frac{B_1}{B_2}\right) = s \cdot \log\left(\frac{r_1}{r_2}\right) + \log(b)$$

where:

- $B_1$ and $B_2$ are response rates (or time allocations) on alternatives 1 and 2
- $r_1$ and $r_2$ are reinforcement rates on alternatives 1 and 2
- $s$ is the **sensitivity** parameter (slope)
- $b$ is the **bias** parameter (the antilog of the intercept)

In its power-function form, the GME is written:

$$\frac{B_1}{B_2} = b \left(\frac{r_1}{r_2}\right)^s$$

The log-ratio transformation linearizes this relationship, making it easy to fit with ordinary least-squares regression. A plot of $\log(B_1/B_2)$ against $\log(r_1/r_2)$ should yield a straight line with slope $s$ and intercept $\log(b)$.

The key parameter is **sensitivity** ($s$). When $s = 1$, the organism is **strictly matching**---the behavior ratio exactly equals the reinforcement ratio. When $s < 1$, the organism is **undermatching**---behavior ratios are less extreme than reinforcement ratios, meaning the organism distributes behavior more evenly across alternatives than reinforcement alone would predict. When $s > 1$, the organism is **overmatching**---behavior ratios are more extreme than reinforcement ratios, meaning the organism concentrates behavior on the richer alternative even more than the reinforcement differential warrants.

To understand why the log-ratio transformation is used, recall the basic algebra. Starting from the power-function form:

$$\frac{B_1}{B_2} = b \left(\frac{r_1}{r_2}\right)^s$$

Take the logarithm (base 10) of both sides:

$$\log\left(\frac{B_1}{B_2}\right) = \log\left[b \left(\frac{r_1}{r_2}\right)^s\right]$$

Apply the product rule of logarithms:

$$\log\left(\frac{B_1}{B_2}\right) = \log(b) + \log\left[\left(\frac{r_1}{r_2}\right)^s\right]$$

Apply the power rule of logarithms:

$$\log\left(\frac{B_1}{B_2}\right) = s \cdot \log\left(\frac{r_1}{r_2}\right) + \log(b)$$

This is a linear equation of the form $y = mx + c$, where $y = \log(B_1/B_2)$, $x = \log(r_1/r_2)$, $m = s$, and $c = \log(b)$. The transformation converts a potentially complex nonlinear relationship into a straight line, which can be fitted by ordinary least-squares regression and interpreted visually.

The choice of base-10 logarithms is conventional in the matching literature. Natural logarithms would produce the same slope and the same $R^2$; only the numerical value of the intercept would change. By convention, base-10 logs are used so that a log ratio of 1.0 corresponds to a 10:1 ratio, and a log ratio of 0.301 corresponds to a 2:1 ratio.

### Undermatching and Overmatching

**Undermatching** ($s < 1$) is the most commonly observed deviation from strict matching. When an organism undermatches, it responds on the leaner alternative more than strict matching would predict. In a typical concurrent VI-VI experiment with pigeons, sensitivity values cluster around $s = 0.8$, indicating moderate undermatching.

Several factors contribute to undermatching:

- **Changeover cost.** If switching between alternatives is effortless, organisms may switch frequently, sampling both alternatives more evenly. This frequent switching tends to equalize response allocations, producing undermatching. If switching is costly (e.g., a changeover delay is imposed), organisms tend to stay longer on the richer alternative, increasing sensitivity toward 1.0. Thus, procedural details about the cost of switching directly affect the degree of undermatching.

- **Discriminability.** If the organism cannot easily distinguish which alternative is richer---perhaps because the reinforcement rates are similar, or the stimuli associated with the alternatives are not distinctive---behavior allocation will be less differentiated, producing undermatching. When alternatives are made more discriminable (e.g., by adding distinct colors or locations), sensitivity tends to increase.

- **Local reinforcement effects.** Organisms may track local reinforcement histories (e.g., the last few reinforcers obtained) rather than overall session-wide reinforcement rates. Local tracking can produce undermatching when measured against global reinforcement ratios, because local reinforcement rates fluctuate considerably within a session.

- **Time allocation vs. response allocation.** Sensitivity values can differ depending on whether behavior is measured as responses or as time spent on each alternative. Time-allocation measures sometimes yield sensitivity values closer to 1.0, suggesting that response allocation may underestimate the organism's true tracking of reinforcement ratios.

**Overmatching** ($s > 1$) is rarer but does occur. When an organism overmatches, it concentrates behavior on the richer alternative more than strict matching predicts. Overmatching has been observed in situations where switching is very costly, where alternatives are highly discriminable, or where the data are analyzed at a fine temporal grain. Some researchers have argued that overmatching is an artifact of certain measurement procedures, while others treat it as a genuine behavioral phenomenon under specific conditions.

Understanding whether and why organisms deviate from strict matching is not merely an academic exercise. In applied settings, the sensitivity parameter tells you how sharply the client's behavior differentiates between better and worse reinforcement options---information that is directly relevant to treatment design. A client with low sensitivity may require larger reinforcement differentials to produce meaningful shifts in behavior allocation.

### Bias

The **bias** parameter ($b$, or equivalently $\log(b)$ as the intercept of the log-ratio regression) captures a systematic preference for one alternative that is not explained by the reinforcement rates. When $b = 1$ (i.e., $\log(b) = 0$), there is no bias---any preference is entirely attributable to differential reinforcement. When $b > 1$, the organism shows a systematic preference for alternative 1 even after reinforcement rates are accounted for. When $b < 1$, the preference favors alternative 2.

Bias can arise from several sources:

- **Response topography.** One alternative may be physically easier to perform. A pigeon might show a spatial bias toward the left key because of a slight asymmetry in its position relative to the food hopper, or because one key requires less force to activate.

- **Spatial or positional preference.** Organisms often show side preferences that persist across conditions. These may be innate tendencies or may develop through early experience. In human participants, right-hand biases or left-field attentional preferences can produce measurable bias.

- **Qualitative reinforcer differences.** If the reinforcers delivered by the two alternatives differ in quality, magnitude, or type (e.g., food vs. water, preferred food vs. non-preferred food), the bias parameter absorbs this asymmetry. This application of the GME is deliberate: researchers sometimes manipulate reinforcer quality across alternatives specifically to estimate how much bias a given quality difference produces, using the GME as a measurement tool.

- **Stimulus properties.** Color preferences, key location, or other non-reinforcement-related stimulus features can contribute to bias. If one key is associated with a preferred color, the organism may allocate more behavior to that key regardless of the reinforcement schedule.

- **Historical effects.** An organism's reinforcement history with particular alternatives, stimuli, or locations can produce bias that persists even when current reinforcement conditions are equated.

In practice, bias is often small in well-controlled laboratory preparations---typically $|\log(b)| < 0.1$ in pigeon concurrent VI-VI experiments. Its importance increases in applied settings where the alternatives may differ in many ways beyond scheduled reinforcement rate. In such settings, identifying and quantifying bias is crucial for understanding the full picture of behavior allocation.

---

## Applying the 8-Step Framework

We now walk through all eight steps of the modeling framework for a concrete problem: modeling concurrent VI-VI schedule performance using the generalized matching equation.

### Step 1: Get the Behavioral Phenomenon Clearly in Mind

A pigeon is placed in an operant chamber with two response keys (left and right). Each key is associated with an independent VI schedule of food reinforcement. In the condition of interest, the left key operates on a **VI 60-s** schedule (on average, one reinforcer becomes available every 60 seconds, yielding approximately 1 reinforcer per minute) and the right key operates on a **VI 120-s** schedule (on average, one reinforcer becomes available every 120 seconds, yielding approximately 0.5 reinforcers per minute). A 2-second changeover delay (COD) is in effect: after switching from one key to the other, the first peck on the new key cannot produce a reinforcer for 2 seconds.

The procedural details matter. The two VI schedules run independently and simultaneously. When a reinforcer is arranged by one schedule, it waits ("holds") on that key until the pigeon pecks the key and collects it. The pigeon can freely alternate between keys, but the COD penalizes rapid switching. Sessions end after a fixed time (e.g., 60 minutes) or a fixed number of reinforcers.

After many sessions at these schedule values (typically 20--30 sessions until response rates are stable), the pigeon's allocation of pecks across the two keys stabilizes. The pigeon pecks the left key (VI 60-s) more than the right key (VI 120-s). But how much more? And how does this allocation change when the schedule values are changed to other VI-VI combinations? The matching law provides the quantitative answer.

### Step 2: Define the Behavioral Processes and Scope of the Model

We model the **steady-state allocation** of pecking across two concurrently available VI schedules. The model covers:

- Response allocation (pecks per minute on each key) at asymptotic performance
- The relationship between relative reinforcement rate and relative response rate across multiple conditions
- The degree to which the organism's behavior allocation tracks reinforcement ratios (sensitivity)
- Any systematic preference not attributable to reinforcement rates (bias)

The model does **not** cover:

- Acquisition of preference (how allocation changes during early exposure to new schedule values)
- Molecular response patterns (e.g., inter-response times, changeover patterns, visit durations)
- Within-session changes in preference (e.g., warm-up effects, satiation)
- Behavior during the changeover delay itself
- Effects of reinforcer magnitude, quality, or delay (these are held constant across alternatives)
- The mechanism by which matching arises (e.g., melioration, momentary maximizing)

These exclusions are deliberate. The GME is a molar, steady-state description. Its power lies in summarizing the endpoint of the choice process with two interpretable parameters, not in describing the process that generates matching.

### Step 3: Identify the Behavioral Principles and Quantitative Laws

We invoke the **matching principle**: organisms distribute behavior across alternatives in proportion to the reinforcement obtained from those alternatives. The generalized form of this principle (Baum, 1974) allows for deviations from strict proportionality:

$$\frac{B_1}{B_2} = b \left(\frac{r_1}{r_2}\right)^s$$

In log-ratio form:

$$\log\left(\frac{B_1}{B_2}\right) = s \cdot \log\left(\frac{r_1}{r_2}\right) + \log(b)$$

This is the candidate quantitative law we will apply. It has been validated extensively across species (pigeons, rats, monkeys, humans), response types (key pecks, lever presses, time allocation, eye movements), and reinforcer types (food, water, brain stimulation, money, social interaction).

### Step 4: State All Simplifying Assumptions

1. **Steady state.** The organism has been exposed to each schedule-value pair long enough that response rates have stabilized. We use only data from the last several sessions of each condition. This is critical: the GME does not describe transitional behavior.

2. **Independent schedules.** The two VI schedules operate independently. Reinforcement arranged on one key is not affected by responding on the other key (except through the time constraint that responding on one key necessarily reduces time available for the other).

3. **Single reinforcer type.** Both alternatives deliver the same reinforcer (food pellets of the same type and magnitude), so any differences in behavior allocation are due to reinforcement rate, not reinforcer quality.

4. **Changeover delay.** A constant changeover delay is in effect across all conditions. Its effects are absorbed into the sensitivity and bias parameters rather than modeled explicitly.

5. **Molar account.** The model describes session-wide aggregates (total responses, total reinforcers) rather than moment-to-moment dynamics.

6. **Log-ratio linearity.** The relationship between log behavior ratios and log reinforcement ratios is linear. This is an empirical claim that holds well across a wide range of concurrent VI-VI preparations.

7. **Constant motivation.** Deprivation level is the same across all conditions and does not change systematically within sessions.

8. **No programmatic confounds.** Schedule values are counterbalanced or randomized across keys to prevent the order of conditions from systematically affecting the results.

### Step 5: Write the Model Verbally, Then Mathematically

**Verbal description:** The log of the ratio of response rates on the two alternatives is a linear function of the log of the ratio of reinforcement rates on the two alternatives. The slope of this linear function captures how sensitively the organism tracks reinforcement ratios. The intercept captures any systematic bias toward one alternative that is not due to reinforcement rate differences.

**Mathematical expression:**

$$\log\left(\frac{B_1}{B_2}\right) = s \cdot \log\left(\frac{r_1}{r_2}\right) + \log(b)$$

In plain language: take the log of how much more the pigeon pecks one key than the other. This is predicted by a straight line whose input is the log of how much more reinforcement one key provides than the other. The slope $s$ tells you how steeply behavior tracks reinforcement. The intercept $\log(b)$ tells you whether the pigeon has an inherent preference for one side.

Equivalently, in the power-function form: the behavior ratio equals the reinforcement ratio raised to the power $s$ and multiplied by a bias constant $b$. When $s = 1$ and $b = 1$, this reduces to the original matching law: $B_1/B_2 = r_1/r_2$.

### Step 6: Verify Dimensional Consistency

- $B_1 / B_2$: responses per minute divided by responses per minute = dimensionless.
- $r_1 / r_2$: reinforcers per minute divided by reinforcers per minute = dimensionless.
- $\log(B_1 / B_2)$: log of a dimensionless number = dimensionless.
- $\log(r_1 / r_2)$: log of a dimensionless number = dimensionless.
- $s$: dimensionless (it is the slope relating two dimensionless log ratios).
- $\log(b)$: dimensionless.
- $s \cdot \log(r_1/r_2) + \log(b)$: dimensionless + dimensionless = dimensionless.

Both sides of the equation are dimensionless. Units are consistent. Note that the log-ratio formulation has the feature of eliminating all physical units at the outset, so dimensional consistency is satisfied trivially. This is one of the practical advantages of the log-ratio approach.

### Step 7: Specify Starting Values and Constraints

- $s > 0$: sensitivity must be positive. A negative sensitivity would mean that increasing reinforcement on one alternative decreases responding on that alternative, which contradicts the matching principle.
- Typical range: $0.5 \leq s \leq 1.5$ for concurrent VI-VI schedules with pigeons, with $s \approx 0.8$ being a common finding for response-rate measures and $s \approx 0.9$--$1.0$ for time-allocation measures.
- $b > 0$: bias must be positive (it is a ratio). $b = 1$ (equivalently, $\log(b) = 0$) indicates no bias.
- Typical range for $\log(b)$: $-0.2 \leq \log(b) \leq 0.2$ in well-controlled pigeon experiments.
- The model applies to concurrent VI-VI schedules at steady state.
- Data should include at least 3--5 conditions (different schedule-value pairs) to estimate the two parameters reliably. More conditions are better, especially if they span a wide range of reinforcement ratios.
- Reinforcement rates should span a range wide enough that the log-ratio values cover a meaningful interval (e.g., from $\log(r_1/r_2) = -0.5$ to $\log(r_1/r_2) = 0.5$ or wider). A wider range provides more leverage for estimating the slope.
- Both $B_1$ and $B_2$ must be greater than zero in every condition. If the organism stops responding on one alternative entirely (exclusive preference), the log ratio is undefined, and that condition cannot be included in the analysis.

### Step 8: Check the Math, Test Against Data, and Derive Predictions

**Verify.** We check the model's predictions at informative boundary conditions:

- When $r_1 = r_2$ (equal reinforcement rates): $\log(r_1/r_2) = 0$, so $\log(B_1/B_2) = \log(b)$. If there is no bias ($b = 1$), then $\log(B_1/B_2) = 0$, meaning $B_1 = B_2$---the pigeon pecks both keys equally. This is sensible: equal reinforcement should produce equal responding in the absence of bias.

- When $r_1 > r_2$: $\log(r_1/r_2) > 0$, and $\log(B_1/B_2) > 0$ (assuming $s > 0$), meaning the pigeon pecks key 1 more. This is sensible.

- When $r_1 \gg r_2$ (extreme reinforcement asymmetry): $\log(r_1/r_2)$ is large and positive, so $\log(B_1/B_2)$ is large and positive, meaning the pigeon strongly prefers key 1. This is sensible.

- If $s = 1$ and $b = 1$, the equation reduces to $\log(B_1/B_2) = \log(r_1/r_2)$, or equivalently $B_1/B_2 = r_1/r_2$---strict matching. This is the special case from which the model was generalized, confirming that the GME nests the original matching law.

**Validate.** Fit the linear equation to data from our pigeon across multiple concurrent VI-VI conditions using ordinary least-squares regression. Compute $R^2$ and examine residuals for systematic patterns. In well-conducted experiments, $R^2$ values above 0.95 are typical, and residuals should show no systematic curvature.

**Solve.** For our specific example (VI 60-s vs. VI 120-s), if the pigeon obtains reinforcement rates close to the programmed rates:

- $r_1 \approx 1.0$ reinforcers/min (from the VI 60-s key)
- $r_2 \approx 0.5$ reinforcers/min (from the VI 120-s key)
- $\log(r_1/r_2) = \log(1.0/0.5) = \log(2.0) \approx 0.301$

If we have already estimated $s = 0.85$ and $\log(b) = 0.03$ from previous conditions:

$$\log(B_1/B_2) = 0.85 \times 0.301 + 0.03 = 0.256 + 0.03 = 0.286$$

$$B_1/B_2 = 10^{0.286} \approx 1.93$$

The model predicts the pigeon will peck the VI 60-s key about 1.93 times as often as the VI 120-s key. Under strict matching ($s = 1, b = 1$), the prediction would be a 2:1 ratio. The slightly lower predicted ratio (1.93:1) reflects the mild undermatching ($s = 0.85$) partially offset by the small bias toward alternative 1 ($\log(b) = 0.03$).

If we further know that the pigeon's total response rate across both keys is about 60 pecks per minute, we can solve for the individual response rates:

$$B_1 = 1.93 \cdot B_2$$

$$B_1 + B_2 = 60$$

$$1.93 \cdot B_2 + B_2 = 60$$

$$2.93 \cdot B_2 = 60$$

$$B_2 \approx 20.5 \text{ resp/min}$$

$$B_1 \approx 39.5 \text{ resp/min}$$

These are concrete, testable predictions that can be compared to the pigeon's observed performance in the next session.

---

## Worked Example

### Dataset

A pigeon is exposed to five conditions of concurrent VI-VI schedules. In each condition, the pigeon responds on two keys for 25--30 sessions until response rates stabilize. The following data are obtained from the last five sessions of each condition (averaged):

| Condition | Left VI (s) | Right VI (s) | $r_1$ (reinf/min) | $r_2$ (reinf/min) | $B_1$ (resp/min) | $B_2$ (resp/min) |
|-----------|-------------|--------------|--------------------|--------------------|-------------------|-------------------|
| 1         | 30          | 120          | 1.85               | 0.47               | 52.3              | 12.1              |
| 2         | 60          | 60           | 0.94               | 0.91               | 28.7              | 25.9              |
| 3         | 120         | 30           | 0.46               | 1.88               | 11.8              | 49.7              |
| 4         | 45          | 90           | 1.28               | 0.63               | 40.1              | 18.6              |
| 5         | 90          | 45           | 0.64               | 1.31               | 19.2              | 38.4              |

Notice several features of this dataset. The reinforcement rates are the *obtained* rates---the rates the pigeon actually earned---not the programmed rates. Obtained rates are typically slightly lower than programmed rates because the pigeon does not always collect reinforcers immediately. The schedule values span a range from VI 30-s (rich) to VI 120-s (lean), and the assignment of rich vs. lean to left vs. right key varies across conditions. This counterbalancing allows separation of sensitivity from side bias.

### Step 1: Compute Ratios

For each condition, compute the response ratio $B_1/B_2$ and the reinforcement ratio $r_1/r_2$:

| Condition | $r_1/r_2$ | $B_1/B_2$ |
|-----------|-----------|-----------|
| 1         | $1.85/0.47 = 3.936$ | $52.3/12.1 = 4.322$ |
| 2         | $0.94/0.91 = 1.033$ | $28.7/25.9 = 1.108$ |
| 3         | $0.46/1.88 = 0.245$ | $11.8/49.7 = 0.237$ |
| 4         | $1.28/0.63 = 2.032$ | $40.1/18.6 = 2.156$ |
| 5         | $0.64/1.31 = 0.489$ | $19.2/38.4 = 0.500$ |

Already we can see the matching pattern: when the reinforcement ratio favors the left key (Conditions 1, 2, 4), the response ratio also favors the left key, and vice versa (Conditions 3, 5). The response ratios are close to the reinforcement ratios but not identical---this is where the GME's sensitivity and bias parameters earn their keep.

### Step 2: Compute Log Ratios

Transform to base-10 logarithms:

| Condition | $\log(r_1/r_2)$ | $\log(B_1/B_2)$ |
|-----------|-----------------|-----------------|
| 1         | $\log(3.936) = 0.595$ | $\log(4.322) = 0.636$ |
| 2         | $\log(1.033) = 0.014$ | $\log(1.108) = 0.045$ |
| 3         | $\log(0.245) = -0.611$ | $\log(0.237) = -0.625$ |
| 4         | $\log(2.032) = 0.308$ | $\log(2.156) = 0.334$ |
| 5         | $\log(0.489) = -0.311$ | $\log(0.500) = -0.301$ |

The log-ratio transformation has several useful properties visible in this table. Note that Conditions 3 and 1 are approximate mirror images: the VI 30-s and VI 120-s schedules are simply swapped between keys. In log-ratio space, this produces points that are approximately symmetric about the origin, which is exactly what should happen if the pigeon is responding to relative reinforcement rather than to absolute features of a particular key location.

### Step 3: Fit the Linear Equation

We fit the linear model $\log(B_1/B_2) = s \cdot \log(r_1/r_2) + \log(b)$ using ordinary least-squares regression with $x = \log(r_1/r_2)$ as the predictor and $y = \log(B_1/B_2)$ as the outcome.

**Compute the means:**

$$\bar{x} = \frac{0.595 + 0.014 + (-0.611) + 0.308 + (-0.311)}{5} = \frac{-0.005}{5} = -0.001$$

$$\bar{y} = \frac{0.636 + 0.045 + (-0.625) + 0.334 + (-0.301)}{5} = \frac{0.089}{5} = 0.018$$

**Compute the deviations and cross-products:**

| Condition | $x_i - \bar{x}$ | $y_i - \bar{y}$ | $(x_i - \bar{x})(y_i - \bar{y})$ | $(x_i - \bar{x})^2$ |
|-----------|-----------------|-----------------|----------------------------------|---------------------|
| 1         | $0.596$         | $0.618$         | $0.368$                          | $0.355$             |
| 2         | $0.015$         | $0.027$         | $0.000$                          | $0.000$             |
| 3         | $-0.610$        | $-0.643$        | $0.392$                          | $0.372$             |
| 4         | $0.309$         | $0.316$         | $0.098$                          | $0.095$             |
| 5         | $-0.310$        | $-0.319$        | $0.099$                          | $0.096$             |

**Compute the slope ($s$):**

$$s = \frac{\sum (x_i - \bar{x})(y_i - \bar{y})}{\sum (x_i - \bar{x})^2} = \frac{0.368 + 0.000 + 0.392 + 0.098 + 0.099}{0.355 + 0.000 + 0.372 + 0.095 + 0.096} = \frac{0.957}{0.918} = 1.042$$

**Compute the intercept ($\log(b)$):**

$$\log(b) = \bar{y} - s \cdot \bar{x} = 0.018 - 1.042 \times (-0.001) = 0.018 + 0.001 = 0.019$$

Therefore: $b = 10^{0.019} \approx 1.045$

**The fitted equation is:**

$$\log(B_1/B_2) = 1.042 \cdot \log(r_1/r_2) + 0.019$$

### Step 4: Interpret the Parameters

**Sensitivity: $s = 1.04$.** This value is very close to 1.0, indicating that this pigeon is approximately **strict matching**. The behavior ratio tracks the reinforcement ratio almost exactly. There is a very slight tendency toward overmatching, but a deviation of 0.04 from 1.0 is well within the range expected from sampling variability in a five-point regression. We would not want to make strong claims about overmatching without more data points and a formal statistical test.

In behavioral terms, $s = 1.04$ means that when the reinforcement ratio between the two keys doubles (e.g., from 2:1 to 4:1), the behavior ratio slightly more than doubles. The pigeon is tracking reinforcement ratios with high fidelity.

**Bias: $\log(b) = 0.019$, or $b = 1.045$.** The pigeon shows a very small bias toward the left key. Even when reinforcement rates are approximately equal (Condition 2, where $r_1/r_2 = 1.033$), the pigeon pecks the left key slightly more ($B_1/B_2 = 1.108$). A bias of $b = 1.045$ means the pigeon responds about 4.5% more on the left key than would be predicted by the reinforcement ratio alone. This could reflect a spatial preference, a slight positional advantage of the left key relative to the food hopper, or an idiosyncratic habit.

### Step 5: Assess Goodness of Fit

The $R^2$ for this regression quantifies how well the GME accounts for the variance in behavior allocation across conditions.

**Total sum of squares:**

$$SS_{total} = \sum (y_i - \bar{y})^2 = 0.618^2 + 0.027^2 + 0.643^2 + 0.316^2 + 0.319^2$$

$$= 0.382 + 0.001 + 0.413 + 0.100 + 0.102 = 0.998$$

**Regression sum of squares:**

$$SS_{regression} = s \cdot \sum (x_i - \bar{x})(y_i - \bar{y}) = 1.042 \times 0.957 = 0.997$$

**Residual sum of squares:**

$$SS_{residual} = SS_{total} - SS_{regression} = 0.998 - 0.997 = 0.001$$

**$R^2$:**

$$R^2 = 1 - \frac{SS_{residual}}{SS_{total}} = 1 - \frac{0.001}{0.998} = 0.999$$

An $R^2$ of 0.999 indicates that the generalized matching equation accounts for essentially all of the variance in this pigeon's behavior allocation across these five conditions. This level of fit is typical for concurrent VI-VI data from well-trained pigeons and illustrates why the matching law is considered one of the most robust quantitative regularities in behavior science.

### Step 6: Generate a Prediction

Having fitted the model, we can predict the pigeon's behavior in a new, untested condition. Suppose we plan to expose the pigeon to concurrent VI 40-s VI 80-s. The expected reinforcement rates are approximately $r_1 = 1.5$ reinforcers/min and $r_2 = 0.75$ reinforcers/min.

$$\log(r_1/r_2) = \log(1.5/0.75) = \log(2.0) = 0.301$$

$$\log(B_1/B_2) = 1.042 \times 0.301 + 0.019 = 0.314 + 0.019 = 0.333$$

$$B_1/B_2 = 10^{0.333} = 2.15$$

The model predicts the pigeon will peck the left key about 2.15 times as often as the right key. This prediction can be tested by running the new condition and comparing the observed behavior ratio to 2.15.

---

## Plain-Language Interpretation

The matching law, at its core, says something intuitive: organisms distribute their behavior roughly in proportion to what works. If the left option pays off twice as often as the right option, the organism will respond on the left about twice as much as on the right. If the payoff ratio is 4:1, the behavior ratio will be about 4:1.

Consider a concrete everyday example. Imagine you are at a party with two buffet tables. One table is restocked frequently and always has good food; the other is restocked rarely. Over the course of the evening, you will visit the well-stocked table more often---roughly in proportion to how much more reliably it has food. But you might not go there *exactly* in proportion (maybe you visit the less-stocked table occasionally just to check), and you might have a slight preference for one table because it is closer to the bar. The matching law describes exactly this kind of behavior allocation, with parameters that quantify the "roughly" and the "slight preference."

The generalized matching equation refines the basic intuition in two ways.

First, it acknowledges that organisms are not perfect trackers. The sensitivity parameter $s$ captures how precisely the organism adjusts its behavior to match the reinforcement ratios. A sensitivity of 1.0 means the organism is perfectly calibrated---a 3:1 reinforcement ratio produces exactly a 3:1 behavior ratio. Values below 1.0---the most common finding---mean the organism is somewhat imprecise, distributing behavior more evenly than the reinforcement ratios warrant. A sensitivity of 0.8 means that a 3:1 reinforcement ratio produces only about a 2.4:1 behavior ratio. This imprecision is not random error; it is a systematic, quantifiable tendency.

Second, the equation acknowledges that factors other than reinforcement rate can influence preference. The bias parameter $b$ captures these non-reinforcement influences. A pigeon might prefer the left key because it is closer to the food hopper. A child might prefer one toy over another because of its color, not its reinforcement history. Bias is the model's way of accounting for these asymmetries while still attributing the main pattern of behavior allocation to reinforcement.

In clinical terms, the matching law tells a practitioner: if you want to increase appropriate behavior relative to problem behavior, you need to increase the reinforcement ratio in favor of appropriate behavior. The sensitivity parameter tells you how responsive the client is likely to be to such changes. The bias parameter tells you whether there are non-reinforcement factors favoring one behavior over the other that you may need to address separately.

---

## Assumptions and Limitations

The generalized matching equation, like all models, rests on assumptions that define its scope and limit its applicability:

- **Steady state.** The model applies only to stable, asymptotic performance. It does not describe how preference develops, how organisms transition between conditions, or how behavior changes within a session. Data must be collected after responding has stabilized, typically requiring 20--30 sessions per condition. This is a significant practical constraint, especially in applied settings where extended baseline periods may be impractical.

- **Independent schedules.** The two VI schedules are assumed to arrange reinforcement independently. Each schedule "sets up" reinforcers at its own rate, and a reinforcer, once set up, waits until the organism responds on that alternative. This assumption is built into the VI procedure but would not hold for other schedule types (e.g., interdependent concurrent schedules, or real-world situations where engaging in one behavior consumes resources that would otherwise be available for the other).

- **Single reinforcer type.** Both alternatives are assumed to deliver the same reinforcer in the same amount. If the reinforcers differ (e.g., one delivers food and the other delivers water), the bias parameter absorbs the quality difference, but the model does not explicitly predict how much bias a given quality difference should produce. Extensions of the GME that include separate sensitivity and bias terms for reinforcer amount and delay exist, but they require more data to estimate.

- **Molar aggregation.** The model describes session-wide aggregates: total responses and total reinforcers across the session. It does not describe the moment-to-moment dynamics of switching between alternatives, the temporal pattern of responding within a visit to each alternative, or the local contingencies that may influence behavior. This molar focus is both a strength (it yields simple, robust summaries) and a limitation (it ignores potentially important temporal structure).

- **Changeover delay effects.** The changeover delay (COD) is not explicitly modeled. Its effects are implicitly captured by the sensitivity parameter---longer CODs tend to increase sensitivity by penalizing rapid switching---but the model does not predict how a specific COD value will affect $s$.

- **Log-ratio linearity.** The model assumes that the relationship between log behavior ratios and log reinforcement ratios is linear. This is well-supported empirically for concurrent VI-VI schedules but may not hold for other schedule combinations (e.g., concurrent VI-VR) or for very extreme reinforcement ratios.

- **Two alternatives.** The standard GME is formulated for two-alternative choice. Extensions to three or more alternatives exist but introduce additional complexity and have been less thoroughly validated.

- **No molecular mechanisms.** The matching law is a molar description. It tells you where behavior ends up at steady state, not how the organism gets there on a moment-to-moment basis. Molecular accounts (e.g., melioration, momentary maximizing) propose mechanisms that could produce matching as an emergent outcome, but the GME itself is silent on mechanism. This means the GME cannot explain *why* matching occurs---only that it does, and how precisely.

- **Ratio measures only.** The log-ratio formulation requires that both $B_1$ and $B_2$ are non-zero. If exclusive preference occurs (all responding on one alternative), the log ratio is undefined. This is a practical limitation in situations where strong preference is expected.

These assumptions are not flaws---they are the explicit boundaries of the model. Identifying them at Step 4 of the framework ensures that we know precisely what the model claims and what it does not. When a model's predictions fail, the assumptions are the first place to look for the source of the failure.

---

## Connection to Empirical Behavior Science

### Laboratory Research

The matching law has been tested extensively in laboratory settings with pigeons, rats, primates, and humans. The concurrent VI-VI preparation with pigeons remains the gold-standard paradigm. Decades of research have established that sensitivity values typically fall between 0.7 and 1.0 for pigeons on concurrent VI-VI schedules with a changeover delay, and that the GME routinely accounts for 90--99% of the variance in behavior allocation across conditions. These findings are reviewed comprehensively in Baum (1979) and Davison and McCarthy (1988), which remain essential references for anyone working with matching-law models.

The matching law has also been extended to dimensions of reinforcement beyond rate. Sensitivity to reinforcer amount, delay, and quality have all been measured using modified versions of the GME. These extensions typically add additional terms to the log-ratio equation, each with its own sensitivity parameter. The resulting "concatenated" generalized matching law provides a comprehensive framework for predicting behavior allocation when multiple reinforcement dimensions vary simultaneously.

### Applied Behavior Analysis

The matching law has found extensive application in clinical and applied settings. **Functional analysis** of problem behavior, as developed by Iwata and colleagues, implicitly involves concurrent schedules: the client can engage in problem behavior or alternative behavior, and each produces different consequences at different rates. Matching-law analyses of functional-analysis data can reveal whether problem behavior is maintained by a richer reinforcement schedule than alternative behavior, and quantify how much the reinforcement ratio would need to change to shift allocation to a clinically meaningful degree.

**Treatment evaluation** can also be informed by matching. If a treatment increases the reinforcement for appropriate behavior relative to problem behavior, the matching law predicts how much the behavior allocation should shift. The sensitivity parameter tells you how responsive the client is to changes in relative reinforcement, which directly informs how large a reinforcement differential the treatment needs to create. **Fisher and Mazur (1997)** demonstrated how matching-law analyses can be applied to data from functional analyses and treatment evaluations, showing that applied data often conform to the same quantitative regularities found in basic research.

### Clinical Decision-Making

**Reed and Kaplan (2011)** provided a tutorial on applying matching-law concepts to clinical decision-making. Their work showed how practitioners can use the GME to understand why a client distributes behavior across available options and how to redesign the reinforcement environment to produce more desirable allocations. The key insight is that simply increasing reinforcement for appropriate behavior may not be sufficient if the reinforcement for problem behavior is not also addressed---matching is about relative, not absolute, reinforcement.

For example, if a child's problem behavior produces attention every 2 minutes (roughly VI 120-s) and appropriate behavior produces attention every 10 minutes (roughly VI 600-s), the reinforcement ratio is about 5:1 in favor of problem behavior. The matching law predicts that the child will allocate about five times as much behavior to the problem response. To shift the allocation, the clinician needs to change this ratio---either by enriching reinforcement for appropriate behavior, by reducing reinforcement for problem behavior (e.g., through extinction), or both.

### Modern Developments

**McDowell (1989)** reviewed the application of quantitative models of behavior, including the matching law, to human behavior and clinical problems. He argued that the matching law provides a framework for understanding everyday human choice that goes beyond the laboratory paradigm. His work emphasized that matching is not an artifact of carefully controlled pigeon experiments but a fundamental regularity that can be observed---with appropriate measurement---in human behavior in natural settings.

More recent work has connected matching to computational models of reinforcement learning, showing that matching-like behavior emerges from simple learning algorithms that update action values based on experience. Specifically, certain implementations of the Rescorla-Wagner learning rule, when applied to concurrent-schedule choice, produce steady-state behavior allocations that approximate matching. This connection between the molar regularity (matching) and molecular process models (reinforcement learning) is an active area of research that bridges the descriptive models covered in this week and the computational models covered later in the course.

Quantitative analyses of matching have also been applied to behavioral economics, where the relative allocation of behavior to commodities at different prices follows matching-like patterns. The connection between matching and demand (covered in Week 4 of this course) is particularly noteworthy: both frameworks describe how organisms allocate behavior in response to environmental constraints, and both yield quantitative parameters with clear behavioral interpretations.

---

## Exercises for Reflection

1. Consider a clinical scenario in which a child engages in both appropriate play and disruptive behavior during a therapy session. If functional analysis data show that the child receives adult attention for disruptive behavior on average every 2 minutes and for appropriate play on average every 10 minutes, what does the matching law predict about the allocation of behavior? How would you change the reinforcement environment to shift the allocation toward appropriate play? Be specific about what reinforcement ratio you would target and why.

2. The sensitivity parameter $s$ is typically less than 1.0, indicating undermatching. In an applied context, why might undermatching actually be beneficial for the client? Consider what would happen if a client showed perfect matching ($s = 1.0$) or overmatching ($s > 1.0$) in an environment where reinforcement contingencies are imperfect or variable. Under what circumstances would you want $s$ to be as high as possible?

3. A colleague argues that the matching law is "just curve fitting" and does not explain anything about behavior. How would you respond? In your answer, distinguish between the matching law as a quantitative description (it tells you the shape of the function and the values of the parameters) and the matching law as part of a broader theoretical framework (it derives from a principle---proportional allocation---that can be tested independently). What would it take to move from description to explanation?

4. Suppose you are evaluating two treatment packages for a client. Treatment A reduces problem behavior by increasing reinforcement for appropriate behavior (changing $r_1/r_2$). Treatment B adds a response cost for problem behavior (essentially making problem behavior more "expensive" in terms of effort or lost opportunities). How might each treatment affect the sensitivity and bias parameters in a matching analysis? Which treatment would you expect to produce more durable effects, and why?

---

## Key Readings

**Required:**

- Reed, D. D., & Kaplan, B. A. (2011). The matching law: A tutorial for practitioners. *Behavior Analysis in Practice, 4*(2), 15--24.
- McDowell, J. J. (1989). Two modern developments in matching theory. *The Behavior Analyst, 12*(2), 153--166.
- Fisher, W. W., & Mazur, J. E. (1997). Basic and applied research on choice responding. *Journal of Applied Behavior Analysis, 30*(3), 387--410.

---

## Reading Guide

### Reed & Kaplan (2011)

- How do the authors define "choice" from a behavior analytic perspective?
- What is the matching law, and what does it predict?
- Describe how Herrnstein's original experiment with pigeons led to the matching law.
- How can relative response rates be used to infer preference?
- Why use ratios (B1/B2 and R1/R2) in matching analyses?
- How is matching observed in real-world behavior (e.g., classrooms, playgrounds)?
- What is the Generalized Matching Equation (GME), and how does it build on the original?
- What do the parameters b (bias) and s (sensitivity) represent in the GME?
- How can we interpret the slope and intercept of a matching line?
- What are common sources of bias in applied matching analyses?
- What kind of data would you need to conduct a matching analysis in practice?
- How do different reinforcer dimensions (rate, quality, effort, delay) affect matching outcomes?
- How might one use matching analyses to evaluate the effectiveness of intervention strategies?
- How can matching help us understand reinforcer substitutability?
- How can a practitioner use the bias parameter to tailor treatment?
- What are some limitations of matching law applications in applied contexts?

### McDowell (1989)

- What is meant by "asymmetrical choice situations"?
- Why are most natural human choice situations considered asymmetrical?
- What mathematical form does McDowell discuss for asymmetrical choice?
- How does this power function differ from the original (linear) matching law?
- Why might a power function better describe human choice behavior?
- What does McDowell refer to by "indifferent responding"?
- How is indifferent responding incorporated into the model?
- Why might indifference occur even when reinforcement rates differ?
- Why are these developments considered "modern"?
- Why does McDowell believe biased responding IS NOT a big deal for matching theory?
- Why does McDowell believe undermatching IS a big deal for matching theory?

### Fisher & Mazur (1997)

- What is the primary focus of this article in terms of research synthesis?
- How do the authors define "choice responding"?
- What is the role of concurrent schedules in studying choice?
- What kinds of dependent variables are typically used in choice research?
- What are some of the reinforcer dimensions shown to influence choice responding?
- How have researchers used choice procedures to study problem behavior?
- What are some examples from the article of how choice analyses have informed functional analyses?
- What are the potential benefits of analyzing choice behavior in clinical populations?
- How do Fisher and Mazur connect laboratory-based findings with applied intervention strategies?
- Why is it important to distinguish between molar and molecular analyses of behavior?
- What recommendations do the authors give for future research in applied choice responding?
- How can quantitative modeling support individualized treatment planning?

---

## Key Takeaways

- **Choice is behavior allocation.** From a behavior-analytic perspective, choice is the measurable distribution of behavior across available alternatives, not a private mental event. This framing makes choice a continuous variable amenable to quantitative modeling.

- **The matching law** states that the relative rate of responding on an alternative approximately equals the relative rate of reinforcement obtained from that alternative. Discovered by Herrnstein (1961) with pigeons on concurrent VI schedules, it was the first quantitative law of choice in behavior science.

- **Herrnstein's hyperbola**, $R = \frac{k \cdot r}{r + r_e}$, extends matching to the single-schedule case by recognizing that all behavior occurs in a context of competing reinforcement sources. The parameter $k$ is the asymptotic response rate (motor/motivational ceiling), and $r_e$ is the extraneous reinforcement rate (reinforcement from all unmeasured sources).

- **The generalized matching equation (GME)**, $\log(B_1/B_2) = s \cdot \log(r_1/r_2) + \log(b)$, is the standard tool for analyzing concurrent-schedule data. The log-ratio transformation linearizes the matching relation for easy regression analysis.

- **Sensitivity** ($s$) measures how precisely behavior tracks reinforcement ratios. $s = 1$ is strict matching; $s < 1$ is undermatching (the most common finding, typically $s \approx 0.8$ for pigeons); $s > 1$ is overmatching (rare).

- **Bias** ($b$) captures systematic preference unrelated to reinforcement rates, arising from factors such as response topography, spatial location, qualitative reinforcer differences, or stimulus properties. $b = 1$ indicates no bias.

- **Fitting the GME** involves computing log ratios of behavior and reinforcement for each condition, then performing ordinary least-squares regression to estimate $s$ and $\log(b)$. The $R^2$ of the regression quantifies goodness of fit.

- **The 8-step framework** structures the entire modeling process: from clearly specifying the phenomenon (concurrent VI-VI choice), through stating assumptions (steady state, independent schedules, molar aggregation), to writing and testing the model (log-ratio linear equation, regression fit, predictions for new conditions).

- **Applied relevance.** Matching-law analyses inform functional analysis, treatment evaluation, and clinical decision-making by quantifying the reinforcement contingencies that govern behavior allocation. Key applied references include Fisher and Mazur (1997), McDowell (1989), and Reed and Kaplan (2011).

- **Limitations.** The GME is a molar, steady-state, two-alternative model. It does not describe molecular dynamics, transitional states, or the mechanism by which matching emerges. These limitations define its scope and point toward the dynamic and computational models covered in later weeks.
