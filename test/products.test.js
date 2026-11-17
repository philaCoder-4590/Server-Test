
const single = require('../server/singleton');

test('should return the food and price', () => {
  expect(single.foods[0].food).toBe('burgers');
})