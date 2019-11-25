import { ITestEntityMySuffixAlt } from 'app/shared/model/test-entity-my-suffix-alt.model';
import { IUser } from 'app/shared/model/user.model';
import { IDivision } from 'app/shared/model/test-root/division.model';

export interface ITestTwoRelationshipsSameEntityMySuffix {
  id?: number;
  firstRelationship?: ITestEntityMySuffixAlt;
  secondRelationship?: ITestEntityMySuffixAlt;
  userOne?: IUser;
  userTwo?: IUser;
  firstUniqueRequiredRelation?: IDivision;
  secondUniqueRequiredRelation?: IDivision;
}

export const defaultValue: Readonly<ITestTwoRelationshipsSameEntityMySuffix> = {};
