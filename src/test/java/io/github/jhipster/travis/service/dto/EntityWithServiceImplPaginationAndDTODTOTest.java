package io.github.jhipster.travis.service.dto;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import io.github.jhipster.travis.web.rest.TestUtil;

public class EntityWithServiceImplPaginationAndDTODTOTest {

    @Test
    public void dtoEqualsVerifier() throws Exception {
        TestUtil.equalsVerifier(EntityWithServiceImplPaginationAndDTODTO.class);
        EntityWithServiceImplPaginationAndDTODTO entityWithServiceImplPaginationAndDTODTO1 = new EntityWithServiceImplPaginationAndDTODTO();
        entityWithServiceImplPaginationAndDTODTO1.setId(1L);
        EntityWithServiceImplPaginationAndDTODTO entityWithServiceImplPaginationAndDTODTO2 = new EntityWithServiceImplPaginationAndDTODTO();
        assertThat(entityWithServiceImplPaginationAndDTODTO1).isNotEqualTo(entityWithServiceImplPaginationAndDTODTO2);
        entityWithServiceImplPaginationAndDTODTO2.setId(entityWithServiceImplPaginationAndDTODTO1.getId());
        assertThat(entityWithServiceImplPaginationAndDTODTO1).isEqualTo(entityWithServiceImplPaginationAndDTODTO2);
        entityWithServiceImplPaginationAndDTODTO2.setId(2L);
        assertThat(entityWithServiceImplPaginationAndDTODTO1).isNotEqualTo(entityWithServiceImplPaginationAndDTODTO2);
        entityWithServiceImplPaginationAndDTODTO1.setId(null);
        assertThat(entityWithServiceImplPaginationAndDTODTO1).isNotEqualTo(entityWithServiceImplPaginationAndDTODTO2);
    }
}
