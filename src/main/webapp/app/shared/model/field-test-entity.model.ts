import { Moment } from 'moment';
import { EnumFieldClass } from 'app/shared/model/enumerations/enum-field-class.model';
import { EnumRequiredFieldClass } from 'app/shared/model/enumerations/enum-required-field-class.model';

export interface IFieldTestEntity {
  id?: number;
  stringTom?: string;
  stringRequiredTom?: string;
  stringMinlengthTom?: string;
  stringMaxlengthTom?: string;
  stringPatternTom?: string;
  integerTom?: number;
  integerRequiredTom?: number;
  integerMinTom?: number;
  integerMaxTom?: number;
  longTom?: number;
  longRequiredTom?: number;
  longMinTom?: number;
  longMaxTom?: number;
  floatTom?: number;
  floatRequiredTom?: number;
  floatMinTom?: number;
  floatMaxTom?: number;
  doubleRequiredTom?: number;
  doubleMinTom?: number;
  doubleMaxTom?: number;
  bigDecimalRequiredTom?: number;
  bigDecimalMinTom?: number;
  bigDecimalMaxTom?: number;
  localDateTom?: Moment;
  localDateRequiredTom?: Moment;
  instantTom?: Moment;
  instantRequiredTom?: Moment;
  zonedDateTimeTom?: Moment;
  zonedDateTimeRequiredTom?: Moment;
  durationTom?: number;
  durationRequiredTom?: number;
  booleanTom?: boolean;
  booleanRequiredTom?: boolean;
  enumTom?: EnumFieldClass;
  enumRequiredTom?: EnumRequiredFieldClass;
  uuidTom?: string;
  uuidRequiredTom?: string;
  byteImageTomContentType?: string;
  byteImageTom?: any;
  byteImageRequiredTomContentType?: string;
  byteImageRequiredTom?: any;
  byteImageMinbytesTomContentType?: string;
  byteImageMinbytesTom?: any;
  byteImageMaxbytesTomContentType?: string;
  byteImageMaxbytesTom?: any;
  byteAnyTomContentType?: string;
  byteAnyTom?: any;
  byteAnyRequiredTomContentType?: string;
  byteAnyRequiredTom?: any;
  byteAnyMinbytesTomContentType?: string;
  byteAnyMinbytesTom?: any;
  byteAnyMaxbytesTomContentType?: string;
  byteAnyMaxbytesTom?: any;
  byteTextTom?: any;
  byteTextRequiredTom?: any;
}

export const defaultValue: Readonly<IFieldTestEntity> = {
  booleanTom: false,
  booleanRequiredTom: false
};
