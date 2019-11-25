package io.github.jhipster.travis.repository;
import io.github.jhipster.travis.domain.TestServiceClass;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 * Spring Data  repository for the TestServiceClass entity.
 */
@Repository
public interface TestServiceClassRepository extends JpaRepository<TestServiceClass, Long>, JpaSpecificationExecutor<TestServiceClass> {

    @Query("select testServiceClass from TestServiceClass testServiceClass where testServiceClass.userOneToMany.login = ?#{principal.username}")
    List<TestServiceClass> findByUserOneToManyIsCurrentUser();

    @Query(value = "select distinct testServiceClass from TestServiceClass testServiceClass left join fetch testServiceClass.userManyToManies",
        countQuery = "select count(distinct testServiceClass) from TestServiceClass testServiceClass")
    Page<TestServiceClass> findAllWithEagerRelationships(Pageable pageable);

    @Query("select distinct testServiceClass from TestServiceClass testServiceClass left join fetch testServiceClass.userManyToManies")
    List<TestServiceClass> findAllWithEagerRelationships();

    @Query("select testServiceClass from TestServiceClass testServiceClass left join fetch testServiceClass.userManyToManies where testServiceClass.id =:id")
    Optional<TestServiceClass> findOneWithEagerRelationships(@Param("id") Long id);

}
