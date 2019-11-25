package io.github.jhipster.travis.service.impl;

import io.github.jhipster.travis.service.MapsIdParentEntityWithDTOService;
import io.github.jhipster.travis.domain.MapsIdParentEntityWithDTO;
import io.github.jhipster.travis.repository.MapsIdParentEntityWithDTORepository;
import io.github.jhipster.travis.service.dto.MapsIdParentEntityWithDTODTO;
import io.github.jhipster.travis.service.mapper.MapsIdParentEntityWithDTOMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.LinkedList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

/**
 * Service Implementation for managing {@link MapsIdParentEntityWithDTO}.
 */
@Service
@Transactional
public class MapsIdParentEntityWithDTOServiceImpl implements MapsIdParentEntityWithDTOService {

    private final Logger log = LoggerFactory.getLogger(MapsIdParentEntityWithDTOServiceImpl.class);

    private final MapsIdParentEntityWithDTORepository mapsIdParentEntityWithDTORepository;

    private final MapsIdParentEntityWithDTOMapper mapsIdParentEntityWithDTOMapper;

    public MapsIdParentEntityWithDTOServiceImpl(MapsIdParentEntityWithDTORepository mapsIdParentEntityWithDTORepository, MapsIdParentEntityWithDTOMapper mapsIdParentEntityWithDTOMapper) {
        this.mapsIdParentEntityWithDTORepository = mapsIdParentEntityWithDTORepository;
        this.mapsIdParentEntityWithDTOMapper = mapsIdParentEntityWithDTOMapper;
    }

    /**
     * Save a mapsIdParentEntityWithDTO.
     *
     * @param mapsIdParentEntityWithDTODTO the entity to save.
     * @return the persisted entity.
     */
    @Override
    public MapsIdParentEntityWithDTODTO save(MapsIdParentEntityWithDTODTO mapsIdParentEntityWithDTODTO) {
        log.debug("Request to save MapsIdParentEntityWithDTO : {}", mapsIdParentEntityWithDTODTO);
        MapsIdParentEntityWithDTO mapsIdParentEntityWithDTO = mapsIdParentEntityWithDTOMapper.toEntity(mapsIdParentEntityWithDTODTO);
        mapsIdParentEntityWithDTO = mapsIdParentEntityWithDTORepository.save(mapsIdParentEntityWithDTO);
        return mapsIdParentEntityWithDTOMapper.toDto(mapsIdParentEntityWithDTO);
    }

    /**
     * Get all the mapsIdParentEntityWithDTOS.
     *
     * @return the list of entities.
     */
    @Override
    @Transactional(readOnly = true)
    public List<MapsIdParentEntityWithDTODTO> findAll() {
        log.debug("Request to get all MapsIdParentEntityWithDTOS");
        return mapsIdParentEntityWithDTORepository.findAll().stream()
            .map(mapsIdParentEntityWithDTOMapper::toDto)
            .collect(Collectors.toCollection(LinkedList::new));
    }



    /**
    *  Get all the mapsIdParentEntityWithDTOS where MapsIdChildEntityWithDTO is {@code null}.
     *  @return the list of entities.
     */
    @Transactional(readOnly = true) 
    public List<MapsIdParentEntityWithDTODTO> findAllWhereMapsIdChildEntityWithDTOIsNull() {
        log.debug("Request to get all mapsIdParentEntityWithDTOS where MapsIdChildEntityWithDTO is null");
        return StreamSupport
            .stream(mapsIdParentEntityWithDTORepository.findAll().spliterator(), false)
            .filter(mapsIdParentEntityWithDTO -> mapsIdParentEntityWithDTO.getMapsIdChildEntityWithDTO() == null)
            .map(mapsIdParentEntityWithDTOMapper::toDto)
            .collect(Collectors.toCollection(LinkedList::new));
    }

    /**
     * Get one mapsIdParentEntityWithDTO by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<MapsIdParentEntityWithDTODTO> findOne(Long id) {
        log.debug("Request to get MapsIdParentEntityWithDTO : {}", id);
        return mapsIdParentEntityWithDTORepository.findById(id)
            .map(mapsIdParentEntityWithDTOMapper::toDto);
    }

    /**
     * Delete the mapsIdParentEntityWithDTO by id.
     *
     * @param id the id of the entity.
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete MapsIdParentEntityWithDTO : {}", id);
        mapsIdParentEntityWithDTORepository.deleteById(id);
    }
}
