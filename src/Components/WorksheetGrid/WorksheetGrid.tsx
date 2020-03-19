import React from 'react';
import { IWorksheetGridProp } from './IWorksheetGridProp';

const WorksheetGrid = (prop: IWorksheetGridProp) => (
  <>
    <h1>{prop.NumberOfColumns}</h1>
  </>
);
export default WorksheetGrid;
