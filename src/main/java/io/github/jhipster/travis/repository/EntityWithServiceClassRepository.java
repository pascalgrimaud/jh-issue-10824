package io.github.jhipster.travis.repository;
import io.github.jhipster.travis.domain.EntityWithServiceClass;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the EntityWithServiceClass entity.
 */
@SuppressWarnings("unused")
@Repository
public interface EntityWithServiceClassRepository extends JpaRepository<EntityWithServiceClass, Long> {

}
