package io.github.jhipster.travis.web.rest;

import io.github.jhipster.travis.domain.TestManyToMany;
import io.github.jhipster.travis.repository.TestManyToManyRepository;
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
 * REST controller for managing {@link io.github.jhipster.travis.domain.TestManyToMany}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class TestManyToManyResource {

    private final Logger log = LoggerFactory.getLogger(TestManyToManyResource.class);

    private static final String ENTITY_NAME = "testManyToMany";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final TestManyToManyRepository testManyToManyRepository;

    public TestManyToManyResource(TestManyToManyRepository testManyToManyRepository) {
        this.testManyToManyRepository = testManyToManyRepository;
    }

    /**
     * {@code POST  /test-many-to-manies} : Create a new testManyToMany.
     *
     * @param testManyToMany the testManyToMany to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new testManyToMany, or with status {@code 400 (Bad Request)} if the testManyToMany has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/test-many-to-manies")
    public ResponseEntity<TestManyToMany> createTestManyToMany(@RequestBody TestManyToMany testManyToMany) throws URISyntaxException {
        log.debug("REST request to save TestManyToMany : {}", testManyToMany);
        if (testManyToMany.getId() != null) {
            throw new BadRequestAlertException("A new testManyToMany cannot already have an ID", ENTITY_NAME, "idexists");
        }
        TestManyToMany result = testManyToManyRepository.save(testManyToMany);
        return ResponseEntity.created(new URI("/api/test-many-to-manies/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /test-many-to-manies} : Updates an existing testManyToMany.
     *
     * @param testManyToMany the testManyToMany to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated testManyToMany,
     * or with status {@code 400 (Bad Request)} if the testManyToMany is not valid,
     * or with status {@code 500 (Internal Server Error)} if the testManyToMany couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/test-many-to-manies")
    public ResponseEntity<TestManyToMany> updateTestManyToMany(@RequestBody TestManyToMany testManyToMany) throws URISyntaxException {
        log.debug("REST request to update TestManyToMany : {}", testManyToMany);
        if (testManyToMany.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        TestManyToMany result = testManyToManyRepository.save(testManyToMany);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, testManyToMany.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /test-many-to-manies} : get all the testManyToManies.
     *
     * @param eagerload flag to eager load entities from relationships (This is applicable for many-to-many).
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of testManyToManies in body.
     */
    @GetMapping("/test-many-to-manies")
    public List<TestManyToMany> getAllTestManyToManies(@RequestParam(required = false, defaultValue = "false") boolean eagerload) {
        log.debug("REST request to get all TestManyToManies");
        return testManyToManyRepository.findAllWithEagerRelationships();
    }

    /**
     * {@code GET  /test-many-to-manies/:id} : get the "id" testManyToMany.
     *
     * @param id the id of the testManyToMany to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the testManyToMany, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/test-many-to-manies/{id}")
    public ResponseEntity<TestManyToMany> getTestManyToMany(@PathVariable Long id) {
        log.debug("REST request to get TestManyToMany : {}", id);
        Optional<TestManyToMany> testManyToMany = testManyToManyRepository.findOneWithEagerRelationships(id);
        return ResponseUtil.wrapOrNotFound(testManyToMany);
    }

    /**
     * {@code DELETE  /test-many-to-manies/:id} : delete the "id" testManyToMany.
     *
     * @param id the id of the testManyToMany to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/test-many-to-manies/{id}")
    public ResponseEntity<Void> deleteTestManyToMany(@PathVariable Long id) {
        log.debug("REST request to delete TestManyToMany : {}", id);
        testManyToManyRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
