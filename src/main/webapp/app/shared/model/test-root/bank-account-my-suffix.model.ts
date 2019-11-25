import { Moment } from 'moment';
import { IOperation } from 'app/shared/model/test-root/operation.model';
import { BankAccountType } from 'app/shared/model/enumerations/bank-account-type.model';

export interface IBankAccountMySuffix {
  id?: number;
  name?: string;
  guid?: string;
  bankNumber?: number;
  agencyNumber?: number;
  lastOperationDuration?: number;
  meanOperationDuration?: number;
  meanQueueDuration?: number;
  balance?: number;
  openingDay?: Moment;
  lastOperationDate?: Moment;
  active?: boolean;
  accountType?: BankAccountType;
  attachmentContentType?: string;
  attachment?: any;
  description?: any;
  userLogin?: string;
  userId?: number;
  operations?: IOperation[];
}

export const defaultValue: Readonly<IBankAccountMySuffix> = {
  active: false
};
