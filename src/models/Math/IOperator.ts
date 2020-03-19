import { IExpression } from './IExpression';
import { IPrintable } from './IPrintable';

export interface IOperator extends IPrintable {
  GetResult(left: IExpression, right: IExpression): number;
}
