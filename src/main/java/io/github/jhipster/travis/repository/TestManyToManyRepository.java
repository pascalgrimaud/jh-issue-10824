package io.github.jhipster.travis.repository;
import io.github.jhipster.travis.domain.TestManyToMany;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 * Spring Data  repository for the TestManyToMany entity.
 */
@Repository
public interface TestManyToManyRepository extends JpaRepository<TestManyToMany, Long> {

    @Query(value = "select distinct testManyToMany from TestManyToMany testManyToMany left join fetch testManyToMany.testEntities left join fetch testManyToMany.testMapstructs left join fetch testManyToMany.testServiceClasses left join fetch testManyToMany.testServiceImpls left join fetch testManyToMany.testInfiniteScrolls left join fetch testManyToMany.testPaginations left join fetch testManyToMany.testCustomTableNames left join fetch testManyToMany.superMegaLargeTestEntities",
        countQuery = "select count(distinct testManyToMany) from TestManyToMany testManyToMany")
    Page<TestManyToMany> findAllWithEagerRelationships(Pageable pageable);

    @Query("select distinct testManyToMany from TestManyToMany testManyToMany left join fetch testManyToMany.testEntities left join fetch testManyToMany.testMapstructs left join fetch testManyToMany.testServiceClasses left join fetch testManyToMany.testServiceImpls left join fetch testManyToMany.testInfiniteScrolls left join fetch testManyToMany.testPaginations left join fetch testManyToMany.testCustomTableNames left join fetch testManyToMany.superMegaLargeTestEntities")
    List<TestManyToMany> findAllWithEagerRelationships();

    @Query("select testManyToMany from TestManyToMany testManyToMany left join fetch testManyToMany.testEntities left join fetch testManyToMany.testMapstructs left join fetch testManyToMany.testServiceClasses left join fetch testManyToMany.testServiceImpls left join fetch testManyToMany.testInfiniteScrolls left join fetch testManyToMany.testPaginations left join fetch testManyToMany.testCustomTableNames left join fetch testManyToMany.superMegaLargeTestEntities where testManyToMany.id =:id")
    Optional<TestManyToMany> findOneWithEagerRelationships(@Param("id") Long id);

}
