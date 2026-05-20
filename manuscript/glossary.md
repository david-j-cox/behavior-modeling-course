# Glossary

**Acquisition.**  The process by which a new behavior or conditional response is learned, typically characterized by an increasing trend in responding over trials or sessions.

_See also:_ Extinction, Steady State, Rescorla-Wagner Model.

**Agent-Based Model.**  A computational model in which individual agents follow specified rules and interact with each other or an environment, producing emergent aggregate behavior that may not be predictable from the rules alone.

_See also:_ Computational Model, Simulation, Monte Carlo.

**AIC (Akaike Information Criterion).**  A measure of the relative quality of a statistical model that balances goodness of fit against model complexity, calculated as AIC = 2k - 2ln(L), where k is the number of parameters and L is the maximized likelihood.

_See also:_ BIC, Likelihood, Parsimony, Overfitting.

**Algorithm.**  A step-by-step procedure or set of rules for performing a computation or solving a problem, forming the basis of computational models.

_See also:_ Computational Model, Simulation, Q-Learning.

**Associative Strength.**  A theoretical quantity representing the degree of learned association between a conditioned stimulus and an unconditioned stimulus, central to the Rescorla-Wagner model and related accounts of respondent conditioning.

_See also:_ Rescorla-Wagner Model, Prediction Error, Acquisition.

**Attractor.**  A state or set of states toward which a dynamical system tends to evolve over time, regardless of starting conditions within some region. Fixed points, limit cycles, and strange attractors are common types.

_See also:_ Equilibrium, Stability, Phase Space, Bifurcation.

**Bayes Factor.**  The ratio of the marginal likelihoods of two competing models, providing a measure of the evidence in favor of one model over another within a Bayesian framework.

_See also:_ Likelihood, AIC, BIC, Maximum Likelihood Estimation.

**Bias.**  In the generalized matching equation, a parameter representing a constant preference for one alternative over another that is independent of the reinforcement ratio, often attributed to differences in response effort or qualitative aspects of reinforcement.

_See also:_ Matching Law, Generalized Matching, Sensitivity.

**BIC (Bayesian Information Criterion).**  A criterion for model selection that penalizes complexity more heavily than AIC, calculated as BIC = k ln(n) - 2ln(L), where k is the number of parameters, n is the sample size, and L is the maximized likelihood.

_See also:_ AIC, Parsimony, Likelihood, Overfitting.

**Bifurcation.**  A qualitative change in the behavior of a dynamical system that occurs when a parameter crosses a critical value, such as a stable equilibrium becoming unstable or splitting into multiple equilibria.

_See also:_ Attractor, Stability, Phase Space, Equilibrium.

**Cross-Validation.**  A model evaluation technique in which data are partitioned into training and test sets, the model is fit to the training set, and its predictive accuracy is evaluated on the held-out test set.

_See also:_ Overfitting, AIC, BIC, Parsimony.

**Curve Fitting.**  The process of finding parameter values that make a given mathematical function best describe a dataset, typically by minimizing the sum of squared residuals or maximizing the likelihood function.

_See also:_ Mechanistic Model, Parameter, Residual, R-Squared.

**Demand.**  The relationship between the price of a commodity (typically measured in responses per reinforcer) and the amount consumed, often described by Hursh and Silberberg's exponential demand equation.

_See also:_ Essential Value, Reinforcement, Discounting.

**Derivative.**  A mathematical quantity representing the instantaneous rate of change of a function with respect to one of its variables. In behavioral modeling, derivatives often represent rates of change in response strength, value, or other behavioral quantities over time.

_See also:_ Differential Equation, Function, Variable.

**Difference Equation.**  A mathematical equation that expresses the value of a variable at the next time step as a function of its current value and other quantities. The Rescorla-Wagner model in its trial-by-trial form is a difference equation.

_See also:_ Differential Equation, Rescorla-Wagner Model, Variable.

**Differential Equation.**  A mathematical equation that relates a function to its derivatives, describing how a quantity changes continuously over time. Used to model dynamic behavioral processes such as learning and extinction.

_See also:_ Difference Equation, Derivative, Equilibrium, Phase Space.

**Dimensional Analysis.**  The practice of checking that both sides of an equation have consistent physical units, serving as a verification tool in model construction (Step 6 of the 8-step framework).

_See also:_ Verification, Validation, Model.

**Discounting.**  The decrease in subjective value of a reinforcer as a function of delay to its delivery (delay discounting) or uncertainty about its delivery (probability discounting).

_See also:_ Demand, Reinforcement, Matching Law.

**Eigenvalue.**  A scalar associated with a linear transformation (matrix) that characterizes the rate and direction of change near an equilibrium point. In dynamical systems models, eigenvalues determine whether an equilibrium is stable, unstable, or oscillatory.

_See also:_ Jacobian, Stability, Equilibrium, Phase Space.

**Equilibrium.**  A state of a dynamical system at which all rates of change are zero, meaning the system will remain in that state unless perturbed. In behavioral terms, a steady state where response rates and reinforcement rates are no longer changing.

_See also:_ Stability, Attractor, Steady State, Differential Equation.

**Extinction.**  The decrease in responding that occurs when reinforcement is discontinued. Modeled dynamically as a process of declining response strength or associative value.

_See also:_ Acquisition, Reinforcement, Steady State.

**Function.**  A mathematical relationship that assigns exactly one output value to each input value. In behavioral modeling, functions describe how dependent variables (e.g., response rate) relate to independent variables (e.g., reinforcement rate).

_See also:_ Variable, Parameter, Model.

**Generalized Matching.**  An extension of the strict matching law that includes parameters for sensitivity and bias, expressed as log(B1/B2) = a log(r1/r2) + log(c), where a is sensitivity and c is bias.

_See also:_ Matching Law, Sensitivity, Bias.

**ICC (Intraclass Correlation Coefficient).**  A measure of the proportion of total variance attributable to differences between groups (e.g., subjects), used to assess the need for multilevel modeling in nested data structures.

_See also:_ Random Effect, Multilevel Model.

**Jacobian.**  A matrix of partial derivatives that describes how a system of differential equations behaves near an equilibrium point. Its eigenvalues determine the local stability of the equilibrium.

_See also:_ Eigenvalue, Stability, Equilibrium, Differential Equation.

**Likelihood.**  A function that expresses the probability of observed data given a set of parameter values and a model. Maximizing the likelihood function yields parameter estimates that make the observed data most probable under the model.

_See also:_ Maximum Likelihood Estimation, AIC, BIC, Bayes Factor.

**Matching Law.**  A quantitative relationship stating that the relative rate of responding on an alternative equals the relative rate of reinforcement obtained from that alternative.

_See also:_ Generalized Matching, Sensitivity, Bias.

**Maximum Likelihood Estimation.**  A method of estimating model parameters by finding the parameter values that maximize the likelihood of the observed data under the model.

_See also:_ Likelihood, Parameter, AIC, BIC.

**Mechanistic Model.**  A model that proposes a specific process or mechanism that generates the observed behavioral pattern, as opposed to a descriptive model that merely summarizes the pattern.

_See also:_ Curve Fitting, Model, Simulation.

**Model.**  A formal (mathematical or computational) representation of a system or process, constructed to predict, explain, or both. All models simplify reality; their value lies in whether the simplifications matter for the question at hand.

_See also:_ Parameter, Variable, Function, Mechanistic Model.

**Monte Carlo Simulation.**  A computational technique that uses repeated random sampling to estimate the properties of a system or the distribution of an outcome, useful when analytical solutions are unavailable.

_See also:_ Simulation, Agent-Based Model, Computational Model.

**Overfitting.**  A modeling error in which a model captures noise in the training data rather than the underlying signal, resulting in excellent fit to the training data but poor prediction of new data.

_See also:_ Parsimony, Cross-Validation, AIC, BIC.

**Parameter.**  A quantity that is fixed within a model but may differ across individuals or conditions, typically estimated from data. Examples include the sensitivity exponent in generalized matching and the discounting rate in Mazur's hyperbolic model.

_See also:_ Variable, Model, Curve Fitting, Maximum Likelihood Estimation.

**Parsimony.**  The principle that simpler models should be preferred over more complex ones when both account for the data equally well, because simpler models are less likely to overfit and more likely to generalize.

_See also:_ Overfitting, AIC, BIC, Cross-Validation.

**Phase Space.**  A multidimensional space in which each axis represents one variable of a dynamical system, and each point represents a complete state of the system. Trajectories through phase space show how the system evolves over time.

_See also:_ Attractor, Equilibrium, Stability, Differential Equation.

**Prediction Error.**  The difference between what was expected (predicted) and what actually occurred. In the Rescorla-Wagner model, prediction error drives learning: associative strength changes in proportion to the discrepancy between expected and obtained reinforcement.

_See also:_ Rescorla-Wagner Model, Associative Strength, Reinforcement Learning.

**Q-Learning.**  A model-free reinforcement learning algorithm that learns the value (Q-value) of taking a given action in a given state, updating values based on prediction errors without requiring a model of the environment.

_See also:_ Reinforcement Learning, Prediction Error, Algorithm.

**R-Squared.**  The proportion of variance in the dependent variable that is accounted for by the model, calculated as 1 minus the ratio of residual variance to total variance. A measure of descriptive adequacy, not explanatory validity.

_See also:_ Residual, Curve Fitting, Model.

**Random Effect.**  A model term representing variability across units (e.g., subjects or groups) that is treated as drawn from a probability distribution rather than estimated as fixed values, central to multilevel modeling.

_See also:_ ICC, Multilevel Model, Parameter.

**Reinforcement.**  A process in which a consequence of behavior increases the future probability or rate of that behavior. In quantitative models, reinforcement rate is typically measured as reinforcers delivered per unit time.

_See also:_ Reinforcer Rate, Response Rate, Matching Law.

**Reinforcement Learning.**  A class of computational algorithms in which an agent learns to select actions that maximize cumulative reward through trial-and-error interaction with an environment, closely related to behavioral principles of reinforcement.

_See also:_ Q-Learning, Prediction Error, Agent-Based Model, Algorithm.

**Reinforcer Rate.**  The number of reinforcers delivered per unit time, typically measured in reinforcers per minute. A key independent variable in models of schedule performance such as Herrnstein's hyperbola.

_See also:_ Response Rate, Reinforcement, Matching Law.

**Rescorla-Wagner Model.**  A model of respondent conditioning in which associative strength changes on each trial as a function of prediction error: the difference between the maximum associative strength supported by the unconditioned stimulus and the current total associative strength of all conditioned stimuli present.

_See also:_ Associative Strength, Prediction Error, Acquisition, Extinction.

**Residual.**  The difference between an observed data value and the value predicted by a model. Patterns in residuals indicate systematic misfit and suggest directions for model improvement.

_See also:_ R-Squared, Curve Fitting, Validation.

**Response Rate.**  The number of responses emitted per unit time, typically measured in responses per minute. The primary dependent variable in many operant models.

_See also:_ Reinforcer Rate, Matching Law, Steady State.

**Sensitivity.**  In the generalized matching equation, the exponent (a) that describes how strongly relative responding tracks relative reinforcement. A value of 1.0 indicates strict matching; values less than 1.0 indicate undermatching.

_See also:_ Matching Law, Generalized Matching, Bias.

**Sensitivity Analysis.**  The systematic investigation of how changes in model parameters or assumptions affect the model's predictions, used to identify which parameters the model is most sensitive to and which assumptions are most consequential.

_See also:_ Parameter, Validation, Simulation.

**Simulation.**  The process of running a computational model forward in time to generate synthetic data, especially useful when the system is too complex for analytical solutions.

_See also:_ Computational Model, Agent-Based Model, Monte Carlo Simulation.

**Stability.**  A property of an equilibrium point in a dynamical system. An equilibrium is stable if small perturbations cause the system to return to the equilibrium, and unstable if perturbations cause the system to move away.

_See also:_ Equilibrium, Attractor, Eigenvalue, Bifurcation.

**Steady State.**  A condition in which a behavioral measure (e.g., response rate) is no longer systematically changing over time, indicating that the organism's behavior has stabilized under the current environmental arrangement.

_See also:_ Equilibrium, Acquisition, Extinction.

**Validation.**  The process of testing whether a model's predictions match empirical data, distinct from verification (checking internal mathematical consistency) and from curve fitting (which only tests descriptive adequacy on the training data).

_See also:_ Verification, Cross-Validation, Residual.

**Variable.**  A quantity that changes across observations, conditions, or time. Independent variables are manipulated or selected by the researcher; dependent variables are measured. In models, variables are the quantities whose values the model predicts.

_See also:_ Parameter, Function, Model.

**Verification.**  The process of confirming that a model's mathematics are internally consistent and that the model does what the modeler intends, distinct from validation (testing against data).

_See also:_ Validation, Dimensional Analysis.
