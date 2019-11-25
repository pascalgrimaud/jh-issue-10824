package io.github.jhipster.travis.domain;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import io.github.jhipster.travis.web.rest.TestUtil;

public class MapsIdChildEntityWithDTOTest {

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(MapsIdChildEntityWithDTO.class);
        MapsIdChildEntityWithDTO mapsIdChildEntityWithDTO1 = new MapsIdChildEntityWithDTO();
        mapsIdChildEntityWithDTO1.setId(1L);
        MapsIdChildEntityWithDTO mapsIdChildEntityWithDTO2 = new MapsIdChildEntityWithDTO();
        mapsIdChildEntityWithDTO2.setId(mapsIdChildEntityWithDTO1.getId());
        assertThat(mapsIdChildEntityWithDTO1).isEqualTo(mapsIdChildEntityWithDTO2);
        mapsIdChildEntityWithDTO2.setId(2L);
        assertThat(mapsIdChildEntityWithDTO1).isNotEqualTo(mapsIdChildEntityWithDTO2);
        mapsIdChildEntityWithDTO1.setId(null);
        assertThat(mapsIdChildEntityWithDTO1).isNotEqualTo(mapsIdChildEntityWithDTO2);
    }
}
