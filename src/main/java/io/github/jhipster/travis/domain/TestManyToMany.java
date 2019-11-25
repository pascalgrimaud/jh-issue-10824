package io.github.jhipster.travis.domain;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

/**
 * A TestManyToMany.
 */
@Entity
@Table(name = "test_many_to_many")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class TestManyToMany implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToMany
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    @JoinTable(name = "test_many_to_many_test_entity",
               joinColumns = @JoinColumn(name = "test_many_to_many_id", referencedColumnName = "id"),
               inverseJoinColumns = @JoinColumn(name = "test_entity_id", referencedColumnName = "id"))
    private Set<TestEntity> testEntities = new HashSet<>();

    @ManyToMany
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    @JoinTable(name = "test_many_to_many_test_mapstruct",
               joinColumns = @JoinColumn(name = "test_many_to_many_id", referencedColumnName = "id"),
               inverseJoinColumns = @JoinColumn(name = "test_mapstruct_id", referencedColumnName = "id"))
    private Set<TestMapstruct> testMapstructs = new HashSet<>();

    @ManyToMany
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    @JoinTable(name = "test_many_to_many_test_service_class",
               joinColumns = @JoinColumn(name = "test_many_to_many_id", referencedColumnName = "id"),
               inverseJoinColumns = @JoinColumn(name = "test_service_class_id", referencedColumnName = "id"))
    private Set<TestServiceClass> testServiceClasses = new HashSet<>();

    @ManyToMany
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    @JoinTable(name = "test_many_to_many_test_service_impl",
               joinColumns = @JoinColumn(name = "test_many_to_many_id", referencedColumnName = "id"),
               inverseJoinColumns = @JoinColumn(name = "test_service_impl_id", referencedColumnName = "id"))
    private Set<TestServiceImpl> testServiceImpls = new HashSet<>();

    @ManyToMany
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    @JoinTable(name = "test_many_to_many_test_infinite_scroll",
               joinColumns = @JoinColumn(name = "test_many_to_many_id", referencedColumnName = "id"),
               inverseJoinColumns = @JoinColumn(name = "test_infinite_scroll_id", referencedColumnName = "id"))
    private Set<TestInfiniteScroll> testInfiniteScrolls = new HashSet<>();

    @ManyToMany
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    @JoinTable(name = "test_many_to_many_test_pagination",
               joinColumns = @JoinColumn(name = "test_many_to_many_id", referencedColumnName = "id"),
               inverseJoinColumns = @JoinColumn(name = "test_pagination_id", referencedColumnName = "id"))
    private Set<TestPagination> testPaginations = new HashSet<>();

    @ManyToMany
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    @JoinTable(name = "test_many_to_many_test_custom_table_name",
               joinColumns = @JoinColumn(name = "test_many_to_many_id", referencedColumnName = "id"),
               inverseJoinColumns = @JoinColumn(name = "test_custom_table_name_id", referencedColumnName = "id"))
    private Set<TestCustomTableName> testCustomTableNames = new HashSet<>();

    @ManyToMany
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    @JoinTable(name = "test_many_to_many_super_mega_large_test_entity",
               joinColumns = @JoinColumn(name = "test_many_to_many_id", referencedColumnName = "id"),
               inverseJoinColumns = @JoinColumn(name = "super_mega_large_test_entity_id", referencedColumnName = "id"))
    private Set<SuperMegaLargeTestEntity> superMegaLargeTestEntities = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Set<TestEntity> getTestEntities() {
        return testEntities;
    }

    public TestManyToMany testEntities(Set<TestEntity> testEntities) {
        this.testEntities = testEntities;
        return this;
    }

    public TestManyToMany addTestEntity(TestEntity testEntity) {
        this.testEntities.add(testEntity);
        testEntity.getTestManyToManies().add(this);
        return this;
    }

    public TestManyToMany removeTestEntity(TestEntity testEntity) {
        this.testEntities.remove(testEntity);
        testEntity.getTestManyToManies().remove(this);
        return this;
    }

    public void setTestEntities(Set<TestEntity> testEntities) {
        this.testEntities = testEntities;
    }

    public Set<TestMapstruct> getTestMapstructs() {
        return testMapstructs;
    }

    public TestManyToMany testMapstructs(Set<TestMapstruct> testMapstructs) {
        this.testMapstructs = testMapstructs;
        return this;
    }

    public TestManyToMany addTestMapstruct(TestMapstruct testMapstruct) {
        this.testMapstructs.add(testMapstruct);
        testMapstruct.getTestManyToManies().add(this);
        return this;
    }

    public TestManyToMany removeTestMapstruct(TestMapstruct testMapstruct) {
        this.testMapstructs.remove(testMapstruct);
        testMapstruct.getTestManyToManies().remove(this);
        return this;
    }

    public void setTestMapstructs(Set<TestMapstruct> testMapstructs) {
        this.testMapstructs = testMapstructs;
    }

    public Set<TestServiceClass> getTestServiceClasses() {
        return testServiceClasses;
    }

    public TestManyToMany testServiceClasses(Set<TestServiceClass> testServiceClasses) {
        this.testServiceClasses = testServiceClasses;
        return this;
    }

    public TestManyToMany addTestServiceClass(TestServiceClass testServiceClass) {
        this.testServiceClasses.add(testServiceClass);
        testServiceClass.getTestManyToManies().add(this);
        return this;
    }

    public TestManyToMany removeTestServiceClass(TestServiceClass testServiceClass) {
        this.testServiceClasses.remove(testServiceClass);
        testServiceClass.getTestManyToManies().remove(this);
        return this;
    }

    public void setTestServiceClasses(Set<TestServiceClass> testServiceClasses) {
        this.testServiceClasses = testServiceClasses;
    }

    public Set<TestServiceImpl> getTestServiceImpls() {
        return testServiceImpls;
    }

    public TestManyToMany testServiceImpls(Set<TestServiceImpl> testServiceImpls) {
        this.testServiceImpls = testServiceImpls;
        return this;
    }

    public TestManyToMany addTestServiceImpl(TestServiceImpl testServiceImpl) {
        this.testServiceImpls.add(testServiceImpl);
        testServiceImpl.getTestManyToManies().add(this);
        return this;
    }

    public TestManyToMany removeTestServiceImpl(TestServiceImpl testServiceImpl) {
        this.testServiceImpls.remove(testServiceImpl);
        testServiceImpl.getTestManyToManies().remove(this);
        return this;
    }

    public void setTestServiceImpls(Set<TestServiceImpl> testServiceImpls) {
        this.testServiceImpls = testServiceImpls;
    }

    public Set<TestInfiniteScroll> getTestInfiniteScrolls() {
        return testInfiniteScrolls;
    }

    public TestManyToMany testInfiniteScrolls(Set<TestInfiniteScroll> testInfiniteScrolls) {
        this.testInfiniteScrolls = testInfiniteScrolls;
        return this;
    }

    public TestManyToMany addTestInfiniteScroll(TestInfiniteScroll testInfiniteScroll) {
        this.testInfiniteScrolls.add(testInfiniteScroll);
        testInfiniteScroll.getTestManyToManies().add(this);
        return this;
    }

    public TestManyToMany removeTestInfiniteScroll(TestInfiniteScroll testInfiniteScroll) {
        this.testInfiniteScrolls.remove(testInfiniteScroll);
        testInfiniteScroll.getTestManyToManies().remove(this);
        return this;
    }

    public void setTestInfiniteScrolls(Set<TestInfiniteScroll> testInfiniteScrolls) {
        this.testInfiniteScrolls = testInfiniteScrolls;
    }

    public Set<TestPagination> getTestPaginations() {
        return testPaginations;
    }

    public TestManyToMany testPaginations(Set<TestPagination> testPaginations) {
        this.testPaginations = testPaginations;
        return this;
    }

    public TestManyToMany addTestPagination(TestPagination testPagination) {
        this.testPaginations.add(testPagination);
        testPagination.getTestManyToManies().add(this);
        return this;
    }

    public TestManyToMany removeTestPagination(TestPagination testPagination) {
        this.testPaginations.remove(testPagination);
        testPagination.getTestManyToManies().remove(this);
        return this;
    }

    public void setTestPaginations(Set<TestPagination> testPaginations) {
        this.testPaginations = testPaginations;
    }

    public Set<TestCustomTableName> getTestCustomTableNames() {
        return testCustomTableNames;
    }

    public TestManyToMany testCustomTableNames(Set<TestCustomTableName> testCustomTableNames) {
        this.testCustomTableNames = testCustomTableNames;
        return this;
    }

    public TestManyToMany addTestCustomTableName(TestCustomTableName testCustomTableName) {
        this.testCustomTableNames.add(testCustomTableName);
        testCustomTableName.getTestManyToManies().add(this);
        return this;
    }

    public TestManyToMany removeTestCustomTableName(TestCustomTableName testCustomTableName) {
        this.testCustomTableNames.remove(testCustomTableName);
        testCustomTableName.getTestManyToManies().remove(this);
        return this;
    }

    public void setTestCustomTableNames(Set<TestCustomTableName> testCustomTableNames) {
        this.testCustomTableNames = testCustomTableNames;
    }

    public Set<SuperMegaLargeTestEntity> getSuperMegaLargeTestEntities() {
        return superMegaLargeTestEntities;
    }

    public TestManyToMany superMegaLargeTestEntities(Set<SuperMegaLargeTestEntity> superMegaLargeTestEntities) {
        this.superMegaLargeTestEntities = superMegaLargeTestEntities;
        return this;
    }

    public TestManyToMany addSuperMegaLargeTestEntity(SuperMegaLargeTestEntity superMegaLargeTestEntity) {
        this.superMegaLargeTestEntities.add(superMegaLargeTestEntity);
        superMegaLargeTestEntity.getSuperMegaLargeTestManyToManies().add(this);
        return this;
    }

    public TestManyToMany removeSuperMegaLargeTestEntity(SuperMegaLargeTestEntity superMegaLargeTestEntity) {
        this.superMegaLargeTestEntities.remove(superMegaLargeTestEntity);
        superMegaLargeTestEntity.getSuperMegaLargeTestManyToManies().remove(this);
        return this;
    }

    public void setSuperMegaLargeTestEntities(Set<SuperMegaLargeTestEntity> superMegaLargeTestEntities) {
        this.superMegaLargeTestEntities = superMegaLargeTestEntities;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof TestManyToMany)) {
            return false;
        }
        return id != null && id.equals(((TestManyToMany) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "TestManyToMany{" +
            "id=" + getId() +
            "}";
    }
}
