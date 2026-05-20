# Chapter 4: Historical Models: Matching and Discounting

> Week 2 of the 13-week sequence.

## Why This Topic Matters

All behavior is choice. At every moment, an organism is emitting one (or more) responses out of the dozens, hundreds, maybe thousands of behaviors they could emit. Because all behavior involves choice, a science of behavior must have something quantitative to say about it. For most of the twentieth century, behavior science described choice qualitatively (e.g., organisms prefer more reinforcement to less, sooner to later) but we could not predict the precise allocation of behavior across alternatives. The matching law changed that.

In 1961, Richard Herrnstein placed pigeons in operant chambers with two response keys, each associated with an independent variable-interval (VI) schedule of food reinforcement. He measured the proportion of pecks directed at each key and the proportion of reinforcers obtained from each key. The result was striking in its simplicity: the relative rate of responding on a key approximately equaled the relative rate of reinforcement obtained from that key. If 70% of the reinforcers came from the left key, about 70% of the pecks went to the left key. This was not a loose tendency; it was a tight quantitative regularity that held across a wide range of schedule parameters, across species, and across response types. Herrnstein called it the matching law.

The matching law matters for this course because it was the first demonstration that behavior science could produce quantitative laws comparable to those in physics and economics. It showed that organisms are not merely sensitive to reinforcement---they are exquisitely calibrated to the relative rates, amounts, and delays of reinforcement across alternatives. The matching law also generated an entire research tradition aimed at refining, extending, and explaining the original finding. The generalized matching equation, Herrnstein's single-alternative hyperbola, and modern computational accounts of choice all trace their lineage to that initial discovery.

But the matching law is not the only hyperbolic model in the behavioral repertoire. Delay discounting---the decline in subjective value of a reinforcer as the delay to its receipt increases---follows the same mathematical family. Mazur's hyperbolic discounting equation, {$$}V = A/(1 + kD){/$$}, describes how value changes with delay just as Herrnstein's hyperbola describes how response rate changes with reinforcement rate. Both are rectangular hyperbolas. Both capture a fundamental regularity: diminishing sensitivity to a schedule parameter (reinforcement rate in one case, delay in the other). Both were landmark discoveries that transformed qualitative intuitions into precise quantitative predictions. This week, we study both models together, apply the 8-step modeling framework to matching, and then extend the same logic to discounting.

---

## Core Concepts: Matching

### Choice as Behavior Allocation

From a behavior-analytic perspective, **choice** is not a mental event or a decision process hidden inside the organism. Choice is simply the allocation of behavior across available alternatives. When two keys are available and the pigeon pecks the left key more often than the right, the pigeon is "choosing" the left key in the only sense that matters for a natural science of behavior: it is allocating more behavior to that alternative.

This framing has an important consequence: choice becomes a continuous, measurable variable rather than a discrete, all-or-nothing event. We do not ask "Which key did the pigeon choose?" as if each peck were an independent decision. Instead, we ask "How did the pigeon distribute its behavior across the two keys over the session?" The answer is a ratio---and ratios are what the matching law describes.

The behavior-allocation view also means that choice is always happening, even when we do not set up an explicit choice procedure. In a single-schedule arrangement, the organism is still choosing between the measured operant and all other available activities (grooming, exploring, resting). Herrnstein's insight was to recognize that the single-schedule case is just a special case of choice, and that recognizing this fact leads directly to quantitative predictions about response rate.

This conceptual shift---from "choice as decision" to "choice as allocation"---is foundational for everything that follows. It turns choice into a dependent variable that can be measured on a continuous scale, modeled with equations, and predicted from environmental parameters. It also means that the matching law is not merely a finding about concurrent schedules; it is a general statement about how behavior is distributed in any environment where multiple sources of reinforcement are available.

### Herrnstein's Single-Alternative Matching

Herrnstein (1970) extended the matching law to the single-schedule case by reasoning as follows: if an organism always distributes behavior in proportion to relative reinforcement, then behavior on a single measured schedule depends not only on the reinforcement that schedule provides but also on all other sources of reinforcement available in the environment. These unmeasured sources---reinforcement from grooming, exploring, resting, and other activities---are collectively called **extraneous reinforcement** and denoted {$$}r_e{/$$}.

The resulting model is known as **Herrnstein's hyperbola**:

{$$}R = \frac{k \cdot r}{r + r_e}{/$$}

where:

- {$$}R{/$$} is the observed response rate on the measured alternative (responses per minute)
- {$$}r{/$$} is the obtained reinforcement rate on the measured alternative (reinforcers per minute)
- {$$}k{/$$} is the **asymptotic response rate**---the maximum rate the organism would achieve if all reinforcement in the environment came from the measured alternative. It reflects motor capacity and motivational ceiling.
- {$$}r_e{/$$} is the **extraneous reinforcement rate**---the aggregate reinforcement from all unmeasured sources. It controls the curvature of the function.

The equation describes a rectangular hyperbola. When {$$}r{/$$} is small relative to {$$}r_e{/$$}, the function is approximately linear---small increases in reinforcement produce proportional increases in responding. As {$$}r{/$$} grows large relative to {$$}r_e{/$$}, the function negatively accelerates and response rate approaches {$$}k{/$$} asymptotically. The half-maximum point occurs at {$$}r = r_e{/$$}, where {$$}R = k/2{/$$}. This gives {$$}r_e{/$$} a direct behavioral interpretation: it is the reinforcement rate at which responding reaches half its ceiling.

To build further intuition, consider the two extreme cases. When {$$}r{/$$} is very small---say, the organism earns only one reinforcer per hour---the extraneous reinforcement from all other activities in the chamber dominates. The term {$$}r + r_e{/$$} is approximately {$$}r_e{/$$}, and the equation simplifies to {$$}R \approx (k/r_e) \cdot r{/$$}, which is a straight line through the origin with slope {$$}k/r_e{/$$}. Responding increases linearly with reinforcement in this range. At the other extreme, when {$$}r{/$$} is very large---say, several reinforcers per minute---the term {$$}r + r_e{/$$} is approximately {$$}r{/$$}, and the equation simplifies to {$$}R \approx k{/$$}. No matter how much reinforcement is added, the organism cannot respond faster than {$$}k{/$$}. The transition between these regimes is governed by {$$}r_e{/$$}: a small {$$}r_e{/$$} means the organism reaches its ceiling at relatively low reinforcement rates, while a large {$$}r_e{/$$} means the organism needs more reinforcement before saturation effects appear.

Herrnstein's hyperbola was a landmark because it derived the well-known negatively accelerated relationship between VI reinforcement rate and response rate from a single principle---matching---applied to the total reinforcement context. It unified single-schedule performance with concurrent-schedule choice under one quantitative framework. The equation also has practical significance: it provides a way to estimate how much "background" reinforcement is available in a given environment, which is relevant to applied questions about the effectiveness of reinforcement-based interventions.

Why does the hyperbolic form arise? Consider the matching principle in its simplest form for the single-schedule case. The organism distributes its total behavioral output ({$$}k{/$$}) across the measured operant and extraneous alternatives in proportion to the reinforcement each provides:

{$$}R = k \cdot \frac{r}{r + r_e}{/$$}

The fraction {$$}r / (r + r_e){/$$} is the proportion of total reinforcement that comes from the measured alternative. The organism allocates the same proportion of its total behavioral output to that alternative. This is matching applied at the molar level, and it produces the hyperbola directly.

### The Generalized Matching Equation (GME)

The original matching law states that relative response rate equals relative reinforcement rate. In practice, however, the match is rarely exact. Organisms sometimes **undermatch** (allocating behavior less extremely than reinforcement ratios would predict) or show a systematic **bias** toward one alternative. To accommodate these deviations, Baum (1974) proposed the **generalized matching equation**:

{$$}\log\left(\frac{B_1}{B_2}\right) = s \cdot \log\left(\frac{r_1}{r_2}\right) + \log(b){/$$}

where:

- {$$}B_1{/$$} and {$$}B_2{/$$} are response rates (or time allocations) on alternatives 1 and 2
- {$$}r_1{/$$} and {$$}r_2{/$$} are reinforcement rates on alternatives 1 and 2
- {$$}s{/$$} is the **sensitivity** parameter (slope)
- {$$}b{/$$} is the **bias** parameter (the antilog of the intercept)

In its power-function form, the GME is written:

{$$}\frac{B_1}{B_2} = b \left(\frac{r_1}{r_2}\right)^s{/$$}

The log-ratio transformation linearizes this relationship, making it easy to fit with ordinary least-squares regression. A plot of {$$}\log(B_1/B_2){/$$} against {$$}\log(r_1/r_2){/$$} should yield a straight line with slope {$$}s{/$$} and intercept {$$}\log(b){/$$}.

The key parameter is **sensitivity** ({$$}s{/$$}). When {$$}s = 1{/$$}, the organism is **strictly matching**---the behavior ratio exactly equals the reinforcement ratio. When {$$}s < 1{/$$}, the organism is **undermatching**---behavior ratios are less extreme than reinforcement ratios, meaning the organism distributes behavior more evenly across alternatives than reinforcement alone would predict. When {$$}s > 1{/$$}, the organism is **overmatching**---behavior ratios are more extreme than reinforcement ratios, meaning the organism concentrates behavior on the richer alternative even more than the reinforcement differential warrants.

To understand why the log-ratio transformation is used, recall the basic algebra. Starting from the power-function form:

{$$}\frac{B_1}{B_2} = b \left(\frac{r_1}{r_2}\right)^s{/$$}

Take the logarithm (base 10) of both sides:

{$$}\log\left(\frac{B_1}{B_2}\right) = \log\left[b \left(\frac{r_1}{r_2}\right)^s\right]{/$$}

Apply the product rule of logarithms:

{$$}\log\left(\frac{B_1}{B_2}\right) = \log(b) + \log\left[\left(\frac{r_1}{r_2}\right)^s\right]{/$$}

Apply the power rule of logarithms:

{$$}\log\left(\frac{B_1}{B_2}\right) = s \cdot \log\left(\frac{r_1}{r_2}\right) + \log(b){/$$}

This is a linear equation of the form {$$}y = mx + c{/$$}, where {$$}y = \log(B_1/B_2){/$$}, {$$}x = \log(r_1/r_2){/$$}, {$$}m = s{/$$}, and {$$}c = \log(b){/$$}. The transformation converts a potentially complex nonlinear relationship into a straight line, which can be fitted by ordinary least-squares regression and interpreted visually.

The choice of base-10 logarithms is conventional in the matching literature. Natural logarithms would produce the same slope and the same {$$}R^2{/$$}; only the numerical value of the intercept would change. By convention, base-10 logs are used so that a log ratio of 1.0 corresponds to a 10:1 ratio, and a log ratio of 0.301 corresponds to a 2:1 ratio.

### Undermatching and Overmatching

**Undermatching** ({$$}s < 1{/$$}) is the most commonly observed deviation from strict matching. When an organism undermatches, it responds on the leaner alternative more than strict matching would predict. In a typical concurrent VI-VI experiment with pigeons, sensitivity values cluster around {$$}s = 0.8{/$$}, indicating moderate undermatching.

Several factors contribute to undermatching:

- **Changeover cost.** If switching between alternatives is effortless, organisms may switch frequently, sampling both alternatives more evenly. This frequent switching tends to equalize response allocations, producing undermatching. If switching is costly (e.g., a changeover delay is imposed), organisms tend to stay longer on the richer alternative, increasing sensitivity toward 1.0. Thus, procedural details about the cost of switching directly affect the degree of undermatching.

- **Discriminability.** If the organism cannot easily distinguish which alternative is richer---perhaps because the reinforcement rates are similar, or the stimuli associated with the alternatives are not distinctive---behavior allocation will be less differentiated, producing undermatching. When alternatives are made more discriminable (e.g., by adding distinct colors or locations), sensitivity tends to increase.

- **Local reinforcement effects.** Organisms may track local reinforcement histories (e.g., the last few reinforcers obtained) rather than overall session-wide reinforcement rates. Local tracking can produce undermatching when measured against global reinforcement ratios, because local reinforcement rates fluctuate considerably within a session.

- **Time allocation vs. response allocation.** Sensitivity values can differ depending on whether behavior is measured as responses or as time spent on each alternative. Time-allocation measures sometimes yield sensitivity values closer to 1.0, suggesting that response allocation may underestimate the organism's true tracking of reinforcement ratios.

**Overmatching** ({$$}s > 1{/$$}) is rarer but does occur. When an organism overmatches, it concentrates behavior on the richer alternative more than strict matching predicts. Overmatching has been observed in situations where switching is very costly, where alternatives are highly discriminable, or where the data are analyzed at a fine temporal grain. Some researchers have argued that overmatching is an artifact of certain measurement procedures, while others treat it as a genuine behavioral phenomenon under specific conditions.

Understanding whether and why organisms deviate from strict matching is not merely an academic exercise. In applied settings, the sensitivity parameter tells you how sharply the client's behavior differentiates between better and worse reinforcement options---information that is directly relevant to treatment design. A client with low sensitivity may require larger reinforcement differentials to produce meaningful shifts in behavior allocation.

### Bias

The **bias** parameter ({$$}b{/$$}, or equivalently {$$}\log(b){/$$} as the intercept of the log-ratio regression) captures a systematic preference for one alternative that is not explained by the reinforcement rates. When {$$}b = 1{/$$} (i.e., {$$}\log(b) = 0{/$$}), there is no bias---any preference is entirely attributable to differential reinforcement. When {$$}b > 1{/$$}, the organism shows a systematic preference for alternative 1 even after reinforcement rates are accounted for. When {$$}b < 1{/$$}, the preference favors alternative 2.

Bias can arise from several sources:

- **Response topography.** One alternative may be physically easier to perform. A pigeon might show a spatial bias toward the left key because of a slight asymmetry in its position relative to the food hopper, or because one key requires less force to activate.

- **Spatial or positional preference.** Organisms often show side preferences that persist across conditions. These may be innate tendencies or may develop through early experience. In human participants, right-hand biases or left-field attentional preferences can produce measurable bias.

- **Qualitative reinforcer differences.** If the reinforcers delivered by the two alternatives differ in quality, magnitude, or type (e.g., food vs. water, preferred food vs. non-preferred food), the bias parameter absorbs this asymmetry. This application of the GME is deliberate: researchers sometimes manipulate reinforcer quality across alternatives specifically to estimate how much bias a given quality difference produces, using the GME as a measurement tool.

- **Stimulus properties.** Color preferences, key location, or other non-reinforcement-related stimulus features can contribute to bias. If one key is associated with a preferred color, the organism may allocate more behavior to that key regardless of the reinforcement schedule.

- **Historical effects.** An organism's reinforcement history with particular alternatives, stimuli, or locations can produce bias that persists even when current reinforcement conditions are equated.

In practice, bias is often small in well-controlled laboratory preparations---typically {$$}|\log(b)| < 0.1{/$$} in pigeon concurrent VI-VI experiments. Its importance increases in applied settings where the alternatives may differ in many ways beyond scheduled reinforcement rate. In such settings, identifying and quantifying bias is crucial for understanding the full picture of behavior allocation.

---

## Applying the 8-Step Framework: Matching

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

{$$}\frac{B_1}{B_2} = b \left(\frac{r_1}{r_2}\right)^s{/$$}

In log-ratio form:

{$$}\log\left(\frac{B_1}{B_2}\right) = s \cdot \log\left(\frac{r_1}{r_2}\right) + \log(b){/$$}

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

{$$}\log\left(\frac{B_1}{B_2}\right) = s \cdot \log\left(\frac{r_1}{r_2}\right) + \log(b){/$$}

In plain language: take the log of how much more the pigeon pecks one key than the other. This is predicted by a straight line whose input is the log of how much more reinforcement one key provides than the other. The slope {$$}s{/$$} tells you how steeply behavior tracks reinforcement. The intercept {$$}\log(b){/$$} tells you whether the pigeon has an inherent preference for one side.

Equivalently, in the power-function form: the behavior ratio equals the reinforcement ratio raised to the power {$$}s{/$$} and multiplied by a bias constant {$$}b{/$$}. When {$$}s = 1{/$$} and {$$}b = 1{/$$}, this reduces to the original matching law: {$$}B_1/B_2 = r_1/r_2{/$$}.

### Step 6: Verify Dimensional Consistency

- {$$}B_1 / B_2{/$$}: responses per minute divided by responses per minute = dimensionless.
- {$$}r_1 / r_2{/$$}: reinforcers per minute divided by reinforcers per minute = dimensionless.
- {$$}\log(B_1 / B_2){/$$}: log of a dimensionless number = dimensionless.
- {$$}\log(r_1 / r_2){/$$}: log of a dimensionless number = dimensionless.
- {$$}s{/$$}: dimensionless (it is the slope relating two dimensionless log ratios).
- {$$}\log(b){/$$}: dimensionless.
- {$$}s \cdot \log(r_1/r_2) + \log(b){/$$}: dimensionless + dimensionless = dimensionless.

Both sides of the equation are dimensionless. Units are consistent. Note that the log-ratio formulation has the feature of eliminating all physical units at the outset, so dimensional consistency is satisfied trivially. This is one of the practical advantages of the log-ratio approach.

### Step 7: Specify Starting Values and Constraints

- {$$}s > 0{/$$}: sensitivity must be positive. A negative sensitivity would mean that increasing reinforcement on one alternative decreases responding on that alternative, which contradicts the matching principle.
- Typical range: {$$}0.5 \leq s \leq 1.5{/$$} for concurrent VI-VI schedules with pigeons, with {$$}s \approx 0.8{/$$} being a common finding for response-rate measures and {$$}s \approx 0.9{/$$}--{$$}1.0{/$$} for time-allocation measures.
- {$$}b > 0{/$$}: bias must be positive (it is a ratio). {$$}b = 1{/$$} (equivalently, {$$}\log(b) = 0{/$$}) indicates no bias.
- Typical range for {$$}\log(b){/$$}: {$$}-0.2 \leq \log(b) \leq 0.2{/$$} in well-controlled pigeon experiments.
- The model applies to concurrent VI-VI schedules at steady state.
- Data should include at least 3--5 conditions (different schedule-value pairs) to estimate the two parameters reliably. More conditions are better, especially if they span a wide range of reinforcement ratios.
- Reinforcement rates should span a range wide enough that the log-ratio values cover a meaningful interval (e.g., from {$$}\log(r_1/r_2) = -0.5{/$$} to {$$}\log(r_1/r_2) = 0.5{/$$} or wider). A wider range provides more leverage for estimating the slope.
- Both {$$}B_1{/$$} and {$$}B_2{/$$} must be greater than zero in every condition. If the organism stops responding on one alternative entirely (exclusive preference), the log ratio is undefined, and that condition cannot be included in the analysis.

### Step 8: Check the Math, Test Against Data, and Derive Predictions

**Verify.** We check the model's predictions at informative boundary conditions:

- When {$$}r_1 = r_2{/$$} (equal reinforcement rates): {$$}\log(r_1/r_2) = 0{/$$}, so {$$}\log(B_1/B_2) = \log(b){/$$}. If there is no bias ({$$}b = 1{/$$}), then {$$}\log(B_1/B_2) = 0{/$$}, meaning {$$}B_1 = B_2{/$$}---the pigeon pecks both keys equally. This is sensible: equal reinforcement should produce equal responding in the absence of bias.

- When {$$}r_1 > r_2{/$$}: {$$}\log(r_1/r_2) > 0{/$$}, and {$$}\log(B_1/B_2) > 0{/$$} (assuming {$$}s > 0{/$$}), meaning the pigeon pecks key 1 more. This is sensible.

- When {$$}r_1 \gg r_2{/$$} (extreme reinforcement asymmetry): {$$}\log(r_1/r_2){/$$} is large and positive, so {$$}\log(B_1/B_2){/$$} is large and positive, meaning the pigeon strongly prefers key 1. This is sensible.

- If {$$}s = 1{/$$} and {$$}b = 1{/$$}, the equation reduces to {$$}\log(B_1/B_2) = \log(r_1/r_2){/$$}, or equivalently {$$}B_1/B_2 = r_1/r_2{/$$}---strict matching. This is the special case from which the model was generalized, confirming that the GME nests the original matching law.

**Validate.** Fit the linear equation to data from our pigeon across multiple concurrent VI-VI conditions using ordinary least-squares regression. Compute {$$}R^2{/$$} and examine residuals for systematic patterns. In well-conducted experiments, {$$}R^2{/$$} values above 0.95 are typical, and residuals should show no systematic curvature.

**Solve.** For our specific example (VI 60-s vs. VI 120-s), if the pigeon obtains reinforcement rates close to the programmed rates:

- {$$}r_1 \approx 1.0{/$$} reinforcers/min (from the VI 60-s key)
- {$$}r_2 \approx 0.5{/$$} reinforcers/min (from the VI 120-s key)
- {$$}\log(r_1/r_2) = \log(1.0/0.5) = \log(2.0) \approx 0.301{/$$}

If we have already estimated {$$}s = 0.85{/$$} and {$$}\log(b) = 0.03{/$$} from previous conditions:

{$$}\log(B_1/B_2) = 0.85 \times 0.301 + 0.03 = 0.256 + 0.03 = 0.286{/$$}

{$$}B_1/B_2 = 10^{0.286} \approx 1.93{/$$}

The model predicts the pigeon will peck the VI 60-s key about 1.93 times as often as the VI 120-s key. Under strict matching ({$$}s = 1, b = 1{/$$}), the prediction would be a 2:1 ratio. The slightly lower predicted ratio (1.93:1) reflects the mild undermatching ({$$}s = 0.85{/$$}) partially offset by the small bias toward alternative 1 ({$$}\log(b) = 0.03{/$$}).

If we further know that the pigeon's total response rate across both keys is about 60 pecks per minute, we can solve for the individual response rates:

{$$}B_1 = 1.93 \cdot B_2{/$$}

{$$}B_1 + B_2 = 60{/$$}

{$$}1.93 \cdot B_2 + B_2 = 60{/$$}

{$$}2.93 \cdot B_2 = 60{/$$}

{$$}B_2 \approx 20.5 \text{ resp/min}{/$$}

{$$}B_1 \approx 39.5 \text{ resp/min}{/$$}

These are concrete, testable predictions that can be compared to the pigeon's observed performance in the next session.

---

## Worked Example: Matching

### Dataset

A pigeon is exposed to five conditions of concurrent VI-VI schedules. In each condition, the pigeon responds on two keys for 25--30 sessions until response rates stabilize. The following data are obtained from the last five sessions of each condition (averaged):

| Condition | Left VI (s) | Right VI (s) | {$$}r_1{/$$} (reinf/min) | {$$}r_2{/$$} (reinf/min) | {$$}B_1{/$$} (resp/min) | {$$}B_2{/$$} (resp/min) |
|-----------|-------------|--------------|--------------------|--------------------|-------------------|-------------------|
| 1         | 30          | 120          | 1.85               | 0.47               | 52.3              | 12.1              |
| 2         | 60          | 60           | 0.94               | 0.91               | 28.7              | 25.9              |
| 3         | 120         | 30           | 0.46               | 1.88               | 11.8              | 49.7              |
| 4         | 45          | 90           | 1.28               | 0.63               | 40.1              | 18.6              |
| 5         | 90          | 45           | 0.64               | 1.31               | 19.2              | 38.4              |

Notice several features of this dataset. The reinforcement rates are the *obtained* rates---the rates the pigeon actually earned---not the programmed rates. Obtained rates are typically slightly lower than programmed rates because the pigeon does not always collect reinforcers immediately. The schedule values span a range from VI 30-s (rich) to VI 120-s (lean), and the assignment of rich vs. lean to left vs. right key varies across conditions. This counterbalancing allows separation of sensitivity from side bias.

### Step 1: Compute Ratios

For each condition, compute the response ratio {$$}B_1/B_2{/$$} and the reinforcement ratio {$$}r_1/r_2{/$$}:

| Condition | {$$}r_1/r_2{/$$} | {$$}B_1/B_2{/$$} |
|-----------|-----------|-----------|
| 1         | {$$}1.85/0.47 = 3.936{/$$} | {$$}52.3/12.1 = 4.322{/$$} |
| 2         | {$$}0.94/0.91 = 1.033{/$$} | {$$}28.7/25.9 = 1.108{/$$} |
| 3         | {$$}0.46/1.88 = 0.245{/$$} | {$$}11.8/49.7 = 0.237{/$$} |
| 4         | {$$}1.28/0.63 = 2.032{/$$} | {$$}40.1/18.6 = 2.156{/$$} |
| 5         | {$$}0.64/1.31 = 0.489{/$$} | {$$}19.2/38.4 = 0.500{/$$} |

Already we can see the matching pattern: when the reinforcement ratio favors the left key (Conditions 1, 2, 4), the response ratio also favors the left key, and vice versa (Conditions 3, 5). The response ratios are close to the reinforcement ratios but not identical---this is where the GME's sensitivity and bias parameters earn their keep.

### Step 2: Compute Log Ratios

Transform to base-10 logarithms:

| Condition | {$$}\log(r_1/r_2){/$$} | {$$}\log(B_1/B_2){/$$} |
|-----------|-----------------|-----------------|
| 1         | {$$}\log(3.936) = 0.595{/$$} | {$$}\log(4.322) = 0.636{/$$} |
| 2         | {$$}\log(1.033) = 0.014{/$$} | {$$}\log(1.108) = 0.045{/$$} |
| 3         | {$$}\log(0.245) = -0.611{/$$} | {$$}\log(0.237) = -0.625{/$$} |
| 4         | {$$}\log(2.032) = 0.308{/$$} | {$$}\log(2.156) = 0.334{/$$} |
| 5         | {$$}\log(0.489) = -0.311{/$$} | {$$}\log(0.500) = -0.301{/$$} |

The log-ratio transformation has several useful properties visible in this table. Note that Conditions 3 and 1 are approximate mirror images: the VI 30-s and VI 120-s schedules are simply swapped between keys. In log-ratio space, this produces points that are approximately symmetric about the origin, which is exactly what should happen if the pigeon is responding to relative reinforcement rather than to absolute features of a particular key location.

### Step 3: Fit the Linear Equation

We fit the linear model {$$}\log(B_1/B_2) = s \cdot \log(r_1/r_2) + \log(b){/$$} using ordinary least-squares regression with {$$}x = \log(r_1/r_2){/$$} as the predictor and {$$}y = \log(B_1/B_2){/$$} as the outcome.

**Compute the means:**

{$$}\bar{x} = \frac{0.595 + 0.014 + (-0.611) + 0.308 + (-0.311)}{5} = \frac{-0.005}{5} = -0.001{/$$}

{$$}\bar{y} = \frac{0.636 + 0.045 + (-0.625) + 0.334 + (-0.301)}{5} = \frac{0.089}{5} = 0.018{/$$}

**Compute the deviations and cross-products:**

| Condition | {$$}x_i - \bar{x}{/$$} | {$$}y_i - \bar{y}{/$$} | {$$}(x_i - \bar{x})(y_i - \bar{y}){/$$} | {$$}(x_i - \bar{x})^2{/$$} |
|-----------|-----------------|-----------------|----------------------------------|---------------------|
| 1         | {$$}0.596{/$$}         | {$$}0.618{/$$}         | {$$}0.368{/$$}                          | {$$}0.355{/$$}             |
| 2         | {$$}0.015{/$$}         | {$$}0.027{/$$}         | {$$}0.000{/$$}                          | {$$}0.000{/$$}             |
| 3         | {$$}-0.610{/$$}        | {$$}-0.643{/$$}        | {$$}0.392{/$$}                          | {$$}0.372{/$$}             |
| 4         | {$$}0.309{/$$}         | {$$}0.316{/$$}         | {$$}0.098{/$$}                          | {$$}0.095{/$$}             |
| 5         | {$$}-0.310{/$$}        | {$$}-0.319{/$$}        | {$$}0.099{/$$}                          | {$$}0.096{/$$}             |

**Compute the slope ({$$}s{/$$}):**

{$$}s = \frac{\sum (x_i - \bar{x})(y_i - \bar{y})}{\sum (x_i - \bar{x})^2} = \frac{0.368 + 0.000 + 0.392 + 0.098 + 0.099}{0.355 + 0.000 + 0.372 + 0.095 + 0.096} = \frac{0.957}{0.918} = 1.042{/$$}

**Compute the intercept ({$$}\log(b){/$$}):**

{$$}\log(b) = \bar{y} - s \cdot \bar{x} = 0.018 - 1.042 \times (-0.001) = 0.018 + 0.001 = 0.019{/$$}

Therefore: {$$}b = 10^{0.019} \approx 1.045{/$$}

**The fitted equation is:**

{$$}\log(B_1/B_2) = 1.042 \cdot \log(r_1/r_2) + 0.019{/$$}

### Step 4: Interpret the Parameters

**Sensitivity: {$$}s = 1.04{/$$}.** This value is very close to 1.0, indicating that this pigeon is approximately **strict matching**. The behavior ratio tracks the reinforcement ratio almost exactly. There is a very slight tendency toward overmatching, but a deviation of 0.04 from 1.0 is well within the range expected from sampling variability in a five-point regression. We would not want to make strong claims about overmatching without more data points and a formal statistical test.

In behavioral terms, {$$}s = 1.04{/$$} means that when the reinforcement ratio between the two keys doubles (e.g., from 2:1 to 4:1), the behavior ratio slightly more than doubles. The pigeon is tracking reinforcement ratios with high fidelity.

**Bias: {$$}\log(b) = 0.019{/$$}, or {$$}b = 1.045{/$$}.** The pigeon shows a very small bias toward the left key. Even when reinforcement rates are approximately equal (Condition 2, where {$$}r_1/r_2 = 1.033{/$$}), the pigeon pecks the left key slightly more ({$$}B_1/B_2 = 1.108{/$$}). A bias of {$$}b = 1.045{/$$} means the pigeon responds about 4.5% more on the left key than would be predicted by the reinforcement ratio alone. This could reflect a spatial preference, a slight positional advantage of the left key relative to the food hopper, or an idiosyncratic habit.

### Step 5: Assess Goodness of Fit

The {$$}R^2{/$$} for this regression quantifies how well the GME accounts for the variance in behavior allocation across conditions.

**Total sum of squares:**

{$$}SS_{total} = \sum (y_i - \bar{y})^2 = 0.618^2 + 0.027^2 + 0.643^2 + 0.316^2 + 0.319^2{/$$}

{$$}= 0.382 + 0.001 + 0.413 + 0.100 + 0.102 = 0.998{/$$}

**Regression sum of squares:**

{$$}SS_{regression} = s \cdot \sum (x_i - \bar{x})(y_i - \bar{y}) = 1.042 \times 0.957 = 0.997{/$$}

**Residual sum of squares:**

{$$}SS_{residual} = SS_{total} - SS_{regression} = 0.998 - 0.997 = 0.001{/$$}

**{$$}R^2{/$$}:**

{$$}R^2 = 1 - \frac{SS_{residual}}{SS_{total}} = 1 - \frac{0.001}{0.998} = 0.999{/$$}

An {$$}R^2{/$$} of 0.999 indicates that the generalized matching equation accounts for essentially all of the variance in this pigeon's behavior allocation across these five conditions. This level of fit is typical for concurrent VI-VI data from well-trained pigeons and illustrates why the matching law is considered one of the most robust quantitative regularities in behavior science.

### Step 6: Generate a Prediction

Having fitted the model, we can predict the pigeon's behavior in a new, untested condition. Suppose we plan to expose the pigeon to concurrent VI 40-s VI 80-s. The expected reinforcement rates are approximately {$$}r_1 = 1.5{/$$} reinforcers/min and {$$}r_2 = 0.75{/$$} reinforcers/min.

{$$}\log(r_1/r_2) = \log(1.5/0.75) = \log(2.0) = 0.301{/$$}

{$$}\log(B_1/B_2) = 1.042 \times 0.301 + 0.019 = 0.314 + 0.019 = 0.333{/$$}

{$$}B_1/B_2 = 10^{0.333} = 2.15{/$$}

The model predicts the pigeon will peck the left key about 2.15 times as often as the right key. This prediction can be tested by running the new condition and comparing the observed behavior ratio to 2.15.

---

## From Matching to Discounting: The Same Mathematical Structure

The matching law and delay discounting are usually taught as separate topics, but they share a deep mathematical kinship that illuminates both. Consider the two core equations side by side:

**Herrnstein's hyperbola (matching):**

{$$}R = \frac{k \cdot r}{r + r_e}{/$$}

**Mazur's hyperbola (discounting):**

{$$}V = \frac{A}{1 + kD}{/$$}

Both are rectangular hyperbolas. Both describe a dependent variable (response rate in one case, subjective value in the other) that changes as a function of an environmental parameter (reinforcement rate, delay). And both capture the same qualitative pattern: **diminishing sensitivity**. In Herrnstein's equation, each additional unit of reinforcement rate produces a smaller increment in response rate as {$$}r{/$$} grows. In Mazur's equation, each additional unit of delay produces a smaller decrement in subjective value as {$$}D{/$$} grows. The first units of the independent variable matter most; subsequent units have progressively less impact.

This is not a coincidence. Mazur himself noted the connection between his discounting model and the matching framework. The matching law says organisms allocate behavior in proportion to relative reinforcement value. If the value of a reinforcer depends hyperbolically on its delay, then matching across alternatives that differ in delay will produce the same kind of systematic, quantifiable patterns seen in concurrent VI-VI schedules. In this sense, the discounting function is a component of the matching framework---it specifies how delay transforms reinforcer value before that value enters the matching equation.

The parallel extends to the parameters. In Herrnstein's hyperbola, {$$}r_e{/$$} controls how quickly response rate approaches its ceiling---it is the reinforcement rate at which responding is half-maximal. In Mazur's hyperbola, {$$}1/k{/$$} is the delay at which value drops to half its face value. Both parameters define a "half-life" that characterizes the sensitivity of the system. Both are individual-difference variables: organisms differ in {$$}r_e{/$$} (how much extraneous reinforcement their environment provides) and in {$$}k{/$$} (how steeply they discount delayed outcomes).

The shared hyperbolic structure also means both models predict a specific pattern of diminishing returns that contrasts with simpler alternatives. A linear model of matching would predict that response rate increases indefinitely with reinforcement rate---it does not. An exponential model of discounting would predict a constant proportional decline per unit delay---it does not. The hyperbolic form, in both domains, captures the empirical reality that organisms show steep sensitivity to changes near the origin and increasingly muted sensitivity further out.

Understanding this shared structure serves a pedagogical purpose as well. If you have mastered the logic of fitting, interpreting, and evaluating Herrnstein's hyperbola for matching data, you already have the conceptual toolkit for doing the same with Mazur's hyperbola for discounting data. The 8-step framework applies identically. The parameters have analogous interpretations. The diagnostic checks (boundary conditions, dimensional analysis, residual patterns) work the same way. What changes is the behavioral domain---from response allocation across concurrent schedules to value decline across delays---not the mathematical or methodological logic.

---

## Core Concepts: Discounting

### Temporal Discounting

**Temporal discounting** refers to the decrease in subjective value of a reinforcer as the delay to its receipt increases. A reward available now is worth its full face value. The same reward available in a week is worth less, subjectively. The same reward in a year is worth less still. This is not a peculiarity of human cognition; it is observed in every species that has been tested under appropriate conditions.

The phenomenon is distinct from other reasons a delayed reward might be less valuable. A delayed reward might be less certain (the promiser might renege), might be accompanied by opportunity costs (you cannot use money you do not yet have), or might be devalued by inflation. Temporal discounting refers specifically to the decrease in value that occurs even when certainty, opportunity cost, and inflation are controlled---a pure effect of delay on subjective value.

The key empirical tool for studying discounting is the **indifference point**. An indifference point is the amount of an immediate reward that a person (or animal) considers equivalent in value to a larger delayed reward. For example, if a participant is indifferent between receiving \$50 now and \$100 in 6 months, then the indifference point at a 6-month delay for a \$100 delayed reward is \$50. The subjective value of the delayed \$100 is \$50.

Indifference points can be measured in several ways:

- **Adjusting-amount procedures**: The experimenter systematically increases or decreases the immediate amount until the participant is approximately indifferent.
- **Titrating procedures**: A staircase method where the immediate amount adjusts up after a "wait" choice and down after a "now" choice, converging on the indifference point.
- **Fixed-choice arrays**: The participant makes a series of choices at each delay, and the indifference point is estimated from the pattern of choices (e.g., the last "wait" choice before switching to "now").

By measuring indifference points at multiple delays, researchers construct a **discount function**---a curve that shows how subjective value declines with delay. The shape of that curve is the central question of discounting research. Is the decline linear? Exponential? Something else entirely? The answer has both theoretical and practical consequences.

It is important to distinguish temporal discounting from related but distinct processes. **Probability discounting** refers to the decline in value as the probability of receiving a reward decreases. **Effort discounting** refers to the decline in value as the effort required to obtain a reward increases. **Social discounting** refers to the decline in generosity as the social distance to the recipient increases. All of these follow discount-like functions, and many turn out to be hyperbolic, but they involve different independent variables and may reflect different underlying processes. Here we focus exclusively on temporal discounting---the effect of delay on value---while noting that the modeling tools generalize.

### Exponential Discounting

The **exponential discounting** model expresses subjective value as:

{$$}V = A \cdot e^{-kD}{/$$}

where:
- {$$}V{/$$} is the subjective value of the delayed reward
- {$$}A{/$$} is the amount (face value) of the delayed reward
- {$$}k{/$$} is the discount rate (a positive constant)
- {$$}D{/$$} is the delay to the reward
- {$$}e{/$$} is Euler's number (~2.718)

In plain language: the value of a reward decays by a constant proportion for each unit of time that passes. If a one-week delay reduces value by 10%, then a second week reduces the remaining value by another 10%, and so on. The decline is geometric, like radioactive decay.

To see why the proportional decline is constant, consider the ratio of values at two delays separated by one unit:

{$$}\frac{V(D+1)}{V(D)} = \frac{A \cdot e^{-k(D+1)}}{A \cdot e^{-kD}} = e^{-k}{/$$}

This ratio does not depend on {$$}D{/$$}. Whether you are comparing week 0 to week 1, or week 50 to week 51, the value drops by the same fraction {$$}e^{-k}{/$$}. This is the defining property of exponential decay.

Exponential discounting has an important mathematical property: it produces **consistent preferences**. If you prefer \$100 in 52 weeks over \$50 in 51 weeks (when both are far away), you will still prefer \$100 in 1 week over \$50 now (when both are close). The relative preference does not change as both options move closer in time. This is called **stationarity** or **dynamic consistency**, and it is why exponential discounting is considered normatively "rational" and is the standard model in neoclassical economics.

The problem is that organisms---including humans---routinely violate this prediction. Preferences reverse as options approach in time. Exponential discounting cannot account for this.

### Hyperbolic Discounting (Mazur)

**Mazur's hyperbolic discounting model** (Mazur, 1987) expresses subjective value as:

{$$}V = \frac{A}{1 + kD}{/$$}

where {$$}V{/$$}, {$$}A{/$$}, {$$}k{/$$}, and {$$}D{/$$} are defined as above.

The critical difference from the exponential is the shape of the decay. The hyperbolic function declines steeply at short delays and then flattens out at longer delays. A reward delayed by one day from now loses much more value than a reward delayed by one additional day when it is already a year away. This is exactly what organisms do.

To see the difference in proportional decline, compute the same ratio as before:

{$$}\frac{V(D+1)}{V(D)} = \frac{A/(1 + k(D+1))}{A/(1 + kD)} = \frac{1 + kD}{1 + k(D+1)} = \frac{1 + kD}{1 + kD + k}{/$$}

This ratio *does* depend on {$$}D{/$$}. As {$$}D{/$$} increases, the ratio approaches 1---meaning each additional unit of delay produces a smaller proportional decline. The loss of value per unit delay is front-loaded: steep at first, increasingly gentle later. This is the mathematical signature of hyperbolic decay.

The hyperbolic form was not chosen arbitrarily. Mazur (1987) derived it from experiments with pigeons choosing between smaller-sooner and larger-later food reinforcers and showed that the hyperbolic provided a better quantitative fit than the exponential across a wide range of conditions. Subsequent work confirmed the superiority of the hyperbolic fit in humans choosing among monetary, health, and other outcomes. The hyperbolic form has been replicated in hundreds of studies and is now the standard descriptive model in the field.

It is worth noting what the hyperbolic model is and is not. It is a **descriptive** model: it tells us the shape of the discount function. It is not, by itself, an **explanatory** model: it does not tell us *why* the function is hyperbolic. Several mechanistic accounts have been proposed (e.g., Weber-Fechner-like logarithmic time perception, memory trace decay, competition among temporal representations), but the descriptive model stands on its own empirical merits regardless of which mechanistic account, if any, turns out to be correct.

### The k Parameter

The parameter {$$}k{/$$} in both the exponential and hyperbolic models is the **discount rate**. It controls how steeply value declines with delay.

- **Higher {$$}k{/$$}**: Steeper discounting. Value drops rapidly. The individual places little weight on delayed outcomes. Behaviorally, this corresponds to **impulsive** choice---preferring smaller-sooner reinforcers.
- **Lower {$$}k{/$$}**: Shallower discounting. Value is relatively well maintained across delays. The individual places substantial weight on delayed outcomes. Behaviorally, this corresponds to **self-controlled** choice---preferring larger-later reinforcers.

A useful way to interpret {$$}k{/$$} concretely: in the hyperbolic model, the **half-life** of value---the delay at which subjective value drops to half the face value---is {$$}D_{1/2} = 1/k{/$$}. If {$$}k = 0.10{/$$} per week, then value drops to half at {$$}D = 10{/$$} weeks. If {$$}k = 0.01{/$$} per week, value drops to half at {$$}D = 100{/$$} weeks. This gives {$$}k{/$$} an intuitive temporal meaning: it tells you how quickly the reward loses half its psychological worth.

The {$$}k{/$$} parameter varies systematically across populations and conditions:

- Individuals with substance use disorders tend to have higher {$$}k{/$$} values for monetary rewards than matched controls. The effect sizes are typically medium to large.
- {$$}k{/$$} for health outcomes is often different from {$$}k{/$$} for monetary outcomes within the same individual, suggesting that discounting is at least partly outcome-specific rather than a unitary trait.
- {$$}k{/$$} for small amounts tends to be larger than {$$}k{/$$} for large amounts (the **magnitude effect**), a finding that represents a well-documented limitation of the simple model. For example, {$$}k{/$$} for \$10 might be five times larger than {$$}k{/$$} for \$1,000.
- {$$}k{/$$} decreases across development from childhood to adulthood, consistent with the development of self-control.
- {$$}k{/$$} tends to be higher in populations with lower income and less education, though the causal direction of this relationship is debated.

Because {$$}k{/$$} has a clear behavioral interpretation and varies meaningfully across populations, it has become one of the most widely used individual-difference measures in behavioral research. It provides a quantitative index of what clinicians call "impulsivity" and what economists call "time preference."

### Preference Reversals

**Preference reversals** are the signature prediction that distinguishes hyperbolic from exponential discounting. They occur when an organism's preference between two options switches as both options move closer in time.

Consider a choice between \$50 available immediately and \$100 available in 26 weeks. Many people prefer \$100 in 26 weeks---they show self-control. Now move both options forward in time: \$50 now versus \$100 in 26 weeks becomes \$50 in 26 weeks versus \$100 in 52 weeks. When both options are far away, people often prefer the larger-later reward. But as the smaller-sooner option approaches availability, preference switches to the smaller-sooner reward. This is a preference reversal.

**The hyperbolic case.** Suppose the smaller-sooner reward is {$$}A_S = 50{/$$} at delay {$$}D_S{/$$}, and the larger-later reward is {$$}A_L = 100{/$$} at delay {$$}D_L = D_S + 26{/$$} (the larger reward is always 26 weeks later than the smaller one). Using {$$}k = 0.05{/$$} per week:

When {$$}D_S = 26{/$$} (both far away):
- {$$}V_S = 50/(1 + 0.05 \times 26) = 50/2.30 = 21.74{/$$}
- {$$}V_L = 100/(1 + 0.05 \times 52) = 100/3.60 = 27.78{/$$}
- {$$}V_L > V_S{/$$}: Prefer the larger-later reward.

When {$$}D_S = 0{/$$} (smaller reward available now):
- {$$}V_S = 50/(1 + 0.05 \times 0) = 50/1.00 = 50.00{/$$}
- {$$}V_L = 100/(1 + 0.05 \times 26) = 100/2.30 = 43.48{/$$}
- {$$}V_S > V_L{/$$}: Prefer the smaller-sooner reward.

Preference has reversed. The crossing point can be found exactly at {$$}D_S = 6{/$$} weeks. When the smaller reward is more than 6 weeks away, the larger-later reward is preferred. When the smaller reward is less than 6 weeks away, preference switches.

**The exponential case.** With the same parameters, the ratio {$$}V_L/V_S{/$$} is constant regardless of {$$}D_S{/$$}. Preference never reverses because the ratio of two exponential curves is a constant. This is why preference reversals are the critical test: they are a qualitative prediction that the exponential model cannot produce and the hyperbolic model produces naturally.

Graphically, a preference reversal occurs when the discount curves for two options **cross**. At long delays, the curve for the larger reward is above the curve for the smaller reward. As both options approach in time, the steeper initial decline of the hyperbolic curve for the smaller-sooner option causes its value to rise faster, and the curves cross.

### Area Under the Curve (AUC)

**Area under the curve (AUC)** is a model-free measure of the degree of discounting (Myerson, Green, & Warusawitharana, 2001). Rather than fitting a parametric model, AUC treats the discount function as a set of empirical points connected by straight lines and computes the total area beneath that piecewise linear function.

The computation proceeds as follows:

1. **Normalize the x-axis (delay).** Express each delay as a proportion of the maximum delay tested. The x-axis runs from 0 to 1.
2. **Normalize the y-axis (value).** Express each indifference point as a proportion of the undiscounted amount ({$$}A{/$$}). The y-axis runs from 0 to 1.
3. **Add the origin point.** At delay 0, value equals the full amount, so the point {$$}(0, 1){/$$} anchors the curve.
4. **Connect adjacent data points with straight lines**, forming trapezoids between consecutive points and the x-axis.
5. **Sum the areas of the trapezoids.** The area of each trapezoid is {$$}(x_{i+1} - x_i) \times (y_i + y_{i+1})/2{/$$}. The total is AUC.

AUC ranges from 0 to 1:
- **AUC = 1**: No discounting at all.
- **AUC = 0**: Complete discounting.
- **Smaller AUC**: Steeper discounting (more impulsive).
- **Larger AUC**: Shallower discounting (more self-controlled).

AUC has several advantages: it makes no distributional assumptions, is not affected by individual data points that poorly fit a given model, allows comparison across studies that use different model forms, and is straightforward to compute. Its main limitations are that it discards information about the shape of the discount function, is sensitive to the number and spacing of delays tested, and does not provide a mechanistic parameter like {$$}k{/$$}.

In practice, many researchers report both AUC and parametric fits, using AUC for robust group comparisons and {$$}k{/$$} for mechanistic interpretation.

### The Hyperboloid Model

The **hyperboloid model** (Green & Myerson, 2004; Myerson & Green, 1995) adds a scaling exponent to Mazur's hyperbola:

{$$}V = \frac{A}{(1 + kD)^s}{/$$}

where {$$}s{/$$} is a free parameter that governs the overall scaling of the discounting process. When {$$}s = 1{/$$}, the hyperboloid reduces to Mazur's hyperbolic model exactly. The hyperboloid provides a superior fit to many datasets, particularly when discounting is assessed across a wide range of delays or when individual differences in the curvature of the discount function are important.

The cost of the hyperboloid is an additional free parameter, which must be justified by a meaningful improvement in fit. Model comparison techniques (AIC, BIC, or cross-validation) are used to determine whether the improved fit warrants the added complexity.

### Comparing the Three Discounting Models

| Feature | Exponential | Hyperbolic (Mazur) | Hyperboloid |
|:--------|:------------|:-------------------|:------------|
| Equation | {$$}V = Ae^{-kD}{/$$} | {$$}V = A/(1+kD){/$$} | {$$}V = A/(1+kD)^s{/$$} |
| Free parameters | 1 ({$$}k{/$$}) | 1 ({$$}k{/$$}) | 2 ({$$}k{/$$}, {$$}s{/$$}) |
| Proportional decline | Constant | Decreasing | Decreasing |
| Preference reversals | No | Yes | Yes |
| Empirical fit | Poor | Good | Best (in many cases) |
| Normative status | "Rational" standard | Descriptive standard | Extended descriptive |
| Special case | --- | Hyperboloid with {$$}s=1{/$$} | General form |

The progression from exponential to hyperbolic to hyperboloid illustrates a general principle in modeling: start simple, add complexity only when the data demand it, and always ask whether the added complexity is justified by improved fit or new qualitative predictions.

---

## Worked Example: Discounting

Following the same 8-step logic applied to matching above, we now fit Mazur's hyperbolic model to delay discounting data. Rather than repeating every step in full, we focus on the key elements: the equation, the fitting procedure, the interpretation of {$$}k{/$$}, and the comparison with the exponential model.

### The Data

A participant makes choices between an immediate monetary reward and \$100 available at each of seven delays. Using a titrating procedure, we determine the indifference point at each delay:

| Delay (weeks) | Indifference Point (\$) |
|:-:|:-:|
| 1 | 90.00 |
| 2 | 82.00 |
| 4 | 70.00 |
| 8 | 55.00 |
| 16 | 38.00 |
| 26 | 28.00 |
| 52 | 18.00 |

Notice the pattern before fitting any model. The drop from delay 1 to delay 2 (one additional week) is \$8. The drop from delay 26 to delay 52 (26 additional weeks!) is only \$10. Despite the much larger increase in delay, the decrease in value is only slightly larger. This is the hallmark of hyperbolic, not exponential, decay.

### Fitting the Hyperbolic Model

The model is {$$}V = 100/(1 + kD){/$$}. Rearranging to isolate {$$}k{/$$} from each data point: {$$}k = (100 - V)/(V \cdot D){/$$}.

| Delay ({$$}D{/$$}) | Observed {$$}V{/$$} | {$$}k{/$$} estimate |
|:-:|:-:|:-:|
| 1 | 90.00 | {$$}(100 - 90)/(90 \times 1) = 0.111{/$$} |
| 2 | 82.00 | {$$}(100 - 82)/(82 \times 2) = 0.110{/$$} |
| 4 | 70.00 | {$$}(100 - 70)/(70 \times 4) = 0.107{/$$} |
| 8 | 55.00 | {$$}(100 - 55)/(55 \times 8) = 0.102{/$$} |
| 16 | 38.00 | {$$}(100 - 38)/(38 \times 16) = 0.102{/$$} |
| 26 | 28.00 | {$$}(100 - 28)/(28 \times 26) = 0.099{/$$} |
| 52 | 18.00 | {$$}(100 - 18)/(18 \times 52) = 0.088{/$$} |

The estimates cluster around {$$}k \approx 0.10{/$$} per week. The consistency across delays is impressive and already indicates the hyperbolic model is a good description. Using {$$}k = 0.10{/$$}, the predicted values and residuals are:

| Delay ({$$}D{/$$}) | Observed {$$}V{/$$} | Predicted {$$}V = \frac{100}{1 + 0.10D}{/$$} | Residual |
|:-:|:-:|:-:|:-:|
| 1 | 90.00 | 90.91 | {$$}-0.91{/$$} |
| 2 | 82.00 | 83.33 | {$$}-1.33{/$$} |
| 4 | 70.00 | 71.43 | {$$}-1.43{/$$} |
| 8 | 55.00 | 55.56 | {$$}-0.56{/$$} |
| 16 | 38.00 | 38.46 | {$$}-0.46{/$$} |
| 26 | 28.00 | 27.78 | {$$}+0.22{/$$} |
| 52 | 18.00 | 16.13 | {$$}+1.87{/$$} |

The {$$}R^2 = 0.998{/$$}---the hyperbolic model accounts for 99.8% of the variance.

### Interpreting k

The estimated {$$}k = 0.10{/$$} per week tells us:

- The **half-life** of value is {$$}1/k = 10{/$$} weeks. After 10 weeks of delay, this participant's subjective value drops to half its face value.
- This is a moderately steep discounter. If choosing between \$50 now and \$100 in 10 weeks, this participant would be approximately indifferent.

### Comparing with the Exponential Model

Fitting {$$}V = 100 \cdot e^{-kD}{/$$} reveals a diagnostic problem: the point-by-point {$$}k{/$$} estimates decline systematically from 0.105 at {$$}D = 1{/$$} to 0.033 at {$$}D = 52{/$$}. This declining pattern is the signature of data that are hyperbolic, not exponential. No single exponential {$$}k{/$$} can describe these data well.

Using the average exponential {$$}k \approx 0.073{/$$}, the exponential model dramatically underpredicts subjective value at long delays (predicting \$2.24 at 52 weeks when the actual indifference point is \$18.00). The exponential {$$}R^2 = 0.887{/$$}, compared to the hyperbolic's {$$}R^2 = 0.998{/$$}. The hyperbolic model fits roughly 59 times better by sum of squared residuals, with no systematic residual pattern.

### Computing AUC

Normalizing both axes (delay divided by 52, value divided by 100) and summing trapezoid areas yields **AUC = 0.362**, indicating moderately steep discounting. AUC values below 0.50 generally reflect substantial discounting.

---

## Applied Significance of Discounting

### Clinical Relevance

The relationship between steep discounting and problematic behavior is among the most replicated findings in clinical behavior science. Individuals with **substance use disorders**---including alcohol, nicotine, cocaine, opioids, and methamphetamine dependence---consistently show higher {$$}k{/$$} values than controls. The effect sizes are typically medium to large, and the relationship holds across diverse samples and measurement methods. This has led to the proposal that steep discounting is a behavioral marker of addiction vulnerability and a potential target for intervention.

**ADHD** is characterized, in part, by difficulty waiting for delayed reinforcement. Children and adults with ADHD show steeper discounting than age-matched controls. This connects the clinical presentation (impulsivity, difficulty with delayed tasks, preference for immediate stimulation) to a quantitative behavioral process. It also suggests that interventions that alter the delay structure of reinforcement (e.g., more frequent feedback, shorter intervals between behavior and consequence) may be particularly effective for individuals with ADHD---a prediction with direct implications for classroom and clinical practice.

**Obesity** has been linked to steep discounting of food and monetary rewards. The preference for immediate food consumption over delayed health benefits is, at its core, a discounting problem. Interventions that make the health consequences of eating more immediate (e.g., daily weigh-ins, immediate feedback on blood glucose) may work partly by reducing the effective delay to the health outcome.

**Problem gambling** involves choosing an uncertain immediate outcome over the more certain long-term outcome of retaining one's money. Problem gamblers tend to show steeper discounting of delayed rewards, consistent with a general bias toward immediacy.

### Interventions Informed by Discounting

The discounting framework has informed the design of several evidence-based interventions:

- **Contingency management** programs for substance abuse provide immediate tangible reinforcers (vouchers, prizes) for drug-free urine samples, effectively creating a competing immediate reinforcer that can outcompete the drug. The logic is directly informed by the discount function: if the drug is preferred because its reinforcement is immediate and the benefits of sobriety are delayed, then providing immediate reinforcement for sobriety can shift the balance.

- **Episodic future thinking**---asking people to vividly imagine positive future events---has been shown to reduce discounting in laboratory tasks. The mechanism may involve making delayed outcomes feel more immediate and concrete, effectively reducing the psychological distance of the delayed reward.

- **Precommitment strategies**, such as automatic enrollment in retirement savings plans, exploit the preference reversal phenomenon. At a distance, people prefer the larger-later outcome (retirement savings). A precommitment locks in this preference before the reversal point arrives (the moment when the smaller-sooner option---spending the money now---becomes available and its value surges).

---

## Plain-Language Interpretation

### Matching

The matching law, at its core, says something intuitive: organisms distribute their behavior roughly in proportion to what works. If the left option pays off twice as often as the right option, the organism will respond on the left about twice as much as on the right.

Consider a concrete everyday example. Imagine you are at a party with two buffet tables. One table is restocked frequently and always has good food; the other is restocked rarely. Over the course of the evening, you will visit the well-stocked table more often---roughly in proportion to how much more reliably it has food. But you might not go there *exactly* in proportion (maybe you visit the less-stocked table occasionally just to check), and you might have a slight preference for one table because it is closer to the bar. The matching law describes exactly this kind of behavior allocation, with parameters that quantify the "roughly" and the "slight preference."

The generalized matching equation refines the basic intuition in two ways. First, the sensitivity parameter {$$}s{/$$} captures how precisely the organism adjusts its behavior to match the reinforcement ratios. A sensitivity of 0.8 means that a 3:1 reinforcement ratio produces only about a 2.4:1 behavior ratio. Second, the bias parameter {$$}b{/$$} captures non-reinforcement influences on preference.

In clinical terms, the matching law tells a practitioner: if you want to increase appropriate behavior relative to problem behavior, you need to increase the reinforcement ratio in favor of appropriate behavior. The sensitivity parameter tells you how responsive the client is likely to be to such changes. The bias parameter tells you whether there are non-reinforcement factors favoring one behavior over the other that you may need to address separately.

### Discounting

Mazur's equation says something equally intuitive: a reward loses value quickly at first when it is delayed, but the rate of value loss slows down for longer delays.

Consider a concrete example. You are offered \$100. If you can have it right now versus in one week, that one-week delay feels costly. Now consider the same \$100, but the choice is between receiving it in 52 weeks versus 53 weeks. Both options involve waiting a long time. The additional one-week delay barely matters. In both comparisons, the delay difference is exactly one week. But the psychological impact of that one week is vastly different depending on when it occurs. This is the essence of hyperbolic discounting.

The practical consequence is preference reversals. When both a small-soon and a large-late reward are far in the future, you may genuinely prefer the larger reward. But as the small-soon reward draws near, its value surges and your preference flips. You meant to save for retirement, but the impulse purchase is available now. The mathematics of the hyperbolic function is a formal description of this everyday experience.

Understanding the mathematics points toward solutions. If preference reversals occur because the smaller-sooner reward's value rises steeply as it approaches, then **commitment devices** (removing the smaller-sooner option before the reversal point) should work. And indeed they do.

---

## Assumptions and Limitations

### Matching

The generalized matching equation rests on assumptions that define its scope:

- **Steady state.** The model applies only to stable, asymptotic performance. It does not describe how preference develops or how behavior changes within a session. Data must be collected after responding has stabilized, typically requiring 20--30 sessions per condition.

- **Independent schedules.** The two VI schedules are assumed to arrange reinforcement independently.

- **Single reinforcer type.** Both alternatives are assumed to deliver the same reinforcer in the same amount. If the reinforcers differ, the bias parameter absorbs the quality difference, but the model does not explicitly predict how much bias a given quality difference should produce.

- **Molar aggregation.** The model describes session-wide aggregates, not the moment-to-moment dynamics of switching between alternatives.

- **Changeover delay effects.** The COD is not explicitly modeled. Its effects are implicitly captured by the sensitivity parameter.

- **Log-ratio linearity.** The model assumes a linear relationship between log behavior ratios and log reinforcement ratios. This is well-supported for concurrent VI-VI schedules but may not hold for other schedule combinations or very extreme reinforcement ratios.

- **Two alternatives.** The standard GME is formulated for two-alternative choice. Extensions to three or more alternatives exist but are less thoroughly validated.

- **No molecular mechanisms.** The matching law is a molar description. It tells you where behavior ends up at steady state, not how the organism gets there.

### Discounting

Mazur's hyperbolic model also rests on simplifying assumptions:

- **Single reinforcer.** The model considers one delayed outcome in isolation. The interaction between multiple delayed outcomes is not captured.

- **Stable preferences.** The model assumes {$$}k{/$$} is fixed within the experimental session. In practice, discounting can be influenced by mood, stress, cognitive load, and framing.

- **Amount-independent {$$}k{/$$} (the magnitude effect).** Larger amounts are discounted less steeply than smaller amounts. This is one of the most reliable violations of the simple model.

- **Time as the only dimension.** Real intertemporal choices involve uncertainty, effort, and opportunity cost. The basic model collapses all of these into a single temporal dimension.

- **Static model.** The model describes the steady-state relationship between delay and value. It says nothing about how discounting develops or how it changes with intervention.

- **Functional form.** The hyperbolic is a good empirical description, but it is not derived from first principles. It does not explain *why* discounting is hyperbolic.

- **Nonsystematic data.** Some participants produce indifference points that do not decrease monotonically with delay. Such data violate the basic premise of discounting and suggest inattention or misunderstanding.

These assumptions are not flaws---they are the explicit boundaries of each model. Identifying them ensures that we know precisely what each model claims and what it does not.

---

## Connection to Empirical Behavior Science

### Laboratory Research on Matching

The matching law has been tested extensively in laboratory settings with pigeons, rats, primates, and humans. The concurrent VI-VI preparation with pigeons remains the gold-standard paradigm. Decades of research have established that sensitivity values typically fall between 0.7 and 1.0 for pigeons on concurrent VI-VI schedules with a changeover delay, and that the GME routinely accounts for 90--99% of the variance in behavior allocation across conditions.

The matching law has also been extended to dimensions of reinforcement beyond rate. Sensitivity to reinforcer amount, delay, and quality have all been measured using modified versions of the GME. The resulting "concatenated" generalized matching law provides a comprehensive framework for predicting behavior allocation when multiple reinforcement dimensions vary simultaneously.

### Applied Behavior Analysis

The matching law has found extensive application in clinical and applied settings. **Functional analysis** of problem behavior implicitly involves concurrent schedules: the client can engage in problem behavior or alternative behavior, and each produces different consequences at different rates. Matching-law analyses can reveal whether problem behavior is maintained by a richer reinforcement schedule and quantify how much the reinforcement ratio would need to change to shift allocation to a clinically meaningful degree.

**Fisher and Mazur (1997)** demonstrated how matching-law analyses can be applied to data from functional analyses and treatment evaluations. **Reed and Kaplan (2011)** provided a tutorial on applying matching-law concepts to clinical decision-making, showing how practitioners can use the GME to understand why a client distributes behavior across available options and how to redesign the reinforcement environment.

### Clinical Significance of Discounting

The relationship between steep discounting and clinical problems has been extensively documented. **Critchfield and Kollins (2001)** provided an influential review arguing that delay discounting is relevant to a wide range of socially important behaviors and highlighting the translational potential of basic discounting research. **Rachlin (2006)** offered a thoughtful treatment of the conceptual and mathematical foundations, arguing that patterns of choice over extended time frames---not individual choices in isolation---are the proper unit of analysis for self-control.

**Odum et al. (2020)** demonstrated that discounting rates can differ substantially across outcome types within the same individual, challenging the view of {$$}k{/$$} as a unitary trait and suggesting that clinical assessment should measure discounting for the specific outcome domain of interest. **Cox and Dallery (2018)** examined how the presence of a second outcome influences discounting of the first, underscoring the importance of considering context when applying discount models.

### Modern Developments

More recent work has connected matching to computational models of reinforcement learning, showing that matching-like behavior emerges from simple learning algorithms that update action values based on experience. This connection between the molar regularity (matching) and molecular process models (reinforcement learning) is an active area of research that bridges the descriptive models covered in this week and the computational models covered later in the course.

Quantitative analyses of matching have also been applied to behavioral economics, where the relative allocation of behavior to commodities at different prices follows matching-like patterns. The connection between matching and demand is particularly noteworthy: both frameworks describe how organisms allocate behavior in response to environmental constraints, and both yield quantitative parameters with clear behavioral interpretations.

---

## Key Readings

**Required (Matching):**

**Reed and Kaplan (2011)** provided a practitioner-oriented tutorial on the matching law, demonstrating how to conduct and interpret matching analyses with applied behavioral data. They walked through the generalized matching equation, explained the meaning of the sensitivity and bias parameters, and showed how matching analyses can be used to evaluate reinforcement-based interventions. This paper grounds the matching law in practical application and makes the case that quantitative models of choice are not just for the basic laboratory---they are tools that practitioners can and should use to understand why clients allocate behavior the way they do.

**McDowell (1989)** identified two developments that reshaped matching theory after Herrnstein's original formulation: the extension to asymmetrical choice situations and the problem of undermatching. He argued that while bias (asymmetry) is a predictable and theoretically benign departure from strict matching, undermatching poses a genuine challenge to the theory because it suggests organisms are less sensitive to reinforcement ratios than the matching law predicts. This paper is essential for understanding that the matching law is not a settled empirical fact but an evolving quantitative framework, and it introduces the distinction between deviations that a model accommodates and deviations that demand revision.

**Fisher and Mazur (1997)** bridged basic and applied research on choice by reviewing how concurrent-schedule procedures and the matching law have been used to understand clinically significant behavior. They demonstrated that choice between appropriate and inappropriate behavior can be analyzed using the same quantitative framework that describes pigeon key pecking, and they reviewed applications including functional analysis and treatment evaluation. This paper connects the formal models of choice covered this week to the applied questions that motivate much of behavior analysis, showing that the matching law is not merely a laboratory curiosity but a quantitative tool for understanding and changing socially important behavior.

**Required (Discounting):**

**Critchfield and Kollins (2001)** made the case that temporal discounting---the decline in reinforcer value with delay---is not just a basic research phenomenon but a variable that underlies many socially important behaviors, including substance abuse, academic performance, and health-related decision making. They reviewed the empirical evidence linking steep discounting to impulsive behavior patterns and argued that the discounting framework provides a quantitative handle on problems that behavior analysts encounter daily. This paper establishes why discounting models matter beyond the laboratory and sets up the course theme that formal models gain their value when they connect to real-world behavioral phenomena.

**Rachlin (2006)** offered a theoretical treatment of discounting that clarified several conceptual issues, including the distinction between delay discounting and probability discounting, the relationship between the two, and the implications of hyperbolic versus exponential functional forms. He argued that the hyperbolic form is not merely a better empirical fit but reflects something fundamental about how organisms integrate information about delayed consequences. This paper deepens the theoretical understanding of the discounting models introduced this week and illustrates how careful attention to functional form---a core theme of the course---can yield insight into behavioral mechanism.

**Odum et al. (2020)** reviewed the literature on delay discounting across different outcome types---money, health, food, drugs---and asked whether discounting is a unitary process or whether different outcomes engage different valuation mechanisms. They presented a theoretical framework for understanding cross-commodity differences in discounting and discussed the implications for both basic theory and clinical application. This paper extends the week's models by raising the question of generality: does one discounting equation with one set of parameters describe all reinforcers, or must the model be adapted for different outcome domains?

**Cox and Dallery (2018)** examined how delay and probability combine to affect the subjective value of reinforcers in humans. They tested whether delay discounting and probability discounting operate independently or interact, finding that the combined effects of delay and probability are not simply additive. This paper contributes to the week's framework by pushing the boundaries of single-variable discounting models and demonstrating that real-world choices often involve simultaneous variation in multiple reinforcer dimensions---a complexity that simple hyperbolic models must eventually confront.

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
- How can a practitioner use the bias parameter to tailor treatment?
- What are some limitations of matching law applications in applied contexts?

### McDowell (1989)

- What is meant by "asymmetrical choice situations"?
- Why are most natural human choice situations considered asymmetrical?
- What mathematical form does McDowell discuss for asymmetrical choice?
- How does this power function differ from the original (linear) matching law?
- Why might a power function better describe human choice behavior?
- What does McDowell refer to by "indifferent responding"?
- Why does McDowell believe biased responding IS NOT a big deal for matching theory?
- Why does McDowell believe undermatching IS a big deal for matching theory?

### Fisher & Mazur (1997)

- What is the primary focus of this article in terms of research synthesis?
- How do the authors define "choice responding"?
- What is the role of concurrent schedules in studying choice?
- What kinds of dependent variables are typically used in choice research?
- What are some of the reinforcer dimensions shown to influence choice responding?
- How have researchers used choice procedures to study problem behavior?
- How do Fisher and Mazur connect laboratory-based findings with applied intervention strategies?
- Why is it important to distinguish between molar and molecular analyses of behavior?
- How can quantitative modeling support individualized treatment planning?

### Critchfield & Kollins (2001)

- What is temporal discounting?
- How does temporal discounting relate to self-control?
- How do the authors distinguish behavior analysis from cognitive models of choice?
- What does the {$$}k{/$$} parameter represent in Mazur's hyperbolic model?
- How well does Mazur's hyperbolic equation fit human discounting data?
- Why are hypothetical rewards used instead of real rewards in many studies?
- How do temporal discounting patterns differ across populations?
- How can delay sensitivity be functionally relevant for understanding ADHD?
- How might ABA practitioners apply discounting research to treatment planning?

### Rachlin (2006)

- How does Rachlin define discounting in the context of behavioral choice?
- What is the difference between exponential and hyperbolic discounting?
- Why does Rachlin argue that hyperbolic discounting leads to preference reversals?
- How does Rachlin explain self-control in terms of temporal discounting?
- What role do commitment strategies play in self-control according to Rachlin?
- What is meant by "bundling" in Rachlin's theory of self-control?
- What is the key difference between molar and molecular views of self-control?
- What implications does Rachlin draw for public health and policy?

### Odum et al. (2020)

- What does it mean to say discounting is "outcome-specific"?
- How does monetary discounting compare to discounting of other outcomes?
- What is the magnitude effect in delay discounting?
- What is the sign effect in discounting research?
- How do individual differences influence discounting?
- What implications do the findings have for intervention design?

---

## Exercises for Reflection

1. Consider a clinical scenario in which a child engages in both appropriate play and disruptive behavior during a therapy session. If functional analysis data show that the child receives adult attention for disruptive behavior on average every 2 minutes and for appropriate play on average every 10 minutes, what does the matching law predict about the allocation of behavior? How would you change the reinforcement environment to shift the allocation toward appropriate play? Be specific about what reinforcement ratio you would target and why.

2. The sensitivity parameter {$$}s{/$$} is typically less than 1.0, indicating undermatching. In an applied context, why might undermatching actually be beneficial for the client? Consider what would happen if a client showed perfect matching ({$$}s = 1.0{/$$}) or overmatching ({$$}s > 1.0{/$$}) in an environment where reinforcement contingencies are imperfect or variable.

3. A participant shows an indifference point of \$75 for \$100 delayed by 4 weeks and an indifference point of \$25 for \$100 delayed by 52 weeks. Estimate {$$}k{/$$} from each data point using Mazur's equation. Are the two estimates similar? What would it mean if they were very different?

4. Exponential discounting predicts no preference reversals, yet preference reversals are commonly observed. Design a simple experiment (choice between a smaller-sooner and a larger-later reward at varying time horizons) that would test for preference reversals. Specify the amounts, the delays, and the expected pattern of choices under both exponential and hyperbolic discounting.

5. Both Herrnstein's hyperbola and Mazur's hyperbola are rectangular hyperbolas with a "half-life" parameter ({$$}r_e{/$$} for matching, {$$}1/k{/$$} for discounting). Compare and contrast these two parameters. What does each one tell you about the organism? How would you use each one in an applied context---for example, to design a reinforcement-based intervention for a client?

---

## References

Baum, W. M. (1974). On two types of deviation from the matching law: Bias and undermatching. *Journal of the Experimental Analysis of Behavior, 22*(1), 231--242. https://doi.org/10.1901/jeab.1974.22-231

Cox, D. J., & Dallery, J. (2018). Influence of second outcome on monetary discounting. *Behavioural Processes, 157*, 165--171. https://doi.org/10.1016/j.beproc.2018.09.011

Critchfield, T. S., & Kollins, S. H. (2001). Temporal discounting: Basic research and the analysis of socially important behavior. *Journal of Applied Behavior Analysis, 34*(1), 101--122. https://doi.org/10.1901/jaba.2001.34-101

Fisher, W. W., & Mazur, J. E. (1997). Basic and applied research on choice responding. *Journal of Applied Behavior Analysis, 30*(3), 387--410. https://doi.org/10.1901/jaba.1997.30-387

Herrnstein, R. J. (1961). Relative and absolute strength of response as a function of frequency of reinforcement. *Journal of the Experimental Analysis of Behavior, 4*(3), 267--272. https://doi.org/10.1901/jeab.1961.4-267

Herrnstein, R. J. (1970). On the law of effect. *Journal of the Experimental Analysis of Behavior, 13*(2), 243--266. https://doi.org/10.1901/jeab.1970.13-243

Mazur, J. E. (1987). An adjusting procedure for studying delayed reinforcement. In M. L. Commons, J. E. Mazur, J. A. Nevin, & H. Rachlin (Eds.), *Quantitative analyses of behavior: Vol. 5. The effect of delay and of intervening events on reinforcement value* (pp. 55--73). Erlbaum.

McDowell, J. J. (1989). Two modern developments in matching theory. *The Behavior Analyst, 12*(2), 153--166. https://doi.org/10.1007/BF03392492

Odum, A. L., Becker, R. J., Haynes, J. M., Galizio, A., Frye, C. C. J., Downey, H., Friedel, J. E., & Perez, D. M. (2020). Delay discounting of different outcomes: Review and theory. *Journal of the Experimental Analysis of Behavior, 113*(3), 657--679. https://doi.org/10.1002/jeab.589

Rachlin, H. (2006). Notes on discounting. *Journal of the Experimental Analysis of Behavior, 85*(3), 425--435. https://doi.org/10.1901/jeab.2006.85-05

Reed, D. D., & Kaplan, B. A. (2011). The matching law: A tutorial for practitioners. *Behavior Analysis in Practice, 4*(2), 15--24. https://doi.org/10.1007/BF03391780

---

## Key Takeaways

- **Choice is behavior allocation.** From a behavior-analytic perspective, choice is the measurable distribution of behavior across available alternatives, not a private mental event. This framing makes choice a continuous variable amenable to quantitative modeling.

- **The matching law** states that the relative rate of responding on an alternative approximately equals the relative rate of reinforcement obtained from that alternative. Discovered by Herrnstein (1961) with pigeons on concurrent VI schedules, it was the first quantitative law of choice in behavior science.

- **Herrnstein's hyperbola**, {$$}R = \frac{k \cdot r}{r + r_e}{/$$}, extends matching to the single-schedule case by recognizing that all behavior occurs in a context of competing reinforcement sources. The parameter {$$}k{/$$} is the asymptotic response rate, and {$$}r_e{/$$} is the extraneous reinforcement rate.

- **The generalized matching equation (GME)**, {$$}\log(B_1/B_2) = s \cdot \log(r_1/r_2) + \log(b){/$$}, is the standard tool for analyzing concurrent-schedule data. **Sensitivity** ({$$}s{/$$}) measures how precisely behavior tracks reinforcement ratios; **bias** ({$$}b{/$$}) captures systematic preference unrelated to reinforcement rates.

- **Temporal discounting** is the decline in subjective value of a reinforcer as the delay to its receipt increases. It is one of the most robust quantitative regularities in behavior science, observed across species, reinforcer types, and populations.

- **Hyperbolic discounting** ({$$}V = A/(1+kD){/$$}, Mazur, 1987) assumes a decreasing proportional decline---steep at short delays, shallow at long delays. It fits empirical data far better than the **exponential** model ({$$}V = Ae^{-kD}{/$$}) and correctly predicts **preference reversals**.

- **The matching and discounting hyperbolas share the same mathematical structure.** Both are rectangular hyperbolas describing diminishing sensitivity to a schedule parameter. Herrnstein's {$$}r_e{/$$} and Mazur's {$$}1/k{/$$} both define a "half-life" that characterizes the system's sensitivity.

- **The {$$}k{/$$} parameter** in discounting is the discount rate. Higher {$$}k{/$$} = steeper discounting = more impulsive choice. The half-life of value is {$$}1/k{/$$}.

- **Area under the curve (AUC)** is a model-free measure of discounting, normalized from 0 to 1, that requires no distributional assumptions.

- **Clinical significance**: The matching law informs functional analysis and treatment evaluation by quantifying the reinforcement contingencies governing behavior allocation. Steep discounting is reliably associated with substance abuse, ADHD, obesity, and gambling. Together, these models provide quantitative tools for assessment and intervention design.

- **Limitations**: The GME is a molar, steady-state, two-alternative model. Mazur's hyperbola assumes stable, amount-independent discounting of a single outcome. Both models are descriptive, not mechanistic. These limitations define their scope and point toward the dynamic and computational models covered in later weeks.

## Recommended Readings

**Required:**

- McDowell, J. J. (1989). Two modern developments in matching theory. *The Behavior Analyst*, *12*, 153-166.
- Fisher, W. W. & Mazur, J. E. (1997). Basic and applied research on choice responding. *Journal of Applied Behavior Analysis*, *30*, 387-410.
- Critchfield, T. S. & Kollins, S. H. (2001). Temporal discounting: Basic research and the analysis of socially important behavior. *Journal of Applied Behavior Analysis*, *34*, 101-122.
- Rachlin, H. (2006). Notes on discounting. *Journal of the Experimental Analysis of Behavior*, *85*, 425-435.
- Reed, D. D. & Kaplan, B. A. (2011). The matching law: A tutorial for practitioners. *Behavior Analysis in Practice*, *4*, 15-24.
- Odum, A. L. et al. (2020). Delay discounting of different outcomes: Review and theory. *Journal of the Experimental Analysis of Behavior*, *113*, 657-679.

**Optional:**

- Cox, D. J. & Dallery, J. (2018). Influence of second outcome on monetary discounting. *Behavioural Processes*, *157*, 165-171.
- Strickland, J. C. & Johnson, M. W. (2021). Rejecting impulsivity as a psychological construct. *Journal of the Experimental Analysis of Behavior*, *116*, 349-362.


## Lab: Matching and Discounting

A> **Run this lab.** Notebooks and data files are available at:
A> [https://www.behavioral-data-science.org/book/labs/week-02](https://www.behavioral-data-science.org/book/labs/week-02)
A>
A> The companion materials include starter notebooks, the dataset(s) referenced below, and instructor-prepared solutions.

## Part 1: Matching Law

This week, we are focusing on the generalized matching equation (GME). The purpose of this lab is to use your programming skills to fit the GME to participant data and interpret the outputs. In the folder, there are 10 hypothetical datasets with participant data common to matching law experiments. Your job is what a researcher's job might be. That is, see how well the data are fit by the GME for each individual as well as any trends that might be worth discussing at the group level.

The following packages will likely help accomplish this task: `pandas`, `numpy`, `matplotlib`, `seaborn`, and `scipy` (`linregress` function). These are not the only ways you might accomplish the goal, but they certainly have everything you need.

## Part 2: Discounting

We are also focusing on the family of equations within the discounting area of the literature. The purpose of this part of the lab is to use your programming skills to fit the hyperbolic, hyperboloid, and Area Under the Curve equations to participant data and interpret the outputs.

In the folder, there is a single dataset with participant data common to discounting experiments. Specifically, each row has a set of indifference points relative to seven different indifference points (columns) along with information about the amount and commodity specific to those indifference points.

Your job is what a researcher's job might be. That is: (1) see how well the data are fit by the hyperbolic and hyperboloid models; (2) once fit, see if there are any trends in discounting relative to changes in amount, commodity, or sign (gain vs. loss).

The following packages will likely help accomplish this task: `pandas`, `numpy`, `matplotlib`, `seaborn`, `scipy` (for fitting and calculating AUC), and `scikit-learn` (for r2 values).

As a bonus, in the folder, you will also see a `params_data.csv`. These were the raw k and s parameters used to create each participant's data while also adding noise pulled from the normal distribution between -10 and 10. You could compare how well your package derived the original parameters when noise is involved.
