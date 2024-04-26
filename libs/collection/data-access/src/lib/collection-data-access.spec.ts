import { dataAccess } from './collection-data-access';

describe('dataAccess', () => {
  it('should work', () => {
    expect(dataAccess()).toEqual('data-access');
  });
});
