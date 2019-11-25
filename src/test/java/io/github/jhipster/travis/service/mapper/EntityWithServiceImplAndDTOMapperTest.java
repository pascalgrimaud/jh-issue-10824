package io.github.jhipster.travis.service.mapper;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;


public class EntityWithServiceImplAndDTOMapperTest {

    private EntityWithServiceImplAndDTOMapper entityWithServiceImplAndDTOMapper;

    @BeforeEach
    public void setUp() {
        entityWithServiceImplAndDTOMapper = new EntityWithServiceImplAndDTOMapperImpl();
    }

    @Test
    public void testEntityFromId() {
        Long id = 2L;
        assertThat(entityWithServiceImplAndDTOMapper.fromId(id).getId()).isEqualTo(id);
        assertThat(entityWithServiceImplAndDTOMapper.fromId(null)).isNull();
    }
}
