package io.github.jhipster.travis.web.rest;

import io.github.jhipster.travis.domain.TestInfiniteScroll;
import io.github.jhipster.travis.repository.TestInfiniteScrollRepository;
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
 * REST controller for managing {@link io.github.jhipster.travis.domain.TestInfiniteScroll}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class TestInfiniteScrollResource {

    private final Logger log = LoggerFactory.getLogger(TestInfiniteScrollResource.class);

    private static final String ENTITY_NAME = "testInfiniteScroll";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final TestInfiniteScrollRepository testInfiniteScrollRepository;

    public TestInfiniteScrollResource(TestInfiniteScrollRepository testInfiniteScrollRepository) {
        this.testInfiniteScrollRepository = testInfiniteScrollRepository;
    }

    /**
     * {@code POST  /test-infinite-scrolls} : Create a new testInfiniteScroll.
     *
     * @param testInfiniteScroll the testInfiniteScroll to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new testInfiniteScroll, or with status {@code 400 (Bad Request)} if the testInfiniteScroll has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/test-infinite-scrolls")
    public ResponseEntity<TestInfiniteScroll> createTestInfiniteScroll(@RequestBody TestInfiniteScroll testInfiniteScroll) throws URISyntaxException {
        log.debug("REST request to save TestInfiniteScroll : {}", testInfiniteScroll);
        if (testInfiniteScroll.getId() != null) {
            throw new BadRequestAlertException("A new testInfiniteScroll cannot already have an ID", ENTITY_NAME, "idexists");
        }
        TestInfiniteScroll result = testInfiniteScrollRepository.save(testInfiniteScroll);
        return ResponseEntity.created(new URI("/api/test-infinite-scrolls/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /test-infinite-scrolls} : Updates an existing testInfiniteScroll.
     *
     * @param testInfiniteScroll the testInfiniteScroll to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated testInfiniteScroll,
     * or with status {@code 400 (Bad Request)} if the testInfiniteScroll is not valid,
     * or with status {@code 500 (Internal Server Error)} if the testInfiniteScroll couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/test-infinite-scrolls")
    public ResponseEntity<TestInfiniteScroll> updateTestInfiniteScroll(@RequestBody TestInfiniteScroll testInfiniteScroll) throws URISyntaxException {
        log.debug("REST request to update TestInfiniteScroll : {}", testInfiniteScroll);
        if (testInfiniteScroll.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        TestInfiniteScroll result = testInfiniteScrollRepository.save(testInfiniteScroll);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, testInfiniteScroll.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /test-infinite-scrolls} : get all the testInfiniteScrolls.
     *

     * @param pageable the pagination information.
     * @param eagerload flag to eager load entities from relationships (This is applicable for many-to-many).
     * @param filter the filter of the request.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of testInfiniteScrolls in body.
     */
    @GetMapping("/test-infinite-scrolls")
    public ResponseEntity<List<TestInfiniteScroll>> getAllTestInfiniteScrolls(Pageable pageable, @RequestParam(required = false) String filter, @RequestParam(required = false, defaultValue = "false") boolean eagerload) {
        if ("testonetoone-is-null".equals(filter)) {
            log.debug("REST request to get all TestInfiniteScrolls where testOneToOne is null");
            return new ResponseEntity<>(StreamSupport
                .stream(testInfiniteScrollRepository.findAll().spliterator(), false)
                .filter(testInfiniteScroll -> testInfiniteScroll.getTestOneToOne() == null)
                .collect(Collectors.toList()), HttpStatus.OK);
        }
        log.debug("REST request to get a page of TestInfiniteScrolls");
        Page<TestInfiniteScroll> page;
        if (eagerload) {
            page = testInfiniteScrollRepository.findAllWithEagerRelationships(pageable);
        } else {
            page = testInfiniteScrollRepository.findAll(pageable);
        }
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(ServletUriComponentsBuilder.fromCurrentRequest(), page);
        return ResponseEntity.ok().headers(headers).body(page.getContent());
    }

    /**
     * {@code GET  /test-infinite-scrolls/:id} : get the "id" testInfiniteScroll.
     *
     * @param id the id of the testInfiniteScroll to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the testInfiniteScroll, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/test-infinite-scrolls/{id}")
    public ResponseEntity<TestInfiniteScroll> getTestInfiniteScroll(@PathVariable Long id) {
        log.debug("REST request to get TestInfiniteScroll : {}", id);
        Optional<TestInfiniteScroll> testInfiniteScroll = testInfiniteScrollRepository.findOneWithEagerRelationships(id);
        return ResponseUtil.wrapOrNotFound(testInfiniteScroll);
    }

    /**
     * {@code DELETE  /test-infinite-scrolls/:id} : delete the "id" testInfiniteScroll.
     *
     * @param id the id of the testInfiniteScroll to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/test-infinite-scrolls/{id}")
    public ResponseEntity<Void> deleteTestInfiniteScroll(@PathVariable Long id) {
        log.debug("REST request to delete TestInfiniteScroll : {}", id);
        testInfiniteScrollRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
