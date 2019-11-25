package io.github.jhipster.travis.web.rest;

import io.github.jhipster.travis.domain.MapsIdChildEntityWithoutDTO;
import io.github.jhipster.travis.repository.MapsIdChildEntityWithoutDTORepository;
import io.github.jhipster.travis.repository.MapsIdParentEntityWithoutDTORepository;
import io.github.jhipster.travis.web.rest.errors.BadRequestAlertException;

import io.github.jhipster.web.util.HeaderUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional; 
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

/**
 * REST controller for managing {@link io.github.jhipster.travis.domain.MapsIdChildEntityWithoutDTO}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class MapsIdChildEntityWithoutDTOResource {

    private final Logger log = LoggerFactory.getLogger(MapsIdChildEntityWithoutDTOResource.class);

    private static final String ENTITY_NAME = "mapsIdChildEntityWithoutDTO";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final MapsIdChildEntityWithoutDTORepository mapsIdChildEntityWithoutDTORepository;

    private final MapsIdParentEntityWithoutDTORepository mapsIdParentEntityWithoutDTORepository;

    public MapsIdChildEntityWithoutDTOResource(MapsIdChildEntityWithoutDTORepository mapsIdChildEntityWithoutDTORepository, MapsIdParentEntityWithoutDTORepository mapsIdParentEntityWithoutDTORepository) {
        this.mapsIdChildEntityWithoutDTORepository = mapsIdChildEntityWithoutDTORepository;
        this.mapsIdParentEntityWithoutDTORepository = mapsIdParentEntityWithoutDTORepository;
    }

    /**
     * {@code POST  /maps-id-child-entity-without-dtos} : Create a new mapsIdChildEntityWithoutDTO.
     *
     * @param mapsIdChildEntityWithoutDTO the mapsIdChildEntityWithoutDTO to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new mapsIdChildEntityWithoutDTO, or with status {@code 400 (Bad Request)} if the mapsIdChildEntityWithoutDTO has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/maps-id-child-entity-without-dtos")
    public ResponseEntity<MapsIdChildEntityWithoutDTO> createMapsIdChildEntityWithoutDTO(@RequestBody MapsIdChildEntityWithoutDTO mapsIdChildEntityWithoutDTO) throws URISyntaxException {
        log.debug("REST request to save MapsIdChildEntityWithoutDTO : {}", mapsIdChildEntityWithoutDTO);
        if (mapsIdChildEntityWithoutDTO.getId() != null) {
            throw new BadRequestAlertException("A new mapsIdChildEntityWithoutDTO cannot already have an ID", ENTITY_NAME, "idexists");
        }
        if (Objects.isNull(mapsIdChildEntityWithoutDTO.getMapsIdParentEntityWithoutDTO())) {
            throw new BadRequestAlertException("Invalid association value provided", ENTITY_NAME, "null");
        }
        long mapsIdParentEntityWithoutDTOId = mapsIdChildEntityWithoutDTO.getMapsIdParentEntityWithoutDTO().getId();
        mapsIdParentEntityWithoutDTORepository.findById(mapsIdParentEntityWithoutDTOId).ifPresent(mapsIdChildEntityWithoutDTO::mapsIdParentEntityWithoutDTO);
        MapsIdChildEntityWithoutDTO result = mapsIdChildEntityWithoutDTORepository.save(mapsIdChildEntityWithoutDTO);
        return ResponseEntity.created(new URI("/api/maps-id-child-entity-without-dtos/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /maps-id-child-entity-without-dtos} : Updates an existing mapsIdChildEntityWithoutDTO.
     *
     * @param mapsIdChildEntityWithoutDTO the mapsIdChildEntityWithoutDTO to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated mapsIdChildEntityWithoutDTO,
     * or with status {@code 400 (Bad Request)} if the mapsIdChildEntityWithoutDTO is not valid,
     * or with status {@code 500 (Internal Server Error)} if the mapsIdChildEntityWithoutDTO couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/maps-id-child-entity-without-dtos")
    public ResponseEntity<MapsIdChildEntityWithoutDTO> updateMapsIdChildEntityWithoutDTO(@RequestBody MapsIdChildEntityWithoutDTO mapsIdChildEntityWithoutDTO) throws URISyntaxException {
        log.debug("REST request to update MapsIdChildEntityWithoutDTO : {}", mapsIdChildEntityWithoutDTO);
        if (mapsIdChildEntityWithoutDTO.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        MapsIdChildEntityWithoutDTO result = mapsIdChildEntityWithoutDTORepository.save(mapsIdChildEntityWithoutDTO);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, mapsIdChildEntityWithoutDTO.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /maps-id-child-entity-without-dtos} : get all the mapsIdChildEntityWithoutDTOS.
     *

     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of mapsIdChildEntityWithoutDTOS in body.
     */
    @GetMapping("/maps-id-child-entity-without-dtos")
    @Transactional(readOnly = true)
    public List<MapsIdChildEntityWithoutDTO> getAllMapsIdChildEntityWithoutDTOS() {
        log.debug("REST request to get all MapsIdChildEntityWithoutDTOS");
        return mapsIdChildEntityWithoutDTORepository.findAll();
    }

    /**
     * {@code GET  /maps-id-child-entity-without-dtos/:id} : get the "id" mapsIdChildEntityWithoutDTO.
     *
     * @param id the id of the mapsIdChildEntityWithoutDTO to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the mapsIdChildEntityWithoutDTO, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/maps-id-child-entity-without-dtos/{id}")
    @Transactional(readOnly = true)
    public ResponseEntity<MapsIdChildEntityWithoutDTO> getMapsIdChildEntityWithoutDTO(@PathVariable Long id) {
        log.debug("REST request to get MapsIdChildEntityWithoutDTO : {}", id);
        Optional<MapsIdChildEntityWithoutDTO> mapsIdChildEntityWithoutDTO = mapsIdChildEntityWithoutDTORepository.findById(id);
        return ResponseUtil.wrapOrNotFound(mapsIdChildEntityWithoutDTO);
    }

    /**
     * {@code DELETE  /maps-id-child-entity-without-dtos/:id} : delete the "id" mapsIdChildEntityWithoutDTO.
     *
     * @param id the id of the mapsIdChildEntityWithoutDTO to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/maps-id-child-entity-without-dtos/{id}")
    public ResponseEntity<Void> deleteMapsIdChildEntityWithoutDTO(@PathVariable Long id) {
        log.debug("REST request to delete MapsIdChildEntityWithoutDTO : {}", id);
        mapsIdChildEntityWithoutDTORepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
