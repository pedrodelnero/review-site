import { cleanup } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import mockAxios from '../__mocks__/axios';
import {
  mockProduct,
  mockAddProduct,
  mockUpdateProduct,
} from '../__mocks__/data-products';

import {
  getProduct,
  addProduct,
  deleteProduct,
  updateProduct,
} from '../../actions/product';
import {
  GET_PRODUCT,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
} from '../../constants/actionTypes';

afterEach(cleanup);
test('mocking axios get request for 1 product and its reviews', async () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  const store = mockStore();

  mockAxios.get.mockImplementationOnce(() =>
    Promise.resolve({ data: mockProduct })
  );

  const expectedActions = [{ type: GET_PRODUCT, payload: mockProduct }];

  await store.dispatch(getProduct(1));
  expect(store.getActions()).toEqual(expectedActions);
  expect(mockAxios.get).toHaveBeenCalledTimes(2);
  expect(mockAxios.get).toBeCalledWith('/1');
});

test('mocking axios POST request to add 1 product', async () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  const store = mockStore();

  mockAxios.post.mockImplementationOnce(() =>
    Promise.resolve({ data: mockAddProduct })
  );

  const expectedActions = [{ type: ADD_PRODUCT, payload: mockAddProduct }];

  await store.dispatch(addProduct(mockAddProduct));
  expect(store.getActions()).toEqual(expectedActions);
  expect(mockAxios.post).toHaveBeenCalledTimes(1);
});

test('mocking axios DELETE request to delete 1 product', async () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  const store = mockStore();

  mockAxios.delete.mockImplementationOnce(() =>
    Promise.resolve({ data: mockProduct.data.id })
  );

  const expectedActions = [
    { type: DELETE_PRODUCT, payload: mockProduct.data.id },
  ];

  await store.dispatch(deleteProduct(mockProduct.data.id));
  expect(store.getActions()).toEqual(expectedActions);
  expect(mockAxios.delete).toHaveBeenCalledTimes(1);
});

test('mocking axios PATCH request to update 1 product', async () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  const store = mockStore();

  mockAxios.patch.mockImplementationOnce(() =>
    Promise.resolve({ data: mockUpdateProduct })
  );

  const expectedActions = [
    { type: UPDATE_PRODUCT, payload: mockUpdateProduct },
  ];

  await store.dispatch(updateProduct(mockProduct.data.id, mockUpdateProduct));
  expect(store.getActions()).toEqual(expectedActions);
  expect(mockAxios.delete).toHaveBeenCalledTimes(1);
});
