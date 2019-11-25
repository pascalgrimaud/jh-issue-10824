package io.github.jhipster.travis.domain;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import io.github.jhipster.travis.web.rest.TestUtil;

public class EntityWithDTOTest {

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(EntityWithDTO.class);
        EntityWithDTO entityWithDTO1 = new EntityWithDTO();
        entityWithDTO1.setId(1L);
        EntityWithDTO entityWithDTO2 = new EntityWithDTO();
        entityWithDTO2.setId(entityWithDTO1.getId());
        assertThat(entityWithDTO1).isEqualTo(entityWithDTO2);
        entityWithDTO2.setId(2L);
        assertThat(entityWithDTO1).isNotEqualTo(entityWithDTO2);
        entityWithDTO1.setId(null);
        assertThat(entityWithDTO1).isNotEqualTo(entityWithDTO2);
    }
}
