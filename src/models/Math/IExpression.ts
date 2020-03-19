import IPrintable from './IPrintable';

export default interface IExpression extends IPrintable {
  GetValue(): number;
}
