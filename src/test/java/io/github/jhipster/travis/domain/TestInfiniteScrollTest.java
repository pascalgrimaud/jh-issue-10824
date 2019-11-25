package io.github.jhipster.travis.domain;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import io.github.jhipster.travis.web.rest.TestUtil;

public class TestInfiniteScrollTest {

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(TestInfiniteScroll.class);
        TestInfiniteScroll testInfiniteScroll1 = new TestInfiniteScroll();
        testInfiniteScroll1.setId(1L);
        TestInfiniteScroll testInfiniteScroll2 = new TestInfiniteScroll();
        testInfiniteScroll2.setId(testInfiniteScroll1.getId());
        assertThat(testInfiniteScroll1).isEqualTo(testInfiniteScroll2);
        testInfiniteScroll2.setId(2L);
        assertThat(testInfiniteScroll1).isNotEqualTo(testInfiniteScroll2);
        testInfiniteScroll1.setId(null);
        assertThat(testInfiniteScroll1).isNotEqualTo(testInfiniteScroll2);
    }
}
