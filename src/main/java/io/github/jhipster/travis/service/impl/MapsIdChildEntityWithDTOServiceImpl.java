package io.github.jhipster.travis.service.impl;

import io.github.jhipster.travis.service.MapsIdChildEntityWithDTOService;
import io.github.jhipster.travis.domain.MapsIdChildEntityWithDTO;
import io.github.jhipster.travis.repository.MapsIdChildEntityWithDTORepository;
import io.github.jhipster.travis.repository.MapsIdParentEntityWithDTORepository;
import io.github.jhipster.travis.service.dto.MapsIdChildEntityWithDTODTO;
import io.github.jhipster.travis.service.mapper.MapsIdChildEntityWithDTOMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.LinkedList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

/**
 * Service Implementation for managing {@link MapsIdChildEntityWithDTO}.
 */
@Service
@Transactional
public class MapsIdChildEntityWithDTOServiceImpl implements MapsIdChildEntityWithDTOService {

    private final Logger log = LoggerFactory.getLogger(MapsIdChildEntityWithDTOServiceImpl.class);

    private final MapsIdChildEntityWithDTORepository mapsIdChildEntityWithDTORepository;

    private final MapsIdChildEntityWithDTOMapper mapsIdChildEntityWithDTOMapper;

    private final MapsIdParentEntityWithDTORepository mapsIdParentEntityWithDTORepository;

    public MapsIdChildEntityWithDTOServiceImpl(MapsIdChildEntityWithDTORepository mapsIdChildEntityWithDTORepository, MapsIdChildEntityWithDTOMapper mapsIdChildEntityWithDTOMapper, MapsIdParentEntityWithDTORepository mapsIdParentEntityWithDTORepository) {
        this.mapsIdChildEntityWithDTORepository = mapsIdChildEntityWithDTORepository;
        this.mapsIdChildEntityWithDTOMapper = mapsIdChildEntityWithDTOMapper;
        this.mapsIdParentEntityWithDTORepository = mapsIdParentEntityWithDTORepository;
    }

    /**
     * Save a mapsIdChildEntityWithDTO.
     *
     * @param mapsIdChildEntityWithDTODTO the entity to save.
     * @return the persisted entity.
     */
    @Override
    public MapsIdChildEntityWithDTODTO save(MapsIdChildEntityWithDTODTO mapsIdChildEntityWithDTODTO) {
        log.debug("Request to save MapsIdChildEntityWithDTO : {}", mapsIdChildEntityWithDTODTO);
        MapsIdChildEntityWithDTO mapsIdChildEntityWithDTO = mapsIdChildEntityWithDTOMapper.toEntity(mapsIdChildEntityWithDTODTO);
        long mapsIdParentEntityWithDTOId = mapsIdChildEntityWithDTODTO.getMapsIdParentEntityWithDTOId();
        mapsIdParentEntityWithDTORepository.findById(mapsIdParentEntityWithDTOId).ifPresent(mapsIdChildEntityWithDTO::mapsIdParentEntityWithDTO);
        mapsIdChildEntityWithDTO = mapsIdChildEntityWithDTORepository.save(mapsIdChildEntityWithDTO);
        return mapsIdChildEntityWithDTOMapper.toDto(mapsIdChildEntityWithDTO);
    }

    /**
     * Get all the mapsIdChildEntityWithDTOS.
     *
     * @return the list of entities.
     */
    @Override
    @Transactional(readOnly = true)
    public List<MapsIdChildEntityWithDTODTO> findAll() {
        log.debug("Request to get all MapsIdChildEntityWithDTOS");
        return mapsIdChildEntityWithDTORepository.findAll().stream()
            .map(mapsIdChildEntityWithDTOMapper::toDto)
            .collect(Collectors.toCollection(LinkedList::new));
    }


    /**
     * Get one mapsIdChildEntityWithDTO by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<MapsIdChildEntityWithDTODTO> findOne(Long id) {
        log.debug("Request to get MapsIdChildEntityWithDTO : {}", id);
        return mapsIdChildEntityWithDTORepository.findById(id)
            .map(mapsIdChildEntityWithDTOMapper::toDto);
    }

    /**
     * Delete the mapsIdChildEntityWithDTO by id.
     *
     * @param id the id of the entity.
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete MapsIdChildEntityWithDTO : {}", id);
        mapsIdChildEntityWithDTORepository.deleteById(id);
    }
}
