package io.github.jhipster.travis.web.rest;

import io.github.jhipster.travis.TravisNg2App;
import io.github.jhipster.travis.domain.TestManyToOne;
import io.github.jhipster.travis.repository.TestManyToOneRepository;
import io.github.jhipster.travis.web.rest.errors.ExceptionTranslator;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.web.PageableHandlerMethodArgumentResolver;
import org.springframework.http.MediaType;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.Validator;

import javax.persistence.EntityManager;
import java.util.List;

import static io.github.jhipster.travis.web.rest.TestUtil.createFormattingConversionService;
import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Integration tests for the {@link TestManyToOneResource} REST controller.
 */
@SpringBootTest(classes = TravisNg2App.class)
public class TestManyToOneResourceIT {

    @Autowired
    private TestManyToOneRepository testManyToOneRepository;

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

    private MockMvc restTestManyToOneMockMvc;

    private TestManyToOne testManyToOne;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.initMocks(this);
        final TestManyToOneResource testManyToOneResource = new TestManyToOneResource(testManyToOneRepository);
        this.restTestManyToOneMockMvc = MockMvcBuilders.standaloneSetup(testManyToOneResource)
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
    public static TestManyToOne createEntity(EntityManager em) {
        TestManyToOne testManyToOne = new TestManyToOne();
        return testManyToOne;
    }
    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static TestManyToOne createUpdatedEntity(EntityManager em) {
        TestManyToOne testManyToOne = new TestManyToOne();
        return testManyToOne;
    }

    @BeforeEach
    public void initTest() {
        testManyToOne = createEntity(em);
    }

    @Test
    @Transactional
    public void createTestManyToOne() throws Exception {
        int databaseSizeBeforeCreate = testManyToOneRepository.findAll().size();

        // Create the TestManyToOne
        restTestManyToOneMockMvc.perform(post("/api/test-many-to-ones")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(testManyToOne)))
            .andExpect(status().isCreated());

        // Validate the TestManyToOne in the database
        List<TestManyToOne> testManyToOneList = testManyToOneRepository.findAll();
        assertThat(testManyToOneList).hasSize(databaseSizeBeforeCreate + 1);
        TestManyToOne testTestManyToOne = testManyToOneList.get(testManyToOneList.size() - 1);
    }

    @Test
    @Transactional
    public void createTestManyToOneWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = testManyToOneRepository.findAll().size();

        // Create the TestManyToOne with an existing ID
        testManyToOne.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restTestManyToOneMockMvc.perform(post("/api/test-many-to-ones")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(testManyToOne)))
            .andExpect(status().isBadRequest());

        // Validate the TestManyToOne in the database
        List<TestManyToOne> testManyToOneList = testManyToOneRepository.findAll();
        assertThat(testManyToOneList).hasSize(databaseSizeBeforeCreate);
    }


    @Test
    @Transactional
    public void getAllTestManyToOnes() throws Exception {
        // Initialize the database
        testManyToOneRepository.saveAndFlush(testManyToOne);

        // Get all the testManyToOneList
        restTestManyToOneMockMvc.perform(get("/api/test-many-to-ones?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(testManyToOne.getId().intValue())));
    }
    
    @Test
    @Transactional
    public void getTestManyToOne() throws Exception {
        // Initialize the database
        testManyToOneRepository.saveAndFlush(testManyToOne);

        // Get the testManyToOne
        restTestManyToOneMockMvc.perform(get("/api/test-many-to-ones/{id}", testManyToOne.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(testManyToOne.getId().intValue()));
    }

    @Test
    @Transactional
    public void getNonExistingTestManyToOne() throws Exception {
        // Get the testManyToOne
        restTestManyToOneMockMvc.perform(get("/api/test-many-to-ones/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateTestManyToOne() throws Exception {
        // Initialize the database
        testManyToOneRepository.saveAndFlush(testManyToOne);

        int databaseSizeBeforeUpdate = testManyToOneRepository.findAll().size();

        // Update the testManyToOne
        TestManyToOne updatedTestManyToOne = testManyToOneRepository.findById(testManyToOne.getId()).get();
        // Disconnect from session so that the updates on updatedTestManyToOne are not directly saved in db
        em.detach(updatedTestManyToOne);

        restTestManyToOneMockMvc.perform(put("/api/test-many-to-ones")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedTestManyToOne)))
            .andExpect(status().isOk());

        // Validate the TestManyToOne in the database
        List<TestManyToOne> testManyToOneList = testManyToOneRepository.findAll();
        assertThat(testManyToOneList).hasSize(databaseSizeBeforeUpdate);
        TestManyToOne testTestManyToOne = testManyToOneList.get(testManyToOneList.size() - 1);
    }

    @Test
    @Transactional
    public void updateNonExistingTestManyToOne() throws Exception {
        int databaseSizeBeforeUpdate = testManyToOneRepository.findAll().size();

        // Create the TestManyToOne

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restTestManyToOneMockMvc.perform(put("/api/test-many-to-ones")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(testManyToOne)))
            .andExpect(status().isBadRequest());

        // Validate the TestManyToOne in the database
        List<TestManyToOne> testManyToOneList = testManyToOneRepository.findAll();
        assertThat(testManyToOneList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deleteTestManyToOne() throws Exception {
        // Initialize the database
        testManyToOneRepository.saveAndFlush(testManyToOne);

        int databaseSizeBeforeDelete = testManyToOneRepository.findAll().size();

        // Delete the testManyToOne
        restTestManyToOneMockMvc.perform(delete("/api/test-many-to-ones/{id}", testManyToOne.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<TestManyToOne> testManyToOneList = testManyToOneRepository.findAll();
        assertThat(testManyToOneList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
