package io.github.jhipster.travis.web.rest;

import io.github.jhipster.travis.domain.FieldTestServiceClassEntity;
import io.github.jhipster.travis.service.FieldTestServiceClassEntityService;
import io.github.jhipster.travis.web.rest.errors.BadRequestAlertException;
import io.github.jhipster.travis.service.dto.FieldTestServiceClassEntityCriteria;
import io.github.jhipster.travis.service.FieldTestServiceClassEntityQueryService;

import io.github.jhipster.web.util.HeaderUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;

import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing {@link io.github.jhipster.travis.domain.FieldTestServiceClassEntity}.
 */
@RestController
@RequestMapping("/api")
public class FieldTestServiceClassEntityResource {

    private final Logger log = LoggerFactory.getLogger(FieldTestServiceClassEntityResource.class);

    private static final String ENTITY_NAME = "fieldTestServiceClassEntity";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final FieldTestServiceClassEntityService fieldTestServiceClassEntityService;

    private final FieldTestServiceClassEntityQueryService fieldTestServiceClassEntityQueryService;

    public FieldTestServiceClassEntityResource(FieldTestServiceClassEntityService fieldTestServiceClassEntityService, FieldTestServiceClassEntityQueryService fieldTestServiceClassEntityQueryService) {
        this.fieldTestServiceClassEntityService = fieldTestServiceClassEntityService;
        this.fieldTestServiceClassEntityQueryService = fieldTestServiceClassEntityQueryService;
    }

    /**
     * {@code POST  /field-test-service-class-entities} : Create a new fieldTestServiceClassEntity.
     *
     * @param fieldTestServiceClassEntity the fieldTestServiceClassEntity to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new fieldTestServiceClassEntity, or with status {@code 400 (Bad Request)} if the fieldTestServiceClassEntity has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/field-test-service-class-entities")
    public ResponseEntity<FieldTestServiceClassEntity> createFieldTestServiceClassEntity(@Valid @RequestBody FieldTestServiceClassEntity fieldTestServiceClassEntity) throws URISyntaxException {
        log.debug("REST request to save FieldTestServiceClassEntity : {}", fieldTestServiceClassEntity);
        if (fieldTestServiceClassEntity.getId() != null) {
            throw new BadRequestAlertException("A new fieldTestServiceClassEntity cannot already have an ID", ENTITY_NAME, "idexists");
        }
        FieldTestServiceClassEntity result = fieldTestServiceClassEntityService.save(fieldTestServiceClassEntity);
        return ResponseEntity.created(new URI("/api/field-test-service-class-entities/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /field-test-service-class-entities} : Updates an existing fieldTestServiceClassEntity.
     *
     * @param fieldTestServiceClassEntity the fieldTestServiceClassEntity to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated fieldTestServiceClassEntity,
     * or with status {@code 400 (Bad Request)} if the fieldTestServiceClassEntity is not valid,
     * or with status {@code 500 (Internal Server Error)} if the fieldTestServiceClassEntity couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/field-test-service-class-entities")
    public ResponseEntity<FieldTestServiceClassEntity> updateFieldTestServiceClassEntity(@Valid @RequestBody FieldTestServiceClassEntity fieldTestServiceClassEntity) throws URISyntaxException {
        log.debug("REST request to update FieldTestServiceClassEntity : {}", fieldTestServiceClassEntity);
        if (fieldTestServiceClassEntity.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        FieldTestServiceClassEntity result = fieldTestServiceClassEntityService.save(fieldTestServiceClassEntity);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, fieldTestServiceClassEntity.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /field-test-service-class-entities} : get all the fieldTestServiceClassEntities.
     *

     * @param criteria the criteria which the requested entities should match.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of fieldTestServiceClassEntities in body.
     */
    @GetMapping("/field-test-service-class-entities")
    public ResponseEntity<List<FieldTestServiceClassEntity>> getAllFieldTestServiceClassEntities(FieldTestServiceClassEntityCriteria criteria) {
        log.debug("REST request to get FieldTestServiceClassEntities by criteria: {}", criteria);
        List<FieldTestServiceClassEntity> entityList = fieldTestServiceClassEntityQueryService.findByCriteria(criteria);
        return ResponseEntity.ok().body(entityList);
    }

    /**
    * {@code GET  /field-test-service-class-entities/count} : count all the fieldTestServiceClassEntities.
    *
    * @param criteria the criteria which the requested entities should match.
    * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the count in body.
    */
    @GetMapping("/field-test-service-class-entities/count")
    public ResponseEntity<Long> countFieldTestServiceClassEntities(FieldTestServiceClassEntityCriteria criteria) {
        log.debug("REST request to count FieldTestServiceClassEntities by criteria: {}", criteria);
        return ResponseEntity.ok().body(fieldTestServiceClassEntityQueryService.countByCriteria(criteria));
    }

    /**
     * {@code GET  /field-test-service-class-entities/:id} : get the "id" fieldTestServiceClassEntity.
     *
     * @param id the id of the fieldTestServiceClassEntity to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the fieldTestServiceClassEntity, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/field-test-service-class-entities/{id}")
    public ResponseEntity<FieldTestServiceClassEntity> getFieldTestServiceClassEntity(@PathVariable Long id) {
        log.debug("REST request to get FieldTestServiceClassEntity : {}", id);
        Optional<FieldTestServiceClassEntity> fieldTestServiceClassEntity = fieldTestServiceClassEntityService.findOne(id);
        return ResponseUtil.wrapOrNotFound(fieldTestServiceClassEntity);
    }

    /**
     * {@code DELETE  /field-test-service-class-entities/:id} : delete the "id" fieldTestServiceClassEntity.
     *
     * @param id the id of the fieldTestServiceClassEntity to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/field-test-service-class-entities/{id}")
    public ResponseEntity<Void> deleteFieldTestServiceClassEntity(@PathVariable Long id) {
        log.debug("REST request to delete FieldTestServiceClassEntity : {}", id);
        fieldTestServiceClassEntityService.delete(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
