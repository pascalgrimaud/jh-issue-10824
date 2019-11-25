package io.github.jhipster.travis.web.rest;

import io.github.jhipster.travis.domain.FieldTestPaginationEntity;
import io.github.jhipster.travis.repository.FieldTestPaginationEntityRepository;
import io.github.jhipster.travis.web.rest.errors.BadRequestAlertException;

import io.github.jhipster.web.util.HeaderUtil;
import io.github.jhipster.web.util.PaginationUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional; 
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;

import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing {@link io.github.jhipster.travis.domain.FieldTestPaginationEntity}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class FieldTestPaginationEntityResource {

    private final Logger log = LoggerFactory.getLogger(FieldTestPaginationEntityResource.class);

    private static final String ENTITY_NAME = "fieldTestPaginationEntity";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final FieldTestPaginationEntityRepository fieldTestPaginationEntityRepository;

    public FieldTestPaginationEntityResource(FieldTestPaginationEntityRepository fieldTestPaginationEntityRepository) {
        this.fieldTestPaginationEntityRepository = fieldTestPaginationEntityRepository;
    }

    /**
     * {@code POST  /field-test-pagination-entities} : Create a new fieldTestPaginationEntity.
     *
     * @param fieldTestPaginationEntity the fieldTestPaginationEntity to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new fieldTestPaginationEntity, or with status {@code 400 (Bad Request)} if the fieldTestPaginationEntity has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/field-test-pagination-entities")
    public ResponseEntity<FieldTestPaginationEntity> createFieldTestPaginationEntity(@Valid @RequestBody FieldTestPaginationEntity fieldTestPaginationEntity) throws URISyntaxException {
        log.debug("REST request to save FieldTestPaginationEntity : {}", fieldTestPaginationEntity);
        if (fieldTestPaginationEntity.getId() != null) {
            throw new BadRequestAlertException("A new fieldTestPaginationEntity cannot already have an ID", ENTITY_NAME, "idexists");
        }
        FieldTestPaginationEntity result = fieldTestPaginationEntityRepository.save(fieldTestPaginationEntity);
        return ResponseEntity.created(new URI("/api/field-test-pagination-entities/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /field-test-pagination-entities} : Updates an existing fieldTestPaginationEntity.
     *
     * @param fieldTestPaginationEntity the fieldTestPaginationEntity to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated fieldTestPaginationEntity,
     * or with status {@code 400 (Bad Request)} if the fieldTestPaginationEntity is not valid,
     * or with status {@code 500 (Internal Server Error)} if the fieldTestPaginationEntity couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/field-test-pagination-entities")
    public ResponseEntity<FieldTestPaginationEntity> updateFieldTestPaginationEntity(@Valid @RequestBody FieldTestPaginationEntity fieldTestPaginationEntity) throws URISyntaxException {
        log.debug("REST request to update FieldTestPaginationEntity : {}", fieldTestPaginationEntity);
        if (fieldTestPaginationEntity.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        FieldTestPaginationEntity result = fieldTestPaginationEntityRepository.save(fieldTestPaginationEntity);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, fieldTestPaginationEntity.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /field-test-pagination-entities} : get all the fieldTestPaginationEntities.
     *

     * @param pageable the pagination information.

     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of fieldTestPaginationEntities in body.
     */
    @GetMapping("/field-test-pagination-entities")
    public ResponseEntity<List<FieldTestPaginationEntity>> getAllFieldTestPaginationEntities(Pageable pageable) {
        log.debug("REST request to get a page of FieldTestPaginationEntities");
        Page<FieldTestPaginationEntity> page = fieldTestPaginationEntityRepository.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(ServletUriComponentsBuilder.fromCurrentRequest(), page);
        return ResponseEntity.ok().headers(headers).body(page.getContent());
    }

    /**
     * {@code GET  /field-test-pagination-entities/:id} : get the "id" fieldTestPaginationEntity.
     *
     * @param id the id of the fieldTestPaginationEntity to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the fieldTestPaginationEntity, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/field-test-pagination-entities/{id}")
    public ResponseEntity<FieldTestPaginationEntity> getFieldTestPaginationEntity(@PathVariable Long id) {
        log.debug("REST request to get FieldTestPaginationEntity : {}", id);
        Optional<FieldTestPaginationEntity> fieldTestPaginationEntity = fieldTestPaginationEntityRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(fieldTestPaginationEntity);
    }

    /**
     * {@code DELETE  /field-test-pagination-entities/:id} : delete the "id" fieldTestPaginationEntity.
     *
     * @param id the id of the fieldTestPaginationEntity to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/field-test-pagination-entities/{id}")
    public ResponseEntity<Void> deleteFieldTestPaginationEntity(@PathVariable Long id) {
        log.debug("REST request to delete FieldTestPaginationEntity : {}", id);
        fieldTestPaginationEntityRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
