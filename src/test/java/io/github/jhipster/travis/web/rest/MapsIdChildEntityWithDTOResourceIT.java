package io.github.jhipster.travis.web.rest;

import io.github.jhipster.travis.TravisNg2App;
import io.github.jhipster.travis.domain.MapsIdChildEntityWithDTO;
import io.github.jhipster.travis.domain.MapsIdParentEntityWithDTO;
import io.github.jhipster.travis.repository.MapsIdChildEntityWithDTORepository;
import io.github.jhipster.travis.service.MapsIdChildEntityWithDTOService;
import io.github.jhipster.travis.service.dto.MapsIdChildEntityWithDTODTO;
import io.github.jhipster.travis.service.mapper.MapsIdChildEntityWithDTOMapper;
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
 * Integration tests for the {@link MapsIdChildEntityWithDTOResource} REST controller.
 */
@SpringBootTest(classes = TravisNg2App.class)
public class MapsIdChildEntityWithDTOResourceIT {

    private static final Instant DEFAULT_DATE = Instant.ofEpochMilli(0L);
    private static final Instant UPDATED_DATE = Instant.now().truncatedTo(ChronoUnit.MILLIS);

    @Autowired
    private MapsIdChildEntityWithDTORepository mapsIdChildEntityWithDTORepository;

    @Autowired
    private MapsIdChildEntityWithDTOMapper mapsIdChildEntityWithDTOMapper;

    @Autowired
    private MapsIdChildEntityWithDTOService mapsIdChildEntityWithDTOService;

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

    private MockMvc restMapsIdChildEntityWithDTOMockMvc;

    private MapsIdChildEntityWithDTO mapsIdChildEntityWithDTO;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.initMocks(this);
        final MapsIdChildEntityWithDTOResource mapsIdChildEntityWithDTOResource = new MapsIdChildEntityWithDTOResource(mapsIdChildEntityWithDTOService);
        this.restMapsIdChildEntityWithDTOMockMvc = MockMvcBuilders.standaloneSetup(mapsIdChildEntityWithDTOResource)
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
    public static MapsIdChildEntityWithDTO createEntity(EntityManager em) {
        MapsIdChildEntityWithDTO mapsIdChildEntityWithDTO = new MapsIdChildEntityWithDTO()
            .date(DEFAULT_DATE);
        // Add required entity
        MapsIdParentEntityWithDTO mapsIdParentEntityWithDTO;
        if (TestUtil.findAll(em, MapsIdParentEntityWithDTO.class).isEmpty()) {
            mapsIdParentEntityWithDTO = MapsIdParentEntityWithDTOResourceIT.createEntity(em);
            em.persist(mapsIdParentEntityWithDTO);
            em.flush();
        } else {
            mapsIdParentEntityWithDTO = TestUtil.findAll(em, MapsIdParentEntityWithDTO.class).get(0);
        }
        mapsIdChildEntityWithDTO.setMapsIdParentEntityWithDTO(mapsIdParentEntityWithDTO);
        return mapsIdChildEntityWithDTO;
    }
    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static MapsIdChildEntityWithDTO createUpdatedEntity(EntityManager em) {
        MapsIdChildEntityWithDTO mapsIdChildEntityWithDTO = new MapsIdChildEntityWithDTO()
            .date(UPDATED_DATE);
        // Add required entity
        MapsIdParentEntityWithDTO mapsIdParentEntityWithDTO;
        if (TestUtil.findAll(em, MapsIdParentEntityWithDTO.class).isEmpty()) {
            mapsIdParentEntityWithDTO = MapsIdParentEntityWithDTOResourceIT.createUpdatedEntity(em);
            em.persist(mapsIdParentEntityWithDTO);
            em.flush();
        } else {
            mapsIdParentEntityWithDTO = TestUtil.findAll(em, MapsIdParentEntityWithDTO.class).get(0);
        }
        mapsIdChildEntityWithDTO.setMapsIdParentEntityWithDTO(mapsIdParentEntityWithDTO);
        return mapsIdChildEntityWithDTO;
    }

    @BeforeEach
    public void initTest() {
        mapsIdChildEntityWithDTO = createEntity(em);
    }

    @Test
    @Transactional
    public void createMapsIdChildEntityWithDTO() throws Exception {
        int databaseSizeBeforeCreate = mapsIdChildEntityWithDTORepository.findAll().size();

        // Create the MapsIdChildEntityWithDTO
        MapsIdChildEntityWithDTODTO mapsIdChildEntityWithDTODTO = mapsIdChildEntityWithDTOMapper.toDto(mapsIdChildEntityWithDTO);
        restMapsIdChildEntityWithDTOMockMvc.perform(post("/api/maps-id-child-entity-with-dtos")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(mapsIdChildEntityWithDTODTO)))
            .andExpect(status().isCreated());

        // Validate the MapsIdChildEntityWithDTO in the database
        List<MapsIdChildEntityWithDTO> mapsIdChildEntityWithDTOList = mapsIdChildEntityWithDTORepository.findAll();
        assertThat(mapsIdChildEntityWithDTOList).hasSize(databaseSizeBeforeCreate + 1);
        MapsIdChildEntityWithDTO testMapsIdChildEntityWithDTO = mapsIdChildEntityWithDTOList.get(mapsIdChildEntityWithDTOList.size() - 1);
        assertThat(testMapsIdChildEntityWithDTO.getDate()).isEqualTo(DEFAULT_DATE);

        // Validate the id for MapsId, the ids must be same
        assertThat(testMapsIdChildEntityWithDTO.getId()).isEqualTo(testMapsIdChildEntityWithDTO.getMapsIdParentEntityWithDTO().getId());
    }

    @Test
    @Transactional
    public void createMapsIdChildEntityWithDTOWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = mapsIdChildEntityWithDTORepository.findAll().size();

        // Create the MapsIdChildEntityWithDTO with an existing ID
        mapsIdChildEntityWithDTO.setId(1L);
        MapsIdChildEntityWithDTODTO mapsIdChildEntityWithDTODTO = mapsIdChildEntityWithDTOMapper.toDto(mapsIdChildEntityWithDTO);

        // An entity with an existing ID cannot be created, so this API call must fail
        restMapsIdChildEntityWithDTOMockMvc.perform(post("/api/maps-id-child-entity-with-dtos")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(mapsIdChildEntityWithDTODTO)))
            .andExpect(status().isBadRequest());

        // Validate the MapsIdChildEntityWithDTO in the database
        List<MapsIdChildEntityWithDTO> mapsIdChildEntityWithDTOList = mapsIdChildEntityWithDTORepository.findAll();
        assertThat(mapsIdChildEntityWithDTOList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    @Transactional
    public void updateMapsIdChildEntityWithDTOMapsIdAssociationWithNewId() throws Exception {
        // Initialize the database
        mapsIdChildEntityWithDTORepository.saveAndFlush(mapsIdChildEntityWithDTO);
        int databaseSizeBeforeCreate = mapsIdChildEntityWithDTORepository.findAll().size();

        // Add a new parent entity
        MapsIdParentEntityWithDTO mapsIdParentEntityWithDTO = MapsIdParentEntityWithDTOResourceIT.createUpdatedEntity(em);
        em.persist(mapsIdParentEntityWithDTO);
        em.flush();

        // Load the mapsIdChildEntityWithDTO
        MapsIdChildEntityWithDTO updatedMapsIdChildEntityWithDTO = mapsIdChildEntityWithDTORepository.findById(mapsIdChildEntityWithDTO.getId()).get();
        // Disconnect from session so that the updates on updatedMapsIdChildEntityWithDTO are not directly saved in db
        em.detach(updatedMapsIdChildEntityWithDTO);

        // Update the MapsIdParentEntityWithDTO with new association value
        updatedMapsIdChildEntityWithDTO.setMapsIdParentEntityWithDTO(mapsIdParentEntityWithDTO);
        MapsIdChildEntityWithDTODTO updatedMapsIdChildEntityWithDTODTO = mapsIdChildEntityWithDTOMapper.toDto(updatedMapsIdChildEntityWithDTO);

        // Update the entity
        restMapsIdChildEntityWithDTOMockMvc.perform(put("/api/maps-id-child-entity-with-dtos")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedMapsIdChildEntityWithDTODTO)))
            .andExpect(status().isOk());

        // Validate the MapsIdChildEntityWithDTO in the database
        List<MapsIdChildEntityWithDTO> mapsIdChildEntityWithDTOList = mapsIdChildEntityWithDTORepository.findAll();
        assertThat(mapsIdChildEntityWithDTOList).hasSize(databaseSizeBeforeCreate);
        MapsIdChildEntityWithDTO testMapsIdChildEntityWithDTO = mapsIdChildEntityWithDTOList.get(mapsIdChildEntityWithDTOList.size() - 1);

        // Validate the id for MapsId, the ids must be same
        // Uncomment the following line for assertion. However, please note that there is a known issue and uncommenting will fail the test.
        // Please look at https://github.com/jhipster/generator-jhipster/issues/9100. You can modify this test as necessary.
        // assertThat(testMapsIdChildEntityWithDTO.getId()).isEqualTo(testMapsIdChildEntityWithDTO.getMapsIdParentEntityWithDTO().getId());
    }

    @Test
    @Transactional
    public void getAllMapsIdChildEntityWithDTOS() throws Exception {
        // Initialize the database
        mapsIdChildEntityWithDTORepository.saveAndFlush(mapsIdChildEntityWithDTO);

        // Get all the mapsIdChildEntityWithDTOList
        restMapsIdChildEntityWithDTOMockMvc.perform(get("/api/maps-id-child-entity-with-dtos?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(mapsIdChildEntityWithDTO.getId().intValue())))
            .andExpect(jsonPath("$.[*].date").value(hasItem(DEFAULT_DATE.toString())));
    }
    
    @Test
    @Transactional
    public void getMapsIdChildEntityWithDTO() throws Exception {
        // Initialize the database
        mapsIdChildEntityWithDTORepository.saveAndFlush(mapsIdChildEntityWithDTO);

        // Get the mapsIdChildEntityWithDTO
        restMapsIdChildEntityWithDTOMockMvc.perform(get("/api/maps-id-child-entity-with-dtos/{id}", mapsIdChildEntityWithDTO.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(mapsIdChildEntityWithDTO.getId().intValue()))
            .andExpect(jsonPath("$.date").value(DEFAULT_DATE.toString()));
    }

    @Test
    @Transactional
    public void getNonExistingMapsIdChildEntityWithDTO() throws Exception {
        // Get the mapsIdChildEntityWithDTO
        restMapsIdChildEntityWithDTOMockMvc.perform(get("/api/maps-id-child-entity-with-dtos/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateMapsIdChildEntityWithDTO() throws Exception {
        // Initialize the database
        mapsIdChildEntityWithDTORepository.saveAndFlush(mapsIdChildEntityWithDTO);

        int databaseSizeBeforeUpdate = mapsIdChildEntityWithDTORepository.findAll().size();

        // Update the mapsIdChildEntityWithDTO
        MapsIdChildEntityWithDTO updatedMapsIdChildEntityWithDTO = mapsIdChildEntityWithDTORepository.findById(mapsIdChildEntityWithDTO.getId()).get();
        // Disconnect from session so that the updates on updatedMapsIdChildEntityWithDTO are not directly saved in db
        em.detach(updatedMapsIdChildEntityWithDTO);
        updatedMapsIdChildEntityWithDTO
            .date(UPDATED_DATE);
        MapsIdChildEntityWithDTODTO mapsIdChildEntityWithDTODTO = mapsIdChildEntityWithDTOMapper.toDto(updatedMapsIdChildEntityWithDTO);

        restMapsIdChildEntityWithDTOMockMvc.perform(put("/api/maps-id-child-entity-with-dtos")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(mapsIdChildEntityWithDTODTO)))
            .andExpect(status().isOk());

        // Validate the MapsIdChildEntityWithDTO in the database
        List<MapsIdChildEntityWithDTO> mapsIdChildEntityWithDTOList = mapsIdChildEntityWithDTORepository.findAll();
        assertThat(mapsIdChildEntityWithDTOList).hasSize(databaseSizeBeforeUpdate);
        MapsIdChildEntityWithDTO testMapsIdChildEntityWithDTO = mapsIdChildEntityWithDTOList.get(mapsIdChildEntityWithDTOList.size() - 1);
        assertThat(testMapsIdChildEntityWithDTO.getDate()).isEqualTo(UPDATED_DATE);
    }

    @Test
    @Transactional
    public void updateNonExistingMapsIdChildEntityWithDTO() throws Exception {
        int databaseSizeBeforeUpdate = mapsIdChildEntityWithDTORepository.findAll().size();

        // Create the MapsIdChildEntityWithDTO
        MapsIdChildEntityWithDTODTO mapsIdChildEntityWithDTODTO = mapsIdChildEntityWithDTOMapper.toDto(mapsIdChildEntityWithDTO);

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restMapsIdChildEntityWithDTOMockMvc.perform(put("/api/maps-id-child-entity-with-dtos")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(mapsIdChildEntityWithDTODTO)))
            .andExpect(status().isBadRequest());

        // Validate the MapsIdChildEntityWithDTO in the database
        List<MapsIdChildEntityWithDTO> mapsIdChildEntityWithDTOList = mapsIdChildEntityWithDTORepository.findAll();
        assertThat(mapsIdChildEntityWithDTOList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deleteMapsIdChildEntityWithDTO() throws Exception {
        // Initialize the database
        mapsIdChildEntityWithDTORepository.saveAndFlush(mapsIdChildEntityWithDTO);

        int databaseSizeBeforeDelete = mapsIdChildEntityWithDTORepository.findAll().size();

        // Delete the mapsIdChildEntityWithDTO
        restMapsIdChildEntityWithDTOMockMvc.perform(delete("/api/maps-id-child-entity-with-dtos/{id}", mapsIdChildEntityWithDTO.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<MapsIdChildEntityWithDTO> mapsIdChildEntityWithDTOList = mapsIdChildEntityWithDTORepository.findAll();
        assertThat(mapsIdChildEntityWithDTOList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
