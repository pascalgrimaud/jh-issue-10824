import { Moment } from 'moment';
import { EnumFieldClass } from 'app/shared/model/enumerations/enum-field-class.model';
import { EnumRequiredFieldClass } from 'app/shared/model/enumerations/enum-required-field-class.model';

export interface IFieldTestServiceClassEntity {
  id?: number;
  stringBob?: string;
  stringRequiredBob?: string;
  stringMinlengthBob?: string;
  stringMaxlengthBob?: string;
  stringPatternBob?: string;
  integerBob?: number;
  integerRequiredBob?: number;
  integerMinBob?: number;
  integerMaxBob?: number;
  longBob?: number;
  longRequiredBob?: number;
  longMinBob?: number;
  longMaxBob?: number;
  floatBob?: number;
  floatRequiredBob?: number;
  floatMinBob?: number;
  floatMaxBob?: number;
  doubleRequiredBob?: number;
  doubleMinBob?: number;
  doubleMaxBob?: number;
  bigDecimalRequiredBob?: number;
  bigDecimalMinBob?: number;
  bigDecimalMaxBob?: number;
  localDateBob?: Moment;
  localDateRequiredBob?: Moment;
  instantBob?: Moment;
  instanteRequiredBob?: Moment;
  zonedDateTimeBob?: Moment;
  zonedDateTimeRequiredBob?: Moment;
  durationBob?: number;
  durationRequiredBob?: number;
  booleanBob?: boolean;
  booleanRequiredBob?: boolean;
  enumBob?: EnumFieldClass;
  enumRequiredBob?: EnumRequiredFieldClass;
  uuidBob?: string;
  uuidRequiredBob?: string;
  byteImageBobContentType?: string;
  byteImageBob?: any;
  byteImageRequiredBobContentType?: string;
  byteImageRequiredBob?: any;
  byteImageMinbytesBobContentType?: string;
  byteImageMinbytesBob?: any;
  byteImageMaxbytesBobContentType?: string;
  byteImageMaxbytesBob?: any;
  byteAnyBobContentType?: string;
  byteAnyBob?: any;
  byteAnyRequiredBobContentType?: string;
  byteAnyRequiredBob?: any;
  byteAnyMinbytesBobContentType?: string;
  byteAnyMinbytesBob?: any;
  byteAnyMaxbytesBobContentType?: string;
  byteAnyMaxbytesBob?: any;
  byteTextBob?: any;
  byteTextRequiredBob?: any;
}

export const defaultValue: Readonly<IFieldTestServiceClassEntity> = {
  booleanBob: false,
  booleanRequiredBob: false
};
