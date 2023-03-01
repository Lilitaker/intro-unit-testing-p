// toEqual -> Objects
test('test object', () => {
  const data = { name: 'nico' };
  data.lastName = 'vasquez';
  expect(data).toEqual({ name: 'nico', lastName: 'vasquez' });
});

// null value
test('null', () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

// booleans
test('true or false', () => {
  expect(true).toEqual(true);
  expect(false).toEqual(false);

  expect(0).toBeFalsy();
  expect('').toBeFalsy();
  expect(false).toBeFalsy();
});

// strings
test('strings', () => {
  expect('Liliana').toMatch(/ili/);
});

// Iterables and arrays
test('list or arrays', () => {
  const numbers = [1, 2, 3, 4, 5];
  expect(numbers).toContain(3);
});
