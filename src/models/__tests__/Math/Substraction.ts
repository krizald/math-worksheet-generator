import { Substraction, MathValue } from '../../Math';

test('Substraction: GetResult', () => {
  const sut = new Substraction();
  expect(sut.GetResult(new MathValue(2), new MathValue(3))).toBe(-1);
});

test('Substraction: Print', () => {
  const sut = new Substraction();
  expect(sut.Print()).toBe('-');
});
