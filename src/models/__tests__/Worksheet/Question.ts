import { Question, QuestionType } from '../../Worksheet';
import { MathExpression, MathValue, Addition } from '../../Math';

test('Worksheet: GetResult', () => {
  const sut = new Question(
    new MathExpression(new MathValue(2), new MathValue(3), new Addition()),
  );
  expect(sut.Print()).toBe('2 + 3 = ');
});
