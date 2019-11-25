package io.github.jhipster.travis.domain;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import io.github.jhipster.travis.web.rest.TestUtil;

public class EntityWithPaginationTest {

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(EntityWithPagination.class);
        EntityWithPagination entityWithPagination1 = new EntityWithPagination();
        entityWithPagination1.setId(1L);
        EntityWithPagination entityWithPagination2 = new EntityWithPagination();
        entityWithPagination2.setId(entityWithPagination1.getId());
        assertThat(entityWithPagination1).isEqualTo(entityWithPagination2);
        entityWithPagination2.setId(2L);
        assertThat(entityWithPagination1).isNotEqualTo(entityWithPagination2);
        entityWithPagination1.setId(null);
        assertThat(entityWithPagination1).isNotEqualTo(entityWithPagination2);
    }
}
