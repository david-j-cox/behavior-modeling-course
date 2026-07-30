"""Flow diagram for Week 7, in Otto & Day's convention (2007, Figure 2.4).

Run from the repository root with the project virtualenv:

    .venv/bin/python scripts/figures/week7_flow_diagram.py

Writes website/public/images/week7-flow-diagram.svg

The convention, taken from Figure 2.4 of the assigned chapter:
  - each variable is a circle carrying its plain name and its symbol
  - an arrow looping out of and back into a circle is the variable generating
    more of itself, labelled with the rate at which it does so
  - an arrow leaving a circle for open space is a loss
  - a solid arrow between circles is a flow from one to the other

Model: dB_L/dt = r_L f(B_L) - d B_L - c (B_L - B_R), and the mirror image for
B_R. Reallocation is drawn as a single arrow with a head at each end because it
is one signed flow, positive left to right when B_L exceeds B_R and negative
when B_R exceeds B_L.
"""

from pathlib import Path

import numpy as np
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

R = 0.115
LEFT, RIGHT = (0.28, 0.50), (0.76, 0.50)


def on(centre, deg):
    """A point on a circle, at the given angle."""
    return (centre[0] + R * np.cos(np.radians(deg)),
            centre[1] + R * np.sin(np.radians(deg)))


def arrow(ax, start, end, rad=0.0, lw=1.7, zorder=2, style="-|>"):
    ax.add_patch(FancyArrowPatch(
        start, end, arrowstyle=style, mutation_scale=17, linewidth=lw,
        color=BLACK, shrinkA=0, shrinkB=0, zorder=zorder,
        connectionstyle=f"arc3,rad={rad}",
    ))


def self_loop(ax, centre, start_deg, end_deg, rad=-1.5):
    """A response producing more of itself: out of the circle and back in.

    rad must bow the arc away from the circle's centre, otherwise the loop is
    drawn inside the circle and hidden behind its white fill.
    """
    arrow(ax, on(centre, start_deg), on(centre, end_deg), rad=rad, zorder=5)


def pool(ax, centre, label):
    ax.add_patch(Circle(centre, R, facecolor="white", edgecolor=BLACK,
                        linewidth=1.8, zorder=3))
    ax.text(centre[0], centre[1], label, fontsize=9.5, color=BLACK, zorder=4,
            ha="center", va="center", linespacing=1.6)


fig, ax = plt.subplots(figsize=(7.6, 4.4))
ax.set_xlim(0, 1)
ax.set_ylim(0.10, 0.90)
ax.set_aspect("equal")
ax.axis("off")
ax.set_title("Flow diagram: allocation between two concurrent alternatives",
             loc="center", pad=12)

pool(ax, LEFT, "Behavior on\nthe left\n$B_L(t)$")
pool(ax, RIGHT, "Behavior on\nthe right\n$B_R(t)$")

# Reinforcement feeds the behavior that produced it, so it loops out of each
# circle and straight back into the same circle.
self_loop(ax, LEFT, 172, 104)
self_loop(ax, RIGHT, 76, 8)
ax.text(LEFT[0] - 0.11, LEFT[1] + 0.175, r"$r_L\,f(B_L)$", fontsize=11,
        color=BLACK, ha="center", va="bottom")
ax.text(RIGHT[0] + 0.11, RIGHT[1] + 0.175, r"$r_R\,f(B_R)$", fontsize=11,
        color=BLACK, ha="center", va="bottom")

# Decay leaves the system.
arrow(ax, on(LEFT, 265), (LEFT[0] - 0.03, LEFT[1] - 0.30))
arrow(ax, on(RIGHT, 275), (RIGHT[0] + 0.03, RIGHT[1] - 0.30))
ax.text(LEFT[0] - 0.075, LEFT[1] - 0.245, r"$d\,B_L$", fontsize=11, color=BLACK,
        ha="right", va="center")
ax.text(RIGHT[0] + 0.075, RIGHT[1] - 0.245, r"$d\,B_R$", fontsize=11, color=BLACK,
        ha="left", va="center")

# Reallocation is one signed flow, so a single arrow with a head at each end.
# It runs left to right when B_L exceeds B_R and reverses when B_R exceeds B_L.
arrow(ax, on(LEFT, 0), on(RIGHT, 180), style="<|-|>")
ax.text(0.52, LEFT[1] - 0.045, r"$c\,(B_L - B_R)$", fontsize=11, color=BLACK,
        ha="center", va="top")

fig.tight_layout()
OUT_DIR.mkdir(parents=True, exist_ok=True)
fig.savefig(OUT_DIR / "week7-flow-diagram.svg", format="svg",
            bbox_inches="tight", pad_inches=0.15)
plt.close(fig)
print("wrote website/public/images/week7-flow-diagram.svg")
