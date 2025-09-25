export const DEFAULT_PARTICLE_CONFIG = {
  colors: ["#3b82f6", "#06b6d4", "#0ea5e9"],
  global: {
    densityDivisor: 8,
    maxCount: 150,
    opacity: 0.25,
  },
  header: {
    densityDivisor: 14,
    maxCount: 40,
    opacity: 0.18,
  },
  footer: {
    densityDivisor: 20,
    maxCount: 40,
    opacity: 0.12,
  },
  responsive: {
    // On small screens increase divisor to reduce particle density
    smallScreenDensityDivisorMultiplier: 1.7,
  },
  storageKey: "particles:enabled",
};
