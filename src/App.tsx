import React, { useState } from 'react';
import './App.css';
import { Header, WorksheetPaper, ControlPannel } from './Components';
import { QuestionType } from './Models/Worksheet';
import IWorsheetPaperProp from './Components/Worksheet/IWorksheetPaperProp';

function App() {
  const [numOfColumns, setNumOfColumns] = useState(5);
  const [numOfQuestions, setNumOfQuestions] = useState(40);

  const HandleGenerateClicked = (event: IWorsheetPaperProp) => {
    setNumOfColumns(event.NumberOfColumns);
    setNumOfQuestions(event.NumberOfQuestions);
  };
  return (
    <div className="App">
      <Header />
      <ControlPannel GenerateClicked={HandleGenerateClicked} />
      <WorksheetPaper
        NumberOfColumns={numOfColumns}
        QuestionType={QuestionType.Addition}
        NumberOfQuestions={numOfQuestions}
      />
    </div>
  );
}

export default App;
