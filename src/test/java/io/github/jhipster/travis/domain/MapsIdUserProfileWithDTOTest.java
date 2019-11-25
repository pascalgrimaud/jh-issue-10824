package io.github.jhipster.travis.domain;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import io.github.jhipster.travis.web.rest.TestUtil;

public class MapsIdUserProfileWithDTOTest {

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(MapsIdUserProfileWithDTO.class);
        MapsIdUserProfileWithDTO mapsIdUserProfileWithDTO1 = new MapsIdUserProfileWithDTO();
        mapsIdUserProfileWithDTO1.setId(1L);
        MapsIdUserProfileWithDTO mapsIdUserProfileWithDTO2 = new MapsIdUserProfileWithDTO();
        mapsIdUserProfileWithDTO2.setId(mapsIdUserProfileWithDTO1.getId());
        assertThat(mapsIdUserProfileWithDTO1).isEqualTo(mapsIdUserProfileWithDTO2);
        mapsIdUserProfileWithDTO2.setId(2L);
        assertThat(mapsIdUserProfileWithDTO1).isNotEqualTo(mapsIdUserProfileWithDTO2);
        mapsIdUserProfileWithDTO1.setId(null);
        assertThat(mapsIdUserProfileWithDTO1).isNotEqualTo(mapsIdUserProfileWithDTO2);
    }
}
