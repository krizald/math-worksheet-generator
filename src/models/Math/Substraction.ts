import IOperator from './IOperator';
import IExpression from './IExpression';

export default class Substraction implements IOperator {
  Print = (): string => '-';

  GetResult = (left: IExpression, right: IExpression): number =>
    left.GetValue() - right.GetValue();
}
