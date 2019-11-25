package io.github.jhipster.travis.web.rest;

import io.github.jhipster.travis.TravisNg2App;
import io.github.jhipster.travis.domain.MapsIdChildEntityWithoutDTO;
import io.github.jhipster.travis.domain.MapsIdParentEntityWithoutDTO;
import io.github.jhipster.travis.repository.MapsIdChildEntityWithoutDTORepository;
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
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.List;

import static io.github.jhipster.travis.web.rest.TestUtil.createFormattingConversionService;
import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Integration tests for the {@link MapsIdChildEntityWithoutDTOResource} REST controller.
 */
@SpringBootTest(classes = TravisNg2App.class)
public class MapsIdChildEntityWithoutDTOResourceIT {

    private static final Instant DEFAULT_DATE = Instant.ofEpochMilli(0L);
    private static final Instant UPDATED_DATE = Instant.now().truncatedTo(ChronoUnit.MILLIS);

    @Autowired
    private MapsIdChildEntityWithoutDTORepository mapsIdChildEntityWithoutDTORepository;
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

    private MockMvc restMapsIdChildEntityWithoutDTOMockMvc;

    private MapsIdChildEntityWithoutDTO mapsIdChildEntityWithoutDTO;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.initMocks(this);
        final MapsIdChildEntityWithoutDTOResource mapsIdChildEntityWithoutDTOResource = new MapsIdChildEntityWithoutDTOResource(mapsIdChildEntityWithoutDTORepository, mapsIdParentEntityWithoutDTORepository);
        this.restMapsIdChildEntityWithoutDTOMockMvc = MockMvcBuilders.standaloneSetup(mapsIdChildEntityWithoutDTOResource)
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
    public static MapsIdChildEntityWithoutDTO createEntity(EntityManager em) {
        MapsIdChildEntityWithoutDTO mapsIdChildEntityWithoutDTO = new MapsIdChildEntityWithoutDTO()
            .date(DEFAULT_DATE);
        // Add required entity
        MapsIdParentEntityWithoutDTO mapsIdParentEntityWithoutDTO;
        if (TestUtil.findAll(em, MapsIdParentEntityWithoutDTO.class).isEmpty()) {
            mapsIdParentEntityWithoutDTO = MapsIdParentEntityWithoutDTOResourceIT.createEntity(em);
            em.persist(mapsIdParentEntityWithoutDTO);
            em.flush();
        } else {
            mapsIdParentEntityWithoutDTO = TestUtil.findAll(em, MapsIdParentEntityWithoutDTO.class).get(0);
        }
        mapsIdChildEntityWithoutDTO.setMapsIdParentEntityWithoutDTO(mapsIdParentEntityWithoutDTO);
        return mapsIdChildEntityWithoutDTO;
    }
    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static MapsIdChildEntityWithoutDTO createUpdatedEntity(EntityManager em) {
        MapsIdChildEntityWithoutDTO mapsIdChildEntityWithoutDTO = new MapsIdChildEntityWithoutDTO()
            .date(UPDATED_DATE);
        // Add required entity
        MapsIdParentEntityWithoutDTO mapsIdParentEntityWithoutDTO;
        if (TestUtil.findAll(em, MapsIdParentEntityWithoutDTO.class).isEmpty()) {
            mapsIdParentEntityWithoutDTO = MapsIdParentEntityWithoutDTOResourceIT.createUpdatedEntity(em);
            em.persist(mapsIdParentEntityWithoutDTO);
            em.flush();
        } else {
            mapsIdParentEntityWithoutDTO = TestUtil.findAll(em, MapsIdParentEntityWithoutDTO.class).get(0);
        }
        mapsIdChildEntityWithoutDTO.setMapsIdParentEntityWithoutDTO(mapsIdParentEntityWithoutDTO);
        return mapsIdChildEntityWithoutDTO;
    }

    @BeforeEach
    public void initTest() {
        mapsIdChildEntityWithoutDTO = createEntity(em);
    }

    @Test
    @Transactional
    public void createMapsIdChildEntityWithoutDTO() throws Exception {
        int databaseSizeBeforeCreate = mapsIdChildEntityWithoutDTORepository.findAll().size();

        // Create the MapsIdChildEntityWithoutDTO
        restMapsIdChildEntityWithoutDTOMockMvc.perform(post("/api/maps-id-child-entity-without-dtos")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(mapsIdChildEntityWithoutDTO)))
            .andExpect(status().isCreated());

        // Validate the MapsIdChildEntityWithoutDTO in the database
        List<MapsIdChildEntityWithoutDTO> mapsIdChildEntityWithoutDTOList = mapsIdChildEntityWithoutDTORepository.findAll();
        assertThat(mapsIdChildEntityWithoutDTOList).hasSize(databaseSizeBeforeCreate + 1);
        MapsIdChildEntityWithoutDTO testMapsIdChildEntityWithoutDTO = mapsIdChildEntityWithoutDTOList.get(mapsIdChildEntityWithoutDTOList.size() - 1);
        assertThat(testMapsIdChildEntityWithoutDTO.getDate()).isEqualTo(DEFAULT_DATE);

        // Validate the id for MapsId, the ids must be same
        assertThat(testMapsIdChildEntityWithoutDTO.getId()).isEqualTo(testMapsIdChildEntityWithoutDTO.getMapsIdParentEntityWithoutDTO().getId());
    }

    @Test
    @Transactional
    public void createMapsIdChildEntityWithoutDTOWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = mapsIdChildEntityWithoutDTORepository.findAll().size();

        // Create the MapsIdChildEntityWithoutDTO with an existing ID
        mapsIdChildEntityWithoutDTO.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restMapsIdChildEntityWithoutDTOMockMvc.perform(post("/api/maps-id-child-entity-without-dtos")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(mapsIdChildEntityWithoutDTO)))
            .andExpect(status().isBadRequest());

        // Validate the MapsIdChildEntityWithoutDTO in the database
        List<MapsIdChildEntityWithoutDTO> mapsIdChildEntityWithoutDTOList = mapsIdChildEntityWithoutDTORepository.findAll();
        assertThat(mapsIdChildEntityWithoutDTOList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    @Transactional
    public void updateMapsIdChildEntityWithoutDTOMapsIdAssociationWithNewId() throws Exception {
        // Initialize the database
        mapsIdChildEntityWithoutDTORepository.saveAndFlush(mapsIdChildEntityWithoutDTO);
        int databaseSizeBeforeCreate = mapsIdChildEntityWithoutDTORepository.findAll().size();

        // Add a new parent entity
        MapsIdParentEntityWithoutDTO mapsIdParentEntityWithoutDTO = MapsIdParentEntityWithoutDTOResourceIT.createUpdatedEntity(em);
        em.persist(mapsIdParentEntityWithoutDTO);
        em.flush();

        // Load the mapsIdChildEntityWithoutDTO
        MapsIdChildEntityWithoutDTO updatedMapsIdChildEntityWithoutDTO = mapsIdChildEntityWithoutDTORepository.findById(mapsIdChildEntityWithoutDTO.getId()).get();
        // Disconnect from session so that the updates on updatedMapsIdChildEntityWithoutDTO are not directly saved in db
        em.detach(updatedMapsIdChildEntityWithoutDTO);

        // Update the MapsIdParentEntityWithoutDTO with new association value
        updatedMapsIdChildEntityWithoutDTO.setMapsIdParentEntityWithoutDTO(mapsIdParentEntityWithoutDTO);

        // Update the entity
        restMapsIdChildEntityWithoutDTOMockMvc.perform(put("/api/maps-id-child-entity-without-dtos")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedMapsIdChildEntityWithoutDTO)))
            .andExpect(status().isOk());

        // Validate the MapsIdChildEntityWithoutDTO in the database
        List<MapsIdChildEntityWithoutDTO> mapsIdChildEntityWithoutDTOList = mapsIdChildEntityWithoutDTORepository.findAll();
        assertThat(mapsIdChildEntityWithoutDTOList).hasSize(databaseSizeBeforeCreate);
        MapsIdChildEntityWithoutDTO testMapsIdChildEntityWithoutDTO = mapsIdChildEntityWithoutDTOList.get(mapsIdChildEntityWithoutDTOList.size() - 1);

        // Validate the id for MapsId, the ids must be same
        // Uncomment the following line for assertion. However, please note that there is a known issue and uncommenting will fail the test.
        // Please look at https://github.com/jhipster/generator-jhipster/issues/9100. You can modify this test as necessary.
        // assertThat(testMapsIdChildEntityWithoutDTO.getId()).isEqualTo(testMapsIdChildEntityWithoutDTO.getMapsIdParentEntityWithoutDTO().getId());
    }

    @Test
    @Transactional
    public void getAllMapsIdChildEntityWithoutDTOS() throws Exception {
        // Initialize the database
        mapsIdChildEntityWithoutDTORepository.saveAndFlush(mapsIdChildEntityWithoutDTO);

        // Get all the mapsIdChildEntityWithoutDTOList
        restMapsIdChildEntityWithoutDTOMockMvc.perform(get("/api/maps-id-child-entity-without-dtos?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(mapsIdChildEntityWithoutDTO.getId().intValue())))
            .andExpect(jsonPath("$.[*].date").value(hasItem(DEFAULT_DATE.toString())));
    }
    
    @Test
    @Transactional
    public void getMapsIdChildEntityWithoutDTO() throws Exception {
        // Initialize the database
        mapsIdChildEntityWithoutDTORepository.saveAndFlush(mapsIdChildEntityWithoutDTO);

        // Get the mapsIdChildEntityWithoutDTO
        restMapsIdChildEntityWithoutDTOMockMvc.perform(get("/api/maps-id-child-entity-without-dtos/{id}", mapsIdChildEntityWithoutDTO.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(mapsIdChildEntityWithoutDTO.getId().intValue()))
            .andExpect(jsonPath("$.date").value(DEFAULT_DATE.toString()));
    }

    @Test
    @Transactional
    public void getNonExistingMapsIdChildEntityWithoutDTO() throws Exception {
        // Get the mapsIdChildEntityWithoutDTO
        restMapsIdChildEntityWithoutDTOMockMvc.perform(get("/api/maps-id-child-entity-without-dtos/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateMapsIdChildEntityWithoutDTO() throws Exception {
        // Initialize the database
        mapsIdChildEntityWithoutDTORepository.saveAndFlush(mapsIdChildEntityWithoutDTO);

        int databaseSizeBeforeUpdate = mapsIdChildEntityWithoutDTORepository.findAll().size();

        // Update the mapsIdChildEntityWithoutDTO
        MapsIdChildEntityWithoutDTO updatedMapsIdChildEntityWithoutDTO = mapsIdChildEntityWithoutDTORepository.findById(mapsIdChildEntityWithoutDTO.getId()).get();
        // Disconnect from session so that the updates on updatedMapsIdChildEntityWithoutDTO are not directly saved in db
        em.detach(updatedMapsIdChildEntityWithoutDTO);
        updatedMapsIdChildEntityWithoutDTO
            .date(UPDATED_DATE);

        restMapsIdChildEntityWithoutDTOMockMvc.perform(put("/api/maps-id-child-entity-without-dtos")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedMapsIdChildEntityWithoutDTO)))
            .andExpect(status().isOk());

        // Validate the MapsIdChildEntityWithoutDTO in the database
        List<MapsIdChildEntityWithoutDTO> mapsIdChildEntityWithoutDTOList = mapsIdChildEntityWithoutDTORepository.findAll();
        assertThat(mapsIdChildEntityWithoutDTOList).hasSize(databaseSizeBeforeUpdate);
        MapsIdChildEntityWithoutDTO testMapsIdChildEntityWithoutDTO = mapsIdChildEntityWithoutDTOList.get(mapsIdChildEntityWithoutDTOList.size() - 1);
        assertThat(testMapsIdChildEntityWithoutDTO.getDate()).isEqualTo(UPDATED_DATE);
    }

    @Test
    @Transactional
    public void updateNonExistingMapsIdChildEntityWithoutDTO() throws Exception {
        int databaseSizeBeforeUpdate = mapsIdChildEntityWithoutDTORepository.findAll().size();

        // Create the MapsIdChildEntityWithoutDTO

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restMapsIdChildEntityWithoutDTOMockMvc.perform(put("/api/maps-id-child-entity-without-dtos")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(mapsIdChildEntityWithoutDTO)))
            .andExpect(status().isBadRequest());

        // Validate the MapsIdChildEntityWithoutDTO in the database
        List<MapsIdChildEntityWithoutDTO> mapsIdChildEntityWithoutDTOList = mapsIdChildEntityWithoutDTORepository.findAll();
        assertThat(mapsIdChildEntityWithoutDTOList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deleteMapsIdChildEntityWithoutDTO() throws Exception {
        // Initialize the database
        mapsIdChildEntityWithoutDTORepository.saveAndFlush(mapsIdChildEntityWithoutDTO);

        int databaseSizeBeforeDelete = mapsIdChildEntityWithoutDTORepository.findAll().size();

        // Delete the mapsIdChildEntityWithoutDTO
        restMapsIdChildEntityWithoutDTOMockMvc.perform(delete("/api/maps-id-child-entity-without-dtos/{id}", mapsIdChildEntityWithoutDTO.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<MapsIdChildEntityWithoutDTO> mapsIdChildEntityWithoutDTOList = mapsIdChildEntityWithoutDTORepository.findAll();
        assertThat(mapsIdChildEntityWithoutDTOList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
