package io.github.jhipster.travis.service.mapper;

import io.github.jhipster.travis.domain.*;
import io.github.jhipster.travis.service.dto.TestManyRelPaginDTODTO;

import org.mapstruct.*;

/**
 * Mapper for the entity {@link TestManyRelPaginDTO} and its DTO {@link TestManyRelPaginDTODTO}.
 */
@Mapper(componentModel = "spring", uses = {TestMapstructMapper.class})
public interface TestManyRelPaginDTOMapper extends EntityMapper<TestManyRelPaginDTODTO, TestManyRelPaginDTO> {


    @Mapping(target = "removeTestMapstruct", ignore = true)

    default TestManyRelPaginDTO fromId(Long id) {
        if (id == null) {
            return null;
        }
        TestManyRelPaginDTO testManyRelPaginDTO = new TestManyRelPaginDTO();
        testManyRelPaginDTO.setId(id);
        return testManyRelPaginDTO;
    }
}
