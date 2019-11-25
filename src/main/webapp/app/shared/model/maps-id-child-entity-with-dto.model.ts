import { Moment } from 'moment';

export interface IMapsIdChildEntityWithDTO {
  id?: number;
  date?: Moment;
  mapsIdParentEntityWithDTOId?: number;
}

export const defaultValue: Readonly<IMapsIdChildEntityWithDTO> = {};
