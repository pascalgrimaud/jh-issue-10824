package io.github.jhipster.travis.service.impl;

import io.github.jhipster.travis.service.TestManyRelPaginDTOService;
import io.github.jhipster.travis.domain.TestManyRelPaginDTO;
import io.github.jhipster.travis.repository.TestManyRelPaginDTORepository;
import io.github.jhipster.travis.service.dto.TestManyRelPaginDTODTO;
import io.github.jhipster.travis.service.mapper.TestManyRelPaginDTOMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

/**
 * Service Implementation for managing {@link TestManyRelPaginDTO}.
 */
@Service
@Transactional
public class TestManyRelPaginDTOServiceImpl implements TestManyRelPaginDTOService {

    private final Logger log = LoggerFactory.getLogger(TestManyRelPaginDTOServiceImpl.class);

    private final TestManyRelPaginDTORepository testManyRelPaginDTORepository;

    private final TestManyRelPaginDTOMapper testManyRelPaginDTOMapper;

    public TestManyRelPaginDTOServiceImpl(TestManyRelPaginDTORepository testManyRelPaginDTORepository, TestManyRelPaginDTOMapper testManyRelPaginDTOMapper) {
        this.testManyRelPaginDTORepository = testManyRelPaginDTORepository;
        this.testManyRelPaginDTOMapper = testManyRelPaginDTOMapper;
    }

    /**
     * Save a testManyRelPaginDTO.
     *
     * @param testManyRelPaginDTODTO the entity to save.
     * @return the persisted entity.
     */
    @Override
    public TestManyRelPaginDTODTO save(TestManyRelPaginDTODTO testManyRelPaginDTODTO) {
        log.debug("Request to save TestManyRelPaginDTO : {}", testManyRelPaginDTODTO);
        TestManyRelPaginDTO testManyRelPaginDTO = testManyRelPaginDTOMapper.toEntity(testManyRelPaginDTODTO);
        testManyRelPaginDTO = testManyRelPaginDTORepository.save(testManyRelPaginDTO);
        return testManyRelPaginDTOMapper.toDto(testManyRelPaginDTO);
    }

    /**
     * Get all the testManyRelPaginDTOS.
     *
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    @Override
    @Transactional(readOnly = true)
    public Page<TestManyRelPaginDTODTO> findAll(Pageable pageable) {
        log.debug("Request to get all TestManyRelPaginDTOS");
        return testManyRelPaginDTORepository.findAll(pageable)
            .map(testManyRelPaginDTOMapper::toDto);
    }

    /**
     * Get all the testManyRelPaginDTOS with eager load of many-to-many relationships.
     *
     * @return the list of entities.
     */
    public Page<TestManyRelPaginDTODTO> findAllWithEagerRelationships(Pageable pageable) {
        return testManyRelPaginDTORepository.findAllWithEagerRelationships(pageable).map(testManyRelPaginDTOMapper::toDto);
    }
    

    /**
     * Get one testManyRelPaginDTO by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<TestManyRelPaginDTODTO> findOne(Long id) {
        log.debug("Request to get TestManyRelPaginDTO : {}", id);
        return testManyRelPaginDTORepository.findOneWithEagerRelationships(id)
            .map(testManyRelPaginDTOMapper::toDto);
    }

    /**
     * Delete the testManyRelPaginDTO by id.
     *
     * @param id the id of the entity.
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete TestManyRelPaginDTO : {}", id);
        testManyRelPaginDTORepository.deleteById(id);
    }
}
