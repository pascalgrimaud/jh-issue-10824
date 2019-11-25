package io.github.jhipster.travis.repository;
import io.github.jhipster.travis.domain.FieldTestMapstructEntity;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the FieldTestMapstructEntity entity.
 */
@SuppressWarnings("unused")
@Repository
public interface FieldTestMapstructEntityRepository extends JpaRepository<FieldTestMapstructEntity, Long> {

}
