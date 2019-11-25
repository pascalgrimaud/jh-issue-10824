package io.github.jhipster.travis.domain;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import io.github.jhipster.travis.web.rest.TestUtil;

public class TestManyToOneTest {

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(TestManyToOne.class);
        TestManyToOne testManyToOne1 = new TestManyToOne();
        testManyToOne1.setId(1L);
        TestManyToOne testManyToOne2 = new TestManyToOne();
        testManyToOne2.setId(testManyToOne1.getId());
        assertThat(testManyToOne1).isEqualTo(testManyToOne2);
        testManyToOne2.setId(2L);
        assertThat(testManyToOne1).isNotEqualTo(testManyToOne2);
        testManyToOne1.setId(null);
        assertThat(testManyToOne1).isNotEqualTo(testManyToOne2);
    }
}
