package io.github.jhipster.travis.web.rest;

import io.github.jhipster.travis.TravisNg2App;
import io.github.jhipster.travis.domain.TestPagination;
import io.github.jhipster.travis.repository.TestPaginationRepository;
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
 * Integration tests for the {@link TestPaginationResource} REST controller.
 */
@SpringBootTest(classes = TravisNg2App.class)
public class TestPaginationResourceIT {

    @Autowired
    private TestPaginationRepository testPaginationRepository;

    @Mock
    private TestPaginationRepository testPaginationRepositoryMock;

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

    private MockMvc restTestPaginationMockMvc;

    private TestPagination testPagination;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.initMocks(this);
        final TestPaginationResource testPaginationResource = new TestPaginationResource(testPaginationRepository);
        this.restTestPaginationMockMvc = MockMvcBuilders.standaloneSetup(testPaginationResource)
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
    public static TestPagination createEntity(EntityManager em) {
        TestPagination testPagination = new TestPagination();
        return testPagination;
    }
    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static TestPagination createUpdatedEntity(EntityManager em) {
        TestPagination testPagination = new TestPagination();
        return testPagination;
    }

    @BeforeEach
    public void initTest() {
        testPagination = createEntity(em);
    }

    @Test
    @Transactional
    public void createTestPagination() throws Exception {
        int databaseSizeBeforeCreate = testPaginationRepository.findAll().size();

        // Create the TestPagination
        restTestPaginationMockMvc.perform(post("/api/test-paginations")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(testPagination)))
            .andExpect(status().isCreated());

        // Validate the TestPagination in the database
        List<TestPagination> testPaginationList = testPaginationRepository.findAll();
        assertThat(testPaginationList).hasSize(databaseSizeBeforeCreate + 1);
        TestPagination testTestPagination = testPaginationList.get(testPaginationList.size() - 1);
    }

    @Test
    @Transactional
    public void createTestPaginationWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = testPaginationRepository.findAll().size();

        // Create the TestPagination with an existing ID
        testPagination.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restTestPaginationMockMvc.perform(post("/api/test-paginations")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(testPagination)))
            .andExpect(status().isBadRequest());

        // Validate the TestPagination in the database
        List<TestPagination> testPaginationList = testPaginationRepository.findAll();
        assertThat(testPaginationList).hasSize(databaseSizeBeforeCreate);
    }


    @Test
    @Transactional
    public void getAllTestPaginations() throws Exception {
        // Initialize the database
        testPaginationRepository.saveAndFlush(testPagination);

        // Get all the testPaginationList
        restTestPaginationMockMvc.perform(get("/api/test-paginations?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(testPagination.getId().intValue())));
    }
    
    @SuppressWarnings({"unchecked"})
    public void getAllTestPaginationsWithEagerRelationshipsIsEnabled() throws Exception {
        TestPaginationResource testPaginationResource = new TestPaginationResource(testPaginationRepositoryMock);
        when(testPaginationRepositoryMock.findAllWithEagerRelationships(any())).thenReturn(new PageImpl(new ArrayList<>()));

        MockMvc restTestPaginationMockMvc = MockMvcBuilders.standaloneSetup(testPaginationResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setControllerAdvice(exceptionTranslator)
            .setConversionService(createFormattingConversionService())
            .setMessageConverters(jacksonMessageConverter).build();

        restTestPaginationMockMvc.perform(get("/api/test-paginations?eagerload=true"))
        .andExpect(status().isOk());

        verify(testPaginationRepositoryMock, times(1)).findAllWithEagerRelationships(any());
    }

    @SuppressWarnings({"unchecked"})
    public void getAllTestPaginationsWithEagerRelationshipsIsNotEnabled() throws Exception {
        TestPaginationResource testPaginationResource = new TestPaginationResource(testPaginationRepositoryMock);
            when(testPaginationRepositoryMock.findAllWithEagerRelationships(any())).thenReturn(new PageImpl(new ArrayList<>()));
            MockMvc restTestPaginationMockMvc = MockMvcBuilders.standaloneSetup(testPaginationResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setControllerAdvice(exceptionTranslator)
            .setConversionService(createFormattingConversionService())
            .setMessageConverters(jacksonMessageConverter).build();

        restTestPaginationMockMvc.perform(get("/api/test-paginations?eagerload=true"))
        .andExpect(status().isOk());

            verify(testPaginationRepositoryMock, times(1)).findAllWithEagerRelationships(any());
    }

    @Test
    @Transactional
    public void getTestPagination() throws Exception {
        // Initialize the database
        testPaginationRepository.saveAndFlush(testPagination);

        // Get the testPagination
        restTestPaginationMockMvc.perform(get("/api/test-paginations/{id}", testPagination.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(testPagination.getId().intValue()));
    }

    @Test
    @Transactional
    public void getNonExistingTestPagination() throws Exception {
        // Get the testPagination
        restTestPaginationMockMvc.perform(get("/api/test-paginations/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateTestPagination() throws Exception {
        // Initialize the database
        testPaginationRepository.saveAndFlush(testPagination);

        int databaseSizeBeforeUpdate = testPaginationRepository.findAll().size();

        // Update the testPagination
        TestPagination updatedTestPagination = testPaginationRepository.findById(testPagination.getId()).get();
        // Disconnect from session so that the updates on updatedTestPagination are not directly saved in db
        em.detach(updatedTestPagination);

        restTestPaginationMockMvc.perform(put("/api/test-paginations")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedTestPagination)))
            .andExpect(status().isOk());

        // Validate the TestPagination in the database
        List<TestPagination> testPaginationList = testPaginationRepository.findAll();
        assertThat(testPaginationList).hasSize(databaseSizeBeforeUpdate);
        TestPagination testTestPagination = testPaginationList.get(testPaginationList.size() - 1);
    }

    @Test
    @Transactional
    public void updateNonExistingTestPagination() throws Exception {
        int databaseSizeBeforeUpdate = testPaginationRepository.findAll().size();

        // Create the TestPagination

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restTestPaginationMockMvc.perform(put("/api/test-paginations")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(testPagination)))
            .andExpect(status().isBadRequest());

        // Validate the TestPagination in the database
        List<TestPagination> testPaginationList = testPaginationRepository.findAll();
        assertThat(testPaginationList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deleteTestPagination() throws Exception {
        // Initialize the database
        testPaginationRepository.saveAndFlush(testPagination);

        int databaseSizeBeforeDelete = testPaginationRepository.findAll().size();

        // Delete the testPagination
        restTestPaginationMockMvc.perform(delete("/api/test-paginations/{id}", testPagination.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<TestPagination> testPaginationList = testPaginationRepository.findAll();
        assertThat(testPaginationList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
