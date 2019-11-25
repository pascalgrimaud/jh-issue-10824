package io.github.jhipster.travis.service.mapper;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;


public class MapsIdChildEntityWithDTOMapperTest {

    private MapsIdChildEntityWithDTOMapper mapsIdChildEntityWithDTOMapper;

    @BeforeEach
    public void setUp() {
        mapsIdChildEntityWithDTOMapper = new MapsIdChildEntityWithDTOMapperImpl();
    }

    @Test
    public void testEntityFromId() {
        Long id = 2L;
        assertThat(mapsIdChildEntityWithDTOMapper.fromId(id).getId()).isEqualTo(id);
        assertThat(mapsIdChildEntityWithDTOMapper.fromId(null)).isNull();
    }
}
