package io.github.jhipster.travis.web.rest;

import io.github.jhipster.travis.TravisNg2App;
import io.github.jhipster.travis.domain.Division;
import io.github.jhipster.travis.repository.DivisionRepository;
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

import io.github.jhipster.travis.domain.enumeration.DivisionType;
/**
 * Integration tests for the {@link DivisionResource} REST controller.
 */
@SpringBootTest(classes = TravisNg2App.class)
public class DivisionResourceIT {

    private static final String DEFAULT_NAME = "AAAAAAAAAA";
    private static final String UPDATED_NAME = "BBBBBBBBBB";

    private static final String DEFAULT_SHORT_NAME = "AAAAAAAAAA";
    private static final String UPDATED_SHORT_NAME = "BBBBBBBBBB";

    private static final Long DEFAULT_NUMBER_OF_PEOPLE = 1L;
    private static final Long UPDATED_NUMBER_OF_PEOPLE = 2L;

    private static final DivisionType DEFAULT_DIVISION_TYPE = DivisionType.SCHOOL;
    private static final DivisionType UPDATED_DIVISION_TYPE = DivisionType.CLASS;

    private static final String DEFAULT_COLOR_BACKGROUND = "AAAAAAAAAA";
    private static final String UPDATED_COLOR_BACKGROUND = "BBBBBBBBBB";

    private static final String DEFAULT_COLOR_TEXT = "AAAAAAAAAA";
    private static final String UPDATED_COLOR_TEXT = "BBBBBBBBBB";

    @Autowired
    private DivisionRepository divisionRepository;

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

    private MockMvc restDivisionMockMvc;

    private Division division;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.initMocks(this);
        final DivisionResource divisionResource = new DivisionResource(divisionRepository);
        this.restDivisionMockMvc = MockMvcBuilders.standaloneSetup(divisionResource)
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
    public static Division createEntity(EntityManager em) {
        Division division = new Division()
            .name(DEFAULT_NAME)
            .shortName(DEFAULT_SHORT_NAME)
            .numberOfPeople(DEFAULT_NUMBER_OF_PEOPLE)
            .divisionType(DEFAULT_DIVISION_TYPE)
            .colorBackground(DEFAULT_COLOR_BACKGROUND)
            .colorText(DEFAULT_COLOR_TEXT);
        return division;
    }
    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Division createUpdatedEntity(EntityManager em) {
        Division division = new Division()
            .name(UPDATED_NAME)
            .shortName(UPDATED_SHORT_NAME)
            .numberOfPeople(UPDATED_NUMBER_OF_PEOPLE)
            .divisionType(UPDATED_DIVISION_TYPE)
            .colorBackground(UPDATED_COLOR_BACKGROUND)
            .colorText(UPDATED_COLOR_TEXT);
        return division;
    }

    @BeforeEach
    public void initTest() {
        division = createEntity(em);
    }

    @Test
    @Transactional
    public void createDivision() throws Exception {
        int databaseSizeBeforeCreate = divisionRepository.findAll().size();

        // Create the Division
        restDivisionMockMvc.perform(post("/api/divisions")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(division)))
            .andExpect(status().isCreated());

        // Validate the Division in the database
        List<Division> divisionList = divisionRepository.findAll();
        assertThat(divisionList).hasSize(databaseSizeBeforeCreate + 1);
        Division testDivision = divisionList.get(divisionList.size() - 1);
        assertThat(testDivision.getName()).isEqualTo(DEFAULT_NAME);
        assertThat(testDivision.getShortName()).isEqualTo(DEFAULT_SHORT_NAME);
        assertThat(testDivision.getNumberOfPeople()).isEqualTo(DEFAULT_NUMBER_OF_PEOPLE);
        assertThat(testDivision.getDivisionType()).isEqualTo(DEFAULT_DIVISION_TYPE);
        assertThat(testDivision.getColorBackground()).isEqualTo(DEFAULT_COLOR_BACKGROUND);
        assertThat(testDivision.getColorText()).isEqualTo(DEFAULT_COLOR_TEXT);
    }

    @Test
    @Transactional
    public void createDivisionWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = divisionRepository.findAll().size();

        // Create the Division with an existing ID
        division.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restDivisionMockMvc.perform(post("/api/divisions")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(division)))
            .andExpect(status().isBadRequest());

        // Validate the Division in the database
        List<Division> divisionList = divisionRepository.findAll();
        assertThat(divisionList).hasSize(databaseSizeBeforeCreate);
    }


    @Test
    @Transactional
    public void checkNameIsRequired() throws Exception {
        int databaseSizeBeforeTest = divisionRepository.findAll().size();
        // set the field null
        division.setName(null);

        // Create the Division, which fails.

        restDivisionMockMvc.perform(post("/api/divisions")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(division)))
            .andExpect(status().isBadRequest());

        List<Division> divisionList = divisionRepository.findAll();
        assertThat(divisionList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    public void checkDivisionTypeIsRequired() throws Exception {
        int databaseSizeBeforeTest = divisionRepository.findAll().size();
        // set the field null
        division.setDivisionType(null);

        // Create the Division, which fails.

        restDivisionMockMvc.perform(post("/api/divisions")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(division)))
            .andExpect(status().isBadRequest());

        List<Division> divisionList = divisionRepository.findAll();
        assertThat(divisionList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    public void getAllDivisions() throws Exception {
        // Initialize the database
        divisionRepository.saveAndFlush(division);

        // Get all the divisionList
        restDivisionMockMvc.perform(get("/api/divisions?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(division.getId().intValue())))
            .andExpect(jsonPath("$.[*].name").value(hasItem(DEFAULT_NAME)))
            .andExpect(jsonPath("$.[*].shortName").value(hasItem(DEFAULT_SHORT_NAME)))
            .andExpect(jsonPath("$.[*].numberOfPeople").value(hasItem(DEFAULT_NUMBER_OF_PEOPLE.intValue())))
            .andExpect(jsonPath("$.[*].divisionType").value(hasItem(DEFAULT_DIVISION_TYPE.toString())))
            .andExpect(jsonPath("$.[*].colorBackground").value(hasItem(DEFAULT_COLOR_BACKGROUND)))
            .andExpect(jsonPath("$.[*].colorText").value(hasItem(DEFAULT_COLOR_TEXT)));
    }
    
    @Test
    @Transactional
    public void getDivision() throws Exception {
        // Initialize the database
        divisionRepository.saveAndFlush(division);

        // Get the division
        restDivisionMockMvc.perform(get("/api/divisions/{id}", division.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(division.getId().intValue()))
            .andExpect(jsonPath("$.name").value(DEFAULT_NAME))
            .andExpect(jsonPath("$.shortName").value(DEFAULT_SHORT_NAME))
            .andExpect(jsonPath("$.numberOfPeople").value(DEFAULT_NUMBER_OF_PEOPLE.intValue()))
            .andExpect(jsonPath("$.divisionType").value(DEFAULT_DIVISION_TYPE.toString()))
            .andExpect(jsonPath("$.colorBackground").value(DEFAULT_COLOR_BACKGROUND))
            .andExpect(jsonPath("$.colorText").value(DEFAULT_COLOR_TEXT));
    }

    @Test
    @Transactional
    public void getNonExistingDivision() throws Exception {
        // Get the division
        restDivisionMockMvc.perform(get("/api/divisions/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateDivision() throws Exception {
        // Initialize the database
        divisionRepository.saveAndFlush(division);

        int databaseSizeBeforeUpdate = divisionRepository.findAll().size();

        // Update the division
        Division updatedDivision = divisionRepository.findById(division.getId()).get();
        // Disconnect from session so that the updates on updatedDivision are not directly saved in db
        em.detach(updatedDivision);
        updatedDivision
            .name(UPDATED_NAME)
            .shortName(UPDATED_SHORT_NAME)
            .numberOfPeople(UPDATED_NUMBER_OF_PEOPLE)
            .divisionType(UPDATED_DIVISION_TYPE)
            .colorBackground(UPDATED_COLOR_BACKGROUND)
            .colorText(UPDATED_COLOR_TEXT);

        restDivisionMockMvc.perform(put("/api/divisions")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedDivision)))
            .andExpect(status().isOk());

        // Validate the Division in the database
        List<Division> divisionList = divisionRepository.findAll();
        assertThat(divisionList).hasSize(databaseSizeBeforeUpdate);
        Division testDivision = divisionList.get(divisionList.size() - 1);
        assertThat(testDivision.getName()).isEqualTo(UPDATED_NAME);
        assertThat(testDivision.getShortName()).isEqualTo(UPDATED_SHORT_NAME);
        assertThat(testDivision.getNumberOfPeople()).isEqualTo(UPDATED_NUMBER_OF_PEOPLE);
        assertThat(testDivision.getDivisionType()).isEqualTo(UPDATED_DIVISION_TYPE);
        assertThat(testDivision.getColorBackground()).isEqualTo(UPDATED_COLOR_BACKGROUND);
        assertThat(testDivision.getColorText()).isEqualTo(UPDATED_COLOR_TEXT);
    }

    @Test
    @Transactional
    public void updateNonExistingDivision() throws Exception {
        int databaseSizeBeforeUpdate = divisionRepository.findAll().size();

        // Create the Division

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restDivisionMockMvc.perform(put("/api/divisions")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(division)))
            .andExpect(status().isBadRequest());

        // Validate the Division in the database
        List<Division> divisionList = divisionRepository.findAll();
        assertThat(divisionList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deleteDivision() throws Exception {
        // Initialize the database
        divisionRepository.saveAndFlush(division);

        int databaseSizeBeforeDelete = divisionRepository.findAll().size();

        // Delete the division
        restDivisionMockMvc.perform(delete("/api/divisions/{id}", division.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<Division> divisionList = divisionRepository.findAll();
        assertThat(divisionList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
