"""The three distributions introduced in the Week 8 Core Concepts section.

Run from the repository root with the project virtualenv:

    .venv/bin/python scripts/figures/week8_distributions.py

Writes website/public/images/week8-distributions.svg

Each panel uses the numbers already worked in the text: the binomial for a
20-trial matching-to-sample task at p = 0.80, the Poisson for an average of
4 responses per minute, and the normal for a continuous measure.
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

fig, (ax_a, ax_b, ax_c) = plt.subplots(1, 3, figsize=(11.4, 3.6))

# --- Panel A: binomial, 20 trials at p = 0.80 ---
N, P = 20, 0.80
k = np.arange(N + 1)
pmf = stats.binom.pmf(k, N, P)
colors = [ORANGE if i == 16 else PALE for i in k]
ax_a.bar(k, pmf, width=0.72, color=colors, edgecolor=AXIS, linewidth=0.5)
ax_a.annotate(f"$P(16) = {pmf[16]:.3f}$", xy=(16, pmf[16]), xytext=(10.4, 0.190),
              fontsize=10.5, color=ORANGE, weight="bold", va="center",
              arrowprops=dict(arrowstyle="-", color=ORANGE, linewidth=1.0))
ax_a.set_xlabel("Correct trials ($k$)")
ax_a.set_ylabel("$P(k)$")
ax_a.set_xlim(8.5, 20.6)
ax_a.set_xticks([10, 12, 14, 16, 18, 20])
ax_a.set_ylim(0, 0.235)
ax_a.set_title("A.  Binomial ($n = 20$, $p = 0.80$)", loc="left", pad=10)

# --- Panel B: Poisson, 4 responses per minute ---
LAM = 4.0
k = np.arange(0, 16)
pmf = stats.poisson.pmf(k, LAM)
marked = {0, 4, 8}
colors = [BLUE if i in marked else PALE for i in k]
ax_b.bar(k, pmf, width=0.72, color=colors, edgecolor=AXIS, linewidth=0.5)
for i, dy in ((0, 0.012), (4, 0.010), (8, 0.012)):
    ax_b.text(i, pmf[i] + dy, f"{pmf[i]:.3f}", fontsize=10, color=BLUE,
              weight="bold", ha="center", va="bottom")
ax_b.set_xlabel("Responses per minute ($k$)")
ax_b.set_ylabel("$P(k)$")
ax_b.set_xlim(-0.8, 14.6)
ax_b.set_xticks([0, 2, 4, 6, 8, 10, 12, 14])
ax_b.set_ylim(0, 0.235)
ax_b.set_title("B.  Poisson ($\\lambda = 4$)", loc="left", pad=10)

# --- Panel C: normal ---
x = np.linspace(-4, 4, 400)
pdf = stats.norm.pdf(x)
ax_c.plot(x, pdf, color=INK, linewidth=2.3)
band = (x >= -1) & (x <= 1)
ax_c.fill_between(x[band], pdf[band], color=PALE, alpha=0.55, linewidth=0)
ax_c.axvline(0, color=AXIS, linewidth=1.1, dashes=(1.8, 2.4))
ax_c.set_xlabel("$x$")
ax_c.set_ylabel("$f(x)$")
ax_c.set_xlim(-4, 4)
ax_c.set_ylim(0, 0.46)
ax_c.set_xticks([-1, 0, 1])
ax_c.set_xticklabels(["$\\mu - \\sigma$", "$\\mu$", "$\\mu + \\sigma$"],
                     fontsize=11)
ax_c.set_title("C.  Normal ($\\mu$, $\\sigma^2$)", loc="left", pad=10)

fig.tight_layout()
OUT_DIR.mkdir(parents=True, exist_ok=True)
fig.savefig(OUT_DIR / "week8-distributions.svg", format="svg",
            bbox_inches="tight", pad_inches=0.15)
plt.close(fig)
print("wrote website/public/images/week8-distributions.svg")
