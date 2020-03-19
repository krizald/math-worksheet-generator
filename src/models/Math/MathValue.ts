import IExpression from './IExpression';

export default class MathValue implements IExpression {
  private Value: number;

  constructor(value: number) {
    this.Value = value;
  }

  Print = (): string => this.Value.toString();

  GetValue = (): number => this.Value;
}
