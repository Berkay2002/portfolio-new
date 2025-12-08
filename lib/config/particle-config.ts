export const DEFAULT_PARTICLE_CONFIG = {
  colors: ["#3b82f6", "#06b6d4", "#0ea5e9"],
  global: {
    densityDivisor: 6,
    maxCount: 200,
    opacity: 0.25,
  },
  header: {
    densityDivisor: 10,
    maxCount: 60,
    opacity: 0.18,
  },
  footer: {
    densityDivisor: 15,
    maxCount: 60,
    opacity: 0.12,
  },
  responsive: {
    // On small screens increase divisor to reduce particle density
    smallScreenDensityDivisorMultiplier: 1.7,
  },
  storageKey: "particles:enabled",
};
