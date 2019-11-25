package io.github.jhipster.travis.domain;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import io.github.jhipster.travis.web.rest.TestUtil;

public class TestManyToManyTest {

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(TestManyToMany.class);
        TestManyToMany testManyToMany1 = new TestManyToMany();
        testManyToMany1.setId(1L);
        TestManyToMany testManyToMany2 = new TestManyToMany();
        testManyToMany2.setId(testManyToMany1.getId());
        assertThat(testManyToMany1).isEqualTo(testManyToMany2);
        testManyToMany2.setId(2L);
        assertThat(testManyToMany1).isNotEqualTo(testManyToMany2);
        testManyToMany1.setId(null);
        assertThat(testManyToMany1).isNotEqualTo(testManyToMany2);
    }
}
