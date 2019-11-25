package io.github.jhipster.travis.service.mapper;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;


public class MapsIdParentEntityWithDTOMapperTest {

    private MapsIdParentEntityWithDTOMapper mapsIdParentEntityWithDTOMapper;

    @BeforeEach
    public void setUp() {
        mapsIdParentEntityWithDTOMapper = new MapsIdParentEntityWithDTOMapperImpl();
    }

    @Test
    public void testEntityFromId() {
        Long id = 2L;
        assertThat(mapsIdParentEntityWithDTOMapper.fromId(id).getId()).isEqualTo(id);
        assertThat(mapsIdParentEntityWithDTOMapper.fromId(null)).isNull();
    }
}
