package io.github.jhipster.travis.web.rest;

import io.github.jhipster.travis.domain.EntityWithDTO;
import io.github.jhipster.travis.repository.EntityWithDTORepository;
import io.github.jhipster.travis.web.rest.errors.BadRequestAlertException;
import io.github.jhipster.travis.service.dto.EntityWithDTODTO;
import io.github.jhipster.travis.service.mapper.EntityWithDTOMapper;

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

import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing {@link io.github.jhipster.travis.domain.EntityWithDTO}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class EntityWithDTOResource {

    private final Logger log = LoggerFactory.getLogger(EntityWithDTOResource.class);

    private static final String ENTITY_NAME = "entityWithDTO";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final EntityWithDTORepository entityWithDTORepository;

    private final EntityWithDTOMapper entityWithDTOMapper;

    public EntityWithDTOResource(EntityWithDTORepository entityWithDTORepository, EntityWithDTOMapper entityWithDTOMapper) {
        this.entityWithDTORepository = entityWithDTORepository;
        this.entityWithDTOMapper = entityWithDTOMapper;
    }

    /**
     * {@code POST  /entity-with-dtos} : Create a new entityWithDTO.
     *
     * @param entityWithDTODTO the entityWithDTODTO to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new entityWithDTODTO, or with status {@code 400 (Bad Request)} if the entityWithDTO has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/entity-with-dtos")
    public ResponseEntity<EntityWithDTODTO> createEntityWithDTO(@RequestBody EntityWithDTODTO entityWithDTODTO) throws URISyntaxException {
        log.debug("REST request to save EntityWithDTO : {}", entityWithDTODTO);
        if (entityWithDTODTO.getId() != null) {
            throw new BadRequestAlertException("A new entityWithDTO cannot already have an ID", ENTITY_NAME, "idexists");
        }
        EntityWithDTO entityWithDTO = entityWithDTOMapper.toEntity(entityWithDTODTO);
        entityWithDTO = entityWithDTORepository.save(entityWithDTO);
        EntityWithDTODTO result = entityWithDTOMapper.toDto(entityWithDTO);
        return ResponseEntity.created(new URI("/api/entity-with-dtos/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /entity-with-dtos} : Updates an existing entityWithDTO.
     *
     * @param entityWithDTODTO the entityWithDTODTO to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated entityWithDTODTO,
     * or with status {@code 400 (Bad Request)} if the entityWithDTODTO is not valid,
     * or with status {@code 500 (Internal Server Error)} if the entityWithDTODTO couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/entity-with-dtos")
    public ResponseEntity<EntityWithDTODTO> updateEntityWithDTO(@RequestBody EntityWithDTODTO entityWithDTODTO) throws URISyntaxException {
        log.debug("REST request to update EntityWithDTO : {}", entityWithDTODTO);
        if (entityWithDTODTO.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        EntityWithDTO entityWithDTO = entityWithDTOMapper.toEntity(entityWithDTODTO);
        entityWithDTO = entityWithDTORepository.save(entityWithDTO);
        EntityWithDTODTO result = entityWithDTOMapper.toDto(entityWithDTO);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, entityWithDTODTO.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /entity-with-dtos} : get all the entityWithDTOS.
     *

     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of entityWithDTOS in body.
     */
    @GetMapping("/entity-with-dtos")
    public List<EntityWithDTODTO> getAllEntityWithDTOS() {
        log.debug("REST request to get all EntityWithDTOS");
        List<EntityWithDTO> entityWithDTOS = entityWithDTORepository.findAll();
        return entityWithDTOMapper.toDto(entityWithDTOS);
    }

    /**
     * {@code GET  /entity-with-dtos/:id} : get the "id" entityWithDTO.
     *
     * @param id the id of the entityWithDTODTO to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the entityWithDTODTO, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/entity-with-dtos/{id}")
    public ResponseEntity<EntityWithDTODTO> getEntityWithDTO(@PathVariable Long id) {
        log.debug("REST request to get EntityWithDTO : {}", id);
        Optional<EntityWithDTODTO> entityWithDTODTO = entityWithDTORepository.findById(id)
            .map(entityWithDTOMapper::toDto);
        return ResponseUtil.wrapOrNotFound(entityWithDTODTO);
    }

    /**
     * {@code DELETE  /entity-with-dtos/:id} : delete the "id" entityWithDTO.
     *
     * @param id the id of the entityWithDTODTO to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/entity-with-dtos/{id}")
    public ResponseEntity<Void> deleteEntityWithDTO(@PathVariable Long id) {
        log.debug("REST request to delete EntityWithDTO : {}", id);
        entityWithDTORepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
