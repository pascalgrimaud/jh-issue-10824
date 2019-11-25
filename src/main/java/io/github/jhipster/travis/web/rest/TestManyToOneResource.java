package io.github.jhipster.travis.web.rest;

import io.github.jhipster.travis.domain.TestManyToOne;
import io.github.jhipster.travis.repository.TestManyToOneRepository;
import io.github.jhipster.travis.web.rest.errors.BadRequestAlertException;

import io.github.jhipster.web.util.HeaderUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional; 
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;

import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing {@link io.github.jhipster.travis.domain.TestManyToOne}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class TestManyToOneResource {

    private final Logger log = LoggerFactory.getLogger(TestManyToOneResource.class);

    private static final String ENTITY_NAME = "testManyToOne";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final TestManyToOneRepository testManyToOneRepository;

    public TestManyToOneResource(TestManyToOneRepository testManyToOneRepository) {
        this.testManyToOneRepository = testManyToOneRepository;
    }

    /**
     * {@code POST  /test-many-to-ones} : Create a new testManyToOne.
     *
     * @param testManyToOne the testManyToOne to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new testManyToOne, or with status {@code 400 (Bad Request)} if the testManyToOne has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/test-many-to-ones")
    public ResponseEntity<TestManyToOne> createTestManyToOne(@RequestBody TestManyToOne testManyToOne) throws URISyntaxException {
        log.debug("REST request to save TestManyToOne : {}", testManyToOne);
        if (testManyToOne.getId() != null) {
            throw new BadRequestAlertException("A new testManyToOne cannot already have an ID", ENTITY_NAME, "idexists");
        }
        TestManyToOne result = testManyToOneRepository.save(testManyToOne);
        return ResponseEntity.created(new URI("/api/test-many-to-ones/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /test-many-to-ones} : Updates an existing testManyToOne.
     *
     * @param testManyToOne the testManyToOne to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated testManyToOne,
     * or with status {@code 400 (Bad Request)} if the testManyToOne is not valid,
     * or with status {@code 500 (Internal Server Error)} if the testManyToOne couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/test-many-to-ones")
    public ResponseEntity<TestManyToOne> updateTestManyToOne(@RequestBody TestManyToOne testManyToOne) throws URISyntaxException {
        log.debug("REST request to update TestManyToOne : {}", testManyToOne);
        if (testManyToOne.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        TestManyToOne result = testManyToOneRepository.save(testManyToOne);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, testManyToOne.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /test-many-to-ones} : get all the testManyToOnes.
     *

     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of testManyToOnes in body.
     */
    @GetMapping("/test-many-to-ones")
    public List<TestManyToOne> getAllTestManyToOnes() {
        log.debug("REST request to get all TestManyToOnes");
        return testManyToOneRepository.findAll();
    }

    /**
     * {@code GET  /test-many-to-ones/:id} : get the "id" testManyToOne.
     *
     * @param id the id of the testManyToOne to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the testManyToOne, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/test-many-to-ones/{id}")
    public ResponseEntity<TestManyToOne> getTestManyToOne(@PathVariable Long id) {
        log.debug("REST request to get TestManyToOne : {}", id);
        Optional<TestManyToOne> testManyToOne = testManyToOneRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(testManyToOne);
    }

    /**
     * {@code DELETE  /test-many-to-ones/:id} : delete the "id" testManyToOne.
     *
     * @param id the id of the testManyToOne to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/test-many-to-ones/{id}")
    public ResponseEntity<Void> deleteTestManyToOne(@PathVariable Long id) {
        log.debug("REST request to delete TestManyToOne : {}", id);
        testManyToOneRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
