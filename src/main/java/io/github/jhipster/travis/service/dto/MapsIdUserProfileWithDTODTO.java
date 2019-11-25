package io.github.jhipster.travis.service.dto;
import java.time.Instant;
import java.io.Serializable;
import java.util.Objects;

/**
 * A DTO for the {@link io.github.jhipster.travis.domain.MapsIdUserProfileWithDTO} entity.
 */
public class MapsIdUserProfileWithDTODTO implements Serializable {

    private Long id;

    private Instant dateOfBirth;


    private Long userId;

    private String userLogin;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Instant getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(Instant dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getUserLogin() {
        return userLogin;
    }

    public void setUserLogin(String userLogin) {
        this.userLogin = userLogin;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        MapsIdUserProfileWithDTODTO mapsIdUserProfileWithDTODTO = (MapsIdUserProfileWithDTODTO) o;
        if (mapsIdUserProfileWithDTODTO.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), mapsIdUserProfileWithDTODTO.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "MapsIdUserProfileWithDTODTO{" +
            "id=" + getId() +
            ", dateOfBirth='" + getDateOfBirth() + "'" +
            ", user=" + getUserId() +
            ", user='" + getUserLogin() + "'" +
            "}";
    }
}
