package io.github.jhipster.travis.service.mapper;

import io.github.jhipster.travis.domain.*;
import io.github.jhipster.travis.service.dto.MapsIdUserProfileWithDTODTO;

import org.mapstruct.*;

/**
 * Mapper for the entity {@link MapsIdUserProfileWithDTO} and its DTO {@link MapsIdUserProfileWithDTODTO}.
 */
@Mapper(componentModel = "spring", uses = {UserMapper.class})
public interface MapsIdUserProfileWithDTOMapper extends EntityMapper<MapsIdUserProfileWithDTODTO, MapsIdUserProfileWithDTO> {

    @Mapping(source = "user.id", target = "userId")
    @Mapping(source = "user.login", target = "userLogin")
    MapsIdUserProfileWithDTODTO toDto(MapsIdUserProfileWithDTO mapsIdUserProfileWithDTO);

    @Mapping(source = "userId", target = "user")
    MapsIdUserProfileWithDTO toEntity(MapsIdUserProfileWithDTODTO mapsIdUserProfileWithDTODTO);

    default MapsIdUserProfileWithDTO fromId(Long id) {
        if (id == null) {
            return null;
        }
        MapsIdUserProfileWithDTO mapsIdUserProfileWithDTO = new MapsIdUserProfileWithDTO();
        mapsIdUserProfileWithDTO.setId(id);
        return mapsIdUserProfileWithDTO;
    }
}
