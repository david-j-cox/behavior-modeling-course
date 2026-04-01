---
id: 2
---

## Solution: Setting Up a Model of Cumulative Responding

### Step 1 — Define the Question

The question is: **How does the cumulative number of responses grow over the course of a 30-minute session for a pigeon responding on a VI-60s schedule?**

More specifically, can cumulative responding be predicted from elapsed time using a simple mathematical function?

### Step 2 — Identify Variables and Parameters

- **Dependent variable:** $C(t)$ = cumulative number of responses at time $t$
- **Independent variable:** $t$ = elapsed time in the session (minutes), ranging from 0 to 30
- **Parameter:** $r$ = response rate (responses/min). The observed value is $r = 45$ responses/min.

### Step 3 — Specify the Mathematical Model

The simplest model assumes a constant response rate:

$$C(t) = r \cdot t$$

With the observed rate:

$$C(t) = 45t$$

This is a linear model predicting that cumulative responses increase at a steady rate of 45 responses per minute throughout the session.

### Step 4 — Determine What Data Are Needed

To test this model, the researcher would need:

- **Response timestamps** for every lever press during the 30-minute session (or, at minimum, cumulative response counts at regular time intervals such as every minute).
- **Multiple sessions** to assess within-session variability and between-session reliability.
- Ideally, the data would come from stable-state performance (i.e., after extended training on the VI-60s schedule).

### Step 5 — Fit the Model / Generate Predictions

Using $C(t) = 45t$, the predicted cumulative responses are:

| $t$ (min) | $C(t) = 45t$ (responses) |
|---|---|
| 5 | $45 \times 5 = 225$ |
| 10 | $45 \times 10 = 450$ |
| 15 | $45 \times 15 = 675$ |
| 20 | $45 \times 20 = 900$ |
| 25 | $45 \times 25 = 1{,}125$ |
| 30 | $45 \times 30 = 1{,}350$ |

The model predicts a total of 1,350 responses over the full session.

### Step 6 — Evaluate the Model

To evaluate the model, plot observed cumulative responses against predicted cumulative responses (or against time, with the model line overlaid).

- **If the model fits well:** The observed cumulative record should be approximately linear, closely tracking the line $C(t) = 45t$. Residuals (observed minus predicted) should be small, randomly scattered, and show no systematic pattern.
- **Systematic deviations to look for:**
  - If the cumulative record curves **upward** early in the session (observed < predicted, then observed > predicted), the pigeon is warming up — the rate starts below 45 and increases.
  - If the record curves **downward** late in the session (observed < predicted toward the end), the pigeon is slowing due to fatigue or satiation.
  - An S-shaped cumulative record would indicate both warm-up and fatigue.

### Step 7 — Revise the Model

If the pigeon warms up slowly and slows down near the end, the constant-rate model is inadequate. Several revisions are possible:

**Option A — Piecewise linear model:** Divide the session into phases (warm-up, steady state, fatigue) with different rates:

$$C(t) = \begin{cases} r_1 \cdot t & 0 \leq t \leq t_1 \\ C(t_1) + r_2 \cdot (t - t_1) & t_1 < t \leq t_2 \\ C(t_2) + r_3 \cdot (t - t_2) & t_2 < t \leq 30 \end{cases}$$

where $r_1 < r_2 > r_3$.

**Option B — Logistic growth model:** A smooth function that starts slowly, accelerates, and then levels off:

$$C(t) = \frac{C_{\max}}{1 + e^{-r(t - t_m)}}$$

where $C_{\max}$ is the asymptotic total responses, $r$ controls the steepness, and $t_m$ is the inflection point.

**Option C — Polynomial model:** Fit a quadratic or cubic polynomial to capture curvature:

$$C(t) = at^2 + bt + c$$

A negative quadratic coefficient $a < 0$ would capture a rate that slows over time.

The choice among these revisions would depend on which provides the best fit while remaining interpretable in behavioral terms.
