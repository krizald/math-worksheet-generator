import { IWorksheetPaperProp } from '..';

export default interface IControlPanelProp {
  GenerateClicked?: (event: IWorksheetPaperProp) => void;
}
