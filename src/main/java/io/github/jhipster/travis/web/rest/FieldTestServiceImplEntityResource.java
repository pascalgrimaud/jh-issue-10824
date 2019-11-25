package io.github.jhipster.travis.web.rest;

import io.github.jhipster.travis.domain.FieldTestServiceImplEntity;
import io.github.jhipster.travis.service.FieldTestServiceImplEntityService;
import io.github.jhipster.travis.web.rest.errors.BadRequestAlertException;

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
 * REST controller for managing {@link io.github.jhipster.travis.domain.FieldTestServiceImplEntity}.
 */
@RestController
@RequestMapping("/api")
public class FieldTestServiceImplEntityResource {

    private final Logger log = LoggerFactory.getLogger(FieldTestServiceImplEntityResource.class);

    private static final String ENTITY_NAME = "fieldTestServiceImplEntity";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final FieldTestServiceImplEntityService fieldTestServiceImplEntityService;

    public FieldTestServiceImplEntityResource(FieldTestServiceImplEntityService fieldTestServiceImplEntityService) {
        this.fieldTestServiceImplEntityService = fieldTestServiceImplEntityService;
    }

    /**
     * {@code POST  /field-test-service-impl-entities} : Create a new fieldTestServiceImplEntity.
     *
     * @param fieldTestServiceImplEntity the fieldTestServiceImplEntity to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new fieldTestServiceImplEntity, or with status {@code 400 (Bad Request)} if the fieldTestServiceImplEntity has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/field-test-service-impl-entities")
    public ResponseEntity<FieldTestServiceImplEntity> createFieldTestServiceImplEntity(@Valid @RequestBody FieldTestServiceImplEntity fieldTestServiceImplEntity) throws URISyntaxException {
        log.debug("REST request to save FieldTestServiceImplEntity : {}", fieldTestServiceImplEntity);
        if (fieldTestServiceImplEntity.getId() != null) {
            throw new BadRequestAlertException("A new fieldTestServiceImplEntity cannot already have an ID", ENTITY_NAME, "idexists");
        }
        FieldTestServiceImplEntity result = fieldTestServiceImplEntityService.save(fieldTestServiceImplEntity);
        return ResponseEntity.created(new URI("/api/field-test-service-impl-entities/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /field-test-service-impl-entities} : Updates an existing fieldTestServiceImplEntity.
     *
     * @param fieldTestServiceImplEntity the fieldTestServiceImplEntity to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated fieldTestServiceImplEntity,
     * or with status {@code 400 (Bad Request)} if the fieldTestServiceImplEntity is not valid,
     * or with status {@code 500 (Internal Server Error)} if the fieldTestServiceImplEntity couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/field-test-service-impl-entities")
    public ResponseEntity<FieldTestServiceImplEntity> updateFieldTestServiceImplEntity(@Valid @RequestBody FieldTestServiceImplEntity fieldTestServiceImplEntity) throws URISyntaxException {
        log.debug("REST request to update FieldTestServiceImplEntity : {}", fieldTestServiceImplEntity);
        if (fieldTestServiceImplEntity.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        FieldTestServiceImplEntity result = fieldTestServiceImplEntityService.save(fieldTestServiceImplEntity);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, fieldTestServiceImplEntity.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /field-test-service-impl-entities} : get all the fieldTestServiceImplEntities.
     *

     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of fieldTestServiceImplEntities in body.
     */
    @GetMapping("/field-test-service-impl-entities")
    public List<FieldTestServiceImplEntity> getAllFieldTestServiceImplEntities() {
        log.debug("REST request to get all FieldTestServiceImplEntities");
        return fieldTestServiceImplEntityService.findAll();
    }

    /**
     * {@code GET  /field-test-service-impl-entities/:id} : get the "id" fieldTestServiceImplEntity.
     *
     * @param id the id of the fieldTestServiceImplEntity to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the fieldTestServiceImplEntity, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/field-test-service-impl-entities/{id}")
    public ResponseEntity<FieldTestServiceImplEntity> getFieldTestServiceImplEntity(@PathVariable Long id) {
        log.debug("REST request to get FieldTestServiceImplEntity : {}", id);
        Optional<FieldTestServiceImplEntity> fieldTestServiceImplEntity = fieldTestServiceImplEntityService.findOne(id);
        return ResponseUtil.wrapOrNotFound(fieldTestServiceImplEntity);
    }

    /**
     * {@code DELETE  /field-test-service-impl-entities/:id} : delete the "id" fieldTestServiceImplEntity.
     *
     * @param id the id of the fieldTestServiceImplEntity to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/field-test-service-impl-entities/{id}")
    public ResponseEntity<Void> deleteFieldTestServiceImplEntity(@PathVariable Long id) {
        log.debug("REST request to delete FieldTestServiceImplEntity : {}", id);
        fieldTestServiceImplEntityService.delete(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
