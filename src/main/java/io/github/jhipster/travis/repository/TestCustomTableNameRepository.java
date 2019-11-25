package io.github.jhipster.travis.repository;
import io.github.jhipster.travis.domain.TestCustomTableName;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 * Spring Data  repository for the TestCustomTableName entity.
 */
@Repository
public interface TestCustomTableNameRepository extends JpaRepository<TestCustomTableName, Long> {

    @Query("select testCustomTableName from TestCustomTableName testCustomTableName where testCustomTableName.userOneToMany.login = ?#{principal.username}")
    List<TestCustomTableName> findByUserOneToManyIsCurrentUser();

    @Query(value = "select distinct testCustomTableName from TestCustomTableName testCustomTableName left join fetch testCustomTableName.userManyToManies",
        countQuery = "select count(distinct testCustomTableName) from TestCustomTableName testCustomTableName")
    Page<TestCustomTableName> findAllWithEagerRelationships(Pageable pageable);

    @Query("select distinct testCustomTableName from TestCustomTableName testCustomTableName left join fetch testCustomTableName.userManyToManies")
    List<TestCustomTableName> findAllWithEagerRelationships();

    @Query("select testCustomTableName from TestCustomTableName testCustomTableName left join fetch testCustomTableName.userManyToManies where testCustomTableName.id =:id")
    Optional<TestCustomTableName> findOneWithEagerRelationships(@Param("id") Long id);

}
