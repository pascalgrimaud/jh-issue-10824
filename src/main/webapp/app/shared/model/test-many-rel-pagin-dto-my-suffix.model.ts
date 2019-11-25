import { ITestMapstruct } from 'app/shared/model/test-mapstruct.model';

export interface ITestManyRelPaginDTOMySuffix {
  id?: number;
  testMapstructs?: ITestMapstruct[];
}

export const defaultValue: Readonly<ITestManyRelPaginDTOMySuffix> = {};
