package io.github.jhipster.travis.repository;
import io.github.jhipster.travis.domain.TestMapstruct;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 * Spring Data  repository for the TestMapstruct entity.
 */
@Repository
public interface TestMapstructRepository extends JpaRepository<TestMapstruct, Long> {

    @Query("select testMapstruct from TestMapstruct testMapstruct where testMapstruct.userOneToMany.login = ?#{principal.username}")
    List<TestMapstruct> findByUserOneToManyIsCurrentUser();

    @Query(value = "select distinct testMapstruct from TestMapstruct testMapstruct left join fetch testMapstruct.userManyToManies",
        countQuery = "select count(distinct testMapstruct) from TestMapstruct testMapstruct")
    Page<TestMapstruct> findAllWithEagerRelationships(Pageable pageable);

    @Query("select distinct testMapstruct from TestMapstruct testMapstruct left join fetch testMapstruct.userManyToManies")
    List<TestMapstruct> findAllWithEagerRelationships();

    @Query("select testMapstruct from TestMapstruct testMapstruct left join fetch testMapstruct.userManyToManies where testMapstruct.id =:id")
    Optional<TestMapstruct> findOneWithEagerRelationships(@Param("id") Long id);

}
