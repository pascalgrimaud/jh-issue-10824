package io.github.jhipster.travis.domain;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import io.github.jhipster.travis.web.rest.TestUtil;

public class TestOneToOneTest {

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(TestOneToOne.class);
        TestOneToOne testOneToOne1 = new TestOneToOne();
        testOneToOne1.setId(1L);
        TestOneToOne testOneToOne2 = new TestOneToOne();
        testOneToOne2.setId(testOneToOne1.getId());
        assertThat(testOneToOne1).isEqualTo(testOneToOne2);
        testOneToOne2.setId(2L);
        assertThat(testOneToOne1).isNotEqualTo(testOneToOne2);
        testOneToOne1.setId(null);
        assertThat(testOneToOne1).isNotEqualTo(testOneToOne2);
    }
}
