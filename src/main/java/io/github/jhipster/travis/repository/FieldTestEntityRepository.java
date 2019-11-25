package io.github.jhipster.travis.repository;
import io.github.jhipster.travis.domain.FieldTestEntity;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the FieldTestEntity entity.
 */
@SuppressWarnings("unused")
@Repository
public interface FieldTestEntityRepository extends JpaRepository<FieldTestEntity, Long> {

}
