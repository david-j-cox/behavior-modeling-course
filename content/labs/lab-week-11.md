---
week: 11
title: "Computational Models"
description: "Build a Q-learning agent and test whether reinforcement learning produces matching on concurrent schedules."
notebooks:
  - filename: "computational_models_lab.ipynb"
    title: "Q-Learning Lab"
instructorNotebooks:
  - filename: "computational_models_lab_solution.ipynb"
    title: "Q-Learning Lab (Solution)"
dataFiles: []
---

## Computational Models Lab

This week bridges the descriptive models of behavior from earlier in the course with process-level computational models that specify *how* behavior is generated. Rather than fitting equations to existing data, you will build an agent that learns from scratch through trial-and-error interaction with a simulated concurrent VI-VI schedule.

The core question is whether a simple reinforcement learning algorithm -- Q-learning -- produces steady-state choice allocation that resembles the matching law. If it does, this suggests that matching may be an emergent property of basic reinforcement learning dynamics rather than a separate behavioral principle that organisms "follow."

In the lab notebook, you will implement both the environment (concurrent VI 30-s vs VI 60-s schedule) and the agent (Q-learning with softmax action selection). You will then run simulations across multiple sessions, sweep key parameters (learning rate, discount factor), and compare the agent's behavior to the generalized matching equation from Week 2. This exercise illustrates how computational models can serve as mechanistic accounts that give rise to the molar regularities captured by descriptive models.

### Assignment

Complete all tasks in the Jupyter notebook. Each task builds on the previous one. Pay particular attention to the final discussion, where you reflect on the relationship between descriptive models (matching law) and process models (Q-learning).
