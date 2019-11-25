package io.github.jhipster.travis.web.rest;

import io.github.jhipster.travis.TravisNg2App;
import io.github.jhipster.travis.domain.TestOneToOne;
import io.github.jhipster.travis.repository.TestOneToOneRepository;
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
 * Integration tests for the {@link TestOneToOneResource} REST controller.
 */
@SpringBootTest(classes = TravisNg2App.class)
public class TestOneToOneResourceIT {

    @Autowired
    private TestOneToOneRepository testOneToOneRepository;

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

    private MockMvc restTestOneToOneMockMvc;

    private TestOneToOne testOneToOne;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.initMocks(this);
        final TestOneToOneResource testOneToOneResource = new TestOneToOneResource(testOneToOneRepository);
        this.restTestOneToOneMockMvc = MockMvcBuilders.standaloneSetup(testOneToOneResource)
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
    public static TestOneToOne createEntity(EntityManager em) {
        TestOneToOne testOneToOne = new TestOneToOne();
        return testOneToOne;
    }
    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static TestOneToOne createUpdatedEntity(EntityManager em) {
        TestOneToOne testOneToOne = new TestOneToOne();
        return testOneToOne;
    }

    @BeforeEach
    public void initTest() {
        testOneToOne = createEntity(em);
    }

    @Test
    @Transactional
    public void createTestOneToOne() throws Exception {
        int databaseSizeBeforeCreate = testOneToOneRepository.findAll().size();

        // Create the TestOneToOne
        restTestOneToOneMockMvc.perform(post("/api/test-one-to-ones")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(testOneToOne)))
            .andExpect(status().isCreated());

        // Validate the TestOneToOne in the database
        List<TestOneToOne> testOneToOneList = testOneToOneRepository.findAll();
        assertThat(testOneToOneList).hasSize(databaseSizeBeforeCreate + 1);
        TestOneToOne testTestOneToOne = testOneToOneList.get(testOneToOneList.size() - 1);
    }

    @Test
    @Transactional
    public void createTestOneToOneWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = testOneToOneRepository.findAll().size();

        // Create the TestOneToOne with an existing ID
        testOneToOne.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restTestOneToOneMockMvc.perform(post("/api/test-one-to-ones")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(testOneToOne)))
            .andExpect(status().isBadRequest());

        // Validate the TestOneToOne in the database
        List<TestOneToOne> testOneToOneList = testOneToOneRepository.findAll();
        assertThat(testOneToOneList).hasSize(databaseSizeBeforeCreate);
    }


    @Test
    @Transactional
    public void getAllTestOneToOnes() throws Exception {
        // Initialize the database
        testOneToOneRepository.saveAndFlush(testOneToOne);

        // Get all the testOneToOneList
        restTestOneToOneMockMvc.perform(get("/api/test-one-to-ones?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(testOneToOne.getId().intValue())));
    }
    
    @Test
    @Transactional
    public void getTestOneToOne() throws Exception {
        // Initialize the database
        testOneToOneRepository.saveAndFlush(testOneToOne);

        // Get the testOneToOne
        restTestOneToOneMockMvc.perform(get("/api/test-one-to-ones/{id}", testOneToOne.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(testOneToOne.getId().intValue()));
    }

    @Test
    @Transactional
    public void getNonExistingTestOneToOne() throws Exception {
        // Get the testOneToOne
        restTestOneToOneMockMvc.perform(get("/api/test-one-to-ones/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateTestOneToOne() throws Exception {
        // Initialize the database
        testOneToOneRepository.saveAndFlush(testOneToOne);

        int databaseSizeBeforeUpdate = testOneToOneRepository.findAll().size();

        // Update the testOneToOne
        TestOneToOne updatedTestOneToOne = testOneToOneRepository.findById(testOneToOne.getId()).get();
        // Disconnect from session so that the updates on updatedTestOneToOne are not directly saved in db
        em.detach(updatedTestOneToOne);

        restTestOneToOneMockMvc.perform(put("/api/test-one-to-ones")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedTestOneToOne)))
            .andExpect(status().isOk());

        // Validate the TestOneToOne in the database
        List<TestOneToOne> testOneToOneList = testOneToOneRepository.findAll();
        assertThat(testOneToOneList).hasSize(databaseSizeBeforeUpdate);
        TestOneToOne testTestOneToOne = testOneToOneList.get(testOneToOneList.size() - 1);
    }

    @Test
    @Transactional
    public void updateNonExistingTestOneToOne() throws Exception {
        int databaseSizeBeforeUpdate = testOneToOneRepository.findAll().size();

        // Create the TestOneToOne

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restTestOneToOneMockMvc.perform(put("/api/test-one-to-ones")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(testOneToOne)))
            .andExpect(status().isBadRequest());

        // Validate the TestOneToOne in the database
        List<TestOneToOne> testOneToOneList = testOneToOneRepository.findAll();
        assertThat(testOneToOneList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deleteTestOneToOne() throws Exception {
        // Initialize the database
        testOneToOneRepository.saveAndFlush(testOneToOne);

        int databaseSizeBeforeDelete = testOneToOneRepository.findAll().size();

        // Delete the testOneToOne
        restTestOneToOneMockMvc.perform(delete("/api/test-one-to-ones/{id}", testOneToOne.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<TestOneToOne> testOneToOneList = testOneToOneRepository.findAll();
        assertThat(testOneToOneList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
