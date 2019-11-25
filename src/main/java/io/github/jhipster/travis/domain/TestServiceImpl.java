package io.github.jhipster.travis.domain;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

/**
 * A TestServiceImpl.
 */
@Entity
@Table(name = "test_service_impl")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class TestServiceImpl implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany(mappedBy = "testServiceImpl")
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<TestManyToOne> testManyToOnes = new HashSet<>();

    @ManyToMany(mappedBy = "testServiceImpls")
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    @JsonIgnore
    private Set<TestManyToMany> testManyToManies = new HashSet<>();

    @OneToOne(mappedBy = "testServiceImpl")
    @JsonIgnore
    private TestOneToOne testOneToOne;

    @ManyToOne
    @JsonIgnoreProperties("testServiceImpls")
    private User userOneToMany;

    @ManyToMany
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    @JoinTable(name = "test_service_impl_user_many_to_many",
               joinColumns = @JoinColumn(name = "test_service_impl_id", referencedColumnName = "id"),
               inverseJoinColumns = @JoinColumn(name = "user_many_to_many_id", referencedColumnName = "id"))
    private Set<User> userManyToManies = new HashSet<>();

    @OneToOne
    @JoinColumn(unique = true)
    private User userOneToOne;

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

    public TestServiceImpl testManyToOnes(Set<TestManyToOne> testManyToOnes) {
        this.testManyToOnes = testManyToOnes;
        return this;
    }

    public TestServiceImpl addTestManyToOne(TestManyToOne testManyToOne) {
        this.testManyToOnes.add(testManyToOne);
        testManyToOne.setTestServiceImpl(this);
        return this;
    }

    public TestServiceImpl removeTestManyToOne(TestManyToOne testManyToOne) {
        this.testManyToOnes.remove(testManyToOne);
        testManyToOne.setTestServiceImpl(null);
        return this;
    }

    public void setTestManyToOnes(Set<TestManyToOne> testManyToOnes) {
        this.testManyToOnes = testManyToOnes;
    }

    public Set<TestManyToMany> getTestManyToManies() {
        return testManyToManies;
    }

    public TestServiceImpl testManyToManies(Set<TestManyToMany> testManyToManies) {
        this.testManyToManies = testManyToManies;
        return this;
    }

    public TestServiceImpl addTestManyToMany(TestManyToMany testManyToMany) {
        this.testManyToManies.add(testManyToMany);
        testManyToMany.getTestServiceImpls().add(this);
        return this;
    }

    public TestServiceImpl removeTestManyToMany(TestManyToMany testManyToMany) {
        this.testManyToManies.remove(testManyToMany);
        testManyToMany.getTestServiceImpls().remove(this);
        return this;
    }

    public void setTestManyToManies(Set<TestManyToMany> testManyToManies) {
        this.testManyToManies = testManyToManies;
    }

    public TestOneToOne getTestOneToOne() {
        return testOneToOne;
    }

    public TestServiceImpl testOneToOne(TestOneToOne testOneToOne) {
        this.testOneToOne = testOneToOne;
        return this;
    }

    public void setTestOneToOne(TestOneToOne testOneToOne) {
        this.testOneToOne = testOneToOne;
    }

    public User getUserOneToMany() {
        return userOneToMany;
    }

    public TestServiceImpl userOneToMany(User user) {
        this.userOneToMany = user;
        return this;
    }

    public void setUserOneToMany(User user) {
        this.userOneToMany = user;
    }

    public Set<User> getUserManyToManies() {
        return userManyToManies;
    }

    public TestServiceImpl userManyToManies(Set<User> users) {
        this.userManyToManies = users;
        return this;
    }

    public TestServiceImpl addUserManyToMany(User user) {
        this.userManyToManies.add(user);
        return this;
    }

    public TestServiceImpl removeUserManyToMany(User user) {
        this.userManyToManies.remove(user);
        return this;
    }

    public void setUserManyToManies(Set<User> users) {
        this.userManyToManies = users;
    }

    public User getUserOneToOne() {
        return userOneToOne;
    }

    public TestServiceImpl userOneToOne(User user) {
        this.userOneToOne = user;
        return this;
    }

    public void setUserOneToOne(User user) {
        this.userOneToOne = user;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof TestServiceImpl)) {
            return false;
        }
        return id != null && id.equals(((TestServiceImpl) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "TestServiceImpl{" +
            "id=" + getId() +
            "}";
    }
}
