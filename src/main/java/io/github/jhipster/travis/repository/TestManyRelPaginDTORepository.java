package io.github.jhipster.travis.repository;
import io.github.jhipster.travis.domain.TestManyRelPaginDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 * Spring Data  repository for the TestManyRelPaginDTO entity.
 */
@Repository
public interface TestManyRelPaginDTORepository extends JpaRepository<TestManyRelPaginDTO, Long> {

    @Query(value = "select distinct testManyRelPaginDTO from TestManyRelPaginDTO testManyRelPaginDTO left join fetch testManyRelPaginDTO.testMapstructs",
        countQuery = "select count(distinct testManyRelPaginDTO) from TestManyRelPaginDTO testManyRelPaginDTO")
    Page<TestManyRelPaginDTO> findAllWithEagerRelationships(Pageable pageable);

    @Query("select distinct testManyRelPaginDTO from TestManyRelPaginDTO testManyRelPaginDTO left join fetch testManyRelPaginDTO.testMapstructs")
    List<TestManyRelPaginDTO> findAllWithEagerRelationships();

    @Query("select testManyRelPaginDTO from TestManyRelPaginDTO testManyRelPaginDTO left join fetch testManyRelPaginDTO.testMapstructs where testManyRelPaginDTO.id =:id")
    Optional<TestManyRelPaginDTO> findOneWithEagerRelationships(@Param("id") Long id);

}
