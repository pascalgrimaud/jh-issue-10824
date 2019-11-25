package io.github.jhipster.travis.repository;
import io.github.jhipster.travis.domain.TestInfiniteScroll;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 * Spring Data  repository for the TestInfiniteScroll entity.
 */
@Repository
public interface TestInfiniteScrollRepository extends JpaRepository<TestInfiniteScroll, Long> {

    @Query("select testInfiniteScroll from TestInfiniteScroll testInfiniteScroll where testInfiniteScroll.userOneToMany.login = ?#{principal.username}")
    List<TestInfiniteScroll> findByUserOneToManyIsCurrentUser();

    @Query(value = "select distinct testInfiniteScroll from TestInfiniteScroll testInfiniteScroll left join fetch testInfiniteScroll.userManyToManies",
        countQuery = "select count(distinct testInfiniteScroll) from TestInfiniteScroll testInfiniteScroll")
    Page<TestInfiniteScroll> findAllWithEagerRelationships(Pageable pageable);

    @Query("select distinct testInfiniteScroll from TestInfiniteScroll testInfiniteScroll left join fetch testInfiniteScroll.userManyToManies")
    List<TestInfiniteScroll> findAllWithEagerRelationships();

    @Query("select testInfiniteScroll from TestInfiniteScroll testInfiniteScroll left join fetch testInfiniteScroll.userManyToManies where testInfiniteScroll.id =:id")
    Optional<TestInfiniteScroll> findOneWithEagerRelationships(@Param("id") Long id);

}
