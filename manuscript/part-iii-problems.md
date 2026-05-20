# Practice Problems

Each problem is tagged with a difficulty level and the modeling-framework steps it exercises. Attempt each problem before consulting the worked answers in the chapter that follows.

## Problem 1: Identifying Model Components

**Difficulty:** Introductory  |  **Week:** 1  |  **Modeling Steps:** 1, 2

Consider the simple linear model of responding over time:

{$$}R = k \cdot t{/$$}

where {$$}R{/$$} represents the cumulative number of responses and {$$}t{/$$} represents elapsed time.

**(a)** Identify the dependent variable.

**(b)** Identify the independent variable.

**(c)** Identify the parameter.

**(d)** State the units of each quantity ({$$}R{/$$}, {$$}t{/$$}, and {$$}k{/$$}), assuming responses are counted and time is measured in minutes.

**(e)** What does this model assume about the rate of responding over time? Under what behavioral circumstances might this assumption be reasonable, and when might it break down?

## Problem 2: Setting Up a Model of Cumulative Responding

**Difficulty:** Intermediate  |  **Week:** 1  |  **Modeling Steps:** 1, 2, 3, 4, 5, 6, 7

A researcher observes that a pigeon on a VI-60s schedule produces approximately 45 responses per minute during the middle portion of each session. The researcher wants to build a model of cumulative responses over the course of a 30-minute session.

Walk through **Steps 1 through 7** of the 8-step modeling framework to set up and evaluate a model of cumulative responses over time:

1. **Step 1 — Define the question:** What specific behavioral question does this model address?
2. **Step 2 — Identify variables and parameters:** What are the dependent variable, independent variable, and parameter(s)?
3. **Step 3 — Specify the mathematical model:** Write down an explicit equation for cumulative responses as a function of time.
4. **Step 4 — Determine what data are needed:** What data would you need to collect to test this model?
5. **Step 5 — Fit the model to data:** Given the observed rate of 45 responses/min, compute predicted cumulative responses at {$$}t = 5, 10, 15, 20, 25,{/$$} and {$$}30{/$$} minutes.
6. **Step 6 — Evaluate the model:** What pattern would you look for in a plot of observed vs. predicted cumulative responses? What would systematic deviations tell you?
7. **Step 7 — Revise the model if needed:** If the pigeon warms up slowly at the start and slows down near the end of the session, how might you revise the model?

## Problem 3: Fitting the Generalized Matching Equation

**Difficulty:** Intermediate  |  **Week:** 2  |  **Modeling Steps:** 3, 5, 6

A pigeon is exposed to a concurrent VI VI schedule across five conditions. The response counts ({$$}B_1{/$$}, {$$}B_2{/$$}) and reinforcement counts ({$$}R_1{/$$}, {$$}R_2{/$$}) for each condition are:

| Condition | {$$}B_1{/$$} | {$$}B_2{/$$} | {$$}R_1{/$$} | {$$}R_2{/$$} |
|-----------|--------|--------|--------|--------|
| 1 | 40 | 58 | 20 | 40 |
| 2 | 55 | 50 | 30 | 30 |
| 3 | 70 | 35 | 45 | 20 |
| 4 | 80 | 28 | 55 | 15 |
| 5 | 62 | 45 | 35 | 25 |

The generalized matching equation is:

{$$}\log\!\left(\frac{B_1}{B_2}\right) = a \cdot \log\!\left(\frac{R_1}{R_2}\right) + \log b{/$$}

**(a)** Compute {$$}\log(B_1/B_2){/$$} and {$$}\log(R_1/R_2){/$$} for each condition (use base-10 logarithms).

**(b)** Using these values, estimate the sensitivity parameter {$$}a{/$$} (slope) and bias parameter {$$}\log b{/$$} (intercept) via least-squares linear regression.

**(c)** Interpret the values of {$$}a{/$$} and {$$}\log b{/$$}. What do they tell you about this pigeon's behavior?

## Problem 4: Fitting Mazur's Hyperbolic Discounting Model

**Difficulty:** Intermediate  |  **Week:** 2  |  **Modeling Steps:** 3, 5, 8

A participant completes a delay discounting task with a delayed amount of {$$}A = \{/$$}100$. The indifference points (the immediate amount judged equivalent to the delayed reward) at five delays are:

| Delay {$$}D{/$$} (days) | Indifference Point {$$}V{/$$} (\$) |
|---|---|
| 1 | 95 |
| 7 | 75 |
| 30 | 50 |
| 90 | 25 |
| 365 | 10 |

Mazur's hyperbolic discounting model is:

{$$}V = \frac{A}{1 + kD}{/$$}

**(a)** For each delay, solve the equation for {$$}k{/$$} and compute the implied value of {$$}k{/$$}.

**(b)** These five estimates of {$$}k{/$$} will not be identical. Explain why, and describe a strategy for obtaining a single best-fitting estimate of {$$}k{/$$}.

**(c)** Using nonlinear least squares (or a similar approach), estimate the best-fitting {$$}k{/$$}. Show the predicted {$$}V{/$$} at each delay and the residuals.

**(d)** Interpret the value of {$$}k{/$$} in behavioral terms.

## Problem 5: Rescorla-Wagner Acquisition

**Difficulty:** Introductory  |  **Week:** 4  |  **Modeling Steps:** 3, 5

A single CS is paired with a US over a series of acquisition trials. The Rescorla-Wagner model updates associative strength on each trial according to:

{$$}\Delta V = \alpha \beta (\lambda - V){/$$}

Use the following parameter values:

- {$$}\alpha = 0.3{/$$} (CS salience)
- {$$}\beta = 0.4{/$$} (US processing rate)
- {$$}\lambda = 100{/$$} (maximum associative strength supported by the US)
- {$$}V_0 = 0{/$$} (initial associative strength)

**(a)** Compute {$$}\Delta V{/$$} and the resulting {$$}V{/$$} after each of the first 5 trials. Present your results in a table.

**(b)** Does {$$}\Delta V{/$$} increase, decrease, or stay constant across trials? Explain why in terms of the model.

**(c)** Will {$$}V{/$$} ever exactly reach {$$}\lambda{/$$}? Why or why not?

## Problem 6: Logistic Acquisition Model

**Difficulty:** Intermediate  |  **Week:** 10  |  **Modeling Steps:** 3, 5, 8

A researcher models the acquisition of lever pressing in a rat using the logistic ordinary differential equation (ODE):

{$$}\frac{dx}{dt} = r \cdot x \cdot \left(1 - \frac{x}{K}\right){/$$}

where {$$}x(t){/$$} is the response rate (responses/min) at time {$$}t{/$$} (minutes), {$$}K = 40{/$$} responses/min is the carrying capacity, {$$}r = 0.10{/$$}/min is the intrinsic growth rate, and {$$}x_0 = 3{/$$} responses/min is the initial response rate.

**(a)** Write the analytical (closed-form) solution {$$}x(t){/$$} for this ODE with the given initial condition.

**(b)** Compute {$$}x(t){/$$} at {$$}t = 5, 15, 30,{/$$} and {$$}60{/$$} minutes.

**(c)** Find all equilibria of the ODE and determine whether each is stable or unstable. Justify your answers.

## Problem 7: Extinction as Exponential Decay

**Difficulty:** Advanced  |  **Week:** 10  |  **Modeling Steps:** 3, 5, 7, 8

A researcher models the extinction of lever pressing in a rat using the first-order linear ODE:

{$$}\frac{dx}{dt} = -a \cdot x{/$$}

where {$$}x(t){/$$} is the response rate (responses/min) at time {$$}t{/$$} (minutes), {$$}x(0) = 50{/$$} responses/min, and {$$}a = 0.2{/$$}/min.

**(a)** Solve this ODE analytically to obtain {$$}x(t){/$$}.

**(b)** Compute {$$}x(t){/$$} at {$$}t = 1, 2, 5, 10,{/$$} and {$$}20{/$$} minutes. Present your results in a table.

**(c)** Find the half-life of responding — that is, the time {$$}t_{1/2}{/$$} at which {$$}x(t_{1/2}) = \frac{1}{2} x(0){/$$}.

**(d)** Discuss at least two limitations of this model as a description of real extinction data. What features of empirical extinction curves does this model fail to capture?

## Problem 8: Comparing Discounting Models with AIC

**Difficulty:** Intermediate  |  **Week:** 6  |  **Modeling Steps:** 4, 8

Three models are fit to a set of delay discounting data consisting of {$$}n = 12{/$$} data points:

- **Model A** (hyperbolic, 1 parameter {$$}k{/$$}): log-likelihood {$$}= -18.2{/$$}
- **Model B** (exponential, 1 parameter {$$}k{/$$}): log-likelihood {$$}= -22.7{/$$}
- **Model C** (hyperboloid, 2 parameters {$$}k{/$$} and {$$}s{/$$}): log-likelihood {$$}= -16.5{/$$}

The Akaike Information Criterion is defined as:

{$$}\text{AIC} = -2 \ln \mathcal{L} + 2p{/$$}

where {$$}\ln \mathcal{L}{/$$} is the log-likelihood and {$$}p{/$$} is the number of free parameters.

**(a)** Compute the AIC for each model.

**(b)** Rank the models from best (lowest AIC) to worst (highest AIC).

**(c)** Compute the {$$}\Delta{/$$}AIC values (the difference between each model's AIC and the best model's AIC).

**(d)** Based on conventional guidelines for interpreting {$$}\Delta{/$$}AIC, which model(s) have substantial support? Which can be ruled out? Explain your reasoning.

## Problem 9: Fitting the Hursh-Silberberg Exponential Demand Equation

**Difficulty:** Intermediate  |  **Week:** 3  |  **Modeling Steps:** 3, 5, 8

A rat lever-presses for sucrose pellets on a series of fixed-ratio (FR) schedules. Each FR value represents the unit price {$$}C{/$$} (responses per pellet). The following data record the number of pellets consumed per session at each price:

| FR Price {$$}C{/$$} | Observed Consumption {$$}Q{/$$} (pellets/session) |
|---|---|
| 1 | 85 |
| 5 | 78 |
| 10 | 65 |
| 20 | 45 |
| 40 | 20 |
| 80 | 5 |
| 160 | 1 |

The Hursh and Silberberg (2008) exponential demand equation is:

{$$}\log Q = \log Q_0 + k\left(e^{-\alpha \cdot Q_0 \cdot C} - 1\right){/$$}

where {$$}Q_0{/$$} is the demand intensity (consumption at zero price), {$$}\alpha{/$$} is the rate of change in elasticity (the essential-value parameter), {$$}k{/$$} is the range of consumption in log units, and {$$}C{/$$} is price.

Assume nonlinear regression has yielded the following best-fit parameter estimates: {$$}Q_0 = 88.5{/$$}, {$$}\alpha = 0.00038{/$$}, {$$}k = 2.2{/$$}.

**(a)** Describe the expected shape of the demand curve when plotting {$$}\log Q{/$$} as a function of {$$}\log C{/$$}. What behavioral pattern does each region of the curve reflect?

**(b)** Using the best-fit parameters, compute the predicted {$$}\log Q{/$$} and predicted {$$}Q{/$$} at each of the seven FR prices. Present your results in a table.

**(c)** Compute the residual ({$$}Q_{\text{obs}} - Q_{\text{pred}}{/$$}) at each price. Then compute the sum of squared residuals {$$}\text{SS}_{res}{/$$}.

**(d)** Compute the essential value {$$}EV = 1/(Q_0 \cdot \alpha \cdot k){/$$}. Interpret what this value means in the context of demand for sucrose.

**(e)** The price at which maximal responding occurs is approximated by:

{$$}P_{\max} = \frac{1}{\alpha \cdot Q_0 \cdot k} \cdot \left(e^{-1}\right) \approx \frac{0.368}{\alpha \cdot Q_0 \cdot k}{/$$}

Compute {$$}P_{\max}{/$$} and explain its behavioral significance. At prices below {$$}P_{\max}{/$$}, is demand elastic or inelastic? What about above {$$}P_{\max}{/$$}?

## Problem 10: Bayesian Updating for Functional Assessment

**Difficulty:** Intermediate  |  **Week:** 8  |  **Modeling Steps:** 3, 5, 8

A clinician is conducting a descriptive functional assessment of a child's problem behavior. Before collecting data, the clinician has no strong prior belief about whether the behavior is maintained by escape from demands. She represents her initial uncertainty using a {$$}\text{Beta}(2, 2){/$$} prior distribution on {$$}\theta{/$$}, where {$$}\theta{/$$} is the probability that a given interval of problem behavior is followed by escape (i.e., is consistent with escape-maintained behavior).

The clinician then observes {$$}n = 15{/$$} intervals in which problem behavior occurs. Of these, {$$}y = 12{/$$} intervals show problem behavior followed by escape from demands, and {$$}n - y = 3{/$$} intervals show problem behavior **not** followed by escape.

**(a)** Write the probability density function of the {$$}\text{Beta}(2,2){/$$} prior. Compute its mean and variance. Sketch or describe its shape.

**(b)** Using Beta-Binomial conjugacy, derive the posterior distribution for {$$}\theta{/$$} after observing the data. State the updated parameters explicitly.

**(c)** Compute the posterior mean. Then compute an approximate 95% credible interval for {$$}\theta{/$$} using the formula:

{$$}\text{CI} \approx \hat{\theta} \pm 1.96 \sqrt{\frac{\hat{\theta}(1 - \hat{\theta})}{a' + b'}}{/$$}

where {$$}\hat{\theta}{/$$} is the posterior mean and {$$}a'{/$$} and {$$}b'{/$$} are the posterior Beta parameters.

**(d)** Suppose instead the clinician had used a more informative prior, {$$}\text{Beta}(10, 10){/$$}, reflecting a strong prior belief that {$$}\theta \approx 0.5{/$$}. Without doing full calculations, explain qualitatively how the posterior mean and the width of the credible interval would change relative to part (c).

**(e)** Compare the Bayesian posterior mean from part (c) to the simple sample proportion {$$}\hat{p} = 12/15 = 0.80{/$$}. Why do they differ? Under what conditions would the difference between the Bayesian estimate and the sample proportion be largest?

## Problem 11: Multilevel Model for Nested Behavioral Data

**Difficulty:** Intermediate  |  **Week:** 9  |  **Modeling Steps:** 3, 5, 8

Five participants (P1--P5) each complete 6 sessions on a variable-interval 30-s (VI-30s) schedule of reinforcement. The response rates (responses per minute) for each participant across sessions are:

| Session | P1 | P2 | P3 | P4 | P5 |
|---|---|---|---|---|---|
| 1 | 22 | 41 | 15 | 33 | 28 |
| 2 | 24 | 38 | 17 | 31 | 30 |
| 3 | 23 | 40 | 14 | 34 | 27 |
| 4 | 25 | 42 | 16 | 32 | 29 |
| 5 | 24 | 39 | 18 | 33 | 31 |
| 6 | 22 | 40 | 16 | 33 | 29 |

**(a)** Compute the mean response rate for each participant and the grand mean across all 30 observations.

**(b)** Compute the between-participant variance {$$}\tau^2{/$$} (the variance of the five participant means around the grand mean) and the within-participant variance {$$}\sigma^2{/$$} (the average of each participant's session-level variance). Use the population variance formula (dividing by {$$}N{/$$}, not {$$}N-1{/$$}) for {$$}\tau^2{/$$} and the sample variance formula (dividing by {$$}n-1{/$$}) for each participant's within-person variance, then average those.

**(c)** Compute the intraclass correlation coefficient:

{$$}\text{ICC} = \frac{\tau^2}{\tau^2 + \sigma^2}{/$$}

Interpret this value. What does a high ICC imply about the structure of these data?

**(d)** Suppose a researcher ignores the nesting and simply computes a single pooled mean and pooled variance across all 30 observations. Explain why this would be misleading. What specific inferential problems would arise?

**(e)** Now suppose the researcher wants to test whether response rate changes across sessions (i.e., whether there is a linear trend over time). Write the two-level multilevel model equations. Define all terms and explain the role of each level.

## Problem 12: Building a DRA Model from Scratch

**Difficulty:** Advanced  |  **Week:** 7  |  **Modeling Steps:** 1, 2, 3, 4, 5, 6

A clinic implements Differential Reinforcement of Alternative behavior (DRA) for a client whose problem behavior is maintained by attention. Currently, problem behavior occurs at {$$}x_0 = 8{/$$} episodes/hour and the alternative behavior (manding for attention) occurs at {$$}y_0 = 2{/$$} episodes/hour.

The treatment works as follows: attention is withheld for problem behavior (extinction) and delivered contingent on the alternative behavior (reinforcement). Under these contingencies, problem behavior decays at a rate proportional to its current level, and the alternative behavior grows at a rate proportional to its current level but is bounded by a carrying capacity.

The proposed differential equations are:

{$$}\frac{dx}{dt} = -\delta \cdot x{/$$}

{$$}\frac{dy}{dt} = \rho \cdot y \cdot \left(1 - \frac{y}{K}\right){/$$}

where {$$}x(t){/$$} is problem behavior rate (episodes/hour), {$$}y(t){/$$} is alternative behavior rate (episodes/hour), {$$}\delta{/$$} is the decay rate constant, {$$}\rho{/$$} is the growth rate constant, and {$$}K{/$$} is the carrying capacity for the alternative behavior.

**(a)** Identify the state variables, parameters, independent variable, and dependent variables in this model. Draw a flow diagram (stock-and-flow) showing how each behavior changes over time.

**(b)** Derive or justify the two differential equations above. Explain the biological/behavioral rationale for each term.

**(c)** State at least four assumptions embedded in this model.

**(d)** Check the dimensional consistency of both differential equations. Show that the units on the left-hand side match the units on the right-hand side for each equation.

**(e)** Using the parameter values {$$}\delta = 0.15 \text{ hr}^{-1}{/$$}, {$$}\rho = 0.30 \text{ hr}^{-1}{/$$}, and {$$}K = 12{/$$} episodes/hour, solve for {$$}x(t){/$$} analytically. Then find the equilibria of the {$$}y{/$$} equation and determine their stability.

**(f)** Using your solution from part (e), predict at what time problem behavior drops below 1 episode/hour. Interpret this result in clinical terms.

## Problem 13: Q-Learning on a Concurrent Schedule

**Difficulty:** Advanced  |  **Week:** 11  |  **Modeling Steps:** 3, 5, 8

An agent chooses between two levers on a concurrent variable-ratio schedule. The Left lever pays off with probability {$$}p_L = 0.10{/$$} per trial (reward {$$}= 1{/$$}), and the Right lever pays off with probability {$$}p_R = 0.05{/$$} per trial (reward {$$}= 1{/$$}). The agent uses a Q-learning algorithm with the following parameters:

- Learning rate: {$$}\alpha = 0.1{/$$}
- Discount factor: {$$}\gamma = 0{/$$} (no future discounting; only immediate reward matters)
- Softmax temperature: {$$}\tau = 0.5{/$$}
- Initial Q-values: {$$}Q_L = Q_R = 0{/$$}

The Q-value update rule is:

{$$}Q(a) \leftarrow Q(a) + \alpha \left[ r + \gamma \max_{a'} Q(a') - Q(a) \right]{/$$}

Since {$$}\gamma = 0{/$$}, this simplifies to:

{$$}Q(a) \leftarrow Q(a) + \alpha \left[ r - Q(a) \right]{/$$}

The softmax action selection rule is:

{$$}P(\text{Left}) = \frac{e^{Q_L / \tau}}{e^{Q_L / \tau} + e^{Q_R / \tau}}{/$$}

The following trial sequence is observed:

| Trial | Choice | Reward |
|-------|--------|--------|
| 1 | Left | 0 |
| 2 | Left | 1 |
| 3 | Right | 0 |
| 4 | Left | 1 |

**(a)** Compute the Q-value updates for both {$$}Q_L{/$$} and {$$}Q_R{/$$} after each of the 4 trials. Present your results in a table.

**(b)** After trial 4, compute the softmax choice probabilities {$$}P(\text{Left}){/$$} and {$$}P(\text{Right}){/$$}.

**(c)** Predict the steady-state Q-values analytically. With {$$}\gamma = 0{/$$}, explain why {$$}Q(a){/$$} converges to the expected immediate reward for action {$$}a{/$$}.

**(d)** Using the steady-state Q-values, compute the steady-state choice probability ratio {$$}P(\text{Left}) / P(\text{Right}){/$$}. Compare this to the reinforcement ratio {$$}p_L / p_R{/$$}.

**(e)** Does this Q-learning agent exhibit matching (i.e., the choice ratio equals the reinforcement ratio)? Explain why or why not, and discuss the role of the {$$}\gamma = 0{/$$} assumption and the softmax temperature {$$}\tau{/$$} in determining the degree of deviation from matching.

## Problem 14: Decision Tree vs. Logistic Regression for Treatment Response

**Difficulty:** Intermediate  |  **Week:** 12  |  **Modeling Steps:** 4, 8

A clinic collects data on 20 cases to predict treatment outcome (Success or Failure) based on three features: baseline problem behavior rate (High or Low), behavioral function (Attention or Escape), and treatment type (FCT or DRA). The data are:

| Case | Baseline | Function | Treatment | Outcome |
|------|----------|----------|-----------|---------|
| 1 | High | Attention | FCT | Success |
| 2 | High | Attention | FCT | Success |
| 3 | High | Escape | FCT | Failure |
| 4 | Low | Attention | FCT | Success |
| 5 | Low | Escape | FCT | Success |
| 6 | High | Escape | DRA | Success |
| 7 | High | Attention | DRA | Failure |
| 8 | Low | Attention | DRA | Success |
| 9 | Low | Escape | DRA | Failure |
| 10 | High | Escape | FCT | Failure |
| 11 | Low | Attention | FCT | Success |
| 12 | High | Attention | FCT | Success |
| 13 | Low | Escape | DRA | Success |
| 14 | High | Escape | DRA | Success |
| 15 | Low | Attention | DRA | Success |
| 16 | High | Attention | DRA | Failure |
| 17 | Low | Escape | FCT | Success |
| 18 | High | Escape | FCT | Success |
| 19 | Low | Attention | FCT | Success |
| 20 | Low | Escape | DRA | Failure |

**(a)** Compute the Gini impurity of the full dataset (all 20 cases).

**(b)** Compute the Gini impurity for a split on the "Function" feature. Determine whether this split reduces impurity compared to the unsplit dataset, and compute the information gain (reduction in Gini impurity).

**(c)** A logistic regression model achieves 80% accuracy on the training data (16 of 20 correct). A decision tree achieves 95% accuracy (19 of 20 correct). Explain why the tree's higher training accuracy does not necessarily mean it is the better model.

**(d)** The clinic collects 10 new cases. On these new cases, the decision tree achieves only 65% accuracy, while the logistic regression achieves 75% accuracy. Explain what has happened, using the concept of overfitting.

**(e)** Based on all of the above, recommend which model the clinic should deploy for future predictions. Justify your recommendation.

## Problem 15: Dynamical Systems Meet Model Comparison

**Difficulty:** Advanced  |  **Week:** 10  |  **Modeling Steps:** 1, 3, 5, 8

A researcher studies preference acquisition on a two-alternative concurrent variable-interval (conc VI 30-s VI 120-s) schedule. Over 20 consecutive 5-minute blocks, she records the proportion of responses allocated to the richer alternative, {$$}B_1 / (B_1 + B_2){/$$}. The data show an initial proportion near 0.50 (indifference) that gradually shifts toward the matching-law equilibrium across blocks. The following table gives the observed response proportions:

| Block ({$$}t{/$$}) | Proportion {$$}p(t){/$$} |
|:-----------:|:------------------:|
| 1  | 0.50 |
| 2  | 0.52 |
| 3  | 0.55 |
| 4  | 0.58 |
| 5  | 0.61 |
| 6  | 0.64 |
| 7  | 0.67 |
| 8  | 0.69 |
| 9  | 0.71 |
| 10 | 0.73 |
| 11 | 0.74 |
| 12 | 0.75 |
| 13 | 0.76 |
| 14 | 0.77 |
| 15 | 0.78 |
| 16 | 0.78 |
| 17 | 0.79 |
| 18 | 0.79 |
| 19 | 0.80 |
| 20 | 0.80 |

**(a)** **Static model (Weeks 2-3).** The generalized matching law predicts the equilibrium response allocation:

{$$}\log\left(\frac{B_1}{B_2}\right) = a \cdot \log\left(\frac{R_1}{R_2}\right) + \log\,b{/$$}

where {$$}R_1/R_2 = 120/30 = 4{/$$} is the reinforcement rate ratio. Assuming strict matching ({$$}a = 1{/$$}, {$$}\log\,b = 0{/$$}), compute the predicted equilibrium proportion {$$}p^* = B_1/(B_1 + B_2){/$$}. This static model assigns {$$}p^* {/$$} to every block. Compute the residual sum of squares (RSS) of this static prediction against all 20 data points.

**(b)** **Dynamical model (Week 10).** Formulate a logistic ordinary differential equation (ODE) describing the trajectory of {$$}p(t){/$$} toward the matching equilibrium:

{$$}\frac{dp}{dt} = r \cdot p(1 - p)\left(\frac{p^* - p}{p^*(1 - p^*)}\right){/$$}

where {$$}r{/$$} is a rate parameter governing the speed of acquisition and {$$}p^* = 0.80{/$$} is the equilibrium. Explain the role of each factor in the equation. Show that {$$}p = 0{/$$}, {$$}p = 1{/$$}, and {$$}p = p^*{/$$} are all fixed points, and determine which is stable.

**(c)** Using a simple forward-Euler approximation with step size {$$}\Delta t = 1{/$$} block:

{$$}p(t+1) = p(t) + r \cdot p(t)(1 - p(t))\left(\frac{p^* - p(t)}{p^*(1-p^*)}\right) \cdot \Delta t{/$$}

Starting from {$$}p(1) = 0.50{/$$} and using {$$}r = 0.30{/$$}, compute {$$}p(t){/$$} for blocks {$$}t = 1{/$$} through {$$}t = 20{/$$}. Report your values to two decimal places. Then compute the RSS for this dynamical model against the same 20 data points.

**(d)** **Model comparison (Week 6).** The static model has {$$}k_{\text{static}} = 0{/$$} free parameters (all values are derived from the schedule). The dynamical model has {$$}k_{\text{dyn}} = 1{/$$} free parameter ({$$}r{/$$}). Using the small-sample AIC formula:

{$$}\text{AIC}_c = n \ln\left(\frac{\text{RSS}}{n}\right) + 2k + \frac{2k(k+1)}{n - k - 1}{/$$}

compute AIC{$$}_c{/$$} for both models. Which model is preferred? Compute the AIC{$$}_c{/$$} difference ({$$}\Delta{/$$}AIC{$$}_c{/$$}) and the evidence ratio {$$}e^{-\Delta/2}{/$$}.

**(e)** **Synthesis.** Discuss: Under what experimental conditions would the static matching-law description be sufficient, and under what conditions does a dynamical model add scientific value? Consider factors such as session length, the research question (steady-state vs. acquisition), and the tradeoff between parsimony and explanatory scope. When, if ever, should a researcher prefer the model with a higher AIC?

## Problem 16: From Mechanism to Prediction: Comparing Mechanistic and ML Approaches

**Difficulty:** Advanced  |  **Week:** 12  |  **Modeling Steps:** 1, 2, 3, 5, 8

A laboratory dataset contains 60 sessions of pigeon choice on concurrent VI VI schedules. Each session varies in the reinforcement-rate ratio ({$$}R_1/R_2{/$$}) and the overall reinforcement rate ({$$}R_1 + R_2{/$$}). For each session, the dataset records the following features and outcome:

| Feature | Description |
|---------|-------------|
| {$$}\log(R_1/R_2){/$$} | Log reinforcement-rate ratio (ranges from {$$}-1.2{/$$} to {$$}1.2{/$$}) |
| {$$}R_{\text{total}}{/$$} | Total reinforcers per hour (ranges from 20 to 120) |
| Session length | Session duration in minutes (30 or 60) |
| **Outcome:** {$$}\log(B_1/B_2){/$$} | Log response-rate ratio (the quantity to be predicted) |

A random subset of 40 sessions is used for training; the remaining 20 sessions are the test set.

The following results are obtained by three modeling approaches:

**Model A — Generalized Matching Law (Week 2):**

{$$}\log\left(\frac{B_1}{B_2}\right) = a \cdot \log\left(\frac{R_1}{R_2}\right) + \log\,b{/$$}

Fitted on the 40 training sessions: {$$}\hat{a} = 0.85{/$$}, {$$}\log\,\hat{b} = 0.03{/$$}, training {$$}R^2 = 0.91{/$$}, test {$$}R^2 = 0.89{/$$}.

**Model B — Q-Learning Agent (Week 11):**

A Q-learning agent with {$$}\alpha = 0.10{/$$} (learning rate) and {$$}\beta = 5.0{/$$} (inverse temperature in a softmax choice rule) is trained on the 40 training sessions by simulating each session's reinforcement schedule. The agent's steady-state choice proportions are converted to {$$}\log(B_1/B_2){/$$}. Training {$$}R^2 = 0.78{/$$}, test {$$}R^2 = 0.75{/$$}.

**Model C — Decision Tree Regressor (Week 12):**

A decision tree with maximum depth = 4 is trained on all four features ({$$}\log(R_1/R_2){/$$}, {$$}R_{\text{total}}{/$$}, session length) to predict {$$}\log(B_1/B_2){/$$}. Training {$$}R^2 = 0.97{/$$}, test {$$}R^2 = 0.82{/$$}.

**(a)** **Mechanistic model assessment.** The generalized matching law uses only {$$}\log(R_1/R_2){/$$} as a predictor and has 2 parameters ({$$}a{/$$} and {$$}\log\,b{/$$}). Explain why this model ignores {$$}R_{\text{total}}{/$$} and session length. Is this a limitation or a strength? Under what circumstances could ignoring these features lead to systematic prediction errors?

**(b)** **Q-learning analysis.** The Q-learning agent has lower {$$}R^2{/$$} than the other two models on both training and test sets. Explain why a reinforcement-learning model might underperform a simple regression on this task, despite being a more "detailed" model of the choice process. In your answer, address the role of the learning rate {$$}\alpha{/$$}, the inverse temperature {$$}\beta{/$$}, and the fact that the agent must learn from simulated experience rather than being directly fitted to the response ratios.

**(c)** **Decision tree analysis.** The decision tree achieves the highest training {$$}R^2{/$$} (0.97) but its test {$$}R^2{/$$} (0.82) drops substantially. Meanwhile, the matching law's test {$$}R^2{/$$} (0.89) exceeds the tree's. Explain this pattern in terms of overfitting, and describe how the tree's use of all four features contributes to this outcome. Propose one modification to the decision-tree approach that might improve its test performance.

**(d)** **The prediction-explanation gap.** Suppose the matching law and the decision tree had identical test {$$}R^2{/$$} values. A colleague argues that in this case the two models are "equally good." Construct a detailed argument for why this claim is incorrect. Address what each model does and does not reveal about the behavioral process generating the data. In your answer, distinguish between prediction (forecasting outcomes) and explanation (identifying the causal or functional mechanism).

**(e)** **Synthesis and recommendations.** A new researcher joins the lab and asks: "Which model should I use?" Argue that the answer depends on the research goal. For each of the following goals, recommend one of the three models and justify your choice:

1. Predicting choice allocation on a new schedule not yet run in the lab.
2. Understanding the real-time learning process by which pigeons acquire preference.
3. Screening a large set of environmental variables to discover which ones matter for choice.
4. Publishing a theoretical account of the matching law in a behavior-analytic journal.
