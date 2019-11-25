package io.github.jhipster.travis.service.dto;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import io.github.jhipster.travis.web.rest.TestUtil;

public class MapsIdUserProfileWithDTODTOTest {

    @Test
    public void dtoEqualsVerifier() throws Exception {
        TestUtil.equalsVerifier(MapsIdUserProfileWithDTODTO.class);
        MapsIdUserProfileWithDTODTO mapsIdUserProfileWithDTODTO1 = new MapsIdUserProfileWithDTODTO();
        mapsIdUserProfileWithDTODTO1.setId(1L);
        MapsIdUserProfileWithDTODTO mapsIdUserProfileWithDTODTO2 = new MapsIdUserProfileWithDTODTO();
        assertThat(mapsIdUserProfileWithDTODTO1).isNotEqualTo(mapsIdUserProfileWithDTODTO2);
        mapsIdUserProfileWithDTODTO2.setId(mapsIdUserProfileWithDTODTO1.getId());
        assertThat(mapsIdUserProfileWithDTODTO1).isEqualTo(mapsIdUserProfileWithDTODTO2);
        mapsIdUserProfileWithDTODTO2.setId(2L);
        assertThat(mapsIdUserProfileWithDTODTO1).isNotEqualTo(mapsIdUserProfileWithDTODTO2);
        mapsIdUserProfileWithDTODTO1.setId(null);
        assertThat(mapsIdUserProfileWithDTODTO1).isNotEqualTo(mapsIdUserProfileWithDTODTO2);
    }
}
