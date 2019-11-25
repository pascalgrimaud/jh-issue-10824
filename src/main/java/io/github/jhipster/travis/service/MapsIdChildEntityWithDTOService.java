package io.github.jhipster.travis.service;

import io.github.jhipster.travis.service.dto.MapsIdChildEntityWithDTODTO;

import java.util.List;
import java.util.Optional;

/**
 * Service Interface for managing {@link io.github.jhipster.travis.domain.MapsIdChildEntityWithDTO}.
 */
public interface MapsIdChildEntityWithDTOService {

    /**
     * Save a mapsIdChildEntityWithDTO.
     *
     * @param mapsIdChildEntityWithDTODTO the entity to save.
     * @return the persisted entity.
     */
    MapsIdChildEntityWithDTODTO save(MapsIdChildEntityWithDTODTO mapsIdChildEntityWithDTODTO);

    /**
     * Get all the mapsIdChildEntityWithDTOS.
     *
     * @return the list of entities.
     */
    List<MapsIdChildEntityWithDTODTO> findAll();


    /**
     * Get the "id" mapsIdChildEntityWithDTO.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Optional<MapsIdChildEntityWithDTODTO> findOne(Long id);

    /**
     * Delete the "id" mapsIdChildEntityWithDTO.
     *
     * @param id the id of the entity.
     */
    void delete(Long id);
}
