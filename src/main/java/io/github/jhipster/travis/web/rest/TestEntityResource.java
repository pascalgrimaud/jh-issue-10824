package io.github.jhipster.travis.web.rest;

import io.github.jhipster.travis.domain.TestEntity;
import io.github.jhipster.travis.repository.TestEntityRepository;
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
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

/**
 * REST controller for managing {@link io.github.jhipster.travis.domain.TestEntity}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class TestEntityResource {

    private final Logger log = LoggerFactory.getLogger(TestEntityResource.class);

    private static final String ENTITY_NAME = "testEntity";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final TestEntityRepository testEntityRepository;

    public TestEntityResource(TestEntityRepository testEntityRepository) {
        this.testEntityRepository = testEntityRepository;
    }

    /**
     * {@code POST  /test-entities} : Create a new testEntity.
     *
     * @param testEntity the testEntity to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new testEntity, or with status {@code 400 (Bad Request)} if the testEntity has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/test-entities")
    public ResponseEntity<TestEntity> createTestEntity(@Valid @RequestBody TestEntity testEntity) throws URISyntaxException {
        log.debug("REST request to save TestEntity : {}", testEntity);
        if (testEntity.getId() != null) {
            throw new BadRequestAlertException("A new testEntity cannot already have an ID", ENTITY_NAME, "idexists");
        }
        TestEntity result = testEntityRepository.save(testEntity);
        return ResponseEntity.created(new URI("/api/test-entities/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /test-entities} : Updates an existing testEntity.
     *
     * @param testEntity the testEntity to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated testEntity,
     * or with status {@code 400 (Bad Request)} if the testEntity is not valid,
     * or with status {@code 500 (Internal Server Error)} if the testEntity couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/test-entities")
    public ResponseEntity<TestEntity> updateTestEntity(@Valid @RequestBody TestEntity testEntity) throws URISyntaxException {
        log.debug("REST request to update TestEntity : {}", testEntity);
        if (testEntity.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        TestEntity result = testEntityRepository.save(testEntity);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, testEntity.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /test-entities} : get all the testEntities.
     *
     * @param eagerload flag to eager load entities from relationships (This is applicable for many-to-many).
     * @param filter the filter of the request.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of testEntities in body.
     */
    @GetMapping("/test-entities")
    public List<TestEntity> getAllTestEntities(@RequestParam(required = false) String filter,@RequestParam(required = false, defaultValue = "false") boolean eagerload) {
        if ("testonetoone-is-null".equals(filter)) {
            log.debug("REST request to get all TestEntitys where testOneToOne is null");
            return StreamSupport
                .stream(testEntityRepository.findAll().spliterator(), false)
                .filter(testEntity -> testEntity.getTestOneToOne() == null)
                .collect(Collectors.toList());
        }
        log.debug("REST request to get all TestEntities");
        return testEntityRepository.findAllWithEagerRelationships();
    }

    /**
     * {@code GET  /test-entities/:id} : get the "id" testEntity.
     *
     * @param id the id of the testEntity to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the testEntity, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/test-entities/{id}")
    public ResponseEntity<TestEntity> getTestEntity(@PathVariable Long id) {
        log.debug("REST request to get TestEntity : {}", id);
        Optional<TestEntity> testEntity = testEntityRepository.findOneWithEagerRelationships(id);
        return ResponseUtil.wrapOrNotFound(testEntity);
    }

    /**
     * {@code DELETE  /test-entities/:id} : delete the "id" testEntity.
     *
     * @param id the id of the testEntity to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/test-entities/{id}")
    public ResponseEntity<Void> deleteTestEntity(@PathVariable Long id) {
        log.debug("REST request to delete TestEntity : {}", id);
        testEntityRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
