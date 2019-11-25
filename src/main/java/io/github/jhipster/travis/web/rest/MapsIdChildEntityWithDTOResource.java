package io.github.jhipster.travis.web.rest;

import io.github.jhipster.travis.service.MapsIdChildEntityWithDTOService;
import io.github.jhipster.travis.web.rest.errors.BadRequestAlertException;
import io.github.jhipster.travis.service.dto.MapsIdChildEntityWithDTODTO;

import io.github.jhipster.web.util.HeaderUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

/**
 * REST controller for managing {@link io.github.jhipster.travis.domain.MapsIdChildEntityWithDTO}.
 */
@RestController
@RequestMapping("/api")
public class MapsIdChildEntityWithDTOResource {

    private final Logger log = LoggerFactory.getLogger(MapsIdChildEntityWithDTOResource.class);

    private static final String ENTITY_NAME = "mapsIdChildEntityWithDTO";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final MapsIdChildEntityWithDTOService mapsIdChildEntityWithDTOService;

    public MapsIdChildEntityWithDTOResource(MapsIdChildEntityWithDTOService mapsIdChildEntityWithDTOService) {
        this.mapsIdChildEntityWithDTOService = mapsIdChildEntityWithDTOService;
    }

    /**
     * {@code POST  /maps-id-child-entity-with-dtos} : Create a new mapsIdChildEntityWithDTO.
     *
     * @param mapsIdChildEntityWithDTODTO the mapsIdChildEntityWithDTODTO to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new mapsIdChildEntityWithDTODTO, or with status {@code 400 (Bad Request)} if the mapsIdChildEntityWithDTO has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/maps-id-child-entity-with-dtos")
    public ResponseEntity<MapsIdChildEntityWithDTODTO> createMapsIdChildEntityWithDTO(@RequestBody MapsIdChildEntityWithDTODTO mapsIdChildEntityWithDTODTO) throws URISyntaxException {
        log.debug("REST request to save MapsIdChildEntityWithDTO : {}", mapsIdChildEntityWithDTODTO);
        if (mapsIdChildEntityWithDTODTO.getId() != null) {
            throw new BadRequestAlertException("A new mapsIdChildEntityWithDTO cannot already have an ID", ENTITY_NAME, "idexists");
        }
        if (Objects.isNull(mapsIdChildEntityWithDTODTO.getMapsIdParentEntityWithDTOId())) {
            throw new BadRequestAlertException("Invalid association value provided", ENTITY_NAME, "null");
        }
        MapsIdChildEntityWithDTODTO result = mapsIdChildEntityWithDTOService.save(mapsIdChildEntityWithDTODTO);
        return ResponseEntity.created(new URI("/api/maps-id-child-entity-with-dtos/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /maps-id-child-entity-with-dtos} : Updates an existing mapsIdChildEntityWithDTO.
     *
     * @param mapsIdChildEntityWithDTODTO the mapsIdChildEntityWithDTODTO to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated mapsIdChildEntityWithDTODTO,
     * or with status {@code 400 (Bad Request)} if the mapsIdChildEntityWithDTODTO is not valid,
     * or with status {@code 500 (Internal Server Error)} if the mapsIdChildEntityWithDTODTO couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/maps-id-child-entity-with-dtos")
    public ResponseEntity<MapsIdChildEntityWithDTODTO> updateMapsIdChildEntityWithDTO(@RequestBody MapsIdChildEntityWithDTODTO mapsIdChildEntityWithDTODTO) throws URISyntaxException {
        log.debug("REST request to update MapsIdChildEntityWithDTO : {}", mapsIdChildEntityWithDTODTO);
        if (mapsIdChildEntityWithDTODTO.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        MapsIdChildEntityWithDTODTO result = mapsIdChildEntityWithDTOService.save(mapsIdChildEntityWithDTODTO);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, mapsIdChildEntityWithDTODTO.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /maps-id-child-entity-with-dtos} : get all the mapsIdChildEntityWithDTOS.
     *

     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of mapsIdChildEntityWithDTOS in body.
     */
    @GetMapping("/maps-id-child-entity-with-dtos")
    public List<MapsIdChildEntityWithDTODTO> getAllMapsIdChildEntityWithDTOS() {
        log.debug("REST request to get all MapsIdChildEntityWithDTOS");
        return mapsIdChildEntityWithDTOService.findAll();
    }

    /**
     * {@code GET  /maps-id-child-entity-with-dtos/:id} : get the "id" mapsIdChildEntityWithDTO.
     *
     * @param id the id of the mapsIdChildEntityWithDTODTO to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the mapsIdChildEntityWithDTODTO, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/maps-id-child-entity-with-dtos/{id}")
    public ResponseEntity<MapsIdChildEntityWithDTODTO> getMapsIdChildEntityWithDTO(@PathVariable Long id) {
        log.debug("REST request to get MapsIdChildEntityWithDTO : {}", id);
        Optional<MapsIdChildEntityWithDTODTO> mapsIdChildEntityWithDTODTO = mapsIdChildEntityWithDTOService.findOne(id);
        return ResponseUtil.wrapOrNotFound(mapsIdChildEntityWithDTODTO);
    }

    /**
     * {@code DELETE  /maps-id-child-entity-with-dtos/:id} : delete the "id" mapsIdChildEntityWithDTO.
     *
     * @param id the id of the mapsIdChildEntityWithDTODTO to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/maps-id-child-entity-with-dtos/{id}")
    public ResponseEntity<Void> deleteMapsIdChildEntityWithDTO(@PathVariable Long id) {
        log.debug("REST request to delete MapsIdChildEntityWithDTO : {}", id);
        mapsIdChildEntityWithDTOService.delete(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
