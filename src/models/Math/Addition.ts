// eslint-disable-next-line no-unused-vars
import { IOperator } from './IOperator';
// eslint-disable-next-line no-unused-vars
import { IExpression } from './IExpression';

export default class Addition implements IOperator {
  Print = (): string => '+';

  GetResult = (left: IExpression, right: IExpression): number => {
    if (left === null || right === null) {
      throw new ReferenceError('null argument');
    }
    return left.GetValue() + right.GetValue();
  };
}
