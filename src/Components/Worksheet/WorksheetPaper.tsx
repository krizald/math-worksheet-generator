import React from 'react';
import { IWorksheetPaperProp } from '..';
import WorksheetGrid from './WorksheetGrid';

const WorksheetPaper = (prop: IWorksheetPaperProp) => (
  // const { NumberOfQuestions, NumberOfColumns, QuestionType } = prop;
  <div>
    <h1>Test Paper</h1>
    <WorksheetGrid
      NumberOfColumns={prop.NumberOfColumns}
      NumberOfQuestions={prop.NumberOfQuestions}
      QuestionType={prop.QuestionType}
    />
  </div>
);
export default WorksheetPaper;
