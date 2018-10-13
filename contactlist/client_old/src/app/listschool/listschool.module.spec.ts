import { ListschoolModule } from './listschool.module';

describe('ListschoolModule', () => {
  let listschoolModule: ListschoolModule;

  beforeEach(() => {
    listschoolModule = new ListschoolModule();
  });

  it('should create an instance', () => {
    expect(listschoolModule).toBeTruthy();
  });
});
