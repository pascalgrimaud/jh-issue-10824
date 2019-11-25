package io.github.jhipster.travis.service.mapper;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;


public class EntityWithServiceClassPaginationAndDTOMapperTest {

    private EntityWithServiceClassPaginationAndDTOMapper entityWithServiceClassPaginationAndDTOMapper;

    @BeforeEach
    public void setUp() {
        entityWithServiceClassPaginationAndDTOMapper = new EntityWithServiceClassPaginationAndDTOMapperImpl();
    }

    @Test
    public void testEntityFromId() {
        Long id = 2L;
        assertThat(entityWithServiceClassPaginationAndDTOMapper.fromId(id).getId()).isEqualTo(id);
        assertThat(entityWithServiceClassPaginationAndDTOMapper.fromId(null)).isNull();
    }
}
