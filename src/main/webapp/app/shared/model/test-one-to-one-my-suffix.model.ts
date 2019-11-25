import { ITestEntityMySuffixAlt } from 'app/shared/model/test-entity-my-suffix-alt.model';
import { ITestMapstruct } from 'app/shared/model/test-mapstruct.model';
import { ITestServiceClass } from 'app/shared/model/test-service-class.model';
import { ITestServiceImpl } from 'app/shared/model/test-service-impl.model';
import { ITestInfiniteScroll } from 'app/shared/model/test-infinite-scroll.model';
import { ITestPagination } from 'app/shared/model/test-pagination.model';
import { ITestCustomTableName } from 'app/shared/model/test-custom-table-name.model';
import { ISuperMegaLargeTestEntityMySuffixAlt } from 'app/shared/model/super-mega-large-test-entity-my-suffix-alt.model';

export interface ITestOneToOneMySuffix {
  id?: number;
  testEntity?: ITestEntityMySuffixAlt;
  testMapstruct?: ITestMapstruct;
  testServiceClass?: ITestServiceClass;
  testServiceImpl?: ITestServiceImpl;
  testInfiniteScroll?: ITestInfiniteScroll;
  testPagination?: ITestPagination;
  testCustomTableName?: ITestCustomTableName;
  superMegaLargeTestEntity?: ISuperMegaLargeTestEntityMySuffixAlt;
}

export const defaultValue: Readonly<ITestOneToOneMySuffix> = {};
