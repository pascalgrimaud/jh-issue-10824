package io.github.jhipster.travis.domain;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import io.github.jhipster.travis.web.rest.TestUtil;

public class MapsIdParentEntityWithoutDTOTest {

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(MapsIdParentEntityWithoutDTO.class);
        MapsIdParentEntityWithoutDTO mapsIdParentEntityWithoutDTO1 = new MapsIdParentEntityWithoutDTO();
        mapsIdParentEntityWithoutDTO1.setId(1L);
        MapsIdParentEntityWithoutDTO mapsIdParentEntityWithoutDTO2 = new MapsIdParentEntityWithoutDTO();
        mapsIdParentEntityWithoutDTO2.setId(mapsIdParentEntityWithoutDTO1.getId());
        assertThat(mapsIdParentEntityWithoutDTO1).isEqualTo(mapsIdParentEntityWithoutDTO2);
        mapsIdParentEntityWithoutDTO2.setId(2L);
        assertThat(mapsIdParentEntityWithoutDTO1).isNotEqualTo(mapsIdParentEntityWithoutDTO2);
        mapsIdParentEntityWithoutDTO1.setId(null);
        assertThat(mapsIdParentEntityWithoutDTO1).isNotEqualTo(mapsIdParentEntityWithoutDTO2);
    }
}
