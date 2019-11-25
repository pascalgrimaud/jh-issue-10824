package io.github.jhipster.travis.service.dto;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import io.github.jhipster.travis.web.rest.TestUtil;

public class EntityWithServiceClassAndDTODTOTest {

    @Test
    public void dtoEqualsVerifier() throws Exception {
        TestUtil.equalsVerifier(EntityWithServiceClassAndDTODTO.class);
        EntityWithServiceClassAndDTODTO entityWithServiceClassAndDTODTO1 = new EntityWithServiceClassAndDTODTO();
        entityWithServiceClassAndDTODTO1.setId(1L);
        EntityWithServiceClassAndDTODTO entityWithServiceClassAndDTODTO2 = new EntityWithServiceClassAndDTODTO();
        assertThat(entityWithServiceClassAndDTODTO1).isNotEqualTo(entityWithServiceClassAndDTODTO2);
        entityWithServiceClassAndDTODTO2.setId(entityWithServiceClassAndDTODTO1.getId());
        assertThat(entityWithServiceClassAndDTODTO1).isEqualTo(entityWithServiceClassAndDTODTO2);
        entityWithServiceClassAndDTODTO2.setId(2L);
        assertThat(entityWithServiceClassAndDTODTO1).isNotEqualTo(entityWithServiceClassAndDTODTO2);
        entityWithServiceClassAndDTODTO1.setId(null);
        assertThat(entityWithServiceClassAndDTODTO1).isNotEqualTo(entityWithServiceClassAndDTODTO2);
    }
}
