package io.github.jhipster.travis.web.rest;

import io.github.jhipster.travis.domain.TestMapstruct;
import io.github.jhipster.travis.repository.TestMapstructRepository;
import io.github.jhipster.travis.web.rest.errors.BadRequestAlertException;
import io.github.jhipster.travis.service.dto.TestMapstructDTO;
import io.github.jhipster.travis.service.mapper.TestMapstructMapper;

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
import java.util.LinkedList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

/**
 * REST controller for managing {@link io.github.jhipster.travis.domain.TestMapstruct}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class TestMapstructResource {

    private final Logger log = LoggerFactory.getLogger(TestMapstructResource.class);

    private static final String ENTITY_NAME = "testMapstruct";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final TestMapstructRepository testMapstructRepository;

    private final TestMapstructMapper testMapstructMapper;

    public TestMapstructResource(TestMapstructRepository testMapstructRepository, TestMapstructMapper testMapstructMapper) {
        this.testMapstructRepository = testMapstructRepository;
        this.testMapstructMapper = testMapstructMapper;
    }

    /**
     * {@code POST  /test-mapstructs} : Create a new testMapstruct.
     *
     * @param testMapstructDTO the testMapstructDTO to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new testMapstructDTO, or with status {@code 400 (Bad Request)} if the testMapstruct has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/test-mapstructs")
    public ResponseEntity<TestMapstructDTO> createTestMapstruct(@RequestBody TestMapstructDTO testMapstructDTO) throws URISyntaxException {
        log.debug("REST request to save TestMapstruct : {}", testMapstructDTO);
        if (testMapstructDTO.getId() != null) {
            throw new BadRequestAlertException("A new testMapstruct cannot already have an ID", ENTITY_NAME, "idexists");
        }
        TestMapstruct testMapstruct = testMapstructMapper.toEntity(testMapstructDTO);
        testMapstruct = testMapstructRepository.save(testMapstruct);
        TestMapstructDTO result = testMapstructMapper.toDto(testMapstruct);
        return ResponseEntity.created(new URI("/api/test-mapstructs/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /test-mapstructs} : Updates an existing testMapstruct.
     *
     * @param testMapstructDTO the testMapstructDTO to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated testMapstructDTO,
     * or with status {@code 400 (Bad Request)} if the testMapstructDTO is not valid,
     * or with status {@code 500 (Internal Server Error)} if the testMapstructDTO couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/test-mapstructs")
    public ResponseEntity<TestMapstructDTO> updateTestMapstruct(@RequestBody TestMapstructDTO testMapstructDTO) throws URISyntaxException {
        log.debug("REST request to update TestMapstruct : {}", testMapstructDTO);
        if (testMapstructDTO.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        TestMapstruct testMapstruct = testMapstructMapper.toEntity(testMapstructDTO);
        testMapstruct = testMapstructRepository.save(testMapstruct);
        TestMapstructDTO result = testMapstructMapper.toDto(testMapstruct);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, testMapstructDTO.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /test-mapstructs} : get all the testMapstructs.
     *
     * @param eagerload flag to eager load entities from relationships (This is applicable for many-to-many).
     * @param filter the filter of the request.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of testMapstructs in body.
     */
    @GetMapping("/test-mapstructs")
    public List<TestMapstructDTO> getAllTestMapstructs(@RequestParam(required = false) String filter,@RequestParam(required = false, defaultValue = "false") boolean eagerload) {
        if ("testonetoone-is-null".equals(filter)) {
            log.debug("REST request to get all TestMapstructs where testOneToOne is null");
            return StreamSupport
                .stream(testMapstructRepository.findAll().spliterator(), false)
                .filter(testMapstruct -> testMapstruct.getTestOneToOne() == null)
                .map(testMapstructMapper::toDto)
                .collect(Collectors.toCollection(LinkedList::new));
        }
        log.debug("REST request to get all TestMapstructs");
        List<TestMapstruct> testMapstructs = testMapstructRepository.findAllWithEagerRelationships();
        return testMapstructMapper.toDto(testMapstructs);
    }

    /**
     * {@code GET  /test-mapstructs/:id} : get the "id" testMapstruct.
     *
     * @param id the id of the testMapstructDTO to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the testMapstructDTO, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/test-mapstructs/{id}")
    public ResponseEntity<TestMapstructDTO> getTestMapstruct(@PathVariable Long id) {
        log.debug("REST request to get TestMapstruct : {}", id);
        Optional<TestMapstructDTO> testMapstructDTO = testMapstructRepository.findOneWithEagerRelationships(id)
            .map(testMapstructMapper::toDto);
        return ResponseUtil.wrapOrNotFound(testMapstructDTO);
    }

    /**
     * {@code DELETE  /test-mapstructs/:id} : delete the "id" testMapstruct.
     *
     * @param id the id of the testMapstructDTO to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/test-mapstructs/{id}")
    public ResponseEntity<Void> deleteTestMapstruct(@PathVariable Long id) {
        log.debug("REST request to delete TestMapstruct : {}", id);
        testMapstructRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
