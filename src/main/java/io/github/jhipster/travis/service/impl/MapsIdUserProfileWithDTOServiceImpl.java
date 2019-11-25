package io.github.jhipster.travis.service.impl;

import io.github.jhipster.travis.service.MapsIdUserProfileWithDTOService;
import io.github.jhipster.travis.domain.MapsIdUserProfileWithDTO;
import io.github.jhipster.travis.repository.MapsIdUserProfileWithDTORepository;
import io.github.jhipster.travis.repository.UserRepository;
import io.github.jhipster.travis.service.dto.MapsIdUserProfileWithDTODTO;
import io.github.jhipster.travis.service.mapper.MapsIdUserProfileWithDTOMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.LinkedList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

/**
 * Service Implementation for managing {@link MapsIdUserProfileWithDTO}.
 */
@Service
@Transactional
public class MapsIdUserProfileWithDTOServiceImpl implements MapsIdUserProfileWithDTOService {

    private final Logger log = LoggerFactory.getLogger(MapsIdUserProfileWithDTOServiceImpl.class);

    private final MapsIdUserProfileWithDTORepository mapsIdUserProfileWithDTORepository;

    private final MapsIdUserProfileWithDTOMapper mapsIdUserProfileWithDTOMapper;

    private final UserRepository userRepository;

    public MapsIdUserProfileWithDTOServiceImpl(MapsIdUserProfileWithDTORepository mapsIdUserProfileWithDTORepository, MapsIdUserProfileWithDTOMapper mapsIdUserProfileWithDTOMapper, UserRepository userRepository) {
        this.mapsIdUserProfileWithDTORepository = mapsIdUserProfileWithDTORepository;
        this.mapsIdUserProfileWithDTOMapper = mapsIdUserProfileWithDTOMapper;
        this.userRepository = userRepository;
    }

    /**
     * Save a mapsIdUserProfileWithDTO.
     *
     * @param mapsIdUserProfileWithDTODTO the entity to save.
     * @return the persisted entity.
     */
    @Override
    public MapsIdUserProfileWithDTODTO save(MapsIdUserProfileWithDTODTO mapsIdUserProfileWithDTODTO) {
        log.debug("Request to save MapsIdUserProfileWithDTO : {}", mapsIdUserProfileWithDTODTO);
        MapsIdUserProfileWithDTO mapsIdUserProfileWithDTO = mapsIdUserProfileWithDTOMapper.toEntity(mapsIdUserProfileWithDTODTO);
        long userId = mapsIdUserProfileWithDTODTO.getUserId();
        userRepository.findById(userId).ifPresent(mapsIdUserProfileWithDTO::user);
        mapsIdUserProfileWithDTO = mapsIdUserProfileWithDTORepository.save(mapsIdUserProfileWithDTO);
        return mapsIdUserProfileWithDTOMapper.toDto(mapsIdUserProfileWithDTO);
    }

    /**
     * Get all the mapsIdUserProfileWithDTOS.
     *
     * @return the list of entities.
     */
    @Override
    @Transactional(readOnly = true)
    public List<MapsIdUserProfileWithDTODTO> findAll() {
        log.debug("Request to get all MapsIdUserProfileWithDTOS");
        return mapsIdUserProfileWithDTORepository.findAll().stream()
            .map(mapsIdUserProfileWithDTOMapper::toDto)
            .collect(Collectors.toCollection(LinkedList::new));
    }


    /**
     * Get one mapsIdUserProfileWithDTO by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<MapsIdUserProfileWithDTODTO> findOne(Long id) {
        log.debug("Request to get MapsIdUserProfileWithDTO : {}", id);
        return mapsIdUserProfileWithDTORepository.findById(id)
            .map(mapsIdUserProfileWithDTOMapper::toDto);
    }

    /**
     * Delete the mapsIdUserProfileWithDTO by id.
     *
     * @param id the id of the entity.
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete MapsIdUserProfileWithDTO : {}", id);
        mapsIdUserProfileWithDTORepository.deleteById(id);
    }
}
