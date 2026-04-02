---
slug: "week-5"
number: 5
published: true
title: "Historical Models -- Respondent Conditioning"
subtitle: "Prediction error as the engine of learning"
description: "The Rescorla-Wagner model, behavioral momentum, blocking, prediction error as a learning rule."
keyModels:
  - "Rescorla-Wagner"
  - "Behavioral Momentum"
  - "Mackintosh Attention Model"
keyEquations:
  - "Delta V = alpha * beta * (lambda - V)"
  - "V_n+1 = V_n + alpha * beta * (lambda - V_n)"
---

## Why This Topic Matters

The Rescorla-Wagner model is arguably the most influential formal model in all of learning theory. Published in 1972, it introduced a single, powerful idea: learning is driven by **prediction error**. An organism learns not because two events occur together in time, but because the outcome of a trial differs from what the organism expected. When outcomes are surprising, learning is rapid. When outcomes are fully predicted, learning stops. This idea---that the discrepancy between expected and actual events is the engine of associative change---transformed the study of classical conditioning from a catalogue of phenomena into a quantitative science.

Before Rescorla and Wagner, the dominant view was that contiguity---the mere pairing of a conditioned stimulus (CS) and an unconditioned stimulus (US)---was sufficient for learning. The logic seemed straightforward: if a tone sounds and food appears, the organism forms an association between tone and food. Repeat the pairing, and the association strengthens. This view had roots in Pavlov's original work and was formalized in various contiguity-based models throughout the mid-twentieth century. But experimental findings had begun to erode that view. Rescorla's own work (1968) demonstrated that what mattered was not merely the pairing of CS and US but the **contingency** between them---the degree to which the CS provided information about the occurrence of the US. A CS paired with a US but in a context where the US also occurred frequently without the CS showed little conditioning, even though the number of CS-US pairings was identical to a condition that produced robust conditioning.

Then came Kamin's blocking effect. In blocking, a CS paired with a US acquires no associative strength if another CS already predicts that US. Contiguity was present, but learning did not occur. Something was missing from the contiguity account, and that something turned out to be prediction error.

The Rescorla-Wagner model gave these findings a mathematical home. It also predicted new phenomena---conditioned inhibition, superconditioning, overexpectation---that were subsequently confirmed in the laboratory. The model did not merely describe what had already been found; it told experimenters where to look next. This is the hallmark of a productive formal model.

The model's reach extended far beyond animal learning. The prediction error signal it formalized became the basis for **temporal difference learning** in artificial intelligence, a cornerstone of modern reinforcement learning algorithms. Sutton and Barto (1981, 1998) extended the Rescorla-Wagner idea to real-time, sequential decision-making, creating the framework that underlies much of contemporary AI. When DeepMind's AlphaGo defeated a world champion at Go, the learning algorithm at its core descended, intellectually, from the Rescorla-Wagner equation. And when Schultz, Dayan, and Montague (1997) discovered that dopamine neurons in the primate midbrain fire in a pattern that closely resembles the temporal difference prediction error, a bridge was built between behavioral learning theory, computational neuroscience, and artificial intelligence. Few models in any science can claim such reach.

This week also introduces **behavioral momentum theory**, developed by John Nevin and colleagues. Behavioral momentum theory borrows the mass-velocity metaphor from Newtonian physics to formalize how resistant behavior is to disruption. Just as a heavier object is harder to stop, behavior maintained by richer reinforcement contexts is more resistant to change. This theory has direct clinical applications: it explains why some behaviors persist despite intervention and provides a quantitative framework for predicting when and how disruption will succeed. Nevin's insight was that the **rate** of behavior and the **persistence** of behavior are not the same thing, and they are controlled by different variables. This distinction has profound implications for treatment design.

Finally, we consider **Mackintosh's attention model**, which addresses a limitation of the Rescorla-Wagner model by allowing the associability parameter to change with experience. Stimuli that are good predictors of outcomes become more associable over time; stimuli that are poor predictors become less so. This captures phenomena like learned irrelevance that the Rescorla-Wagner model handles poorly. Mackintosh's model represents a move from purely error-driven learning to learning that includes attentional selection---a theme that has become increasingly important in modern learning theory.

Together, these models illustrate a core theme of this course: simple mathematical rules, carefully specified, can capture complex and surprising features of behavior. They also illustrate how models evolve. The Rescorla-Wagner model identified prediction error as the key variable; behavioral momentum theory identified reinforcement context as the determinant of persistence; Mackintosh identified attention as a learnable process. Each model built on the successes and limitations of its predecessors, advancing the field incrementally but cumulatively.

---

## Core Concepts

### Associative Strength and Prediction Error

The central construct in the Rescorla-Wagner model is **associative strength**, denoted $V$. Associative strength represents the degree to which a CS predicts the US. When $V$ is high, the organism "expects" the US when the CS appears. When $V$ is low or zero, the CS carries no predictive information. When $V$ is negative, the CS actively signals the absence of the US.

It is important to understand that $V$ is a theoretical construct, not a directly observable quantity. We never measure associative strength itself. Instead, we infer it from observable behavior: the magnitude of the conditioned response, the probability of responding, the latency to respond. The model assumes that these observable measures are monotonically related to $V$---higher associative strength produces stronger, more probable, and faster conditioned responses. This mapping from $V$ to behavior is sometimes called the **response rule**, and it is a separate assumption from the learning rule itself.

**Learning** in this framework is a change in associative strength. The critical insight is that learning does not occur simply because the CS and US are paired. Learning occurs when there is a **prediction error**---a discrepancy between what the organism expects and what actually happens.

The prediction error on a given trial is:

$$\text{Prediction Error} = \lambda - V$$

where $\lambda$ is the **asymptotic associative strength** supported by the US (essentially, the maximum learning the US can support) and $V$ is the current total associative strength of all CSs present on that trial.

Three cases are possible:

- When $\lambda - V > 0$, the US is **underpredicted**. The organism is surprised by the occurrence or magnitude of the US, and associative strength increases. This is a **positive prediction error**. It drives excitatory conditioning.
- When $\lambda - V < 0$, the US is **overpredicted**. The organism expects more than what occurs (including expecting the US when it does not appear), and associative strength decreases. This is a **negative prediction error**. It drives extinction and conditioned inhibition.
- When $\lambda - V = 0$, the US is **fully predicted**. There is no surprise, no error, and **no learning**. The system is at equilibrium.

This framework transforms the question "Why does learning occur?" into the more precise question "Why does prediction error exist on this trial?" The answer to the second question is always traceable to the parameters of the model and the training history. It also transforms the question "Why does learning stop?" into an equally precise answer: learning stops when prediction error reaches zero, which happens when the organism's expectation matches reality.

---

### The Rescorla-Wagner Model

The Rescorla-Wagner model specifies how associative strength changes from one trial to the next:

$$\Delta V = \alpha \beta (\lambda - V)$$

or equivalently, as an update rule:

$$V_{n+1} = V_n + \alpha \beta (\lambda - V_n)$$

where:

- $\Delta V$ is the change in associative strength on a given trial
- $V_n$ is the associative strength at the start of trial $n$
- $V_{n+1}$ is the associative strength after trial $n$
- $\alpha$ (alpha) is the **salience of the CS**---a fixed parameter between 0 and 1 that reflects how noticeable or attention-grabbing the CS is. A loud tone has a higher $\alpha$ than a dim light. A brightly colored visual stimulus has a higher $\alpha$ than a faint background hum.
- $\beta$ (beta) is the **learning rate parameter associated with the US**---a fixed parameter between 0 and 1 that reflects how effectively the US supports learning. A large food pellet might have a higher $\beta$ than a small one. A strong shock might have a higher $\beta$ than a mild one. Note that in some formulations of the model, separate $\beta$ values are used for reinforced and non-reinforced trials ($\beta_1$ and $\beta_2$), because the rate of learning during acquisition may differ from the rate of learning during extinction.
- $\lambda$ (lambda) is the **asymptotic associative strength** supported by the US. On reinforced trials (CS followed by US), $\lambda$ is typically set to some positive value (often 1.0 for convenience). On non-reinforced trials (CS presented without US), $\lambda = 0$. The value of $\lambda$ can also vary with US magnitude: a larger US supports a higher asymptote.

Several features of this equation deserve emphasis:

1. **It is a difference equation**, not a differential equation. It updates in discrete steps, trial by trial. This makes it natural for trial-based conditioning procedures (where each trial is a distinct CS-US pairing separated by an intertrial interval) but less suited for continuous, real-time processes where events unfold continuously.

2. **The product $\alpha \beta$ governs the learning rate.** Higher CS salience or more effective US processing produces faster learning. But note that $\alpha$ and $\beta$ have the same mathematical effect---they multiply together to form a single rate parameter. In practice, they are difficult to estimate separately from a single learning curve. Their theoretical distinction matters, however, for predictions about compound stimuli (where different CSs have different $\alpha$ values but share the same $\beta$).

3. **$V$ in the prediction error term is the sum of all CSs present on the trial.** If stimuli A and B are both present, the prediction error is $\lambda - (V_A + V_B)$. This summation rule is what allows the model to explain compound stimulus phenomena like blocking. It is also what produces predictions about overexpectation and superconditioning. The summation assumption is arguably the most consequential assumption in the model.

4. **The model produces negatively accelerated learning curves.** Early in training, $V$ is small, so the prediction error is large and learning is rapid. As $V$ approaches $\lambda$, the prediction error shrinks and learning slows. The learning curve approaches $\lambda$ asymptotically---it gets closer and closer but never quite reaches it (in theory, it would take infinitely many trials to reach $\lambda$ exactly).

5. **The model handles extinction naturally.** If the US is removed ($\lambda = 0$) after conditioning, the prediction error becomes $0 - V = -V$, which is negative. On each extinction trial, $V$ decreases: $\Delta V = \alpha \beta (0 - V) = -\alpha \beta V$. The extinction curve is the mirror image of the acquisition curve---negatively accelerated, approaching zero asymptotically.

---

### Blocking

**Blocking** is one of the most important phenomena in the study of classical conditioning, and it is the phenomenon that most dramatically illustrates the power of the Rescorla-Wagner model.

The procedure is as follows:

- **Phase 1:** CS_A is paired with the US for many trials until $V_A \approx \lambda$. The organism has learned that A predicts the US.
- **Phase 2:** The compound CS_A + CS_B is paired with the same US for several trials. Both A and B occur together, followed by the US.
- **Test:** CS_B is presented alone. The question is whether B has acquired any associative strength.

The contiguity account predicts that B should acquire strength---after all, B was paired with the US on every trial in Phase 2. The proximity of B and the US is identical to conditions that normally produce robust conditioning. But experimentally, B shows little or no conditioning. A "blocks" learning about B.

The Rescorla-Wagner model explains this elegantly. At the start of Phase 2, $V_A \approx \lambda$ and $V_B = 0$. The total associative strength on compound trials is $V_A + V_B \approx \lambda$. The prediction error is:

$$\lambda - (V_A + V_B) \approx \lambda - \lambda = 0$$

With no prediction error, neither stimulus gains (or loses) associative strength:

$$\Delta V_B = \alpha_B \beta (0) = 0$$

B gains nothing because there is nothing left to learn. The US is already fully predicted by A. Adding B to the compound does not change the organism's expectation---the US was expected and the US occurred. There is no surprise, no discrepancy, and therefore no learning.

This is a direct, quantitative explanation that falls out of the model's assumptions without any additional machinery. No special "blocking mechanism" is needed. Blocking emerges from the general prediction-error learning rule combined with the summation of associative strengths.

It is worth pausing to appreciate why this matters. Before the Rescorla-Wagner model, blocking was a puzzling anomaly---a case where learning "should" occur (by contiguity) but does not. After the model, blocking became the natural consequence of a general learning principle. The model did not just explain blocking; it showed that blocking is exactly what a rational, error-correcting learner should do.

**Unblocking** provides an important complement. If the US changes between Phase 1 and Phase 2 (e.g., it becomes larger or smaller), prediction error is restored: $\lambda_{\text{new}} - V_A \neq 0$. Now B can gain (or lose) associative strength on compound trials. The fact that changing the US unblocks learning about B confirms that it is the prediction error, not the mere presence of A, that prevents learning in the standard blocking design.

---

### Conditioned Inhibition

**Conditioned inhibition** occurs when a stimulus acquires **negative** associative strength---it signals the absence of an expected US. A conditioned inhibitor does not merely fail to predict the US; it actively predicts that the US will **not** occur.

The standard procedure for establishing conditioned inhibition uses two trial types interleaved within the same session:

- **A+ trials:** CS_A is presented alone and followed by the US. On these trials, $\lambda > 0$, and $V_A$ increases toward $\lambda$.
- **AB- trials:** The compound CS_A + CS_B is presented without the US. On these trials, $\lambda = 0$.

On A+ trials, the situation is simple: $V_A$ grows as in any standard conditioning procedure. On AB- trials, the prediction error is computed against the compound:

$$\lambda - (V_A + V_B) = 0 - (V_A + V_B)$$

Since A has positive associative strength (from A+ trials), the compound prediction $V_A + V_B$ is positive, so the prediction error is negative. Both stimuli lose associative strength on these trials:

$$\Delta V_A = \alpha_A \beta_2 (0 - (V_A + V_B)) < 0$$
$$\Delta V_B = \alpha_B \beta_2 (0 - (V_A + V_B)) < 0$$

But A is gaining strength on A+ trials and losing it on AB- trials. Over many trials, A reaches a positive equilibrium value that balances these opposing forces. B, which only appears on non-reinforced trials, accumulates more and more negative associative strength with each AB- trial. B becomes a **conditioned inhibitor**.

What does negative associative strength mean behaviorally? A conditioned inhibitor suppresses conditioned responding when presented in compound with an excitatory CS. If you test the compound A + B, the conditioned response is weaker than if you test A alone, because $V_A + V_B < V_A$ when $V_B < 0$. The inhibitor "subtracts" from the excitatory prediction.

Two standard tests confirm conditioned inhibition:

1. **The summation test:** Present the putative inhibitor (B) in compound with a separately trained excitatory CS (C, where $V_C > 0$). If B is truly inhibitory ($V_B < 0$), the compound CB should produce less responding than C alone.

2. **The retardation test:** Try to condition B as an excitatory CS by pairing it with the US. If B has negative associative strength, it must first climb from negative to zero before it can become excitatory. This means conditioning will be slower than for a novel (neutral) stimulus.

Both tests were formalized by Rescorla (1969) and provide operational criteria for conditioned inhibition that map directly onto the Rescorla-Wagner model's predictions.

---

### Overshadowing

A related compound stimulus phenomenon is **overshadowing**. When two CSs of unequal salience are conditioned in compound (AB+), the more salient CS acquires more associative strength than the less salient one, and each acquires less than it would have if conditioned alone. This occurs because both CSs share the same prediction error but receive increments proportional to their respective $\alpha$ values:

$$\Delta V_A = \alpha_A \beta (\lambda - (V_A + V_B))$$
$$\Delta V_B = \alpha_B \beta (\lambda - (V_A + V_B))$$

If $\alpha_A > \alpha_B$, then $V_A$ grows faster than $V_B$ on every trial. As $V_A$ grows, it "uses up" the prediction error, leaving less for $V_B$. At equilibrium, $V_A + V_B = \lambda$, but $V_A > V_B$. A overshadows B.

Overshadowing is a less dramatic version of the same mechanism that produces blocking. In blocking, one CS has already consumed all the prediction error before the second CS is introduced. In overshadowing, the two CSs compete for prediction error from the start, and the more salient one wins a larger share.

---

### Behavioral Momentum Theory

**Behavioral momentum theory**, developed primarily by John Nevin and colleagues, provides a formal account of how resistant behavior is to disruption. The theory draws an explicit analogy to Newtonian mechanics: behavior has both a **velocity** (its rate or probability of occurrence) and a **mass** (its resistance to change when external forces are applied). Just as a moving object with greater mass is harder to stop, behavior maintained in a richer reinforcement context is harder to disrupt.

The key insight---and it was genuinely surprising when first proposed---is that the **rate of behavior** and the **persistence of behavior** are governed by different variables. This runs counter to the intuition that behaviors occurring at higher rates are "stronger" in every sense. Nevin showed that this is not the case.

Response rate is controlled primarily by the **response-reinforcer contingency**---the operant relation. How often you press the lever per minute depends on the schedule of reinforcement for lever pressing. Resistance to change, by contrast, is controlled primarily by the **stimulus-reinforcer contingency**---the Pavlovian relation between the discriminative stimulus and all reinforcement obtained in its presence, regardless of whether that reinforcement is contingent on the target response.

This distinction was demonstrated in elegant experiments using multiple schedules. In a typical design, pigeons respond in two components of a multiple schedule. Both components have identical response-reinforcer contingencies (e.g., the same VI schedule), but one component includes additional response-independent (free) food deliveries. The free food does not increase response rate---in fact, it may decrease it slightly. But when disruption is introduced (e.g., pre-feeding, extinction), behavior in the component with additional food is more resistant to change. The free food increased the stimulus-reinforcer relation (more total food in the presence of that stimulus) without changing the response-reinforcer relation.

The basic quantitative expression for resistance to change is:

$$\log \left( \frac{B_x}{B_o} \right) = -x \cdot \frac{c}{r}$$

where:

- $B_o$ is the baseline response rate before disruption
- $B_x$ is the response rate during or after disruption
- $x$ is the magnitude of the disruptor (e.g., duration of pre-feeding, number of extinction sessions)
- $r$ is the rate of reinforcement in the component during baseline
- $c$ is a scaling constant that captures the effectiveness of the disruptor

The ratio $B_x / B_o$ is the **proportional change** in behavior. Taking the logarithm means we are modeling proportional change on a log scale, which is natural when comparing across conditions with different baselines.

In plain language: the proportional change in behavior during disruption is a function of the ratio of disruption magnitude to reinforcement rate. Higher reinforcement rates produce less proportional change---greater momentum. The behavior has more "mass."

This framework generates several important predictions:

1. **Differential resistance to change:** In a multiple schedule with rich and lean components, behavior in the rich component will be proportionally less disrupted by extinction, satiation, or other challenges. This has been confirmed repeatedly.

2. **Independence of rate and resistance:** Manipulations that change response rate (e.g., adding a response cost) do not necessarily change resistance to change. And manipulations that change resistance to change (e.g., adding free reinforcers) do not necessarily change response rate.

3. **Clinical implications for problem behavior:** If a problem behavior occurs in a context rich in reinforcement (e.g., a child's tantrums are reinforced by attention in a context that also includes many other reinforcers), that behavior will be resistant to treatment-induced disruption. This has implications for how we design interventions and anticipate treatment challenges.

4. **Relapse prediction:** When treatment is itself disrupted (e.g., a caregiver stops implementing an intervention, or the individual moves to a new setting), the original problem behavior may resurge. Behavioral momentum theory, extended to a quantitative model of resurgence (Shahan & Craig, 2017), predicts the degree of relapse based on the reinforcement history of the problem behavior and the treatment context.

The physics metaphor is worth examining carefully. In Newtonian mechanics, momentum = mass $\times$ velocity, and force = mass $\times$ acceleration. A heavier object requires more force to change its velocity by a given amount. In behavioral momentum theory, "mass" corresponds to the strength of the stimulus-reinforcer relation (the Pavlovian context), "velocity" corresponds to response rate, and "force" corresponds to the disruptor. The metaphor is not merely poetic; it generates quantitative predictions that can be tested.

However, the metaphor has limits. In physics, momentum is a conserved quantity in closed systems. In behavior, there is no conservation law---reinforcement can be added or removed without compensating changes elsewhere. The metaphor guides thinking but should not be taken literally beyond its intended scope.

---

### Overexpectation

**Overexpectation** is a particularly striking prediction of the Rescorla-Wagner model because it involves a **decrease** in associative strength despite the continued presence of the US.

The procedure is as follows:

- **Phase 1:** CS_A is conditioned alone until $V_A \approx \lambda$. Separately, CS_B is conditioned alone until $V_B \approx \lambda$.
- **Phase 2:** The compound CS_A + CS_B is paired with the **same** US as before.

What happens? The total prediction on compound trials is $V_A + V_B \approx 2\lambda$, but the US only supports $\lambda$. The prediction error is:

$$\lambda - (V_A + V_B) \approx \lambda - 2\lambda = -\lambda$$

This is a large **negative** prediction error, even though the US is present. Both $V_A$ and $V_B$ decrease:

$$\Delta V_A = \alpha_A \beta (\lambda - (V_A + V_B)) < 0$$
$$\Delta V_B = \alpha_B \beta (\lambda - (V_A + V_B)) < 0$$

Over multiple compound trials, $V_A$ and $V_B$ both decline until $V_A + V_B = \lambda$. Each CS ends up with associative strength of approximately $\lambda / 2$.

This is counterintuitive: both CSs are paired with the US on every trial in Phase 2, yet both lose associative strength. Contiguity is fully maintained, but learning goes in the "wrong" direction. The Rescorla-Wagner model predicts this because the organism's total expectation overshoots reality, and the model corrects the overshoot by reducing each CS's contribution. Overexpectation has been confirmed experimentally (Rescorla, 1970; Lattal & Nakajima, 1998) and stands as one of the model's most impressive novel predictions.

---

### Mackintosh's Attention Model

**Mackintosh's attention model** (1975) was developed to address phenomena that the Rescorla-Wagner model does not handle well, particularly **learned irrelevance** and certain features of latent inhibition.

The key difference from Rescorla-Wagner is that Mackintosh allows the **associability parameter** $\alpha$ to change with experience. In the Rescorla-Wagner model, $\alpha$ is a fixed property of the CS---a loud tone always has the same salience regardless of the organism's history with it. Mackintosh argued that this is psychologically unrealistic. Organisms learn to attend to stimuli that are good predictors of outcomes and learn to ignore stimuli that are poor predictors. This is attentional selection, and it requires $\alpha$ to be a variable, not a constant.

Mackintosh's learning rule for associative strength is similar to Rescorla-Wagner:

$$\Delta V_{CS} = \alpha_{CS} \beta (\lambda - V_{CS})$$

Note the important difference: the prediction error in Mackintosh's model is computed for **each CS individually** ($\lambda - V_{CS}$), not for the summed compound ($\lambda - \Sigma V$). This means each stimulus learns independently, based on its own prediction error. The competition between stimuli occurs through the associability rule, not through shared error.

Mackintosh's rule for updating associability is:

- If $|V_{CS} - \lambda|$ < $|V_{\text{other}} - \lambda|$, then $\alpha_{CS}$ **increases**. The CS is a better predictor of the outcome than other available stimuli, so the organism increases its attention to it.
- If $|V_{CS} - \lambda|$ > $|V_{\text{other}} - \lambda|$, then $\alpha_{CS}$ **decreases**. The CS is a worse predictor than other stimuli, so the organism decreases its attention to it.

The logic is intuitive: pay attention to informative stimuli and ignore uninformative ones. This is adaptive---organisms with limited processing capacity should allocate attention to the cues that best predict important outcomes.

This produces a rich set of predictions:

1. **Learned irrelevance:** If a stimulus has an extensive history of being uncorrelated with any outcome (e.g., many random presentations of the CS with no consistent US), its $\alpha$ decreases to a low value. Later, when it is paired with a US, learning is slow because $\alpha$ is already low. The organism has learned to ignore this stimulus. The Rescorla-Wagner model, with fixed $\alpha$, cannot account for this---it predicts that prior non-reinforced exposure has no lasting effect on the rate of subsequent learning (since $V$ returns to zero during the non-reinforced phase).

2. **Intradimensional-extradimensional shift effects:** After learning to discriminate stimuli along one dimension (e.g., color), organisms learn faster on a new discrimination along the same dimension (intradimensional shift) than along a new dimension (extradimensional shift). Mackintosh's model explains this as a transfer of high associability to the relevant dimension: $\alpha$ for color cues is high after the first discrimination, which facilitates learning a new color discrimination but does not help with a shape discrimination.

3. **Differential blocking:** Some blocking effects are asymmetric in ways that variable $\alpha$ can explain better than fixed $\alpha$. For instance, if the added CS has a history of being a good predictor of other outcomes, its $\alpha$ may be high, allowing it to partially overcome blocking.

4. **Attention as an explanatory variable:** Mackintosh's model provides a formal account of what "attention" means in the context of learning. It is not a vague cognitive concept; it is a specific, quantifiable parameter ($\alpha$) that changes according to a well-defined rule.

The Mackintosh model adds complexity but also explanatory power. It represents a move from a purely error-driven account to one that includes **attentional** processes---a theme that recurs in many modern learning theories, including the Pearce-Hall model (1980), the hybrid model of Le Pelley (2004), and various computational accounts.

---

## Applying the 8-Step Framework

This section walks through each step of the 8-step modeling framework using the Rescorla-Wagner model applied to a concrete example: conditioning a tone (CS) with food delivery (US) over multiple trials.

**Step 1: Get the behavioral phenomenon clearly in mind.**

A hungry rat is placed in a conditioning chamber equipped with a speaker, a food magazine, and an infrared beam that detects approaches to the magazine. On each trial, a 10-second tone is presented, and at tone offset, a food pellet is delivered into the magazine. Trials are separated by a variable intertrial interval averaging 90 seconds. We measure the rat's conditioned response (CR)---approach to the food magazine during the tone, as detected by beam breaks---as an index of learning.

Over the course of 30 conditioning trials, the following pattern emerges: On the first few trials, the rat shows little magazine approach during the tone. By trials 5--10, approach begins to increase. By trials 15--20, approach is robust and reliable. After trial 20, further increases are small. The learning curve is negatively accelerated: large gains early, diminishing gains later. The rat has learned that the tone predicts food.

We want to model this acquisition process---specifically, how the tone's ability to predict food (its associative strength) changes trial by trial.

---

**Step 2: Define the behavioral processes and scope of the model.**

We are modeling the **acquisition of associative strength** between the tone (CS) and food (US) over a series of discrete conditioning trials. The model's scope is limited to:

- How the CS-US association changes from trial to trial
- How the rate of change depends on the parameters of the CS and US

We are explicitly **not** modeling:
- The form or topography of the conditioned response (magazine approach vs. salivation vs. freezing)
- The timing of the CR within the CS period
- What happens during the intertrial interval
- Extinction, spontaneous recovery, or reinstatement
- Any real-time dynamics within a trial
- Contextual conditioning or background associations

The model operates at the level of trials: each trial produces a single update to associative strength. This is a significant simplification---real learning involves continuous processes within and between trials---but it is appropriate for capturing the trial-by-trial trajectory of acquisition.

---

**Step 3: Identify the behavioral principles and quantitative laws.**

The governing principle is that **associative learning is driven by prediction error**---the discrepancy between what the organism expects and what actually occurs. This principle was articulated by Rescorla and Wagner (1972) based on converging evidence from blocking, contingency, and other compound stimulus experiments.

The quantitative law is the Rescorla-Wagner equation:

$$\Delta V = \alpha \beta (\lambda - V)$$

This is a linear difference equation with a single stable equilibrium at $V = \lambda$. It was proposed by Rescorla and Wagner (1972) and has been tested extensively against conditioning data from many species (rats, pigeons, rabbits, humans) and many preparations (eyeblink, fear, appetitive, taste aversion).

---

**Step 4: State all simplifying assumptions.**

1. The CS has a fixed salience ($\alpha$) that does not change with experience. (This is the assumption Mackintosh's model relaxes.)
2. The US has a fixed processing rate ($\beta$) that does not change with experience.
3. Associative strength is a single scalar quantity that changes trial by trial. It is not a distribution, a vector, or a multidimensional representation.
4. When multiple CSs are present on a trial, their associative strengths sum linearly to produce the total prediction. This is the elemental summation assumption.
5. All learning occurs at the moment of US presentation (or non-presentation). Nothing changes between trials---there is no consolidation, forgetting, or spontaneous change.
6. The CR is a monotonic function of $V$---higher associative strength produces stronger conditioned responding. The exact form of this mapping (linear, sigmoidal, threshold) is not specified by the model.
7. There is no generalization between stimuli; each CS has its own $V$ value that changes independently, though through the shared error term.
8. The context (chamber, background cues) is treated as either absent or as a separate CS with its own $V$. The basic model typically ignores contextual conditioning.

---

**Step 5: Write the model verbally, then mathematically.**

Verbally: On each conditioning trial, the associative strength of the tone increases by an amount proportional to the discrepancy between the maximum associative strength the food can support and the current associative strength of the tone. The proportionality constant is the product of the tone's salience and the food's learning rate parameter. When the tone's associative strength is low (early in training), the discrepancy is large and learning is rapid. As the tone's associative strength approaches the maximum, the discrepancy shrinks and learning slows.

Mathematically:

$$V_{n+1} = V_n + \alpha \beta (\lambda - V_n)$$

where:
- $V_n$ is the associative strength of the tone at the start of trial $n$
- $\alpha = 0.3$ (the tone is moderately salient---not a whisper, not a blast)
- $\beta = 0.5$ (the food pellet supports a moderate learning rate)
- $\lambda = 1.0$ (the asymptotic associative strength supported by the food, set to 1 for convenience)

In plain language: after each trial, the tone's predictive strength moves a fraction of the remaining distance toward the maximum level the food supports. The fraction is $\alpha \beta = 0.15$, or 15% of the remaining gap. This "constant fraction of remaining distance" property is what produces the characteristic negatively accelerated learning curve.

---

**Step 6: Verify dimensional consistency.**

$V$ represents associative strength, which is a dimensionless quantity on an arbitrary scale (here, 0 to 1). $\alpha$ and $\beta$ are dimensionless proportions (no units). $\lambda$ is in the same arbitrary units as $V$. The product $\alpha \beta (\lambda - V)$ is therefore dimensionless, and $V_{n+1} = V_n + \text{(dimensionless increment)}$ is consistent.

Note that this is a difference equation, not a rate equation, so there are no time units to check. The model steps in units of "trials," and all quantities are expressed per trial or are dimensionless. If we wanted to connect the model to real time, we would need an additional assumption about the mapping between trial number and clock time---but this is outside the model's scope (as defined in Step 2).

---

**Step 7: Specify starting values and constraints.**

- $V_0 = 0$: Before any conditioning, the tone has no associative strength. The organism has no reason to expect food when the tone sounds.
- $0 < \alpha \leq 1$: Salience is bounded between 0 (exclusive---a CS with zero salience cannot support any learning) and 1 (a maximally salient CS).
- $0 < \beta \leq 1$: The learning rate parameter is similarly bounded.
- $\lambda \geq 0$: The asymptote is non-negative on reinforced trials. On non-reinforced trials (extinction), $\lambda = 0$.
- The model applies from trial 1 onward and is defined only for integer trial numbers (trial 1, trial 2, ..., trial $N$).
- Associative strength is **not** bounded by the model itself---$V$ can exceed $\lambda$ in compound stimulus situations (this is the overexpectation effect) or become negative (conditioned inhibition). The model does not enforce $0 \leq V \leq \lambda$.
- For this example, the model applies to the acquisition phase only. Extending to extinction would require setting $\lambda = 0$ and continuing the iteration.

---

**Step 8: Check the math, test against data, and derive predictions.**

**Verify:** At $n = 0$, $V_0 = 0$, so $\Delta V = 0.3 \times 0.5 \times (1.0 - 0) = 0.15$, and $V_1 = 0.15$. This is positive and less than $\lambda$, which makes sense---the organism should learn something on the first trial but should not jump to asymptote immediately.

At $n = 1$, $V_1 = 0.15$, so $\Delta V = 0.15 \times (1.0 - 0.15) = 0.15 \times 0.85 = 0.128$, and $V_2 = 0.278$. The increment is smaller than on trial 1, confirming the negatively accelerated pattern.

As $V \to \lambda$, $\Delta V \to 0$. The model predicts that learning slows as the organism approaches full prediction of the US. This matches the negatively accelerated learning curves observed empirically in conditioning preparations.

**Boundary check:** If $\alpha = 0$, then $\Delta V = 0$ on every trial---a completely non-salient CS supports no learning. If $\beta = 0$, the same---an ineffective US supports no learning. If $V_0 = \lambda$, then $\Delta V = 0$---no learning occurs if the CS already fully predicts the US. All of these are sensible.

**Validate:** Fit the model to trial-by-trial conditioning data. Estimate $\alpha$ and $\beta$ by minimizing the discrepancy between predicted $V_n$ and observed CR magnitude (or probability) on each trial. Assess goodness of fit using residual analysis, $R^2$, or information criteria. In practice, the Rescorla-Wagner model fits many acquisition datasets well, though systematic deviations occur (e.g., the model sometimes predicts too little learning on the very first trial).

**Solve:** Given fixed parameter values, iterate the difference equation to generate the complete learning curve. This is the worked example that follows.

**Derive new predictions:** The model predicts several phenomena beyond simple acquisition:

- **Blocking:** Adding a redundant CS to an already-predicted compound produces no learning about the new CS.
- **Overexpectation:** Combining two independently trained excitatory CSs produces a summed prediction that exceeds $\lambda$, causing both to lose strength.
- **Conditioned inhibition:** A CS paired with the absence of an expected US acquires negative associative strength.
- **Overshadowing:** In compound conditioning, the more salient CS acquires more associative strength.

Each of these is a testable, quantitative prediction that can be checked against data.

---

## Worked Example

### Acquisition: Single CS, 10 Trials

We set the parameters as follows:

- $\alpha = 0.3$ (CS salience)
- $\beta = 0.5$ (US learning rate)
- $\lambda = 1.0$ (asymptotic associative strength)
- $V_0 = 0$ (no prior conditioning)

The effective learning rate per trial is $\alpha \beta = 0.15$. On each trial, the update rule is:

$$V_{n+1} = V_n + 0.15 \times (1.0 - V_n)$$

Computing trial by trial:

| Trial ($n$) | $V_n$ (start) | Prediction Error ($\lambda - V_n$) | $\Delta V = 0.15 \times (\lambda - V_n)$ | $V_{n+1}$ (end) |
|:-----------:|:--------------:|:-----------------------------------:|:-----------------------------------------:|:----------------:|
| 1           | 0.000          | 1.000                               | 0.150                                     | 0.150            |
| 2           | 0.150          | 0.850                               | 0.128                                     | 0.278            |
| 3           | 0.278          | 0.722                               | 0.108                                     | 0.386            |
| 4           | 0.386          | 0.614                               | 0.092                                     | 0.478            |
| 5           | 0.478          | 0.522                               | 0.078                                     | 0.556            |
| 6           | 0.556          | 0.444                               | 0.067                                     | 0.623            |
| 7           | 0.623          | 0.377                               | 0.057                                     | 0.680            |
| 8           | 0.680          | 0.320                               | 0.048                                     | 0.728            |
| 9           | 0.728          | 0.272                               | 0.041                                     | 0.769            |
| 10          | 0.769          | 0.231                               | 0.035                                     | 0.804            |

Several patterns are visible in the table:

1. **The prediction error decreases monotonically.** On trial 1, the error is 1.000; by trial 10, it has shrunk to 0.231. The US becomes less and less surprising as the tone becomes a better predictor.
2. **The increment $\Delta V$ decreases monotonically.** The organism learns the most on the first trial (0.150) and progressively less on each subsequent trial (down to 0.035 by trial 10).
3. **The learning curve is negatively accelerated.** $V$ rises quickly at first and then levels off, approaching but never quite reaching $\lambda = 1.0$.
4. **After 10 trials, $V \approx 0.80$.** Substantial learning has occurred, but the asymptote has not been reached. The model predicts that approximately 20% of the learning remains.

The general closed-form solution for the Rescorla-Wagner model with a single CS is:

$$V_n = \lambda \left(1 - (1 - \alpha\beta)^n \right)$$

This can be derived by recognizing that the difference equation $V_{n+1} = V_n + \alpha\beta(\lambda - V_n)$ is equivalent to $V_{n+1} = (1 - \alpha\beta)V_n + \alpha\beta\lambda$, which is a linear first-order recurrence with constant coefficients. Substituting our parameters:

$$V_n = 1.0 \left(1 - (1 - 0.15)^n \right) = 1 - 0.85^n$$

At $n = 10$: $V_{10} = 1 - 0.85^{10} = 1 - 0.1969 = 0.8031$, which matches our iterative computation (the small discrepancy in the table is due to rounding at each step).

We can also ask: how many trials to reach 95% of asymptote? We need $V_n = 0.95$, so $1 - 0.85^n = 0.95$, giving $0.85^n = 0.05$, so $n = \log(0.05) / \log(0.85) = -2.996 / -0.163 \approx 18.4$ trials. After about 19 trials, the tone's associative strength will be at 95% of its maximum value.

---

### Extinction: Following Acquisition with Non-Reinforced Trials

Suppose that after 20 acquisition trials, we switch to extinction: the tone is presented but no food follows ($\lambda = 0$). At the start of extinction, $V_{20} = 1 - 0.85^{20} = 1 - 0.0388 = 0.961$.

The update rule during extinction is:

$$V_{n+1} = V_n + \alpha \beta (0 - V_n) = V_n - 0.15 V_n = 0.85 V_n$$

So on each extinction trial, $V$ retains 85% of its previous value. The extinction curve is an exponential decay:

| Extinction Trial | $V_n$ (start) | Prediction Error ($0 - V_n$) | $\Delta V$ | $V_{n+1}$ (end) |
|:----------------:|:--------------:|:----------------------------:|:-----------:|:----------------:|
| 1                | 0.961          | -0.961                       | -0.144      | 0.817            |
| 2                | 0.817          | -0.817                       | -0.123      | 0.694            |
| 3                | 0.694          | -0.694                       | -0.104      | 0.590            |
| 4                | 0.590          | -0.590                       | -0.088      | 0.501            |
| 5                | 0.501          | -0.501                       | -0.075      | 0.426            |

After 5 extinction trials, $V$ has dropped from 0.961 to 0.426---a substantial decline. Note that the prediction error is now negative on every trial: the organism expects the US ($V > 0$) but it does not occur ($\lambda = 0$). The negative prediction error drives $V$ downward. And just as acquisition is negatively accelerated (large early gains, small late gains), extinction is also negatively accelerated (large early losses, small late losses).

This symmetry between acquisition and extinction is a feature of the model. Both processes are driven by the same equation; they differ only in the value of $\lambda$.

---

### Blocking Demonstration

Now we demonstrate blocking numerically. Suppose CS_A has been trained extensively in Phase 1:

- **After Phase 1:** $V_A = 0.95$ (approximately at $\lambda = 1.0$; not exactly 1.0 because the model asymptotes gradually).

In Phase 2, we present the compound CS_A + CS_B with the US. CS_B is a new stimulus with $V_B = 0$, $\alpha_A = 0.3$, and $\alpha_B = 0.3$.

On each compound trial, the total associative strength is $V_A + V_B$. The prediction error is computed against the compound total, and each CS receives an increment proportional to its own $\alpha$:

$$\Delta V_A = \alpha_A \beta (\lambda - (V_A + V_B))$$
$$\Delta V_B = \alpha_B \beta (\lambda - (V_A + V_B))$$

Since $\alpha_A = \alpha_B = 0.3$ and $\beta = 0.5$, both stimuli receive the same increment on each trial (they have the same salience and share the same prediction error):

| Phase 2 Trial | $V_A$ | $V_B$ | $V_A + V_B$ | Prediction Error | $\Delta V_A$ | $\Delta V_B$ | New $V_A$ | New $V_B$ |
|:--------------:|:-----:|:-----:|:------------:|:----------------:|:-------------:|:-------------:|:---------:|:---------:|
| 1              | 0.950 | 0.000 | 0.950        | 0.050            | 0.008         | 0.008         | 0.958     | 0.008     |
| 2              | 0.958 | 0.008 | 0.966        | 0.034            | 0.005         | 0.005         | 0.963     | 0.013     |
| 3              | 0.963 | 0.013 | 0.976        | 0.024            | 0.004         | 0.004         | 0.967     | 0.017     |
| 4              | 0.967 | 0.017 | 0.984        | 0.016            | 0.002         | 0.002         | 0.969     | 0.019     |
| 5              | 0.969 | 0.019 | 0.988        | 0.012            | 0.002         | 0.002         | 0.971     | 0.021     |

After 5 compound trials, $V_B = 0.021$---essentially zero conditioning. Compare this to what would happen if B had been conditioned alone from the start: after 5 solo trials, $V_B$ would be $1 - 0.85^5 = 0.556$. The presence of the already-trained A has **blocked** learning about B by a factor of more than 25.

The blocking is not absolute (B gains a tiny amount of strength because $V_A$ was not exactly at $\lambda$), but it is dramatic. The critical mechanism is that A's prior learning leaves almost no prediction error for B to capture. On the first compound trial, the prediction error is only 0.050 instead of the 1.000 that B would face if conditioned alone. And because each trial further reduces the remaining error, B's increments shrink rapidly.

---

### Effect of Different Learning Rates

To illustrate the role of the rate parameters, compare three conditions with the same $\lambda = 1.0$ and $V_0 = 0$:

| Condition | $\alpha$ | $\beta$ | $\alpha\beta$ | $V$ after 5 trials | $V$ after 10 trials | $V$ after 20 trials |
|:---------:|:--------:|:-------:|:--------------:|:-------------------:|:--------------------:|:--------------------:|
| Slow      | 0.1      | 0.2     | 0.02           | 0.096               | 0.183                | 0.332                |
| Moderate  | 0.3      | 0.5     | 0.15           | 0.556               | 0.803                | 0.961                |
| Fast      | 0.8      | 0.8     | 0.64           | 0.994               | 1.000                | 1.000                |

The fast learner ($\alpha\beta = 0.64$) reaches asymptote within 5 trials---each trial closes 64% of the remaining gap, so very little gap remains after even a few trials. The slow learner ($\alpha\beta = 0.02$) has barely begun after 10 trials and has not reached even 50% of asymptote after 20 trials. The moderate learner is the middle case we computed in detail above.

The shape of all three curves is the same---negatively accelerated exponential approach to $\lambda$---but the speed differs dramatically. This illustrates how $\alpha$ and $\beta$ function as rate parameters without changing the qualitative form of the learning curve.

---

### Behavioral Momentum: A Numerical Example

Consider a multiple schedule with two components, Rich and Lean, each associated with a different reinforcement rate:

- **Rich component:** $r_{\text{rich}} = 60$ reinforcers/hr; baseline response rate $B_o = 40$ resp/min
- **Lean component:** $r_{\text{lean}} = 15$ reinforcers/hr; baseline response rate $B_o = 40$ resp/min

Note that baseline response rates are the same in both components. This can occur when the response-reinforcer contingency is identical but the stimulus-reinforcer contingency differs (e.g., additional free reinforcers are delivered in the Rich component).

Now suppose we introduce a disruptor of magnitude $x = 5$ (e.g., five sessions of pre-feeding), with scaling constant $c = 50$.

Using the behavioral momentum equation:

$$\log \left(\frac{B_x}{B_o}\right) = -x \cdot \frac{c}{r}$$

**Rich component:**

$$\log \left(\frac{B_x}{40}\right) = -5 \times \frac{50}{60} = -4.17$$

$$\frac{B_x}{40} = 10^{-4.17} = 0.000068$$

$$B_x \approx 0.003 \text{ resp/min}$$

**Lean component:**

$$\log \left(\frac{B_x}{40}\right) = -5 \times \frac{50}{15} = -16.67$$

$$\frac{B_x}{40} = 10^{-16.67} \approx 0$$

$$B_x \approx 0 \text{ resp/min}$$

Both components show dramatic disruption with this large disruptor, but the qualitative difference is clear: behavior in the Rich component retains a trace of responding while the Lean component is completely eliminated. With a smaller disruptor (e.g., $x = 1$), the difference would be more visible:

**Rich component** ($x = 1$):

$$\log \left(\frac{B_x}{40}\right) = -1 \times \frac{50}{60} = -0.833$$

$$\frac{B_x}{40} = 10^{-0.833} = 0.147$$

$$B_x \approx 5.9 \text{ resp/min (85% reduction)}$$

**Lean component** ($x = 1$):

$$\log \left(\frac{B_x}{40}\right) = -1 \times \frac{50}{15} = -3.33$$

$$\frac{B_x}{40} = 10^{-3.33} = 0.000468$$

$$B_x \approx 0.02 \text{ resp/min (>99% reduction)}$$

The four-fold difference in reinforcement rate produces a massive difference in resistance to disruption. Behavior in the Rich component survives the disruptor; behavior in the Lean component does not. This differential resistance---the hallmark of behavioral momentum---emerges directly from the equation.

---

## Plain-Language Interpretation

The Rescorla-Wagner model says: **organisms learn when they are surprised**.

If the US is fully predicted by the CSs present on a trial, there is no prediction error and no learning occurs. The organism already "knows" what is going to happen, so there is nothing new to encode. This is the state of affairs when $V = \lambda$. A well-trained CS is a "boring" predictor---it tells the organism what it already expects, and so it teaches nothing.

If the US is unexpected---either because the CS is new or because the US is larger than predicted---there is a **positive prediction error**. The CS gains associative strength. In everyday terms, the organism updates its expectation upward: "This CS is a better predictor of the US than I thought." The bigger the surprise, the bigger the update.

If the US fails to appear when expected---or is smaller than predicted---there is a **negative prediction error**. The CS loses associative strength. The organism updates its expectation downward: "This CS is not as good a predictor as I thought." This is the mechanism behind extinction: when the US stops occurring, prediction error is negative on every trial, and $V$ gradually decreases toward zero. Extinction is not "forgetting" in this model; it is active re-learning. The organism is learning that the CS no longer predicts the US.

**Learning is error correction.** Each trial brings the organism's prediction a step closer to reality. The step size depends on the salience of the CS ($\alpha$) and the effectiveness of the US ($\beta$), but the direction and magnitude of the step are determined entirely by the prediction error. This is why the model produces negatively accelerated learning curves: early in training, the error is large and steps are big; late in training, the error is small and steps are tiny. The organism homes in on the truth, moving fast when far away and slow when close.

The blocking phenomenon illustrates this logic most starkly. When CS_A already predicts the US, adding CS_B to the compound contributes nothing new. There is no surprise, no error, and no learning about B. The organism does not associate B with the US because B provides no new information. Learning is not about contiguity---the sheer co-occurrence of events in time. It is about **informativeness**---whether an event changes the organism's prediction.

Behavioral momentum theory adds a complementary insight about what happens after learning has occurred. Once behavior has been established in a context, its resistance to change depends on the richness of the reinforcement context, not on how fast or frequent the behavior is. A behavior maintained in a rich context has more "mass"---it is harder to disrupt. This is why behaviors associated with strong, frequent reinforcement can be so persistent even when the contingencies change. Resistance to change is about the Pavlovian relationship between the context and reinforcement, not about the operant relationship between the response and its consequence.

An analogy may help. Imagine you are a weather forecaster adjusting your predictions. Each day, you predict the temperature, and then you observe the actual temperature. If your prediction was too low (positive prediction error), you adjust your model upward. If too high (negative prediction error), you adjust downward. If your prediction was exactly right (zero error), you change nothing. Over days, your predictions converge on reality. You learn most at the start, when your model is crude and errors are large. As your model improves, the errors shrink and your adjustments become smaller. This is precisely the logic of the Rescorla-Wagner model, with temperature replaced by the US and your prediction replaced by $V$.

Now imagine a more complex scenario: you are predicting temperature using two cues---wind direction and barometric pressure. If wind direction alone already predicts temperature perfectly, adding barometric pressure to your model provides no additional information. The prediction error is already zero, and the barometric reading, though correlated with temperature, gains no predictive weight. This is blocking. The first cue has consumed all the available prediction error, leaving none for the second.

The Mackintosh model adds yet another layer: organisms do not just learn what predicts what; they learn **what to pay attention to**. Good predictors gain attention; poor predictors lose it. This means that an organism's learning rate is itself shaped by experience---a second-order learning process built on top of the first. Returning to the weather analogy: if you notice over many days that wind direction is a better predictor of temperature than cloud cover, you naturally start paying more attention to wind direction and less to cloud cover. Your attention shifts toward informative cues and away from uninformative ones.

---

## Assumptions and Limitations

The Rescorla-Wagner model, despite its enormous influence, rests on assumptions that constrain its applicability:

- **Trial-level processing:** The model updates once per trial. It does not represent real-time dynamics within a trial---the timing of the CS, the timing of the US, the moment-to-moment changes in expectation. Real conditioning is exquisitely sensitive to the CS-US interval: conditioning is poor with very short or very long intervals and optimal at some intermediate value. The Rescorla-Wagner model has no way to capture this because it does not represent time within a trial. Models like the temporal difference (TD) model and the Timing model of Gallistel and Gibbon (2000) address real-time learning.

- **Linear error correction:** The change in $V$ is a linear function of the prediction error. There is no mechanism for accelerating or decelerating learning based on the recent history of errors. If the organism has experienced 10 consecutive surprising trials, the model does not "ramp up" its learning rate. It learns at the same fractional rate ($\alpha\beta$) on every trial, regardless of the pattern of recent errors.

- **Fixed associability ($\alpha$):** The salience of the CS does not change with experience. This is the assumption that Mackintosh (1975) and Pearce and Hall (1980) relaxed. The fixed-$\alpha$ assumption means the model cannot account for **latent inhibition** (prior non-reinforced exposure to a CS slows subsequent conditioning), **learned irrelevance** (prior uncorrelated CS-US presentations slow conditioning more than either alone), or the effects of prior discrimination training on subsequent learning.

- **Summation of associative strengths:** When multiple CSs are present, the model sums their individual associative strengths to produce the total prediction. This **elemental** approach assumes the organism processes each CS independently and combines them additively. It does not allow for **configural** processing, in which the compound AB is treated as a distinct entity from A or B alone. This matters because organisms sometimes treat compounds differently from their elements---a phenomenon called the "negative patterning" problem, which Rescorla-Wagner cannot solve in its standard form. Pearce's configural model (1987) addresses this limitation.

- **No representation of time:** The model treats all CS-US intervals as equivalent and all intertrial intervals as irrelevant. In reality, the interstimulus interval (ISI) has a powerful effect on conditioning, and the ratio of the ISI to the ITI is a critical determinant of learning rate (the "CS/US ratio" effect).

- **Symmetry of excitation and inhibition:** The same equation governs the acquisition of both excitatory and inhibitory strength. Some evidence suggests that excitation and inhibition may follow different rules, with inhibition being harder to establish and more fragile.

- **No memory or context effects:** The model has no mechanism for spontaneous recovery (the return of responding after a rest period following extinction), renewal (the return of responding when the context changes after extinction), or reinstatement (the return of responding after unsignaled US presentations following extinction). These phenomena suggest that extinction does not erase the original association but rather creates a new, context-dependent inhibitory association. The Rescorla-Wagner model, which models extinction as a simple decrease in $V$, cannot capture this.

- **No individual differences in learning rule:** The model assumes all organisms learn by the same rule; individual differences are captured only by different parameter values ($\alpha$, $\beta$). There is no mechanism for qualitative differences in how different organisms process prediction errors.

- **US processing is constant:** The parameter $\beta$ does not change with experience. In reality, habituation to the US, changes in motivation (satiation, deprivation), and sensitization all affect how the US is processed over the course of training. The model treats each US presentation as equally effective.

- **No within-compound associations:** When A and B are presented in compound, the model only considers associations between each CS and the US. It does not represent associations between A and B themselves (within-compound associations), which may play a role in mediated learning and sensory preconditioning.

It is instructive to compare these limitations to the model's strengths. The Rescorla-Wagner model explains blocking, overshadowing, conditioned inhibition, overexpectation, and the basic shape of learning curves---all from a three-parameter equation. No other model of comparable simplicity explains as many phenomena. The limitations listed above point toward phenomena that require additional mechanisms, but they do not diminish the model's achievements within its scope.

These limitations are not reasons to discard the model. They are the boundaries that define where the model applies and where extensions are needed. Every model has such boundaries. The Rescorla-Wagner model remains the starting point for nearly all formal models of associative learning precisely because it is simple enough to understand clearly and powerful enough to generate surprising, testable predictions. Its limitations have been among the most productive sources of new theory in the field---each limitation pointed toward a new model that addressed it while building on the Rescorla-Wagner foundation.

---

## Connection to Empirical Behavior Science

### Blocking and Compound Conditioning

The blocking effect, first demonstrated by Kamin (1969), was the empirical finding that most directly motivated the Rescorla-Wagner model. Kamin showed that rats trained with a noise CS that predicted shock (Phase 1) and then trained with a noise-light compound that predicted the same shock (Phase 2) showed no conditioning to the light alone at test. The noise "blocked" learning about the light.

Subsequent research has confirmed blocking across many species and preparations and has explored its boundary conditions. Blocking is reduced or eliminated when the US changes between phases (unblocking), when there is a long retention interval between Phase 1 and Phase 2, or when the added CS is particularly salient. The Rescorla-Wagner model's account of blocking---via the shared prediction error in compound conditioning---remains the standard explanation, though alternative accounts exist, including the comparator hypothesis (Miller & Matzel, 1988), which argues that blocking reflects a performance deficit rather than a learning deficit.

### Conditioned Inhibition

The model's prediction that stimuli can acquire negative associative strength has been extensively tested. Conditioned inhibitors pass both the **summation test** (they reduce responding to an excitatory CS when presented in compound) and the **retardation test** (they are slower to acquire excitatory strength than a novel CS). These tests, formalized by Rescorla (1969), provide operational criteria for conditioned inhibition that map directly onto the model's predictions.

Conditioned inhibition has clinical relevance. In the context of anxiety disorders, a conditioned inhibitor functions as a "safety signal"---a stimulus that signals the absence of threat. Understanding how inhibitory associations are acquired and maintained is important for therapies that aim to establish safety signals as part of treatment.

### Behavioral Momentum in Clinical Settings

Nevin and colleagues (Nevin, Mandell, & Atak, 1983; Nevin & Shahan, 2011) developed behavioral momentum theory through systematic laboratory research using multiple schedules with pigeons. The initial finding was straightforward: in a two-component multiple schedule, behavior in the component associated with higher reinforcement rates was more resistant to disruption by pre-feeding, extinction, or alternative reinforcement.

The theory has since been applied to clinical contexts in several important ways:

1. **Treatment relapse.** Nevin and Shahan's quantitative model of resurgence (resurgence as choice) predicts that problem behaviors will re-emerge when treatment contingencies are disrupted, and that the degree of resurgence depends on the reinforcement history of the problem behavior. This provides a quantitative framework for predicting relapse and designing interventions that minimize it.

2. **Functional communication training (FCT).** Behavioral momentum theory predicts that the persistence of communication responses established through FCT depends on the reinforcement context in which they are trained. Training in richer contexts produces more durable communication responses.

3. **High-probability instruction sequences (high-p sequences).** The "behavioral momentum" intervention in which a series of high-probability requests (requests the individual is likely to comply with) precedes a low-probability request is directly inspired by the momentum metaphor---the "velocity" of compliance built up by the high-p sequence carries through to the low-p request.

### Mackintosh and Attentional Processes

Mackintosh (1975) proposed his attention model to account for findings that the Rescorla-Wagner model could not easily handle, including learned irrelevance and certain intradimensional/extradimensional shift effects. Matzel, Schachtman, and Miller (1988) provided particularly compelling evidence for learned irrelevance: pre-exposing both the CS and US in an uncorrelated fashion retarded subsequent conditioning more than pre-exposing either the CS or the US alone. This "super-additive" deficit in learning is predicted by Mackintosh's model (the CS's associability decreases during uncorrelated pre-exposure) but not by Rescorla-Wagner (which predicts that uncorrelated pre-exposure should have no lasting effect once $V$ returns to zero).

The attention model influenced subsequent theories, including the Pearce-Hall model (1980), which proposed that associability **increases** when outcomes are surprising (the opposite of Mackintosh's rule in some respects). The tension between these models---Mackintosh predicting that good predictors gain attention, Pearce-Hall predicting that uncertain outcomes gain attention---has been productive, generating decades of research on attentional processes in learning and leading to hybrid models that incorporate both principles (Le Pelley, 2004).

### Temporal Difference Learning in AI

The prediction error signal formalized by Rescorla and Wagner became the conceptual foundation for **temporal difference (TD) learning** in artificial intelligence (Sutton & Barto, 1998). TD learning extends the Rescorla-Wagner idea from trial-level to moment-by-moment updating: instead of computing prediction error once per trial, the TD algorithm computes prediction error at every time step, comparing the current prediction to the prediction at the next time step plus any reward received. The core idea---learning driven by the discrepancy between expected and actual outcomes---is identical.

The discovery that dopamine neurons in the midbrain encode a signal resembling the TD prediction error (Schultz, Dayan, & Montague, 1997) created a remarkable bridge between behavioral learning theory, computational neuroscience, and AI. Dopamine neurons fire above baseline when rewards are unexpectedly large (positive prediction error), below baseline when expected rewards are omitted (negative prediction error), and at baseline when rewards are fully predicted (zero prediction error). This neural signature mirrors the Rescorla-Wagner prediction error with striking precision.

This is one of the most striking examples of a behavioral model's reach extending far beyond its original domain. A model developed to explain salivation in dogs and fear conditioning in rats became the foundation for algorithms that learned to play Atari games and for understanding the neural basis of reward processing in primates.

### Key References

- Kamin, L. J. (1969). Predictability, surprise, attention, and conditioning. In B. A. Campbell & R. M. Church (Eds.), *Punishment and aversive behavior*. Appleton-Century-Crofts.
- Mackintosh, N. J. (1975). A theory of attention: Variations in the associability of stimuli with reinforcement. *Psychological Review*, *82*(4), 276--298.
- Matzel, L. D., Schachtman, T. R., & Miller, R. R. (1988). Learned irrelevance exceeds the sum of the CSpreexposure and USpreexposure effects. *Journal of Experimental Psychology: Animal Behavior Processes*, *14*(3), 311--319.
- Nevin, J. A., Mandell, C., & Atak, J. R. (1983). The analysis of behavioral momentum. *Journal of the Experimental Analysis of Behavior*, *39*(1), 49--59.
- Pearce, J. M., & Hall, G. (1980). A model for Pavlovian learning: Variations in the effectiveness of conditioned but not of unconditioned stimuli. *Psychological Review*, *87*(6), 532--552.
- Rescorla, R. A. (1968). Probability of shock in the presence and absence of CS in fear conditioning. *Journal of Comparative and Physiological Psychology*, *66*(1), 1--5.
- Rescorla, R. A., & Wagner, A. R. (1972). A theory of Pavlovian conditioning: Variations in the effectiveness of reinforcement and nonreinforcement. In A. H. Black & W. F. Prokasy (Eds.), *Classical conditioning II: Current research and theory* (pp. 64--99). Appleton-Century-Crofts.
- Schultz, W., Dayan, P., & Montague, P. R. (1997). A neural substrate of prediction and reward. *Science*, *275*(5306), 1593--1599.
- Sutton, R. S., & Barto, A. G. (1998). *Reinforcement learning: An introduction*. MIT Press.

---

## Exercises for Reflection

1. The Rescorla-Wagner model predicts that if two separately trained excitatory CSs (A and B, each with $V \approx \lambda$) are presented together in compound with the US, both will **lose** associative strength. This is called **overexpectation**. Walk through the math: What is the prediction error on the first compound trial if $V_A = 0.95$ and $V_B = 0.95$ with $\lambda = 1.0$? What happens to $V_A$ and $V_B$ over the next few trials? Why is this prediction counterintuitive from a contiguity perspective---after all, both CSs are still paired with the US?

2. Consider a clinical example: a client has a severe phobia of dogs (CS) associated with a traumatic bite (US). Describe the phobia in terms of associative strength. How would extinction (exposure therapy) work according to the Rescorla-Wagner model? What does the model predict about the rate of fear reduction across exposure sessions---will it be linear, positively accelerated, or negatively accelerated? What does the model fail to capture about real-world exposure therapy? (Think about spontaneous recovery, renewal, reinstatement, and what these phenomena suggest about the nature of extinction.)

3. Behavioral momentum theory predicts that behaviors maintained in rich reinforcement contexts will be more resistant to disruption. Imagine two classrooms: in Classroom A, a student receives praise every 2 minutes for on-task behavior; in Classroom B, the same student receives praise every 10 minutes. If a disruptive event occurs (e.g., a fire drill, a substitute teacher), which classroom's on-task behavior will be more resistant to disruption? Which will recover faster? Use the behavioral momentum equation to make a quantitative prediction. Then discuss: does this analysis suggest any paradoxes for clinical practice, where we often want to both reinforce behavior and make problem behavior less persistent?

4. Mackintosh's model allows $\alpha$ to change with experience, while the Rescorla-Wagner model holds $\alpha$ fixed. Design a thought experiment that would produce different predictions from the two models. Specify the training procedure (what CSs, what USs, how many trials in each phase), the test, and what each model predicts at test. Which prediction would you expect to see in real data, and why? (Hint: consider what happens when a CS has a long history of being irrelevant before it becomes a predictor.)

---

## Key Readings

**Required:**

- Nevin, J. A., Mandell, C., & Atak, J. R. (1983). The analysis of behavioral momentum. *Journal of the Experimental Analysis of Behavior, 39*(1), 49--59.
- Mackintosh, N. J. (1975). A theory of attention: Variations in the associability of stimuli with reinforcement. *Psychological Review, 82*(4), 276--298.
- Matzel, L. D., Held, F. P., & Miller, R. R. (1988). Information and expression of simultaneous and backward associations: Implications for contiguity theory. *Learning & Motivation, 19*, 317--344.

**Supplemental:**

- Rescorla, R. A., & Wagner, A. R. (1972). A theory of Pavlovian conditioning: The effectiveness of reinforcement and non-reinforcement. In A. H. Black & W. F. Prokasy (Eds.), *Classical conditioning II* (pp. 64--99). Appleton-Century-Crofts.
- Nevin, J. A. (1998). Choice and momentum. In W. O'Donohue (Ed.), *Learning and behavior therapy* (pp. 230--251). Allyn and Bacon.
- Nevin, J. A. (2002). Measuring behavioral momentum. *Behavioural Processes, 57*(2--3), 187--198.
- Stout, S. C., & Miller, R. R. (2007). Sometimes-competing retrieval (SOCR): A formalization of the comparator hypothesis. *Psychological Review, 114*(3), 759--783.
- Nevin, J. A., & Shahan, T. A. (2011). Behavioral momentum theory: Equations and applications. *Journal of Applied Behavior Analysis, 44*(4), 877--895.
- Esber, G. R., et al. (2025). The Rescorla-Wagner model: It is not what you think it is. *Journal of Experimental Psychology: Animal Learning and Cognition*.

---

## Reading Guide

### Nevin, Mandell, & Atak (1983)

- What is behavioral momentum, and how does it relate to reinforcement? Why is it a model of respondent conditioning?
- How do the authors draw an analogy between behavioral momentum and Newtonian physics?
- What does "behavioral mass" represent in this analogy?
- Why is the log response rate used instead of the raw rate in their analysis?
- How did the researchers manipulate reinforcement to study behavioral momentum?
- What key question do the authors aim to answer with their experimental design?
- Why were response-independent food and extinction chosen as disruptors?
- How was resistance to change operationally defined in the study?
- What is the purpose of the lateral shift (log c) in their graphs?
- How did extinction data compare to dark-key food in estimating behavioral mass?
- Why might extinction not serve as a clean "external force" in this framework? How is behavioral momentum often measured in experiments?
- What implications does behavioral momentum have for understanding response persistence?
- How could this model inform treatment planning in applied behavior analysis?
- What do the authors conclude about the theoretical value of the momentum analogy?

### Mackintosh (1975)

- What core problem in associative learning does Mackintosh's theory aim to address?
- How does Mackintosh define "associability" in this context?
- What role does attention play in his theory of learning?
- What key idea distinguishes Mackintosh's theory from purely associative (e.g., Rescorla-Wagner) models?
- According to the theory, what increases a stimulus's associability? What decreases it?
- How does this model describe the adaptive capabilities of an organism within its environment?
- What kind of empirical findings prompted Mackintosh to revise traditional associative learning theories?
- What is the significance of the Pearce-Hall model in relation to Mackintosh's?
- How does Mackintosh's model explain the phenomenon of "blocking"?
- How does this theory account for "learned irrelevance"?
- Why is the notion of relative predictiveness central to this theory?
- How does the model deal with compound stimuli (e.g., AX vs. BX)?
- How are attentional shifts implemented computationally in the model?
- What are some criticisms or limitations of the model acknowledged by Mackintosh?
- How might this theory relate to behavior analytic perspectives on discrimination learning?
- What implications might this theory have for behavior-change interventions (e.g., in ABA)?

### Matzel, Held, & Miller (1988)

- What central assumption of traditional contiguity theory do the authors challenge?
- What is "simultaneous conditioning"? What is "backward conditioning"? How do these differ?
- According to traditional contiguity theory, how effective should simultaneous and backward conditioning be?
- What evidence do the authors provide that contradicts the predictions of contiguity theory?
- What is the distinction between the acquisition of an association and its behavioral expression?
- What experimental strategy did the authors use to reveal "hidden" learning?
- How did the authors demonstrate that simultaneous conditioning can produce excitation?
- What do the results of their summation tests imply about backward associations?
- How is the expression of learned associations influenced by test conditions, according to the authors?
- What role does information theory play in the authors' interpretation of conditioning?
- How do the findings challenge the idea that temporal ordering determines association strength?
- Why do the authors argue for a distinction between learning and performance?
- What implications do the findings have for real-world learning situations?
- How do the results speak to the flexibility and complexity of associative learning systems?
- What broader implications does this work have for conditioning models in behavior science?

---

## Key Takeaways

- **Prediction error drives learning.** The Rescorla-Wagner model formalizes the idea that organisms learn when outcomes are surprising ($\lambda - V \neq 0$) and stop learning when outcomes are fully predicted ($\lambda - V = 0$). This was a revolutionary shift from contiguity-based accounts.

- **The Rescorla-Wagner equation:** $\Delta V = \alpha\beta(\lambda - V)$. A simple difference equation with three parameters: CS salience ($\alpha$), US learning rate ($\beta$), and asymptotic associative strength ($\lambda$). Despite its simplicity, it generates a remarkably wide range of predictions.

- **Negatively accelerated learning curves** emerge naturally from the model because prediction error shrinks as $V$ approaches $\lambda$. The organism learns most on the first trial and progressively less on each subsequent trial.

- **Blocking** is explained by the summation of associative strengths: if one CS already predicts the US, there is no prediction error left for a second CS to capture. This showed that contiguity is not sufficient for learning---informativeness matters.

- **Conditioned inhibition** arises when a CS is paired with the absence of an expected US, driving $V$ below zero. The CS becomes an active signal for non-occurrence of the US.

- **Overshadowing** occurs when CSs of unequal salience compete for a shared prediction error, with the more salient CS gaining a larger share of associative strength.

- **Behavioral momentum theory** formalizes resistance to change using a mass-velocity metaphor from physics. Richer reinforcement contexts produce more persistent behavior. Critically, response rate and resistance to change are governed by different variables.

- **Mackintosh's attention model** extends the Rescorla-Wagner framework by allowing associability ($\alpha$) to change with experience, accounting for learned irrelevance, intradimensional-extradimensional shift effects, and other attentional phenomena.

- **Limitations of Rescorla-Wagner** include trial-level processing, fixed $\alpha$, no configural processing, no representation of time within trials, and no mechanism for context-dependent phenomena like spontaneous recovery and renewal. These limitations have motivated important extensions and alternative models.

- **The prediction error concept has had extraordinary reach**, from animal learning theory to computational neuroscience (dopamine prediction error signals) to artificial intelligence (temporal difference learning), demonstrating how a formal behavioral model can generate insights far beyond its original domain.

- **Models build on each other.** Rescorla-Wagner identified prediction error; Mackintosh added variable attention; behavioral momentum theory addressed persistence. Each model extended the field by addressing specific limitations of its predecessors while preserving the core insight that formal, quantitative models can capture---and predict---complex features of behavior.
