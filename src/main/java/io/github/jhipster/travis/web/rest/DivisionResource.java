package io.github.jhipster.travis.web.rest;

import io.github.jhipster.travis.domain.Division;
import io.github.jhipster.travis.repository.DivisionRepository;
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

/**
 * REST controller for managing {@link io.github.jhipster.travis.domain.Division}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class DivisionResource {

    private final Logger log = LoggerFactory.getLogger(DivisionResource.class);

    private static final String ENTITY_NAME = "testRootDivision";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final DivisionRepository divisionRepository;

    public DivisionResource(DivisionRepository divisionRepository) {
        this.divisionRepository = divisionRepository;
    }

    /**
     * {@code POST  /divisions} : Create a new division.
     *
     * @param division the division to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new division, or with status {@code 400 (Bad Request)} if the division has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/divisions")
    public ResponseEntity<Division> createDivision(@Valid @RequestBody Division division) throws URISyntaxException {
        log.debug("REST request to save Division : {}", division);
        if (division.getId() != null) {
            throw new BadRequestAlertException("A new division cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Division result = divisionRepository.save(division);
        return ResponseEntity.created(new URI("/api/divisions/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /divisions} : Updates an existing division.
     *
     * @param division the division to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated division,
     * or with status {@code 400 (Bad Request)} if the division is not valid,
     * or with status {@code 500 (Internal Server Error)} if the division couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/divisions")
    public ResponseEntity<Division> updateDivision(@Valid @RequestBody Division division) throws URISyntaxException {
        log.debug("REST request to update Division : {}", division);
        if (division.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Division result = divisionRepository.save(division);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, division.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /divisions} : get all the divisions.
     *

     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of divisions in body.
     */
    @GetMapping("/divisions")
    public List<Division> getAllDivisions() {
        log.debug("REST request to get all Divisions");
        return divisionRepository.findAll();
    }

    /**
     * {@code GET  /divisions/:id} : get the "id" division.
     *
     * @param id the id of the division to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the division, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/divisions/{id}")
    public ResponseEntity<Division> getDivision(@PathVariable Long id) {
        log.debug("REST request to get Division : {}", id);
        Optional<Division> division = divisionRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(division);
    }

    /**
     * {@code DELETE  /divisions/:id} : delete the "id" division.
     *
     * @param id the id of the division to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/divisions/{id}")
    public ResponseEntity<Void> deleteDivision(@PathVariable Long id) {
        log.debug("REST request to delete Division : {}", id);
        divisionRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
