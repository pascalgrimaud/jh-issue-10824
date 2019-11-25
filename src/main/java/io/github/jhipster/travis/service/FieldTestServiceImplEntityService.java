package io.github.jhipster.travis.service;

import io.github.jhipster.travis.domain.FieldTestServiceImplEntity;

import java.util.List;
import java.util.Optional;

/**
 * Service Interface for managing {@link FieldTestServiceImplEntity}.
 */
public interface FieldTestServiceImplEntityService {

    /**
     * Save a fieldTestServiceImplEntity.
     *
     * @param fieldTestServiceImplEntity the entity to save.
     * @return the persisted entity.
     */
    FieldTestServiceImplEntity save(FieldTestServiceImplEntity fieldTestServiceImplEntity);

    /**
     * Get all the fieldTestServiceImplEntities.
     *
     * @return the list of entities.
     */
    List<FieldTestServiceImplEntity> findAll();


    /**
     * Get the "id" fieldTestServiceImplEntity.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Optional<FieldTestServiceImplEntity> findOne(Long id);

    /**
     * Delete the "id" fieldTestServiceImplEntity.
     *
     * @param id the id of the entity.
     */
    void delete(Long id);
}
