package io.github.jhipster.travis.web.rest;

import io.github.jhipster.travis.TravisNg2App;
import io.github.jhipster.travis.domain.TestManyToMany;
import io.github.jhipster.travis.repository.TestManyToManyRepository;
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
 * Integration tests for the {@link TestManyToManyResource} REST controller.
 */
@SpringBootTest(classes = TravisNg2App.class)
public class TestManyToManyResourceIT {

    @Autowired
    private TestManyToManyRepository testManyToManyRepository;

    @Mock
    private TestManyToManyRepository testManyToManyRepositoryMock;

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

    private MockMvc restTestManyToManyMockMvc;

    private TestManyToMany testManyToMany;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.initMocks(this);
        final TestManyToManyResource testManyToManyResource = new TestManyToManyResource(testManyToManyRepository);
        this.restTestManyToManyMockMvc = MockMvcBuilders.standaloneSetup(testManyToManyResource)
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
    public static TestManyToMany createEntity(EntityManager em) {
        TestManyToMany testManyToMany = new TestManyToMany();
        return testManyToMany;
    }
    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static TestManyToMany createUpdatedEntity(EntityManager em) {
        TestManyToMany testManyToMany = new TestManyToMany();
        return testManyToMany;
    }

    @BeforeEach
    public void initTest() {
        testManyToMany = createEntity(em);
    }

    @Test
    @Transactional
    public void createTestManyToMany() throws Exception {
        int databaseSizeBeforeCreate = testManyToManyRepository.findAll().size();

        // Create the TestManyToMany
        restTestManyToManyMockMvc.perform(post("/api/test-many-to-manies")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(testManyToMany)))
            .andExpect(status().isCreated());

        // Validate the TestManyToMany in the database
        List<TestManyToMany> testManyToManyList = testManyToManyRepository.findAll();
        assertThat(testManyToManyList).hasSize(databaseSizeBeforeCreate + 1);
        TestManyToMany testTestManyToMany = testManyToManyList.get(testManyToManyList.size() - 1);
    }

    @Test
    @Transactional
    public void createTestManyToManyWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = testManyToManyRepository.findAll().size();

        // Create the TestManyToMany with an existing ID
        testManyToMany.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restTestManyToManyMockMvc.perform(post("/api/test-many-to-manies")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(testManyToMany)))
            .andExpect(status().isBadRequest());

        // Validate the TestManyToMany in the database
        List<TestManyToMany> testManyToManyList = testManyToManyRepository.findAll();
        assertThat(testManyToManyList).hasSize(databaseSizeBeforeCreate);
    }


    @Test
    @Transactional
    public void getAllTestManyToManies() throws Exception {
        // Initialize the database
        testManyToManyRepository.saveAndFlush(testManyToMany);

        // Get all the testManyToManyList
        restTestManyToManyMockMvc.perform(get("/api/test-many-to-manies?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(testManyToMany.getId().intValue())));
    }
    
    @SuppressWarnings({"unchecked"})
    public void getAllTestManyToManiesWithEagerRelationshipsIsEnabled() throws Exception {
        TestManyToManyResource testManyToManyResource = new TestManyToManyResource(testManyToManyRepositoryMock);
        when(testManyToManyRepositoryMock.findAllWithEagerRelationships(any())).thenReturn(new PageImpl(new ArrayList<>()));

        MockMvc restTestManyToManyMockMvc = MockMvcBuilders.standaloneSetup(testManyToManyResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setControllerAdvice(exceptionTranslator)
            .setConversionService(createFormattingConversionService())
            .setMessageConverters(jacksonMessageConverter).build();

        restTestManyToManyMockMvc.perform(get("/api/test-many-to-manies?eagerload=true"))
        .andExpect(status().isOk());

        verify(testManyToManyRepositoryMock, times(1)).findAllWithEagerRelationships(any());
    }

    @SuppressWarnings({"unchecked"})
    public void getAllTestManyToManiesWithEagerRelationshipsIsNotEnabled() throws Exception {
        TestManyToManyResource testManyToManyResource = new TestManyToManyResource(testManyToManyRepositoryMock);
            when(testManyToManyRepositoryMock.findAllWithEagerRelationships(any())).thenReturn(new PageImpl(new ArrayList<>()));
            MockMvc restTestManyToManyMockMvc = MockMvcBuilders.standaloneSetup(testManyToManyResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setControllerAdvice(exceptionTranslator)
            .setConversionService(createFormattingConversionService())
            .setMessageConverters(jacksonMessageConverter).build();

        restTestManyToManyMockMvc.perform(get("/api/test-many-to-manies?eagerload=true"))
        .andExpect(status().isOk());

            verify(testManyToManyRepositoryMock, times(1)).findAllWithEagerRelationships(any());
    }

    @Test
    @Transactional
    public void getTestManyToMany() throws Exception {
        // Initialize the database
        testManyToManyRepository.saveAndFlush(testManyToMany);

        // Get the testManyToMany
        restTestManyToManyMockMvc.perform(get("/api/test-many-to-manies/{id}", testManyToMany.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(testManyToMany.getId().intValue()));
    }

    @Test
    @Transactional
    public void getNonExistingTestManyToMany() throws Exception {
        // Get the testManyToMany
        restTestManyToManyMockMvc.perform(get("/api/test-many-to-manies/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateTestManyToMany() throws Exception {
        // Initialize the database
        testManyToManyRepository.saveAndFlush(testManyToMany);

        int databaseSizeBeforeUpdate = testManyToManyRepository.findAll().size();

        // Update the testManyToMany
        TestManyToMany updatedTestManyToMany = testManyToManyRepository.findById(testManyToMany.getId()).get();
        // Disconnect from session so that the updates on updatedTestManyToMany are not directly saved in db
        em.detach(updatedTestManyToMany);

        restTestManyToManyMockMvc.perform(put("/api/test-many-to-manies")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedTestManyToMany)))
            .andExpect(status().isOk());

        // Validate the TestManyToMany in the database
        List<TestManyToMany> testManyToManyList = testManyToManyRepository.findAll();
        assertThat(testManyToManyList).hasSize(databaseSizeBeforeUpdate);
        TestManyToMany testTestManyToMany = testManyToManyList.get(testManyToManyList.size() - 1);
    }

    @Test
    @Transactional
    public void updateNonExistingTestManyToMany() throws Exception {
        int databaseSizeBeforeUpdate = testManyToManyRepository.findAll().size();

        // Create the TestManyToMany

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restTestManyToManyMockMvc.perform(put("/api/test-many-to-manies")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(testManyToMany)))
            .andExpect(status().isBadRequest());

        // Validate the TestManyToMany in the database
        List<TestManyToMany> testManyToManyList = testManyToManyRepository.findAll();
        assertThat(testManyToManyList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deleteTestManyToMany() throws Exception {
        // Initialize the database
        testManyToManyRepository.saveAndFlush(testManyToMany);

        int databaseSizeBeforeDelete = testManyToManyRepository.findAll().size();

        // Delete the testManyToMany
        restTestManyToManyMockMvc.perform(delete("/api/test-many-to-manies/{id}", testManyToMany.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<TestManyToMany> testManyToManyList = testManyToManyRepository.findAll();
        assertThat(testManyToManyList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
