package io.github.jhipster.travis.repository;
import io.github.jhipster.travis.domain.MapsIdChildEntityWithoutDTO;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the MapsIdChildEntityWithoutDTO entity.
 */
@SuppressWarnings("unused")
@Repository
public interface MapsIdChildEntityWithoutDTORepository extends JpaRepository<MapsIdChildEntityWithoutDTO, Long> {

}
