import { MathValue } from '../../Math';

test('MathValue: GetValue', () => {
  const sut = new MathValue(5);
  expect(sut.GetValue()).toBe(5);
});

test('MathValue: Print', () => {
  expect(new MathValue(5).Print()).toBe('5');
  expect(new MathValue(5.7).Print()).toBe('5.7');
  expect(new MathValue(-12).Print()).toBe('-12');
});
