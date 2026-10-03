export function changePlatePairs(current: number, delta: number, maximum: number) {
  return Math.max(0, Math.min(maximum, current + delta));
}

export function barbellWeight(pairs: number, config: { barWeight: number; plateWeight: number }) {
  return config.barWeight + 2 * pairs * config.plateWeight;
}

export function rallyFlight(hits: number) {
  return {
    startX: hits % 2 ? 90 : 430,
    endX: hits % 2 ? 430 : 90,
    // Samples of a parabola: level contact points with a high midpoint.
    arc: Array.from({ length: 9 }, (_, i) => 177 - 4 * 139 * (i / 8) * (1 - i / 8)),
  };
}
