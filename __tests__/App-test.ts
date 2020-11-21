/**
 * @format
 */

import { getString, storeString } from '../src/services/StorageService';

/**
 * Need this hack to get jest to work:
 * https://github.com/facebook/react-native/issues/23943#issuecomment-538378890
 */
jest.mock('react-native', () => ({
  Platform: {
    OS: 'someOS'
  }
}));

it('can save to storage', async () => {
  storeString("key", "testvalue");
  const savedValue = await getString("key");
  expect(savedValue).toEqual("testvalue");
});
