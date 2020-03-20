import { IPrintable } from '.';

export default interface IExpression extends IPrintable {
  GetValue(): number;
}
