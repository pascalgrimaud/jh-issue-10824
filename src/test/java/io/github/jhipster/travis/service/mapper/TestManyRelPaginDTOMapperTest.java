package io.github.jhipster.travis.service.mapper;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;


public class TestManyRelPaginDTOMapperTest {

    private TestManyRelPaginDTOMapper testManyRelPaginDTOMapper;

    @BeforeEach
    public void setUp() {
        testManyRelPaginDTOMapper = new TestManyRelPaginDTOMapperImpl();
    }

    @Test
    public void testEntityFromId() {
        Long id = 2L;
        assertThat(testManyRelPaginDTOMapper.fromId(id).getId()).isEqualTo(id);
        assertThat(testManyRelPaginDTOMapper.fromId(null)).isNull();
    }
}
