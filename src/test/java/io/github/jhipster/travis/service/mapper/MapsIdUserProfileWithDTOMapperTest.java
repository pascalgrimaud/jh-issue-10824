package io.github.jhipster.travis.service.mapper;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;


public class MapsIdUserProfileWithDTOMapperTest {

    private MapsIdUserProfileWithDTOMapper mapsIdUserProfileWithDTOMapper;

    @BeforeEach
    public void setUp() {
        mapsIdUserProfileWithDTOMapper = new MapsIdUserProfileWithDTOMapperImpl();
    }

    @Test
    public void testEntityFromId() {
        Long id = 2L;
        assertThat(mapsIdUserProfileWithDTOMapper.fromId(id).getId()).isEqualTo(id);
        assertThat(mapsIdUserProfileWithDTOMapper.fromId(null)).isNull();
    }
}
