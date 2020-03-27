import React from 'react';
import { Radio } from '@material-ui/core';
import IQuestionRouterProp from './IQuestionRouterProp';

const QuestionRouter = (props: IQuestionRouterProp) => {
  const [selectedValue, setSelectedValue] = React.useState('0');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val = event.target.value;
    setSelectedValue(event.target.value);
    props.QuestionTypeSelected(val);
  };
  return (
    <div>
      <Radio
        checked={selectedValue === '0'}
        onChange={handleChange}
        value="0"
        name="radio-button-question-type"
        inputProps={{ 'aria-label': 'A' }}
      />
      <span>Addition</span>
      <Radio
        checked={selectedValue === '1'}
        onChange={handleChange}
        value="1"
        name="radio-button-question-type"
        inputProps={{ 'aria-label': 'B' }}
      />
      <span>Substraction</span>
    </div>
  );
};

export default QuestionRouter;
