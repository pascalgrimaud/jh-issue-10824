import { Moment } from 'moment';
import { EnumFieldClass } from 'app/shared/model/enumerations/enum-field-class.model';
import { EnumRequiredFieldClass } from 'app/shared/model/enumerations/enum-required-field-class.model';

export interface IFieldTestServiceImplEntity {
  id?: number;
  stringMika?: string;
  stringRequiredMika?: string;
  stringMinlengthMika?: string;
  stringMaxlengthMika?: string;
  stringPatternMika?: string;
  integerMika?: number;
  integerRequiredMika?: number;
  integerMinMika?: number;
  integerMaxMika?: number;
  longMika?: number;
  longRequiredMika?: number;
  longMinMika?: number;
  longMaxMika?: number;
  floatMika?: number;
  floatRequiredMika?: number;
  floatMinMika?: number;
  floatMaxMika?: number;
  doubleRequiredMika?: number;
  doubleMinMika?: number;
  doubleMaxMika?: number;
  bigDecimalRequiredMika?: number;
  bigDecimalMinMika?: number;
  bigDecimalMaxMika?: number;
  localDateMika?: Moment;
  localDateRequiredMika?: Moment;
  instantMika?: Moment;
  instanteRequiredMika?: Moment;
  zonedDateTimeMika?: Moment;
  zonedDateTimeRequiredMika?: Moment;
  durationMika?: number;
  durationRequiredMika?: number;
  booleanMika?: boolean;
  booleanRequiredMika?: boolean;
  enumMika?: EnumFieldClass;
  enumRequiredMika?: EnumRequiredFieldClass;
  uuidMika?: string;
  uuidRequiredMika?: string;
  byteImageMikaContentType?: string;
  byteImageMika?: any;
  byteImageRequiredMikaContentType?: string;
  byteImageRequiredMika?: any;
  byteImageMinbytesMikaContentType?: string;
  byteImageMinbytesMika?: any;
  byteImageMaxbytesMikaContentType?: string;
  byteImageMaxbytesMika?: any;
  byteAnyMikaContentType?: string;
  byteAnyMika?: any;
  byteAnyRequiredMikaContentType?: string;
  byteAnyRequiredMika?: any;
  byteAnyMinbytesMikaContentType?: string;
  byteAnyMinbytesMika?: any;
  byteAnyMaxbytesMikaContentType?: string;
  byteAnyMaxbytesMika?: any;
  byteTextMika?: any;
  byteTextRequiredMika?: any;
}

export const defaultValue: Readonly<IFieldTestServiceImplEntity> = {
  booleanMika: false,
  booleanRequiredMika: false
};
