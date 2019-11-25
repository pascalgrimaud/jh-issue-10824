package io.github.jhipster.travis.service;

import io.github.jhipster.travis.service.dto.MapsIdParentEntityWithDTODTO;

import java.util.List;
import java.util.Optional;

/**
 * Service Interface for managing {@link io.github.jhipster.travis.domain.MapsIdParentEntityWithDTO}.
 */
public interface MapsIdParentEntityWithDTOService {

    /**
     * Save a mapsIdParentEntityWithDTO.
     *
     * @param mapsIdParentEntityWithDTODTO the entity to save.
     * @return the persisted entity.
     */
    MapsIdParentEntityWithDTODTO save(MapsIdParentEntityWithDTODTO mapsIdParentEntityWithDTODTO);

    /**
     * Get all the mapsIdParentEntityWithDTOS.
     *
     * @return the list of entities.
     */
    List<MapsIdParentEntityWithDTODTO> findAll();
    /**
     * Get all the MapsIdParentEntityWithDTODTO where MapsIdChildEntityWithDTO is {@code null}.
     *
     * @return the list of entities.
     */
    List<MapsIdParentEntityWithDTODTO> findAllWhereMapsIdChildEntityWithDTOIsNull();


    /**
     * Get the "id" mapsIdParentEntityWithDTO.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Optional<MapsIdParentEntityWithDTODTO> findOne(Long id);

    /**
     * Delete the "id" mapsIdParentEntityWithDTO.
     *
     * @param id the id of the entity.
     */
    void delete(Long id);
}
