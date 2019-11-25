package io.github.jhipster.travis.repository;
import io.github.jhipster.travis.domain.MapsIdChildEntityWithDTO;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the MapsIdChildEntityWithDTO entity.
 */
@SuppressWarnings("unused")
@Repository
public interface MapsIdChildEntityWithDTORepository extends JpaRepository<MapsIdChildEntityWithDTO, Long> {

}
