package io.github.jhipster.travis.service.dto;
import java.io.Serializable;
import java.util.Objects;

/**
 * A DTO for the {@link io.github.jhipster.travis.domain.MapsIdParentEntityWithDTO} entity.
 */
public class MapsIdParentEntityWithDTODTO implements Serializable {

    private Long id;

    private String name;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        MapsIdParentEntityWithDTODTO mapsIdParentEntityWithDTODTO = (MapsIdParentEntityWithDTODTO) o;
        if (mapsIdParentEntityWithDTODTO.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), mapsIdParentEntityWithDTODTO.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "MapsIdParentEntityWithDTODTO{" +
            "id=" + getId() +
            ", name='" + getName() + "'" +
            "}";
    }
}
