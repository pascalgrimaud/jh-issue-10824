package io.github.jhipster.travis.domain;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import io.github.jhipster.travis.web.rest.TestUtil;

public class SuperMegaLargeTestEntityTest {

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(SuperMegaLargeTestEntity.class);
        SuperMegaLargeTestEntity superMegaLargeTestEntity1 = new SuperMegaLargeTestEntity();
        superMegaLargeTestEntity1.setId(1L);
        SuperMegaLargeTestEntity superMegaLargeTestEntity2 = new SuperMegaLargeTestEntity();
        superMegaLargeTestEntity2.setId(superMegaLargeTestEntity1.getId());
        assertThat(superMegaLargeTestEntity1).isEqualTo(superMegaLargeTestEntity2);
        superMegaLargeTestEntity2.setId(2L);
        assertThat(superMegaLargeTestEntity1).isNotEqualTo(superMegaLargeTestEntity2);
        superMegaLargeTestEntity1.setId(null);
        assertThat(superMegaLargeTestEntity1).isNotEqualTo(superMegaLargeTestEntity2);
    }
}
