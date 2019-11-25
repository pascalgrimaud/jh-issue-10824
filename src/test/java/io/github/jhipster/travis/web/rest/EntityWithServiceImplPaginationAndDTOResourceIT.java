package io.github.jhipster.travis.web.rest;

import io.github.jhipster.travis.TravisNg2App;
import io.github.jhipster.travis.domain.EntityWithServiceImplPaginationAndDTO;
import io.github.jhipster.travis.repository.EntityWithServiceImplPaginationAndDTORepository;
import io.github.jhipster.travis.service.EntityWithServiceImplPaginationAndDTOService;
import io.github.jhipster.travis.service.dto.EntityWithServiceImplPaginationAndDTODTO;
import io.github.jhipster.travis.service.mapper.EntityWithServiceImplPaginationAndDTOMapper;
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
 * Integration tests for the {@link EntityWithServiceImplPaginationAndDTOResource} REST controller.
 */
@SpringBootTest(classes = TravisNg2App.class)
public class EntityWithServiceImplPaginationAndDTOResourceIT {

    private static final String DEFAULT_THEO = "AAAAAAAAAA";
    private static final String UPDATED_THEO = "BBBBBBBBBB";

    @Autowired
    private EntityWithServiceImplPaginationAndDTORepository entityWithServiceImplPaginationAndDTORepository;

    @Autowired
    private EntityWithServiceImplPaginationAndDTOMapper entityWithServiceImplPaginationAndDTOMapper;

    @Autowired
    private EntityWithServiceImplPaginationAndDTOService entityWithServiceImplPaginationAndDTOService;

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

    private MockMvc restEntityWithServiceImplPaginationAndDTOMockMvc;

    private EntityWithServiceImplPaginationAndDTO entityWithServiceImplPaginationAndDTO;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.initMocks(this);
        final EntityWithServiceImplPaginationAndDTOResource entityWithServiceImplPaginationAndDTOResource = new EntityWithServiceImplPaginationAndDTOResource(entityWithServiceImplPaginationAndDTOService);
        this.restEntityWithServiceImplPaginationAndDTOMockMvc = MockMvcBuilders.standaloneSetup(entityWithServiceImplPaginationAndDTOResource)
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
    public static EntityWithServiceImplPaginationAndDTO createEntity(EntityManager em) {
        EntityWithServiceImplPaginationAndDTO entityWithServiceImplPaginationAndDTO = new EntityWithServiceImplPaginationAndDTO()
            .theo(DEFAULT_THEO);
        return entityWithServiceImplPaginationAndDTO;
    }
    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static EntityWithServiceImplPaginationAndDTO createUpdatedEntity(EntityManager em) {
        EntityWithServiceImplPaginationAndDTO entityWithServiceImplPaginationAndDTO = new EntityWithServiceImplPaginationAndDTO()
            .theo(UPDATED_THEO);
        return entityWithServiceImplPaginationAndDTO;
    }

    @BeforeEach
    public void initTest() {
        entityWithServiceImplPaginationAndDTO = createEntity(em);
    }

    @Test
    @Transactional
    public void createEntityWithServiceImplPaginationAndDTO() throws Exception {
        int databaseSizeBeforeCreate = entityWithServiceImplPaginationAndDTORepository.findAll().size();

        // Create the EntityWithServiceImplPaginationAndDTO
        EntityWithServiceImplPaginationAndDTODTO entityWithServiceImplPaginationAndDTODTO = entityWithServiceImplPaginationAndDTOMapper.toDto(entityWithServiceImplPaginationAndDTO);
        restEntityWithServiceImplPaginationAndDTOMockMvc.perform(post("/api/entity-with-service-impl-pagination-and-dtos")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(entityWithServiceImplPaginationAndDTODTO)))
            .andExpect(status().isCreated());

        // Validate the EntityWithServiceImplPaginationAndDTO in the database
        List<EntityWithServiceImplPaginationAndDTO> entityWithServiceImplPaginationAndDTOList = entityWithServiceImplPaginationAndDTORepository.findAll();
        assertThat(entityWithServiceImplPaginationAndDTOList).hasSize(databaseSizeBeforeCreate + 1);
        EntityWithServiceImplPaginationAndDTO testEntityWithServiceImplPaginationAndDTO = entityWithServiceImplPaginationAndDTOList.get(entityWithServiceImplPaginationAndDTOList.size() - 1);
        assertThat(testEntityWithServiceImplPaginationAndDTO.getTheo()).isEqualTo(DEFAULT_THEO);
    }

    @Test
    @Transactional
    public void createEntityWithServiceImplPaginationAndDTOWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = entityWithServiceImplPaginationAndDTORepository.findAll().size();

        // Create the EntityWithServiceImplPaginationAndDTO with an existing ID
        entityWithServiceImplPaginationAndDTO.setId(1L);
        EntityWithServiceImplPaginationAndDTODTO entityWithServiceImplPaginationAndDTODTO = entityWithServiceImplPaginationAndDTOMapper.toDto(entityWithServiceImplPaginationAndDTO);

        // An entity with an existing ID cannot be created, so this API call must fail
        restEntityWithServiceImplPaginationAndDTOMockMvc.perform(post("/api/entity-with-service-impl-pagination-and-dtos")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(entityWithServiceImplPaginationAndDTODTO)))
            .andExpect(status().isBadRequest());

        // Validate the EntityWithServiceImplPaginationAndDTO in the database
        List<EntityWithServiceImplPaginationAndDTO> entityWithServiceImplPaginationAndDTOList = entityWithServiceImplPaginationAndDTORepository.findAll();
        assertThat(entityWithServiceImplPaginationAndDTOList).hasSize(databaseSizeBeforeCreate);
    }


    @Test
    @Transactional
    public void getAllEntityWithServiceImplPaginationAndDTOS() throws Exception {
        // Initialize the database
        entityWithServiceImplPaginationAndDTORepository.saveAndFlush(entityWithServiceImplPaginationAndDTO);

        // Get all the entityWithServiceImplPaginationAndDTOList
        restEntityWithServiceImplPaginationAndDTOMockMvc.perform(get("/api/entity-with-service-impl-pagination-and-dtos?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(entityWithServiceImplPaginationAndDTO.getId().intValue())))
            .andExpect(jsonPath("$.[*].theo").value(hasItem(DEFAULT_THEO)));
    }
    
    @Test
    @Transactional
    public void getEntityWithServiceImplPaginationAndDTO() throws Exception {
        // Initialize the database
        entityWithServiceImplPaginationAndDTORepository.saveAndFlush(entityWithServiceImplPaginationAndDTO);

        // Get the entityWithServiceImplPaginationAndDTO
        restEntityWithServiceImplPaginationAndDTOMockMvc.perform(get("/api/entity-with-service-impl-pagination-and-dtos/{id}", entityWithServiceImplPaginationAndDTO.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(entityWithServiceImplPaginationAndDTO.getId().intValue()))
            .andExpect(jsonPath("$.theo").value(DEFAULT_THEO));
    }

    @Test
    @Transactional
    public void getNonExistingEntityWithServiceImplPaginationAndDTO() throws Exception {
        // Get the entityWithServiceImplPaginationAndDTO
        restEntityWithServiceImplPaginationAndDTOMockMvc.perform(get("/api/entity-with-service-impl-pagination-and-dtos/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateEntityWithServiceImplPaginationAndDTO() throws Exception {
        // Initialize the database
        entityWithServiceImplPaginationAndDTORepository.saveAndFlush(entityWithServiceImplPaginationAndDTO);

        int databaseSizeBeforeUpdate = entityWithServiceImplPaginationAndDTORepository.findAll().size();

        // Update the entityWithServiceImplPaginationAndDTO
        EntityWithServiceImplPaginationAndDTO updatedEntityWithServiceImplPaginationAndDTO = entityWithServiceImplPaginationAndDTORepository.findById(entityWithServiceImplPaginationAndDTO.getId()).get();
        // Disconnect from session so that the updates on updatedEntityWithServiceImplPaginationAndDTO are not directly saved in db
        em.detach(updatedEntityWithServiceImplPaginationAndDTO);
        updatedEntityWithServiceImplPaginationAndDTO
            .theo(UPDATED_THEO);
        EntityWithServiceImplPaginationAndDTODTO entityWithServiceImplPaginationAndDTODTO = entityWithServiceImplPaginationAndDTOMapper.toDto(updatedEntityWithServiceImplPaginationAndDTO);

        restEntityWithServiceImplPaginationAndDTOMockMvc.perform(put("/api/entity-with-service-impl-pagination-and-dtos")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(entityWithServiceImplPaginationAndDTODTO)))
            .andExpect(status().isOk());

        // Validate the EntityWithServiceImplPaginationAndDTO in the database
        List<EntityWithServiceImplPaginationAndDTO> entityWithServiceImplPaginationAndDTOList = entityWithServiceImplPaginationAndDTORepository.findAll();
        assertThat(entityWithServiceImplPaginationAndDTOList).hasSize(databaseSizeBeforeUpdate);
        EntityWithServiceImplPaginationAndDTO testEntityWithServiceImplPaginationAndDTO = entityWithServiceImplPaginationAndDTOList.get(entityWithServiceImplPaginationAndDTOList.size() - 1);
        assertThat(testEntityWithServiceImplPaginationAndDTO.getTheo()).isEqualTo(UPDATED_THEO);
    }

    @Test
    @Transactional
    public void updateNonExistingEntityWithServiceImplPaginationAndDTO() throws Exception {
        int databaseSizeBeforeUpdate = entityWithServiceImplPaginationAndDTORepository.findAll().size();

        // Create the EntityWithServiceImplPaginationAndDTO
        EntityWithServiceImplPaginationAndDTODTO entityWithServiceImplPaginationAndDTODTO = entityWithServiceImplPaginationAndDTOMapper.toDto(entityWithServiceImplPaginationAndDTO);

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restEntityWithServiceImplPaginationAndDTOMockMvc.perform(put("/api/entity-with-service-impl-pagination-and-dtos")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(entityWithServiceImplPaginationAndDTODTO)))
            .andExpect(status().isBadRequest());

        // Validate the EntityWithServiceImplPaginationAndDTO in the database
        List<EntityWithServiceImplPaginationAndDTO> entityWithServiceImplPaginationAndDTOList = entityWithServiceImplPaginationAndDTORepository.findAll();
        assertThat(entityWithServiceImplPaginationAndDTOList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deleteEntityWithServiceImplPaginationAndDTO() throws Exception {
        // Initialize the database
        entityWithServiceImplPaginationAndDTORepository.saveAndFlush(entityWithServiceImplPaginationAndDTO);

        int databaseSizeBeforeDelete = entityWithServiceImplPaginationAndDTORepository.findAll().size();

        // Delete the entityWithServiceImplPaginationAndDTO
        restEntityWithServiceImplPaginationAndDTOMockMvc.perform(delete("/api/entity-with-service-impl-pagination-and-dtos/{id}", entityWithServiceImplPaginationAndDTO.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<EntityWithServiceImplPaginationAndDTO> entityWithServiceImplPaginationAndDTOList = entityWithServiceImplPaginationAndDTORepository.findAll();
        assertThat(entityWithServiceImplPaginationAndDTOList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
