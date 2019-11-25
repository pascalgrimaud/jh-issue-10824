import { ITestManyToOneMySuffix } from 'app/shared/model/test-many-to-one-my-suffix.model';
import { ITestManyToManyMySuffix } from 'app/shared/model/test-many-to-many-my-suffix.model';
import { ITestOneToOneMySuffix } from 'app/shared/model/test-one-to-one-my-suffix.model';
import { ITestEntityMySuffixAlt } from 'app/shared/model/test-entity-my-suffix-alt.model';
import { IUser } from 'app/shared/model/user.model';
import { ISuperMegaLargeTestEntityMySuffixAlt } from 'app/shared/model/super-mega-large-test-entity-my-suffix-alt.model';

export interface ITestCustomTableName {
  id?: number;
  testManyToOnes?: ITestManyToOneMySuffix[];
  testManyToManies?: ITestManyToManyMySuffix[];
  testOneToOne?: ITestOneToOneMySuffix;
  testEntity?: ITestEntityMySuffixAlt;
  userOneToMany?: IUser;
  userManyToManies?: IUser[];
  userOneToOne?: IUser;
  superMegaLargeTestEntity?: ISuperMegaLargeTestEntityMySuffixAlt;
}

export const defaultValue: Readonly<ITestCustomTableName> = {};
