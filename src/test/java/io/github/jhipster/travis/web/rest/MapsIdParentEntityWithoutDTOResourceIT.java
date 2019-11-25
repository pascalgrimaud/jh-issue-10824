package io.github.jhipster.travis.web.rest;

import io.github.jhipster.travis.TravisNg2App;
import io.github.jhipster.travis.domain.MapsIdParentEntityWithoutDTO;
import io.github.jhipster.travis.repository.MapsIdParentEntityWithoutDTORepository;
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
 * Integration tests for the {@link MapsIdParentEntityWithoutDTOResource} REST controller.
 */
@SpringBootTest(classes = TravisNg2App.class)
public class MapsIdParentEntityWithoutDTOResourceIT {

    private static final String DEFAULT_NAME = "AAAAAAAAAA";
    private static final String UPDATED_NAME = "BBBBBBBBBB";

    @Autowired
    private MapsIdParentEntityWithoutDTORepository mapsIdParentEntityWithoutDTORepository;

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

    private MockMvc restMapsIdParentEntityWithoutDTOMockMvc;

    private MapsIdParentEntityWithoutDTO mapsIdParentEntityWithoutDTO;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.initMocks(this);
        final MapsIdParentEntityWithoutDTOResource mapsIdParentEntityWithoutDTOResource = new MapsIdParentEntityWithoutDTOResource(mapsIdParentEntityWithoutDTORepository);
        this.restMapsIdParentEntityWithoutDTOMockMvc = MockMvcBuilders.standaloneSetup(mapsIdParentEntityWithoutDTOResource)
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
    public static MapsIdParentEntityWithoutDTO createEntity(EntityManager em) {
        MapsIdParentEntityWithoutDTO mapsIdParentEntityWithoutDTO = new MapsIdParentEntityWithoutDTO()
            .name(DEFAULT_NAME);
        return mapsIdParentEntityWithoutDTO;
    }
    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static MapsIdParentEntityWithoutDTO createUpdatedEntity(EntityManager em) {
        MapsIdParentEntityWithoutDTO mapsIdParentEntityWithoutDTO = new MapsIdParentEntityWithoutDTO()
            .name(UPDATED_NAME);
        return mapsIdParentEntityWithoutDTO;
    }

    @BeforeEach
    public void initTest() {
        mapsIdParentEntityWithoutDTO = createEntity(em);
    }

    @Test
    @Transactional
    public void createMapsIdParentEntityWithoutDTO() throws Exception {
        int databaseSizeBeforeCreate = mapsIdParentEntityWithoutDTORepository.findAll().size();

        // Create the MapsIdParentEntityWithoutDTO
        restMapsIdParentEntityWithoutDTOMockMvc.perform(post("/api/maps-id-parent-entity-without-dtos")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(mapsIdParentEntityWithoutDTO)))
            .andExpect(status().isCreated());

        // Validate the MapsIdParentEntityWithoutDTO in the database
        List<MapsIdParentEntityWithoutDTO> mapsIdParentEntityWithoutDTOList = mapsIdParentEntityWithoutDTORepository.findAll();
        assertThat(mapsIdParentEntityWithoutDTOList).hasSize(databaseSizeBeforeCreate + 1);
        MapsIdParentEntityWithoutDTO testMapsIdParentEntityWithoutDTO = mapsIdParentEntityWithoutDTOList.get(mapsIdParentEntityWithoutDTOList.size() - 1);
        assertThat(testMapsIdParentEntityWithoutDTO.getName()).isEqualTo(DEFAULT_NAME);
    }

    @Test
    @Transactional
    public void createMapsIdParentEntityWithoutDTOWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = mapsIdParentEntityWithoutDTORepository.findAll().size();

        // Create the MapsIdParentEntityWithoutDTO with an existing ID
        mapsIdParentEntityWithoutDTO.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restMapsIdParentEntityWithoutDTOMockMvc.perform(post("/api/maps-id-parent-entity-without-dtos")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(mapsIdParentEntityWithoutDTO)))
            .andExpect(status().isBadRequest());

        // Validate the MapsIdParentEntityWithoutDTO in the database
        List<MapsIdParentEntityWithoutDTO> mapsIdParentEntityWithoutDTOList = mapsIdParentEntityWithoutDTORepository.findAll();
        assertThat(mapsIdParentEntityWithoutDTOList).hasSize(databaseSizeBeforeCreate);
    }


    @Test
    @Transactional
    public void getAllMapsIdParentEntityWithoutDTOS() throws Exception {
        // Initialize the database
        mapsIdParentEntityWithoutDTORepository.saveAndFlush(mapsIdParentEntityWithoutDTO);

        // Get all the mapsIdParentEntityWithoutDTOList
        restMapsIdParentEntityWithoutDTOMockMvc.perform(get("/api/maps-id-parent-entity-without-dtos?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(mapsIdParentEntityWithoutDTO.getId().intValue())))
            .andExpect(jsonPath("$.[*].name").value(hasItem(DEFAULT_NAME)));
    }
    
    @Test
    @Transactional
    public void getMapsIdParentEntityWithoutDTO() throws Exception {
        // Initialize the database
        mapsIdParentEntityWithoutDTORepository.saveAndFlush(mapsIdParentEntityWithoutDTO);

        // Get the mapsIdParentEntityWithoutDTO
        restMapsIdParentEntityWithoutDTOMockMvc.perform(get("/api/maps-id-parent-entity-without-dtos/{id}", mapsIdParentEntityWithoutDTO.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(mapsIdParentEntityWithoutDTO.getId().intValue()))
            .andExpect(jsonPath("$.name").value(DEFAULT_NAME));
    }

    @Test
    @Transactional
    public void getNonExistingMapsIdParentEntityWithoutDTO() throws Exception {
        // Get the mapsIdParentEntityWithoutDTO
        restMapsIdParentEntityWithoutDTOMockMvc.perform(get("/api/maps-id-parent-entity-without-dtos/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateMapsIdParentEntityWithoutDTO() throws Exception {
        // Initialize the database
        mapsIdParentEntityWithoutDTORepository.saveAndFlush(mapsIdParentEntityWithoutDTO);

        int databaseSizeBeforeUpdate = mapsIdParentEntityWithoutDTORepository.findAll().size();

        // Update the mapsIdParentEntityWithoutDTO
        MapsIdParentEntityWithoutDTO updatedMapsIdParentEntityWithoutDTO = mapsIdParentEntityWithoutDTORepository.findById(mapsIdParentEntityWithoutDTO.getId()).get();
        // Disconnect from session so that the updates on updatedMapsIdParentEntityWithoutDTO are not directly saved in db
        em.detach(updatedMapsIdParentEntityWithoutDTO);
        updatedMapsIdParentEntityWithoutDTO
            .name(UPDATED_NAME);

        restMapsIdParentEntityWithoutDTOMockMvc.perform(put("/api/maps-id-parent-entity-without-dtos")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedMapsIdParentEntityWithoutDTO)))
            .andExpect(status().isOk());

        // Validate the MapsIdParentEntityWithoutDTO in the database
        List<MapsIdParentEntityWithoutDTO> mapsIdParentEntityWithoutDTOList = mapsIdParentEntityWithoutDTORepository.findAll();
        assertThat(mapsIdParentEntityWithoutDTOList).hasSize(databaseSizeBeforeUpdate);
        MapsIdParentEntityWithoutDTO testMapsIdParentEntityWithoutDTO = mapsIdParentEntityWithoutDTOList.get(mapsIdParentEntityWithoutDTOList.size() - 1);
        assertThat(testMapsIdParentEntityWithoutDTO.getName()).isEqualTo(UPDATED_NAME);
    }

    @Test
    @Transactional
    public void updateNonExistingMapsIdParentEntityWithoutDTO() throws Exception {
        int databaseSizeBeforeUpdate = mapsIdParentEntityWithoutDTORepository.findAll().size();

        // Create the MapsIdParentEntityWithoutDTO

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restMapsIdParentEntityWithoutDTOMockMvc.perform(put("/api/maps-id-parent-entity-without-dtos")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(mapsIdParentEntityWithoutDTO)))
            .andExpect(status().isBadRequest());

        // Validate the MapsIdParentEntityWithoutDTO in the database
        List<MapsIdParentEntityWithoutDTO> mapsIdParentEntityWithoutDTOList = mapsIdParentEntityWithoutDTORepository.findAll();
        assertThat(mapsIdParentEntityWithoutDTOList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deleteMapsIdParentEntityWithoutDTO() throws Exception {
        // Initialize the database
        mapsIdParentEntityWithoutDTORepository.saveAndFlush(mapsIdParentEntityWithoutDTO);

        int databaseSizeBeforeDelete = mapsIdParentEntityWithoutDTORepository.findAll().size();

        // Delete the mapsIdParentEntityWithoutDTO
        restMapsIdParentEntityWithoutDTOMockMvc.perform(delete("/api/maps-id-parent-entity-without-dtos/{id}", mapsIdParentEntityWithoutDTO.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<MapsIdParentEntityWithoutDTO> mapsIdParentEntityWithoutDTOList = mapsIdParentEntityWithoutDTORepository.findAll();
        assertThat(mapsIdParentEntityWithoutDTOList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
