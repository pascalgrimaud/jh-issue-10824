package io.github.jhipster.travis.web.rest;

import io.github.jhipster.travis.domain.EntityWithServiceClass;
import io.github.jhipster.travis.service.EntityWithServiceClassService;
import io.github.jhipster.travis.web.rest.errors.BadRequestAlertException;

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
 * REST controller for managing {@link io.github.jhipster.travis.domain.EntityWithServiceClass}.
 */
@RestController
@RequestMapping("/api")
public class EntityWithServiceClassResource {

    private final Logger log = LoggerFactory.getLogger(EntityWithServiceClassResource.class);

    private static final String ENTITY_NAME = "entityWithServiceClass";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final EntityWithServiceClassService entityWithServiceClassService;

    public EntityWithServiceClassResource(EntityWithServiceClassService entityWithServiceClassService) {
        this.entityWithServiceClassService = entityWithServiceClassService;
    }

    /**
     * {@code POST  /entity-with-service-classes} : Create a new entityWithServiceClass.
     *
     * @param entityWithServiceClass the entityWithServiceClass to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new entityWithServiceClass, or with status {@code 400 (Bad Request)} if the entityWithServiceClass has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/entity-with-service-classes")
    public ResponseEntity<EntityWithServiceClass> createEntityWithServiceClass(@RequestBody EntityWithServiceClass entityWithServiceClass) throws URISyntaxException {
        log.debug("REST request to save EntityWithServiceClass : {}", entityWithServiceClass);
        if (entityWithServiceClass.getId() != null) {
            throw new BadRequestAlertException("A new entityWithServiceClass cannot already have an ID", ENTITY_NAME, "idexists");
        }
        EntityWithServiceClass result = entityWithServiceClassService.save(entityWithServiceClass);
        return ResponseEntity.created(new URI("/api/entity-with-service-classes/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /entity-with-service-classes} : Updates an existing entityWithServiceClass.
     *
     * @param entityWithServiceClass the entityWithServiceClass to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated entityWithServiceClass,
     * or with status {@code 400 (Bad Request)} if the entityWithServiceClass is not valid,
     * or with status {@code 500 (Internal Server Error)} if the entityWithServiceClass couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/entity-with-service-classes")
    public ResponseEntity<EntityWithServiceClass> updateEntityWithServiceClass(@RequestBody EntityWithServiceClass entityWithServiceClass) throws URISyntaxException {
        log.debug("REST request to update EntityWithServiceClass : {}", entityWithServiceClass);
        if (entityWithServiceClass.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        EntityWithServiceClass result = entityWithServiceClassService.save(entityWithServiceClass);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, entityWithServiceClass.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /entity-with-service-classes} : get all the entityWithServiceClasses.
     *

     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of entityWithServiceClasses in body.
     */
    @GetMapping("/entity-with-service-classes")
    public List<EntityWithServiceClass> getAllEntityWithServiceClasses() {
        log.debug("REST request to get all EntityWithServiceClasses");
        return entityWithServiceClassService.findAll();
    }

    /**
     * {@code GET  /entity-with-service-classes/:id} : get the "id" entityWithServiceClass.
     *
     * @param id the id of the entityWithServiceClass to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the entityWithServiceClass, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/entity-with-service-classes/{id}")
    public ResponseEntity<EntityWithServiceClass> getEntityWithServiceClass(@PathVariable Long id) {
        log.debug("REST request to get EntityWithServiceClass : {}", id);
        Optional<EntityWithServiceClass> entityWithServiceClass = entityWithServiceClassService.findOne(id);
        return ResponseUtil.wrapOrNotFound(entityWithServiceClass);
    }

    /**
     * {@code DELETE  /entity-with-service-classes/:id} : delete the "id" entityWithServiceClass.
     *
     * @param id the id of the entityWithServiceClass to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/entity-with-service-classes/{id}")
    public ResponseEntity<Void> deleteEntityWithServiceClass(@PathVariable Long id) {
        log.debug("REST request to delete EntityWithServiceClass : {}", id);
        entityWithServiceClassService.delete(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
