package io.github.jhipster.travis.domain;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import io.github.jhipster.travis.web.rest.TestUtil;

public class FieldTestInfiniteScrollEntityTest {

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(FieldTestInfiniteScrollEntity.class);
        FieldTestInfiniteScrollEntity fieldTestInfiniteScrollEntity1 = new FieldTestInfiniteScrollEntity();
        fieldTestInfiniteScrollEntity1.setId(1L);
        FieldTestInfiniteScrollEntity fieldTestInfiniteScrollEntity2 = new FieldTestInfiniteScrollEntity();
        fieldTestInfiniteScrollEntity2.setId(fieldTestInfiniteScrollEntity1.getId());
        assertThat(fieldTestInfiniteScrollEntity1).isEqualTo(fieldTestInfiniteScrollEntity2);
        fieldTestInfiniteScrollEntity2.setId(2L);
        assertThat(fieldTestInfiniteScrollEntity1).isNotEqualTo(fieldTestInfiniteScrollEntity2);
        fieldTestInfiniteScrollEntity1.setId(null);
        assertThat(fieldTestInfiniteScrollEntity1).isNotEqualTo(fieldTestInfiniteScrollEntity2);
    }
}
