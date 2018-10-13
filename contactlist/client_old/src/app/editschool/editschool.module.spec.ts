import { EditschoolModule } from './editschool.module';

describe('EditschoolModule', () => {
  let editschoolModule: EditschoolModule;

  beforeEach(() => {
    editschoolModule = new EditschoolModule();
  });

  it('should create an instance', () => {
    expect(editschoolModule).toBeTruthy();
  });
});
