export function formatRating(rating) {
  return rating / 25;
}

export function formatUnit(unit: number) {
  const isInteger = Number.isInteger(unit);
  if (isInteger) return unit;
  return unit.toFixed(2);
}
