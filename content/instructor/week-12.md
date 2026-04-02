---
title: "Instructor Notes: Week 12 — Machine Learning and Artificial Intelligence"
week: 12
---

## Lecture Objectives

By the end of this lecture, students should be able to:

- Distinguish between Breiman's two cultures of modeling (data modeling vs. algorithmic modeling) and explain why most behavior science falls into Culture 1 while machine learning represents Culture 2
- Describe the difference between supervised learning (classification, regression) and unsupervised learning (clustering, dimensionality reduction), and give a behavioral example of each
- Explain how a decision tree makes predictions by splitting on features to minimize Gini impurity, and trace through a simple tree by hand to produce a classification
- Articulate the prediction-explanation gap: why a model can achieve high predictive accuracy without providing insight into behavioral mechanism, and why this matters for a science concerned with understanding and changing behavior
- Identify at least three practices for responsible use of ML in behavior science (held-out validation, handling class imbalance, interpretability tools, reproducible documentation)

## Suggested Lecture Walkthrough

**Estimated duration: 60 minutes**

### Opening: The Two Cultures (10 min)

Begin by asking students to reflect on every model they have built so far in the course. In every case---matching, discounting, momentum, drift-diffusion, dynamical systems---they started with a hypothesized mechanism and wrote an equation. Introduce Breiman's (2001) distinction: this is Culture 1. Now introduce Culture 2: what if you had no theory, just a large dataset, and you wanted a computer to find the pattern? This framing sets up the entire lecture.

Use a concrete contrast: Herrnstein's hyperbola (Culture 1) versus a neural network trained to predict response rate from schedule parameters (Culture 2). Both might achieve similar predictive accuracy. Only one tells you why response rate negatively accelerates. Ask students which they would prefer and why. This primes them for the prediction-explanation gap discussion later.

### Supervised vs. Unsupervised Learning (10 min)

Define supervised learning with a behavioral example: given features from a functional analysis (antecedent condition, consequence, rate), predict the function (attention, escape, tangible, automatic). The algorithm has labeled training data---cases where the function is known---and learns rules for classifying new cases.

Define unsupervised learning with a second example: given behavioral assessment scores for 200 learners but no diagnostic labels, find clusters of similar learners. The algorithm discovers structure without being told what to look for.

Keep this section conceptual. Students do not need algorithmic details yet---they need the distinction between "I have labels and want to predict them" versus "I have no labels and want to find structure."

### Decision Trees in Detail (15 min)

This is the heart of the lecture. Walk through the decision tree example from the chapter step by step.

1. Present the 12-case dataset on a slide or whiteboard.
2. Compute Gini impurity at the root node. Show the formula and the arithmetic. Students should see that maximum impurity (0.75) occurs when classes are equally distributed.
3. Evaluate the first candidate split (Antecedent = Demand?). Show how impurity drops from 0.75 to 0.50. Emphasize that the algorithm is choosing the split that produces the purest child nodes.
4. Continue splitting until all leaves are pure. Write the resulting if-then rules on the board.
5. Ask: "Could you hand this set of rules to a clinician? Would they make sense?" This highlights the interpretability advantage of trees.

**Typical student struggle:** Students may not immediately see why Gini impurity is preferable to simply counting correct classifications at each node. Explain that Gini measures how "mixed" a node is---a node with 50% attention and 50% escape cases is more impure than one with 90% attention and 10% escape, even though both contain some misclassifications. The algorithm wants to create nodes that are as homogeneous as possible.

**Typical student struggle:** Students may ask why we do not just write the classification rules by hand, since they are obvious from the functional analysis design. This is a good question. Acknowledge that for standard functional analyses, the rules ARE obvious. The value of ML appears when (a) the dataset is large and the patterns are not obvious, (b) there are many features and complex interactions, or (c) you want a consistent, automated process that does not depend on individual clinician judgment.

### Neural Networks---Brief Introduction (5 min)

Keep this brief. Students do not need to understand backpropagation in detail. The key points are:

- Layers of nodes, each computing a weighted sum plus nonlinear activation
- Universal function approximation: can learn any mapping with enough data and nodes
- The black-box problem: thousands of weights with no interpretable meaning

Show a diagram of a simple 3-layer network (input, one hidden layer, output). Point to the hidden layer and say: "This is where the learning happens, and this is what we cannot interpret." That is the core message.

### The Prediction-Explanation Gap (15 min)

This is the most important conceptual section. Spend real time here.

Present the relapse prediction scenario from the chapter: a neural network predicts relapse with 92% accuracy but cannot tell the clinician why a particular client is at risk. Contrast this with a behavioral momentum model that predicts relapse with 75% accuracy but tells you the mechanism (rich reinforcement context creates behavioral mass that resists change).

Pose the question directly: "Which model would you rather have?" Let students debate. Some will prefer accuracy (the network). Some will prefer understanding (the momentum model). Guide them toward the realization that the answer depends on the purpose:

- Screening? Prediction matters most.
- Treatment design? Mechanism matters most.
- Basic science? Explanation is the goal.

This is not a question with one right answer. The point is that students learn to ask "What do I need this model FOR?" before choosing a modeling approach.

**Typical student confusion:** Students sometimes think that if a model predicts well, it must have "found" the mechanism. Correct this firmly. A model can achieve high accuracy by exploiting correlations that have nothing to do with the causal mechanism. A neural network that uses "time of day" to predict problem behavior might be exploiting the fact that demands are always presented in the morning---the time of day is a proxy, not a cause.

### Responsible ML Use (5 min)

Cover the highlights quickly:

- Always validate on held-out data. Never report training accuracy alone.
- Use appropriate metrics for imbalanced classes (precision, recall, F1---not just accuracy).
- Use interpretability tools (SHAP, feature importance) when possible.
- Document everything for reproducibility.

**Typical student confusion:** Students may confuse cross-validation with data dredging. Clarify that cross-validation is a technique for estimating generalization performance, not for finding the best-performing model specification. If you try 50 different model configurations and pick the one with the best cross-validation score, you are doing model selection, which is legitimate---but you should report it as such and ideally validate on a truly held-out test set that was not used in the selection process.

**Typical student confusion:** Students often assume that more data always helps. Clarify that more data helps reduce variance (overfitting) but does not fix problems with bad features, biased sampling, or an inappropriate model. A million observations of poorly measured behavior will not produce a good model.

### References

- **Badillo et al. (2020)** --- Assign as the primary reading for an accessible overview of ML concepts.
- **Bloice and Holzinger (2016)** --- Recommend for students who want hands-on Python guidance for the lab.
- **Breiman (2001)** --- Reference for the "two cultures" framework. Students do not need to read the full paper, but citing it gives them a citable source for the distinction.

## Discussion Prompts

1. **Black-box acceptability.** "When would a black-box model be acceptable in applied behavior analysis? When would it not? Think of specific use cases---screening, treatment selection, progress monitoring, functional analysis interpretation---and argue for or against black-box models in each case."

2. **Feature engineering and domain knowledge.** "A data scientist with no behavioral training builds a neural network to predict treatment outcomes. A behavior analyst with basic ML skills builds a logistic regression using carefully chosen behavioral features. Who do you think will build the better model, and why? What does this tell you about the relative importance of algorithms versus domain knowledge?"

3. **ML and single-subject design.** "Most ML methods require large datasets, but behavior science values single-subject designs with small samples and tight experimental control. How can ML and single-subject methodology coexist? Are there ways to apply ML thinking to single-case data, or are these fundamentally incompatible approaches?"

4. **Ethics of automated classification.** "If a decision tree can classify the function of problem behavior with 90% accuracy, should clinicians defer to the tree's classification when it disagrees with their visual inspection? What are the ethical implications of automating clinical judgment?"

## In-Class Demonstrations

### Demonstration: Building a Decision Tree by Hand

Distribute a small dataset on a handout (or display on screen). Use 16--20 cases with 3--4 features and a categorical outcome variable (e.g., function of problem behavior). Include some ambiguous cases where function is not immediately obvious from a single feature.

Have students:

1. Compute the Gini impurity at the root node (all cases combined)
2. Evaluate two candidate splits (e.g., "Antecedent = Demand?" and "Rate > 3.0?") by computing the weighted Gini impurity for each
3. Choose the better split and draw the first level of the tree
4. Continue splitting for one more level
5. Write out the resulting if-then rules in plain language
6. Discuss: Do these rules make behavioral sense? Would you trust them for a new client?

This exercise takes approximately 15--20 minutes. It grounds the algorithm in a concrete, hands-on activity and reveals which students understand the impurity calculations versus those who need additional support. It also naturally leads into the discussion about whether the tree's rules constitute explanation or merely description.

For classes that work quickly, extend the exercise: ask students to identify a case that the tree misclassifies and discuss what feature or split might fix the error. This introduces the concept of tree depth and overfitting in a concrete way.

## Transition to Lab

The lab for this week has students train a decision tree classifier in Python using scikit-learn. The dataset is a larger version of the functional analysis classification task (50--100 cases with multiple features).

**Setup notes:**

- Ensure the lab notebook or script is ready with the dataset preloaded and scikit-learn installed. Students should not spend time on installation or data entry.
- The lab walks students through: (a) loading and inspecting the data, (b) splitting into training and test sets, (c) fitting a `DecisionTreeClassifier` with specified maximum depth, (d) visualizing the tree using `plot_tree`, (e) evaluating performance using a confusion matrix and classification report (precision, recall, F1), and (f) performing 5-fold cross-validation using `cross_val_score`.
- After the basic tree, students train a `RandomForestClassifier` on the same data, compare performance, and examine feature importance scores. This naturally demonstrates the interpretability-accuracy tradeoff: the forest is more accurate but cannot be drawn as a single readable tree.
- Remind students during the lecture that scikit-learn uses Gini impurity by default, which matches the hand calculations they did in class. This reinforces the connection between the in-class exercise and the computational implementation.
- Students who finish early can experiment with different hyperparameters (max depth, min samples per leaf, number of trees in the forest) and observe how these affect cross-validated performance. This gives them hands-on experience with the bias-variance tradeoff.
- For the final lab question, students are asked to compare their decision tree's rules with the rules they would write based on behavioral knowledge alone. This connects back to the prediction-explanation gap and the value of domain expertise in feature engineering.
