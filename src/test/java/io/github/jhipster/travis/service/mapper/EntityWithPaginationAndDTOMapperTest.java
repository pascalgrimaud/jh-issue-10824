package io.github.jhipster.travis.service.mapper;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;


public class EntityWithPaginationAndDTOMapperTest {

    private EntityWithPaginationAndDTOMapper entityWithPaginationAndDTOMapper;

    @BeforeEach
    public void setUp() {
        entityWithPaginationAndDTOMapper = new EntityWithPaginationAndDTOMapperImpl();
    }

    @Test
    public void testEntityFromId() {
        Long id = 2L;
        assertThat(entityWithPaginationAndDTOMapper.fromId(id).getId()).isEqualTo(id);
        assertThat(entityWithPaginationAndDTOMapper.fromId(null)).isNull();
    }
}
