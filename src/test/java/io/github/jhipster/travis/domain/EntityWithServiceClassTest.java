package io.github.jhipster.travis.domain;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import io.github.jhipster.travis.web.rest.TestUtil;

public class EntityWithServiceClassTest {

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(EntityWithServiceClass.class);
        EntityWithServiceClass entityWithServiceClass1 = new EntityWithServiceClass();
        entityWithServiceClass1.setId(1L);
        EntityWithServiceClass entityWithServiceClass2 = new EntityWithServiceClass();
        entityWithServiceClass2.setId(entityWithServiceClass1.getId());
        assertThat(entityWithServiceClass1).isEqualTo(entityWithServiceClass2);
        entityWithServiceClass2.setId(2L);
        assertThat(entityWithServiceClass1).isNotEqualTo(entityWithServiceClass2);
        entityWithServiceClass1.setId(null);
        assertThat(entityWithServiceClass1).isNotEqualTo(entityWithServiceClass2);
    }
}
