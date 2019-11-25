package io.github.jhipster.travis.repository;
import io.github.jhipster.travis.domain.EntityWithPagination;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the EntityWithPagination entity.
 */
@SuppressWarnings("unused")
@Repository
public interface EntityWithPaginationRepository extends JpaRepository<EntityWithPagination, Long> {

}
