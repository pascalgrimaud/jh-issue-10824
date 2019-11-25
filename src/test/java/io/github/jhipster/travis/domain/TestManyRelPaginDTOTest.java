package io.github.jhipster.travis.domain;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import io.github.jhipster.travis.web.rest.TestUtil;

public class TestManyRelPaginDTOTest {

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(TestManyRelPaginDTO.class);
        TestManyRelPaginDTO testManyRelPaginDTO1 = new TestManyRelPaginDTO();
        testManyRelPaginDTO1.setId(1L);
        TestManyRelPaginDTO testManyRelPaginDTO2 = new TestManyRelPaginDTO();
        testManyRelPaginDTO2.setId(testManyRelPaginDTO1.getId());
        assertThat(testManyRelPaginDTO1).isEqualTo(testManyRelPaginDTO2);
        testManyRelPaginDTO2.setId(2L);
        assertThat(testManyRelPaginDTO1).isNotEqualTo(testManyRelPaginDTO2);
        testManyRelPaginDTO1.setId(null);
        assertThat(testManyRelPaginDTO1).isNotEqualTo(testManyRelPaginDTO2);
    }
}
