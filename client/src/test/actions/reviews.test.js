import { cleanup } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import mockAxios from '../__mocks__/axios';
import {
  mockReview,
  mockAddReview,
  mockDeleteReview,
} from '../__mocks__/data-reviews';

import { addReview, deleteReview, getReviews } from '../../actions/reviews';
import {
  ADD_REVIEW,
  DELETE_REVIEW,
  GET_REVIEWS,
} from '../../constants/actionTypes';

afterEach(cleanup);

test('mocking axios GET request for all reviews of 1 product', async () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  const store = mockStore();

  mockAxios.get.mockImplementationOnce(() =>
    Promise.resolve({ data: mockReview })
  );

  const expectedActions = [{ type: GET_REVIEWS, payload: mockReview }];

  await store.dispatch(getReviews(1));
  expect(store.getActions()).toEqual(expectedActions);
  expect(mockAxios.get).toHaveBeenCalledTimes(1);
});

test('mocking axios POST request to add 1 review', async () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  const store = mockStore();

  mockAxios.post.mockImplementationOnce(() =>
    Promise.resolve({ data: mockAddReview })
  );

  const expectedActions = [{ type: ADD_REVIEW, payload: mockAddReview }];

  await store.dispatch(addReview(1, mockAddReview));
  expect(store.getActions()).toEqual(expectedActions);
  expect(mockAxios.post).toHaveBeenCalledTimes(1);
});

test('mocking axios DELETE request to delete 1 review', async () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  const store = mockStore();

  mockAxios.delete.mockImplementationOnce(() =>
    Promise.resolve(mockDeleteReview.product.reviews[0].id)
  );

  const expectedActions = [
    { type: DELETE_REVIEW, payload: mockDeleteReview.product.reviews[0].id },
  ];

  await store.dispatch(
    deleteReview(
      mockDeleteReview.product.id,
      mockDeleteReview.product.reviews[0].id
    )
  );
  expect(store.getActions()).toEqual(expectedActions);
  expect(mockAxios.delete).toHaveBeenCalledTimes(1);
});
