package io.github.jhipster.travis.domain;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import io.github.jhipster.travis.web.rest.TestUtil;

public class MapsIdParentEntityWithDTOTest {

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(MapsIdParentEntityWithDTO.class);
        MapsIdParentEntityWithDTO mapsIdParentEntityWithDTO1 = new MapsIdParentEntityWithDTO();
        mapsIdParentEntityWithDTO1.setId(1L);
        MapsIdParentEntityWithDTO mapsIdParentEntityWithDTO2 = new MapsIdParentEntityWithDTO();
        mapsIdParentEntityWithDTO2.setId(mapsIdParentEntityWithDTO1.getId());
        assertThat(mapsIdParentEntityWithDTO1).isEqualTo(mapsIdParentEntityWithDTO2);
        mapsIdParentEntityWithDTO2.setId(2L);
        assertThat(mapsIdParentEntityWithDTO1).isNotEqualTo(mapsIdParentEntityWithDTO2);
        mapsIdParentEntityWithDTO1.setId(null);
        assertThat(mapsIdParentEntityWithDTO1).isNotEqualTo(mapsIdParentEntityWithDTO2);
    }
}
