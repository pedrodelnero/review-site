import request from 'supertest';

import app from '../server.js';
import User from '../models/user.model.js';

const defaultUsers = [
  {
    name: 'Dani',
    email: 'dani@email.com',
    password: 'dani12345',
  },
  {
    name: 'Toni',
    email: 'toni@email.com',
    password: 'dani12345',
  },
];

const createUser = async (num) => {
  const UserModel = new User(defaultUsers[num]);
  await UserModel.save();
};

const getDefaultUser = async (num) => {
  let users = await User.find({ email: defaultUsers[num].email });
  if (users.length === 0) {
    await createUser(num);
    return getDefaultUser(num);
  } else {
    return users[0];
  }
};

export const loginWithDefaultUser = async (num) => {
  let user = await getDefaultUser(num);
  return request(app)
    .post('/user/login')
    .send({
      email: defaultUsers[num].email,
      password: defaultUsers[num].password,
    })
    .expect(200);
};

export const createDemoProduct = async (token) => {
  return request(app)
    .post('/products')
    .set('Cookie', `token=${token}`)
    .send({ name: 'chair', description: 'wooden chair' });
};

export const getDemoProduct = async (token) => {
  const result = await createDemoProduct(token);
  // console.log('WWWWWW', result.body);
  return request(app).get(`/products/${result.body._id}`);
};
