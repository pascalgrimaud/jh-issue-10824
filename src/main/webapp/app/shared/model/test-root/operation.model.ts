import { Moment } from 'moment';
import { IBankAccountMySuffix } from 'app/shared/model/test-root/bank-account-my-suffix.model';
import { ILabel } from 'app/shared/model/test-root/label.model';

export interface IOperation {
  id?: number;
  date?: Moment;
  description?: string;
  amount?: number;
  bankAccount?: IBankAccountMySuffix;
  labels?: ILabel[];
}

export const defaultValue: Readonly<IOperation> = {};
