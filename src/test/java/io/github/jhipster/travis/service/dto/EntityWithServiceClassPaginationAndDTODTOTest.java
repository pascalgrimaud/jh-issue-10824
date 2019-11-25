package io.github.jhipster.travis.service.dto;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import io.github.jhipster.travis.web.rest.TestUtil;

public class EntityWithServiceClassPaginationAndDTODTOTest {

    @Test
    public void dtoEqualsVerifier() throws Exception {
        TestUtil.equalsVerifier(EntityWithServiceClassPaginationAndDTODTO.class);
        EntityWithServiceClassPaginationAndDTODTO entityWithServiceClassPaginationAndDTODTO1 = new EntityWithServiceClassPaginationAndDTODTO();
        entityWithServiceClassPaginationAndDTODTO1.setId(1L);
        EntityWithServiceClassPaginationAndDTODTO entityWithServiceClassPaginationAndDTODTO2 = new EntityWithServiceClassPaginationAndDTODTO();
        assertThat(entityWithServiceClassPaginationAndDTODTO1).isNotEqualTo(entityWithServiceClassPaginationAndDTODTO2);
        entityWithServiceClassPaginationAndDTODTO2.setId(entityWithServiceClassPaginationAndDTODTO1.getId());
        assertThat(entityWithServiceClassPaginationAndDTODTO1).isEqualTo(entityWithServiceClassPaginationAndDTODTO2);
        entityWithServiceClassPaginationAndDTODTO2.setId(2L);
        assertThat(entityWithServiceClassPaginationAndDTODTO1).isNotEqualTo(entityWithServiceClassPaginationAndDTODTO2);
        entityWithServiceClassPaginationAndDTODTO1.setId(null);
        assertThat(entityWithServiceClassPaginationAndDTODTO1).isNotEqualTo(entityWithServiceClassPaginationAndDTODTO2);
    }
}
