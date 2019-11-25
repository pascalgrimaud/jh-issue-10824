package io.github.jhipster.travis.domain;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;

/**
 * A EntityWithServiceClassAndPagination.
 */
@Entity
@Table(name = "entity_with_service_class_and_pagination")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class EntityWithServiceClassAndPagination implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "enzo")
    private String enzo;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEnzo() {
        return enzo;
    }

    public EntityWithServiceClassAndPagination enzo(String enzo) {
        this.enzo = enzo;
        return this;
    }

    public void setEnzo(String enzo) {
        this.enzo = enzo;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof EntityWithServiceClassAndPagination)) {
            return false;
        }
        return id != null && id.equals(((EntityWithServiceClassAndPagination) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "EntityWithServiceClassAndPagination{" +
            "id=" + getId() +
            ", enzo='" + getEnzo() + "'" +
            "}";
    }
}
