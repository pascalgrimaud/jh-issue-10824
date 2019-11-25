package io.github.jhipster.travis.web.rest;

import io.github.jhipster.travis.domain.TestServiceImpl;
import io.github.jhipster.travis.service.TestServiceImplService;
import io.github.jhipster.travis.web.rest.errors.BadRequestAlertException;
import io.github.jhipster.travis.service.dto.TestServiceImplCriteria;
import io.github.jhipster.travis.service.TestServiceImplQueryService;

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
 * REST controller for managing {@link io.github.jhipster.travis.domain.TestServiceImpl}.
 */
@RestController
@RequestMapping("/api")
public class TestServiceImplResource {

    private final Logger log = LoggerFactory.getLogger(TestServiceImplResource.class);

    private static final String ENTITY_NAME = "testServiceImpl";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final TestServiceImplService testServiceImplService;

    private final TestServiceImplQueryService testServiceImplQueryService;

    public TestServiceImplResource(TestServiceImplService testServiceImplService, TestServiceImplQueryService testServiceImplQueryService) {
        this.testServiceImplService = testServiceImplService;
        this.testServiceImplQueryService = testServiceImplQueryService;
    }

    /**
     * {@code POST  /test-service-impls} : Create a new testServiceImpl.
     *
     * @param testServiceImpl the testServiceImpl to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new testServiceImpl, or with status {@code 400 (Bad Request)} if the testServiceImpl has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/test-service-impls")
    public ResponseEntity<TestServiceImpl> createTestServiceImpl(@RequestBody TestServiceImpl testServiceImpl) throws URISyntaxException {
        log.debug("REST request to save TestServiceImpl : {}", testServiceImpl);
        if (testServiceImpl.getId() != null) {
            throw new BadRequestAlertException("A new testServiceImpl cannot already have an ID", ENTITY_NAME, "idexists");
        }
        TestServiceImpl result = testServiceImplService.save(testServiceImpl);
        return ResponseEntity.created(new URI("/api/test-service-impls/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /test-service-impls} : Updates an existing testServiceImpl.
     *
     * @param testServiceImpl the testServiceImpl to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated testServiceImpl,
     * or with status {@code 400 (Bad Request)} if the testServiceImpl is not valid,
     * or with status {@code 500 (Internal Server Error)} if the testServiceImpl couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/test-service-impls")
    public ResponseEntity<TestServiceImpl> updateTestServiceImpl(@RequestBody TestServiceImpl testServiceImpl) throws URISyntaxException {
        log.debug("REST request to update TestServiceImpl : {}", testServiceImpl);
        if (testServiceImpl.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        TestServiceImpl result = testServiceImplService.save(testServiceImpl);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, testServiceImpl.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /test-service-impls} : get all the testServiceImpls.
     *

     * @param criteria the criteria which the requested entities should match.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of testServiceImpls in body.
     */
    @GetMapping("/test-service-impls")
    public ResponseEntity<List<TestServiceImpl>> getAllTestServiceImpls(TestServiceImplCriteria criteria) {
        log.debug("REST request to get TestServiceImpls by criteria: {}", criteria);
        List<TestServiceImpl> entityList = testServiceImplQueryService.findByCriteria(criteria);
        return ResponseEntity.ok().body(entityList);
    }

    /**
    * {@code GET  /test-service-impls/count} : count all the testServiceImpls.
    *
    * @param criteria the criteria which the requested entities should match.
    * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the count in body.
    */
    @GetMapping("/test-service-impls/count")
    public ResponseEntity<Long> countTestServiceImpls(TestServiceImplCriteria criteria) {
        log.debug("REST request to count TestServiceImpls by criteria: {}", criteria);
        return ResponseEntity.ok().body(testServiceImplQueryService.countByCriteria(criteria));
    }

    /**
     * {@code GET  /test-service-impls/:id} : get the "id" testServiceImpl.
     *
     * @param id the id of the testServiceImpl to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the testServiceImpl, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/test-service-impls/{id}")
    public ResponseEntity<TestServiceImpl> getTestServiceImpl(@PathVariable Long id) {
        log.debug("REST request to get TestServiceImpl : {}", id);
        Optional<TestServiceImpl> testServiceImpl = testServiceImplService.findOne(id);
        return ResponseUtil.wrapOrNotFound(testServiceImpl);
    }

    /**
     * {@code DELETE  /test-service-impls/:id} : delete the "id" testServiceImpl.
     *
     * @param id the id of the testServiceImpl to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/test-service-impls/{id}")
    public ResponseEntity<Void> deleteTestServiceImpl(@PathVariable Long id) {
        log.debug("REST request to delete TestServiceImpl : {}", id);
        testServiceImplService.delete(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
