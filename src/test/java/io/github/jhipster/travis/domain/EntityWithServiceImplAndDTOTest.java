package io.github.jhipster.travis.domain;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import io.github.jhipster.travis.web.rest.TestUtil;

public class EntityWithServiceImplAndDTOTest {

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(EntityWithServiceImplAndDTO.class);
        EntityWithServiceImplAndDTO entityWithServiceImplAndDTO1 = new EntityWithServiceImplAndDTO();
        entityWithServiceImplAndDTO1.setId(1L);
        EntityWithServiceImplAndDTO entityWithServiceImplAndDTO2 = new EntityWithServiceImplAndDTO();
        entityWithServiceImplAndDTO2.setId(entityWithServiceImplAndDTO1.getId());
        assertThat(entityWithServiceImplAndDTO1).isEqualTo(entityWithServiceImplAndDTO2);
        entityWithServiceImplAndDTO2.setId(2L);
        assertThat(entityWithServiceImplAndDTO1).isNotEqualTo(entityWithServiceImplAndDTO2);
        entityWithServiceImplAndDTO1.setId(null);
        assertThat(entityWithServiceImplAndDTO1).isNotEqualTo(entityWithServiceImplAndDTO2);
    }
}
