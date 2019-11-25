package io.github.jhipster.travis.web.rest;

import io.github.jhipster.travis.TravisNg2App;
import io.github.jhipster.travis.domain.TestManyRelPaginDTO;
import io.github.jhipster.travis.repository.TestManyRelPaginDTORepository;
import io.github.jhipster.travis.service.TestManyRelPaginDTOService;
import io.github.jhipster.travis.service.dto.TestManyRelPaginDTODTO;
import io.github.jhipster.travis.service.mapper.TestManyRelPaginDTOMapper;
import io.github.jhipster.travis.web.rest.errors.ExceptionTranslator;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.web.PageableHandlerMethodArgumentResolver;
import org.springframework.http.MediaType;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.Validator;

import javax.persistence.EntityManager;
import java.util.ArrayList;
import java.util.List;

import static io.github.jhipster.travis.web.rest.TestUtil.createFormattingConversionService;
import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Integration tests for the {@link TestManyRelPaginDTOResource} REST controller.
 */
@SpringBootTest(classes = TravisNg2App.class)
public class TestManyRelPaginDTOResourceIT {

    @Autowired
    private TestManyRelPaginDTORepository testManyRelPaginDTORepository;

    @Mock
    private TestManyRelPaginDTORepository testManyRelPaginDTORepositoryMock;

    @Autowired
    private TestManyRelPaginDTOMapper testManyRelPaginDTOMapper;

    @Mock
    private TestManyRelPaginDTOService testManyRelPaginDTOServiceMock;

    @Autowired
    private TestManyRelPaginDTOService testManyRelPaginDTOService;

    @Autowired
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Autowired
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    @Autowired
    private ExceptionTranslator exceptionTranslator;

    @Autowired
    private EntityManager em;

    @Autowired
    private Validator validator;

    private MockMvc restTestManyRelPaginDTOMockMvc;

    private TestManyRelPaginDTO testManyRelPaginDTO;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.initMocks(this);
        final TestManyRelPaginDTOResource testManyRelPaginDTOResource = new TestManyRelPaginDTOResource(testManyRelPaginDTOService);
        this.restTestManyRelPaginDTOMockMvc = MockMvcBuilders.standaloneSetup(testManyRelPaginDTOResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setControllerAdvice(exceptionTranslator)
            .setConversionService(createFormattingConversionService())
            .setMessageConverters(jacksonMessageConverter)
            .setValidator(validator).build();
    }

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static TestManyRelPaginDTO createEntity(EntityManager em) {
        TestManyRelPaginDTO testManyRelPaginDTO = new TestManyRelPaginDTO();
        return testManyRelPaginDTO;
    }
    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static TestManyRelPaginDTO createUpdatedEntity(EntityManager em) {
        TestManyRelPaginDTO testManyRelPaginDTO = new TestManyRelPaginDTO();
        return testManyRelPaginDTO;
    }

    @BeforeEach
    public void initTest() {
        testManyRelPaginDTO = createEntity(em);
    }

    @Test
    @Transactional
    public void createTestManyRelPaginDTO() throws Exception {
        int databaseSizeBeforeCreate = testManyRelPaginDTORepository.findAll().size();

        // Create the TestManyRelPaginDTO
        TestManyRelPaginDTODTO testManyRelPaginDTODTO = testManyRelPaginDTOMapper.toDto(testManyRelPaginDTO);
        restTestManyRelPaginDTOMockMvc.perform(post("/api/test-many-rel-pagin-dtos")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(testManyRelPaginDTODTO)))
            .andExpect(status().isCreated());

        // Validate the TestManyRelPaginDTO in the database
        List<TestManyRelPaginDTO> testManyRelPaginDTOList = testManyRelPaginDTORepository.findAll();
        assertThat(testManyRelPaginDTOList).hasSize(databaseSizeBeforeCreate + 1);
        TestManyRelPaginDTO testTestManyRelPaginDTO = testManyRelPaginDTOList.get(testManyRelPaginDTOList.size() - 1);
    }

    @Test
    @Transactional
    public void createTestManyRelPaginDTOWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = testManyRelPaginDTORepository.findAll().size();

        // Create the TestManyRelPaginDTO with an existing ID
        testManyRelPaginDTO.setId(1L);
        TestManyRelPaginDTODTO testManyRelPaginDTODTO = testManyRelPaginDTOMapper.toDto(testManyRelPaginDTO);

        // An entity with an existing ID cannot be created, so this API call must fail
        restTestManyRelPaginDTOMockMvc.perform(post("/api/test-many-rel-pagin-dtos")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(testManyRelPaginDTODTO)))
            .andExpect(status().isBadRequest());

        // Validate the TestManyRelPaginDTO in the database
        List<TestManyRelPaginDTO> testManyRelPaginDTOList = testManyRelPaginDTORepository.findAll();
        assertThat(testManyRelPaginDTOList).hasSize(databaseSizeBeforeCreate);
    }


    @Test
    @Transactional
    public void getAllTestManyRelPaginDTOS() throws Exception {
        // Initialize the database
        testManyRelPaginDTORepository.saveAndFlush(testManyRelPaginDTO);

        // Get all the testManyRelPaginDTOList
        restTestManyRelPaginDTOMockMvc.perform(get("/api/test-many-rel-pagin-dtos?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(testManyRelPaginDTO.getId().intValue())));
    }
    
    @SuppressWarnings({"unchecked"})
    public void getAllTestManyRelPaginDTOSWithEagerRelationshipsIsEnabled() throws Exception {
        TestManyRelPaginDTOResource testManyRelPaginDTOResource = new TestManyRelPaginDTOResource(testManyRelPaginDTOServiceMock);
        when(testManyRelPaginDTOServiceMock.findAllWithEagerRelationships(any())).thenReturn(new PageImpl(new ArrayList<>()));

        MockMvc restTestManyRelPaginDTOMockMvc = MockMvcBuilders.standaloneSetup(testManyRelPaginDTOResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setControllerAdvice(exceptionTranslator)
            .setConversionService(createFormattingConversionService())
            .setMessageConverters(jacksonMessageConverter).build();

        restTestManyRelPaginDTOMockMvc.perform(get("/api/test-many-rel-pagin-dtos?eagerload=true"))
        .andExpect(status().isOk());

        verify(testManyRelPaginDTOServiceMock, times(1)).findAllWithEagerRelationships(any());
    }

    @SuppressWarnings({"unchecked"})
    public void getAllTestManyRelPaginDTOSWithEagerRelationshipsIsNotEnabled() throws Exception {
        TestManyRelPaginDTOResource testManyRelPaginDTOResource = new TestManyRelPaginDTOResource(testManyRelPaginDTOServiceMock);
            when(testManyRelPaginDTOServiceMock.findAllWithEagerRelationships(any())).thenReturn(new PageImpl(new ArrayList<>()));
            MockMvc restTestManyRelPaginDTOMockMvc = MockMvcBuilders.standaloneSetup(testManyRelPaginDTOResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setControllerAdvice(exceptionTranslator)
            .setConversionService(createFormattingConversionService())
            .setMessageConverters(jacksonMessageConverter).build();

        restTestManyRelPaginDTOMockMvc.perform(get("/api/test-many-rel-pagin-dtos?eagerload=true"))
        .andExpect(status().isOk());

            verify(testManyRelPaginDTOServiceMock, times(1)).findAllWithEagerRelationships(any());
    }

    @Test
    @Transactional
    public void getTestManyRelPaginDTO() throws Exception {
        // Initialize the database
        testManyRelPaginDTORepository.saveAndFlush(testManyRelPaginDTO);

        // Get the testManyRelPaginDTO
        restTestManyRelPaginDTOMockMvc.perform(get("/api/test-many-rel-pagin-dtos/{id}", testManyRelPaginDTO.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(testManyRelPaginDTO.getId().intValue()));
    }

    @Test
    @Transactional
    public void getNonExistingTestManyRelPaginDTO() throws Exception {
        // Get the testManyRelPaginDTO
        restTestManyRelPaginDTOMockMvc.perform(get("/api/test-many-rel-pagin-dtos/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateTestManyRelPaginDTO() throws Exception {
        // Initialize the database
        testManyRelPaginDTORepository.saveAndFlush(testManyRelPaginDTO);

        int databaseSizeBeforeUpdate = testManyRelPaginDTORepository.findAll().size();

        // Update the testManyRelPaginDTO
        TestManyRelPaginDTO updatedTestManyRelPaginDTO = testManyRelPaginDTORepository.findById(testManyRelPaginDTO.getId()).get();
        // Disconnect from session so that the updates on updatedTestManyRelPaginDTO are not directly saved in db
        em.detach(updatedTestManyRelPaginDTO);
        TestManyRelPaginDTODTO testManyRelPaginDTODTO = testManyRelPaginDTOMapper.toDto(updatedTestManyRelPaginDTO);

        restTestManyRelPaginDTOMockMvc.perform(put("/api/test-many-rel-pagin-dtos")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(testManyRelPaginDTODTO)))
            .andExpect(status().isOk());

        // Validate the TestManyRelPaginDTO in the database
        List<TestManyRelPaginDTO> testManyRelPaginDTOList = testManyRelPaginDTORepository.findAll();
        assertThat(testManyRelPaginDTOList).hasSize(databaseSizeBeforeUpdate);
        TestManyRelPaginDTO testTestManyRelPaginDTO = testManyRelPaginDTOList.get(testManyRelPaginDTOList.size() - 1);
    }

    @Test
    @Transactional
    public void updateNonExistingTestManyRelPaginDTO() throws Exception {
        int databaseSizeBeforeUpdate = testManyRelPaginDTORepository.findAll().size();

        // Create the TestManyRelPaginDTO
        TestManyRelPaginDTODTO testManyRelPaginDTODTO = testManyRelPaginDTOMapper.toDto(testManyRelPaginDTO);

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restTestManyRelPaginDTOMockMvc.perform(put("/api/test-many-rel-pagin-dtos")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(testManyRelPaginDTODTO)))
            .andExpect(status().isBadRequest());

        // Validate the TestManyRelPaginDTO in the database
        List<TestManyRelPaginDTO> testManyRelPaginDTOList = testManyRelPaginDTORepository.findAll();
        assertThat(testManyRelPaginDTOList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deleteTestManyRelPaginDTO() throws Exception {
        // Initialize the database
        testManyRelPaginDTORepository.saveAndFlush(testManyRelPaginDTO);

        int databaseSizeBeforeDelete = testManyRelPaginDTORepository.findAll().size();

        // Delete the testManyRelPaginDTO
        restTestManyRelPaginDTOMockMvc.perform(delete("/api/test-many-rel-pagin-dtos/{id}", testManyRelPaginDTO.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<TestManyRelPaginDTO> testManyRelPaginDTOList = testManyRelPaginDTORepository.findAll();
        assertThat(testManyRelPaginDTOList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
