package io.github.jhipster.travis.service.dto;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import io.github.jhipster.travis.web.rest.TestUtil;

public class MapsIdChildEntityWithDTODTOTest {

    @Test
    public void dtoEqualsVerifier() throws Exception {
        TestUtil.equalsVerifier(MapsIdChildEntityWithDTODTO.class);
        MapsIdChildEntityWithDTODTO mapsIdChildEntityWithDTODTO1 = new MapsIdChildEntityWithDTODTO();
        mapsIdChildEntityWithDTODTO1.setId(1L);
        MapsIdChildEntityWithDTODTO mapsIdChildEntityWithDTODTO2 = new MapsIdChildEntityWithDTODTO();
        assertThat(mapsIdChildEntityWithDTODTO1).isNotEqualTo(mapsIdChildEntityWithDTODTO2);
        mapsIdChildEntityWithDTODTO2.setId(mapsIdChildEntityWithDTODTO1.getId());
        assertThat(mapsIdChildEntityWithDTODTO1).isEqualTo(mapsIdChildEntityWithDTODTO2);
        mapsIdChildEntityWithDTODTO2.setId(2L);
        assertThat(mapsIdChildEntityWithDTODTO1).isNotEqualTo(mapsIdChildEntityWithDTODTO2);
        mapsIdChildEntityWithDTODTO1.setId(null);
        assertThat(mapsIdChildEntityWithDTODTO1).isNotEqualTo(mapsIdChildEntityWithDTODTO2);
    }
}
