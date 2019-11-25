import React from 'react';
import MenuItem from 'app/shared/layout/menus/menu-item';
import { DropdownItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Translate, translate } from 'react-jhipster';
import { NavLink as Link } from 'react-router-dom';
import { NavDropdown } from './menu-components';

export const EntitiesMenu = props => (
  <NavDropdown icon="th-list" name={translate('global.menu.entities.main')} id="entity-menu">
    <MenuItem icon="asterisk" to="/bank-account-my-suffix">
      <Translate contentKey="global.menu.entities.testRootBankAccountMySuffix" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/label">
      <Translate contentKey="global.menu.entities.testRootLabel" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/operation">
      <Translate contentKey="global.menu.entities.testRootOperation" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/field-test-service-impl-entity">
      <Translate contentKey="global.menu.entities.fieldTestServiceImplEntity" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/field-test-service-class-entity">
      <Translate contentKey="global.menu.entities.fieldTestServiceClassEntity" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/field-test-entity">
      <Translate contentKey="global.menu.entities.fieldTestEntity" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/field-test-infinite-scroll-entity">
      <Translate contentKey="global.menu.entities.fieldTestInfiniteScrollEntity" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/field-test-mapstruct-entity">
      <Translate contentKey="global.menu.entities.fieldTestMapstructEntity" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/field-test-pagination-entity">
      <Translate contentKey="global.menu.entities.fieldTestPaginationEntity" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/test-two-relationships-same-entity-my-suffix">
      <Translate contentKey="global.menu.entities.testTwoRelationshipsSameEntityMySuffix" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/test-service-impl">
      <Translate contentKey="global.menu.entities.testServiceImpl" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/test-service-class">
      <Translate contentKey="global.menu.entities.testServiceClass" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/test-pagination">
      <Translate contentKey="global.menu.entities.testPagination" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/test-mapstruct">
      <Translate contentKey="global.menu.entities.testMapstruct" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/test-infinite-scroll">
      <Translate contentKey="global.menu.entities.testInfiniteScroll" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/test-entity-my-suffix-alt">
      <Translate contentKey="global.menu.entities.testEntityMySuffixAlt" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/test-custom-table-name">
      <Translate contentKey="global.menu.entities.testCustomTableName" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/test-many-rel-pagin-dto-my-suffix">
      <Translate contentKey="global.menu.entities.testManyRelPaginDtoMySuffix" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/test-many-to-many-my-suffix">
      <Translate contentKey="global.menu.entities.testManyToManyMySuffix" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/test-many-to-one-my-suffix">
      <Translate contentKey="global.menu.entities.testManyToOneMySuffix" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/test-one-to-one-my-suffix">
      <Translate contentKey="global.menu.entities.testOneToOneMySuffix" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/entity-with-dto">
      <Translate contentKey="global.menu.entities.entityWithDto" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/entity-with-service-class">
      <Translate contentKey="global.menu.entities.entityWithServiceClass" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/entity-with-service-impl">
      <Translate contentKey="global.menu.entities.entityWithServiceImpl" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/entity-with-pagination">
      <Translate contentKey="global.menu.entities.entityWithPagination" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/entity-with-service-class-and-pagination">
      <Translate contentKey="global.menu.entities.entityWithServiceClassAndPagination" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/entity-with-service-impl-and-pagination">
      <Translate contentKey="global.menu.entities.entityWithServiceImplAndPagination" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/entity-with-service-class-and-dto">
      <Translate contentKey="global.menu.entities.entityWithServiceClassAndDto" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/entity-with-service-impl-and-dto">
      <Translate contentKey="global.menu.entities.entityWithServiceImplAndDto" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/entity-with-pagination-and-dto">
      <Translate contentKey="global.menu.entities.entityWithPaginationAndDto" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/entity-with-service-class-pagination-and-dto">
      <Translate contentKey="global.menu.entities.entityWithServiceClassPaginationAndDto" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/entity-with-service-impl-pagination-and-dto">
      <Translate contentKey="global.menu.entities.entityWithServiceImplPaginationAndDto" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/division">
      <Translate contentKey="global.menu.entities.testRootDivision" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/place">
      <Translate contentKey="global.menu.entities.testRootPlace" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/super-mega-large-test-entity-my-suffix-alt">
      <Translate contentKey="global.menu.entities.superMegaLargeTestEntityMySuffixAlt" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/maps-id-parent-entity-without-dto">
      <Translate contentKey="global.menu.entities.mapsIdParentEntityWithoutDto" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/maps-id-child-entity-without-dto">
      <Translate contentKey="global.menu.entities.mapsIdChildEntityWithoutDto" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/maps-id-parent-entity-with-dto">
      <Translate contentKey="global.menu.entities.mapsIdParentEntityWithDto" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/maps-id-child-entity-with-dto">
      <Translate contentKey="global.menu.entities.mapsIdChildEntityWithDto" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/maps-id-user-profile-with-dto">
      <Translate contentKey="global.menu.entities.mapsIdUserProfileWithDto" />
    </MenuItem>
    {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
  </NavDropdown>
);
