package io.github.jhipster.travis.domain;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import io.github.jhipster.travis.web.rest.TestUtil;

public class MapsIdChildEntityWithoutDTOTest {

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(MapsIdChildEntityWithoutDTO.class);
        MapsIdChildEntityWithoutDTO mapsIdChildEntityWithoutDTO1 = new MapsIdChildEntityWithoutDTO();
        mapsIdChildEntityWithoutDTO1.setId(1L);
        MapsIdChildEntityWithoutDTO mapsIdChildEntityWithoutDTO2 = new MapsIdChildEntityWithoutDTO();
        mapsIdChildEntityWithoutDTO2.setId(mapsIdChildEntityWithoutDTO1.getId());
        assertThat(mapsIdChildEntityWithoutDTO1).isEqualTo(mapsIdChildEntityWithoutDTO2);
        mapsIdChildEntityWithoutDTO2.setId(2L);
        assertThat(mapsIdChildEntityWithoutDTO1).isNotEqualTo(mapsIdChildEntityWithoutDTO2);
        mapsIdChildEntityWithoutDTO1.setId(null);
        assertThat(mapsIdChildEntityWithoutDTO1).isNotEqualTo(mapsIdChildEntityWithoutDTO2);
    }
}
