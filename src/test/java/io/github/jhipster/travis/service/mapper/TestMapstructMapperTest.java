package io.github.jhipster.travis.service.mapper;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;


public class TestMapstructMapperTest {

    private TestMapstructMapper testMapstructMapper;

    @BeforeEach
    public void setUp() {
        testMapstructMapper = new TestMapstructMapperImpl();
    }

    @Test
    public void testEntityFromId() {
        Long id = 2L;
        assertThat(testMapstructMapper.fromId(id).getId()).isEqualTo(id);
        assertThat(testMapstructMapper.fromId(null)).isNull();
    }
}
