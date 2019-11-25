package io.github.jhipster.travis.web.rest;

import io.github.jhipster.travis.service.EntityWithServiceClassAndDTOService;
import io.github.jhipster.travis.web.rest.errors.BadRequestAlertException;
import io.github.jhipster.travis.service.dto.EntityWithServiceClassAndDTODTO;

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
 * REST controller for managing {@link io.github.jhipster.travis.domain.EntityWithServiceClassAndDTO}.
 */
@RestController
@RequestMapping("/api")
public class EntityWithServiceClassAndDTOResource {

    private final Logger log = LoggerFactory.getLogger(EntityWithServiceClassAndDTOResource.class);

    private static final String ENTITY_NAME = "entityWithServiceClassAndDTO";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final EntityWithServiceClassAndDTOService entityWithServiceClassAndDTOService;

    public EntityWithServiceClassAndDTOResource(EntityWithServiceClassAndDTOService entityWithServiceClassAndDTOService) {
        this.entityWithServiceClassAndDTOService = entityWithServiceClassAndDTOService;
    }

    /**
     * {@code POST  /entity-with-service-class-and-dtos} : Create a new entityWithServiceClassAndDTO.
     *
     * @param entityWithServiceClassAndDTODTO the entityWithServiceClassAndDTODTO to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new entityWithServiceClassAndDTODTO, or with status {@code 400 (Bad Request)} if the entityWithServiceClassAndDTO has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/entity-with-service-class-and-dtos")
    public ResponseEntity<EntityWithServiceClassAndDTODTO> createEntityWithServiceClassAndDTO(@RequestBody EntityWithServiceClassAndDTODTO entityWithServiceClassAndDTODTO) throws URISyntaxException {
        log.debug("REST request to save EntityWithServiceClassAndDTO : {}", entityWithServiceClassAndDTODTO);
        if (entityWithServiceClassAndDTODTO.getId() != null) {
            throw new BadRequestAlertException("A new entityWithServiceClassAndDTO cannot already have an ID", ENTITY_NAME, "idexists");
        }
        EntityWithServiceClassAndDTODTO result = entityWithServiceClassAndDTOService.save(entityWithServiceClassAndDTODTO);
        return ResponseEntity.created(new URI("/api/entity-with-service-class-and-dtos/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /entity-with-service-class-and-dtos} : Updates an existing entityWithServiceClassAndDTO.
     *
     * @param entityWithServiceClassAndDTODTO the entityWithServiceClassAndDTODTO to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated entityWithServiceClassAndDTODTO,
     * or with status {@code 400 (Bad Request)} if the entityWithServiceClassAndDTODTO is not valid,
     * or with status {@code 500 (Internal Server Error)} if the entityWithServiceClassAndDTODTO couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/entity-with-service-class-and-dtos")
    public ResponseEntity<EntityWithServiceClassAndDTODTO> updateEntityWithServiceClassAndDTO(@RequestBody EntityWithServiceClassAndDTODTO entityWithServiceClassAndDTODTO) throws URISyntaxException {
        log.debug("REST request to update EntityWithServiceClassAndDTO : {}", entityWithServiceClassAndDTODTO);
        if (entityWithServiceClassAndDTODTO.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        EntityWithServiceClassAndDTODTO result = entityWithServiceClassAndDTOService.save(entityWithServiceClassAndDTODTO);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, entityWithServiceClassAndDTODTO.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /entity-with-service-class-and-dtos} : get all the entityWithServiceClassAndDTOS.
     *

     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of entityWithServiceClassAndDTOS in body.
     */
    @GetMapping("/entity-with-service-class-and-dtos")
    public List<EntityWithServiceClassAndDTODTO> getAllEntityWithServiceClassAndDTOS() {
        log.debug("REST request to get all EntityWithServiceClassAndDTOS");
        return entityWithServiceClassAndDTOService.findAll();
    }

    /**
     * {@code GET  /entity-with-service-class-and-dtos/:id} : get the "id" entityWithServiceClassAndDTO.
     *
     * @param id the id of the entityWithServiceClassAndDTODTO to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the entityWithServiceClassAndDTODTO, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/entity-with-service-class-and-dtos/{id}")
    public ResponseEntity<EntityWithServiceClassAndDTODTO> getEntityWithServiceClassAndDTO(@PathVariable Long id) {
        log.debug("REST request to get EntityWithServiceClassAndDTO : {}", id);
        Optional<EntityWithServiceClassAndDTODTO> entityWithServiceClassAndDTODTO = entityWithServiceClassAndDTOService.findOne(id);
        return ResponseUtil.wrapOrNotFound(entityWithServiceClassAndDTODTO);
    }

    /**
     * {@code DELETE  /entity-with-service-class-and-dtos/:id} : delete the "id" entityWithServiceClassAndDTO.
     *
     * @param id the id of the entityWithServiceClassAndDTODTO to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/entity-with-service-class-and-dtos/{id}")
    public ResponseEntity<Void> deleteEntityWithServiceClassAndDTO(@PathVariable Long id) {
        log.debug("REST request to delete EntityWithServiceClassAndDTO : {}", id);
        entityWithServiceClassAndDTOService.delete(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
