package io.github.jhipster.travis.config;

import java.time.Duration;

import org.ehcache.config.builders.*;
import org.ehcache.jsr107.Eh107Configuration;

import org.hibernate.cache.jcache.ConfigSettings;
import io.github.jhipster.config.JHipsterProperties;

import org.springframework.boot.autoconfigure.cache.JCacheManagerCustomizer;
import org.springframework.boot.autoconfigure.orm.jpa.HibernatePropertiesCustomizer;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.*;

@Configuration
@EnableCaching
public class CacheConfiguration {

    private final javax.cache.configuration.Configuration<Object, Object> jcacheConfiguration;

    public CacheConfiguration(JHipsterProperties jHipsterProperties) {
        JHipsterProperties.Cache.Ehcache ehcache = jHipsterProperties.getCache().getEhcache();

        jcacheConfiguration = Eh107Configuration.fromEhcacheCacheConfiguration(
            CacheConfigurationBuilder.newCacheConfigurationBuilder(Object.class, Object.class,
                ResourcePoolsBuilder.heap(ehcache.getMaxEntries()))
                .withExpiry(ExpiryPolicyBuilder.timeToLiveExpiration(Duration.ofSeconds(ehcache.getTimeToLiveSeconds())))
                .build());
    }

    @Bean
    public HibernatePropertiesCustomizer hibernatePropertiesCustomizer(javax.cache.CacheManager cacheManager) {
        return hibernateProperties -> hibernateProperties.put(ConfigSettings.CACHE_MANAGER, cacheManager);
    }

    @Bean
    public JCacheManagerCustomizer cacheManagerCustomizer() {
        return cm -> {
            createCache(cm, io.github.jhipster.travis.repository.UserRepository.USERS_BY_LOGIN_CACHE);
            createCache(cm, io.github.jhipster.travis.repository.UserRepository.USERS_BY_EMAIL_CACHE);
            createCache(cm, io.github.jhipster.travis.domain.User.class.getName());
            createCache(cm, io.github.jhipster.travis.domain.Authority.class.getName());
            createCache(cm, io.github.jhipster.travis.domain.User.class.getName() + ".authorities");
            createCache(cm, io.github.jhipster.travis.domain.BankAccount.class.getName());
            createCache(cm, io.github.jhipster.travis.domain.BankAccount.class.getName() + ".operations");
            createCache(cm, io.github.jhipster.travis.domain.Label.class.getName());
            createCache(cm, io.github.jhipster.travis.domain.Label.class.getName() + ".operations");
            createCache(cm, io.github.jhipster.travis.domain.Operation.class.getName());
            createCache(cm, io.github.jhipster.travis.domain.Operation.class.getName() + ".labels");
            createCache(cm, io.github.jhipster.travis.domain.FieldTestServiceImplEntity.class.getName());
            createCache(cm, io.github.jhipster.travis.domain.FieldTestServiceClassEntity.class.getName());
            createCache(cm, io.github.jhipster.travis.domain.FieldTestEntity.class.getName());
            createCache(cm, io.github.jhipster.travis.domain.FieldTestInfiniteScrollEntity.class.getName());
            createCache(cm, io.github.jhipster.travis.domain.FieldTestMapstructEntity.class.getName());
            createCache(cm, io.github.jhipster.travis.domain.FieldTestPaginationEntity.class.getName());
            createCache(cm, io.github.jhipster.travis.domain.TestTwoRelationshipsSameEntity.class.getName());
            createCache(cm, io.github.jhipster.travis.domain.TestServiceImpl.class.getName());
            createCache(cm, io.github.jhipster.travis.domain.TestServiceImpl.class.getName() + ".testManyToOnes");
            createCache(cm, io.github.jhipster.travis.domain.TestServiceImpl.class.getName() + ".testManyToManies");
            createCache(cm, io.github.jhipster.travis.domain.TestServiceImpl.class.getName() + ".userManyToManies");
            createCache(cm, io.github.jhipster.travis.domain.TestServiceClass.class.getName());
            createCache(cm, io.github.jhipster.travis.domain.TestServiceClass.class.getName() + ".testManyToOnes");
            createCache(cm, io.github.jhipster.travis.domain.TestServiceClass.class.getName() + ".testManyToManies");
            createCache(cm, io.github.jhipster.travis.domain.TestServiceClass.class.getName() + ".userManyToManies");
            createCache(cm, io.github.jhipster.travis.domain.TestPagination.class.getName());
            createCache(cm, io.github.jhipster.travis.domain.TestPagination.class.getName() + ".testManyToOnes");
            createCache(cm, io.github.jhipster.travis.domain.TestPagination.class.getName() + ".testManyToManies");
            createCache(cm, io.github.jhipster.travis.domain.TestPagination.class.getName() + ".userManyToManies");
            createCache(cm, io.github.jhipster.travis.domain.TestMapstruct.class.getName());
            createCache(cm, io.github.jhipster.travis.domain.TestMapstruct.class.getName() + ".testManyToOnes");
            createCache(cm, io.github.jhipster.travis.domain.TestMapstruct.class.getName() + ".testManyToManies");
            createCache(cm, io.github.jhipster.travis.domain.TestMapstruct.class.getName() + ".testManyRelPaginDTOS");
            createCache(cm, io.github.jhipster.travis.domain.TestMapstruct.class.getName() + ".userManyToManies");
            createCache(cm, io.github.jhipster.travis.domain.TestInfiniteScroll.class.getName());
            createCache(cm, io.github.jhipster.travis.domain.TestInfiniteScroll.class.getName() + ".testManyToOnes");
            createCache(cm, io.github.jhipster.travis.domain.TestInfiniteScroll.class.getName() + ".testManyToManies");
            createCache(cm, io.github.jhipster.travis.domain.TestInfiniteScroll.class.getName() + ".userManyToManies");
            createCache(cm, io.github.jhipster.travis.domain.TestEntity.class.getName());
            createCache(cm, io.github.jhipster.travis.domain.TestEntity.class.getName() + ".testManyToOnes");
            createCache(cm, io.github.jhipster.travis.domain.TestEntity.class.getName() + ".testManyToManies");
            createCache(cm, io.github.jhipster.travis.domain.TestEntity.class.getName() + ".userManyToManies");
            createCache(cm, io.github.jhipster.travis.domain.TestEntity.class.getName() + ".testCustomTableNames");
            createCache(cm, io.github.jhipster.travis.domain.TestCustomTableName.class.getName());
            createCache(cm, io.github.jhipster.travis.domain.TestCustomTableName.class.getName() + ".testManyToOnes");
            createCache(cm, io.github.jhipster.travis.domain.TestCustomTableName.class.getName() + ".testManyToManies");
            createCache(cm, io.github.jhipster.travis.domain.TestCustomTableName.class.getName() + ".userManyToManies");
            createCache(cm, io.github.jhipster.travis.domain.TestManyRelPaginDTO.class.getName());
            createCache(cm, io.github.jhipster.travis.domain.TestManyRelPaginDTO.class.getName() + ".testMapstructs");
            createCache(cm, io.github.jhipster.travis.domain.TestManyToMany.class.getName());
            createCache(cm, io.github.jhipster.travis.domain.TestManyToMany.class.getName() + ".testEntities");
            createCache(cm, io.github.jhipster.travis.domain.TestManyToMany.class.getName() + ".testMapstructs");
            createCache(cm, io.github.jhipster.travis.domain.TestManyToMany.class.getName() + ".testServiceClasses");
            createCache(cm, io.github.jhipster.travis.domain.TestManyToMany.class.getName() + ".testServiceImpls");
            createCache(cm, io.github.jhipster.travis.domain.TestManyToMany.class.getName() + ".testInfiniteScrolls");
            createCache(cm, io.github.jhipster.travis.domain.TestManyToMany.class.getName() + ".testPaginations");
            createCache(cm, io.github.jhipster.travis.domain.TestManyToMany.class.getName() + ".testCustomTableNames");
            createCache(cm, io.github.jhipster.travis.domain.TestManyToMany.class.getName() + ".superMegaLargeTestEntities");
            createCache(cm, io.github.jhipster.travis.domain.TestManyToOne.class.getName());
            createCache(cm, io.github.jhipster.travis.domain.TestOneToOne.class.getName());
            createCache(cm, io.github.jhipster.travis.domain.EntityWithDTO.class.getName());
            createCache(cm, io.github.jhipster.travis.domain.EntityWithServiceClass.class.getName());
            createCache(cm, io.github.jhipster.travis.domain.EntityWithServiceImpl.class.getName());
            createCache(cm, io.github.jhipster.travis.domain.EntityWithPagination.class.getName());
            createCache(cm, io.github.jhipster.travis.domain.EntityWithServiceClassAndPagination.class.getName());
            createCache(cm, io.github.jhipster.travis.domain.EntityWithServiceImplAndPagination.class.getName());
            createCache(cm, io.github.jhipster.travis.domain.EntityWithServiceClassAndDTO.class.getName());
            createCache(cm, io.github.jhipster.travis.domain.EntityWithServiceImplAndDTO.class.getName());
            createCache(cm, io.github.jhipster.travis.domain.EntityWithPaginationAndDTO.class.getName());
            createCache(cm, io.github.jhipster.travis.domain.EntityWithServiceClassPaginationAndDTO.class.getName());
            createCache(cm, io.github.jhipster.travis.domain.EntityWithServiceImplPaginationAndDTO.class.getName());
            createCache(cm, io.github.jhipster.travis.domain.Division.class.getName());
            createCache(cm, io.github.jhipster.travis.domain.Division.class.getName() + ".divisionsPlaces");
            createCache(cm, io.github.jhipster.travis.domain.Division.class.getName() + ".preferredPlaces");
            createCache(cm, io.github.jhipster.travis.domain.Place.class.getName());
            createCache(cm, io.github.jhipster.travis.domain.Place.class.getName() + ".preferredDivisions");
            createCache(cm, io.github.jhipster.travis.domain.SuperMegaLargeTestEntity.class.getName());
            createCache(cm, io.github.jhipster.travis.domain.SuperMegaLargeTestEntity.class.getName() + ".superMegaLargeTestManyToOnes");
            createCache(cm, io.github.jhipster.travis.domain.SuperMegaLargeTestEntity.class.getName() + ".superMegaLargeTestManyToManies");
            createCache(cm, io.github.jhipster.travis.domain.SuperMegaLargeTestEntity.class.getName() + ".superMegaLargeUserManyToManies");
            createCache(cm, io.github.jhipster.travis.domain.SuperMegaLargeTestEntity.class.getName() + ".superMegaLargeTestCustomTableNames");
            createCache(cm, io.github.jhipster.travis.domain.MapsIdParentEntityWithoutDTO.class.getName());
            createCache(cm, io.github.jhipster.travis.domain.MapsIdChildEntityWithoutDTO.class.getName());
            createCache(cm, io.github.jhipster.travis.domain.MapsIdParentEntityWithDTO.class.getName());
            createCache(cm, io.github.jhipster.travis.domain.MapsIdChildEntityWithDTO.class.getName());
            createCache(cm, io.github.jhipster.travis.domain.MapsIdUserProfileWithDTO.class.getName());
            // jhipster-needle-ehcache-add-entry
        };
    }

    private void createCache(javax.cache.CacheManager cm, String cacheName) {
        javax.cache.Cache<Object, Object> cache = cm.getCache(cacheName);
        if (cache != null) {
            cm.destroyCache(cacheName);
        }
        cm.createCache(cacheName, jcacheConfiguration);
    }

}
