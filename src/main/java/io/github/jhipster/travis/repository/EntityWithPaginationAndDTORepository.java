package io.github.jhipster.travis.repository;
import io.github.jhipster.travis.domain.EntityWithPaginationAndDTO;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the EntityWithPaginationAndDTO entity.
 */
@SuppressWarnings("unused")
@Repository
public interface EntityWithPaginationAndDTORepository extends JpaRepository<EntityWithPaginationAndDTO, Long> {

}
