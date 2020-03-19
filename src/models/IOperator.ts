// eslint-disable-next-line no-unused-vars
import { IExpression } from './IExpression';
// eslint-disable-next-line no-unused-vars
import { IPrintable } from './IPrintable';

export interface IOperator extends IPrintable {
  GetResult(left: IExpression, right: IExpression): number;
}
