package io.github.jhipster.travis.repository;
import io.github.jhipster.travis.domain.MapsIdParentEntityWithDTO;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the MapsIdParentEntityWithDTO entity.
 */
@SuppressWarnings("unused")
@Repository
public interface MapsIdParentEntityWithDTORepository extends JpaRepository<MapsIdParentEntityWithDTO, Long> {

}
