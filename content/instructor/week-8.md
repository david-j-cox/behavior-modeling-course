---
title: "Instructor Notes: Week 8 — Probability Theory and Probabilistic Models"
week: 8
---

## Lecture Objectives

By the end of this lecture, students should be able to:

- Distinguish between deterministic and stochastic models and explain why behavioral data require probabilistic treatment.
- Describe the Poisson process and derive predictions about response counts and inter-response time distributions from a given rate parameter.
- Apply Bayes' theorem to update a prior belief about a behavioral parameter in light of observed data, and interpret the resulting posterior distribution.
- Explain the logic of maximum likelihood estimation and compute the MLE for a Poisson rate from count data.
- Define sensitivity ($d'$) and criterion ($c$) in signal detection theory and explain their relevance to behavioral observation and discrimination tasks.

---

## Suggested Lecture Walkthrough (~60 minutes)

### Opening: Why Behavior Is Variable (10 min)

Start with a concrete question: "If you run the same rat on the same VI schedule for 30 sessions, will you get the same response rate every session?" The answer is obviously no. Ask students to generate reasons for the variability. List them on the board. Then make the key point: deterministic models predict one number; the organism produces a different number every time. Probabilistic models close this gap by predicting distributions rather than point values.

Show a histogram of response counts across sessions for a single organism. The spread is the phenomenon. A deterministic model gives you the center of the histogram; a probabilistic model gives you the whole shape.

### Probability Distributions for Behavior (10 min)

Briefly introduce the three key distributions: binomial (discrete trials), Poisson (counts in time), and normal (continuous measurement). For each, give a one-sentence behavioral example. Spend the most time on the Poisson distribution, since it will be the running example.

Write the Poisson PMF on the board:

$$P(k) = \frac{\lambda^k e^{-\lambda}}{k!}$$

Compute a few values by hand for $\lambda = 5$: $P(0)$, $P(5)$, $P(10)$. Plot them. Emphasize that $\lambda$ is both the mean and the variance---this is a testable prediction, not just a convenience.

### The Poisson Process as a Model of Response Timing (15 min)

This is the core of the lecture. Walk through the 8-step framework applied to modeling lever presses as a Poisson process (the chapter's main framework example).

Key points to emphasize:
- The three defining properties of a Poisson process (events one at a time, independence, rate proportional to interval length).
- Two consequences: Poisson-distributed counts and exponentially distributed IRTs.
- The exponential IRT distribution has a specific, testable shape: many short IRTs, few long ones, mode at zero.
- Show the connection between rate and mean IRT: $\bar{\tau} = 1/\lambda$.

If time permits, show a real IRT histogram from operant data and compare it to the exponential prediction. The departures (excess short IRTs from bursting, excess long IRTs from pausing) motivate more complex models later in the course.

### Bayes' Theorem with a Concrete Example (15 min)

Transition by asking: "We used a Poisson model with rate $\lambda$. Where does $\lambda$ come from? How do we estimate it, and how certain are we about the estimate?"

Introduce Bayes' theorem with the functional analysis example from the chapter. Walk through the three components:
- **Prior:** What you believed before collecting data. Use the Beta(1,1) uniform prior. Draw it.
- **Likelihood:** The probability of the data given each possible parameter value. For 8/10 successes, draw the binomial likelihood as a function of $p$.
- **Posterior:** The product of prior and likelihood (normalized). Draw Beta(9,3). Show how the posterior is shifted and concentrated relative to the prior.

Then update with a second batch of data (7/10). Show that the posterior narrows: Beta(16,6). Emphasize the iterative nature---each posterior becomes the next prior.

**Common confusion: prior vs. posterior.** Students often struggle with the idea that "beliefs" are part of a statistical analysis. Clarify: the prior represents your state of information, not a personal preference. Two researchers with the same prior and the same data will get the same posterior. The prior is a modeling choice, like choosing a distribution or defining the scope of the model.

### Brief Introduction to MLE (10 min)

Introduce the likelihood function and the idea of maximizing it. Use the Poisson rate example: given counts of 3, 5, 2, 4, 6, 3, 4, 5, 2, 4, show that the MLE is the sample mean (3.8). Walk through the calculus on the board---take the derivative of the log-likelihood, set it to zero, solve.

Emphasize the key distinction: **likelihood is not probability.** $P(x|\theta)$ is a probability distribution over $x$; $L(\theta|x)$ is a function of $\theta$. This is the single most common confusion in this material. Repeat it multiple times.

Briefly mention the diagnostic: compare observed variance to predicted variance. If they do not match, the model may be wrong. This connects back to Step 8 of the framework.

### Common Confusions to Address

- **Likelihood vs. probability.** This bears repeating. The likelihood of $\theta = 0.5$ given data is not the probability that $\theta = 0.5$. Likelihood tells you how well a parameter value explains the data, not how probable the parameter value is.
- **Prior vs. posterior.** The prior is the input; the posterior is the output. The prior is not "the answer"---it is the starting point that gets updated by the data.
- **When to use Poisson vs. normal.** Poisson is for counts of events (non-negative integers). Normal is for continuous measurements or for counts that are large enough that the Poisson is well-approximated by a normal. As a rule of thumb: if $\lambda > 20$, the Poisson is approximately normal with mean $\lambda$ and variance $\lambda$.
- **"Bayesian" does not mean "subjective."** Bayesian inference is a mathematical framework. The prior can be subjective, but it can also be based on previous data, theory, or convention. The posterior is a mathematical consequence of the prior and the data.

### Reference

Otto, A. R., & Day, R. S. (2007). Chapters on probability theory and stochastic processes (pp. 513--607) provide the mathematical background for this week. Students comfortable with calculus should read these chapters. Students who are not should focus on the conceptual material and worked examples in the course chapter.

---

## Discussion Prompts

1. **Variability as information.** We often treat session-to-session variability in response rate as "noise" to be averaged away. Under what circumstances might the variability itself be the phenomenon of interest? Can you think of a clinical or applied scenario where the spread of a distribution matters more than the mean?

2. **Choosing priors.** In the Bayesian updating example, we used a uniform prior. What if a previous study had already estimated the probability of attention maintaining problem behavior at 0.60 with reasonable confidence? How would you construct a prior from that information, and how would it change the posterior? Is it "cheating" to use prior information?

3. **Poisson violations.** VI schedule performance is often described as "random responding," which is consistent with a Poisson process. But many organisms show clear post-reinforcement pauses, response bursts, and within-session rate changes. Does this mean the Poisson model is useless? How do you decide when a model is "wrong enough" to abandon versus "wrong but useful"?

4. **Signal detection in practice.** If two observers have high agreement (say, 90% on an interval-by-interval basis), does that guarantee they are both accurate? How could signal detection theory reveal problems that a simple agreement percentage would miss?

---

## In-Class Demonstrations

### Demonstration 1: Coin-Flip Bayesian Updating

**Materials:** A coin (or simulated coin flips), whiteboard or projected plot.

**Procedure:**
1. Tell students you have a coin that may or may not be fair. Their task is to estimate the probability of heads, $p$.
2. Start with a uniform prior: Beta(1,1). Draw it on the board (flat line from 0 to 1).
3. Flip the coin. If heads, update to Beta(2,1). If tails, update to Beta(1,2). Draw the new posterior.
4. Continue flipping, updating the posterior after each flip. After 5 flips, pause and ask students to describe what has happened to the distribution.
5. After 10 flips, the posterior should be noticeably concentrated. After 20 flips, it should be quite peaked.
6. Ask: "At what point would you be willing to declare the coin is fair (or unfair)?" Connect this to the idea that Bayesian updating gives you a continuous measure of certainty, not a binary decision.

**Key teaching points:**
- The posterior gets narrower (more certain) with more data.
- A single flip barely moves the posterior; many flips move it a lot.
- If the coin is fair, the posterior centers on 0.5. If unfair, it centers elsewhere.
- The prior matters less as data accumulate.

### Demonstration 2: Computing Poisson Probabilities for Response Counts

**Materials:** Calculator or spreadsheet projected on screen.

**Procedure:**
1. Present a scenario: "A rat presses a lever at an average rate of 8 presses per minute. If presses follow a Poisson process, what is the probability of observing exactly 5 presses in the next minute?"
2. Have students compute by hand: $P(5) = \frac{8^5 \cdot e^{-8}}{5!} = \frac{32768 \cdot 0.000335}{120} \approx 0.0916$.
3. Ask: "What is the probability of 0 presses?" $P(0) = e^{-8} \approx 0.000335$. Very unlikely---consistent with a rat that is actively responding.
4. Ask: "What is the probability of 15 or more presses?" This requires summing or using a complement. Use a calculator or table. The answer is approximately 0.011. Rare but not impossible.
5. Now ask the diagnostic question: "If you observed a minute with 15 presses, should you be surprised? What might that suggest about the model?" (Answer: it might suggest the rate is not constant---perhaps the rat had a burst of rapid responding during that minute.)

**Key teaching points:**
- The Poisson distribution is skewed for small $\lambda$, approximately symmetric for large $\lambda$.
- Extreme counts are possible but improbable under the model. Observing them suggests the model may be wrong.
- The Poisson predicts variance = mean. Checking this is a quick diagnostic.

---

## Transition to Lab

In this week's lab, students will work with real or simulated IRT data from operant sessions. They will:

1. Fit a Poisson model to binned response counts and assess goodness of fit by comparing observed and predicted variances.
2. Plot an observed IRT histogram against the predicted exponential distribution and evaluate the fit visually.
3. Conduct a Bayesian updating exercise: starting from a uniform prior, update sequentially across multiple data batches and plot the evolution of the posterior distribution.
4. Compute the MLE for a Poisson rate parameter and construct a confidence interval.

The lab reinforces the lecture by requiring students to apply the formulas to data, check assumptions, and interpret results. The key lab takeaway is that probabilistic models make specific, testable predictions---not just about the mean, but about the variance and the full shape of the distribution. When those predictions fail, the failure is informative.
