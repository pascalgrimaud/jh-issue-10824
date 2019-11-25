package io.github.jhipster.travis.service.dto;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import io.github.jhipster.travis.web.rest.TestUtil;

public class TestManyRelPaginDTODTOTest {

    @Test
    public void dtoEqualsVerifier() throws Exception {
        TestUtil.equalsVerifier(TestManyRelPaginDTODTO.class);
        TestManyRelPaginDTODTO testManyRelPaginDTODTO1 = new TestManyRelPaginDTODTO();
        testManyRelPaginDTODTO1.setId(1L);
        TestManyRelPaginDTODTO testManyRelPaginDTODTO2 = new TestManyRelPaginDTODTO();
        assertThat(testManyRelPaginDTODTO1).isNotEqualTo(testManyRelPaginDTODTO2);
        testManyRelPaginDTODTO2.setId(testManyRelPaginDTODTO1.getId());
        assertThat(testManyRelPaginDTODTO1).isEqualTo(testManyRelPaginDTODTO2);
        testManyRelPaginDTODTO2.setId(2L);
        assertThat(testManyRelPaginDTODTO1).isNotEqualTo(testManyRelPaginDTODTO2);
        testManyRelPaginDTODTO1.setId(null);
        assertThat(testManyRelPaginDTODTO1).isNotEqualTo(testManyRelPaginDTODTO2);
    }
}
