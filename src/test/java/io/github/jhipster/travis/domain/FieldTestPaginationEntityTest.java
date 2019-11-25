package io.github.jhipster.travis.domain;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import io.github.jhipster.travis.web.rest.TestUtil;

public class FieldTestPaginationEntityTest {

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(FieldTestPaginationEntity.class);
        FieldTestPaginationEntity fieldTestPaginationEntity1 = new FieldTestPaginationEntity();
        fieldTestPaginationEntity1.setId(1L);
        FieldTestPaginationEntity fieldTestPaginationEntity2 = new FieldTestPaginationEntity();
        fieldTestPaginationEntity2.setId(fieldTestPaginationEntity1.getId());
        assertThat(fieldTestPaginationEntity1).isEqualTo(fieldTestPaginationEntity2);
        fieldTestPaginationEntity2.setId(2L);
        assertThat(fieldTestPaginationEntity1).isNotEqualTo(fieldTestPaginationEntity2);
        fieldTestPaginationEntity1.setId(null);
        assertThat(fieldTestPaginationEntity1).isNotEqualTo(fieldTestPaginationEntity2);
    }
}
