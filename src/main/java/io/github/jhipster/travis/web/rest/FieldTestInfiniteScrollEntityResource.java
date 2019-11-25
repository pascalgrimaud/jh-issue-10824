package io.github.jhipster.travis.web.rest;

import io.github.jhipster.travis.domain.FieldTestInfiniteScrollEntity;
import io.github.jhipster.travis.repository.FieldTestInfiniteScrollEntityRepository;
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
 * REST controller for managing {@link io.github.jhipster.travis.domain.FieldTestInfiniteScrollEntity}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class FieldTestInfiniteScrollEntityResource {

    private final Logger log = LoggerFactory.getLogger(FieldTestInfiniteScrollEntityResource.class);

    private static final String ENTITY_NAME = "fieldTestInfiniteScrollEntity";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final FieldTestInfiniteScrollEntityRepository fieldTestInfiniteScrollEntityRepository;

    public FieldTestInfiniteScrollEntityResource(FieldTestInfiniteScrollEntityRepository fieldTestInfiniteScrollEntityRepository) {
        this.fieldTestInfiniteScrollEntityRepository = fieldTestInfiniteScrollEntityRepository;
    }

    /**
     * {@code POST  /field-test-infinite-scroll-entities} : Create a new fieldTestInfiniteScrollEntity.
     *
     * @param fieldTestInfiniteScrollEntity the fieldTestInfiniteScrollEntity to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new fieldTestInfiniteScrollEntity, or with status {@code 400 (Bad Request)} if the fieldTestInfiniteScrollEntity has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/field-test-infinite-scroll-entities")
    public ResponseEntity<FieldTestInfiniteScrollEntity> createFieldTestInfiniteScrollEntity(@Valid @RequestBody FieldTestInfiniteScrollEntity fieldTestInfiniteScrollEntity) throws URISyntaxException {
        log.debug("REST request to save FieldTestInfiniteScrollEntity : {}", fieldTestInfiniteScrollEntity);
        if (fieldTestInfiniteScrollEntity.getId() != null) {
            throw new BadRequestAlertException("A new fieldTestInfiniteScrollEntity cannot already have an ID", ENTITY_NAME, "idexists");
        }
        FieldTestInfiniteScrollEntity result = fieldTestInfiniteScrollEntityRepository.save(fieldTestInfiniteScrollEntity);
        return ResponseEntity.created(new URI("/api/field-test-infinite-scroll-entities/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /field-test-infinite-scroll-entities} : Updates an existing fieldTestInfiniteScrollEntity.
     *
     * @param fieldTestInfiniteScrollEntity the fieldTestInfiniteScrollEntity to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated fieldTestInfiniteScrollEntity,
     * or with status {@code 400 (Bad Request)} if the fieldTestInfiniteScrollEntity is not valid,
     * or with status {@code 500 (Internal Server Error)} if the fieldTestInfiniteScrollEntity couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/field-test-infinite-scroll-entities")
    public ResponseEntity<FieldTestInfiniteScrollEntity> updateFieldTestInfiniteScrollEntity(@Valid @RequestBody FieldTestInfiniteScrollEntity fieldTestInfiniteScrollEntity) throws URISyntaxException {
        log.debug("REST request to update FieldTestInfiniteScrollEntity : {}", fieldTestInfiniteScrollEntity);
        if (fieldTestInfiniteScrollEntity.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        FieldTestInfiniteScrollEntity result = fieldTestInfiniteScrollEntityRepository.save(fieldTestInfiniteScrollEntity);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, fieldTestInfiniteScrollEntity.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /field-test-infinite-scroll-entities} : get all the fieldTestInfiniteScrollEntities.
     *

     * @param pageable the pagination information.

     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of fieldTestInfiniteScrollEntities in body.
     */
    @GetMapping("/field-test-infinite-scroll-entities")
    public ResponseEntity<List<FieldTestInfiniteScrollEntity>> getAllFieldTestInfiniteScrollEntities(Pageable pageable) {
        log.debug("REST request to get a page of FieldTestInfiniteScrollEntities");
        Page<FieldTestInfiniteScrollEntity> page = fieldTestInfiniteScrollEntityRepository.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(ServletUriComponentsBuilder.fromCurrentRequest(), page);
        return ResponseEntity.ok().headers(headers).body(page.getContent());
    }

    /**
     * {@code GET  /field-test-infinite-scroll-entities/:id} : get the "id" fieldTestInfiniteScrollEntity.
     *
     * @param id the id of the fieldTestInfiniteScrollEntity to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the fieldTestInfiniteScrollEntity, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/field-test-infinite-scroll-entities/{id}")
    public ResponseEntity<FieldTestInfiniteScrollEntity> getFieldTestInfiniteScrollEntity(@PathVariable Long id) {
        log.debug("REST request to get FieldTestInfiniteScrollEntity : {}", id);
        Optional<FieldTestInfiniteScrollEntity> fieldTestInfiniteScrollEntity = fieldTestInfiniteScrollEntityRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(fieldTestInfiniteScrollEntity);
    }

    /**
     * {@code DELETE  /field-test-infinite-scroll-entities/:id} : delete the "id" fieldTestInfiniteScrollEntity.
     *
     * @param id the id of the fieldTestInfiniteScrollEntity to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/field-test-infinite-scroll-entities/{id}")
    public ResponseEntity<Void> deleteFieldTestInfiniteScrollEntity(@PathVariable Long id) {
        log.debug("REST request to delete FieldTestInfiniteScrollEntity : {}", id);
        fieldTestInfiniteScrollEntityRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
