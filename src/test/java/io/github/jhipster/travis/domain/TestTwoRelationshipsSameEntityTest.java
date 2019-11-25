package io.github.jhipster.travis.domain;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import io.github.jhipster.travis.web.rest.TestUtil;

public class TestTwoRelationshipsSameEntityTest {

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(TestTwoRelationshipsSameEntity.class);
        TestTwoRelationshipsSameEntity testTwoRelationshipsSameEntity1 = new TestTwoRelationshipsSameEntity();
        testTwoRelationshipsSameEntity1.setId(1L);
        TestTwoRelationshipsSameEntity testTwoRelationshipsSameEntity2 = new TestTwoRelationshipsSameEntity();
        testTwoRelationshipsSameEntity2.setId(testTwoRelationshipsSameEntity1.getId());
        assertThat(testTwoRelationshipsSameEntity1).isEqualTo(testTwoRelationshipsSameEntity2);
        testTwoRelationshipsSameEntity2.setId(2L);
        assertThat(testTwoRelationshipsSameEntity1).isNotEqualTo(testTwoRelationshipsSameEntity2);
        testTwoRelationshipsSameEntity1.setId(null);
        assertThat(testTwoRelationshipsSameEntity1).isNotEqualTo(testTwoRelationshipsSameEntity2);
    }
}
