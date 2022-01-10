import chai from 'chai';
import request from 'supertest';

import app from '../server.js';
import conn from '../db/mongoose.js';
import User from '../models/user.model.js';

const { expect } = chai;

describe('Users', () => {
  before(async () => {
    try {
      await conn.connect();
      await User.create({
        name: 'Emma',
        email: 'emma@email.com',
        password: 'emma123',
      });
    } catch (err) {
      console.log('AFTER err | ', err);
    }
  });

  after(async () => {
    try {
      await User.deleteMany();
      await conn.close();
    } catch (err) {
      console.log('AFTER err | ', err);
    }
  });
  describe('Create user', () => {
    it('unsuccessful | missing name', async () => {
      const result = await request(app).post('/user').send({
        name: null,
        email: 'name@email.com',
        password: 'test123',
      });
      expect(result.statusCode).to.equal(500);
      expect(result.body).to.have.property('messages', 'Missing input value.');
    });
    it('unsuccessful | missing email', async () => {
      const result = await request(app).post('/user').send({
        name: 'Tim',
        email: null,
        password: 'test123',
      });
      expect(result.statusCode).to.equal(500);
      expect(result.body).to.have.property('messages', 'Missing input value.');
    });
    it('unsuccessful | missing password', async () => {
      const result = await request(app).post('/user').send({
        name: 'Tim',
        email: 'name@email.com',
        password: null,
      });
      expect(result.statusCode).to.equal(500);
      expect(result.body).to.have.property('messages', 'Missing input value.');
    });
    it('unsuccessful | password too short', async () => {
      const result = await request(app).post('/user').send({
        name: 'Tim',
        email: 'name@email.com',
        password: 'test',
      });
      expect(result.statusCode).to.equal(500);
      expect(result.body).to.have.property(
        'messages',
        'User validation failed: password: Password must be at least 6 characters long'
      );
    });
    it('unsuccessful | email already used', async () => {
      const result = await request(app).post('/user').send({
        name: 'Emmanuel',
        email: 'emma@email.com',
        password: 'testing123',
      });
      expect(result.statusCode).to.equal(500);
      expect(result.body).to.have.property('messages', 'User Already Exists');
    });
    it('succesfully', async () => {
      const result = await request(app).post('/user').send({
        name: 'Tim',
        email: 'name@email.com',
        password: 'test123',
      });
      expect(result.statusCode).to.equal(200);
      expect(result.body).to.have.a.key('id');
      expect(result.header['set-cookie']).to.have.not.be.empty;
    });
  });

  describe('Login user', () => {
    it('unsuccessful | no email', async () => {
      const result = await request(app).post('/user/login').send({
        email: null,
        password: 'bobo1234',
      });
      expect(result.statusCode).to.equal(500);
      expect(result.body).to.have.property('messages', 'Missing input value.');
    });
    it('unsuccessful | no password', async () => {
      const result = await request(app).post('/user/login').send({
        email: 'name@email.com',
        password: null,
      });
      expect(result.statusCode).to.equal(500);
      expect(result.body).to.have.property('messages', 'Missing input value.');
    });
    it('unsuccessful | no account under email', async () => {
      const result = await request(app).post('/user/login').send({
        email: 'bademail@email.com',
        password: 'test12345',
      });
      expect(result.statusCode).to.equal(500);
      expect(result.body).to.have.property(
        'messages',
        'No account found with this email'
      );
    });

    it('unsuccessful | wrong email', async () => {
      const result = await request(app).post('/user/login').send({
        email: 'example1@email.com',
        password: 'bobo1234',
      });
      expect(result.statusCode).to.equal(500);
      expect(result.body).to.have.property(
        'messages',
        'No account found with this email'
      );
    });

    it('unsuccessful | wrong password', async () => {
      const result = await request(app).post('/user/login').send({
        email: 'name@email.com',
        password: 'test1234567',
      });
      expect(result.statusCode).to.equal(500);
      expect(result.body).to.have.property('messages', 'Wrong password');
    });
    it('successful login user', async () => {
      const result = await request(app).post('/user/login').send({
        email: 'name@email.com',
        password: 'test123',
      });
      expect(result.statusCode).to.equal(200);
      expect(result.body).to.have.a.key('id');
      expect(result.header['set-cookie']).to.have.not.be.empty;
    });
  });
});
