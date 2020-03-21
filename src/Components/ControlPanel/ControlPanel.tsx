import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { TextField, Button, Grid } from '@material-ui/core';
import { IControlPanelProp } from '..';
import { QuestionType } from '../../Models/Worksheet';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    baseBox: {
      width: '100%',
    },
  }),
);

const ControlPannel = (prop: IControlPanelProp) => {
  const classes = useStyles();
  const [numOfColumns, setNumOfColumns] = useState(5);
  const [numOfQuestions, setNumOfQuestions] = useState(40);
  const GenerateClicked = () => {
    const event = {
      NumberOfColumns: numOfColumns,
      NumberOfQuestions: numOfQuestions,
      QuestionType: QuestionType.Addition,
    };
    if (prop.GenerateClicked != null) {
      prop.GenerateClicked(event);
    }
  };
  return (
    <div className={classes.root}>
      <Grid container spacing={3} className={classes.baseBox}>
        <Grid item xs={3}>
          <span>Number of Questions</span>
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="numOfQuestions"
            variant="outlined"
            value={numOfQuestions}
            onChange={(event) => {
              setNumOfQuestions(Number.parseInt(event.target.value, 0));
            }}
          />
        </Grid>
        <Grid item xs={3}>
          <span>Number of Columns</span>
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="numOfColumns"
            variant="outlined"
            value={numOfColumns}
            onChange={(event) => {
              setNumOfColumns(Number.parseInt(event.target.value, 0));
            }}
          />
        </Grid>
      </Grid>
      <div>
        <Button variant="contained" onClick={GenerateClicked}>
          Generate
        </Button>
      </div>
    </div>
  );
};
export default ControlPannel;
