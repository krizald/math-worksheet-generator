import Addition from '../Addition';
import MathValue from '../MathValue';

test('Addition: GetResult', () => {
  const add = new Addition();
  expect(add.GetResult(new MathValue(2), new MathValue(3))).toBe(5);
});

test('Addition: Print', () => {
  const add = new Addition();
  expect(add.Print()).toBe('+');
});
