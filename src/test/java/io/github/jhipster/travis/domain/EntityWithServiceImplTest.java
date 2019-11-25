package io.github.jhipster.travis.domain;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import io.github.jhipster.travis.web.rest.TestUtil;

public class EntityWithServiceImplTest {

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(EntityWithServiceImpl.class);
        EntityWithServiceImpl entityWithServiceImpl1 = new EntityWithServiceImpl();
        entityWithServiceImpl1.setId(1L);
        EntityWithServiceImpl entityWithServiceImpl2 = new EntityWithServiceImpl();
        entityWithServiceImpl2.setId(entityWithServiceImpl1.getId());
        assertThat(entityWithServiceImpl1).isEqualTo(entityWithServiceImpl2);
        entityWithServiceImpl2.setId(2L);
        assertThat(entityWithServiceImpl1).isNotEqualTo(entityWithServiceImpl2);
        entityWithServiceImpl1.setId(null);
        assertThat(entityWithServiceImpl1).isNotEqualTo(entityWithServiceImpl2);
    }
}
