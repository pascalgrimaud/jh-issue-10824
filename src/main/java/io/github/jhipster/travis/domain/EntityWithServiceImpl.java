package io.github.jhipster.travis.domain;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;

/**
 * A EntityWithServiceImpl.
 */
@Entity
@Table(name = "entity_with_service_impl")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class EntityWithServiceImpl implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "clara")
    private String clara;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getClara() {
        return clara;
    }

    public EntityWithServiceImpl clara(String clara) {
        this.clara = clara;
        return this;
    }

    public void setClara(String clara) {
        this.clara = clara;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof EntityWithServiceImpl)) {
            return false;
        }
        return id != null && id.equals(((EntityWithServiceImpl) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "EntityWithServiceImpl{" +
            "id=" + getId() +
            ", clara='" + getClara() + "'" +
            "}";
    }
}
