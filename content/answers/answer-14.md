---
id: 14
---

## Solution: Decision Tree vs. Logistic Regression for Treatment Response

### (a) Gini Impurity of the Full Dataset

First, count the outcomes in the 20 cases:

- **Success:** Cases 1, 2, 4, 5, 6, 8, 11, 12, 13, 14, 15, 17, 18, 19 = **14 cases**
- **Failure:** Cases 3, 7, 9, 10, 16, 20 = **6 cases**

The proportions are:

$$p_{\text{Success}} = \frac{14}{20} = 0.70$$

$$p_{\text{Failure}} = \frac{6}{20} = 0.30$$

The Gini impurity is:

$$G = 1 - \sum_i p_i^2 = 1 - \left(p_{\text{Success}}^2 + p_{\text{Failure}}^2\right)$$

$$G = 1 - (0.70^2 + 0.30^2) = 1 - (0.49 + 0.09) = 1 - 0.58 = 0.42$$

The Gini impurity of the full dataset is **0.42**.

### (b) Gini Impurity for a Split on "Function"

We split the 20 cases by the Function feature into two groups:

**Function = Attention** (Cases 1, 2, 4, 7, 8, 11, 12, 15, 16, 19):

- Success: Cases 1, 2, 4, 8, 11, 12, 15, 19 = **8 cases**
- Failure: Cases 7, 16 = **2 cases**
- Total: **10 cases**

$$p_{\text{S}} = \frac{8}{10} = 0.80, \quad p_{\text{F}} = \frac{2}{10} = 0.20$$

$$G_{\text{Attention}} = 1 - (0.80^2 + 0.20^2) = 1 - (0.64 + 0.04) = 1 - 0.68 = 0.32$$

**Function = Escape** (Cases 3, 5, 6, 9, 10, 13, 14, 17, 18, 20):

- Success: Cases 5, 6, 13, 14, 17, 18 = **6 cases**
- Failure: Cases 3, 9, 10, 20 = **4 cases**
- Total: **10 cases**

$$p_{\text{S}} = \frac{6}{10} = 0.60, \quad p_{\text{F}} = \frac{4}{10} = 0.40$$

$$G_{\text{Escape}} = 1 - (0.60^2 + 0.40^2) = 1 - (0.36 + 0.16) = 1 - 0.52 = 0.48$$

**Weighted Gini impurity after the split:**

Each subset has 10 of 20 cases, so the weights are $10/20 = 0.50$ each:

$$G_{\text{split}} = \frac{10}{20} \times G_{\text{Attention}} + \frac{10}{20} \times G_{\text{Escape}}$$

$$G_{\text{split}} = 0.50 \times 0.32 + 0.50 \times 0.48 = 0.16 + 0.24 = 0.40$$

**Information gain (reduction in Gini impurity):**

$$\Delta G = G_{\text{parent}} - G_{\text{split}} = 0.42 - 0.40 = 0.02$$

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

- **Decision tree:** Training accuracy = 95%, test accuracy = 65%. The gap is **30 percentage points**, indicating severe overfitting. The tree's performance on new data is actually worse than what one would get by simply predicting "Success" for every case (which would yield $70\%$ accuracy if the base rate holds in the new sample).
- **Logistic regression:** Training accuracy = 80%, test accuracy = 75%. The gap is only **5 percentage points**, indicating mild or minimal overfitting. The regression's simpler structure (fewer effective parameters relative to the data) prevented it from fitting noise in the training data, so its performance degrades only slightly on new data.

The fundamental issue is the **bias-variance tradeoff**. The decision tree has low bias (it can fit complex patterns) but high variance (it is sensitive to the particular training sample). The logistic regression has higher bias (it assumes a linear-in-features relationship) but lower variance (its predictions are more stable across samples). With only 20 training cases and three categorical features, the decision tree has too many degrees of freedom relative to the amount of data, and it overfits.

### (e) Recommendation

**The clinic should deploy the logistic regression model.**

The justification rests on three points:

1. **Generalization performance.** The logistic regression achieved 75% accuracy on new cases, compared to the decision tree's 65%. The model that performs better on unseen data is the model that will make better predictions in practice. The clinic cares about predicting outcomes for future clients, not about retrospectively explaining the 20 training cases.

2. **Stability.** The small gap between the logistic regression's training and test accuracy (80% vs. 75%) indicates that it will behave predictably as the clinic sees more cases. The decision tree's large gap (95% vs. 65%) means its real-world performance is unreliable and substantially worse than its training performance would suggest.

3. **Interpretability.** Logistic regression provides interpretable coefficients (odds ratios) for each feature, making it easier for clinicians to understand and trust the model's predictions. A clinician can see, for example, that Attention-maintained cases have higher odds of success, which aligns with clinical reasoning.

**Caveats and next steps:** If the clinic collects substantially more data (e.g., hundreds of cases), a decision tree — or better yet, a regularized tree-based ensemble method such as a random forest — may eventually outperform logistic regression by capturing genuine nonlinear interactions. With only 20 training cases, however, the simpler model is the safer and more appropriate choice. The clinic could also consider using cross-validation during model development to obtain a more honest estimate of each model's generalization performance before deploying it.
