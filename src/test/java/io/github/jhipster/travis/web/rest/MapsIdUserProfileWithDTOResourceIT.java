package io.github.jhipster.travis.web.rest;

import io.github.jhipster.travis.TravisNg2App;
import io.github.jhipster.travis.domain.MapsIdUserProfileWithDTO;
import io.github.jhipster.travis.domain.User;
import io.github.jhipster.travis.repository.MapsIdUserProfileWithDTORepository;
import io.github.jhipster.travis.service.MapsIdUserProfileWithDTOService;
import io.github.jhipster.travis.service.dto.MapsIdUserProfileWithDTODTO;
import io.github.jhipster.travis.service.mapper.MapsIdUserProfileWithDTOMapper;
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
 * Integration tests for the {@link MapsIdUserProfileWithDTOResource} REST controller.
 */
@SpringBootTest(classes = TravisNg2App.class)
public class MapsIdUserProfileWithDTOResourceIT {

    private static final Instant DEFAULT_DATE_OF_BIRTH = Instant.ofEpochMilli(0L);
    private static final Instant UPDATED_DATE_OF_BIRTH = Instant.now().truncatedTo(ChronoUnit.MILLIS);

    @Autowired
    private MapsIdUserProfileWithDTORepository mapsIdUserProfileWithDTORepository;

    @Autowired
    private MapsIdUserProfileWithDTOMapper mapsIdUserProfileWithDTOMapper;

    @Autowired
    private MapsIdUserProfileWithDTOService mapsIdUserProfileWithDTOService;

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

    private MockMvc restMapsIdUserProfileWithDTOMockMvc;

    private MapsIdUserProfileWithDTO mapsIdUserProfileWithDTO;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.initMocks(this);
        final MapsIdUserProfileWithDTOResource mapsIdUserProfileWithDTOResource = new MapsIdUserProfileWithDTOResource(mapsIdUserProfileWithDTOService);
        this.restMapsIdUserProfileWithDTOMockMvc = MockMvcBuilders.standaloneSetup(mapsIdUserProfileWithDTOResource)
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
    public static MapsIdUserProfileWithDTO createEntity(EntityManager em) {
        MapsIdUserProfileWithDTO mapsIdUserProfileWithDTO = new MapsIdUserProfileWithDTO()
            .dateOfBirth(DEFAULT_DATE_OF_BIRTH);
        // Add required entity
        User user = UserResourceIT.createEntity(em);
        em.persist(user);
        em.flush();
        mapsIdUserProfileWithDTO.setUser(user);
        return mapsIdUserProfileWithDTO;
    }
    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static MapsIdUserProfileWithDTO createUpdatedEntity(EntityManager em) {
        MapsIdUserProfileWithDTO mapsIdUserProfileWithDTO = new MapsIdUserProfileWithDTO()
            .dateOfBirth(UPDATED_DATE_OF_BIRTH);
        // Add required entity
        User user = UserResourceIT.createEntity(em);
        em.persist(user);
        em.flush();
        mapsIdUserProfileWithDTO.setUser(user);
        return mapsIdUserProfileWithDTO;
    }

    @BeforeEach
    public void initTest() {
        mapsIdUserProfileWithDTO = createEntity(em);
    }

    @Test
    @Transactional
    public void createMapsIdUserProfileWithDTO() throws Exception {
        int databaseSizeBeforeCreate = mapsIdUserProfileWithDTORepository.findAll().size();

        // Create the MapsIdUserProfileWithDTO
        MapsIdUserProfileWithDTODTO mapsIdUserProfileWithDTODTO = mapsIdUserProfileWithDTOMapper.toDto(mapsIdUserProfileWithDTO);
        restMapsIdUserProfileWithDTOMockMvc.perform(post("/api/maps-id-user-profile-with-dtos")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(mapsIdUserProfileWithDTODTO)))
            .andExpect(status().isCreated());

        // Validate the MapsIdUserProfileWithDTO in the database
        List<MapsIdUserProfileWithDTO> mapsIdUserProfileWithDTOList = mapsIdUserProfileWithDTORepository.findAll();
        assertThat(mapsIdUserProfileWithDTOList).hasSize(databaseSizeBeforeCreate + 1);
        MapsIdUserProfileWithDTO testMapsIdUserProfileWithDTO = mapsIdUserProfileWithDTOList.get(mapsIdUserProfileWithDTOList.size() - 1);
        assertThat(testMapsIdUserProfileWithDTO.getDateOfBirth()).isEqualTo(DEFAULT_DATE_OF_BIRTH);

        // Validate the id for MapsId, the ids must be same
        assertThat(testMapsIdUserProfileWithDTO.getId()).isEqualTo(testMapsIdUserProfileWithDTO.getUser().getId());
    }

    @Test
    @Transactional
    public void createMapsIdUserProfileWithDTOWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = mapsIdUserProfileWithDTORepository.findAll().size();

        // Create the MapsIdUserProfileWithDTO with an existing ID
        mapsIdUserProfileWithDTO.setId(1L);
        MapsIdUserProfileWithDTODTO mapsIdUserProfileWithDTODTO = mapsIdUserProfileWithDTOMapper.toDto(mapsIdUserProfileWithDTO);

        // An entity with an existing ID cannot be created, so this API call must fail
        restMapsIdUserProfileWithDTOMockMvc.perform(post("/api/maps-id-user-profile-with-dtos")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(mapsIdUserProfileWithDTODTO)))
            .andExpect(status().isBadRequest());

        // Validate the MapsIdUserProfileWithDTO in the database
        List<MapsIdUserProfileWithDTO> mapsIdUserProfileWithDTOList = mapsIdUserProfileWithDTORepository.findAll();
        assertThat(mapsIdUserProfileWithDTOList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    @Transactional
    public void updateMapsIdUserProfileWithDTOMapsIdAssociationWithNewId() throws Exception {
        // Initialize the database
        mapsIdUserProfileWithDTORepository.saveAndFlush(mapsIdUserProfileWithDTO);
        int databaseSizeBeforeCreate = mapsIdUserProfileWithDTORepository.findAll().size();

        // Add a new parent entity
        User user = UserResourceIT.createEntity(em);
        em.persist(user);
        em.flush();

        // Load the mapsIdUserProfileWithDTO
        MapsIdUserProfileWithDTO updatedMapsIdUserProfileWithDTO = mapsIdUserProfileWithDTORepository.findById(mapsIdUserProfileWithDTO.getId()).get();
        // Disconnect from session so that the updates on updatedMapsIdUserProfileWithDTO are not directly saved in db
        em.detach(updatedMapsIdUserProfileWithDTO);

        // Update the User with new association value
        updatedMapsIdUserProfileWithDTO.setUser(user);
        MapsIdUserProfileWithDTODTO updatedMapsIdUserProfileWithDTODTO = mapsIdUserProfileWithDTOMapper.toDto(updatedMapsIdUserProfileWithDTO);

        // Update the entity
        restMapsIdUserProfileWithDTOMockMvc.perform(put("/api/maps-id-user-profile-with-dtos")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedMapsIdUserProfileWithDTODTO)))
            .andExpect(status().isOk());

        // Validate the MapsIdUserProfileWithDTO in the database
        List<MapsIdUserProfileWithDTO> mapsIdUserProfileWithDTOList = mapsIdUserProfileWithDTORepository.findAll();
        assertThat(mapsIdUserProfileWithDTOList).hasSize(databaseSizeBeforeCreate);
        MapsIdUserProfileWithDTO testMapsIdUserProfileWithDTO = mapsIdUserProfileWithDTOList.get(mapsIdUserProfileWithDTOList.size() - 1);

        // Validate the id for MapsId, the ids must be same
        // Uncomment the following line for assertion. However, please note that there is a known issue and uncommenting will fail the test.
        // Please look at https://github.com/jhipster/generator-jhipster/issues/9100. You can modify this test as necessary.
        // assertThat(testMapsIdUserProfileWithDTO.getId()).isEqualTo(testMapsIdUserProfileWithDTO.getUser().getId());
    }

    @Test
    @Transactional
    public void getAllMapsIdUserProfileWithDTOS() throws Exception {
        // Initialize the database
        mapsIdUserProfileWithDTORepository.saveAndFlush(mapsIdUserProfileWithDTO);

        // Get all the mapsIdUserProfileWithDTOList
        restMapsIdUserProfileWithDTOMockMvc.perform(get("/api/maps-id-user-profile-with-dtos?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(mapsIdUserProfileWithDTO.getId().intValue())))
            .andExpect(jsonPath("$.[*].dateOfBirth").value(hasItem(DEFAULT_DATE_OF_BIRTH.toString())));
    }
    
    @Test
    @Transactional
    public void getMapsIdUserProfileWithDTO() throws Exception {
        // Initialize the database
        mapsIdUserProfileWithDTORepository.saveAndFlush(mapsIdUserProfileWithDTO);

        // Get the mapsIdUserProfileWithDTO
        restMapsIdUserProfileWithDTOMockMvc.perform(get("/api/maps-id-user-profile-with-dtos/{id}", mapsIdUserProfileWithDTO.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(mapsIdUserProfileWithDTO.getId().intValue()))
            .andExpect(jsonPath("$.dateOfBirth").value(DEFAULT_DATE_OF_BIRTH.toString()));
    }

    @Test
    @Transactional
    public void getNonExistingMapsIdUserProfileWithDTO() throws Exception {
        // Get the mapsIdUserProfileWithDTO
        restMapsIdUserProfileWithDTOMockMvc.perform(get("/api/maps-id-user-profile-with-dtos/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateMapsIdUserProfileWithDTO() throws Exception {
        // Initialize the database
        mapsIdUserProfileWithDTORepository.saveAndFlush(mapsIdUserProfileWithDTO);

        int databaseSizeBeforeUpdate = mapsIdUserProfileWithDTORepository.findAll().size();

        // Update the mapsIdUserProfileWithDTO
        MapsIdUserProfileWithDTO updatedMapsIdUserProfileWithDTO = mapsIdUserProfileWithDTORepository.findById(mapsIdUserProfileWithDTO.getId()).get();
        // Disconnect from session so that the updates on updatedMapsIdUserProfileWithDTO are not directly saved in db
        em.detach(updatedMapsIdUserProfileWithDTO);
        updatedMapsIdUserProfileWithDTO
            .dateOfBirth(UPDATED_DATE_OF_BIRTH);
        MapsIdUserProfileWithDTODTO mapsIdUserProfileWithDTODTO = mapsIdUserProfileWithDTOMapper.toDto(updatedMapsIdUserProfileWithDTO);

        restMapsIdUserProfileWithDTOMockMvc.perform(put("/api/maps-id-user-profile-with-dtos")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(mapsIdUserProfileWithDTODTO)))
            .andExpect(status().isOk());

        // Validate the MapsIdUserProfileWithDTO in the database
        List<MapsIdUserProfileWithDTO> mapsIdUserProfileWithDTOList = mapsIdUserProfileWithDTORepository.findAll();
        assertThat(mapsIdUserProfileWithDTOList).hasSize(databaseSizeBeforeUpdate);
        MapsIdUserProfileWithDTO testMapsIdUserProfileWithDTO = mapsIdUserProfileWithDTOList.get(mapsIdUserProfileWithDTOList.size() - 1);
        assertThat(testMapsIdUserProfileWithDTO.getDateOfBirth()).isEqualTo(UPDATED_DATE_OF_BIRTH);
    }

    @Test
    @Transactional
    public void updateNonExistingMapsIdUserProfileWithDTO() throws Exception {
        int databaseSizeBeforeUpdate = mapsIdUserProfileWithDTORepository.findAll().size();

        // Create the MapsIdUserProfileWithDTO
        MapsIdUserProfileWithDTODTO mapsIdUserProfileWithDTODTO = mapsIdUserProfileWithDTOMapper.toDto(mapsIdUserProfileWithDTO);

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restMapsIdUserProfileWithDTOMockMvc.perform(put("/api/maps-id-user-profile-with-dtos")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(mapsIdUserProfileWithDTODTO)))
            .andExpect(status().isBadRequest());

        // Validate the MapsIdUserProfileWithDTO in the database
        List<MapsIdUserProfileWithDTO> mapsIdUserProfileWithDTOList = mapsIdUserProfileWithDTORepository.findAll();
        assertThat(mapsIdUserProfileWithDTOList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deleteMapsIdUserProfileWithDTO() throws Exception {
        // Initialize the database
        mapsIdUserProfileWithDTORepository.saveAndFlush(mapsIdUserProfileWithDTO);

        int databaseSizeBeforeDelete = mapsIdUserProfileWithDTORepository.findAll().size();

        // Delete the mapsIdUserProfileWithDTO
        restMapsIdUserProfileWithDTOMockMvc.perform(delete("/api/maps-id-user-profile-with-dtos/{id}", mapsIdUserProfileWithDTO.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<MapsIdUserProfileWithDTO> mapsIdUserProfileWithDTOList = mapsIdUserProfileWithDTORepository.findAll();
        assertThat(mapsIdUserProfileWithDTOList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
