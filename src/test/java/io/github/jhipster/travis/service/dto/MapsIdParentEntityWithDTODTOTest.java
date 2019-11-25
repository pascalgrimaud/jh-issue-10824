package io.github.jhipster.travis.service.dto;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import io.github.jhipster.travis.web.rest.TestUtil;

public class MapsIdParentEntityWithDTODTOTest {

    @Test
    public void dtoEqualsVerifier() throws Exception {
        TestUtil.equalsVerifier(MapsIdParentEntityWithDTODTO.class);
        MapsIdParentEntityWithDTODTO mapsIdParentEntityWithDTODTO1 = new MapsIdParentEntityWithDTODTO();
        mapsIdParentEntityWithDTODTO1.setId(1L);
        MapsIdParentEntityWithDTODTO mapsIdParentEntityWithDTODTO2 = new MapsIdParentEntityWithDTODTO();
        assertThat(mapsIdParentEntityWithDTODTO1).isNotEqualTo(mapsIdParentEntityWithDTODTO2);
        mapsIdParentEntityWithDTODTO2.setId(mapsIdParentEntityWithDTODTO1.getId());
        assertThat(mapsIdParentEntityWithDTODTO1).isEqualTo(mapsIdParentEntityWithDTODTO2);
        mapsIdParentEntityWithDTODTO2.setId(2L);
        assertThat(mapsIdParentEntityWithDTODTO1).isNotEqualTo(mapsIdParentEntityWithDTODTO2);
        mapsIdParentEntityWithDTODTO1.setId(null);
        assertThat(mapsIdParentEntityWithDTODTO1).isNotEqualTo(mapsIdParentEntityWithDTODTO2);
    }
}
