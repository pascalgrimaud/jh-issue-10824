package io.github.jhipster.travis.domain;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;

/**
 * A EntityWithDTO.
 */
@Entity
@Table(name = "entity_with_dto")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class EntityWithDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "emma")
    private String emma;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmma() {
        return emma;
    }

    public EntityWithDTO emma(String emma) {
        this.emma = emma;
        return this;
    }

    public void setEmma(String emma) {
        this.emma = emma;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof EntityWithDTO)) {
            return false;
        }
        return id != null && id.equals(((EntityWithDTO) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "EntityWithDTO{" +
            "id=" + getId() +
            ", emma='" + getEmma() + "'" +
            "}";
    }
}
