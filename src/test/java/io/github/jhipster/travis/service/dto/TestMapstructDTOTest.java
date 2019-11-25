package io.github.jhipster.travis.service.dto;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import io.github.jhipster.travis.web.rest.TestUtil;

public class TestMapstructDTOTest {

    @Test
    public void dtoEqualsVerifier() throws Exception {
        TestUtil.equalsVerifier(TestMapstructDTO.class);
        TestMapstructDTO testMapstructDTO1 = new TestMapstructDTO();
        testMapstructDTO1.setId(1L);
        TestMapstructDTO testMapstructDTO2 = new TestMapstructDTO();
        assertThat(testMapstructDTO1).isNotEqualTo(testMapstructDTO2);
        testMapstructDTO2.setId(testMapstructDTO1.getId());
        assertThat(testMapstructDTO1).isEqualTo(testMapstructDTO2);
        testMapstructDTO2.setId(2L);
        assertThat(testMapstructDTO1).isNotEqualTo(testMapstructDTO2);
        testMapstructDTO1.setId(null);
        assertThat(testMapstructDTO1).isNotEqualTo(testMapstructDTO2);
    }
}
