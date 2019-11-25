package io.github.jhipster.travis.web.rest;

import io.github.jhipster.travis.domain.TestServiceClass;
import io.github.jhipster.travis.service.TestServiceClassService;
import io.github.jhipster.travis.web.rest.errors.BadRequestAlertException;
import io.github.jhipster.travis.service.dto.TestServiceClassCriteria;
import io.github.jhipster.travis.service.TestServiceClassQueryService;

import io.github.jhipster.web.util.HeaderUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;

import java.util.List;
import java.util.Optional;
import java.util.stream.StreamSupport;

/**
 * REST controller for managing {@link io.github.jhipster.travis.domain.TestServiceClass}.
 */
@RestController
@RequestMapping("/api")
public class TestServiceClassResource {

    private final Logger log = LoggerFactory.getLogger(TestServiceClassResource.class);

    private static final String ENTITY_NAME = "testServiceClass";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final TestServiceClassService testServiceClassService;

    private final TestServiceClassQueryService testServiceClassQueryService;

    public TestServiceClassResource(TestServiceClassService testServiceClassService, TestServiceClassQueryService testServiceClassQueryService) {
        this.testServiceClassService = testServiceClassService;
        this.testServiceClassQueryService = testServiceClassQueryService;
    }

    /**
     * {@code POST  /test-service-classes} : Create a new testServiceClass.
     *
     * @param testServiceClass the testServiceClass to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new testServiceClass, or with status {@code 400 (Bad Request)} if the testServiceClass has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/test-service-classes")
    public ResponseEntity<TestServiceClass> createTestServiceClass(@RequestBody TestServiceClass testServiceClass) throws URISyntaxException {
        log.debug("REST request to save TestServiceClass : {}", testServiceClass);
        if (testServiceClass.getId() != null) {
            throw new BadRequestAlertException("A new testServiceClass cannot already have an ID", ENTITY_NAME, "idexists");
        }
        TestServiceClass result = testServiceClassService.save(testServiceClass);
        return ResponseEntity.created(new URI("/api/test-service-classes/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /test-service-classes} : Updates an existing testServiceClass.
     *
     * @param testServiceClass the testServiceClass to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated testServiceClass,
     * or with status {@code 400 (Bad Request)} if the testServiceClass is not valid,
     * or with status {@code 500 (Internal Server Error)} if the testServiceClass couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/test-service-classes")
    public ResponseEntity<TestServiceClass> updateTestServiceClass(@RequestBody TestServiceClass testServiceClass) throws URISyntaxException {
        log.debug("REST request to update TestServiceClass : {}", testServiceClass);
        if (testServiceClass.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        TestServiceClass result = testServiceClassService.save(testServiceClass);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, testServiceClass.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /test-service-classes} : get all the testServiceClasses.
     *

     * @param criteria the criteria which the requested entities should match.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of testServiceClasses in body.
     */
    @GetMapping("/test-service-classes")
    public ResponseEntity<List<TestServiceClass>> getAllTestServiceClasses(TestServiceClassCriteria criteria) {
        log.debug("REST request to get TestServiceClasses by criteria: {}", criteria);
        List<TestServiceClass> entityList = testServiceClassQueryService.findByCriteria(criteria);
        return ResponseEntity.ok().body(entityList);
    }

    /**
    * {@code GET  /test-service-classes/count} : count all the testServiceClasses.
    *
    * @param criteria the criteria which the requested entities should match.
    * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the count in body.
    */
    @GetMapping("/test-service-classes/count")
    public ResponseEntity<Long> countTestServiceClasses(TestServiceClassCriteria criteria) {
        log.debug("REST request to count TestServiceClasses by criteria: {}", criteria);
        return ResponseEntity.ok().body(testServiceClassQueryService.countByCriteria(criteria));
    }

    /**
     * {@code GET  /test-service-classes/:id} : get the "id" testServiceClass.
     *
     * @param id the id of the testServiceClass to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the testServiceClass, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/test-service-classes/{id}")
    public ResponseEntity<TestServiceClass> getTestServiceClass(@PathVariable Long id) {
        log.debug("REST request to get TestServiceClass : {}", id);
        Optional<TestServiceClass> testServiceClass = testServiceClassService.findOne(id);
        return ResponseUtil.wrapOrNotFound(testServiceClass);
    }

    /**
     * {@code DELETE  /test-service-classes/:id} : delete the "id" testServiceClass.
     *
     * @param id the id of the testServiceClass to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/test-service-classes/{id}")
    public ResponseEntity<Void> deleteTestServiceClass(@PathVariable Long id) {
        log.debug("REST request to delete TestServiceClass : {}", id);
        testServiceClassService.delete(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
