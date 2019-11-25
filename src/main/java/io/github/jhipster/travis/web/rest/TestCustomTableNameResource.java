package io.github.jhipster.travis.web.rest;

import io.github.jhipster.travis.domain.TestCustomTableName;
import io.github.jhipster.travis.repository.TestCustomTableNameRepository;
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
 * REST controller for managing {@link io.github.jhipster.travis.domain.TestCustomTableName}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class TestCustomTableNameResource {

    private final Logger log = LoggerFactory.getLogger(TestCustomTableNameResource.class);

    private static final String ENTITY_NAME = "testCustomTableName";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final TestCustomTableNameRepository testCustomTableNameRepository;

    public TestCustomTableNameResource(TestCustomTableNameRepository testCustomTableNameRepository) {
        this.testCustomTableNameRepository = testCustomTableNameRepository;
    }

    /**
     * {@code POST  /test-custom-table-names} : Create a new testCustomTableName.
     *
     * @param testCustomTableName the testCustomTableName to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new testCustomTableName, or with status {@code 400 (Bad Request)} if the testCustomTableName has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/test-custom-table-names")
    public ResponseEntity<TestCustomTableName> createTestCustomTableName(@Valid @RequestBody TestCustomTableName testCustomTableName) throws URISyntaxException {
        log.debug("REST request to save TestCustomTableName : {}", testCustomTableName);
        if (testCustomTableName.getId() != null) {
            throw new BadRequestAlertException("A new testCustomTableName cannot already have an ID", ENTITY_NAME, "idexists");
        }
        TestCustomTableName result = testCustomTableNameRepository.save(testCustomTableName);
        return ResponseEntity.created(new URI("/api/test-custom-table-names/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /test-custom-table-names} : Updates an existing testCustomTableName.
     *
     * @param testCustomTableName the testCustomTableName to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated testCustomTableName,
     * or with status {@code 400 (Bad Request)} if the testCustomTableName is not valid,
     * or with status {@code 500 (Internal Server Error)} if the testCustomTableName couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/test-custom-table-names")
    public ResponseEntity<TestCustomTableName> updateTestCustomTableName(@Valid @RequestBody TestCustomTableName testCustomTableName) throws URISyntaxException {
        log.debug("REST request to update TestCustomTableName : {}", testCustomTableName);
        if (testCustomTableName.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        TestCustomTableName result = testCustomTableNameRepository.save(testCustomTableName);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, testCustomTableName.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /test-custom-table-names} : get all the testCustomTableNames.
     *
     * @param eagerload flag to eager load entities from relationships (This is applicable for many-to-many).
     * @param filter the filter of the request.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of testCustomTableNames in body.
     */
    @GetMapping("/test-custom-table-names")
    public List<TestCustomTableName> getAllTestCustomTableNames(@RequestParam(required = false) String filter,@RequestParam(required = false, defaultValue = "false") boolean eagerload) {
        if ("testonetoone-is-null".equals(filter)) {
            log.debug("REST request to get all TestCustomTableNames where testOneToOne is null");
            return StreamSupport
                .stream(testCustomTableNameRepository.findAll().spliterator(), false)
                .filter(testCustomTableName -> testCustomTableName.getTestOneToOne() == null)
                .collect(Collectors.toList());
        }
        log.debug("REST request to get all TestCustomTableNames");
        return testCustomTableNameRepository.findAllWithEagerRelationships();
    }

    /**
     * {@code GET  /test-custom-table-names/:id} : get the "id" testCustomTableName.
     *
     * @param id the id of the testCustomTableName to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the testCustomTableName, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/test-custom-table-names/{id}")
    public ResponseEntity<TestCustomTableName> getTestCustomTableName(@PathVariable Long id) {
        log.debug("REST request to get TestCustomTableName : {}", id);
        Optional<TestCustomTableName> testCustomTableName = testCustomTableNameRepository.findOneWithEagerRelationships(id);
        return ResponseUtil.wrapOrNotFound(testCustomTableName);
    }

    /**
     * {@code DELETE  /test-custom-table-names/:id} : delete the "id" testCustomTableName.
     *
     * @param id the id of the testCustomTableName to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/test-custom-table-names/{id}")
    public ResponseEntity<Void> deleteTestCustomTableName(@PathVariable Long id) {
        log.debug("REST request to delete TestCustomTableName : {}", id);
        testCustomTableNameRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
