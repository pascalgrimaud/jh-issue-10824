package io.github.jhipster.travis.web.rest;

import io.github.jhipster.travis.domain.TestPagination;
import io.github.jhipster.travis.repository.TestPaginationRepository;
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

import java.net.URI;
import java.net.URISyntaxException;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

/**
 * REST controller for managing {@link io.github.jhipster.travis.domain.TestPagination}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class TestPaginationResource {

    private final Logger log = LoggerFactory.getLogger(TestPaginationResource.class);

    private static final String ENTITY_NAME = "testPagination";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final TestPaginationRepository testPaginationRepository;

    public TestPaginationResource(TestPaginationRepository testPaginationRepository) {
        this.testPaginationRepository = testPaginationRepository;
    }

    /**
     * {@code POST  /test-paginations} : Create a new testPagination.
     *
     * @param testPagination the testPagination to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new testPagination, or with status {@code 400 (Bad Request)} if the testPagination has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/test-paginations")
    public ResponseEntity<TestPagination> createTestPagination(@RequestBody TestPagination testPagination) throws URISyntaxException {
        log.debug("REST request to save TestPagination : {}", testPagination);
        if (testPagination.getId() != null) {
            throw new BadRequestAlertException("A new testPagination cannot already have an ID", ENTITY_NAME, "idexists");
        }
        TestPagination result = testPaginationRepository.save(testPagination);
        return ResponseEntity.created(new URI("/api/test-paginations/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /test-paginations} : Updates an existing testPagination.
     *
     * @param testPagination the testPagination to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated testPagination,
     * or with status {@code 400 (Bad Request)} if the testPagination is not valid,
     * or with status {@code 500 (Internal Server Error)} if the testPagination couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/test-paginations")
    public ResponseEntity<TestPagination> updateTestPagination(@RequestBody TestPagination testPagination) throws URISyntaxException {
        log.debug("REST request to update TestPagination : {}", testPagination);
        if (testPagination.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        TestPagination result = testPaginationRepository.save(testPagination);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, testPagination.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /test-paginations} : get all the testPaginations.
     *

     * @param pageable the pagination information.
     * @param eagerload flag to eager load entities from relationships (This is applicable for many-to-many).
     * @param filter the filter of the request.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of testPaginations in body.
     */
    @GetMapping("/test-paginations")
    public ResponseEntity<List<TestPagination>> getAllTestPaginations(Pageable pageable, @RequestParam(required = false) String filter, @RequestParam(required = false, defaultValue = "false") boolean eagerload) {
        if ("testonetoone-is-null".equals(filter)) {
            log.debug("REST request to get all TestPaginations where testOneToOne is null");
            return new ResponseEntity<>(StreamSupport
                .stream(testPaginationRepository.findAll().spliterator(), false)
                .filter(testPagination -> testPagination.getTestOneToOne() == null)
                .collect(Collectors.toList()), HttpStatus.OK);
        }
        log.debug("REST request to get a page of TestPaginations");
        Page<TestPagination> page;
        if (eagerload) {
            page = testPaginationRepository.findAllWithEagerRelationships(pageable);
        } else {
            page = testPaginationRepository.findAll(pageable);
        }
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(ServletUriComponentsBuilder.fromCurrentRequest(), page);
        return ResponseEntity.ok().headers(headers).body(page.getContent());
    }

    /**
     * {@code GET  /test-paginations/:id} : get the "id" testPagination.
     *
     * @param id the id of the testPagination to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the testPagination, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/test-paginations/{id}")
    public ResponseEntity<TestPagination> getTestPagination(@PathVariable Long id) {
        log.debug("REST request to get TestPagination : {}", id);
        Optional<TestPagination> testPagination = testPaginationRepository.findOneWithEagerRelationships(id);
        return ResponseUtil.wrapOrNotFound(testPagination);
    }

    /**
     * {@code DELETE  /test-paginations/:id} : delete the "id" testPagination.
     *
     * @param id the id of the testPagination to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/test-paginations/{id}")
    public ResponseEntity<Void> deleteTestPagination(@PathVariable Long id) {
        log.debug("REST request to delete TestPagination : {}", id);
        testPaginationRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
