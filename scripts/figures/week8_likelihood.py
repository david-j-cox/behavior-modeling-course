"""Likelihood and log-likelihood for the Week 8 Poisson MLE worked example.

Run from the repository root with the project virtualenv:

    .venv/bin/python scripts/figures/week8_likelihood.py

Writes website/public/images/week8-likelihood.svg

The counts are the ten 1-minute observation intervals from the text, which sum
to 38. Both panels peak at the same place, which is the point of taking logs:
the sum is easier to work with than the product and the maximum does not move.
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
    "svg.fonttype": "path",
})

COUNTS = np.array([3, 5, 2, 4, 6, 3, 4, 5, 2, 4])
N = COUNTS.size
MLE = COUNTS.sum() / N          # 3.8
SE = np.sqrt(MLE / N)           # 0.616
CI = (MLE - 1.96 * SE, MLE + 1.96 * SE)

lam = np.linspace(1.4, 7.4, 600)
loglik = np.array([stats.poisson.logpmf(COUNTS, l).sum() for l in lam])
lik = np.exp(loglik - loglik.max())     # scaled so the maximum is 1

fig, (ax_l, ax_r) = plt.subplots(1, 2, figsize=(9.8, 3.9))

# --- Panel A: the likelihood itself ---
ax_l.plot(lam, lik, color=INK, linewidth=2.3)
ax_l.plot([MLE, MLE], [0, 1.0], color=ORANGE, linewidth=1.4,
          dashes=(4.8, 4.0))
ax_l.plot([MLE], [1.0], marker="o", markersize=7, color=ORANGE)
ax_l.text(MLE, 1.045, "$\\hat{\\lambda} = 3.8$", fontsize=11.5,
          color=ORANGE, weight="bold", ha="center", va="bottom")
ax_l.set_xlabel("$\\lambda$ (events per minute)")
ax_l.set_ylabel("$L(\\lambda)$, scaled")
ax_l.set_xlim(1.4, 7.4)
ax_l.set_ylim(0, 1.1)
ax_l.set_title("A.  Likelihood", loc="left", pad=10)

# --- Panel B: the log-likelihood, with the interval from its curvature ---
ax_r.axvspan(*CI, color=PALE, alpha=0.45, linewidth=0)
ax_r.plot(lam, loglik, color=INK, linewidth=2.3)
ax_r.plot([MLE, MLE], [-35.6, loglik.max()], color=ORANGE, linewidth=1.4,
          dashes=(4.8, 4.0))
ax_r.plot([MLE], [loglik.max()], marker="o", markersize=7, color=ORANGE)
ax_r.text(np.mean(CI), -37.4, "95% CI [2.59, 5.01]", fontsize=10.5,
          color=BLUE, weight="bold", ha="center", va="bottom")
ax_r.set_xlabel("$\\lambda$ (events per minute)")
ax_r.set_ylabel("$\\ell(\\lambda)$")
ax_r.set_xlim(1.4, 7.4)
ax_r.set_ylim(-38, -16.4)
ax_r.set_title("B.  Log-likelihood", loc="left", pad=10)

fig.tight_layout()
OUT_DIR.mkdir(parents=True, exist_ok=True)
fig.savefig(OUT_DIR / "week8-likelihood.svg", format="svg",
            bbox_inches="tight", pad_inches=0.15)
plt.close(fig)
print("wrote website/public/images/week8-likelihood.svg")
