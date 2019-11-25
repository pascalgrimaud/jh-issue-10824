package io.github.jhipster.travis.web.rest;

import io.github.jhipster.travis.TravisNg2App;
import io.github.jhipster.travis.domain.EntityWithServiceClassAndDTO;
import io.github.jhipster.travis.repository.EntityWithServiceClassAndDTORepository;
import io.github.jhipster.travis.service.EntityWithServiceClassAndDTOService;
import io.github.jhipster.travis.service.dto.EntityWithServiceClassAndDTODTO;
import io.github.jhipster.travis.service.mapper.EntityWithServiceClassAndDTOMapper;
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
 * Integration tests for the {@link EntityWithServiceClassAndDTOResource} REST controller.
 */
@SpringBootTest(classes = TravisNg2App.class)
public class EntityWithServiceClassAndDTOResourceIT {

    private static final String DEFAULT_LUCAS = "AAAAAAAAAA";
    private static final String UPDATED_LUCAS = "BBBBBBBBBB";

    @Autowired
    private EntityWithServiceClassAndDTORepository entityWithServiceClassAndDTORepository;

    @Autowired
    private EntityWithServiceClassAndDTOMapper entityWithServiceClassAndDTOMapper;

    @Autowired
    private EntityWithServiceClassAndDTOService entityWithServiceClassAndDTOService;

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

    private MockMvc restEntityWithServiceClassAndDTOMockMvc;

    private EntityWithServiceClassAndDTO entityWithServiceClassAndDTO;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.initMocks(this);
        final EntityWithServiceClassAndDTOResource entityWithServiceClassAndDTOResource = new EntityWithServiceClassAndDTOResource(entityWithServiceClassAndDTOService);
        this.restEntityWithServiceClassAndDTOMockMvc = MockMvcBuilders.standaloneSetup(entityWithServiceClassAndDTOResource)
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
    public static EntityWithServiceClassAndDTO createEntity(EntityManager em) {
        EntityWithServiceClassAndDTO entityWithServiceClassAndDTO = new EntityWithServiceClassAndDTO()
            .lucas(DEFAULT_LUCAS);
        return entityWithServiceClassAndDTO;
    }
    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static EntityWithServiceClassAndDTO createUpdatedEntity(EntityManager em) {
        EntityWithServiceClassAndDTO entityWithServiceClassAndDTO = new EntityWithServiceClassAndDTO()
            .lucas(UPDATED_LUCAS);
        return entityWithServiceClassAndDTO;
    }

    @BeforeEach
    public void initTest() {
        entityWithServiceClassAndDTO = createEntity(em);
    }

    @Test
    @Transactional
    public void createEntityWithServiceClassAndDTO() throws Exception {
        int databaseSizeBeforeCreate = entityWithServiceClassAndDTORepository.findAll().size();

        // Create the EntityWithServiceClassAndDTO
        EntityWithServiceClassAndDTODTO entityWithServiceClassAndDTODTO = entityWithServiceClassAndDTOMapper.toDto(entityWithServiceClassAndDTO);
        restEntityWithServiceClassAndDTOMockMvc.perform(post("/api/entity-with-service-class-and-dtos")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(entityWithServiceClassAndDTODTO)))
            .andExpect(status().isCreated());

        // Validate the EntityWithServiceClassAndDTO in the database
        List<EntityWithServiceClassAndDTO> entityWithServiceClassAndDTOList = entityWithServiceClassAndDTORepository.findAll();
        assertThat(entityWithServiceClassAndDTOList).hasSize(databaseSizeBeforeCreate + 1);
        EntityWithServiceClassAndDTO testEntityWithServiceClassAndDTO = entityWithServiceClassAndDTOList.get(entityWithServiceClassAndDTOList.size() - 1);
        assertThat(testEntityWithServiceClassAndDTO.getLucas()).isEqualTo(DEFAULT_LUCAS);
    }

    @Test
    @Transactional
    public void createEntityWithServiceClassAndDTOWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = entityWithServiceClassAndDTORepository.findAll().size();

        // Create the EntityWithServiceClassAndDTO with an existing ID
        entityWithServiceClassAndDTO.setId(1L);
        EntityWithServiceClassAndDTODTO entityWithServiceClassAndDTODTO = entityWithServiceClassAndDTOMapper.toDto(entityWithServiceClassAndDTO);

        // An entity with an existing ID cannot be created, so this API call must fail
        restEntityWithServiceClassAndDTOMockMvc.perform(post("/api/entity-with-service-class-and-dtos")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(entityWithServiceClassAndDTODTO)))
            .andExpect(status().isBadRequest());

        // Validate the EntityWithServiceClassAndDTO in the database
        List<EntityWithServiceClassAndDTO> entityWithServiceClassAndDTOList = entityWithServiceClassAndDTORepository.findAll();
        assertThat(entityWithServiceClassAndDTOList).hasSize(databaseSizeBeforeCreate);
    }


    @Test
    @Transactional
    public void getAllEntityWithServiceClassAndDTOS() throws Exception {
        // Initialize the database
        entityWithServiceClassAndDTORepository.saveAndFlush(entityWithServiceClassAndDTO);

        // Get all the entityWithServiceClassAndDTOList
        restEntityWithServiceClassAndDTOMockMvc.perform(get("/api/entity-with-service-class-and-dtos?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(entityWithServiceClassAndDTO.getId().intValue())))
            .andExpect(jsonPath("$.[*].lucas").value(hasItem(DEFAULT_LUCAS)));
    }
    
    @Test
    @Transactional
    public void getEntityWithServiceClassAndDTO() throws Exception {
        // Initialize the database
        entityWithServiceClassAndDTORepository.saveAndFlush(entityWithServiceClassAndDTO);

        // Get the entityWithServiceClassAndDTO
        restEntityWithServiceClassAndDTOMockMvc.perform(get("/api/entity-with-service-class-and-dtos/{id}", entityWithServiceClassAndDTO.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(entityWithServiceClassAndDTO.getId().intValue()))
            .andExpect(jsonPath("$.lucas").value(DEFAULT_LUCAS));
    }

    @Test
    @Transactional
    public void getNonExistingEntityWithServiceClassAndDTO() throws Exception {
        // Get the entityWithServiceClassAndDTO
        restEntityWithServiceClassAndDTOMockMvc.perform(get("/api/entity-with-service-class-and-dtos/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateEntityWithServiceClassAndDTO() throws Exception {
        // Initialize the database
        entityWithServiceClassAndDTORepository.saveAndFlush(entityWithServiceClassAndDTO);

        int databaseSizeBeforeUpdate = entityWithServiceClassAndDTORepository.findAll().size();

        // Update the entityWithServiceClassAndDTO
        EntityWithServiceClassAndDTO updatedEntityWithServiceClassAndDTO = entityWithServiceClassAndDTORepository.findById(entityWithServiceClassAndDTO.getId()).get();
        // Disconnect from session so that the updates on updatedEntityWithServiceClassAndDTO are not directly saved in db
        em.detach(updatedEntityWithServiceClassAndDTO);
        updatedEntityWithServiceClassAndDTO
            .lucas(UPDATED_LUCAS);
        EntityWithServiceClassAndDTODTO entityWithServiceClassAndDTODTO = entityWithServiceClassAndDTOMapper.toDto(updatedEntityWithServiceClassAndDTO);

        restEntityWithServiceClassAndDTOMockMvc.perform(put("/api/entity-with-service-class-and-dtos")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(entityWithServiceClassAndDTODTO)))
            .andExpect(status().isOk());

        // Validate the EntityWithServiceClassAndDTO in the database
        List<EntityWithServiceClassAndDTO> entityWithServiceClassAndDTOList = entityWithServiceClassAndDTORepository.findAll();
        assertThat(entityWithServiceClassAndDTOList).hasSize(databaseSizeBeforeUpdate);
        EntityWithServiceClassAndDTO testEntityWithServiceClassAndDTO = entityWithServiceClassAndDTOList.get(entityWithServiceClassAndDTOList.size() - 1);
        assertThat(testEntityWithServiceClassAndDTO.getLucas()).isEqualTo(UPDATED_LUCAS);
    }

    @Test
    @Transactional
    public void updateNonExistingEntityWithServiceClassAndDTO() throws Exception {
        int databaseSizeBeforeUpdate = entityWithServiceClassAndDTORepository.findAll().size();

        // Create the EntityWithServiceClassAndDTO
        EntityWithServiceClassAndDTODTO entityWithServiceClassAndDTODTO = entityWithServiceClassAndDTOMapper.toDto(entityWithServiceClassAndDTO);

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restEntityWithServiceClassAndDTOMockMvc.perform(put("/api/entity-with-service-class-and-dtos")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(entityWithServiceClassAndDTODTO)))
            .andExpect(status().isBadRequest());

        // Validate the EntityWithServiceClassAndDTO in the database
        List<EntityWithServiceClassAndDTO> entityWithServiceClassAndDTOList = entityWithServiceClassAndDTORepository.findAll();
        assertThat(entityWithServiceClassAndDTOList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deleteEntityWithServiceClassAndDTO() throws Exception {
        // Initialize the database
        entityWithServiceClassAndDTORepository.saveAndFlush(entityWithServiceClassAndDTO);

        int databaseSizeBeforeDelete = entityWithServiceClassAndDTORepository.findAll().size();

        // Delete the entityWithServiceClassAndDTO
        restEntityWithServiceClassAndDTOMockMvc.perform(delete("/api/entity-with-service-class-and-dtos/{id}", entityWithServiceClassAndDTO.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<EntityWithServiceClassAndDTO> entityWithServiceClassAndDTOList = entityWithServiceClassAndDTORepository.findAll();
        assertThat(entityWithServiceClassAndDTOList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
