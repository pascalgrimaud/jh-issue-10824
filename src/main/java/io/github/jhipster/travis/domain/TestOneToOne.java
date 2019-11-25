package io.github.jhipster.travis.domain;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;

/**
 * A TestOneToOne.
 */
@Entity
@Table(name = "test_one_to_one")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class TestOneToOne implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(unique = true)
    private TestEntity testEntity;

    @OneToOne
    @JoinColumn(unique = true)
    private TestMapstruct testMapstruct;

    @OneToOne
    @JoinColumn(unique = true)
    private TestServiceClass testServiceClass;

    @OneToOne
    @JoinColumn(unique = true)
    private TestServiceImpl testServiceImpl;

    @OneToOne
    @JoinColumn(unique = true)
    private TestInfiniteScroll testInfiniteScroll;

    @OneToOne
    @JoinColumn(unique = true)
    private TestPagination testPagination;

    @OneToOne
    @JoinColumn(unique = true)
    private TestCustomTableName testCustomTableName;

    @OneToOne
    @JoinColumn(unique = true)
    private SuperMegaLargeTestEntity superMegaLargeTestEntity;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public TestEntity getTestEntity() {
        return testEntity;
    }

    public TestOneToOne testEntity(TestEntity testEntity) {
        this.testEntity = testEntity;
        return this;
    }

    public void setTestEntity(TestEntity testEntity) {
        this.testEntity = testEntity;
    }

    public TestMapstruct getTestMapstruct() {
        return testMapstruct;
    }

    public TestOneToOne testMapstruct(TestMapstruct testMapstruct) {
        this.testMapstruct = testMapstruct;
        return this;
    }

    public void setTestMapstruct(TestMapstruct testMapstruct) {
        this.testMapstruct = testMapstruct;
    }

    public TestServiceClass getTestServiceClass() {
        return testServiceClass;
    }

    public TestOneToOne testServiceClass(TestServiceClass testServiceClass) {
        this.testServiceClass = testServiceClass;
        return this;
    }

    public void setTestServiceClass(TestServiceClass testServiceClass) {
        this.testServiceClass = testServiceClass;
    }

    public TestServiceImpl getTestServiceImpl() {
        return testServiceImpl;
    }

    public TestOneToOne testServiceImpl(TestServiceImpl testServiceImpl) {
        this.testServiceImpl = testServiceImpl;
        return this;
    }

    public void setTestServiceImpl(TestServiceImpl testServiceImpl) {
        this.testServiceImpl = testServiceImpl;
    }

    public TestInfiniteScroll getTestInfiniteScroll() {
        return testInfiniteScroll;
    }

    public TestOneToOne testInfiniteScroll(TestInfiniteScroll testInfiniteScroll) {
        this.testInfiniteScroll = testInfiniteScroll;
        return this;
    }

    public void setTestInfiniteScroll(TestInfiniteScroll testInfiniteScroll) {
        this.testInfiniteScroll = testInfiniteScroll;
    }

    public TestPagination getTestPagination() {
        return testPagination;
    }

    public TestOneToOne testPagination(TestPagination testPagination) {
        this.testPagination = testPagination;
        return this;
    }

    public void setTestPagination(TestPagination testPagination) {
        this.testPagination = testPagination;
    }

    public TestCustomTableName getTestCustomTableName() {
        return testCustomTableName;
    }

    public TestOneToOne testCustomTableName(TestCustomTableName testCustomTableName) {
        this.testCustomTableName = testCustomTableName;
        return this;
    }

    public void setTestCustomTableName(TestCustomTableName testCustomTableName) {
        this.testCustomTableName = testCustomTableName;
    }

    public SuperMegaLargeTestEntity getSuperMegaLargeTestEntity() {
        return superMegaLargeTestEntity;
    }

    public TestOneToOne superMegaLargeTestEntity(SuperMegaLargeTestEntity superMegaLargeTestEntity) {
        this.superMegaLargeTestEntity = superMegaLargeTestEntity;
        return this;
    }

    public void setSuperMegaLargeTestEntity(SuperMegaLargeTestEntity superMegaLargeTestEntity) {
        this.superMegaLargeTestEntity = superMegaLargeTestEntity;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof TestOneToOne)) {
            return false;
        }
        return id != null && id.equals(((TestOneToOne) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "TestOneToOne{" +
            "id=" + getId() +
            "}";
    }
}
