"""The two results that follow from a Poisson process, for Week 8.

Run from the repository root with the project virtualenv:

    .venv/bin/python scripts/figures/week8_poisson_process.py

Writes website/public/images/week8-poisson-process.svg

The rate is the pigeon example from the text: lambda = 0.5 responses per
second. Panel A is one realization of the process; the two panels below it are
the distributions that realization is drawn from, so the same rate produces the
count distribution on one hand and the inter-response time distribution on the
other.
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

LAM = 0.5          # responses per second
DURATION = 60.0    # seconds shown in the raster
WINDOW = (20.0, 30.0)   # the 10-s window counted in panel A

rng = np.random.default_rng(8)
irts = rng.exponential(1 / LAM, size=200)
times = np.cumsum(irts)
times = times[times < DURATION]
in_window = times[(times >= WINDOW[0]) & (times < WINDOW[1])]

fig = plt.figure(figsize=(9.6, 6.0))
gs = fig.add_gridspec(2, 2, height_ratios=[1.0, 2.0], hspace=0.62, wspace=0.28)
ax_a = fig.add_subplot(gs[0, :])
ax_b = fig.add_subplot(gs[1, 0])
ax_c = fig.add_subplot(gs[1, 1])

# --- Panel A: one realization ---
ax_a.axvspan(*WINDOW, color=PALE, alpha=0.45, linewidth=0)
ax_a.vlines(times, 0, 1, color=INK, linewidth=1.6)
ax_a.set_xlim(0, DURATION)
ax_a.set_ylim(0, 1.9)
ax_a.set_yticks([])
ax_a.spines["left"].set_visible(False)
ax_a.set_xlabel("Time (s)")
ax_a.set_title("A.  One realization at $\\lambda = 0.5$ responses per second",
               loc="left", pad=10)
ax_a.text(np.mean(WINDOW), 1.20, f"$k = {len(in_window)}$ in 10 s",
          fontsize=11, color=AXIS, ha="center", va="bottom", weight="bold")

# the longest gap in the first half of the record, marked as an inter-response time
gaps = np.diff(times)
j = int(np.argmax(gaps[: len(gaps) // 2]))
ax_a.add_patch(FancyArrowPatch((times[j], 1.45), (times[j + 1], 1.45),
                               arrowstyle="<|-|>", mutation_scale=11,
                               linewidth=1.2, color=ORANGE,
                               shrinkA=0, shrinkB=0))
ax_a.text((times[j] + times[j + 1]) / 2, 1.55, "$\\tau$", fontsize=12,
          color=ORANGE, ha="center", va="bottom", weight="bold")

# --- Panel B: counts in a 10-s interval ---
T = 10.0
k = np.arange(0, 16)
pmf = stats.poisson.pmf(k, LAM * T)
colors = [ORANGE if i == len(in_window) else PALE for i in k]
ax_b.bar(k, pmf, width=0.72, color=colors, edgecolor=AXIS, linewidth=0.5)
ax_b.set_xlabel("Responses in 10 s ($k$)")
ax_b.set_ylabel("$P(k)$")
ax_b.set_xlim(-0.8, 14.6)
ax_b.set_xticks([0, 2, 4, 6, 8, 10, 12, 14])
ax_b.set_ylim(0, 0.20)
ax_b.set_title("B.  Counts: Poisson($\\lambda t = 5$)", loc="left", pad=10)
ax_b.text(14.2, 0.178, "$\\mathrm{mean} = \\mathrm{variance} = \\lambda t$",
          fontsize=10.5, color=AXIS, ha="right", va="top")

# --- Panel C: inter-response times ---
tau = np.linspace(0, 12, 400)
dens = LAM * np.exp(-LAM * tau)
ax_c.plot(tau, dens, color=INK, linewidth=2.3)
tail = tau >= 5
ax_c.fill_between(tau[tail], dens[tail], color=ORANGE, alpha=0.55, linewidth=0)
ax_c.axvline(1 / LAM, color=BLUE, linewidth=1.4, dashes=(4.8, 4.0))
ax_c.text(1 / LAM + 0.25, 0.47, "$\\mathrm{mean} = 1/\\lambda = 2$ s",
          fontsize=10.5, color=BLUE, weight="bold", ha="left", va="top")
ax_c.annotate("$P(\\tau > 5) = 0.082$", xy=(5.8, 0.022), xytext=(7.0, 0.18),
              fontsize=10.5, color=ORANGE, weight="bold",
              arrowprops=dict(arrowstyle="-", color=ORANGE, linewidth=1.0))
ax_c.set_xlabel("Inter-response time, $\\tau$ (s)")
ax_c.set_ylabel("$f(\\tau)$")
ax_c.set_xlim(0, 12)
ax_c.set_ylim(0, 0.53)
ax_c.set_title("C.  Inter-response times: Exponential($\\lambda$)",
               loc="left", pad=10)

OUT_DIR.mkdir(parents=True, exist_ok=True)
fig.savefig(OUT_DIR / "week8-poisson-process.svg", format="svg",
            bbox_inches="tight", pad_inches=0.15)
plt.close(fig)
print("wrote website/public/images/week8-poisson-process.svg")
