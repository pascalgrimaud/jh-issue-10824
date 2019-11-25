package io.github.jhipster.travis.domain;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import io.github.jhipster.travis.web.rest.TestUtil;

public class FieldTestEntityTest {

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(FieldTestEntity.class);
        FieldTestEntity fieldTestEntity1 = new FieldTestEntity();
        fieldTestEntity1.setId(1L);
        FieldTestEntity fieldTestEntity2 = new FieldTestEntity();
        fieldTestEntity2.setId(fieldTestEntity1.getId());
        assertThat(fieldTestEntity1).isEqualTo(fieldTestEntity2);
        fieldTestEntity2.setId(2L);
        assertThat(fieldTestEntity1).isNotEqualTo(fieldTestEntity2);
        fieldTestEntity1.setId(null);
        assertThat(fieldTestEntity1).isNotEqualTo(fieldTestEntity2);
    }
}
