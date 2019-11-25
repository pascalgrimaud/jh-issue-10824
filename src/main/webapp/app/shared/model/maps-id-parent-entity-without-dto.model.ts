import { IMapsIdChildEntityWithoutDTO } from 'app/shared/model/maps-id-child-entity-without-dto.model';

export interface IMapsIdParentEntityWithoutDTO {
  id?: number;
  name?: string;
  mapsIdChildEntityWithoutDTO?: IMapsIdChildEntityWithoutDTO;
}

export const defaultValue: Readonly<IMapsIdParentEntityWithoutDTO> = {};
