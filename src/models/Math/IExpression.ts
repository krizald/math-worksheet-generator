// eslint-disable-next-line no-unused-vars
import { IPrintable } from './IPrintable';

export interface IExpression extends IPrintable {
  GetValue(): number;
}
