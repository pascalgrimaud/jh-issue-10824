import { Moment } from 'moment';
import { IMapsIdParentEntityWithoutDTO } from 'app/shared/model/maps-id-parent-entity-without-dto.model';

export interface IMapsIdChildEntityWithoutDTO {
  id?: number;
  date?: Moment;
  mapsIdParentEntityWithoutDTO?: IMapsIdParentEntityWithoutDTO;
}

export const defaultValue: Readonly<IMapsIdChildEntityWithoutDTO> = {};
