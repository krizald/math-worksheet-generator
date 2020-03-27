import { Question, QuestionType } from '.';
import { MathExpression, MathValue, Addition, Substraction } from '../Math';

export default class Worksheet {
  private NumberOfQuestions: number;

  private Questions: Question[];

  constructor(numOfQuestions: number, qestionType: QuestionType) {
    this.NumberOfQuestions = numOfQuestions;
    this.Questions = [];
    switch (qestionType) {
      case QuestionType.Addition: {
        this.GenerateAdditions();
        break;
      }
      case QuestionType.Substraction: {
        this.GenerateSubstraction();
        break;
      }
      default: {
        break;
      }
    }
  }

  GetQuestions(): Question[] {
    return this.Questions;
  }

  private GenerateAdditions() {
    for (let i = 0; i < this.NumberOfQuestions; i += 1) {
      this.Questions.push(
        new Question(
          new MathExpression(
            new MathValue(this.GetRandomInt(10)),
            new MathValue(this.GetRandomInt(10)),
            new Addition(),
          ),
        ),
      );
    }
  }

  private GenerateSubstraction() {
    for (let i = 0; i < this.NumberOfQuestions; i += 1) {
      this.Questions.push(
        new Question(
          new MathExpression(
            new MathValue(this.GetRandomInt(10)),
            new MathValue(this.GetRandomInt(10)),
            new Substraction(),
          ),
        ),
      );
    }
  }

  GetRandomInt = (max: number): number =>
    Math.floor(Math.random() * Math.floor(max));
}
