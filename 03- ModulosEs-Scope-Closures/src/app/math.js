"use strict";

export function clamp(value, min, max) {
  if (
    !Number.isFinite(value) ||
    !Number.isFinite(min) ||
    !Number.isFinite(max)
  ) {
    throw new TypeError("Todos los argumentos deben ser números finitos.");
  }

  if (min > max) {
    [min, max] = [max, min]; // intercambiar
  }

  return Math.min(Math.max(value, min), max);
}