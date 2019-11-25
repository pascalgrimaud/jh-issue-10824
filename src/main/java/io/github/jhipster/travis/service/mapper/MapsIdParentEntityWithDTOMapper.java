package io.github.jhipster.travis.service.mapper;

import io.github.jhipster.travis.domain.*;
import io.github.jhipster.travis.service.dto.MapsIdParentEntityWithDTODTO;

import org.mapstruct.*;

/**
 * Mapper for the entity {@link MapsIdParentEntityWithDTO} and its DTO {@link MapsIdParentEntityWithDTODTO}.
 */
@Mapper(componentModel = "spring", uses = {})
public interface MapsIdParentEntityWithDTOMapper extends EntityMapper<MapsIdParentEntityWithDTODTO, MapsIdParentEntityWithDTO> {


    @Mapping(target = "mapsIdChildEntityWithDTO", ignore = true)
    MapsIdParentEntityWithDTO toEntity(MapsIdParentEntityWithDTODTO mapsIdParentEntityWithDTODTO);

    default MapsIdParentEntityWithDTO fromId(Long id) {
        if (id == null) {
            return null;
        }
        MapsIdParentEntityWithDTO mapsIdParentEntityWithDTO = new MapsIdParentEntityWithDTO();
        mapsIdParentEntityWithDTO.setId(id);
        return mapsIdParentEntityWithDTO;
    }
}
