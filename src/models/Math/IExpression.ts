import { IPrintable } from './IPrintable';

export interface IExpression extends IPrintable {
  GetValue(): number;
}
