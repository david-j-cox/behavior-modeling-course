"""Single-pool flow diagram for the token-economy walkthrough in Week 7.

Run from the repository root with the project virtualenv:

    .venv/bin/python scripts/figures/week7_flow_token_economy.py

Writes website/public/images/week7-flow-token-economy.svg

Same convention and colours as week7_flow_diagram.py, so the two flow diagrams
in the chapter read as a pair.
"""

from pathlib import Path

import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.patches import Circle, FancyArrowPatch

OUT_DIR = Path(__file__).resolve().parents[2] / "website" / "public" / "images"

BLACK = "#000000"

plt.rcParams.update({
    "figure.facecolor": "white",
    "savefig.facecolor": "white",
    "font.size": 12,
    "axes.titlesize": 13.5,
    "axes.titleweight": "bold",
    "axes.titlecolor": BLACK,
    "svg.fonttype": "path",
})


def arrow(ax, start, end, color):
    ax.add_patch(FancyArrowPatch(start, end, arrowstyle="-|>", mutation_scale=18,
                                 linewidth=1.8, color=color, shrinkA=0, shrinkB=0))


fig, ax = plt.subplots(figsize=(7.4, 3.4))
ax.set_xlim(0, 1)
ax.set_ylim(0.16, 0.46)
ax.set_aspect("equal")
ax.axis("off")
ax.set_title("Flow diagram: problem behavior under a token economy",
             loc="center", pad=12)

R = 0.115
CENTRE = (0.46, 0.33)

ax.add_patch(Circle(CENTRE, R, facecolor="white", edgecolor=BLACK, linewidth=1.8,
                    zorder=3))
ax.text(CENTRE[0], CENTRE[1], "Problem\nbehavior\n$P(t)$", fontsize=9.5, color=BLACK,
        zorder=4, ha="center", va="center", linespacing=1.6)

arrow(ax, (0.04, CENTRE[1]), (CENTRE[0] - R - 0.012, CENTRE[1]), BLACK)
arrow(ax, (CENTRE[0] + R + 0.012, CENTRE[1]), (0.92, CENTRE[1]), BLACK)

# Otto & Day put the complete rate expression on the arrow, with the plain
# description secondary; writing dP/dt = -lambda(P - P*) as lambda P* - lambda P
# splits it into a constant inflow and an outflow proportional to P
ax.text(0.04, CENTRE[1] + 0.030, r"$\lambda P^*$", fontsize=12,
        color=BLACK, ha="left", va="bottom")
ax.text(0.92, CENTRE[1] + 0.030, r"$\lambda P(t)$", fontsize=12,
        color=BLACK, ha="right", va="bottom")

fig.tight_layout()
OUT_DIR.mkdir(parents=True, exist_ok=True)
fig.savefig(OUT_DIR / "week7-flow-token-economy.svg", format="svg",
            bbox_inches="tight", pad_inches=0.15)
plt.close(fig)
print("wrote website/public/images/week7-flow-token-economy.svg")
