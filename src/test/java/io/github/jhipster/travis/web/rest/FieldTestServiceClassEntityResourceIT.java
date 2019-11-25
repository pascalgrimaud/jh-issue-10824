package io.github.jhipster.travis.web.rest;

import io.github.jhipster.travis.TravisNg2App;
import io.github.jhipster.travis.domain.FieldTestServiceClassEntity;
import io.github.jhipster.travis.repository.FieldTestServiceClassEntityRepository;
import io.github.jhipster.travis.service.FieldTestServiceClassEntityService;
import io.github.jhipster.travis.web.rest.errors.ExceptionTranslator;
import io.github.jhipster.travis.service.dto.FieldTestServiceClassEntityCriteria;
import io.github.jhipster.travis.service.FieldTestServiceClassEntityQueryService;

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
import org.springframework.util.Base64Utils;
import org.springframework.validation.Validator;

import javax.persistence.EntityManager;
import java.math.BigDecimal;
import java.time.Duration;
import java.time.LocalDate;
import java.time.Instant;
import java.time.ZonedDateTime;
import java.time.ZoneOffset;
import java.time.ZoneId;
import java.time.temporal.ChronoUnit;
import java.util.List;
import java.util.UUID;

import static io.github.jhipster.travis.web.rest.TestUtil.sameInstant;
import static io.github.jhipster.travis.web.rest.TestUtil.createFormattingConversionService;
import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import io.github.jhipster.travis.domain.enumeration.EnumFieldClass;
import io.github.jhipster.travis.domain.enumeration.EnumRequiredFieldClass;
/**
 * Integration tests for the {@link FieldTestServiceClassEntityResource} REST controller.
 */
@SpringBootTest(classes = TravisNg2App.class)
public class FieldTestServiceClassEntityResourceIT {

    private static final String DEFAULT_STRING_BOB = "AAAAAAAAAA";
    private static final String UPDATED_STRING_BOB = "BBBBBBBBBB";

    private static final String DEFAULT_STRING_REQUIRED_BOB = "AAAAAAAAAA";
    private static final String UPDATED_STRING_REQUIRED_BOB = "BBBBBBBBBB";

    private static final String DEFAULT_STRING_MINLENGTH_BOB = "AAAAAAAAAA";
    private static final String UPDATED_STRING_MINLENGTH_BOB = "BBBBBBBBBB";

    private static final String DEFAULT_STRING_MAXLENGTH_BOB = "AAAAAAAAAA";
    private static final String UPDATED_STRING_MAXLENGTH_BOB = "BBBBBBBBBB";

    private static final String DEFAULT_STRING_PATTERN_BOB = "AAAAAAAAAA";
    private static final String UPDATED_STRING_PATTERN_BOB = "BBBBBBBBBB";

    private static final Integer DEFAULT_INTEGER_BOB = 1;
    private static final Integer UPDATED_INTEGER_BOB = 2;
    private static final Integer SMALLER_INTEGER_BOB = 1 - 1;

    private static final Integer DEFAULT_INTEGER_REQUIRED_BOB = 1;
    private static final Integer UPDATED_INTEGER_REQUIRED_BOB = 2;
    private static final Integer SMALLER_INTEGER_REQUIRED_BOB = 1 - 1;

    private static final Integer DEFAULT_INTEGER_MIN_BOB = 0;
    private static final Integer UPDATED_INTEGER_MIN_BOB = 1;
    private static final Integer SMALLER_INTEGER_MIN_BOB = 0 - 1;

    private static final Integer DEFAULT_INTEGER_MAX_BOB = 100;
    private static final Integer UPDATED_INTEGER_MAX_BOB = 99;
    private static final Integer SMALLER_INTEGER_MAX_BOB = 100 - 1;

    private static final Long DEFAULT_LONG_BOB = 1L;
    private static final Long UPDATED_LONG_BOB = 2L;
    private static final Long SMALLER_LONG_BOB = 1L - 1L;

    private static final Long DEFAULT_LONG_REQUIRED_BOB = 1L;
    private static final Long UPDATED_LONG_REQUIRED_BOB = 2L;
    private static final Long SMALLER_LONG_REQUIRED_BOB = 1L - 1L;

    private static final Long DEFAULT_LONG_MIN_BOB = 0L;
    private static final Long UPDATED_LONG_MIN_BOB = 1L;
    private static final Long SMALLER_LONG_MIN_BOB = 0L - 1L;

    private static final Long DEFAULT_LONG_MAX_BOB = 100L;
    private static final Long UPDATED_LONG_MAX_BOB = 99L;
    private static final Long SMALLER_LONG_MAX_BOB = 100L - 1L;

    private static final Float DEFAULT_FLOAT_BOB = 1F;
    private static final Float UPDATED_FLOAT_BOB = 2F;
    private static final Float SMALLER_FLOAT_BOB = 1F - 1F;

    private static final Float DEFAULT_FLOAT_REQUIRED_BOB = 1F;
    private static final Float UPDATED_FLOAT_REQUIRED_BOB = 2F;
    private static final Float SMALLER_FLOAT_REQUIRED_BOB = 1F - 1F;

    private static final Float DEFAULT_FLOAT_MIN_BOB = 0F;
    private static final Float UPDATED_FLOAT_MIN_BOB = 1F;
    private static final Float SMALLER_FLOAT_MIN_BOB = 0F - 1F;

    private static final Float DEFAULT_FLOAT_MAX_BOB = 100F;
    private static final Float UPDATED_FLOAT_MAX_BOB = 99F;
    private static final Float SMALLER_FLOAT_MAX_BOB = 100F - 1F;

    private static final Double DEFAULT_DOUBLE_REQUIRED_BOB = 1D;
    private static final Double UPDATED_DOUBLE_REQUIRED_BOB = 2D;
    private static final Double SMALLER_DOUBLE_REQUIRED_BOB = 1D - 1D;

    private static final Double DEFAULT_DOUBLE_MIN_BOB = 0D;
    private static final Double UPDATED_DOUBLE_MIN_BOB = 1D;
    private static final Double SMALLER_DOUBLE_MIN_BOB = 0D - 1D;

    private static final Double DEFAULT_DOUBLE_MAX_BOB = 100D;
    private static final Double UPDATED_DOUBLE_MAX_BOB = 99D;
    private static final Double SMALLER_DOUBLE_MAX_BOB = 100D - 1D;

    private static final BigDecimal DEFAULT_BIG_DECIMAL_REQUIRED_BOB = new BigDecimal(1);
    private static final BigDecimal UPDATED_BIG_DECIMAL_REQUIRED_BOB = new BigDecimal(2);
    private static final BigDecimal SMALLER_BIG_DECIMAL_REQUIRED_BOB = new BigDecimal(1 - 1);

    private static final BigDecimal DEFAULT_BIG_DECIMAL_MIN_BOB = new BigDecimal(0);
    private static final BigDecimal UPDATED_BIG_DECIMAL_MIN_BOB = new BigDecimal(1);
    private static final BigDecimal SMALLER_BIG_DECIMAL_MIN_BOB = new BigDecimal(0 - 1);

    private static final BigDecimal DEFAULT_BIG_DECIMAL_MAX_BOB = new BigDecimal(100);
    private static final BigDecimal UPDATED_BIG_DECIMAL_MAX_BOB = new BigDecimal(99);
    private static final BigDecimal SMALLER_BIG_DECIMAL_MAX_BOB = new BigDecimal(100 - 1);

    private static final LocalDate DEFAULT_LOCAL_DATE_BOB = LocalDate.ofEpochDay(0L);
    private static final LocalDate UPDATED_LOCAL_DATE_BOB = LocalDate.now(ZoneId.systemDefault());
    private static final LocalDate SMALLER_LOCAL_DATE_BOB = LocalDate.ofEpochDay(-1L);

    private static final LocalDate DEFAULT_LOCAL_DATE_REQUIRED_BOB = LocalDate.ofEpochDay(0L);
    private static final LocalDate UPDATED_LOCAL_DATE_REQUIRED_BOB = LocalDate.now(ZoneId.systemDefault());
    private static final LocalDate SMALLER_LOCAL_DATE_REQUIRED_BOB = LocalDate.ofEpochDay(-1L);

    private static final Instant DEFAULT_INSTANT_BOB = Instant.ofEpochMilli(0L);
    private static final Instant UPDATED_INSTANT_BOB = Instant.now().truncatedTo(ChronoUnit.MILLIS);

    private static final Instant DEFAULT_INSTANTE_REQUIRED_BOB = Instant.ofEpochMilli(0L);
    private static final Instant UPDATED_INSTANTE_REQUIRED_BOB = Instant.now().truncatedTo(ChronoUnit.MILLIS);

    private static final ZonedDateTime DEFAULT_ZONED_DATE_TIME_BOB = ZonedDateTime.ofInstant(Instant.ofEpochMilli(0L), ZoneOffset.UTC);
    private static final ZonedDateTime UPDATED_ZONED_DATE_TIME_BOB = ZonedDateTime.now(ZoneId.systemDefault()).withNano(0);
    private static final ZonedDateTime SMALLER_ZONED_DATE_TIME_BOB = ZonedDateTime.ofInstant(Instant.ofEpochMilli(-1L), ZoneOffset.UTC);

    private static final ZonedDateTime DEFAULT_ZONED_DATE_TIME_REQUIRED_BOB = ZonedDateTime.ofInstant(Instant.ofEpochMilli(0L), ZoneOffset.UTC);
    private static final ZonedDateTime UPDATED_ZONED_DATE_TIME_REQUIRED_BOB = ZonedDateTime.now(ZoneId.systemDefault()).withNano(0);
    private static final ZonedDateTime SMALLER_ZONED_DATE_TIME_REQUIRED_BOB = ZonedDateTime.ofInstant(Instant.ofEpochMilli(-1L), ZoneOffset.UTC);

    private static final Duration DEFAULT_DURATION_BOB = Duration.ofHours(6);
    private static final Duration UPDATED_DURATION_BOB = Duration.ofHours(12);
    private static final Duration SMALLER_DURATION_BOB = Duration.ofHours(5);

    private static final Duration DEFAULT_DURATION_REQUIRED_BOB = Duration.ofHours(6);
    private static final Duration UPDATED_DURATION_REQUIRED_BOB = Duration.ofHours(12);
    private static final Duration SMALLER_DURATION_REQUIRED_BOB = Duration.ofHours(5);

    private static final Boolean DEFAULT_BOOLEAN_BOB = false;
    private static final Boolean UPDATED_BOOLEAN_BOB = true;

    private static final Boolean DEFAULT_BOOLEAN_REQUIRED_BOB = false;
    private static final Boolean UPDATED_BOOLEAN_REQUIRED_BOB = true;

    private static final EnumFieldClass DEFAULT_ENUM_BOB = EnumFieldClass.ENUM_VALUE_1;
    private static final EnumFieldClass UPDATED_ENUM_BOB = EnumFieldClass.ENUM_VALUE_2;

    private static final EnumRequiredFieldClass DEFAULT_ENUM_REQUIRED_BOB = EnumRequiredFieldClass.ENUM_VALUE_1;
    private static final EnumRequiredFieldClass UPDATED_ENUM_REQUIRED_BOB = EnumRequiredFieldClass.ENUM_VALUE_2;

    private static final UUID DEFAULT_UUID_BOB = UUID.randomUUID();
    private static final UUID UPDATED_UUID_BOB = UUID.randomUUID();

    private static final UUID DEFAULT_UUID_REQUIRED_BOB = UUID.randomUUID();
    private static final UUID UPDATED_UUID_REQUIRED_BOB = UUID.randomUUID();

    private static final byte[] DEFAULT_BYTE_IMAGE_BOB = TestUtil.createByteArray(1, "0");
    private static final byte[] UPDATED_BYTE_IMAGE_BOB = TestUtil.createByteArray(1, "1");
    private static final String DEFAULT_BYTE_IMAGE_BOB_CONTENT_TYPE = "image/jpg";
    private static final String UPDATED_BYTE_IMAGE_BOB_CONTENT_TYPE = "image/png";

    private static final byte[] DEFAULT_BYTE_IMAGE_REQUIRED_BOB = TestUtil.createByteArray(1, "0");
    private static final byte[] UPDATED_BYTE_IMAGE_REQUIRED_BOB = TestUtil.createByteArray(1, "1");
    private static final String DEFAULT_BYTE_IMAGE_REQUIRED_BOB_CONTENT_TYPE = "image/jpg";
    private static final String UPDATED_BYTE_IMAGE_REQUIRED_BOB_CONTENT_TYPE = "image/png";

    private static final byte[] DEFAULT_BYTE_IMAGE_MINBYTES_BOB = TestUtil.createByteArray(1, "0");
    private static final byte[] UPDATED_BYTE_IMAGE_MINBYTES_BOB = TestUtil.createByteArray(1, "1");
    private static final String DEFAULT_BYTE_IMAGE_MINBYTES_BOB_CONTENT_TYPE = "image/jpg";
    private static final String UPDATED_BYTE_IMAGE_MINBYTES_BOB_CONTENT_TYPE = "image/png";

    private static final byte[] DEFAULT_BYTE_IMAGE_MAXBYTES_BOB = TestUtil.createByteArray(1, "0");
    private static final byte[] UPDATED_BYTE_IMAGE_MAXBYTES_BOB = TestUtil.createByteArray(1, "1");
    private static final String DEFAULT_BYTE_IMAGE_MAXBYTES_BOB_CONTENT_TYPE = "image/jpg";
    private static final String UPDATED_BYTE_IMAGE_MAXBYTES_BOB_CONTENT_TYPE = "image/png";

    private static final byte[] DEFAULT_BYTE_ANY_BOB = TestUtil.createByteArray(1, "0");
    private static final byte[] UPDATED_BYTE_ANY_BOB = TestUtil.createByteArray(1, "1");
    private static final String DEFAULT_BYTE_ANY_BOB_CONTENT_TYPE = "image/jpg";
    private static final String UPDATED_BYTE_ANY_BOB_CONTENT_TYPE = "image/png";

    private static final byte[] DEFAULT_BYTE_ANY_REQUIRED_BOB = TestUtil.createByteArray(1, "0");
    private static final byte[] UPDATED_BYTE_ANY_REQUIRED_BOB = TestUtil.createByteArray(1, "1");
    private static final String DEFAULT_BYTE_ANY_REQUIRED_BOB_CONTENT_TYPE = "image/jpg";
    private static final String UPDATED_BYTE_ANY_REQUIRED_BOB_CONTENT_TYPE = "image/png";

    private static final byte[] DEFAULT_BYTE_ANY_MINBYTES_BOB = TestUtil.createByteArray(1, "0");
    private static final byte[] UPDATED_BYTE_ANY_MINBYTES_BOB = TestUtil.createByteArray(1, "1");
    private static final String DEFAULT_BYTE_ANY_MINBYTES_BOB_CONTENT_TYPE = "image/jpg";
    private static final String UPDATED_BYTE_ANY_MINBYTES_BOB_CONTENT_TYPE = "image/png";

    private static final byte[] DEFAULT_BYTE_ANY_MAXBYTES_BOB = TestUtil.createByteArray(1, "0");
    private static final byte[] UPDATED_BYTE_ANY_MAXBYTES_BOB = TestUtil.createByteArray(1, "1");
    private static final String DEFAULT_BYTE_ANY_MAXBYTES_BOB_CONTENT_TYPE = "image/jpg";
    private static final String UPDATED_BYTE_ANY_MAXBYTES_BOB_CONTENT_TYPE = "image/png";

    private static final String DEFAULT_BYTE_TEXT_BOB = "AAAAAAAAAA";
    private static final String UPDATED_BYTE_TEXT_BOB = "BBBBBBBBBB";

    private static final String DEFAULT_BYTE_TEXT_REQUIRED_BOB = "AAAAAAAAAA";
    private static final String UPDATED_BYTE_TEXT_REQUIRED_BOB = "BBBBBBBBBB";

    @Autowired
    private FieldTestServiceClassEntityRepository fieldTestServiceClassEntityRepository;

    @Autowired
    private FieldTestServiceClassEntityService fieldTestServiceClassEntityService;

    @Autowired
    private FieldTestServiceClassEntityQueryService fieldTestServiceClassEntityQueryService;

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

    private MockMvc restFieldTestServiceClassEntityMockMvc;

    private FieldTestServiceClassEntity fieldTestServiceClassEntity;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.initMocks(this);
        final FieldTestServiceClassEntityResource fieldTestServiceClassEntityResource = new FieldTestServiceClassEntityResource(fieldTestServiceClassEntityService, fieldTestServiceClassEntityQueryService);
        this.restFieldTestServiceClassEntityMockMvc = MockMvcBuilders.standaloneSetup(fieldTestServiceClassEntityResource)
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
    public static FieldTestServiceClassEntity createEntity(EntityManager em) {
        FieldTestServiceClassEntity fieldTestServiceClassEntity = new FieldTestServiceClassEntity()
            .stringBob(DEFAULT_STRING_BOB)
            .stringRequiredBob(DEFAULT_STRING_REQUIRED_BOB)
            .stringMinlengthBob(DEFAULT_STRING_MINLENGTH_BOB)
            .stringMaxlengthBob(DEFAULT_STRING_MAXLENGTH_BOB)
            .stringPatternBob(DEFAULT_STRING_PATTERN_BOB)
            .integerBob(DEFAULT_INTEGER_BOB)
            .integerRequiredBob(DEFAULT_INTEGER_REQUIRED_BOB)
            .integerMinBob(DEFAULT_INTEGER_MIN_BOB)
            .integerMaxBob(DEFAULT_INTEGER_MAX_BOB)
            .longBob(DEFAULT_LONG_BOB)
            .longRequiredBob(DEFAULT_LONG_REQUIRED_BOB)
            .longMinBob(DEFAULT_LONG_MIN_BOB)
            .longMaxBob(DEFAULT_LONG_MAX_BOB)
            .floatBob(DEFAULT_FLOAT_BOB)
            .floatRequiredBob(DEFAULT_FLOAT_REQUIRED_BOB)
            .floatMinBob(DEFAULT_FLOAT_MIN_BOB)
            .floatMaxBob(DEFAULT_FLOAT_MAX_BOB)
            .doubleRequiredBob(DEFAULT_DOUBLE_REQUIRED_BOB)
            .doubleMinBob(DEFAULT_DOUBLE_MIN_BOB)
            .doubleMaxBob(DEFAULT_DOUBLE_MAX_BOB)
            .bigDecimalRequiredBob(DEFAULT_BIG_DECIMAL_REQUIRED_BOB)
            .bigDecimalMinBob(DEFAULT_BIG_DECIMAL_MIN_BOB)
            .bigDecimalMaxBob(DEFAULT_BIG_DECIMAL_MAX_BOB)
            .localDateBob(DEFAULT_LOCAL_DATE_BOB)
            .localDateRequiredBob(DEFAULT_LOCAL_DATE_REQUIRED_BOB)
            .instantBob(DEFAULT_INSTANT_BOB)
            .instanteRequiredBob(DEFAULT_INSTANTE_REQUIRED_BOB)
            .zonedDateTimeBob(DEFAULT_ZONED_DATE_TIME_BOB)
            .zonedDateTimeRequiredBob(DEFAULT_ZONED_DATE_TIME_REQUIRED_BOB)
            .durationBob(DEFAULT_DURATION_BOB)
            .durationRequiredBob(DEFAULT_DURATION_REQUIRED_BOB)
            .booleanBob(DEFAULT_BOOLEAN_BOB)
            .booleanRequiredBob(DEFAULT_BOOLEAN_REQUIRED_BOB)
            .enumBob(DEFAULT_ENUM_BOB)
            .enumRequiredBob(DEFAULT_ENUM_REQUIRED_BOB)
            .uuidBob(DEFAULT_UUID_BOB)
            .uuidRequiredBob(DEFAULT_UUID_REQUIRED_BOB)
            .byteImageBob(DEFAULT_BYTE_IMAGE_BOB)
            .byteImageBobContentType(DEFAULT_BYTE_IMAGE_BOB_CONTENT_TYPE)
            .byteImageRequiredBob(DEFAULT_BYTE_IMAGE_REQUIRED_BOB)
            .byteImageRequiredBobContentType(DEFAULT_BYTE_IMAGE_REQUIRED_BOB_CONTENT_TYPE)
            .byteImageMinbytesBob(DEFAULT_BYTE_IMAGE_MINBYTES_BOB)
            .byteImageMinbytesBobContentType(DEFAULT_BYTE_IMAGE_MINBYTES_BOB_CONTENT_TYPE)
            .byteImageMaxbytesBob(DEFAULT_BYTE_IMAGE_MAXBYTES_BOB)
            .byteImageMaxbytesBobContentType(DEFAULT_BYTE_IMAGE_MAXBYTES_BOB_CONTENT_TYPE)
            .byteAnyBob(DEFAULT_BYTE_ANY_BOB)
            .byteAnyBobContentType(DEFAULT_BYTE_ANY_BOB_CONTENT_TYPE)
            .byteAnyRequiredBob(DEFAULT_BYTE_ANY_REQUIRED_BOB)
            .byteAnyRequiredBobContentType(DEFAULT_BYTE_ANY_REQUIRED_BOB_CONTENT_TYPE)
            .byteAnyMinbytesBob(DEFAULT_BYTE_ANY_MINBYTES_BOB)
            .byteAnyMinbytesBobContentType(DEFAULT_BYTE_ANY_MINBYTES_BOB_CONTENT_TYPE)
            .byteAnyMaxbytesBob(DEFAULT_BYTE_ANY_MAXBYTES_BOB)
            .byteAnyMaxbytesBobContentType(DEFAULT_BYTE_ANY_MAXBYTES_BOB_CONTENT_TYPE)
            .byteTextBob(DEFAULT_BYTE_TEXT_BOB)
            .byteTextRequiredBob(DEFAULT_BYTE_TEXT_REQUIRED_BOB);
        return fieldTestServiceClassEntity;
    }
    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static FieldTestServiceClassEntity createUpdatedEntity(EntityManager em) {
        FieldTestServiceClassEntity fieldTestServiceClassEntity = new FieldTestServiceClassEntity()
            .stringBob(UPDATED_STRING_BOB)
            .stringRequiredBob(UPDATED_STRING_REQUIRED_BOB)
            .stringMinlengthBob(UPDATED_STRING_MINLENGTH_BOB)
            .stringMaxlengthBob(UPDATED_STRING_MAXLENGTH_BOB)
            .stringPatternBob(UPDATED_STRING_PATTERN_BOB)
            .integerBob(UPDATED_INTEGER_BOB)
            .integerRequiredBob(UPDATED_INTEGER_REQUIRED_BOB)
            .integerMinBob(UPDATED_INTEGER_MIN_BOB)
            .integerMaxBob(UPDATED_INTEGER_MAX_BOB)
            .longBob(UPDATED_LONG_BOB)
            .longRequiredBob(UPDATED_LONG_REQUIRED_BOB)
            .longMinBob(UPDATED_LONG_MIN_BOB)
            .longMaxBob(UPDATED_LONG_MAX_BOB)
            .floatBob(UPDATED_FLOAT_BOB)
            .floatRequiredBob(UPDATED_FLOAT_REQUIRED_BOB)
            .floatMinBob(UPDATED_FLOAT_MIN_BOB)
            .floatMaxBob(UPDATED_FLOAT_MAX_BOB)
            .doubleRequiredBob(UPDATED_DOUBLE_REQUIRED_BOB)
            .doubleMinBob(UPDATED_DOUBLE_MIN_BOB)
            .doubleMaxBob(UPDATED_DOUBLE_MAX_BOB)
            .bigDecimalRequiredBob(UPDATED_BIG_DECIMAL_REQUIRED_BOB)
            .bigDecimalMinBob(UPDATED_BIG_DECIMAL_MIN_BOB)
            .bigDecimalMaxBob(UPDATED_BIG_DECIMAL_MAX_BOB)
            .localDateBob(UPDATED_LOCAL_DATE_BOB)
            .localDateRequiredBob(UPDATED_LOCAL_DATE_REQUIRED_BOB)
            .instantBob(UPDATED_INSTANT_BOB)
            .instanteRequiredBob(UPDATED_INSTANTE_REQUIRED_BOB)
            .zonedDateTimeBob(UPDATED_ZONED_DATE_TIME_BOB)
            .zonedDateTimeRequiredBob(UPDATED_ZONED_DATE_TIME_REQUIRED_BOB)
            .durationBob(UPDATED_DURATION_BOB)
            .durationRequiredBob(UPDATED_DURATION_REQUIRED_BOB)
            .booleanBob(UPDATED_BOOLEAN_BOB)
            .booleanRequiredBob(UPDATED_BOOLEAN_REQUIRED_BOB)
            .enumBob(UPDATED_ENUM_BOB)
            .enumRequiredBob(UPDATED_ENUM_REQUIRED_BOB)
            .uuidBob(UPDATED_UUID_BOB)
            .uuidRequiredBob(UPDATED_UUID_REQUIRED_BOB)
            .byteImageBob(UPDATED_BYTE_IMAGE_BOB)
            .byteImageBobContentType(UPDATED_BYTE_IMAGE_BOB_CONTENT_TYPE)
            .byteImageRequiredBob(UPDATED_BYTE_IMAGE_REQUIRED_BOB)
            .byteImageRequiredBobContentType(UPDATED_BYTE_IMAGE_REQUIRED_BOB_CONTENT_TYPE)
            .byteImageMinbytesBob(UPDATED_BYTE_IMAGE_MINBYTES_BOB)
            .byteImageMinbytesBobContentType(UPDATED_BYTE_IMAGE_MINBYTES_BOB_CONTENT_TYPE)
            .byteImageMaxbytesBob(UPDATED_BYTE_IMAGE_MAXBYTES_BOB)
            .byteImageMaxbytesBobContentType(UPDATED_BYTE_IMAGE_MAXBYTES_BOB_CONTENT_TYPE)
            .byteAnyBob(UPDATED_BYTE_ANY_BOB)
            .byteAnyBobContentType(UPDATED_BYTE_ANY_BOB_CONTENT_TYPE)
            .byteAnyRequiredBob(UPDATED_BYTE_ANY_REQUIRED_BOB)
            .byteAnyRequiredBobContentType(UPDATED_BYTE_ANY_REQUIRED_BOB_CONTENT_TYPE)
            .byteAnyMinbytesBob(UPDATED_BYTE_ANY_MINBYTES_BOB)
            .byteAnyMinbytesBobContentType(UPDATED_BYTE_ANY_MINBYTES_BOB_CONTENT_TYPE)
            .byteAnyMaxbytesBob(UPDATED_BYTE_ANY_MAXBYTES_BOB)
            .byteAnyMaxbytesBobContentType(UPDATED_BYTE_ANY_MAXBYTES_BOB_CONTENT_TYPE)
            .byteTextBob(UPDATED_BYTE_TEXT_BOB)
            .byteTextRequiredBob(UPDATED_BYTE_TEXT_REQUIRED_BOB);
        return fieldTestServiceClassEntity;
    }

    @BeforeEach
    public void initTest() {
        fieldTestServiceClassEntity = createEntity(em);
    }

    @Test
    @Transactional
    public void createFieldTestServiceClassEntity() throws Exception {
        int databaseSizeBeforeCreate = fieldTestServiceClassEntityRepository.findAll().size();

        // Create the FieldTestServiceClassEntity
        restFieldTestServiceClassEntityMockMvc.perform(post("/api/field-test-service-class-entities")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(fieldTestServiceClassEntity)))
            .andExpect(status().isCreated());

        // Validate the FieldTestServiceClassEntity in the database
        List<FieldTestServiceClassEntity> fieldTestServiceClassEntityList = fieldTestServiceClassEntityRepository.findAll();
        assertThat(fieldTestServiceClassEntityList).hasSize(databaseSizeBeforeCreate + 1);
        FieldTestServiceClassEntity testFieldTestServiceClassEntity = fieldTestServiceClassEntityList.get(fieldTestServiceClassEntityList.size() - 1);
        assertThat(testFieldTestServiceClassEntity.getStringBob()).isEqualTo(DEFAULT_STRING_BOB);
        assertThat(testFieldTestServiceClassEntity.getStringRequiredBob()).isEqualTo(DEFAULT_STRING_REQUIRED_BOB);
        assertThat(testFieldTestServiceClassEntity.getStringMinlengthBob()).isEqualTo(DEFAULT_STRING_MINLENGTH_BOB);
        assertThat(testFieldTestServiceClassEntity.getStringMaxlengthBob()).isEqualTo(DEFAULT_STRING_MAXLENGTH_BOB);
        assertThat(testFieldTestServiceClassEntity.getStringPatternBob()).isEqualTo(DEFAULT_STRING_PATTERN_BOB);
        assertThat(testFieldTestServiceClassEntity.getIntegerBob()).isEqualTo(DEFAULT_INTEGER_BOB);
        assertThat(testFieldTestServiceClassEntity.getIntegerRequiredBob()).isEqualTo(DEFAULT_INTEGER_REQUIRED_BOB);
        assertThat(testFieldTestServiceClassEntity.getIntegerMinBob()).isEqualTo(DEFAULT_INTEGER_MIN_BOB);
        assertThat(testFieldTestServiceClassEntity.getIntegerMaxBob()).isEqualTo(DEFAULT_INTEGER_MAX_BOB);
        assertThat(testFieldTestServiceClassEntity.getLongBob()).isEqualTo(DEFAULT_LONG_BOB);
        assertThat(testFieldTestServiceClassEntity.getLongRequiredBob()).isEqualTo(DEFAULT_LONG_REQUIRED_BOB);
        assertThat(testFieldTestServiceClassEntity.getLongMinBob()).isEqualTo(DEFAULT_LONG_MIN_BOB);
        assertThat(testFieldTestServiceClassEntity.getLongMaxBob()).isEqualTo(DEFAULT_LONG_MAX_BOB);
        assertThat(testFieldTestServiceClassEntity.getFloatBob()).isEqualTo(DEFAULT_FLOAT_BOB);
        assertThat(testFieldTestServiceClassEntity.getFloatRequiredBob()).isEqualTo(DEFAULT_FLOAT_REQUIRED_BOB);
        assertThat(testFieldTestServiceClassEntity.getFloatMinBob()).isEqualTo(DEFAULT_FLOAT_MIN_BOB);
        assertThat(testFieldTestServiceClassEntity.getFloatMaxBob()).isEqualTo(DEFAULT_FLOAT_MAX_BOB);
        assertThat(testFieldTestServiceClassEntity.getDoubleRequiredBob()).isEqualTo(DEFAULT_DOUBLE_REQUIRED_BOB);
        assertThat(testFieldTestServiceClassEntity.getDoubleMinBob()).isEqualTo(DEFAULT_DOUBLE_MIN_BOB);
        assertThat(testFieldTestServiceClassEntity.getDoubleMaxBob()).isEqualTo(DEFAULT_DOUBLE_MAX_BOB);
        assertThat(testFieldTestServiceClassEntity.getBigDecimalRequiredBob()).isEqualTo(DEFAULT_BIG_DECIMAL_REQUIRED_BOB);
        assertThat(testFieldTestServiceClassEntity.getBigDecimalMinBob()).isEqualTo(DEFAULT_BIG_DECIMAL_MIN_BOB);
        assertThat(testFieldTestServiceClassEntity.getBigDecimalMaxBob()).isEqualTo(DEFAULT_BIG_DECIMAL_MAX_BOB);
        assertThat(testFieldTestServiceClassEntity.getLocalDateBob()).isEqualTo(DEFAULT_LOCAL_DATE_BOB);
        assertThat(testFieldTestServiceClassEntity.getLocalDateRequiredBob()).isEqualTo(DEFAULT_LOCAL_DATE_REQUIRED_BOB);
        assertThat(testFieldTestServiceClassEntity.getInstantBob()).isEqualTo(DEFAULT_INSTANT_BOB);
        assertThat(testFieldTestServiceClassEntity.getInstanteRequiredBob()).isEqualTo(DEFAULT_INSTANTE_REQUIRED_BOB);
        assertThat(testFieldTestServiceClassEntity.getZonedDateTimeBob()).isEqualTo(DEFAULT_ZONED_DATE_TIME_BOB);
        assertThat(testFieldTestServiceClassEntity.getZonedDateTimeRequiredBob()).isEqualTo(DEFAULT_ZONED_DATE_TIME_REQUIRED_BOB);
        assertThat(testFieldTestServiceClassEntity.getDurationBob()).isEqualTo(DEFAULT_DURATION_BOB);
        assertThat(testFieldTestServiceClassEntity.getDurationRequiredBob()).isEqualTo(DEFAULT_DURATION_REQUIRED_BOB);
        assertThat(testFieldTestServiceClassEntity.isBooleanBob()).isEqualTo(DEFAULT_BOOLEAN_BOB);
        assertThat(testFieldTestServiceClassEntity.isBooleanRequiredBob()).isEqualTo(DEFAULT_BOOLEAN_REQUIRED_BOB);
        assertThat(testFieldTestServiceClassEntity.getEnumBob()).isEqualTo(DEFAULT_ENUM_BOB);
        assertThat(testFieldTestServiceClassEntity.getEnumRequiredBob()).isEqualTo(DEFAULT_ENUM_REQUIRED_BOB);
        assertThat(testFieldTestServiceClassEntity.getUuidBob()).isEqualTo(DEFAULT_UUID_BOB);
        assertThat(testFieldTestServiceClassEntity.getUuidRequiredBob()).isEqualTo(DEFAULT_UUID_REQUIRED_BOB);
        assertThat(testFieldTestServiceClassEntity.getByteImageBob()).isEqualTo(DEFAULT_BYTE_IMAGE_BOB);
        assertThat(testFieldTestServiceClassEntity.getByteImageBobContentType()).isEqualTo(DEFAULT_BYTE_IMAGE_BOB_CONTENT_TYPE);
        assertThat(testFieldTestServiceClassEntity.getByteImageRequiredBob()).isEqualTo(DEFAULT_BYTE_IMAGE_REQUIRED_BOB);
        assertThat(testFieldTestServiceClassEntity.getByteImageRequiredBobContentType()).isEqualTo(DEFAULT_BYTE_IMAGE_REQUIRED_BOB_CONTENT_TYPE);
        assertThat(testFieldTestServiceClassEntity.getByteImageMinbytesBob()).isEqualTo(DEFAULT_BYTE_IMAGE_MINBYTES_BOB);
        assertThat(testFieldTestServiceClassEntity.getByteImageMinbytesBobContentType()).isEqualTo(DEFAULT_BYTE_IMAGE_MINBYTES_BOB_CONTENT_TYPE);
        assertThat(testFieldTestServiceClassEntity.getByteImageMaxbytesBob()).isEqualTo(DEFAULT_BYTE_IMAGE_MAXBYTES_BOB);
        assertThat(testFieldTestServiceClassEntity.getByteImageMaxbytesBobContentType()).isEqualTo(DEFAULT_BYTE_IMAGE_MAXBYTES_BOB_CONTENT_TYPE);
        assertThat(testFieldTestServiceClassEntity.getByteAnyBob()).isEqualTo(DEFAULT_BYTE_ANY_BOB);
        assertThat(testFieldTestServiceClassEntity.getByteAnyBobContentType()).isEqualTo(DEFAULT_BYTE_ANY_BOB_CONTENT_TYPE);
        assertThat(testFieldTestServiceClassEntity.getByteAnyRequiredBob()).isEqualTo(DEFAULT_BYTE_ANY_REQUIRED_BOB);
        assertThat(testFieldTestServiceClassEntity.getByteAnyRequiredBobContentType()).isEqualTo(DEFAULT_BYTE_ANY_REQUIRED_BOB_CONTENT_TYPE);
        assertThat(testFieldTestServiceClassEntity.getByteAnyMinbytesBob()).isEqualTo(DEFAULT_BYTE_ANY_MINBYTES_BOB);
        assertThat(testFieldTestServiceClassEntity.getByteAnyMinbytesBobContentType()).isEqualTo(DEFAULT_BYTE_ANY_MINBYTES_BOB_CONTENT_TYPE);
        assertThat(testFieldTestServiceClassEntity.getByteAnyMaxbytesBob()).isEqualTo(DEFAULT_BYTE_ANY_MAXBYTES_BOB);
        assertThat(testFieldTestServiceClassEntity.getByteAnyMaxbytesBobContentType()).isEqualTo(DEFAULT_BYTE_ANY_MAXBYTES_BOB_CONTENT_TYPE);
        assertThat(testFieldTestServiceClassEntity.getByteTextBob()).isEqualTo(DEFAULT_BYTE_TEXT_BOB);
        assertThat(testFieldTestServiceClassEntity.getByteTextRequiredBob()).isEqualTo(DEFAULT_BYTE_TEXT_REQUIRED_BOB);
    }

    @Test
    @Transactional
    public void createFieldTestServiceClassEntityWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = fieldTestServiceClassEntityRepository.findAll().size();

        // Create the FieldTestServiceClassEntity with an existing ID
        fieldTestServiceClassEntity.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restFieldTestServiceClassEntityMockMvc.perform(post("/api/field-test-service-class-entities")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(fieldTestServiceClassEntity)))
            .andExpect(status().isBadRequest());

        // Validate the FieldTestServiceClassEntity in the database
        List<FieldTestServiceClassEntity> fieldTestServiceClassEntityList = fieldTestServiceClassEntityRepository.findAll();
        assertThat(fieldTestServiceClassEntityList).hasSize(databaseSizeBeforeCreate);
    }


    @Test
    @Transactional
    public void checkStringRequiredBobIsRequired() throws Exception {
        int databaseSizeBeforeTest = fieldTestServiceClassEntityRepository.findAll().size();
        // set the field null
        fieldTestServiceClassEntity.setStringRequiredBob(null);

        // Create the FieldTestServiceClassEntity, which fails.

        restFieldTestServiceClassEntityMockMvc.perform(post("/api/field-test-service-class-entities")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(fieldTestServiceClassEntity)))
            .andExpect(status().isBadRequest());

        List<FieldTestServiceClassEntity> fieldTestServiceClassEntityList = fieldTestServiceClassEntityRepository.findAll();
        assertThat(fieldTestServiceClassEntityList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    public void checkIntegerRequiredBobIsRequired() throws Exception {
        int databaseSizeBeforeTest = fieldTestServiceClassEntityRepository.findAll().size();
        // set the field null
        fieldTestServiceClassEntity.setIntegerRequiredBob(null);

        // Create the FieldTestServiceClassEntity, which fails.

        restFieldTestServiceClassEntityMockMvc.perform(post("/api/field-test-service-class-entities")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(fieldTestServiceClassEntity)))
            .andExpect(status().isBadRequest());

        List<FieldTestServiceClassEntity> fieldTestServiceClassEntityList = fieldTestServiceClassEntityRepository.findAll();
        assertThat(fieldTestServiceClassEntityList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    public void checkLongRequiredBobIsRequired() throws Exception {
        int databaseSizeBeforeTest = fieldTestServiceClassEntityRepository.findAll().size();
        // set the field null
        fieldTestServiceClassEntity.setLongRequiredBob(null);

        // Create the FieldTestServiceClassEntity, which fails.

        restFieldTestServiceClassEntityMockMvc.perform(post("/api/field-test-service-class-entities")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(fieldTestServiceClassEntity)))
            .andExpect(status().isBadRequest());

        List<FieldTestServiceClassEntity> fieldTestServiceClassEntityList = fieldTestServiceClassEntityRepository.findAll();
        assertThat(fieldTestServiceClassEntityList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    public void checkFloatRequiredBobIsRequired() throws Exception {
        int databaseSizeBeforeTest = fieldTestServiceClassEntityRepository.findAll().size();
        // set the field null
        fieldTestServiceClassEntity.setFloatRequiredBob(null);

        // Create the FieldTestServiceClassEntity, which fails.

        restFieldTestServiceClassEntityMockMvc.perform(post("/api/field-test-service-class-entities")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(fieldTestServiceClassEntity)))
            .andExpect(status().isBadRequest());

        List<FieldTestServiceClassEntity> fieldTestServiceClassEntityList = fieldTestServiceClassEntityRepository.findAll();
        assertThat(fieldTestServiceClassEntityList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    public void checkDoubleRequiredBobIsRequired() throws Exception {
        int databaseSizeBeforeTest = fieldTestServiceClassEntityRepository.findAll().size();
        // set the field null
        fieldTestServiceClassEntity.setDoubleRequiredBob(null);

        // Create the FieldTestServiceClassEntity, which fails.

        restFieldTestServiceClassEntityMockMvc.perform(post("/api/field-test-service-class-entities")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(fieldTestServiceClassEntity)))
            .andExpect(status().isBadRequest());

        List<FieldTestServiceClassEntity> fieldTestServiceClassEntityList = fieldTestServiceClassEntityRepository.findAll();
        assertThat(fieldTestServiceClassEntityList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    public void checkBigDecimalRequiredBobIsRequired() throws Exception {
        int databaseSizeBeforeTest = fieldTestServiceClassEntityRepository.findAll().size();
        // set the field null
        fieldTestServiceClassEntity.setBigDecimalRequiredBob(null);

        // Create the FieldTestServiceClassEntity, which fails.

        restFieldTestServiceClassEntityMockMvc.perform(post("/api/field-test-service-class-entities")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(fieldTestServiceClassEntity)))
            .andExpect(status().isBadRequest());

        List<FieldTestServiceClassEntity> fieldTestServiceClassEntityList = fieldTestServiceClassEntityRepository.findAll();
        assertThat(fieldTestServiceClassEntityList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    public void checkLocalDateRequiredBobIsRequired() throws Exception {
        int databaseSizeBeforeTest = fieldTestServiceClassEntityRepository.findAll().size();
        // set the field null
        fieldTestServiceClassEntity.setLocalDateRequiredBob(null);

        // Create the FieldTestServiceClassEntity, which fails.

        restFieldTestServiceClassEntityMockMvc.perform(post("/api/field-test-service-class-entities")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(fieldTestServiceClassEntity)))
            .andExpect(status().isBadRequest());

        List<FieldTestServiceClassEntity> fieldTestServiceClassEntityList = fieldTestServiceClassEntityRepository.findAll();
        assertThat(fieldTestServiceClassEntityList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    public void checkInstanteRequiredBobIsRequired() throws Exception {
        int databaseSizeBeforeTest = fieldTestServiceClassEntityRepository.findAll().size();
        // set the field null
        fieldTestServiceClassEntity.setInstanteRequiredBob(null);

        // Create the FieldTestServiceClassEntity, which fails.

        restFieldTestServiceClassEntityMockMvc.perform(post("/api/field-test-service-class-entities")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(fieldTestServiceClassEntity)))
            .andExpect(status().isBadRequest());

        List<FieldTestServiceClassEntity> fieldTestServiceClassEntityList = fieldTestServiceClassEntityRepository.findAll();
        assertThat(fieldTestServiceClassEntityList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    public void checkZonedDateTimeRequiredBobIsRequired() throws Exception {
        int databaseSizeBeforeTest = fieldTestServiceClassEntityRepository.findAll().size();
        // set the field null
        fieldTestServiceClassEntity.setZonedDateTimeRequiredBob(null);

        // Create the FieldTestServiceClassEntity, which fails.

        restFieldTestServiceClassEntityMockMvc.perform(post("/api/field-test-service-class-entities")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(fieldTestServiceClassEntity)))
            .andExpect(status().isBadRequest());

        List<FieldTestServiceClassEntity> fieldTestServiceClassEntityList = fieldTestServiceClassEntityRepository.findAll();
        assertThat(fieldTestServiceClassEntityList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    public void checkDurationRequiredBobIsRequired() throws Exception {
        int databaseSizeBeforeTest = fieldTestServiceClassEntityRepository.findAll().size();
        // set the field null
        fieldTestServiceClassEntity.setDurationRequiredBob(null);

        // Create the FieldTestServiceClassEntity, which fails.

        restFieldTestServiceClassEntityMockMvc.perform(post("/api/field-test-service-class-entities")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(fieldTestServiceClassEntity)))
            .andExpect(status().isBadRequest());

        List<FieldTestServiceClassEntity> fieldTestServiceClassEntityList = fieldTestServiceClassEntityRepository.findAll();
        assertThat(fieldTestServiceClassEntityList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    public void checkBooleanRequiredBobIsRequired() throws Exception {
        int databaseSizeBeforeTest = fieldTestServiceClassEntityRepository.findAll().size();
        // set the field null
        fieldTestServiceClassEntity.setBooleanRequiredBob(null);

        // Create the FieldTestServiceClassEntity, which fails.

        restFieldTestServiceClassEntityMockMvc.perform(post("/api/field-test-service-class-entities")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(fieldTestServiceClassEntity)))
            .andExpect(status().isBadRequest());

        List<FieldTestServiceClassEntity> fieldTestServiceClassEntityList = fieldTestServiceClassEntityRepository.findAll();
        assertThat(fieldTestServiceClassEntityList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    public void checkEnumRequiredBobIsRequired() throws Exception {
        int databaseSizeBeforeTest = fieldTestServiceClassEntityRepository.findAll().size();
        // set the field null
        fieldTestServiceClassEntity.setEnumRequiredBob(null);

        // Create the FieldTestServiceClassEntity, which fails.

        restFieldTestServiceClassEntityMockMvc.perform(post("/api/field-test-service-class-entities")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(fieldTestServiceClassEntity)))
            .andExpect(status().isBadRequest());

        List<FieldTestServiceClassEntity> fieldTestServiceClassEntityList = fieldTestServiceClassEntityRepository.findAll();
        assertThat(fieldTestServiceClassEntityList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    public void checkUuidRequiredBobIsRequired() throws Exception {
        int databaseSizeBeforeTest = fieldTestServiceClassEntityRepository.findAll().size();
        // set the field null
        fieldTestServiceClassEntity.setUuidRequiredBob(null);

        // Create the FieldTestServiceClassEntity, which fails.

        restFieldTestServiceClassEntityMockMvc.perform(post("/api/field-test-service-class-entities")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(fieldTestServiceClassEntity)))
            .andExpect(status().isBadRequest());

        List<FieldTestServiceClassEntity> fieldTestServiceClassEntityList = fieldTestServiceClassEntityRepository.findAll();
        assertThat(fieldTestServiceClassEntityList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntities() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList
        restFieldTestServiceClassEntityMockMvc.perform(get("/api/field-test-service-class-entities?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(fieldTestServiceClassEntity.getId().intValue())))
            .andExpect(jsonPath("$.[*].stringBob").value(hasItem(DEFAULT_STRING_BOB)))
            .andExpect(jsonPath("$.[*].stringRequiredBob").value(hasItem(DEFAULT_STRING_REQUIRED_BOB)))
            .andExpect(jsonPath("$.[*].stringMinlengthBob").value(hasItem(DEFAULT_STRING_MINLENGTH_BOB)))
            .andExpect(jsonPath("$.[*].stringMaxlengthBob").value(hasItem(DEFAULT_STRING_MAXLENGTH_BOB)))
            .andExpect(jsonPath("$.[*].stringPatternBob").value(hasItem(DEFAULT_STRING_PATTERN_BOB)))
            .andExpect(jsonPath("$.[*].integerBob").value(hasItem(DEFAULT_INTEGER_BOB)))
            .andExpect(jsonPath("$.[*].integerRequiredBob").value(hasItem(DEFAULT_INTEGER_REQUIRED_BOB)))
            .andExpect(jsonPath("$.[*].integerMinBob").value(hasItem(DEFAULT_INTEGER_MIN_BOB)))
            .andExpect(jsonPath("$.[*].integerMaxBob").value(hasItem(DEFAULT_INTEGER_MAX_BOB)))
            .andExpect(jsonPath("$.[*].longBob").value(hasItem(DEFAULT_LONG_BOB.intValue())))
            .andExpect(jsonPath("$.[*].longRequiredBob").value(hasItem(DEFAULT_LONG_REQUIRED_BOB.intValue())))
            .andExpect(jsonPath("$.[*].longMinBob").value(hasItem(DEFAULT_LONG_MIN_BOB.intValue())))
            .andExpect(jsonPath("$.[*].longMaxBob").value(hasItem(DEFAULT_LONG_MAX_BOB.intValue())))
            .andExpect(jsonPath("$.[*].floatBob").value(hasItem(DEFAULT_FLOAT_BOB.doubleValue())))
            .andExpect(jsonPath("$.[*].floatRequiredBob").value(hasItem(DEFAULT_FLOAT_REQUIRED_BOB.doubleValue())))
            .andExpect(jsonPath("$.[*].floatMinBob").value(hasItem(DEFAULT_FLOAT_MIN_BOB.doubleValue())))
            .andExpect(jsonPath("$.[*].floatMaxBob").value(hasItem(DEFAULT_FLOAT_MAX_BOB.doubleValue())))
            .andExpect(jsonPath("$.[*].doubleRequiredBob").value(hasItem(DEFAULT_DOUBLE_REQUIRED_BOB.doubleValue())))
            .andExpect(jsonPath("$.[*].doubleMinBob").value(hasItem(DEFAULT_DOUBLE_MIN_BOB.doubleValue())))
            .andExpect(jsonPath("$.[*].doubleMaxBob").value(hasItem(DEFAULT_DOUBLE_MAX_BOB.doubleValue())))
            .andExpect(jsonPath("$.[*].bigDecimalRequiredBob").value(hasItem(DEFAULT_BIG_DECIMAL_REQUIRED_BOB.intValue())))
            .andExpect(jsonPath("$.[*].bigDecimalMinBob").value(hasItem(DEFAULT_BIG_DECIMAL_MIN_BOB.intValue())))
            .andExpect(jsonPath("$.[*].bigDecimalMaxBob").value(hasItem(DEFAULT_BIG_DECIMAL_MAX_BOB.intValue())))
            .andExpect(jsonPath("$.[*].localDateBob").value(hasItem(DEFAULT_LOCAL_DATE_BOB.toString())))
            .andExpect(jsonPath("$.[*].localDateRequiredBob").value(hasItem(DEFAULT_LOCAL_DATE_REQUIRED_BOB.toString())))
            .andExpect(jsonPath("$.[*].instantBob").value(hasItem(DEFAULT_INSTANT_BOB.toString())))
            .andExpect(jsonPath("$.[*].instanteRequiredBob").value(hasItem(DEFAULT_INSTANTE_REQUIRED_BOB.toString())))
            .andExpect(jsonPath("$.[*].zonedDateTimeBob").value(hasItem(sameInstant(DEFAULT_ZONED_DATE_TIME_BOB))))
            .andExpect(jsonPath("$.[*].zonedDateTimeRequiredBob").value(hasItem(sameInstant(DEFAULT_ZONED_DATE_TIME_REQUIRED_BOB))))
            .andExpect(jsonPath("$.[*].durationBob").value(hasItem(DEFAULT_DURATION_BOB.toString())))
            .andExpect(jsonPath("$.[*].durationRequiredBob").value(hasItem(DEFAULT_DURATION_REQUIRED_BOB.toString())))
            .andExpect(jsonPath("$.[*].booleanBob").value(hasItem(DEFAULT_BOOLEAN_BOB.booleanValue())))
            .andExpect(jsonPath("$.[*].booleanRequiredBob").value(hasItem(DEFAULT_BOOLEAN_REQUIRED_BOB.booleanValue())))
            .andExpect(jsonPath("$.[*].enumBob").value(hasItem(DEFAULT_ENUM_BOB.toString())))
            .andExpect(jsonPath("$.[*].enumRequiredBob").value(hasItem(DEFAULT_ENUM_REQUIRED_BOB.toString())))
            .andExpect(jsonPath("$.[*].uuidBob").value(hasItem(DEFAULT_UUID_BOB.toString())))
            .andExpect(jsonPath("$.[*].uuidRequiredBob").value(hasItem(DEFAULT_UUID_REQUIRED_BOB.toString())))
            .andExpect(jsonPath("$.[*].byteImageBobContentType").value(hasItem(DEFAULT_BYTE_IMAGE_BOB_CONTENT_TYPE)))
            .andExpect(jsonPath("$.[*].byteImageBob").value(hasItem(Base64Utils.encodeToString(DEFAULT_BYTE_IMAGE_BOB))))
            .andExpect(jsonPath("$.[*].byteImageRequiredBobContentType").value(hasItem(DEFAULT_BYTE_IMAGE_REQUIRED_BOB_CONTENT_TYPE)))
            .andExpect(jsonPath("$.[*].byteImageRequiredBob").value(hasItem(Base64Utils.encodeToString(DEFAULT_BYTE_IMAGE_REQUIRED_BOB))))
            .andExpect(jsonPath("$.[*].byteImageMinbytesBobContentType").value(hasItem(DEFAULT_BYTE_IMAGE_MINBYTES_BOB_CONTENT_TYPE)))
            .andExpect(jsonPath("$.[*].byteImageMinbytesBob").value(hasItem(Base64Utils.encodeToString(DEFAULT_BYTE_IMAGE_MINBYTES_BOB))))
            .andExpect(jsonPath("$.[*].byteImageMaxbytesBobContentType").value(hasItem(DEFAULT_BYTE_IMAGE_MAXBYTES_BOB_CONTENT_TYPE)))
            .andExpect(jsonPath("$.[*].byteImageMaxbytesBob").value(hasItem(Base64Utils.encodeToString(DEFAULT_BYTE_IMAGE_MAXBYTES_BOB))))
            .andExpect(jsonPath("$.[*].byteAnyBobContentType").value(hasItem(DEFAULT_BYTE_ANY_BOB_CONTENT_TYPE)))
            .andExpect(jsonPath("$.[*].byteAnyBob").value(hasItem(Base64Utils.encodeToString(DEFAULT_BYTE_ANY_BOB))))
            .andExpect(jsonPath("$.[*].byteAnyRequiredBobContentType").value(hasItem(DEFAULT_BYTE_ANY_REQUIRED_BOB_CONTENT_TYPE)))
            .andExpect(jsonPath("$.[*].byteAnyRequiredBob").value(hasItem(Base64Utils.encodeToString(DEFAULT_BYTE_ANY_REQUIRED_BOB))))
            .andExpect(jsonPath("$.[*].byteAnyMinbytesBobContentType").value(hasItem(DEFAULT_BYTE_ANY_MINBYTES_BOB_CONTENT_TYPE)))
            .andExpect(jsonPath("$.[*].byteAnyMinbytesBob").value(hasItem(Base64Utils.encodeToString(DEFAULT_BYTE_ANY_MINBYTES_BOB))))
            .andExpect(jsonPath("$.[*].byteAnyMaxbytesBobContentType").value(hasItem(DEFAULT_BYTE_ANY_MAXBYTES_BOB_CONTENT_TYPE)))
            .andExpect(jsonPath("$.[*].byteAnyMaxbytesBob").value(hasItem(Base64Utils.encodeToString(DEFAULT_BYTE_ANY_MAXBYTES_BOB))))
            .andExpect(jsonPath("$.[*].byteTextBob").value(hasItem(DEFAULT_BYTE_TEXT_BOB.toString())))
            .andExpect(jsonPath("$.[*].byteTextRequiredBob").value(hasItem(DEFAULT_BYTE_TEXT_REQUIRED_BOB.toString())));
    }
    
    @Test
    @Transactional
    public void getFieldTestServiceClassEntity() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get the fieldTestServiceClassEntity
        restFieldTestServiceClassEntityMockMvc.perform(get("/api/field-test-service-class-entities/{id}", fieldTestServiceClassEntity.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(fieldTestServiceClassEntity.getId().intValue()))
            .andExpect(jsonPath("$.stringBob").value(DEFAULT_STRING_BOB))
            .andExpect(jsonPath("$.stringRequiredBob").value(DEFAULT_STRING_REQUIRED_BOB))
            .andExpect(jsonPath("$.stringMinlengthBob").value(DEFAULT_STRING_MINLENGTH_BOB))
            .andExpect(jsonPath("$.stringMaxlengthBob").value(DEFAULT_STRING_MAXLENGTH_BOB))
            .andExpect(jsonPath("$.stringPatternBob").value(DEFAULT_STRING_PATTERN_BOB))
            .andExpect(jsonPath("$.integerBob").value(DEFAULT_INTEGER_BOB))
            .andExpect(jsonPath("$.integerRequiredBob").value(DEFAULT_INTEGER_REQUIRED_BOB))
            .andExpect(jsonPath("$.integerMinBob").value(DEFAULT_INTEGER_MIN_BOB))
            .andExpect(jsonPath("$.integerMaxBob").value(DEFAULT_INTEGER_MAX_BOB))
            .andExpect(jsonPath("$.longBob").value(DEFAULT_LONG_BOB.intValue()))
            .andExpect(jsonPath("$.longRequiredBob").value(DEFAULT_LONG_REQUIRED_BOB.intValue()))
            .andExpect(jsonPath("$.longMinBob").value(DEFAULT_LONG_MIN_BOB.intValue()))
            .andExpect(jsonPath("$.longMaxBob").value(DEFAULT_LONG_MAX_BOB.intValue()))
            .andExpect(jsonPath("$.floatBob").value(DEFAULT_FLOAT_BOB.doubleValue()))
            .andExpect(jsonPath("$.floatRequiredBob").value(DEFAULT_FLOAT_REQUIRED_BOB.doubleValue()))
            .andExpect(jsonPath("$.floatMinBob").value(DEFAULT_FLOAT_MIN_BOB.doubleValue()))
            .andExpect(jsonPath("$.floatMaxBob").value(DEFAULT_FLOAT_MAX_BOB.doubleValue()))
            .andExpect(jsonPath("$.doubleRequiredBob").value(DEFAULT_DOUBLE_REQUIRED_BOB.doubleValue()))
            .andExpect(jsonPath("$.doubleMinBob").value(DEFAULT_DOUBLE_MIN_BOB.doubleValue()))
            .andExpect(jsonPath("$.doubleMaxBob").value(DEFAULT_DOUBLE_MAX_BOB.doubleValue()))
            .andExpect(jsonPath("$.bigDecimalRequiredBob").value(DEFAULT_BIG_DECIMAL_REQUIRED_BOB.intValue()))
            .andExpect(jsonPath("$.bigDecimalMinBob").value(DEFAULT_BIG_DECIMAL_MIN_BOB.intValue()))
            .andExpect(jsonPath("$.bigDecimalMaxBob").value(DEFAULT_BIG_DECIMAL_MAX_BOB.intValue()))
            .andExpect(jsonPath("$.localDateBob").value(DEFAULT_LOCAL_DATE_BOB.toString()))
            .andExpect(jsonPath("$.localDateRequiredBob").value(DEFAULT_LOCAL_DATE_REQUIRED_BOB.toString()))
            .andExpect(jsonPath("$.instantBob").value(DEFAULT_INSTANT_BOB.toString()))
            .andExpect(jsonPath("$.instanteRequiredBob").value(DEFAULT_INSTANTE_REQUIRED_BOB.toString()))
            .andExpect(jsonPath("$.zonedDateTimeBob").value(sameInstant(DEFAULT_ZONED_DATE_TIME_BOB)))
            .andExpect(jsonPath("$.zonedDateTimeRequiredBob").value(sameInstant(DEFAULT_ZONED_DATE_TIME_REQUIRED_BOB)))
            .andExpect(jsonPath("$.durationBob").value(DEFAULT_DURATION_BOB.toString()))
            .andExpect(jsonPath("$.durationRequiredBob").value(DEFAULT_DURATION_REQUIRED_BOB.toString()))
            .andExpect(jsonPath("$.booleanBob").value(DEFAULT_BOOLEAN_BOB.booleanValue()))
            .andExpect(jsonPath("$.booleanRequiredBob").value(DEFAULT_BOOLEAN_REQUIRED_BOB.booleanValue()))
            .andExpect(jsonPath("$.enumBob").value(DEFAULT_ENUM_BOB.toString()))
            .andExpect(jsonPath("$.enumRequiredBob").value(DEFAULT_ENUM_REQUIRED_BOB.toString()))
            .andExpect(jsonPath("$.uuidBob").value(DEFAULT_UUID_BOB.toString()))
            .andExpect(jsonPath("$.uuidRequiredBob").value(DEFAULT_UUID_REQUIRED_BOB.toString()))
            .andExpect(jsonPath("$.byteImageBobContentType").value(DEFAULT_BYTE_IMAGE_BOB_CONTENT_TYPE))
            .andExpect(jsonPath("$.byteImageBob").value(Base64Utils.encodeToString(DEFAULT_BYTE_IMAGE_BOB)))
            .andExpect(jsonPath("$.byteImageRequiredBobContentType").value(DEFAULT_BYTE_IMAGE_REQUIRED_BOB_CONTENT_TYPE))
            .andExpect(jsonPath("$.byteImageRequiredBob").value(Base64Utils.encodeToString(DEFAULT_BYTE_IMAGE_REQUIRED_BOB)))
            .andExpect(jsonPath("$.byteImageMinbytesBobContentType").value(DEFAULT_BYTE_IMAGE_MINBYTES_BOB_CONTENT_TYPE))
            .andExpect(jsonPath("$.byteImageMinbytesBob").value(Base64Utils.encodeToString(DEFAULT_BYTE_IMAGE_MINBYTES_BOB)))
            .andExpect(jsonPath("$.byteImageMaxbytesBobContentType").value(DEFAULT_BYTE_IMAGE_MAXBYTES_BOB_CONTENT_TYPE))
            .andExpect(jsonPath("$.byteImageMaxbytesBob").value(Base64Utils.encodeToString(DEFAULT_BYTE_IMAGE_MAXBYTES_BOB)))
            .andExpect(jsonPath("$.byteAnyBobContentType").value(DEFAULT_BYTE_ANY_BOB_CONTENT_TYPE))
            .andExpect(jsonPath("$.byteAnyBob").value(Base64Utils.encodeToString(DEFAULT_BYTE_ANY_BOB)))
            .andExpect(jsonPath("$.byteAnyRequiredBobContentType").value(DEFAULT_BYTE_ANY_REQUIRED_BOB_CONTENT_TYPE))
            .andExpect(jsonPath("$.byteAnyRequiredBob").value(Base64Utils.encodeToString(DEFAULT_BYTE_ANY_REQUIRED_BOB)))
            .andExpect(jsonPath("$.byteAnyMinbytesBobContentType").value(DEFAULT_BYTE_ANY_MINBYTES_BOB_CONTENT_TYPE))
            .andExpect(jsonPath("$.byteAnyMinbytesBob").value(Base64Utils.encodeToString(DEFAULT_BYTE_ANY_MINBYTES_BOB)))
            .andExpect(jsonPath("$.byteAnyMaxbytesBobContentType").value(DEFAULT_BYTE_ANY_MAXBYTES_BOB_CONTENT_TYPE))
            .andExpect(jsonPath("$.byteAnyMaxbytesBob").value(Base64Utils.encodeToString(DEFAULT_BYTE_ANY_MAXBYTES_BOB)))
            .andExpect(jsonPath("$.byteTextBob").value(DEFAULT_BYTE_TEXT_BOB.toString()))
            .andExpect(jsonPath("$.byteTextRequiredBob").value(DEFAULT_BYTE_TEXT_REQUIRED_BOB.toString()));
    }


    @Test
    @Transactional
    public void getFieldTestServiceClassEntitiesByIdFiltering() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        Long id = fieldTestServiceClassEntity.getId();

        defaultFieldTestServiceClassEntityShouldBeFound("id.equals=" + id);
        defaultFieldTestServiceClassEntityShouldNotBeFound("id.notEquals=" + id);

        defaultFieldTestServiceClassEntityShouldBeFound("id.greaterThanOrEqual=" + id);
        defaultFieldTestServiceClassEntityShouldNotBeFound("id.greaterThan=" + id);

        defaultFieldTestServiceClassEntityShouldBeFound("id.lessThanOrEqual=" + id);
        defaultFieldTestServiceClassEntityShouldNotBeFound("id.lessThan=" + id);
    }


    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByStringBobIsEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where stringBob equals to DEFAULT_STRING_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("stringBob.equals=" + DEFAULT_STRING_BOB);

        // Get all the fieldTestServiceClassEntityList where stringBob equals to UPDATED_STRING_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("stringBob.equals=" + UPDATED_STRING_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByStringBobIsNotEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where stringBob not equals to DEFAULT_STRING_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("stringBob.notEquals=" + DEFAULT_STRING_BOB);

        // Get all the fieldTestServiceClassEntityList where stringBob not equals to UPDATED_STRING_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("stringBob.notEquals=" + UPDATED_STRING_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByStringBobIsInShouldWork() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where stringBob in DEFAULT_STRING_BOB or UPDATED_STRING_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("stringBob.in=" + DEFAULT_STRING_BOB + "," + UPDATED_STRING_BOB);

        // Get all the fieldTestServiceClassEntityList where stringBob equals to UPDATED_STRING_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("stringBob.in=" + UPDATED_STRING_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByStringBobIsNullOrNotNull() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where stringBob is not null
        defaultFieldTestServiceClassEntityShouldBeFound("stringBob.specified=true");

        // Get all the fieldTestServiceClassEntityList where stringBob is null
        defaultFieldTestServiceClassEntityShouldNotBeFound("stringBob.specified=false");
    }
                @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByStringBobContainsSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where stringBob contains DEFAULT_STRING_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("stringBob.contains=" + DEFAULT_STRING_BOB);

        // Get all the fieldTestServiceClassEntityList where stringBob contains UPDATED_STRING_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("stringBob.contains=" + UPDATED_STRING_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByStringBobNotContainsSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where stringBob does not contain DEFAULT_STRING_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("stringBob.doesNotContain=" + DEFAULT_STRING_BOB);

        // Get all the fieldTestServiceClassEntityList where stringBob does not contain UPDATED_STRING_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("stringBob.doesNotContain=" + UPDATED_STRING_BOB);
    }


    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByStringRequiredBobIsEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where stringRequiredBob equals to DEFAULT_STRING_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("stringRequiredBob.equals=" + DEFAULT_STRING_REQUIRED_BOB);

        // Get all the fieldTestServiceClassEntityList where stringRequiredBob equals to UPDATED_STRING_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("stringRequiredBob.equals=" + UPDATED_STRING_REQUIRED_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByStringRequiredBobIsNotEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where stringRequiredBob not equals to DEFAULT_STRING_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("stringRequiredBob.notEquals=" + DEFAULT_STRING_REQUIRED_BOB);

        // Get all the fieldTestServiceClassEntityList where stringRequiredBob not equals to UPDATED_STRING_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("stringRequiredBob.notEquals=" + UPDATED_STRING_REQUIRED_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByStringRequiredBobIsInShouldWork() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where stringRequiredBob in DEFAULT_STRING_REQUIRED_BOB or UPDATED_STRING_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("stringRequiredBob.in=" + DEFAULT_STRING_REQUIRED_BOB + "," + UPDATED_STRING_REQUIRED_BOB);

        // Get all the fieldTestServiceClassEntityList where stringRequiredBob equals to UPDATED_STRING_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("stringRequiredBob.in=" + UPDATED_STRING_REQUIRED_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByStringRequiredBobIsNullOrNotNull() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where stringRequiredBob is not null
        defaultFieldTestServiceClassEntityShouldBeFound("stringRequiredBob.specified=true");

        // Get all the fieldTestServiceClassEntityList where stringRequiredBob is null
        defaultFieldTestServiceClassEntityShouldNotBeFound("stringRequiredBob.specified=false");
    }
                @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByStringRequiredBobContainsSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where stringRequiredBob contains DEFAULT_STRING_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("stringRequiredBob.contains=" + DEFAULT_STRING_REQUIRED_BOB);

        // Get all the fieldTestServiceClassEntityList where stringRequiredBob contains UPDATED_STRING_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("stringRequiredBob.contains=" + UPDATED_STRING_REQUIRED_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByStringRequiredBobNotContainsSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where stringRequiredBob does not contain DEFAULT_STRING_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("stringRequiredBob.doesNotContain=" + DEFAULT_STRING_REQUIRED_BOB);

        // Get all the fieldTestServiceClassEntityList where stringRequiredBob does not contain UPDATED_STRING_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("stringRequiredBob.doesNotContain=" + UPDATED_STRING_REQUIRED_BOB);
    }


    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByStringMinlengthBobIsEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where stringMinlengthBob equals to DEFAULT_STRING_MINLENGTH_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("stringMinlengthBob.equals=" + DEFAULT_STRING_MINLENGTH_BOB);

        // Get all the fieldTestServiceClassEntityList where stringMinlengthBob equals to UPDATED_STRING_MINLENGTH_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("stringMinlengthBob.equals=" + UPDATED_STRING_MINLENGTH_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByStringMinlengthBobIsNotEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where stringMinlengthBob not equals to DEFAULT_STRING_MINLENGTH_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("stringMinlengthBob.notEquals=" + DEFAULT_STRING_MINLENGTH_BOB);

        // Get all the fieldTestServiceClassEntityList where stringMinlengthBob not equals to UPDATED_STRING_MINLENGTH_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("stringMinlengthBob.notEquals=" + UPDATED_STRING_MINLENGTH_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByStringMinlengthBobIsInShouldWork() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where stringMinlengthBob in DEFAULT_STRING_MINLENGTH_BOB or UPDATED_STRING_MINLENGTH_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("stringMinlengthBob.in=" + DEFAULT_STRING_MINLENGTH_BOB + "," + UPDATED_STRING_MINLENGTH_BOB);

        // Get all the fieldTestServiceClassEntityList where stringMinlengthBob equals to UPDATED_STRING_MINLENGTH_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("stringMinlengthBob.in=" + UPDATED_STRING_MINLENGTH_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByStringMinlengthBobIsNullOrNotNull() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where stringMinlengthBob is not null
        defaultFieldTestServiceClassEntityShouldBeFound("stringMinlengthBob.specified=true");

        // Get all the fieldTestServiceClassEntityList where stringMinlengthBob is null
        defaultFieldTestServiceClassEntityShouldNotBeFound("stringMinlengthBob.specified=false");
    }
                @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByStringMinlengthBobContainsSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where stringMinlengthBob contains DEFAULT_STRING_MINLENGTH_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("stringMinlengthBob.contains=" + DEFAULT_STRING_MINLENGTH_BOB);

        // Get all the fieldTestServiceClassEntityList where stringMinlengthBob contains UPDATED_STRING_MINLENGTH_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("stringMinlengthBob.contains=" + UPDATED_STRING_MINLENGTH_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByStringMinlengthBobNotContainsSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where stringMinlengthBob does not contain DEFAULT_STRING_MINLENGTH_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("stringMinlengthBob.doesNotContain=" + DEFAULT_STRING_MINLENGTH_BOB);

        // Get all the fieldTestServiceClassEntityList where stringMinlengthBob does not contain UPDATED_STRING_MINLENGTH_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("stringMinlengthBob.doesNotContain=" + UPDATED_STRING_MINLENGTH_BOB);
    }


    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByStringMaxlengthBobIsEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where stringMaxlengthBob equals to DEFAULT_STRING_MAXLENGTH_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("stringMaxlengthBob.equals=" + DEFAULT_STRING_MAXLENGTH_BOB);

        // Get all the fieldTestServiceClassEntityList where stringMaxlengthBob equals to UPDATED_STRING_MAXLENGTH_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("stringMaxlengthBob.equals=" + UPDATED_STRING_MAXLENGTH_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByStringMaxlengthBobIsNotEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where stringMaxlengthBob not equals to DEFAULT_STRING_MAXLENGTH_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("stringMaxlengthBob.notEquals=" + DEFAULT_STRING_MAXLENGTH_BOB);

        // Get all the fieldTestServiceClassEntityList where stringMaxlengthBob not equals to UPDATED_STRING_MAXLENGTH_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("stringMaxlengthBob.notEquals=" + UPDATED_STRING_MAXLENGTH_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByStringMaxlengthBobIsInShouldWork() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where stringMaxlengthBob in DEFAULT_STRING_MAXLENGTH_BOB or UPDATED_STRING_MAXLENGTH_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("stringMaxlengthBob.in=" + DEFAULT_STRING_MAXLENGTH_BOB + "," + UPDATED_STRING_MAXLENGTH_BOB);

        // Get all the fieldTestServiceClassEntityList where stringMaxlengthBob equals to UPDATED_STRING_MAXLENGTH_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("stringMaxlengthBob.in=" + UPDATED_STRING_MAXLENGTH_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByStringMaxlengthBobIsNullOrNotNull() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where stringMaxlengthBob is not null
        defaultFieldTestServiceClassEntityShouldBeFound("stringMaxlengthBob.specified=true");

        // Get all the fieldTestServiceClassEntityList where stringMaxlengthBob is null
        defaultFieldTestServiceClassEntityShouldNotBeFound("stringMaxlengthBob.specified=false");
    }
                @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByStringMaxlengthBobContainsSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where stringMaxlengthBob contains DEFAULT_STRING_MAXLENGTH_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("stringMaxlengthBob.contains=" + DEFAULT_STRING_MAXLENGTH_BOB);

        // Get all the fieldTestServiceClassEntityList where stringMaxlengthBob contains UPDATED_STRING_MAXLENGTH_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("stringMaxlengthBob.contains=" + UPDATED_STRING_MAXLENGTH_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByStringMaxlengthBobNotContainsSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where stringMaxlengthBob does not contain DEFAULT_STRING_MAXLENGTH_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("stringMaxlengthBob.doesNotContain=" + DEFAULT_STRING_MAXLENGTH_BOB);

        // Get all the fieldTestServiceClassEntityList where stringMaxlengthBob does not contain UPDATED_STRING_MAXLENGTH_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("stringMaxlengthBob.doesNotContain=" + UPDATED_STRING_MAXLENGTH_BOB);
    }


    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByStringPatternBobIsEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where stringPatternBob equals to DEFAULT_STRING_PATTERN_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("stringPatternBob.equals=" + DEFAULT_STRING_PATTERN_BOB);

        // Get all the fieldTestServiceClassEntityList where stringPatternBob equals to UPDATED_STRING_PATTERN_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("stringPatternBob.equals=" + UPDATED_STRING_PATTERN_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByStringPatternBobIsNotEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where stringPatternBob not equals to DEFAULT_STRING_PATTERN_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("stringPatternBob.notEquals=" + DEFAULT_STRING_PATTERN_BOB);

        // Get all the fieldTestServiceClassEntityList where stringPatternBob not equals to UPDATED_STRING_PATTERN_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("stringPatternBob.notEquals=" + UPDATED_STRING_PATTERN_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByStringPatternBobIsInShouldWork() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where stringPatternBob in DEFAULT_STRING_PATTERN_BOB or UPDATED_STRING_PATTERN_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("stringPatternBob.in=" + DEFAULT_STRING_PATTERN_BOB + "," + UPDATED_STRING_PATTERN_BOB);

        // Get all the fieldTestServiceClassEntityList where stringPatternBob equals to UPDATED_STRING_PATTERN_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("stringPatternBob.in=" + UPDATED_STRING_PATTERN_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByStringPatternBobIsNullOrNotNull() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where stringPatternBob is not null
        defaultFieldTestServiceClassEntityShouldBeFound("stringPatternBob.specified=true");

        // Get all the fieldTestServiceClassEntityList where stringPatternBob is null
        defaultFieldTestServiceClassEntityShouldNotBeFound("stringPatternBob.specified=false");
    }
                @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByStringPatternBobContainsSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where stringPatternBob contains DEFAULT_STRING_PATTERN_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("stringPatternBob.contains=" + DEFAULT_STRING_PATTERN_BOB);

        // Get all the fieldTestServiceClassEntityList where stringPatternBob contains UPDATED_STRING_PATTERN_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("stringPatternBob.contains=" + UPDATED_STRING_PATTERN_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByStringPatternBobNotContainsSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where stringPatternBob does not contain DEFAULT_STRING_PATTERN_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("stringPatternBob.doesNotContain=" + DEFAULT_STRING_PATTERN_BOB);

        // Get all the fieldTestServiceClassEntityList where stringPatternBob does not contain UPDATED_STRING_PATTERN_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("stringPatternBob.doesNotContain=" + UPDATED_STRING_PATTERN_BOB);
    }


    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByIntegerBobIsEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where integerBob equals to DEFAULT_INTEGER_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("integerBob.equals=" + DEFAULT_INTEGER_BOB);

        // Get all the fieldTestServiceClassEntityList where integerBob equals to UPDATED_INTEGER_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("integerBob.equals=" + UPDATED_INTEGER_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByIntegerBobIsNotEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where integerBob not equals to DEFAULT_INTEGER_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("integerBob.notEquals=" + DEFAULT_INTEGER_BOB);

        // Get all the fieldTestServiceClassEntityList where integerBob not equals to UPDATED_INTEGER_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("integerBob.notEquals=" + UPDATED_INTEGER_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByIntegerBobIsInShouldWork() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where integerBob in DEFAULT_INTEGER_BOB or UPDATED_INTEGER_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("integerBob.in=" + DEFAULT_INTEGER_BOB + "," + UPDATED_INTEGER_BOB);

        // Get all the fieldTestServiceClassEntityList where integerBob equals to UPDATED_INTEGER_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("integerBob.in=" + UPDATED_INTEGER_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByIntegerBobIsNullOrNotNull() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where integerBob is not null
        defaultFieldTestServiceClassEntityShouldBeFound("integerBob.specified=true");

        // Get all the fieldTestServiceClassEntityList where integerBob is null
        defaultFieldTestServiceClassEntityShouldNotBeFound("integerBob.specified=false");
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByIntegerBobIsGreaterThanOrEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where integerBob is greater than or equal to DEFAULT_INTEGER_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("integerBob.greaterThanOrEqual=" + DEFAULT_INTEGER_BOB);

        // Get all the fieldTestServiceClassEntityList where integerBob is greater than or equal to UPDATED_INTEGER_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("integerBob.greaterThanOrEqual=" + UPDATED_INTEGER_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByIntegerBobIsLessThanOrEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where integerBob is less than or equal to DEFAULT_INTEGER_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("integerBob.lessThanOrEqual=" + DEFAULT_INTEGER_BOB);

        // Get all the fieldTestServiceClassEntityList where integerBob is less than or equal to SMALLER_INTEGER_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("integerBob.lessThanOrEqual=" + SMALLER_INTEGER_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByIntegerBobIsLessThanSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where integerBob is less than DEFAULT_INTEGER_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("integerBob.lessThan=" + DEFAULT_INTEGER_BOB);

        // Get all the fieldTestServiceClassEntityList where integerBob is less than UPDATED_INTEGER_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("integerBob.lessThan=" + UPDATED_INTEGER_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByIntegerBobIsGreaterThanSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where integerBob is greater than DEFAULT_INTEGER_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("integerBob.greaterThan=" + DEFAULT_INTEGER_BOB);

        // Get all the fieldTestServiceClassEntityList where integerBob is greater than SMALLER_INTEGER_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("integerBob.greaterThan=" + SMALLER_INTEGER_BOB);
    }


    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByIntegerRequiredBobIsEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where integerRequiredBob equals to DEFAULT_INTEGER_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("integerRequiredBob.equals=" + DEFAULT_INTEGER_REQUIRED_BOB);

        // Get all the fieldTestServiceClassEntityList where integerRequiredBob equals to UPDATED_INTEGER_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("integerRequiredBob.equals=" + UPDATED_INTEGER_REQUIRED_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByIntegerRequiredBobIsNotEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where integerRequiredBob not equals to DEFAULT_INTEGER_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("integerRequiredBob.notEquals=" + DEFAULT_INTEGER_REQUIRED_BOB);

        // Get all the fieldTestServiceClassEntityList where integerRequiredBob not equals to UPDATED_INTEGER_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("integerRequiredBob.notEquals=" + UPDATED_INTEGER_REQUIRED_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByIntegerRequiredBobIsInShouldWork() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where integerRequiredBob in DEFAULT_INTEGER_REQUIRED_BOB or UPDATED_INTEGER_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("integerRequiredBob.in=" + DEFAULT_INTEGER_REQUIRED_BOB + "," + UPDATED_INTEGER_REQUIRED_BOB);

        // Get all the fieldTestServiceClassEntityList where integerRequiredBob equals to UPDATED_INTEGER_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("integerRequiredBob.in=" + UPDATED_INTEGER_REQUIRED_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByIntegerRequiredBobIsNullOrNotNull() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where integerRequiredBob is not null
        defaultFieldTestServiceClassEntityShouldBeFound("integerRequiredBob.specified=true");

        // Get all the fieldTestServiceClassEntityList where integerRequiredBob is null
        defaultFieldTestServiceClassEntityShouldNotBeFound("integerRequiredBob.specified=false");
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByIntegerRequiredBobIsGreaterThanOrEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where integerRequiredBob is greater than or equal to DEFAULT_INTEGER_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("integerRequiredBob.greaterThanOrEqual=" + DEFAULT_INTEGER_REQUIRED_BOB);

        // Get all the fieldTestServiceClassEntityList where integerRequiredBob is greater than or equal to UPDATED_INTEGER_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("integerRequiredBob.greaterThanOrEqual=" + UPDATED_INTEGER_REQUIRED_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByIntegerRequiredBobIsLessThanOrEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where integerRequiredBob is less than or equal to DEFAULT_INTEGER_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("integerRequiredBob.lessThanOrEqual=" + DEFAULT_INTEGER_REQUIRED_BOB);

        // Get all the fieldTestServiceClassEntityList where integerRequiredBob is less than or equal to SMALLER_INTEGER_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("integerRequiredBob.lessThanOrEqual=" + SMALLER_INTEGER_REQUIRED_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByIntegerRequiredBobIsLessThanSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where integerRequiredBob is less than DEFAULT_INTEGER_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("integerRequiredBob.lessThan=" + DEFAULT_INTEGER_REQUIRED_BOB);

        // Get all the fieldTestServiceClassEntityList where integerRequiredBob is less than UPDATED_INTEGER_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("integerRequiredBob.lessThan=" + UPDATED_INTEGER_REQUIRED_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByIntegerRequiredBobIsGreaterThanSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where integerRequiredBob is greater than DEFAULT_INTEGER_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("integerRequiredBob.greaterThan=" + DEFAULT_INTEGER_REQUIRED_BOB);

        // Get all the fieldTestServiceClassEntityList where integerRequiredBob is greater than SMALLER_INTEGER_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("integerRequiredBob.greaterThan=" + SMALLER_INTEGER_REQUIRED_BOB);
    }


    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByIntegerMinBobIsEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where integerMinBob equals to DEFAULT_INTEGER_MIN_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("integerMinBob.equals=" + DEFAULT_INTEGER_MIN_BOB);

        // Get all the fieldTestServiceClassEntityList where integerMinBob equals to UPDATED_INTEGER_MIN_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("integerMinBob.equals=" + UPDATED_INTEGER_MIN_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByIntegerMinBobIsNotEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where integerMinBob not equals to DEFAULT_INTEGER_MIN_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("integerMinBob.notEquals=" + DEFAULT_INTEGER_MIN_BOB);

        // Get all the fieldTestServiceClassEntityList where integerMinBob not equals to UPDATED_INTEGER_MIN_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("integerMinBob.notEquals=" + UPDATED_INTEGER_MIN_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByIntegerMinBobIsInShouldWork() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where integerMinBob in DEFAULT_INTEGER_MIN_BOB or UPDATED_INTEGER_MIN_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("integerMinBob.in=" + DEFAULT_INTEGER_MIN_BOB + "," + UPDATED_INTEGER_MIN_BOB);

        // Get all the fieldTestServiceClassEntityList where integerMinBob equals to UPDATED_INTEGER_MIN_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("integerMinBob.in=" + UPDATED_INTEGER_MIN_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByIntegerMinBobIsNullOrNotNull() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where integerMinBob is not null
        defaultFieldTestServiceClassEntityShouldBeFound("integerMinBob.specified=true");

        // Get all the fieldTestServiceClassEntityList where integerMinBob is null
        defaultFieldTestServiceClassEntityShouldNotBeFound("integerMinBob.specified=false");
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByIntegerMinBobIsGreaterThanOrEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where integerMinBob is greater than or equal to DEFAULT_INTEGER_MIN_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("integerMinBob.greaterThanOrEqual=" + DEFAULT_INTEGER_MIN_BOB);

        // Get all the fieldTestServiceClassEntityList where integerMinBob is greater than or equal to UPDATED_INTEGER_MIN_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("integerMinBob.greaterThanOrEqual=" + UPDATED_INTEGER_MIN_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByIntegerMinBobIsLessThanOrEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where integerMinBob is less than or equal to DEFAULT_INTEGER_MIN_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("integerMinBob.lessThanOrEqual=" + DEFAULT_INTEGER_MIN_BOB);

        // Get all the fieldTestServiceClassEntityList where integerMinBob is less than or equal to SMALLER_INTEGER_MIN_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("integerMinBob.lessThanOrEqual=" + SMALLER_INTEGER_MIN_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByIntegerMinBobIsLessThanSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where integerMinBob is less than DEFAULT_INTEGER_MIN_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("integerMinBob.lessThan=" + DEFAULT_INTEGER_MIN_BOB);

        // Get all the fieldTestServiceClassEntityList where integerMinBob is less than UPDATED_INTEGER_MIN_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("integerMinBob.lessThan=" + UPDATED_INTEGER_MIN_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByIntegerMinBobIsGreaterThanSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where integerMinBob is greater than DEFAULT_INTEGER_MIN_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("integerMinBob.greaterThan=" + DEFAULT_INTEGER_MIN_BOB);

        // Get all the fieldTestServiceClassEntityList where integerMinBob is greater than SMALLER_INTEGER_MIN_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("integerMinBob.greaterThan=" + SMALLER_INTEGER_MIN_BOB);
    }


    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByIntegerMaxBobIsEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where integerMaxBob equals to DEFAULT_INTEGER_MAX_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("integerMaxBob.equals=" + DEFAULT_INTEGER_MAX_BOB);

        // Get all the fieldTestServiceClassEntityList where integerMaxBob equals to UPDATED_INTEGER_MAX_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("integerMaxBob.equals=" + UPDATED_INTEGER_MAX_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByIntegerMaxBobIsNotEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where integerMaxBob not equals to DEFAULT_INTEGER_MAX_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("integerMaxBob.notEquals=" + DEFAULT_INTEGER_MAX_BOB);

        // Get all the fieldTestServiceClassEntityList where integerMaxBob not equals to UPDATED_INTEGER_MAX_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("integerMaxBob.notEquals=" + UPDATED_INTEGER_MAX_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByIntegerMaxBobIsInShouldWork() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where integerMaxBob in DEFAULT_INTEGER_MAX_BOB or UPDATED_INTEGER_MAX_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("integerMaxBob.in=" + DEFAULT_INTEGER_MAX_BOB + "," + UPDATED_INTEGER_MAX_BOB);

        // Get all the fieldTestServiceClassEntityList where integerMaxBob equals to UPDATED_INTEGER_MAX_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("integerMaxBob.in=" + UPDATED_INTEGER_MAX_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByIntegerMaxBobIsNullOrNotNull() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where integerMaxBob is not null
        defaultFieldTestServiceClassEntityShouldBeFound("integerMaxBob.specified=true");

        // Get all the fieldTestServiceClassEntityList where integerMaxBob is null
        defaultFieldTestServiceClassEntityShouldNotBeFound("integerMaxBob.specified=false");
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByIntegerMaxBobIsGreaterThanOrEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where integerMaxBob is greater than or equal to DEFAULT_INTEGER_MAX_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("integerMaxBob.greaterThanOrEqual=" + DEFAULT_INTEGER_MAX_BOB);

        // Get all the fieldTestServiceClassEntityList where integerMaxBob is greater than or equal to (DEFAULT_INTEGER_MAX_BOB + 1)
        defaultFieldTestServiceClassEntityShouldNotBeFound("integerMaxBob.greaterThanOrEqual=" + (DEFAULT_INTEGER_MAX_BOB + 1));
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByIntegerMaxBobIsLessThanOrEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where integerMaxBob is less than or equal to DEFAULT_INTEGER_MAX_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("integerMaxBob.lessThanOrEqual=" + DEFAULT_INTEGER_MAX_BOB);

        // Get all the fieldTestServiceClassEntityList where integerMaxBob is less than or equal to SMALLER_INTEGER_MAX_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("integerMaxBob.lessThanOrEqual=" + SMALLER_INTEGER_MAX_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByIntegerMaxBobIsLessThanSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where integerMaxBob is less than DEFAULT_INTEGER_MAX_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("integerMaxBob.lessThan=" + DEFAULT_INTEGER_MAX_BOB);

        // Get all the fieldTestServiceClassEntityList where integerMaxBob is less than (DEFAULT_INTEGER_MAX_BOB + 1)
        defaultFieldTestServiceClassEntityShouldBeFound("integerMaxBob.lessThan=" + (DEFAULT_INTEGER_MAX_BOB + 1));
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByIntegerMaxBobIsGreaterThanSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where integerMaxBob is greater than DEFAULT_INTEGER_MAX_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("integerMaxBob.greaterThan=" + DEFAULT_INTEGER_MAX_BOB);

        // Get all the fieldTestServiceClassEntityList where integerMaxBob is greater than SMALLER_INTEGER_MAX_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("integerMaxBob.greaterThan=" + SMALLER_INTEGER_MAX_BOB);
    }


    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByLongBobIsEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where longBob equals to DEFAULT_LONG_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("longBob.equals=" + DEFAULT_LONG_BOB);

        // Get all the fieldTestServiceClassEntityList where longBob equals to UPDATED_LONG_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("longBob.equals=" + UPDATED_LONG_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByLongBobIsNotEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where longBob not equals to DEFAULT_LONG_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("longBob.notEquals=" + DEFAULT_LONG_BOB);

        // Get all the fieldTestServiceClassEntityList where longBob not equals to UPDATED_LONG_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("longBob.notEquals=" + UPDATED_LONG_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByLongBobIsInShouldWork() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where longBob in DEFAULT_LONG_BOB or UPDATED_LONG_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("longBob.in=" + DEFAULT_LONG_BOB + "," + UPDATED_LONG_BOB);

        // Get all the fieldTestServiceClassEntityList where longBob equals to UPDATED_LONG_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("longBob.in=" + UPDATED_LONG_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByLongBobIsNullOrNotNull() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where longBob is not null
        defaultFieldTestServiceClassEntityShouldBeFound("longBob.specified=true");

        // Get all the fieldTestServiceClassEntityList where longBob is null
        defaultFieldTestServiceClassEntityShouldNotBeFound("longBob.specified=false");
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByLongBobIsGreaterThanOrEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where longBob is greater than or equal to DEFAULT_LONG_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("longBob.greaterThanOrEqual=" + DEFAULT_LONG_BOB);

        // Get all the fieldTestServiceClassEntityList where longBob is greater than or equal to UPDATED_LONG_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("longBob.greaterThanOrEqual=" + UPDATED_LONG_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByLongBobIsLessThanOrEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where longBob is less than or equal to DEFAULT_LONG_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("longBob.lessThanOrEqual=" + DEFAULT_LONG_BOB);

        // Get all the fieldTestServiceClassEntityList where longBob is less than or equal to SMALLER_LONG_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("longBob.lessThanOrEqual=" + SMALLER_LONG_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByLongBobIsLessThanSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where longBob is less than DEFAULT_LONG_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("longBob.lessThan=" + DEFAULT_LONG_BOB);

        // Get all the fieldTestServiceClassEntityList where longBob is less than UPDATED_LONG_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("longBob.lessThan=" + UPDATED_LONG_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByLongBobIsGreaterThanSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where longBob is greater than DEFAULT_LONG_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("longBob.greaterThan=" + DEFAULT_LONG_BOB);

        // Get all the fieldTestServiceClassEntityList where longBob is greater than SMALLER_LONG_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("longBob.greaterThan=" + SMALLER_LONG_BOB);
    }


    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByLongRequiredBobIsEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where longRequiredBob equals to DEFAULT_LONG_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("longRequiredBob.equals=" + DEFAULT_LONG_REQUIRED_BOB);

        // Get all the fieldTestServiceClassEntityList where longRequiredBob equals to UPDATED_LONG_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("longRequiredBob.equals=" + UPDATED_LONG_REQUIRED_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByLongRequiredBobIsNotEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where longRequiredBob not equals to DEFAULT_LONG_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("longRequiredBob.notEquals=" + DEFAULT_LONG_REQUIRED_BOB);

        // Get all the fieldTestServiceClassEntityList where longRequiredBob not equals to UPDATED_LONG_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("longRequiredBob.notEquals=" + UPDATED_LONG_REQUIRED_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByLongRequiredBobIsInShouldWork() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where longRequiredBob in DEFAULT_LONG_REQUIRED_BOB or UPDATED_LONG_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("longRequiredBob.in=" + DEFAULT_LONG_REQUIRED_BOB + "," + UPDATED_LONG_REQUIRED_BOB);

        // Get all the fieldTestServiceClassEntityList where longRequiredBob equals to UPDATED_LONG_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("longRequiredBob.in=" + UPDATED_LONG_REQUIRED_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByLongRequiredBobIsNullOrNotNull() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where longRequiredBob is not null
        defaultFieldTestServiceClassEntityShouldBeFound("longRequiredBob.specified=true");

        // Get all the fieldTestServiceClassEntityList where longRequiredBob is null
        defaultFieldTestServiceClassEntityShouldNotBeFound("longRequiredBob.specified=false");
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByLongRequiredBobIsGreaterThanOrEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where longRequiredBob is greater than or equal to DEFAULT_LONG_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("longRequiredBob.greaterThanOrEqual=" + DEFAULT_LONG_REQUIRED_BOB);

        // Get all the fieldTestServiceClassEntityList where longRequiredBob is greater than or equal to UPDATED_LONG_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("longRequiredBob.greaterThanOrEqual=" + UPDATED_LONG_REQUIRED_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByLongRequiredBobIsLessThanOrEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where longRequiredBob is less than or equal to DEFAULT_LONG_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("longRequiredBob.lessThanOrEqual=" + DEFAULT_LONG_REQUIRED_BOB);

        // Get all the fieldTestServiceClassEntityList where longRequiredBob is less than or equal to SMALLER_LONG_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("longRequiredBob.lessThanOrEqual=" + SMALLER_LONG_REQUIRED_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByLongRequiredBobIsLessThanSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where longRequiredBob is less than DEFAULT_LONG_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("longRequiredBob.lessThan=" + DEFAULT_LONG_REQUIRED_BOB);

        // Get all the fieldTestServiceClassEntityList where longRequiredBob is less than UPDATED_LONG_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("longRequiredBob.lessThan=" + UPDATED_LONG_REQUIRED_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByLongRequiredBobIsGreaterThanSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where longRequiredBob is greater than DEFAULT_LONG_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("longRequiredBob.greaterThan=" + DEFAULT_LONG_REQUIRED_BOB);

        // Get all the fieldTestServiceClassEntityList where longRequiredBob is greater than SMALLER_LONG_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("longRequiredBob.greaterThan=" + SMALLER_LONG_REQUIRED_BOB);
    }


    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByLongMinBobIsEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where longMinBob equals to DEFAULT_LONG_MIN_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("longMinBob.equals=" + DEFAULT_LONG_MIN_BOB);

        // Get all the fieldTestServiceClassEntityList where longMinBob equals to UPDATED_LONG_MIN_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("longMinBob.equals=" + UPDATED_LONG_MIN_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByLongMinBobIsNotEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where longMinBob not equals to DEFAULT_LONG_MIN_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("longMinBob.notEquals=" + DEFAULT_LONG_MIN_BOB);

        // Get all the fieldTestServiceClassEntityList where longMinBob not equals to UPDATED_LONG_MIN_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("longMinBob.notEquals=" + UPDATED_LONG_MIN_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByLongMinBobIsInShouldWork() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where longMinBob in DEFAULT_LONG_MIN_BOB or UPDATED_LONG_MIN_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("longMinBob.in=" + DEFAULT_LONG_MIN_BOB + "," + UPDATED_LONG_MIN_BOB);

        // Get all the fieldTestServiceClassEntityList where longMinBob equals to UPDATED_LONG_MIN_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("longMinBob.in=" + UPDATED_LONG_MIN_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByLongMinBobIsNullOrNotNull() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where longMinBob is not null
        defaultFieldTestServiceClassEntityShouldBeFound("longMinBob.specified=true");

        // Get all the fieldTestServiceClassEntityList where longMinBob is null
        defaultFieldTestServiceClassEntityShouldNotBeFound("longMinBob.specified=false");
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByLongMinBobIsGreaterThanOrEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where longMinBob is greater than or equal to DEFAULT_LONG_MIN_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("longMinBob.greaterThanOrEqual=" + DEFAULT_LONG_MIN_BOB);

        // Get all the fieldTestServiceClassEntityList where longMinBob is greater than or equal to UPDATED_LONG_MIN_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("longMinBob.greaterThanOrEqual=" + UPDATED_LONG_MIN_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByLongMinBobIsLessThanOrEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where longMinBob is less than or equal to DEFAULT_LONG_MIN_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("longMinBob.lessThanOrEqual=" + DEFAULT_LONG_MIN_BOB);

        // Get all the fieldTestServiceClassEntityList where longMinBob is less than or equal to SMALLER_LONG_MIN_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("longMinBob.lessThanOrEqual=" + SMALLER_LONG_MIN_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByLongMinBobIsLessThanSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where longMinBob is less than DEFAULT_LONG_MIN_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("longMinBob.lessThan=" + DEFAULT_LONG_MIN_BOB);

        // Get all the fieldTestServiceClassEntityList where longMinBob is less than UPDATED_LONG_MIN_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("longMinBob.lessThan=" + UPDATED_LONG_MIN_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByLongMinBobIsGreaterThanSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where longMinBob is greater than DEFAULT_LONG_MIN_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("longMinBob.greaterThan=" + DEFAULT_LONG_MIN_BOB);

        // Get all the fieldTestServiceClassEntityList where longMinBob is greater than SMALLER_LONG_MIN_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("longMinBob.greaterThan=" + SMALLER_LONG_MIN_BOB);
    }


    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByLongMaxBobIsEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where longMaxBob equals to DEFAULT_LONG_MAX_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("longMaxBob.equals=" + DEFAULT_LONG_MAX_BOB);

        // Get all the fieldTestServiceClassEntityList where longMaxBob equals to UPDATED_LONG_MAX_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("longMaxBob.equals=" + UPDATED_LONG_MAX_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByLongMaxBobIsNotEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where longMaxBob not equals to DEFAULT_LONG_MAX_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("longMaxBob.notEquals=" + DEFAULT_LONG_MAX_BOB);

        // Get all the fieldTestServiceClassEntityList where longMaxBob not equals to UPDATED_LONG_MAX_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("longMaxBob.notEquals=" + UPDATED_LONG_MAX_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByLongMaxBobIsInShouldWork() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where longMaxBob in DEFAULT_LONG_MAX_BOB or UPDATED_LONG_MAX_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("longMaxBob.in=" + DEFAULT_LONG_MAX_BOB + "," + UPDATED_LONG_MAX_BOB);

        // Get all the fieldTestServiceClassEntityList where longMaxBob equals to UPDATED_LONG_MAX_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("longMaxBob.in=" + UPDATED_LONG_MAX_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByLongMaxBobIsNullOrNotNull() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where longMaxBob is not null
        defaultFieldTestServiceClassEntityShouldBeFound("longMaxBob.specified=true");

        // Get all the fieldTestServiceClassEntityList where longMaxBob is null
        defaultFieldTestServiceClassEntityShouldNotBeFound("longMaxBob.specified=false");
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByLongMaxBobIsGreaterThanOrEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where longMaxBob is greater than or equal to DEFAULT_LONG_MAX_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("longMaxBob.greaterThanOrEqual=" + DEFAULT_LONG_MAX_BOB);

        // Get all the fieldTestServiceClassEntityList where longMaxBob is greater than or equal to (DEFAULT_LONG_MAX_BOB + 1)
        defaultFieldTestServiceClassEntityShouldNotBeFound("longMaxBob.greaterThanOrEqual=" + (DEFAULT_LONG_MAX_BOB + 1));
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByLongMaxBobIsLessThanOrEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where longMaxBob is less than or equal to DEFAULT_LONG_MAX_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("longMaxBob.lessThanOrEqual=" + DEFAULT_LONG_MAX_BOB);

        // Get all the fieldTestServiceClassEntityList where longMaxBob is less than or equal to SMALLER_LONG_MAX_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("longMaxBob.lessThanOrEqual=" + SMALLER_LONG_MAX_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByLongMaxBobIsLessThanSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where longMaxBob is less than DEFAULT_LONG_MAX_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("longMaxBob.lessThan=" + DEFAULT_LONG_MAX_BOB);

        // Get all the fieldTestServiceClassEntityList where longMaxBob is less than (DEFAULT_LONG_MAX_BOB + 1)
        defaultFieldTestServiceClassEntityShouldBeFound("longMaxBob.lessThan=" + (DEFAULT_LONG_MAX_BOB + 1));
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByLongMaxBobIsGreaterThanSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where longMaxBob is greater than DEFAULT_LONG_MAX_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("longMaxBob.greaterThan=" + DEFAULT_LONG_MAX_BOB);

        // Get all the fieldTestServiceClassEntityList where longMaxBob is greater than SMALLER_LONG_MAX_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("longMaxBob.greaterThan=" + SMALLER_LONG_MAX_BOB);
    }


    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByFloatBobIsEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where floatBob equals to DEFAULT_FLOAT_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("floatBob.equals=" + DEFAULT_FLOAT_BOB);

        // Get all the fieldTestServiceClassEntityList where floatBob equals to UPDATED_FLOAT_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("floatBob.equals=" + UPDATED_FLOAT_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByFloatBobIsNotEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where floatBob not equals to DEFAULT_FLOAT_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("floatBob.notEquals=" + DEFAULT_FLOAT_BOB);

        // Get all the fieldTestServiceClassEntityList where floatBob not equals to UPDATED_FLOAT_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("floatBob.notEquals=" + UPDATED_FLOAT_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByFloatBobIsInShouldWork() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where floatBob in DEFAULT_FLOAT_BOB or UPDATED_FLOAT_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("floatBob.in=" + DEFAULT_FLOAT_BOB + "," + UPDATED_FLOAT_BOB);

        // Get all the fieldTestServiceClassEntityList where floatBob equals to UPDATED_FLOAT_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("floatBob.in=" + UPDATED_FLOAT_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByFloatBobIsNullOrNotNull() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where floatBob is not null
        defaultFieldTestServiceClassEntityShouldBeFound("floatBob.specified=true");

        // Get all the fieldTestServiceClassEntityList where floatBob is null
        defaultFieldTestServiceClassEntityShouldNotBeFound("floatBob.specified=false");
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByFloatBobIsGreaterThanOrEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where floatBob is greater than or equal to DEFAULT_FLOAT_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("floatBob.greaterThanOrEqual=" + DEFAULT_FLOAT_BOB);

        // Get all the fieldTestServiceClassEntityList where floatBob is greater than or equal to UPDATED_FLOAT_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("floatBob.greaterThanOrEqual=" + UPDATED_FLOAT_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByFloatBobIsLessThanOrEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where floatBob is less than or equal to DEFAULT_FLOAT_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("floatBob.lessThanOrEqual=" + DEFAULT_FLOAT_BOB);

        // Get all the fieldTestServiceClassEntityList where floatBob is less than or equal to SMALLER_FLOAT_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("floatBob.lessThanOrEqual=" + SMALLER_FLOAT_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByFloatBobIsLessThanSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where floatBob is less than DEFAULT_FLOAT_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("floatBob.lessThan=" + DEFAULT_FLOAT_BOB);

        // Get all the fieldTestServiceClassEntityList where floatBob is less than UPDATED_FLOAT_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("floatBob.lessThan=" + UPDATED_FLOAT_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByFloatBobIsGreaterThanSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where floatBob is greater than DEFAULT_FLOAT_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("floatBob.greaterThan=" + DEFAULT_FLOAT_BOB);

        // Get all the fieldTestServiceClassEntityList where floatBob is greater than SMALLER_FLOAT_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("floatBob.greaterThan=" + SMALLER_FLOAT_BOB);
    }


    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByFloatRequiredBobIsEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where floatRequiredBob equals to DEFAULT_FLOAT_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("floatRequiredBob.equals=" + DEFAULT_FLOAT_REQUIRED_BOB);

        // Get all the fieldTestServiceClassEntityList where floatRequiredBob equals to UPDATED_FLOAT_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("floatRequiredBob.equals=" + UPDATED_FLOAT_REQUIRED_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByFloatRequiredBobIsNotEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where floatRequiredBob not equals to DEFAULT_FLOAT_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("floatRequiredBob.notEquals=" + DEFAULT_FLOAT_REQUIRED_BOB);

        // Get all the fieldTestServiceClassEntityList where floatRequiredBob not equals to UPDATED_FLOAT_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("floatRequiredBob.notEquals=" + UPDATED_FLOAT_REQUIRED_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByFloatRequiredBobIsInShouldWork() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where floatRequiredBob in DEFAULT_FLOAT_REQUIRED_BOB or UPDATED_FLOAT_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("floatRequiredBob.in=" + DEFAULT_FLOAT_REQUIRED_BOB + "," + UPDATED_FLOAT_REQUIRED_BOB);

        // Get all the fieldTestServiceClassEntityList where floatRequiredBob equals to UPDATED_FLOAT_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("floatRequiredBob.in=" + UPDATED_FLOAT_REQUIRED_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByFloatRequiredBobIsNullOrNotNull() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where floatRequiredBob is not null
        defaultFieldTestServiceClassEntityShouldBeFound("floatRequiredBob.specified=true");

        // Get all the fieldTestServiceClassEntityList where floatRequiredBob is null
        defaultFieldTestServiceClassEntityShouldNotBeFound("floatRequiredBob.specified=false");
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByFloatRequiredBobIsGreaterThanOrEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where floatRequiredBob is greater than or equal to DEFAULT_FLOAT_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("floatRequiredBob.greaterThanOrEqual=" + DEFAULT_FLOAT_REQUIRED_BOB);

        // Get all the fieldTestServiceClassEntityList where floatRequiredBob is greater than or equal to UPDATED_FLOAT_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("floatRequiredBob.greaterThanOrEqual=" + UPDATED_FLOAT_REQUIRED_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByFloatRequiredBobIsLessThanOrEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where floatRequiredBob is less than or equal to DEFAULT_FLOAT_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("floatRequiredBob.lessThanOrEqual=" + DEFAULT_FLOAT_REQUIRED_BOB);

        // Get all the fieldTestServiceClassEntityList where floatRequiredBob is less than or equal to SMALLER_FLOAT_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("floatRequiredBob.lessThanOrEqual=" + SMALLER_FLOAT_REQUIRED_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByFloatRequiredBobIsLessThanSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where floatRequiredBob is less than DEFAULT_FLOAT_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("floatRequiredBob.lessThan=" + DEFAULT_FLOAT_REQUIRED_BOB);

        // Get all the fieldTestServiceClassEntityList where floatRequiredBob is less than UPDATED_FLOAT_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("floatRequiredBob.lessThan=" + UPDATED_FLOAT_REQUIRED_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByFloatRequiredBobIsGreaterThanSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where floatRequiredBob is greater than DEFAULT_FLOAT_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("floatRequiredBob.greaterThan=" + DEFAULT_FLOAT_REQUIRED_BOB);

        // Get all the fieldTestServiceClassEntityList where floatRequiredBob is greater than SMALLER_FLOAT_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("floatRequiredBob.greaterThan=" + SMALLER_FLOAT_REQUIRED_BOB);
    }


    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByFloatMinBobIsEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where floatMinBob equals to DEFAULT_FLOAT_MIN_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("floatMinBob.equals=" + DEFAULT_FLOAT_MIN_BOB);

        // Get all the fieldTestServiceClassEntityList where floatMinBob equals to UPDATED_FLOAT_MIN_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("floatMinBob.equals=" + UPDATED_FLOAT_MIN_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByFloatMinBobIsNotEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where floatMinBob not equals to DEFAULT_FLOAT_MIN_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("floatMinBob.notEquals=" + DEFAULT_FLOAT_MIN_BOB);

        // Get all the fieldTestServiceClassEntityList where floatMinBob not equals to UPDATED_FLOAT_MIN_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("floatMinBob.notEquals=" + UPDATED_FLOAT_MIN_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByFloatMinBobIsInShouldWork() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where floatMinBob in DEFAULT_FLOAT_MIN_BOB or UPDATED_FLOAT_MIN_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("floatMinBob.in=" + DEFAULT_FLOAT_MIN_BOB + "," + UPDATED_FLOAT_MIN_BOB);

        // Get all the fieldTestServiceClassEntityList where floatMinBob equals to UPDATED_FLOAT_MIN_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("floatMinBob.in=" + UPDATED_FLOAT_MIN_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByFloatMinBobIsNullOrNotNull() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where floatMinBob is not null
        defaultFieldTestServiceClassEntityShouldBeFound("floatMinBob.specified=true");

        // Get all the fieldTestServiceClassEntityList where floatMinBob is null
        defaultFieldTestServiceClassEntityShouldNotBeFound("floatMinBob.specified=false");
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByFloatMinBobIsGreaterThanOrEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where floatMinBob is greater than or equal to DEFAULT_FLOAT_MIN_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("floatMinBob.greaterThanOrEqual=" + DEFAULT_FLOAT_MIN_BOB);

        // Get all the fieldTestServiceClassEntityList where floatMinBob is greater than or equal to UPDATED_FLOAT_MIN_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("floatMinBob.greaterThanOrEqual=" + UPDATED_FLOAT_MIN_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByFloatMinBobIsLessThanOrEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where floatMinBob is less than or equal to DEFAULT_FLOAT_MIN_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("floatMinBob.lessThanOrEqual=" + DEFAULT_FLOAT_MIN_BOB);

        // Get all the fieldTestServiceClassEntityList where floatMinBob is less than or equal to SMALLER_FLOAT_MIN_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("floatMinBob.lessThanOrEqual=" + SMALLER_FLOAT_MIN_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByFloatMinBobIsLessThanSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where floatMinBob is less than DEFAULT_FLOAT_MIN_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("floatMinBob.lessThan=" + DEFAULT_FLOAT_MIN_BOB);

        // Get all the fieldTestServiceClassEntityList where floatMinBob is less than UPDATED_FLOAT_MIN_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("floatMinBob.lessThan=" + UPDATED_FLOAT_MIN_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByFloatMinBobIsGreaterThanSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where floatMinBob is greater than DEFAULT_FLOAT_MIN_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("floatMinBob.greaterThan=" + DEFAULT_FLOAT_MIN_BOB);

        // Get all the fieldTestServiceClassEntityList where floatMinBob is greater than SMALLER_FLOAT_MIN_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("floatMinBob.greaterThan=" + SMALLER_FLOAT_MIN_BOB);
    }


    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByFloatMaxBobIsEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where floatMaxBob equals to DEFAULT_FLOAT_MAX_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("floatMaxBob.equals=" + DEFAULT_FLOAT_MAX_BOB);

        // Get all the fieldTestServiceClassEntityList where floatMaxBob equals to UPDATED_FLOAT_MAX_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("floatMaxBob.equals=" + UPDATED_FLOAT_MAX_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByFloatMaxBobIsNotEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where floatMaxBob not equals to DEFAULT_FLOAT_MAX_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("floatMaxBob.notEquals=" + DEFAULT_FLOAT_MAX_BOB);

        // Get all the fieldTestServiceClassEntityList where floatMaxBob not equals to UPDATED_FLOAT_MAX_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("floatMaxBob.notEquals=" + UPDATED_FLOAT_MAX_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByFloatMaxBobIsInShouldWork() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where floatMaxBob in DEFAULT_FLOAT_MAX_BOB or UPDATED_FLOAT_MAX_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("floatMaxBob.in=" + DEFAULT_FLOAT_MAX_BOB + "," + UPDATED_FLOAT_MAX_BOB);

        // Get all the fieldTestServiceClassEntityList where floatMaxBob equals to UPDATED_FLOAT_MAX_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("floatMaxBob.in=" + UPDATED_FLOAT_MAX_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByFloatMaxBobIsNullOrNotNull() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where floatMaxBob is not null
        defaultFieldTestServiceClassEntityShouldBeFound("floatMaxBob.specified=true");

        // Get all the fieldTestServiceClassEntityList where floatMaxBob is null
        defaultFieldTestServiceClassEntityShouldNotBeFound("floatMaxBob.specified=false");
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByFloatMaxBobIsGreaterThanOrEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where floatMaxBob is greater than or equal to DEFAULT_FLOAT_MAX_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("floatMaxBob.greaterThanOrEqual=" + DEFAULT_FLOAT_MAX_BOB);

        // Get all the fieldTestServiceClassEntityList where floatMaxBob is greater than or equal to (DEFAULT_FLOAT_MAX_BOB + 1)
        defaultFieldTestServiceClassEntityShouldNotBeFound("floatMaxBob.greaterThanOrEqual=" + (DEFAULT_FLOAT_MAX_BOB + 1));
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByFloatMaxBobIsLessThanOrEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where floatMaxBob is less than or equal to DEFAULT_FLOAT_MAX_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("floatMaxBob.lessThanOrEqual=" + DEFAULT_FLOAT_MAX_BOB);

        // Get all the fieldTestServiceClassEntityList where floatMaxBob is less than or equal to SMALLER_FLOAT_MAX_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("floatMaxBob.lessThanOrEqual=" + SMALLER_FLOAT_MAX_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByFloatMaxBobIsLessThanSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where floatMaxBob is less than DEFAULT_FLOAT_MAX_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("floatMaxBob.lessThan=" + DEFAULT_FLOAT_MAX_BOB);

        // Get all the fieldTestServiceClassEntityList where floatMaxBob is less than (DEFAULT_FLOAT_MAX_BOB + 1)
        defaultFieldTestServiceClassEntityShouldBeFound("floatMaxBob.lessThan=" + (DEFAULT_FLOAT_MAX_BOB + 1));
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByFloatMaxBobIsGreaterThanSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where floatMaxBob is greater than DEFAULT_FLOAT_MAX_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("floatMaxBob.greaterThan=" + DEFAULT_FLOAT_MAX_BOB);

        // Get all the fieldTestServiceClassEntityList where floatMaxBob is greater than SMALLER_FLOAT_MAX_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("floatMaxBob.greaterThan=" + SMALLER_FLOAT_MAX_BOB);
    }


    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByDoubleRequiredBobIsEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where doubleRequiredBob equals to DEFAULT_DOUBLE_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("doubleRequiredBob.equals=" + DEFAULT_DOUBLE_REQUIRED_BOB);

        // Get all the fieldTestServiceClassEntityList where doubleRequiredBob equals to UPDATED_DOUBLE_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("doubleRequiredBob.equals=" + UPDATED_DOUBLE_REQUIRED_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByDoubleRequiredBobIsNotEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where doubleRequiredBob not equals to DEFAULT_DOUBLE_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("doubleRequiredBob.notEquals=" + DEFAULT_DOUBLE_REQUIRED_BOB);

        // Get all the fieldTestServiceClassEntityList where doubleRequiredBob not equals to UPDATED_DOUBLE_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("doubleRequiredBob.notEquals=" + UPDATED_DOUBLE_REQUIRED_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByDoubleRequiredBobIsInShouldWork() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where doubleRequiredBob in DEFAULT_DOUBLE_REQUIRED_BOB or UPDATED_DOUBLE_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("doubleRequiredBob.in=" + DEFAULT_DOUBLE_REQUIRED_BOB + "," + UPDATED_DOUBLE_REQUIRED_BOB);

        // Get all the fieldTestServiceClassEntityList where doubleRequiredBob equals to UPDATED_DOUBLE_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("doubleRequiredBob.in=" + UPDATED_DOUBLE_REQUIRED_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByDoubleRequiredBobIsNullOrNotNull() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where doubleRequiredBob is not null
        defaultFieldTestServiceClassEntityShouldBeFound("doubleRequiredBob.specified=true");

        // Get all the fieldTestServiceClassEntityList where doubleRequiredBob is null
        defaultFieldTestServiceClassEntityShouldNotBeFound("doubleRequiredBob.specified=false");
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByDoubleRequiredBobIsGreaterThanOrEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where doubleRequiredBob is greater than or equal to DEFAULT_DOUBLE_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("doubleRequiredBob.greaterThanOrEqual=" + DEFAULT_DOUBLE_REQUIRED_BOB);

        // Get all the fieldTestServiceClassEntityList where doubleRequiredBob is greater than or equal to UPDATED_DOUBLE_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("doubleRequiredBob.greaterThanOrEqual=" + UPDATED_DOUBLE_REQUIRED_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByDoubleRequiredBobIsLessThanOrEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where doubleRequiredBob is less than or equal to DEFAULT_DOUBLE_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("doubleRequiredBob.lessThanOrEqual=" + DEFAULT_DOUBLE_REQUIRED_BOB);

        // Get all the fieldTestServiceClassEntityList where doubleRequiredBob is less than or equal to SMALLER_DOUBLE_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("doubleRequiredBob.lessThanOrEqual=" + SMALLER_DOUBLE_REQUIRED_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByDoubleRequiredBobIsLessThanSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where doubleRequiredBob is less than DEFAULT_DOUBLE_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("doubleRequiredBob.lessThan=" + DEFAULT_DOUBLE_REQUIRED_BOB);

        // Get all the fieldTestServiceClassEntityList where doubleRequiredBob is less than UPDATED_DOUBLE_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("doubleRequiredBob.lessThan=" + UPDATED_DOUBLE_REQUIRED_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByDoubleRequiredBobIsGreaterThanSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where doubleRequiredBob is greater than DEFAULT_DOUBLE_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("doubleRequiredBob.greaterThan=" + DEFAULT_DOUBLE_REQUIRED_BOB);

        // Get all the fieldTestServiceClassEntityList where doubleRequiredBob is greater than SMALLER_DOUBLE_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("doubleRequiredBob.greaterThan=" + SMALLER_DOUBLE_REQUIRED_BOB);
    }


    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByDoubleMinBobIsEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where doubleMinBob equals to DEFAULT_DOUBLE_MIN_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("doubleMinBob.equals=" + DEFAULT_DOUBLE_MIN_BOB);

        // Get all the fieldTestServiceClassEntityList where doubleMinBob equals to UPDATED_DOUBLE_MIN_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("doubleMinBob.equals=" + UPDATED_DOUBLE_MIN_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByDoubleMinBobIsNotEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where doubleMinBob not equals to DEFAULT_DOUBLE_MIN_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("doubleMinBob.notEquals=" + DEFAULT_DOUBLE_MIN_BOB);

        // Get all the fieldTestServiceClassEntityList where doubleMinBob not equals to UPDATED_DOUBLE_MIN_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("doubleMinBob.notEquals=" + UPDATED_DOUBLE_MIN_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByDoubleMinBobIsInShouldWork() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where doubleMinBob in DEFAULT_DOUBLE_MIN_BOB or UPDATED_DOUBLE_MIN_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("doubleMinBob.in=" + DEFAULT_DOUBLE_MIN_BOB + "," + UPDATED_DOUBLE_MIN_BOB);

        // Get all the fieldTestServiceClassEntityList where doubleMinBob equals to UPDATED_DOUBLE_MIN_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("doubleMinBob.in=" + UPDATED_DOUBLE_MIN_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByDoubleMinBobIsNullOrNotNull() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where doubleMinBob is not null
        defaultFieldTestServiceClassEntityShouldBeFound("doubleMinBob.specified=true");

        // Get all the fieldTestServiceClassEntityList where doubleMinBob is null
        defaultFieldTestServiceClassEntityShouldNotBeFound("doubleMinBob.specified=false");
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByDoubleMinBobIsGreaterThanOrEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where doubleMinBob is greater than or equal to DEFAULT_DOUBLE_MIN_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("doubleMinBob.greaterThanOrEqual=" + DEFAULT_DOUBLE_MIN_BOB);

        // Get all the fieldTestServiceClassEntityList where doubleMinBob is greater than or equal to UPDATED_DOUBLE_MIN_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("doubleMinBob.greaterThanOrEqual=" + UPDATED_DOUBLE_MIN_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByDoubleMinBobIsLessThanOrEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where doubleMinBob is less than or equal to DEFAULT_DOUBLE_MIN_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("doubleMinBob.lessThanOrEqual=" + DEFAULT_DOUBLE_MIN_BOB);

        // Get all the fieldTestServiceClassEntityList where doubleMinBob is less than or equal to SMALLER_DOUBLE_MIN_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("doubleMinBob.lessThanOrEqual=" + SMALLER_DOUBLE_MIN_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByDoubleMinBobIsLessThanSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where doubleMinBob is less than DEFAULT_DOUBLE_MIN_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("doubleMinBob.lessThan=" + DEFAULT_DOUBLE_MIN_BOB);

        // Get all the fieldTestServiceClassEntityList where doubleMinBob is less than UPDATED_DOUBLE_MIN_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("doubleMinBob.lessThan=" + UPDATED_DOUBLE_MIN_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByDoubleMinBobIsGreaterThanSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where doubleMinBob is greater than DEFAULT_DOUBLE_MIN_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("doubleMinBob.greaterThan=" + DEFAULT_DOUBLE_MIN_BOB);

        // Get all the fieldTestServiceClassEntityList where doubleMinBob is greater than SMALLER_DOUBLE_MIN_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("doubleMinBob.greaterThan=" + SMALLER_DOUBLE_MIN_BOB);
    }


    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByDoubleMaxBobIsEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where doubleMaxBob equals to DEFAULT_DOUBLE_MAX_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("doubleMaxBob.equals=" + DEFAULT_DOUBLE_MAX_BOB);

        // Get all the fieldTestServiceClassEntityList where doubleMaxBob equals to UPDATED_DOUBLE_MAX_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("doubleMaxBob.equals=" + UPDATED_DOUBLE_MAX_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByDoubleMaxBobIsNotEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where doubleMaxBob not equals to DEFAULT_DOUBLE_MAX_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("doubleMaxBob.notEquals=" + DEFAULT_DOUBLE_MAX_BOB);

        // Get all the fieldTestServiceClassEntityList where doubleMaxBob not equals to UPDATED_DOUBLE_MAX_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("doubleMaxBob.notEquals=" + UPDATED_DOUBLE_MAX_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByDoubleMaxBobIsInShouldWork() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where doubleMaxBob in DEFAULT_DOUBLE_MAX_BOB or UPDATED_DOUBLE_MAX_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("doubleMaxBob.in=" + DEFAULT_DOUBLE_MAX_BOB + "," + UPDATED_DOUBLE_MAX_BOB);

        // Get all the fieldTestServiceClassEntityList where doubleMaxBob equals to UPDATED_DOUBLE_MAX_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("doubleMaxBob.in=" + UPDATED_DOUBLE_MAX_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByDoubleMaxBobIsNullOrNotNull() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where doubleMaxBob is not null
        defaultFieldTestServiceClassEntityShouldBeFound("doubleMaxBob.specified=true");

        // Get all the fieldTestServiceClassEntityList where doubleMaxBob is null
        defaultFieldTestServiceClassEntityShouldNotBeFound("doubleMaxBob.specified=false");
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByDoubleMaxBobIsGreaterThanOrEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where doubleMaxBob is greater than or equal to DEFAULT_DOUBLE_MAX_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("doubleMaxBob.greaterThanOrEqual=" + DEFAULT_DOUBLE_MAX_BOB);

        // Get all the fieldTestServiceClassEntityList where doubleMaxBob is greater than or equal to (DEFAULT_DOUBLE_MAX_BOB + 1)
        defaultFieldTestServiceClassEntityShouldNotBeFound("doubleMaxBob.greaterThanOrEqual=" + (DEFAULT_DOUBLE_MAX_BOB + 1));
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByDoubleMaxBobIsLessThanOrEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where doubleMaxBob is less than or equal to DEFAULT_DOUBLE_MAX_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("doubleMaxBob.lessThanOrEqual=" + DEFAULT_DOUBLE_MAX_BOB);

        // Get all the fieldTestServiceClassEntityList where doubleMaxBob is less than or equal to SMALLER_DOUBLE_MAX_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("doubleMaxBob.lessThanOrEqual=" + SMALLER_DOUBLE_MAX_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByDoubleMaxBobIsLessThanSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where doubleMaxBob is less than DEFAULT_DOUBLE_MAX_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("doubleMaxBob.lessThan=" + DEFAULT_DOUBLE_MAX_BOB);

        // Get all the fieldTestServiceClassEntityList where doubleMaxBob is less than (DEFAULT_DOUBLE_MAX_BOB + 1)
        defaultFieldTestServiceClassEntityShouldBeFound("doubleMaxBob.lessThan=" + (DEFAULT_DOUBLE_MAX_BOB + 1));
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByDoubleMaxBobIsGreaterThanSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where doubleMaxBob is greater than DEFAULT_DOUBLE_MAX_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("doubleMaxBob.greaterThan=" + DEFAULT_DOUBLE_MAX_BOB);

        // Get all the fieldTestServiceClassEntityList where doubleMaxBob is greater than SMALLER_DOUBLE_MAX_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("doubleMaxBob.greaterThan=" + SMALLER_DOUBLE_MAX_BOB);
    }


    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByBigDecimalRequiredBobIsEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where bigDecimalRequiredBob equals to DEFAULT_BIG_DECIMAL_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("bigDecimalRequiredBob.equals=" + DEFAULT_BIG_DECIMAL_REQUIRED_BOB);

        // Get all the fieldTestServiceClassEntityList where bigDecimalRequiredBob equals to UPDATED_BIG_DECIMAL_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("bigDecimalRequiredBob.equals=" + UPDATED_BIG_DECIMAL_REQUIRED_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByBigDecimalRequiredBobIsNotEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where bigDecimalRequiredBob not equals to DEFAULT_BIG_DECIMAL_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("bigDecimalRequiredBob.notEquals=" + DEFAULT_BIG_DECIMAL_REQUIRED_BOB);

        // Get all the fieldTestServiceClassEntityList where bigDecimalRequiredBob not equals to UPDATED_BIG_DECIMAL_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("bigDecimalRequiredBob.notEquals=" + UPDATED_BIG_DECIMAL_REQUIRED_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByBigDecimalRequiredBobIsInShouldWork() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where bigDecimalRequiredBob in DEFAULT_BIG_DECIMAL_REQUIRED_BOB or UPDATED_BIG_DECIMAL_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("bigDecimalRequiredBob.in=" + DEFAULT_BIG_DECIMAL_REQUIRED_BOB + "," + UPDATED_BIG_DECIMAL_REQUIRED_BOB);

        // Get all the fieldTestServiceClassEntityList where bigDecimalRequiredBob equals to UPDATED_BIG_DECIMAL_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("bigDecimalRequiredBob.in=" + UPDATED_BIG_DECIMAL_REQUIRED_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByBigDecimalRequiredBobIsNullOrNotNull() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where bigDecimalRequiredBob is not null
        defaultFieldTestServiceClassEntityShouldBeFound("bigDecimalRequiredBob.specified=true");

        // Get all the fieldTestServiceClassEntityList where bigDecimalRequiredBob is null
        defaultFieldTestServiceClassEntityShouldNotBeFound("bigDecimalRequiredBob.specified=false");
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByBigDecimalRequiredBobIsGreaterThanOrEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where bigDecimalRequiredBob is greater than or equal to DEFAULT_BIG_DECIMAL_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("bigDecimalRequiredBob.greaterThanOrEqual=" + DEFAULT_BIG_DECIMAL_REQUIRED_BOB);

        // Get all the fieldTestServiceClassEntityList where bigDecimalRequiredBob is greater than or equal to UPDATED_BIG_DECIMAL_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("bigDecimalRequiredBob.greaterThanOrEqual=" + UPDATED_BIG_DECIMAL_REQUIRED_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByBigDecimalRequiredBobIsLessThanOrEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where bigDecimalRequiredBob is less than or equal to DEFAULT_BIG_DECIMAL_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("bigDecimalRequiredBob.lessThanOrEqual=" + DEFAULT_BIG_DECIMAL_REQUIRED_BOB);

        // Get all the fieldTestServiceClassEntityList where bigDecimalRequiredBob is less than or equal to SMALLER_BIG_DECIMAL_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("bigDecimalRequiredBob.lessThanOrEqual=" + SMALLER_BIG_DECIMAL_REQUIRED_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByBigDecimalRequiredBobIsLessThanSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where bigDecimalRequiredBob is less than DEFAULT_BIG_DECIMAL_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("bigDecimalRequiredBob.lessThan=" + DEFAULT_BIG_DECIMAL_REQUIRED_BOB);

        // Get all the fieldTestServiceClassEntityList where bigDecimalRequiredBob is less than UPDATED_BIG_DECIMAL_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("bigDecimalRequiredBob.lessThan=" + UPDATED_BIG_DECIMAL_REQUIRED_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByBigDecimalRequiredBobIsGreaterThanSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where bigDecimalRequiredBob is greater than DEFAULT_BIG_DECIMAL_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("bigDecimalRequiredBob.greaterThan=" + DEFAULT_BIG_DECIMAL_REQUIRED_BOB);

        // Get all the fieldTestServiceClassEntityList where bigDecimalRequiredBob is greater than SMALLER_BIG_DECIMAL_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("bigDecimalRequiredBob.greaterThan=" + SMALLER_BIG_DECIMAL_REQUIRED_BOB);
    }


    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByBigDecimalMinBobIsEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where bigDecimalMinBob equals to DEFAULT_BIG_DECIMAL_MIN_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("bigDecimalMinBob.equals=" + DEFAULT_BIG_DECIMAL_MIN_BOB);

        // Get all the fieldTestServiceClassEntityList where bigDecimalMinBob equals to UPDATED_BIG_DECIMAL_MIN_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("bigDecimalMinBob.equals=" + UPDATED_BIG_DECIMAL_MIN_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByBigDecimalMinBobIsNotEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where bigDecimalMinBob not equals to DEFAULT_BIG_DECIMAL_MIN_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("bigDecimalMinBob.notEquals=" + DEFAULT_BIG_DECIMAL_MIN_BOB);

        // Get all the fieldTestServiceClassEntityList where bigDecimalMinBob not equals to UPDATED_BIG_DECIMAL_MIN_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("bigDecimalMinBob.notEquals=" + UPDATED_BIG_DECIMAL_MIN_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByBigDecimalMinBobIsInShouldWork() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where bigDecimalMinBob in DEFAULT_BIG_DECIMAL_MIN_BOB or UPDATED_BIG_DECIMAL_MIN_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("bigDecimalMinBob.in=" + DEFAULT_BIG_DECIMAL_MIN_BOB + "," + UPDATED_BIG_DECIMAL_MIN_BOB);

        // Get all the fieldTestServiceClassEntityList where bigDecimalMinBob equals to UPDATED_BIG_DECIMAL_MIN_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("bigDecimalMinBob.in=" + UPDATED_BIG_DECIMAL_MIN_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByBigDecimalMinBobIsNullOrNotNull() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where bigDecimalMinBob is not null
        defaultFieldTestServiceClassEntityShouldBeFound("bigDecimalMinBob.specified=true");

        // Get all the fieldTestServiceClassEntityList where bigDecimalMinBob is null
        defaultFieldTestServiceClassEntityShouldNotBeFound("bigDecimalMinBob.specified=false");
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByBigDecimalMinBobIsGreaterThanOrEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where bigDecimalMinBob is greater than or equal to DEFAULT_BIG_DECIMAL_MIN_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("bigDecimalMinBob.greaterThanOrEqual=" + DEFAULT_BIG_DECIMAL_MIN_BOB);

        // Get all the fieldTestServiceClassEntityList where bigDecimalMinBob is greater than or equal to UPDATED_BIG_DECIMAL_MIN_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("bigDecimalMinBob.greaterThanOrEqual=" + UPDATED_BIG_DECIMAL_MIN_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByBigDecimalMinBobIsLessThanOrEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where bigDecimalMinBob is less than or equal to DEFAULT_BIG_DECIMAL_MIN_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("bigDecimalMinBob.lessThanOrEqual=" + DEFAULT_BIG_DECIMAL_MIN_BOB);

        // Get all the fieldTestServiceClassEntityList where bigDecimalMinBob is less than or equal to SMALLER_BIG_DECIMAL_MIN_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("bigDecimalMinBob.lessThanOrEqual=" + SMALLER_BIG_DECIMAL_MIN_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByBigDecimalMinBobIsLessThanSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where bigDecimalMinBob is less than DEFAULT_BIG_DECIMAL_MIN_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("bigDecimalMinBob.lessThan=" + DEFAULT_BIG_DECIMAL_MIN_BOB);

        // Get all the fieldTestServiceClassEntityList where bigDecimalMinBob is less than UPDATED_BIG_DECIMAL_MIN_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("bigDecimalMinBob.lessThan=" + UPDATED_BIG_DECIMAL_MIN_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByBigDecimalMinBobIsGreaterThanSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where bigDecimalMinBob is greater than DEFAULT_BIG_DECIMAL_MIN_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("bigDecimalMinBob.greaterThan=" + DEFAULT_BIG_DECIMAL_MIN_BOB);

        // Get all the fieldTestServiceClassEntityList where bigDecimalMinBob is greater than SMALLER_BIG_DECIMAL_MIN_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("bigDecimalMinBob.greaterThan=" + SMALLER_BIG_DECIMAL_MIN_BOB);
    }


    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByBigDecimalMaxBobIsEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where bigDecimalMaxBob equals to DEFAULT_BIG_DECIMAL_MAX_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("bigDecimalMaxBob.equals=" + DEFAULT_BIG_DECIMAL_MAX_BOB);

        // Get all the fieldTestServiceClassEntityList where bigDecimalMaxBob equals to UPDATED_BIG_DECIMAL_MAX_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("bigDecimalMaxBob.equals=" + UPDATED_BIG_DECIMAL_MAX_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByBigDecimalMaxBobIsNotEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where bigDecimalMaxBob not equals to DEFAULT_BIG_DECIMAL_MAX_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("bigDecimalMaxBob.notEquals=" + DEFAULT_BIG_DECIMAL_MAX_BOB);

        // Get all the fieldTestServiceClassEntityList where bigDecimalMaxBob not equals to UPDATED_BIG_DECIMAL_MAX_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("bigDecimalMaxBob.notEquals=" + UPDATED_BIG_DECIMAL_MAX_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByBigDecimalMaxBobIsInShouldWork() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where bigDecimalMaxBob in DEFAULT_BIG_DECIMAL_MAX_BOB or UPDATED_BIG_DECIMAL_MAX_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("bigDecimalMaxBob.in=" + DEFAULT_BIG_DECIMAL_MAX_BOB + "," + UPDATED_BIG_DECIMAL_MAX_BOB);

        // Get all the fieldTestServiceClassEntityList where bigDecimalMaxBob equals to UPDATED_BIG_DECIMAL_MAX_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("bigDecimalMaxBob.in=" + UPDATED_BIG_DECIMAL_MAX_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByBigDecimalMaxBobIsNullOrNotNull() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where bigDecimalMaxBob is not null
        defaultFieldTestServiceClassEntityShouldBeFound("bigDecimalMaxBob.specified=true");

        // Get all the fieldTestServiceClassEntityList where bigDecimalMaxBob is null
        defaultFieldTestServiceClassEntityShouldNotBeFound("bigDecimalMaxBob.specified=false");
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByBigDecimalMaxBobIsGreaterThanOrEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where bigDecimalMaxBob is greater than or equal to DEFAULT_BIG_DECIMAL_MAX_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("bigDecimalMaxBob.greaterThanOrEqual=" + DEFAULT_BIG_DECIMAL_MAX_BOB);

        // Get all the fieldTestServiceClassEntityList where bigDecimalMaxBob is greater than or equal to (DEFAULT_BIG_DECIMAL_MAX_BOB.add(BigDecimal.ONE))
        defaultFieldTestServiceClassEntityShouldNotBeFound("bigDecimalMaxBob.greaterThanOrEqual=" + (DEFAULT_BIG_DECIMAL_MAX_BOB.add(BigDecimal.ONE)));
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByBigDecimalMaxBobIsLessThanOrEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where bigDecimalMaxBob is less than or equal to DEFAULT_BIG_DECIMAL_MAX_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("bigDecimalMaxBob.lessThanOrEqual=" + DEFAULT_BIG_DECIMAL_MAX_BOB);

        // Get all the fieldTestServiceClassEntityList where bigDecimalMaxBob is less than or equal to SMALLER_BIG_DECIMAL_MAX_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("bigDecimalMaxBob.lessThanOrEqual=" + SMALLER_BIG_DECIMAL_MAX_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByBigDecimalMaxBobIsLessThanSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where bigDecimalMaxBob is less than DEFAULT_BIG_DECIMAL_MAX_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("bigDecimalMaxBob.lessThan=" + DEFAULT_BIG_DECIMAL_MAX_BOB);

        // Get all the fieldTestServiceClassEntityList where bigDecimalMaxBob is less than (DEFAULT_BIG_DECIMAL_MAX_BOB.add(BigDecimal.ONE))
        defaultFieldTestServiceClassEntityShouldBeFound("bigDecimalMaxBob.lessThan=" + (DEFAULT_BIG_DECIMAL_MAX_BOB.add(BigDecimal.ONE)));
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByBigDecimalMaxBobIsGreaterThanSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where bigDecimalMaxBob is greater than DEFAULT_BIG_DECIMAL_MAX_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("bigDecimalMaxBob.greaterThan=" + DEFAULT_BIG_DECIMAL_MAX_BOB);

        // Get all the fieldTestServiceClassEntityList where bigDecimalMaxBob is greater than SMALLER_BIG_DECIMAL_MAX_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("bigDecimalMaxBob.greaterThan=" + SMALLER_BIG_DECIMAL_MAX_BOB);
    }


    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByLocalDateBobIsEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where localDateBob equals to DEFAULT_LOCAL_DATE_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("localDateBob.equals=" + DEFAULT_LOCAL_DATE_BOB);

        // Get all the fieldTestServiceClassEntityList where localDateBob equals to UPDATED_LOCAL_DATE_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("localDateBob.equals=" + UPDATED_LOCAL_DATE_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByLocalDateBobIsNotEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where localDateBob not equals to DEFAULT_LOCAL_DATE_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("localDateBob.notEquals=" + DEFAULT_LOCAL_DATE_BOB);

        // Get all the fieldTestServiceClassEntityList where localDateBob not equals to UPDATED_LOCAL_DATE_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("localDateBob.notEquals=" + UPDATED_LOCAL_DATE_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByLocalDateBobIsInShouldWork() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where localDateBob in DEFAULT_LOCAL_DATE_BOB or UPDATED_LOCAL_DATE_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("localDateBob.in=" + DEFAULT_LOCAL_DATE_BOB + "," + UPDATED_LOCAL_DATE_BOB);

        // Get all the fieldTestServiceClassEntityList where localDateBob equals to UPDATED_LOCAL_DATE_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("localDateBob.in=" + UPDATED_LOCAL_DATE_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByLocalDateBobIsNullOrNotNull() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where localDateBob is not null
        defaultFieldTestServiceClassEntityShouldBeFound("localDateBob.specified=true");

        // Get all the fieldTestServiceClassEntityList where localDateBob is null
        defaultFieldTestServiceClassEntityShouldNotBeFound("localDateBob.specified=false");
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByLocalDateBobIsGreaterThanOrEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where localDateBob is greater than or equal to DEFAULT_LOCAL_DATE_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("localDateBob.greaterThanOrEqual=" + DEFAULT_LOCAL_DATE_BOB);

        // Get all the fieldTestServiceClassEntityList where localDateBob is greater than or equal to UPDATED_LOCAL_DATE_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("localDateBob.greaterThanOrEqual=" + UPDATED_LOCAL_DATE_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByLocalDateBobIsLessThanOrEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where localDateBob is less than or equal to DEFAULT_LOCAL_DATE_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("localDateBob.lessThanOrEqual=" + DEFAULT_LOCAL_DATE_BOB);

        // Get all the fieldTestServiceClassEntityList where localDateBob is less than or equal to SMALLER_LOCAL_DATE_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("localDateBob.lessThanOrEqual=" + SMALLER_LOCAL_DATE_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByLocalDateBobIsLessThanSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where localDateBob is less than DEFAULT_LOCAL_DATE_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("localDateBob.lessThan=" + DEFAULT_LOCAL_DATE_BOB);

        // Get all the fieldTestServiceClassEntityList where localDateBob is less than UPDATED_LOCAL_DATE_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("localDateBob.lessThan=" + UPDATED_LOCAL_DATE_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByLocalDateBobIsGreaterThanSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where localDateBob is greater than DEFAULT_LOCAL_DATE_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("localDateBob.greaterThan=" + DEFAULT_LOCAL_DATE_BOB);

        // Get all the fieldTestServiceClassEntityList where localDateBob is greater than SMALLER_LOCAL_DATE_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("localDateBob.greaterThan=" + SMALLER_LOCAL_DATE_BOB);
    }


    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByLocalDateRequiredBobIsEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where localDateRequiredBob equals to DEFAULT_LOCAL_DATE_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("localDateRequiredBob.equals=" + DEFAULT_LOCAL_DATE_REQUIRED_BOB);

        // Get all the fieldTestServiceClassEntityList where localDateRequiredBob equals to UPDATED_LOCAL_DATE_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("localDateRequiredBob.equals=" + UPDATED_LOCAL_DATE_REQUIRED_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByLocalDateRequiredBobIsNotEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where localDateRequiredBob not equals to DEFAULT_LOCAL_DATE_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("localDateRequiredBob.notEquals=" + DEFAULT_LOCAL_DATE_REQUIRED_BOB);

        // Get all the fieldTestServiceClassEntityList where localDateRequiredBob not equals to UPDATED_LOCAL_DATE_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("localDateRequiredBob.notEquals=" + UPDATED_LOCAL_DATE_REQUIRED_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByLocalDateRequiredBobIsInShouldWork() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where localDateRequiredBob in DEFAULT_LOCAL_DATE_REQUIRED_BOB or UPDATED_LOCAL_DATE_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("localDateRequiredBob.in=" + DEFAULT_LOCAL_DATE_REQUIRED_BOB + "," + UPDATED_LOCAL_DATE_REQUIRED_BOB);

        // Get all the fieldTestServiceClassEntityList where localDateRequiredBob equals to UPDATED_LOCAL_DATE_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("localDateRequiredBob.in=" + UPDATED_LOCAL_DATE_REQUIRED_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByLocalDateRequiredBobIsNullOrNotNull() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where localDateRequiredBob is not null
        defaultFieldTestServiceClassEntityShouldBeFound("localDateRequiredBob.specified=true");

        // Get all the fieldTestServiceClassEntityList where localDateRequiredBob is null
        defaultFieldTestServiceClassEntityShouldNotBeFound("localDateRequiredBob.specified=false");
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByLocalDateRequiredBobIsGreaterThanOrEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where localDateRequiredBob is greater than or equal to DEFAULT_LOCAL_DATE_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("localDateRequiredBob.greaterThanOrEqual=" + DEFAULT_LOCAL_DATE_REQUIRED_BOB);

        // Get all the fieldTestServiceClassEntityList where localDateRequiredBob is greater than or equal to UPDATED_LOCAL_DATE_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("localDateRequiredBob.greaterThanOrEqual=" + UPDATED_LOCAL_DATE_REQUIRED_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByLocalDateRequiredBobIsLessThanOrEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where localDateRequiredBob is less than or equal to DEFAULT_LOCAL_DATE_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("localDateRequiredBob.lessThanOrEqual=" + DEFAULT_LOCAL_DATE_REQUIRED_BOB);

        // Get all the fieldTestServiceClassEntityList where localDateRequiredBob is less than or equal to SMALLER_LOCAL_DATE_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("localDateRequiredBob.lessThanOrEqual=" + SMALLER_LOCAL_DATE_REQUIRED_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByLocalDateRequiredBobIsLessThanSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where localDateRequiredBob is less than DEFAULT_LOCAL_DATE_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("localDateRequiredBob.lessThan=" + DEFAULT_LOCAL_DATE_REQUIRED_BOB);

        // Get all the fieldTestServiceClassEntityList where localDateRequiredBob is less than UPDATED_LOCAL_DATE_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("localDateRequiredBob.lessThan=" + UPDATED_LOCAL_DATE_REQUIRED_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByLocalDateRequiredBobIsGreaterThanSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where localDateRequiredBob is greater than DEFAULT_LOCAL_DATE_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("localDateRequiredBob.greaterThan=" + DEFAULT_LOCAL_DATE_REQUIRED_BOB);

        // Get all the fieldTestServiceClassEntityList where localDateRequiredBob is greater than SMALLER_LOCAL_DATE_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("localDateRequiredBob.greaterThan=" + SMALLER_LOCAL_DATE_REQUIRED_BOB);
    }


    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByInstantBobIsEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where instantBob equals to DEFAULT_INSTANT_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("instantBob.equals=" + DEFAULT_INSTANT_BOB);

        // Get all the fieldTestServiceClassEntityList where instantBob equals to UPDATED_INSTANT_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("instantBob.equals=" + UPDATED_INSTANT_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByInstantBobIsNotEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where instantBob not equals to DEFAULT_INSTANT_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("instantBob.notEquals=" + DEFAULT_INSTANT_BOB);

        // Get all the fieldTestServiceClassEntityList where instantBob not equals to UPDATED_INSTANT_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("instantBob.notEquals=" + UPDATED_INSTANT_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByInstantBobIsInShouldWork() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where instantBob in DEFAULT_INSTANT_BOB or UPDATED_INSTANT_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("instantBob.in=" + DEFAULT_INSTANT_BOB + "," + UPDATED_INSTANT_BOB);

        // Get all the fieldTestServiceClassEntityList where instantBob equals to UPDATED_INSTANT_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("instantBob.in=" + UPDATED_INSTANT_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByInstantBobIsNullOrNotNull() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where instantBob is not null
        defaultFieldTestServiceClassEntityShouldBeFound("instantBob.specified=true");

        // Get all the fieldTestServiceClassEntityList where instantBob is null
        defaultFieldTestServiceClassEntityShouldNotBeFound("instantBob.specified=false");
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByInstanteRequiredBobIsEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where instanteRequiredBob equals to DEFAULT_INSTANTE_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("instanteRequiredBob.equals=" + DEFAULT_INSTANTE_REQUIRED_BOB);

        // Get all the fieldTestServiceClassEntityList where instanteRequiredBob equals to UPDATED_INSTANTE_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("instanteRequiredBob.equals=" + UPDATED_INSTANTE_REQUIRED_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByInstanteRequiredBobIsNotEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where instanteRequiredBob not equals to DEFAULT_INSTANTE_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("instanteRequiredBob.notEquals=" + DEFAULT_INSTANTE_REQUIRED_BOB);

        // Get all the fieldTestServiceClassEntityList where instanteRequiredBob not equals to UPDATED_INSTANTE_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("instanteRequiredBob.notEquals=" + UPDATED_INSTANTE_REQUIRED_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByInstanteRequiredBobIsInShouldWork() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where instanteRequiredBob in DEFAULT_INSTANTE_REQUIRED_BOB or UPDATED_INSTANTE_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("instanteRequiredBob.in=" + DEFAULT_INSTANTE_REQUIRED_BOB + "," + UPDATED_INSTANTE_REQUIRED_BOB);

        // Get all the fieldTestServiceClassEntityList where instanteRequiredBob equals to UPDATED_INSTANTE_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("instanteRequiredBob.in=" + UPDATED_INSTANTE_REQUIRED_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByInstanteRequiredBobIsNullOrNotNull() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where instanteRequiredBob is not null
        defaultFieldTestServiceClassEntityShouldBeFound("instanteRequiredBob.specified=true");

        // Get all the fieldTestServiceClassEntityList where instanteRequiredBob is null
        defaultFieldTestServiceClassEntityShouldNotBeFound("instanteRequiredBob.specified=false");
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByZonedDateTimeBobIsEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where zonedDateTimeBob equals to DEFAULT_ZONED_DATE_TIME_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("zonedDateTimeBob.equals=" + DEFAULT_ZONED_DATE_TIME_BOB);

        // Get all the fieldTestServiceClassEntityList where zonedDateTimeBob equals to UPDATED_ZONED_DATE_TIME_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("zonedDateTimeBob.equals=" + UPDATED_ZONED_DATE_TIME_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByZonedDateTimeBobIsNotEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where zonedDateTimeBob not equals to DEFAULT_ZONED_DATE_TIME_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("zonedDateTimeBob.notEquals=" + DEFAULT_ZONED_DATE_TIME_BOB);

        // Get all the fieldTestServiceClassEntityList where zonedDateTimeBob not equals to UPDATED_ZONED_DATE_TIME_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("zonedDateTimeBob.notEquals=" + UPDATED_ZONED_DATE_TIME_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByZonedDateTimeBobIsInShouldWork() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where zonedDateTimeBob in DEFAULT_ZONED_DATE_TIME_BOB or UPDATED_ZONED_DATE_TIME_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("zonedDateTimeBob.in=" + DEFAULT_ZONED_DATE_TIME_BOB + "," + UPDATED_ZONED_DATE_TIME_BOB);

        // Get all the fieldTestServiceClassEntityList where zonedDateTimeBob equals to UPDATED_ZONED_DATE_TIME_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("zonedDateTimeBob.in=" + UPDATED_ZONED_DATE_TIME_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByZonedDateTimeBobIsNullOrNotNull() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where zonedDateTimeBob is not null
        defaultFieldTestServiceClassEntityShouldBeFound("zonedDateTimeBob.specified=true");

        // Get all the fieldTestServiceClassEntityList where zonedDateTimeBob is null
        defaultFieldTestServiceClassEntityShouldNotBeFound("zonedDateTimeBob.specified=false");
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByZonedDateTimeBobIsGreaterThanOrEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where zonedDateTimeBob is greater than or equal to DEFAULT_ZONED_DATE_TIME_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("zonedDateTimeBob.greaterThanOrEqual=" + DEFAULT_ZONED_DATE_TIME_BOB);

        // Get all the fieldTestServiceClassEntityList where zonedDateTimeBob is greater than or equal to UPDATED_ZONED_DATE_TIME_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("zonedDateTimeBob.greaterThanOrEqual=" + UPDATED_ZONED_DATE_TIME_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByZonedDateTimeBobIsLessThanOrEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where zonedDateTimeBob is less than or equal to DEFAULT_ZONED_DATE_TIME_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("zonedDateTimeBob.lessThanOrEqual=" + DEFAULT_ZONED_DATE_TIME_BOB);

        // Get all the fieldTestServiceClassEntityList where zonedDateTimeBob is less than or equal to SMALLER_ZONED_DATE_TIME_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("zonedDateTimeBob.lessThanOrEqual=" + SMALLER_ZONED_DATE_TIME_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByZonedDateTimeBobIsLessThanSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where zonedDateTimeBob is less than DEFAULT_ZONED_DATE_TIME_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("zonedDateTimeBob.lessThan=" + DEFAULT_ZONED_DATE_TIME_BOB);

        // Get all the fieldTestServiceClassEntityList where zonedDateTimeBob is less than UPDATED_ZONED_DATE_TIME_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("zonedDateTimeBob.lessThan=" + UPDATED_ZONED_DATE_TIME_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByZonedDateTimeBobIsGreaterThanSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where zonedDateTimeBob is greater than DEFAULT_ZONED_DATE_TIME_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("zonedDateTimeBob.greaterThan=" + DEFAULT_ZONED_DATE_TIME_BOB);

        // Get all the fieldTestServiceClassEntityList where zonedDateTimeBob is greater than SMALLER_ZONED_DATE_TIME_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("zonedDateTimeBob.greaterThan=" + SMALLER_ZONED_DATE_TIME_BOB);
    }


    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByZonedDateTimeRequiredBobIsEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where zonedDateTimeRequiredBob equals to DEFAULT_ZONED_DATE_TIME_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("zonedDateTimeRequiredBob.equals=" + DEFAULT_ZONED_DATE_TIME_REQUIRED_BOB);

        // Get all the fieldTestServiceClassEntityList where zonedDateTimeRequiredBob equals to UPDATED_ZONED_DATE_TIME_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("zonedDateTimeRequiredBob.equals=" + UPDATED_ZONED_DATE_TIME_REQUIRED_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByZonedDateTimeRequiredBobIsNotEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where zonedDateTimeRequiredBob not equals to DEFAULT_ZONED_DATE_TIME_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("zonedDateTimeRequiredBob.notEquals=" + DEFAULT_ZONED_DATE_TIME_REQUIRED_BOB);

        // Get all the fieldTestServiceClassEntityList where zonedDateTimeRequiredBob not equals to UPDATED_ZONED_DATE_TIME_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("zonedDateTimeRequiredBob.notEquals=" + UPDATED_ZONED_DATE_TIME_REQUIRED_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByZonedDateTimeRequiredBobIsInShouldWork() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where zonedDateTimeRequiredBob in DEFAULT_ZONED_DATE_TIME_REQUIRED_BOB or UPDATED_ZONED_DATE_TIME_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("zonedDateTimeRequiredBob.in=" + DEFAULT_ZONED_DATE_TIME_REQUIRED_BOB + "," + UPDATED_ZONED_DATE_TIME_REQUIRED_BOB);

        // Get all the fieldTestServiceClassEntityList where zonedDateTimeRequiredBob equals to UPDATED_ZONED_DATE_TIME_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("zonedDateTimeRequiredBob.in=" + UPDATED_ZONED_DATE_TIME_REQUIRED_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByZonedDateTimeRequiredBobIsNullOrNotNull() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where zonedDateTimeRequiredBob is not null
        defaultFieldTestServiceClassEntityShouldBeFound("zonedDateTimeRequiredBob.specified=true");

        // Get all the fieldTestServiceClassEntityList where zonedDateTimeRequiredBob is null
        defaultFieldTestServiceClassEntityShouldNotBeFound("zonedDateTimeRequiredBob.specified=false");
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByZonedDateTimeRequiredBobIsGreaterThanOrEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where zonedDateTimeRequiredBob is greater than or equal to DEFAULT_ZONED_DATE_TIME_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("zonedDateTimeRequiredBob.greaterThanOrEqual=" + DEFAULT_ZONED_DATE_TIME_REQUIRED_BOB);

        // Get all the fieldTestServiceClassEntityList where zonedDateTimeRequiredBob is greater than or equal to UPDATED_ZONED_DATE_TIME_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("zonedDateTimeRequiredBob.greaterThanOrEqual=" + UPDATED_ZONED_DATE_TIME_REQUIRED_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByZonedDateTimeRequiredBobIsLessThanOrEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where zonedDateTimeRequiredBob is less than or equal to DEFAULT_ZONED_DATE_TIME_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("zonedDateTimeRequiredBob.lessThanOrEqual=" + DEFAULT_ZONED_DATE_TIME_REQUIRED_BOB);

        // Get all the fieldTestServiceClassEntityList where zonedDateTimeRequiredBob is less than or equal to SMALLER_ZONED_DATE_TIME_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("zonedDateTimeRequiredBob.lessThanOrEqual=" + SMALLER_ZONED_DATE_TIME_REQUIRED_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByZonedDateTimeRequiredBobIsLessThanSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where zonedDateTimeRequiredBob is less than DEFAULT_ZONED_DATE_TIME_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("zonedDateTimeRequiredBob.lessThan=" + DEFAULT_ZONED_DATE_TIME_REQUIRED_BOB);

        // Get all the fieldTestServiceClassEntityList where zonedDateTimeRequiredBob is less than UPDATED_ZONED_DATE_TIME_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("zonedDateTimeRequiredBob.lessThan=" + UPDATED_ZONED_DATE_TIME_REQUIRED_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByZonedDateTimeRequiredBobIsGreaterThanSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where zonedDateTimeRequiredBob is greater than DEFAULT_ZONED_DATE_TIME_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("zonedDateTimeRequiredBob.greaterThan=" + DEFAULT_ZONED_DATE_TIME_REQUIRED_BOB);

        // Get all the fieldTestServiceClassEntityList where zonedDateTimeRequiredBob is greater than SMALLER_ZONED_DATE_TIME_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("zonedDateTimeRequiredBob.greaterThan=" + SMALLER_ZONED_DATE_TIME_REQUIRED_BOB);
    }


    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByDurationBobIsEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where durationBob equals to DEFAULT_DURATION_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("durationBob.equals=" + DEFAULT_DURATION_BOB);

        // Get all the fieldTestServiceClassEntityList where durationBob equals to UPDATED_DURATION_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("durationBob.equals=" + UPDATED_DURATION_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByDurationBobIsNotEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where durationBob not equals to DEFAULT_DURATION_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("durationBob.notEquals=" + DEFAULT_DURATION_BOB);

        // Get all the fieldTestServiceClassEntityList where durationBob not equals to UPDATED_DURATION_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("durationBob.notEquals=" + UPDATED_DURATION_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByDurationBobIsInShouldWork() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where durationBob in DEFAULT_DURATION_BOB or UPDATED_DURATION_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("durationBob.in=" + DEFAULT_DURATION_BOB + "," + UPDATED_DURATION_BOB);

        // Get all the fieldTestServiceClassEntityList where durationBob equals to UPDATED_DURATION_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("durationBob.in=" + UPDATED_DURATION_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByDurationBobIsNullOrNotNull() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where durationBob is not null
        defaultFieldTestServiceClassEntityShouldBeFound("durationBob.specified=true");

        // Get all the fieldTestServiceClassEntityList where durationBob is null
        defaultFieldTestServiceClassEntityShouldNotBeFound("durationBob.specified=false");
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByDurationBobIsGreaterThanOrEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where durationBob is greater than or equal to DEFAULT_DURATION_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("durationBob.greaterThanOrEqual=" + DEFAULT_DURATION_BOB);

        // Get all the fieldTestServiceClassEntityList where durationBob is greater than or equal to UPDATED_DURATION_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("durationBob.greaterThanOrEqual=" + UPDATED_DURATION_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByDurationBobIsLessThanOrEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where durationBob is less than or equal to DEFAULT_DURATION_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("durationBob.lessThanOrEqual=" + DEFAULT_DURATION_BOB);

        // Get all the fieldTestServiceClassEntityList where durationBob is less than or equal to SMALLER_DURATION_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("durationBob.lessThanOrEqual=" + SMALLER_DURATION_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByDurationBobIsLessThanSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where durationBob is less than DEFAULT_DURATION_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("durationBob.lessThan=" + DEFAULT_DURATION_BOB);

        // Get all the fieldTestServiceClassEntityList where durationBob is less than UPDATED_DURATION_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("durationBob.lessThan=" + UPDATED_DURATION_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByDurationBobIsGreaterThanSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where durationBob is greater than DEFAULT_DURATION_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("durationBob.greaterThan=" + DEFAULT_DURATION_BOB);

        // Get all the fieldTestServiceClassEntityList where durationBob is greater than SMALLER_DURATION_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("durationBob.greaterThan=" + SMALLER_DURATION_BOB);
    }


    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByDurationRequiredBobIsEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where durationRequiredBob equals to DEFAULT_DURATION_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("durationRequiredBob.equals=" + DEFAULT_DURATION_REQUIRED_BOB);

        // Get all the fieldTestServiceClassEntityList where durationRequiredBob equals to UPDATED_DURATION_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("durationRequiredBob.equals=" + UPDATED_DURATION_REQUIRED_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByDurationRequiredBobIsNotEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where durationRequiredBob not equals to DEFAULT_DURATION_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("durationRequiredBob.notEquals=" + DEFAULT_DURATION_REQUIRED_BOB);

        // Get all the fieldTestServiceClassEntityList where durationRequiredBob not equals to UPDATED_DURATION_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("durationRequiredBob.notEquals=" + UPDATED_DURATION_REQUIRED_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByDurationRequiredBobIsInShouldWork() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where durationRequiredBob in DEFAULT_DURATION_REQUIRED_BOB or UPDATED_DURATION_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("durationRequiredBob.in=" + DEFAULT_DURATION_REQUIRED_BOB + "," + UPDATED_DURATION_REQUIRED_BOB);

        // Get all the fieldTestServiceClassEntityList where durationRequiredBob equals to UPDATED_DURATION_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("durationRequiredBob.in=" + UPDATED_DURATION_REQUIRED_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByDurationRequiredBobIsNullOrNotNull() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where durationRequiredBob is not null
        defaultFieldTestServiceClassEntityShouldBeFound("durationRequiredBob.specified=true");

        // Get all the fieldTestServiceClassEntityList where durationRequiredBob is null
        defaultFieldTestServiceClassEntityShouldNotBeFound("durationRequiredBob.specified=false");
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByDurationRequiredBobIsGreaterThanOrEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where durationRequiredBob is greater than or equal to DEFAULT_DURATION_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("durationRequiredBob.greaterThanOrEqual=" + DEFAULT_DURATION_REQUIRED_BOB);

        // Get all the fieldTestServiceClassEntityList where durationRequiredBob is greater than or equal to UPDATED_DURATION_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("durationRequiredBob.greaterThanOrEqual=" + UPDATED_DURATION_REQUIRED_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByDurationRequiredBobIsLessThanOrEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where durationRequiredBob is less than or equal to DEFAULT_DURATION_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("durationRequiredBob.lessThanOrEqual=" + DEFAULT_DURATION_REQUIRED_BOB);

        // Get all the fieldTestServiceClassEntityList where durationRequiredBob is less than or equal to SMALLER_DURATION_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("durationRequiredBob.lessThanOrEqual=" + SMALLER_DURATION_REQUIRED_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByDurationRequiredBobIsLessThanSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where durationRequiredBob is less than DEFAULT_DURATION_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("durationRequiredBob.lessThan=" + DEFAULT_DURATION_REQUIRED_BOB);

        // Get all the fieldTestServiceClassEntityList where durationRequiredBob is less than UPDATED_DURATION_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("durationRequiredBob.lessThan=" + UPDATED_DURATION_REQUIRED_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByDurationRequiredBobIsGreaterThanSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where durationRequiredBob is greater than DEFAULT_DURATION_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("durationRequiredBob.greaterThan=" + DEFAULT_DURATION_REQUIRED_BOB);

        // Get all the fieldTestServiceClassEntityList where durationRequiredBob is greater than SMALLER_DURATION_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("durationRequiredBob.greaterThan=" + SMALLER_DURATION_REQUIRED_BOB);
    }


    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByBooleanBobIsEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where booleanBob equals to DEFAULT_BOOLEAN_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("booleanBob.equals=" + DEFAULT_BOOLEAN_BOB);

        // Get all the fieldTestServiceClassEntityList where booleanBob equals to UPDATED_BOOLEAN_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("booleanBob.equals=" + UPDATED_BOOLEAN_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByBooleanBobIsNotEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where booleanBob not equals to DEFAULT_BOOLEAN_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("booleanBob.notEquals=" + DEFAULT_BOOLEAN_BOB);

        // Get all the fieldTestServiceClassEntityList where booleanBob not equals to UPDATED_BOOLEAN_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("booleanBob.notEquals=" + UPDATED_BOOLEAN_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByBooleanBobIsInShouldWork() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where booleanBob in DEFAULT_BOOLEAN_BOB or UPDATED_BOOLEAN_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("booleanBob.in=" + DEFAULT_BOOLEAN_BOB + "," + UPDATED_BOOLEAN_BOB);

        // Get all the fieldTestServiceClassEntityList where booleanBob equals to UPDATED_BOOLEAN_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("booleanBob.in=" + UPDATED_BOOLEAN_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByBooleanBobIsNullOrNotNull() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where booleanBob is not null
        defaultFieldTestServiceClassEntityShouldBeFound("booleanBob.specified=true");

        // Get all the fieldTestServiceClassEntityList where booleanBob is null
        defaultFieldTestServiceClassEntityShouldNotBeFound("booleanBob.specified=false");
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByBooleanRequiredBobIsEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where booleanRequiredBob equals to DEFAULT_BOOLEAN_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("booleanRequiredBob.equals=" + DEFAULT_BOOLEAN_REQUIRED_BOB);

        // Get all the fieldTestServiceClassEntityList where booleanRequiredBob equals to UPDATED_BOOLEAN_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("booleanRequiredBob.equals=" + UPDATED_BOOLEAN_REQUIRED_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByBooleanRequiredBobIsNotEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where booleanRequiredBob not equals to DEFAULT_BOOLEAN_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("booleanRequiredBob.notEquals=" + DEFAULT_BOOLEAN_REQUIRED_BOB);

        // Get all the fieldTestServiceClassEntityList where booleanRequiredBob not equals to UPDATED_BOOLEAN_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("booleanRequiredBob.notEquals=" + UPDATED_BOOLEAN_REQUIRED_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByBooleanRequiredBobIsInShouldWork() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where booleanRequiredBob in DEFAULT_BOOLEAN_REQUIRED_BOB or UPDATED_BOOLEAN_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("booleanRequiredBob.in=" + DEFAULT_BOOLEAN_REQUIRED_BOB + "," + UPDATED_BOOLEAN_REQUIRED_BOB);

        // Get all the fieldTestServiceClassEntityList where booleanRequiredBob equals to UPDATED_BOOLEAN_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("booleanRequiredBob.in=" + UPDATED_BOOLEAN_REQUIRED_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByBooleanRequiredBobIsNullOrNotNull() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where booleanRequiredBob is not null
        defaultFieldTestServiceClassEntityShouldBeFound("booleanRequiredBob.specified=true");

        // Get all the fieldTestServiceClassEntityList where booleanRequiredBob is null
        defaultFieldTestServiceClassEntityShouldNotBeFound("booleanRequiredBob.specified=false");
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByEnumBobIsEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where enumBob equals to DEFAULT_ENUM_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("enumBob.equals=" + DEFAULT_ENUM_BOB);

        // Get all the fieldTestServiceClassEntityList where enumBob equals to UPDATED_ENUM_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("enumBob.equals=" + UPDATED_ENUM_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByEnumBobIsNotEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where enumBob not equals to DEFAULT_ENUM_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("enumBob.notEquals=" + DEFAULT_ENUM_BOB);

        // Get all the fieldTestServiceClassEntityList where enumBob not equals to UPDATED_ENUM_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("enumBob.notEquals=" + UPDATED_ENUM_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByEnumBobIsInShouldWork() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where enumBob in DEFAULT_ENUM_BOB or UPDATED_ENUM_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("enumBob.in=" + DEFAULT_ENUM_BOB + "," + UPDATED_ENUM_BOB);

        // Get all the fieldTestServiceClassEntityList where enumBob equals to UPDATED_ENUM_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("enumBob.in=" + UPDATED_ENUM_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByEnumBobIsNullOrNotNull() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where enumBob is not null
        defaultFieldTestServiceClassEntityShouldBeFound("enumBob.specified=true");

        // Get all the fieldTestServiceClassEntityList where enumBob is null
        defaultFieldTestServiceClassEntityShouldNotBeFound("enumBob.specified=false");
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByEnumRequiredBobIsEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where enumRequiredBob equals to DEFAULT_ENUM_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("enumRequiredBob.equals=" + DEFAULT_ENUM_REQUIRED_BOB);

        // Get all the fieldTestServiceClassEntityList where enumRequiredBob equals to UPDATED_ENUM_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("enumRequiredBob.equals=" + UPDATED_ENUM_REQUIRED_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByEnumRequiredBobIsNotEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where enumRequiredBob not equals to DEFAULT_ENUM_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("enumRequiredBob.notEquals=" + DEFAULT_ENUM_REQUIRED_BOB);

        // Get all the fieldTestServiceClassEntityList where enumRequiredBob not equals to UPDATED_ENUM_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("enumRequiredBob.notEquals=" + UPDATED_ENUM_REQUIRED_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByEnumRequiredBobIsInShouldWork() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where enumRequiredBob in DEFAULT_ENUM_REQUIRED_BOB or UPDATED_ENUM_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("enumRequiredBob.in=" + DEFAULT_ENUM_REQUIRED_BOB + "," + UPDATED_ENUM_REQUIRED_BOB);

        // Get all the fieldTestServiceClassEntityList where enumRequiredBob equals to UPDATED_ENUM_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("enumRequiredBob.in=" + UPDATED_ENUM_REQUIRED_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByEnumRequiredBobIsNullOrNotNull() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where enumRequiredBob is not null
        defaultFieldTestServiceClassEntityShouldBeFound("enumRequiredBob.specified=true");

        // Get all the fieldTestServiceClassEntityList where enumRequiredBob is null
        defaultFieldTestServiceClassEntityShouldNotBeFound("enumRequiredBob.specified=false");
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByUuidBobIsEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where uuidBob equals to DEFAULT_UUID_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("uuidBob.equals=" + DEFAULT_UUID_BOB);

        // Get all the fieldTestServiceClassEntityList where uuidBob equals to UPDATED_UUID_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("uuidBob.equals=" + UPDATED_UUID_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByUuidBobIsNotEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where uuidBob not equals to DEFAULT_UUID_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("uuidBob.notEquals=" + DEFAULT_UUID_BOB);

        // Get all the fieldTestServiceClassEntityList where uuidBob not equals to UPDATED_UUID_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("uuidBob.notEquals=" + UPDATED_UUID_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByUuidBobIsInShouldWork() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where uuidBob in DEFAULT_UUID_BOB or UPDATED_UUID_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("uuidBob.in=" + DEFAULT_UUID_BOB + "," + UPDATED_UUID_BOB);

        // Get all the fieldTestServiceClassEntityList where uuidBob equals to UPDATED_UUID_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("uuidBob.in=" + UPDATED_UUID_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByUuidBobIsNullOrNotNull() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where uuidBob is not null
        defaultFieldTestServiceClassEntityShouldBeFound("uuidBob.specified=true");

        // Get all the fieldTestServiceClassEntityList where uuidBob is null
        defaultFieldTestServiceClassEntityShouldNotBeFound("uuidBob.specified=false");
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByUuidRequiredBobIsEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where uuidRequiredBob equals to DEFAULT_UUID_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("uuidRequiredBob.equals=" + DEFAULT_UUID_REQUIRED_BOB);

        // Get all the fieldTestServiceClassEntityList where uuidRequiredBob equals to UPDATED_UUID_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("uuidRequiredBob.equals=" + UPDATED_UUID_REQUIRED_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByUuidRequiredBobIsNotEqualToSomething() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where uuidRequiredBob not equals to DEFAULT_UUID_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("uuidRequiredBob.notEquals=" + DEFAULT_UUID_REQUIRED_BOB);

        // Get all the fieldTestServiceClassEntityList where uuidRequiredBob not equals to UPDATED_UUID_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("uuidRequiredBob.notEquals=" + UPDATED_UUID_REQUIRED_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByUuidRequiredBobIsInShouldWork() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where uuidRequiredBob in DEFAULT_UUID_REQUIRED_BOB or UPDATED_UUID_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldBeFound("uuidRequiredBob.in=" + DEFAULT_UUID_REQUIRED_BOB + "," + UPDATED_UUID_REQUIRED_BOB);

        // Get all the fieldTestServiceClassEntityList where uuidRequiredBob equals to UPDATED_UUID_REQUIRED_BOB
        defaultFieldTestServiceClassEntityShouldNotBeFound("uuidRequiredBob.in=" + UPDATED_UUID_REQUIRED_BOB);
    }

    @Test
    @Transactional
    public void getAllFieldTestServiceClassEntitiesByUuidRequiredBobIsNullOrNotNull() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityRepository.saveAndFlush(fieldTestServiceClassEntity);

        // Get all the fieldTestServiceClassEntityList where uuidRequiredBob is not null
        defaultFieldTestServiceClassEntityShouldBeFound("uuidRequiredBob.specified=true");

        // Get all the fieldTestServiceClassEntityList where uuidRequiredBob is null
        defaultFieldTestServiceClassEntityShouldNotBeFound("uuidRequiredBob.specified=false");
    }
    /**
     * Executes the search, and checks that the default entity is returned.
     */
    private void defaultFieldTestServiceClassEntityShouldBeFound(String filter) throws Exception {
        restFieldTestServiceClassEntityMockMvc.perform(get("/api/field-test-service-class-entities?sort=id,desc&" + filter))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(fieldTestServiceClassEntity.getId().intValue())))
            .andExpect(jsonPath("$.[*].stringBob").value(hasItem(DEFAULT_STRING_BOB)))
            .andExpect(jsonPath("$.[*].stringRequiredBob").value(hasItem(DEFAULT_STRING_REQUIRED_BOB)))
            .andExpect(jsonPath("$.[*].stringMinlengthBob").value(hasItem(DEFAULT_STRING_MINLENGTH_BOB)))
            .andExpect(jsonPath("$.[*].stringMaxlengthBob").value(hasItem(DEFAULT_STRING_MAXLENGTH_BOB)))
            .andExpect(jsonPath("$.[*].stringPatternBob").value(hasItem(DEFAULT_STRING_PATTERN_BOB)))
            .andExpect(jsonPath("$.[*].integerBob").value(hasItem(DEFAULT_INTEGER_BOB)))
            .andExpect(jsonPath("$.[*].integerRequiredBob").value(hasItem(DEFAULT_INTEGER_REQUIRED_BOB)))
            .andExpect(jsonPath("$.[*].integerMinBob").value(hasItem(DEFAULT_INTEGER_MIN_BOB)))
            .andExpect(jsonPath("$.[*].integerMaxBob").value(hasItem(DEFAULT_INTEGER_MAX_BOB)))
            .andExpect(jsonPath("$.[*].longBob").value(hasItem(DEFAULT_LONG_BOB.intValue())))
            .andExpect(jsonPath("$.[*].longRequiredBob").value(hasItem(DEFAULT_LONG_REQUIRED_BOB.intValue())))
            .andExpect(jsonPath("$.[*].longMinBob").value(hasItem(DEFAULT_LONG_MIN_BOB.intValue())))
            .andExpect(jsonPath("$.[*].longMaxBob").value(hasItem(DEFAULT_LONG_MAX_BOB.intValue())))
            .andExpect(jsonPath("$.[*].floatBob").value(hasItem(DEFAULT_FLOAT_BOB.doubleValue())))
            .andExpect(jsonPath("$.[*].floatRequiredBob").value(hasItem(DEFAULT_FLOAT_REQUIRED_BOB.doubleValue())))
            .andExpect(jsonPath("$.[*].floatMinBob").value(hasItem(DEFAULT_FLOAT_MIN_BOB.doubleValue())))
            .andExpect(jsonPath("$.[*].floatMaxBob").value(hasItem(DEFAULT_FLOAT_MAX_BOB.doubleValue())))
            .andExpect(jsonPath("$.[*].doubleRequiredBob").value(hasItem(DEFAULT_DOUBLE_REQUIRED_BOB.doubleValue())))
            .andExpect(jsonPath("$.[*].doubleMinBob").value(hasItem(DEFAULT_DOUBLE_MIN_BOB.doubleValue())))
            .andExpect(jsonPath("$.[*].doubleMaxBob").value(hasItem(DEFAULT_DOUBLE_MAX_BOB.doubleValue())))
            .andExpect(jsonPath("$.[*].bigDecimalRequiredBob").value(hasItem(DEFAULT_BIG_DECIMAL_REQUIRED_BOB.intValue())))
            .andExpect(jsonPath("$.[*].bigDecimalMinBob").value(hasItem(DEFAULT_BIG_DECIMAL_MIN_BOB.intValue())))
            .andExpect(jsonPath("$.[*].bigDecimalMaxBob").value(hasItem(DEFAULT_BIG_DECIMAL_MAX_BOB.intValue())))
            .andExpect(jsonPath("$.[*].localDateBob").value(hasItem(DEFAULT_LOCAL_DATE_BOB.toString())))
            .andExpect(jsonPath("$.[*].localDateRequiredBob").value(hasItem(DEFAULT_LOCAL_DATE_REQUIRED_BOB.toString())))
            .andExpect(jsonPath("$.[*].instantBob").value(hasItem(DEFAULT_INSTANT_BOB.toString())))
            .andExpect(jsonPath("$.[*].instanteRequiredBob").value(hasItem(DEFAULT_INSTANTE_REQUIRED_BOB.toString())))
            .andExpect(jsonPath("$.[*].zonedDateTimeBob").value(hasItem(sameInstant(DEFAULT_ZONED_DATE_TIME_BOB))))
            .andExpect(jsonPath("$.[*].zonedDateTimeRequiredBob").value(hasItem(sameInstant(DEFAULT_ZONED_DATE_TIME_REQUIRED_BOB))))
            .andExpect(jsonPath("$.[*].durationBob").value(hasItem(DEFAULT_DURATION_BOB.toString())))
            .andExpect(jsonPath("$.[*].durationRequiredBob").value(hasItem(DEFAULT_DURATION_REQUIRED_BOB.toString())))
            .andExpect(jsonPath("$.[*].booleanBob").value(hasItem(DEFAULT_BOOLEAN_BOB.booleanValue())))
            .andExpect(jsonPath("$.[*].booleanRequiredBob").value(hasItem(DEFAULT_BOOLEAN_REQUIRED_BOB.booleanValue())))
            .andExpect(jsonPath("$.[*].enumBob").value(hasItem(DEFAULT_ENUM_BOB.toString())))
            .andExpect(jsonPath("$.[*].enumRequiredBob").value(hasItem(DEFAULT_ENUM_REQUIRED_BOB.toString())))
            .andExpect(jsonPath("$.[*].uuidBob").value(hasItem(DEFAULT_UUID_BOB.toString())))
            .andExpect(jsonPath("$.[*].uuidRequiredBob").value(hasItem(DEFAULT_UUID_REQUIRED_BOB.toString())))
            .andExpect(jsonPath("$.[*].byteImageBobContentType").value(hasItem(DEFAULT_BYTE_IMAGE_BOB_CONTENT_TYPE)))
            .andExpect(jsonPath("$.[*].byteImageBob").value(hasItem(Base64Utils.encodeToString(DEFAULT_BYTE_IMAGE_BOB))))
            .andExpect(jsonPath("$.[*].byteImageRequiredBobContentType").value(hasItem(DEFAULT_BYTE_IMAGE_REQUIRED_BOB_CONTENT_TYPE)))
            .andExpect(jsonPath("$.[*].byteImageRequiredBob").value(hasItem(Base64Utils.encodeToString(DEFAULT_BYTE_IMAGE_REQUIRED_BOB))))
            .andExpect(jsonPath("$.[*].byteImageMinbytesBobContentType").value(hasItem(DEFAULT_BYTE_IMAGE_MINBYTES_BOB_CONTENT_TYPE)))
            .andExpect(jsonPath("$.[*].byteImageMinbytesBob").value(hasItem(Base64Utils.encodeToString(DEFAULT_BYTE_IMAGE_MINBYTES_BOB))))
            .andExpect(jsonPath("$.[*].byteImageMaxbytesBobContentType").value(hasItem(DEFAULT_BYTE_IMAGE_MAXBYTES_BOB_CONTENT_TYPE)))
            .andExpect(jsonPath("$.[*].byteImageMaxbytesBob").value(hasItem(Base64Utils.encodeToString(DEFAULT_BYTE_IMAGE_MAXBYTES_BOB))))
            .andExpect(jsonPath("$.[*].byteAnyBobContentType").value(hasItem(DEFAULT_BYTE_ANY_BOB_CONTENT_TYPE)))
            .andExpect(jsonPath("$.[*].byteAnyBob").value(hasItem(Base64Utils.encodeToString(DEFAULT_BYTE_ANY_BOB))))
            .andExpect(jsonPath("$.[*].byteAnyRequiredBobContentType").value(hasItem(DEFAULT_BYTE_ANY_REQUIRED_BOB_CONTENT_TYPE)))
            .andExpect(jsonPath("$.[*].byteAnyRequiredBob").value(hasItem(Base64Utils.encodeToString(DEFAULT_BYTE_ANY_REQUIRED_BOB))))
            .andExpect(jsonPath("$.[*].byteAnyMinbytesBobContentType").value(hasItem(DEFAULT_BYTE_ANY_MINBYTES_BOB_CONTENT_TYPE)))
            .andExpect(jsonPath("$.[*].byteAnyMinbytesBob").value(hasItem(Base64Utils.encodeToString(DEFAULT_BYTE_ANY_MINBYTES_BOB))))
            .andExpect(jsonPath("$.[*].byteAnyMaxbytesBobContentType").value(hasItem(DEFAULT_BYTE_ANY_MAXBYTES_BOB_CONTENT_TYPE)))
            .andExpect(jsonPath("$.[*].byteAnyMaxbytesBob").value(hasItem(Base64Utils.encodeToString(DEFAULT_BYTE_ANY_MAXBYTES_BOB))))
            .andExpect(jsonPath("$.[*].byteTextBob").value(hasItem(DEFAULT_BYTE_TEXT_BOB.toString())))
            .andExpect(jsonPath("$.[*].byteTextRequiredBob").value(hasItem(DEFAULT_BYTE_TEXT_REQUIRED_BOB.toString())));

        // Check, that the count call also returns 1
        restFieldTestServiceClassEntityMockMvc.perform(get("/api/field-test-service-class-entities/count?sort=id,desc&" + filter))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(content().string("1"));
    }

    /**
     * Executes the search, and checks that the default entity is not returned.
     */
    private void defaultFieldTestServiceClassEntityShouldNotBeFound(String filter) throws Exception {
        restFieldTestServiceClassEntityMockMvc.perform(get("/api/field-test-service-class-entities?sort=id,desc&" + filter))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$").isArray())
            .andExpect(jsonPath("$").isEmpty());

        // Check, that the count call also returns 0
        restFieldTestServiceClassEntityMockMvc.perform(get("/api/field-test-service-class-entities/count?sort=id,desc&" + filter))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(content().string("0"));
    }


    @Test
    @Transactional
    public void getNonExistingFieldTestServiceClassEntity() throws Exception {
        // Get the fieldTestServiceClassEntity
        restFieldTestServiceClassEntityMockMvc.perform(get("/api/field-test-service-class-entities/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateFieldTestServiceClassEntity() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityService.save(fieldTestServiceClassEntity);

        int databaseSizeBeforeUpdate = fieldTestServiceClassEntityRepository.findAll().size();

        // Update the fieldTestServiceClassEntity
        FieldTestServiceClassEntity updatedFieldTestServiceClassEntity = fieldTestServiceClassEntityRepository.findById(fieldTestServiceClassEntity.getId()).get();
        // Disconnect from session so that the updates on updatedFieldTestServiceClassEntity are not directly saved in db
        em.detach(updatedFieldTestServiceClassEntity);
        updatedFieldTestServiceClassEntity
            .stringBob(UPDATED_STRING_BOB)
            .stringRequiredBob(UPDATED_STRING_REQUIRED_BOB)
            .stringMinlengthBob(UPDATED_STRING_MINLENGTH_BOB)
            .stringMaxlengthBob(UPDATED_STRING_MAXLENGTH_BOB)
            .stringPatternBob(UPDATED_STRING_PATTERN_BOB)
            .integerBob(UPDATED_INTEGER_BOB)
            .integerRequiredBob(UPDATED_INTEGER_REQUIRED_BOB)
            .integerMinBob(UPDATED_INTEGER_MIN_BOB)
            .integerMaxBob(UPDATED_INTEGER_MAX_BOB)
            .longBob(UPDATED_LONG_BOB)
            .longRequiredBob(UPDATED_LONG_REQUIRED_BOB)
            .longMinBob(UPDATED_LONG_MIN_BOB)
            .longMaxBob(UPDATED_LONG_MAX_BOB)
            .floatBob(UPDATED_FLOAT_BOB)
            .floatRequiredBob(UPDATED_FLOAT_REQUIRED_BOB)
            .floatMinBob(UPDATED_FLOAT_MIN_BOB)
            .floatMaxBob(UPDATED_FLOAT_MAX_BOB)
            .doubleRequiredBob(UPDATED_DOUBLE_REQUIRED_BOB)
            .doubleMinBob(UPDATED_DOUBLE_MIN_BOB)
            .doubleMaxBob(UPDATED_DOUBLE_MAX_BOB)
            .bigDecimalRequiredBob(UPDATED_BIG_DECIMAL_REQUIRED_BOB)
            .bigDecimalMinBob(UPDATED_BIG_DECIMAL_MIN_BOB)
            .bigDecimalMaxBob(UPDATED_BIG_DECIMAL_MAX_BOB)
            .localDateBob(UPDATED_LOCAL_DATE_BOB)
            .localDateRequiredBob(UPDATED_LOCAL_DATE_REQUIRED_BOB)
            .instantBob(UPDATED_INSTANT_BOB)
            .instanteRequiredBob(UPDATED_INSTANTE_REQUIRED_BOB)
            .zonedDateTimeBob(UPDATED_ZONED_DATE_TIME_BOB)
            .zonedDateTimeRequiredBob(UPDATED_ZONED_DATE_TIME_REQUIRED_BOB)
            .durationBob(UPDATED_DURATION_BOB)
            .durationRequiredBob(UPDATED_DURATION_REQUIRED_BOB)
            .booleanBob(UPDATED_BOOLEAN_BOB)
            .booleanRequiredBob(UPDATED_BOOLEAN_REQUIRED_BOB)
            .enumBob(UPDATED_ENUM_BOB)
            .enumRequiredBob(UPDATED_ENUM_REQUIRED_BOB)
            .uuidBob(UPDATED_UUID_BOB)
            .uuidRequiredBob(UPDATED_UUID_REQUIRED_BOB)
            .byteImageBob(UPDATED_BYTE_IMAGE_BOB)
            .byteImageBobContentType(UPDATED_BYTE_IMAGE_BOB_CONTENT_TYPE)
            .byteImageRequiredBob(UPDATED_BYTE_IMAGE_REQUIRED_BOB)
            .byteImageRequiredBobContentType(UPDATED_BYTE_IMAGE_REQUIRED_BOB_CONTENT_TYPE)
            .byteImageMinbytesBob(UPDATED_BYTE_IMAGE_MINBYTES_BOB)
            .byteImageMinbytesBobContentType(UPDATED_BYTE_IMAGE_MINBYTES_BOB_CONTENT_TYPE)
            .byteImageMaxbytesBob(UPDATED_BYTE_IMAGE_MAXBYTES_BOB)
            .byteImageMaxbytesBobContentType(UPDATED_BYTE_IMAGE_MAXBYTES_BOB_CONTENT_TYPE)
            .byteAnyBob(UPDATED_BYTE_ANY_BOB)
            .byteAnyBobContentType(UPDATED_BYTE_ANY_BOB_CONTENT_TYPE)
            .byteAnyRequiredBob(UPDATED_BYTE_ANY_REQUIRED_BOB)
            .byteAnyRequiredBobContentType(UPDATED_BYTE_ANY_REQUIRED_BOB_CONTENT_TYPE)
            .byteAnyMinbytesBob(UPDATED_BYTE_ANY_MINBYTES_BOB)
            .byteAnyMinbytesBobContentType(UPDATED_BYTE_ANY_MINBYTES_BOB_CONTENT_TYPE)
            .byteAnyMaxbytesBob(UPDATED_BYTE_ANY_MAXBYTES_BOB)
            .byteAnyMaxbytesBobContentType(UPDATED_BYTE_ANY_MAXBYTES_BOB_CONTENT_TYPE)
            .byteTextBob(UPDATED_BYTE_TEXT_BOB)
            .byteTextRequiredBob(UPDATED_BYTE_TEXT_REQUIRED_BOB);

        restFieldTestServiceClassEntityMockMvc.perform(put("/api/field-test-service-class-entities")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedFieldTestServiceClassEntity)))
            .andExpect(status().isOk());

        // Validate the FieldTestServiceClassEntity in the database
        List<FieldTestServiceClassEntity> fieldTestServiceClassEntityList = fieldTestServiceClassEntityRepository.findAll();
        assertThat(fieldTestServiceClassEntityList).hasSize(databaseSizeBeforeUpdate);
        FieldTestServiceClassEntity testFieldTestServiceClassEntity = fieldTestServiceClassEntityList.get(fieldTestServiceClassEntityList.size() - 1);
        assertThat(testFieldTestServiceClassEntity.getStringBob()).isEqualTo(UPDATED_STRING_BOB);
        assertThat(testFieldTestServiceClassEntity.getStringRequiredBob()).isEqualTo(UPDATED_STRING_REQUIRED_BOB);
        assertThat(testFieldTestServiceClassEntity.getStringMinlengthBob()).isEqualTo(UPDATED_STRING_MINLENGTH_BOB);
        assertThat(testFieldTestServiceClassEntity.getStringMaxlengthBob()).isEqualTo(UPDATED_STRING_MAXLENGTH_BOB);
        assertThat(testFieldTestServiceClassEntity.getStringPatternBob()).isEqualTo(UPDATED_STRING_PATTERN_BOB);
        assertThat(testFieldTestServiceClassEntity.getIntegerBob()).isEqualTo(UPDATED_INTEGER_BOB);
        assertThat(testFieldTestServiceClassEntity.getIntegerRequiredBob()).isEqualTo(UPDATED_INTEGER_REQUIRED_BOB);
        assertThat(testFieldTestServiceClassEntity.getIntegerMinBob()).isEqualTo(UPDATED_INTEGER_MIN_BOB);
        assertThat(testFieldTestServiceClassEntity.getIntegerMaxBob()).isEqualTo(UPDATED_INTEGER_MAX_BOB);
        assertThat(testFieldTestServiceClassEntity.getLongBob()).isEqualTo(UPDATED_LONG_BOB);
        assertThat(testFieldTestServiceClassEntity.getLongRequiredBob()).isEqualTo(UPDATED_LONG_REQUIRED_BOB);
        assertThat(testFieldTestServiceClassEntity.getLongMinBob()).isEqualTo(UPDATED_LONG_MIN_BOB);
        assertThat(testFieldTestServiceClassEntity.getLongMaxBob()).isEqualTo(UPDATED_LONG_MAX_BOB);
        assertThat(testFieldTestServiceClassEntity.getFloatBob()).isEqualTo(UPDATED_FLOAT_BOB);
        assertThat(testFieldTestServiceClassEntity.getFloatRequiredBob()).isEqualTo(UPDATED_FLOAT_REQUIRED_BOB);
        assertThat(testFieldTestServiceClassEntity.getFloatMinBob()).isEqualTo(UPDATED_FLOAT_MIN_BOB);
        assertThat(testFieldTestServiceClassEntity.getFloatMaxBob()).isEqualTo(UPDATED_FLOAT_MAX_BOB);
        assertThat(testFieldTestServiceClassEntity.getDoubleRequiredBob()).isEqualTo(UPDATED_DOUBLE_REQUIRED_BOB);
        assertThat(testFieldTestServiceClassEntity.getDoubleMinBob()).isEqualTo(UPDATED_DOUBLE_MIN_BOB);
        assertThat(testFieldTestServiceClassEntity.getDoubleMaxBob()).isEqualTo(UPDATED_DOUBLE_MAX_BOB);
        assertThat(testFieldTestServiceClassEntity.getBigDecimalRequiredBob()).isEqualTo(UPDATED_BIG_DECIMAL_REQUIRED_BOB);
        assertThat(testFieldTestServiceClassEntity.getBigDecimalMinBob()).isEqualTo(UPDATED_BIG_DECIMAL_MIN_BOB);
        assertThat(testFieldTestServiceClassEntity.getBigDecimalMaxBob()).isEqualTo(UPDATED_BIG_DECIMAL_MAX_BOB);
        assertThat(testFieldTestServiceClassEntity.getLocalDateBob()).isEqualTo(UPDATED_LOCAL_DATE_BOB);
        assertThat(testFieldTestServiceClassEntity.getLocalDateRequiredBob()).isEqualTo(UPDATED_LOCAL_DATE_REQUIRED_BOB);
        assertThat(testFieldTestServiceClassEntity.getInstantBob()).isEqualTo(UPDATED_INSTANT_BOB);
        assertThat(testFieldTestServiceClassEntity.getInstanteRequiredBob()).isEqualTo(UPDATED_INSTANTE_REQUIRED_BOB);
        assertThat(testFieldTestServiceClassEntity.getZonedDateTimeBob()).isEqualTo(UPDATED_ZONED_DATE_TIME_BOB);
        assertThat(testFieldTestServiceClassEntity.getZonedDateTimeRequiredBob()).isEqualTo(UPDATED_ZONED_DATE_TIME_REQUIRED_BOB);
        assertThat(testFieldTestServiceClassEntity.getDurationBob()).isEqualTo(UPDATED_DURATION_BOB);
        assertThat(testFieldTestServiceClassEntity.getDurationRequiredBob()).isEqualTo(UPDATED_DURATION_REQUIRED_BOB);
        assertThat(testFieldTestServiceClassEntity.isBooleanBob()).isEqualTo(UPDATED_BOOLEAN_BOB);
        assertThat(testFieldTestServiceClassEntity.isBooleanRequiredBob()).isEqualTo(UPDATED_BOOLEAN_REQUIRED_BOB);
        assertThat(testFieldTestServiceClassEntity.getEnumBob()).isEqualTo(UPDATED_ENUM_BOB);
        assertThat(testFieldTestServiceClassEntity.getEnumRequiredBob()).isEqualTo(UPDATED_ENUM_REQUIRED_BOB);
        assertThat(testFieldTestServiceClassEntity.getUuidBob()).isEqualTo(UPDATED_UUID_BOB);
        assertThat(testFieldTestServiceClassEntity.getUuidRequiredBob()).isEqualTo(UPDATED_UUID_REQUIRED_BOB);
        assertThat(testFieldTestServiceClassEntity.getByteImageBob()).isEqualTo(UPDATED_BYTE_IMAGE_BOB);
        assertThat(testFieldTestServiceClassEntity.getByteImageBobContentType()).isEqualTo(UPDATED_BYTE_IMAGE_BOB_CONTENT_TYPE);
        assertThat(testFieldTestServiceClassEntity.getByteImageRequiredBob()).isEqualTo(UPDATED_BYTE_IMAGE_REQUIRED_BOB);
        assertThat(testFieldTestServiceClassEntity.getByteImageRequiredBobContentType()).isEqualTo(UPDATED_BYTE_IMAGE_REQUIRED_BOB_CONTENT_TYPE);
        assertThat(testFieldTestServiceClassEntity.getByteImageMinbytesBob()).isEqualTo(UPDATED_BYTE_IMAGE_MINBYTES_BOB);
        assertThat(testFieldTestServiceClassEntity.getByteImageMinbytesBobContentType()).isEqualTo(UPDATED_BYTE_IMAGE_MINBYTES_BOB_CONTENT_TYPE);
        assertThat(testFieldTestServiceClassEntity.getByteImageMaxbytesBob()).isEqualTo(UPDATED_BYTE_IMAGE_MAXBYTES_BOB);
        assertThat(testFieldTestServiceClassEntity.getByteImageMaxbytesBobContentType()).isEqualTo(UPDATED_BYTE_IMAGE_MAXBYTES_BOB_CONTENT_TYPE);
        assertThat(testFieldTestServiceClassEntity.getByteAnyBob()).isEqualTo(UPDATED_BYTE_ANY_BOB);
        assertThat(testFieldTestServiceClassEntity.getByteAnyBobContentType()).isEqualTo(UPDATED_BYTE_ANY_BOB_CONTENT_TYPE);
        assertThat(testFieldTestServiceClassEntity.getByteAnyRequiredBob()).isEqualTo(UPDATED_BYTE_ANY_REQUIRED_BOB);
        assertThat(testFieldTestServiceClassEntity.getByteAnyRequiredBobContentType()).isEqualTo(UPDATED_BYTE_ANY_REQUIRED_BOB_CONTENT_TYPE);
        assertThat(testFieldTestServiceClassEntity.getByteAnyMinbytesBob()).isEqualTo(UPDATED_BYTE_ANY_MINBYTES_BOB);
        assertThat(testFieldTestServiceClassEntity.getByteAnyMinbytesBobContentType()).isEqualTo(UPDATED_BYTE_ANY_MINBYTES_BOB_CONTENT_TYPE);
        assertThat(testFieldTestServiceClassEntity.getByteAnyMaxbytesBob()).isEqualTo(UPDATED_BYTE_ANY_MAXBYTES_BOB);
        assertThat(testFieldTestServiceClassEntity.getByteAnyMaxbytesBobContentType()).isEqualTo(UPDATED_BYTE_ANY_MAXBYTES_BOB_CONTENT_TYPE);
        assertThat(testFieldTestServiceClassEntity.getByteTextBob()).isEqualTo(UPDATED_BYTE_TEXT_BOB);
        assertThat(testFieldTestServiceClassEntity.getByteTextRequiredBob()).isEqualTo(UPDATED_BYTE_TEXT_REQUIRED_BOB);
    }

    @Test
    @Transactional
    public void updateNonExistingFieldTestServiceClassEntity() throws Exception {
        int databaseSizeBeforeUpdate = fieldTestServiceClassEntityRepository.findAll().size();

        // Create the FieldTestServiceClassEntity

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restFieldTestServiceClassEntityMockMvc.perform(put("/api/field-test-service-class-entities")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(fieldTestServiceClassEntity)))
            .andExpect(status().isBadRequest());

        // Validate the FieldTestServiceClassEntity in the database
        List<FieldTestServiceClassEntity> fieldTestServiceClassEntityList = fieldTestServiceClassEntityRepository.findAll();
        assertThat(fieldTestServiceClassEntityList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deleteFieldTestServiceClassEntity() throws Exception {
        // Initialize the database
        fieldTestServiceClassEntityService.save(fieldTestServiceClassEntity);

        int databaseSizeBeforeDelete = fieldTestServiceClassEntityRepository.findAll().size();

        // Delete the fieldTestServiceClassEntity
        restFieldTestServiceClassEntityMockMvc.perform(delete("/api/field-test-service-class-entities/{id}", fieldTestServiceClassEntity.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<FieldTestServiceClassEntity> fieldTestServiceClassEntityList = fieldTestServiceClassEntityRepository.findAll();
        assertThat(fieldTestServiceClassEntityList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
