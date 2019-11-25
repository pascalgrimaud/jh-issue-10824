import { IOperation } from 'app/shared/model/test-root/operation.model';

export interface ILabel {
  id?: number;
  labelName?: string;
  operations?: IOperation[];
}

export const defaultValue: Readonly<ILabel> = {};
