import { AddschoolModule } from './addschool.module';

describe('AddschoolModule', () => {
  let addschoolModule: AddschoolModule;

  beforeEach(() => {
    addschoolModule = new AddschoolModule();
  });

  it('should create an instance', () => {
    expect(addschoolModule).toBeTruthy();
  });
});
