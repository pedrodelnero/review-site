import { cleanup } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import mockAxios from '../__mocks__/axios';
import { mockUser, mockAddUser } from '../__mocks__/data-user';

import { getUser, signIn, signOut, signUp } from '../../actions/user';
import {
  GET_USER,
  SIGN_IN,
  SIGN_OUT,
  SIGN_UP,
} from '../../constants/actionTypes';

afterEach(cleanup);

test('mocking axios GET request for user', async () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  const store = mockStore();

  mockAxios.get.mockImplementationOnce(() =>
    Promise.resolve({ data: mockUser })
  );

  const expectedActions = [{ type: GET_USER, payload: mockUser }];

  await store.dispatch(getUser());
  expect(store.getActions()).toEqual(expectedActions);
  expect(mockAxios.get).toHaveBeenCalledTimes(1);
});

test('mocking axios POST request to add user', async () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  const store = mockStore();

  mockAxios.post.mockImplementationOnce(() =>
    Promise.resolve({ data: mockAddUser })
  );

  const expectedActions = [{ type: SIGN_UP, payload: mockAddUser.data.id }];

  await store.dispatch(
    signUp({
      name: mockAddUser.data.name,
      email: mockAddUser.data.email,
      password: mockAddUser.data.password,
    })
  );
  expect(store.getActions()).toEqual(expectedActions);
  expect(mockAxios.post).toHaveBeenCalledTimes(1);
});
