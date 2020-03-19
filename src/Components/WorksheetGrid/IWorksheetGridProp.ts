import QuestionType from '../../Models/Worksheet/QuestionType';

export interface IWorksheetGridProp {
  NumberOfColumns: number;
  NumberOfQuestions: number;
  QuestionType: QuestionType;
}
