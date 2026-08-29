"""What the autoregressive coefficient does to a series, for Week 9.

Run from the repository root with the project virtualenv:

    .venv/bin/python scripts/figures/week9_ar1_phi.py

Writes website/public/images/week9-ar1-phi.svg

Panels A through E are AR(1) series, x_t = phi * x_{t-1} + epsilon_t, over 120
time points. Every panel uses the same draw of white noise, so the only thing
that differs between panels is phi. Panel F is the theoretical autocorrelation
function, rho_k = phi^k, for the four stationary values.

Panels A through D share a y-axis. The random walk in panel E does not, because
its variance grows without bound and it does not return to a mean.
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

plt.rcParams.update({
    "figure.facecolor": "white",
    "savefig.facecolor": "white",
    "font.size": 12,
    "axes.labelsize": 12,
    "axes.labelweight": "bold",
    "axes.labelcolor": INK,
    "axes.titlesize": 12.5,
    "axes.titleweight": "bold",
    "axes.titlecolor": INK,
    "axes.edgecolor": AXIS,
    "axes.linewidth": 1.1,
    "axes.spines.top": False,
    "axes.spines.right": False,
    "xtick.color": AXIS,
    "ytick.color": AXIS,
    "xtick.labelsize": 10.5,
    "ytick.labelsize": 10.5,
    "xtick.labelcolor": AXIS,
    "ytick.labelcolor": AXIS,
    "legend.fontsize": 10.0,
    "legend.frameon": False,
    "legend.labelcolor": AXIS,
    "svg.fonttype": "path",
})

T = 120
SIGMA = 1.0

# (phi, colour, panel letter, note)
CASES = [
    (0.00, AXIS, "A", "white noise: no memory"),
    (0.45, ORANGE, "B", "the value fit in the worked example"),
    (0.80, BLUE, "C", "persistent: long excursions"),
    (-0.60, PURPLE, "D", "alternating: high day follows low day"),
    (1.00, CRIMSON, "E", "random walk: nonstationary"),
]

rng = np.random.default_rng(31)
eps = rng.normal(0, SIGMA, T)


def ar1(phi, noise):
    """One AR(1) realization, started from its stationary distribution."""
    x = np.empty(noise.size)
    if abs(phi) < 1:
        x[0] = noise[0] / np.sqrt(1 - phi ** 2)
    else:
        x[0] = noise[0]
    for t in range(1, noise.size):
        x[t] = phi * x[t - 1] + noise[t]
    return x


series = {phi: ar1(phi, eps) for phi, _, _, _ in CASES}

fig, axes = plt.subplots(2, 3, figsize=(11.4, 5.6))
fig.subplots_adjust(hspace=0.72, wspace=0.34)
t = np.arange(1, T + 1)

stationary = [s for phi, s in series.items() if abs(phi) < 1]
lim = np.ceil(max(np.abs(np.concatenate(stationary)).max(), 1)) + 0.4

for ax, (phi, color, letter, note) in zip(axes.ravel()[:5], CASES):
    ax.axhline(0, color=PALE, linewidth=1.0, zorder=1)
    ax.plot(t, series[phi], color=color, linewidth=1.35, zorder=2)
    ax.set_xlim(0, T)
    ax.set_xticks([0, 40, 80, 120])
    if abs(phi) < 1:
        ax.set_ylim(-lim, lim)
    ax.set_title(f"{letter}.  $\\phi = {phi:.2f}$".replace("-", "−"),
                 loc="left", pad=20)
    ax.annotate(note, xy=(0, 1.0), xytext=(0, 7), xycoords="axes fraction",
                textcoords="offset points", fontsize=9.8, color=AXIS,
                ha="left", va="bottom")

for ax in axes[1, :]:
    ax.set_xlabel("Time, $t$")
axes[0, 0].set_ylabel("$x_t$")
axes[1, 0].set_ylabel("$x_t$")
axes[1, 1].set_ylabel("$x_t$")   # the random walk keeps its own scale

# --- Panel F: the autocorrelation each phi implies -------------------------
ax_f = axes[1, 2]
lags = np.arange(0, 13)
for phi, color, _, _ in CASES:
    if abs(phi) >= 1:
        continue
    label = f"$\\phi = {phi:.2f}$".replace("-", "−")
    ax_f.plot(lags, phi ** lags, color=color, linewidth=1.9,
              marker="o", markersize=3.4, label=label)
ax_f.axhline(0, color=PALE, linewidth=1.0, zorder=1)
ax_f.set_xlim(-0.3, 12.3)
ax_f.set_ylim(-0.75, 1.05)
ax_f.set_xticks([0, 3, 6, 9, 12])
ax_f.set_xlabel("Lag, $k$")
ax_f.set_ylabel("$\\rho_k$")
ax_f.set_title("F.  Autocorrelation, $\\rho_k = \\phi^k$", loc="left", pad=20)
ax_f.annotate("the stationary cases", xy=(0, 1.0), xytext=(0, 7),
              xycoords="axes fraction", textcoords="offset points",
              fontsize=9.8, color=AXIS, ha="left", va="bottom")
ax_f.legend(loc="upper right", handlelength=1.4, handletextpad=0.4,
            borderaxespad=0.2, labelspacing=0.25)

OUT_DIR.mkdir(parents=True, exist_ok=True)
fig.savefig(OUT_DIR / "week9-ar1-phi.svg", format="svg",
            bbox_inches="tight", pad_inches=0.15)
plt.close(fig)

print("wrote website/public/images/week9-ar1-phi.svg")
for phi, _, letter, _ in CASES:
    x = series[phi]
    r1 = np.corrcoef(x[:-1], x[1:])[0, 1]
    print(f"  {letter}: phi {phi:+.2f}  SD {x.std():5.2f}  "
          f"lag-1 sample autocorrelation {r1:+.2f}  "
          f"range {x.min():.1f} to {x.max():.1f}")
print(f"phi = 0.45: carryover after 2 lags {0.45 ** 2:.2f}, "
      f"3 lags {0.45 ** 3:.2f}")
print(f"phi = 0.80: carryover after 2 lags {0.80 ** 2:.2f}, "
      f"3 lags {0.80 ** 3:.2f}")
