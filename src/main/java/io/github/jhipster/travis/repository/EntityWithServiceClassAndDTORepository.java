package io.github.jhipster.travis.repository;
import io.github.jhipster.travis.domain.EntityWithServiceClassAndDTO;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the EntityWithServiceClassAndDTO entity.
 */
@SuppressWarnings("unused")
@Repository
public interface EntityWithServiceClassAndDTORepository extends JpaRepository<EntityWithServiceClassAndDTO, Long> {

}
