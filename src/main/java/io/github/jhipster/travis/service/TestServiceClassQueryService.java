package io.github.jhipster.travis.service;

import java.util.List;

import javax.persistence.criteria.JoinType;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import io.github.jhipster.service.QueryService;

import io.github.jhipster.travis.domain.TestServiceClass;
import io.github.jhipster.travis.domain.*; // for static metamodels
import io.github.jhipster.travis.repository.TestServiceClassRepository;
import io.github.jhipster.travis.service.dto.TestServiceClassCriteria;

/**
 * Service for executing complex queries for {@link TestServiceClass} entities in the database.
 * The main input is a {@link TestServiceClassCriteria} which gets converted to {@link Specification},
 * in a way that all the filters must apply.
 * It returns a {@link List} of {@link TestServiceClass} or a {@link Page} of {@link TestServiceClass} which fulfills the criteria.
 */
@Service
@Transactional(readOnly = true)
public class TestServiceClassQueryService extends QueryService<TestServiceClass> {

    private final Logger log = LoggerFactory.getLogger(TestServiceClassQueryService.class);

    private final TestServiceClassRepository testServiceClassRepository;

    public TestServiceClassQueryService(TestServiceClassRepository testServiceClassRepository) {
        this.testServiceClassRepository = testServiceClassRepository;
    }

    /**
     * Return a {@link List} of {@link TestServiceClass} which matches the criteria from the database.
     * @param criteria The object which holds all the filters, which the entities should match.
     * @return the matching entities.
     */
    @Transactional(readOnly = true)
    public List<TestServiceClass> findByCriteria(TestServiceClassCriteria criteria) {
        log.debug("find by criteria : {}", criteria);
        final Specification<TestServiceClass> specification = createSpecification(criteria);
        return testServiceClassRepository.findAll(specification);
    }

    /**
     * Return a {@link Page} of {@link TestServiceClass} which matches the criteria from the database.
     * @param criteria The object which holds all the filters, which the entities should match.
     * @param page The page, which should be returned.
     * @return the matching entities.
     */
    @Transactional(readOnly = true)
    public Page<TestServiceClass> findByCriteria(TestServiceClassCriteria criteria, Pageable page) {
        log.debug("find by criteria : {}, page: {}", criteria, page);
        final Specification<TestServiceClass> specification = createSpecification(criteria);
        return testServiceClassRepository.findAll(specification, page);
    }

    /**
     * Return the number of matching entities in the database.
     * @param criteria The object which holds all the filters, which the entities should match.
     * @return the number of matching entities.
     */
    @Transactional(readOnly = true)
    public long countByCriteria(TestServiceClassCriteria criteria) {
        log.debug("count by criteria : {}", criteria);
        final Specification<TestServiceClass> specification = createSpecification(criteria);
        return testServiceClassRepository.count(specification);
    }

    /**
     * Function to convert {@link TestServiceClassCriteria} to a {@link Specification}
     * @param criteria The object which holds all the filters, which the entities should match.
     * @return the matching {@link Specification} of the entity.
     */
    protected Specification<TestServiceClass> createSpecification(TestServiceClassCriteria criteria) {
        Specification<TestServiceClass> specification = Specification.where(null);
        if (criteria != null) {
            if (criteria.getId() != null) {
                specification = specification.and(buildRangeSpecification(criteria.getId(), TestServiceClass_.id));
            }
            if (criteria.getTestManyToOneId() != null) {
                specification = specification.and(buildSpecification(criteria.getTestManyToOneId(),
                    root -> root.join(TestServiceClass_.testManyToOnes, JoinType.LEFT).get(TestManyToOne_.id)));
            }
            if (criteria.getTestManyToManyId() != null) {
                specification = specification.and(buildSpecification(criteria.getTestManyToManyId(),
                    root -> root.join(TestServiceClass_.testManyToManies, JoinType.LEFT).get(TestManyToMany_.id)));
            }
            if (criteria.getTestOneToOneId() != null) {
                specification = specification.and(buildSpecification(criteria.getTestOneToOneId(),
                    root -> root.join(TestServiceClass_.testOneToOne, JoinType.LEFT).get(TestOneToOne_.id)));
            }
            if (criteria.getUserOneToManyId() != null) {
                specification = specification.and(buildSpecification(criteria.getUserOneToManyId(),
                    root -> root.join(TestServiceClass_.userOneToMany, JoinType.LEFT).get(User_.id)));
            }
            if (criteria.getUserManyToManyId() != null) {
                specification = specification.and(buildSpecification(criteria.getUserManyToManyId(),
                    root -> root.join(TestServiceClass_.userManyToManies, JoinType.LEFT).get(User_.id)));
            }
            if (criteria.getUserOneToOneId() != null) {
                specification = specification.and(buildSpecification(criteria.getUserOneToOneId(),
                    root -> root.join(TestServiceClass_.userOneToOne, JoinType.LEFT).get(User_.id)));
            }
        }
        return specification;
    }
}
