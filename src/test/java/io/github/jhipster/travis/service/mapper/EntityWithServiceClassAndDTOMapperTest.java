package io.github.jhipster.travis.service.mapper;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;


public class EntityWithServiceClassAndDTOMapperTest {

    private EntityWithServiceClassAndDTOMapper entityWithServiceClassAndDTOMapper;

    @BeforeEach
    public void setUp() {
        entityWithServiceClassAndDTOMapper = new EntityWithServiceClassAndDTOMapperImpl();
    }

    @Test
    public void testEntityFromId() {
        Long id = 2L;
        assertThat(entityWithServiceClassAndDTOMapper.fromId(id).getId()).isEqualTo(id);
        assertThat(entityWithServiceClassAndDTOMapper.fromId(null)).isNull();
    }
}
