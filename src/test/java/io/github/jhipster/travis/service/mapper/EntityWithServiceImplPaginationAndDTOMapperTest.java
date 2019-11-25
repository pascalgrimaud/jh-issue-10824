package io.github.jhipster.travis.service.mapper;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;


public class EntityWithServiceImplPaginationAndDTOMapperTest {

    private EntityWithServiceImplPaginationAndDTOMapper entityWithServiceImplPaginationAndDTOMapper;

    @BeforeEach
    public void setUp() {
        entityWithServiceImplPaginationAndDTOMapper = new EntityWithServiceImplPaginationAndDTOMapperImpl();
    }

    @Test
    public void testEntityFromId() {
        Long id = 2L;
        assertThat(entityWithServiceImplPaginationAndDTOMapper.fromId(id).getId()).isEqualTo(id);
        assertThat(entityWithServiceImplPaginationAndDTOMapper.fromId(null)).isNull();
    }
}
