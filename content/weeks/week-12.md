---
slug: "week-12"
number: 12
published: true
title: "Machine Learning and Artificial Intelligence"
subtitle: "Data-driven models that learn patterns from behavioral data"
description: "Supervised and unsupervised learning, decision trees, neural networks, the prediction-explanation gap."
keyModels:
  - "Decision Tree"
  - "Neural Network"
  - "k-Means Clustering"
keyEquations:
  - "Loss = (1/N) * sum(y_i - hat{y}_i)^2"
  - "Regularized loss = Loss + lambda * ||w||"
---

## Why This Topic Matters

Throughout this course, we have built models by starting with a behavioral principle---matching, momentum, delay discounting---and writing equations that formalize that principle. We specified mechanisms, estimated parameters, and interpreted those parameters in behavioral terms. This is the dominant tradition in behavior science, and it has been enormously productive. But it is not the only way to model behavior.

Machine learning (ML) takes a fundamentally different approach. Instead of starting with a hypothesized mechanism and fitting parameters, ML algorithms search through vast spaces of possible functions to find one that maps inputs to outputs as accurately as possible. The algorithm does not know or care what the mechanism is. It cares only about prediction accuracy. A machine learning model might predict the function of problem behavior with 95% accuracy---but it might do so using a function so complex that no human can inspect it and say, "Ah, that is why the behavior is occurring."

This creates a tension that is central to behavior science. We want models that predict AND explain. A model that predicts perfectly but offers no insight into mechanism is useful for certain practical purposes---screening, classification, risk assessment---but it does not advance our understanding of why behavior occurs. Conversely, a model that explains beautifully but predicts poorly may be elegant theory with limited practical value.

This week explores when ML tools are appropriate for behavioral questions, what they can and cannot tell you, and how to use them responsibly in a field where understanding mechanism matters. We will apply the 8-step modeling framework to a decision tree classifier, work through a concrete example of classifying the function of problem behavior, and confront the prediction-explanation gap head-on.

It is worth noting that ML is not new, even if the hype around it is recent. Decision trees were developed in the 1980s. Neural networks were first proposed in the 1940s and experienced a major resurgence in the 1980s. What has changed is the availability of computational power and data. Modern computers can train models that would have taken days or weeks on 1990s hardware in seconds. And the increasing use of digital data collection in applied behavior analysis---electronic data sheets, sensor systems, video coding---is generating datasets large enough to support ML analyses. The question is no longer "Can we use ML in behavior science?" but "When should we, and how do we do it well?"

A final note before we begin: ML is not a replacement for theory. It is a tool. A very powerful tool, but a tool nonetheless. A hammer does not replace the carpenter's understanding of load-bearing structures; it allows the carpenter to build things faster. Similarly, ML does not replace the behavior scientist's understanding of reinforcement, stimulus control, and behavioral dynamics; it allows the behavior scientist to analyze data in ways that would be impractical by hand. The understanding must come first. Without it, the tool is wielded blindly.

---

## Connecting Backward: From Mechanism to Pattern Discovery

The course has traced an arc from simple to complex models, but there is a deeper arc running alongside it: a shift in where the **knowledge** lives.

In Weeks 2–5, knowledge lived in the **equations**. The generalized matching law, the hyperbolic discounting function, and behavioral momentum theory each encoded a behavioral principle directly — you could read the mechanism off the equation. In Week 10, knowledge lived in the **dynamics** — the differential equations specified how behavioral state variables change over time, and the equilibria and trajectories followed from the math. In Week 11, knowledge lived in the **algorithm** — we specified the rules (Q-learning updates, selection operators, agent interaction rules) and ran the simulation forward to see what those rules produce.

This week, knowledge lives in the **data**. Machine learning algorithms do not require the modeler to specify a mechanism, a dynamical rule, or an algorithmic process. Instead, the algorithm searches through a space of possible functions and finds one that maps inputs to outputs as accurately as possible. The mechanism, if one exists, is implicit in the learned function — but it may be unrecoverable.

This is not a rejection of everything that came before. It is a complement. The theory-driven models from earlier weeks tell us **why** behavior takes the form it does. ML models can tell us **what patterns exist** in behavioral data that we might not have hypothesized — patterns involving high-dimensional interactions, nonlinear thresholds, and combinatorial feature spaces that exceed human intuition. The most productive use of ML in behavior science is not to replace mechanistic models but to discover regularities that mechanistic models can then explain. Data-driven pattern discovery feeds theory-driven explanation, and the cycle continues.

---

## Core Concepts

### Two Cultures of Modeling

The statistician Leo Breiman (2001) described two cultures of statistical modeling. **Culture 1**---the data modeling culture---assumes that the data are generated by a specific stochastic process. The modeler specifies the form of that process (e.g., a linear equation, a hyperbolic function, a differential equation), then estimates parameters from data. Nearly every model we have covered in this course belongs to Culture 1. We wrote Herrnstein's hyperbola, the generalized matching equation, the hyperbolic discounting function, and behavioral momentum equations because we had theoretical reasons to believe those functional forms described the underlying behavioral processes.

**Culture 2**---the algorithmic modeling culture---treats the data-generating process as unknown. Instead of specifying a functional form, the modeler uses an algorithm that learns a mapping from inputs to outputs directly from the data. The goal is predictive accuracy on new, unseen data. The learned mapping may be a tree of if-then rules, a weighted combination of thousands of nonlinear functions, or something even more complex. The modeler may never be able to write down a simple equation that describes what the algorithm learned.

Most of behavior science has been firmly in Culture 1, and for good reason: we want to understand mechanisms, and mechanistic models are interpretable. But Culture 2 has something to offer. When the true relationship between variables is complex, nonlinear, and involves high-order interactions, a Culture 1 model may be too simple to capture the pattern. A Culture 2 model can discover patterns that a human modeler would never think to hypothesize. The challenge is knowing when each culture is appropriate and how to use both wisely.

### Supervised Learning

In **supervised learning**, the algorithm learns a mapping from inputs (called **features** or **predictors**) to outputs (called **targets** or **labels**) using a dataset where the correct output is known for each example. The dataset of input-output pairs is called the **training data**. The algorithm adjusts its internal parameters to minimize the discrepancy between its predictions and the true outputs.

There are two main types of supervised learning:

- **Classification**: The target is a categorical variable. The algorithm learns to assign each input to one of a finite set of categories. Example: given features from a functional analysis (antecedent condition, consequence, rate of problem behavior), classify the function as attention, escape, tangible, or automatic.

- **Regression**: The target is a continuous variable. The algorithm learns to predict a numerical value. Example: given schedule parameters and reinforcement history, predict the rate of problem behavior in a new condition.

The quality of a supervised learning model is measured by its performance on **held-out data**---data that the model did not see during training. This is critical. A model that memorizes the training data perfectly but fails on new data is useless. The standard approach is to split the data into a **training set** (used to fit the model) and a **test set** (used to evaluate it), or to use **cross-validation** (repeatedly splitting the data into training and test subsets and averaging performance across splits).

The most common measure of prediction error for regression is the **mean squared error (MSE)**:

$$\text{Loss} = \frac{1}{N} \sum_{i=1}^{N} (y_i - \hat{y}_i)^2$$

where $y_i$ is the true value for observation $i$, $\hat{y}_i$ is the predicted value, and $N$ is the number of observations. The loss function is the algorithm's report card: lower loss means better predictions. The algorithm adjusts its parameters to minimize this loss, a process called **optimization**. Different algorithms use different optimization procedures, but the logic is always the same: find the parameter values that make the predictions as close to the true values as possible.

For classification, common metrics include **accuracy** (proportion of correct predictions), **precision** (proportion of positive predictions that are truly positive), **recall** (proportion of true positives that are correctly identified), and the **F1 score** (harmonic mean of precision and recall). Each metric answers a different question:

- **Accuracy** asks: "Of all the predictions, how many were correct?" This is intuitive but misleading when classes are imbalanced. If 95% of functional analysis outcomes are "attention," a model that always predicts "attention" achieves 95% accuracy while being completely uninformative about the other functions.

- **Precision** asks: "Of the cases I labeled as escape function, how many truly were escape function?" High precision means few false alarms.

- **Recall** asks: "Of the cases that truly were escape function, how many did I correctly identify?" High recall means few missed cases.

- **F1** is the harmonic mean of precision and recall: $F1 = 2 \cdot \frac{\text{precision} \cdot \text{recall}}{\text{precision} + \text{recall}}$. It balances the two concerns and is especially useful when both false alarms and missed cases are costly.

A concrete behavioral example illustrates why these distinctions matter. Suppose you are building a classifier to predict whether a client will engage in severe problem behavior during a session, so staff can prepare safety procedures. A model with high recall but lower precision will flag many sessions---some unnecessarily---but will rarely miss a dangerous session. A model with high precision but lower recall will rarely cry wolf but will sometimes fail to warn staff about a session that becomes dangerous. In applied behavior analysis, the consequences of each type of error are different, and the choice of metric should reflect those consequences.

#### The Training-Testing Split

The distinction between training data and test data deserves special emphasis because it is the most common source of inflated performance claims in applied ML. When you fit a model to data and then evaluate it on the same data, you are measuring how well the model memorizes, not how well it generalizes. This is analogous to giving a student the exam answers during the exam and then concluding they have mastered the material.

The standard procedure is:

1. **Split** the data into a training set (typically 70--80% of the data) and a test set (the remaining 20--30%).
2. **Train** the model on the training set only.
3. **Evaluate** the model on the test set only.
4. **Report** the test set performance as the estimate of how well the model will perform on new, unseen data.

For small datasets---common in behavior science---**k-fold cross-validation** is preferred. The data are divided into $k$ equally sized subsets (folds). The model is trained $k$ times, each time using $k - 1$ folds for training and the remaining fold for testing. The $k$ test-set performance scores are averaged to produce a single estimate of generalization performance. Five-fold and ten-fold cross-validation are the most common choices.

### Unsupervised Learning

In **unsupervised learning**, there are no labels. The algorithm receives only the input features and must find structure in the data on its own. There is no "correct answer" to evaluate against---the algorithm discovers patterns that the researcher may or may not have anticipated.

Two major types of unsupervised learning are relevant to behavior science:

- **Clustering**: Group observations that are similar to each other. The algorithm partitions the data into clusters such that observations within a cluster are more similar than observations in different clusters. A common algorithm is **k-means clustering**, which partitions $N$ observations into $k$ clusters by minimizing the total within-cluster variance. Example: given behavioral assessment data for 200 learners, identify subtypes of learners who show similar profiles of strengths and challenges.

- **Dimensionality reduction**: Compress a large set of features into a smaller set that retains most of the information. **Principal component analysis (PCA)** finds linear combinations of features (called components) that explain the most variance in the data. Example: given 50 items from a behavioral rating scale, reduce to 3--5 components that capture the main dimensions of behavioral variation.

Unsupervised learning is exploratory. It does not test hypotheses---it generates them. Clustering might reveal subtypes of learners that no one had previously identified, which could then be studied with more traditional methods. Dimensionality reduction might reveal that a complex assessment battery can be summarized by a few key dimensions, simplifying future research.

#### k-Means Clustering in Detail

Because clustering is the unsupervised method most relevant to behavior science, it is worth understanding the mechanics of k-means in some detail. The algorithm works as follows:

1. **Choose $k$**, the number of clusters. This must be specified in advance---the algorithm does not determine $k$ for you. Choosing the right $k$ is a substantive decision that requires domain knowledge and diagnostic tools (e.g., the elbow method, silhouette scores).

2. **Initialize** $k$ cluster centers (centroids) at random positions in the feature space.

3. **Assign** each observation to the nearest centroid. "Nearest" is typically defined by Euclidean distance: for observation $\mathbf{x}_i$ and centroid $\boldsymbol{\mu}_j$,

$$d(\mathbf{x}_i, \boldsymbol{\mu}_j) = \sqrt{\sum_{f=1}^{F} (x_{if} - \mu_{jf})^2}$$

where $F$ is the number of features.

4. **Update** each centroid to be the mean of all observations assigned to it.

5. **Repeat** steps 3 and 4 until assignments no longer change (convergence).

The algorithm minimizes the **within-cluster sum of squares (WCSS)**:

$$\text{WCSS} = \sum_{j=1}^{k} \sum_{\mathbf{x}_i \in C_j} \|\mathbf{x}_i - \boldsymbol{\mu}_j\|^2$$

where $C_j$ is the set of observations assigned to cluster $j$ and $\boldsymbol{\mu}_j$ is the centroid of cluster $j$.

A behavioral example: suppose you have assessment data for 150 children receiving ABA services. Each child has scores on five domains: communication, social interaction, adaptive behavior, repetitive behavior, and problem behavior severity. You suspect there might be distinct subtypes of learners, but you do not know how many or what they look like. Running k-means with $k = 3$ might reveal three clusters: one with high communication and social scores but moderate problem behavior, one with low scores across all domains, and one with high repetitive behavior and problem behavior but moderate communication. These clusters are hypotheses about structure in the data, not confirmed subtypes. Validating them requires external evidence---do the clusters differ in treatment response? Do they map onto known clinical categories?

An important caveat: k-means assumes that clusters are roughly spherical in feature space and that all features are on comparable scales. If one feature ranges from 0 to 100 and another from 0 to 1, the high-range feature will dominate the distance calculations. **Standardizing features** (subtracting the mean and dividing by the standard deviation) before clustering is essential.

### Decision Trees and Random Forests

A **decision tree** is one of the most interpretable ML models. It makes predictions by asking a sequence of yes/no questions about the input features, splitting the data at each step based on the answer. The result is a tree-shaped flowchart that any human can read and follow.

For example, a decision tree for classifying the function of problem behavior might start by asking: "Was the antecedent condition a demand?" If yes, it might ask: "Was the consequence escape from the demand?" If yes, it predicts "escape function." Each **internal node** of the tree represents a question (a split on a feature), each **branch** represents an answer, and each **leaf node** represents a prediction.

The algorithm builds the tree by choosing, at each step, the split that most reduces the **impurity** of the resulting groups. For classification, a common impurity measure is the **Gini impurity**:

$$G = 1 - \sum_{c=1}^{C} p_c^2$$

where $p_c$ is the proportion of observations in class $c$ at a given node, and $C$ is the number of classes. A node where all observations belong to one class has $G = 0$ (perfectly pure). A node where observations are evenly split across classes has the highest Gini impurity.

Decision trees have appealing properties: they are interpretable, they handle nonlinear relationships naturally, and they can capture interactions between features without the modeler specifying them in advance. However, they have a critical weakness: they are prone to **overfitting**. A tree grown without constraints will keep splitting until every leaf contains a single observation, perfectly memorizing the training data but generalizing poorly to new data.

**Random forests** address overfitting by building many trees (often hundreds or thousands), each trained on a random subset of the data and a random subset of features, and averaging their predictions. No single tree is reliable, but the ensemble of trees is remarkably robust. The cost is interpretability: a forest of 500 trees is not something you can read as a flowchart. However, random forests provide **feature importance** scores, telling you which input features contributed most to predictions across all trees.

### Neural Networks

A **neural network** is a model composed of layers of interconnected nodes (sometimes called neurons, by loose analogy with biological neurons). Each node computes a weighted sum of its inputs, adds a bias term, and passes the result through a nonlinear **activation function** (such as the sigmoid function $\sigma(x) = 1/(1 + e^{-x})$ or the rectified linear unit $\text{ReLU}(x) = \max(0, x)$).

The simplest neural network has three layers: an **input layer** (one node per feature), one **hidden layer** (a set of intermediate nodes), and an **output layer** (one node per predicted class or a single node for regression). Information flows forward from input to output, and the network's predictions depend on the **weights** connecting nodes across layers.

Training a neural network means adjusting the weights to minimize a loss function (e.g., MSE for regression, cross-entropy for classification). The standard algorithm for adjusting weights is **backpropagation**: compute the loss, propagate the error backward through the network, and update each weight in the direction that reduces the loss. This process is repeated over many passes through the training data (called **epochs**).

Neural networks are **universal function approximators**: with enough hidden nodes and sufficient data, a neural network with even one hidden layer can approximate any continuous function to arbitrary precision (Cybenko, 1989; Hornik, 1991). This sounds powerful---and it is. Neural networks have achieved state-of-the-art performance in image recognition, natural language processing, and many other domains.

But this power comes at a cost. A neural network with thousands of weights is a **black box**. You cannot inspect the weights and understand, in behavioral terms, what the network "knows." The weights are distributed, nonlinear, and high-dimensional. Unlike a matching-law equation where $s = 0.8$ means "this organism undermatches," a neural network weight of 0.347 connecting hidden node 42 to hidden node 113 means nothing interpretable.

For behavior science, neural networks raise a fundamental question: is a model useful if it predicts accurately but offers no insight into mechanism?

#### A Simple Neural Network Computation

To make neural networks concrete, consider a tiny network with 2 input nodes, 2 hidden nodes, and 1 output node. The inputs are $x_1$ (rate of problem behavior in the demand condition) and $x_2$ (rate of problem behavior in the play condition). The output is the probability that the function is escape.

Each hidden node computes:

$$h_j = \sigma(w_{j1} x_1 + w_{j2} x_2 + b_j)$$

where $w_{j1}$ and $w_{j2}$ are the weights connecting the inputs to hidden node $j$, $b_j$ is the bias of hidden node $j$, and $\sigma$ is the sigmoid activation function:

$$\sigma(z) = \frac{1}{1 + e^{-z}}$$

The output node then computes:

$$\hat{y} = \sigma(v_1 h_1 + v_2 h_2 + b_{\text{out}})$$

where $v_1$ and $v_2$ are weights from the hidden nodes to the output, and $b_{\text{out}}$ is the output bias.

Suppose, after training, the weights are: $w_{11} = 2.1$, $w_{12} = -1.5$, $b_1 = -3.0$, $w_{21} = 0.8$, $w_{22} = 0.3$, $b_2 = -1.0$, $v_1 = 4.0$, $v_2 = -2.0$, $b_{\text{out}} = -1.5$. For a new client with demand-condition rate $x_1 = 5.0$ and play-condition rate $x_2 = 0.8$:

$$h_1 = \sigma(2.1 \times 5.0 + (-1.5) \times 0.8 + (-3.0)) = \sigma(10.5 - 1.2 - 3.0) = \sigma(6.3) \approx 0.998$$

$$h_2 = \sigma(0.8 \times 5.0 + 0.3 \times 0.8 + (-1.0)) = \sigma(4.0 + 0.24 - 1.0) = \sigma(3.24) \approx 0.962$$

$$\hat{y} = \sigma(4.0 \times 0.998 + (-2.0) \times 0.962 + (-1.5)) = \sigma(3.992 - 1.924 - 1.5) = \sigma(0.568) \approx 0.638$$

The network predicts a 63.8% probability that this client's behavior is escape-maintained. You can trace the arithmetic, but can you interpret it? Hidden node 1 seems to activate strongly when the demand-condition rate is high relative to the play-condition rate (positive weight on $x_1$, negative weight on $x_2$). Hidden node 2 activates when both rates are moderately high. The output combines these activations with a positive weight on $h_1$ and a negative weight on $h_2$. But "seems to" is doing a lot of work in those sentences. With only 2 hidden nodes and 9 parameters, this network is barely interpretable. Real networks have hundreds or thousands of hidden nodes and tens of thousands of parameters. Interpretation becomes impossible.

This example illustrates both the power and the limitation. The network produces a graded probability (not just a yes/no classification), which is useful for clinical decision-making. But the path from inputs to output runs through a tangle of weights and nonlinearities that resists human understanding.

### The Bias-Variance Tradeoff (Revisited)

Earlier in this course, we discussed how models can be too simple or too complex for the data. ML formalizes this intuition as the **bias-variance tradeoff**.

**Bias** (in the statistical sense, not the matching-law sense) refers to the error introduced by approximating a complex real-world phenomenon with a simple model. A model with high bias makes strong assumptions about the form of the relationship and will underfit the data, missing important patterns. A linear model applied to a clearly nonlinear relationship has high bias.

**Variance** refers to the error introduced by a model that is too sensitive to the specific training data. A model with high variance will fit the training data very well---including its noise and idiosyncrasies---but will perform poorly on new data. An unconstrained decision tree has high variance.

The total prediction error can be decomposed as:

$$\text{Total Error} = \text{Bias}^2 + \text{Variance} + \text{Irreducible Noise}$$

The modeler's job is to find the sweet spot: a model complex enough to capture the real patterns (low bias) but constrained enough to generalize to new data (low variance).

**Regularization** is a technique for controlling model complexity. It adds a penalty to the loss function that discourages large parameter values:

$$\text{Regularized Loss} = \text{Loss} + \lambda \|\mathbf{w}\|$$

where $\mathbf{w}$ is the vector of model weights, $\|\mathbf{w}\|$ is a measure of the size of the weights (L1 norm for Lasso, L2 norm for Ridge), and $\lambda$ is a **regularization parameter** that controls the strength of the penalty. Larger $\lambda$ means more penalty, simpler model, lower variance, but potentially higher bias.

**Cross-validation** is the standard tool for selecting the right level of complexity. The data are split into $k$ subsets (folds). For each fold, the model is trained on $k-1$ folds and evaluated on the held-out fold. The process is repeated $k$ times, and the average performance across folds is the estimate of how well the model will generalize. The model (or the value of $\lambda$) that produces the best cross-validated performance is selected.

A concrete example helps ground these abstractions. Suppose you are building a model to predict session-by-session rates of problem behavior from 10 features (schedule parameters, time of day, therapist, previous session rate, etc.). You try three models:

- **Model A (high bias):** A linear regression using only one feature (previous session rate). This model assumes a simple linear relationship and ignores 9 features. It underfits: it misses real patterns involving the other features. Training MSE = 4.2; test MSE = 4.5.

- **Model B (balanced):** A decision tree with maximum depth 4, using all 10 features. This model captures nonlinear relationships and interactions but is constrained enough to avoid memorizing noise. Training MSE = 1.8; test MSE = 2.3.

- **Model C (high variance):** A decision tree with no depth limit, using all 10 features. This model creates a unique prediction for nearly every training observation. Training MSE = 0.1; test MSE = 5.7.

Model C has the best training performance but the worst test performance---a textbook case of overfitting. Model A has consistent but mediocre performance---underfitting. Model B is the sweet spot: it sacrifices a little training accuracy to gain substantially better test accuracy. The gap between training and test performance is the signature of overfitting, and monitoring this gap is one of the most important practical skills in ML.

### Feature Engineering

In machine learning, **feature engineering** is the process of creating informative input variables from raw data. This is often the most important step in building a successful ML model---more important than the choice of algorithm.

Consider the task of predicting problem behavior from session data. Raw data might include timestamped events: every instance of behavior, every consequence delivered, every antecedent change. To feed this into a ML model, you need to transform these raw events into numerical features: rate of problem behavior in the previous session, time since last reinforcer, number of demands presented in the last 5 minutes, cumulative reinforcement history, inter-response times, and so on.

This is where **domain expertise** adds enormous value. A behavior analyst knows that schedule parameters matter, that reinforcement history matters, that establishing operations matter, that temporal context matters. A computer scientist with no behavioral training might compute thousands of generic statistical features from the data---means, variances, autocorrelations---without knowing which ones are behaviorally meaningful.

The dirty secret of ML is that the fanciest algorithm in the world will fail if the input features do not contain the information needed to make the prediction. Conversely, even a simple algorithm (like logistic regression) can perform remarkably well if the features are well-chosen. **Feature engineering is where behavior science meets machine learning**, and it is one of the strongest arguments for collaboration between domain experts and data scientists.

To illustrate, consider two approaches to predicting treatment response:

**Approach A (naive features):** Compute the mean and standard deviation of problem behavior rate across all sessions. Use these two numbers as features. A neural network trained on these features achieves 62% accuracy---barely better than chance.

**Approach B (domain-informed features):** Compute: (1) the ratio of problem behavior rate in the reinforcement condition to the control condition, (2) the slope of the trend line across sessions (is behavior decreasing?), (3) the latency to first instance of problem behavior in the most recent session, (4) the number of sessions to reach 50% reduction criterion, and (5) a binary indicator of whether the maintaining function was social or automatic. A simple logistic regression trained on these five features achieves 81% accuracy.

Approach B wins because the features encode behavioral knowledge---they capture the dimensions that actually matter for treatment response. The algorithm in Approach A is more powerful, but it cannot compensate for uninformative inputs. This pattern is remarkably consistent across ML applications: good features with a simple algorithm almost always beat bad features with a complex algorithm.

### The Prediction-Explanation Gap

This is perhaps the most important concept of the week. Machine learning models can achieve impressive predictive accuracy without providing any explanation of why the predictions work. This is the **prediction-explanation gap**.

Consider a neural network trained to predict whether a client will relapse into problem behavior after treatment. The network takes as input 50 features---treatment duration, reinforcement schedule parameters, behavioral history, demographic variables, assessment scores---and outputs a probability of relapse. After training on data from 1,000 clients, the network achieves 92% accuracy on held-out data.

This is practically useful. A clinician could use the model to identify high-risk clients and allocate resources accordingly. But the model does not tell the clinician WHY a particular client is at high risk. Is it because the reinforcement schedule was too thin? Because the treatment was too short? Because the client has a long history of problem behavior? The network's prediction is a single number produced by thousands of weights interacting across multiple layers. There is no simple, interpretable answer.

Contrast this with a behavioral momentum model that predicts relapse as a function of the reinforcement rate in the treatment context. The momentum model might be less accurate---perhaps 75% accuracy---but it tells you exactly why relapse occurs: the reinforcement context was too rich, creating strong behavioral mass that resists disruption during treatment but also resists the disruption of returning to baseline. This mechanistic insight directly informs treatment design.

The prediction-explanation gap forces a choice---or, better, a conversation about what you need from a model:

- **If the goal is screening or triage**, prediction accuracy may be paramount, and a black-box model may be acceptable.
- **If the goal is understanding mechanism**, interpretability is essential, and a simpler, theory-driven model may be preferable even if it is less accurate.
- **If the goal is treatment design**, you need mechanism: you cannot design an intervention based on a prediction you do not understand.

In practice, the best approach is often to use ML models for discovery and hypothesis generation, then follow up with mechanistic models to explain the patterns the ML model found.

There is a growing literature in philosophy of science on this topic. Some philosophers argue that prediction and explanation are independent virtues: a model can have one without the other. Others argue that good predictions are evidence that the model has captured something real about the world, even if we cannot yet articulate what. For behavior science, the pragmatic stance is probably most useful: ask what you need the model to do, and choose accordingly. If you need to allocate resources (screening), optimize prediction. If you need to design an intervention (treatment), optimize explanation. If you need to advance scientific understanding (basic research), insist on mechanism.

The prediction-explanation gap also has implications for how we train behavior scientists. If ML tools become common in the field, practitioners will need to understand not just how to use them, but how to evaluate their limitations. A practitioner who trusts a black-box prediction without understanding its basis is in a position analogous to a physician who prescribes a drug without understanding its mechanism of action---sometimes acceptable, but always carrying risk.

### Responsible Use of ML in Behavior Science

Machine learning introduces new opportunities for error and misuse. Responsible application requires attention to several issues:

- **Validation on held-out data.** Never evaluate a model on the same data used to train it. Always use cross-validation or a separate test set. Reporting only training accuracy is the ML equivalent of p-hacking.

- **Class imbalance.** In behavior science, the events we most want to predict---problem behavior, relapse, crisis episodes---are often rare. If problem behavior occurs in only 5% of intervals, a model that always predicts "no problem behavior" achieves 95% accuracy but is useless. Use metrics designed for imbalanced classes (precision, recall, F1, area under the ROC curve) and consider resampling techniques (oversampling the minority class, undersampling the majority class).

- **Overfitting and multiple comparisons.** With enough features and enough model specifications to try, you can always find a model that fits the training data well by chance. Pre-register your model specification and evaluation criteria. Report cross-validated performance, not best-of-many-tries performance.

- **Interpretability tools.** When you must use a complex model, use interpretability tools to understand its predictions. **SHAP (SHapley Additive exPlanations)** values quantify the contribution of each feature to each individual prediction. **Feature importance** scores from random forests rank features by their overall contribution to predictive accuracy. **Partial dependence plots** show how the predicted outcome changes as a single feature varies, holding other features constant.

- **Reproducibility.** Document your data preprocessing, feature engineering, model specification, hyperparameter tuning, and evaluation procedure in enough detail that another researcher can reproduce your results. Set random seeds for any stochastic processes (random splits, random forest construction). Share code.

- **Ethical considerations.** ML models can encode and amplify biases present in training data. If your training data disproportionately represent certain populations, your model may perform poorly on underrepresented groups. Be explicit about who your model was trained on and who it should (and should not) be applied to.

---

## Applying the 8-Step Framework

We now walk through all eight steps of the modeling framework for building a decision tree classifier. The problem: classifying the function of problem behavior (attention, escape, tangible, automatic) from functional analysis assessment data.

### Step 1: Get the Behavioral Phenomenon Clearly in Mind

A behavior analyst conducts a functional analysis with four conditions: attention, demand, tangible, and play (control). In each condition, a specific antecedent is arranged and a specific consequence follows problem behavior. The analyst records the rate of problem behavior in each condition across multiple sessions. The goal is to classify the **function** of the problem behavior---the reinforcement contingency that maintains it---based on the pattern of responding across conditions.

Historically, this classification is done by visual inspection: if the rate is highest in the attention condition, the function is social positive reinforcement (attention). If highest in the demand condition, the function is social negative reinforcement (escape). If highest in the tangible condition, the function is access to tangibles. If rates are similar across all conditions or highest in the alone condition, the function may be automatic reinforcement.

Visual inspection works well for clear cases, but many functional analyses produce ambiguous results---elevated rates in multiple conditions, high variability within conditions, or no clear differentiation. A decision tree classifier could systematize the classification process and potentially handle ambiguous cases more consistently than visual inspection.

The data available for each client include: the rate of problem behavior (responses per minute) in each of the four conditions, computed as the mean across the last three sessions of each condition. Additional derived features might include the maximum rate across conditions, the difference between the highest and second-highest rates, the ratio of the highest rate to the play-condition rate, and the within-condition variability (standard deviation of rates across sessions within each condition). These features capture aspects of the FA data that experienced analysts use implicitly when making visual classifications.

### Step 2: Define the Behavioral Processes and Scope of the Model

We model the **classification of behavioral function** from structured functional analysis data. The model covers:

- Mapping from quantitative features of functional analysis sessions to a categorical function label
- Handling cases where multiple conditions produce elevated responding
- Producing a classification for any new set of functional analysis data with the same features

The model does **not** cover:

- Why a particular function maintains the behavior (the underlying reinforcement history)
- Treatment selection (a separate decision that depends on the classified function plus other factors)
- Dynamic changes in function over time
- Functions not represented in the training data

### Step 3: Identify the Behavioral Principles and Quantitative Laws

Unlike previous weeks, we are not starting from a behavioral law that dictates a specific functional form. Instead, we are using the behavioral knowledge that:

- Different maintaining contingencies produce different patterns of responding across functional analysis conditions
- The rate of problem behavior should be highest in the condition that corresponds to the maintaining function
- The relationship between features and function may involve interactions (e.g., moderate rates in both attention and demand conditions might indicate multiply maintained behavior)

The quantitative tool is the **decision tree algorithm**: at each node, choose the feature and threshold that maximally reduces Gini impurity, producing the purest possible child nodes.

### Step 4: State All Simplifying Assumptions

1. **Discrete functions.** We assume problem behavior is maintained by one of four functions: attention, escape, tangible, or automatic. In reality, behavior can be multiply maintained.
2. **Functional analysis validity.** We assume the functional analysis conditions correctly isolate the relevant contingencies. If conditions are poorly implemented, the data will not reflect the true function.
3. **Rate is the key dependent variable.** We use rate of problem behavior as the primary feature. Other features (latency, duration, intensity) might carry additional information but are excluded for simplicity.
4. **Training data quality.** The classifier can only be as good as the labels in the training data. If the training set contains misclassified cases, the tree will learn incorrect rules.
5. **Stationarity.** We assume the function does not change between assessment and classification. A function identified during assessment is assumed to hold at the time of treatment.
6. **Independence of observations.** Each client's data is treated as independent of every other client's data.

### Step 5: Write the Model Verbally, Then Mathematically

**Verbal description:** The decision tree examines features of functional analysis data (rate of problem behavior in each condition, difference in rates between conditions) and applies a series of if-then rules to classify the function. At each branch point, the tree asks a question about one feature (e.g., "Is the rate in the demand condition greater than 2.5 per minute?") and splits the data based on the answer. The process continues until a leaf node is reached, which provides the classification.

**Mathematical expression:** At each internal node $t$, the tree selects the feature $j$ and threshold $\theta$ that minimize the weighted average Gini impurity of the two child nodes:

$$\text{Split cost} = \frac{N_{\text{left}}}{N_t} G_{\text{left}} + \frac{N_{\text{right}}}{N_t} G_{\text{right}}$$

where $N_t$ is the number of observations at node $t$, $N_{\text{left}}$ and $N_{\text{right}}$ are the numbers of observations in the left and right child nodes, and $G_{\text{left}}$ and $G_{\text{right}}$ are the Gini impurities of the child nodes:

$$G = 1 - \sum_{c=1}^{C} p_c^2$$

The tree grows recursively until a stopping criterion is met (e.g., maximum depth, minimum observations per leaf, or no further reduction in impurity).

### Step 6: Verify Dimensional Consistency

- $p_c$ is a proportion (dimensionless, between 0 and 1).
- $p_c^2$ is dimensionless.
- $\sum p_c^2$ is dimensionless.
- $G = 1 - \sum p_c^2$ is dimensionless (a purity measure between 0 and 1).
- $N_{\text{left}} / N_t$ is a proportion (dimensionless).
- The split cost is a weighted average of dimensionless quantities, so it is dimensionless.

All terms are consistent. The Gini impurity is a unitless measure of heterogeneity, and the split cost is a unitless measure of the quality of a split.

### Step 7: Specify Starting Values and Constraints

- **Maximum tree depth:** Constrain the tree to a maximum depth of 3--5 levels to prevent overfitting and maintain interpretability. A tree deeper than 5 levels is unlikely to be inspectable by a clinician.
- **Minimum samples per leaf:** Require at least 5--10 observations in each leaf node. This prevents the tree from creating leaves based on a single unusual case.
- **Number of classes:** $C = 4$ (attention, escape, tangible, automatic).
- **Features:** Rate of problem behavior in each of the four FA conditions (attention, demand, tangible, play), plus derived features such as the maximum rate, the condition with the maximum rate, and the ratio of the highest rate to the play-condition rate.
- **Training data:** At least 50--100 labeled cases are needed to fit a reliable tree. More is better, especially for rare classes.
- **Evaluation metric:** Because classes may be imbalanced (automatic functions are less common), use the macro-averaged F1 score rather than raw accuracy.

### Step 8: Check the Math, Test Against Data, and Derive Predictions

**Verify.** If the rate of problem behavior is high only in the attention condition and low in all others, the tree should classify the function as attention. This is the clearest case, and the tree should handle it correctly if the training data include such cases.

If rates are equal across all conditions, the tree should either classify as automatic (if play-condition rates are also high) or flag the case as undifferentiated. The tree's behavior in ambiguous cases depends on how such cases were labeled in the training data.

**Validate.** Evaluate the tree using 5-fold cross-validation. For each fold, train on 80% of the data and test on 20%. Report the average accuracy, precision, recall, and F1 score across folds, broken down by class. Examine the confusion matrix to see which functions are most often confused with each other. If the tree frequently confuses attention and tangible functions, this might suggest that the features do not adequately distinguish between these two social-positive-reinforcement contingencies---a finding that would have substantive implications for FA methodology.

**Derive predictions.** For a new client whose FA data show: attention condition = 4.2/min, demand condition = 1.1/min, tangible condition = 0.8/min, play condition = 0.5/min, the tree should follow its learned rules and produce a classification. If the tree's first split is "Is the attention-condition rate > 3.0?" and the answer is yes, and the next split is "Is the demand-condition rate > 2.0?" and the answer is no, the tree might classify this as attention function. The clinician can inspect every step of this reasoning, which is a major advantage of decision trees over black-box models.

**Compare with a benchmark.** A useful exercise is to compare the decision tree's performance against a simple rule-based classifier that implements the standard visual-inspection heuristic: classify based on the condition with the highest mean rate. If the decision tree does not outperform this simple heuristic, it is adding complexity without adding value. If it does outperform the heuristic---especially on ambiguous cases---then the ML approach is contributing something beyond what a simple rule provides. This comparison grounds the ML model in the clinical context and prevents the temptation to adopt a complex method simply because it is complex.

---

## Worked Example

### Building a Decision Tree for Function Classification

We will build a simple decision tree by hand using a small dataset of 12 cases. Each case has three features and a known function label.

### The Dataset

| Case | Antecedent      | Consequence        | Rate (per min) | Function   |
|------|-----------------|--------------------|----------------|------------|
| 1    | Attention removal | Attention         | 5.2            | Attention  |
| 2    | Attention removal | Attention         | 4.8            | Attention  |
| 3    | Attention removal | Attention         | 3.9            | Attention  |
| 4    | Demand          | Escape             | 6.1            | Escape     |
| 5    | Demand          | Escape             | 5.5            | Escape     |
| 6    | Demand          | Escape             | 4.7            | Escape     |
| 7    | Tangible removal | Tangible           | 4.3            | Tangible   |
| 8    | Tangible removal | Tangible           | 3.6            | Tangible   |
| 9    | Tangible removal | Tangible           | 5.0            | Tangible   |
| 10   | Alone           | Nothing            | 3.1            | Automatic  |
| 11   | Alone           | Nothing            | 2.8            | Automatic  |
| 12   | Alone           | Nothing            | 3.5            | Automatic  |

For simplicity, we encode the categorical features as follows:
- **Antecedent:** Attention removal = 0, Demand = 1, Tangible removal = 2, Alone = 3
- **Consequence:** Attention = 0, Escape = 1, Tangible = 2, Nothing = 3

### Step 1: Compute Gini Impurity at the Root

At the root node, all 12 cases are present. The class distribution is:
- Attention: 3/12 = 0.25
- Escape: 3/12 = 0.25
- Tangible: 3/12 = 0.25
- Automatic: 3/12 = 0.25

$$G_{\text{root}} = 1 - (0.25^2 + 0.25^2 + 0.25^2 + 0.25^2) = 1 - 4(0.0625) = 1 - 0.25 = 0.75$$

The root node has maximum impurity (0.75 for a 4-class problem with equal class proportions). We need to find a split that reduces this.

### Step 2: Evaluate Candidate Splits

The algorithm must now consider all possible splits on all features and choose the one that reduces impurity the most. For each feature, it considers every possible threshold (for continuous features) or every possible partition (for categorical features). Let us evaluate several candidates.

**Candidate Split A: Antecedent = Demand?**

Consider splitting on the **Antecedent** feature. Since it has four values, consider the split "Antecedent = Demand?" (i.e., is the antecedent a demand, yes or no?):

**Left child (Antecedent = Demand):** Cases 4, 5, 6. All Escape. $G_{\text{left}} = 1 - 1.0^2 = 0$.

**Right child (Antecedent $\neq$ Demand):** Cases 1, 2, 3, 7, 8, 9, 10, 11, 12. Distribution: Attention 3/9, Tangible 3/9, Automatic 3/9.

$$G_{\text{right}} = 1 - 3(1/3)^2 = 1 - 3(0.111) = 1 - 0.333 = 0.667$$

**Weighted split cost:**

$$\text{Cost} = \frac{3}{12}(0) + \frac{9}{12}(0.667) = 0 + 0.500 = 0.500$$

This reduces impurity from 0.75 to 0.50---a substantial improvement. The left child is perfectly pure (all Escape), so no further splits are needed there.

**Candidate Split B: Rate > 4.5?**

Now consider splitting on the continuous feature, Rate. Try the threshold 4.5:

**Left child (Rate > 4.5):** Cases 1, 2, 4, 5, 9. Distribution: Attention 2/5, Escape 2/5, Tangible 1/5.

$$G_{\text{left}} = 1 - (0.4^2 + 0.4^2 + 0.2^2) = 1 - (0.16 + 0.16 + 0.04) = 1 - 0.36 = 0.64$$

**Right child (Rate $\leq$ 4.5):** Cases 3, 6, 7, 8, 10, 11, 12. Distribution: Attention 1/7, Escape 1/7, Tangible 2/7, Automatic 3/7.

$$G_{\text{right}} = 1 - \left(\frac{1}{7}\right)^2 - \left(\frac{1}{7}\right)^2 - \left(\frac{2}{7}\right)^2 - \left(\frac{3}{7}\right)^2 = 1 - 0.020 - 0.020 - 0.082 - 0.184 = 0.694$$

**Weighted split cost:**

$$\text{Cost} = \frac{5}{12}(0.64) + \frac{7}{12}(0.694) = 0.267 + 0.405 = 0.672$$

This split reduces impurity from 0.75 to only 0.672---much worse than the Antecedent = Demand split (which achieved 0.500). The rate feature does not cleanly separate the functions because the rate distributions overlap substantially across classes. This is an important lesson: the feature that a human might think is most informative (rate of behavior) is not necessarily the feature that the algorithm finds most useful for splitting. The antecedent condition provides a much cleaner separation because it is directly linked to the experimental manipulation.

**Selecting the best split:** The algorithm compares all candidate splits and selects the one with the lowest weighted Gini impurity. In this case, "Antecedent = Demand?" wins with a cost of 0.500, so this becomes the first split in the tree.

### Step 2b: Continue at the Right Child

Now consider splitting on **Consequence** at the right child node (9 remaining cases). Try "Consequence = Attention?":

**Left child (Consequence = Attention):** Cases 1, 2, 3. All Attention. $G = 0$.

**Right child (Consequence $\neq$ Attention):** Cases 7, 8, 9, 10, 11, 12. Distribution: Tangible 3/6, Automatic 3/6.

$$G = 1 - (0.5^2 + 0.5^2) = 1 - 0.50 = 0.50$$

**Weighted split cost** (within this 9-case node):

$$\text{Cost} = \frac{3}{9}(0) + \frac{6}{9}(0.50) = 0 + 0.333 = 0.333$$

Impurity within this subgroup drops from 0.667 to 0.333. The left child is pure (all Attention).

### Step 3: Continue Splitting

At the remaining right child (6 cases: 3 Tangible, 3 Automatic), split on "Antecedent = Alone?":

**Left child (Antecedent = Alone):** Cases 10, 11, 12. All Automatic. $G = 0$.

**Right child (Antecedent $\neq$ Alone):** Cases 7, 8, 9. All Tangible. $G = 0$.

**Weighted split cost:**

$$\text{Cost} = \frac{3}{6}(0) + \frac{3}{6}(0) = 0$$

Both children are pure. The tree is complete.

### Step 4: The Resulting Decision Tree

The tree can be written as a set of if-then rules:

1. **If** Antecedent = Demand, **then** predict **Escape**.
2. **Else if** Consequence = Attention, **then** predict **Attention**.
3. **Else if** Antecedent = Alone, **then** predict **Automatic**.
4. **Else** predict **Tangible**.

This is a depth-3 tree with four leaf nodes, one for each function. Every case in the training data is classified correctly, and the rules are immediately interpretable. A clinician can read these rules and verify that they make behavioral sense:

- Demands that produce escape-maintained behavior? Yes, that is consistent with negative reinforcement.
- Attention removal that produces attention-maintained behavior? Yes, that is consistent with positive reinforcement.
- Alone conditions with no social consequences? That is consistent with automatic reinforcement.

### Step 5: Does the Tree Explain or Just Predict?

This is the critical question. The tree produces correct classifications and interpretable rules. But does it EXPLAIN the function of problem behavior?

The answer is nuanced. The tree captures a **descriptive pattern**: certain combinations of antecedents and consequences are associated with certain functions. But the tree does not model the **mechanism**---it does not tell you that escape-maintained behavior occurs because the removal of demands is negatively reinforcing, or that the rate of problem behavior is a function of the reinforcement schedule operating in each condition. The tree treats the function label as a pattern to be matched, not a process to be understood.

A mechanistic model---such as a matching-law analysis showing that response rates across conditions track reinforcement rates---would provide explanation. The decision tree provides classification. Both are useful, but they answer different questions.

Consider a slightly more challenging case: a new client produces rates of 4.0/min in the attention condition, 3.7/min in the demand condition, 1.2/min in the tangible condition, and 0.9/min in the play condition. The tree's first question is "Antecedent = Demand?" The answer depends on which condition we are considering. But the tree classifies a single case based on its features---so the features would be the rates across conditions. If we reframe the features as: "attention rate = 4.0, demand rate = 3.7, tangible rate = 1.2, play rate = 0.9," the tree (or a more sophisticated version of it) would need to determine whether the close rates in attention and demand conditions suggest a single function (attention, because its rate is slightly higher) or multiple functions (both attention and escape).

This ambiguity is exactly the kind of case where visual inspection struggles and where ML might add value---by learning, from a large training set, how such ambiguous patterns are typically resolved. However, it is also the kind of case where a mechanistic model would be more informative: a matching-law analysis could assess whether the reinforcement rates in the attention and demand conditions are similar enough to expect similar response rates, regardless of function.

In practice, the tree might be most valuable as a **screening tool**: a fast, consistent way to classify functions that can flag ambiguous cases for deeper analysis. The mechanistic model is needed for treatment design, where you must understand WHY the behavior occurs to know how to change it.

---

## Plain-Language Interpretation

Machine learning models are like very sophisticated pattern matchers. They look at lots of examples and learn rules for making predictions about new cases they have not seen before.

A **decision tree** asks a series of yes/no questions about the data, like a flowchart. "Is the antecedent a demand? If yes, go left. Is the consequence escape? If yes, predict escape function." You can follow the questions from top to bottom and see exactly how the tree reaches its conclusion. This makes decision trees easy to understand and easy to explain to colleagues, clients, and families.

A **neural network** takes a completely different approach. Instead of learning explicit rules, it learns its own internal representation of the data through layers of interconnected nodes. Each node performs a simple calculation, but thousands of nodes working together can learn extremely complex patterns. The network does not produce a readable set of rules---it produces a set of numerical weights that, taken together, map inputs to outputs. The network can be very accurate, but you cannot look at the weights and understand, in plain language, what the network "knows."

Both types of models can be very accurate. But neither necessarily tells you the mechanism behind the pattern. A decision tree tells you WHICH features predict the outcome, and a neural network might not even tell you that much. Knowing that "demand antecedent" predicts "escape function" is useful, but it is not the same as understanding that escape-maintained behavior is controlled by negative reinforcement operating on a particular schedule. The pattern is not the explanation.

Think of the difference this way. A behavior analyst who understands the matching law can look at a concurrent schedule arrangement and say: "The problem behavior is maintained because the reinforcement rate for problem behavior is four times the reinforcement rate for appropriate behavior. If we equalize the rates, the matching law predicts the behavior allocation will shift toward a 1:1 ratio." That is explanation. It tells you why the current allocation exists and what to do about it.

A neural network trained on the same data might say: "There is a 91% probability that problem behavior will continue at the current rate." That is prediction. It tells you what will happen but not why, and it does not tell you what lever to pull to change the outcome.

Both statements are valuable. The prediction helps you plan. The explanation helps you intervene. The ideal is a model that does both---and that ideal is why behavior science should engage with ML thoughtfully rather than either embracing it uncritically or dismissing it.

For behavior scientists, this means ML models are best used as tools for discovery---finding patterns you might not have noticed---and as practical tools for classification and prediction. When you need to understand WHY, you still need the kinds of mechanistic models we have been building all semester.

A useful workflow combines both cultures. First, use an ML model (e.g., a random forest) to identify which features best predict the outcome of interest. This is discovery. Then, use those features to build or refine a mechanistic model that explains the relationship. This is understanding. The ML model does the heavy lifting of sifting through many possible features; the mechanistic model provides the insight needed for intervention design.

---

## Assumptions and Limitations

Machine learning models, despite their flexibility and power, carry important assumptions and limitations:

- **Data requirements.** ML models, especially neural networks and ensemble methods, require substantial amounts of data. A decision tree can be built from a modest dataset (50--100 cases), but a neural network might need thousands or tens of thousands of examples to learn reliable patterns. Behavior science datasets are often small by ML standards.

- **Garbage in, garbage out.** ML models learn from the data they are given. If the training data contain errors, biases, or unrepresentative samples, the model will learn those errors and biases. A model trained on functional analysis data from one clinic may not generalize to clients at another clinic with different assessment procedures.

- **The black-box problem.** Complex models (neural networks, large random forests) do not provide interpretable explanations for their predictions. Interpretability tools (SHAP, feature importance) can help, but they provide post hoc approximations, not true mechanistic explanations.

- **Correlation, not causation.** ML models find correlations in data. They do not identify causal relationships. A model might discover that "time since last meal" predicts problem behavior, but this does not mean hunger causes the behavior---it might be that mealtimes are correlated with other antecedent events (e.g., transitions, demands) that are the actual controlling variables.

- **Class imbalance.** When one class is much rarer than others (e.g., crisis-level problem behavior), standard ML algorithms will tend to predict the majority class and ignore the minority class. Special techniques (oversampling, class weighting, specialized metrics) are needed to handle imbalanced data.

- **Overfitting risk.** Complex models with many parameters can memorize training data, including its noise. Regularization, cross-validation, and appropriate model selection are essential but do not eliminate the risk entirely.

- **Reproducibility concerns.** ML workflows involve many researcher degrees of freedom: feature selection, model choice, hyperparameter tuning, data splitting. Without careful documentation and pre-registration, it is easy to arrive at a model that looks good on the data at hand but does not replicate.

- **Generalization across contexts.** A model trained in one behavioral context (e.g., residential treatment) may not generalize to another (e.g., public school classrooms). Domain shift---changes in the data distribution between training and deployment---is a major practical challenge. A decision tree trained on functional analysis data from one clinic, using that clinic's specific procedures, may produce incorrect classifications when applied to data from a clinic with different procedures, different populations, or different operational definitions of problem behavior.

- **Feature selection sensitivity.** The features you choose to include (and exclude) can dramatically change the model's predictions. Two researchers analyzing the same raw data may engineer different feature sets and arrive at different models with different conclusions. Unlike a mechanistic model where the variables are dictated by theory, ML models are sensitive to the researcher's choices about feature construction.

- **Interpretability is not explanation.** Even "interpretable" models like decision trees do not explain behavior in the way that mechanistic models do. A decision tree rule like "If rate in demand condition > 3.0, predict escape function" describes a statistical regularity, not a causal mechanism. The rule does not tell you that the behavior is maintained by negative reinforcement, or what would happen if you changed the contingency. Interpretability means you can read the model's rules; it does not mean you understand the behavioral process.

- **No free lunch.** The "no free lunch" theorem in ML states that no single algorithm is best for all problems. A method that excels on one dataset may fail on another. There is no substitute for understanding your data, your domain, and the assumptions of each algorithm. This is one more reason why domain expertise---behavioral expertise---is irreplaceable in applied ML.

---

## Connection to Empirical Behavior Science

### Introduction to ML Methods

**Badillo et al. (2020)** provide an accessible introduction to machine learning for researchers in the life sciences. Their paper covers the core concepts of supervised and unsupervised learning, common algorithms (linear models, trees, neural networks, clustering), and practical considerations for applying ML to scientific data. This is an excellent starting point for behavior scientists who want to understand what ML can and cannot do without wading through computer science textbooks.

### Practical Tools

**Bloice and Holzinger (2016)** offer a tutorial on using Python for data analysis and machine learning. For behavior scientists with programming experience (or those developing it through this course's labs), their paper provides practical guidance on implementing ML models using open-source tools like scikit-learn and pandas. The emphasis on reproducible workflows is particularly relevant for scientific applications.

### Applications in Behavior Science

Machine learning has begun to appear in the behavior-analytic literature in several areas:

- **Functional analysis automation.** Researchers have explored using classifiers to automate the interpretation of functional analysis data, reducing reliance on visual inspection for clear cases and flagging ambiguous cases for expert review. Decision trees and random forests are natural fits for this application because of their interpretability.

- **Precision behavioral intervention.** ML models can identify which client characteristics predict response to different treatments, enabling personalized treatment selection. This parallels the "precision medicine" movement in healthcare and represents an area where ML's predictive power is directly useful.

- **Behavioral phenotyping.** Unsupervised learning (clustering, dimensionality reduction) can identify subtypes within heterogeneous populations. For example, clustering analysis of assessment data might reveal distinct behavioral profiles among individuals diagnosed with autism spectrum disorder, informing more targeted intervention approaches.

- **Real-time behavior monitoring.** Neural networks and other ML models can process streaming sensor data (accelerometers, video) to detect behavioral events in real time, enabling automated data collection and timely intervention.

### Connections to Other Modeling Frameworks

It is worth noting how ML relates to models covered in earlier weeks of this course. In Week 4 (Associative Learning), we built models that classified stimuli based on noisy evidence---a task structurally similar to classification in supervised learning. The difference is that SDT specifies the decision process (a criterion on a strength-of-evidence continuum), while a decision tree or neural network learns the decision process from data. In Week 11 (Computational Models), we built agent-based models and Q-learning models that generate behavior from internal processes. ML models can be seen as the inverse problem: given observed behavior, infer the mapping from environment to action, without specifying the internal process that produces it.

This complementarity is important. Computational models generate predictions from mechanisms (forward modeling). ML models infer patterns from observed data (inverse modeling). A complete science of behavior may need both: forward models to test mechanistic theories, and inverse models to discover patterns that the theories should explain.

### The Broader Context

The application of ML to behavior science is still in its early stages. Most published applications are proof-of-concept studies with small datasets and limited external validation. The field has an opportunity to adopt ML methods carefully---with attention to the prediction-explanation gap, validation standards, and interpretability---rather than uncritically importing methods from domains with very different data structures and scientific goals.

Several challenges are specific to behavior science:

- **Small sample sizes.** Single-subject designs produce rich data on few participants. ML thrives on large samples. Bridging this gap requires either aggregating data across participants (with appropriate attention to individual differences) or developing ML methods adapted to small-sample, high-measurement-occasion designs.

- **Temporal dependence.** Behavioral data are time series: observations within a session are not independent. Standard ML methods assume independent observations. Time-series-aware methods (recurrent neural networks, temporal cross-validation) are needed but add complexity.

- **Ethical stakes.** In behavior science, model predictions often inform clinical decisions about vulnerable populations. The consequences of errors---false positives, false negatives---can be severe. This raises the bar for validation and interpretability beyond what might be acceptable in, say, product recommendation systems.

- **The primacy of understanding.** Behavior science is fundamentally concerned with understanding why organisms behave as they do, not just predicting what they will do. ML's emphasis on prediction over explanation creates a cultural tension that the field must navigate thoughtfully.

---

## Exercises for Reflection

1. A colleague proposes using a deep neural network to predict which clients will respond to a specific behavioral intervention, based on intake assessment data. The network achieves 88% accuracy on a held-out test set. Would you recommend implementing this model in clinical practice? What additional information would you want before making that recommendation? What are the risks of deploying a model you cannot interpret?

2. Consider the decision tree built in the worked example. The tree perfectly classifies all 12 training cases. Does this mean it will perfectly classify new cases? Why or why not? What steps would you take to evaluate the tree's performance on new data, and what might cause it to fail?

3. A research team uses k-means clustering on a large dataset of behavioral assessments and discovers three distinct clusters of learner profiles. They name the clusters "high support," "moderate support," and "independent." Is this discovery or invention? How would you validate whether these clusters represent real subtypes rather than artifacts of the algorithm?

4. The prediction-explanation gap suggests that ML models can predict without explaining. But is the reverse also true---can a model explain without predicting? Think of a model from earlier in this course that provides a clear mechanistic explanation but has limited predictive accuracy. What does this tell you about the relationship between prediction and explanation in behavior science?

---

## Key Readings

**Required:**

**Badillo et al. (2020)** provided an accessible introduction to machine learning for biomedical researchers, covering the distinction between supervised and unsupervised learning, key algorithms (k-means clustering, decision trees, neural networks, regularized regression), and foundational concepts like the bias-variance tradeoff, cross-validation, and the curse of dimensionality. They framed ML as a "Culture 2" approach to modeling---one that prioritizes predictive accuracy over mechanistic interpretability---and discussed the implications for fields where understanding mechanism matters. This paper establishes the conceptual vocabulary for the week and makes explicit the tension between prediction and explanation that is central to evaluating whether ML tools are appropriate for behavioral questions.

**Bloice and Holzinger (2016)** provided a hands-on tutorial for building machine learning pipelines in Python, covering the core tools (NumPy, Pandas, Matplotlib, SciKit-Learn, Keras) and walking through supervised and unsupervised learning workflows with code examples. They emphasized reproducibility and the practical steps involved in loading data, engineering features, training models, and evaluating performance. This chapter complements the conceptual material in Badillo et al. by giving students the concrete technical skills to implement ML analyses themselves, ensuring that the week's content is not purely theoretical but equips students to actually build, train, and evaluate data-driven models of behavioral data.

**Supplemental:**

**Turgeon and Lanovaz (2020)** provided a tutorial specifically tailored to applying machine learning methods in behavioral research, covering supervised classification, feature selection, and model evaluation with examples drawn from applied behavior analysis. They addressed the practical considerations that arise when behavioral datasets are small, when classes are imbalanced, and when interpretability is valued alongside accuracy. This paper bridges the gap between the general ML introductions and the specific needs of behavior scientists, helping students see where ML tools add value in their own field and where caution is warranted.

**Kliegr, Bahnik, and Furnkranz (2019)** reviewed advances in machine learning that are particularly relevant to the behavioral sciences, including interpretable models, feature importance methods, and the integration of domain knowledge into ML pipelines. They argued that the most productive use of ML in behavioral research is not to replace theory-driven models but to discover patterns that theory-driven models can then explain---a perspective that aligns directly with the course's position that data-driven and theory-driven modeling are complementary, not competing, approaches.

**Morales and Escalante (2022)** provided a concise introduction to the three major paradigms of machine learning---supervised, unsupervised, and reinforcement learning---with an emphasis on biosignal applications. They clarified the mathematical foundations of each paradigm, including loss functions, optimization procedures, and evaluation metrics, in a compact format that is useful as a reference. This paper helps students locate the week's content within the broader ML landscape and reinforces the connection between the reinforcement learning paradigm covered in Week 11 and the supervised/unsupervised methods introduced this week.

**Yates et al. (2022)** reviewed cross-validation methods for model selection, using ecological examples to illustrate k-fold, leave-one-out, and blocked cross-validation strategies. They discussed when each method is appropriate, how to handle spatial and temporal autocorrelation in the data, and the pitfalls of using cross-validation naively. This paper extends the model-comparison tools from Week 6 into the ML domain, where cross-validation replaces information criteria as the primary method for guarding against overfitting, and it highlights that the core principle---evaluating models on data they have not seen---remains the same regardless of the modeling tradition.

**Raschka (2020)** provided a comprehensive treatment of model evaluation, model selection, and algorithm selection in machine learning, covering holdout methods, bootstrap estimation, nested cross-validation, and statistical tests for comparing model performance. He addressed subtle issues like the difference between evaluating a specific trained model and evaluating a learning algorithm, and he provided practical recommendations for researchers working with limited data. This paper gives students the rigorous evaluation framework needed to make defensible claims about whether a given ML model truly outperforms alternatives---a question that is just as important in behavior science as in any other application domain.

---

## Reading Guide

### Badillo et al. (2020)

- What distinction do the authors draw between Culture 1 and Culture 2 approaches to statistical modeling, and how does this difference affect interpretability?
- How do the terms weights, learning, and generalization in ML correspond to more traditional statistical terminology? Why is this translation important?
- What is the "black box" problem in ML, and what tools exist to improve interpretability?
- How are data points, features, and feature spaces defined in ML, and why is the notion of a feature vector central?
- What is the curse of dimensionality, and why does it pose problems for biomedical data?
- How can time be incorporated into ML, and what limitations exist?
- What role does feature engineering play in model performance?
- How can missing data and selection bias undermine ML models? What strategies help?
- What are imbalanced datasets, and why are they problematic?
- Define and contrast Euclidean distance and cosine similarity.
- What are strengths and weaknesses of k-means clustering?
- How does density-based clustering differ from k-means?
- What does hierarchical clustering add, and how is the resulting tree interpreted?
- Why is dimensionality reduction useful beyond visualization?
- What lesson does the wolf-husky example illustrate?
- What is the bias-variance tradeoff, and how does it relate to underfitting and overfitting?
- What is regularization (L1 vs. L2), and how does it improve generalizability?

### Bloice & Holzinger (2016)

- What are the five core tools highlighted for a Python ML pipeline?
- What do the symbols X and y typically represent in ML data structures?
- What distinguishes supervised from unsupervised learning in this framework?
- What is the role of SciKit-Learn in the Python ML stack?
- What is Keras, and how does it differ from SciKit-Learn?
- Why is reproducibility emphasized in this tutorial?
- Find 2--3 topics in the chapter that were surprising or intriguing to you. Come prepared to discuss what that topic was and why you found it surprising or intriguing.

---

## References

Badillo, S., Banfai, B., Birzele, F., Davydov, I. I., Hutchinson, L., Kam-Thong, T., Siebourg-Polster, J., Steiert, B., & Zhang, J. D. (2020). An introduction to machine learning. *Clinical Pharmacology & Therapeutics, 107*(4), 871--885. https://doi.org/10.1002/cpt.1796

Bloice, M. D., & Holzinger, A. (2016). A tutorial on machine learning and data science tools with Python. In A. Holzinger (Ed.), *Machine learning for health informatics* (pp. 435--480). Springer. https://doi.org/10.1007/978-3-319-50478-0_22

Breiman, L. (2001). Statistical modeling: The two cultures. *Statistical Science, 16*(3), 199--231. https://doi.org/10.1214/ss/1009213726

---

## Key Takeaways

- **Two cultures of modeling.** Culture 1 (data modeling) starts from a hypothesized mechanism and fits parameters. Culture 2 (algorithmic modeling) lets the algorithm find patterns without specifying a mechanism. Most behavior science is Culture 1; ML is Culture 2.

- **Supervised learning** learns a mapping from labeled inputs to outputs. Classification predicts categories; regression predicts continuous values. Performance must be evaluated on held-out data, not training data.

- **Unsupervised learning** finds structure in unlabeled data. Clustering groups similar observations; dimensionality reduction compresses features. These methods are exploratory and hypothesis-generating, not hypothesis-testing.

- **Decision trees** are interpretable ML models that split data using if-then rules based on feature values. They handle nonlinearity and interactions naturally but overfit without constraints. Random forests reduce overfitting by averaging many trees at the cost of interpretability.

- **Neural networks** are powerful function approximators composed of layers of nonlinear nodes. They can learn complex mappings but are black boxes---their internal weights are not interpretable in domain-specific terms.

- **The bias-variance tradeoff** governs model complexity. Regularization penalizes complexity; cross-validation selects the right complexity level. Both are essential tools for building models that generalize.

- **Feature engineering** is where domain expertise meets ML. Knowing which features matter (schedule parameters, reinforcement history, temporal context) is more important than choosing the most complex algorithm.

- **The prediction-explanation gap** is the central tension. ML models can predict accurately without explaining why. For screening and classification, prediction may suffice. For understanding mechanism and designing interventions, explanation is essential.

- **Responsible ML use** requires validation on held-out data, appropriate metrics for imbalanced classes, interpretability tools, careful documentation, and awareness that correlation does not imply causation.

- **The 8-step framework still applies.** Even when using ML, you must clearly define the phenomenon, state assumptions, specify the model, verify its properties, and validate against data. The framework is algorithm-agnostic.
