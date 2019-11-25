package io.github.jhipster.travis.web.rest;

import io.github.jhipster.travis.TravisNg2App;
import io.github.jhipster.travis.domain.EntityWithServiceImplAndDTO;
import io.github.jhipster.travis.repository.EntityWithServiceImplAndDTORepository;
import io.github.jhipster.travis.service.EntityWithServiceImplAndDTOService;
import io.github.jhipster.travis.service.dto.EntityWithServiceImplAndDTODTO;
import io.github.jhipster.travis.service.mapper.EntityWithServiceImplAndDTOMapper;
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
 * Integration tests for the {@link EntityWithServiceImplAndDTOResource} REST controller.
 */
@SpringBootTest(classes = TravisNg2App.class)
public class EntityWithServiceImplAndDTOResourceIT {

    private static final String DEFAULT_LOUIS = "AAAAAAAAAA";
    private static final String UPDATED_LOUIS = "BBBBBBBBBB";

    @Autowired
    private EntityWithServiceImplAndDTORepository entityWithServiceImplAndDTORepository;

    @Autowired
    private EntityWithServiceImplAndDTOMapper entityWithServiceImplAndDTOMapper;

    @Autowired
    private EntityWithServiceImplAndDTOService entityWithServiceImplAndDTOService;

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

    private MockMvc restEntityWithServiceImplAndDTOMockMvc;

    private EntityWithServiceImplAndDTO entityWithServiceImplAndDTO;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.initMocks(this);
        final EntityWithServiceImplAndDTOResource entityWithServiceImplAndDTOResource = new EntityWithServiceImplAndDTOResource(entityWithServiceImplAndDTOService);
        this.restEntityWithServiceImplAndDTOMockMvc = MockMvcBuilders.standaloneSetup(entityWithServiceImplAndDTOResource)
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
    public static EntityWithServiceImplAndDTO createEntity(EntityManager em) {
        EntityWithServiceImplAndDTO entityWithServiceImplAndDTO = new EntityWithServiceImplAndDTO()
            .louis(DEFAULT_LOUIS);
        return entityWithServiceImplAndDTO;
    }
    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static EntityWithServiceImplAndDTO createUpdatedEntity(EntityManager em) {
        EntityWithServiceImplAndDTO entityWithServiceImplAndDTO = new EntityWithServiceImplAndDTO()
            .louis(UPDATED_LOUIS);
        return entityWithServiceImplAndDTO;
    }

    @BeforeEach
    public void initTest() {
        entityWithServiceImplAndDTO = createEntity(em);
    }

    @Test
    @Transactional
    public void createEntityWithServiceImplAndDTO() throws Exception {
        int databaseSizeBeforeCreate = entityWithServiceImplAndDTORepository.findAll().size();

        // Create the EntityWithServiceImplAndDTO
        EntityWithServiceImplAndDTODTO entityWithServiceImplAndDTODTO = entityWithServiceImplAndDTOMapper.toDto(entityWithServiceImplAndDTO);
        restEntityWithServiceImplAndDTOMockMvc.perform(post("/api/entity-with-service-impl-and-dtos")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(entityWithServiceImplAndDTODTO)))
            .andExpect(status().isCreated());

        // Validate the EntityWithServiceImplAndDTO in the database
        List<EntityWithServiceImplAndDTO> entityWithServiceImplAndDTOList = entityWithServiceImplAndDTORepository.findAll();
        assertThat(entityWithServiceImplAndDTOList).hasSize(databaseSizeBeforeCreate + 1);
        EntityWithServiceImplAndDTO testEntityWithServiceImplAndDTO = entityWithServiceImplAndDTOList.get(entityWithServiceImplAndDTOList.size() - 1);
        assertThat(testEntityWithServiceImplAndDTO.getLouis()).isEqualTo(DEFAULT_LOUIS);
    }

    @Test
    @Transactional
    public void createEntityWithServiceImplAndDTOWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = entityWithServiceImplAndDTORepository.findAll().size();

        // Create the EntityWithServiceImplAndDTO with an existing ID
        entityWithServiceImplAndDTO.setId(1L);
        EntityWithServiceImplAndDTODTO entityWithServiceImplAndDTODTO = entityWithServiceImplAndDTOMapper.toDto(entityWithServiceImplAndDTO);

        // An entity with an existing ID cannot be created, so this API call must fail
        restEntityWithServiceImplAndDTOMockMvc.perform(post("/api/entity-with-service-impl-and-dtos")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(entityWithServiceImplAndDTODTO)))
            .andExpect(status().isBadRequest());

        // Validate the EntityWithServiceImplAndDTO in the database
        List<EntityWithServiceImplAndDTO> entityWithServiceImplAndDTOList = entityWithServiceImplAndDTORepository.findAll();
        assertThat(entityWithServiceImplAndDTOList).hasSize(databaseSizeBeforeCreate);
    }


    @Test
    @Transactional
    public void getAllEntityWithServiceImplAndDTOS() throws Exception {
        // Initialize the database
        entityWithServiceImplAndDTORepository.saveAndFlush(entityWithServiceImplAndDTO);

        // Get all the entityWithServiceImplAndDTOList
        restEntityWithServiceImplAndDTOMockMvc.perform(get("/api/entity-with-service-impl-and-dtos?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(entityWithServiceImplAndDTO.getId().intValue())))
            .andExpect(jsonPath("$.[*].louis").value(hasItem(DEFAULT_LOUIS)));
    }
    
    @Test
    @Transactional
    public void getEntityWithServiceImplAndDTO() throws Exception {
        // Initialize the database
        entityWithServiceImplAndDTORepository.saveAndFlush(entityWithServiceImplAndDTO);

        // Get the entityWithServiceImplAndDTO
        restEntityWithServiceImplAndDTOMockMvc.perform(get("/api/entity-with-service-impl-and-dtos/{id}", entityWithServiceImplAndDTO.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(entityWithServiceImplAndDTO.getId().intValue()))
            .andExpect(jsonPath("$.louis").value(DEFAULT_LOUIS));
    }

    @Test
    @Transactional
    public void getNonExistingEntityWithServiceImplAndDTO() throws Exception {
        // Get the entityWithServiceImplAndDTO
        restEntityWithServiceImplAndDTOMockMvc.perform(get("/api/entity-with-service-impl-and-dtos/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateEntityWithServiceImplAndDTO() throws Exception {
        // Initialize the database
        entityWithServiceImplAndDTORepository.saveAndFlush(entityWithServiceImplAndDTO);

        int databaseSizeBeforeUpdate = entityWithServiceImplAndDTORepository.findAll().size();

        // Update the entityWithServiceImplAndDTO
        EntityWithServiceImplAndDTO updatedEntityWithServiceImplAndDTO = entityWithServiceImplAndDTORepository.findById(entityWithServiceImplAndDTO.getId()).get();
        // Disconnect from session so that the updates on updatedEntityWithServiceImplAndDTO are not directly saved in db
        em.detach(updatedEntityWithServiceImplAndDTO);
        updatedEntityWithServiceImplAndDTO
            .louis(UPDATED_LOUIS);
        EntityWithServiceImplAndDTODTO entityWithServiceImplAndDTODTO = entityWithServiceImplAndDTOMapper.toDto(updatedEntityWithServiceImplAndDTO);

        restEntityWithServiceImplAndDTOMockMvc.perform(put("/api/entity-with-service-impl-and-dtos")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(entityWithServiceImplAndDTODTO)))
            .andExpect(status().isOk());

        // Validate the EntityWithServiceImplAndDTO in the database
        List<EntityWithServiceImplAndDTO> entityWithServiceImplAndDTOList = entityWithServiceImplAndDTORepository.findAll();
        assertThat(entityWithServiceImplAndDTOList).hasSize(databaseSizeBeforeUpdate);
        EntityWithServiceImplAndDTO testEntityWithServiceImplAndDTO = entityWithServiceImplAndDTOList.get(entityWithServiceImplAndDTOList.size() - 1);
        assertThat(testEntityWithServiceImplAndDTO.getLouis()).isEqualTo(UPDATED_LOUIS);
    }

    @Test
    @Transactional
    public void updateNonExistingEntityWithServiceImplAndDTO() throws Exception {
        int databaseSizeBeforeUpdate = entityWithServiceImplAndDTORepository.findAll().size();

        // Create the EntityWithServiceImplAndDTO
        EntityWithServiceImplAndDTODTO entityWithServiceImplAndDTODTO = entityWithServiceImplAndDTOMapper.toDto(entityWithServiceImplAndDTO);

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restEntityWithServiceImplAndDTOMockMvc.perform(put("/api/entity-with-service-impl-and-dtos")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(entityWithServiceImplAndDTODTO)))
            .andExpect(status().isBadRequest());

        // Validate the EntityWithServiceImplAndDTO in the database
        List<EntityWithServiceImplAndDTO> entityWithServiceImplAndDTOList = entityWithServiceImplAndDTORepository.findAll();
        assertThat(entityWithServiceImplAndDTOList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deleteEntityWithServiceImplAndDTO() throws Exception {
        // Initialize the database
        entityWithServiceImplAndDTORepository.saveAndFlush(entityWithServiceImplAndDTO);

        int databaseSizeBeforeDelete = entityWithServiceImplAndDTORepository.findAll().size();

        // Delete the entityWithServiceImplAndDTO
        restEntityWithServiceImplAndDTOMockMvc.perform(delete("/api/entity-with-service-impl-and-dtos/{id}", entityWithServiceImplAndDTO.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<EntityWithServiceImplAndDTO> entityWithServiceImplAndDTOList = entityWithServiceImplAndDTORepository.findAll();
        assertThat(entityWithServiceImplAndDTOList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
