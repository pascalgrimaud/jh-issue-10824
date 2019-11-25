package io.github.jhipster.travis.domain;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import io.github.jhipster.travis.web.rest.TestUtil;

public class EntityWithServiceImplAndPaginationTest {

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(EntityWithServiceImplAndPagination.class);
        EntityWithServiceImplAndPagination entityWithServiceImplAndPagination1 = new EntityWithServiceImplAndPagination();
        entityWithServiceImplAndPagination1.setId(1L);
        EntityWithServiceImplAndPagination entityWithServiceImplAndPagination2 = new EntityWithServiceImplAndPagination();
        entityWithServiceImplAndPagination2.setId(entityWithServiceImplAndPagination1.getId());
        assertThat(entityWithServiceImplAndPagination1).isEqualTo(entityWithServiceImplAndPagination2);
        entityWithServiceImplAndPagination2.setId(2L);
        assertThat(entityWithServiceImplAndPagination1).isNotEqualTo(entityWithServiceImplAndPagination2);
        entityWithServiceImplAndPagination1.setId(null);
        assertThat(entityWithServiceImplAndPagination1).isNotEqualTo(entityWithServiceImplAndPagination2);
    }
}
