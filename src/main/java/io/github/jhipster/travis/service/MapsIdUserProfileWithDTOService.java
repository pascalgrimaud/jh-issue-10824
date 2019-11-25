package io.github.jhipster.travis.service;

import io.github.jhipster.travis.service.dto.MapsIdUserProfileWithDTODTO;

import java.util.List;
import java.util.Optional;

/**
 * Service Interface for managing {@link io.github.jhipster.travis.domain.MapsIdUserProfileWithDTO}.
 */
public interface MapsIdUserProfileWithDTOService {

    /**
     * Save a mapsIdUserProfileWithDTO.
     *
     * @param mapsIdUserProfileWithDTODTO the entity to save.
     * @return the persisted entity.
     */
    MapsIdUserProfileWithDTODTO save(MapsIdUserProfileWithDTODTO mapsIdUserProfileWithDTODTO);

    /**
     * Get all the mapsIdUserProfileWithDTOS.
     *
     * @return the list of entities.
     */
    List<MapsIdUserProfileWithDTODTO> findAll();


    /**
     * Get the "id" mapsIdUserProfileWithDTO.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Optional<MapsIdUserProfileWithDTODTO> findOne(Long id);

    /**
     * Delete the "id" mapsIdUserProfileWithDTO.
     *
     * @param id the id of the entity.
     */
    void delete(Long id);
}
