"""The ACF and PACF signatures used to choose ARIMA orders, for Week 9.

Run from the repository root with the project virtualenv:

    .venv/bin/python scripts/figures/week9_acf_pacf.py

Writes website/public/images/week9-acf-pacf.svg

Two simulated series of 400 points, one AR(1) with phi = 0.7 and one MA(1) with
theta = 0.7, each shown with its sample autocorrelation and partial
autocorrelation function. The two rows are the two rules the text gives for
reading model order off these plots: the AR process has a PACF that cuts off
after lag 1 and an ACF that decays, and the MA process is the mirror image.

The PACF is computed by the Durbin-Levinson recursion on the sample
autocorrelations, which is what the standard routines do. The dashed bands are
the approximate white-noise limits, plus or minus 1.96 / sqrt(T).
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

T = 400
MAX_LAG = 14
PHI = 0.7
THETA = 0.7


def acf(x, max_lag):
    """Sample autocorrelations at lags 0 through max_lag."""
    x = x - x.mean()
    denom = np.sum(x ** 2)
    return np.array([np.sum(x[k:] * x[:x.size - k]) / denom
                     for k in range(max_lag + 1)])


def pacf(rho, max_lag):
    """Partial autocorrelations by the Durbin-Levinson recursion."""
    out = np.zeros(max_lag + 1)
    out[0] = 1.0
    phi_prev = np.zeros(0)
    for k in range(1, max_lag + 1):
        if k == 1:
            phi_kk = rho[1]
            phi_cur = np.array([phi_kk])
        else:
            num = rho[k] - np.sum(phi_prev * rho[k - 1:0:-1])
            den = 1.0 - np.sum(phi_prev * rho[1:k])
            phi_kk = num / den
            phi_cur = np.empty(k)
            phi_cur[:k - 1] = phi_prev - phi_kk * phi_prev[::-1]
            phi_cur[k - 1] = phi_kk
        out[k] = phi_kk
        phi_prev = phi_cur
    return out


rng = np.random.default_rng(47)
eps = rng.normal(0, 1.0, T + 1)

ar = np.empty(T)
ar[0] = eps[1] / np.sqrt(1 - PHI ** 2)
for t in range(1, T):
    ar[t] = PHI * ar[t - 1] + eps[t + 1]

ma = eps[1:] + THETA * eps[:-1]

band = 1.96 / np.sqrt(T)

ROWS = [
    (ar, ORANGE, "AR(1), $\\phi = 0.7$",
     ["A", "B", "C"],
     ["decays geometrically", "cuts off after lag 1"]),
    (ma, BLUE, "MA(1), $\\theta = 0.7$",
     ["D", "E", "F"],
     ["cuts off after lag 1", "decays"]),
]

fig, axes = plt.subplots(2, 3, figsize=(11.4, 6.0))
fig.subplots_adjust(hspace=0.78, wspace=0.28)
lags = np.arange(0, MAX_LAG + 1)
show = np.arange(1, 121)

for row, (x, color, name, letters, notes) in enumerate(ROWS):
    r = acf(x, MAX_LAG)
    p = pacf(r, MAX_LAG)

    ax = axes[row, 0]
    ax.axhline(0, color=PALE, linewidth=1.0, zorder=1)
    ax.plot(show, x[:show.size], color=color, linewidth=1.3, zorder=2)
    ax.set_xlim(0, show.size)
    ax.set_xticks([0, 40, 80, 120])
    ax.set_ylim(-4.2, 4.2)
    ax.set_ylabel("$x_t$")
    ax.set_xlabel("Time, $t$")
    ax.set_title(f"{letters[0]}.  {name}", loc="left", pad=20)
    ax.annotate(f"first 120 of {T} points", xy=(0, 1.0), xytext=(0, 7),
                xycoords="axes fraction", textcoords="offset points",
                fontsize=9.8, color=AXIS, ha="left", va="bottom")

    for col, (vals, label, note) in enumerate(
            [(r, "ACF, $\\rho_k$", notes[0]),
             (p, "PACF, $\\phi_{kk}$", notes[1])], start=1):
        ax = axes[row, col]
        ax.axhspan(-band, band, color=PALE, alpha=0.4, linewidth=0, zorder=1)
        ax.axhline(0, color=AXIS, linewidth=1.0, zorder=2)
        ax.vlines(lags[1:], 0, vals[1:], color=color, linewidth=2.6, zorder=3)
        ax.plot(lags[1:], vals[1:], linestyle="none", marker="o",
                markersize=4.0, color=color, zorder=4)
        ax.set_xlim(0.2, MAX_LAG + 1.0)
        ax.set_ylim(-0.35, 1.0)
        ax.set_xticks([1, 4, 7, 10, 13])
        ax.set_xlabel("Lag, $k$")
        ax.set_ylabel(label)
        ax.set_title(f"{letters[col]}.  {label.split(',')[0]}", loc="left",
                     pad=20)
        ax.annotate(note, xy=(0, 1.0), xytext=(0, 7),
                    xycoords="axes fraction", textcoords="offset points",
                    fontsize=9.8, color=AXIS, ha="left", va="bottom")

axes[0, 1].text(MAX_LAG + 0.8, band + 0.03,
                "$\\pm 1.96/\\sqrt{T}$", fontsize=9.5, color=AXIS,
                ha="right", va="bottom")

OUT_DIR.mkdir(parents=True, exist_ok=True)
fig.savefig(OUT_DIR / "week9-acf-pacf.svg", format="svg",
            bbox_inches="tight", pad_inches=0.15)
plt.close(fig)

print("wrote website/public/images/week9-acf-pacf.svg")
print(f"white-noise band +/- {band:.3f}")
for x, name, theo in [(ar, "AR(1) phi=0.7", PHI), (ma, "MA(1) theta=0.7", None)]:
    r = acf(x, MAX_LAG)
    p = pacf(r, MAX_LAG)
    print(f"{name}: ACF lags 1-4 {np.round(r[1:5], 2)}, "
          f"PACF lags 1-4 {np.round(p[1:5], 2)}")
print(f"AR(1) theory: rho_k = 0.7^k -> {np.round(PHI ** np.arange(1, 5), 2)}")
print(f"MA(1) theory: rho_1 = theta/(1+theta^2) = "
      f"{THETA / (1 + THETA ** 2):.2f}, rho_k = 0 for k > 1")
