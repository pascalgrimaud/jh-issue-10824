package io.github.jhipster.travis.domain;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;

/**
 * A TestTwoRelationshipsSameEntity.
 */
@Entity
@Table(name = "test_multiple_rel")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class TestTwoRelationshipsSameEntity implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JsonIgnoreProperties("firstTestTwoRelationshipsSameEntities")
    private TestEntity firstRelationship;

    @ManyToOne
    @JsonIgnoreProperties("secondTestTwoRelationshipsSameEntities")
    private TestEntity secondRelationship;

    @OneToOne
    @JoinColumn(unique = true)
    private User userOne;

    @OneToOne
    @JoinColumn(unique = true)
    private User userTwo;

    @ManyToOne(optional = false)
    @NotNull
    @JsonIgnoreProperties("firstTestTwoRelationshipsSameEntities")
    private Division firstUniqueRequiredRelation;

    @ManyToOne(optional = false)
    @NotNull
    @JsonIgnoreProperties("secondTestTwoRelationshipsSameEntities")
    private Division secondUniqueRequiredRelation;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public TestEntity getFirstRelationship() {
        return firstRelationship;
    }

    public TestTwoRelationshipsSameEntity firstRelationship(TestEntity testEntity) {
        this.firstRelationship = testEntity;
        return this;
    }

    public void setFirstRelationship(TestEntity testEntity) {
        this.firstRelationship = testEntity;
    }

    public TestEntity getSecondRelationship() {
        return secondRelationship;
    }

    public TestTwoRelationshipsSameEntity secondRelationship(TestEntity testEntity) {
        this.secondRelationship = testEntity;
        return this;
    }

    public void setSecondRelationship(TestEntity testEntity) {
        this.secondRelationship = testEntity;
    }

    public User getUserOne() {
        return userOne;
    }

    public TestTwoRelationshipsSameEntity userOne(User user) {
        this.userOne = user;
        return this;
    }

    public void setUserOne(User user) {
        this.userOne = user;
    }

    public User getUserTwo() {
        return userTwo;
    }

    public TestTwoRelationshipsSameEntity userTwo(User user) {
        this.userTwo = user;
        return this;
    }

    public void setUserTwo(User user) {
        this.userTwo = user;
    }

    public Division getFirstUniqueRequiredRelation() {
        return firstUniqueRequiredRelation;
    }

    public TestTwoRelationshipsSameEntity firstUniqueRequiredRelation(Division division) {
        this.firstUniqueRequiredRelation = division;
        return this;
    }

    public void setFirstUniqueRequiredRelation(Division division) {
        this.firstUniqueRequiredRelation = division;
    }

    public Division getSecondUniqueRequiredRelation() {
        return secondUniqueRequiredRelation;
    }

    public TestTwoRelationshipsSameEntity secondUniqueRequiredRelation(Division division) {
        this.secondUniqueRequiredRelation = division;
        return this;
    }

    public void setSecondUniqueRequiredRelation(Division division) {
        this.secondUniqueRequiredRelation = division;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof TestTwoRelationshipsSameEntity)) {
            return false;
        }
        return id != null && id.equals(((TestTwoRelationshipsSameEntity) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "TestTwoRelationshipsSameEntity{" +
            "id=" + getId() +
            "}";
    }
}
