# Chapter 7: Behavioral Momentum and Response Persistence

> Week 5 of the 13-week sequence.

## Why This Topic Matters

Last week, we studied how organisms learn predictive relationships---how a conditioned stimulus acquires associative strength through a history of pairings with an unconditioned stimulus. The Rescorla-Wagner model formalized the process of learning: prediction error drives change, and when the world is fully predicted, learning stops. But learning is only half the story. The other half is **persistence**.

Organisms do not merely learn; they persist. A pigeon that has learned to peck a key for food does not stop the moment the contingency changes. A child whose tantrums have been reinforced with attention does not stop tantruming the moment a new intervention begins. A person who has quit smoking does not remain smoke-free simply because the reinforcement contingencies have been rearranged. Behavior persists, sometimes stubbornly, sometimes catastrophically, in the face of changed conditions. And the degree to which it persists is not random---it is **predictable**, **quantifiable**, and governed by identifiable variables.

This is the domain of **behavioral momentum theory**, developed primarily by John Nevin and colleagues beginning in the early 1980s. The theory provides a formal account of how resistant behavior is to disruption. It draws an explicit analogy to Newtonian mechanics: behavior has both a **velocity** (its rate or probability of occurrence) and a **mass** (its resistance to change when external forces are applied). Just as a heavier object is harder to stop, behavior maintained in a richer reinforcement context is harder to disrupt.

The key insight---and it was genuinely surprising when first proposed---is that the **rate of behavior** and the **persistence of behavior** are governed by different variables. This runs counter to the intuition that behaviors occurring at higher rates are "stronger" in every sense. Nevin showed that this is not the case. A behavior can occur at a low rate yet be extremely persistent; another behavior can occur at a high rate yet collapse quickly under disruption. Rate and persistence dissociate because they are controlled by different contingencies.

Understanding persistence matters enormously for applied work. If you are designing an intervention to reduce problem behavior, you need to know not just what maintains the behavior (the operant contingency) but how resistant it will be to your intervention (which depends on the Pavlovian context). If you are building replacement behaviors through functional communication training, you need to know how persistent those replacement behaviors will be when conditions inevitably change. If you are trying to predict whether a client will relapse after treatment ends, you need a quantitative framework that accounts for the reinforcement history of the problem behavior, the treatment context, and the conditions under which relapse might occur. Behavioral momentum theory provides that framework.

This week, we develop the theory in detail, work through its quantitative predictions, and connect it to clinical applications including treatment relapse, resurgence, and intervention design.

---

## Connecting Backward

In Week 4, the Rescorla-Wagner model showed us how associative strength builds through prediction error. The history of CS-US pairings determines the strength of the association between a conditioned stimulus and the outcome it predicts. Mackintosh's attention model added that organisms learn what to pay attention to, adjusting their processing of stimuli based on predictive validity.

Behavioral momentum theory extends this logic to a different level of analysis. Where Rescorla-Wagner asks "How does an individual CS-US association form?", behavioral momentum theory asks "How does the overall Pavlovian relationship between a discriminative stimulus context and reinforcement determine the persistence of behavior in that context?" The answer turns out to be the same kind of associative history---but now it is the stimulus-reinforcer relationship in the broader context, not the trial-by-trial CS-US contingency, that matters. The bridge between the two is the Pavlovian contingency: Week 4 formalized how it builds associative strength; this week we see how it builds behavioral persistence.

---

## Core Concepts

### Behavioral Momentum Theory

**Behavioral momentum theory** provides a formal account of how resistant behavior is to disruption. The theory draws an explicit analogy to Newtonian mechanics: just as a moving object with greater mass is harder to stop, behavior maintained in a richer reinforcement context is harder to disrupt.

Response rate is controlled primarily by the **response-reinforcer contingency**---the operant relation. How often you press the lever per minute depends on the schedule of reinforcement for lever pressing. Resistance to change, by contrast, is controlled primarily by the **stimulus-reinforcer contingency**---the Pavlovian relation between the discriminative stimulus and all reinforcement obtained in its presence, regardless of whether that reinforcement is contingent on the target response.

This distinction was demonstrated in elegant experiments using multiple schedules. In a typical design, pigeons respond in two components of a multiple schedule. Both components have identical response-reinforcer contingencies (e.g., the same VI schedule), but one component includes additional response-independent (free) food deliveries. The free food does not increase response rate---in fact, it may decrease it slightly. But when disruption is introduced (e.g., pre-feeding, extinction), behavior in the component with additional food is more resistant to change. The free food increased the stimulus-reinforcer relation (more total food in the presence of that stimulus) without changing the response-reinforcer relation.

The basic quantitative expression for resistance to change is:

{$$}\log \left( \frac{B_x}{B_o} \right) = -x \cdot \frac{c}{r}{/$$}

where:

- {$$}B_o{/$$} is the baseline response rate before disruption
- {$$}B_x{/$$} is the response rate during or after disruption
- {$$}x{/$$} is the magnitude of the disruptor (e.g., duration of pre-feeding, number of extinction sessions)
- {$$}r{/$$} is the rate of reinforcement in the component during baseline
- {$$}c{/$$} is a scaling constant that captures the effectiveness of the disruptor

The ratio {$$}B_x / B_o{/$$} is the **proportional change** in behavior. Taking the logarithm means we are modeling proportional change on a log scale, which is natural when comparing across conditions with different baselines.

In plain language: the proportional change in behavior during disruption is a function of the ratio of disruption magnitude to reinforcement rate. Higher reinforcement rates produce less proportional change---greater momentum. The behavior has more "mass."

### The Pavlovian Nature of Behavioral Momentum

One of the most important---and most commonly misunderstood---aspects of behavioral momentum theory is that resistance to change is fundamentally a **respondent (Pavlovian) phenomenon**, not an operant one. This point deserves careful attention because it contradicts a widespread intuition.

The intuition goes like this: "If a behavior is reinforced more often, it should be stronger and harder to stop." This seems to follow from basic operant principles---reinforcement strengthens behavior, so more reinforcement means stronger behavior. But Nevin's research showed that this intuition conflates two different things that reinforcement does. Reinforcement in the presence of a discriminative stimulus does two things simultaneously:

1. **It maintains the operant response** (the response-reinforcer, or R-S*, contingency). This controls response rate.
2. **It establishes a Pavlovian association between the discriminative stimulus context and reinforcement** (the stimulus-reinforcer, or S-R*, contingency). This controls resistance to change.

The critical evidence comes from experiments where these two contingencies are dissociated. When response-independent (free) reinforcers are added to a schedule component, they do not strengthen the operant contingency---the food is not contingent on any response. If anything, they weaken the operant contingency by degrading the correlation between responding and reinforcement. Yet these free reinforcers **increase** resistance to change, because they strengthen the Pavlovian relationship between the discriminative stimulus and reinforcement.

This means that what we observe as the "persistence of operant behavior" is actually driven by the Pavlovian context in which that behavior occurs. The discriminative stimulus becomes associated with reinforcement (regardless of its source), and this association gives behavior its "mass." When a disruptor is introduced, the behavior's resistance to change reflects the strength of this Pavlovian association, not the strength of the operant contingency.

To put it bluntly: **the "mass" of behavior is Pavlovian, even though the "velocity" of behavior is operant.** We measure the persistence of operant responding, but what determines that persistence is the respondent relationship between the context and reinforcement. This is why the theory is properly classified as a model of respondent conditioning applied to the persistence of operant behavior.

This has profound implications for clinical practice. If you want to make a replacement behavior more persistent, you should not just reinforce it more frequently (though that helps with rate). You should ensure that the context in which the replacement behavior occurs is richly associated with reinforcement---from all sources, not just the contingent reinforcer for the target response. Conversely, if you want to make a problem behavior less persistent, reducing the overall reinforcement in the context where the problem behavior occurs (the Pavlovian relationship) may be more effective than simply changing the operant contingency.

### The Augmented Model of Behavioral Momentum

The basic momentum equation describes how behavior changes proportionally to the ratio of disruption to reinforcement rate. But subsequent research revealed that additional factors matter, leading to **augmented models** of behavioral momentum.

One important extension considers the role of the **reinforcer-response contingency** in modulating resistance to change. While the basic model treats all reinforcement in a context as equivalent (whether contingent on the target response or not), augmented models allow for the possibility that the source of reinforcement matters to some degree.

The augmented model can be expressed as:

{$$}\log \left( \frac{B_x}{B_o} \right) = -x \cdot \frac{c}{r_c + a \cdot r_o}{/$$}

where:

- {$$}r_c{/$$} is the rate of contingent reinforcement (reinforcers earned by the target response)
- {$$}r_o{/$$} is the rate of other (non-contingent) reinforcement in the context
- {$$}a{/$$} is a parameter that weights the contribution of non-contingent reinforcement relative to contingent reinforcement
- The remaining parameters are as in the basic model

When {$$}a = 1{/$$}, all reinforcement contributes equally to behavioral mass, and the model reduces to the basic version. When {$$}a < 1{/$$}, contingent reinforcement contributes more to resistance to change than non-contingent reinforcement. This captures the empirical finding that while both sources of reinforcement contribute to momentum, contingent reinforcement may have a somewhat larger effect per unit.

Nevin and Shahan (2011) extended the theory further to account for treatment relapse and resurgence, creating a quantitative framework---**Resurgence as Choice (RaC)**---that predicts when and how much previously reinforced behavior will re-emerge after treatment is disrupted. This represents the frontier of behavioral momentum theory as applied to clinical problems.

---

### Key Predictions of Behavioral Momentum Theory

The framework generates several important predictions:

1. **Differential resistance to change:** In a multiple schedule with rich and lean components, behavior in the rich component will be proportionally less disrupted by extinction, satiation, or other challenges. This has been confirmed repeatedly.

2. **Independence of rate and resistance:** Manipulations that change response rate (e.g., adding a response cost) do not necessarily change resistance to change. And manipulations that change resistance to change (e.g., adding free reinforcers) do not necessarily change response rate.

3. **Clinical implications for problem behavior:** If a problem behavior occurs in a context rich in reinforcement (e.g., a child's tantrums are reinforced by attention in a context that also includes many other reinforcers), that behavior will be resistant to treatment-induced disruption.

4. **Relapse prediction:** When treatment is itself disrupted (e.g., a caregiver stops implementing an intervention, or the individual moves to a new setting), the original problem behavior may resurge. Behavioral momentum theory, extended to a quantitative model of resurgence (Shahan & Craig, 2017), predicts the degree of relapse based on the reinforcement history of the problem behavior and the treatment context.

The physics metaphor is worth examining carefully. In Newtonian mechanics, momentum = mass {$$}\times{/$$} velocity, and force = mass {$$}\times{/$$} acceleration. A heavier object requires more force to change its velocity by a given amount. In behavioral momentum theory, "mass" corresponds to the strength of the stimulus-reinforcer relation (the Pavlovian context), "velocity" corresponds to response rate, and "force" corresponds to the disruptor.

However, the metaphor has limits. In physics, momentum is a conserved quantity in closed systems. In behavior, there is no conservation law---reinforcement can be added or removed without compensating changes elsewhere. The metaphor guides thinking but should not be taken literally beyond its intended scope.

---

## Applying the 8-Step Framework

This section walks through each step of the 8-step modeling framework using behavioral momentum theory applied to a clinical scenario: predicting resistance to change of problem behavior in rich versus lean reinforcement contexts during treatment.

**Step 1: Get the behavioral phenomenon clearly in mind.**

A child, Alex, engages in disruptive behavior (loud vocalizations and throwing materials) across two classroom settings. In Setting A (the general education classroom), Alex receives frequent adult attention---both contingent on disruption (teacher redirections, verbal reprimands) and non-contingent (frequent check-ins, proximity to the aide, group praise). The total rate of reinforcement (all attention combined) in Setting A is approximately 40 reinforcers per hour. In Setting B (the resource room), Alex works one-on-one with a paraprofessional who delivers attention primarily contingent on disruption (redirection after each episode) but provides little non-contingent attention. The total reinforcement rate in Setting B is approximately 10 reinforcers per hour.

Baseline data show that Alex's disruption rate is similar across both settings: approximately 8 episodes per hour in Setting A and 10 episodes per hour in Setting B. A new intervention is introduced simultaneously in both settings: planned ignoring of disruption (extinction) combined with differential reinforcement of alternative behavior (DRA).

The clinical team wants to predict: In which setting will the disruptive behavior be more resistant to the intervention? How much residual disruption should they expect after the first week of treatment in each setting?

---

**Step 2: Define the behavioral processes and scope of the model.**

We are modeling the **resistance to change** of disruptive behavior when an extinction-based intervention is introduced. The model's scope includes:

- How the proportional change in disruption rates differs between the two settings as a function of their reinforcement histories
- How the magnitude of disruption relates to the reinforcement rate in each context

We are explicitly **not** modeling:
- The specific topography of disruptive behavior
- The acquisition of the alternative (replacement) behavior
- Moment-to-moment fluctuations in behavior within sessions
- Motivating operations or setting events that may vary across days
- The caregiver's fidelity to the intervention protocol
- Long-term maintenance or generalization

---

**Step 3: Identify the behavioral principles and quantitative laws.**

The governing principle is that **resistance to change is determined by the Pavlovian stimulus-reinforcer relationship** in the discriminative stimulus context---the total rate of reinforcement obtained in the presence of the setting cues, regardless of whether that reinforcement is contingent on the target response.

The quantitative law is the behavioral momentum equation:

{$$}\log \left( \frac{B_x}{B_o} \right) = -x \cdot \frac{c}{r}{/$$}

This states that the proportional decline in behavior (on a log scale) is a linear function of the disruption magnitude, scaled by the ratio of the disruptor's effectiveness to the reinforcement rate in the context.

---

**Step 4: State all simplifying assumptions.**

1. All reinforcement in a context contributes equally to behavioral mass (we use the basic model rather than the augmented model, so {$$}a = 1{/$$}).
2. The reinforcement rate during baseline is a stable, representative estimate of the Pavlovian S-R* relationship.
3. The disruptor (extinction + DRA) operates uniformly across both settings with equal effectiveness.
4. The scaling constant {$$}c{/$$} is the same in both settings (the disruptor itself does not differ between contexts).
5. Baseline response rates are stable and representative.
6. The model applies to the proportional change in the target behavior only; it does not predict the absolute level of the replacement behavior.
7. No other major variables (illness, medication changes, schedule changes) intervene during the treatment period.

---

**Step 5: Write the model verbally, then mathematically.**

Verbally: When the extinction-based intervention is introduced, disruptive behavior will decline in both settings. However, the proportional decline will be greater in Setting B (lean context) than in Setting A (rich context), because Setting A has a stronger Pavlovian association between the setting cues and reinforcement. The richer reinforcement history in Setting A gives the disruptive behavior more "mass"---more resistance to the intervention's disruptive force. After a given duration of treatment, disruption in Setting A will retain a larger proportion of its baseline level than disruption in Setting B.

Mathematically:

{$$}\log \left( \frac{B_x}{B_o} \right) = -x \cdot \frac{c}{r}{/$$}

where:
- {$$}B_o{/$$} (Setting A) = 8 episodes/hr; {$$}B_o{/$$} (Setting B) = 10 episodes/hr
- {$$}r{/$$} (Setting A) = 40 reinforcers/hr; {$$}r{/$$} (Setting B) = 10 reinforcers/hr
- {$$}x{/$$} = number of treatment sessions (our unit of disruption magnitude)
- {$$}c{/$$} = 8 (a scaling constant we estimate from prior clinical data or the literature, representing the effectiveness of the extinction + DRA combination per session)

---

**Step 6: Verify dimensional consistency.**

{$$}B_x{/$$} and {$$}B_o{/$$} are both in episodes per hour, so their ratio is dimensionless, and the log of a dimensionless ratio is dimensionless. On the right side, {$$}x{/$$} is in sessions, {$$}c{/$$} is in reinforcers/hr per session (a rate constant), and {$$}r{/$$} is in reinforcers/hr. The ratio {$$}c/r{/$$} is therefore dimensionless per session, and {$$}x \cdot c/r{/$$} is dimensionless. Both sides are dimensionless. The equation is consistent.

---

**Step 7: Specify starting values and constraints.**

- {$$}B_o{/$$} (Setting A) = 8 episodes/hr; {$$}B_o{/$$} (Setting B) = 10 episodes/hr
- {$$}r{/$$} (Setting A) = 40; {$$}r{/$$} (Setting B) = 10
- {$$}c = 8{/$$} (estimated; in practice, this would be fit to early treatment data)
- {$$}x \geq 0{/$$}: disruption magnitude cannot be negative
- {$$}B_x / B_o{/$$} is bounded between 0 and 1 (behavior cannot go below zero or exceed baseline during extinction)
- The model applies from the onset of treatment ({$$}x = 0{/$$}) onward

---

**Step 8: Check the math, test against data, and derive predictions.**

**Compute predictions for {$$}x = 5{/$$} treatment sessions:**

**Setting A** (rich context):

{$$}\log \left( \frac{B_x}{8} \right) = -5 \times \frac{8}{40} = -5 \times 0.2 = -1.0{/$$}

{$$}\frac{B_x}{8} = 10^{-1.0} = 0.10{/$$}

{$$}B_x = 0.80 \text{ episodes/hr}{/$$}

Disruption in Setting A drops to about 10% of baseline---from 8 to 0.8 episodes per hour. A substantial reduction, but not elimination.

**Setting B** (lean context):

{$$}\log \left( \frac{B_x}{10} \right) = -5 \times \frac{8}{10} = -5 \times 0.8 = -4.0{/$$}

{$$}\frac{B_x}{10} = 10^{-4.0} = 0.0001{/$$}

{$$}B_x = 0.001 \text{ episodes/hr}{/$$}

Disruption in Setting B is essentially eliminated---reduced to less than one-thousandth of its baseline level.

**Comparison:** After 5 sessions of the same intervention, Setting A retains 10% of baseline disruption while Setting B retains 0.01%. The four-fold difference in reinforcement rate produces a massive difference in persistence. This is the core prediction of behavioral momentum theory: the richer Pavlovian context in Setting A gives the disruptive behavior more mass, making it substantially harder to eliminate.

**Boundary check:** At {$$}x = 0{/$$}, both settings predict {$$}B_x / B_o = 1{/$$} (no change before treatment begins). As {$$}x \to \infty{/$$}, both predict {$$}B_x \to 0{/$$} (eventually behavior is eliminated). These are sensible.

**Clinical implication:** The treatment team should expect slower progress in Setting A and should prepare for the possibility that disruption will persist longer there. They might consider strategies to reduce the overall reinforcement density in Setting A (e.g., thinning non-contingent attention) to reduce the behavioral mass of the problem behavior before or during treatment.

**Derive new predictions:**

- If the intervention is temporarily suspended (e.g., a substitute teacher does not implement the protocol), behavioral momentum theory predicts that disruption will recover more in Setting A than in Setting B, because the underlying Pavlovian association is stronger.
- If a new reinforcer is introduced in Setting B (e.g., access to a preferred activity), it will increase the overall S-R* relationship and increase the momentum of all behavior in that context---including the target behavior.

---

## Worked Example: Resistance to Change in Rich vs. Lean Contexts

Consider a multiple schedule with two components, Rich and Lean, each associated with a different reinforcement rate:

- **Rich component:** {$$}r_{\text{rich}} = 60{/$$} reinforcers/hr; baseline response rate {$$}B_o = 40{/$$} resp/min
- **Lean component:** {$$}r_{\text{lean}} = 15{/$$} reinforcers/hr; baseline response rate {$$}B_o = 40{/$$} resp/min

Note that baseline response rates are the same in both components. This can occur when the response-reinforcer contingency is identical but the stimulus-reinforcer contingency differs (e.g., additional free reinforcers are delivered in the Rich component).

Now suppose we introduce a disruptor of magnitude {$$}x = 1{/$$} (e.g., one session of pre-feeding), with scaling constant {$$}c = 50{/$$}.

**Rich component** ({$$}x = 1{/$$}):

{$$}\log \left(\frac{B_x}{40}\right) = -1 \times \frac{50}{60} = -0.833{/$$}

{$$}\frac{B_x}{40} = 10^{-0.833} = 0.147{/$$}

{$$}B_x \approx 5.9 \text{ resp/min (85% reduction)}{/$$}

**Lean component** ({$$}x = 1{/$$}):

{$$}\log \left(\frac{B_x}{40}\right) = -1 \times \frac{50}{15} = -3.33{/$$}

{$$}\frac{B_x}{40} = 10^{-3.33} = 0.000468{/$$}

{$$}B_x \approx 0.02 \text{ resp/min (>99% reduction)}{/$$}

The four-fold difference in reinforcement rate produces a massive difference in resistance to disruption. Behavior in the Rich component survives the disruptor; behavior in the Lean component does not.

Now consider a larger disruptor ({$$}x = 5{/$$}):

**Rich component** ({$$}x = 5{/$$}):

{$$}\log \left(\frac{B_x}{40}\right) = -5 \times \frac{50}{60} = -4.17{/$$}

{$$}\frac{B_x}{40} = 10^{-4.17} = 0.000068{/$$}

{$$}B_x \approx 0.003 \text{ resp/min}{/$$}

**Lean component** ({$$}x = 5{/$$}):

{$$}\log \left(\frac{B_x}{40}\right) = -5 \times \frac{50}{15} = -16.67{/$$}

{$$}\frac{B_x}{40} = 10^{-16.67} \approx 0{/$$}

{$$}B_x \approx 0 \text{ resp/min}{/$$}

Both components show dramatic disruption with this large disruptor, but the qualitative difference is clear: behavior in the Rich component retains a trace of responding while the Lean component is completely eliminated. This differential resistance---the hallmark of behavioral momentum---emerges directly from the equation.

Several patterns are worth noting:

1. **The proportional decline is always greater in the Lean component.** For any given disruptor magnitude, the lean context loses a larger proportion of its baseline behavior.
2. **The absolute rates converge.** Even though both start at 40 resp/min, the Rich component is always higher after disruption.
3. **The effect scales with both disruption magnitude and reinforcement rate.** Doubling the disruptor magnitude has a larger proportional effect in the Lean component.

---

## Connection to Empirical Behavior Science

### Behavioral Momentum in the Laboratory

Nevin and colleagues (Nevin, Mandell, & Atak, 1983) established the foundational findings through systematic laboratory research using multiple schedules with pigeons. The initial finding was straightforward: in a two-component multiple schedule, behavior in the component associated with higher reinforcement rates was more resistant to disruption by pre-feeding, extinction, or alternative reinforcement.

These findings have been replicated across species (pigeons, rats, humans), response types (key pecking, lever pressing, academic responding), and disruptors (pre-feeding, extinction, pharmacological challenges, distraction). The generality of the finding is one of the theory's greatest strengths.

### Behavioral Momentum in Clinical Settings

The theory has been applied to clinical contexts in several important ways:

1. **Treatment relapse.** Nevin and Shahan's quantitative model of resurgence predicts that problem behaviors will re-emerge when treatment contingencies are disrupted, and that the degree of resurgence depends on the reinforcement history of the problem behavior. If the problem behavior was maintained in a rich reinforcement context, it will be more likely to resurge when treatment is disrupted. This provides a quantitative framework for predicting relapse and designing interventions that minimize it.

2. **Functional communication training (FCT).** Behavioral momentum theory predicts that the persistence of communication responses established through FCT depends on the reinforcement context in which they are trained. Training in richer contexts produces more durable communication responses. However, there is a paradox: enriching the context also increases the momentum of any other behaviors maintained in that context, including residual problem behavior. Balancing these competing effects is an active area of applied research.

3. **High-probability instruction sequences (high-p sequences).** The "behavioral momentum" intervention in which a series of high-probability requests precedes a low-probability request is directly inspired by the momentum metaphor---the "velocity" of compliance built up by the high-p sequence carries through to the low-p request.

4. **Context manipulation.** The theory suggests that changing the stimulus context---removing cues associated with the old reinforcement history---can reduce behavioral momentum. This has implications for treatment setting design: conducting treatment in a novel context, rather than in the context where the problem behavior was historically reinforced, may reduce the momentum of the problem behavior and improve treatment outcomes.

### Resurgence and Relapse

One of the most clinically significant applications of behavioral momentum theory is to the phenomenon of **resurgence**---the reappearance of a previously reinforced behavior when an alternative source of reinforcement is removed or degraded. Resurgence is a laboratory model of **relapse**, which is among the most challenging problems in clinical behavior change.

The typical resurgence procedure has three phases:

- **Phase 1 (Baseline):** A target response (e.g., lever pressing) is reinforced.
- **Phase 2 (Treatment):** The target response is placed on extinction while an alternative response is reinforced.
- **Phase 3 (Relapse test):** The alternative reinforcement is also removed or reduced.

In Phase 3, the previously extinguished target response often re-emerges---it resurges. Behavioral momentum theory, extended through the Resurgence as Choice framework (Shahan & Craig, 2017), accounts for this by treating the Phase 1 reinforcement history as establishing behavioral mass for the target response. Even after extinction in Phase 2 reduces the rate of the target response, the underlying Pavlovian association (the stimulus-reinforcer relationship established in Phase 1) retains some strength. When Phase 3 removes the alternative reinforcement, the relative value of the target response increases, and it resurges.

This framework makes quantitative predictions about:
- How the duration and rate of Phase 1 reinforcement affects the magnitude of resurgence
- How the duration of Phase 2 treatment affects the magnitude of resurgence (longer treatment = less resurgence)
- How the rate of alternative reinforcement in Phase 2 interacts with the original reinforcement history

These predictions have direct implications for treatment design: they suggest that longer treatment durations, thinner reinforcement schedules for the alternative behavior (once established), and careful management of the transition from treatment to maintenance can all reduce the risk of relapse.

### The Operant/Respondent Distinction in Practice

The recognition that behavioral momentum is fundamentally a Pavlovian phenomenon has practical consequences that extend beyond the laboratory. Consider a clinical scenario in which a therapist is trying to reduce aggressive behavior in a child. The aggression occurs primarily in the home setting, where the child also receives extensive non-contingent attention, access to preferred activities, and frequent social interaction. The therapist might focus exclusively on the operant contingency---placing aggression on extinction, reinforcing appropriate communication, etc.

Behavioral momentum theory predicts that this approach may be slow to work, not because the operant contingency change is inadequate, but because the **Pavlovian context is rich**. The home setting is densely associated with reinforcement from many sources, and this association gives all behavior in that context---including aggression---substantial mass. The therapist might be more successful if they also address the Pavlovian context: conducting initial treatment in a leaner setting, or systematically reducing non-contingent reinforcement sources in the home before targeting the operant contingency.

This is not a trivial point. Many intervention failures may be attributable not to a failure of the operant intervention but to an underappreciation of the Pavlovian context in which the intervention is being implemented. Behavioral momentum theory provides the formal framework for understanding why context matters and how to account for it quantitatively.

---

## Plain-Language Interpretation

Behavioral momentum theory says: **behavior persists because of the context it lives in, not because of how frequently it occurs.**

If you want to know how hard it will be to stop a behavior, do not look at how fast the organism is responding. Look instead at how much total reinforcement occurs in the setting where the behavior happens. A rich reinforcement context gives behavior mass---it makes behavior heavy, hard to move, resistant to disruption. A lean context gives behavior less mass---it is lighter, easier to disrupt.

This is counterintuitive. We tend to think of "strong" behavior as behavior that occurs frequently, vigorously, and reliably. But behavioral momentum theory shows that strength, defined as resistance to change, is not the same thing as rate. A behavior can occur at a high rate because the operant contingency is favorable (e.g., a dense reinforcement schedule), yet collapse quickly under disruption because the Pavlovian context is lean. Conversely, a behavior can occur at a modest rate but prove astonishingly resistant to change because the context in which it occurs is rich with reinforcement from many sources.

The physics metaphor makes this concrete. Think of two shopping carts, both rolling at the same speed. One is empty; the other is loaded with groceries. They have the same velocity but very different masses. If you try to stop both by pushing against them with equal force, the loaded cart will be much harder to stop. That is behavioral momentum in a nutshell: the "loading" of the cart corresponds to the Pavlovian richness of the reinforcement context, and the "push" corresponds to the disruptor (extinction, a new intervention, a change in conditions).

For clinicians, the message is this: when you introduce an intervention and the problem behavior persists longer than expected, consider the Pavlovian context. The behavior may be resisting change not because your intervention is weak, but because the setting in which it occurs is richly associated with reinforcement. Addressing the context---not just the contingency---may be the key to effective treatment.

---

## Assumptions and Limitations

Behavioral momentum theory, like all models, rests on assumptions that constrain its applicability:

- **Log-linear relationship:** The model assumes that the log-proportional change in behavior is a linear function of disruption magnitude. This is an approximation that holds well for moderate disruption but may break down at extremes (very small or very large disruptors).

- **Aggregate-level analysis:** The model describes group-level or condition-level trends. It does not predict trial-by-trial or moment-to-moment fluctuations in behavior. Individual sessions may deviate substantially from the predicted trajectory.

- **Static reinforcement rate:** The model uses a single reinforcement rate to characterize each context. In reality, reinforcement rates may fluctuate across sessions, and the effective reinforcement rate may change as the organism's behavior changes during disruption.

- **No conservation law:** Unlike physical momentum, behavioral momentum is not conserved. The metaphor is productive but not literal. Adding reinforcement to a context increases behavioral mass without requiring a corresponding decrease elsewhere.

- **Limited scope of the basic model:** The basic equation does not account for the source of reinforcement (contingent vs. non-contingent), the type of reinforcer, or the organism's motivational state. The augmented model addresses some of these limitations but adds parameters.

- **Extinction is not a pure disruptor:** Extinction changes the operant contingency (removing reinforcement for the target response), which means it is not purely an external "force" applied to behavior. This has been debated in the literature, and some researchers argue that extinction-induced disruption confounds operant and Pavlovian effects.

- **No representation of behavioral variability:** The model predicts the central tendency of behavior under disruption but does not predict the increase in behavioral variability (extinction bursts, novel response forms) that typically accompanies disruption.

These limitations define where the model applies and where extensions are needed. The theory's strength lies in its ability to generate clear, testable, quantitative predictions about a phenomenon---resistance to change---that is otherwise difficult to formalize.

---

## Exercises for Reflection

1. A therapist is implementing functional communication training (FCT) for a client whose hand-biting is maintained by escape from demands. The FCT is conducted in two settings: a clinic room (lean context, few other reinforcers available) and the client's classroom (rich context, many other reinforcers available throughout the day). Using behavioral momentum theory, predict which setting will show (a) faster initial reduction of hand-biting, and (b) more durable maintenance of the communication response. Is there a tension between these two goals? Explain.

2. Behavioral momentum theory claims that resistance to change is determined by the **stimulus-reinforcer** (Pavlovian) relationship, not the **response-reinforcer** (operant) relationship. Design a thought experiment that would allow you to test this claim. Specify two conditions that have the same operant contingency but different Pavlovian associations, describe the disruption you would introduce, and state what the theory predicts about resistance to change in each condition. What would it mean for the theory if the two conditions showed equal resistance to change?

3. Consider the phenomenon of resurgence: a previously reinforced response re-emerges when alternative reinforcement is removed. Use the behavioral momentum framework to explain why resurgence occurs. Then consider: if you were designing an FCT intervention and wanted to minimize the risk of resurgence when treatment contingencies are eventually thinned, what would behavioral momentum theory recommend? Think about both the treatment phase (Phase 2) and the transition to maintenance (Phase 3).

4. The physics metaphor in behavioral momentum theory is powerful but imperfect. Identify two ways in which behavioral momentum differs from physical momentum. For each difference, explain whether it is a minor limitation (the metaphor is still useful) or a fundamental problem (the metaphor is misleading). How should we treat metaphors in formal modeling---as mere heuristics, or as structural guides to theory construction?

---

## Key Readings

**Required:**

**Nevin, Mandell, and Atak (1983)** presented the foundational empirical and quantitative analysis of behavioral momentum, demonstrating that resistance to change is a function of the reinforcement context rather than the response-reinforcer contingency alone. Using multiple-schedule procedures with pigeons, they showed that behavior in components with higher reinforcement rates was more resistant to disruption by extinction and response-independent food, even when baseline response rates were similar or lower. The paper formalized the analogy to Newtonian momentum---with response rate as velocity and resistance to change as mass---and introduced the quantitative methods (log-proportion change, lateral shift analysis) that became standard in the field. This is the seminal paper for the week's topic and the origin of the formal model that students will analyze using the 8-step framework.

**Supplemental:**

**Nevin (1998)** connected behavioral momentum theory to choice behavior, arguing that the persistence of behavior in a given context can be understood through the same Pavlovian stimulus-reinforcer relationships that govern preference in concurrent schedules. He showed that momentum and choice are not separate phenomena but two manifestations of the same underlying reinforcement variables. This paper broadens the week's framework by demonstrating that behavioral momentum theory is not an isolated model but part of a larger quantitative account of how reinforcement history governs both the allocation and the persistence of behavior.

**Nevin (2002)** addressed the methodological challenges of measuring behavioral momentum, including the choice of disruption operations, the appropriate dependent variable for quantifying resistance to change, and the conditions under which the momentum metaphor does and does not hold. He discussed practical issues such as floor effects, the distinction between within-session and between-session disruption, and when log-proportion measures are preferable to raw proportions. This paper is essential reading for anyone who wants to apply the momentum model to data, because it makes explicit the measurement decisions that can make or break a quantitative analysis.

**Nevin and Shahan (2011)** extended behavioral momentum theory to applied contexts, deriving predictions about treatment relapse, resurgence, and the design of interventions that maximize the persistence of appropriate behavior while minimizing the persistence of problem behavior. They showed that the same quantitative framework that describes pigeon key pecking under disruption generates specific, testable predictions about clinical outcomes. This paper completes the translational arc for the week: from basic laboratory demonstration to formal model to applied prediction, illustrating how a well-specified quantitative model can guide clinical decision making.

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
- Why might extinction not serve as a clean "external force" in this framework?
- How is behavioral momentum often measured in experiments?
- What implications does behavioral momentum have for understanding response persistence?
- How could this model inform treatment planning in applied behavior analysis?
- What do the authors conclude about the theoretical value of the momentum analogy?

---

## Connecting Forward

This week we have seen how behavioral momentum theory formalizes the persistence of behavior as a function of the Pavlovian stimulus-reinforcer relationship in the context where behavior occurs. We used a basic model with relatively few parameters to generate predictions about resistance to change across different reinforcement contexts.

But in several places, we encountered choices: Should we use the basic model or the augmented model? Does the source of reinforcement matter, or does all reinforcement in a context contribute equally to behavioral mass? Is extinction a pure disruptor or does it confound operant and Pavlovian effects? These are questions about **model comparison**---how do we formally decide which version of a model better accounts for the data?

Next week, in **Week 6**, we turn to the tools of model comparison: information criteria, nested model tests, and the principles that guide us in choosing between competing accounts of the same phenomenon. We will use the basic and augmented momentum models as a running example, asking how we can determine---quantitatively, not just by eyeball---whether the added complexity of the augmented model is justified by its improved fit. This transition from "building a model" to "comparing models" is a critical step in the modeling enterprise, and it is where the 8-step framework meets the statistical tools that evaluate its products.

---

## References

Nevin, J. A. (1998). Choice and behavioral momentum. In W. T. O'Donohue (Ed.), *Learning and behavior therapy* (pp. 230--251). Allyn & Bacon.

Nevin, J. A. (2002). Measuring behavioral momentum. *Behavioural Processes, 57*(2--3), 187--198. https://doi.org/10.1016/S0376-6357(02)00013-X

Nevin, J. A., Mandell, C., & Atak, J. R. (1983). The analysis of behavioral momentum. *Journal of the Experimental Analysis of Behavior, 39*(1), 49--59. https://doi.org/10.1901/jeab.1983.39-49

Nevin, J. A., & Shahan, T. A. (2011). Behavioral momentum theory: Equations and applications. *Journal of Applied Behavior Analysis, 44*(4), 877--895. https://doi.org/10.1901/jaba.2011.44-877

Shahan, T. A., & Craig, A. R. (2017). Resurgence as choice. *Behavioural Processes, 141*(Pt 1), 100--127. https://doi.org/10.1016/j.beproc.2017.01.006

---

## Key Takeaways

- **Behavioral momentum theory formalizes resistance to change.** The theory uses a physics metaphor---mass, velocity, force---to describe how behavior persists under disruption. Richer reinforcement contexts produce more persistent behavior.

- **Rate and persistence are dissociable.** The rate of behavior is controlled by the operant (response-reinforcer) contingency, while the persistence of behavior is controlled by the Pavlovian (stimulus-reinforcer) contingency. These are not the same thing, and conflating them leads to incorrect predictions about intervention outcomes.

- **Behavioral momentum is a Pavlovian phenomenon.** The "mass" of behavior is determined by the respondent relationship between the discriminative stimulus context and reinforcement, not by the operant contingency. This is the single most important insight of the theory and the one most commonly misunderstood.

- **The basic equation:** {$$}\log(B_x/B_o) = -x \cdot c/r{/$$}. The proportional decline in behavior under disruption is a function of the ratio of disruption magnitude to reinforcement rate in the context.

- **Clinical applications are extensive.** The theory provides a quantitative framework for predicting treatment resistance, relapse, and resurgence. It explains why behaviors maintained in rich contexts are harder to treat and why relapse occurs when treatment contingencies are disrupted.

- **The augmented model extends the basic theory** by allowing different sources of reinforcement (contingent vs. non-contingent) to contribute differentially to behavioral mass. This adds explanatory power at the cost of additional parameters.

- **Context matters for intervention.** To reduce the persistence of problem behavior, clinicians should consider not only the operant contingency but also the overall Pavlovian richness of the context. Reducing non-contingent reinforcement in the problem context, or conducting treatment in a leaner context, may improve treatment outcomes.

- **Resurgence is predicted by the theory.** When treatment is disrupted, previously reinforced behavior can re-emerge. The magnitude of resurgence depends on the reinforcement history of the problem behavior and the duration and context of treatment.

- **Limitations include** the log-linear assumption, aggregate-level analysis, static reinforcement rates, and the imperfect physics metaphor. These define the boundary conditions of the theory and point toward extensions.

- **Models build on each other.** Rescorla-Wagner (Week 4) formalized how associations form; behavioral momentum theory formalizes how those associations make behavior persist. The Pavlovian contingency is the thread connecting both.

## Lab: Behavioral Momentum and Response Persistence

A> **Run this lab.** Notebooks and data files are available at:
A> [https://www.behavioral-data-science.org/book/labs/week-05](https://www.behavioral-data-science.org/book/labs/week-05)
A>
A> The companion materials include starter notebooks, the dataset(s) referenced below, and instructor-prepared solutions.

## Behavioral Momentum and Response Persistence Lab

Behavioral momentum theory (Nevin, 1992; Nevin & Shahan, 2011) provides a quantitative framework for understanding why behavior persists in the face of disruption. The central finding is that behavior maintained by higher rates of reinforcement is more resistant to change, analogous to how a more massive object in motion is harder to stop.

In this lab, you will work with data from a simulated multiple-schedule experiment in which subjects responded under both rich and lean reinforcement components. After stable baselines were established, responding was disrupted via prefeeding at graded amounts (0, 25, 50, 75, and 100g). Your task is to calculate proportion of baseline responding under each disruption level, fit the behavioral momentum equation to describe how responding decreases as a function of disruption intensity, and compare resistance to change across the two reinforcement contexts.

The key equation you will fit is:

log(Bx/B0) = -x * c / (r * S)

where Bx is the disrupted response rate, B0 is the baseline rate, x is the disruption level, c is sensitivity to disruption, r is the reinforcement rate in the component, and S captures the stimulus-reinforcer relation. Through this exercise, you will gain hands-on experience with the quantitative tools that behavioral momentum theory offers for predicting and interpreting response persistence.
