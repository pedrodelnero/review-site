import chai from 'chai';
import request from 'supertest';

import app from '../server.js';
import conn from '../db/mongoose.js';
import { getDemoProduct, loginWithDefaultUser } from './common.test.js';
import Product from '../models/product.model.js';

const { expect } = chai;

describe('Products', () => {
  let token1;
  let token2;
  let prodId;
  before(async () => {
    try {
      await conn.connect();

      let user1 = await loginWithDefaultUser(0);
      let user2 = await loginWithDefaultUser(1);

      const res1 = user1.header['set-cookie'][1];
      token1 = res1.slice(res1.indexOf('=') + 1, res1.indexOf(';'));

      const demoProd = await getDemoProduct(token1);
      prodId = demoProd.body._id;

      const res2 = user2.header['set-cookie'][1];
      token2 = res2.slice(res2.indexOf('=') + 1, res2.indexOf(';'));
    } catch (err) {
      console.log('PROD before err | ', err);
    }
  });

  after(async () => {
    try {
      await Product.deleteMany({});
      await conn.close();
    } catch (err) {
      console.log('PROD after err | ', err);
    }
  });

  describe('Add product', () => {
    it('unsuccessful | not authenticated', async () => {
      const result = await request(app).post('/products').send({
        name: 'lamp',
        description: 'silver lamp',
      });
      expect(result.statusCode).to.equal(500);
      expect(result.body).to.have.property('message', 'Not authenticated');
    });

    it('successful', async () => {
      const result = await request(app)
        .post('/products')
        .set('Cookie', `token=${token1}`)
        .send({
          name: 'lamp',
          description: 'silver lamp',
        });
      expect(result.statusCode).to.equal(201);
      expect(result.body).to.have.all.keys(
        '__v',
        '_id',
        'name',
        'description',
        'author',
        'createdAt',
        'reviews'
      );
    });

    it("successful |  new product in user's products array", async () => {
      const result = await request(app)
        .get('/user')
        .set('Cookie', `token=${token1}`);
      let ids = [];
      result.body.products.forEach((e) => ids.push(e._id));
      expect(result.statusCode).to.equal(200);
      expect(ids).to.include(prodId);
    });
  });

  describe('Delete product', () => {
    it('unsuccessful | not authenticated', async () => {
      const result = await request(app).delete(`/products/${prodId}`);
      expect(result.statusCode).to.equal(500);
      expect(result.body).to.have.property('message', 'Not authenticated');
    });
    it('unsuccessful | not prod ID provided', async () => {
      const result = await request(app)
        .delete(`/products/`)
        .set('Cookie', `token=${token1}`);
      expect(result.error.status).to.equal(404);
    });
    it('unsuccessful | bad prod ID provided', async () => {
      const result = await request(app)
        .delete('/products/12345678987654321')
        .set('Cookie', `token=${token1}`);
      expect(result.error.status).to.equal(500);
    });
    it('unsuccessful | wrong user, correct prod ID provided', async () => {
      const result = await request(app)
        .delete(`/products/${prodId}`)
        .set('Cookie', `token=${token2}`);
      expect(result.error.status).to.equal(500);
      expect(JSON.parse(result.error.text)).to.have.property(
        'message',
        'Not authorized for this action'
      );
    });
    it('successful', async () => {
      const result = await request(app)
        .delete(`/products/${prodId}`)
        .set('Cookie', `token=${token1}`);
      expect(result.statusCode).to.equal(201);
      expect(result.body).to.have.property(
        'message',
        'Product successfully deleted.'
      );
    });
    it("successful | delete prod ID from user's prodduct array", async () => {
      const result = await request(app)
        .get('/user')
        .set('Cookie', `token=${token1}`);
      //   console.log('MMMMMMMMMMMMM', result.body);
      expect(result.statusCode).to.equal(200);
      expect(result.body.products)
        .to.be.an('array')
        .that.does.not.include(prodId);
    });
  });
});
