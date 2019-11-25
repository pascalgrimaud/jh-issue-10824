package io.github.jhipster.travis.web.rest;

import io.github.jhipster.travis.service.MapsIdUserProfileWithDTOService;
import io.github.jhipster.travis.web.rest.errors.BadRequestAlertException;
import io.github.jhipster.travis.service.dto.MapsIdUserProfileWithDTODTO;

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
import java.util.Objects;
import java.util.Optional;

/**
 * REST controller for managing {@link io.github.jhipster.travis.domain.MapsIdUserProfileWithDTO}.
 */
@RestController
@RequestMapping("/api")
public class MapsIdUserProfileWithDTOResource {

    private final Logger log = LoggerFactory.getLogger(MapsIdUserProfileWithDTOResource.class);

    private static final String ENTITY_NAME = "mapsIdUserProfileWithDTO";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final MapsIdUserProfileWithDTOService mapsIdUserProfileWithDTOService;

    public MapsIdUserProfileWithDTOResource(MapsIdUserProfileWithDTOService mapsIdUserProfileWithDTOService) {
        this.mapsIdUserProfileWithDTOService = mapsIdUserProfileWithDTOService;
    }

    /**
     * {@code POST  /maps-id-user-profile-with-dtos} : Create a new mapsIdUserProfileWithDTO.
     *
     * @param mapsIdUserProfileWithDTODTO the mapsIdUserProfileWithDTODTO to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new mapsIdUserProfileWithDTODTO, or with status {@code 400 (Bad Request)} if the mapsIdUserProfileWithDTO has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/maps-id-user-profile-with-dtos")
    public ResponseEntity<MapsIdUserProfileWithDTODTO> createMapsIdUserProfileWithDTO(@RequestBody MapsIdUserProfileWithDTODTO mapsIdUserProfileWithDTODTO) throws URISyntaxException {
        log.debug("REST request to save MapsIdUserProfileWithDTO : {}", mapsIdUserProfileWithDTODTO);
        if (mapsIdUserProfileWithDTODTO.getId() != null) {
            throw new BadRequestAlertException("A new mapsIdUserProfileWithDTO cannot already have an ID", ENTITY_NAME, "idexists");
        }
        if (Objects.isNull(mapsIdUserProfileWithDTODTO.getUserId())) {
            throw new BadRequestAlertException("Invalid association value provided", ENTITY_NAME, "null");
        }
        MapsIdUserProfileWithDTODTO result = mapsIdUserProfileWithDTOService.save(mapsIdUserProfileWithDTODTO);
        return ResponseEntity.created(new URI("/api/maps-id-user-profile-with-dtos/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /maps-id-user-profile-with-dtos} : Updates an existing mapsIdUserProfileWithDTO.
     *
     * @param mapsIdUserProfileWithDTODTO the mapsIdUserProfileWithDTODTO to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated mapsIdUserProfileWithDTODTO,
     * or with status {@code 400 (Bad Request)} if the mapsIdUserProfileWithDTODTO is not valid,
     * or with status {@code 500 (Internal Server Error)} if the mapsIdUserProfileWithDTODTO couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/maps-id-user-profile-with-dtos")
    public ResponseEntity<MapsIdUserProfileWithDTODTO> updateMapsIdUserProfileWithDTO(@RequestBody MapsIdUserProfileWithDTODTO mapsIdUserProfileWithDTODTO) throws URISyntaxException {
        log.debug("REST request to update MapsIdUserProfileWithDTO : {}", mapsIdUserProfileWithDTODTO);
        if (mapsIdUserProfileWithDTODTO.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        MapsIdUserProfileWithDTODTO result = mapsIdUserProfileWithDTOService.save(mapsIdUserProfileWithDTODTO);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, mapsIdUserProfileWithDTODTO.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /maps-id-user-profile-with-dtos} : get all the mapsIdUserProfileWithDTOS.
     *

     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of mapsIdUserProfileWithDTOS in body.
     */
    @GetMapping("/maps-id-user-profile-with-dtos")
    public List<MapsIdUserProfileWithDTODTO> getAllMapsIdUserProfileWithDTOS() {
        log.debug("REST request to get all MapsIdUserProfileWithDTOS");
        return mapsIdUserProfileWithDTOService.findAll();
    }

    /**
     * {@code GET  /maps-id-user-profile-with-dtos/:id} : get the "id" mapsIdUserProfileWithDTO.
     *
     * @param id the id of the mapsIdUserProfileWithDTODTO to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the mapsIdUserProfileWithDTODTO, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/maps-id-user-profile-with-dtos/{id}")
    public ResponseEntity<MapsIdUserProfileWithDTODTO> getMapsIdUserProfileWithDTO(@PathVariable Long id) {
        log.debug("REST request to get MapsIdUserProfileWithDTO : {}", id);
        Optional<MapsIdUserProfileWithDTODTO> mapsIdUserProfileWithDTODTO = mapsIdUserProfileWithDTOService.findOne(id);
        return ResponseUtil.wrapOrNotFound(mapsIdUserProfileWithDTODTO);
    }

    /**
     * {@code DELETE  /maps-id-user-profile-with-dtos/:id} : delete the "id" mapsIdUserProfileWithDTO.
     *
     * @param id the id of the mapsIdUserProfileWithDTODTO to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/maps-id-user-profile-with-dtos/{id}")
    public ResponseEntity<Void> deleteMapsIdUserProfileWithDTO(@PathVariable Long id) {
        log.debug("REST request to delete MapsIdUserProfileWithDTO : {}", id);
        mapsIdUserProfileWithDTOService.delete(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
