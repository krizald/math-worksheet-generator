import IExpression from './IExpression';
import IPrintable from './IPrintable';

export default interface IOperator extends IPrintable {
  GetResult(left: IExpression, right: IExpression): number;
}
