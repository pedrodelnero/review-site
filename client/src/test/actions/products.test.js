import { cleanup } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import mockAxios from '../__mocks__/axios';
import {
  mockProduct,
  mockAddProduct,
  mockProducts,
  mockUpdateProduct,
} from '../__mocks__/data-products';

import { getProducts } from '../../actions/products';
import { GET_PRODUCTS } from '../../constants/actionTypes';

afterEach(cleanup);

test('mocking axios get request for all products', async () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  const store = mockStore();

  mockAxios.get.mockImplementationOnce(() =>
    Promise.resolve({ data: mockProducts })
  );

  const expectedActions = [{ type: GET_PRODUCTS, payload: mockProducts }];

  await store.dispatch(getProducts());
  expect(store.getActions()).toEqual(expectedActions);
  expect(mockAxios.get).toHaveBeenCalledTimes(1);
});
