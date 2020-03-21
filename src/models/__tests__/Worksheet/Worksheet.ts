import { Worksheet, QuestionType } from '../../Worksheet';

test('Worksheet: GetResult', () => {
  const sut = new Worksheet(10, QuestionType.Addition);
  expect(sut.GetQuestions().length).toBe(10);
});

test('Worksheet: GetRandomInt', () => {
  const sut = new Worksheet(10, QuestionType.Addition);
  expect(sut.GetRandomInt(10)).toBeLessThan(10);
});
