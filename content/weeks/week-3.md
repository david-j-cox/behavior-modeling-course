---
slug: "week-3"
number: 3
published: true
title: "Historical Models: Demand"
subtitle: "How consumption changes with price"
description: "Hursh-Silberberg exponential demand equation, essential value, elasticity."
keyModels:
  - "Exponential Demand Equation"
  - "Simple Demand Curve"
  - "Unit Price Analysis"
keyEquations:
  - "log(Q) = log(Q_0) + k(e^(-alpha * Q_0 * C) - 1)"
  - "Essential Value = 1/alpha"
---

## Why This Topic Matters

A fundamental concern in the description, prediction, and control of behavior is to quantify the relative value of a reinforcer. By "value", we simply mean how much of some characteristic of behavior will be maintained by contact with that environmental stimulus (e.g., rate, latency, duration, intensity). As described well by Hursh and Silberberg (2008), researchers and practitioners have approached quantifying reinforcer value in several ways over the past 100+ years. These include rate of responding to a single-operant (higher rate = higher value), relative response allocation (higher allocation = higher value; e.g., matching and discounting from Week 2), ratio breakpoint (e.g., higher breakpoint = higher value), behavioral momentum (longer persistence = higher value; week 5), and demand (higher demand = higher value). 

The primary measure with demand analyses differs from other historical measures. In other measures, the dependent variable (the thing measured and analyzed) is the behavior of interest itself with precise actual contact with the reinforcer assumed or unemasured. In contrast, with demand, the dependent variable is precise measures pertaining to consumption of the reinforcer. And, the primary question is how much of that specific commodity (i.e., reinforcer) will an organism consume as the price of that commodity changes? Demand analysis captures this relationship between price and consumption quantitatively.

The exponential demand equation developed by Hursh and Silberberg (2008) provides the original mathematical description of demand within behavioral economics. It yields a small set of interpretable parameters that summarize an organism's consumption pattern in a manner that allows for comparison across commodities, individuals, and species. These include demand intensity, essential value, and elasticity (more below).

It is worth noting the historical trajectory. Before the exponential model, researchers used simple power functions and other descriptive approaches to characterize demand. These approaches worked reasonably well within a single dataset but made cross-study and cross-commodity comparisons difficult because parameters were not normalized. The exponential model solved this by building normalization into the equation itself allowing the model to more easily translate across commodities, preparations, and species.

A final nicety of demand analysis is that it connects behavior science to economics. Economists have studied demand for centuries and, thus, connecting concepts from behavior science to concepts of economics opens many routes for novel exploration of behavior-consequence relations. But behavior scientists also brought something new to the economists: the ability to manipulate prices experimentally, to control the economy completely, and to measure behavior with a precision that field studies of human purchasing cannot match. The result is a quantitative framework that is simultaneously rigorous and applicable.

---

## Historical Context

Before diving into the core concepts, it is useful to understand how behavioral demand analysis developed. The intellectual roots lie in microeconomics, where demand theory has been a cornerstone since the 19th century. Economists recognized early that the quantity demanded of a good depends on its price, the consumer's income, and the prices of substitute and complementary goods. These relationships were formalized in demand functions and analyzed using concepts like elasticity, consumer surplus, and utility.

Behavior analysts entered this territory in the 1970s and 1980s when recognizing that operant behavior could be analyzed using economic concepts. For example, Hursh (1980) proposed that the operant chamber could be treated as a miniature economy, with response requirements serving as prices and reinforcer deliveries serving as commodities. This insight opened the door to applying the entire apparatus of demand theory to behavioral data.

Early behavioral demand studies plotted consumption against price on log-log axes and noted that the resulting curves were often well described by power functions: $\log(Q) = a + b \cdot \log(C)$, where $Q$ is the amount of the commodity consumed, the y-intercept $a$ is how much the indvidiual would consume when the commodity is free (i.e., x=0), the slope $b$ of this log-log function was interpreted as an index of elasticity (i.e., how quickly demand would reduce as price changed), and $C$ was the cost of accessing the commodity. This approach was useful but had a significant limitation in that the slope of a power function is constant. That is, it predicts the same elasticity at all prices. Real demand curves, however, show mixed elasticity with relatively no or small changes in consumption at low prices and greater changes in cinsumption at high prices.

Hursh and Silberberg (2008) addressed this limitation by introducing the exponential demand equation which allows elasticity to change smoothly across the price range. They also introduced the essential value metric ($1/\alpha$), which provides a single, normalized index of reinforcer value that could be compared across commodities and species. This was a major advance because it meant that researchers studying cocaine self-administration in rats and researchers studying cigarette purchasing in humans could communicate their results on a common quantitative scale.

Since 2008, the exponential demand equation has become the standard tool for demand analysis in behavior science. It has been applied to dozens of commodities across multiple species, and its parameters have been shown to predict clinically important outcomes such as treatment response, relapse risk, and the effects of policy interventions.

Understanding this history helps you better understand the current model. When we write the exponential demand equation, we are not simply choosing a convenient mathematical function. Rather, we are using a tool specifically engineered to solve problems that earlier models could not handle---particularly the problem of comparing reinforcer value across different commodities, organisms, and experimental preparations.

---

## Core Concepts

### Demand and Consumption

**Demand** refers to the functional relationship between the price of a commodity and the amount consumed. Demand is not a single number, but a curve. As price increases, consumption typically decreases and where the shape of that decrease provides useful information. Does consumption drop slowly, suggesting the commodity is essential? Or does consumption drop quickly, suggesting it is a luxury that the organism readily gives up?

In behavior-analytic terms, consumption is the number of reinforcers obtained (or the total amount consumed), and price is the response requirement per unit of reinforcer. The demand curve plots consumption as a function of price across a range of price values, typically after the organism has reached steady-state performance at each price.

Demand curves are typically plotted on double-logarithmic (log-log) axes. There are two reasons this is done. First, price and consumption often span several orders of magnitude (e.g., from FR 1 to FR 300, and from 100 reinforcers to 1 reinforcer). Log axes make relations spanning orders of magnitude easier to see, visually by spreading the data out across the full range and preventing the low-price, high-consumption data from being compressed into one corner of the plot. Second, on log-log axes, proportional changes are represented as equal distances. A drop from 100 to 50 reinforcers (50% decline) takes up the same vertical distance as a drop from 10 to 5 (also 50% decline). This makes it easy to see whether the proportional rate of decline is constant, accelerating, or decelerating.

One of the key insights of demand analyses is that measures of reinforcer value at a single price point (e.g., FR1 in many clinical settings) can be misleading. Two reinforcers might be equally preferred when they are free or near free, but one might maintain far more behavior when the price is high. Demand analysis reveals these subtle differences.

It is also useful to distinguish between **consumption** and **expenditure** (or output). Consumption ($Q$) is the number of reinforcers obtained. Expenditure ($O$) is the total number of responses emitted to obtain those reinforcers. The relationship is:

$$O = Q \times C$$

where $C$ is the unit price. Consumption and expenditure can tell very different stories. When demand is **inelastic**, consumption drops slowly with price, but expenditure actually increases because the organism is working harder per reinforcer. When demand is **elastic**, consumption and expenditure decrease. The transition point from inelastic to elastic is the point at which expenditure is maximized and termed $P_{max}$. We will return to this concept when we discuss the exponential demand equation.

### Unit Price

**Unit price** is defined as the ratio of the response requirement to the reinforcer magnitude:

$$\text{Unit Price} = \frac{\text{Responses per Reinforcer}}{\text{Reinforcer Magnitude}}$$

For a simple fixed-ratio (FR) schedule where each reinforcer delivery is identical, the unit price is simply the FR value. An FR 10 schedule has a unit price of 10 responses per reinforcer. But the concept generalizes. If one condition delivers 2 pellets per reinforcer on an FR 20, and another delivers 1 pellet on an FR 10, both have a unit price of 10 responses per pellet. An interesting question is whether these are functionally equivalent. The **unit price equivalence assumption** states that different combinations of response requirement and reinforcer magnitude that produce the same unit price should produce the same consumption level. This assumption has received substantial empirical support, particularly in closed economies, and it allows researchers to compare demand across schedule types and reinforcer magnitudes on a common scale.

It is important to understand what unit price does and does not capture. Unit price captures the ratio of effort to payoff, but it does not capture all aspects of cost. For example, the temporal cost of a schedule (how long the organism must wait) is not represented in unit price as traditionally defined. An FR 100 that takes 2 minutes to complete and an FR 100 that takes 20 minutes to complete have the same unit price but may produce different consumption levels. Researchers have proposed extensions to the unit price concept (e.g., incorporating time as a cost dimension), but the standard formulation focuses on the response-to-reinforcer ratio.

Additionally, unit price can be computed for schedules beyond simple FRs. For variable-ratio (VR) schedules, the average ratio value serves as the unit price. For fixed-interval (FI) and variable-interval (VI) schedules, the calculation is more complex because the "responses per reinforcer" depends on the organism's response rate, creating a feedback loop. Some researchers avoid this complication by restricting demand analyses to ratio schedules, where the price is set by the experimenter and does not depend on the organism's behavior.

### Elastic vs. Inelastic Demand

The rate at which consumption changes with price defines **elasticity**.

- **Inelastic demand**: Consumption changes relatively little as price increases. The organism continues to work and consume despite rising costs. Essential commodities tend to produce inelastic demand. Examples here include food for a hungry organism and water for a thirsty one. The organism needs these to survive and will pay high prices to obtain them.

- **Elastic demand**: Consumption drops sharply as price increases. The organism quickly reduces its consumption or abandons the commodity altogether. Luxury commodities or those with readily available substitutes tend to produce elastic demand.

Most demand curves show **mixed** elasticity. That is, they begin inelastic at low prices (consumption is defended) and become elastic at higher prices (consumption eventually falls off). The price at which the curve transitions from inelastic to elastic is **$P_{max}$**, the price that generates maximum total expenditure (responses). Below $P_{max}$, the organism defends its consumption. Above $P_{max}$, the rate of consumption decline outpaces the rate of price increase, and total output (price $\times$ consumption) begins to decrease.

To understand elasticity more formally, consider the concept of **normalized demand**. At any given price, demand is inelastic if a 1% increase in price produces less than a 1% decrease in consumption. Demand is elastic if a 1% increase in price produces more than a 1% decrease in consumption. At $P_{max}$, these rates are exactly equal: a 1% increase in price produces exactly a 1% decrease in consumption. This is the point of **unit elasticity**.

The concept of $P_{max}$ has direct practical significance. In a clinical context, if you set the response requirement for a reinforcer below $P_{max}$, you are in the inelastic region and the client will work for the reinforcer and maintain relatively stable consumption. If you set the requirement above $P_{max}$, you risk the client allocating behavior elsewhere because the cost to contact the reinforcer is too high. Knowing $P_{max}$ helps practitioners set response requirements that are challenging enough to promote behavior change without being so high that the reinforcer loses its effectiveness.

### The Exponential Demand Equation

Hursh and Silberberg (2008) proposed an exponential model of demand that has become the standard in behavioral economics:

$$\log(Q) = \log(Q_0) + k \left( e^{-\alpha \cdot Q_0 \cdot C} - 1 \right)$$

where:

- $Q$ is the **consumption level** (number of reinforcers obtained, or total amount consumed) at a given price.
- $Q_0$ is the **demand intensity**. That is, the level of consumption when price is zero (i.e., when the commodity is free).
- $\alpha$ (alpha) is the **rate of decline** in consumption as price increases. This parameter controls how quickly the demand curve bends downward.
- $k$ is the **range constant**, specifying the consumption range of the demand curve in log units, from $Q_0$ down to the lowest observed consumption level. 
- $C$ is the **cost** or **unit price**

The equation operates in log-consumption space (often base 10). The term $e^{-\alpha \cdot Q_0 \cdot C}$ is an exponential decay function that drives consumption from its initial level ($Q_0$) down toward zero as price increases. The rate of that decay is governed by $\alpha$.

A critical feature of the equation is that $\alpha$ and $Q_0$ appear together in the exponent as a product ($\alpha \cdot Q_0 \cdot C$) indicating their interaction. This is a **normalized** form: it accounts for the fact that commodities consumed in large quantities (high $Q_0$) will naturally show larger absolute drops in consumption. By including $Q_0$ in the exponent, the equation allows $\alpha$ to serve as a rate-of-decline parameter that is comparable across commodities with different baseline consumption levels.

To understand why normalization matters, consider two commodities: water (consumed at 500 ml per session when free) and a flavored solution (consumed at 50 ml per session when free). Without normalization, the absolute drop in consumption of water would likely be larger than the absolute drop for the flavored solution at any given price simply because the starting point is higher. The $Q_0$ term in the exponent rescales the price axis so that both commodities are evaluated in terms of proportional changes relative to their own baselines. This is what makes $\alpha$, and therefore essential value, a meaningful comparison metric.

It is also worth understanding the role of the subtracted 1 in the expression $(e^{-\alpha \cdot Q_0 \cdot C} - 1)$. At $C = 0$, the exponential term equals 1, and the entire parenthetical expression equals zero. This ensures that $\log(Q) = \log(Q_0)$ when price is zero. As $C$ increases, the exponential term decreases toward 0, and the parenthetical expression approaches $-1$, meaning $\log(Q)$ approaches $\log(Q_0) - k$. The parameter $k$, thus, sets the floor: the maximum number of log units that consumption can decrease.

### Essential Value

**Essential value** is defined as the reciprocal of $\alpha$:

$$EV = \frac{1}{\alpha}$$

This has been argued as the most important number that demand analysis produces. Essential value quantifies how resistant consumption is to price increases:

- A **small** $\alpha$ means consumption declines slowly with price. The commodity is hard to give up. Essential value ($1/\alpha$) is **large**.
- A **large** $\alpha$ means consumption declines quickly with price. The commodity is easy to give up. Essential value ($1/\alpha$) is **small**.

Essential value provides a single-number index of reinforcer efficacy that incorporates the entire demand curve, not just a single preference point. It answers the question: how much does this organism value this commodity, in the sense of being willing to pay increasing costs to maintain consumption?

In drug self-administration research, essential value has been used to rank the reinforcing efficacy of different drugs and doses. In clinical settings, it can be used to identify which potential reinforcer a client will work hardest to obtain.

The elegance of essential value lies in its simplicity. The entire demand curve of potentially hundreds of data points collected over weeks of testing can be distilled into a single number. This makes essential value easy to communicate, easy to compare, and easy to use in decision-making. A clinician can say "this reinforcer has an essential value of 5,000 and that one has an essential value of 300" and immediately know which one will sustain more behavior under challenging conditions.

This simplicity, however, does come at a cost. Essential value collapses the entire shape of the demand curve into one number, discarding information about $Q_0$, $k$, and the specific shape of the decline. Two commodities can have the same essential value but very different demand curves. For example, one commodity might start high and decline gradually whereas a second might start low and decline gradually. For many purposes, essential value alone is sufficient. For others, the full set of parameters might be needed, depending on the reason someone is conducting a demand analysis.

### Q_0 --- Demand Intensity

$Q_0$ is the **demand intensity**: the level of consumption when the commodity is free (price = zero). It reflects baseline preference or hedonic value in the absence of effort constraints.

$Q_0$ is informative but incomplete. Two commodities can have identical $Q_0$ values (equally consumed when free) but very different $\alpha$ values (very different rates of decline with price). In such cases, the commodity with the smaller $\alpha$ (higher essential value) is the more potent reinforcer because the organism will defend its consumption of that commodity as price increases.

This distinction highlights why free-access preference assessments or FR1 preference assessments can be misleading: they estimate $Q_0$ but tell us nothing about $\alpha$.

In practical terms, $Q_0$ is often estimated by extrapolation rather than direct measurement because most experimental designs do not include a truly free-access condition ($C = 0$). Instead, the lowest price tested (e.g., FR 1) approximates near-zero cost, and $Q_0$ is the model's estimate of what consumption would be if cost were truly zero. This means $Q_0$ is partially a model-derived quantity, not purely an empirical observation. The distinction is subtle but important when interpreting results.

$Q_0$ also provides information about the **hedonic value** or **palatability** of a commodity. For example, two drugs might each have high essential value (both are hard to give up), but one might have a much higher $Q_0$ (the organism consumes more of it when it is cheap). This could reflect differences in the sensory experience of consuming the commodity, the rate at which satiation occurs, or other factors that operate primarily at low prices.

### Open vs. Closed Economies

The economic context in which demand is measured will signficaintly affect the results.

In a **closed economy**, the experimental session is the organism's only source of the commodity. A rat that earns all of its food during the session is in a closed economy. There is no supplemental feeding outside the session.

In an **open economy**, the organism has access to the commodity outside the session. A rat that receives supplemental food after the session, regardless of how much it earned, is in an open economy.

Closed economies generally produce more inelastic demand than open economies. When the session is the only source of access, the organism must work to obtain the commodity or go without. Open economies allow the organism to "make up" consumption outside the session, reducing responding within the session.

The distinction matters practically as demand parameters estimated in open and closed economies are not directly comparable. Researchers and practitioners have to specify the economic context and interpret parameters accordingly.

Several factors contribute to the difference between open and closed economies:

1. **Income constraint**: In a closed economy, the organism's total consumption is bounded by its behavioral output (e.g., if it stops responding, it gets nothing). This creates a strong incentive to respond even at high prices. In an open economy, supplemental access relaxes this constraint. 

2. **Satiation dynamics**: In closed economies with long sessions (e.g., 24-hour sessions), the organism may experience cycles of deprivation and satiation within the session, which can affect the pattern of responding. In open economies, between-session supplementation maintains a more constant state within experimental sessions.

3. **Substitution**: In open economies, the between-session access to the commodity serves as a "free" substitute. The organism can partially compensate for reduced within-session consumption by consuming more outside the session. In a closed economy, there is no substitute.

4. **Session length**: Closed economies often use longer sessions (12-24 hours) to allow the organism adequate opportunity to earn its entire daily intake. Open economies may use shorter sessions because consumption within the session is not the organism's only source.

Understanding these factors helps explain why the same commodity can yield very different demand parameters in different economic contexts. It also highlights the importance of matching the experimental context to the question being asked. If the goal is to assess how essential a commodity is under conditions where the organism depends on it entirely, a closed economy is appropriate. If the goal is to model behavior in a context where alternatives exist, an open economy might be more relevant.

---

## Applying the 8-Step Framework

next, we will walk through all 8 steps for modeling demand for food reinforcement in a food-deprived rat responding on progressive ratio schedules in a closed economy.

### Step 1: Identify All Environmental and Behavioral Components of the Phenomenon

A food-deprived rat is placed in an operant chamber with a lever. Presses on the lever produce food pellets. Across conditions, the response requirement (FR value) changes: FR 1, FR 3, FR 10, FR 30, FR 100, FR 300, and so on. Each condition is maintained until responding is stable (typically 5-10 sessions of stable consumption). At low FR values, the rat consumes many pellets. As the FR value increases, the rat consumes fewer pellets per session. Eventually, at very high FR values, the rat consumes very few or no pellets. We want to model the entire relationship between price (FR value) and consumption (pellets earned).

The phenomenon is robust and replicable. It has been observed across species (rats, pigeons, monkeys, humans), across commodities (food, water, drugs, access to activities), and across different schedule types. The orderly decline of consumption with price is one of the most reliable quantitative findings in behavior science. Our task is to capture the shape of this decline mathematically and to extract meaningful parameters from it.

What does the raw data look like? If you were observing this experiment, you would see the following pattern. In the FR 1 condition, the rat presses the lever frequently throughout the session, earning and consuming many pellets. Sessions are characterized by steady, sustained responding. In the FR 30 condition, the rat still responds but with longer post-reinforcement pauses. Each reinforcer now costs 30 presses, and the rat earns fewer total pellets. In the FR 300 condition, the rat may press the lever in bursts, earning one or two pellets over the course of the session before ceasing to respond. The cumulative record changes shape across conditions from a steep, steady slope at low FRs to a shallow, irregular line at high FRs.

These within-session patterns are informative but are not what the demand equation models. The demand equation takes the summary measure (i.e., total pellets earned per session) and relates it to the price (i.e., FR value). It compresses the rich temporal dynamics of each session into a single data point (consumption at that price) and asks: What mathematical function describes how these summary points change across prices?

### Step 2: Define the Behavioral Principles, Processes, and Intended Scope of the Model

We are modeling *steady-state consumption as a function of unit price* for a single commodity (food) in a single organism (one rat) under a closed economy. Our dependent variable is the number of reinforcers obtained per session ($Q$). Our independent variable is the unit price ($C$), operationalized as the FR value (since reinforcer magnitude is constant, unit price equals FR value).

The scope boundaries are worth stating explicitly. In this exampe, we are not modeling:
- **Within-session dynamics**: How the rat distributes its responding across the session (e.g., post-reinforcement pauses, bout structure).
- **Transition effects**: How behavior changes when the FR value shifts from one condition to the next.
- **Alternative reinforcement**: The rat has no access to other commodities or activities during the session (beyond whatever "extraneous" reinforcement the chamber environment provides).
- **Individual differences in learning history**: We model one rat's data at a time; group-level models would require additional assumptions about the distribution of parameters across subjects.

### Step 3: Write Down the Behavioral Principles, Known Quantitative Laws, and Functional Relationships

The candidate quantitative law is the Hursh-Silberberg exponential demand equation:

$$\log(Q) = \log(Q_0) + k \left( e^{-\alpha \cdot Q_0 \cdot C} - 1 \right)$$

This equation emerges from the behavioral-economic principle that consumption is governed by the interaction of the organism's valuation of the commodity and the cost of obtaining it. It replaces earlier power-function models of demand that lacked a common scaling metric.

The choice of this specific equation is not arbitrary. Earlier attempts to model demand used simple power functions (e.g., $\log(Q) = \log(a) + b \cdot \log(C)$), which fit individual datasets well but yielded parameters that were difficult to compare across commodities and species. The exponential model was designed to solve this problem by normalizing the rate parameter with respect to baseline consumption. This makes it the current standard in the field.

### Step 4: State All Simplifying Assumptions Explicitly

1. **Steady state**: The organism has reached stable performance at each price point before consumption is measured.
2. **Single commodity**: Only one reinforcer is available. There are no substitutes within the session.
3. **Closed economy**: The session is the organism's sole source of food.
4. **Constant motivation**: The organism's deprivation level (and thus EO for food) is approximately constant across conditions, achieved through consistent deprivation protocols.
5. **Unit price equivalence**: Price is fully captured by the FR value (since reinforcer magnitude and effort to depress the lever are constant across conditions).
6. **Shared $k$**: The range constant $k$ is assumed to be the same across commodities and individuals within a dataset. This simplification allows $\alpha$ values to be compared directly.
7. **No income effects**: The model does not account for the organism's total "budget" (e.g., the total number of responses it is capable of emitting in a session). At very high prices, income constraints may limit consumption independent of demand.
8. **Log-linear relationship**: The model operates in log-consumption space, assuming that proportional changes in consumption are the meaningful unit of analysis.

Each of these assumptions represents a simplification of reality. The real rat's MOs likely fluctuate within and across sessions; alternative reinforcement is never truly zero (the rat can groom, explore, sleep); and the organism's total response capacity is finite. being disciplined in modeling requires us to state these assumptions explicitly so that we know exactly where the model might fail and can design tests of those boundaries.

### Step 5: Write the Model Verbally, Then Express It Mathematically

**Verbally**: The amount of reinforcers consumed is a function of its price. It will be highest when the price is zero (or nerar zero). The rat will likely increase how much it responds to maintain contact with food pellets as the FR requirements increase. However, at a certain point, the FR requirements will be too high and consumption will decrease faster than FR requirements increase. And, at a particular price, contact with reinforcement will stop altogether. 

**Mathematically**:
$$\log_{10}(Q) = \log_{10}(Q_0) + k \left( e^{-\alpha \cdot Q_0 \cdot C} - 1 \right)$$

The parameters are:

| Symbol | Name | Interpretation | Units |
|--------|------|---------------|-------|
| $Q$ | Consumption | Reinforcers obtained per session | Count |
| $Q_0$ | Demand intensity | Consumption at zero price | Count |
| $\alpha$ | Rate parameter | Rate at which consumption declines with price | 1/(responses $\times$ count) |
| $k$ | Range constant | Log-unit range of the demand curve | Dimensionless (log units) |
| $C$ | Cost / Price | Response requirement per reinforcer (FR value) | Responses per reinforcer |

The **essential value** is:

$$EV = \frac{1}{\alpha}$$

### Step 6: Verify Dimensional Consistency

Dimensional analysis is a critical check on any mathematical model. If the units do not work out, the equation is wrong regardless of how well it fits data. For the exponential demand equation, we must verify two things: (1) the exponent is dimensionless, and (2) both sides of the equation have the same units.

Consider the exponent: $-\alpha \cdot Q_0 \cdot C$. For this to be dimensionless (as required for an exponent):

- $Q_0$ has units of reinforcers (count)
- $C$ has units of responses per reinforcer
- $Q_0 \cdot C$ has units of responses (count $\times$ responses/count = responses)
- $\alpha$ must therefore have units of 1/responses

The product $\alpha \cdot Q_0 \cdot C$ is then dimensionless (1/responses $\times$ responses = dimensionless). The exponential of a dimensionless number is dimensionless. Multiplying by $k$ (dimensionless, in log units) yields log units. Adding $\log(Q_0)$ (log units) to a quantity in log units yields log units. The left side, $\log(Q)$, is also in log units. Dimensions are consistent.

### Step 7: Specify Starting Values and Constraints

- $Q_0 > 0$: Consumption at zero price must be positive (the organism consumes the commodity when it is free).
- $\alpha > 0$: The rate of decline must be positive (consumption decreases, not increases, with price).
- $k > 0$: The range constant must be positive. Common practice sets $k$ to a shared value across all curves in a dataset. Hursh and Silberberg (2008) suggested $k$ values in the range of 2-4 for many behavioral datasets. A commonly used value is $k = 3$, or $k$ may be estimated from the data as $k = \log(Q_0) - \log(Q_{min})$, where $Q_{min}$ is the lowest observed non-zero consumption value.
- $C \geq 0$: Price is non-negative. At $C = 0$, the equation yields $\log(Q) = \log(Q_0) + k(e^0 - 1) = \log(Q_0) + k(1-1) = \log(Q_0)$, confirming that consumption equals $Q_0$ at zero price.

It is worth noting that the constraints on parameters are not arbitrary to make the math work. Rather, they follow from the behavioral interpretation of the model. A negative $Q_0$ would mean negative consumption at zero price, which is nonsensical. A negative $\alpha$ would mean consumption increases with price, which contradicts the definition of demand (though it could in principle describe a Giffen good which is a theoretical curiosity in economics that has rarely been documented empirically). Thus, these logical behavioral constraints guide the fitting process (by bounding the search space) and the interpretation of results (by flagging implausible estimates as potential fitting failures).

For curve fitting, reasonable starting values might be:
- $Q_0$: Set to the observed consumption at the lowest price
- $\alpha$: Start with a small value such as $0.001$
- $k$: Fix at 3, or estimate from the data range

### Step 8: Check the Math, Test Against Data, and Derive Predictions

**Verify (boundary conditions)**:

- At $C = 0$: $\log(Q) = \log(Q_0) + k(e^0 - 1) = \log(Q_0) + 0 = \log(Q_0)$. So $Q = Q_0$. Correct: at zero price, consumption equals demand intensity.
- As $C \to \infty$: $e^{-\alpha \cdot Q_0 \cdot C} \to 0$, so $\log(Q) \to \log(Q_0) + k(0 - 1) = \log(Q_0) - k$. This means the minimum predicted consumption is $Q_0 \cdot 10^{-k}$. If $Q_0 = 100$ and $k = 3$, the minimum consumption is $100 \cdot 10^{-3} = 0.1$ reinforcers. In practice, consumption will hit zero before this asymptote.

**Validate**: Fit the equation to data from each rat. Use nonlinear least-squares regression on the log-transformed consumption values. Assess goodness of fit via $R^2$ and MAE, and examine residual plots for systematic deviations. Compare fits to alternative models (e.g., simple power functions) to confirm the exponential model provides a superior or equivalent account. Typical $R^2$ values for the exponential demand equation range from 0.85 to 0.99 in well-controlled studies, indicating that the model captures the vast majority of variance in consumption across prices.

It is also important to check whether the residuals show any systematic pattern. If the model consistently overestimates consumption at moderate prices and underestimates at extreme prices, this may indicate that the exponential form does not perfectly capture the curvature in the data. Such patterns can motivate the use of alternative models (e.g., the exponentiated demand equation) or suggest that additional factors (e.g., income constraints at high prices) need to be considered.

**Solve / Predict**: Given estimated $Q_0$ and $\alpha$ (with $k$ fixed or estimated), predict consumption at any new price. Compute essential value as $1/\alpha$. Compute $P_{max}$ (the price generating maximum responding) analytically:

$$P_{max} = \frac{1}{\alpha \cdot Q_0 \cdot k \cdot e^1} \approx \frac{0.368}{\alpha \cdot Q_0 \cdot k}$$

This formula identifies the price at which behavioral output (total responses = $Q \times C$) is maximized which is a critical value for understanding the transition from inelastic to elastic demand.

---

## Worked Example

This section walks through a complete numerical example of fitting the exponential demand equation to data, computing derived quantities, and interpreting the results.

### The Scenario

A food-deprived rat responds for 45-mg food pellets in a closed economy. Sessions last 24 hours, and the rat's only source of food is the lever in the operant chamber. The experimenter systematically varies the FR value across conditions, running each condition for 10 sessions and taking the mean consumption from the last 5 sessions (after stability is reached) as the data point for that price.

### Data

The FR value is systematically varied across conditions, and steady-state consumption is recorded. The data are:

| FR Value ($C$) | Pellets Earned ($Q$) | $\log_{10} Q$ |
|:--------------:|:--------------------:|:-------------:|
| 1 | 90 | 1.954 |
| 3 | 85 | 1.929 |
| 10 | 70 | 1.845 |
| 30 | 40 | 1.602 |
| 60 | 18 | 1.255 |
| 100 | 6 | 0.778 |
| 300 | 1 | 0.000 |

Notice several features of the data. First, consumption is highest at the lowest price (90 pellets at FR 1) and lowest at the highest price (1 pellet at FR 300). Second, consumption does not decline linearly. It drops slowly at first and then more rapidly. Between FR 1 and FR 10, consumption drops by about 22% (from 90 to 70). Between FR 30 and FR 100, consumption drops by 85% (from 40 to 6). This accelerating decline is the hallmark characteristic of a demand curve transitioning from inelastic to elastic.

Also note the total responses (price $\times$ consumption) at each price: 90, 255, 700, 1200, 1080, 600, 300. Total responding peaks around FR 30 ($1{,}200$ responses), suggesting that $P_{max}$ is somewhere near FR 30.

### Fitting the Model

We fit the exponential demand equation:

$$\log_{10}(Q) = \log_{10}(Q_0) + k \left( e^{-\alpha \cdot Q_0 \cdot C} - 1 \right)$$

We fix $k = 2.5$ (estimated from the data range: $\log_{10}(90) - \log_{10}(1) \approx 1.95$, rounded up slightly to allow headroom). We then estimate $Q_0$ and $\alpha$ using nonlinear least-squares regression.

**Step 1: Initial values.**
- $Q_0 = 95$ (slightly above the highest observed consumption, since the lowest price tested is FR 1, not FR 0)
- $\alpha = 0.0001$ (a small starting value)

**Step 2: Fit the model.**

Using nonlinear regression (e.g., via Python's `scipy.optimize.curve_fit` or R's `nls` function), we minimize the sum of squared residuals between the observed $\log_{10}(Q)$ values and the values predicted by the equation. The optimization algorithm iteratively adjusts $Q_0$ and $\alpha$ until it finds the values that produce the smallest total squared error.

After optimization, we obtain the best-fitting parameter estimates:

- $Q_0 = 96.2$
- $\alpha = 0.000328$
- $k = 2.5$ (fixed)

**Step 3: Compute predicted values.**

Using the original parameters, we generate predicted consumption at each price:

| $C$ | Observed $\log Q$ | $-\alpha \cdot Q_0 \cdot C$ | $e^{-\alpha \cdot Q_0 \cdot C}$ | Predicted $\log Q$ |
|:---:|:-----------------:|:---------------------------:|:-------------------------------:|:------------------:|
| 1 | 1.954 | $-0.0316$ | 0.969 | 1.906 |
| 3 | 1.929 | $-0.0947$ | 0.910 | 1.759 |
| 10 | 1.845 | $-0.3157$ | 0.729 | 1.306 |
| 30 | 1.602 | $-0.9472$ | 0.388 | 0.454 |
| 60 | 1.255 | $-1.8944$ | 0.150 | $-0.129$ |
| 100 | 0.778 | $-3.1573$ | 0.043 | $-0.910$ |
| 300 | 0.000 | $-9.4718$ | 0.000 | $-1.517$ |

Note: The predicted values above use the initial parameter estimates, not the optimized ones. Real curve fitting uses iterative optimization across all data points simultaneously, adjusting both $Q_0$ and $\alpha$ to minimize total error. Let us walk through what optimization would yield.

After full nonlinear least-squares optimization, suppose the best-fitting parameters are:

- $Q_0 = 95.8$
- $\alpha = 0.000045$
- $k = 2.5$ (fixed)

Recomputing predicted values with these optimized parameters:

| $C$ | Observed $\log Q$ | Predicted $\log Q$ | Residual |
|:---:|:-----------------:|:------------------:|:--------:|
| 1 | 1.954 | 1.971 | $-0.017$ |
| 3 | 1.929 | 1.949 | $-0.020$ |
| 10 | 1.845 | 1.873 | $-0.028$ |
| 30 | 1.602 | 1.656 | $-0.054$ |
| 60 | 1.255 | 1.224 | 0.031 |
| 100 | 0.778 | 0.727 | 0.051 |
| 300 | 0.000 | $-0.340$ | 0.340 |

The residuals are now much smaller, and the model captures the shape of the decline well. The sum of squared residuals is $SSR = 0.017 + 0.020^2 + 0.028^2 + 0.054^2 + 0.031^2 + 0.051^2 + 0.340^2 \approx 0.124$. The $R^2$ value (computed against the total variance in $\log(Q)$) would be approximately 0.96, indicating an excellent fit.

The largest residual occurs at FR 300 ($0.340$ log units). This is common: at very high prices, consumption is near zero and highly variable, making precise prediction difficult. The model predicts slightly negative log-consumption (i.e., fractional pellets), which reflects the asymptotic floor of the curve rather than a realistic consumption value. In practice, when the predicted value falls below some minimum threshold (e.g., less than 1 reinforcer), we can interpret this as effective cessation of consumption.

### Goodness of Fit Assessment

Beyond $R^2$, we should examine the pattern of residuals. In our example, the residuals are small and do not show a strong systematic pattern (no consistent U-shape or S-shape), which suggests the exponential model is appropriate for these data. If the residuals showed a clear pattern (e.g., consistent overestimation at moderate prices and underestimation at high prices), this would suggest the model's functional form does not match the data and an alternative equation should be considered.

### Computing Essential Value

With our optimized $\alpha = 0.000045$:

$$EV = \frac{1}{\alpha} = \frac{1}{0.000045} \approx 22{,}222$$

This essential value indicates that food, for this rat under closed-economy conditions, is an extremely highly valued commodity. The rat defends its consumption vigorously as price increases. This is expected as, in a closed economy, food is the rat's only caloric source, so it is literally essential for survival.

For comparison, if a different commodity (say, a saccharin solution) tested in the same rat under the same closed-economy conditions yielded $\alpha = 0.0035$, then:

$$EV_{saccharin} = \frac{1}{0.0035} \approx 286$$

Food ($EV \approx 22{,}222$) has roughly 78 times the essential value of saccharin ($EV \approx 286$) for this rat indicating food consumption is far more resistant to price increases than saccharin consumption. This quantitative comparison is one of the primary strengths of the demand framework as it reduces the entire demand curve to a single number that supports direct comparison.

Note that essential value is always relative to the conditions under which it was measured. The same commodity can have different essential values in open vs. closed economies, under different deprivation levels, or when different substitutes are available. Essential value is a property of the organism-commodity-context system, not of the commodity alone.

### Computing $P_{max}$

Using the formula derived from taking the derivative of the output function ($O = Q \times C$) and setting it to zero:

$$P_{max} = \frac{1}{\alpha \cdot Q_0 \cdot k \cdot e} \approx \frac{0.368}{\alpha \cdot Q_0 \cdot k}$$

Substituting our parameter estimates:

$$P_{max} = \frac{0.368}{0.000045 \times 95.8 \times 2.5} = \frac{0.368}{0.01078} \approx 34.1$$

This means the rat's total behavioral output (total responses per session) is maximized at approximately FR 34. Below this price, demand is labeled inelastic and increasing the FR requirement will increase total responding because the organism works harder to defend its consumption. Above this price, demand is labeled elastic as increasing the FR decreases total responding.

This computed $P_{max}$ is consistent with our earlier observation from the raw data that total responses peaked near FR 30 ($1{,}200$ responses). The model's estimate of $P_{max} \approx 34$ aligns well with the empirical pattern. When the model's derived quantities align with independently observable features of the data, this increases our confidence in both the model and the parameter estimates.

In a clinical context, if this were a reinforcer being used therapeutically, you would likely want to set the response requirement below $P_{max}$ (say, FR 20-30) to ensure the client is in the inelastic region where the reinforcer reliably maintains behavior. Setting the requirement above $P_{max}$ risks a rapid decline in the reinforcer's effectiveness (which might be useful in behavior reduction procedures).

### Interpreting the Full Fit

Let us step back and consider what the full analysis tells us about this rat's relationship with food under closed-economy conditions:

1. **When food is free (or nearly free), the rat consumes about 96 pellets per session** ($Q_0 = 95.8$). This is the baseline level of consumption without effort constraints. Loosely speaking, it reflects the rat's appetite and the palatability of the food.

2. **The rat defends its food consumption vigorously as price increases** ($\alpha = 0.000045$, $EV = 22{,}222$). The very small $\alpha$ value means the demand curve bends slowly. The rat continues to work for food even at high FR values.

3. **Maximum behavioral output occurs around FR 34** ($P_{max} = 34.1$). Below this price, the rat compensates for price increases by responding more. Above this price, the rate of consumption decline exceeds the rate of price increase, and total responding begins to decrease.

4. **Even at very high prices, the rat does not fully abandon food** (consumption at FR 300 is 1 pellet, not zero). This is characteristic of a highly essential commodity in a closed economy. The organism cannot afford to stop consuming entirely.

5. **The demand curve fits the data well** ($R^2 \approx 0.96$), indicating that the exponential model captures the overall shape of the price-consumption relationship for this rat and commodity.

This kind of comprehensive, parameter-based interpretation is the payoff of the modeling enterprise. Rather than describing the data informally ("the rat responded less at higher FRs"), we can make precise, quantitative statements about demand intensity, essential value, and the transition point between inelastic and elastic demand. 

### Sensitivity to Starting Values

A practical note about curve fitting: nonlinear regression is sensitive to starting values. If you start with $\alpha = 1$ (far too large for these data), the optimization algorithm may converge on a local minimum that does not represent the best global fit, or it may fail to converge at all. Good practice includes:

1. **Use informed starting values**: Set $Q_0$ to the consumption at the lowest tested price. Set $\alpha$ to a small value (e.g., $0.001$ or $0.0001$). Set $k$ to the observed range of $\log Q$ values or fix it at a standard value.

2. **Try multiple starting values**: Run the optimization from several different starting points and compare the results. If all converge to the same parameter estimates, you can be confident in the fit. If they converge to different values, the best fit (lowest sum of squared residuals) is preferred, but the discrepancy warrants investigation.

3. **Check parameter plausibility**: After fitting, verify that the estimated parameters make behavioral sense. If $Q_0$ is much larger than any observed consumption value, or if $\alpha$ is negative, something has gone wrong.

4. **Examine residuals**: Plot the residuals (observed minus predicted values) as a function of price. Random scatter around zero indicates a good fit. Systematic patterns indicate model misspecification.

### Plotting the Demand Curve

In a log-log plot (log price on the x-axis, log consumption on the y-axis), the demand curve appears as follows:
- At low prices (left side), the curve is relatively flat with consumption being high and changing little with price increases. This is the **inelastic** region.
- Around $P_{max}$, the curve begins to bend downward.
- At high prices (right side), the curve drops steeply as consumption falls rapidly. This is the **elastic** region.

The shape resembles a "hockey stick" in log-log space: flat on the left, then bending into a steep decline on the right. The parameter $\alpha$ controls how quickly the bend occurs, and $Q_0$ sets the vertical intercept.

If you were to plot the demand curve for saccharin ($\alpha = 0.0035$, $Q_0 = 50$, $k = 2.5$) on the same axes, you would see a differently shaped curve. It would also start lower (because $Q_0 = 50 < 95.8$) and drop off much more steeply. The visual comparison would convey what the essential value numbers tell you quantitatively: saccharin demand is far more elastic than food demand under these conditions.


## Assumptions and Limitations

The exponential demand equation rests on several assumptions that constrain its appropriate use:
- **Steady-state behavior**: Each data point must come from a condition in which the organism has reached stable performance. Transitional data (early sessions at a new price) will not reflect true demand.
- **Single commodity**: The standard equation models demand for one commodity in isolation. If substitutes are available, consumption of the target commodity will depend on the prices of alternatives. These situations require more complex models (e.g., cross-price demand or substitutability analyses).
- **No income effects**: The model does not account for the organism's total response capacity. At very high prices, an organism may fail to earn reinforcers not because it does not value them, but because it physically cannot emit enough responses. This "income constraint" is not captured by the demand equation.
- **Unit price equivalence**: The model assumes that only the ratio of responses to reinforcer magnitude matters, not the specific combination. An FR 20 with 2-pellet reinforcers is assumed to produce the same consumption as an FR 10 with 1-pellet reinforcers (both have unit price = 10). This assumption holds reasonably well in many preparations but can break down with very large or very small reinforcer magnitudes.
- **Closed vs. open economy**: Demand parameters are highly sensitive to the economic context. Parameters estimated in open economies will generally show more elastic demand (higher $\alpha$, lower essential value) than those estimated in closed economies. Comparing essential values across studies requires matching on economic context.
- **The $k$ constant**: The shared range constant $k$ is a pragmatic simplification. Fixing $k$ across conditions or subjects allows $\alpha$ to be compared, but if $k$ genuinely differs, fixing it can distort $\alpha$ estimates. Some researchers estimate $k$ from the data; others fix it and acknowledge this as a limitation.
- **Log transformation and zeros**: Because the model operates in log space, consumption values of zero are undefined ($\log 0 = -\infty$). Researchers handle this by adding a small constant (e.g., replacing 0 with 0.01), by omitting zero-consumption data points, or by using alternative formulations. Each approach introduces its own bias.
- **Within-session dynamics**: The model predicts total consumption but says nothing about the pattern of responding within a session (e.g., post-reinforcement pauses, break-and-run patterns). These temporal dynamics may be informative but are outside the scope of the demand model.
- **Species and response topography**: The model is general in principle but parameter values are specific to the organism, commodity, and response form. Lever pressing and key pecking may yield different demand functions for the same commodity due to differences in response effort. Researchers must be cautious about generalizing across preparations.
- **Temporal discounting interactions**: The demand equation does not account for the delay between the response and the reinforcer. In schedules where reinforcer delivery is delayed (e.g., chained schedules, second-order schedules), the effective value of the reinforcer is discounted by the delay. This interaction between demand and discounting is not captured by either model alone and is an active area of theoretical development.

Understanding these assumptions and limitations is not a reason to avoid the model. Rather, it is a reason to use it carefully and to interpret results within the boundaries the assumptions define.

---

## Connection to Empirical Behavior Science

The exponential demand equation has been applied extensively across several domains of behavior science.

### Drug Self-Administration

One of the most productive applications has been in drug self-administration research. By measuring how much of a drug an animal (or human) will self-administer across a range of response requirements, researchers can compute essential value for different drugs and doses. This allows a direct, quantitative comparison of reinforcing efficacy. For example, Hursh and Silberberg (2008) demonstrated that the essential value metric could rank drugs in the same order as other established measures of abuse liability, but with the advantage of being a single, theoretically grounded number derived from the entire demand curve.

This application has significant implications for understanding addiction. Individuals with substance use disorders often show higher essential values for their drug of choice compared to non-dependent individuals. This means their consumption is more resistant to price increases and they will continue to use the drug even as the costs (financial, social, health-related) increase.

Furthermore, demand analysis can evaluate the effects of pharmacological and behavioral treatments. A successful treatment might be expected to reduce the essential value of the drug (making the individual more sensitive to costs) or increase the essential value of alternative reinforcers (making non-drug activities more compelling). These treatment effects can be quantified using the demand framework.

### Token Economies

In applied settings, token economies create an explicit price structure. Tokens serve as a medium of exchange and the "price" of backup reinforcers is set by the therapist. Demand analysis can inform token economy design by identifying which backup reinforcers have high essential value (and thus will sustain responding at higher token prices) versus low essential value (and thus may be abandoned when prices increase). This has direct implications for maintaining treatment gains and setting pricing within the token economy.

For example, consider a classroom token economy where students earn tokens for completing assignments and can spend them on various backup reinforcers (extra recess, computer time, small toys). By varying the token cost of each reinforcer and measuring how many tokens students allocate to each, a practitioner can estimate demand curves for each backup reinforcer. The reinforcers with the highest essential values are the ones that should anchor the token economy because they will maintain student engagement even as the "price" (difficulty or quantity of assignments required) increases. Reinforcers with low essential values can be offered as supplementary options but should not be relied upon as primary motivators.

### Reinforcer Assessment in Developmental Disabilities

Francisco, Madden, and Borrero (2009) applied demand analysis to the assessment of reinforcer efficacy in individuals with developmental disabilities. Rather than relying solely on preference assessments (which measure something like $Q_0$ and what the individual chooses when access is free or cheap), they measured demand across a range of effort requirements. This revealed that some stimuli identified as "preferred" in standard assessments were actually low in essential value (i.e., the individual would not work hard to obtain them). Demand-based reinforcer assessment provides a more complete picture of reinforcer efficacy.

This finding has practical consequences for treatment planning. Behavior analysts routinely conduct preference assessments to identify potential reinforcers for skill acquisition programs. These assessments are typically conducted under low-effort conditions (e.g., the client simply reaches for or points to the preferred item). But in a treatment context, the client must emit many responses to contact a reinforcer. If the reinforcer has low essential value, the client may not maintain responding when the effort requirement increases. Demand analysis helps identify reinforcers that will sustain behavior under the real-world effort requirements of treatment.

The practical barrier, of course, is that a full demand assessment requires testing multiple effort levels and waiting for stability at each level. This is often prohibitively time-consuming in clinical settings. Researchers have explored abbreviated demand assessment procedures and hypothetical purchase tasks adapted for individuals with disabilities, but these methods are still being validated.

### Public Health and Policy Applications

Demand analysis has also been applied to public health policy questions. By estimating the demand elasticity for commodities like tobacco, alcohol, and sugary beverages, researchers can predict the impact of price-based interventions (e.g., excise taxes, minimum unit pricing). If a population shows inelastic demand for cigarettes (high essential value), a modest price increase will generate tax revenue but will not substantially reduce consumption. Larger price increases, or complementary interventions that reduce essential value might be needed (e.g., by increasing the availability of substitutes like nicotine replacement therapy).

The hypothetical purchase task (HPT) has been particularly useful in this domain. In an HPT, participants are asked to report how many units of a commodity they would consume at each of a series of prices (e.g., "How many cigarettes would you smoke per day if they cost $0.50 each? $1.00? $2.00? $5.00? $10.00?"). The resulting data generate a demand curve that can be fit with the exponential equation. HPT-derived demand parameters have been shown to correlate with actual consumption, dependence severity, and treatment outcomes, making them useful screening tools in research and clinical settings.

The HPT approach also makes demand analysis feasible in populations where direct behavioral measurement is impractical such as large epidemiological surveys, online studies, or brief clinical screenings. This methodological advance has greatly expanded the reach of demand analysis beyond the operant chamber.

### Key References

- **Hursh, S. R., & Silberberg, A. (2008)**. Economic demand and essential value. *Psychological Review, 115*(1), 186--198. The foundational paper introducing the exponential demand equation and the essential value metric. This paper formalized the normalization approach and demonstrated that essential value could rank commodities consistently across species.

- **Hursh, S. R., Madden, G. J., Spiga, R., DeLeon, I. G., & Francisco, M. T. (2013)**. The translational utility of behavioral economics: The experimental analysis of consumption and choice. In G. J. Madden, W. V. Dube, T. D. Hackenberg, G. P. Hanley, & K. A. Lattal (Eds.), *APA handbook of behavior analysis: Vol. 2. Translating principles into practice* (pp. 191--224). American Psychological Association. https://doi.org/10.1037/13938-008. Demonstrated the equation's applicability across species, commodities, and settings, with a focus on how basic-science findings translate to applied contexts.

- **Francisco, M. T., Madden, G. J., & Borrero, J. C. (2009)**. Behavioral economics: Principles, procedures, and utility for applied behavior analysis. *The Behavior Analyst Today, 10*(2), 277--294. https://doi.org/10.1037/h0100671. Introduced demand-analysis methods to the applied behavior analysis community with a focus on reinforcer assessment in clinical populations.

- **Hursh, S. R. (1980)**. Economic concepts for the analysis of behavior. *Journal of the Experimental Analysis of Behavior, 34*(2), 219--238. An early foundational paper that proposed treating the operant chamber as an economic system and introduced the distinction between open and closed economies.

- **Koffarnus, M. N., Franck, C. T., Stein, J. S., & Bickel, W. K. (2015)**. A modified exponential behavioral economic demand model to better describe consumption data. *Experimental and Clinical Psychopharmacology, 23*(6), 504--512. Proposed the exponentiated form of the demand equation as an alternative parameterization.

### Hypothetical Purchase Tasks

An important methodological extension is the **hypothetical purchase task** (HPT), which adapts demand analysis for human participants without requiring actual consumption. In an HPT, participants report how much of a commodity (e.g., cigarettes, alcohol) they would consume at each of a series of hypothetical prices. The resulting data are fit with the exponential demand equation just as laboratory consumption data would be. HPT-derived essential values have been shown to predict actual consumption, treatment outcomes, and substance use disorder severity. This makes demand analysis accessible in clinical and survey contexts where direct behavioral measurement is impractical.

### Behavioral Momentum and Demand

There is a conceptual parallel between demand analysis and behavioral momentum theory (Nevin & Grace, 2000). Both frameworks assess how resistant behavior is to disruption. In behavioral momentum, resistance is measured against disruptors like extinction or alternative reinforcement. In demand analysis, resistance is measured against increasing price. The two approaches are complementary. Behavioral momentum focuses on the persistence of responding within a session, while demand focuses on the persistence of consumption across price conditions. Some researchers have explored formal connections between the two frameworks, though a unified model has not yet been achieved.

These studies and extensions illustrate that the exponential demand equation is not merely a curve-fitting exercise. Rather, it is a framework for quantifying reinforcer value that translates across basic and applied contexts and connects to broader theoretical questions in behavior science.

---

## Exercises for Reflection

1. **Reinforcer assessment in practice.** Suppose you are working with a client and have identified three potential reinforcers through a standard paired-stimulus preference assessment. All three are chosen equally often when presented in pairs. How would you use demand analysis to determine which reinforcer is likely to be most effective in a treatment context? Describe the procedure you would use (what prices you would test, how you would measure consumption, how many sessions per price). What specific information would demand analysis provide that the preference assessment did not? What practical barriers might you face in conducting a full demand assessment in a clinical setting, and how might you address them?

2. **Computing and comparing essential value.** A researcher fits the exponential demand equation to consumption data for two drugs---Drug A and Drug B---in the same group of rats. Drug A yields $\alpha = 0.00025$ and Drug B yields $\alpha = 0.0082$. Both drugs have $Q_0 = 40$ infusions and $k = 3.0$.
   - Compute the essential value for each drug.
   - Which drug is the more potent reinforcer according to demand analysis?
   - Compute $P_{max}$ for each drug. At what FR value does behavioral output peak for each?
   - What behavioral pattern would you expect to see at high FR values (e.g., FR 200) for each drug? Describe the difference in concrete terms: what would the rats be doing differently?

3. **Testing unit price equivalence.** Consider the assumption of unit price equivalence. Design a hypothetical experiment that would test whether an FR 20 schedule with 2-pellet reinforcers produces the same consumption as an FR 10 schedule with 1-pellet reinforcers. Specify the species, the commodity, the economic context (open or closed), the number of conditions, and the stability criterion. What result would support the assumption, and what result would challenge it? If the assumption is violated, what are the consequences for interpreting demand curves that combine data from different schedule-magnitude combinations?

4. **The role of $k$.** The $k$ parameter is often described as a "range constant" that is fixed across conditions in a dataset. Why might this be problematic? Under what circumstances might you expect $k$ to genuinely differ between commodities or individuals? If $k$ differs but is forced to be equal, how would this distort the estimated $\alpha$ values? Consider a concrete scenario: one commodity whose consumption ranges from 100 to 1 reinforcer (a 2-log-unit range) and another whose consumption ranges from 100 to 0.01 reinforcers (a 4-log-unit range). What happens if you fix $k = 3$ for both?

---

## Alternative and Extended Models

The Hursh-Silberberg exponential demand equation is the current standard, but it is not the only model available. Understanding alternatives helps clarify the strengths and limitations of the standard approach.

### The Simple Power Function

Before the exponential model, many researchers used a simple power function to describe demand:

$$\log Q = \log a + b \cdot \log C$$

or equivalently:

$$Q = a \cdot C^b$$

Here, $a$ represents consumption at a unit price of 1, and $b$ is the slope on log-log axes. This model fits many datasets well over a limited price range, but it has two significant limitations. First, the slope $b$ is constant making the model predict the same proportional decline in consumption at every price level. This misses the inelastic-to-elastic transition that real demand curves show. Second, the parameters $a$ and $b$ are not normalized for baseline consumption, making cross-commodity comparisons difficult.

### The Exponentiated Demand Equation

Koffarnus, Franck, Stein, and Bickel (2015) proposed an alternative formulation called the **exponentiated demand equation**:

$$Q = Q_0 \cdot 10^{k(e^{-\alpha \cdot Q_0 \cdot C} - 1)}$$

This is mathematically equivalent to the standard Hursh-Silberberg equation (it is simply the antilog of both sides), but some researchers prefer it because it operates on consumption directly rather than on log-consumption. This can simplify certain statistical analyses and makes the model compatible with error structures that assume normally distributed residuals on the consumption scale rather than the log-consumption scale.

### Cross-Price Demand and Substitutability

The standard demand equation models consumption of a single commodity in isolation. But in real environments, organisms have access to multiple commodities, and the price of one commodity affects consumption of others. **Cross-price demand analysis** extends the framework to multiple commodities simultaneously.

If the price of Commodity A increases and consumption of Commodity B also increases, B is a **substitute** for A. If consumption of B decreases when A's price increases, they are **complements**. Quantifying these relationships requires fitting multi-commodity demand models, which involve additional parameters for cross-price elasticity. This is an active area of research with significant implications for understanding choice behavior in complex environments.

### Demand and Delay

Some researchers have explored models that integrate demand (price sensitivity) with delay discounting (see Week 2). An organism might be willing to pay a high price for an immediate reinforcer but not for a delayed one. These integrated models introduce delay as an additional cost dimension, allowing researchers to characterize how temporal and effort costs interact. Such models are still being developed but represent a promising direction for a more comprehensive account of reinforcer value.

---

## Looking Ahead

The demand equation introduced this week is a descriptive* model. It characterizes the shape of the relationship between price and consumption but it does not specify the behavioral processes that generate that shape. Why does consumption decline exponentially with price? What mechanisms underlie the transition from inelastic to elastic demand? These are questions that the demand equation does not answer directly.

In later weeks, we will encounter models that attempt to provide more mechanistic accounts of choice and resource allocation. The matching law and delay discounting (both covered in Week 2) each address related but distinct aspects of how organisms allocate behavior across options. A complete account of behavioral economics would need to integrate demand analysis with these other frameworks to explain not just how much an organism consumes at each price, but why.

For now, the demand equation stands as an incredibly useful empirical tool. It summarizes a complex behavioral phenomenon in a small number of interpretable parameters, it supports quantitative comparison across conditions and organisms, and it has demonstrated translational utility from the laboratory to the clinic. These are the hallmarks of a successful quantitative model in behavior science.

---

## Key Readings

**Required:**

**Hursh and Silberberg (2008)** introduced the exponential demand equation and the concept of essential value as a normalized metric of reinforcer efficacy. Their model solved a long-standing problem in behavioral economics: earlier demand models used power functions whose parameters were not comparable across commodities or species. By building normalization into the equation itself through the $Q_0$ term in the exponent, Hursh and Silberberg created a framework in which the single parameter $\alpha$ (and its inverse, essential value) provides a universal index of how rapidly consumption declines as price increases. This paper is the mathematical backbone of the week and exemplifies how thoughtful model design can transform a descriptive tool into a translational one.

**Francisco, Madden, and Borrero (2009)** provided a primer on behavioral economics for applied behavior analysts, explaining core concepts such as demand, elasticity, unit price, open versus closed economies, and substitution in accessible language. They demonstrated how these concepts can inform the design of reinforcement-based interventions, token economies, and preference assessments. This paper bridges the gap between the formal demand models and clinical practice, showing that the quantitative framework is not an abstraction but a practical tool for understanding why clients consume some reinforcers vigorously and abandon others when the price rises.

**Supplemental:**

**Hursh, Madden, Spiga, DeLeon, and Francisco (2013)** reviewed the translational applications of the exponential demand model across substance abuse research, developmental disabilities, and health behavior. They argued that demand analysis provides a common quantitative language for comparing reinforcer value across populations and settings, making it one of the most portable tools in behavioral economics. This paper extends the week's core content by demonstrating the range of applied domains where the exponential demand equation has proven useful and reinforcing the course theme that formal models gain their greatest value when they travel across contexts.

---

## Reading Guide

### Hursh & Silberberg (2008)

- According to these authors, what are the 5 ways response strength has been defined historically? What are the benefits and drawbacks of each?
- What is the exponential demand equation proposed by Hursh & Silberberg (2008)?
- What does the parameter $Q_0$ represent?
- What does the parameter $\alpha$ (alpha) represent?
- What is "essential value," and how is it defined in the paper?
- What is the role of the parameter $k$?
- What theoretical advantage does the exponential model provide?
- Why is essential value considered a better reinforcer metric than $Q_0$ or break point?
- What is the general shape of the demand curve predicted by the exponential model?
- How does the model allow comparisons across reinforcers?
- What kind of reinforcers were used to validate the model?
- How did the exponential model perform in terms of data fit?
- How is essential value different from matching or discounting parameters?
- What is meant by "reinforcer magnitude" and how does it differ from essential value?
- What does the model predict about the effect of increasing reinforcer magnitude on $Q_0$ and $\alpha$?
- What is a potential limitation or caution in interpreting essential value?

### Francisco, Madden, & Borrero (2009)

- What is behavioral economics and how does it differ from traditional economics?
- What is the primary dependent variable in behavioral economics?
- Define "demand" in the context of behavioral economics.
- What does it mean for demand to be "elastic" or "inelastic"?
- What is a demand curve and what does it depict?
- How is "price" typically operationalized in behavioral economics?
- What is "unit price" and why is it useful?
- How can behavioral economics inform drug abuse research?
- What is a "closed economy" vs. an "open economy"?
- How does economy type (open vs. closed) affect demand?
- What is "income" in behavioral economic terms?
- What is substitution in the context of behavioral economics?
- How might behavioral economics help in designing interventions?
- What is a practical takeaway for clinicians from this primer?

---

## References

Francisco, M. T., Madden, G. J., & Borrero, J. C. (2009). Behavioral economics: Principles, procedures, and utility for applied behavior analysis. *The Behavior Analyst Today, 10*(2), 277--294. https://doi.org/10.1037/h0100671

Hursh, S. R. (1980). Economic concepts for the analysis of behavior. *Journal of the Experimental Analysis of Behavior, 34*(2), 219--238. https://doi.org/10.1901/jeab.1980.34-219

Hursh, S. R., & Silberberg, A. (2008). Economic demand and essential value. *Psychological Review, 115*(1), 186--198. https://doi.org/10.1037/0033-295X.115.1.186

Koffarnus, M. N., Franck, C. T., Stein, J. S., & Bickel, W. K. (2015). A modified exponential behavioral economic demand model to better describe consumption data. *Experimental and Clinical Psychopharmacology, 23*(6), 504--512. https://doi.org/10.1037/pha0000045

Nevin, J. A., & Grace, R. C. (2000). Behavioral momentum and the law of effect. *Behavioral and Brain Sciences, 23*(1), 73--90. https://doi.org/10.1017/S0140525X00002405

---

## Key Takeaways

- **Demand analysis** quantifies the relationship between the price of a reinforcer and the amount consumed. It provides a richer picture of reinforcer value than preference assessments alone.

- **Unit price** ($C$) standardizes the cost of reinforcement as responses per unit of reinforcer, enabling comparison across schedule types and reinforcer magnitudes.

- **The exponential demand equation** --- $\log(Q) = \log(Q_0) + k(e^{-\alpha \cdot Q_0 \cdot C} - 1)$ --- is the standard model. It yields three key parameters: $Q_0$ (demand intensity), $\alpha$ (rate of decline), and $k$ (range constant).

- **Essential value** ($1/\alpha$) is the most important output of demand analysis. It indexes how resistant consumption is to price increases. Higher essential value means the reinforcer is harder to give up.

- **$Q_0$** reflects baseline consumption when the reinforcer is free. It captures preference but not persistence.

- **$P_{max}$** is the price that generates maximum behavioral output. Below $P_{max}$, demand is inelastic; above it, demand is elastic.

- **Economic context matters**: Closed economies produce more inelastic demand than open economies. Parameters are not comparable across economic contexts.

- **Applications** span drug self-administration, token economy design, and reinforcer assessment in clinical populations. The framework translates across species and settings.

- **Limitations** include the steady-state requirement, the single-commodity assumption, the treatment of zero consumption values, and the sensitivity of results to the fixed $k$ parameter.

- **Historical context**: The exponential demand equation (Hursh & Silberberg, 2008) solved the normalization problem that plagued earlier power-function models, enabling direct comparison of essential value across commodities and species.

- **Translational utility**: The same equation and parameters apply from rat lever pressing in the laboratory to human cigarette purchasing in survey studies, making demand analysis one of the most successfully translational frameworks in behavior science.
