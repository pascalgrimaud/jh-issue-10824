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
 * A TestPagination.
 */
@Entity
@Table(name = "test_pagination")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class TestPagination implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany(mappedBy = "testPagination")
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<TestManyToOne> testManyToOnes = new HashSet<>();

    @ManyToMany(mappedBy = "testPaginations")
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    @JsonIgnore
    private Set<TestManyToMany> testManyToManies = new HashSet<>();

    @OneToOne(mappedBy = "testPagination")
    @JsonIgnore
    private TestOneToOne testOneToOne;

    @ManyToOne
    @JsonIgnoreProperties("testPaginations")
    private User userOneToMany;

    @ManyToMany
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    @JoinTable(name = "test_pagination_user_many_to_many",
               joinColumns = @JoinColumn(name = "test_pagination_id", referencedColumnName = "id"),
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

    public TestPagination testManyToOnes(Set<TestManyToOne> testManyToOnes) {
        this.testManyToOnes = testManyToOnes;
        return this;
    }

    public TestPagination addTestManyToOne(TestManyToOne testManyToOne) {
        this.testManyToOnes.add(testManyToOne);
        testManyToOne.setTestPagination(this);
        return this;
    }

    public TestPagination removeTestManyToOne(TestManyToOne testManyToOne) {
        this.testManyToOnes.remove(testManyToOne);
        testManyToOne.setTestPagination(null);
        return this;
    }

    public void setTestManyToOnes(Set<TestManyToOne> testManyToOnes) {
        this.testManyToOnes = testManyToOnes;
    }

    public Set<TestManyToMany> getTestManyToManies() {
        return testManyToManies;
    }

    public TestPagination testManyToManies(Set<TestManyToMany> testManyToManies) {
        this.testManyToManies = testManyToManies;
        return this;
    }

    public TestPagination addTestManyToMany(TestManyToMany testManyToMany) {
        this.testManyToManies.add(testManyToMany);
        testManyToMany.getTestPaginations().add(this);
        return this;
    }

    public TestPagination removeTestManyToMany(TestManyToMany testManyToMany) {
        this.testManyToManies.remove(testManyToMany);
        testManyToMany.getTestPaginations().remove(this);
        return this;
    }

    public void setTestManyToManies(Set<TestManyToMany> testManyToManies) {
        this.testManyToManies = testManyToManies;
    }

    public TestOneToOne getTestOneToOne() {
        return testOneToOne;
    }

    public TestPagination testOneToOne(TestOneToOne testOneToOne) {
        this.testOneToOne = testOneToOne;
        return this;
    }

    public void setTestOneToOne(TestOneToOne testOneToOne) {
        this.testOneToOne = testOneToOne;
    }

    public User getUserOneToMany() {
        return userOneToMany;
    }

    public TestPagination userOneToMany(User user) {
        this.userOneToMany = user;
        return this;
    }

    public void setUserOneToMany(User user) {
        this.userOneToMany = user;
    }

    public Set<User> getUserManyToManies() {
        return userManyToManies;
    }

    public TestPagination userManyToManies(Set<User> users) {
        this.userManyToManies = users;
        return this;
    }

    public TestPagination addUserManyToMany(User user) {
        this.userManyToManies.add(user);
        return this;
    }

    public TestPagination removeUserManyToMany(User user) {
        this.userManyToManies.remove(user);
        return this;
    }

    public void setUserManyToManies(Set<User> users) {
        this.userManyToManies = users;
    }

    public User getUserOneToOne() {
        return userOneToOne;
    }

    public TestPagination userOneToOne(User user) {
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
        if (!(o instanceof TestPagination)) {
            return false;
        }
        return id != null && id.equals(((TestPagination) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "TestPagination{" +
            "id=" + getId() +
            "}";
    }
}
