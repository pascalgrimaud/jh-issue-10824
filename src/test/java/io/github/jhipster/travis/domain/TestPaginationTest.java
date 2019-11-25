package io.github.jhipster.travis.domain;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import io.github.jhipster.travis.web.rest.TestUtil;

public class TestPaginationTest {

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(TestPagination.class);
        TestPagination testPagination1 = new TestPagination();
        testPagination1.setId(1L);
        TestPagination testPagination2 = new TestPagination();
        testPagination2.setId(testPagination1.getId());
        assertThat(testPagination1).isEqualTo(testPagination2);
        testPagination2.setId(2L);
        assertThat(testPagination1).isNotEqualTo(testPagination2);
        testPagination1.setId(null);
        assertThat(testPagination1).isNotEqualTo(testPagination2);
    }
}
