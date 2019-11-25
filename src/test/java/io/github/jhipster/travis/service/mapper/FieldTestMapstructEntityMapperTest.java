package io.github.jhipster.travis.service.mapper;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;


public class FieldTestMapstructEntityMapperTest {

    private FieldTestMapstructEntityMapper fieldTestMapstructEntityMapper;

    @BeforeEach
    public void setUp() {
        fieldTestMapstructEntityMapper = new FieldTestMapstructEntityMapperImpl();
    }

    @Test
    public void testEntityFromId() {
        Long id = 2L;
        assertThat(fieldTestMapstructEntityMapper.fromId(id).getId()).isEqualTo(id);
        assertThat(fieldTestMapstructEntityMapper.fromId(null)).isNull();
    }
}
