package io.github.jhipster.travis.domain;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.time.Instant;

/**
 * A MapsIdChildEntityWithDTO.
 */
@Entity
@Table(name = "maps_id_child_entity_withdto")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class MapsIdChildEntityWithDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private Long id;

    @Column(name = "date")
    private Instant date;

    @OneToOne

    @MapsId
    @JoinColumn(name = "id")
    private MapsIdParentEntityWithDTO mapsIdParentEntityWithDTO;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Instant getDate() {
        return date;
    }

    public MapsIdChildEntityWithDTO date(Instant date) {
        this.date = date;
        return this;
    }

    public void setDate(Instant date) {
        this.date = date;
    }

    public MapsIdParentEntityWithDTO getMapsIdParentEntityWithDTO() {
        return mapsIdParentEntityWithDTO;
    }

    public MapsIdChildEntityWithDTO mapsIdParentEntityWithDTO(MapsIdParentEntityWithDTO mapsIdParentEntityWithDTO) {
        this.mapsIdParentEntityWithDTO = mapsIdParentEntityWithDTO;
        return this;
    }

    public void setMapsIdParentEntityWithDTO(MapsIdParentEntityWithDTO mapsIdParentEntityWithDTO) {
        this.mapsIdParentEntityWithDTO = mapsIdParentEntityWithDTO;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof MapsIdChildEntityWithDTO)) {
            return false;
        }
        return id != null && id.equals(((MapsIdChildEntityWithDTO) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "MapsIdChildEntityWithDTO{" +
            "id=" + getId() +
            ", date='" + getDate() + "'" +
            "}";
    }
}
