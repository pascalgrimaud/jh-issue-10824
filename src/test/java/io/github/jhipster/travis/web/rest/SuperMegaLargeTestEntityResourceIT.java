package io.github.jhipster.travis.web.rest;

import io.github.jhipster.travis.TravisNg2App;
import io.github.jhipster.travis.domain.SuperMegaLargeTestEntity;
import io.github.jhipster.travis.domain.User;
import io.github.jhipster.travis.repository.SuperMegaLargeTestEntityRepository;
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
 * Integration tests for the {@link SuperMegaLargeTestEntityResource} REST controller.
 */
@SpringBootTest(classes = TravisNg2App.class)
public class SuperMegaLargeTestEntityResourceIT {

    @Autowired
    private SuperMegaLargeTestEntityRepository superMegaLargeTestEntityRepository;

    @Mock
    private SuperMegaLargeTestEntityRepository superMegaLargeTestEntityRepositoryMock;

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

    private MockMvc restSuperMegaLargeTestEntityMockMvc;

    private SuperMegaLargeTestEntity superMegaLargeTestEntity;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.initMocks(this);
        final SuperMegaLargeTestEntityResource superMegaLargeTestEntityResource = new SuperMegaLargeTestEntityResource(superMegaLargeTestEntityRepository);
        this.restSuperMegaLargeTestEntityMockMvc = MockMvcBuilders.standaloneSetup(superMegaLargeTestEntityResource)
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
    public static SuperMegaLargeTestEntity createEntity(EntityManager em) {
        SuperMegaLargeTestEntity superMegaLargeTestEntity = new SuperMegaLargeTestEntity();
        // Add required entity
        User user = UserResourceIT.createEntity(em);
        em.persist(user);
        em.flush();
        superMegaLargeTestEntity.setSuperMegaLargeUserOneToMany(user);
        return superMegaLargeTestEntity;
    }
    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static SuperMegaLargeTestEntity createUpdatedEntity(EntityManager em) {
        SuperMegaLargeTestEntity superMegaLargeTestEntity = new SuperMegaLargeTestEntity();
        // Add required entity
        User user = UserResourceIT.createEntity(em);
        em.persist(user);
        em.flush();
        superMegaLargeTestEntity.setSuperMegaLargeUserOneToMany(user);
        return superMegaLargeTestEntity;
    }

    @BeforeEach
    public void initTest() {
        superMegaLargeTestEntity = createEntity(em);
    }

    @Test
    @Transactional
    public void createSuperMegaLargeTestEntity() throws Exception {
        int databaseSizeBeforeCreate = superMegaLargeTestEntityRepository.findAll().size();

        // Create the SuperMegaLargeTestEntity
        restSuperMegaLargeTestEntityMockMvc.perform(post("/api/super-mega-large-test-entities")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(superMegaLargeTestEntity)))
            .andExpect(status().isCreated());

        // Validate the SuperMegaLargeTestEntity in the database
        List<SuperMegaLargeTestEntity> superMegaLargeTestEntityList = superMegaLargeTestEntityRepository.findAll();
        assertThat(superMegaLargeTestEntityList).hasSize(databaseSizeBeforeCreate + 1);
        SuperMegaLargeTestEntity testSuperMegaLargeTestEntity = superMegaLargeTestEntityList.get(superMegaLargeTestEntityList.size() - 1);
    }

    @Test
    @Transactional
    public void createSuperMegaLargeTestEntityWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = superMegaLargeTestEntityRepository.findAll().size();

        // Create the SuperMegaLargeTestEntity with an existing ID
        superMegaLargeTestEntity.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restSuperMegaLargeTestEntityMockMvc.perform(post("/api/super-mega-large-test-entities")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(superMegaLargeTestEntity)))
            .andExpect(status().isBadRequest());

        // Validate the SuperMegaLargeTestEntity in the database
        List<SuperMegaLargeTestEntity> superMegaLargeTestEntityList = superMegaLargeTestEntityRepository.findAll();
        assertThat(superMegaLargeTestEntityList).hasSize(databaseSizeBeforeCreate);
    }


    @Test
    @Transactional
    public void getAllSuperMegaLargeTestEntities() throws Exception {
        // Initialize the database
        superMegaLargeTestEntityRepository.saveAndFlush(superMegaLargeTestEntity);

        // Get all the superMegaLargeTestEntityList
        restSuperMegaLargeTestEntityMockMvc.perform(get("/api/super-mega-large-test-entities?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(superMegaLargeTestEntity.getId().intValue())));
    }
    
    @SuppressWarnings({"unchecked"})
    public void getAllSuperMegaLargeTestEntitiesWithEagerRelationshipsIsEnabled() throws Exception {
        SuperMegaLargeTestEntityResource superMegaLargeTestEntityResource = new SuperMegaLargeTestEntityResource(superMegaLargeTestEntityRepositoryMock);
        when(superMegaLargeTestEntityRepositoryMock.findAllWithEagerRelationships(any())).thenReturn(new PageImpl(new ArrayList<>()));

        MockMvc restSuperMegaLargeTestEntityMockMvc = MockMvcBuilders.standaloneSetup(superMegaLargeTestEntityResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setControllerAdvice(exceptionTranslator)
            .setConversionService(createFormattingConversionService())
            .setMessageConverters(jacksonMessageConverter).build();

        restSuperMegaLargeTestEntityMockMvc.perform(get("/api/super-mega-large-test-entities?eagerload=true"))
        .andExpect(status().isOk());

        verify(superMegaLargeTestEntityRepositoryMock, times(1)).findAllWithEagerRelationships(any());
    }

    @SuppressWarnings({"unchecked"})
    public void getAllSuperMegaLargeTestEntitiesWithEagerRelationshipsIsNotEnabled() throws Exception {
        SuperMegaLargeTestEntityResource superMegaLargeTestEntityResource = new SuperMegaLargeTestEntityResource(superMegaLargeTestEntityRepositoryMock);
            when(superMegaLargeTestEntityRepositoryMock.findAllWithEagerRelationships(any())).thenReturn(new PageImpl(new ArrayList<>()));
            MockMvc restSuperMegaLargeTestEntityMockMvc = MockMvcBuilders.standaloneSetup(superMegaLargeTestEntityResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setControllerAdvice(exceptionTranslator)
            .setConversionService(createFormattingConversionService())
            .setMessageConverters(jacksonMessageConverter).build();

        restSuperMegaLargeTestEntityMockMvc.perform(get("/api/super-mega-large-test-entities?eagerload=true"))
        .andExpect(status().isOk());

            verify(superMegaLargeTestEntityRepositoryMock, times(1)).findAllWithEagerRelationships(any());
    }

    @Test
    @Transactional
    public void getSuperMegaLargeTestEntity() throws Exception {
        // Initialize the database
        superMegaLargeTestEntityRepository.saveAndFlush(superMegaLargeTestEntity);

        // Get the superMegaLargeTestEntity
        restSuperMegaLargeTestEntityMockMvc.perform(get("/api/super-mega-large-test-entities/{id}", superMegaLargeTestEntity.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(superMegaLargeTestEntity.getId().intValue()));
    }

    @Test
    @Transactional
    public void getNonExistingSuperMegaLargeTestEntity() throws Exception {
        // Get the superMegaLargeTestEntity
        restSuperMegaLargeTestEntityMockMvc.perform(get("/api/super-mega-large-test-entities/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateSuperMegaLargeTestEntity() throws Exception {
        // Initialize the database
        superMegaLargeTestEntityRepository.saveAndFlush(superMegaLargeTestEntity);

        int databaseSizeBeforeUpdate = superMegaLargeTestEntityRepository.findAll().size();

        // Update the superMegaLargeTestEntity
        SuperMegaLargeTestEntity updatedSuperMegaLargeTestEntity = superMegaLargeTestEntityRepository.findById(superMegaLargeTestEntity.getId()).get();
        // Disconnect from session so that the updates on updatedSuperMegaLargeTestEntity are not directly saved in db
        em.detach(updatedSuperMegaLargeTestEntity);

        restSuperMegaLargeTestEntityMockMvc.perform(put("/api/super-mega-large-test-entities")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedSuperMegaLargeTestEntity)))
            .andExpect(status().isOk());

        // Validate the SuperMegaLargeTestEntity in the database
        List<SuperMegaLargeTestEntity> superMegaLargeTestEntityList = superMegaLargeTestEntityRepository.findAll();
        assertThat(superMegaLargeTestEntityList).hasSize(databaseSizeBeforeUpdate);
        SuperMegaLargeTestEntity testSuperMegaLargeTestEntity = superMegaLargeTestEntityList.get(superMegaLargeTestEntityList.size() - 1);
    }

    @Test
    @Transactional
    public void updateNonExistingSuperMegaLargeTestEntity() throws Exception {
        int databaseSizeBeforeUpdate = superMegaLargeTestEntityRepository.findAll().size();

        // Create the SuperMegaLargeTestEntity

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restSuperMegaLargeTestEntityMockMvc.perform(put("/api/super-mega-large-test-entities")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(superMegaLargeTestEntity)))
            .andExpect(status().isBadRequest());

        // Validate the SuperMegaLargeTestEntity in the database
        List<SuperMegaLargeTestEntity> superMegaLargeTestEntityList = superMegaLargeTestEntityRepository.findAll();
        assertThat(superMegaLargeTestEntityList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deleteSuperMegaLargeTestEntity() throws Exception {
        // Initialize the database
        superMegaLargeTestEntityRepository.saveAndFlush(superMegaLargeTestEntity);

        int databaseSizeBeforeDelete = superMegaLargeTestEntityRepository.findAll().size();

        // Delete the superMegaLargeTestEntity
        restSuperMegaLargeTestEntityMockMvc.perform(delete("/api/super-mega-large-test-entities/{id}", superMegaLargeTestEntity.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<SuperMegaLargeTestEntity> superMegaLargeTestEntityList = superMegaLargeTestEntityRepository.findAll();
        assertThat(superMegaLargeTestEntityList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
