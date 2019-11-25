package io.github.jhipster.travis.domain;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

/**
 * A TestManyRelPaginDTO.
 */
@Entity
@Table(name = "test_many_many_pagination_dto")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class TestManyRelPaginDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToMany
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    @JoinTable(name = "test_many_many_pagination_dto_test_mapstruct",
               joinColumns = @JoinColumn(name = "test_many_rel_pagindto_id", referencedColumnName = "id"),
               inverseJoinColumns = @JoinColumn(name = "test_mapstruct_id", referencedColumnName = "id"))
    private Set<TestMapstruct> testMapstructs = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Set<TestMapstruct> getTestMapstructs() {
        return testMapstructs;
    }

    public TestManyRelPaginDTO testMapstructs(Set<TestMapstruct> testMapstructs) {
        this.testMapstructs = testMapstructs;
        return this;
    }

    public TestManyRelPaginDTO addTestMapstruct(TestMapstruct testMapstruct) {
        this.testMapstructs.add(testMapstruct);
        testMapstruct.getTestManyRelPaginDTOS().add(this);
        return this;
    }

    public TestManyRelPaginDTO removeTestMapstruct(TestMapstruct testMapstruct) {
        this.testMapstructs.remove(testMapstruct);
        testMapstruct.getTestManyRelPaginDTOS().remove(this);
        return this;
    }

    public void setTestMapstructs(Set<TestMapstruct> testMapstructs) {
        this.testMapstructs = testMapstructs;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof TestManyRelPaginDTO)) {
            return false;
        }
        return id != null && id.equals(((TestManyRelPaginDTO) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "TestManyRelPaginDTO{" +
            "id=" + getId() +
            "}";
    }
}
