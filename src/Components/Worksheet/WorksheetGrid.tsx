import React from 'react';
import Box from '@material-ui/core/Box';
import IWorksheetGridProp from './IWorksheetGridProp';
import { Worksheet } from '../../Models/Worksheet';

const WorksheetGrid = (prop: IWorksheetGridProp) => {
  const mathWorkSheet: Worksheet = new Worksheet(
    prop.NumberOfQuestions,
    prop.QuestionType,
  );
  const Questions = mathWorkSheet.GetQuestions();
  const width = Math.floor(100 / prop.NumberOfColumns);
  const total = Questions.length;
  const items = [];
  for (let i = 0; i < total; i += 1) {
    items.push(
      <Box key={i} css={{ width: `${width.toString()}%` }} padding={0}>
        {Questions[i].Print()}
      </Box>,
    );
  }
  return (
    <div style={{ width: '100%' }}>
      <Box
        display="flex"
        flexWrap="wrap"
        bgcolor="background.paper"
        css={{ maxWidth: '100%' }}
      >
        {items}
      </Box>
    </div>
  );
};
export default WorksheetGrid;
