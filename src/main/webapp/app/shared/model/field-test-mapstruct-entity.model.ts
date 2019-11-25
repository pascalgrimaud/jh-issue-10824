import { Moment } from 'moment';
import { EnumFieldClass } from 'app/shared/model/enumerations/enum-field-class.model';
import { EnumRequiredFieldClass } from 'app/shared/model/enumerations/enum-required-field-class.model';

export interface IFieldTestMapstructEntity {
  id?: number;
  stringEva?: string;
  stringRequiredEva?: string;
  stringMinlengthEva?: string;
  stringMaxlengthEva?: string;
  stringPatternEva?: string;
  integerEva?: number;
  integerRequiredEva?: number;
  integerMinEva?: number;
  integerMaxEva?: number;
  longEva?: number;
  longRequiredEva?: number;
  longMinEva?: number;
  longMaxEva?: number;
  floatEva?: number;
  floatRequiredEva?: number;
  floatMinEva?: number;
  floatMaxEva?: number;
  doubleRequiredEva?: number;
  doubleMinEva?: number;
  doubleMaxEva?: number;
  bigDecimalRequiredEva?: number;
  bigDecimalMinEva?: number;
  bigDecimalMaxEva?: number;
  localDateEva?: Moment;
  localDateRequiredEva?: Moment;
  instantEva?: Moment;
  instanteRequiredEva?: Moment;
  zonedDateTimeEva?: Moment;
  zonedDateTimeRequiredEva?: Moment;
  durationEva?: number;
  durationRequiredEva?: number;
  booleanEva?: boolean;
  booleanRequiredEva?: boolean;
  enumEva?: EnumFieldClass;
  enumRequiredEva?: EnumRequiredFieldClass;
  uuidEva?: string;
  uuidRequiredEva?: string;
  byteImageEvaContentType?: string;
  byteImageEva?: any;
  byteImageRequiredEvaContentType?: string;
  byteImageRequiredEva?: any;
  byteImageMinbytesEvaContentType?: string;
  byteImageMinbytesEva?: any;
  byteImageMaxbytesEvaContentType?: string;
  byteImageMaxbytesEva?: any;
  byteAnyEvaContentType?: string;
  byteAnyEva?: any;
  byteAnyRequiredEvaContentType?: string;
  byteAnyRequiredEva?: any;
  byteAnyMinbytesEvaContentType?: string;
  byteAnyMinbytesEva?: any;
  byteAnyMaxbytesEvaContentType?: string;
  byteAnyMaxbytesEva?: any;
  byteTextEva?: any;
  byteTextRequiredEva?: any;
}

export const defaultValue: Readonly<IFieldTestMapstructEntity> = {
  booleanEva: false,
  booleanRequiredEva: false
};
