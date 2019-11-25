package io.github.jhipster.travis.service.dto;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import io.github.jhipster.travis.web.rest.TestUtil;

public class EntityWithServiceImplAndDTODTOTest {

    @Test
    public void dtoEqualsVerifier() throws Exception {
        TestUtil.equalsVerifier(EntityWithServiceImplAndDTODTO.class);
        EntityWithServiceImplAndDTODTO entityWithServiceImplAndDTODTO1 = new EntityWithServiceImplAndDTODTO();
        entityWithServiceImplAndDTODTO1.setId(1L);
        EntityWithServiceImplAndDTODTO entityWithServiceImplAndDTODTO2 = new EntityWithServiceImplAndDTODTO();
        assertThat(entityWithServiceImplAndDTODTO1).isNotEqualTo(entityWithServiceImplAndDTODTO2);
        entityWithServiceImplAndDTODTO2.setId(entityWithServiceImplAndDTODTO1.getId());
        assertThat(entityWithServiceImplAndDTODTO1).isEqualTo(entityWithServiceImplAndDTODTO2);
        entityWithServiceImplAndDTODTO2.setId(2L);
        assertThat(entityWithServiceImplAndDTODTO1).isNotEqualTo(entityWithServiceImplAndDTODTO2);
        entityWithServiceImplAndDTODTO1.setId(null);
        assertThat(entityWithServiceImplAndDTODTO1).isNotEqualTo(entityWithServiceImplAndDTODTO2);
    }
}
