import { Moment } from 'moment';
import { EnumFieldClass } from 'app/shared/model/enumerations/enum-field-class.model';
import { EnumRequiredFieldClass } from 'app/shared/model/enumerations/enum-required-field-class.model';

export interface IFieldTestPaginationEntity {
  id?: number;
  stringAlice?: string;
  stringRequiredAlice?: string;
  stringMinlengthAlice?: string;
  stringMaxlengthAlice?: string;
  stringPatternAlice?: string;
  integerAlice?: number;
  integerRequiredAlice?: number;
  integerMinAlice?: number;
  integerMaxAlice?: number;
  longAlice?: number;
  longRequiredAlice?: number;
  longMinAlice?: number;
  longMaxAlice?: number;
  floatAlice?: number;
  floatRequiredAlice?: number;
  floatMinAlice?: number;
  floatMaxAlice?: number;
  doubleRequiredAlice?: number;
  doubleMinAlice?: number;
  doubleMaxAlice?: number;
  bigDecimalRequiredAlice?: number;
  bigDecimalMinAlice?: number;
  bigDecimalMaxAlice?: number;
  localDateAlice?: Moment;
  localDateRequiredAlice?: Moment;
  instantAlice?: Moment;
  instanteRequiredAlice?: Moment;
  zonedDateTimeAlice?: Moment;
  zonedDateTimeRequiredAlice?: Moment;
  durationAlice?: number;
  durationRequiredAlice?: number;
  booleanAlice?: boolean;
  booleanRequiredAlice?: boolean;
  enumAlice?: EnumFieldClass;
  enumRequiredAlice?: EnumRequiredFieldClass;
  uuidAlice?: string;
  uuidRequiredAlice?: string;
  byteImageAliceContentType?: string;
  byteImageAlice?: any;
  byteImageRequiredAliceContentType?: string;
  byteImageRequiredAlice?: any;
  byteImageMinbytesAliceContentType?: string;
  byteImageMinbytesAlice?: any;
  byteImageMaxbytesAliceContentType?: string;
  byteImageMaxbytesAlice?: any;
  byteAnyAliceContentType?: string;
  byteAnyAlice?: any;
  byteAnyRequiredAliceContentType?: string;
  byteAnyRequiredAlice?: any;
  byteAnyMinbytesAliceContentType?: string;
  byteAnyMinbytesAlice?: any;
  byteAnyMaxbytesAliceContentType?: string;
  byteAnyMaxbytesAlice?: any;
  byteTextAlice?: any;
  byteTextRequiredAlice?: any;
}

export const defaultValue: Readonly<IFieldTestPaginationEntity> = {
  booleanAlice: false,
  booleanRequiredAlice: false
};
