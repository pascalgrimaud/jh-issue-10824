package io.github.jhipster.travis.web.rest;

import io.github.jhipster.travis.service.EntityWithServiceImplAndDTOService;
import io.github.jhipster.travis.web.rest.errors.BadRequestAlertException;
import io.github.jhipster.travis.service.dto.EntityWithServiceImplAndDTODTO;

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

/**
 * REST controller for managing {@link io.github.jhipster.travis.domain.EntityWithServiceImplAndDTO}.
 */
@RestController
@RequestMapping("/api")
public class EntityWithServiceImplAndDTOResource {

    private final Logger log = LoggerFactory.getLogger(EntityWithServiceImplAndDTOResource.class);

    private static final String ENTITY_NAME = "entityWithServiceImplAndDTO";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final EntityWithServiceImplAndDTOService entityWithServiceImplAndDTOService;

    public EntityWithServiceImplAndDTOResource(EntityWithServiceImplAndDTOService entityWithServiceImplAndDTOService) {
        this.entityWithServiceImplAndDTOService = entityWithServiceImplAndDTOService;
    }

    /**
     * {@code POST  /entity-with-service-impl-and-dtos} : Create a new entityWithServiceImplAndDTO.
     *
     * @param entityWithServiceImplAndDTODTO the entityWithServiceImplAndDTODTO to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new entityWithServiceImplAndDTODTO, or with status {@code 400 (Bad Request)} if the entityWithServiceImplAndDTO has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/entity-with-service-impl-and-dtos")
    public ResponseEntity<EntityWithServiceImplAndDTODTO> createEntityWithServiceImplAndDTO(@RequestBody EntityWithServiceImplAndDTODTO entityWithServiceImplAndDTODTO) throws URISyntaxException {
        log.debug("REST request to save EntityWithServiceImplAndDTO : {}", entityWithServiceImplAndDTODTO);
        if (entityWithServiceImplAndDTODTO.getId() != null) {
            throw new BadRequestAlertException("A new entityWithServiceImplAndDTO cannot already have an ID", ENTITY_NAME, "idexists");
        }
        EntityWithServiceImplAndDTODTO result = entityWithServiceImplAndDTOService.save(entityWithServiceImplAndDTODTO);
        return ResponseEntity.created(new URI("/api/entity-with-service-impl-and-dtos/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /entity-with-service-impl-and-dtos} : Updates an existing entityWithServiceImplAndDTO.
     *
     * @param entityWithServiceImplAndDTODTO the entityWithServiceImplAndDTODTO to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated entityWithServiceImplAndDTODTO,
     * or with status {@code 400 (Bad Request)} if the entityWithServiceImplAndDTODTO is not valid,
     * or with status {@code 500 (Internal Server Error)} if the entityWithServiceImplAndDTODTO couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/entity-with-service-impl-and-dtos")
    public ResponseEntity<EntityWithServiceImplAndDTODTO> updateEntityWithServiceImplAndDTO(@RequestBody EntityWithServiceImplAndDTODTO entityWithServiceImplAndDTODTO) throws URISyntaxException {
        log.debug("REST request to update EntityWithServiceImplAndDTO : {}", entityWithServiceImplAndDTODTO);
        if (entityWithServiceImplAndDTODTO.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        EntityWithServiceImplAndDTODTO result = entityWithServiceImplAndDTOService.save(entityWithServiceImplAndDTODTO);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, entityWithServiceImplAndDTODTO.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /entity-with-service-impl-and-dtos} : get all the entityWithServiceImplAndDTOS.
     *

     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of entityWithServiceImplAndDTOS in body.
     */
    @GetMapping("/entity-with-service-impl-and-dtos")
    public List<EntityWithServiceImplAndDTODTO> getAllEntityWithServiceImplAndDTOS() {
        log.debug("REST request to get all EntityWithServiceImplAndDTOS");
        return entityWithServiceImplAndDTOService.findAll();
    }

    /**
     * {@code GET  /entity-with-service-impl-and-dtos/:id} : get the "id" entityWithServiceImplAndDTO.
     *
     * @param id the id of the entityWithServiceImplAndDTODTO to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the entityWithServiceImplAndDTODTO, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/entity-with-service-impl-and-dtos/{id}")
    public ResponseEntity<EntityWithServiceImplAndDTODTO> getEntityWithServiceImplAndDTO(@PathVariable Long id) {
        log.debug("REST request to get EntityWithServiceImplAndDTO : {}", id);
        Optional<EntityWithServiceImplAndDTODTO> entityWithServiceImplAndDTODTO = entityWithServiceImplAndDTOService.findOne(id);
        return ResponseUtil.wrapOrNotFound(entityWithServiceImplAndDTODTO);
    }

    /**
     * {@code DELETE  /entity-with-service-impl-and-dtos/:id} : delete the "id" entityWithServiceImplAndDTO.
     *
     * @param id the id of the entityWithServiceImplAndDTODTO to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/entity-with-service-impl-and-dtos/{id}")
    public ResponseEntity<Void> deleteEntityWithServiceImplAndDTO(@PathVariable Long id) {
        log.debug("REST request to delete EntityWithServiceImplAndDTO : {}", id);
        entityWithServiceImplAndDTOService.delete(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
