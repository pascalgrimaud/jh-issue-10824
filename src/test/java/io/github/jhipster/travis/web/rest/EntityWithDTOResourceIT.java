package io.github.jhipster.travis.web.rest;

import io.github.jhipster.travis.TravisNg2App;
import io.github.jhipster.travis.domain.EntityWithDTO;
import io.github.jhipster.travis.repository.EntityWithDTORepository;
import io.github.jhipster.travis.service.dto.EntityWithDTODTO;
import io.github.jhipster.travis.service.mapper.EntityWithDTOMapper;
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
 * Integration tests for the {@link EntityWithDTOResource} REST controller.
 */
@SpringBootTest(classes = TravisNg2App.class)
public class EntityWithDTOResourceIT {

    private static final String DEFAULT_EMMA = "AAAAAAAAAA";
    private static final String UPDATED_EMMA = "BBBBBBBBBB";

    @Autowired
    private EntityWithDTORepository entityWithDTORepository;

    @Autowired
    private EntityWithDTOMapper entityWithDTOMapper;

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

    private MockMvc restEntityWithDTOMockMvc;

    private EntityWithDTO entityWithDTO;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.initMocks(this);
        final EntityWithDTOResource entityWithDTOResource = new EntityWithDTOResource(entityWithDTORepository, entityWithDTOMapper);
        this.restEntityWithDTOMockMvc = MockMvcBuilders.standaloneSetup(entityWithDTOResource)
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
    public static EntityWithDTO createEntity(EntityManager em) {
        EntityWithDTO entityWithDTO = new EntityWithDTO()
            .emma(DEFAULT_EMMA);
        return entityWithDTO;
    }
    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static EntityWithDTO createUpdatedEntity(EntityManager em) {
        EntityWithDTO entityWithDTO = new EntityWithDTO()
            .emma(UPDATED_EMMA);
        return entityWithDTO;
    }

    @BeforeEach
    public void initTest() {
        entityWithDTO = createEntity(em);
    }

    @Test
    @Transactional
    public void createEntityWithDTO() throws Exception {
        int databaseSizeBeforeCreate = entityWithDTORepository.findAll().size();

        // Create the EntityWithDTO
        EntityWithDTODTO entityWithDTODTO = entityWithDTOMapper.toDto(entityWithDTO);
        restEntityWithDTOMockMvc.perform(post("/api/entity-with-dtos")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(entityWithDTODTO)))
            .andExpect(status().isCreated());

        // Validate the EntityWithDTO in the database
        List<EntityWithDTO> entityWithDTOList = entityWithDTORepository.findAll();
        assertThat(entityWithDTOList).hasSize(databaseSizeBeforeCreate + 1);
        EntityWithDTO testEntityWithDTO = entityWithDTOList.get(entityWithDTOList.size() - 1);
        assertThat(testEntityWithDTO.getEmma()).isEqualTo(DEFAULT_EMMA);
    }

    @Test
    @Transactional
    public void createEntityWithDTOWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = entityWithDTORepository.findAll().size();

        // Create the EntityWithDTO with an existing ID
        entityWithDTO.setId(1L);
        EntityWithDTODTO entityWithDTODTO = entityWithDTOMapper.toDto(entityWithDTO);

        // An entity with an existing ID cannot be created, so this API call must fail
        restEntityWithDTOMockMvc.perform(post("/api/entity-with-dtos")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(entityWithDTODTO)))
            .andExpect(status().isBadRequest());

        // Validate the EntityWithDTO in the database
        List<EntityWithDTO> entityWithDTOList = entityWithDTORepository.findAll();
        assertThat(entityWithDTOList).hasSize(databaseSizeBeforeCreate);
    }


    @Test
    @Transactional
    public void getAllEntityWithDTOS() throws Exception {
        // Initialize the database
        entityWithDTORepository.saveAndFlush(entityWithDTO);

        // Get all the entityWithDTOList
        restEntityWithDTOMockMvc.perform(get("/api/entity-with-dtos?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(entityWithDTO.getId().intValue())))
            .andExpect(jsonPath("$.[*].emma").value(hasItem(DEFAULT_EMMA)));
    }
    
    @Test
    @Transactional
    public void getEntityWithDTO() throws Exception {
        // Initialize the database
        entityWithDTORepository.saveAndFlush(entityWithDTO);

        // Get the entityWithDTO
        restEntityWithDTOMockMvc.perform(get("/api/entity-with-dtos/{id}", entityWithDTO.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(entityWithDTO.getId().intValue()))
            .andExpect(jsonPath("$.emma").value(DEFAULT_EMMA));
    }

    @Test
    @Transactional
    public void getNonExistingEntityWithDTO() throws Exception {
        // Get the entityWithDTO
        restEntityWithDTOMockMvc.perform(get("/api/entity-with-dtos/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateEntityWithDTO() throws Exception {
        // Initialize the database
        entityWithDTORepository.saveAndFlush(entityWithDTO);

        int databaseSizeBeforeUpdate = entityWithDTORepository.findAll().size();

        // Update the entityWithDTO
        EntityWithDTO updatedEntityWithDTO = entityWithDTORepository.findById(entityWithDTO.getId()).get();
        // Disconnect from session so that the updates on updatedEntityWithDTO are not directly saved in db
        em.detach(updatedEntityWithDTO);
        updatedEntityWithDTO
            .emma(UPDATED_EMMA);
        EntityWithDTODTO entityWithDTODTO = entityWithDTOMapper.toDto(updatedEntityWithDTO);

        restEntityWithDTOMockMvc.perform(put("/api/entity-with-dtos")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(entityWithDTODTO)))
            .andExpect(status().isOk());

        // Validate the EntityWithDTO in the database
        List<EntityWithDTO> entityWithDTOList = entityWithDTORepository.findAll();
        assertThat(entityWithDTOList).hasSize(databaseSizeBeforeUpdate);
        EntityWithDTO testEntityWithDTO = entityWithDTOList.get(entityWithDTOList.size() - 1);
        assertThat(testEntityWithDTO.getEmma()).isEqualTo(UPDATED_EMMA);
    }

    @Test
    @Transactional
    public void updateNonExistingEntityWithDTO() throws Exception {
        int databaseSizeBeforeUpdate = entityWithDTORepository.findAll().size();

        // Create the EntityWithDTO
        EntityWithDTODTO entityWithDTODTO = entityWithDTOMapper.toDto(entityWithDTO);

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restEntityWithDTOMockMvc.perform(put("/api/entity-with-dtos")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(entityWithDTODTO)))
            .andExpect(status().isBadRequest());

        // Validate the EntityWithDTO in the database
        List<EntityWithDTO> entityWithDTOList = entityWithDTORepository.findAll();
        assertThat(entityWithDTOList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deleteEntityWithDTO() throws Exception {
        // Initialize the database
        entityWithDTORepository.saveAndFlush(entityWithDTO);

        int databaseSizeBeforeDelete = entityWithDTORepository.findAll().size();

        // Delete the entityWithDTO
        restEntityWithDTOMockMvc.perform(delete("/api/entity-with-dtos/{id}", entityWithDTO.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<EntityWithDTO> entityWithDTOList = entityWithDTORepository.findAll();
        assertThat(entityWithDTOList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
