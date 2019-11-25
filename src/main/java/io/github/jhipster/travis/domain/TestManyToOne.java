package io.github.jhipster.travis.domain;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;

/**
 * A TestManyToOne.
 */
@Entity
@Table(name = "test_many_to_one")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class TestManyToOne implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JsonIgnoreProperties("testManyToOnes")
    private TestEntity testEntity;

    @ManyToOne
    @JsonIgnoreProperties("testManyToOnes")
    private TestMapstruct testMapstruct;

    @ManyToOne
    @JsonIgnoreProperties("testManyToOnes")
    private TestServiceClass testServiceClass;

    @ManyToOne
    @JsonIgnoreProperties("testManyToOnes")
    private TestServiceImpl testServiceImpl;

    @ManyToOne
    @JsonIgnoreProperties("testManyToOnes")
    private TestInfiniteScroll testInfiniteScroll;

    @ManyToOne
    @JsonIgnoreProperties("testManyToOnes")
    private TestPagination testPagination;

    @ManyToOne
    @JsonIgnoreProperties("testManyToOnes")
    private TestCustomTableName testCustomTableName;

    @ManyToOne
    @JsonIgnoreProperties("testManyToOnes")
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

    public TestManyToOne testEntity(TestEntity testEntity) {
        this.testEntity = testEntity;
        return this;
    }

    public void setTestEntity(TestEntity testEntity) {
        this.testEntity = testEntity;
    }

    public TestMapstruct getTestMapstruct() {
        return testMapstruct;
    }

    public TestManyToOne testMapstruct(TestMapstruct testMapstruct) {
        this.testMapstruct = testMapstruct;
        return this;
    }

    public void setTestMapstruct(TestMapstruct testMapstruct) {
        this.testMapstruct = testMapstruct;
    }

    public TestServiceClass getTestServiceClass() {
        return testServiceClass;
    }

    public TestManyToOne testServiceClass(TestServiceClass testServiceClass) {
        this.testServiceClass = testServiceClass;
        return this;
    }

    public void setTestServiceClass(TestServiceClass testServiceClass) {
        this.testServiceClass = testServiceClass;
    }

    public TestServiceImpl getTestServiceImpl() {
        return testServiceImpl;
    }

    public TestManyToOne testServiceImpl(TestServiceImpl testServiceImpl) {
        this.testServiceImpl = testServiceImpl;
        return this;
    }

    public void setTestServiceImpl(TestServiceImpl testServiceImpl) {
        this.testServiceImpl = testServiceImpl;
    }

    public TestInfiniteScroll getTestInfiniteScroll() {
        return testInfiniteScroll;
    }

    public TestManyToOne testInfiniteScroll(TestInfiniteScroll testInfiniteScroll) {
        this.testInfiniteScroll = testInfiniteScroll;
        return this;
    }

    public void setTestInfiniteScroll(TestInfiniteScroll testInfiniteScroll) {
        this.testInfiniteScroll = testInfiniteScroll;
    }

    public TestPagination getTestPagination() {
        return testPagination;
    }

    public TestManyToOne testPagination(TestPagination testPagination) {
        this.testPagination = testPagination;
        return this;
    }

    public void setTestPagination(TestPagination testPagination) {
        this.testPagination = testPagination;
    }

    public TestCustomTableName getTestCustomTableName() {
        return testCustomTableName;
    }

    public TestManyToOne testCustomTableName(TestCustomTableName testCustomTableName) {
        this.testCustomTableName = testCustomTableName;
        return this;
    }

    public void setTestCustomTableName(TestCustomTableName testCustomTableName) {
        this.testCustomTableName = testCustomTableName;
    }

    public SuperMegaLargeTestEntity getSuperMegaLargeTestEntity() {
        return superMegaLargeTestEntity;
    }

    public TestManyToOne superMegaLargeTestEntity(SuperMegaLargeTestEntity superMegaLargeTestEntity) {
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
        if (!(o instanceof TestManyToOne)) {
            return false;
        }
        return id != null && id.equals(((TestManyToOne) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "TestManyToOne{" +
            "id=" + getId() +
            "}";
    }
}
