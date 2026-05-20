# Chapter 15: Final Project Presentations

> Week 13 of the 13-week sequence.

## Why This Topic Matters

This is where everything comes together. For twelve weeks you have been learning models---their structures, their assumptions, their strengths, and their limitations. You have fit matching equations, estimated discount rates, derived demand curves, compared models with information criteria, built models from scratch, handled multilevel data, explored dynamical systems, run simulations, and evaluated machine learning algorithms. Each week focused on a specific model family. This week focuses on you.

The final project asks you to take a behavioral phenomenon you care about and apply the full modeling toolkit. The 8-step framework is your guide. It has structured every chapter of this course, and it will structure your project. This week is not about learning new models. It is about demonstrating mastery of the modeling enterprise itself---the ability to move from a behavioral question to a formal representation, fit that representation to data, evaluate its adequacy, and communicate what you found.

Presenting your work is part of the scientific process. Models that live only in a notebook do not advance the field. Communicating your modeling choices---why you selected a particular functional form, what assumptions you made, how you evaluated fit, and what the model does and does not explain---is as important as the technical work itself. Your audience this week is your peers, and they have spent the same twelve weeks building the vocabulary to engage with your work critically and constructively.

The goal is not perfection. Every model is wrong. The goal is a clear, honest, and rigorous application of the framework to a question that matters to you.

---

## The Final Project

### Project Options

You have three options for the final project. Each requires a different emphasis, but all demand the same systematic approach.

**Option A: Model an existing dataset.** Obtain a dataset involving behavioral data---from a published study, a publicly available repository, or your own research. Build and evaluate a suite of models aimed at describing behavior-environment relations in that dataset. Fit at least two competing models. Use the model comparison tools from Week 6 (AIC, BIC, cross-validation, or a combination) to determine which model is most effective for the end goal of model building, specific to that dataset. Discuss why the winning model outperforms the alternatives and what behavioral insight the comparison provides.

**Option B: Formalize a verbal concept.** Take a concept or topic from behavior science that is currently described only in verbal or qualitative terms. Convert it into a formal mathematical model. State your assumptions explicitly. Demonstrate the model's utility with hypothetical or simulated data. Then convert the model into a recursive format---a difference equation or iterative algorithm---to demonstrate predictive capabilities. Show how the model generates trajectories over time and discuss what those trajectories reveal about the phenomenon.

**Option C: An alternative project.** Pursue a modeling project of your own design, with prior instructor approval. This option is for students who have a specific modeling question that does not fit neatly into Option A or Option B. The same standards of rigor apply: you must use the 8-step framework, state your assumptions, evaluate your model, and discuss limitations.

Regardless of which option you choose, the 8-step framework is the backbone of your project. Every step must be addressed explicitly.

### What Makes a Good Project

A good project is not necessarily a project with a perfect model. It is a project that demonstrates clear thinking at every stage:

- **Clear phenomenon (Step 1).** The behavioral phenomenon is well-defined. The reader or listener knows exactly what is being modeled and why it matters. There is no ambiguity about the target of the model.

- **Well-defined scope (Step 2).** The model's boundaries are stated. You are explicit about what the model covers and what it does not cover. A model of steady-state choice is not a model of acquisition. A model of individual discounting is not a model of group differences. Scope discipline is a sign of modeling maturity.

- **Appropriate model choice (Steps 3--5).** The mathematical form follows from the behavioral principles, not the other way around. You can justify why you chose a hyperbolic function, a power function, a differential equation, or a simulation. The assumptions are stated, not hidden.

- **Rigorous evaluation (Steps 6--8).** Dimensional consistency is verified. The model is tested against data (or simulated data for Option B). Predictions are derived and checked for plausibility. If you compared models, the comparison is principled---not just "this one had a lower residual."

- **Honest discussion of limitations.** Every model has limitations. Acknowledging them is not a weakness; it is a requirement. What assumptions are most fragile? What data would challenge the model? What would you do differently with more time or more data?

### Common Pitfalls

Over the years, several recurring issues have appeared in final projects. Being aware of them will help you avoid them.

**Trying to model too much.** The most common mistake is choosing a phenomenon that is too broad. "I want to model addiction" is not a project scope---it is a career. "I want to model how delay discounting rates change across the first 30 days of abstinence" is a project scope. Narrow relentlessly.

**Not stating assumptions.** Every model rests on assumptions, and failing to state them is failing at Step 4. If you assume steady state, say so. If you assume parameters are constant across conditions, say so. If you assume errors are normally distributed, say so. Unstated assumptions are untested assumptions.

**Confusing good fit with good explanation.** A model can fit data well without explaining the process that generated the data. A polynomial with enough terms will fit any dataset. That does not make it a good model. Fit is necessary but not sufficient. Ask yourself: does the model tell me something about how the behavioral process works, or does it just trace the shape of the data?

**Ignoring model comparison.** If you only fit one model, you cannot know whether a simpler or more complex alternative would serve better. Model comparison is not optional for Option A projects, and it strengthens Option B and C projects as well. Even comparing your model to a null model (e.g., the mean) is informative.

**Not connecting back to behavioral theory.** A model that floats free of behavioral theory is a curve fit, not a contribution. Your model should be grounded in behavioral principles. Your parameters should have behavioral interpretations. Your predictions should make behavioral sense. If they do not, that is worth discussing---but the connection to theory must be attempted.

---

## The Modeling Toolkit in Review

You have spent twelve weeks building a toolkit. This section reviews what is in it, organized by the 8-step framework that has structured every chapter. The purpose is not to reteach each model---you have the full chapters for that---but to remind you of the landscape so you can navigate it during your project.

### Weeks 1--5: The Classical Models

The first five weeks covered the workhorses of quantitative behavior science: **matching** (Week 2), **delay discounting** (Week 3), **behavioral economics and demand** (Week 4), and **the Rescorla-Wagner model** (Week 5), all preceded by the foundational introduction to modeling itself (Week 1).

These are all **algebraic or discrete-time models**. They express behavior-environment relations as equations that can be written on a single line. They describe **equilibrium states**---what behavior looks like after the system has settled, not the moment-to-moment dynamics of how it got there.

Each model captures a different behavioral phenomenon:

- **Matching** describes how behavior is allocated across concurrent sources of reinforcement.
- **Discounting** describes how the subjective value of a reinforcer decreases with delay, probability, or social distance.
- **Demand** describes how consumption changes as price increases, and the concept of essential value.
- **Rescorla-Wagner** describes how associative strength changes trial by trial during Pavlovian conditioning.

Despite their differences, every one of these models follows the same 8-step structure. In each case, you started with a phenomenon, defined the scope, identified the relevant behavioral principle, stated assumptions, wrote the equation, checked dimensions, specified constraints, and tested the model against data. The framework is the constant; the content changes.

If your final project involves choice, reinforcement allocation, or schedule performance, the matching law belongs in your toolkit. If it involves delayed, probabilistic, or social outcomes, discounting models apply. If it involves consumption, price, or resource allocation, demand analysis is relevant. If it involves learning or acquisition, Rescorla-Wagner---or one of its extensions---may be your starting point.

### Week 6: Model Comparison

Week 6 gave you the tools for choosing between competing models. This is not optional equipment---it is essential for any serious modeling effort.

**AIC** (Akaike Information Criterion) and **BIC** (Bayesian Information Criterion) balance fit against complexity. A model with more parameters will always fit at least as well as a simpler model, but the additional parameters may be capturing noise rather than signal. AIC and BIC penalize complexity, each in a slightly different way. BIC penalizes more heavily as sample size grows, favoring simpler models in large datasets.

**Cross-validation** takes a different approach: fit the model on one portion of the data and evaluate it on another. A model that fits the training data well but predicts the test data poorly is overfitting.

**Parsimony** is not just a preference---it is a principle. Given two models that account for the data equally well, the simpler model is preferred. The reason is not aesthetic; it is epistemic. The simpler model makes stronger claims (it achieves the same fit with fewer free parameters) and is therefore more falsifiable.

You will need these tools for your final project. If you are pursuing Option A, model comparison is the core of your analysis. If you are pursuing Option B or C, comparing your model to at least one alternative (even a simple baseline) strengthens your argument.

### Week 7: Model Construction

Week 7 addressed the craft of building models from scratch---the skills you need when no off-the-shelf equation applies to your phenomenon.

**Life-cycle diagrams** map the stages of a behavioral process and the transitions between them. They force you to think about state variables and flows before writing equations.

**Flow diagrams** represent stocks and flows---quantities that accumulate and the rates at which they change. They are the visual language of dynamical systems and are useful even when your final model is algebraic.

**Dimensional analysis** is the modeler's sanity check. Every term in an equation must have consistent units. If the left side is in responses per minute, the right side must also be in responses per minute. Dimensional analysis catches errors that algebra alone misses.

These are the skills you will use most directly in your project, especially if you are pursuing Option B. Building a model from a verbal description requires translating words into structure, and these tools provide the bridge.

### Weeks 8--9: Probabilistic and Multilevel Models

Weeks 8 and 9 introduced the machinery for handling **uncertainty** and **nested data**.

**Probabilistic models** treat data as draws from probability distributions rather than as fixed quantities. Maximum likelihood estimation, Bayesian inference, and credible intervals all belong here. If your data have noise---and all behavioral data have noise---probabilistic models provide the framework for quantifying what you know and what you do not know.

**Multilevel models** (also called hierarchical models or mixed-effects models) handle data that are nested: responses within sessions, sessions within participants, participants within groups. If your data come from multiple participants, a multilevel model allows you to estimate individual differences while borrowing strength across the sample. Ignoring the nesting structure leads to overconfident inferences.

If your project uses data from multiple participants or involves repeated measures over time, these tools apply. If your project involves Bayesian estimation or you want to express uncertainty about your parameter estimates, the probabilistic framework from these weeks is your foundation.

### Week 10: Dynamical Systems

Week 10 shifted from equilibrium models to models of **change over time**. Dynamical systems models describe trajectories, not endpoints. They ask: given the current state of the system, what happens next?

**Differential equations** express rates of change. The continuous-time version of the Rescorla-Wagner model is a differential equation. So are models of behavioral momentum, models of extinction, and models of schedule transitions.

**Phase portraits** visualize how a system evolves from any starting point. Fixed points, limit cycles, and attractors describe the long-run behavior of the system. Stability analysis tells you whether a fixed point is stable (the system returns to it after a perturbation) or unstable (the system moves away).

If your phenomenon involves change over time---acquisition, extinction, transitions between schedules, developmental trajectories---dynamical models belong in your toolkit. If you care about the path, not just the destination, this is the framework.

### Week 11: Computational Models

Week 11 covered models that cannot be written as closed-form equations. When the system is too complex for analytic solutions, you **simulate**.

**Agent-based models** specify rules for individual agents and let aggregate behavior emerge from their interactions. They are useful for modeling social behavior, group dynamics, and phenomena where the whole is more than the sum of its parts.

**Reinforcement learning models** (e.g., Q-learning, temporal difference learning) formalize how organisms update the value of actions based on experience. They connect to both the behavioral literature on reinforcement and the computer science literature on artificial intelligence.

**Simulation** as a general method allows you to explore "what if" questions, test sensitivity to assumptions, and generate predictions from models that resist analytic solution.

If your phenomenon involves emergence, complex interactions, or learning processes that unfold over many trials, computational models are the appropriate tool. They require more computational infrastructure than algebraic models but can capture phenomena that equations cannot.

### Week 12: Machine Learning

Week 12 introduced models built for **prediction** rather than explanation.

**Supervised learning** algorithms (decision trees, random forests, neural networks, support vector machines) learn input-output mappings from labeled data. They can achieve impressive predictive accuracy but are often difficult to interpret in behavioral terms.

**Unsupervised learning** algorithms (clustering, dimensionality reduction) find structure in data without labels. They are useful for exploration---discovering patterns you did not know to look for.

The key lesson from Week 12 is the **prediction-explanation gap**. A neural network that predicts behavior with 95% accuracy does not necessarily tell you anything about the behavioral process. Conversely, a simple two-parameter model that captures the underlying mechanism may predict less accurately but explain more. Understanding where your project falls on this continuum is important.

If you have a large dataset and your primary goal is prediction, machine learning tools are worth considering. But be clear about what you gain (predictive power) and what you lose (interpretability, connection to behavioral theory). For most behavior-science projects, machine learning is better used as an exploratory complement to theory-driven models than as a replacement.

---

## Presentation Guidelines

Your final presentation is the primary vehicle for communicating your project. It should be structured, clear, and honest. The following elements must be included.

### Clear Statement of the Behavioral Phenomenon

Begin with the phenomenon. What behavior are you modeling? In what context does it occur? Why does it matter? Your audience should understand the target of your model within the first two minutes of your presentation. Avoid jargon that your classmates have not encountered. Define terms. Show an example or a graph that illustrates the phenomenon.

### The 8-Step Framework Walkthrough

Walk through each of the eight steps as they apply to your project. This is the structural backbone of your presentation:

1. **Step 1: Phenomenon.** State the phenomenon clearly and concisely.
2. **Step 2: Scope.** Define the boundaries of your model. What does it cover? What does it exclude?
3. **Step 3: Principles.** Identify the behavioral principles or quantitative laws that inform your model.
4. **Step 4: Assumptions.** State every simplifying assumption. Be thorough. This is where many projects are weakest, and it is where the best projects shine.
5. **Step 5: Formulation.** Present the model---verbally first, then mathematically. Walk the audience through the equation or algorithm. Define every symbol.
6. **Step 6: Dimensions.** Verify dimensional consistency. This can be brief, but it must be explicit.
7. **Step 7: Constraints.** Specify parameter constraints, starting values, and the conditions under which the model applies.
8. **Step 8: Evaluation.** Present your results. How well does the model fit? What are the parameter estimates? What predictions does the model make? Do they make behavioral sense?

You do not need to spend equal time on every step. Some steps will be quick (dimensional consistency for a well-known model) and others will require extended discussion (assumptions for a novel model). Allocate your time according to where the interesting choices were made.

### Results

Present your model fits, parameter estimates, and predictions clearly. Use graphs. A well-labeled figure communicates more than a table of numbers. Show the data alongside the model predictions so the audience can see where the model succeeds and where it struggles.

If you estimated parameters, report them with confidence intervals or credible intervals where possible. Point estimates without uncertainty are incomplete.

### Model Comparison

If you fit multiple models (required for Option A, recommended for all), present the comparison explicitly. Report the comparison metrics (AIC, BIC, cross-validation error) and explain what they mean in context. Do not just report numbers---interpret them. A difference of 2 in AIC means something different from a difference of 20.

### Limitations and Future Directions

Every model has limitations. Discuss yours honestly:

- What assumptions are you least confident about?
- What data would challenge the model?
- What would you do differently with more time or more data?
- How would you extend the model?

This section is not a weakness in your presentation. It is a strength. It shows you understand the model, not just the math.

### Connection to Behavioral Theory

End by connecting your findings back to behavioral theory. What did the modeling exercise reveal about the phenomenon? What behavioral insight did you gain that you would not have gained from verbal description alone? How does your model relate to the broader literature?

A model disconnected from theory is a curve fit. A model grounded in theory is a contribution.

---

## Exercises for Reflection

These exercises are different from those in previous weeks. They are not about calculation or model fitting. They are about self-evaluation---taking stock of what you learned through the modeling process.

**Exercise 1.** Which step of the 8-step framework did you find most challenging in your project, and why? Reflect on what made that step difficult. Was it a conceptual challenge (e.g., stating assumptions you had not thought about) or a technical challenge (e.g., fitting a model that did not converge)? What would you do differently if you started over?

**Exercise 2.** What assumptions did you make that you are least confident about? Every model rests on assumptions, and some are more defensible than others. Identify the assumption in your model that feels most fragile. What evidence would you need to test it? What would happen to your model's predictions if that assumption were violated?

**Exercise 3.** If you had unlimited data and computing power, how would you extend your model? Think big. Would you add parameters? Would you switch to a different model family? Would you move from a descriptive model to a mechanistic one? Would you model individual differences? Would you incorporate temporal dynamics? This exercise is about vision, not feasibility.

**Exercise 4.** What did the modeling process teach you about the behavioral phenomenon that you did not know before? This is the most important question. Modeling is not just a technical exercise---it is a way of thinking. Formalizing a phenomenon forces you to be precise about things that verbal descriptions leave vague. What did that precision reveal? What questions did the model raise that you had not previously considered?

---

## Key Takeaways

This section summarizes the major lessons of the entire course---not just this week, but the arc from Week 1 through Week 13.

- **Models are tools for thinking, not just tools for fitting data.** The act of building a model---choosing variables, stating assumptions, writing equations---forces clarity about what you think is happening in a behavioral system. Even when a model fails, the failure is informative.

- **The 8-step framework applies to every model.** Whether you are fitting a matching equation or building an agent-based simulation, the same eight steps structure the work: identify the phenomenon, define the scope, identify principles, state assumptions, formulate the model, check dimensions, specify constraints, and evaluate. The framework is the constant across twelve weeks of diverse content.

- **All models are wrong; some models are useful.** This is not a platitude---it is a design principle. A model is a deliberate simplification. The question is never "Is this model true?" but "Is this model useful for the question I am asking?" Usefulness must be evaluated, not assumed.

- **Assumptions are the foundation of every model.** Unstated assumptions are untested assumptions. The most common source of model failure is not bad math but bad assumptions. Making assumptions explicit is the single most important modeling skill.

- **Description and explanation are both valuable, but they are not the same thing.** A model that fits data well describes a pattern. A model that specifies the process generating the pattern explains it. Behavior science needs both, and the modeler must be clear about which kind of model they are building.

- **Model comparison is not optional.** Fitting a single model tells you how well that model accounts for the data. Fitting multiple models and comparing them tells you whether a simpler or more complex alternative would do better. Parsimony, AIC, BIC, and cross-validation are the tools for this comparison.

- **Parameters should mean something.** In behavior science, the best models have parameters with behavioral interpretations---sensitivity, bias, discount rate, essential value. A parameter that cannot be interpreted is a parameter that cannot inform theory.

- **Dimensional consistency is non-negotiable.** If the units do not match, the equation is wrong. Full stop. This is the simplest and most powerful check available to the modeler.

- **Different phenomena demand different model families.** Equilibrium behavior calls for algebraic models. Change over time calls for dynamical systems. Emergent phenomena call for computational models. Large-scale prediction calls for machine learning. Knowing which tool to reach for is part of modeling expertise.

- **Uncertainty is not a nuisance---it is information.** Probabilistic models and multilevel models provide the machinery for quantifying uncertainty. Reporting parameter estimates without confidence intervals is like reporting a measurement without units.

- **The prediction-explanation gap is real and important.** A model can predict well without explaining anything. A model can explain a mechanism without predicting accurately. Understanding where your model falls on this continuum determines how you should interpret and present your results.

- **Modeling is a skill that improves with practice.** You are not the same modeler you were in Week 1. The framework, the vocabulary, and the habits of mind you have developed will serve you in any research context where quantitative reasoning matters---which is to say, in every research context.

You began this course by learning what models are. You end it by building your own. That is the trajectory of the modeling enterprise: from consumer to producer, from reading equations to writing them, from fitting other people's models to constructing your own. Carry the framework forward.
