package io.github.jhipster.travis.web.rest;

import io.github.jhipster.travis.service.MapsIdParentEntityWithDTOService;
import io.github.jhipster.travis.web.rest.errors.BadRequestAlertException;
import io.github.jhipster.travis.service.dto.MapsIdParentEntityWithDTODTO;

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
import java.util.Optional;
import java.util.stream.StreamSupport;

/**
 * REST controller for managing {@link io.github.jhipster.travis.domain.MapsIdParentEntityWithDTO}.
 */
@RestController
@RequestMapping("/api")
public class MapsIdParentEntityWithDTOResource {

    private final Logger log = LoggerFactory.getLogger(MapsIdParentEntityWithDTOResource.class);

    private static final String ENTITY_NAME = "mapsIdParentEntityWithDTO";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final MapsIdParentEntityWithDTOService mapsIdParentEntityWithDTOService;

    public MapsIdParentEntityWithDTOResource(MapsIdParentEntityWithDTOService mapsIdParentEntityWithDTOService) {
        this.mapsIdParentEntityWithDTOService = mapsIdParentEntityWithDTOService;
    }

    /**
     * {@code POST  /maps-id-parent-entity-with-dtos} : Create a new mapsIdParentEntityWithDTO.
     *
     * @param mapsIdParentEntityWithDTODTO the mapsIdParentEntityWithDTODTO to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new mapsIdParentEntityWithDTODTO, or with status {@code 400 (Bad Request)} if the mapsIdParentEntityWithDTO has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/maps-id-parent-entity-with-dtos")
    public ResponseEntity<MapsIdParentEntityWithDTODTO> createMapsIdParentEntityWithDTO(@RequestBody MapsIdParentEntityWithDTODTO mapsIdParentEntityWithDTODTO) throws URISyntaxException {
        log.debug("REST request to save MapsIdParentEntityWithDTO : {}", mapsIdParentEntityWithDTODTO);
        if (mapsIdParentEntityWithDTODTO.getId() != null) {
            throw new BadRequestAlertException("A new mapsIdParentEntityWithDTO cannot already have an ID", ENTITY_NAME, "idexists");
        }
        MapsIdParentEntityWithDTODTO result = mapsIdParentEntityWithDTOService.save(mapsIdParentEntityWithDTODTO);
        return ResponseEntity.created(new URI("/api/maps-id-parent-entity-with-dtos/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /maps-id-parent-entity-with-dtos} : Updates an existing mapsIdParentEntityWithDTO.
     *
     * @param mapsIdParentEntityWithDTODTO the mapsIdParentEntityWithDTODTO to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated mapsIdParentEntityWithDTODTO,
     * or with status {@code 400 (Bad Request)} if the mapsIdParentEntityWithDTODTO is not valid,
     * or with status {@code 500 (Internal Server Error)} if the mapsIdParentEntityWithDTODTO couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/maps-id-parent-entity-with-dtos")
    public ResponseEntity<MapsIdParentEntityWithDTODTO> updateMapsIdParentEntityWithDTO(@RequestBody MapsIdParentEntityWithDTODTO mapsIdParentEntityWithDTODTO) throws URISyntaxException {
        log.debug("REST request to update MapsIdParentEntityWithDTO : {}", mapsIdParentEntityWithDTODTO);
        if (mapsIdParentEntityWithDTODTO.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        MapsIdParentEntityWithDTODTO result = mapsIdParentEntityWithDTOService.save(mapsIdParentEntityWithDTODTO);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, mapsIdParentEntityWithDTODTO.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /maps-id-parent-entity-with-dtos} : get all the mapsIdParentEntityWithDTOS.
     *

     * @param filter the filter of the request.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of mapsIdParentEntityWithDTOS in body.
     */
    @GetMapping("/maps-id-parent-entity-with-dtos")
    public List<MapsIdParentEntityWithDTODTO> getAllMapsIdParentEntityWithDTOS(@RequestParam(required = false) String filter) {
        if ("mapsidchildentitywithdto-is-null".equals(filter)) {
            log.debug("REST request to get all MapsIdParentEntityWithDTOs where mapsIdChildEntityWithDTO is null");
            return mapsIdParentEntityWithDTOService.findAllWhereMapsIdChildEntityWithDTOIsNull();
        }
        log.debug("REST request to get all MapsIdParentEntityWithDTOS");
        return mapsIdParentEntityWithDTOService.findAll();
    }

    /**
     * {@code GET  /maps-id-parent-entity-with-dtos/:id} : get the "id" mapsIdParentEntityWithDTO.
     *
     * @param id the id of the mapsIdParentEntityWithDTODTO to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the mapsIdParentEntityWithDTODTO, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/maps-id-parent-entity-with-dtos/{id}")
    public ResponseEntity<MapsIdParentEntityWithDTODTO> getMapsIdParentEntityWithDTO(@PathVariable Long id) {
        log.debug("REST request to get MapsIdParentEntityWithDTO : {}", id);
        Optional<MapsIdParentEntityWithDTODTO> mapsIdParentEntityWithDTODTO = mapsIdParentEntityWithDTOService.findOne(id);
        return ResponseUtil.wrapOrNotFound(mapsIdParentEntityWithDTODTO);
    }

    /**
     * {@code DELETE  /maps-id-parent-entity-with-dtos/:id} : delete the "id" mapsIdParentEntityWithDTO.
     *
     * @param id the id of the mapsIdParentEntityWithDTODTO to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/maps-id-parent-entity-with-dtos/{id}")
    public ResponseEntity<Void> deleteMapsIdParentEntityWithDTO(@PathVariable Long id) {
        log.debug("REST request to delete MapsIdParentEntityWithDTO : {}", id);
        mapsIdParentEntityWithDTOService.delete(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
