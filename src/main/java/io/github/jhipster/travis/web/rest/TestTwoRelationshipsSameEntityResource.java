package io.github.jhipster.travis.web.rest;

import io.github.jhipster.travis.domain.TestTwoRelationshipsSameEntity;
import io.github.jhipster.travis.repository.TestTwoRelationshipsSameEntityRepository;
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
 * REST controller for managing {@link io.github.jhipster.travis.domain.TestTwoRelationshipsSameEntity}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class TestTwoRelationshipsSameEntityResource {

    private final Logger log = LoggerFactory.getLogger(TestTwoRelationshipsSameEntityResource.class);

    private static final String ENTITY_NAME = "testTwoRelationshipsSameEntity";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final TestTwoRelationshipsSameEntityRepository testTwoRelationshipsSameEntityRepository;

    public TestTwoRelationshipsSameEntityResource(TestTwoRelationshipsSameEntityRepository testTwoRelationshipsSameEntityRepository) {
        this.testTwoRelationshipsSameEntityRepository = testTwoRelationshipsSameEntityRepository;
    }

    /**
     * {@code POST  /test-two-relationships-same-entities} : Create a new testTwoRelationshipsSameEntity.
     *
     * @param testTwoRelationshipsSameEntity the testTwoRelationshipsSameEntity to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new testTwoRelationshipsSameEntity, or with status {@code 400 (Bad Request)} if the testTwoRelationshipsSameEntity has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/test-two-relationships-same-entities")
    public ResponseEntity<TestTwoRelationshipsSameEntity> createTestTwoRelationshipsSameEntity(@Valid @RequestBody TestTwoRelationshipsSameEntity testTwoRelationshipsSameEntity) throws URISyntaxException {
        log.debug("REST request to save TestTwoRelationshipsSameEntity : {}", testTwoRelationshipsSameEntity);
        if (testTwoRelationshipsSameEntity.getId() != null) {
            throw new BadRequestAlertException("A new testTwoRelationshipsSameEntity cannot already have an ID", ENTITY_NAME, "idexists");
        }
        TestTwoRelationshipsSameEntity result = testTwoRelationshipsSameEntityRepository.save(testTwoRelationshipsSameEntity);
        return ResponseEntity.created(new URI("/api/test-two-relationships-same-entities/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /test-two-relationships-same-entities} : Updates an existing testTwoRelationshipsSameEntity.
     *
     * @param testTwoRelationshipsSameEntity the testTwoRelationshipsSameEntity to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated testTwoRelationshipsSameEntity,
     * or with status {@code 400 (Bad Request)} if the testTwoRelationshipsSameEntity is not valid,
     * or with status {@code 500 (Internal Server Error)} if the testTwoRelationshipsSameEntity couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/test-two-relationships-same-entities")
    public ResponseEntity<TestTwoRelationshipsSameEntity> updateTestTwoRelationshipsSameEntity(@Valid @RequestBody TestTwoRelationshipsSameEntity testTwoRelationshipsSameEntity) throws URISyntaxException {
        log.debug("REST request to update TestTwoRelationshipsSameEntity : {}", testTwoRelationshipsSameEntity);
        if (testTwoRelationshipsSameEntity.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        TestTwoRelationshipsSameEntity result = testTwoRelationshipsSameEntityRepository.save(testTwoRelationshipsSameEntity);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, testTwoRelationshipsSameEntity.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /test-two-relationships-same-entities} : get all the testTwoRelationshipsSameEntities.
     *

     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of testTwoRelationshipsSameEntities in body.
     */
    @GetMapping("/test-two-relationships-same-entities")
    public List<TestTwoRelationshipsSameEntity> getAllTestTwoRelationshipsSameEntities() {
        log.debug("REST request to get all TestTwoRelationshipsSameEntities");
        return testTwoRelationshipsSameEntityRepository.findAll();
    }

    /**
     * {@code GET  /test-two-relationships-same-entities/:id} : get the "id" testTwoRelationshipsSameEntity.
     *
     * @param id the id of the testTwoRelationshipsSameEntity to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the testTwoRelationshipsSameEntity, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/test-two-relationships-same-entities/{id}")
    public ResponseEntity<TestTwoRelationshipsSameEntity> getTestTwoRelationshipsSameEntity(@PathVariable Long id) {
        log.debug("REST request to get TestTwoRelationshipsSameEntity : {}", id);
        Optional<TestTwoRelationshipsSameEntity> testTwoRelationshipsSameEntity = testTwoRelationshipsSameEntityRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(testTwoRelationshipsSameEntity);
    }

    /**
     * {@code DELETE  /test-two-relationships-same-entities/:id} : delete the "id" testTwoRelationshipsSameEntity.
     *
     * @param id the id of the testTwoRelationshipsSameEntity to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/test-two-relationships-same-entities/{id}")
    public ResponseEntity<Void> deleteTestTwoRelationshipsSameEntity(@PathVariable Long id) {
        log.debug("REST request to delete TestTwoRelationshipsSameEntity : {}", id);
        testTwoRelationshipsSameEntityRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
