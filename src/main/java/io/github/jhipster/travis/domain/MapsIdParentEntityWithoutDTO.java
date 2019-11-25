package io.github.jhipster.travis.domain;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;

/**
 * A MapsIdParentEntityWithoutDTO.
 */
@Entity
@Table(name = "parent_entity_wo_dto")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class MapsIdParentEntityWithoutDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @OneToOne(mappedBy = "mapsIdParentEntityWithoutDTO")
    @JsonIgnore
    private MapsIdChildEntityWithoutDTO mapsIdChildEntityWithoutDTO;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public MapsIdParentEntityWithoutDTO name(String name) {
        this.name = name;
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public MapsIdChildEntityWithoutDTO getMapsIdChildEntityWithoutDTO() {
        return mapsIdChildEntityWithoutDTO;
    }

    public MapsIdParentEntityWithoutDTO mapsIdChildEntityWithoutDTO(MapsIdChildEntityWithoutDTO mapsIdChildEntityWithoutDTO) {
        this.mapsIdChildEntityWithoutDTO = mapsIdChildEntityWithoutDTO;
        return this;
    }

    public void setMapsIdChildEntityWithoutDTO(MapsIdChildEntityWithoutDTO mapsIdChildEntityWithoutDTO) {
        this.mapsIdChildEntityWithoutDTO = mapsIdChildEntityWithoutDTO;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof MapsIdParentEntityWithoutDTO)) {
            return false;
        }
        return id != null && id.equals(((MapsIdParentEntityWithoutDTO) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "MapsIdParentEntityWithoutDTO{" +
            "id=" + getId() +
            ", name='" + getName() + "'" +
            "}";
    }
}
