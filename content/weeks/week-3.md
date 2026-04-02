---
slug: "week-3"
number: 3
published: true
title: "Historical Models -- Discounting"
subtitle: "Why organisms prefer smaller-sooner over larger-later reinforcers"
description: "Mazur's hyperbolic model, exponential discounting, area under the curve."
keyModels:
  - "Mazur Hyperbolic"
  - "Exponential Discounting"
  - "Hyperboloid"
keyEquations:
  - "V = A / (1 + kD)"
  - "V = A * e^(-kD)"
  - "V = A / (1 + kD)^s"
---

## Why This Topic Matters

Delay discounting is one of the most robust quantitative regularities in all of behavior science. Across species---pigeons, rats, monkeys, humans---and across reinforcer types---food, money, drugs, health outcomes---subjective value declines as the delay to a reinforcer increases. The mathematical form of that decline is remarkably consistent: it is hyperbolic, not exponential. This single finding has profound implications for how we understand choice, self-control, and impulsivity.

The applied significance is difficult to overstate. Steeper discounting---placing less value on delayed outcomes---is reliably associated with substance abuse, problem gambling, obesity, ADHD, risky sexual behavior, and poor financial decision-making. These are among the most costly behavioral health problems in modern societies. Understanding the mathematical form of discounting does more than satisfy theoretical curiosity: it provides a quantitative framework for predicting who is at risk, for measuring the severity of impulsive choice, and for designing interventions that shift the balance toward larger-later outcomes.

Discounting also provides one of the cleanest illustrations of the difference between a normative model (how a "rational" agent should behave) and a descriptive model (how organisms actually behave). Exponential discounting is the normative standard in economics; hyperbolic discounting is what organisms actually do. The gap between the two is not a failure of organisms to be rational---it is a feature of how reinforcement and delay interact in the natural world. Modeling that interaction precisely is the task of this week.

From a modeling perspective, discounting functions offer an ideal teaching case. The models are simple enough to fit by hand, the data are easy to collect, the parameters have clear behavioral interpretations, and the comparison between competing model forms (exponential vs. hyperbolic vs. hyperboloid) illustrates core issues in model selection that recur throughout the course.

This week also marks our first encounter with a family of models that compete with one another to describe the same phenomenon. In Week 1, we introduced the 8-step framework using a single model ($R = k \cdot t$). Now, we have three candidate models for the same data (exponential, hyperbolic, hyperboloid), and we must ask: which one is best, and what do we mean by "best"? These questions---model comparison, parsimony, and the trade-off between fit and complexity---will recur throughout the course.

Finally, discounting is a domain where the modeling enterprise has had real-world impact. Discounting measures are used in clinical screening for substance abuse risk, in behavioral economics experiments informing public policy, and in the design of interventions that promote savings, medication adherence, and healthy eating. The models we study this week are not museum pieces; they are working tools.

---

## Core Concepts

### Temporal Discounting

**Temporal discounting** refers to the decrease in subjective value of a reinforcer as the delay to its receipt increases. A reward available now is worth its full face value. The same reward available in a week is worth less, subjectively. The same reward in a year is worth less still. This is not a peculiarity of human cognition; it is observed in every species that has been tested under appropriate conditions.

The phenomenon is distinct from other reasons a delayed reward might be less valuable. A delayed reward might be less certain (the promiser might renege), might be accompanied by opportunity costs (you cannot use money you do not yet have), or might be devalued by inflation. Temporal discounting refers specifically to the decrease in value that occurs even when certainty, opportunity cost, and inflation are controlled---a pure effect of delay on subjective value.

The key empirical tool for studying discounting is the **indifference point**. An indifference point is the amount of an immediate reward that a person (or animal) considers equivalent in value to a larger delayed reward. For example, if a participant is indifferent between receiving \$50 now and \$100 in 6 months, then the indifference point at a 6-month delay for a \$100 delayed reward is \$50. The subjective value of the delayed \$100 is \$50.

Indifference points can be measured in several ways:

- **Adjusting-amount procedures**: The experimenter systematically increases or decreases the immediate amount until the participant is approximately indifferent.
- **Titrating procedures**: A staircase method where the immediate amount adjusts up after a "wait" choice and down after a "now" choice, converging on the indifference point.
- **Fixed-choice arrays**: The participant makes a series of choices at each delay, and the indifference point is estimated from the pattern of choices (e.g., the last "wait" choice before switching to "now").

By measuring indifference points at multiple delays, researchers construct a **discount function**---a curve that shows how subjective value declines with delay. The shape of that curve is the central question of discounting research. Is the decline linear? Exponential? Something else entirely? The answer has both theoretical and practical consequences.

It is important to distinguish temporal discounting from related but distinct processes. **Probability discounting** refers to the decline in value as the probability of receiving a reward decreases. **Effort discounting** refers to the decline in value as the effort required to obtain a reward increases. **Social discounting** refers to the decline in generosity as the social distance to the recipient increases. All of these follow discount-like functions, and many turn out to be hyperbolic, but they involve different independent variables and may reflect different underlying processes. This week we focus exclusively on temporal discounting---the effect of delay on value---while noting that the modeling tools generalize.

### Exponential Discounting

The **exponential discounting** model expresses subjective value as:

$$V = A \cdot e^{-kD}$$

where:
- $V$ is the subjective value of the delayed reward
- $A$ is the amount (face value) of the delayed reward
- $k$ is the discount rate (a positive constant)
- $D$ is the delay to the reward
- $e$ is Euler's number (~2.718)

In plain language: the value of a reward decays by a constant proportion for each unit of time that passes. If a one-week delay reduces value by 10%, then a second week reduces the remaining value by another 10%, and so on. The decline is geometric, like radioactive decay.

To see why the proportional decline is constant, consider the ratio of values at two delays separated by one unit:

$$\frac{V(D+1)}{V(D)} = \frac{A \cdot e^{-k(D+1)}}{A \cdot e^{-kD}} = e^{-k}$$

This ratio does not depend on $D$. Whether you are comparing week 0 to week 1, or week 50 to week 51, the value drops by the same fraction $e^{-k}$. This is the defining property of exponential decay.

Exponential discounting has an important mathematical property: it produces **consistent preferences**. If you prefer \$100 in 52 weeks over \$50 in 51 weeks (when both are far away), you will still prefer \$100 in 1 week over \$50 now (when both are close). The relative preference does not change as both options move closer in time. This is called **stationarity** or **dynamic consistency**, and it is why exponential discounting is considered normatively "rational" and is the standard model in neoclassical economics.

To prove stationarity formally: suppose you prefer option B (amount $A_B$ at delay $D_B$) over option A (amount $A_A$ at delay $D_A$, where $D_A < D_B$ and $A_A < A_B$). Under exponential discounting, this means:

$$A_B \cdot e^{-kD_B} > A_A \cdot e^{-kD_A}$$

Now shift both options forward by $t$ units (both become closer):

$$A_B \cdot e^{-k(D_B - t)} > A_A \cdot e^{-k(D_A - t)}$$

Dividing by $e^{-k(-t)} = e^{kt}$ on both sides:

$$A_B \cdot e^{-kD_B} \cdot e^{kt} > A_A \cdot e^{-kD_A} \cdot e^{kt}$$

The $e^{kt}$ cancels, leaving the original inequality. Preference is preserved. The exponential model guarantees dynamic consistency.

The problem is that organisms---including humans---routinely violate this prediction. Preferences reverse as options approach in time. Exponential discounting cannot account for this.

### Hyperbolic Discounting (Mazur)

**Mazur's hyperbolic discounting model** (Mazur, 1987) expresses subjective value as:

$$V = \frac{A}{1 + kD}$$

where $V$, $A$, $k$, and $D$ are defined as above.

The critical difference from the exponential is the shape of the decay. The hyperbolic function declines steeply at short delays and then flattens out at longer delays. A reward delayed by one day from now loses much more value than a reward delayed by one additional day when it is already a year away. This is exactly what organisms do.

To see the difference in proportional decline, compute the same ratio as before:

$$\frac{V(D+1)}{V(D)} = \frac{A/(1 + k(D+1))}{A/(1 + kD)} = \frac{1 + kD}{1 + k(D+1)} = \frac{1 + kD}{1 + kD + k}$$

This ratio *does* depend on $D$. As $D$ increases, the ratio approaches 1---meaning each additional unit of delay produces a smaller proportional decline. The loss of value per unit delay is front-loaded: steep at first, increasingly gentle later. This is the mathematical signature of hyperbolic decay.

The hyperbolic form was not chosen arbitrarily. Mazur (1987) derived it from experiments with pigeons choosing between smaller-sooner and larger-later food reinforcers and showed that the hyperbolic provided a better quantitative fit than the exponential across a wide range of conditions. The experimental paradigm was elegant: pigeons chose between a shorter delay to a smaller food amount and a longer delay to a larger food amount, and Mazur adjusted the delays until the pigeon was indifferent. The resulting indifference points, plotted against delay, traced a hyperbolic curve.

Subsequent work confirmed the superiority of the hyperbolic fit in humans choosing among monetary, health, and other outcomes. The hyperbolic form has been replicated in hundreds of studies and is now the standard descriptive model in the field.

Formally, the hyperbolic model is a member of the family of functions with decreasing proportional declines. The proportional loss in value per unit delay is not constant (as in the exponential) but shrinks as the delay increases. This mathematical property is what generates preference reversals.

It is worth noting what the hyperbolic model is and is not. It is a **descriptive** model: it tells us the shape of the discount function. It is not, by itself, an **explanatory** model: it does not tell us *why* the function is hyperbolic. Several mechanistic accounts have been proposed (e.g., Weber-Fechner-like logarithmic time perception, memory trace decay, competition among temporal representations), but the descriptive model stands on its own empirical merits regardless of which mechanistic account, if any, turns out to be correct.

### The k Parameter

The parameter $k$ in both the exponential and hyperbolic models is the **discount rate**. It controls how steeply value declines with delay.

- **Higher $k$**: Steeper discounting. Value drops rapidly. The individual places little weight on delayed outcomes. Behaviorally, this corresponds to **impulsive** choice---preferring smaller-sooner reinforcers.
- **Lower $k$**: Shallower discounting. Value is relatively well maintained across delays. The individual places substantial weight on delayed outcomes. Behaviorally, this corresponds to **self-controlled** choice---preferring larger-later reinforcers.

A useful way to interpret $k$ concretely: in the hyperbolic model, the **half-life** of value---the delay at which subjective value drops to half the face value---is $D_{1/2} = 1/k$. If $k = 0.10$ per week, then value drops to half at $D = 10$ weeks. If $k = 0.01$ per week, value drops to half at $D = 100$ weeks. This gives $k$ an intuitive temporal meaning: it tells you how quickly the reward loses half its psychological worth.

The $k$ parameter varies systematically across populations and conditions:

- Individuals with substance use disorders tend to have higher $k$ values for monetary rewards than matched controls. The effect sizes are typically medium to large.
- $k$ for health outcomes is often different from $k$ for monetary outcomes within the same individual, suggesting that discounting is at least partly outcome-specific rather than a unitary trait.
- $k$ for small amounts tends to be larger than $k$ for large amounts (the **magnitude effect**), a finding we will return to under limitations. For example, $k$ for \$10 might be five times larger than $k$ for \$1,000.
- $k$ decreases across development from childhood to adulthood, consistent with the development of self-control.
- $k$ tends to be higher in populations with lower income and less education, though the causal direction of this relationship is debated.

Because $k$ has a clear behavioral interpretation and varies meaningfully across populations, it has become one of the most widely used individual-difference measures in behavioral research. It provides a quantitative index of what clinicians call "impulsivity" and what economists call "time preference."

However, the interpretation of $k$ as a stable trait must be qualified. If $k$ varies across outcome types, across amounts, and across measurement occasions, then it is not a single number that characterizes an individual. It is a parameter that summarizes behavior in a specific context. This distinction matters for clinical assessment and for theories of impulsivity.

### Preference Reversals

**Preference reversals** are the signature prediction that distinguishes hyperbolic from exponential discounting. They occur when an organism's preference between two options switches as both options move closer in time. They are the reason the debate between exponential and hyperbolic discounting matters---it is not just a curve-fitting exercise, but a question with qualitative behavioral implications.

Consider a choice between \$50 available immediately and \$100 available in 26 weeks. Many people prefer \$100 in 26 weeks---they show self-control. Now move both options forward in time: \$50 now versus \$100 in 26 weeks becomes \$50 in 26 weeks versus \$100 in 52 weeks. When both options are far away, people often prefer the larger-later reward. But as the smaller-sooner option approaches availability, preference switches to the smaller-sooner reward. This is a preference reversal.

Let us trace through the mathematics to see exactly why the hyperbolic model predicts this and the exponential does not.

**The hyperbolic case.** Suppose the smaller-sooner reward is $A_S = 50$ at delay $D_S$, and the larger-later reward is $A_L = 100$ at delay $D_L = D_S + 26$ (the larger reward is always 26 weeks later than the smaller one). Using $k = 0.05$ per week:

When $D_S = 26$ (both far away):
- $V_S = 50/(1 + 0.05 \times 26) = 50/2.30 = 21.74$
- $V_L = 100/(1 + 0.05 \times 52) = 100/3.60 = 27.78$
- $V_L > V_S$: Prefer the larger-later reward.

When $D_S = 0$ (smaller reward available now):
- $V_S = 50/(1 + 0.05 \times 0) = 50/1.00 = 50.00$
- $V_L = 100/(1 + 0.05 \times 26) = 100/2.30 = 43.48$
- $V_S > V_L$: Prefer the smaller-sooner reward.

Preference has reversed. At $D_S = 26$, the larger-later reward won. At $D_S = 0$, the smaller-sooner reward wins. Somewhere between $D_S = 0$ and $D_S = 26$, the discount curves crossed and preference switched.

We can find the crossing point exactly. The curves cross when $V_S = V_L$:

$$\frac{50}{1 + 0.05 \cdot D_S} = \frac{100}{1 + 0.05 \cdot (D_S + 26)}$$

Cross-multiplying:

$$50 \cdot (1 + 0.05D_S + 1.30) = 100 \cdot (1 + 0.05D_S)$$

$$50 + 2.5D_S + 65 = 100 + 5D_S$$

$$115 + 2.5D_S = 100 + 5D_S$$

$$15 = 2.5D_S$$

$$D_S = 6 \text{ weeks}$$

When the smaller reward is more than 6 weeks away, the larger-later reward is preferred. When the smaller reward is less than 6 weeks away, the smaller-sooner reward is preferred. The preference reversal occurs at exactly 6 weeks.

**The exponential case.** With the same parameters ($A_S = 50$, $A_L = 100$, gap = 26 weeks, $k = 0.05$):

$$V_S = 50 \cdot e^{-0.05 D_S}, \quad V_L = 100 \cdot e^{-0.05(D_S + 26)}$$

At any $D_S$:

$$\frac{V_L}{V_S} = \frac{100 \cdot e^{-0.05(D_S + 26)}}{50 \cdot e^{-0.05 D_S}} = \frac{100}{50} \cdot e^{-0.05 \times 26} = 2 \cdot e^{-1.30} = 2 \times 0.2725 = 0.545$$

The ratio $V_L/V_S = 0.545$ regardless of $D_S$. Since this ratio is less than 1, the smaller-sooner option is always preferred. The preference never reverses because the ratio of the two exponential curves is a constant. If the larger reward is preferred at any delay, it is preferred at all delays; if the smaller is preferred at any delay, it is preferred at all delays.

This is why preference reversals are the critical test. They are a qualitative prediction that the exponential model cannot produce and the hyperbolic model produces naturally. They have been documented in pigeons, rats, and humans across many reinforcer types. They are not anomalies; they are the norm. Any adequate model of delay discounting must accommodate them.

Graphically, a preference reversal occurs when the discount curves for two options **cross**. At long delays, the curve for the larger reward is above the curve for the smaller reward (the larger reward has greater subjective value). As both options approach in time, the steeper initial decline of the hyperbolic curve for the smaller-sooner option causes its value to rise faster, and the curves cross. After the crossing point, the smaller-sooner option has greater subjective value.

### Area Under the Curve (AUC)

**Area under the curve (AUC)** is a model-free measure of the degree of discounting (Myerson, Green, & Warusawitharana, 2001). Rather than fitting a parametric model (hyperbolic, exponential, or otherwise), AUC treats the discount function as a set of empirical points connected by straight lines and computes the total area beneath that piecewise linear function.

The rationale for AUC is pragmatic. Sometimes we want to compare discounting across individuals or groups without committing to a particular model form. Maybe some individuals' data are better fit by a hyperbolic and others by an exponential. Maybe the data at some delays are noisy. AUC bypasses these issues by using the raw data directly.

The computation proceeds as follows:

1. **Normalize the x-axis (delay).** Express each delay as a proportion of the maximum delay tested. If the longest delay is 52 weeks, a delay of 26 weeks becomes $26/52 = 0.50$. The x-axis now runs from 0 to 1.
2. **Normalize the y-axis (value).** Express each indifference point as a proportion of the undiscounted amount ($A$). If $A = \$100$ and the indifference point is \$55, the normalized value is $55/100 = 0.55$. The y-axis now runs from 0 to 1 (assuming the value at delay 0 is the full amount).
3. **Add the origin point.** At delay 0, value equals the full amount, so the point $(0, 1)$ anchors the curve.
4. **Connect adjacent data points with straight lines**, forming trapezoids between consecutive points and the x-axis.
5. **Sum the areas of the trapezoids.** The area of each trapezoid is $(x_{i+1} - x_i) \times (y_i + y_{i+1})/2$. The total is AUC.

AUC ranges from 0 to 1:
- **AUC = 1**: No discounting at all. The individual values delayed rewards at full face value regardless of delay. The discount "curve" is a horizontal line at the top of the plot.
- **AUC = 0**: Complete discounting. The individual assigns zero value to any delayed reward. The curve drops immediately to zero.
- **Smaller AUC**: Steeper discounting (more impulsive).
- **Larger AUC**: Shallower discounting (more self-controlled).

AUC has several advantages:
- It makes no distributional assumptions. It does not assume the data follow a hyperbolic, exponential, or any other parametric form.
- It is not affected by individual data points that poorly fit a given model.
- It allows comparison across studies that use different model forms or different delay ranges (because normalization puts everything on the same scale).
- It is straightforward to compute---no iterative fitting algorithms, no convergence issues.
- It can be used when sample sizes are small or when individual datasets have too few points for reliable parameter estimation.

The main limitations of AUC are:
- It discards information about the **shape** of the discount function. Two very different curves can have the same AUC. A curve that drops quickly then levels off and a curve that drops slowly then plummets might yield the same area. If the shape matters for the question being asked, a parametric model is preferable.
- It is sensitive to the **number and spacing of delays** tested. Different delay sets will yield different AUC values for the same underlying discount function, because the trapezoid approximation is coarser or finer.
- It does not provide a **mechanistic parameter** like $k$ that can be interpreted in terms of a behavioral process.

In practice, many researchers report both AUC and parametric fits, using AUC for robust group comparisons and $k$ for mechanistic interpretation.

### The Hyperboloid Model

The **hyperboloid model** (Green & Myerson, 2004; Myerson & Green, 1995) adds a scaling exponent to Mazur's hyperbola:

$$V = \frac{A}{(1 + kD)^s}$$

where $s$ is a free parameter that governs the overall scaling of the discounting process.

- When $s = 1$, the hyperboloid reduces to Mazur's hyperbolic model exactly.
- When $s < 1$, the curve is less bowed than the standard hyperbola. The decline is more gradual at short delays and more spread out.
- When $s > 1$, the curve is more bowed. The decline is steeper at short delays and flatter at long delays than the standard hyperbola.

The hyperboloid provides a superior fit to many datasets, particularly when discounting is assessed across a wide range of delays or when individual differences in the curvature of the discount function are important. The additional parameter $s$ captures variability in the shape of discounting that $k$ alone cannot.

To see how $s$ changes the shape, consider the behavior at short delays. For the standard hyperbola ($s = 1$), the derivative at $D = 0$ is:

$$\frac{dV}{dD}\bigg|_{D=0} = \frac{-kA}{(1 + kD)^2}\bigg|_{D=0} = -kA$$

For the hyperboloid, the derivative at $D = 0$ is:

$$\frac{dV}{dD}\bigg|_{D=0} = \frac{-skA}{(1 + kD)^{s+1}}\bigg|_{D=0} = -skA$$

When $s > 1$, the initial slope is steeper ($-skA > -kA$ in absolute value). When $s < 1$, the initial slope is shallower. The parameter $s$ thus controls the initial steepness of the curve independently of $k$, which controls the overall rate of decline.

The cost of the hyperboloid is an additional free parameter, which must be justified by a meaningful improvement in fit. Model comparison techniques (AIC, BIC, or cross-validation) are used to determine whether the improved fit warrants the added complexity. We will address model comparison more formally in later weeks, but the principle is straightforward: a more complex model must earn its keep by fitting meaningfully better than a simpler one. A model with 2 free parameters that fits only marginally better than a model with 1 free parameter may not be worth the added complexity.

In many published datasets, the hyperboloid does earn its keep, particularly when the data span a wide range of delays (e.g., from days to decades). In such cases, the simple hyperbola may systematically misfit the short-delay or long-delay region, and the $s$ parameter corrects this. For data spanning a narrow range of delays, the simple hyperbola and the hyperboloid may be effectively indistinguishable.

### Comparing the Three Models: A Summary

It is useful to have all three models side by side for comparison:

| Feature | Exponential | Hyperbolic (Mazur) | Hyperboloid |
|:--------|:------------|:-------------------|:------------|
| Equation | $V = Ae^{-kD}$ | $V = A/(1+kD)$ | $V = A/(1+kD)^s$ |
| Free parameters | 1 ($k$) | 1 ($k$) | 2 ($k$, $s$) |
| Proportional decline | Constant | Decreasing | Decreasing |
| Preference reversals | No | Yes | Yes |
| Empirical fit | Poor | Good | Best (in many cases) |
| Normative status | "Rational" standard | Descriptive standard | Extended descriptive |
| Special case | --- | Hyperboloid with $s=1$ | General form |

The progression from exponential to hyperbolic to hyperboloid illustrates a general principle in modeling: start simple, add complexity only when the data demand it, and always ask whether the added complexity is justified by improved fit or new qualitative predictions.

---

## Applying the 8-Step Framework

We now walk through all eight steps of the modeling framework for delay discounting, using Mazur's hyperbolic model as the target. The concrete scenario: a human participant in a laboratory study is making choices between immediate and delayed monetary rewards, and we want to model how the subjective value of the delayed reward declines with delay.

### Step 1: Get the Behavioral Phenomenon Clearly in Mind

A participant sits at a computer and makes a series of choices. On each trial, two options appear: a smaller amount of money available immediately and a larger amount available after a specified delay. For example: "Would you prefer \$30 now or \$100 in 6 months?" The amounts and delays vary across trials.

The key observation is that participants systematically choose the smaller-sooner option more often as the delay to the larger-later option increases. When the delay is very short (e.g., one day), nearly everyone waits for the larger reward. When the delay is very long (e.g., 25 years), most people take the smaller immediate reward. The transition from "wait" to "take it now" happens at different delays for different people, and the rate at which value declines as delay increases follows a characteristic pattern.

Specifically, the pattern is one of steep initial decline followed by a flattening. The difference between "now" and "one week" is large; the difference between "one year" and "one year plus one week" is negligible. This pattern---and the individual differences in how steep the decline is---is what we want to model.

It is worth pausing on what makes this phenomenon suitable for modeling. The data are well-behaved: indifference points generally decrease monotonically with delay, the functional form is smooth, and the data can be collected relatively quickly (a typical discounting task takes 10--20 minutes). Individual differences are large and reliable, meaning there is meaningful variance to explain. And the phenomenon has clear practical significance---it connects directly to clinical problems of impulsive choice. These features make discounting an ideal modeling case study.

What we want to model: the relationship between delay and subjective value, summarized by the discount function. The input is the delay $D$; the output is the subjective value $V$.

### Step 2: Define the Behavioral Processes and Scope of the Model

We are modeling **steady-state choice** between two monetary outcomes that differ in amount and delay. The scope is deliberately narrow:

- We model the subjective value of a single delayed reward as a function of delay.
- We do not model how the participant learned to discount (no acquisition dynamics).
- We do not model the decision process itself (no response time, no choice variability, no stochastic choice models).
- We do not model the effect of the immediate option's amount on the discount function (no context effects).
- We do not model interactions between multiple delayed outcomes.
- We treat each delay as an independent condition and assume the participant's preferences are stable across the session.
- We model one type of outcome (money). Results may or may not generalize to other outcome types (food, health, social outcomes).

Drawing the scope explicitly protects us from overinterpreting the model. The model tells us how value declines with delay for money, in this participant, under these conditions. It does not, by itself, tell us about the decision process, about other reinforcer types, or about how discounting develops over time.

Note how narrow the scope is---and how that narrowness is a strength, not a weakness. By limiting the scope, we can test the model's predictions precisely within its domain. If it fits well within scope, we can then ask whether the same model extends to other domains (other reinforcer types, other populations, other time scales). This incremental strategy---fit narrowly, then extend---is more productive than trying to build a model that explains everything at once.

### Step 3: Identify the Behavioral Principles and Quantitative Laws

The core behavioral principle is the **delay-of-reinforcement gradient**: the effectiveness of a reinforcer decreases as the delay between the response and the reinforcer increases. This is one of the oldest and most replicated findings in behavior science, demonstrated in operant conditioning studies from the 1930s onward and confirmed across species and reinforcer types.

A second relevant principle is **Herrnstein's matching law** and its extensions. Mazur's hyperbolic discounting model can be viewed as an application of the matching framework to intertemporal choice: the organism distributes its behavior (choices) in proportion to the value of the available reinforcers, and value is a hyperbolic function of delay.

The candidate quantitative law is Mazur's (1987) hyperbolic discounting equation:

$$V = \frac{A}{1 + kD}$$

This law proposes that the decline in value follows a specific mathematical form---a rectangular hyperbola---rather than some other form (linear, exponential, power function, etc.).

### Step 4: State All Simplifying Assumptions

1. **Single reinforcer dimension.** The participant evaluates the delayed outcome only in terms of its monetary amount and delay. Other attributes (e.g., certainty, effort, social context, emotional valence) are held constant or ignored.

2. **Stable preferences.** The participant's discount rate $k$ does not change over the course of the experimental session or across sessions. No fatigue, no learning, no mood fluctuations.

3. **Amount-independent discounting.** The parameter $k$ is assumed to be the same regardless of the amount of the delayed reward. (This assumption is known to be violated; see Limitations.)

4. **Delay as the sole temporal dimension.** Only the delay to the reward matters, not when within the day or week the session occurs, not whether the delay spans a weekend or a holiday.

5. **No framing effects.** How the choice is described (gain vs. loss, absolute vs. relative terms, with or without visual aids) does not affect the subjective value of the delayed option.

6. **Deterministic valuation.** At each delay, the participant has a single subjective value for the delayed reward. There is no trial-to-trial variability in the valuation itself---only in the measurement procedure.

7. **Hypothetical choices are valid proxies for real choices.** If using hypothetical rewards, we assume the pattern of discounting is the same as it would be for real rewards. (Empirically, this assumption appears reasonable for group-level patterns, though individual-level correspondence is imperfect.)

8. **Independence across delays.** The indifference point at one delay does not influence the indifference point at another delay. Each delay is treated as an independent measurement.

### Step 5: Write the Model Verbally, Then Mathematically

**Verbally:** The subjective value of a delayed monetary reward equals the face value of the reward divided by one plus the product of the discount rate and the delay. As delay increases, the denominator grows, and subjective value shrinks. The rate at which the denominator grows---and thus the rate at which value shrinks---is governed by the discount rate $k$. Critically, because the denominator grows linearly with delay while the effect on value is through division, the decline in value is steep at first (when the denominator is small, each additional unit of delay has a large proportional effect) and increasingly gradual later (when the denominator is large, each additional unit of delay has a small proportional effect).

**Mathematically:**

$$V = \frac{A}{1 + kD}$$

where:
- $V$ = subjective value of the delayed reward (in dollars)
- $A$ = face value (amount) of the delayed reward (in dollars)
- $k$ = discount rate (in units of $1/\text{time}$, e.g., $\text{weeks}^{-1}$)
- $D$ = delay to the reward (in time units, e.g., weeks)

The model has one free parameter ($k$) that must be estimated from data. The amount $A$ and delays $D$ are known from the experimental design. The dependent variable $V$ is measured as the indifference point.

### Step 6: Verify Dimensional Consistency

- $V$ is in dollars.
- $A$ is in dollars.
- $k$ is in $\text{weeks}^{-1}$ (i.e., $1/\text{weeks}$).
- $D$ is in weeks.
- The product $kD$ is dimensionless: $\text{weeks}^{-1} \times \text{weeks} = 1$.
- The constant 1 is dimensionless.
- The denominator $1 + kD$ is dimensionless.
- Therefore, $\frac{A}{1 + kD}$ has units of dollars, matching $V$.

The dimensions are consistent. This check also tells us something important about $k$: its units depend on the units of delay. If delay is measured in days rather than weeks, $k$ will have different numerical values (specifically, $k_{\text{days}} = k_{\text{weeks}} / 7$). When comparing $k$ values across studies, the time unit must match.

This may seem like a trivial point, but failure to attend to units is a common source of error in the discounting literature. A $k$ value of 0.10 means something very different depending on whether delay is in days, weeks, months, or years. Some published studies fail to specify the time unit clearly, making comparison across studies difficult. Always state the unit of delay alongside any reported $k$ value.

### Step 7: Specify Starting Values and Constraints

- $k > 0$: The discount rate must be positive. A negative $k$ would imply that delayed rewards are worth *more* than immediate rewards, which contradicts the phenomenon being modeled.
- $A > 0$: The amount must be positive. (Discounting of losses is a separate topic with different empirical patterns.)
- $D \geq 0$: The delay must be non-negative. At $D = 0$, $V = A$ (no discounting for an immediate reward).
- For curve fitting, a reasonable starting value for $k$ when delays are measured in weeks and amounts are in dollars might be $k = 0.01$ to $k = 0.10$ per week, though this varies widely across individuals and reinforcer types. Starting with $k = 0.05$ is a reasonable default for optimization algorithms.
- The model applies to data collected under stable conditions (no fatigue, no learning effects within session) and at delays long enough to produce measurable discounting but not so long that the task becomes purely hypothetical for the participant.
- There is no theoretical upper bound on $k$, but extremely large $k$ values (e.g., $k > 10$ per week) would imply that even very short delays render the reward nearly worthless, which is atypical. Such values should trigger a check of the data and the time units.

### Step 8: Check the Math, Test Against Data, and Derive Predictions

**Verify (boundary behavior):**
- At $D = 0$: $V = \frac{A}{1 + k \cdot 0} = \frac{A}{1} = A$. Correct: an immediate reward has its full face value.
- As $D \to \infty$: $V = \frac{A}{1 + kD} \to 0$. Correct: an infinitely delayed reward is worthless.
- As $k \to 0$: $V \to A$ for all $D$. Correct: if there is no discounting, all delayed rewards retain full value.
- As $k \to \infty$: $V \to 0$ for all $D > 0$. Correct: if discounting is infinitely steep, any delay renders the reward worthless.

All boundary conditions produce sensible results. The model does not produce negative values, does not produce values greater than $A$, and behaves monotonically (increasing $D$ always decreases $V$; increasing $k$ always decreases $V$ for fixed $D > 0$).

**Verify (monotonicity):**
The first derivative with respect to $D$ is:

$$\frac{dV}{dD} = \frac{-kA}{(1 + kD)^2}$$

This is always negative for $k > 0$ and $A > 0$, confirming that value always decreases with delay.

The second derivative is:

$$\frac{d^2V}{dD^2} = \frac{2k^2A}{(1 + kD)^3}$$

This is always positive, confirming that the curve is **concave up**---the rate of decline diminishes with increasing delay, producing the characteristic "steep then flat" shape.

**Validate (fit to data):**
Collect indifference points from a participant at multiple delays. Fit the model by finding the value of $k$ that minimizes the sum of squared residuals between predicted and observed $V$ values. Compare the fit (e.g., $R^2$, residual patterns, sum of squared errors) with that of the exponential model. Systematically better fit for the hyperbolic supports its use.

**Derive predictions:**
Once $k$ is estimated, the model predicts the subjective value at any delay. If $A = 100$ and $k = 0.05$ per week, then at $D = 10$ weeks:

$$V = \frac{100}{1 + 0.05 \times 10} = \frac{100}{1.5} = 66.67$$

The model predicts the participant would be indifferent between \$66.67 now and \$100 in 10 weeks. This prediction can be tested against new data not used in the fitting process (out-of-sample prediction).

The ability to generate novel predictions is what separates a model from a summary. A summary describes what happened; a model describes what happened and tells you what will happen next. If the model predicts that this participant will be indifferent between \$66.67 now and \$100 in 10 weeks, and we test this prediction and find it approximately correct, our confidence in the model grows. If the prediction is badly wrong, we know the model's scope may be narrower than we assumed.

---

## Worked Example

### The Data

A participant makes choices between an immediate monetary reward and \$100 available at each of seven delays. Using a titrating procedure, we determine the indifference point at each delay---the immediate amount the participant considers equivalent to \$100 at that delay. The procedure adjusts the immediate amount up after a "wait" choice and down after a "now" choice, converging on the indifference point over approximately 6 trials per delay.

| Delay (weeks) | Indifference Point (\$) |
|:-:|:-:|
| 1 | 90.00 |
| 2 | 82.00 |
| 4 | 70.00 |
| 8 | 55.00 |
| 16 | 38.00 |
| 26 | 28.00 |
| 52 | 18.00 |

The delayed amount $A = 100$ in all cases. The indifference point at each delay is the participant's subjective value $V$ of \$100 at that delay.

Notice the pattern in the data before doing any curve fitting. The drop from delay 1 to delay 2 (one additional week) is \$8. The drop from delay 26 to delay 52 (26 additional weeks!) is only \$10. Despite the much larger increase in delay, the decrease in value is only slightly larger. This is the hallmark of hyperbolic, not exponential, decay.

Looking at the data another way: the indifference point drops by about \$20 between weeks 1 and 4 (3 additional weeks), and by about \$10 between weeks 26 and 52 (26 additional weeks). The rate of decline per week is clearly not constant. A good modeler always inspects the data qualitatively before fitting models. Does the shape look right for the candidate model? Are there obvious outliers? Does the general pattern make sense? These qualitative checks often reveal problems that formal curve fitting would obscure.

### Fitting the Hyperbolic Model

We want to find the value of $k$ that best fits $V = \frac{100}{1 + kD}$. One approach is algebraic: rearrange the equation to isolate $k$ and compute an estimate from each data point.

Rearranging:

$$1 + kD = \frac{100}{V}$$

$$kD = \frac{100}{V} - 1 = \frac{100 - V}{V}$$

$$k = \frac{100 - V}{V \cdot D}$$

We can compute an estimate of $k$ from each data point:

| Delay ($D$) | Observed $V$ | $k$ estimate |
|:-:|:-:|:-:|
| 1 | 90.00 | $(100 - 90)/(90 \times 1) = 0.111$ |
| 2 | 82.00 | $(100 - 82)/(82 \times 2) = 0.110$ |
| 4 | 70.00 | $(100 - 70)/(70 \times 4) = 0.107$ |
| 8 | 55.00 | $(100 - 55)/(55 \times 8) = 0.102$ |
| 16 | 38.00 | $(100 - 38)/(38 \times 16) = 0.102$ |
| 26 | 28.00 | $(100 - 28)/(28 \times 26) = 0.099$ |
| 52 | 18.00 | $(100 - 18)/(18 \times 52) = 0.088$ |

The estimates cluster around $k \approx 0.10$ per week. The slight downward drift suggests these data are not perfectly hyperbolic (which is expected with real or realistic data), but the consistency is impressive. A formal nonlinear least-squares fit would optimize this estimate, but the point-by-point consistency already suggests the hyperbolic model is a good description.

For this worked example, we will use $k = 0.10$ per week. In practice, you would use nonlinear regression (e.g., the `nls()` function in R, or `scipy.optimize.curve_fit` in Python) to find the value of $k$ that minimizes the sum of squared residuals.

Using $k = 0.10$, we generate predicted values and residuals:

| Delay ($D$) | Observed $V$ | Predicted $V = \frac{100}{1 + 0.10D}$ | Residual (Obs. $-$ Pred.) |
|:-:|:-:|:-:|:-:|
| 1 | 90.00 | $100/1.10 = 90.91$ | $-0.91$ |
| 2 | 82.00 | $100/1.20 = 83.33$ | $-1.33$ |
| 4 | 70.00 | $100/1.40 = 71.43$ | $-1.43$ |
| 8 | 55.00 | $100/1.80 = 55.56$ | $-0.56$ |
| 16 | 38.00 | $100/2.60 = 38.46$ | $-0.46$ |
| 26 | 28.00 | $100/3.60 = 27.78$ | $+0.22$ |
| 52 | 18.00 | $100/6.20 = 16.13$ | $+1.87$ |

The residuals are small relative to the values being predicted and show no strong systematic pattern. There is a mild tendency for the model to overpredict at short delays and underpredict at the longest delay, but the deviations are modest.

The sum of squared residuals is:

$$SS_{hyp} = 0.91^2 + 1.33^2 + 1.43^2 + 0.56^2 + 0.46^2 + 0.22^2 + 1.87^2$$
$$= 0.83 + 1.77 + 2.04 + 0.31 + 0.21 + 0.05 + 3.50 = 8.71$$

To compute $R^2$, we need the total sum of squares. The mean of the observed values is:

$$\bar{V} = (90 + 82 + 70 + 55 + 38 + 28 + 18)/7 = 381/7 = 54.43$$

$$SS_{total} = (90 - 54.43)^2 + (82 - 54.43)^2 + (70 - 54.43)^2 + (55 - 54.43)^2 + (38 - 54.43)^2 + (28 - 54.43)^2 + (18 - 54.43)^2$$
$$= 1264.3 + 759.4 + 242.4 + 0.3 + 270.1 + 699.0 + 1329.3 = 4564.8$$

$$R^2 = 1 - \frac{SS_{hyp}}{SS_{total}} = 1 - \frac{8.71}{4564.8} = 1 - 0.0019 = 0.998$$

An $R^2$ of 0.998 indicates an excellent fit. The hyperbolic model accounts for 99.8% of the variance in this participant's indifference points.

### Interpreting k

The estimated $k = 0.10$ per week tells us several things:

- The **half-life** of value is $1/k = 1/0.10 = 10$ weeks. After 10 weeks of delay, this participant's subjective value of a reward drops to half its face value.
- This is a moderately steep discounter. In typical community samples using monetary rewards, $k$ values on the order of 0.01 to 0.10 per week are common. Values above 0.10 suggest steep discounting; values below 0.01 suggest shallow discounting.
- If this participant were choosing between \$50 now and \$100 in 10 weeks, they would be approximately indifferent ($V = 100/(1 + 0.10 \times 10) = 50$). At shorter delays they would wait; at longer delays they would take the immediate option.

### Comparing with the Exponential Model

Now fit $V = 100 \cdot e^{-kD}$. Using the observed data, we estimate the exponential $k$ by taking the natural logarithm:

$$\ln(V/100) = -kD$$

$$k = -\frac{\ln(V/100)}{D}$$

| Delay ($D$) | Observed $V$ | Exponential $k$ estimate |
|:-:|:-:|:-:|
| 1 | 90.00 | $-\ln(0.90)/1 = 0.105$ |
| 2 | 82.00 | $-\ln(0.82)/2 = 0.099$ |
| 4 | 70.00 | $-\ln(0.70)/4 = 0.089$ |
| 8 | 55.00 | $-\ln(0.55)/8 = 0.075$ |
| 16 | 38.00 | $-\ln(0.38)/16 = 0.060$ |
| 26 | 28.00 | $-\ln(0.28)/26 = 0.049$ |
| 52 | 18.00 | $-\ln(0.18)/52 = 0.033$ |

Notice the problem immediately: the exponential $k$ estimates are not consistent. They decline systematically as delay increases, from 0.105 at $D = 1$ to 0.033 at $D = 52$. This is the signature of data that are hyperbolic, not exponential. The exponential model requires a constant proportional decline, but these data show a declining rate of proportional decline. No single exponential $k$ value can describe these data well.

Using the average exponential $k \approx 0.073$, we generate predictions:

| Delay ($D$) | Observed $V$ | Predicted $V = 100 \cdot e^{-0.073D}$ | Residual |
|:-:|:-:|:-:|:-:|
| 1 | 90.00 | $100 \cdot e^{-0.073} = 92.96$ | $-2.96$ |
| 2 | 82.00 | $100 \cdot e^{-0.146} = 86.41$ | $-4.41$ |
| 4 | 70.00 | $100 \cdot e^{-0.292} = 74.66$ | $-4.66$ |
| 8 | 55.00 | $100 \cdot e^{-0.584} = 55.77$ | $-0.77$ |
| 16 | 38.00 | $100 \cdot e^{-1.168} = 31.10$ | $+6.90$ |
| 26 | 28.00 | $100 \cdot e^{-1.898} = 14.97$ | $+13.03$ |
| 52 | 18.00 | $100 \cdot e^{-3.796} = 2.24$ | $+15.76$ |

The exponential model dramatically underpredicts subjective value at long delays. This is the characteristic failure mode: the exponential drops too fast in the tail. At 52 weeks, the model predicts a value of only \$2.24 when the participant's actual indifference point is \$18.00---off by nearly a factor of 8.

The sum of squared residuals is:

$$SS_{exp} = 2.96^2 + 4.41^2 + 4.66^2 + 0.77^2 + 6.90^2 + 13.03^2 + 15.76^2$$
$$= 8.76 + 19.45 + 21.72 + 0.59 + 47.61 + 169.78 + 248.38 = 516.29$$

The exponential $R^2$ is:

$$R^2_{exp} = 1 - \frac{516.29}{4564.8} = 1 - 0.113 = 0.887$$

Comparing the two models:
- **Hyperbolic**: $SS = 8.71$, $R^2 = 0.998$
- **Exponential**: $SS = 516.29$, $R^2 = 0.887$

The hyperbolic model fits these data roughly 59 times better by the sum of squared residuals criterion. Both models have the same number of free parameters (one: $k$), so the comparison is fair---there is no complexity penalty to consider. The hyperbolic model is unambiguously superior for these data.

The residual pattern is also informative. The exponential residuals show a clear systematic pattern: negative at short delays (model overpredicts) and positive at long delays (model underpredicts). This systematic misfit indicates that the exponential's functional form is wrong, not just that the parameter estimate is imprecise. The hyperbolic residuals, by contrast, show no strong pattern.

### Computing AUC

To compute AUC, we normalize both axes:

- **Normalize delay:** Divide each delay by the maximum delay (52 weeks). The normalized delays are: $1/52 = 0.019$, $2/52 = 0.038$, $4/52 = 0.077$, $8/52 = 0.154$, $16/52 = 0.308$, $26/52 = 0.500$, $52/52 = 1.000$.
- **Normalize value:** Divide each indifference point by the delayed amount (\$100). The normalized values are: $0.90$, $0.82$, $0.70$, $0.55$, $0.38$, $0.28$, $0.18$.

We also include the origin point $(0, 1)$---at zero delay, the value equals the full amount. The data points for AUC computation are:

| Normalized Delay ($x$) | Normalized Value ($y$) |
|:-:|:-:|
| 0.000 | 1.00 |
| 0.019 | 0.90 |
| 0.038 | 0.82 |
| 0.077 | 0.70 |
| 0.154 | 0.55 |
| 0.308 | 0.38 |
| 0.500 | 0.28 |
| 1.000 | 0.18 |

AUC is the sum of trapezoid areas between consecutive points. The area of each trapezoid is:

$$\text{Area}_i = (x_{i+1} - x_i) \times \frac{y_i + y_{i+1}}{2}$$

| Interval | $\Delta x$ | Mean $y$ | Area |
|:-:|:-:|:-:|:-:|
| 0.000 -- 0.019 | 0.019 | $(1.00 + 0.90)/2 = 0.950$ | $0.019 \times 0.950 = 0.018$ |
| 0.019 -- 0.038 | 0.019 | $(0.90 + 0.82)/2 = 0.860$ | $0.019 \times 0.860 = 0.016$ |
| 0.038 -- 0.077 | 0.039 | $(0.82 + 0.70)/2 = 0.760$ | $0.039 \times 0.760 = 0.030$ |
| 0.077 -- 0.154 | 0.077 | $(0.70 + 0.55)/2 = 0.625$ | $0.077 \times 0.625 = 0.048$ |
| 0.154 -- 0.308 | 0.154 | $(0.55 + 0.38)/2 = 0.465$ | $0.154 \times 0.465 = 0.072$ |
| 0.308 -- 0.500 | 0.192 | $(0.38 + 0.28)/2 = 0.330$ | $0.192 \times 0.330 = 0.063$ |
| 0.500 -- 1.000 | 0.500 | $(0.28 + 0.18)/2 = 0.230$ | $0.500 \times 0.230 = 0.115$ |

$$\text{AUC} = 0.018 + 0.016 + 0.030 + 0.048 + 0.072 + 0.063 + 0.115 = 0.362$$

The participant's AUC is **0.362**, indicating moderately steep discounting. For reference, AUC values below 0.50 are generally considered to reflect substantial discounting, and this value would place the participant in the steeper-discounting range relative to typical community samples.

Note that the AUC computation did not require us to assume any particular model form. We used the raw data directly. If we had fit the hyperbolic model perfectly and computed AUC from the fitted curve, we would get a slightly different value (because the fitted curve does not pass exactly through the data points). The AUC from raw data and the AUC from a fitted model are complementary measures.

### Summary of the Worked Example

This example illustrates several key points:

1. **The hyperbolic model fits delay discounting data far better than the exponential.** The difference is not subtle---it is a factor of 59 in sum of squared residuals.
2. **The diagnostic sign of hyperbolic data forced into an exponential model is a systematically declining $k$ estimate across delays.** If you see this pattern, the data are hyperbolic.
3. **The $k$ parameter has a concrete interpretation.** For this participant, $k = 0.10$ per week means value halves after 10 weeks.
4. **AUC provides a model-free summary.** This participant's AUC of 0.362 indicates steep discounting, consistent with the relatively high $k$ value.
5. **Model comparison is straightforward when the models have the same number of parameters.** The hyperbolic wins on every criterion: lower SS, higher $R^2$, and no systematic residual pattern.

---

## Plain-Language Interpretation

Mazur's equation says something intuitive: a reward loses value quickly at first when it is delayed, but the rate of value loss slows down for longer delays.

Consider a concrete example. You are offered \$100. If you can have it right now versus in one week, that one-week delay feels costly---you are giving up immediate access to the money. The subjective difference between "now" and "one week from now" is large.

Now consider the same \$100, but the choice is between receiving it in 52 weeks versus 53 weeks. Both options involve waiting a long time. The additional one-week delay---from week 52 to week 53---barely matters. You have already accepted a long wait; one more week is negligible.

In both comparisons, the delay difference is exactly one week. But the psychological impact of that one week is vastly different depending on when it occurs. This is the essence of hyperbolic discounting: the first units of delay are disproportionately costly, and each additional unit of delay matters less and less.

We can verify this with the numbers. Using $k = 0.10$ per week:

- Value at $D = 0$: $100/(1 + 0) = \$100.00$
- Value at $D = 1$: $100/(1 + 0.10) = \$90.91$
- **Drop from week 0 to week 1: \$9.09** (9.1% loss)

- Value at $D = 52$: $100/(1 + 5.2) = \$16.13$
- Value at $D = 53$: $100/(1 + 5.3) = \$15.87$
- **Drop from week 52 to week 53: \$0.26** (1.6% loss)

The same one-week delay costs \$9.09 when added to zero delay but only \$0.26 when added to 52 weeks. The proportional loss also differs: 9.1% versus 1.6%. This is what decreasing proportional decline looks like in concrete numbers.

The exponential model, by contrast, says that each one-week delay should reduce value by the same *proportion*, regardless of when it occurs. The step from week 0 to week 1 and the step from week 52 to week 53 should have the same proportional effect. Empirically, they do not. The hyperbolic captures this; the exponential does not.

The practical consequence is preference reversals. When both a small-soon and a large-late reward are far in the future, you may genuinely prefer the larger reward. But as the small-soon reward draws near, its value surges (because the hyperbolic curve is steep at short delays), and your preference flips. You meant to save for retirement, but the impulse purchase is available now. You planned to study this evening, but the invitation to go out arrives. The mathematics of the hyperbolic function is a formal description of this everyday experience.

Understanding the mathematics does not just describe the problem---it points toward solutions. If preference reversals occur because the smaller-sooner reward's value rises steeply as it approaches, then **commitment devices** (removing the smaller-sooner option before the reversal point) should work. And indeed they do: people who commit in advance to saving, to dieting, or to studying are more successful than those who rely on willpower in the moment. The hyperbolic model explains why.

Another way to state the core insight: the hyperbolic model says that organisms are not bad at evaluating delayed rewards in general---they are specifically bad at evaluating delays near the present moment, where the curve is steepest. At long time horizons, their preferences are reasonable (they choose the larger option). It is only as the immediate option becomes available that the steep part of the curve overwhelms the comparison. This asymmetry between how we evaluate near-future and far-future delays is the engine of impulsive choice.

---

## Assumptions and Limitations

Every model simplifies, and Mazur's hyperbolic is no exception. The following assumptions and limitations should be kept in mind when using the model.

**Single reinforcer.** The model considers one delayed outcome in isolation. In real life, people choose among many options simultaneously. The interaction between multiple delayed outcomes is not captured by the standard single-outcome discount function. As Cox and Dallery (2018) showed, the presence of a second outcome can shift the discount function for the first. The single-reinforcer model cannot accommodate these context effects.

**Stable preferences.** The model assumes that $k$ is a fixed property of the individual (or at least stable within the experimental session). In practice, discounting can be influenced by mood, stress, cognitive load, framing, and recent experiences. State-dependent variation in $k$ is not accommodated. A person's $k$ after a good night's sleep may differ from their $k$ after sleep deprivation, but the model treats $k$ as a constant.

**No framing effects.** How the choice is described (e.g., as a gain vs. a reduction in loss, in dollars vs. percentages, with or without visual timelines) can influence discounting. The basic model does not include framing as a variable. The sign effect---losses are often discounted less steeply than gains---is one well-documented instance of framing sensitivity that the model does not capture.

**Amount-independent $k$ (the magnitude effect).** The standard model assumes the same $k$ applies regardless of the amount being discounted. This is consistently violated: larger amounts are discounted less steeply than smaller amounts. A person may have $k = 0.10$ per week for \$100 but $k = 0.02$ per week for \$10,000. The magnitude effect is one of the most reliable violations of the simple model and motivates extensions such as the hyperboloid or models with amount-dependent $k$. The magnitude effect also has equity implications: because wealthier individuals effectively face "larger" amounts relative to their daily experience, the magnitude effect may partly explain socioeconomic differences in measured impulsivity.

**Time as the only dimension.** Real intertemporal choices involve uncertainty (will the reward actually be delivered?), effort (what do I have to do to get it?), and opportunity cost (what else could I be doing?). The basic discounting model collapses all of these into a single temporal dimension. Probability discounting (how value changes with decreasing probability of receipt) is a related but formally distinct process, and models that integrate delay and probability discounting are more complex than what we cover here.

**Static model.** The model describes the steady-state relationship between delay and value. It says nothing about how discounting develops over the lifespan, how it changes with therapeutic intervention, or how it shifts with experience. There are no learning dynamics. The model takes a snapshot of preferences; it does not explain how those preferences came to be or how they might change.

**Functional form.** The hyperbolic is a good empirical description, but it is not derived from first principles of behavior. It does not explain *why* discounting is hyperbolic. Mechanistic accounts---based on Weber-Fechner-like logarithmic time perception, memory trace decay, competitive temporal representations, or neural reward circuitry---remain active areas of research. The descriptive success of the hyperbolic model is a constraint that any mechanistic account must satisfy, but the descriptive model does not adjudicate among mechanistic theories.

**Individual differences in model form.** While the hyperbolic fits well on average, some individuals may be better described by exponential, hyperboloid, or other functions. Assuming a single functional form for all participants can mask meaningful heterogeneity. A participant whose data are truly exponential (rare, but possible) will have a $k$ estimate from the hyperbolic model that does not accurately characterize their discounting. Ideally, model form should be assessed at the individual level, not assumed.

**Nonsystematic data.** Some participants produce indifference points that do not decrease monotonically with delay. A participant might report a higher indifference point at 8 weeks than at 4 weeks, for example. Such nonsystematic data violate the basic premise of discounting (that value decreases with delay) and suggest either inattention, misunderstanding of the task, or genuine preference heterogeneity. Researchers have developed criteria for identifying and excluding nonsystematic data (e.g., Johnson & Bickel, 2008), but the practice of excluding data raises its own concerns about sample representativeness.

**Ecological validity.** Laboratory discounting tasks use hypothetical or small real rewards with fixed delays. Real-world intertemporal choices involve variable delays, uncertain outcomes, social influences, and competing demands on attention. The extent to which $k$ estimated in the lab predicts real-world impulsive behavior is an empirical question with mixed but generally encouraging results.

---

## Connection to Empirical Behavior Science

Delay discounting has become one of the most actively studied phenomena in behavior science, with direct connections to clinical practice, public health, and behavioral economics.

### Clinical Relevance

The relationship between steep discounting and problematic behavior is among the most replicated findings in clinical behavior science. Individuals with **substance use disorders**---including alcohol, nicotine, cocaine, opioids, and methamphetamine dependence---consistently show higher $k$ values than controls. The effect sizes are typically medium to large, and the relationship holds across diverse samples and measurement methods. This has led to the proposal that steep discounting is a behavioral marker of addiction vulnerability and a potential target for intervention. Some researchers have suggested that $k$ may be as important a risk factor for addiction as genetic predisposition or environmental exposure.

**ADHD** is characterized, in part, by difficulty waiting for delayed reinforcement. Children and adults with ADHD show steeper discounting than age-matched controls. This connects the clinical presentation (impulsivity, difficulty with delayed tasks, preference for immediate stimulation) to a quantitative behavioral process. It also suggests that interventions that alter the delay structure of reinforcement (e.g., more frequent feedback, shorter intervals between behavior and consequence) may be particularly effective for individuals with ADHD---a prediction with direct implications for classroom and clinical practice.

**Obesity** has been linked to steep discounting of food and monetary rewards. The preference for immediate food consumption over delayed health benefits is, at its core, a discounting problem. Individuals with obesity tend to show higher $k$ values, particularly for food rewards. Interventions that make the health consequences of eating more immediate (e.g., daily weigh-ins, immediate feedback on blood glucose) may work partly by reducing the effective delay to the health outcome.

**Problem gambling** involves choosing an uncertain immediate outcome (the gamble) over the more certain long-term outcome of retaining one's money. Although probability discounting is a related but distinct process, temporal discounting also plays a role in gambling behavior. Problem gamblers tend to show steeper discounting of delayed rewards, consistent with a general bias toward immediacy.

### Key Readings

**Critchfield and Kollins (2001)** provided an influential review arguing that delay discounting is relevant to a wide range of socially important behaviors. They highlighted the translational potential of basic discounting research for understanding real-world problems of self-control and impulsivity. Their paper was a call to applied behavior analysts to take discounting seriously as a quantitative framework for understanding the problems their clients face. The paper emphasized that discounting is not merely a laboratory curiosity but a process with direct relevance to education, clinical treatment, and public policy.

**Rachlin (2006)** offered a thoughtful treatment of the conceptual and mathematical foundations of discounting, including the relationship between delay and probability discounting, and the implications of hyperbolic discounting for theories of self-control. His work emphasized that the soft initial decline followed by a long tail is not merely a curve-fitting result but has deep implications for how we understand choice and commitment. Rachlin argued that patterns of choice over extended time frames---not individual choices in isolation---are the proper unit of analysis for self-control.

**Odum et al. (2020)** demonstrated that discounting rates can differ substantially across outcome types within the same individual. Discounting of health outcomes, for example, may follow a different pattern than discounting of monetary outcomes. Discounting of food rewards may differ from both. This finding challenges the view of $k$ as a unitary trait (a single number that characterizes an individual's impulsivity) and suggests that discounting is at least partly process- or outcome-specific. The implication is that clinical assessment of discounting should measure discounting for the specific outcome domain of interest, not assume that monetary $k$ generalizes to drug, food, or health outcomes.

**Cox and Dallery (2018)** examined how the presence of a second outcome influences discounting of the first, demonstrating that discounting does not occur in isolation. When multiple outcomes are simultaneously available, the discount function for one outcome can shift depending on the characteristics of the other. This work underscores the importance of considering context when applying discount models and pushes the field toward multivariate models of intertemporal choice. It also highlights a practical limitation of standard discounting tasks: they present a single delayed outcome against an immediate alternative, but real-world choices almost always involve multiple delayed and immediate options.

### Interventions Informed by Discounting

The discounting framework has also informed the design of interventions. **Contingency management** programs for substance abuse provide immediate tangible reinforcers (vouchers, prizes) for drug-free urine samples, effectively creating a competing immediate reinforcer that can outcompete the drug. The logic is directly informed by the discount function: if the drug is preferred because its reinforcement is immediate and the benefits of sobriety are delayed, then providing immediate reinforcement for sobriety can shift the balance.

**Episodic future thinking**---asking people to vividly imagine positive future events---has been shown to reduce discounting in laboratory tasks. The mechanism may involve making delayed outcomes feel more immediate and concrete, effectively reducing the psychological distance (and thus the discounting) of the delayed reward.

**Precommitment strategies**, such as automatic enrollment in retirement savings plans, exploit the preference reversal phenomenon. At a distance, people prefer the larger-later outcome (retirement savings). A precommitment locks in this preference before the reversal point arrives (the moment when the smaller-sooner option---spending the money now---becomes available and its value surges).

Together, these lines of research show that delay discounting is not merely an academic exercise in curve fitting. It is a quantitative behavioral process with direct relevance to some of the most pressing problems in behavioral health. The models we have studied this week---exponential, hyperbolic, hyperboloid---are tools for measuring, predicting, and ultimately intervening on impulsive choice.

---

## Exercises for Reflection

1. A participant shows an indifference point of \$75 for \$100 delayed by 4 weeks and an indifference point of \$25 for \$100 delayed by 52 weeks. Estimate $k$ from each data point using Mazur's equation. Are the two estimates similar? What would it mean if they were very different? What model form might better describe data where the hyperbolic $k$ estimates diverge substantially?

2. Exponential discounting predicts no preference reversals, yet preference reversals are commonly observed. Design a simple experiment (choice between a smaller-sooner and a larger-later reward at varying time horizons) that would test for preference reversals. Specify the amounts, the delays, and the expected pattern of choices under both exponential and hyperbolic discounting. What pattern of results would support hyperbolic over exponential discounting?

3. The magnitude effect---steeper discounting for smaller amounts---is a robust finding that violates the assumption of amount-independent $k$. Propose a modification to Mazur's model that could accommodate this effect. What would the modified equation look like? How many free parameters would it have, and what would each one represent?

4. AUC is described as a "model-free" measure of discounting. In what sense is it truly model-free, and in what sense does it still involve assumptions? (Hint: think about the normalization procedure, the choice to connect points with straight lines, the inclusion of the origin point, and the dependence on which delays were tested.) When would you prefer AUC over a parametric measure like $k$, and when would you prefer $k$ over AUC?

### Additional Challenges (Optional)

5. Using the data from the worked example ($A = 100$, $k = 0.10$ per week for the hyperbolic model), calculate the subjective value at $D = 3$ weeks and $D = 30$ weeks. Then convert $k$ to a per-day discount rate and recalculate the same subjective values. Verify that you get the same answer regardless of which time unit you use (as long as you are consistent).

6. Suppose two individuals have the following hyperbolic $k$ values: Person A has $k = 0.02$ per week, and Person B has $k = 0.20$ per week. Calculate the half-life of value for each person. Then calculate the indifference point for \$1,000 at a delay of 1 year (52 weeks) for each person. Discuss what these numbers mean in practical terms---for example, how would these two people differ in their willingness to save for a purchase one year in the future?

---

## Key Takeaways

- **Temporal discounting** is the decline in subjective value of a reinforcer as the delay to its receipt increases. It is one of the most robust quantitative regularities in behavior science, observed across species, reinforcer types, and populations.
- **Indifference points** are the primary data for discount functions. An indifference point is the immediate amount judged equivalent to a larger delayed amount.
- **Exponential discounting** ($V = Ae^{-kD}$) assumes a constant proportional decline in value per unit time. It predicts consistent preferences (no reversals) and is the normative standard in economics, but it fits behavioral data poorly.
- **Hyperbolic discounting** ($V = A/(1+kD)$, Mazur, 1987) assumes a decreasing proportional decline---steep at short delays, shallow at long delays. It fits empirical data far better than the exponential and correctly predicts preference reversals.
- **The $k$ parameter** is the discount rate. Higher $k$ = steeper discounting = more impulsive choice. Lower $k$ = shallower discounting = more self-controlled choice. The half-life of value is $1/k$. The parameter varies across individuals, populations, and reinforcer types.
- **Preference reversals** occur when two hyperbolic discount curves cross: the larger-later option is preferred at long time horizons, but preference switches to the smaller-sooner option as it approaches. This is the hallmark prediction of hyperbolic (but not exponential) discounting and explains everyday failures of self-control.
- **Area under the curve (AUC)** is a model-free measure of discounting, normalized from 0 (complete discounting) to 1 (no discounting). It requires no distributional assumptions and allows comparison across different model forms, but it discards information about the shape of the discount function.
- **The hyperboloid model** ($V = A/(1+kD)^s$) adds a scaling exponent to the hyperbola. When $s = 1$, it reduces to Mazur's model. It provides improved fit in many datasets at the cost of an additional free parameter.
- **Clinical significance**: Steep discounting is reliably associated with substance abuse, ADHD, obesity, and gambling. Understanding and measuring discounting has direct translational relevance for assessment and intervention.
- **Assumptions to remember**: The basic model assumes a single reinforcer, stable preferences, amount-independent $k$, and no framing effects. The magnitude effect (larger amounts discounted less steeply) is the most consistent violation and motivates more complex models.
- **The 8-step framework** applies cleanly to discounting: the phenomenon is clear (value declines with delay), the scope is definable (steady-state choice at fixed delays), the candidate law is specific (Mazur's hyperbola), the assumptions are enumerable, the math is tractable, the dimensions check out, boundary conditions are sensible, and the model can be tested against data and compared with alternatives.
- **Interventions informed by discounting** include contingency management, episodic future thinking, and precommitment strategies. The mathematical form of the discount function points directly to intervention design: if value surges for immediate rewards, provide competing immediate reinforcers; if preference reversals undermine long-term plans, lock in preferences before the reversal point.
- **Model comparison** between the exponential and hyperbolic illustrates a general modeling principle: models should be evaluated not just on overall fit, but on whether their residuals are systematic and whether they make correct qualitative predictions (such as preference reversals).
- **Description vs. mechanism**: The hyperbolic model is a powerful descriptive tool that tells us the shape of discounting but not the process that produces it. Future mechanistic models must generate this shape to be viable, but the descriptive model stands on its own as an empirical workhorse.
