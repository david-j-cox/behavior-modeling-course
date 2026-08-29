"""Partial pooling and shrinkage, for Week 9.

Run from the repository root with the project virtualenv:

    .venv/bin/python scripts/figures/week9_shrinkage.py

Writes website/public/images/week9-shrinkage.svg

The worked example in the text is balanced, so it shows almost no shrinkage.
This figure is deliberately unbalanced: eight participants contributing between
2 and 20 sessions each, drawn from a population with grand mean 27 responses
per minute, between-participant SD 6, and within-participant SD 8. The variance
components are the standard unbalanced ANOVA estimates, so nothing here uses
knowledge of the true parameters.

Panel A places the three estimators side by side for each participant. Panel B
plots the shrinkage factor lambda = tau^2 / (tau^2 + sigma^2 / n), which is the
weight the multilevel model puts on a participant's own data, against the number
of sessions, for two ratios of between- to within-participant variance. Panel C
is the accuracy claim in the text, checked: root mean squared error of each
estimator against the true participant means over 4000 replications of the same
design.
"""

from pathlib import Path

import numpy as np
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.patches import FancyArrowPatch

OUT_DIR = Path(__file__).resolve().parents[2] / "website" / "public" / "images"

INK = "#0b0b0b"
AXIS = "#52514e"
ORANGE = "#eb6834"
BLUE = "#2a78d6"
PURPLE = "#4a3aa7"
PALE = "#b8b7b2"

plt.rcParams.update({
    "figure.facecolor": "white",
    "savefig.facecolor": "white",
    "font.size": 12,
    "axes.labelsize": 13,
    "axes.labelweight": "bold",
    "axes.labelcolor": INK,
    "axes.titlesize": 13,
    "axes.titleweight": "bold",
    "axes.titlecolor": INK,
    "axes.edgecolor": AXIS,
    "axes.linewidth": 1.1,
    "axes.spines.top": False,
    "axes.spines.right": False,
    "xtick.color": AXIS,
    "ytick.color": AXIS,
    "xtick.labelsize": 11,
    "ytick.labelsize": 11,
    "xtick.labelcolor": AXIS,
    "ytick.labelcolor": AXIS,
    "legend.fontsize": 10.5,
    "legend.frameon": False,
    "legend.labelcolor": AXIS,
    "svg.fonttype": "path",
})

MU = 27.0                 # grand mean, responses per minute
TAU = 6.0                 # between-participant SD
SIGMA = 8.0               # within-participant SD
COUNTS = np.array([2, 2, 3, 5, 8, 12, 16, 20])   # sessions per participant


def variance_components(groups):
    """ANOVA (Searle) estimates of sigma^2 and tau^2 for unbalanced groups."""
    counts = np.array([g.size for g in groups], dtype=float)
    means = np.array([g.mean() for g in groups])
    total = counts.sum()
    n_groups = counts.size
    grand = np.sum(counts * means) / total
    ss_within = np.sum([np.sum((g - g.mean()) ** 2) for g in groups])
    ms_within = ss_within / (total - n_groups)
    ms_between = np.sum(counts * (means - grand) ** 2) / (n_groups - 1)
    n0 = (total - np.sum(counts ** 2) / total) / (n_groups - 1)
    tau2 = max((ms_between - ms_within) / n0, 0.0)
    return grand, means, counts, ms_within, tau2


def partial_pool(group_means, counts, mu, tau2, sigma2):
    """Empirical Bayes estimate for each group mean."""
    lam = tau2 / (tau2 + sigma2 / counts)
    return mu + lam * (group_means - mu), lam


# --- one dataset for panels A and B ----------------------------------------
rng = np.random.default_rng(9)
true_means = MU + rng.normal(0, TAU, COUNTS.size)
sessions = [rng.normal(m, SIGMA, n) for m, n in zip(true_means, COUNTS)]

grand_hat, raw_means, _, sigma2_hat, tau2_hat = variance_components(sessions)
shrunk, lam_obs = partial_pool(raw_means, COUNTS, grand_hat, tau2_hat,
                               sigma2_hat)

fig = plt.figure(figsize=(11.4, 4.5))
gs = fig.add_gridspec(1, 3, width_ratios=[1.35, 1.0, 0.72], wspace=0.40)
ax_a = fig.add_subplot(gs[0, 0])
ax_b = fig.add_subplot(gs[0, 1])
ax_c = fig.add_subplot(gs[0, 2])

# --- Panel A: the three estimators -----------------------------------------
pos = np.arange(COUNTS.size)
ax_a.axhline(grand_hat, color=PALE, linewidth=2.4, zorder=1,
             label="Complete pooling (grand mean)")

for i, (p, obs) in enumerate(zip(pos, sessions)):
    ax_a.plot(np.full(obs.size, p), obs, linestyle="none", marker="o",
              markersize=3.2, color=PALE, alpha=0.9, zorder=2)
    ax_a.add_patch(FancyArrowPatch((p, raw_means[i]), (p, shrunk[i]),
                                   arrowstyle="-|>", mutation_scale=10,
                                   linewidth=1.3, color=AXIS,
                                   shrinkA=3.5, shrinkB=1.5, zorder=3))

ax_a.plot(pos, raw_means, linestyle="none", marker="o", markersize=7.5,
          markerfacecolor="white", markeredgecolor=BLUE, markeredgewidth=1.8,
          zorder=4, label="No pooling (participant mean)")
ax_a.plot(pos, shrunk, linestyle="none", marker="o", markersize=7.0,
          color=ORANGE, zorder=5, label="Partial pooling (multilevel)")
ax_a.set_xticks(pos)
ax_a.set_xticklabels([f"{n}" for n in COUNTS])
ax_a.set_xlabel("Sessions Contributed")
ax_a.set_ylabel("Response Rate (Per Minute)")
ax_a.set_xlim(-0.6, COUNTS.size - 0.4)
low = np.floor(min(o.min() for o in sessions)) - 2
high = np.ceil(max(o.max() for o in sessions))
ax_a.set_ylim(low, high + 0.42 * (high - low))
ax_a.set_title("A.  Three Estimates Per Participant", loc="left", pad=22)
ax_a.annotate("8 participants, 2 to 20 sessions each",
              xy=(0, 1.0), xytext=(0, 8), xycoords="axes fraction",
              textcoords="offset points", fontsize=10.0, color=AXIS,
              ha="left", va="bottom")
handles, labels = ax_a.get_legend_handles_labels()
order = [1, 2, 0]
ax_a.legend([handles[i] for i in order], [labels[i] for i in order],
            loc="upper left", handletextpad=0.5, borderaxespad=0.3,
            labelspacing=0.3)

# --- Panel B: the shrinkage factor -----------------------------------------
n_grid = np.linspace(1, 22, 300)
tau_hat = np.sqrt(tau2_hat)
sigma_hat = np.sqrt(sigma2_hat)
for tau_b, color, label in [
    (tau_hat, ORANGE,
     f"$\\hat{{\\tau}} = {tau_hat:.1f}$ (this dataset)"),
    (tau_hat / 2, PURPLE, f"$\\tau = {tau_hat / 2:.1f}$"),
]:
    lam = tau_b ** 2 / (tau_b ** 2 + sigma2_hat / n_grid)
    ax_b.plot(n_grid, lam, color=color, linewidth=2.3, label=label)

ax_b.plot(COUNTS, lam_obs, linestyle="none", marker="o", markersize=6.0,
          markerfacecolor="white", markeredgecolor=ORANGE, markeredgewidth=1.7,
          zorder=4)
ax_b.text(1.2, 0.96, f"$\\hat{{\\sigma}} = {sigma_hat:.1f}$ throughout",
          fontsize=10.0, color=AXIS, ha="left", va="top")
ax_b.set_xlim(0.6, 22)
ax_b.set_ylim(0, 1.02)
ax_b.set_xticks([2, 5, 10, 15, 20])
ax_b.set_xlabel("Sessions, $n$")
ax_b.set_ylabel("Shrinkage Factor, $\\lambda$")
ax_b.set_title("B.  Weight on Own Data", loc="left", pad=22)
ax_b.annotate("$\\lambda = \\tau^2 / (\\tau^2 + \\sigma^2 / n)$",
              xy=(0, 1.0), xytext=(0, 8), xycoords="axes fraction",
              textcoords="offset points", fontsize=10.0, color=AXIS,
              ha="left", va="bottom")
ax_b.legend(loc="lower right", borderaxespad=0.4)

# --- Panel C: accuracy over repeated datasets ------------------------------
REPS = 4000
sq_err = np.zeros((3, REPS))
rng2 = np.random.default_rng(202)
for r in range(REPS):
    truth = MU + rng2.normal(0, TAU, COUNTS.size)
    groups = [rng2.normal(m, SIGMA, n) for m, n in zip(truth, COUNTS)]
    gm, means, counts, s2, t2 = variance_components(groups)
    pp, _ = partial_pool(means, counts, gm, t2, s2)
    sq_err[0, r] = np.mean((gm - truth) ** 2)
    sq_err[1, r] = np.mean((means - truth) ** 2)
    sq_err[2, r] = np.mean((pp - truth) ** 2)

rmse = np.sqrt(sq_err.mean(axis=1))
labels = ["Complete\nPooling", "No\nPooling", "Partial\nPooling"]
colors = [PALE, BLUE, ORANGE]
ax_c.bar(np.arange(3), rmse, width=0.62, color=colors, edgecolor=AXIS,
         linewidth=0.6)
for i, v in enumerate(rmse):
    ax_c.text(i, v + 0.08, f"{v:.2f}", fontsize=10.5, color=AXIS,
              ha="center", va="bottom", weight="bold")
ax_c.set_xticks(np.arange(3))
ax_c.set_xticklabels(labels)
ax_c.tick_params(axis="x", labelsize=10.0)
ax_c.set_ylim(0, max(rmse) * 1.28)
ax_c.set_ylabel("RMSE (Per Minute)")
ax_c.set_title("C.  Estimator Accuracy", loc="left", pad=22)
ax_c.annotate("4000 replications", xy=(0, 1.0), xytext=(0, 8),
              xycoords="axes fraction", textcoords="offset points",
              fontsize=10.0, color=AXIS, ha="left", va="bottom")

OUT_DIR.mkdir(parents=True, exist_ok=True)
fig.savefig(OUT_DIR / "week9-shrinkage.svg", format="svg",
            bbox_inches="tight", pad_inches=0.15)
plt.close(fig)

print("wrote website/public/images/week9-shrinkage.svg")
print(f"grand mean estimate {grand_hat:.2f}, tau2 {tau2_hat:.2f}, "
      f"sigma2 {sigma2_hat:.2f}")
for n, raw, sh, lm in zip(COUNTS, raw_means, shrunk, lam_obs):
    print(f"  n={n:2d}  raw {raw:6.2f} -> partial {sh:6.2f}  "
          f"(lambda {lm:.2f}, moved {abs(raw - sh):.2f})")
print(f"RMSE complete {rmse[0]:.3f}, none {rmse[1]:.3f}, "
      f"partial {rmse[2]:.3f}")
print(f"fitted tau {np.sqrt(tau2_hat):.2f}, "
      f"sigma {np.sqrt(sigma2_hat):.2f}; "
      f"lambda n=2 {lam_obs[0]:.2f}, n=20 {lam_obs[-1]:.2f}")
