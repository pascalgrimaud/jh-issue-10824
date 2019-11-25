package io.github.jhipster.travis.domain;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.time.Instant;

/**
 * A MapsIdUserProfileWithDTO.
 */
@Entity
@Table(name = "maps_id_user_profile_withdto")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class MapsIdUserProfileWithDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private Long id;

    @Column(name = "date_of_birth")
    private Instant dateOfBirth;

    @OneToOne

    @MapsId
    @JoinColumn(name = "id")
    private User user;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Instant getDateOfBirth() {
        return dateOfBirth;
    }

    public MapsIdUserProfileWithDTO dateOfBirth(Instant dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
        return this;
    }

    public void setDateOfBirth(Instant dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public User getUser() {
        return user;
    }

    public MapsIdUserProfileWithDTO user(User user) {
        this.user = user;
        return this;
    }

    public void setUser(User user) {
        this.user = user;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof MapsIdUserProfileWithDTO)) {
            return false;
        }
        return id != null && id.equals(((MapsIdUserProfileWithDTO) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "MapsIdUserProfileWithDTO{" +
            "id=" + getId() +
            ", dateOfBirth='" + getDateOfBirth() + "'" +
            "}";
    }
}
