package io.github.jhipster.travis.service.mapper;

import io.github.jhipster.travis.domain.*;
import io.github.jhipster.travis.service.dto.EntityWithPaginationAndDTODTO;

import org.mapstruct.*;

/**
 * Mapper for the entity {@link EntityWithPaginationAndDTO} and its DTO {@link EntityWithPaginationAndDTODTO}.
 */
@Mapper(componentModel = "spring", uses = {})
public interface EntityWithPaginationAndDTOMapper extends EntityMapper<EntityWithPaginationAndDTODTO, EntityWithPaginationAndDTO> {



    default EntityWithPaginationAndDTO fromId(Long id) {
        if (id == null) {
            return null;
        }
        EntityWithPaginationAndDTO entityWithPaginationAndDTO = new EntityWithPaginationAndDTO();
        entityWithPaginationAndDTO.setId(id);
        return entityWithPaginationAndDTO;
    }
}
