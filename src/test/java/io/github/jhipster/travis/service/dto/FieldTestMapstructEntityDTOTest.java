package io.github.jhipster.travis.service.dto;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import io.github.jhipster.travis.web.rest.TestUtil;

public class FieldTestMapstructEntityDTOTest {

    @Test
    public void dtoEqualsVerifier() throws Exception {
        TestUtil.equalsVerifier(FieldTestMapstructEntityDTO.class);
        FieldTestMapstructEntityDTO fieldTestMapstructEntityDTO1 = new FieldTestMapstructEntityDTO();
        fieldTestMapstructEntityDTO1.setId(1L);
        FieldTestMapstructEntityDTO fieldTestMapstructEntityDTO2 = new FieldTestMapstructEntityDTO();
        assertThat(fieldTestMapstructEntityDTO1).isNotEqualTo(fieldTestMapstructEntityDTO2);
        fieldTestMapstructEntityDTO2.setId(fieldTestMapstructEntityDTO1.getId());
        assertThat(fieldTestMapstructEntityDTO1).isEqualTo(fieldTestMapstructEntityDTO2);
        fieldTestMapstructEntityDTO2.setId(2L);
        assertThat(fieldTestMapstructEntityDTO1).isNotEqualTo(fieldTestMapstructEntityDTO2);
        fieldTestMapstructEntityDTO1.setId(null);
        assertThat(fieldTestMapstructEntityDTO1).isNotEqualTo(fieldTestMapstructEntityDTO2);
    }
}
