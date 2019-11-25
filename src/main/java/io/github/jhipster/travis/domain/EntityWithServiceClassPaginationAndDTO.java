package io.github.jhipster.travis.domain;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;

/**
 * A EntityWithServiceClassPaginationAndDTO.
 */
@Entity
@Table(name = "entity_with_service_class_pagination_and_dto")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class EntityWithServiceClassPaginationAndDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "lena")
    private String lena;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLena() {
        return lena;
    }

    public EntityWithServiceClassPaginationAndDTO lena(String lena) {
        this.lena = lena;
        return this;
    }

    public void setLena(String lena) {
        this.lena = lena;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof EntityWithServiceClassPaginationAndDTO)) {
            return false;
        }
        return id != null && id.equals(((EntityWithServiceClassPaginationAndDTO) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "EntityWithServiceClassPaginationAndDTO{" +
            "id=" + getId() +
            ", lena='" + getLena() + "'" +
            "}";
    }
}
