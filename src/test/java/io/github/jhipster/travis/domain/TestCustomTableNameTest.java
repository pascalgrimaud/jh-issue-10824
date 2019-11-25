package io.github.jhipster.travis.domain;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import io.github.jhipster.travis.web.rest.TestUtil;

public class TestCustomTableNameTest {

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(TestCustomTableName.class);
        TestCustomTableName testCustomTableName1 = new TestCustomTableName();
        testCustomTableName1.setId(1L);
        TestCustomTableName testCustomTableName2 = new TestCustomTableName();
        testCustomTableName2.setId(testCustomTableName1.getId());
        assertThat(testCustomTableName1).isEqualTo(testCustomTableName2);
        testCustomTableName2.setId(2L);
        assertThat(testCustomTableName1).isNotEqualTo(testCustomTableName2);
        testCustomTableName1.setId(null);
        assertThat(testCustomTableName1).isNotEqualTo(testCustomTableName2);
    }
}
