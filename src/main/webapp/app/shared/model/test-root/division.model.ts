import { IPlace } from 'app/shared/model/test-root/place.model';
import { DivisionType } from 'app/shared/model/enumerations/division-type.model';

export interface IDivision {
  id?: number;
  name?: string;
  shortName?: string;
  numberOfPeople?: number;
  divisionType?: DivisionType;
  colorBackground?: string;
  colorText?: string;
  divisionsPlaces?: IPlace[];
  preferredPlaces?: IPlace[];
}

export const defaultValue: Readonly<IDivision> = {};
