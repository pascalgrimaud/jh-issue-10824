package io.github.jhipster.travis.domain;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;

/**
 * A EntityWithPaginationAndDTO.
 */
@Entity
@Table(name = "entity_with_pagination_and_dto")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class EntityWithPaginationAndDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "lea")
    private String lea;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLea() {
        return lea;
    }

    public EntityWithPaginationAndDTO lea(String lea) {
        this.lea = lea;
        return this;
    }

    public void setLea(String lea) {
        this.lea = lea;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof EntityWithPaginationAndDTO)) {
            return false;
        }
        return id != null && id.equals(((EntityWithPaginationAndDTO) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "EntityWithPaginationAndDTO{" +
            "id=" + getId() +
            ", lea='" + getLea() + "'" +
            "}";
    }
}
