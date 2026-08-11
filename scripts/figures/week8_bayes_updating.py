"""Bayesian updating for the Week 8 worked example.

Run from the repository root with the project virtualenv:

    .venv/bin/python scripts/figures/week8_bayes_updating.py

Writes website/public/images/week8-bayes-updating.svg

The example in the text: a uniform Beta(1, 1) prior on p, then 8 of 10
intervals with attention, then 7 of the next 10. The Beta is conjugate to the
binomial, so each update only adds successes to the first parameter and
failures to the second.
"""

from pathlib import Path

import numpy as np
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from scipy import stats

OUT_DIR = Path(__file__).resolve().parents[2] / "website" / "public" / "images"

INK = "#0b0b0b"
AXIS = "#52514e"
ORANGE = "#eb6834"
BLUE = "#2a78d6"

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

# (observations so far, alpha, beta, colour, label)
STAGES = [
    (0, 1, 1, AXIS, "Prior: Beta(1, 1)"),
    (10, 9, 3, BLUE, "After 8/10: Beta(9, 3)"),
    (20, 16, 6, ORANGE, "After 15/20: Beta(16, 6)"),
]

fig, (ax_l, ax_r) = plt.subplots(1, 2, figsize=(9.8, 3.9))

# --- Panel A: the prior and the two posteriors ---
p = np.linspace(0, 1, 500)
for _, a, b, color, label in STAGES:
    ax_l.plot(p, stats.beta.pdf(p, a, b), color=color,
              linewidth=1.6 if a == 1 else 2.3, label=label)

ax_l.set_xlabel("$p$ (probability attention follows behavior)")
ax_l.set_ylabel("Density")
ax_l.set_xlim(0, 1)
ax_l.set_ylim(0, 4.7)
ax_l.set_title("A.  Prior and posteriors", loc="left", pad=10)
ax_l.legend(loc="upper left")

# --- Panel B: posterior mean and 95% credible interval as data accumulate ---
for n, a, b, color, _ in STAGES:
    lo, hi = stats.beta.ppf([0.025, 0.975], a, b)
    ax_r.plot([n, n], [lo, hi], color=color, linewidth=2.3,
              solid_capstyle="butt")
    ax_r.plot([n], [a / (a + b)], marker="o", markersize=7, color=color)
    ax_r.text(n + 0.9, hi, f"[{lo:.2f}, {hi:.2f}]", fontsize=10, color=color,
              weight="bold", ha="left", va="center")

ax_r.set_xlabel("Observations")
ax_r.set_ylabel("$p$")
ax_r.set_xlim(-3, 27)
ax_r.set_ylim(0, 1)
ax_r.set_xticks([0, 10, 20])
ax_r.set_title("B.  95% credible interval", loc="left", pad=10)

fig.tight_layout()
OUT_DIR.mkdir(parents=True, exist_ok=True)
fig.savefig(OUT_DIR / "week8-bayes-updating.svg", format="svg",
            bbox_inches="tight", pad_inches=0.15)
plt.close(fig)
print("wrote website/public/images/week8-bayes-updating.svg")
