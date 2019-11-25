package io.github.jhipster.travis.domain;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;

/**
 * A MapsIdParentEntityWithDTO.
 */
@Entity
@Table(name = "maps_id_parent_entity_withdto")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class MapsIdParentEntityWithDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @OneToOne(mappedBy = "mapsIdParentEntityWithDTO")
    @JsonIgnore
    private MapsIdChildEntityWithDTO mapsIdChildEntityWithDTO;

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

    public MapsIdParentEntityWithDTO name(String name) {
        this.name = name;
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public MapsIdChildEntityWithDTO getMapsIdChildEntityWithDTO() {
        return mapsIdChildEntityWithDTO;
    }

    public MapsIdParentEntityWithDTO mapsIdChildEntityWithDTO(MapsIdChildEntityWithDTO mapsIdChildEntityWithDTO) {
        this.mapsIdChildEntityWithDTO = mapsIdChildEntityWithDTO;
        return this;
    }

    public void setMapsIdChildEntityWithDTO(MapsIdChildEntityWithDTO mapsIdChildEntityWithDTO) {
        this.mapsIdChildEntityWithDTO = mapsIdChildEntityWithDTO;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof MapsIdParentEntityWithDTO)) {
            return false;
        }
        return id != null && id.equals(((MapsIdParentEntityWithDTO) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "MapsIdParentEntityWithDTO{" +
            "id=" + getId() +
            ", name='" + getName() + "'" +
            "}";
    }
}
