package io.github.jhipster.travis.web.rest;

import io.github.jhipster.travis.TravisNg2App;
import io.github.jhipster.travis.domain.EntityWithServiceImpl;
import io.github.jhipster.travis.repository.EntityWithServiceImplRepository;
import io.github.jhipster.travis.service.EntityWithServiceImplService;
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
 * Integration tests for the {@link EntityWithServiceImplResource} REST controller.
 */
@SpringBootTest(classes = TravisNg2App.class)
public class EntityWithServiceImplResourceIT {

    private static final String DEFAULT_CLARA = "AAAAAAAAAA";
    private static final String UPDATED_CLARA = "BBBBBBBBBB";

    @Autowired
    private EntityWithServiceImplRepository entityWithServiceImplRepository;

    @Autowired
    private EntityWithServiceImplService entityWithServiceImplService;

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

    private MockMvc restEntityWithServiceImplMockMvc;

    private EntityWithServiceImpl entityWithServiceImpl;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.initMocks(this);
        final EntityWithServiceImplResource entityWithServiceImplResource = new EntityWithServiceImplResource(entityWithServiceImplService);
        this.restEntityWithServiceImplMockMvc = MockMvcBuilders.standaloneSetup(entityWithServiceImplResource)
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
    public static EntityWithServiceImpl createEntity(EntityManager em) {
        EntityWithServiceImpl entityWithServiceImpl = new EntityWithServiceImpl()
            .clara(DEFAULT_CLARA);
        return entityWithServiceImpl;
    }
    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static EntityWithServiceImpl createUpdatedEntity(EntityManager em) {
        EntityWithServiceImpl entityWithServiceImpl = new EntityWithServiceImpl()
            .clara(UPDATED_CLARA);
        return entityWithServiceImpl;
    }

    @BeforeEach
    public void initTest() {
        entityWithServiceImpl = createEntity(em);
    }

    @Test
    @Transactional
    public void createEntityWithServiceImpl() throws Exception {
        int databaseSizeBeforeCreate = entityWithServiceImplRepository.findAll().size();

        // Create the EntityWithServiceImpl
        restEntityWithServiceImplMockMvc.perform(post("/api/entity-with-service-impls")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(entityWithServiceImpl)))
            .andExpect(status().isCreated());

        // Validate the EntityWithServiceImpl in the database
        List<EntityWithServiceImpl> entityWithServiceImplList = entityWithServiceImplRepository.findAll();
        assertThat(entityWithServiceImplList).hasSize(databaseSizeBeforeCreate + 1);
        EntityWithServiceImpl testEntityWithServiceImpl = entityWithServiceImplList.get(entityWithServiceImplList.size() - 1);
        assertThat(testEntityWithServiceImpl.getClara()).isEqualTo(DEFAULT_CLARA);
    }

    @Test
    @Transactional
    public void createEntityWithServiceImplWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = entityWithServiceImplRepository.findAll().size();

        // Create the EntityWithServiceImpl with an existing ID
        entityWithServiceImpl.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restEntityWithServiceImplMockMvc.perform(post("/api/entity-with-service-impls")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(entityWithServiceImpl)))
            .andExpect(status().isBadRequest());

        // Validate the EntityWithServiceImpl in the database
        List<EntityWithServiceImpl> entityWithServiceImplList = entityWithServiceImplRepository.findAll();
        assertThat(entityWithServiceImplList).hasSize(databaseSizeBeforeCreate);
    }


    @Test
    @Transactional
    public void getAllEntityWithServiceImpls() throws Exception {
        // Initialize the database
        entityWithServiceImplRepository.saveAndFlush(entityWithServiceImpl);

        // Get all the entityWithServiceImplList
        restEntityWithServiceImplMockMvc.perform(get("/api/entity-with-service-impls?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(entityWithServiceImpl.getId().intValue())))
            .andExpect(jsonPath("$.[*].clara").value(hasItem(DEFAULT_CLARA)));
    }
    
    @Test
    @Transactional
    public void getEntityWithServiceImpl() throws Exception {
        // Initialize the database
        entityWithServiceImplRepository.saveAndFlush(entityWithServiceImpl);

        // Get the entityWithServiceImpl
        restEntityWithServiceImplMockMvc.perform(get("/api/entity-with-service-impls/{id}", entityWithServiceImpl.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(entityWithServiceImpl.getId().intValue()))
            .andExpect(jsonPath("$.clara").value(DEFAULT_CLARA));
    }

    @Test
    @Transactional
    public void getNonExistingEntityWithServiceImpl() throws Exception {
        // Get the entityWithServiceImpl
        restEntityWithServiceImplMockMvc.perform(get("/api/entity-with-service-impls/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateEntityWithServiceImpl() throws Exception {
        // Initialize the database
        entityWithServiceImplService.save(entityWithServiceImpl);

        int databaseSizeBeforeUpdate = entityWithServiceImplRepository.findAll().size();

        // Update the entityWithServiceImpl
        EntityWithServiceImpl updatedEntityWithServiceImpl = entityWithServiceImplRepository.findById(entityWithServiceImpl.getId()).get();
        // Disconnect from session so that the updates on updatedEntityWithServiceImpl are not directly saved in db
        em.detach(updatedEntityWithServiceImpl);
        updatedEntityWithServiceImpl
            .clara(UPDATED_CLARA);

        restEntityWithServiceImplMockMvc.perform(put("/api/entity-with-service-impls")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedEntityWithServiceImpl)))
            .andExpect(status().isOk());

        // Validate the EntityWithServiceImpl in the database
        List<EntityWithServiceImpl> entityWithServiceImplList = entityWithServiceImplRepository.findAll();
        assertThat(entityWithServiceImplList).hasSize(databaseSizeBeforeUpdate);
        EntityWithServiceImpl testEntityWithServiceImpl = entityWithServiceImplList.get(entityWithServiceImplList.size() - 1);
        assertThat(testEntityWithServiceImpl.getClara()).isEqualTo(UPDATED_CLARA);
    }

    @Test
    @Transactional
    public void updateNonExistingEntityWithServiceImpl() throws Exception {
        int databaseSizeBeforeUpdate = entityWithServiceImplRepository.findAll().size();

        // Create the EntityWithServiceImpl

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restEntityWithServiceImplMockMvc.perform(put("/api/entity-with-service-impls")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(entityWithServiceImpl)))
            .andExpect(status().isBadRequest());

        // Validate the EntityWithServiceImpl in the database
        List<EntityWithServiceImpl> entityWithServiceImplList = entityWithServiceImplRepository.findAll();
        assertThat(entityWithServiceImplList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deleteEntityWithServiceImpl() throws Exception {
        // Initialize the database
        entityWithServiceImplService.save(entityWithServiceImpl);

        int databaseSizeBeforeDelete = entityWithServiceImplRepository.findAll().size();

        // Delete the entityWithServiceImpl
        restEntityWithServiceImplMockMvc.perform(delete("/api/entity-with-service-impls/{id}", entityWithServiceImpl.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<EntityWithServiceImpl> entityWithServiceImplList = entityWithServiceImplRepository.findAll();
        assertThat(entityWithServiceImplList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
