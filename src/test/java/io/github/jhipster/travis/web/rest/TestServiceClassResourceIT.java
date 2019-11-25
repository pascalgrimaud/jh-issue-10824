package io.github.jhipster.travis.web.rest;

import io.github.jhipster.travis.TravisNg2App;
import io.github.jhipster.travis.domain.TestServiceClass;
import io.github.jhipster.travis.domain.TestManyToOne;
import io.github.jhipster.travis.domain.TestManyToMany;
import io.github.jhipster.travis.domain.TestOneToOne;
import io.github.jhipster.travis.domain.User;
import io.github.jhipster.travis.repository.TestServiceClassRepository;
import io.github.jhipster.travis.service.TestServiceClassService;
import io.github.jhipster.travis.web.rest.errors.ExceptionTranslator;
import io.github.jhipster.travis.service.dto.TestServiceClassCriteria;
import io.github.jhipster.travis.service.TestServiceClassQueryService;

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
 * Integration tests for the {@link TestServiceClassResource} REST controller.
 */
@SpringBootTest(classes = TravisNg2App.class)
public class TestServiceClassResourceIT {

    @Autowired
    private TestServiceClassRepository testServiceClassRepository;

    @Mock
    private TestServiceClassRepository testServiceClassRepositoryMock;

    @Mock
    private TestServiceClassService testServiceClassServiceMock;

    @Autowired
    private TestServiceClassService testServiceClassService;

    @Autowired
    private TestServiceClassQueryService testServiceClassQueryService;

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

    private MockMvc restTestServiceClassMockMvc;

    private TestServiceClass testServiceClass;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.initMocks(this);
        final TestServiceClassResource testServiceClassResource = new TestServiceClassResource(testServiceClassService, testServiceClassQueryService);
        this.restTestServiceClassMockMvc = MockMvcBuilders.standaloneSetup(testServiceClassResource)
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
    public static TestServiceClass createEntity(EntityManager em) {
        TestServiceClass testServiceClass = new TestServiceClass();
        return testServiceClass;
    }
    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static TestServiceClass createUpdatedEntity(EntityManager em) {
        TestServiceClass testServiceClass = new TestServiceClass();
        return testServiceClass;
    }

    @BeforeEach
    public void initTest() {
        testServiceClass = createEntity(em);
    }

    @Test
    @Transactional
    public void createTestServiceClass() throws Exception {
        int databaseSizeBeforeCreate = testServiceClassRepository.findAll().size();

        // Create the TestServiceClass
        restTestServiceClassMockMvc.perform(post("/api/test-service-classes")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(testServiceClass)))
            .andExpect(status().isCreated());

        // Validate the TestServiceClass in the database
        List<TestServiceClass> testServiceClassList = testServiceClassRepository.findAll();
        assertThat(testServiceClassList).hasSize(databaseSizeBeforeCreate + 1);
        TestServiceClass testTestServiceClass = testServiceClassList.get(testServiceClassList.size() - 1);
    }

    @Test
    @Transactional
    public void createTestServiceClassWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = testServiceClassRepository.findAll().size();

        // Create the TestServiceClass with an existing ID
        testServiceClass.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restTestServiceClassMockMvc.perform(post("/api/test-service-classes")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(testServiceClass)))
            .andExpect(status().isBadRequest());

        // Validate the TestServiceClass in the database
        List<TestServiceClass> testServiceClassList = testServiceClassRepository.findAll();
        assertThat(testServiceClassList).hasSize(databaseSizeBeforeCreate);
    }


    @Test
    @Transactional
    public void getAllTestServiceClasses() throws Exception {
        // Initialize the database
        testServiceClassRepository.saveAndFlush(testServiceClass);

        // Get all the testServiceClassList
        restTestServiceClassMockMvc.perform(get("/api/test-service-classes?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(testServiceClass.getId().intValue())));
    }
    
    @SuppressWarnings({"unchecked"})
    public void getAllTestServiceClassesWithEagerRelationshipsIsEnabled() throws Exception {
        TestServiceClassResource testServiceClassResource = new TestServiceClassResource(testServiceClassServiceMock, testServiceClassQueryService);
        when(testServiceClassServiceMock.findAllWithEagerRelationships(any())).thenReturn(new PageImpl(new ArrayList<>()));

        MockMvc restTestServiceClassMockMvc = MockMvcBuilders.standaloneSetup(testServiceClassResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setControllerAdvice(exceptionTranslator)
            .setConversionService(createFormattingConversionService())
            .setMessageConverters(jacksonMessageConverter).build();

        restTestServiceClassMockMvc.perform(get("/api/test-service-classes?eagerload=true"))
        .andExpect(status().isOk());

        verify(testServiceClassServiceMock, times(1)).findAllWithEagerRelationships(any());
    }

    @SuppressWarnings({"unchecked"})
    public void getAllTestServiceClassesWithEagerRelationshipsIsNotEnabled() throws Exception {
        TestServiceClassResource testServiceClassResource = new TestServiceClassResource(testServiceClassServiceMock, testServiceClassQueryService);
            when(testServiceClassServiceMock.findAllWithEagerRelationships(any())).thenReturn(new PageImpl(new ArrayList<>()));
            MockMvc restTestServiceClassMockMvc = MockMvcBuilders.standaloneSetup(testServiceClassResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setControllerAdvice(exceptionTranslator)
            .setConversionService(createFormattingConversionService())
            .setMessageConverters(jacksonMessageConverter).build();

        restTestServiceClassMockMvc.perform(get("/api/test-service-classes?eagerload=true"))
        .andExpect(status().isOk());

            verify(testServiceClassServiceMock, times(1)).findAllWithEagerRelationships(any());
    }

    @Test
    @Transactional
    public void getTestServiceClass() throws Exception {
        // Initialize the database
        testServiceClassRepository.saveAndFlush(testServiceClass);

        // Get the testServiceClass
        restTestServiceClassMockMvc.perform(get("/api/test-service-classes/{id}", testServiceClass.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(testServiceClass.getId().intValue()));
    }


    @Test
    @Transactional
    public void getTestServiceClassesByIdFiltering() throws Exception {
        // Initialize the database
        testServiceClassRepository.saveAndFlush(testServiceClass);

        Long id = testServiceClass.getId();

        defaultTestServiceClassShouldBeFound("id.equals=" + id);
        defaultTestServiceClassShouldNotBeFound("id.notEquals=" + id);

        defaultTestServiceClassShouldBeFound("id.greaterThanOrEqual=" + id);
        defaultTestServiceClassShouldNotBeFound("id.greaterThan=" + id);

        defaultTestServiceClassShouldBeFound("id.lessThanOrEqual=" + id);
        defaultTestServiceClassShouldNotBeFound("id.lessThan=" + id);
    }


    @Test
    @Transactional
    public void getAllTestServiceClassesByTestManyToOneIsEqualToSomething() throws Exception {
        // Initialize the database
        testServiceClassRepository.saveAndFlush(testServiceClass);
        TestManyToOne testManyToOne = TestManyToOneResourceIT.createEntity(em);
        em.persist(testManyToOne);
        em.flush();
        testServiceClass.addTestManyToOne(testManyToOne);
        testServiceClassRepository.saveAndFlush(testServiceClass);
        Long testManyToOneId = testManyToOne.getId();

        // Get all the testServiceClassList where testManyToOne equals to testManyToOneId
        defaultTestServiceClassShouldBeFound("testManyToOneId.equals=" + testManyToOneId);

        // Get all the testServiceClassList where testManyToOne equals to testManyToOneId + 1
        defaultTestServiceClassShouldNotBeFound("testManyToOneId.equals=" + (testManyToOneId + 1));
    }


    @Test
    @Transactional
    public void getAllTestServiceClassesByTestManyToManyIsEqualToSomething() throws Exception {
        // Initialize the database
        testServiceClassRepository.saveAndFlush(testServiceClass);
        TestManyToMany testManyToMany = TestManyToManyResourceIT.createEntity(em);
        em.persist(testManyToMany);
        em.flush();
        testServiceClass.addTestManyToMany(testManyToMany);
        testServiceClassRepository.saveAndFlush(testServiceClass);
        Long testManyToManyId = testManyToMany.getId();

        // Get all the testServiceClassList where testManyToMany equals to testManyToManyId
        defaultTestServiceClassShouldBeFound("testManyToManyId.equals=" + testManyToManyId);

        // Get all the testServiceClassList where testManyToMany equals to testManyToManyId + 1
        defaultTestServiceClassShouldNotBeFound("testManyToManyId.equals=" + (testManyToManyId + 1));
    }


    @Test
    @Transactional
    public void getAllTestServiceClassesByTestOneToOneIsEqualToSomething() throws Exception {
        // Initialize the database
        testServiceClassRepository.saveAndFlush(testServiceClass);
        TestOneToOne testOneToOne = TestOneToOneResourceIT.createEntity(em);
        em.persist(testOneToOne);
        em.flush();
        testServiceClass.setTestOneToOne(testOneToOne);
        testOneToOne.setTestServiceClass(testServiceClass);
        testServiceClassRepository.saveAndFlush(testServiceClass);
        Long testOneToOneId = testOneToOne.getId();

        // Get all the testServiceClassList where testOneToOne equals to testOneToOneId
        defaultTestServiceClassShouldBeFound("testOneToOneId.equals=" + testOneToOneId);

        // Get all the testServiceClassList where testOneToOne equals to testOneToOneId + 1
        defaultTestServiceClassShouldNotBeFound("testOneToOneId.equals=" + (testOneToOneId + 1));
    }


    @Test
    @Transactional
    public void getAllTestServiceClassesByUserOneToManyIsEqualToSomething() throws Exception {
        // Initialize the database
        testServiceClassRepository.saveAndFlush(testServiceClass);
        User userOneToMany = UserResourceIT.createEntity(em);
        em.persist(userOneToMany);
        em.flush();
        testServiceClass.setUserOneToMany(userOneToMany);
        testServiceClassRepository.saveAndFlush(testServiceClass);
        Long userOneToManyId = userOneToMany.getId();

        // Get all the testServiceClassList where userOneToMany equals to userOneToManyId
        defaultTestServiceClassShouldBeFound("userOneToManyId.equals=" + userOneToManyId);

        // Get all the testServiceClassList where userOneToMany equals to userOneToManyId + 1
        defaultTestServiceClassShouldNotBeFound("userOneToManyId.equals=" + (userOneToManyId + 1));
    }


    @Test
    @Transactional
    public void getAllTestServiceClassesByUserManyToManyIsEqualToSomething() throws Exception {
        // Initialize the database
        testServiceClassRepository.saveAndFlush(testServiceClass);
        User userManyToMany = UserResourceIT.createEntity(em);
        em.persist(userManyToMany);
        em.flush();
        testServiceClass.addUserManyToMany(userManyToMany);
        testServiceClassRepository.saveAndFlush(testServiceClass);
        Long userManyToManyId = userManyToMany.getId();

        // Get all the testServiceClassList where userManyToMany equals to userManyToManyId
        defaultTestServiceClassShouldBeFound("userManyToManyId.equals=" + userManyToManyId);

        // Get all the testServiceClassList where userManyToMany equals to userManyToManyId + 1
        defaultTestServiceClassShouldNotBeFound("userManyToManyId.equals=" + (userManyToManyId + 1));
    }


    @Test
    @Transactional
    public void getAllTestServiceClassesByUserOneToOneIsEqualToSomething() throws Exception {
        // Initialize the database
        testServiceClassRepository.saveAndFlush(testServiceClass);
        User userOneToOne = UserResourceIT.createEntity(em);
        em.persist(userOneToOne);
        em.flush();
        testServiceClass.setUserOneToOne(userOneToOne);
        testServiceClassRepository.saveAndFlush(testServiceClass);
        Long userOneToOneId = userOneToOne.getId();

        // Get all the testServiceClassList where userOneToOne equals to userOneToOneId
        defaultTestServiceClassShouldBeFound("userOneToOneId.equals=" + userOneToOneId);

        // Get all the testServiceClassList where userOneToOne equals to userOneToOneId + 1
        defaultTestServiceClassShouldNotBeFound("userOneToOneId.equals=" + (userOneToOneId + 1));
    }

    /**
     * Executes the search, and checks that the default entity is returned.
     */
    private void defaultTestServiceClassShouldBeFound(String filter) throws Exception {
        restTestServiceClassMockMvc.perform(get("/api/test-service-classes?sort=id,desc&" + filter))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(testServiceClass.getId().intValue())));

        // Check, that the count call also returns 1
        restTestServiceClassMockMvc.perform(get("/api/test-service-classes/count?sort=id,desc&" + filter))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(content().string("1"));
    }

    /**
     * Executes the search, and checks that the default entity is not returned.
     */
    private void defaultTestServiceClassShouldNotBeFound(String filter) throws Exception {
        restTestServiceClassMockMvc.perform(get("/api/test-service-classes?sort=id,desc&" + filter))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$").isArray())
            .andExpect(jsonPath("$").isEmpty());

        // Check, that the count call also returns 0
        restTestServiceClassMockMvc.perform(get("/api/test-service-classes/count?sort=id,desc&" + filter))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(content().string("0"));
    }


    @Test
    @Transactional
    public void getNonExistingTestServiceClass() throws Exception {
        // Get the testServiceClass
        restTestServiceClassMockMvc.perform(get("/api/test-service-classes/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateTestServiceClass() throws Exception {
        // Initialize the database
        testServiceClassService.save(testServiceClass);

        int databaseSizeBeforeUpdate = testServiceClassRepository.findAll().size();

        // Update the testServiceClass
        TestServiceClass updatedTestServiceClass = testServiceClassRepository.findById(testServiceClass.getId()).get();
        // Disconnect from session so that the updates on updatedTestServiceClass are not directly saved in db
        em.detach(updatedTestServiceClass);

        restTestServiceClassMockMvc.perform(put("/api/test-service-classes")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedTestServiceClass)))
            .andExpect(status().isOk());

        // Validate the TestServiceClass in the database
        List<TestServiceClass> testServiceClassList = testServiceClassRepository.findAll();
        assertThat(testServiceClassList).hasSize(databaseSizeBeforeUpdate);
        TestServiceClass testTestServiceClass = testServiceClassList.get(testServiceClassList.size() - 1);
    }

    @Test
    @Transactional
    public void updateNonExistingTestServiceClass() throws Exception {
        int databaseSizeBeforeUpdate = testServiceClassRepository.findAll().size();

        // Create the TestServiceClass

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restTestServiceClassMockMvc.perform(put("/api/test-service-classes")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(testServiceClass)))
            .andExpect(status().isBadRequest());

        // Validate the TestServiceClass in the database
        List<TestServiceClass> testServiceClassList = testServiceClassRepository.findAll();
        assertThat(testServiceClassList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deleteTestServiceClass() throws Exception {
        // Initialize the database
        testServiceClassService.save(testServiceClass);

        int databaseSizeBeforeDelete = testServiceClassRepository.findAll().size();

        // Delete the testServiceClass
        restTestServiceClassMockMvc.perform(delete("/api/test-service-classes/{id}", testServiceClass.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<TestServiceClass> testServiceClassList = testServiceClassRepository.findAll();
        assertThat(testServiceClassList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
