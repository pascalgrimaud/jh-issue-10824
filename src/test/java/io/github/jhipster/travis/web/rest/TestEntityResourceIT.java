package io.github.jhipster.travis.web.rest;

import io.github.jhipster.travis.TravisNg2App;
import io.github.jhipster.travis.domain.TestEntity;
import io.github.jhipster.travis.domain.User;
import io.github.jhipster.travis.repository.TestEntityRepository;
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
 * Integration tests for the {@link TestEntityResource} REST controller.
 */
@SpringBootTest(classes = TravisNg2App.class)
public class TestEntityResourceIT {

    @Autowired
    private TestEntityRepository testEntityRepository;

    @Mock
    private TestEntityRepository testEntityRepositoryMock;

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

    private MockMvc restTestEntityMockMvc;

    private TestEntity testEntity;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.initMocks(this);
        final TestEntityResource testEntityResource = new TestEntityResource(testEntityRepository);
        this.restTestEntityMockMvc = MockMvcBuilders.standaloneSetup(testEntityResource)
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
    public static TestEntity createEntity(EntityManager em) {
        TestEntity testEntity = new TestEntity();
        // Add required entity
        User user = UserResourceIT.createEntity(em);
        em.persist(user);
        em.flush();
        testEntity.setUserOneToMany(user);
        return testEntity;
    }
    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static TestEntity createUpdatedEntity(EntityManager em) {
        TestEntity testEntity = new TestEntity();
        // Add required entity
        User user = UserResourceIT.createEntity(em);
        em.persist(user);
        em.flush();
        testEntity.setUserOneToMany(user);
        return testEntity;
    }

    @BeforeEach
    public void initTest() {
        testEntity = createEntity(em);
    }

    @Test
    @Transactional
    public void createTestEntity() throws Exception {
        int databaseSizeBeforeCreate = testEntityRepository.findAll().size();

        // Create the TestEntity
        restTestEntityMockMvc.perform(post("/api/test-entities")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(testEntity)))
            .andExpect(status().isCreated());

        // Validate the TestEntity in the database
        List<TestEntity> testEntityList = testEntityRepository.findAll();
        assertThat(testEntityList).hasSize(databaseSizeBeforeCreate + 1);
        TestEntity testTestEntity = testEntityList.get(testEntityList.size() - 1);
    }

    @Test
    @Transactional
    public void createTestEntityWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = testEntityRepository.findAll().size();

        // Create the TestEntity with an existing ID
        testEntity.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restTestEntityMockMvc.perform(post("/api/test-entities")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(testEntity)))
            .andExpect(status().isBadRequest());

        // Validate the TestEntity in the database
        List<TestEntity> testEntityList = testEntityRepository.findAll();
        assertThat(testEntityList).hasSize(databaseSizeBeforeCreate);
    }


    @Test
    @Transactional
    public void getAllTestEntities() throws Exception {
        // Initialize the database
        testEntityRepository.saveAndFlush(testEntity);

        // Get all the testEntityList
        restTestEntityMockMvc.perform(get("/api/test-entities?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(testEntity.getId().intValue())));
    }
    
    @SuppressWarnings({"unchecked"})
    public void getAllTestEntitiesWithEagerRelationshipsIsEnabled() throws Exception {
        TestEntityResource testEntityResource = new TestEntityResource(testEntityRepositoryMock);
        when(testEntityRepositoryMock.findAllWithEagerRelationships(any())).thenReturn(new PageImpl(new ArrayList<>()));

        MockMvc restTestEntityMockMvc = MockMvcBuilders.standaloneSetup(testEntityResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setControllerAdvice(exceptionTranslator)
            .setConversionService(createFormattingConversionService())
            .setMessageConverters(jacksonMessageConverter).build();

        restTestEntityMockMvc.perform(get("/api/test-entities?eagerload=true"))
        .andExpect(status().isOk());

        verify(testEntityRepositoryMock, times(1)).findAllWithEagerRelationships(any());
    }

    @SuppressWarnings({"unchecked"})
    public void getAllTestEntitiesWithEagerRelationshipsIsNotEnabled() throws Exception {
        TestEntityResource testEntityResource = new TestEntityResource(testEntityRepositoryMock);
            when(testEntityRepositoryMock.findAllWithEagerRelationships(any())).thenReturn(new PageImpl(new ArrayList<>()));
            MockMvc restTestEntityMockMvc = MockMvcBuilders.standaloneSetup(testEntityResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setControllerAdvice(exceptionTranslator)
            .setConversionService(createFormattingConversionService())
            .setMessageConverters(jacksonMessageConverter).build();

        restTestEntityMockMvc.perform(get("/api/test-entities?eagerload=true"))
        .andExpect(status().isOk());

            verify(testEntityRepositoryMock, times(1)).findAllWithEagerRelationships(any());
    }

    @Test
    @Transactional
    public void getTestEntity() throws Exception {
        // Initialize the database
        testEntityRepository.saveAndFlush(testEntity);

        // Get the testEntity
        restTestEntityMockMvc.perform(get("/api/test-entities/{id}", testEntity.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(testEntity.getId().intValue()));
    }

    @Test
    @Transactional
    public void getNonExistingTestEntity() throws Exception {
        // Get the testEntity
        restTestEntityMockMvc.perform(get("/api/test-entities/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateTestEntity() throws Exception {
        // Initialize the database
        testEntityRepository.saveAndFlush(testEntity);

        int databaseSizeBeforeUpdate = testEntityRepository.findAll().size();

        // Update the testEntity
        TestEntity updatedTestEntity = testEntityRepository.findById(testEntity.getId()).get();
        // Disconnect from session so that the updates on updatedTestEntity are not directly saved in db
        em.detach(updatedTestEntity);

        restTestEntityMockMvc.perform(put("/api/test-entities")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedTestEntity)))
            .andExpect(status().isOk());

        // Validate the TestEntity in the database
        List<TestEntity> testEntityList = testEntityRepository.findAll();
        assertThat(testEntityList).hasSize(databaseSizeBeforeUpdate);
        TestEntity testTestEntity = testEntityList.get(testEntityList.size() - 1);
    }

    @Test
    @Transactional
    public void updateNonExistingTestEntity() throws Exception {
        int databaseSizeBeforeUpdate = testEntityRepository.findAll().size();

        // Create the TestEntity

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restTestEntityMockMvc.perform(put("/api/test-entities")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(testEntity)))
            .andExpect(status().isBadRequest());

        // Validate the TestEntity in the database
        List<TestEntity> testEntityList = testEntityRepository.findAll();
        assertThat(testEntityList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deleteTestEntity() throws Exception {
        // Initialize the database
        testEntityRepository.saveAndFlush(testEntity);

        int databaseSizeBeforeDelete = testEntityRepository.findAll().size();

        // Delete the testEntity
        restTestEntityMockMvc.perform(delete("/api/test-entities/{id}", testEntity.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<TestEntity> testEntityList = testEntityRepository.findAll();
        assertThat(testEntityList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
