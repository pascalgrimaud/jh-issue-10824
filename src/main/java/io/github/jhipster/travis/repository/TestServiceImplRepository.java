package io.github.jhipster.travis.repository;
import io.github.jhipster.travis.domain.TestServiceImpl;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 * Spring Data  repository for the TestServiceImpl entity.
 */
@Repository
public interface TestServiceImplRepository extends JpaRepository<TestServiceImpl, Long>, JpaSpecificationExecutor<TestServiceImpl> {

    @Query("select testServiceImpl from TestServiceImpl testServiceImpl where testServiceImpl.userOneToMany.login = ?#{principal.username}")
    List<TestServiceImpl> findByUserOneToManyIsCurrentUser();

    @Query(value = "select distinct testServiceImpl from TestServiceImpl testServiceImpl left join fetch testServiceImpl.userManyToManies",
        countQuery = "select count(distinct testServiceImpl) from TestServiceImpl testServiceImpl")
    Page<TestServiceImpl> findAllWithEagerRelationships(Pageable pageable);

    @Query("select distinct testServiceImpl from TestServiceImpl testServiceImpl left join fetch testServiceImpl.userManyToManies")
    List<TestServiceImpl> findAllWithEagerRelationships();

    @Query("select testServiceImpl from TestServiceImpl testServiceImpl left join fetch testServiceImpl.userManyToManies where testServiceImpl.id =:id")
    Optional<TestServiceImpl> findOneWithEagerRelationships(@Param("id") Long id);

}
