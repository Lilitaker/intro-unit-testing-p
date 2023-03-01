describe('group 1', () => {
  // Global scope -> Applies to all tests in this file
  beforeAll(() => {
    console.log('beforeAll Group 1');
  });

  afterAll(() => {
    console.log('afterAll');
  });

  beforeEach(() => {
    console.log('beforeEach');
  });

  afterEach(() => {
    console.log('afterEach');
  });

  test('case 1', () => {
    expect(1 + 1).toBe(2);
    console.log('Case 1');
  });
  test('case 2', () => {
    expect(2 + 1).toBe(3);
    console.log('Case 2');
  });

  describe('group 2', () => {
    // Local scope -> Applies only to tests in this describe block
    beforeAll(() => {
      console.log('beforeAll Group 2');
    });

    test('case 3', () => {
      expect(3 + 1).toBe(4);
      console.log('Case 3');
    });
    test('case 4', () => {
      expect(4 + 1).toBe(5);
      console.log('Case 4');
    });
  });
});
