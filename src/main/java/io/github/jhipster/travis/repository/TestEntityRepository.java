package io.github.jhipster.travis.repository;
import io.github.jhipster.travis.domain.TestEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 * Spring Data  repository for the TestEntity entity.
 */
@Repository
public interface TestEntityRepository extends JpaRepository<TestEntity, Long> {

    @Query("select testEntity from TestEntity testEntity where testEntity.userOneToMany.login = ?#{principal.username}")
    List<TestEntity> findByUserOneToManyIsCurrentUser();

    @Query(value = "select distinct testEntity from TestEntity testEntity left join fetch testEntity.userManyToManies",
        countQuery = "select count(distinct testEntity) from TestEntity testEntity")
    Page<TestEntity> findAllWithEagerRelationships(Pageable pageable);

    @Query("select distinct testEntity from TestEntity testEntity left join fetch testEntity.userManyToManies")
    List<TestEntity> findAllWithEagerRelationships();

    @Query("select testEntity from TestEntity testEntity left join fetch testEntity.userManyToManies where testEntity.id =:id")
    Optional<TestEntity> findOneWithEagerRelationships(@Param("id") Long id);

}
