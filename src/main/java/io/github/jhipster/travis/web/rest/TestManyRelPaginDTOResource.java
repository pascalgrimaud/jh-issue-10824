package io.github.jhipster.travis.web.rest;

import io.github.jhipster.travis.service.TestManyRelPaginDTOService;
import io.github.jhipster.travis.web.rest.errors.BadRequestAlertException;
import io.github.jhipster.travis.service.dto.TestManyRelPaginDTODTO;

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
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;

import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing {@link io.github.jhipster.travis.domain.TestManyRelPaginDTO}.
 */
@RestController
@RequestMapping("/api")
public class TestManyRelPaginDTOResource {

    private final Logger log = LoggerFactory.getLogger(TestManyRelPaginDTOResource.class);

    private static final String ENTITY_NAME = "testManyRelPaginDTO";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final TestManyRelPaginDTOService testManyRelPaginDTOService;

    public TestManyRelPaginDTOResource(TestManyRelPaginDTOService testManyRelPaginDTOService) {
        this.testManyRelPaginDTOService = testManyRelPaginDTOService;
    }

    /**
     * {@code POST  /test-many-rel-pagin-dtos} : Create a new testManyRelPaginDTO.
     *
     * @param testManyRelPaginDTODTO the testManyRelPaginDTODTO to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new testManyRelPaginDTODTO, or with status {@code 400 (Bad Request)} if the testManyRelPaginDTO has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/test-many-rel-pagin-dtos")
    public ResponseEntity<TestManyRelPaginDTODTO> createTestManyRelPaginDTO(@RequestBody TestManyRelPaginDTODTO testManyRelPaginDTODTO) throws URISyntaxException {
        log.debug("REST request to save TestManyRelPaginDTO : {}", testManyRelPaginDTODTO);
        if (testManyRelPaginDTODTO.getId() != null) {
            throw new BadRequestAlertException("A new testManyRelPaginDTO cannot already have an ID", ENTITY_NAME, "idexists");
        }
        TestManyRelPaginDTODTO result = testManyRelPaginDTOService.save(testManyRelPaginDTODTO);
        return ResponseEntity.created(new URI("/api/test-many-rel-pagin-dtos/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /test-many-rel-pagin-dtos} : Updates an existing testManyRelPaginDTO.
     *
     * @param testManyRelPaginDTODTO the testManyRelPaginDTODTO to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated testManyRelPaginDTODTO,
     * or with status {@code 400 (Bad Request)} if the testManyRelPaginDTODTO is not valid,
     * or with status {@code 500 (Internal Server Error)} if the testManyRelPaginDTODTO couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/test-many-rel-pagin-dtos")
    public ResponseEntity<TestManyRelPaginDTODTO> updateTestManyRelPaginDTO(@RequestBody TestManyRelPaginDTODTO testManyRelPaginDTODTO) throws URISyntaxException {
        log.debug("REST request to update TestManyRelPaginDTO : {}", testManyRelPaginDTODTO);
        if (testManyRelPaginDTODTO.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        TestManyRelPaginDTODTO result = testManyRelPaginDTOService.save(testManyRelPaginDTODTO);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, testManyRelPaginDTODTO.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /test-many-rel-pagin-dtos} : get all the testManyRelPaginDTOS.
     *

     * @param pageable the pagination information.
     * @param eagerload flag to eager load entities from relationships (This is applicable for many-to-many).
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of testManyRelPaginDTOS in body.
     */
    @GetMapping("/test-many-rel-pagin-dtos")
    public ResponseEntity<List<TestManyRelPaginDTODTO>> getAllTestManyRelPaginDTOS(Pageable pageable, @RequestParam(required = false, defaultValue = "false") boolean eagerload) {
        log.debug("REST request to get a page of TestManyRelPaginDTOS");
        Page<TestManyRelPaginDTODTO> page;
        if (eagerload) {
            page = testManyRelPaginDTOService.findAllWithEagerRelationships(pageable);
        } else {
            page = testManyRelPaginDTOService.findAll(pageable);
        }
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(ServletUriComponentsBuilder.fromCurrentRequest(), page);
        return ResponseEntity.ok().headers(headers).body(page.getContent());
    }

    /**
     * {@code GET  /test-many-rel-pagin-dtos/:id} : get the "id" testManyRelPaginDTO.
     *
     * @param id the id of the testManyRelPaginDTODTO to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the testManyRelPaginDTODTO, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/test-many-rel-pagin-dtos/{id}")
    public ResponseEntity<TestManyRelPaginDTODTO> getTestManyRelPaginDTO(@PathVariable Long id) {
        log.debug("REST request to get TestManyRelPaginDTO : {}", id);
        Optional<TestManyRelPaginDTODTO> testManyRelPaginDTODTO = testManyRelPaginDTOService.findOne(id);
        return ResponseUtil.wrapOrNotFound(testManyRelPaginDTODTO);
    }

    /**
     * {@code DELETE  /test-many-rel-pagin-dtos/:id} : delete the "id" testManyRelPaginDTO.
     *
     * @param id the id of the testManyRelPaginDTODTO to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/test-many-rel-pagin-dtos/{id}")
    public ResponseEntity<Void> deleteTestManyRelPaginDTO(@PathVariable Long id) {
        log.debug("REST request to delete TestManyRelPaginDTO : {}", id);
        testManyRelPaginDTOService.delete(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
