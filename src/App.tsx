import React, { useState } from 'react';
import './App.css';
import { Header, WorksheetPaper, ControlPannel, QuestionRouter } from './Components';
import IWorsheetPaperProp from './Components/Worksheet/IWorksheetPaperProp';

function App() {
  const [numOfColumns, setNumOfColumns] = useState(5);
  const [numOfQuestions, setNumOfQuestions] = useState(40);
  const [questiomType, setQestiomType] = useState(0);

  const HandleGenerateClicked = (event: IWorsheetPaperProp) => {
    setNumOfColumns(event.NumberOfColumns);
    setNumOfQuestions(event.NumberOfQuestions);
  };

  const HandleQuestionTypeChanged = (event: string) => {
    setQestiomType(Number.parseInt(event, 0));
  };
  return (
    <div className="App">
      <Header />
      <QuestionRouter QuestionTypeSelected={HandleQuestionTypeChanged} />
      <ControlPannel GenerateClicked={HandleGenerateClicked} />
      <WorksheetPaper
        NumberOfColumns={numOfColumns}
        QuestionType={questiomType}
        NumberOfQuestions={numOfQuestions}
      />
    </div>
  );
}

export default App;
