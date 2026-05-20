# Appendix C: Quick Reference Sheets

## The 8-Step Modeling Framework

| Step | Action | Behavior-Science Translation |
|:-----|:-------|:----------------------------|
| 1 | Get the physical picture clearly in mind | Understand the behavioral phenomenon thoroughly before formalizing |
| 2 | Define the physical processes and boundaries | Specify which behavioral processes are in scope and which are excluded |
| 3 | Write down the laws and transport functions | Identify the quantitative laws and functional relationships to use |
| 4 | State the restrictive assumptions | List every simplifying assumption explicitly |
| 5 | Perform the balance in words, then symbols | Write the model verbally first, then translate to equations |
| 6 | Check units | Verify that both sides of every equation have consistent dimensions |
| 7 | Write down initial and boundary conditions | Specify starting values, valid ranges, and constraints |
| 8 | Verify, validate, and solve | Check the math, test against data, and derive predictions |

## Common Probability Distributions

| Distribution | Probability Function | Mean | Variance | When to Use |
|:-------------|:---------------------|:-----|:---------|:------------|
| Bernoulli | {$$}P(X=1) = p{/$$} | {$$}p{/$$} | {$$}p(1-p){/$$} | Single binary trial (response / no response) |
| Binomial | {$$}P(X=k) = \binom{n}{k} p^k (1-p)^{n-k}{/$$} | {$$}np{/$$} | {$$}np(1-p){/$$} | Count of successes in {$$}n{/$$} independent trials |
| Poisson | {$$}P(X=k) = \frac{\lambda^k e^{-\lambda}}{k!}{/$$} | {$$}\lambda{/$$} | {$$}\lambda{/$$} | Count of events in a fixed time window at constant rate |
| Exponential | {$$}f(t) = \lambda e^{-\lambda t}{/$$} | {$$}1/\lambda{/$$} | {$$}1/\lambda^2{/$$} | Time between successive events (inter-response times) |
| Normal | {$$}f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-(x-\mu)^2 / 2\sigma^2}{/$$} | {$$}\mu{/$$} | {$$}\sigma^2{/$$} | Continuous measurement with symmetric variability |

## Dynamical Systems Concepts

| Concept | Definition | Behavioral Example |
|:--------|:-----------|:-------------------|
| State variable | A quantity defining the system's current state | Response rate, associative strength |
| Phase space | The set of all possible states | All possible combinations of two competing response rates |
| Trajectory | The path a system follows through phase space | The acquisition curve from initial to steady-state responding |
| Equilibrium | A state where the system does not change | Steady-state response rate on a VI schedule |
| Stable equilibrium | System returns to this state after perturbation | Response rate recovers after a brief disruption |
| Unstable equilibrium | Any perturbation drives the system away | Zero responding: once a single response is reinforced, rate grows |
| Attractor | A state or set of states the system tends toward | The matching-law equilibrium in concurrent schedules |
| Limit cycle | A stable oscillation the system settles into | Cyclic patterns in adjunctive behavior |
| Bifurcation | A qualitative change in dynamics when a parameter crosses a threshold | Transition from stable responding to extinction when reinforcement is removed |
