"""Additive decomposition of a behavioral time series, for Week 9.

Run from the repository root with the project virtualenv:

    .venv/bin/python scripts/figures/week9_decomposition.py

Writes website/public/images/week9-decomposition.svg

The example described in the text: 90 days of daily self-monitoring for one
participant, with a gradual increase across treatment and a weekly cycle in
which the participant performs better on weekdays than on weekends.

The panels are the classical additive decomposition, x_t = T_t + S_t + R_t,
carried out on the simulated record rather than plotted from the components used
to build it. The trend is a centered 7-day moving average; the seasonal term is
the mean detrended value for each day of the week, centered to sum to zero; the
residual is what is left. The moving average is undefined for the first and last
three days, so those days drop out of the trend and residual panels.
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

DAYS = 90
PERIOD = 7
# day 1 is a Monday, so days 6 and 7 of each week are the weekend
WEEKDAY_NAMES = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

day = np.arange(1, DAYS + 1)
dow = (day - 1) % PERIOD          # 0 = Monday

# --- simulate the record ----------------------------------------------------
rng = np.random.default_rng(72)
true_trend = 8.0 + 12.0 / (1 + np.exp(-(day - 42) / 14.0))   # treatment gain
true_season = np.where(dow >= 5, -2.6, 1.04)                 # weekends lower
observed = true_trend + true_season + rng.normal(0, 1.3, DAYS)

# --- classical additive decomposition --------------------------------------
half = PERIOD // 2
trend = np.full(DAYS, np.nan)
for t in range(half, DAYS - half):
    trend[t] = observed[t - half:t + half + 1].mean()

detrended = observed - trend
season_by_dow = np.array([np.nanmean(detrended[dow == d]) for d in range(PERIOD)])
season_by_dow -= season_by_dow.mean()
seasonal = season_by_dow[dow]
residual = observed - trend - seasonal

weekend_starts = day[(dow == 5)]

fig, axes = plt.subplots(4, 1, figsize=(9.6, 8.2), sharex=True)
fig.subplots_adjust(hspace=0.55)


def shade_weekends(ax):
    for start in weekend_starts:
        ax.axvspan(start - 0.5, start + 1.5, color=PALE, alpha=0.28,
                   linewidth=0, zorder=0)


# --- Panel A: the observed record ------------------------------------------
ax = axes[0]
shade_weekends(ax)
ax.plot(day, observed, color=INK, linewidth=1.3, zorder=3)
ax.plot(day, trend, color=ORANGE, linewidth=2.4, zorder=4)
ax.set_ylabel("Observed, $x_t$")
ax.set_title("A.  The Record, $x_t$", loc="left", pad=20)
ax.annotate("90 days of daily self-monitoring; weekends shaded; "
            "trend in orange",
            xy=(0, 1.0), xytext=(0, 7), xycoords="axes fraction",
            textcoords="offset points", fontsize=9.8, color=AXIS,
            ha="left", va="bottom")

# --- Panel B: trend ---------------------------------------------------------
ax = axes[1]
ax.plot(day, trend, color=ORANGE, linewidth=2.4)
ax.set_ylabel("Trend, $T_t$")
ax.set_title("B.  Trend, $T_t$", loc="left", pad=20)
ax.annotate(f"centered 7-day moving average; rises {np.nanmin(trend):.1f} to "
            f"{np.nanmax(trend):.1f} responses per day",
            xy=(0, 1.0), xytext=(0, 7), xycoords="axes fraction",
            textcoords="offset points", fontsize=9.8, color=AXIS,
            ha="left", va="bottom")

# --- Panel C: seasonal ------------------------------------------------------
ax = axes[2]
shade_weekends(ax)
ax.axhline(0, color=PALE, linewidth=1.0, zorder=1)
ax.plot(day, seasonal, color=BLUE, linewidth=1.6, zorder=3)
ax.set_ylabel("Seasonal, $S_t$")
ax.set_ylim(seasonal.min() - 1.3, seasonal.max() + 1.6)
ax.set_title("C.  Weekly Cycle, $S_t$", loc="left", pad=20)
wk = season_by_dow[:5].mean()
we = season_by_dow[5:].mean()
ax.annotate(("mean detrended value for each day of the week; "
             f"weekdays {wk:+.2f}, weekends {we:+.2f} responses per day")
            .replace("-", "\u2212"),
            xy=(0, 1.0), xytext=(0, 7), xycoords="axes fraction",
            textcoords="offset points", fontsize=9.8, color=AXIS,
            ha="left", va="bottom")

# --- Panel D: residual ------------------------------------------------------
ax = axes[3]
ax.axhline(0, color=PALE, linewidth=1.0, zorder=1)
ax.vlines(day, 0, residual, color=PURPLE, linewidth=1.2, zorder=3)
ax.set_ylabel("Residual, $R_t$")
ax.set_xlabel("Day")
ax.set_title("D.  Residual, $R_t$", loc="left", pad=20)
ax.annotate(f"what trend and cycle leave behind; SD "
            f"{np.nanstd(residual):.2f} responses per day",
            xy=(0, 1.0), xytext=(0, 7), xycoords="axes fraction",
            textcoords="offset points", fontsize=9.8, color=AXIS,
            ha="left", va="bottom")

axes[3].set_xlim(0, DAYS + 1)
axes[3].set_xticks([1, 15, 30, 45, 60, 75, 90])

OUT_DIR.mkdir(parents=True, exist_ok=True)
fig.savefig(OUT_DIR / "week9-decomposition.svg", format="svg",
            bbox_inches="tight", pad_inches=0.15)
plt.close(fig)

print("wrote website/public/images/week9-decomposition.svg")
print(f"observed range {observed.min():.1f} to {observed.max():.1f}")
print(f"trend runs {np.nanmin(trend):.1f} to {np.nanmax(trend):.1f}")
for name, val in zip(WEEKDAY_NAMES, season_by_dow):
    print(f"  seasonal {name}: {val:+.2f}")
print(f"weekday mean {wk:+.2f}, weekend mean {we:+.2f}, "
      f"difference {wk - we:.2f}")
print(f"residual SD {np.nanstd(residual):.2f}; "
      f"lag-1 autocorrelation of residual "
      f"{np.corrcoef(residual[half:DAYS - half - 1], residual[half + 1:DAYS - half])[0, 1]:+.2f}")
