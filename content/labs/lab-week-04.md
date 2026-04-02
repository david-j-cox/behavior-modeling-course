---
week: 4
title: "Associative Learning Models"
description: "Fit behavioral momentum models to extinction and alternative reinforcement data, and implement the Mackintosh model for associative learning."
notebooks:
  - filename: "equation_fits.ipynb"
    title: "Equation Fits"
dataFiles:
  - "behavioral_momentum_extinction_data.csv"
  - "behavioral_momentum_alternative_data.csv"
  - "mackintosh_model_data.csv"
---

## Associative Learning Models Lab

This week, we focus broadly on the area of respondent conditioning -- stimulus-stimulus learning. Two areas, in particular, have arguably been studied more than others from a quantitative modeling perspective. These are behavioral momentum (e.g., Nevin et al., 1983; Nevin & Shahan, 2011) and attempts to quantify changes in stimulus associative value (e.g., Mackintosh, 1975; Rescorla-Wagner, 1972). The purpose of this lab is twofold.

### Part 1: Behavioral Momentum Model Fitting

As with previous weeks, the first goal is to practice fitting an equation to experimentally obtained data. There are two datasets prepared for you to continue practicing this skill. One is a set of behavioral momentum data where extinction was the disruptor. The second is a set of behavioral momentum data where alternative reinforcement was the disruptor. The required reading for this week was the original Nevin and colleagues (1983) article, which was chosen so that you have a good grasp of what behavioral momentum is all about. Thus, to fit a model to the data, you'll want to dig into the supplemental materials to find the right equations.

**Hints for Behavioral Momentum Model Fitting:**

- **Parameter Bounds Matter:** The behavioral momentum equations have specific parameter constraints. For extinction: c and d should be positive, r should be > 0.1, and B0 should be reasonable baseline rates. For alternative reinforcement: p should be positive, r should be > 0.1.
- **Initial Parameter Guesses:** Think about what reasonable starting values might be: B0 should be close to the baseline response rate in the data; r is the reinforcement rate (look at the experimental conditions); c, d, p are scaling parameters (start with small positive values).

### Part 2: Recursive Models and the Mackintosh Model

The second goal is to introduce the idea of recursive models, which we will spend a lot of time with in later weeks. A recursive model is a model where the output of the model at time t is part of the input to the model at time t+1. Formally:

X(t+1) = f(X(t), I(t))

Here, X(t) is the state of the system at time t (e.g., associative strengths, attention weights), I(t) is the input or event at time t (e.g., CS, US, reinforcer delivery, prediction error), and f is a transition function describing how the system updates over time.

Your second task is to implement the Mackintosh (1975) model in code to visualize how the associative value of a stimulus evolves across trials, depending on different starting values for theta. To deepen your understanding, extend your model to incorporate changes in alpha (attention or salience) across trials. This will allow you to simulate phenomena such as (a) overshadowing, where one stimulus has a higher alpha than another; and (b) blocking, where a previously conditioned stimulus prevents learning about a new one due to its prior associative history.

**Hints for Mackintosh Model Implementation:**

- **Recursive Nature:** The associability (alpha) and association strength (V) update based on previous values.
- **Phenomenon Validation:** Your outputs should show: basic conditioning (association strength increases and associability adjusts), overshadowing (CS1 with high alpha gains more V than CS2 with low alpha), and blocking (CS2 shows minimal learning when CS1 already predicts the US).
