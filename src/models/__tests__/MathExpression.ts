import MathValue from '../MathValue';
import MathExpression from '../MathExpression';
import Addition from '../Addition';

test('MathExpression: GetValue', () => {
  const sut = new MathExpression(new MathValue(2), new MathValue(5), new Addition());
  expect(sut.GetValue()).toBe(7);
});

test('MathExpression: Chained, GetValue', () => {
  const child = new MathExpression(
    new MathValue(2),
    new MathValue(5),
    new Addition(),
  );
  const sut = new MathExpression(child, new MathValue(9), new Addition());
  expect(sut.GetValue()).toBe(16);
});

test('MathExpression: Print', () => {
  const sut = new MathExpression(new MathValue(2), new MathValue(5), new Addition());
  expect(sut.Print()).toBe('2 + 5');
});

test('MathExpression: Chained, Print', () => {
  const child = new MathExpression(
    new MathValue(2),
    new MathValue(5),
    new Addition(),
  );
  const sut = new MathExpression(child, new MathValue(9), new Addition());
  expect(sut.Print()).toBe('2 + 5 + 9');
});
