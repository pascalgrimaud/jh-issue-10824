package io.github.jhipster.travis.service.dto;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import io.github.jhipster.travis.web.rest.TestUtil;

public class EntityWithDTODTOTest {

    @Test
    public void dtoEqualsVerifier() throws Exception {
        TestUtil.equalsVerifier(EntityWithDTODTO.class);
        EntityWithDTODTO entityWithDTODTO1 = new EntityWithDTODTO();
        entityWithDTODTO1.setId(1L);
        EntityWithDTODTO entityWithDTODTO2 = new EntityWithDTODTO();
        assertThat(entityWithDTODTO1).isNotEqualTo(entityWithDTODTO2);
        entityWithDTODTO2.setId(entityWithDTODTO1.getId());
        assertThat(entityWithDTODTO1).isEqualTo(entityWithDTODTO2);
        entityWithDTODTO2.setId(2L);
        assertThat(entityWithDTODTO1).isNotEqualTo(entityWithDTODTO2);
        entityWithDTODTO1.setId(null);
        assertThat(entityWithDTODTO1).isNotEqualTo(entityWithDTODTO2);
    }
}
