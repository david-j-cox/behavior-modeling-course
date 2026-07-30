"""Life-cycle diagrams for the Week 7 in-class demonstration.

Run from the repository root with the project virtualenv:

    .venv/bin/python scripts/figures/week7_lifecycle_diagrams.py

Writes to website/public/images/:
    week7-lifecycle-operant.svg       lever pressing under a random-ratio schedule
    week7-lifecycle-respondent.svg    salivary responding to a CS
    week7-lifecycle-acquisition.svg   response acquisition under CRF (worked example)

Both follow the convention used in the Module 7 in-class demonstration document:
a plain ring, the census named at the top, the event named at the bottom, the
state variable marked just inside the ring and primed as it passes each event.
The ring colour is sampled from that document.
"""

from pathlib import Path

import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
import numpy as np
from matplotlib.patches import Circle, FancyArrowPatch

OUT_DIR = Path(__file__).resolve().parents[2] / "website" / "public" / "images"

NAVY = "#001f2e"     # ring, sampled from the demonstration document
INK = "#0b0b0b"      # labels
MUTED = "#52514e"    # the note inside the ring

plt.rcParams.update({
    "figure.facecolor": "white",
    "savefig.facecolor": "white",
    "font.size": 12,
    "axes.titlesize": 13.5,
    "axes.titleweight": "bold",
    "axes.titlecolor": INK,
    "svg.fonttype": "path",
})

CX, CY, R = 0.5, 0.5, 0.30


def ring(ax, title):
    ax.set_xlim(0, 1)
    ax.set_ylim(0, 1)
    ax.set_aspect("equal")
    ax.axis("off")
    ax.add_patch(Circle((CX, CY), R, fill=False, edgecolor=NAVY, linewidth=1.8))
    ax.set_title(title, loc="center", pad=14)


def event(ax, angle, outside, inside, out_gap=1.13, in_gap=0.74, lag=17,
          fontsize=11.5, span=6):
    """Arrowhead on the ring, the event named outside, the state value inside.

    out_gap / in_gap  label distance from the centre, as a fraction of R.
    lag               degrees behind the arrowhead for the state label.
    """
    a1, a2 = np.radians(angle + span), np.radians(angle - span)
    ax.add_patch(FancyArrowPatch(
        (CX + R * np.cos(a1), CY + R * np.sin(a1)),
        (CX + R * np.cos(a2), CY + R * np.sin(a2)),
        arrowstyle="-|>", mutation_scale=20, linewidth=1.8,
        color=NAVY, shrinkA=0, shrinkB=0,
    ))
    a = np.radians(angle)
    ha = "center" if abs(np.cos(a)) < 0.3 else ("left" if np.cos(a) > 0 else "right")
    va = "center" if abs(np.sin(a)) < 0.3 else ("bottom" if np.sin(a) > 0 else "top")
    ax.text(CX + R * out_gap * np.cos(a), CY + R * out_gap * np.sin(a), outside,
            fontsize=fontsize, color=INK, ha=ha, va=va, linespacing=1.5)
    a_in = np.radians(angle - lag)
    ax.text(CX + R * in_gap * np.cos(a_in), CY + R * in_gap * np.sin(a_in), inside,
            fontsize=12.5, color=INK, ha="center", va="center")


def write(fig, name):
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    fig.savefig(OUT_DIR / name, format="svg", bbox_inches="tight", pad_inches=0.15)
    plt.close(fig)
    print(f"wrote website/public/images/{name}")


def operant():
    fig, ax = plt.subplots(figsize=(5.8, 5.0))
    ring(ax, "Operant: lever pressing under a random-ratio schedule")
    event(ax, 90, "Rate of Responding\n$(census)$", "$n(t)$")
    event(ax, 270,
          "Reinforcement with probability $p$.\nExtinction with probability $(1-p)$.",
          "$n\\,'$")
    ax.text(CX, CY, "One time step\n(sec, min, or hour)", fontsize=10, color=MUTED,
            style="italic", ha="center", va="center", linespacing=1.5)
    fig.tight_layout()
    write(fig, "week7-lifecycle-operant.svg")


def respondent():
    # The demonstration document labels this diagram n(t) and n', carried over
    # from the operant figure; the equations beside it use S, so S is used here.
    fig, ax = plt.subplots(figsize=(5.8, 5.0))
    ring(ax, "Respondent: salivary response to a CS")
    event(ax, 90, "Salivation Amount\n$(census)$", "$S(t)$")
    event(ax, 270, "Presentation of CS\nwith intensity $I$.", "$S\\,'$")
    ax.text(CX, CY, "One CS presentation", fontsize=10, color=MUTED,
            style="italic", ha="center", va="center")
    fig.tight_layout()
    write(fig, "week7-lifecycle-respondent.svg")


def acquisition():
    """The worked example: four events inside one time step, so the ring carries
    a state label after each one rather than the single prime used above."""
    fig, ax = plt.subplots(figsize=(6.8, 5.2))
    ring(ax, "Response acquisition under continuous reinforcement")
    event(ax, 90, "Census (start of minute $t$)", "$r_t$")
    event(ax, 0, "Response emitted,\nprobability $\\propto r_t$", r"$r\,'$",
          fontsize=10.5)
    event(ax, 270, "Reinforcement with probability $p$,\nresponding increases by $\\alpha$",
          r"$r\,''$", fontsize=10.5)
    event(ax, 180, "Decay by\nfactor $\\beta$", "$r_{t+1}$", fontsize=10.5)
    ax.text(CX, CY, "One time step\n(one minute)", fontsize=10, color=MUTED,
            style="italic", ha="center", va="center", linespacing=1.5)
    fig.tight_layout()
    write(fig, "week7-lifecycle-acquisition.svg")


if __name__ == "__main__":
    operant()
    respondent()
    acquisition()
