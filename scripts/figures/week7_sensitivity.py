"""Sensitivity and ceiling figure for the Week 7 worked example.

Run from the repository root with the project virtualenv:

    .venv/bin/python scripts/figures/week7_sensitivity.py

Writes website/public/images/week7-sensitivity.svg

This is a data plot rather than a conceptual diagram, so it keeps the palette
used by the Week 1-6 figures.

Panel A sweeps alpha through the geometric model. Panel B contrasts geometric
growth with the logistic version, which settles at K(1 - beta/alpha) rather
than at K.
"""

from pathlib import Path

import numpy as np
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt

OUT_DIR = Path(__file__).resolve().parents[2] / "website" / "public" / "images"

INK = "#0b0b0b"
AXIS = "#52514e"
ORANGE = "#eb6834"
PURPLE = "#4a3aa7"
BLUE = "#2a78d6"

plt.rcParams.update({
    "figure.facecolor": "white",
    "savefig.facecolor": "white",
    "font.size": 12,
    "axes.labelsize": 16,
    "axes.labelweight": "bold",
    "axes.labelcolor": INK,
    "axes.titlesize": 13.5,
    "axes.titleweight": "bold",
    "axes.titlecolor": INK,
    "axes.edgecolor": AXIS,
    "axes.linewidth": 1.1,
    "axes.spines.top": False,
    "axes.spines.right": False,
    "xtick.color": AXIS,
    "ytick.color": AXIS,
    "xtick.labelsize": 12,
    "ytick.labelsize": 12,
    "xtick.labelcolor": AXIS,
    "ytick.labelcolor": AXIS,
    "legend.fontsize": 10.5,
    "legend.frameon": False,
    "legend.labelcolor": AXIS,
    "svg.fonttype": "path",
})

BETA, P, K = 0.05, 1.0, 10.0
ALPHA = 0.15


def geometric(alpha, r0=1.0, n=30):
    """r_{t+1} = r_t (1 + alpha p - beta)"""
    return r0 * (1 + alpha * P - BETA) ** np.arange(n + 1)


def logistic(alpha, r0=1.0, n=30):
    """r_{t+1} = r_t + alpha p r_t (1 - r_t / K) - beta r_t"""
    r = np.empty(n + 1)
    r[0] = r0
    for t in range(n):
        r[t + 1] = r[t] + alpha * P * r[t] * (1 - r[t] / K) - BETA * r[t]
    return r


fig, (ax_l, ax_r) = plt.subplots(1, 2, figsize=(8.4, 3.8))

# --- Panel A: one-at-a-time sweep over alpha ---
# label_y is set by hand, not tracked to the curve endpoint, because the two
# lowest curves land close enough together for their labels to collide
steps = np.arange(21)
sweep = [(0.05, AXIS, 0.0), (0.10, BLUE, 3.4), (0.15, INK, 7.2),
         (0.20, ORANGE, 16.4), (0.25, PURPLE, 38.3)]
for alpha, color, label_y in sweep:
    ax_l.plot(steps, geometric(alpha, n=20), color=color,
              linewidth=2.3 if alpha != 0.05 else 1.6)
    ax_l.text(20.4, label_y, f"$\\alpha = {alpha:.2f}$", fontsize=11,
              color=color, weight="bold", va="center")

ax_l.set_xlabel("Time step ($t$)")
ax_l.set_ylabel("$r_t$")
ax_l.set_xlim(0, 20)
ax_l.set_ylim(0, 40)
ax_l.set_title("A.  Sensitivity to $\\alpha$ (geometric)", loc="left", pad=10)

# --- Panel B: geometric growth against the logistic ceiling ---
steps = np.arange(61)
ax_r.plot(steps, geometric(ALPHA, n=60), color=INK, linewidth=1.6,
          label="Geometric")
ax_r.plot(steps, logistic(ALPHA, n=60), color=ORANGE, linewidth=2.3,
          label="Logistic")

ceiling = K * (1 - BETA / ALPHA)
ax_r.axhline(K, color=AXIS, linewidth=1.1, dashes=(1.8, 2.4))
ax_r.axhline(ceiling, color=ORANGE, linewidth=1.1, dashes=(4.8, 4.8))

# Every annotation sits in a region neither curve enters. The geometric curve
# leaves the top of the axes at t = 30 and is off-scale after that, so the strip
# right of t = 32 is clear at any height; the logistic curve never exceeds 6.67,
# so anything above that line on the right is clear too.
ax_r.text(32, 17.6, "grows without bound", fontsize=11, color=INK,
          weight="bold", ha="left", va="top")
ax_r.text(59, K + 0.4, "capacity $K = 10$", fontsize=10.5, color=AXIS,
          style="italic", ha="right", va="bottom")
ax_r.text(59, ceiling + 0.4, "$r^* = K(1 - \\beta/\\alpha) = 6.67$",
          fontsize=10.5, color=ORANGE, style="italic", ha="right", va="bottom")

ax_r.set_xlabel("Time step ($t$)")
ax_r.set_ylabel("$r_t$")
ax_r.set_xlim(0, 60)
ax_r.set_ylim(0, 18)
ax_r.set_title("B.  Adding a ceiling", loc="left", pad=10)
ax_r.legend(loc="upper left")

fig.tight_layout()
OUT_DIR.mkdir(parents=True, exist_ok=True)
fig.savefig(OUT_DIR / "week7-sensitivity.svg", format="svg",
            bbox_inches="tight", pad_inches=0.15)
plt.close(fig)
print("wrote website/public/images/week7-sensitivity.svg")
