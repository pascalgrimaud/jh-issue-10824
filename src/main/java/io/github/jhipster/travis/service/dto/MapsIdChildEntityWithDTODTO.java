package io.github.jhipster.travis.service.dto;
import java.time.Instant;
import java.io.Serializable;
import java.util.Objects;

/**
 * A DTO for the {@link io.github.jhipster.travis.domain.MapsIdChildEntityWithDTO} entity.
 */
public class MapsIdChildEntityWithDTODTO implements Serializable {

    private Long id;

    private Instant date;


    private Long mapsIdParentEntityWithDTOId;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Instant getDate() {
        return date;
    }

    public void setDate(Instant date) {
        this.date = date;
    }

    public Long getMapsIdParentEntityWithDTOId() {
        return mapsIdParentEntityWithDTOId;
    }

    public void setMapsIdParentEntityWithDTOId(Long mapsIdParentEntityWithDTOId) {
        this.mapsIdParentEntityWithDTOId = mapsIdParentEntityWithDTOId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        MapsIdChildEntityWithDTODTO mapsIdChildEntityWithDTODTO = (MapsIdChildEntityWithDTODTO) o;
        if (mapsIdChildEntityWithDTODTO.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), mapsIdChildEntityWithDTODTO.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "MapsIdChildEntityWithDTODTO{" +
            "id=" + getId() +
            ", date='" + getDate() + "'" +
            ", mapsIdParentEntityWithDTO=" + getMapsIdParentEntityWithDTOId() +
            "}";
    }
}
