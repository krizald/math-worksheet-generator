import React from 'react';
import './App.css';
import { WorksheetGrid } from './Components';
import { QuestionType } from './Models/Worksheet';

function App() {
  return (
    <div className="App">
      <WorksheetGrid
        NumberOfColumns={5}
        QuestionType={QuestionType.Addition}
        NumberOfQuestions={40}
      />
    </div>
  );
}

export default App;
