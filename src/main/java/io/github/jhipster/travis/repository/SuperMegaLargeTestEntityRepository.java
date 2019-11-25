package io.github.jhipster.travis.repository;
import io.github.jhipster.travis.domain.SuperMegaLargeTestEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 * Spring Data  repository for the SuperMegaLargeTestEntity entity.
 */
@Repository
public interface SuperMegaLargeTestEntityRepository extends JpaRepository<SuperMegaLargeTestEntity, Long> {

    @Query("select superMegaLargeTestEntity from SuperMegaLargeTestEntity superMegaLargeTestEntity where superMegaLargeTestEntity.superMegaLargeUserOneToMany.login = ?#{principal.username}")
    List<SuperMegaLargeTestEntity> findBySuperMegaLargeUserOneToManyIsCurrentUser();

    @Query(value = "select distinct superMegaLargeTestEntity from SuperMegaLargeTestEntity superMegaLargeTestEntity left join fetch superMegaLargeTestEntity.superMegaLargeUserManyToManies",
        countQuery = "select count(distinct superMegaLargeTestEntity) from SuperMegaLargeTestEntity superMegaLargeTestEntity")
    Page<SuperMegaLargeTestEntity> findAllWithEagerRelationships(Pageable pageable);

    @Query("select distinct superMegaLargeTestEntity from SuperMegaLargeTestEntity superMegaLargeTestEntity left join fetch superMegaLargeTestEntity.superMegaLargeUserManyToManies")
    List<SuperMegaLargeTestEntity> findAllWithEagerRelationships();

    @Query("select superMegaLargeTestEntity from SuperMegaLargeTestEntity superMegaLargeTestEntity left join fetch superMegaLargeTestEntity.superMegaLargeUserManyToManies where superMegaLargeTestEntity.id =:id")
    Optional<SuperMegaLargeTestEntity> findOneWithEagerRelationships(@Param("id") Long id);

}
