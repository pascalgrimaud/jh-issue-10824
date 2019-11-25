package io.github.jhipster.travis.domain;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import io.github.jhipster.travis.web.rest.TestUtil;

public class TestMapstructTest {

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(TestMapstruct.class);
        TestMapstruct testMapstruct1 = new TestMapstruct();
        testMapstruct1.setId(1L);
        TestMapstruct testMapstruct2 = new TestMapstruct();
        testMapstruct2.setId(testMapstruct1.getId());
        assertThat(testMapstruct1).isEqualTo(testMapstruct2);
        testMapstruct2.setId(2L);
        assertThat(testMapstruct1).isNotEqualTo(testMapstruct2);
        testMapstruct1.setId(null);
        assertThat(testMapstruct1).isNotEqualTo(testMapstruct2);
    }
}
