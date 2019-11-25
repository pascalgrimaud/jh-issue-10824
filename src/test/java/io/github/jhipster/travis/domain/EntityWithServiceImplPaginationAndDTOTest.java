package io.github.jhipster.travis.domain;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import io.github.jhipster.travis.web.rest.TestUtil;

public class EntityWithServiceImplPaginationAndDTOTest {

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(EntityWithServiceImplPaginationAndDTO.class);
        EntityWithServiceImplPaginationAndDTO entityWithServiceImplPaginationAndDTO1 = new EntityWithServiceImplPaginationAndDTO();
        entityWithServiceImplPaginationAndDTO1.setId(1L);
        EntityWithServiceImplPaginationAndDTO entityWithServiceImplPaginationAndDTO2 = new EntityWithServiceImplPaginationAndDTO();
        entityWithServiceImplPaginationAndDTO2.setId(entityWithServiceImplPaginationAndDTO1.getId());
        assertThat(entityWithServiceImplPaginationAndDTO1).isEqualTo(entityWithServiceImplPaginationAndDTO2);
        entityWithServiceImplPaginationAndDTO2.setId(2L);
        assertThat(entityWithServiceImplPaginationAndDTO1).isNotEqualTo(entityWithServiceImplPaginationAndDTO2);
        entityWithServiceImplPaginationAndDTO1.setId(null);
        assertThat(entityWithServiceImplPaginationAndDTO1).isNotEqualTo(entityWithServiceImplPaginationAndDTO2);
    }
}
