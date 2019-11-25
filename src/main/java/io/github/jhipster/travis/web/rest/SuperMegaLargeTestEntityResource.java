package io.github.jhipster.travis.web.rest;

import io.github.jhipster.travis.domain.SuperMegaLargeTestEntity;
import io.github.jhipster.travis.repository.SuperMegaLargeTestEntityRepository;
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
 * REST controller for managing {@link io.github.jhipster.travis.domain.SuperMegaLargeTestEntity}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class SuperMegaLargeTestEntityResource {

    private final Logger log = LoggerFactory.getLogger(SuperMegaLargeTestEntityResource.class);

    private static final String ENTITY_NAME = "superMegaLargeTestEntity";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final SuperMegaLargeTestEntityRepository superMegaLargeTestEntityRepository;

    public SuperMegaLargeTestEntityResource(SuperMegaLargeTestEntityRepository superMegaLargeTestEntityRepository) {
        this.superMegaLargeTestEntityRepository = superMegaLargeTestEntityRepository;
    }

    /**
     * {@code POST  /super-mega-large-test-entities} : Create a new superMegaLargeTestEntity.
     *
     * @param superMegaLargeTestEntity the superMegaLargeTestEntity to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new superMegaLargeTestEntity, or with status {@code 400 (Bad Request)} if the superMegaLargeTestEntity has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/super-mega-large-test-entities")
    public ResponseEntity<SuperMegaLargeTestEntity> createSuperMegaLargeTestEntity(@Valid @RequestBody SuperMegaLargeTestEntity superMegaLargeTestEntity) throws URISyntaxException {
        log.debug("REST request to save SuperMegaLargeTestEntity : {}", superMegaLargeTestEntity);
        if (superMegaLargeTestEntity.getId() != null) {
            throw new BadRequestAlertException("A new superMegaLargeTestEntity cannot already have an ID", ENTITY_NAME, "idexists");
        }
        SuperMegaLargeTestEntity result = superMegaLargeTestEntityRepository.save(superMegaLargeTestEntity);
        return ResponseEntity.created(new URI("/api/super-mega-large-test-entities/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /super-mega-large-test-entities} : Updates an existing superMegaLargeTestEntity.
     *
     * @param superMegaLargeTestEntity the superMegaLargeTestEntity to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated superMegaLargeTestEntity,
     * or with status {@code 400 (Bad Request)} if the superMegaLargeTestEntity is not valid,
     * or with status {@code 500 (Internal Server Error)} if the superMegaLargeTestEntity couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/super-mega-large-test-entities")
    public ResponseEntity<SuperMegaLargeTestEntity> updateSuperMegaLargeTestEntity(@Valid @RequestBody SuperMegaLargeTestEntity superMegaLargeTestEntity) throws URISyntaxException {
        log.debug("REST request to update SuperMegaLargeTestEntity : {}", superMegaLargeTestEntity);
        if (superMegaLargeTestEntity.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        SuperMegaLargeTestEntity result = superMegaLargeTestEntityRepository.save(superMegaLargeTestEntity);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, superMegaLargeTestEntity.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /super-mega-large-test-entities} : get all the superMegaLargeTestEntities.
     *
     * @param eagerload flag to eager load entities from relationships (This is applicable for many-to-many).
     * @param filter the filter of the request.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of superMegaLargeTestEntities in body.
     */
    @GetMapping("/super-mega-large-test-entities")
    public List<SuperMegaLargeTestEntity> getAllSuperMegaLargeTestEntities(@RequestParam(required = false) String filter,@RequestParam(required = false, defaultValue = "false") boolean eagerload) {
        if ("supermegalargetestonetoone-is-null".equals(filter)) {
            log.debug("REST request to get all SuperMegaLargeTestEntitys where superMegaLargeTestOneToOne is null");
            return StreamSupport
                .stream(superMegaLargeTestEntityRepository.findAll().spliterator(), false)
                .filter(superMegaLargeTestEntity -> superMegaLargeTestEntity.getSuperMegaLargeTestOneToOne() == null)
                .collect(Collectors.toList());
        }
        log.debug("REST request to get all SuperMegaLargeTestEntities");
        return superMegaLargeTestEntityRepository.findAllWithEagerRelationships();
    }

    /**
     * {@code GET  /super-mega-large-test-entities/:id} : get the "id" superMegaLargeTestEntity.
     *
     * @param id the id of the superMegaLargeTestEntity to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the superMegaLargeTestEntity, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/super-mega-large-test-entities/{id}")
    public ResponseEntity<SuperMegaLargeTestEntity> getSuperMegaLargeTestEntity(@PathVariable Long id) {
        log.debug("REST request to get SuperMegaLargeTestEntity : {}", id);
        Optional<SuperMegaLargeTestEntity> superMegaLargeTestEntity = superMegaLargeTestEntityRepository.findOneWithEagerRelationships(id);
        return ResponseUtil.wrapOrNotFound(superMegaLargeTestEntity);
    }

    /**
     * {@code DELETE  /super-mega-large-test-entities/:id} : delete the "id" superMegaLargeTestEntity.
     *
     * @param id the id of the superMegaLargeTestEntity to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/super-mega-large-test-entities/{id}")
    public ResponseEntity<Void> deleteSuperMegaLargeTestEntity(@PathVariable Long id) {
        log.debug("REST request to delete SuperMegaLargeTestEntity : {}", id);
        superMegaLargeTestEntityRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
