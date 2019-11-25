package io.github.jhipster.travis.service.dto;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import io.github.jhipster.travis.web.rest.TestUtil;

public class EntityWithPaginationAndDTODTOTest {

    @Test
    public void dtoEqualsVerifier() throws Exception {
        TestUtil.equalsVerifier(EntityWithPaginationAndDTODTO.class);
        EntityWithPaginationAndDTODTO entityWithPaginationAndDTODTO1 = new EntityWithPaginationAndDTODTO();
        entityWithPaginationAndDTODTO1.setId(1L);
        EntityWithPaginationAndDTODTO entityWithPaginationAndDTODTO2 = new EntityWithPaginationAndDTODTO();
        assertThat(entityWithPaginationAndDTODTO1).isNotEqualTo(entityWithPaginationAndDTODTO2);
        entityWithPaginationAndDTODTO2.setId(entityWithPaginationAndDTODTO1.getId());
        assertThat(entityWithPaginationAndDTODTO1).isEqualTo(entityWithPaginationAndDTODTO2);
        entityWithPaginationAndDTODTO2.setId(2L);
        assertThat(entityWithPaginationAndDTODTO1).isNotEqualTo(entityWithPaginationAndDTODTO2);
        entityWithPaginationAndDTODTO1.setId(null);
        assertThat(entityWithPaginationAndDTODTO1).isNotEqualTo(entityWithPaginationAndDTODTO2);
    }
}
