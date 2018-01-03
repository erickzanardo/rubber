export const Vector2d = (x, y) => ({
  add: vector => Vector2d(x + vector.x(), y + vector.y()),
  multiply: value => Vector2d(x * value, y * value),
  divide: value => Vector2d(x / value, y / value),
  abs: () => Vector2d(Math.abs(x), Math.abs(y)),
  magnitude: () => Math.sqrt(x * x, y * y),
  x: () => x,
  y: () => y,
  string: () => `[${x}:${y}]`
})
