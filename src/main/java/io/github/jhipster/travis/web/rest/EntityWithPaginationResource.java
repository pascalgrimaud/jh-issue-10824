package io.github.jhipster.travis.web.rest;

import io.github.jhipster.travis.domain.EntityWithPagination;
import io.github.jhipster.travis.repository.EntityWithPaginationRepository;
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

/**
 * REST controller for managing {@link io.github.jhipster.travis.domain.EntityWithPagination}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class EntityWithPaginationResource {

    private final Logger log = LoggerFactory.getLogger(EntityWithPaginationResource.class);

    private static final String ENTITY_NAME = "entityWithPagination";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final EntityWithPaginationRepository entityWithPaginationRepository;

    public EntityWithPaginationResource(EntityWithPaginationRepository entityWithPaginationRepository) {
        this.entityWithPaginationRepository = entityWithPaginationRepository;
    }

    /**
     * {@code POST  /entity-with-paginations} : Create a new entityWithPagination.
     *
     * @param entityWithPagination the entityWithPagination to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new entityWithPagination, or with status {@code 400 (Bad Request)} if the entityWithPagination has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/entity-with-paginations")
    public ResponseEntity<EntityWithPagination> createEntityWithPagination(@RequestBody EntityWithPagination entityWithPagination) throws URISyntaxException {
        log.debug("REST request to save EntityWithPagination : {}", entityWithPagination);
        if (entityWithPagination.getId() != null) {
            throw new BadRequestAlertException("A new entityWithPagination cannot already have an ID", ENTITY_NAME, "idexists");
        }
        EntityWithPagination result = entityWithPaginationRepository.save(entityWithPagination);
        return ResponseEntity.created(new URI("/api/entity-with-paginations/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /entity-with-paginations} : Updates an existing entityWithPagination.
     *
     * @param entityWithPagination the entityWithPagination to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated entityWithPagination,
     * or with status {@code 400 (Bad Request)} if the entityWithPagination is not valid,
     * or with status {@code 500 (Internal Server Error)} if the entityWithPagination couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/entity-with-paginations")
    public ResponseEntity<EntityWithPagination> updateEntityWithPagination(@RequestBody EntityWithPagination entityWithPagination) throws URISyntaxException {
        log.debug("REST request to update EntityWithPagination : {}", entityWithPagination);
        if (entityWithPagination.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        EntityWithPagination result = entityWithPaginationRepository.save(entityWithPagination);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, entityWithPagination.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /entity-with-paginations} : get all the entityWithPaginations.
     *

     * @param pageable the pagination information.

     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of entityWithPaginations in body.
     */
    @GetMapping("/entity-with-paginations")
    public ResponseEntity<List<EntityWithPagination>> getAllEntityWithPaginations(Pageable pageable) {
        log.debug("REST request to get a page of EntityWithPaginations");
        Page<EntityWithPagination> page = entityWithPaginationRepository.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(ServletUriComponentsBuilder.fromCurrentRequest(), page);
        return ResponseEntity.ok().headers(headers).body(page.getContent());
    }

    /**
     * {@code GET  /entity-with-paginations/:id} : get the "id" entityWithPagination.
     *
     * @param id the id of the entityWithPagination to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the entityWithPagination, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/entity-with-paginations/{id}")
    public ResponseEntity<EntityWithPagination> getEntityWithPagination(@PathVariable Long id) {
        log.debug("REST request to get EntityWithPagination : {}", id);
        Optional<EntityWithPagination> entityWithPagination = entityWithPaginationRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(entityWithPagination);
    }

    /**
     * {@code DELETE  /entity-with-paginations/:id} : delete the "id" entityWithPagination.
     *
     * @param id the id of the entityWithPagination to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/entity-with-paginations/{id}")
    public ResponseEntity<Void> deleteEntityWithPagination(@PathVariable Long id) {
        log.debug("REST request to delete EntityWithPagination : {}", id);
        entityWithPaginationRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
