"""Fixed effects, random intercepts, and random slopes, for Week 9.

Run from the repository root with the project virtualenv:

    .venv/bin/python scripts/figures/week9_random_effects.py

Writes website/public/images/week9-random-effects.svg

The three panels are the three equations in the Random Effects section of the
text, fit to one simulated dataset: five participants, eight sessions each,
response rate increasing with session number. Panel A forces one intercept and
one slope on everyone. Panel B gives each participant an intercept. Panel C
gives each participant an intercept and a slope.

The random-effect estimates are empirical Bayes: each participant's ordinary
least squares estimate is shrunk toward the group average by its reliability,
which is what a fitted multilevel model returns. With a balanced design and the
same session numbers for every participant, the fixed slope in the
random-intercept model is the pooled within-participant slope.
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
BLUE = "#2a78d6"
PURPLE = "#4a3aa7"
TEAL = "#0f7f76"
CRIMSON = "#a8243a"
PALE = "#b8b7b2"

PARTICIPANTS = [ORANGE, BLUE, PURPLE, TEAL, CRIMSON]

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

# --- simulate ---------------------------------------------------------------
J = 5                      # participants
N = 8                      # sessions each
GAMMA_00 = 18.0            # average intercept, responses per minute
GAMMA_10 = 1.40            # average slope, responses per minute per session
TAU_0 = 5.5                # SD of participant intercepts
TAU_1 = 0.55               # SD of participant slopes
SIGMA = 1.6                # within-participant residual SD

rng = np.random.default_rng(19)
sessions = np.arange(1, N + 1, dtype=float)
u0 = rng.normal(0, TAU_0, J)
u1 = rng.normal(0, TAU_1, J)
u0 -= u0.mean()
u1 -= u1.mean()
y = np.array([
    GAMMA_00 + u0[j] + (GAMMA_10 + u1[j]) * sessions + rng.normal(0, SIGMA, N)
    for j in range(J)
])

# --- Panel A: one intercept, one slope (complete pooling) -------------------
x_all = np.tile(sessions, J)
y_all = y.ravel()
b1_pooled, b0_pooled = np.polyfit(x_all, y_all, 1)

# --- per-participant ordinary least squares --------------------------------
Sxx = np.sum((sessions - sessions.mean()) ** 2)
slopes_ols = np.array([
    np.sum((sessions - sessions.mean()) * (y[j] - y[j].mean())) / Sxx
    for j in range(J)
])
intercepts_ols = y.mean(axis=1) - slopes_ols * sessions.mean()

# residual variance pooled across participants, from the separate-line fits
resid = np.array([
    y[j] - (intercepts_ols[j] + slopes_ols[j] * sessions) for j in range(J)
])
sigma2 = np.sum(resid ** 2) / (J * (N - 2))

# --- Panel B: random intercept ---------------------------------------------
# balanced design with identical session values, so the generalized least
# squares slope reduces to the pooled within-participant slope
b1_ri = slopes_ols.mean()
adj_means = y.mean(axis=1) - b1_ri * sessions.mean()   # participant intercepts
grand_int = adj_means.mean()
tau2_int = max(np.var(adj_means, ddof=1) - sigma2 / N, 0.0)
lam_int = tau2_int / (tau2_int + sigma2 / N)
intercepts_ri = grand_int + lam_int * (adj_means - grand_int)

# --- Panel C: random intercept and random slope ----------------------------
tau2_slope = max(np.var(slopes_ols, ddof=1) - sigma2 / Sxx, 0.0)
lam_slope = tau2_slope / (tau2_slope + sigma2 / Sxx)
slopes_rs = slopes_ols.mean() + lam_slope * (slopes_ols - slopes_ols.mean())
# refit each intercept given the shrunken slope, then shrink the intercepts
adj_c = y.mean(axis=1) - slopes_rs * sessions.mean()
grand_c = adj_c.mean()
tau2_c = max(np.var(adj_c, ddof=1) - sigma2 / N, 0.0)
lam_c = tau2_c / (tau2_c + sigma2 / N)
intercepts_rs = grand_c + lam_c * (adj_c - grand_c)

# --- draw -------------------------------------------------------------------
fig, axes = plt.subplots(1, 3, figsize=(11.8, 4.3), sharey=True)
grid = np.linspace(0.4, N + 0.6, 100)

TITLES = [
    ("A.  Fixed Effects Only",
     "$y_{ij} = \\beta_0 + \\beta_1 \\mathrm{Session}_{ij} + e_{ij}$"),
    ("B.  Random Intercept",
     "$y_{ij} = \\gamma_{00} + u_{0j} + \\beta_1 \\mathrm{Session}_{ij} + e_{ij}$"),
    ("C.  Random Intercept and Slope",
     "$y_{ij} = \\gamma_{00} + u_{0j} + (\\gamma_{10} + u_{1j})"
     "\\mathrm{Session}_{ij} + e_{ij}$"),
]

for k, ax in enumerate(axes):
    # the average line, shown faintly in every panel for reference
    ax.plot(grid, b0_pooled + b1_pooled * grid, color=PALE, linewidth=2.6,
            zorder=1)
    for j in range(J):
        ax.plot(sessions, y[j], linestyle="none", marker="o", markersize=4.4,
                color=PARTICIPANTS[j], alpha=0.85, zorder=3)
        if k == 1:
            ax.plot(grid, intercepts_ri[j] + b1_ri * grid,
                    color=PARTICIPANTS[j], linewidth=1.7, zorder=2)
        elif k == 2:
            ax.plot(grid, intercepts_rs[j] + slopes_rs[j] * grid,
                    color=PARTICIPANTS[j], linewidth=1.7, zorder=2)
    if k == 0:
        ax.plot(grid, b0_pooled + b1_pooled * grid, color=INK, linewidth=2.2,
                zorder=4)
    ax.set_xlim(0.4, N + 0.6)
    ax.set_xticks([1, 3, 5, 7])
    ax.set_xlabel("Session")
    ax.set_title(TITLES[k][0], loc="left", pad=22)
    ax.annotate(TITLES[k][1], xy=(0, 1.0), xytext=(0, 8),
                xycoords="axes fraction", textcoords="offset points",
                fontsize=9.6, color=AXIS, ha="left", va="bottom")

axes[0].set_ylabel("Response Rate (Per Minute)")
axes[0].set_ylim(np.floor(y.min()) - 2, np.ceil(y.max()) + 2)

fig.subplots_adjust(wspace=0.12)

OUT_DIR.mkdir(parents=True, exist_ok=True)
fig.savefig(OUT_DIR / "week9-random-effects.svg", format="svg",
            bbox_inches="tight", pad_inches=0.15)
plt.close(fig)

print("wrote website/public/images/week9-random-effects.svg")
print(f"pooled fit: intercept {b0_pooled:.2f}, slope {b1_pooled:.2f}")
print(f"random intercept: common slope {b1_ri:.2f}, "
      f"intercept SD {np.std(intercepts_ri, ddof=1):.2f}, "
      f"range {intercepts_ri.min():.1f} to {intercepts_ri.max():.1f}")
print(f"random slope: slopes {np.round(slopes_rs, 2)}, "
      f"range {slopes_rs.min():.2f} to {slopes_rs.max():.2f}")
print(f"sigma2 {sigma2:.2f}, tau2 intercept {tau2_int:.2f}, "
      f"tau2 slope {tau2_slope:.3f}")
print(f"ICC of the unconditional decomposition: "
      f"{tau2_int / (tau2_int + sigma2):.3f}")
