package io.github.jhipster.travis.web.rest;

import io.github.jhipster.travis.TravisNg2App;
import io.github.jhipster.travis.domain.TestTwoRelationshipsSameEntity;
import io.github.jhipster.travis.domain.Division;
import io.github.jhipster.travis.repository.TestTwoRelationshipsSameEntityRepository;
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
 * Integration tests for the {@link TestTwoRelationshipsSameEntityResource} REST controller.
 */
@SpringBootTest(classes = TravisNg2App.class)
public class TestTwoRelationshipsSameEntityResourceIT {

    @Autowired
    private TestTwoRelationshipsSameEntityRepository testTwoRelationshipsSameEntityRepository;

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

    private MockMvc restTestTwoRelationshipsSameEntityMockMvc;

    private TestTwoRelationshipsSameEntity testTwoRelationshipsSameEntity;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.initMocks(this);
        final TestTwoRelationshipsSameEntityResource testTwoRelationshipsSameEntityResource = new TestTwoRelationshipsSameEntityResource(testTwoRelationshipsSameEntityRepository);
        this.restTestTwoRelationshipsSameEntityMockMvc = MockMvcBuilders.standaloneSetup(testTwoRelationshipsSameEntityResource)
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
    public static TestTwoRelationshipsSameEntity createEntity(EntityManager em) {
        TestTwoRelationshipsSameEntity testTwoRelationshipsSameEntity = new TestTwoRelationshipsSameEntity();
        // Add required entity
        Division division;
        if (TestUtil.findAll(em, Division.class).isEmpty()) {
            division = DivisionResourceIT.createEntity(em);
            em.persist(division);
            em.flush();
        } else {
            division = TestUtil.findAll(em, Division.class).get(0);
        }
        testTwoRelationshipsSameEntity.setFirstUniqueRequiredRelation(division);
        // Add required entity
        testTwoRelationshipsSameEntity.setSecondUniqueRequiredRelation(division);
        return testTwoRelationshipsSameEntity;
    }
    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static TestTwoRelationshipsSameEntity createUpdatedEntity(EntityManager em) {
        TestTwoRelationshipsSameEntity testTwoRelationshipsSameEntity = new TestTwoRelationshipsSameEntity();
        // Add required entity
        Division division;
        if (TestUtil.findAll(em, Division.class).isEmpty()) {
            division = DivisionResourceIT.createUpdatedEntity(em);
            em.persist(division);
            em.flush();
        } else {
            division = TestUtil.findAll(em, Division.class).get(0);
        }
        testTwoRelationshipsSameEntity.setFirstUniqueRequiredRelation(division);
        // Add required entity
        testTwoRelationshipsSameEntity.setSecondUniqueRequiredRelation(division);
        return testTwoRelationshipsSameEntity;
    }

    @BeforeEach
    public void initTest() {
        testTwoRelationshipsSameEntity = createEntity(em);
    }

    @Test
    @Transactional
    public void createTestTwoRelationshipsSameEntity() throws Exception {
        int databaseSizeBeforeCreate = testTwoRelationshipsSameEntityRepository.findAll().size();

        // Create the TestTwoRelationshipsSameEntity
        restTestTwoRelationshipsSameEntityMockMvc.perform(post("/api/test-two-relationships-same-entities")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(testTwoRelationshipsSameEntity)))
            .andExpect(status().isCreated());

        // Validate the TestTwoRelationshipsSameEntity in the database
        List<TestTwoRelationshipsSameEntity> testTwoRelationshipsSameEntityList = testTwoRelationshipsSameEntityRepository.findAll();
        assertThat(testTwoRelationshipsSameEntityList).hasSize(databaseSizeBeforeCreate + 1);
        TestTwoRelationshipsSameEntity testTestTwoRelationshipsSameEntity = testTwoRelationshipsSameEntityList.get(testTwoRelationshipsSameEntityList.size() - 1);
    }

    @Test
    @Transactional
    public void createTestTwoRelationshipsSameEntityWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = testTwoRelationshipsSameEntityRepository.findAll().size();

        // Create the TestTwoRelationshipsSameEntity with an existing ID
        testTwoRelationshipsSameEntity.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restTestTwoRelationshipsSameEntityMockMvc.perform(post("/api/test-two-relationships-same-entities")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(testTwoRelationshipsSameEntity)))
            .andExpect(status().isBadRequest());

        // Validate the TestTwoRelationshipsSameEntity in the database
        List<TestTwoRelationshipsSameEntity> testTwoRelationshipsSameEntityList = testTwoRelationshipsSameEntityRepository.findAll();
        assertThat(testTwoRelationshipsSameEntityList).hasSize(databaseSizeBeforeCreate);
    }


    @Test
    @Transactional
    public void getAllTestTwoRelationshipsSameEntities() throws Exception {
        // Initialize the database
        testTwoRelationshipsSameEntityRepository.saveAndFlush(testTwoRelationshipsSameEntity);

        // Get all the testTwoRelationshipsSameEntityList
        restTestTwoRelationshipsSameEntityMockMvc.perform(get("/api/test-two-relationships-same-entities?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(testTwoRelationshipsSameEntity.getId().intValue())));
    }
    
    @Test
    @Transactional
    public void getTestTwoRelationshipsSameEntity() throws Exception {
        // Initialize the database
        testTwoRelationshipsSameEntityRepository.saveAndFlush(testTwoRelationshipsSameEntity);

        // Get the testTwoRelationshipsSameEntity
        restTestTwoRelationshipsSameEntityMockMvc.perform(get("/api/test-two-relationships-same-entities/{id}", testTwoRelationshipsSameEntity.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(testTwoRelationshipsSameEntity.getId().intValue()));
    }

    @Test
    @Transactional
    public void getNonExistingTestTwoRelationshipsSameEntity() throws Exception {
        // Get the testTwoRelationshipsSameEntity
        restTestTwoRelationshipsSameEntityMockMvc.perform(get("/api/test-two-relationships-same-entities/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateTestTwoRelationshipsSameEntity() throws Exception {
        // Initialize the database
        testTwoRelationshipsSameEntityRepository.saveAndFlush(testTwoRelationshipsSameEntity);

        int databaseSizeBeforeUpdate = testTwoRelationshipsSameEntityRepository.findAll().size();

        // Update the testTwoRelationshipsSameEntity
        TestTwoRelationshipsSameEntity updatedTestTwoRelationshipsSameEntity = testTwoRelationshipsSameEntityRepository.findById(testTwoRelationshipsSameEntity.getId()).get();
        // Disconnect from session so that the updates on updatedTestTwoRelationshipsSameEntity are not directly saved in db
        em.detach(updatedTestTwoRelationshipsSameEntity);

        restTestTwoRelationshipsSameEntityMockMvc.perform(put("/api/test-two-relationships-same-entities")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedTestTwoRelationshipsSameEntity)))
            .andExpect(status().isOk());

        // Validate the TestTwoRelationshipsSameEntity in the database
        List<TestTwoRelationshipsSameEntity> testTwoRelationshipsSameEntityList = testTwoRelationshipsSameEntityRepository.findAll();
        assertThat(testTwoRelationshipsSameEntityList).hasSize(databaseSizeBeforeUpdate);
        TestTwoRelationshipsSameEntity testTestTwoRelationshipsSameEntity = testTwoRelationshipsSameEntityList.get(testTwoRelationshipsSameEntityList.size() - 1);
    }

    @Test
    @Transactional
    public void updateNonExistingTestTwoRelationshipsSameEntity() throws Exception {
        int databaseSizeBeforeUpdate = testTwoRelationshipsSameEntityRepository.findAll().size();

        // Create the TestTwoRelationshipsSameEntity

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restTestTwoRelationshipsSameEntityMockMvc.perform(put("/api/test-two-relationships-same-entities")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(testTwoRelationshipsSameEntity)))
            .andExpect(status().isBadRequest());

        // Validate the TestTwoRelationshipsSameEntity in the database
        List<TestTwoRelationshipsSameEntity> testTwoRelationshipsSameEntityList = testTwoRelationshipsSameEntityRepository.findAll();
        assertThat(testTwoRelationshipsSameEntityList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deleteTestTwoRelationshipsSameEntity() throws Exception {
        // Initialize the database
        testTwoRelationshipsSameEntityRepository.saveAndFlush(testTwoRelationshipsSameEntity);

        int databaseSizeBeforeDelete = testTwoRelationshipsSameEntityRepository.findAll().size();

        // Delete the testTwoRelationshipsSameEntity
        restTestTwoRelationshipsSameEntityMockMvc.perform(delete("/api/test-two-relationships-same-entities/{id}", testTwoRelationshipsSameEntity.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<TestTwoRelationshipsSameEntity> testTwoRelationshipsSameEntityList = testTwoRelationshipsSameEntityRepository.findAll();
        assertThat(testTwoRelationshipsSameEntityList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
