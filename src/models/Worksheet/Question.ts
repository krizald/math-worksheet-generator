import { MathExpression, IPrintable } from '../Math';

export default class Question implements IPrintable {
  private Expression: MathExpression;

  constructor(exp: MathExpression) {
    this.Expression = exp;
  }

  Print = (): string => `${this.Expression.Print()} = `;
}
