package io.github.jhipster.travis.domain;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.time.Instant;

/**
 * A MapsIdChildEntityWithoutDTO.
 */
@Entity
@Table(name = "child_entity_wo_dto")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class MapsIdChildEntityWithoutDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private Long id;

    @Column(name = "date")
    private Instant date;

    @OneToOne

    @MapsId
    @JoinColumn(name = "id")
    private MapsIdParentEntityWithoutDTO mapsIdParentEntityWithoutDTO;

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

    public MapsIdChildEntityWithoutDTO date(Instant date) {
        this.date = date;
        return this;
    }

    public void setDate(Instant date) {
        this.date = date;
    }

    public MapsIdParentEntityWithoutDTO getMapsIdParentEntityWithoutDTO() {
        return mapsIdParentEntityWithoutDTO;
    }

    public MapsIdChildEntityWithoutDTO mapsIdParentEntityWithoutDTO(MapsIdParentEntityWithoutDTO mapsIdParentEntityWithoutDTO) {
        this.mapsIdParentEntityWithoutDTO = mapsIdParentEntityWithoutDTO;
        return this;
    }

    public void setMapsIdParentEntityWithoutDTO(MapsIdParentEntityWithoutDTO mapsIdParentEntityWithoutDTO) {
        this.mapsIdParentEntityWithoutDTO = mapsIdParentEntityWithoutDTO;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof MapsIdChildEntityWithoutDTO)) {
            return false;
        }
        return id != null && id.equals(((MapsIdChildEntityWithoutDTO) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "MapsIdChildEntityWithoutDTO{" +
            "id=" + getId() +
            ", date='" + getDate() + "'" +
            "}";
    }
}
