import { Moment } from 'moment';
import { EnumFieldClass } from 'app/shared/model/enumerations/enum-field-class.model';
import { EnumRequiredFieldClass } from 'app/shared/model/enumerations/enum-required-field-class.model';

export interface IFieldTestInfiniteScrollEntity {
  id?: number;
  stringHugo?: string;
  stringRequiredHugo?: string;
  stringMinlengthHugo?: string;
  stringMaxlengthHugo?: string;
  stringPatternHugo?: string;
  integerHugo?: number;
  integerRequiredHugo?: number;
  integerMinHugo?: number;
  integerMaxHugo?: number;
  longHugo?: number;
  longRequiredHugo?: number;
  longMinHugo?: number;
  longMaxHugo?: number;
  floatHugo?: number;
  floatRequiredHugo?: number;
  floatMinHugo?: number;
  floatMaxHugo?: number;
  doubleRequiredHugo?: number;
  doubleMinHugo?: number;
  doubleMaxHugo?: number;
  bigDecimalRequiredHugo?: number;
  bigDecimalMinHugo?: number;
  bigDecimalMaxHugo?: number;
  localDateHugo?: Moment;
  localDateRequiredHugo?: Moment;
  instantHugo?: Moment;
  instanteRequiredHugo?: Moment;
  zonedDateTimeHugo?: Moment;
  zonedDateTimeRequiredHugo?: Moment;
  durationHugo?: number;
  durationRequiredHugo?: number;
  booleanHugo?: boolean;
  booleanRequiredHugo?: boolean;
  enumHugo?: EnumFieldClass;
  enumRequiredHugo?: EnumRequiredFieldClass;
  uuidHugo?: string;
  uuidRequiredHugo?: string;
  byteImageHugoContentType?: string;
  byteImageHugo?: any;
  byteImageRequiredHugoContentType?: string;
  byteImageRequiredHugo?: any;
  byteImageMinbytesHugoContentType?: string;
  byteImageMinbytesHugo?: any;
  byteImageMaxbytesHugoContentType?: string;
  byteImageMaxbytesHugo?: any;
  byteAnyHugoContentType?: string;
  byteAnyHugo?: any;
  byteAnyRequiredHugoContentType?: string;
  byteAnyRequiredHugo?: any;
  byteAnyMinbytesHugoContentType?: string;
  byteAnyMinbytesHugo?: any;
  byteAnyMaxbytesHugoContentType?: string;
  byteAnyMaxbytesHugo?: any;
  byteTextHugo?: any;
  byteTextRequiredHugo?: any;
}

export const defaultValue: Readonly<IFieldTestInfiniteScrollEntity> = {
  booleanHugo: false,
  booleanRequiredHugo: false
};
