"""Signal detection theory figure for Week 8.

Run from the repository root with the project virtualenv:

    .venv/bin/python scripts/figures/week8_sdt.py

Writes website/public/images/week8-sdt.svg

Panel A is the equal-variance model for the first observer in the text (hit
rate 0.85, false alarm rate 0.15, so d' = 2.08 and c = 0). Panel B places both
observers from the text on ROC curves: they share a hit rate, so what separates
them is sensitivity, which raw agreement would not reveal.
"""

from pathlib import Path

import numpy as np
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.patches import FancyArrowPatch
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
    "legend.fontsize": 10.5,
    "legend.frameon": False,
    "legend.labelcolor": AXIS,
    "svg.fonttype": "path",
})

# The two observers from the text, both at a hit rate of 0.85.
# d' is written as the text reports it, rounded from z(0.85) = 1.04.
OBS = [
    (0.85, 0.15, ORANGE, "Observer 1 ($d' = 2.08$)"),
    (0.85, 0.40, BLUE, "Observer 2 ($d' = 1.29$)"),
]
D1 = stats.norm.ppf(0.85) - stats.norm.ppf(0.15)     # 2.08
D2 = stats.norm.ppf(0.85) - stats.norm.ppf(0.40)     # 1.29
K1 = stats.norm.ppf(0.85)                            # criterion for observer 1

fig, (ax_l, ax_r) = plt.subplots(1, 2, figsize=(10.2, 4.0))

# --- Panel A: the equal-variance model behind observer 1 ---
x = np.linspace(-3.4, 5.6, 700)
noise = stats.norm.pdf(x, 0, 1)
signal = stats.norm.pdf(x, D1, 1)
right = x >= K1

ax_l.fill_between(x[right], noise[right], color=PALE, alpha=0.75, linewidth=0)
ax_l.fill_between(x[right], signal[right], color=ORANGE, alpha=0.40, linewidth=0)
ax_l.plot(x, noise, color=AXIS, linewidth=2.0)
ax_l.plot(x, signal, color=INK, linewidth=2.3)
ax_l.plot([K1, K1], [0, 0.44], color=INK, linewidth=1.4, dashes=(4.8, 4.0))

ax_l.text(-0.9, 0.41, "Noise", fontsize=11, color=AXIS, weight="bold",
          ha="center", va="bottom")
ax_l.text(D1 + 0.9, 0.41, "Signal", fontsize=11, color=INK, weight="bold",
          ha="center", va="bottom")
ax_l.text(K1, 0.455, "criterion", fontsize=10.5, color=INK, ha="center",
          va="bottom")
ax_l.annotate("False alarms", xy=(1.85, 0.035), xytext=(4.55, 0.055),
              fontsize=10.5, color=AXIS, weight="bold", ha="right", va="bottom",
              arrowprops=dict(arrowstyle="-", color=AXIS, linewidth=1.0))
ax_l.text(3.05, 0.13, "Hits", fontsize=10.5, color=ORANGE, weight="bold",
          ha="center", va="bottom")

ax_l.add_patch(FancyArrowPatch((0, 0.295), (D1, 0.295), arrowstyle="<|-|>",
                               mutation_scale=11, linewidth=1.2, color=BLUE,
                               shrinkA=0, shrinkB=0))
ax_l.text(D1 / 2, 0.335, "$d' = 2.08$", fontsize=11, color=BLUE, weight="bold",
          ha="center", va="bottom",
          bbox=dict(facecolor="white", edgecolor="none", alpha=0.6, pad=1.5))

ax_l.set_xlabel("Evidence")
ax_l.set_ylabel("Density")
ax_l.set_xlim(-3.4, 5.6)
ax_l.set_ylim(0, 0.53)
ax_l.set_yticks([0, 0.1, 0.2, 0.3, 0.4])
ax_l.set_title("A.  Equal-variance model, Observer 1", loc="left", pad=10)

# --- Panel B: ROC curves through each observer's operating point ---
k = np.linspace(-4.5, 4.5, 600)
ax_r.plot([0, 1], [0, 1], color=PALE, linewidth=1.4, dashes=(4.8, 4.0))
ax_r.text(0.62, 0.55, "$d' = 0$ (guessing)", fontsize=10.5, color=AXIS,
          ha="left", va="top", rotation=36, rotation_mode="anchor")

for (hit, fa, color, label), d in zip(OBS, (D1, D2)):
    ax_r.plot(1 - stats.norm.cdf(k), 1 - stats.norm.cdf(k - d), color=color,
              linewidth=2.3)
    ax_r.plot([fa], [hit], marker="o", markersize=8, color=color, label=label)

ax_r.set_xlabel("False alarm rate")
ax_r.set_ylabel("Hit rate")
ax_r.set_xlim(0, 1)
ax_r.set_ylim(0, 1)
ax_r.set_aspect("equal")
ax_r.set_title("B.  ROC curves", loc="left", pad=10)
ax_r.legend(loc="lower right", handletextpad=0.4, borderaxespad=0.7)

fig.tight_layout()
OUT_DIR.mkdir(parents=True, exist_ok=True)
fig.savefig(OUT_DIR / "week8-sdt.svg", format="svg",
            bbox_inches="tight", pad_inches=0.15)
plt.close(fig)
print("wrote website/public/images/week8-sdt.svg")
