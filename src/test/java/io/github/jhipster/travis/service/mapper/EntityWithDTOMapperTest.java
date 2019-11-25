package io.github.jhipster.travis.service.mapper;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;


public class EntityWithDTOMapperTest {

    private EntityWithDTOMapper entityWithDTOMapper;

    @BeforeEach
    public void setUp() {
        entityWithDTOMapper = new EntityWithDTOMapperImpl();
    }

    @Test
    public void testEntityFromId() {
        Long id = 2L;
        assertThat(entityWithDTOMapper.fromId(id).getId()).isEqualTo(id);
        assertThat(entityWithDTOMapper.fromId(null)).isNull();
    }
}
