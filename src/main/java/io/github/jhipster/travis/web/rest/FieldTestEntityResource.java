package io.github.jhipster.travis.web.rest;

import io.github.jhipster.travis.domain.FieldTestEntity;
import io.github.jhipster.travis.repository.FieldTestEntityRepository;
import io.github.jhipster.travis.web.rest.errors.BadRequestAlertException;

import io.github.jhipster.web.util.HeaderUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional; 
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;

import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing {@link io.github.jhipster.travis.domain.FieldTestEntity}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class FieldTestEntityResource {

    private final Logger log = LoggerFactory.getLogger(FieldTestEntityResource.class);

    private static final String ENTITY_NAME = "fieldTestEntity";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final FieldTestEntityRepository fieldTestEntityRepository;

    public FieldTestEntityResource(FieldTestEntityRepository fieldTestEntityRepository) {
        this.fieldTestEntityRepository = fieldTestEntityRepository;
    }

    /**
     * {@code POST  /field-test-entities} : Create a new fieldTestEntity.
     *
     * @param fieldTestEntity the fieldTestEntity to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new fieldTestEntity, or with status {@code 400 (Bad Request)} if the fieldTestEntity has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/field-test-entities")
    public ResponseEntity<FieldTestEntity> createFieldTestEntity(@Valid @RequestBody FieldTestEntity fieldTestEntity) throws URISyntaxException {
        log.debug("REST request to save FieldTestEntity : {}", fieldTestEntity);
        if (fieldTestEntity.getId() != null) {
            throw new BadRequestAlertException("A new fieldTestEntity cannot already have an ID", ENTITY_NAME, "idexists");
        }
        FieldTestEntity result = fieldTestEntityRepository.save(fieldTestEntity);
        return ResponseEntity.created(new URI("/api/field-test-entities/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /field-test-entities} : Updates an existing fieldTestEntity.
     *
     * @param fieldTestEntity the fieldTestEntity to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated fieldTestEntity,
     * or with status {@code 400 (Bad Request)} if the fieldTestEntity is not valid,
     * or with status {@code 500 (Internal Server Error)} if the fieldTestEntity couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/field-test-entities")
    public ResponseEntity<FieldTestEntity> updateFieldTestEntity(@Valid @RequestBody FieldTestEntity fieldTestEntity) throws URISyntaxException {
        log.debug("REST request to update FieldTestEntity : {}", fieldTestEntity);
        if (fieldTestEntity.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        FieldTestEntity result = fieldTestEntityRepository.save(fieldTestEntity);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, fieldTestEntity.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /field-test-entities} : get all the fieldTestEntities.
     *

     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of fieldTestEntities in body.
     */
    @GetMapping("/field-test-entities")
    public List<FieldTestEntity> getAllFieldTestEntities() {
        log.debug("REST request to get all FieldTestEntities");
        return fieldTestEntityRepository.findAll();
    }

    /**
     * {@code GET  /field-test-entities/:id} : get the "id" fieldTestEntity.
     *
     * @param id the id of the fieldTestEntity to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the fieldTestEntity, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/field-test-entities/{id}")
    public ResponseEntity<FieldTestEntity> getFieldTestEntity(@PathVariable Long id) {
        log.debug("REST request to get FieldTestEntity : {}", id);
        Optional<FieldTestEntity> fieldTestEntity = fieldTestEntityRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(fieldTestEntity);
    }

    /**
     * {@code DELETE  /field-test-entities/:id} : delete the "id" fieldTestEntity.
     *
     * @param id the id of the fieldTestEntity to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/field-test-entities/{id}")
    public ResponseEntity<Void> deleteFieldTestEntity(@PathVariable Long id) {
        log.debug("REST request to delete FieldTestEntity : {}", id);
        fieldTestEntityRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
