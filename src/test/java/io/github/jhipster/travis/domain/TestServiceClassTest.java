package io.github.jhipster.travis.domain;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import io.github.jhipster.travis.web.rest.TestUtil;

public class TestServiceClassTest {

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(TestServiceClass.class);
        TestServiceClass testServiceClass1 = new TestServiceClass();
        testServiceClass1.setId(1L);
        TestServiceClass testServiceClass2 = new TestServiceClass();
        testServiceClass2.setId(testServiceClass1.getId());
        assertThat(testServiceClass1).isEqualTo(testServiceClass2);
        testServiceClass2.setId(2L);
        assertThat(testServiceClass1).isNotEqualTo(testServiceClass2);
        testServiceClass1.setId(null);
        assertThat(testServiceClass1).isNotEqualTo(testServiceClass2);
    }
}
