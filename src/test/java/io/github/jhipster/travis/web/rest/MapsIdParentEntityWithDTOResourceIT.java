package io.github.jhipster.travis.web.rest;

import io.github.jhipster.travis.TravisNg2App;
import io.github.jhipster.travis.domain.MapsIdParentEntityWithDTO;
import io.github.jhipster.travis.repository.MapsIdParentEntityWithDTORepository;
import io.github.jhipster.travis.service.MapsIdParentEntityWithDTOService;
import io.github.jhipster.travis.service.dto.MapsIdParentEntityWithDTODTO;
import io.github.jhipster.travis.service.mapper.MapsIdParentEntityWithDTOMapper;
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
 * Integration tests for the {@link MapsIdParentEntityWithDTOResource} REST controller.
 */
@SpringBootTest(classes = TravisNg2App.class)
public class MapsIdParentEntityWithDTOResourceIT {

    private static final String DEFAULT_NAME = "AAAAAAAAAA";
    private static final String UPDATED_NAME = "BBBBBBBBBB";

    @Autowired
    private MapsIdParentEntityWithDTORepository mapsIdParentEntityWithDTORepository;

    @Autowired
    private MapsIdParentEntityWithDTOMapper mapsIdParentEntityWithDTOMapper;

    @Autowired
    private MapsIdParentEntityWithDTOService mapsIdParentEntityWithDTOService;

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

    private MockMvc restMapsIdParentEntityWithDTOMockMvc;

    private MapsIdParentEntityWithDTO mapsIdParentEntityWithDTO;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.initMocks(this);
        final MapsIdParentEntityWithDTOResource mapsIdParentEntityWithDTOResource = new MapsIdParentEntityWithDTOResource(mapsIdParentEntityWithDTOService);
        this.restMapsIdParentEntityWithDTOMockMvc = MockMvcBuilders.standaloneSetup(mapsIdParentEntityWithDTOResource)
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
    public static MapsIdParentEntityWithDTO createEntity(EntityManager em) {
        MapsIdParentEntityWithDTO mapsIdParentEntityWithDTO = new MapsIdParentEntityWithDTO()
            .name(DEFAULT_NAME);
        return mapsIdParentEntityWithDTO;
    }
    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static MapsIdParentEntityWithDTO createUpdatedEntity(EntityManager em) {
        MapsIdParentEntityWithDTO mapsIdParentEntityWithDTO = new MapsIdParentEntityWithDTO()
            .name(UPDATED_NAME);
        return mapsIdParentEntityWithDTO;
    }

    @BeforeEach
    public void initTest() {
        mapsIdParentEntityWithDTO = createEntity(em);
    }

    @Test
    @Transactional
    public void createMapsIdParentEntityWithDTO() throws Exception {
        int databaseSizeBeforeCreate = mapsIdParentEntityWithDTORepository.findAll().size();

        // Create the MapsIdParentEntityWithDTO
        MapsIdParentEntityWithDTODTO mapsIdParentEntityWithDTODTO = mapsIdParentEntityWithDTOMapper.toDto(mapsIdParentEntityWithDTO);
        restMapsIdParentEntityWithDTOMockMvc.perform(post("/api/maps-id-parent-entity-with-dtos")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(mapsIdParentEntityWithDTODTO)))
            .andExpect(status().isCreated());

        // Validate the MapsIdParentEntityWithDTO in the database
        List<MapsIdParentEntityWithDTO> mapsIdParentEntityWithDTOList = mapsIdParentEntityWithDTORepository.findAll();
        assertThat(mapsIdParentEntityWithDTOList).hasSize(databaseSizeBeforeCreate + 1);
        MapsIdParentEntityWithDTO testMapsIdParentEntityWithDTO = mapsIdParentEntityWithDTOList.get(mapsIdParentEntityWithDTOList.size() - 1);
        assertThat(testMapsIdParentEntityWithDTO.getName()).isEqualTo(DEFAULT_NAME);
    }

    @Test
    @Transactional
    public void createMapsIdParentEntityWithDTOWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = mapsIdParentEntityWithDTORepository.findAll().size();

        // Create the MapsIdParentEntityWithDTO with an existing ID
        mapsIdParentEntityWithDTO.setId(1L);
        MapsIdParentEntityWithDTODTO mapsIdParentEntityWithDTODTO = mapsIdParentEntityWithDTOMapper.toDto(mapsIdParentEntityWithDTO);

        // An entity with an existing ID cannot be created, so this API call must fail
        restMapsIdParentEntityWithDTOMockMvc.perform(post("/api/maps-id-parent-entity-with-dtos")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(mapsIdParentEntityWithDTODTO)))
            .andExpect(status().isBadRequest());

        // Validate the MapsIdParentEntityWithDTO in the database
        List<MapsIdParentEntityWithDTO> mapsIdParentEntityWithDTOList = mapsIdParentEntityWithDTORepository.findAll();
        assertThat(mapsIdParentEntityWithDTOList).hasSize(databaseSizeBeforeCreate);
    }


    @Test
    @Transactional
    public void getAllMapsIdParentEntityWithDTOS() throws Exception {
        // Initialize the database
        mapsIdParentEntityWithDTORepository.saveAndFlush(mapsIdParentEntityWithDTO);

        // Get all the mapsIdParentEntityWithDTOList
        restMapsIdParentEntityWithDTOMockMvc.perform(get("/api/maps-id-parent-entity-with-dtos?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(mapsIdParentEntityWithDTO.getId().intValue())))
            .andExpect(jsonPath("$.[*].name").value(hasItem(DEFAULT_NAME)));
    }
    
    @Test
    @Transactional
    public void getMapsIdParentEntityWithDTO() throws Exception {
        // Initialize the database
        mapsIdParentEntityWithDTORepository.saveAndFlush(mapsIdParentEntityWithDTO);

        // Get the mapsIdParentEntityWithDTO
        restMapsIdParentEntityWithDTOMockMvc.perform(get("/api/maps-id-parent-entity-with-dtos/{id}", mapsIdParentEntityWithDTO.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(mapsIdParentEntityWithDTO.getId().intValue()))
            .andExpect(jsonPath("$.name").value(DEFAULT_NAME));
    }

    @Test
    @Transactional
    public void getNonExistingMapsIdParentEntityWithDTO() throws Exception {
        // Get the mapsIdParentEntityWithDTO
        restMapsIdParentEntityWithDTOMockMvc.perform(get("/api/maps-id-parent-entity-with-dtos/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateMapsIdParentEntityWithDTO() throws Exception {
        // Initialize the database
        mapsIdParentEntityWithDTORepository.saveAndFlush(mapsIdParentEntityWithDTO);

        int databaseSizeBeforeUpdate = mapsIdParentEntityWithDTORepository.findAll().size();

        // Update the mapsIdParentEntityWithDTO
        MapsIdParentEntityWithDTO updatedMapsIdParentEntityWithDTO = mapsIdParentEntityWithDTORepository.findById(mapsIdParentEntityWithDTO.getId()).get();
        // Disconnect from session so that the updates on updatedMapsIdParentEntityWithDTO are not directly saved in db
        em.detach(updatedMapsIdParentEntityWithDTO);
        updatedMapsIdParentEntityWithDTO
            .name(UPDATED_NAME);
        MapsIdParentEntityWithDTODTO mapsIdParentEntityWithDTODTO = mapsIdParentEntityWithDTOMapper.toDto(updatedMapsIdParentEntityWithDTO);

        restMapsIdParentEntityWithDTOMockMvc.perform(put("/api/maps-id-parent-entity-with-dtos")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(mapsIdParentEntityWithDTODTO)))
            .andExpect(status().isOk());

        // Validate the MapsIdParentEntityWithDTO in the database
        List<MapsIdParentEntityWithDTO> mapsIdParentEntityWithDTOList = mapsIdParentEntityWithDTORepository.findAll();
        assertThat(mapsIdParentEntityWithDTOList).hasSize(databaseSizeBeforeUpdate);
        MapsIdParentEntityWithDTO testMapsIdParentEntityWithDTO = mapsIdParentEntityWithDTOList.get(mapsIdParentEntityWithDTOList.size() - 1);
        assertThat(testMapsIdParentEntityWithDTO.getName()).isEqualTo(UPDATED_NAME);
    }

    @Test
    @Transactional
    public void updateNonExistingMapsIdParentEntityWithDTO() throws Exception {
        int databaseSizeBeforeUpdate = mapsIdParentEntityWithDTORepository.findAll().size();

        // Create the MapsIdParentEntityWithDTO
        MapsIdParentEntityWithDTODTO mapsIdParentEntityWithDTODTO = mapsIdParentEntityWithDTOMapper.toDto(mapsIdParentEntityWithDTO);

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restMapsIdParentEntityWithDTOMockMvc.perform(put("/api/maps-id-parent-entity-with-dtos")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(mapsIdParentEntityWithDTODTO)))
            .andExpect(status().isBadRequest());

        // Validate the MapsIdParentEntityWithDTO in the database
        List<MapsIdParentEntityWithDTO> mapsIdParentEntityWithDTOList = mapsIdParentEntityWithDTORepository.findAll();
        assertThat(mapsIdParentEntityWithDTOList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deleteMapsIdParentEntityWithDTO() throws Exception {
        // Initialize the database
        mapsIdParentEntityWithDTORepository.saveAndFlush(mapsIdParentEntityWithDTO);

        int databaseSizeBeforeDelete = mapsIdParentEntityWithDTORepository.findAll().size();

        // Delete the mapsIdParentEntityWithDTO
        restMapsIdParentEntityWithDTOMockMvc.perform(delete("/api/maps-id-parent-entity-with-dtos/{id}", mapsIdParentEntityWithDTO.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<MapsIdParentEntityWithDTO> mapsIdParentEntityWithDTOList = mapsIdParentEntityWithDTORepository.findAll();
        assertThat(mapsIdParentEntityWithDTOList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
