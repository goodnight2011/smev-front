import { CommonUtilsModule } from './common.utils.module';

describe('CommonModule', () => {
  let commonModule: CommonUtilsModule;

  beforeEach(() => {
    commonModule = new CommonUtilsModule();
  });

  it('should create an instance', () => {
    expect(commonModule).toBeTruthy();
  });
});
