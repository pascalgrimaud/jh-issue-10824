package io.github.jhipster.travis.domain;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import io.github.jhipster.travis.web.rest.TestUtil;

public class TestServiceImplTest {

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(TestServiceImpl.class);
        TestServiceImpl testServiceImpl1 = new TestServiceImpl();
        testServiceImpl1.setId(1L);
        TestServiceImpl testServiceImpl2 = new TestServiceImpl();
        testServiceImpl2.setId(testServiceImpl1.getId());
        assertThat(testServiceImpl1).isEqualTo(testServiceImpl2);
        testServiceImpl2.setId(2L);
        assertThat(testServiceImpl1).isNotEqualTo(testServiceImpl2);
        testServiceImpl1.setId(null);
        assertThat(testServiceImpl1).isNotEqualTo(testServiceImpl2);
    }
}
