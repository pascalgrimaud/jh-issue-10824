package io.github.jhipster.travis.domain;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import io.github.jhipster.travis.web.rest.TestUtil;

public class EntityWithServiceClassAndDTOTest {

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(EntityWithServiceClassAndDTO.class);
        EntityWithServiceClassAndDTO entityWithServiceClassAndDTO1 = new EntityWithServiceClassAndDTO();
        entityWithServiceClassAndDTO1.setId(1L);
        EntityWithServiceClassAndDTO entityWithServiceClassAndDTO2 = new EntityWithServiceClassAndDTO();
        entityWithServiceClassAndDTO2.setId(entityWithServiceClassAndDTO1.getId());
        assertThat(entityWithServiceClassAndDTO1).isEqualTo(entityWithServiceClassAndDTO2);
        entityWithServiceClassAndDTO2.setId(2L);
        assertThat(entityWithServiceClassAndDTO1).isNotEqualTo(entityWithServiceClassAndDTO2);
        entityWithServiceClassAndDTO1.setId(null);
        assertThat(entityWithServiceClassAndDTO1).isNotEqualTo(entityWithServiceClassAndDTO2);
    }
}
