package io.github.jhipster.travis.web.rest;

import io.github.jhipster.travis.domain.EntityWithServiceImplAndPagination;
import io.github.jhipster.travis.service.EntityWithServiceImplAndPaginationService;
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
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;

import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing {@link io.github.jhipster.travis.domain.EntityWithServiceImplAndPagination}.
 */
@RestController
@RequestMapping("/api")
public class EntityWithServiceImplAndPaginationResource {

    private final Logger log = LoggerFactory.getLogger(EntityWithServiceImplAndPaginationResource.class);

    private static final String ENTITY_NAME = "entityWithServiceImplAndPagination";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final EntityWithServiceImplAndPaginationService entityWithServiceImplAndPaginationService;

    public EntityWithServiceImplAndPaginationResource(EntityWithServiceImplAndPaginationService entityWithServiceImplAndPaginationService) {
        this.entityWithServiceImplAndPaginationService = entityWithServiceImplAndPaginationService;
    }

    /**
     * {@code POST  /entity-with-service-impl-and-paginations} : Create a new entityWithServiceImplAndPagination.
     *
     * @param entityWithServiceImplAndPagination the entityWithServiceImplAndPagination to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new entityWithServiceImplAndPagination, or with status {@code 400 (Bad Request)} if the entityWithServiceImplAndPagination has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/entity-with-service-impl-and-paginations")
    public ResponseEntity<EntityWithServiceImplAndPagination> createEntityWithServiceImplAndPagination(@RequestBody EntityWithServiceImplAndPagination entityWithServiceImplAndPagination) throws URISyntaxException {
        log.debug("REST request to save EntityWithServiceImplAndPagination : {}", entityWithServiceImplAndPagination);
        if (entityWithServiceImplAndPagination.getId() != null) {
            throw new BadRequestAlertException("A new entityWithServiceImplAndPagination cannot already have an ID", ENTITY_NAME, "idexists");
        }
        EntityWithServiceImplAndPagination result = entityWithServiceImplAndPaginationService.save(entityWithServiceImplAndPagination);
        return ResponseEntity.created(new URI("/api/entity-with-service-impl-and-paginations/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /entity-with-service-impl-and-paginations} : Updates an existing entityWithServiceImplAndPagination.
     *
     * @param entityWithServiceImplAndPagination the entityWithServiceImplAndPagination to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated entityWithServiceImplAndPagination,
     * or with status {@code 400 (Bad Request)} if the entityWithServiceImplAndPagination is not valid,
     * or with status {@code 500 (Internal Server Error)} if the entityWithServiceImplAndPagination couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/entity-with-service-impl-and-paginations")
    public ResponseEntity<EntityWithServiceImplAndPagination> updateEntityWithServiceImplAndPagination(@RequestBody EntityWithServiceImplAndPagination entityWithServiceImplAndPagination) throws URISyntaxException {
        log.debug("REST request to update EntityWithServiceImplAndPagination : {}", entityWithServiceImplAndPagination);
        if (entityWithServiceImplAndPagination.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        EntityWithServiceImplAndPagination result = entityWithServiceImplAndPaginationService.save(entityWithServiceImplAndPagination);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, entityWithServiceImplAndPagination.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /entity-with-service-impl-and-paginations} : get all the entityWithServiceImplAndPaginations.
     *

     * @param pageable the pagination information.

     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of entityWithServiceImplAndPaginations in body.
     */
    @GetMapping("/entity-with-service-impl-and-paginations")
    public ResponseEntity<List<EntityWithServiceImplAndPagination>> getAllEntityWithServiceImplAndPaginations(Pageable pageable) {
        log.debug("REST request to get a page of EntityWithServiceImplAndPaginations");
        Page<EntityWithServiceImplAndPagination> page = entityWithServiceImplAndPaginationService.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(ServletUriComponentsBuilder.fromCurrentRequest(), page);
        return ResponseEntity.ok().headers(headers).body(page.getContent());
    }

    /**
     * {@code GET  /entity-with-service-impl-and-paginations/:id} : get the "id" entityWithServiceImplAndPagination.
     *
     * @param id the id of the entityWithServiceImplAndPagination to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the entityWithServiceImplAndPagination, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/entity-with-service-impl-and-paginations/{id}")
    public ResponseEntity<EntityWithServiceImplAndPagination> getEntityWithServiceImplAndPagination(@PathVariable Long id) {
        log.debug("REST request to get EntityWithServiceImplAndPagination : {}", id);
        Optional<EntityWithServiceImplAndPagination> entityWithServiceImplAndPagination = entityWithServiceImplAndPaginationService.findOne(id);
        return ResponseUtil.wrapOrNotFound(entityWithServiceImplAndPagination);
    }

    /**
     * {@code DELETE  /entity-with-service-impl-and-paginations/:id} : delete the "id" entityWithServiceImplAndPagination.
     *
     * @param id the id of the entityWithServiceImplAndPagination to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/entity-with-service-impl-and-paginations/{id}")
    public ResponseEntity<Void> deleteEntityWithServiceImplAndPagination(@PathVariable Long id) {
        log.debug("REST request to delete EntityWithServiceImplAndPagination : {}", id);
        entityWithServiceImplAndPaginationService.delete(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
