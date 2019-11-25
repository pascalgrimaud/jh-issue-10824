package io.github.jhipster.travis.domain;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import io.github.jhipster.travis.web.rest.TestUtil;

public class FieldTestServiceClassEntityTest {

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(FieldTestServiceClassEntity.class);
        FieldTestServiceClassEntity fieldTestServiceClassEntity1 = new FieldTestServiceClassEntity();
        fieldTestServiceClassEntity1.setId(1L);
        FieldTestServiceClassEntity fieldTestServiceClassEntity2 = new FieldTestServiceClassEntity();
        fieldTestServiceClassEntity2.setId(fieldTestServiceClassEntity1.getId());
        assertThat(fieldTestServiceClassEntity1).isEqualTo(fieldTestServiceClassEntity2);
        fieldTestServiceClassEntity2.setId(2L);
        assertThat(fieldTestServiceClassEntity1).isNotEqualTo(fieldTestServiceClassEntity2);
        fieldTestServiceClassEntity1.setId(null);
        assertThat(fieldTestServiceClassEntity1).isNotEqualTo(fieldTestServiceClassEntity2);
    }
}
