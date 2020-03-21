import QuestionType from '../../Models/Worksheet/QuestionType';

export default interface IWorksheetGridProp {
  NumberOfColumns: number;
  NumberOfQuestions: number;
  QuestionType: QuestionType;
}
