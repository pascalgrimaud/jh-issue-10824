package io.github.jhipster.travis.repository;
import io.github.jhipster.travis.domain.MapsIdParentEntityWithoutDTO;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the MapsIdParentEntityWithoutDTO entity.
 */
@SuppressWarnings("unused")
@Repository
public interface MapsIdParentEntityWithoutDTORepository extends JpaRepository<MapsIdParentEntityWithoutDTO, Long> {

}
