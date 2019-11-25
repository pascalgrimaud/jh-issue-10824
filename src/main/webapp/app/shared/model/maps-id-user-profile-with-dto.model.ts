import { Moment } from 'moment';

export interface IMapsIdUserProfileWithDTO {
  id?: number;
  dateOfBirth?: Moment;
  userLogin?: string;
  userId?: number;
}

export const defaultValue: Readonly<IMapsIdUserProfileWithDTO> = {};
