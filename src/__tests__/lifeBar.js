import healthIndicator from '../lifeBar';

test.each([
  ['green', 1000, 'healthy'],
  ['yellow', 45, 'wounded'],
  ['red', 1, 'critical'],
])('testing healthIndicator %s with %i health', (_, health, expected) => {
  const result = healthIndicator('маг', health);
  expect(result).toBe(expected);
});
