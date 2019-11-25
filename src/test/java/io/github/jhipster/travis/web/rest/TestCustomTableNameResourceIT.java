package io.github.jhipster.travis.web.rest;

import io.github.jhipster.travis.TravisNg2App;
import io.github.jhipster.travis.domain.TestCustomTableName;
import io.github.jhipster.travis.domain.TestEntity;
import io.github.jhipster.travis.domain.SuperMegaLargeTestEntity;
import io.github.jhipster.travis.repository.TestCustomTableNameRepository;
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
 * Integration tests for the {@link TestCustomTableNameResource} REST controller.
 */
@SpringBootTest(classes = TravisNg2App.class)
public class TestCustomTableNameResourceIT {

    @Autowired
    private TestCustomTableNameRepository testCustomTableNameRepository;

    @Mock
    private TestCustomTableNameRepository testCustomTableNameRepositoryMock;

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

    private MockMvc restTestCustomTableNameMockMvc;

    private TestCustomTableName testCustomTableName;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.initMocks(this);
        final TestCustomTableNameResource testCustomTableNameResource = new TestCustomTableNameResource(testCustomTableNameRepository);
        this.restTestCustomTableNameMockMvc = MockMvcBuilders.standaloneSetup(testCustomTableNameResource)
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
    public static TestCustomTableName createEntity(EntityManager em) {
        TestCustomTableName testCustomTableName = new TestCustomTableName();
        // Add required entity
        TestEntity testEntity;
        if (TestUtil.findAll(em, TestEntity.class).isEmpty()) {
            testEntity = TestEntityResourceIT.createEntity(em);
            em.persist(testEntity);
            em.flush();
        } else {
            testEntity = TestUtil.findAll(em, TestEntity.class).get(0);
        }
        testCustomTableName.setTestEntity(testEntity);
        // Add required entity
        SuperMegaLargeTestEntity superMegaLargeTestEntity;
        if (TestUtil.findAll(em, SuperMegaLargeTestEntity.class).isEmpty()) {
            superMegaLargeTestEntity = SuperMegaLargeTestEntityResourceIT.createEntity(em);
            em.persist(superMegaLargeTestEntity);
            em.flush();
        } else {
            superMegaLargeTestEntity = TestUtil.findAll(em, SuperMegaLargeTestEntity.class).get(0);
        }
        testCustomTableName.setSuperMegaLargeTestEntity(superMegaLargeTestEntity);
        return testCustomTableName;
    }
    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static TestCustomTableName createUpdatedEntity(EntityManager em) {
        TestCustomTableName testCustomTableName = new TestCustomTableName();
        // Add required entity
        TestEntity testEntity;
        if (TestUtil.findAll(em, TestEntity.class).isEmpty()) {
            testEntity = TestEntityResourceIT.createUpdatedEntity(em);
            em.persist(testEntity);
            em.flush();
        } else {
            testEntity = TestUtil.findAll(em, TestEntity.class).get(0);
        }
        testCustomTableName.setTestEntity(testEntity);
        // Add required entity
        SuperMegaLargeTestEntity superMegaLargeTestEntity;
        if (TestUtil.findAll(em, SuperMegaLargeTestEntity.class).isEmpty()) {
            superMegaLargeTestEntity = SuperMegaLargeTestEntityResourceIT.createUpdatedEntity(em);
            em.persist(superMegaLargeTestEntity);
            em.flush();
        } else {
            superMegaLargeTestEntity = TestUtil.findAll(em, SuperMegaLargeTestEntity.class).get(0);
        }
        testCustomTableName.setSuperMegaLargeTestEntity(superMegaLargeTestEntity);
        return testCustomTableName;
    }

    @BeforeEach
    public void initTest() {
        testCustomTableName = createEntity(em);
    }

    @Test
    @Transactional
    public void createTestCustomTableName() throws Exception {
        int databaseSizeBeforeCreate = testCustomTableNameRepository.findAll().size();

        // Create the TestCustomTableName
        restTestCustomTableNameMockMvc.perform(post("/api/test-custom-table-names")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(testCustomTableName)))
            .andExpect(status().isCreated());

        // Validate the TestCustomTableName in the database
        List<TestCustomTableName> testCustomTableNameList = testCustomTableNameRepository.findAll();
        assertThat(testCustomTableNameList).hasSize(databaseSizeBeforeCreate + 1);
        TestCustomTableName testTestCustomTableName = testCustomTableNameList.get(testCustomTableNameList.size() - 1);
    }

    @Test
    @Transactional
    public void createTestCustomTableNameWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = testCustomTableNameRepository.findAll().size();

        // Create the TestCustomTableName with an existing ID
        testCustomTableName.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restTestCustomTableNameMockMvc.perform(post("/api/test-custom-table-names")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(testCustomTableName)))
            .andExpect(status().isBadRequest());

        // Validate the TestCustomTableName in the database
        List<TestCustomTableName> testCustomTableNameList = testCustomTableNameRepository.findAll();
        assertThat(testCustomTableNameList).hasSize(databaseSizeBeforeCreate);
    }


    @Test
    @Transactional
    public void getAllTestCustomTableNames() throws Exception {
        // Initialize the database
        testCustomTableNameRepository.saveAndFlush(testCustomTableName);

        // Get all the testCustomTableNameList
        restTestCustomTableNameMockMvc.perform(get("/api/test-custom-table-names?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(testCustomTableName.getId().intValue())));
    }
    
    @SuppressWarnings({"unchecked"})
    public void getAllTestCustomTableNamesWithEagerRelationshipsIsEnabled() throws Exception {
        TestCustomTableNameResource testCustomTableNameResource = new TestCustomTableNameResource(testCustomTableNameRepositoryMock);
        when(testCustomTableNameRepositoryMock.findAllWithEagerRelationships(any())).thenReturn(new PageImpl(new ArrayList<>()));

        MockMvc restTestCustomTableNameMockMvc = MockMvcBuilders.standaloneSetup(testCustomTableNameResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setControllerAdvice(exceptionTranslator)
            .setConversionService(createFormattingConversionService())
            .setMessageConverters(jacksonMessageConverter).build();

        restTestCustomTableNameMockMvc.perform(get("/api/test-custom-table-names?eagerload=true"))
        .andExpect(status().isOk());

        verify(testCustomTableNameRepositoryMock, times(1)).findAllWithEagerRelationships(any());
    }

    @SuppressWarnings({"unchecked"})
    public void getAllTestCustomTableNamesWithEagerRelationshipsIsNotEnabled() throws Exception {
        TestCustomTableNameResource testCustomTableNameResource = new TestCustomTableNameResource(testCustomTableNameRepositoryMock);
            when(testCustomTableNameRepositoryMock.findAllWithEagerRelationships(any())).thenReturn(new PageImpl(new ArrayList<>()));
            MockMvc restTestCustomTableNameMockMvc = MockMvcBuilders.standaloneSetup(testCustomTableNameResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setControllerAdvice(exceptionTranslator)
            .setConversionService(createFormattingConversionService())
            .setMessageConverters(jacksonMessageConverter).build();

        restTestCustomTableNameMockMvc.perform(get("/api/test-custom-table-names?eagerload=true"))
        .andExpect(status().isOk());

            verify(testCustomTableNameRepositoryMock, times(1)).findAllWithEagerRelationships(any());
    }

    @Test
    @Transactional
    public void getTestCustomTableName() throws Exception {
        // Initialize the database
        testCustomTableNameRepository.saveAndFlush(testCustomTableName);

        // Get the testCustomTableName
        restTestCustomTableNameMockMvc.perform(get("/api/test-custom-table-names/{id}", testCustomTableName.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(testCustomTableName.getId().intValue()));
    }

    @Test
    @Transactional
    public void getNonExistingTestCustomTableName() throws Exception {
        // Get the testCustomTableName
        restTestCustomTableNameMockMvc.perform(get("/api/test-custom-table-names/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateTestCustomTableName() throws Exception {
        // Initialize the database
        testCustomTableNameRepository.saveAndFlush(testCustomTableName);

        int databaseSizeBeforeUpdate = testCustomTableNameRepository.findAll().size();

        // Update the testCustomTableName
        TestCustomTableName updatedTestCustomTableName = testCustomTableNameRepository.findById(testCustomTableName.getId()).get();
        // Disconnect from session so that the updates on updatedTestCustomTableName are not directly saved in db
        em.detach(updatedTestCustomTableName);

        restTestCustomTableNameMockMvc.perform(put("/api/test-custom-table-names")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedTestCustomTableName)))
            .andExpect(status().isOk());

        // Validate the TestCustomTableName in the database
        List<TestCustomTableName> testCustomTableNameList = testCustomTableNameRepository.findAll();
        assertThat(testCustomTableNameList).hasSize(databaseSizeBeforeUpdate);
        TestCustomTableName testTestCustomTableName = testCustomTableNameList.get(testCustomTableNameList.size() - 1);
    }

    @Test
    @Transactional
    public void updateNonExistingTestCustomTableName() throws Exception {
        int databaseSizeBeforeUpdate = testCustomTableNameRepository.findAll().size();

        // Create the TestCustomTableName

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restTestCustomTableNameMockMvc.perform(put("/api/test-custom-table-names")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(testCustomTableName)))
            .andExpect(status().isBadRequest());

        // Validate the TestCustomTableName in the database
        List<TestCustomTableName> testCustomTableNameList = testCustomTableNameRepository.findAll();
        assertThat(testCustomTableNameList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deleteTestCustomTableName() throws Exception {
        // Initialize the database
        testCustomTableNameRepository.saveAndFlush(testCustomTableName);

        int databaseSizeBeforeDelete = testCustomTableNameRepository.findAll().size();

        // Delete the testCustomTableName
        restTestCustomTableNameMockMvc.perform(delete("/api/test-custom-table-names/{id}", testCustomTableName.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<TestCustomTableName> testCustomTableNameList = testCustomTableNameRepository.findAll();
        assertThat(testCustomTableNameList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
