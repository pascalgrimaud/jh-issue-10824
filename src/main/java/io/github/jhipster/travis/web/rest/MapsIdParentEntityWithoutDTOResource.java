package io.github.jhipster.travis.web.rest;

import io.github.jhipster.travis.domain.MapsIdParentEntityWithoutDTO;
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
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

/**
 * REST controller for managing {@link io.github.jhipster.travis.domain.MapsIdParentEntityWithoutDTO}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class MapsIdParentEntityWithoutDTOResource {

    private final Logger log = LoggerFactory.getLogger(MapsIdParentEntityWithoutDTOResource.class);

    private static final String ENTITY_NAME = "mapsIdParentEntityWithoutDTO";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final MapsIdParentEntityWithoutDTORepository mapsIdParentEntityWithoutDTORepository;

    public MapsIdParentEntityWithoutDTOResource(MapsIdParentEntityWithoutDTORepository mapsIdParentEntityWithoutDTORepository) {
        this.mapsIdParentEntityWithoutDTORepository = mapsIdParentEntityWithoutDTORepository;
    }

    /**
     * {@code POST  /maps-id-parent-entity-without-dtos} : Create a new mapsIdParentEntityWithoutDTO.
     *
     * @param mapsIdParentEntityWithoutDTO the mapsIdParentEntityWithoutDTO to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new mapsIdParentEntityWithoutDTO, or with status {@code 400 (Bad Request)} if the mapsIdParentEntityWithoutDTO has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/maps-id-parent-entity-without-dtos")
    public ResponseEntity<MapsIdParentEntityWithoutDTO> createMapsIdParentEntityWithoutDTO(@RequestBody MapsIdParentEntityWithoutDTO mapsIdParentEntityWithoutDTO) throws URISyntaxException {
        log.debug("REST request to save MapsIdParentEntityWithoutDTO : {}", mapsIdParentEntityWithoutDTO);
        if (mapsIdParentEntityWithoutDTO.getId() != null) {
            throw new BadRequestAlertException("A new mapsIdParentEntityWithoutDTO cannot already have an ID", ENTITY_NAME, "idexists");
        }
        MapsIdParentEntityWithoutDTO result = mapsIdParentEntityWithoutDTORepository.save(mapsIdParentEntityWithoutDTO);
        return ResponseEntity.created(new URI("/api/maps-id-parent-entity-without-dtos/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /maps-id-parent-entity-without-dtos} : Updates an existing mapsIdParentEntityWithoutDTO.
     *
     * @param mapsIdParentEntityWithoutDTO the mapsIdParentEntityWithoutDTO to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated mapsIdParentEntityWithoutDTO,
     * or with status {@code 400 (Bad Request)} if the mapsIdParentEntityWithoutDTO is not valid,
     * or with status {@code 500 (Internal Server Error)} if the mapsIdParentEntityWithoutDTO couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/maps-id-parent-entity-without-dtos")
    public ResponseEntity<MapsIdParentEntityWithoutDTO> updateMapsIdParentEntityWithoutDTO(@RequestBody MapsIdParentEntityWithoutDTO mapsIdParentEntityWithoutDTO) throws URISyntaxException {
        log.debug("REST request to update MapsIdParentEntityWithoutDTO : {}", mapsIdParentEntityWithoutDTO);
        if (mapsIdParentEntityWithoutDTO.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        MapsIdParentEntityWithoutDTO result = mapsIdParentEntityWithoutDTORepository.save(mapsIdParentEntityWithoutDTO);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, mapsIdParentEntityWithoutDTO.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /maps-id-parent-entity-without-dtos} : get all the mapsIdParentEntityWithoutDTOS.
     *

     * @param filter the filter of the request.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of mapsIdParentEntityWithoutDTOS in body.
     */
    @GetMapping("/maps-id-parent-entity-without-dtos")
    public List<MapsIdParentEntityWithoutDTO> getAllMapsIdParentEntityWithoutDTOS(@RequestParam(required = false) String filter) {
        if ("mapsidchildentitywithoutdto-is-null".equals(filter)) {
            log.debug("REST request to get all MapsIdParentEntityWithoutDTOs where mapsIdChildEntityWithoutDTO is null");
            return StreamSupport
                .stream(mapsIdParentEntityWithoutDTORepository.findAll().spliterator(), false)
                .filter(mapsIdParentEntityWithoutDTO -> mapsIdParentEntityWithoutDTO.getMapsIdChildEntityWithoutDTO() == null)
                .collect(Collectors.toList());
        }
        log.debug("REST request to get all MapsIdParentEntityWithoutDTOS");
        return mapsIdParentEntityWithoutDTORepository.findAll();
    }

    /**
     * {@code GET  /maps-id-parent-entity-without-dtos/:id} : get the "id" mapsIdParentEntityWithoutDTO.
     *
     * @param id the id of the mapsIdParentEntityWithoutDTO to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the mapsIdParentEntityWithoutDTO, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/maps-id-parent-entity-without-dtos/{id}")
    public ResponseEntity<MapsIdParentEntityWithoutDTO> getMapsIdParentEntityWithoutDTO(@PathVariable Long id) {
        log.debug("REST request to get MapsIdParentEntityWithoutDTO : {}", id);
        Optional<MapsIdParentEntityWithoutDTO> mapsIdParentEntityWithoutDTO = mapsIdParentEntityWithoutDTORepository.findById(id);
        return ResponseUtil.wrapOrNotFound(mapsIdParentEntityWithoutDTO);
    }

    /**
     * {@code DELETE  /maps-id-parent-entity-without-dtos/:id} : delete the "id" mapsIdParentEntityWithoutDTO.
     *
     * @param id the id of the mapsIdParentEntityWithoutDTO to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/maps-id-parent-entity-without-dtos/{id}")
    public ResponseEntity<Void> deleteMapsIdParentEntityWithoutDTO(@PathVariable Long id) {
        log.debug("REST request to delete MapsIdParentEntityWithoutDTO : {}", id);
        mapsIdParentEntityWithoutDTORepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
