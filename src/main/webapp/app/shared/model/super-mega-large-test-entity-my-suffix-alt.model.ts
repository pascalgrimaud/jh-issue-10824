import { ITestManyToOneMySuffix } from 'app/shared/model/test-many-to-one-my-suffix.model';
import { ITestManyToManyMySuffix } from 'app/shared/model/test-many-to-many-my-suffix.model';
import { ITestOneToOneMySuffix } from 'app/shared/model/test-one-to-one-my-suffix.model';
import { IUser } from 'app/shared/model/user.model';
import { ITestCustomTableName } from 'app/shared/model/test-custom-table-name.model';

export interface ISuperMegaLargeTestEntityMySuffixAlt {
  id?: number;
  superMegaLargeTestManyToOnes?: ITestManyToOneMySuffix[];
  superMegaLargeTestManyToManies?: ITestManyToManyMySuffix[];
  superMegaLargeTestOneToOne?: ITestOneToOneMySuffix;
  superMegaLargeUserOneToMany?: IUser;
  superMegaLargeUserManyToManies?: IUser[];
  superMegaLargeUserOneToOne?: IUser;
  superMegaLargeTestCustomTableNames?: ITestCustomTableName[];
}

export const defaultValue: Readonly<ISuperMegaLargeTestEntityMySuffixAlt> = {};
