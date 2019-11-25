package io.github.jhipster.travis.domain;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

/**
 * A TestCustomTableName.
 */
@Entity
@Table(name = "test_custom_table_name_entity")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class TestCustomTableName implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany(mappedBy = "testCustomTableName")
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<TestManyToOne> testManyToOnes = new HashSet<>();

    @ManyToMany(mappedBy = "testCustomTableNames")
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    @JsonIgnore
    private Set<TestManyToMany> testManyToManies = new HashSet<>();

    @OneToOne(mappedBy = "testCustomTableName")
    @JsonIgnore
    private TestOneToOne testOneToOne;

    @ManyToOne(optional = false)
    @NotNull
    @JsonIgnoreProperties("testCustomTableNames")
    private TestEntity testEntity;

    @ManyToOne
    @JsonIgnoreProperties("testCustomTableNames")
    private User userOneToMany;

    @ManyToMany
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    @JoinTable(name = "test_custom_table_name_entity_user_many_to_many",
               joinColumns = @JoinColumn(name = "test_custom_table_name_id", referencedColumnName = "id"),
               inverseJoinColumns = @JoinColumn(name = "user_many_to_many_id", referencedColumnName = "id"))
    private Set<User> userManyToManies = new HashSet<>();

    @OneToOne
    @JoinColumn(unique = true)
    private User userOneToOne;

    @ManyToOne(optional = false)
    @NotNull
    @JsonIgnoreProperties("testCustomTableNames")
    private SuperMegaLargeTestEntity superMegaLargeTestEntity;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Set<TestManyToOne> getTestManyToOnes() {
        return testManyToOnes;
    }

    public TestCustomTableName testManyToOnes(Set<TestManyToOne> testManyToOnes) {
        this.testManyToOnes = testManyToOnes;
        return this;
    }

    public TestCustomTableName addTestManyToOne(TestManyToOne testManyToOne) {
        this.testManyToOnes.add(testManyToOne);
        testManyToOne.setTestCustomTableName(this);
        return this;
    }

    public TestCustomTableName removeTestManyToOne(TestManyToOne testManyToOne) {
        this.testManyToOnes.remove(testManyToOne);
        testManyToOne.setTestCustomTableName(null);
        return this;
    }

    public void setTestManyToOnes(Set<TestManyToOne> testManyToOnes) {
        this.testManyToOnes = testManyToOnes;
    }

    public Set<TestManyToMany> getTestManyToManies() {
        return testManyToManies;
    }

    public TestCustomTableName testManyToManies(Set<TestManyToMany> testManyToManies) {
        this.testManyToManies = testManyToManies;
        return this;
    }

    public TestCustomTableName addTestManyToMany(TestManyToMany testManyToMany) {
        this.testManyToManies.add(testManyToMany);
        testManyToMany.getTestCustomTableNames().add(this);
        return this;
    }

    public TestCustomTableName removeTestManyToMany(TestManyToMany testManyToMany) {
        this.testManyToManies.remove(testManyToMany);
        testManyToMany.getTestCustomTableNames().remove(this);
        return this;
    }

    public void setTestManyToManies(Set<TestManyToMany> testManyToManies) {
        this.testManyToManies = testManyToManies;
    }

    public TestOneToOne getTestOneToOne() {
        return testOneToOne;
    }

    public TestCustomTableName testOneToOne(TestOneToOne testOneToOne) {
        this.testOneToOne = testOneToOne;
        return this;
    }

    public void setTestOneToOne(TestOneToOne testOneToOne) {
        this.testOneToOne = testOneToOne;
    }

    public TestEntity getTestEntity() {
        return testEntity;
    }

    public TestCustomTableName testEntity(TestEntity testEntity) {
        this.testEntity = testEntity;
        return this;
    }

    public void setTestEntity(TestEntity testEntity) {
        this.testEntity = testEntity;
    }

    public User getUserOneToMany() {
        return userOneToMany;
    }

    public TestCustomTableName userOneToMany(User user) {
        this.userOneToMany = user;
        return this;
    }

    public void setUserOneToMany(User user) {
        this.userOneToMany = user;
    }

    public Set<User> getUserManyToManies() {
        return userManyToManies;
    }

    public TestCustomTableName userManyToManies(Set<User> users) {
        this.userManyToManies = users;
        return this;
    }

    public TestCustomTableName addUserManyToMany(User user) {
        this.userManyToManies.add(user);
        return this;
    }

    public TestCustomTableName removeUserManyToMany(User user) {
        this.userManyToManies.remove(user);
        return this;
    }

    public void setUserManyToManies(Set<User> users) {
        this.userManyToManies = users;
    }

    public User getUserOneToOne() {
        return userOneToOne;
    }

    public TestCustomTableName userOneToOne(User user) {
        this.userOneToOne = user;
        return this;
    }

    public void setUserOneToOne(User user) {
        this.userOneToOne = user;
    }

    public SuperMegaLargeTestEntity getSuperMegaLargeTestEntity() {
        return superMegaLargeTestEntity;
    }

    public TestCustomTableName superMegaLargeTestEntity(SuperMegaLargeTestEntity superMegaLargeTestEntity) {
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
        if (!(o instanceof TestCustomTableName)) {
            return false;
        }
        return id != null && id.equals(((TestCustomTableName) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "TestCustomTableName{" +
            "id=" + getId() +
            "}";
    }
}
