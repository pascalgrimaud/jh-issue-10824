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
 * A SuperMegaLargeTestEntity.
 */
@Entity
@Table(name = "super_mega_large_test_entity")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class SuperMegaLargeTestEntity implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany(mappedBy = "superMegaLargeTestEntity")
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<TestManyToOne> superMegaLargeTestManyToOnes = new HashSet<>();

    @ManyToMany(mappedBy = "superMegaLargeTestEntities")
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    @JsonIgnore
    private Set<TestManyToMany> superMegaLargeTestManyToManies = new HashSet<>();

    @OneToOne(mappedBy = "superMegaLargeTestEntity")
    @JsonIgnore
    private TestOneToOne superMegaLargeTestOneToOne;

    @ManyToOne(optional = false)
    @NotNull
    @JsonIgnoreProperties("superMegaLargeTestEntities")
    private User superMegaLargeUserOneToMany;

    @ManyToMany
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    @JoinTable(name = "super_mega_large_test_entity_super_mega_large_user_many_to_many",
               joinColumns = @JoinColumn(name = "super_mega_large_test_entity_id", referencedColumnName = "id"),
               inverseJoinColumns = @JoinColumn(name = "super_mega_large_user_many_to_many_id", referencedColumnName = "id"))
    private Set<User> superMegaLargeUserManyToManies = new HashSet<>();

    @OneToOne
    @JoinColumn(unique = true)
    private User superMegaLargeUserOneToOne;

    @OneToMany(mappedBy = "superMegaLargeTestEntity")
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<TestCustomTableName> superMegaLargeTestCustomTableNames = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Set<TestManyToOne> getSuperMegaLargeTestManyToOnes() {
        return superMegaLargeTestManyToOnes;
    }

    public SuperMegaLargeTestEntity superMegaLargeTestManyToOnes(Set<TestManyToOne> testManyToOnes) {
        this.superMegaLargeTestManyToOnes = testManyToOnes;
        return this;
    }

    public SuperMegaLargeTestEntity addSuperMegaLargeTestManyToOne(TestManyToOne testManyToOne) {
        this.superMegaLargeTestManyToOnes.add(testManyToOne);
        testManyToOne.setSuperMegaLargeTestEntity(this);
        return this;
    }

    public SuperMegaLargeTestEntity removeSuperMegaLargeTestManyToOne(TestManyToOne testManyToOne) {
        this.superMegaLargeTestManyToOnes.remove(testManyToOne);
        testManyToOne.setSuperMegaLargeTestEntity(null);
        return this;
    }

    public void setSuperMegaLargeTestManyToOnes(Set<TestManyToOne> testManyToOnes) {
        this.superMegaLargeTestManyToOnes = testManyToOnes;
    }

    public Set<TestManyToMany> getSuperMegaLargeTestManyToManies() {
        return superMegaLargeTestManyToManies;
    }

    public SuperMegaLargeTestEntity superMegaLargeTestManyToManies(Set<TestManyToMany> testManyToManies) {
        this.superMegaLargeTestManyToManies = testManyToManies;
        return this;
    }

    public SuperMegaLargeTestEntity addSuperMegaLargeTestManyToMany(TestManyToMany testManyToMany) {
        this.superMegaLargeTestManyToManies.add(testManyToMany);
        testManyToMany.getSuperMegaLargeTestEntities().add(this);
        return this;
    }

    public SuperMegaLargeTestEntity removeSuperMegaLargeTestManyToMany(TestManyToMany testManyToMany) {
        this.superMegaLargeTestManyToManies.remove(testManyToMany);
        testManyToMany.getSuperMegaLargeTestEntities().remove(this);
        return this;
    }

    public void setSuperMegaLargeTestManyToManies(Set<TestManyToMany> testManyToManies) {
        this.superMegaLargeTestManyToManies = testManyToManies;
    }

    public TestOneToOne getSuperMegaLargeTestOneToOne() {
        return superMegaLargeTestOneToOne;
    }

    public SuperMegaLargeTestEntity superMegaLargeTestOneToOne(TestOneToOne testOneToOne) {
        this.superMegaLargeTestOneToOne = testOneToOne;
        return this;
    }

    public void setSuperMegaLargeTestOneToOne(TestOneToOne testOneToOne) {
        this.superMegaLargeTestOneToOne = testOneToOne;
    }

    public User getSuperMegaLargeUserOneToMany() {
        return superMegaLargeUserOneToMany;
    }

    public SuperMegaLargeTestEntity superMegaLargeUserOneToMany(User user) {
        this.superMegaLargeUserOneToMany = user;
        return this;
    }

    public void setSuperMegaLargeUserOneToMany(User user) {
        this.superMegaLargeUserOneToMany = user;
    }

    public Set<User> getSuperMegaLargeUserManyToManies() {
        return superMegaLargeUserManyToManies;
    }

    public SuperMegaLargeTestEntity superMegaLargeUserManyToManies(Set<User> users) {
        this.superMegaLargeUserManyToManies = users;
        return this;
    }

    public SuperMegaLargeTestEntity addSuperMegaLargeUserManyToMany(User user) {
        this.superMegaLargeUserManyToManies.add(user);
        return this;
    }

    public SuperMegaLargeTestEntity removeSuperMegaLargeUserManyToMany(User user) {
        this.superMegaLargeUserManyToManies.remove(user);
        return this;
    }

    public void setSuperMegaLargeUserManyToManies(Set<User> users) {
        this.superMegaLargeUserManyToManies = users;
    }

    public User getSuperMegaLargeUserOneToOne() {
        return superMegaLargeUserOneToOne;
    }

    public SuperMegaLargeTestEntity superMegaLargeUserOneToOne(User user) {
        this.superMegaLargeUserOneToOne = user;
        return this;
    }

    public void setSuperMegaLargeUserOneToOne(User user) {
        this.superMegaLargeUserOneToOne = user;
    }

    public Set<TestCustomTableName> getSuperMegaLargeTestCustomTableNames() {
        return superMegaLargeTestCustomTableNames;
    }

    public SuperMegaLargeTestEntity superMegaLargeTestCustomTableNames(Set<TestCustomTableName> testCustomTableNames) {
        this.superMegaLargeTestCustomTableNames = testCustomTableNames;
        return this;
    }

    public SuperMegaLargeTestEntity addSuperMegaLargeTestCustomTableName(TestCustomTableName testCustomTableName) {
        this.superMegaLargeTestCustomTableNames.add(testCustomTableName);
        testCustomTableName.setSuperMegaLargeTestEntity(this);
        return this;
    }

    public SuperMegaLargeTestEntity removeSuperMegaLargeTestCustomTableName(TestCustomTableName testCustomTableName) {
        this.superMegaLargeTestCustomTableNames.remove(testCustomTableName);
        testCustomTableName.setSuperMegaLargeTestEntity(null);
        return this;
    }

    public void setSuperMegaLargeTestCustomTableNames(Set<TestCustomTableName> testCustomTableNames) {
        this.superMegaLargeTestCustomTableNames = testCustomTableNames;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof SuperMegaLargeTestEntity)) {
            return false;
        }
        return id != null && id.equals(((SuperMegaLargeTestEntity) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "SuperMegaLargeTestEntity{" +
            "id=" + getId() +
            "}";
    }
}
