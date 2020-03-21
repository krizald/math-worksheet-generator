import { IOperator, IExpression } from '.';

export default class Addition implements IOperator {
  Print = (): string => '+';

  GetResult = (left: IExpression, right: IExpression): number =>
    left.GetValue() + right.GetValue();
}
