package io.github.jhipster.travis.web.rest;

import io.github.jhipster.travis.TravisNg2App;
import io.github.jhipster.travis.domain.TestMapstruct;
import io.github.jhipster.travis.repository.TestMapstructRepository;
import io.github.jhipster.travis.service.dto.TestMapstructDTO;
import io.github.jhipster.travis.service.mapper.TestMapstructMapper;
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
 * Integration tests for the {@link TestMapstructResource} REST controller.
 */
@SpringBootTest(classes = TravisNg2App.class)
public class TestMapstructResourceIT {

    @Autowired
    private TestMapstructRepository testMapstructRepository;

    @Mock
    private TestMapstructRepository testMapstructRepositoryMock;

    @Autowired
    private TestMapstructMapper testMapstructMapper;

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

    private MockMvc restTestMapstructMockMvc;

    private TestMapstruct testMapstruct;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.initMocks(this);
        final TestMapstructResource testMapstructResource = new TestMapstructResource(testMapstructRepository, testMapstructMapper);
        this.restTestMapstructMockMvc = MockMvcBuilders.standaloneSetup(testMapstructResource)
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
    public static TestMapstruct createEntity(EntityManager em) {
        TestMapstruct testMapstruct = new TestMapstruct();
        return testMapstruct;
    }
    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static TestMapstruct createUpdatedEntity(EntityManager em) {
        TestMapstruct testMapstruct = new TestMapstruct();
        return testMapstruct;
    }

    @BeforeEach
    public void initTest() {
        testMapstruct = createEntity(em);
    }

    @Test
    @Transactional
    public void createTestMapstruct() throws Exception {
        int databaseSizeBeforeCreate = testMapstructRepository.findAll().size();

        // Create the TestMapstruct
        TestMapstructDTO testMapstructDTO = testMapstructMapper.toDto(testMapstruct);
        restTestMapstructMockMvc.perform(post("/api/test-mapstructs")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(testMapstructDTO)))
            .andExpect(status().isCreated());

        // Validate the TestMapstruct in the database
        List<TestMapstruct> testMapstructList = testMapstructRepository.findAll();
        assertThat(testMapstructList).hasSize(databaseSizeBeforeCreate + 1);
        TestMapstruct testTestMapstruct = testMapstructList.get(testMapstructList.size() - 1);
    }

    @Test
    @Transactional
    public void createTestMapstructWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = testMapstructRepository.findAll().size();

        // Create the TestMapstruct with an existing ID
        testMapstruct.setId(1L);
        TestMapstructDTO testMapstructDTO = testMapstructMapper.toDto(testMapstruct);

        // An entity with an existing ID cannot be created, so this API call must fail
        restTestMapstructMockMvc.perform(post("/api/test-mapstructs")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(testMapstructDTO)))
            .andExpect(status().isBadRequest());

        // Validate the TestMapstruct in the database
        List<TestMapstruct> testMapstructList = testMapstructRepository.findAll();
        assertThat(testMapstructList).hasSize(databaseSizeBeforeCreate);
    }


    @Test
    @Transactional
    public void getAllTestMapstructs() throws Exception {
        // Initialize the database
        testMapstructRepository.saveAndFlush(testMapstruct);

        // Get all the testMapstructList
        restTestMapstructMockMvc.perform(get("/api/test-mapstructs?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(testMapstruct.getId().intValue())));
    }
    
    @SuppressWarnings({"unchecked"})
    public void getAllTestMapstructsWithEagerRelationshipsIsEnabled() throws Exception {
        TestMapstructResource testMapstructResource = new TestMapstructResource(testMapstructRepositoryMock, testMapstructMapper);
        when(testMapstructRepositoryMock.findAllWithEagerRelationships(any())).thenReturn(new PageImpl(new ArrayList<>()));

        MockMvc restTestMapstructMockMvc = MockMvcBuilders.standaloneSetup(testMapstructResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setControllerAdvice(exceptionTranslator)
            .setConversionService(createFormattingConversionService())
            .setMessageConverters(jacksonMessageConverter).build();

        restTestMapstructMockMvc.perform(get("/api/test-mapstructs?eagerload=true"))
        .andExpect(status().isOk());

        verify(testMapstructRepositoryMock, times(1)).findAllWithEagerRelationships(any());
    }

    @SuppressWarnings({"unchecked"})
    public void getAllTestMapstructsWithEagerRelationshipsIsNotEnabled() throws Exception {
        TestMapstructResource testMapstructResource = new TestMapstructResource(testMapstructRepositoryMock, testMapstructMapper);
            when(testMapstructRepositoryMock.findAllWithEagerRelationships(any())).thenReturn(new PageImpl(new ArrayList<>()));
            MockMvc restTestMapstructMockMvc = MockMvcBuilders.standaloneSetup(testMapstructResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setControllerAdvice(exceptionTranslator)
            .setConversionService(createFormattingConversionService())
            .setMessageConverters(jacksonMessageConverter).build();

        restTestMapstructMockMvc.perform(get("/api/test-mapstructs?eagerload=true"))
        .andExpect(status().isOk());

            verify(testMapstructRepositoryMock, times(1)).findAllWithEagerRelationships(any());
    }

    @Test
    @Transactional
    public void getTestMapstruct() throws Exception {
        // Initialize the database
        testMapstructRepository.saveAndFlush(testMapstruct);

        // Get the testMapstruct
        restTestMapstructMockMvc.perform(get("/api/test-mapstructs/{id}", testMapstruct.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(testMapstruct.getId().intValue()));
    }

    @Test
    @Transactional
    public void getNonExistingTestMapstruct() throws Exception {
        // Get the testMapstruct
        restTestMapstructMockMvc.perform(get("/api/test-mapstructs/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateTestMapstruct() throws Exception {
        // Initialize the database
        testMapstructRepository.saveAndFlush(testMapstruct);

        int databaseSizeBeforeUpdate = testMapstructRepository.findAll().size();

        // Update the testMapstruct
        TestMapstruct updatedTestMapstruct = testMapstructRepository.findById(testMapstruct.getId()).get();
        // Disconnect from session so that the updates on updatedTestMapstruct are not directly saved in db
        em.detach(updatedTestMapstruct);
        TestMapstructDTO testMapstructDTO = testMapstructMapper.toDto(updatedTestMapstruct);

        restTestMapstructMockMvc.perform(put("/api/test-mapstructs")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(testMapstructDTO)))
            .andExpect(status().isOk());

        // Validate the TestMapstruct in the database
        List<TestMapstruct> testMapstructList = testMapstructRepository.findAll();
        assertThat(testMapstructList).hasSize(databaseSizeBeforeUpdate);
        TestMapstruct testTestMapstruct = testMapstructList.get(testMapstructList.size() - 1);
    }

    @Test
    @Transactional
    public void updateNonExistingTestMapstruct() throws Exception {
        int databaseSizeBeforeUpdate = testMapstructRepository.findAll().size();

        // Create the TestMapstruct
        TestMapstructDTO testMapstructDTO = testMapstructMapper.toDto(testMapstruct);

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restTestMapstructMockMvc.perform(put("/api/test-mapstructs")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(testMapstructDTO)))
            .andExpect(status().isBadRequest());

        // Validate the TestMapstruct in the database
        List<TestMapstruct> testMapstructList = testMapstructRepository.findAll();
        assertThat(testMapstructList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deleteTestMapstruct() throws Exception {
        // Initialize the database
        testMapstructRepository.saveAndFlush(testMapstruct);

        int databaseSizeBeforeDelete = testMapstructRepository.findAll().size();

        // Delete the testMapstruct
        restTestMapstructMockMvc.perform(delete("/api/test-mapstructs/{id}", testMapstruct.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<TestMapstruct> testMapstructList = testMapstructRepository.findAll();
        assertThat(testMapstructList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
