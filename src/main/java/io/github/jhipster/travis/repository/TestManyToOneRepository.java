package io.github.jhipster.travis.repository;
import io.github.jhipster.travis.domain.TestManyToOne;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the TestManyToOne entity.
 */
@SuppressWarnings("unused")
@Repository
public interface TestManyToOneRepository extends JpaRepository<TestManyToOne, Long> {

}
