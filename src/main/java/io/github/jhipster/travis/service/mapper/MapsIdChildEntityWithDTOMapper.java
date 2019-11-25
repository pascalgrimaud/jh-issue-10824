package io.github.jhipster.travis.service.mapper;

import io.github.jhipster.travis.domain.*;
import io.github.jhipster.travis.service.dto.MapsIdChildEntityWithDTODTO;

import org.mapstruct.*;

/**
 * Mapper for the entity {@link MapsIdChildEntityWithDTO} and its DTO {@link MapsIdChildEntityWithDTODTO}.
 */
@Mapper(componentModel = "spring", uses = {MapsIdParentEntityWithDTOMapper.class})
public interface MapsIdChildEntityWithDTOMapper extends EntityMapper<MapsIdChildEntityWithDTODTO, MapsIdChildEntityWithDTO> {

    @Mapping(source = "mapsIdParentEntityWithDTO.id", target = "mapsIdParentEntityWithDTOId")
    MapsIdChildEntityWithDTODTO toDto(MapsIdChildEntityWithDTO mapsIdChildEntityWithDTO);

    @Mapping(source = "mapsIdParentEntityWithDTOId", target = "mapsIdParentEntityWithDTO")
    MapsIdChildEntityWithDTO toEntity(MapsIdChildEntityWithDTODTO mapsIdChildEntityWithDTODTO);

    default MapsIdChildEntityWithDTO fromId(Long id) {
        if (id == null) {
            return null;
        }
        MapsIdChildEntityWithDTO mapsIdChildEntityWithDTO = new MapsIdChildEntityWithDTO();
        mapsIdChildEntityWithDTO.setId(id);
        return mapsIdChildEntityWithDTO;
    }
}
