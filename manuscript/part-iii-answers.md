# Worked Answers

## Solution to Problem 1: Identifying Model Components

## Solution: Identifying Model Components

We are given the model:

{$$}R = k \cdot t{/$$}

### (a) Dependent Variable

The dependent variable is {$$}R{/$$}, the cumulative number of responses. It is the quantity whose value depends on the other quantities in the equation — it is what the model predicts.

### (b) Independent Variable

The independent variable is {$$}t{/$$}, elapsed time. It is the quantity that the researcher manipulates or that varies freely, and the model uses it to generate predictions for {$$}R{/$$}.

### (c) Parameter

The parameter is {$$}k{/$$}, the constant of proportionality. Unlike the variables, {$$}k{/$$} does not change within a given application of the model. It is estimated from data and characterizes the particular organism or condition being modeled.

### (d) Units

- {$$}R{/$$} is measured in **responses** (a dimensionless count).
- {$$}t{/$$} is measured in **minutes**.
- Since {$$}R = k \cdot t{/$$}, solving for {$$}k{/$$} gives {$$}k = R / t{/$$}, so {$$}k{/$$} has units of **responses per minute** (responses/min).

### (e) Assumptions About Response Rate

This model assumes that the rate of responding is **constant over time**. Because {$$}R = k \cdot t{/$$} is a linear function passing through the origin, the slope {$$}k{/$$} represents a fixed response rate. At every moment, the organism is producing exactly {$$}k{/$$} responses per minute — there is no warm-up, no fatigue, no pausing.

**When this is reasonable:** This assumption may hold during the steady-state portion of a session on a variable-interval (VI) schedule, where response rates are typically stable.

**When this breaks down:** The assumption fails when there is a warm-up period at the start of a session, fatigue or satiation toward the end, ratio strain, or any schedule that produces variable local rates (e.g., fixed-interval scalloping). In those cases, a nonlinear model of cumulative responses would be more appropriate.

## Solution to Problem 2: Setting Up a Model of Cumulative Responding

## Solution: Setting Up a Model of Cumulative Responding

### Step 1 — Define the Question

The question is: **How does the cumulative number of responses grow over the course of a 30-minute session for a pigeon responding on a VI-60s schedule?**

More specifically, can cumulative responding be predicted from elapsed time using a simple mathematical function?

### Step 2 — Identify Variables and Parameters

- **Dependent variable:** {$$}C(t){/$$} = cumulative number of responses at time {$$}t{/$$}
- **Independent variable:** {$$}t{/$$} = elapsed time in the session (minutes), ranging from 0 to 30
- **Parameter:** {$$}r{/$$} = response rate (responses/min). The observed value is {$$}r = 45{/$$} responses/min.

### Step 3 — Specify the Mathematical Model

The simplest model assumes a constant response rate:

{$$}C(t) = r \cdot t{/$$}

With the observed rate:

{$$}C(t) = 45t{/$$}

This is a linear model predicting that cumulative responses increase at a steady rate of 45 responses per minute throughout the session.

### Step 4 — Determine What Data Are Needed

To test this model, the researcher would need:

- **Response timestamps** for every lever press during the 30-minute session (or, at minimum, cumulative response counts at regular time intervals such as every minute).
- **Multiple sessions** to assess within-session variability and between-session reliability.
- Ideally, the data would come from stable-state performance (i.e., after extended training on the VI-60s schedule).

### Step 5 — Fit the Model / Generate Predictions

Using {$$}C(t) = 45t{/$$}, the predicted cumulative responses are:

| {$$}t{/$$} (min) | {$$}C(t) = 45t{/$$} (responses) |
|---|---|
| 5 | {$$}45 \times 5 = 225{/$$} |
| 10 | {$$}45 \times 10 = 450{/$$} |
| 15 | {$$}45 \times 15 = 675{/$$} |
| 20 | {$$}45 \times 20 = 900{/$$} |
| 25 | {$$}45 \times 25 = 1{,}125{/$$} |
| 30 | {$$}45 \times 30 = 1{,}350{/$$} |

The model predicts a total of 1,350 responses over the full session.

### Step 6 — Evaluate the Model

To evaluate the model, plot observed cumulative responses against predicted cumulative responses (or against time, with the model line overlaid).

- **If the model fits well:** The observed cumulative record should be approximately linear, closely tracking the line {$$}C(t) = 45t{/$$}. Residuals (observed minus predicted) should be small, randomly scattered, and show no systematic pattern.
- **Systematic deviations to look for:**
  - If the cumulative record curves **upward** early in the session (observed < predicted, then observed > predicted), the pigeon is warming up — the rate starts below 45 and increases.
  - If the record curves **downward** late in the session (observed < predicted toward the end), the pigeon is slowing due to fatigue or satiation.
  - An S-shaped cumulative record would indicate both warm-up and fatigue.

### Step 7 — Revise the Model

If the pigeon warms up slowly and slows down near the end, the constant-rate model is inadequate. Several revisions are possible:

**Option A — Piecewise linear model:** Divide the session into phases (warm-up, steady state, fatigue) with different rates:

{$$}C(t) = \begin{cases} r_1 \cdot t & 0 \leq t \leq t_1 \\ C(t_1) + r_2 \cdot (t - t_1) & t_1 < t \leq t_2 \\ C(t_2) + r_3 \cdot (t - t_2) & t_2 < t \leq 30 \end{cases}{/$$}

where {$$}r_1 < r_2 > r_3{/$$}.

**Option B — Logistic growth model:** A smooth function that starts slowly, accelerates, and then levels off:

{$$}C(t) = \frac{C_{\max}}{1 + e^{-r(t - t_m)}}{/$$}

where {$$}C_{\max}{/$$} is the asymptotic total responses, {$$}r{/$$} controls the steepness, and {$$}t_m{/$$} is the inflection point.

**Option C — Polynomial model:** Fit a quadratic or cubic polynomial to capture curvature:

{$$}C(t) = at^2 + bt + c{/$$}

A negative quadratic coefficient {$$}a < 0{/$$} would capture a rate that slows over time.

The choice among these revisions would depend on which provides the best fit while remaining interpretable in behavioral terms.

## Solution to Problem 3: Fitting the Generalized Matching Equation

## Solution: Fitting the Generalized Matching Equation

### (a) Compute Log Ratios

The generalized matching equation is:

{$$}\log\!\left(\frac{B_1}{B_2}\right) = a \cdot \log\!\left(\frac{R_1}{R_2}\right) + \log b{/$$}

Let {$$}y = \log(B_1/B_2){/$$} and {$$}x = \log(R_1/R_2){/$$}. We compute these for each condition:

**Condition 1:**

{$$}x_1 = \log\!\left(\frac{20}{40}\right) = \log(0.500) = -0.3010{/$$}

{$$}y_1 = \log\!\left(\frac{40}{58}\right) = \log(0.6897) = -0.1612{/$$}

**Condition 2:**

{$$}x_2 = \log\!\left(\frac{30}{30}\right) = \log(1.000) = 0.0000{/$$}

{$$}y_2 = \log\!\left(\frac{55}{50}\right) = \log(1.100) = 0.0414{/$$}

**Condition 3:**

{$$}x_3 = \log\!\left(\frac{45}{20}\right) = \log(2.250) = 0.3522{/$$}

{$$}y_3 = \log\!\left(\frac{70}{35}\right) = \log(2.000) = 0.3010{/$$}

**Condition 4:**

{$$}x_4 = \log\!\left(\frac{55}{15}\right) = \log(3.667) = 0.5643{/$$}

{$$}y_4 = \log\!\left(\frac{80}{28}\right) = \log(2.857) = 0.4559{/$$}

**Condition 5:**

{$$}x_5 = \log\!\left(\frac{35}{25}\right) = \log(1.400) = 0.1461{/$$}

{$$}y_5 = \log\!\left(\frac{62}{45}\right) = \log(1.378) = 0.1392{/$$}

**Summary table:**

| Condition | {$$}x = \log(R_1/R_2){/$$} | {$$}y = \log(B_1/B_2){/$$} |
|---|---|---|
| 1 | {$$}-0.3010{/$$} | {$$}-0.1612{/$$} |
| 2 | {$$}0.0000{/$$} | {$$}0.0414{/$$} |
| 3 | {$$}0.3522{/$$} | {$$}0.3010{/$$} |
| 4 | {$$}0.5643{/$$} | {$$}0.4559{/$$} |
| 5 | {$$}0.1461{/$$} | {$$}0.1392{/$$} |

### (b) Estimate Sensitivity and Bias via Least-Squares Regression

We need the slope {$$}a{/$$} and intercept {$$}\log b{/$$} from the linear regression {$$}y = a \cdot x + \log b{/$$}.

**Compute the means:**

{$$}\bar{x} = \frac{-0.3010 + 0.0000 + 0.3522 + 0.5643 + 0.1461}{5} = \frac{0.7616}{5} = 0.1523{/$$}

{$$}\bar{y} = \frac{-0.1612 + 0.0414 + 0.3010 + 0.4559 + 0.1392}{5} = \frac{0.7763}{5} = 0.1553{/$$}

**Compute the slope {$$}a{/$$}:**

{$$}a = \frac{\sum_{i=1}^{5}(x_i - \bar{x})(y_i - \bar{y})}{\sum_{i=1}^{5}(x_i - \bar{x})^2}{/$$}

Compute each deviation and product:

| {$$}i{/$$} | {$$}x_i - \bar{x}{/$$} | {$$}y_i - \bar{y}{/$$} | {$$}(x_i - \bar{x})(y_i - \bar{y}){/$$} | {$$}(x_i - \bar{x})^2{/$$} |
|---|---|---|---|---|
| 1 | {$$}-0.4533{/$$} | {$$}-0.3165{/$$} | {$$}0.14346{/$$} | {$$}0.20548{/$$} |
| 2 | {$$}-0.1523{/$$} | {$$}-0.1139{/$$} | {$$}0.01735{/$$} | {$$}0.02320{/$$} |
| 3 | {$$}0.1999{/$$} | {$$}0.1457{/$$} | {$$}0.02913{/$$} | {$$}0.03996{/$$} |
| 4 | {$$}0.4120{/$$} | {$$}0.3006{/$$} | {$$}0.12385{/$$} | {$$}0.16974{/$$} |
| 5 | {$$}-0.0062{/$$} | {$$}-0.0161{/$$} | {$$}0.00010{/$$} | {$$}0.00004{/$$} |

{$$}\sum (x_i - \bar{x})(y_i - \bar{y}) = 0.14346 + 0.01735 + 0.02913 + 0.12385 + 0.00010 = 0.31389{/$$}

{$$}\sum (x_i - \bar{x})^2 = 0.20548 + 0.02320 + 0.03996 + 0.16974 + 0.00004 = 0.43842{/$$}

{$$}a = \frac{0.31389}{0.43842} = 0.716{/$$}

**Compute the intercept {$$}\log b{/$$}:**

{$$}\log b = \bar{y} - a \cdot \bar{x} = 0.1553 - 0.716 \times 0.1523 = 0.1553 - 0.1090 = 0.046{/$$}

Therefore {$$}b = 10^{0.046} = 1.112{/$$}.

### (c) Interpretation

**Sensitivity ({$$}a = 0.716{/$$}):**

The sensitivity parameter measures how strongly the response ratio tracks the reinforcement ratio. A value of {$$}a = 1.0{/$$} indicates strict matching. The obtained value of {$$}a = 0.716{/$$} indicates **undermatching**: the pigeon's response ratios change less than proportionally with changes in the reinforcement ratio. This is the most common finding in matching research and may reflect incomplete discrimination between the two alternatives, changeover costs, or other factors that reduce sensitivity to the reinforcement contingency.

**Bias ({$$}\log b = 0.046{/$$}, {$$}b = 1.112{/$$}):**

The bias parameter reflects a constant preference for one alternative independent of the reinforcement ratio. A value of {$$}\log b = 0{/$$} (i.e., {$$}b = 1{/$$}) would indicate no bias. The obtained value of {$$}\log b = 0.046{/$$} indicates a very slight bias toward Alternative 1 — the pigeon allocates slightly more responding to Alternative 1 than would be predicted from the reinforcement ratio alone. This small bias could reflect a minor position preference, a slight difference in response effort, or sampling variability.

## Solution to Problem 4: Fitting Mazur's Hyperbolic Discounting Model

## Solution: Fitting Mazur's Hyperbolic Discounting Model

### (a) Compute Implied {$$}k{/$$} at Each Delay

Starting from Mazur's model:

{$$}V = \frac{A}{1 + kD}{/$$}

Solving for {$$}k{/$$}:

{$$}V(1 + kD) = A{/$$}

{$$}1 + kD = \frac{A}{V}{/$$}

{$$}k = \frac{A/V - 1}{D} = \frac{A - V}{V \cdot D}{/$$}

Now compute {$$}k{/$$} for each delay with {$$}A = 100{/$$}:

**Delay {$$}D = 1{/$$} day, {$$}V = 95{/$$}:**

{$$}k = \frac{100 - 95}{95 \times 1} = \frac{5}{95} = 0.0526 \text{ day}^{-1}{/$$}

**Delay {$$}D = 7{/$$} days, {$$}V = 75{/$$}:**

{$$}k = \frac{100 - 75}{75 \times 7} = \frac{25}{525} = 0.0476 \text{ day}^{-1}{/$$}

**Delay {$$}D = 30{/$$} days, {$$}V = 50{/$$}:**

{$$}k = \frac{100 - 50}{50 \times 30} = \frac{50}{1500} = 0.0333 \text{ day}^{-1}{/$$}

**Delay {$$}D = 90{/$$} days, {$$}V = 25{/$$}:**

{$$}k = \frac{100 - 25}{25 \times 90} = \frac{75}{2250} = 0.0333 \text{ day}^{-1}{/$$}

**Delay {$$}D = 365{/$$} days, {$$}V = 10{/$$}:**

{$$}k = \frac{100 - 10}{10 \times 365} = \frac{90}{3650} = 0.0247 \text{ day}^{-1}{/$$}

**Summary:**

| {$$}D{/$$} (days) | {$$}V{/$$} (\$) | Implied {$$}k{/$$} (day{$$}^{-1}{/$$}) |
|---|---|---|
| 1 | 95 | 0.0526 |
| 7 | 75 | 0.0476 |
| 30 | 50 | 0.0333 |
| 90 | 25 | 0.0333 |
| 365 | 10 | 0.0247 |

### (b) Why the Estimates Differ

The five values of {$$}k{/$$} are not identical because each estimate is derived from a single data point, and:

1. **Measurement noise:** Each indifference point contains random variability from the participant's choices.
2. **Model misspecification:** If the data do not perfectly follow a hyperbolic function, different delays will imply different {$$}k{/$$} values. The systematic decrease in implied {$$}k{/$$} with increasing delay may suggest that a two-parameter model (e.g., the hyperboloid {$$}V = A/(1+kD)^s{/$$}) would provide a better fit.

**Strategy for a single estimate:** Use **nonlinear least-squares regression** to find the value of {$$}k{/$$} that minimizes the sum of squared residuals:

{$$}\text{SS}_{res} = \sum_{i=1}^{5}\left(V_i - \frac{A}{1 + kD_i}\right)^2{/$$}

### (c) Best-Fitting {$$}k{/$$} via Nonlinear Least Squares

We seek the {$$}k{/$$} that minimizes {$$}\text{SS}_{res}{/$$}. The median of the individual estimates ({$$}k \approx 0.0333{/$$}) provides a reasonable starting point. Through iterative optimization (e.g., grid search or gradient descent), we find:

{$$}k^* \approx 0.035 \text{ day}^{-1}{/$$}

**Predicted values and residuals at {$$}k = 0.035{/$$}:**

| {$$}D{/$$} (days) | Observed {$$}V{/$$} | {$$}\hat{V} = \frac{100}{1 + 0.035D}{/$$} | Residual ({$$}V - \hat{V}{/$$}) |
|---|---|---|---|
| 1 | 95 | {$$}\frac{100}{1.035} = 96.62{/$$} | {$$}-1.62{/$$} |
| 7 | 75 | {$$}\frac{100}{1.245} = 80.32{/$$} | {$$}-5.32{/$$} |
| 30 | 50 | {$$}\frac{100}{2.050} = 48.78{/$$} | {$$}1.22{/$$} |
| 90 | 25 | {$$}\frac{100}{4.150} = 24.10{/$$} | {$$}0.90{/$$} |
| 365 | 10 | {$$}\frac{100}{13.775} = 7.26{/$$} | {$$}2.74{/$$} |

{$$}\text{SS}_{res} = (-1.62)^2 + (-5.32)^2 + (1.22)^2 + (0.90)^2 + (2.74)^2{/$$}

{$$}= 2.62 + 28.30 + 1.49 + 0.81 + 7.51 = 40.73{/$$}

The largest residual occurs at {$$}D = 7{/$$}, where the model overpredicts the indifference point. This pattern is consistent with the systematic trend in implied {$$}k{/$$} values noted in part (b).

### (d) Interpretation

The parameter {$$}k = 0.035 \text{ day}^{-1}{/$$} is the **discount rate**. It quantifies how rapidly the subjective value of a reward declines as the delay to receiving it increases.

- A **larger** {$$}k{/$$} indicates steeper discounting — the individual is more impulsive, strongly preferring immediate over delayed rewards.
- A **smaller** {$$}k{/$$} indicates shallower discounting — the individual is more patient.

For this participant, {$$}k = 0.035{/$$} means that a reward delayed by {$$}1/k \approx 29{/$$} days would be valued at half of its face value. This is a moderate level of discounting. For comparison, clinical populations with substance use disorders typically show {$$}k{/$$} values an order of magnitude larger, while non-clinical adults often show {$$}k{/$$} values in the range of 0.01 to 0.05 day{$$}^{-1}{/$$} for monetary rewards of this size.

## Solution to Problem 5: Rescorla-Wagner Acquisition

## Solution: Rescorla-Wagner Acquisition

### (a) Trial-by-Trial Computations

The update rule is:

{$$}\Delta V = \alpha \beta (\lambda - V){/$$}

with {$$}\alpha = 0.3{/$$}, {$$}\beta = 0.4{/$$}, {$$}\lambda = 100{/$$}, and {$$}V_0 = 0{/$$}.

The combined learning rate is {$$}\alpha \beta = 0.3 \times 0.4 = 0.12{/$$}.

**Trial 1:**

{$$}\Delta V_1 = 0.12 \times (100 - 0) = 0.12 \times 100 = 12.00{/$$}

{$$}V_1 = 0 + 12.00 = 12.00{/$$}

**Trial 2:**

{$$}\Delta V_2 = 0.12 \times (100 - 12.00) = 0.12 \times 88.00 = 10.56{/$$}

{$$}V_2 = 12.00 + 10.56 = 22.56{/$$}

**Trial 3:**

{$$}\Delta V_3 = 0.12 \times (100 - 22.56) = 0.12 \times 77.44 = 9.293{/$$}

{$$}V_3 = 22.56 + 9.293 = 31.853{/$$}

**Trial 4:**

{$$}\Delta V_4 = 0.12 \times (100 - 31.853) = 0.12 \times 68.147 = 8.178{/$$}

{$$}V_4 = 31.853 + 8.178 = 40.031{/$$}

**Trial 5:**

{$$}\Delta V_5 = 0.12 \times (100 - 40.031) = 0.12 \times 59.969 = 7.196{/$$}

{$$}V_5 = 40.031 + 7.196 = 47.227{/$$}

**Summary table:**

| Trial | {$$}V{/$$} before trial | {$$}\lambda - V{/$$} | {$$}\Delta V{/$$} | {$$}V{/$$} after trial |
|---|---|---|---|---|
| 1 | 0.000 | 100.000 | 12.000 | 12.000 |
| 2 | 12.000 | 88.000 | 10.560 | 22.560 |
| 3 | 22.560 | 77.440 | 9.293 | 31.853 |
| 4 | 31.853 | 68.147 | 8.178 | 40.031 |
| 5 | 40.031 | 59.969 | 7.196 | 47.227 |

### (b) Does {$$}\Delta V{/$$} Increase, Decrease, or Stay Constant?

{$$}\Delta V{/$$} **decreases** across trials: {$$}12.00 \to 10.56 \to 9.29 \to 8.18 \to 7.20{/$$}.

This happens because {$$}\Delta V = \alpha \beta (\lambda - V){/$$}, and the term {$$}(\lambda - V){/$$} shrinks as {$$}V{/$$} grows. On each trial, more of the available associative strength has already been acquired, so the "surprise" (the discrepancy between what is expected and what occurs) gets smaller. This produces the characteristic negatively accelerated learning curve of the Rescorla-Wagner model.

### (c) Will {$$}V{/$$} Ever Exactly Reach {$$}\lambda{/$$}?

**No.** Each trial adds a fraction of the remaining gap {$$}(\lambda - V){/$$} to {$$}V{/$$}. Specifically:

{$$}V_{n+1} = V_n + \alpha\beta(\lambda - V_n) = (1 - \alpha\beta)V_n + \alpha\beta\lambda{/$$}

This means that after each trial, the gap to the asymptote is multiplied by {$$}(1 - \alpha\beta) = 0.88{/$$}:

{$$}\lambda - V_{n+1} = (1 - \alpha\beta)(\lambda - V_n){/$$}

Since {$$}0 < (1 - \alpha\beta) < 1{/$$}, the gap shrinks geometrically but never reaches zero in a finite number of trials. {$$}V{/$$} **asymptotically approaches** {$$}\lambda = 100{/$$} but never exactly equals it. After {$$}n{/$$} trials:

{$$}V_n = \lambda\left[1 - (1 - \alpha\beta)^n\right] = 100\left[1 - (0.88)^n\right]{/$$}

For example, after 20 trials: {$$}V_{20} = 100(1 - 0.88^{20}) = 100(1 - 0.0776) = 92.24{/$$}.

## Solution to Problem 6: Logistic Acquisition Model

## Solution: Logistic Acquisition Model

### (a) Analytical Solution

The logistic ODE is:

{$$}\frac{dx}{dt} = r \cdot x \cdot \left(1 - \frac{x}{K}\right){/$$}

This is a separable ODE. The standard analytical solution with initial condition {$$}x(0) = x_0{/$$} is:

{$$}x(t) = \frac{K}{1 + \left(\frac{K - x_0}{x_0}\right)e^{-rt}}{/$$}

Substituting {$$}K = 40{/$$}, {$$}x_0 = 3{/$$}, and {$$}r = 0.10{/$$}:

{$$}x(t) = \frac{40}{1 + \left(\frac{40 - 3}{3}\right)e^{-0.10t}} = \frac{40}{1 + \frac{37}{3}e^{-0.10t}} = \frac{40}{1 + 12.333\,e^{-0.10t}}{/$$}

### (b) Compute {$$}x(t){/$$} at Specific Times

**At {$$}t = 5{/$$} min:**

{$$}x(5) = \frac{40}{1 + 12.333\,e^{-0.50}} = \frac{40}{1 + 12.333 \times 0.6065} = \frac{40}{1 + 7.480} = \frac{40}{8.480} = 4.72 \text{ resp/min}{/$$}

**At {$$}t = 15{/$$} min:**

{$$}x(15) = \frac{40}{1 + 12.333\,e^{-1.50}} = \frac{40}{1 + 12.333 \times 0.2231} = \frac{40}{1 + 2.752} = \frac{40}{3.752} = 10.66 \text{ resp/min}{/$$}

**At {$$}t = 30{/$$} min:**

{$$}x(30) = \frac{40}{1 + 12.333\,e^{-3.00}} = \frac{40}{1 + 12.333 \times 0.04979} = \frac{40}{1 + 0.6141} = \frac{40}{1.6141} = 24.78 \text{ resp/min}{/$$}

**At {$$}t = 60{/$$} min:**

{$$}x(60) = \frac{40}{1 + 12.333\,e^{-6.00}} = \frac{40}{1 + 12.333 \times 0.002479} = \frac{40}{1 + 0.03057} = \frac{40}{1.03057} = 38.81 \text{ resp/min}{/$$}

**Summary table:**

| {$$}t{/$$} (min) | {$$}e^{-0.10t}{/$$} | {$$}1 + 12.333\,e^{-0.10t}{/$$} | {$$}x(t){/$$} (resp/min) |
|---|---|---|---|
| 5 | 0.6065 | 8.480 | 4.72 |
| 15 | 0.2231 | 3.752 | 10.66 |
| 30 | 0.04979 | 1.614 | 24.78 |
| 60 | 0.002479 | 1.031 | 38.81 |

The response rate starts at 3 resp/min, accelerates through the middle of the session, and approaches the carrying capacity of 40 resp/min.

### (c) Equilibria and Stability

Equilibria occur where {$$}\frac{dx}{dt} = 0{/$$}:

{$$}r \cdot x \cdot \left(1 - \frac{x}{K}\right) = 0{/$$}

This equation equals zero when:

1. {$$}x^* = 0{/$$} (no responding), or
2. {$$}1 - x/K = 0 \implies x^* = K = 40{/$$} resp/min (responding at carrying capacity).

**Stability analysis** using the derivative of {$$}f(x) = rx(1 - x/K){/$$}:

{$$}f'(x) = r\left(1 - \frac{2x}{K}\right){/$$}

**At {$$}x^* = 0{/$$}:**

{$$}f'(0) = r\left(1 - 0\right) = r = 0.10 > 0{/$$}

Since {$$}f'(0) > 0{/$$}, the equilibrium at {$$}x^* = 0{/$$} is **unstable**. If the organism is responding at any rate above zero, responding will increase and move away from this equilibrium. Behaviorally, once responding begins it will not spontaneously return to zero.

**At {$$}x^* = K = 40{/$$}:**

{$$}f'(40) = r\left(1 - \frac{80}{40}\right) = 0.10 \times (1 - 2) = -0.10 < 0{/$$}

Since {$$}f'(K) < 0{/$$}, the equilibrium at {$$}x^* = 40{/$$} is **stable**. If responding is perturbed slightly above or below 40 resp/min, it will return to 40. This represents a stable steady-state response rate — the behavioral "carrying capacity" of this schedule.

## Solution to Problem 7: Extinction as Exponential Decay

## Solution: Extinction as Exponential Decay

### (a) Analytical Solution

The ODE is:

{$$}\frac{dx}{dt} = -a \cdot x{/$$}

This is a first-order linear ODE with constant coefficient. Separating variables:

{$$}\frac{dx}{x} = -a \, dt{/$$}

Integrating both sides:

{$$}\ln|x| = -at + C{/$$}

{$$}x(t) = e^{C} \cdot e^{-at} = x(0) \cdot e^{-at}{/$$}

With {$$}x(0) = 50{/$$} and {$$}a = 0.2{/$$}:

{$$}x(t) = 50\,e^{-0.2t}{/$$}

### (b) Compute {$$}x(t){/$$} at Specific Times

| {$$}t{/$$} (min) | {$$}-0.2t{/$$} | {$$}e^{-0.2t}{/$$} | {$$}x(t) = 50\,e^{-0.2t}{/$$} (resp/min) |
|---|---|---|---|
| 1 | {$$}-0.2{/$$} | 0.8187 | 40.94 |
| 2 | {$$}-0.4{/$$} | 0.6703 | 33.52 |
| 5 | {$$}-1.0{/$$} | 0.3679 | 18.39 |
| 10 | {$$}-2.0{/$$} | 0.1353 | 6.77 |
| 20 | {$$}-4.0{/$$} | 0.01832 | 0.92 |

After 20 minutes, the response rate has declined from 50 to less than 1 response per minute.

### (c) Half-Life

The half-life {$$}t_{1/2}{/$$} is the time at which {$$}x(t_{1/2}) = \frac{1}{2}x(0) = 25{/$$} resp/min:

{$$}25 = 50\,e^{-0.2\,t_{1/2}}{/$$}

{$$}\frac{1}{2} = e^{-0.2\,t_{1/2}}{/$$}

{$$}\ln\!\left(\frac{1}{2}\right) = -0.2\,t_{1/2}{/$$}

{$$}-0.6931 = -0.2\,t_{1/2}{/$$}

{$$}t_{1/2} = \frac{0.6931}{0.2} = 3.466 \text{ minutes}{/$$}

Note that the half-life depends only on {$$}a{/$$}, not on {$$}x(0){/$$}: in general, {$$}t_{1/2} = \frac{\ln 2}{a}{/$$}.

### (d) Limitations of the Exponential Decay Model

**Limitation 1 — No extinction burst.** Empirical extinction data frequently show an initial *increase* in response rate (an "extinction burst") at the onset of extinction, before responding declines. The exponential decay model predicts a strictly monotonic decrease from the very first moment, with the fastest rate of decline occurring at {$$}t = 0{/$$}. It cannot capture the burst.

**Limitation 2 — No spontaneous recovery.** After a period of extinction, organisms typically show partial recovery of responding at the start of the next session (spontaneous recovery). The exponential model predicts {$$}x(t) \to 0{/$$} as {$$}t \to \infty{/$$} with no mechanism for recovery. It treats extinction as a permanent, one-directional process.

**Limitation 3 — Smooth, continuous decline.** Real extinction data are often irregular, showing bouts of responding interspersed with pauses. The exponential model predicts a smooth curve and cannot capture the variability in local response rates that characterizes actual extinction.

**Limitation 4 — Response rate never reaches zero.** The model predicts {$$}x(t) > 0{/$$} for all finite {$$}t{/$$}, meaning the organism is always responding at some small positive rate. In practice, organisms eventually stop responding entirely. A model with a threshold or absorbing barrier at {$$}x = 0{/$$} would be more realistic.

These limitations suggest that while exponential decay may be a useful first approximation, more complex models — such as piecewise models incorporating a burst phase, or models with a resurgence component — would be needed for a fuller account of extinction.

## Solution to Problem 8: Comparing Discounting Models with AIC

## Solution: Comparing Discounting Models with AIC

### (a) Compute AIC for Each Model

The formula is:

{$$}\text{AIC} = -2\ln\mathcal{L} + 2p{/$$}

where {$$}\ln\mathcal{L}{/$$} is the log-likelihood and {$$}p{/$$} is the number of free parameters.

**Model A (hyperbolic, {$$}p = 1{/$$}):**

{$$}\text{AIC}_A = -2(-18.2) + 2(1) = 36.4 + 2 = 38.4{/$$}

**Model B (exponential, {$$}p = 1{/$$}):**

{$$}\text{AIC}_B = -2(-22.7) + 2(1) = 45.4 + 2 = 47.4{/$$}

**Model C (hyperboloid, {$$}p = 2{/$$}):**

{$$}\text{AIC}_C = -2(-16.5) + 2(2) = 33.0 + 4 = 37.0{/$$}

### (b) Rank the Models

| Rank | Model | AIC |
|---|---|---|
| 1 (best) | C (hyperboloid) | 37.0 |
| 2 | A (hyperbolic) | 38.4 |
| 3 (worst) | B (exponential) | 47.4 |

### (c) Compute {$$}\Delta{/$$}AIC Values

The {$$}\Delta{/$$}AIC is the difference between each model's AIC and the minimum AIC:

{$$}\Delta\text{AIC}_i = \text{AIC}_i - \text{AIC}_{\min}{/$$}

{$$}\text{AIC}_{\min} = 37.0 \quad (\text{Model C}){/$$}

| Model | AIC | {$$}\Delta{/$$}AIC |
|---|---|---|
| C (hyperboloid) | 37.0 | {$$}37.0 - 37.0 = 0.0{/$$} |
| A (hyperbolic) | 38.4 | {$$}38.4 - 37.0 = 1.4{/$$} |
| B (exponential) | 47.4 | {$$}47.4 - 37.0 = 10.4{/$$} |

### (d) Interpretation

The conventional guidelines for interpreting {$$}\Delta{/$$}AIC (Burnham & Anderson, 2002) are:

- {$$}\Delta\text{AIC} < 2{/$$}: **Substantial support** — the model is competitive with the best model.
- {$$}2 \leq \Delta\text{AIC} \leq 10{/$$}: **Some support**, but considerably less than the best model.
- {$$}\Delta\text{AIC} > 10{/$$}: **Essentially no support** — the model can be ruled out.

Applying these guidelines:

**Model C (hyperboloid, {$$}\Delta{/$$}AIC = 0.0):** This is the best-fitting model by AIC. It provides the best balance of goodness-of-fit and parsimony.

**Model A (hyperbolic, {$$}\Delta{/$$}AIC = 1.4):** With {$$}\Delta{/$$}AIC {$$}< 2{/$$}, Model A has **substantial support** and cannot be meaningfully distinguished from Model C based on these data. Despite having a lower log-likelihood ({$$}-18.2{/$$} vs. {$$}-16.5{/$$}), its advantage of having one fewer parameter nearly offsets the difference in fit. Given that Models A and C are essentially tied, the principle of parsimony might favor the simpler Model A.

**Model B (exponential, {$$}\Delta{/$$}AIC = 10.4):** With {$$}\Delta{/$$}AIC {$$}> 10{/$$}, Model B has **essentially no support** relative to the best model. The exponential discounting function provides a substantially worse fit to these data, and this poor fit is not offset by any advantage in parsimony (it has the same number of parameters as Model A). Model B can be confidently ruled out.

**Summary:** The data support hyperbolic-family models (A and C) over the exponential model (B). The extra parameter in the hyperboloid model provides only a modest improvement in fit. For these data, either the hyperbolic or hyperboloid model would be a defensible choice.

## Solution to Problem 9: Fitting the Hursh-Silberberg Exponential Demand Equation

## Solution: Fitting the Hursh-Silberberg Exponential Demand Equation

### (a) Shape of the Demand Curve

When plotting {$$}\log Q{/$$} as a function of {$$}\log C{/$$}, the exponential demand equation produces a characteristic curvilinear function with three distinct regions:

1. **Low prices (left portion):** The curve is relatively flat, indicating **inelastic demand**. Consumption decreases only slightly as price increases. The organism defends its consumption level, and total expenditure (responses) increases proportionally with price. This reflects the reinforcer functioning as a "necessity."

2. **Moderate prices (middle portion):** The curve begins to bend downward. This transitional zone contains {$$}P_{\max}{/$$}, the price at which the organism's expenditure (total responding) reaches its maximum. At this inflection zone, demand transitions from inelastic to elastic.

3. **High prices (right portion):** The curve drops steeply, indicating **elastic demand**. Consumption falls rapidly with further price increases, and total expenditure declines. The cost of maintaining consumption has become prohibitive.

The overall shape is a negatively decelerating function in log-log coordinates, beginning near a horizontal asymptote at {$$}\log Q_0{/$$} and curving downward with increasing price.

### (b) Predicted Consumption at Each Price

The model is:

{$$}\log Q = \log Q_0 + k\left(e^{-\alpha \cdot Q_0 \cdot C} - 1\right){/$$}

With {$$}Q_0 = 88.5{/$$}, {$$}\alpha = 0.00038{/$$}, {$$}k = 2.2{/$$}:

First, note that {$$}\alpha \cdot Q_0 = 0.00038 \times 88.5 = 0.033630{/$$} and {$$}\log Q_0 = \log_{10}(88.5) = 1.9469{/$$}.

We compute the exponent {$$}-\alpha \cdot Q_0 \cdot C{/$$} for each price, then {$$}e^{-\alpha \cdot Q_0 \cdot C}{/$$}, and finally {$$}\log Q{/$$}:

**{$$}C = 1{/$$}:**

{$$}-\alpha \cdot Q_0 \cdot C = -0.033630 \times 1 = -0.03363{/$$}

{$$}e^{-0.03363} = 0.96693{/$$}

{$$}\log Q = 1.9469 + 2.2(0.96693 - 1) = 1.9469 + 2.2(-0.03307) = 1.9469 - 0.07276 = 1.8741{/$$}

{$$}Q_{\text{pred}} = 10^{1.8741} = 74.83{/$$}

**{$$}C = 5{/$$}:**

{$$}-\alpha \cdot Q_0 \cdot C = -0.033630 \times 5 = -0.16815{/$$}

{$$}e^{-0.16815} = 0.84527{/$$}

{$$}\log Q = 1.9469 + 2.2(0.84527 - 1) = 1.9469 + 2.2(-0.15473) = 1.9469 - 0.34040 = 1.6065{/$$}

{$$}Q_{\text{pred}} = 10^{1.6065} = 40.40{/$$}

**{$$}C = 10{/$$}:**

{$$}-\alpha \cdot Q_0 \cdot C = -0.033630 \times 10 = -0.33630{/$$}

{$$}e^{-0.33630} = 0.71441{/$$}

{$$}\log Q = 1.9469 + 2.2(0.71441 - 1) = 1.9469 + 2.2(-0.28559) = 1.9469 - 0.62830 = 1.3186{/$$}

{$$}Q_{\text{pred}} = 10^{1.3186} = 20.83{/$$}

**{$$}C = 20{/$$}:**

{$$}-\alpha \cdot Q_0 \cdot C = -0.033630 \times 20 = -0.67260{/$$}

{$$}e^{-0.67260} = 0.51039{/$$}

{$$}\log Q = 1.9469 + 2.2(0.51039 - 1) = 1.9469 + 2.2(-0.48961) = 1.9469 - 1.07714 = 0.8698{/$$}

{$$}Q_{\text{pred}} = 10^{0.8698} = 7.41{/$$}

**{$$}C = 40{/$$}:**

{$$}-\alpha \cdot Q_0 \cdot C = -0.033630 \times 40 = -1.34520{/$$}

{$$}e^{-1.34520} = 0.26050{/$$}

{$$}\log Q = 1.9469 + 2.2(0.26050 - 1) = 1.9469 + 2.2(-0.73950) = 1.9469 - 1.62690 = 0.3200{/$$}

{$$}Q_{\text{pred}} = 10^{0.3200} = 2.09{/$$}

**{$$}C = 80{/$$}:**

{$$}-\alpha \cdot Q_0 \cdot C = -0.033630 \times 80 = -2.69040{/$$}

{$$}e^{-2.69040} = 0.06788{/$$}

{$$}\log Q = 1.9469 + 2.2(0.06788 - 1) = 1.9469 + 2.2(-0.93212) = 1.9469 - 2.05067 = -0.1038{/$$}

{$$}Q_{\text{pred}} = 10^{-0.1038} = 0.79{/$$}

**{$$}C = 160{/$$}:**

{$$}-\alpha \cdot Q_0 \cdot C = -0.033630 \times 160 = -5.38080{/$$}

{$$}e^{-5.38080} = 0.00460{/$$}

{$$}\log Q = 1.9469 + 2.2(0.00460 - 1) = 1.9469 + 2.2(-0.99540) = 1.9469 - 2.18988 = -0.2430{/$$}

{$$}Q_{\text{pred}} = 10^{-0.2430} = 0.57{/$$}

**Summary table:**

| {$$}C{/$$} | {$$}-\alpha Q_0 C{/$$} | {$$}e^{-\alpha Q_0 C}{/$$} | {$$}\log Q_{\text{pred}}{/$$} | {$$}Q_{\text{pred}}{/$$} | {$$}Q_{\text{obs}}{/$$} |
|---|---|---|---|---|---|
| 1 | {$$}-0.0336{/$$} | 0.9669 | 1.8741 | 74.83 | 85 |
| 5 | {$$}-0.1682{/$$} | 0.8453 | 1.6065 | 40.40 | 78 |
| 10 | {$$}-0.3363{/$$} | 0.7144 | 1.3186 | 20.83 | 65 |
| 20 | {$$}-0.6726{/$$} | 0.5104 | 0.8698 | 7.41 | 45 |
| 40 | {$$}-1.3452{/$$} | 0.2605 | 0.3200 | 2.09 | 20 |
| 80 | {$$}-2.6904{/$$} | 0.0679 | {$$}-0.1038{/$$} | 0.79 | 5 |
| 160 | {$$}-5.3808{/$$} | 0.0046 | {$$}-0.2430{/$$} | 0.57 | 1 |

**Note:** The predicted values are substantially lower than the observed values at every price. This indicates that the provided parameters ({$$}Q_0 = 88.5{/$$}, {$$}\alpha = 0.00038{/$$}, {$$}k = 2.2{/$$}) produce a demand curve that drops off more steeply than the observed data. In practice, nonlinear regression software would find parameters that minimize the sum of squared residuals (typically on the {$$}\log Q{/$$} scale, not the raw {$$}Q{/$$} scale). The large residuals here illustrate that fitting is performed in log-transformed space; the parameters may provide a better fit to {$$}\log Q_{\text{obs}}{/$$} versus {$$}\log Q_{\text{pred}}{/$$} than to the raw values. Nevertheless, we proceed with the computation as specified.

### (c) Residuals and {$$}\text{SS}_{res}{/$$}

The residual at each price is {$$}Q_{\text{obs}} - Q_{\text{pred}}{/$$}:

| {$$}C{/$$} | {$$}Q_{\text{obs}}{/$$} | {$$}Q_{\text{pred}}{/$$} | Residual |
|---|---|---|---|
| 1 | 85 | 74.83 | {$$}10.17{/$$} |
| 5 | 78 | 40.40 | {$$}37.60{/$$} |
| 10 | 65 | 20.83 | {$$}44.17{/$$} |
| 20 | 45 | 7.41 | {$$}37.59{/$$} |
| 40 | 20 | 2.09 | {$$}17.91{/$$} |
| 80 | 5 | 0.79 | {$$}4.21{/$$} |
| 160 | 1 | 0.57 | {$$}0.43{/$$} |

{$$}\text{SS}_{res} = (10.17)^2 + (37.60)^2 + (44.17)^2 + (37.59)^2 + (17.91)^2 + (4.21)^2 + (0.43)^2{/$$}

{$$}= 103.43 + 1413.76 + 1950.99 + 1413.01 + 320.77 + 17.72 + 0.18{/$$}

{$$}= 5219.86{/$$}

As noted above, this large {$$}\text{SS}_{res}{/$$} on the raw scale is expected because the exponential demand equation is typically fit by minimizing residuals in **log-transformed** space. If we instead compute residuals on the log scale:

| {$$}C{/$$} | {$$}\log Q_{\text{obs}}{/$$} | {$$}\log Q_{\text{pred}}{/$$} | Log Residual |
|---|---|---|---|
| 1 | 1.929 | 1.874 | {$$}0.055{/$$} |
| 5 | 1.892 | 1.607 | {$$}0.285{/$$} |
| 10 | 1.813 | 1.319 | {$$}0.494{/$$} |
| 20 | 1.653 | 0.870 | {$$}0.783{/$$} |
| 40 | 1.301 | 0.320 | {$$}0.981{/$$} |
| 80 | 0.699 | {$$}-0.104{/$$} | {$$}0.803{/$$} |
| 160 | 0.000 | {$$}-0.243{/$$} | {$$}0.243{/$$} |

{$$}\text{SS}_{res}^{(\log)} = 0.055^2 + 0.285^2 + 0.494^2 + 0.783^2 + 0.981^2 + 0.803^2 + 0.243^2{/$$}

{$$}= 0.003 + 0.081 + 0.244 + 0.613 + 0.962 + 0.645 + 0.059 = 2.607{/$$}

These residuals are still substantial, confirming that the given parameters do not represent an optimal fit to these particular data. A true best-fit solution would yield smaller residuals. The exercise illustrates the mechanics of computing predictions and evaluating fit.

### (d) Essential Value

The essential value is defined as:

{$$}EV = \frac{1}{Q_0 \cdot \alpha \cdot k}{/$$}

Substituting the parameter values:

{$$}EV = \frac{1}{88.5 \times 0.00038 \times 2.2}{/$$}

First compute the denominator:

{$$}88.5 \times 0.00038 = 0.033630{/$$}

{$$}0.033630 \times 2.2 = 0.073986{/$$}

{$$}EV = \frac{1}{0.073986} = 13.52{/$$}

**Interpretation:** The essential value quantifies how essential or valuable the reinforcer is to the organism. A higher {$$}EV{/$$} means the organism is willing to pay more (in responses) before consumption begins to drop sharply. An {$$}EV{/$$} of 13.52 for sucrose indicates a moderate level of reinforcer value. For comparison, essential commodities like food for food-restricted animals typically yield higher {$$}EV{/$$} values, while less essential reinforcers (e.g., novel stimuli) yield lower values. The essential value is inversely related to {$$}\alpha{/$$}: a smaller {$$}\alpha{/$$} means that demand persists across higher prices before becoming elastic, indicating a more essential reinforcer.

### (e) {$$}P_{\max}{/$$} and Its Behavioral Significance

The price at maximum expenditure is:

{$$}P_{\max} = \frac{1}{\alpha \cdot Q_0 \cdot k} \cdot e^{-1} \approx \frac{0.368}{\alpha \cdot Q_0 \cdot k}{/$$}

We already computed {$$}\alpha \cdot Q_0 \cdot k = 0.073986{/$$}:

{$$}P_{\max} = \frac{0.368}{0.073986} = 4.97{/$$}

So {$$}P_{\max} \approx 5.0{/$$}, meaning that the maximum total responding (expenditure = {$$}Q \times C{/$$}) is predicted to occur at approximately FR 5.

**Behavioral significance:** {$$}P_{\max}{/$$} is the price at which the organism works the hardest (emits the most total responses in a session). It marks the transition point between inelastic and elastic demand:

- **Below {$$}P_{\max}{/$$} (e.g., FR 1):** Demand is **inelastic**. As price increases, consumption decreases only slightly, and total responding (expenditure) increases. The organism compensates for higher prices by working more to maintain consumption near {$$}Q_0{/$$}.

- **Above {$$}P_{\max}{/$$} (e.g., FR 10, 20, 40, ...):** Demand is **elastic**. As price increases, consumption decreases rapidly enough that total responding actually declines. The cost of maintaining consumption has become too high, and the organism begins to "give up."

{$$}P_{\max}{/$$} is a clinically and experimentally useful metric because it identifies the price at which a reinforcer's motivating efficacy begins to break down. For substance abuse research, commodities with high {$$}P_{\max}{/$$} values are those for which organisms will tolerate extreme costs before reducing consumption — a hallmark of addiction.

## Solution to Problem 10: Bayesian Updating for Functional Assessment

## Solution: Bayesian Updating for Functional Assessment

### (a) Prior Distribution

The {$$}\text{Beta}(a, b){/$$} distribution has the probability density function:

{$$}f(\theta \mid a, b) = \frac{\theta^{a-1}(1-\theta)^{b-1}}{B(a, b)}{/$$}

where {$$}B(a, b) = \frac{\Gamma(a)\Gamma(b)}{\Gamma(a+b)}{/$$} is the Beta function.

For the {$$}\text{Beta}(2, 2){/$$} prior:

{$$}f(\theta \mid 2, 2) = \frac{\theta^{1}(1-\theta)^{1}}{B(2,2)} = \frac{\theta(1-\theta)}{B(2,2)}{/$$}

The Beta function is:

{$$}B(2,2) = \frac{\Gamma(2)\Gamma(2)}{\Gamma(4)} = \frac{1! \times 1!}{3!} = \frac{1}{6}{/$$}

So the density is:

{$$}f(\theta \mid 2,2) = 6\,\theta(1-\theta){/$$}

**Mean:**

{$$}E[\theta] = \frac{a}{a+b} = \frac{2}{2+2} = \frac{2}{4} = 0.50{/$$}

**Variance:**

{$$}\text{Var}[\theta] = \frac{ab}{(a+b)^2(a+b+1)} = \frac{2 \times 2}{(4)^2(5)} = \frac{4}{80} = 0.05{/$$}

**Standard deviation:** {$$}\sqrt{0.05} = 0.2236{/$$}.

**Shape:** The {$$}\text{Beta}(2,2){/$$} distribution is a symmetric, unimodal distribution centered at {$$}\theta = 0.5{/$$}. It is a gentle inverted-U shape (a parabola), placing most mass between roughly 0.2 and 0.8. This represents a weakly informative prior: the clinician believes all values of {$$}\theta{/$$} are plausible, with a mild preference for moderate values and some downweighting of extreme values near 0 and 1. The total "pseudo-count" is {$$}a + b = 4{/$$}, equivalent to having observed 2 successes and 2 failures in a hypothetical prior sample of 4.

### (b) Posterior Distribution via Beta-Binomial Conjugacy

The Beta distribution is the conjugate prior for the Binomial likelihood. If the prior is {$$}\text{Beta}(a, b){/$$} and we observe {$$}y{/$$} successes in {$$}n{/$$} trials, the posterior is:

{$$}\theta \mid y \sim \text{Beta}(a + y, \; b + n - y){/$$}

This follows from:

{$$}f(\theta \mid y) \propto f(y \mid \theta) \cdot f(\theta) \propto \theta^y(1-\theta)^{n-y} \cdot \theta^{a-1}(1-\theta)^{b-1} = \theta^{a+y-1}(1-\theta)^{b+n-y-1}{/$$}

which is the kernel of a {$$}\text{Beta}(a+y, \; b+n-y){/$$} distribution.

With {$$}a = 2{/$$}, {$$}b = 2{/$$}, {$$}y = 12{/$$}, {$$}n = 15{/$$}:

{$$}a' = a + y = 2 + 12 = 14{/$$}

{$$}b' = b + (n - y) = 2 + 3 = 5{/$$}

{$$}\theta \mid y \sim \text{Beta}(14, 5){/$$}

### (c) Posterior Mean and 95% Credible Interval

**Posterior mean:**

{$$}E[\theta \mid y] = \frac{a'}{a' + b'} = \frac{14}{14 + 5} = \frac{14}{19} = 0.7368{/$$}

**Approximate 95% credible interval:**

Using the normal approximation formula provided:

{$$}\text{CI} \approx \hat{\theta} \pm 1.96\sqrt{\frac{\hat{\theta}(1-\hat{\theta})}{a' + b'}}{/$$}

First compute the standard error term:

{$$}\hat{\theta}(1-\hat{\theta}) = 0.7368 \times 0.2632 = 0.19394{/$$}

{$$}\frac{\hat{\theta}(1-\hat{\theta})}{a' + b'} = \frac{0.19394}{19} = 0.010207{/$$}

{$$}\sqrt{0.010207} = 0.10103{/$$}

{$$}\text{Margin} = 1.96 \times 0.10103 = 0.19802{/$$}

{$$}\text{CI} = 0.7368 \pm 0.1980{/$$}

{$$}\text{CI} = (0.5388, \; 0.9348){/$$}

**Interpretation:** After observing 12 out of 15 intervals consistent with escape maintenance, we are approximately 95% confident that the true probability {$$}\theta{/$$} lies between 0.54 and 0.93. The posterior is concentrated well above 0.5, providing evidence that escape is the predominant maintaining function.

For reference, the exact posterior variance of the {$$}\text{Beta}(14, 5){/$$} distribution is:

{$$}\text{Var}[\theta \mid y] = \frac{a'b'}{(a'+b')^2(a'+b'+1)} = \frac{14 \times 5}{(19)^2(20)} = \frac{70}{7220} = 0.009695{/$$}

{$$}\text{SD} = \sqrt{0.009695} = 0.09846{/$$}

This gives an exact-based approximate 95% CI of {$$}0.7368 \pm 1.96(0.09846) = (0.5438, 0.9298){/$$}, which is close to our computation above.

### (d) Effect of a More Informative Prior: {$$}\text{Beta}(10, 10){/$$}

The {$$}\text{Beta}(10, 10){/$$} prior has:

- **Mean:** {$$}10/20 = 0.50{/$$}, same center as {$$}\text{Beta}(2,2){/$$}.
- **Total pseudo-count:** {$$}10 + 10 = 20{/$$}, compared to {$$}2 + 2 = 4{/$$} for the original prior. This means the prior carries the weight of 20 hypothetical observations, which is **larger** than the actual sample size of {$$}n = 15{/$$}.

The posterior would be {$$}\text{Beta}(10 + 12, \; 10 + 3) = \text{Beta}(22, 13){/$$}, with posterior mean:

{$$}\frac{22}{35} = 0.6286{/$$}

Qualitative effects compared to part (c):

1. **The posterior mean would be pulled more toward 0.5.** With {$$}\text{Beta}(2,2){/$$}, the posterior mean was 0.737, close to the data proportion of 0.80. With {$$}\text{Beta}(10,10){/$$}, the posterior mean would be 0.629, pulled substantially toward the prior mean of 0.50. The informative prior "resists" the data more strongly because it carries more weight.

2. **The credible interval would be narrower** because the total posterior pseudo-count is {$$}22 + 13 = 35{/$$} (vs. {$$}14 + 5 = 19{/$$}), yielding a smaller posterior variance. More total information (prior + data) means more precision.

3. **More data would be needed to "overwhelm" this prior.** The tension between prior and likelihood is resolved in favor of whichever carries more information. With {$$}a + b = 20{/$$} prior pseudo-observations versus {$$}n = 15{/$$} actual observations, the prior still dominates. The clinician would need a substantially larger sample to move the posterior decisively toward the observed proportion.

### (e) Comparison to the Simple Proportion

The sample proportion (maximum likelihood estimate) is:

{$$}\hat{p} = \frac{y}{n} = \frac{12}{15} = 0.800{/$$}

The Bayesian posterior mean from part (c) is:

{$$}\hat{\theta}_{\text{Bayes}} = \frac{14}{19} = 0.737{/$$}

**Why they differ:** The Bayesian estimate is a weighted compromise between the prior mean (0.50) and the sample proportion (0.80). Algebraically:

{$$}\hat{\theta}_{\text{Bayes}} = \frac{a + y}{a + b + n} = \frac{a + b}{a + b + n} \cdot \underbrace{\frac{a}{a + b}}_{\text{prior mean}} + \frac{n}{a + b + n} \cdot \underbrace{\frac{y}{n}}_{\text{sample proportion}}{/$$}

{$$}= \frac{4}{19}(0.50) + \frac{15}{19}(0.80) = 0.1053 + 0.6316 = 0.7368{/$$}

The posterior mean is a precision-weighted average of the prior mean and the data mean, with weights proportional to each source's pseudo-sample size.

**When the difference is largest:**

1. **Small sample sizes:** When {$$}n{/$$} is small relative to {$$}a + b{/$$}, the prior has more influence. With {$$}n = 15{/$$} and {$$}a + b = 4{/$$}, the prior weight is modest ({$$}4/19 \approx 21\%{/$$}). If {$$}n{/$$} were only 3 or 4, the prior would dominate.

2. **Strong prior-data conflict:** When the prior mean and the sample proportion are far apart, the "shrinkage" toward the prior is more visible. Here, the prior mean is 0.50 and the data suggest 0.80 — a moderate conflict. If the data showed {$$}12/12 = 1.00{/$$}, the shrinkage would be even more pronounced.

3. **Informative priors:** As shown in part (d), a {$$}\text{Beta}(10,10){/$$} prior with the same data yields a posterior mean of 0.629, a much larger discrepancy from {$$}\hat{p} = 0.80{/$$}. More informative priors produce larger differences.

As {$$}n \to \infty{/$$}, the posterior becomes dominated by the likelihood, and the Bayesian estimate converges to the sample proportion regardless of the prior. This asymptotic agreement is a consequence of Bayesian consistency.

## Solution to Problem 11: Multilevel Model for Nested Behavioral Data

## Solution: Multilevel Model for Nested Behavioral Data

### (a) Participant Means and Grand Mean

**Participant means** (responses per minute):

**P1:** {$$}\bar{Y}_1 = \frac{22 + 24 + 23 + 25 + 24 + 22}{6} = \frac{140}{6} = 23.333{/$$}

**P2:** {$$}\bar{Y}_2 = \frac{41 + 38 + 40 + 42 + 39 + 40}{6} = \frac{240}{6} = 40.000{/$$}

**P3:** {$$}\bar{Y}_3 = \frac{15 + 17 + 14 + 16 + 18 + 16}{6} = \frac{96}{6} = 16.000{/$$}

**P4:** {$$}\bar{Y}_4 = \frac{33 + 31 + 34 + 32 + 33 + 33}{6} = \frac{196}{6} = 32.667{/$$}

**P5:** {$$}\bar{Y}_5 = \frac{28 + 30 + 27 + 29 + 31 + 29}{6} = \frac{174}{6} = 29.000{/$$}

**Grand mean** (across all 30 observations):

{$$}\bar{Y}_{..} = \frac{140 + 240 + 96 + 196 + 174}{30} = \frac{846}{30} = 28.200{/$$}

| Participant | Mean Response Rate |
|---|---|
| P1 | 23.333 |
| P2 | 40.000 |
| P3 | 16.000 |
| P4 | 32.667 |
| P5 | 29.000 |
| **Grand Mean** | **28.200** |

### (b) Between-Participant Variance ({$$}\tau^2{/$$}) and Within-Participant Variance ({$$}\sigma^2{/$$})

**Between-participant variance** {$$}\tau^2{/$$} (using the population variance formula, dividing by {$$}N = 5{/$$}):

{$$}\tau^2 = \frac{1}{N}\sum_{j=1}^{N}(\bar{Y}_j - \bar{Y}_{..})^2{/$$}

Computing each squared deviation:

{$$}(\bar{Y}_1 - \bar{Y}_{..})^2 = (23.333 - 28.200)^2 = (-4.867)^2 = 23.688{/$$}

{$$}(\bar{Y}_2 - \bar{Y}_{..})^2 = (40.000 - 28.200)^2 = (11.800)^2 = 139.240{/$$}

{$$}(\bar{Y}_3 - \bar{Y}_{..})^2 = (16.000 - 28.200)^2 = (-12.200)^2 = 148.840{/$$}

{$$}(\bar{Y}_4 - \bar{Y}_{..})^2 = (32.667 - 28.200)^2 = (4.467)^2 = 19.954{/$$}

{$$}(\bar{Y}_5 - \bar{Y}_{..})^2 = (29.000 - 28.200)^2 = (0.800)^2 = 0.640{/$$}

{$$}\tau^2 = \frac{23.688 + 139.240 + 148.840 + 19.954 + 0.640}{5} = \frac{332.362}{5} = 66.472{/$$}

**Within-participant variance** {$$}\sigma^2{/$$} (compute each participant's sample variance using {$$}n - 1 = 5{/$$}, then average):

**P1:** Deviations from 23.333: {$$}(-1.333, 0.667, -0.333, 1.667, 0.667, -1.333){/$$}

{$$}s_1^2 = \frac{1.778 + 0.444 + 0.111 + 2.778 + 0.444 + 1.778}{5} = \frac{7.333}{5} = 1.467{/$$}

**P2:** Deviations from 40.000: {$$}(1, -2, 0, 2, -1, 0){/$$}

{$$}s_2^2 = \frac{1 + 4 + 0 + 4 + 1 + 0}{5} = \frac{10}{5} = 2.000{/$$}

**P3:** Deviations from 16.000: {$$}(-1, 1, -2, 0, 2, 0){/$$}

{$$}s_3^2 = \frac{1 + 1 + 4 + 0 + 4 + 0}{5} = \frac{10}{5} = 2.000{/$$}

**P4:** Deviations from 32.667: {$$}(0.333, -1.667, 1.333, -0.667, 0.333, 0.333){/$$}

{$$}s_4^2 = \frac{0.111 + 2.778 + 1.778 + 0.444 + 0.111 + 0.111}{5} = \frac{5.333}{5} = 1.067{/$$}

**P5:** Deviations from 29.000: {$$}(-1, 1, -2, 0, 2, 0){/$$}

{$$}s_5^2 = \frac{1 + 1 + 4 + 0 + 4 + 0}{5} = \frac{10}{5} = 2.000{/$$}

**Average within-participant variance:**

{$$}\sigma^2 = \frac{s_1^2 + s_2^2 + s_3^2 + s_4^2 + s_5^2}{5} = \frac{1.467 + 2.000 + 2.000 + 1.067 + 2.000}{5} = \frac{8.534}{5} = 1.707{/$$}

**Summary:**

| Variance Component | Symbol | Value |
|---|---|---|
| Between-participant | {$$}\tau^2{/$$} | 66.472 |
| Within-participant | {$$}\sigma^2{/$$} | 1.707 |

### (c) Intraclass Correlation Coefficient

{$$}\text{ICC} = \frac{\tau^2}{\tau^2 + \sigma^2} = \frac{66.472}{66.472 + 1.707} = \frac{66.472}{68.179} = 0.975{/$$}

**Interpretation:** The ICC of 0.975 indicates that **97.5% of the total variance in response rates is attributable to differences between participants**, and only 2.5% is due to within-participant session-to-session fluctuation.

This is an extremely high ICC, meaning:

1. **Participants differ enormously from one another** in their baseline response rates on the VI-30s schedule (ranging from about 16 to 40 responses/min).
2. **Each participant is highly consistent across sessions** (within-person variability is small).
3. Observations within the same participant are very strongly correlated — knowing which participant generated a data point tells you almost everything about the expected response rate.

An ICC this high strongly justifies using a multilevel model, because the assumption of independence across all 30 observations (required by ordinary regression) is grossly violated.

### (d) Why a Pooled Average Would Be Misleading

If a researcher ignores the nesting and computes a single pooled mean and variance across all 30 observations, several problems arise:

**1. Inflated total variance and misleading summary statistics.** The pooled variance would combine between-participant and within-participant variability into a single number. The pooled variance would be approximately:

{$$}s_{\text{pooled}}^2 \approx \tau^2 + \sigma^2 = 66.472 + 1.707 = 68.179{/$$}

This gives a standard deviation of {$$}\sqrt{68.179} \approx 8.26{/$$}, which grossly overstates how variable any single participant's behavior is. Each participant's SD is only about {$$}\sqrt{1.707} \approx 1.31{/$$}.

**2. Pseudoreplication and incorrect standard errors.** With 30 observations treated as independent, the standard error of the grand mean would be estimated as {$$}8.26 / \sqrt{30} = 1.51{/$$}. But the 6 observations within each participant are not independent — they are essentially replicates of that participant's rate. The **effective sample size** for estimating the population mean is closer to {$$}N = 5{/$$} (participants), not {$$}n = 30{/$$} (observations). The correct standard error should be based on the between-participant variability: {$$}\sqrt{66.472/5} = \sqrt{13.294} = 3.65{/$$}. The naive analysis underestimates the standard error by a factor of about 2.4, leading to confidence intervals that are far too narrow and {$$}p{/$$}-values that are far too small.

**3. Inflated Type I error.** Because standard errors are underestimated, hypothesis tests will reject the null hypothesis too often. The nominal {$$}\alpha = 0.05{/$$} test may have an actual Type I error rate far exceeding 5%.

**4. Loss of substantively important information.** The large individual differences ({$$}\tau^2 = 66.47{/$$}) are scientifically interesting — they reflect genuine variation in how different organisms respond on a VI schedule. A pooled analysis obscures this structure entirely.

### (e) Multilevel Model with Session-Level Predictor

To test whether response rate changes linearly across sessions, we write a two-level model where sessions (Level 1) are nested within participants (Level 2).

**Level 1 (within-participant):**

{$$}Y_{ij} = \beta_{0j} + \beta_{1j}(\text{Session}_{ij}) + e_{ij}{/$$}

where:
- {$$}Y_{ij}{/$$} is the response rate for participant {$$}j{/$$} in session {$$}i{/$$}
- {$$}\beta_{0j}{/$$} is participant {$$}j{/$$}'s intercept (expected response rate at session 0, or session 1 if session is centered)
- {$$}\beta_{1j}{/$$} is participant {$$}j{/$$}'s slope (the per-session change in response rate)
- {$$}\text{Session}_{ij}{/$$} is the session number (coded 1 through 6, or centered as {$$}0, 1, 2, 3, 4, 5{/$$})
- {$$}e_{ij} \sim N(0, \sigma^2){/$$} is the within-participant residual

**Level 2 (between-participant):**

{$$}\beta_{0j} = \gamma_{00} + u_{0j}{/$$}

{$$}\beta_{1j} = \gamma_{10} + u_{1j}{/$$}

where:
- {$$}\gamma_{00}{/$$} is the **fixed-effect intercept** — the average response rate across participants at the reference session
- {$$}\gamma_{10}{/$$} is the **fixed-effect slope** — the average linear trend across participants (this is the parameter of primary interest for testing whether response rates change over sessions)
- {$$}u_{0j} \sim N(0, \tau_{00}^2){/$$} is the random intercept for participant {$$}j{/$$} — the deviation of participant {$$}j{/$$}'s baseline rate from the grand average
- {$$}u_{1j} \sim N(0, \tau_{11}^2){/$$} is the random slope for participant {$$}j{/$$} — the deviation of participant {$$}j{/$$}'s trend from the average trend

The random effects are assumed to follow a multivariate normal distribution:

{$$}\begin{pmatrix} u_{0j} \\ u_{1j} \end{pmatrix} \sim N\left(\begin{pmatrix} 0 \\ 0 \end{pmatrix}, \begin{pmatrix} \tau_{00}^2 & \tau_{01} \\ \tau_{01} & \tau_{11}^2 \end{pmatrix}\right){/$$}

where {$$}\tau_{01}{/$$} is the covariance between random intercepts and random slopes.

**Combined (reduced-form) equation:**

Substituting the Level 2 equations into Level 1:

{$$}Y_{ij} = \gamma_{00} + \gamma_{10}(\text{Session}_{ij}) + u_{0j} + u_{1j}(\text{Session}_{ij}) + e_{ij}{/$$}

**Role of each level:**

- **Level 1** captures the within-participant trajectory over sessions. It allows each participant to have their own intercept and slope, modeling the session-by-session variation in response rate.
- **Level 2** models the between-participant variation in those intercepts and slopes. It decomposes each participant's intercept and slope into a population average (fixed effect) plus a participant-specific deviation (random effect).

**Testing the session trend:** The hypothesis that response rate does not change over sessions corresponds to {$$}H_0: \gamma_{10} = 0{/$$}. This can be tested using a {$$}t{/$$}-test or likelihood ratio test. The multilevel model correctly accounts for the non-independence of repeated sessions within participants, yielding valid standard errors and {$$}p{/$$}-values. Based on the data in this problem, where each participant's rates appear relatively stable across sessions, we would expect {$$}\gamma_{10}{/$$} to be close to zero.

## Solution to Problem 12: Building a DRA Model from Scratch

## Solution: Building a DRA Model from Scratch

### (a) Identify Components and Draw a Flow Diagram

**State variables** (quantities that change over time):

- {$$}x(t){/$$}: rate of problem behavior (episodes/hour)
- {$$}y(t){/$$}: rate of alternative behavior (episodes/hour)

**Parameters** (constants that govern the dynamics):

- {$$}\delta{/$$}: decay rate constant for problem behavior (hr{$$}^{-1}{/$$})
- {$$}\rho{/$$}: growth rate constant for alternative behavior (hr{$$}^{-1}{/$$})
- {$$}K{/$$}: carrying capacity for alternative behavior (episodes/hour)

**Independent variable:** {$$}t{/$$} (time, in hours)

**Dependent variables:** {$$}x(t){/$$} and {$$}y(t){/$$} (they depend on {$$}t{/$$})

**Flow diagram:**

The model has two stocks (state variables) with the following flows:

```
                  ┌─────────────────┐
                  │   x(t)          │
                  │ Problem Behavior│
                  │   Stock         │
                  └────────┬────────┘
                           │
                           ▼
                    ───────────────
                    Decay outflow
                    δ · x
                    ───────────────

                  ┌─────────────────┐
     ─────────►   │   y(t)          │
     Growth       │ Alternative     │
     inflow       │ Behavior Stock  │
     ρ·y·(1-y/K) └─────────────────┘
```

The problem behavior stock has a single outflow (decay) proportional to {$$}x{/$$}. The alternative behavior stock has a net inflow governed by logistic growth. There is no direct coupling between the two stocks — they evolve independently under this model.

### (b) Derive and Justify the Differential Equations

**Problem behavior — exponential decay:**

{$$}\frac{dx}{dt} = -\delta \cdot x{/$$}

Under DRA, attention is withheld following problem behavior (extinction). The rate of decay at any moment is proportional to how much problem behavior currently exists: the more there is, the more there is to extinguish, but each unit of behavior has the same per-unit probability of dropping out per unit time. This yields first-order exponential decay, the simplest model of extinction. The negative sign ensures that {$$}x{/$$} decreases over time.

**Alternative behavior — logistic growth:**

{$$}\frac{dy}{dt} = \rho \cdot y \cdot \left(1 - \frac{y}{K}\right){/$$}

When the alternative behavior contacts reinforcement, it grows. The {$$}\rho \cdot y{/$$} term captures the idea that growth is proportional to the current level of alternative behavior (a form of "behavioral momentum" — the more often manding occurs, the more opportunities it has to be reinforced and strengthened). The {$$}(1 - y/K){/$$} term introduces a ceiling: as {$$}y{/$$} approaches the carrying capacity {$$}K{/$$}, growth slows because there are only so many opportunities per hour for attention-maintained manding. At {$$}y = K{/$$}, the growth rate is zero.

### (c) At Least Four Assumptions

1. **Independence of behaviors:** The model assumes that problem behavior and alternative behavior evolve independently. In reality, they may compete for the same time or the same reinforcer, creating a direct coupling.

2. **Constant parameters:** The decay rate {$$}\delta{/$$} and growth rate {$$}\rho{/$$} are assumed constant over time. In practice, extinction bursts, emotional side effects, or changes in therapist fidelity could cause these rates to vary.

3. **Continuous time and continuous rates:** The model treats behavior rates as continuous, differentiable functions of time. In reality, behavior occurs in discrete episodes, and rates are computed over finite observation windows.

4. **Single-operant extinction for problem behavior:** The model assumes that withholding reinforcement leads to simple exponential decay. It does not account for extinction bursts (temporary increases in problem behavior), spontaneous recovery, or resurgence.

5. **No interaction effects:** There is no term in either equation representing how one behavior's rate affects the other's rate of change (e.g., response competition or substitutability).

6. **Fixed carrying capacity:** The ceiling {$$}K{/$$} is assumed constant. In practice, the maximum sustainable rate of manding could change as the client's skills develop or as the environment changes.

### (d) Dimensional Consistency

**Problem behavior equation:**

{$$}\frac{dx}{dt} = -\delta \cdot x{/$$}

- Left-hand side: {$$}\frac{[x]}{[t]} = \frac{\text{episodes/hour}}{\text{hour}} = \text{episodes/hour}^2{/$$}

- Right-hand side: {$$}[\delta] \cdot [x] = \text{hr}^{-1} \cdot \text{episodes/hour} = \text{episodes/hour}^2{/$$}

The units match: both sides have dimensions of episodes {$$}\cdot{/$$} hour{$$}^{-2}{/$$}. {$$}\checkmark{/$$}

**Alternative behavior equation:**

{$$}\frac{dy}{dt} = \rho \cdot y \cdot \left(1 - \frac{y}{K}\right){/$$}

- Left-hand side: {$$}\frac{[y]}{[t]} = \frac{\text{episodes/hour}}{\text{hour}} = \text{episodes/hour}^2{/$$}

- Right-hand side: {$$}[\rho] \cdot [y] \cdot \left[\frac{y}{K}\right]{/$$}

  The term {$$}(1 - y/K){/$$} is dimensionless because {$$}[y] = [K] = \text{episodes/hour}{/$$}, so {$$}y/K{/$$} is dimensionless and {$$}(1 - y/K){/$$} is dimensionless.

  Therefore: {$$}[\rho] \cdot [y] = \text{hr}^{-1} \cdot \text{episodes/hour} = \text{episodes/hour}^2{/$$}

The units match: both sides have dimensions of episodes {$$}\cdot{/$$} hour{$$}^{-2}{/$$}. {$$}\checkmark{/$$}

### (e) Solve for {$$}x(t){/$$} and Find Equilibria for {$$}y(t){/$$}

**Solving for {$$}x(t){/$$}:**

The equation {$$}\frac{dx}{dt} = -\delta x{/$$} is a first-order linear ODE with the well-known solution:

{$$}x(t) = x_0 \, e^{-\delta t}{/$$}

Substituting {$$}x_0 = 8{/$$} episodes/hour and {$$}\delta = 0.15{/$$} hr{$$}^{-1}{/$$}:

{$$}x(t) = 8 \, e^{-0.15t}{/$$}

where {$$}t{/$$} is measured in hours.

**Finding equilibria of {$$}y(t){/$$}:**

At equilibrium, {$$}\frac{dy}{dt} = 0{/$$}:

{$$}\rho \cdot y \cdot \left(1 - \frac{y}{K}\right) = 0{/$$}

This equation is satisfied when either factor is zero:

1. {$$}y^* = 0{/$$} (the trivial equilibrium — alternative behavior is absent)
2. {$$}1 - \frac{y}{K} = 0 \implies y^* = K = 12{/$$} episodes/hour (the carrying capacity equilibrium)

**Stability analysis:**

Let {$$}f(y) = \rho \, y \left(1 - \frac{y}{K}\right){/$$}. We compute {$$}f'(y){/$$}:

{$$}f'(y) = \rho \left(1 - \frac{2y}{K}\right){/$$}

At {$$}y^* = 0{/$$}:

{$$}f'(0) = \rho \left(1 - 0\right) = \rho = 0.30 > 0{/$$}

Since {$$}f'(0) > 0{/$$}, the equilibrium {$$}y^* = 0{/$$} is **unstable**. Any small positive perturbation will cause {$$}y{/$$} to grow away from zero.

At {$$}y^* = K = 12{/$$}:

{$$}f'(12) = 0.30 \left(1 - \frac{2 \times 12}{12}\right) = 0.30 \times (1 - 2) = -0.30 < 0{/$$}

Since {$$}f'(K) < 0{/$$}, the equilibrium {$$}y^* = 12{/$$} is **stable**. Small perturbations away from {$$}K{/$$} will decay back toward {$$}K{/$$}.

**Interpretation:** Starting from {$$}y_0 = 2{/$$} episodes/hour (which is between 0 and {$$}K{/$$}), the alternative behavior will grow logistically and approach {$$}y^* = 12{/$$} episodes/hour as {$$}t \to \infty{/$$}.

### (f) Time for Problem Behavior to Drop Below 1 Episode/Hour

We need to find {$$}t{/$$} such that {$$}x(t) < 1{/$$}:

{$$}8 \, e^{-0.15t} = 1{/$$}

{$$}e^{-0.15t} = \frac{1}{8}{/$$}

{$$}-0.15t = \ln\left(\frac{1}{8}\right) = -\ln(8){/$$}

{$$}t = \frac{\ln(8)}{0.15}{/$$}

Computing:

{$$}\ln(8) = \ln(2^3) = 3\ln(2) \approx 3 \times 0.6931 = 2.0794{/$$}

{$$}t = \frac{2.0794}{0.15} \approx 13.86 \text{ hours}{/$$}

**Clinical interpretation:** Under this model, problem behavior is predicted to drop below 1 episode/hour after approximately 13.9 hours of treatment exposure. This corresponds to the time required for an 87.5% reduction from baseline ({$$}8 \to 1{/$$} episodes/hour). In a clinical setting, if the client receives (for example) 3 hours of DRA treatment per day, the model predicts it would take roughly 4--5 treatment days to reach this criterion. This provides the treatment team with a concrete, quantitative expectation for treatment progress, though the actual timeline will depend on how well the model's assumptions (constant {$$}\delta{/$$}, no extinction bursts, etc.) hold in practice.

## Solution to Problem 13: Q-Learning on a Concurrent Schedule

## Solution: Q-Learning on a Concurrent Schedule

### (a) Q-Value Updates for Trials 1--4

The update rule with {$$}\gamma = 0{/$$} is:

{$$}Q(a) \leftarrow Q(a) + \alpha \left[ r - Q(a) \right]{/$$}

with {$$}\alpha = 0.1{/$$}. Only the Q-value of the chosen action is updated; the other remains unchanged.

**Trial 1: Choose Left, reward {$$}r = 0{/$$}**

{$$}Q_L \leftarrow 0 + 0.1 \times [0 - 0] = 0 + 0 = 0{/$$}

{$$}Q_R \text{ unchanged} = 0{/$$}

**Trial 2: Choose Left, reward {$$}r = 1{/$$}**

{$$}Q_L \leftarrow 0 + 0.1 \times [1 - 0] = 0 + 0.1 = 0.1{/$$}

{$$}Q_R \text{ unchanged} = 0{/$$}

**Trial 3: Choose Right, reward {$$}r = 0{/$$}**

{$$}Q_R \leftarrow 0 + 0.1 \times [0 - 0] = 0 + 0 = 0{/$$}

{$$}Q_L \text{ unchanged} = 0.1{/$$}

**Trial 4: Choose Left, reward {$$}r = 1{/$$}**

{$$}Q_L \leftarrow 0.1 + 0.1 \times [1 - 0.1] = 0.1 + 0.1 \times 0.9 = 0.1 + 0.09 = 0.19{/$$}

{$$}Q_R \text{ unchanged} = 0{/$$}

**Summary table:**

| Trial | Choice | Reward | {$$}Q_L{/$$} before | {$$}Q_L{/$$} after | {$$}Q_R{/$$} before | {$$}Q_R{/$$} after |
|-------|--------|--------|-------------|-------------|-------------|-------------|
| 1 | Left | 0 | 0.000 | 0.000 | 0.000 | 0.000 |
| 2 | Left | 1 | 0.000 | 0.100 | 0.000 | 0.000 |
| 3 | Right | 0 | 0.100 | 0.100 | 0.000 | 0.000 |
| 4 | Left | 1 | 0.100 | 0.190 | 0.000 | 0.000 |

### (b) Softmax Choice Probabilities After Trial 4

After trial 4, {$$}Q_L = 0.19{/$$} and {$$}Q_R = 0{/$$}, with {$$}\tau = 0.5{/$$}.

{$$}P(\text{Left}) = \frac{e^{Q_L / \tau}}{e^{Q_L / \tau} + e^{Q_R / \tau}} = \frac{e^{0.19 / 0.5}}{e^{0.19 / 0.5} + e^{0 / 0.5}}{/$$}

Computing the exponents:

{$$}\frac{Q_L}{\tau} = \frac{0.19}{0.5} = 0.38{/$$}

{$$}\frac{Q_R}{\tau} = \frac{0}{0.5} = 0{/$$}

{$$}e^{0.38} \approx 1.4623{/$$}

{$$}e^{0} = 1{/$$}

{$$}P(\text{Left}) = \frac{1.4623}{1.4623 + 1} = \frac{1.4623}{2.4623} \approx 0.5939{/$$}

{$$}P(\text{Right}) = 1 - P(\text{Left}) = 1 - 0.5939 = 0.4061{/$$}

After just 4 trials, the agent has a modest preference for Left (about 59% vs. 41%), reflecting the two rewards received on Left and no rewards received on Right.

### (c) Steady-State Q-Values

With {$$}\gamma = 0{/$$}, the update rule is:

{$$}Q(a) \leftarrow Q(a) + \alpha [r - Q(a)]{/$$}

This is a stochastic approximation (Robbins-Monro) of the expected value of the immediate reward. To see why, consider the expected update when action {$$}a{/$$} is chosen:

{$$}\mathbb{E}[\Delta Q(a)] = \alpha [\mathbb{E}[r \mid a] - Q(a)]{/$$}

At steady state, {$$}\mathbb{E}[\Delta Q(a)] = 0{/$$}, which requires:

{$$}\mathbb{E}[r \mid a] - Q^*(a) = 0{/$$}

{$$}Q^*(a) = \mathbb{E}[r \mid a]{/$$}

For Left: rewards are {$$}1{/$$} with probability {$$}p_L = 0.10{/$$} and {$$}0{/$$} otherwise, so:

{$$}Q^*_L = \mathbb{E}[r \mid \text{Left}] = 1 \times 0.10 + 0 \times 0.90 = 0.10{/$$}

For Right: rewards are {$$}1{/$$} with probability {$$}p_R = 0.05{/$$} and {$$}0{/$$} otherwise, so:

{$$}Q^*_R = \mathbb{E}[r \mid \text{Right}] = 1 \times 0.05 + 0 \times 0.95 = 0.05{/$$}

The key insight is that {$$}\gamma = 0{/$$} means the agent only cares about the immediate reward on the current trial. There is no bootstrapping from future states. Therefore, the Q-value for each action converges to the mean immediate payoff for that action, which is simply the reinforcement probability (since reward magnitude is 1).

### (d) Steady-State Choice Probability Ratio

Using the steady-state Q-values {$$}Q^*_L = 0.10{/$$} and {$$}Q^*_R = 0.05{/$$} with {$$}\tau = 0.5{/$$}:

{$$}\frac{Q^*_L}{\tau} = \frac{0.10}{0.5} = 0.20{/$$}

{$$}\frac{Q^*_R}{\tau} = \frac{0.05}{0.5} = 0.10{/$$}

{$$}P(\text{Left}) = \frac{e^{0.20}}{e^{0.20} + e^{0.10}}{/$$}

Computing:

{$$}e^{0.20} \approx 1.2214{/$$}

{$$}e^{0.10} \approx 1.1052{/$$}

{$$}P(\text{Left}) = \frac{1.2214}{1.2214 + 1.1052} = \frac{1.2214}{2.3266} \approx 0.5250{/$$}

{$$}P(\text{Right}) = 1 - 0.5250 = 0.4750{/$$}

The **choice probability ratio** is:

{$$}\frac{P(\text{Left})}{P(\text{Right})} = \frac{0.5250}{0.4750} \approx 1.105{/$$}

The **reinforcement ratio** is:

{$$}\frac{p_L}{p_R} = \frac{0.10}{0.05} = 2.0{/$$}

The choice ratio (1.105) is much less extreme than the reinforcement ratio (2.0). The agent shows **undermatching**: it allocates more choices to Left, but not in proportion to the 2:1 reinforcement advantage.

### (e) Does the Agent Exhibit Matching?

**No, this Q-learning agent does not exhibit matching.** The matching law predicts that the choice ratio should equal the reinforcement ratio:

{$$}\frac{B_L}{B_R} = \frac{r_L}{r_R} = \frac{0.10}{0.05} = 2.0{/$$}

The agent's steady-state choice ratio is approximately 1.105, which represents substantial undermatching.

**Why matching fails — the role of softmax and {$$}\tau{/$$}:**

The softmax rule converts Q-value differences into choice probabilities via:

{$$}\frac{P(\text{Left})}{P(\text{Right})} = e^{(Q^*_L - Q^*_R)/\tau}{/$$}

Substituting:

{$$}\frac{P(\text{Left})}{P(\text{Right})} = e^{(0.10 - 0.05)/0.5} = e^{0.10} \approx 1.105{/$$}

For matching, we would need {$$}e^{(Q^*_L - Q^*_R)/\tau} = p_L / p_R{/$$}. This would require:

{$$}\frac{Q^*_L - Q^*_R}{\tau} = \ln\left(\frac{p_L}{p_R}\right) = \ln(2) \approx 0.693{/$$}

But the actual value is {$$}(0.10 - 0.05)/0.5 = 0.10{/$$}, which is far smaller than 0.693. The problem is that softmax responds to absolute Q-value differences, not to their ratio. Because the Q-values (0.10 and 0.05) are both close to zero, the absolute difference {$$}Q^*_L - Q^*_R = 0.05{/$$} is small, and softmax with {$$}\tau = 0.5{/$$} does not amplify it enough to produce a 2:1 choice ratio.

**The role of {$$}\gamma = 0{/$$}:**

Setting {$$}\gamma = 0{/$$} ensures that Q-values converge to immediate expected rewards ({$$}Q^*_L = 0.10{/$$}, {$$}Q^*_R = 0.05{/$$}). If {$$}\gamma > 0{/$$}, the agent would incorporate expected future rewards, and the Q-values would generally be larger (potentially amplifying the difference between them). However, even with {$$}\gamma > 0{/$$}, matching is not guaranteed — it would depend on the specific task structure.

**The role of {$$}\tau{/$$}:**

The temperature parameter {$$}\tau{/$$} controls how sensitive the softmax function is to Q-value differences. As {$$}\tau \to 0{/$$}, the agent becomes "greedy" (always choosing the action with the highest Q-value), producing extreme overmatching (or exclusive preference). As {$$}\tau \to \infty{/$$}, choices become random (50/50), producing indifference. At intermediate values like {$$}\tau = 0.5{/$$}, the degree of matching depends on the magnitude of the Q-value differences relative to {$$}\tau{/$$}. To achieve exact matching for this problem, one would need:

{$$}\tau = \frac{Q^*_L - Q^*_R}{\ln(p_L / p_R)} = \frac{0.05}{\ln(2)} \approx \frac{0.05}{0.693} \approx 0.072{/$$}

This much lower temperature would make the agent far more sensitive to the Q-value difference, producing the 2:1 choice ratio that matching requires. In general, Q-learning with softmax does not inherently produce matching; it can approximate matching only under specific parameter configurations.

## Solution to Problem 14: Decision Tree vs. Logistic Regression for Treatment Response

## Solution: Decision Tree vs. Logistic Regression for Treatment Response

### (a) Gini Impurity of the Full Dataset

First, count the outcomes in the 20 cases:

- **Success:** Cases 1, 2, 4, 5, 6, 8, 11, 12, 13, 14, 15, 17, 18, 19 = **14 cases**
- **Failure:** Cases 3, 7, 9, 10, 16, 20 = **6 cases**

The proportions are:

{$$}p_{\text{Success}} = \frac{14}{20} = 0.70{/$$}

{$$}p_{\text{Failure}} = \frac{6}{20} = 0.30{/$$}

The Gini impurity is:

{$$}G = 1 - \sum_i p_i^2 = 1 - \left(p_{\text{Success}}^2 + p_{\text{Failure}}^2\right){/$$}

{$$}G = 1 - (0.70^2 + 0.30^2) = 1 - (0.49 + 0.09) = 1 - 0.58 = 0.42{/$$}

The Gini impurity of the full dataset is **0.42**.

### (b) Gini Impurity for a Split on "Function"

We split the 20 cases by the Function feature into two groups:

**Function = Attention** (Cases 1, 2, 4, 7, 8, 11, 12, 15, 16, 19):

- Success: Cases 1, 2, 4, 8, 11, 12, 15, 19 = **8 cases**
- Failure: Cases 7, 16 = **2 cases**
- Total: **10 cases**

{$$}p_{\text{S}} = \frac{8}{10} = 0.80, \quad p_{\text{F}} = \frac{2}{10} = 0.20{/$$}

{$$}G_{\text{Attention}} = 1 - (0.80^2 + 0.20^2) = 1 - (0.64 + 0.04) = 1 - 0.68 = 0.32{/$$}

**Function = Escape** (Cases 3, 5, 6, 9, 10, 13, 14, 17, 18, 20):

- Success: Cases 5, 6, 13, 14, 17, 18 = **6 cases**
- Failure: Cases 3, 9, 10, 20 = **4 cases**
- Total: **10 cases**

{$$}p_{\text{S}} = \frac{6}{10} = 0.60, \quad p_{\text{F}} = \frac{4}{10} = 0.40{/$$}

{$$}G_{\text{Escape}} = 1 - (0.60^2 + 0.40^2) = 1 - (0.36 + 0.16) = 1 - 0.52 = 0.48{/$$}

**Weighted Gini impurity after the split:**

Each subset has 10 of 20 cases, so the weights are {$$}10/20 = 0.50{/$$} each:

{$$}G_{\text{split}} = \frac{10}{20} \times G_{\text{Attention}} + \frac{10}{20} \times G_{\text{Escape}}{/$$}

{$$}G_{\text{split}} = 0.50 \times 0.32 + 0.50 \times 0.48 = 0.16 + 0.24 = 0.40{/$$}

**Information gain (reduction in Gini impurity):**

{$$}\Delta G = G_{\text{parent}} - G_{\text{split}} = 0.42 - 0.40 = 0.02{/$$}

The split on Function **does reduce impurity**, but only by 0.02. This is a very small improvement. The Attention subgroup is somewhat purer (80% Success) than the Escape subgroup (60% Success), but neither subgroup is anywhere close to homogeneous. Splitting on Function alone provides minimal predictive value.

### (c) Why Higher Training Accuracy Does Not Mean a Better Model

The decision tree achieves 95% training accuracy (19/20 correct) compared to the logistic regression's 80% (16/20). However, **training accuracy measures how well a model fits the data it was built on, not how well it will predict new, unseen cases.**

A decision tree is a highly flexible model. With enough splits, it can create rules that are tailored to almost every individual case in the training set — including patterns that arise from noise or coincidence rather than genuine relationships. For example, the tree might learn a rule like "if Baseline = Low AND Function = Escape AND Treatment = DRA, then Failure" that correctly classifies one or two training cases but reflects an idiosyncratic pattern rather than a general principle.

Logistic regression, by contrast, is a more constrained model. It fits a linear combination of the features passed through a sigmoid function. It cannot capture arbitrary interactions without explicit feature engineering. Its lower training accuracy (80%) may reflect an inability to fit noise, which is actually a strength when the goal is generalization.

In general, **a model that fits the training data more closely is not necessarily better.** The relevant question is how well the model performs on **new data it has never seen** (test data or validation data). A model's training performance is an optimistically biased estimate of its true predictive performance.

### (d) Explaining the Drop in Test Accuracy — Overfitting

On the 10 new cases, the decision tree's accuracy drops from 95% (training) to 65% (test), while the logistic regression drops from 80% to 75%.

This pattern is the hallmark of **overfitting**. The decision tree, because of its high flexibility, memorized specific patterns in the 20 training cases that do not generalize to new cases. It carved the feature space into many small regions, each tuned to the training data. When it encounters new cases that do not exactly match the training patterns, it makes errors.

Quantitatively:

- **Decision tree:** Training accuracy = 95%, test accuracy = 65%. The gap is **30 percentage points**, indicating severe overfitting. The tree's performance on new data is actually worse than what one would get by simply predicting "Success" for every case (which would yield {$$}70\%{/$$} accuracy if the base rate holds in the new sample).
- **Logistic regression:** Training accuracy = 80%, test accuracy = 75%. The gap is only **5 percentage points**, indicating mild or minimal overfitting. The regression's simpler structure (fewer effective parameters relative to the data) prevented it from fitting noise in the training data, so its performance degrades only slightly on new data.

The fundamental issue is the **bias-variance tradeoff**. The decision tree has low bias (it can fit complex patterns) but high variance (it is sensitive to the particular training sample). The logistic regression has higher bias (it assumes a linear-in-features relationship) but lower variance (its predictions are more stable across samples). With only 20 training cases and three categorical features, the decision tree has too many degrees of freedom relative to the amount of data, and it overfits.

### (e) Recommendation

**The clinic should deploy the logistic regression model.**

The justification rests on three points:

1. **Generalization performance.** The logistic regression achieved 75% accuracy on new cases, compared to the decision tree's 65%. The model that performs better on unseen data is the model that will make better predictions in practice. The clinic cares about predicting outcomes for future clients, not about retrospectively explaining the 20 training cases.

2. **Stability.** The small gap between the logistic regression's training and test accuracy (80% vs. 75%) indicates that it will behave predictably as the clinic sees more cases. The decision tree's large gap (95% vs. 65%) means its real-world performance is unreliable and substantially worse than its training performance would suggest.

3. **Interpretability.** Logistic regression provides interpretable coefficients (odds ratios) for each feature, making it easier for clinicians to understand and trust the model's predictions. A clinician can see, for example, that Attention-maintained cases have higher odds of success, which aligns with clinical reasoning.

**Caveats and next steps:** If the clinic collects substantially more data (e.g., hundreds of cases), a decision tree — or better yet, a regularized tree-based ensemble method such as a random forest — may eventually outperform logistic regression by capturing genuine nonlinear interactions. With only 20 training cases, however, the simpler model is the safer and more appropriate choice. The clinic could also consider using cross-validation during model development to obtain a more honest estimate of each model's generalization performance before deploying it.

## Solution to Problem 15: Dynamical Systems Meet Model Comparison

## Solution: Dynamical Systems Meet Model Comparison

### (a) Static Model — Matching Law Equilibrium

Under strict matching ({$$}a = 1{/$$}, {$$}\log\,b = 0{/$$}), the generalized matching law gives:

{$$}\log\left(\frac{B_1}{B_2}\right) = 1 \cdot \log\left(\frac{R_1}{R_2}\right) + 0 = \log(4){/$$}

Therefore:

{$$}\frac{B_1}{B_2} = 4{/$$}

Converting to a proportion:

{$$}p^* = \frac{B_1}{B_1 + B_2} = \frac{4}{4 + 1} = \frac{4}{5} = 0.80{/$$}

The static model predicts {$$}p(t) = 0.80{/$$} for every block. The RSS is computed by summing the squared deviations of each observed data point from 0.80:

| Block | Observed {$$}p(t){/$$} | Residual {$$}(p(t) - 0.80){/$$} | Residual{$$}^2{/$$} |
|:-----:|:---------------:|:-------------------------:|:------------:|
| 1  | 0.50 | {$$}-0.30{/$$} | 0.0900 |
| 2  | 0.52 | {$$}-0.28{/$$} | 0.0784 |
| 3  | 0.55 | {$$}-0.25{/$$} | 0.0625 |
| 4  | 0.58 | {$$}-0.22{/$$} | 0.0484 |
| 5  | 0.61 | {$$}-0.19{/$$} | 0.0361 |
| 6  | 0.64 | {$$}-0.16{/$$} | 0.0256 |
| 7  | 0.67 | {$$}-0.13{/$$} | 0.0169 |
| 8  | 0.69 | {$$}-0.11{/$$} | 0.0121 |
| 9  | 0.71 | {$$}-0.09{/$$} | 0.0081 |
| 10 | 0.73 | {$$}-0.07{/$$} | 0.0049 |
| 11 | 0.74 | {$$}-0.06{/$$} | 0.0036 |
| 12 | 0.75 | {$$}-0.05{/$$} | 0.0025 |
| 13 | 0.76 | {$$}-0.04{/$$} | 0.0016 |
| 14 | 0.77 | {$$}-0.03{/$$} | 0.0009 |
| 15 | 0.78 | {$$}-0.02{/$$} | 0.0004 |
| 16 | 0.78 | {$$}-0.02{/$$} | 0.0004 |
| 17 | 0.79 | {$$}-0.01{/$$} | 0.0001 |
| 18 | 0.79 | {$$}-0.01{/$$} | 0.0001 |
| 19 | 0.80 | {$$}0.00{/$$}  | 0.0000 |
| 20 | 0.80 | {$$}0.00{/$$}  | 0.0000 |

{$$}\text{RSS}_{\text{static}} = 0.0900 + 0.0784 + 0.0625 + 0.0484 + 0.0361 + 0.0256 + 0.0169 + 0.0121 + 0.0081 + 0.0049 + 0.0036 + 0.0025 + 0.0016 + 0.0009 + 0.0004 + 0.0004 + 0.0001 + 0.0001 + 0.0000 + 0.0000{/$$}

{$$}\text{RSS}_{\text{static}} = 0.3926{/$$}

The static model captures the final equilibrium accurately but misses the entire acquisition trajectory. Nearly all of its error comes from the early blocks where the organism has not yet shifted its responding toward the richer alternative.

### (b) Dynamical Model — Logistic ODE

The proposed ODE is:

{$$}\frac{dp}{dt} = r \cdot p(1 - p)\left(\frac{p^* - p}{p^*(1 - p^*)}\right){/$$}

**Role of each factor:**

- {$$}r{/$$}: The rate parameter controlling how quickly the organism's preference shifts. Larger {$$}r{/$$} means faster acquisition.
- {$$}p(1-p){/$$}: The logistic growth factor. This ensures the rate of change is fastest at intermediate values of {$$}p{/$$} and slows as {$$}p{/$$} approaches 0 or 1. It respects the natural boundaries of a proportion (0 and 1).
- {$$}(p^* - p){/$$}: The "error" or distance from equilibrium. When {$$}p < p^*{/$$}, this term is positive, driving {$$}p{/$$} upward. When {$$}p > p^*{/$$}, it is negative, driving {$$}p{/$$} downward. At {$$}p = p^*{/$$}, the derivative is zero — the system has reached its equilibrium.
- {$$}1/(p^*(1-p^*)){/$$}: A normalization constant that scales the dynamics so that {$$}r{/$$} is interpretable regardless of the location of {$$}p^*{/$$}. For {$$}p^* = 0.80{/$$}, this equals {$$}1/(0.80 \times 0.20) = 6.25{/$$}.

**Fixed points:** Setting {$$}dp/dt = 0{/$$}:

{$$}r \cdot p(1-p)\left(\frac{p^* - p}{p^*(1-p^*)}\right) = 0{/$$}

Since {$$}r \neq 0{/$$} and {$$}1/(p^*(1-p^*)) \neq 0{/$$}, the solutions are:

1. {$$}p = 0{/$$} (extinction — no responding on alternative 1)
2. {$$}p = 1{/$$} (exclusive preference for alternative 1)
3. {$$}p = p^* = 0.80{/$$} (matching equilibrium)

**Stability analysis:** Consider small perturbations around each fixed point. Define {$$}f(p) = r \cdot p(1-p)(p^* - p)/(p^*(1-p^*)){/$$}. A fixed point {$$}\bar{p}{/$$} is stable if {$$}f'(\bar{p}) < 0{/$$}.

Expanding {$$}f(p) = \frac{r}{p^*(1-p^*)} \left[ p(1-p)(p^* - p) \right]{/$$}:

The cubic inside the brackets is {$$}p(1-p)(p^*-p) = p^* p - p^* p^2 - p^2 + p^3{/$$}.

Taking the derivative with respect to {$$}p{/$$}:

{$$}\frac{d}{dp}\left[p(1-p)(p^*-p)\right] = (1-p)(p^*-p) + p(-1)(p^*-p) + p(1-p)(-1){/$$}

{$$}= (1-p)(p^*-p) - p(p^*-p) - p(1-p){/$$}

Evaluating at each fixed point:

- At {$$}p = 0{/$$}: {$$}(1)(p^*) - 0 - 0 = p^* = 0.80 > 0{/$$}. Since {$$}f'(0) > 0{/$$}, {$$}p = 0{/$$} is **unstable**.
- At {$$}p = 1{/$$}: {$$}0 - 0 - (1)(0) = 0{/$$}. We need higher-order analysis, but approaching from below, {$$}f(p){/$$} is negative for {$$}p{/$$} slightly less than 1 when {$$}p > p^*{/$$}, so {$$}p = 1{/$$} is **unstable** (trajectories move away from 1 back toward {$$}p^*{/$$}).
- At {$$}p = p^* = 0.80{/$$}: {$$}(1-0.80)(0) - 0.80(0) - 0.80(0.20) = -0.16 < 0{/$$}. Since {$$}f'(p^*) < 0{/$$}, {$$}p = p^*{/$$} is **stable**.

The matching equilibrium is the only stable fixed point for {$$}p \in (0,1){/$$}. Regardless of the starting point (provided {$$}0 < p(1) < 1{/$$}), the system converges to {$$}p^*{/$$}.

### (c) Forward-Euler Numerical Solution

Using {$$}p^* = 0.80{/$$}, {$$}r = 0.30{/$$}, {$$}\Delta t = 1{/$$}, and the normalization constant {$$}1/(p^*(1-p^*)) = 1/(0.16) = 6.25{/$$}:

{$$}p(t+1) = p(t) + 0.30 \times p(t)(1-p(t)) \times \frac{0.80 - p(t)}{0.16}{/$$}

Starting from {$$}p(1) = 0.50{/$$}:

**Block 1:** {$$}p(1) = 0.50{/$$}

{$$}\Delta p = 0.30 \times 0.50 \times 0.50 \times \frac{0.30}{0.16} = 0.30 \times 0.25 \times 1.875 = 0.1406{/$$}

{$$}p(2) = 0.50 + 0.1406 = 0.64{/$$}

**Block 2:** {$$}p(2) = 0.64{/$$}

{$$}\Delta p = 0.30 \times 0.64 \times 0.36 \times \frac{0.16}{0.16} = 0.30 \times 0.2304 \times 1.00 = 0.0691{/$$}

{$$}p(3) = 0.64 + 0.0691 = 0.71{/$$}

**Block 3:** {$$}p(3) = 0.71{/$$}

{$$}\Delta p = 0.30 \times 0.71 \times 0.29 \times \frac{0.09}{0.16} = 0.30 \times 0.2059 \times 0.5625 = 0.0347{/$$}

{$$}p(4) = 0.71 + 0.0347 = 0.74{/$$}

**Block 4:** {$$}p(4) = 0.74{/$$}

{$$}\Delta p = 0.30 \times 0.74 \times 0.26 \times \frac{0.06}{0.16} = 0.30 \times 0.1924 \times 0.375 = 0.0216{/$$}

{$$}p(5) = 0.74 + 0.0216 = 0.77{/$$}

**Block 5:** {$$}p(5) = 0.77{/$$}

{$$}\Delta p = 0.30 \times 0.77 \times 0.23 \times \frac{0.03}{0.16} = 0.30 \times 0.1771 \times 0.1875 = 0.0100{/$$}

{$$}p(6) = 0.77 + 0.0100 = 0.78{/$$}

**Block 6:** {$$}p(6) = 0.78{/$$}

{$$}\Delta p = 0.30 \times 0.78 \times 0.22 \times \frac{0.02}{0.16} = 0.30 \times 0.1716 \times 0.125 = 0.0064{/$$}

{$$}p(7) = 0.78 + 0.0064 = 0.78{/$$} (rounds to 0.78)

For subsequent blocks, {$$}\Delta p{/$$} becomes progressively smaller as {$$}p{/$$} approaches {$$}p^*{/$$}. Continuing the iteration:

| Block ({$$}t{/$$}) | Predicted {$$}p(t){/$$} |
|:-----------:|:----------------:|
| 1  | 0.50 |
| 2  | 0.64 |
| 3  | 0.71 |
| 4  | 0.74 |
| 5  | 0.77 |
| 6  | 0.78 |
| 7  | 0.78 |
| 8  | 0.79 |
| 9  | 0.79 |
| 10 | 0.79 |
| 11 | 0.79 |
| 12 | 0.80 |
| 13 | 0.80 |
| 14 | 0.80 |
| 15 | 0.80 |
| 16 | 0.80 |
| 17 | 0.80 |
| 18 | 0.80 |
| 19 | 0.80 |
| 20 | 0.80 |

Now compute the RSS:

| Block | Observed | Predicted | Residual | Residual{$$}^2{/$$} |
|:-----:|:--------:|:---------:|:--------:|:------------:|
| 1  | 0.50 | 0.50 | 0.00  | 0.0000 |
| 2  | 0.52 | 0.64 | {$$}-0.12{/$$} | 0.0144 |
| 3  | 0.55 | 0.71 | {$$}-0.16{/$$} | 0.0256 |
| 4  | 0.58 | 0.74 | {$$}-0.16{/$$} | 0.0256 |
| 5  | 0.61 | 0.77 | {$$}-0.16{/$$} | 0.0256 |
| 6  | 0.64 | 0.78 | {$$}-0.14{/$$} | 0.0196 |
| 7  | 0.67 | 0.78 | {$$}-0.11{/$$} | 0.0121 |
| 8  | 0.69 | 0.79 | {$$}-0.10{/$$} | 0.0100 |
| 9  | 0.71 | 0.79 | {$$}-0.08{/$$} | 0.0064 |
| 10 | 0.73 | 0.79 | {$$}-0.06{/$$} | 0.0036 |
| 11 | 0.74 | 0.79 | {$$}-0.05{/$$} | 0.0025 |
| 12 | 0.75 | 0.80 | {$$}-0.05{/$$} | 0.0025 |
| 13 | 0.76 | 0.80 | {$$}-0.04{/$$} | 0.0016 |
| 14 | 0.77 | 0.80 | {$$}-0.03{/$$} | 0.0009 |
| 15 | 0.78 | 0.80 | {$$}-0.02{/$$} | 0.0004 |
| 16 | 0.78 | 0.80 | {$$}-0.02{/$$} | 0.0004 |
| 17 | 0.79 | 0.80 | {$$}-0.01{/$$} | 0.0001 |
| 18 | 0.79 | 0.80 | {$$}-0.01{/$$} | 0.0001 |
| 19 | 0.80 | 0.80 | 0.00  | 0.0000 |
| 20 | 0.80 | 0.80 | 0.00  | 0.0000 |

{$$}\text{RSS}_{\text{dyn}} = 0.1514{/$$}

**Note:** With {$$}r = 0.30{/$$}, the dynamical model converges to the equilibrium faster than the data suggest — the predicted trajectory overshoots in the early blocks (the model reaches near-equilibrium by block 6, while the data take closer to 15 blocks). This indicates that {$$}r = 0.30{/$$} is too large for this dataset. A better-fitting value of {$$}r{/$$} could be found by minimizing RSS over {$$}r{/$$}, but even with this suboptimal parameter, the dynamical model ({$$}\text{RSS} = 0.1514{/$$}) already outperforms the static model ({$$}\text{RSS} = 0.3926{/$$}) because it at least captures the general sigmoidal approach to equilibrium.

### (d) Model Comparison via AIC{$$}_c{/$$}

We have {$$}n = 20{/$$} data points.

**Static model:** {$$}k_{\text{static}} = 0{/$$} free parameters, {$$}\text{RSS}_{\text{static}} = 0.3926{/$$}.

{$$}\text{AIC}_{c,\text{static}} = n \ln\!\left(\frac{\text{RSS}}{n}\right) + 2k + \frac{2k(k+1)}{n - k - 1}{/$$}

{$$}= 20 \ln\!\left(\frac{0.3926}{20}\right) + 0 + 0{/$$}

{$$}= 20 \ln(0.01963){/$$}

{$$}= 20 \times (-3.9296){/$$}

{$$}= -78.59{/$$}

**Dynamical model:** {$$}k_{\text{dyn}} = 1{/$$} free parameter, {$$}\text{RSS}_{\text{dyn}} = 0.1514{/$$}.

{$$}\text{AIC}_{c,\text{dyn}} = 20 \ln\!\left(\frac{0.1514}{20}\right) + 2(1) + \frac{2(1)(2)}{20 - 1 - 1}{/$$}

{$$}= 20 \ln(0.00757) + 2 + \frac{4}{18}{/$$}

{$$}= 20 \times (-4.8844) + 2 + 0.2222{/$$}

{$$}= -97.69 + 2 + 0.22{/$$}

{$$}= -95.47{/$$}

**Model comparison:**

{$$}\Delta\text{AIC}_c = \text{AIC}_{c,\text{static}} - \text{AIC}_{c,\text{dyn}} = -78.59 - (-95.47) = 16.88{/$$}

The dynamical model has the lower (more negative) AIC{$$}_c{/$$}, so it is preferred. The AIC{$$}_c{/$$} difference of 16.88 is very large.

**Evidence ratio:**

{$$}\text{Evidence ratio} = e^{\Delta/2} = e^{16.88/2} = e^{8.44} \approx 4,633{/$$}

The data provide approximately 4,633:1 evidence in favor of the dynamical model over the static model. By conventional guidelines, {$$}\Delta\text{AIC}_c > 10{/$$} indicates essentially no support for the worse-fitting model. Even though the dynamical model uses one additional parameter, the improvement in fit is so substantial that the complexity penalty is negligible.

### (e) Synthesis — When Is a Dynamical Model Worth the Complexity?

**When the static model suffices:**

- **Steady-state research questions.** If the investigator's question concerns the *endpoint* of preference — for example, does the organism match, undermatch, or overmatch? — then the generalized matching law with its two parameters ({$$}a{/$$} and {$$}\log\,b{/$$}) is the appropriate model. It is parsimonious, widely understood, and directly interpretable.
- **Long sessions with experienced subjects.** When subjects have extensive training and sessions are long enough for behavior to stabilize, the acquisition phase represents a small fraction of the data. A static description of the stable-state allocation captures nearly all the variance.
- **Descriptive economy.** In applied settings where the clinician simply needs to know the expected allocation at equilibrium (e.g., in a concurrent-schedule preference assessment), the static model provides an efficient summary.

**When the dynamical model adds value:**

- **Acquisition and transition research.** If the research question concerns *how* preference changes over time — the speed of acquisition, the sensitivity to sudden schedule changes, or individual differences in learning rate — a static model is structurally incapable of addressing the question. The trajectory is the phenomenon of interest.
- **Short sessions or early training.** When organisms have not yet reached equilibrium, the static model systematically mispredicts behavior. As shown in parts (a) and (c), the static model assigns large errors to the early blocks, while the dynamical model captures the approach to asymptote.
- **Mechanistic insight.** The rate parameter {$$}r{/$$} has a substantive interpretation: it reflects the speed at which the organism adjusts its allocation in response to the reinforcement contingency. Comparing {$$}r{/$$} across conditions, species, or pharmacological manipulations can reveal information about the underlying learning or decision process that the static model cannot provide.
- **Perturbation analysis.** If the schedule changes mid-session, a dynamical model can predict the re-equilibration trajectory. The static model can only predict the new equilibrium, not the path to it.

**When to prefer the higher-AIC model:**

AIC selects the model that best balances fit and parsimony *for the data at hand*. However, a researcher might legitimately prefer a model with higher AIC in the following circumstances:

1. **Different research goals.** If the research question is about equilibrium and the dynamical model's advantage comes entirely from fitting transitional data that are not of interest, the researcher may prefer the static model for its interpretive simplicity. Model selection criteria answer "which model best describes these data?" — but the scientist must decide "which data are relevant to my question?"

2. **Generalizability concerns.** The dynamical model's superior fit in this dataset depends on having time-series data during acquisition. If future applications involve only steady-state data, the dynamical model's extra parameter ({$$}r{/$$}) becomes unidentifiable. A model that cannot be fitted in the target context is useless regardless of its AIC on the current data.

3. **Theoretical coherence.** If the static model connects to a broader theoretical framework (e.g., molar theories of matching) and the dynamical model is ad hoc, the researcher might prefer the theoretically grounded model while noting the AIC discrepancy as motivation for developing a dynamical extension of the theory.

The overarching lesson is that model comparison is a tool, not a decision algorithm. AIC{$$}_c{/$$} provides a principled quantitative comparison, but the final modeling choice must also consider the research question, the domain of intended application, and the theoretical context.

## Solution to Problem 16: From Mechanism to Prediction: Comparing Mechanistic and ML Approaches

## Solution: From Mechanism to Prediction: Comparing Mechanistic and ML Approaches

### (a) Mechanistic Model Assessment — Generalized Matching Law

The generalized matching law predicts that the log response ratio is a linear function of the log reinforcement ratio:

{$$}\log\left(\frac{B_1}{B_2}\right) = a \cdot \log\left(\frac{R_1}{R_2}\right) + \log\,b{/$$}

This model uses only {$$}\log(R_1/R_2){/$$} and ignores both {$$}R_{\text{total}}{/$$} and session length. This is not an oversight — it is a **theoretical commitment**. The matching law embodies the principle that the *relative* allocation of behavior is controlled by the *relative* allocation of reinforcement. Under the molar matching framework, only the ratio of reinforcement rates matters, not their absolute magnitudes. The bias parameter {$$}\log\,b{/$$} captures systematic side preference unrelated to the reinforcement contingency.

**Is this a strength or a limitation?**

It is both, depending on the context:

- **Strength:** By restricting the model to a single, theoretically motivated predictor, the matching law achieves parsimony and interpretability. The sensitivity parameter {$$}a{/$$} has a clear behavioral meaning: {$$}a < 1{/$$} indicates undermatching (common in concurrent VI VI), {$$}a = 1{/$$} indicates strict matching, and {$$}a > 1{/$$} indicates overmatching. The model's success with only 2 parameters and 1 predictor — achieving {$$}R^2 = 0.89{/$$} on test data — demonstrates that reinforcement ratios account for the vast majority of variance in choice.

- **Limitation:** There are well-documented conditions under which absolute reinforcement rate and session length affect choice allocation:

  1. **Changeover delay and ratio effects.** At very low overall reinforcement rates, long inter-reinforcement intervals can alter the effective contingency by changing the probability of reinforcement following a changeover response.
  2. **Session-length effects.** In shorter sessions, behavior may not reach steady state, and the transient period constitutes a larger fraction of the data. The matching law describes equilibrium behavior and may systematically mispredict if sessions are too short.
  3. **Satiation and deprivation.** Higher overall reinforcement rates in long sessions may produce satiation effects that alter preference, an effect the matching law cannot capture.

If these factors are present in the dataset, the matching law will produce **systematic residuals** correlated with {$$}R_{\text{total}}{/$$} and session length, rather than the random residuals expected from a well-specified model. A researcher should always plot residuals against the omitted variables to check for such patterns.

### (b) Q-Learning Analysis

The Q-learning agent achieves the lowest {$$}R^2{/$$} on both training (0.78) and test (0.75) sets. This underperformance relative to even a two-parameter regression has several explanations:

**1. Indirect fitting.** The generalized matching law and the decision tree are fit *directly* to the observed {$$}\log(B_1/B_2){/$$} values — they adjust their parameters to minimize prediction error on the outcome variable. The Q-learning agent, by contrast, is not directly optimized to match the observed response ratios. Instead, it simulates the session's reinforcement schedule and generates choice behavior through its own internal dynamics (Q-value updates and softmax selection). The resulting {$$}\log(B_1/B_2){/$$} is an *emergent* property of the simulation, not a directly fitted quantity. This mismatch between the agent's objective (maximizing reward via Q-value updates) and the evaluation criterion (predicting observed response ratios) introduces a systematic source of error.

**2. Sensitivity to {$$}\alpha{/$$} and {$$}\beta{/$$}.** The learning rate {$$}\alpha = 0.10{/$$} determines how quickly Q-values update in response to new reinforcement. If this value is too small, the agent may not reach steady state within the simulated session, producing choice proportions that reflect the transient learning phase rather than the asymptotic allocation. If too large, Q-values become volatile and the steady-state allocation is noisy. The inverse temperature {$$}\beta = 5.0{/$$} controls how deterministically the agent translates Q-value differences into choice probabilities. A higher {$$}\beta{/$$} would produce sharper preference, while a lower {$$}\beta{/$$} would produce more stochastic choice. Neither {$$}\alpha{/$$} nor {$$}\beta{/$$} was optimized on the training data here — they were set a priori. Optimizing these parameters could improve fit, but would also increase the risk of overfitting given the indirect nature of the mapping from parameters to predictions.

**3. Stochastic simulation.** Each Q-learning simulation run produces a stochastic trajectory. Even with the same {$$}\alpha{/$$} and {$$}\beta{/$$}, different runs yield different {$$}\log(B_1/B_2){/$$} values. This stochasticity adds irreducible noise to the predictions. Averaging over many simulation runs would reduce this variance but would not eliminate the bias introduced by points 1 and 2.

**4. Model mismatch.** The Q-learning agent assumes a specific learning mechanism (incremental reward-prediction-error updating) that may not match the actual process generating the pigeons' choice behavior. If pigeons use a molecular strategy more akin to melioration, or if their behavior is better described by a molar matching process with no trial-level learning, then even a perfectly parameterized Q-learning agent will systematically deviate from the data.

Despite its lower predictive accuracy, the Q-learning model offers something the other two models do not: a **process account** of how preference develops over time within a session. This may be more valuable for certain research questions than raw predictive accuracy.

### (c) Decision Tree Analysis — Overfitting

The decision tree's training {$$}R^2{/$$} of 0.97 and test {$$}R^2{/$$} of 0.82 exhibit a **15-point gap**, the hallmark of overfitting. The matching law's corresponding gap is only 2 points (0.91 to 0.89).

**Why the tree overfits:**

1. **High flexibility relative to sample size.** A decision tree with max depth = 4 can create up to {$$}2^4 = 16{/$$} terminal nodes (leaves). With 40 training observations, this means an average of only 2.5 observations per leaf. The tree has enough flexibility to carve the feature space into small regions tailored to the idiosyncrasies of the training set.

2. **Exploiting irrelevant features.** The tree has access to all four features, including {$$}R_{\text{total}}{/$$} and session length. In a sample of 40 sessions, there may be spurious correlations between these features and {$$}\log(B_1/B_2){/$$} that arise from sampling variability rather than genuine relationships. The tree will find and exploit these correlations, creating splits like "if {$$}R_{\text{total}} > 73{/$$} and session length = 60 min, predict {$$}\log(B_1/B_2) = 0.42{/$$}" that fit training noise. These splits do not generalize.

3. **No regularization.** Unlike the matching law, which is constrained by its linear functional form, the tree imposes no smoothness or parametric structure on the prediction function. Each split creates a discontinuity, and the tree can accommodate any pattern — including noise — without penalty.

**Why the matching law generalizes better:** The matching law is constrained by a strong theoretical prior: choice ratios are a power function of reinforcement ratios. This structural assumption acts as a form of **implicit regularization**. The model cannot fit noise because its functional form does not permit arbitrary patterns. With only 2 free parameters, it is nearly impossible to overfit 40 observations.

**Proposed modification to improve the decision tree:**

Several approaches could help:

- **Pruning or reducing max depth.** Limiting the tree to depth 2 or 3 would reduce the number of leaves and force the tree to capture only the most robust patterns. Cross-validation could be used to select the optimal depth.
- **Random forest or gradient-boosted ensemble.** Averaging predictions across many decorrelated trees (bagging) reduces variance and improves generalization. A random forest with 100 trees and max depth = 3 would likely outperform the single depth-4 tree on test data.
- **Feature selection.** Restricting the tree to only {$$}\log(R_1/R_2){/$$} — the feature the matching law uses — would prevent it from exploiting spurious correlations with {$$}R_{\text{total}}{/$$} and session length. If the matching law's theoretical claim is correct, removing the irrelevant features would improve the tree's test performance.

### (d) The Prediction-Explanation Gap

If the matching law and the decision tree produced identical test {$$}R^2{/$$} values, they would be equally accurate at **prediction** — that is, at forecasting {$$}\log(B_1/B_2){/$$} for new sessions. But prediction accuracy is only one dimension on which models can be evaluated. The claim that "equally accurate means equally good" conflates prediction with explanation and ignores several critical differences:

**1. Explanation vs. prediction.**

- The matching law provides an **explanation** of choice: organisms allocate behavior in proportion to relative reinforcement. The parameters {$$}a{/$$} and {$$}\log\,b{/$$} have theoretical meaning — sensitivity and bias — that connect to decades of behavioral theory. The model tells us *why* {$$}B_1/B_2{/$$} takes the value it does: because {$$}R_1/R_2{/$$} is what it is, and the organism is sensitive to that ratio with parameter {$$}a{/$$}.
- The decision tree provides a **prediction rule**: a series of if-then splits that map features to outputs. It does not explain why the organism makes the choices it does. A split like "if {$$}\log(R_1/R_2) > 0.3{/$$}, go left" identifies a useful threshold for prediction but says nothing about the behavioral process that generates the threshold.

**2. Counterfactual reasoning.** The matching law supports **counterfactual inference**: if we changed the reinforcement ratio from 4:1 to 2:1, the model predicts exactly how choice would change (by a factor governed by {$$}a{/$$}). This is because the model's structure embodies the causal claim that reinforcement ratios *control* choice ratios. The decision tree supports no such inference. Its splits are descriptive summaries of the training data, not causal claims. A new reinforcement ratio that falls in the same leaf as a training ratio will receive the same prediction, but the tree provides no principled way to predict the effect of an intervention on the schedule.

**3. Generalization beyond the training domain.** The matching law can extrapolate to reinforcement ratios outside the range observed in the training data because its functional form (a power function) is defined for all positive ratios. The decision tree can only interpolate within the feature space it has seen — for inputs outside the range of any split, it defaults to the nearest leaf, which may be arbitrarily wrong.

**4. Scientific communication and accumulation.** The matching law's parameters can be compared across studies, species, and conditions. A sensitivity exponent of {$$}a = 0.85{/$$} can be meaningfully compared to the {$$}a = 0.80{/$$} found in another laboratory, contributing to cumulative knowledge about matching. The decision tree's splits are idiosyncratic to the training data and have no currency in the broader scientific literature.

**5. Parsimony and identifiability.** The matching law achieves its test {$$}R^2{/$$} with 2 parameters. The decision tree achieves the same {$$}R^2{/$$} with many more effective parameters (each split threshold is a free parameter). Parsimony matters not for its own sake, but because models with fewer parameters are less likely to be fitting noise and more likely to have captured genuine regularities.

In summary, two models can be equally good at prediction while being vastly different in their value for scientific understanding. Prediction is necessary but not sufficient for explanation. A model that predicts well but explains nothing is a useful engineering tool; a model that both predicts and explains is a scientific contribution.

### (e) Synthesis and Recommendations

**Goal 1: Predicting choice allocation on a new schedule not yet run in the lab.**

**Recommended model: Generalized Matching Law (Model A).**

The matching law achieves the highest test {$$}R^2{/$$} (0.89) and, crucially, it can **extrapolate** to novel reinforcement ratios because its functional form (a power function of {$$}R_1/R_2{/$$}) is defined across the entire positive real line. If the new schedule's {$$}\log(R_1/R_2){/$$} is within or modestly outside the range of the training data, the matching law will produce reliable, interpretable predictions. The decision tree would be limited to interpolation within observed feature ranges, and the Q-learning agent would need to simulate the new schedule, introducing stochastic variability and dependence on potentially misspecified parameters.

**Goal 2: Understanding the real-time learning process by which pigeons acquire preference.**

**Recommended model: Q-Learning Agent (Model B).**

Despite its lower predictive {$$}R^2{/$$}, the Q-learning agent is the only model that provides a **process account** of how preference develops over time. It models the trial-by-trial updating of action values and the translation of those values into choice probabilities. This makes it uniquely suited for investigating questions about learning dynamics: How quickly does preference shift after a schedule change? How does the learning rate vary across conditions? Is the organism's exploration-exploitation tradeoff consistent with a softmax rule or better described by an {$$}\varepsilon{/$$}-greedy rule? None of these questions can even be *formulated* within the matching law or decision tree frameworks. The Q-learning model's parameters ({$$}\alpha{/$$} and {$$}\beta{/$$}) directly map onto psychologically meaningful quantities — learning speed and choice determinism — that can be compared across conditions and organisms.

**Goal 3: Screening a large set of environmental variables to discover which ones matter for choice.**

**Recommended model: Decision Tree Regressor (Model C).**

When the goal is exploratory data analysis — identifying which features, out of many candidates, are most predictive of the outcome — the decision tree (or, better, a random forest with feature importance measures) excels. Unlike the matching law, which is restricted to {$$}\log(R_1/R_2){/$$} by theoretical commitment, the tree can evaluate {$$}R_{\text{total}}{/$$}, session length, and any other features the researcher provides. The tree's feature importance scores and split structure reveal which variables the data consider most informative. This is precisely the scenario where the tree's flexibility is an asset rather than a liability. The discoveries made through this screening can then inform the development of more principled mechanistic models. Note that a random forest ensemble with cross-validation would be preferable to a single tree for this purpose, to reduce the risk of highlighting spurious features.

**Goal 4: Publishing a theoretical account of the matching law in a behavior-analytic journal.**

**Recommended model: Generalized Matching Law (Model A).**

For this goal, the model must connect to the theoretical tradition in behavior analysis, use parameters that are interpretable and comparable across studies, and demonstrate that the matching law's functional form adequately describes the data. The sensitivity parameter {$$}a = 0.85{/$$} and bias {$$}\log\,b = 0.03{/$$} are directly comparable to the extensive literature reporting these values across species, schedules, and laboratories. Reporting that a Q-learning agent or decision tree also fits the data is informative as a supplementary analysis but does not advance matching-law theory. The matching law's parsimony, interpretability, and deep connection to the molar-molecular debate in behavior analysis make it the appropriate framework for a theoretical contribution to this audience.

**General principle:** There is no universally "best" model. The matching law is best for theory-driven prediction and explanation. The Q-learning agent is best for modeling the dynamics of learning. The decision tree is best for flexible prediction and feature discovery. A complete research program will often use all three at different stages: the tree to explore, the matching law to explain, and the Q-learning agent to model process.
