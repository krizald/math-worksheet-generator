import IExpression from './IExpression';
import IOperator from './IOperator';

export default class MathExpression implements IExpression {
  private Left: IExpression;

  private Right: IExpression;

  private Operator: IOperator;

  constructor(left: IExpression, right: IExpression, op: IOperator) {
    this.Left = left;
    this.Right = right;
    this.Operator = op;
  }

  GetValue = (): number => this.Operator.GetResult(this.Left, this.Right);

  Print = (): string =>
    // eslint-disable-next-line implicit-arrow-linebreak
    `${this.Left.Print()} ${this.Operator.Print()} ${this.Right.Print()}`;
}
