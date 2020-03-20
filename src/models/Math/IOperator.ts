import { IExpression, IPrintable } from '.';

export default interface IOperator extends IPrintable {
  GetResult(left: IExpression, right: IExpression): number;
}
