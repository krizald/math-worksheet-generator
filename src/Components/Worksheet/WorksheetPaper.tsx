import React from 'react';
import { IWorksheetPaperProp } from '..';
import WorksheetGrid from './WorksheetGrid';

const WorksheetPaper = (prop: IWorksheetPaperProp) => {
  const { NumberOfQuestions, NumberOfColumns, QuestionType } = prop;
  return (
    <div>
      <h1>Test Paper</h1>
      <WorksheetGrid
        NumberOfColumns={NumberOfColumns}
        NumberOfQuestions={NumberOfQuestions}
        QuestionType={QuestionType}
      />
    </div>
  );
};
export default WorksheetPaper;
