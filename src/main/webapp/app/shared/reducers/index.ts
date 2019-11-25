import { combineReducers } from 'redux';
import { loadingBarReducer as loadingBar } from 'react-redux-loading-bar';

import locale, { LocaleState } from './locale';
import authentication, { AuthenticationState } from './authentication';
import applicationProfile, { ApplicationProfileState } from './application-profile';

import administration, { AdministrationState } from 'app/modules/administration/administration.reducer';
import userManagement, { UserManagementState } from 'app/modules/administration/user-management/user-management.reducer';
import register, { RegisterState } from 'app/modules/account/register/register.reducer';
import activate, { ActivateState } from 'app/modules/account/activate/activate.reducer';
import password, { PasswordState } from 'app/modules/account/password/password.reducer';
import settings, { SettingsState } from 'app/modules/account/settings/settings.reducer';
import passwordReset, { PasswordResetState } from 'app/modules/account/password-reset/password-reset.reducer';
// prettier-ignore
import bankAccount, {
  BankAccountMySuffixState
} from 'app/entities/test-root/bank-account-my-suffix/bank-account-my-suffix.reducer';
// prettier-ignore
import label, {
  LabelState
} from 'app/entities/test-root/label/label.reducer';
// prettier-ignore
import operation, {
  OperationState
} from 'app/entities/test-root/operation/operation.reducer';
// prettier-ignore
import fieldTestServiceImplEntity, {
  FieldTestServiceImplEntityState
} from 'app/entities/field-test-service-impl-entity/field-test-service-impl-entity.reducer';
// prettier-ignore
import fieldTestServiceClassEntity, {
  FieldTestServiceClassEntityState
} from 'app/entities/field-test-service-class-entity/field-test-service-class-entity.reducer';
// prettier-ignore
import fieldTestEntity, {
  FieldTestEntityState
} from 'app/entities/field-test-entity/field-test-entity.reducer';
// prettier-ignore
import fieldTestInfiniteScrollEntity, {
  FieldTestInfiniteScrollEntityState
} from 'app/entities/field-test-infinite-scroll-entity/field-test-infinite-scroll-entity.reducer';
// prettier-ignore
import fieldTestMapstructEntity, {
  FieldTestMapstructEntityState
} from 'app/entities/field-test-mapstruct-entity/field-test-mapstruct-entity.reducer';
// prettier-ignore
import fieldTestPaginationEntity, {
  FieldTestPaginationEntityState
} from 'app/entities/field-test-pagination-entity/field-test-pagination-entity.reducer';
// prettier-ignore
import testTwoRelationshipsSameEntity, {
  TestTwoRelationshipsSameEntityMySuffixState
} from 'app/entities/test-two-relationships-same-entity-my-suffix/test-two-relationships-same-entity-my-suffix.reducer';
// prettier-ignore
import testServiceImpl, {
  TestServiceImplState
} from 'app/entities/test-service-impl/test-service-impl.reducer';
// prettier-ignore
import testServiceClass, {
  TestServiceClassState
} from 'app/entities/test-service-class/test-service-class.reducer';
// prettier-ignore
import testPagination, {
  TestPaginationState
} from 'app/entities/test-pagination/test-pagination.reducer';
// prettier-ignore
import testMapstruct, {
  TestMapstructState
} from 'app/entities/test-mapstruct/test-mapstruct.reducer';
// prettier-ignore
import testInfiniteScroll, {
  TestInfiniteScrollState
} from 'app/entities/test-infinite-scroll/test-infinite-scroll.reducer';
// prettier-ignore
import testEntity, {
  TestEntityMySuffixAltState
} from 'app/entities/test-entity-my-suffix-alt/test-entity-my-suffix-alt.reducer';
// prettier-ignore
import testCustomTableName, {
  TestCustomTableNameState
} from 'app/entities/test-custom-table-name/test-custom-table-name.reducer';
// prettier-ignore
import testManyRelPaginDTO, {
  TestManyRelPaginDTOMySuffixState
} from 'app/entities/test-many-rel-pagin-dto-my-suffix/test-many-rel-pagin-dto-my-suffix.reducer';
// prettier-ignore
import testManyToMany, {
  TestManyToManyMySuffixState
} from 'app/entities/test-many-to-many-my-suffix/test-many-to-many-my-suffix.reducer';
// prettier-ignore
import testManyToOne, {
  TestManyToOneMySuffixState
} from 'app/entities/test-many-to-one-my-suffix/test-many-to-one-my-suffix.reducer';
// prettier-ignore
import testOneToOne, {
  TestOneToOneMySuffixState
} from 'app/entities/test-one-to-one-my-suffix/test-one-to-one-my-suffix.reducer';
// prettier-ignore
import entityWithDTO, {
  EntityWithDTOState
} from 'app/entities/entity-with-dto/entity-with-dto.reducer';
// prettier-ignore
import entityWithServiceClass, {
  EntityWithServiceClassState
} from 'app/entities/entity-with-service-class/entity-with-service-class.reducer';
// prettier-ignore
import entityWithServiceImpl, {
  EntityWithServiceImplState
} from 'app/entities/entity-with-service-impl/entity-with-service-impl.reducer';
// prettier-ignore
import entityWithPagination, {
  EntityWithPaginationState
} from 'app/entities/entity-with-pagination/entity-with-pagination.reducer';
// prettier-ignore
import entityWithServiceClassAndPagination, {
  EntityWithServiceClassAndPaginationState
} from 'app/entities/entity-with-service-class-and-pagination/entity-with-service-class-and-pagination.reducer';
// prettier-ignore
import entityWithServiceImplAndPagination, {
  EntityWithServiceImplAndPaginationState
} from 'app/entities/entity-with-service-impl-and-pagination/entity-with-service-impl-and-pagination.reducer';
// prettier-ignore
import entityWithServiceClassAndDTO, {
  EntityWithServiceClassAndDTOState
} from 'app/entities/entity-with-service-class-and-dto/entity-with-service-class-and-dto.reducer';
// prettier-ignore
import entityWithServiceImplAndDTO, {
  EntityWithServiceImplAndDTOState
} from 'app/entities/entity-with-service-impl-and-dto/entity-with-service-impl-and-dto.reducer';
// prettier-ignore
import entityWithPaginationAndDTO, {
  EntityWithPaginationAndDTOState
} from 'app/entities/entity-with-pagination-and-dto/entity-with-pagination-and-dto.reducer';
// prettier-ignore
import entityWithServiceClassPaginationAndDTO, {
  EntityWithServiceClassPaginationAndDTOState
} from 'app/entities/entity-with-service-class-pagination-and-dto/entity-with-service-class-pagination-and-dto.reducer';
// prettier-ignore
import entityWithServiceImplPaginationAndDTO, {
  EntityWithServiceImplPaginationAndDTOState
} from 'app/entities/entity-with-service-impl-pagination-and-dto/entity-with-service-impl-pagination-and-dto.reducer';
// prettier-ignore
import division, {
  DivisionState
} from 'app/entities/test-root/division/division.reducer';
// prettier-ignore
import place, {
  PlaceState
} from 'app/entities/test-root/place/place.reducer';
// prettier-ignore
import superMegaLargeTestEntity, {
  SuperMegaLargeTestEntityMySuffixAltState
} from 'app/entities/super-mega-large-test-entity-my-suffix-alt/super-mega-large-test-entity-my-suffix-alt.reducer';
// prettier-ignore
import mapsIdParentEntityWithoutDTO, {
  MapsIdParentEntityWithoutDTOState
} from 'app/entities/maps-id-parent-entity-without-dto/maps-id-parent-entity-without-dto.reducer';
// prettier-ignore
import mapsIdChildEntityWithoutDTO, {
  MapsIdChildEntityWithoutDTOState
} from 'app/entities/maps-id-child-entity-without-dto/maps-id-child-entity-without-dto.reducer';
// prettier-ignore
import mapsIdParentEntityWithDTO, {
  MapsIdParentEntityWithDTOState
} from 'app/entities/maps-id-parent-entity-with-dto/maps-id-parent-entity-with-dto.reducer';
// prettier-ignore
import mapsIdChildEntityWithDTO, {
  MapsIdChildEntityWithDTOState
} from 'app/entities/maps-id-child-entity-with-dto/maps-id-child-entity-with-dto.reducer';
// prettier-ignore
import mapsIdUserProfileWithDTO, {
  MapsIdUserProfileWithDTOState
} from 'app/entities/maps-id-user-profile-with-dto/maps-id-user-profile-with-dto.reducer';
/* jhipster-needle-add-reducer-import - JHipster will add reducer here */

export interface IRootState {
  readonly authentication: AuthenticationState;
  readonly locale: LocaleState;
  readonly applicationProfile: ApplicationProfileState;
  readonly administration: AdministrationState;
  readonly userManagement: UserManagementState;
  readonly register: RegisterState;
  readonly activate: ActivateState;
  readonly passwordReset: PasswordResetState;
  readonly password: PasswordState;
  readonly settings: SettingsState;
  readonly bankAccount: BankAccountMySuffixState;
  readonly label: LabelState;
  readonly operation: OperationState;
  readonly fieldTestServiceImplEntity: FieldTestServiceImplEntityState;
  readonly fieldTestServiceClassEntity: FieldTestServiceClassEntityState;
  readonly fieldTestEntity: FieldTestEntityState;
  readonly fieldTestInfiniteScrollEntity: FieldTestInfiniteScrollEntityState;
  readonly fieldTestMapstructEntity: FieldTestMapstructEntityState;
  readonly fieldTestPaginationEntity: FieldTestPaginationEntityState;
  readonly testTwoRelationshipsSameEntity: TestTwoRelationshipsSameEntityMySuffixState;
  readonly testServiceImpl: TestServiceImplState;
  readonly testServiceClass: TestServiceClassState;
  readonly testPagination: TestPaginationState;
  readonly testMapstruct: TestMapstructState;
  readonly testInfiniteScroll: TestInfiniteScrollState;
  readonly testEntity: TestEntityMySuffixAltState;
  readonly testCustomTableName: TestCustomTableNameState;
  readonly testManyRelPaginDTO: TestManyRelPaginDTOMySuffixState;
  readonly testManyToMany: TestManyToManyMySuffixState;
  readonly testManyToOne: TestManyToOneMySuffixState;
  readonly testOneToOne: TestOneToOneMySuffixState;
  readonly entityWithDTO: EntityWithDTOState;
  readonly entityWithServiceClass: EntityWithServiceClassState;
  readonly entityWithServiceImpl: EntityWithServiceImplState;
  readonly entityWithPagination: EntityWithPaginationState;
  readonly entityWithServiceClassAndPagination: EntityWithServiceClassAndPaginationState;
  readonly entityWithServiceImplAndPagination: EntityWithServiceImplAndPaginationState;
  readonly entityWithServiceClassAndDTO: EntityWithServiceClassAndDTOState;
  readonly entityWithServiceImplAndDTO: EntityWithServiceImplAndDTOState;
  readonly entityWithPaginationAndDTO: EntityWithPaginationAndDTOState;
  readonly entityWithServiceClassPaginationAndDTO: EntityWithServiceClassPaginationAndDTOState;
  readonly entityWithServiceImplPaginationAndDTO: EntityWithServiceImplPaginationAndDTOState;
  readonly division: DivisionState;
  readonly place: PlaceState;
  readonly superMegaLargeTestEntity: SuperMegaLargeTestEntityMySuffixAltState;
  readonly mapsIdParentEntityWithoutDTO: MapsIdParentEntityWithoutDTOState;
  readonly mapsIdChildEntityWithoutDTO: MapsIdChildEntityWithoutDTOState;
  readonly mapsIdParentEntityWithDTO: MapsIdParentEntityWithDTOState;
  readonly mapsIdChildEntityWithDTO: MapsIdChildEntityWithDTOState;
  readonly mapsIdUserProfileWithDTO: MapsIdUserProfileWithDTOState;
  /* jhipster-needle-add-reducer-type - JHipster will add reducer type here */
  readonly loadingBar: any;
}

const rootReducer = combineReducers<IRootState>({
  authentication,
  locale,
  applicationProfile,
  administration,
  userManagement,
  register,
  activate,
  passwordReset,
  password,
  settings,
  bankAccount,
  label,
  operation,
  fieldTestServiceImplEntity,
  fieldTestServiceClassEntity,
  fieldTestEntity,
  fieldTestInfiniteScrollEntity,
  fieldTestMapstructEntity,
  fieldTestPaginationEntity,
  testTwoRelationshipsSameEntity,
  testServiceImpl,
  testServiceClass,
  testPagination,
  testMapstruct,
  testInfiniteScroll,
  testEntity,
  testCustomTableName,
  testManyRelPaginDTO,
  testManyToMany,
  testManyToOne,
  testOneToOne,
  entityWithDTO,
  entityWithServiceClass,
  entityWithServiceImpl,
  entityWithPagination,
  entityWithServiceClassAndPagination,
  entityWithServiceImplAndPagination,
  entityWithServiceClassAndDTO,
  entityWithServiceImplAndDTO,
  entityWithPaginationAndDTO,
  entityWithServiceClassPaginationAndDTO,
  entityWithServiceImplPaginationAndDTO,
  division,
  place,
  superMegaLargeTestEntity,
  mapsIdParentEntityWithoutDTO,
  mapsIdChildEntityWithoutDTO,
  mapsIdParentEntityWithDTO,
  mapsIdChildEntityWithDTO,
  mapsIdUserProfileWithDTO,
  /* jhipster-needle-add-reducer-combine - JHipster will add reducer here */
  loadingBar
});

export default rootReducer;
