package io.github.jhipster.travis.repository;
import io.github.jhipster.travis.domain.TestPagination;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 * Spring Data  repository for the TestPagination entity.
 */
@Repository
public interface TestPaginationRepository extends JpaRepository<TestPagination, Long> {

    @Query("select testPagination from TestPagination testPagination where testPagination.userOneToMany.login = ?#{principal.username}")
    List<TestPagination> findByUserOneToManyIsCurrentUser();

    @Query(value = "select distinct testPagination from TestPagination testPagination left join fetch testPagination.userManyToManies",
        countQuery = "select count(distinct testPagination) from TestPagination testPagination")
    Page<TestPagination> findAllWithEagerRelationships(Pageable pageable);

    @Query("select distinct testPagination from TestPagination testPagination left join fetch testPagination.userManyToManies")
    List<TestPagination> findAllWithEagerRelationships();

    @Query("select testPagination from TestPagination testPagination left join fetch testPagination.userManyToManies where testPagination.id =:id")
    Optional<TestPagination> findOneWithEagerRelationships(@Param("id") Long id);

}
