import { IDivision } from 'app/shared/model/test-root/division.model';

export interface IPlace {
  id?: number;
  name?: string;
  numberOfSeats?: number;
  shortName?: string;
  colorBackground?: string;
  colorText?: string;
  description?: any;
  preferredDivisions?: IDivision[];
  owner?: IDivision;
}

export const defaultValue: Readonly<IPlace> = {};
