package io.github.jhipster.travis.domain;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import io.github.jhipster.travis.web.rest.TestUtil;

public class FieldTestMapstructEntityTest {

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(FieldTestMapstructEntity.class);
        FieldTestMapstructEntity fieldTestMapstructEntity1 = new FieldTestMapstructEntity();
        fieldTestMapstructEntity1.setId(1L);
        FieldTestMapstructEntity fieldTestMapstructEntity2 = new FieldTestMapstructEntity();
        fieldTestMapstructEntity2.setId(fieldTestMapstructEntity1.getId());
        assertThat(fieldTestMapstructEntity1).isEqualTo(fieldTestMapstructEntity2);
        fieldTestMapstructEntity2.setId(2L);
        assertThat(fieldTestMapstructEntity1).isNotEqualTo(fieldTestMapstructEntity2);
        fieldTestMapstructEntity1.setId(null);
        assertThat(fieldTestMapstructEntity1).isNotEqualTo(fieldTestMapstructEntity2);
    }
}
