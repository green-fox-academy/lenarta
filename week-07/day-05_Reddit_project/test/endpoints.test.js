'use strict';

const  app  = require('../server');
const { expect } = require('chai');
const  request  = require('supertest');

describe('server', () => {
  it('GET /posts should return a list of posts', () => {
    request(app)
    .get('/posts')
    .expect(200)
    .end((err, res) => {
        expect(err).to.be.null;
        expect(res.body.lenth).to.equal(5);
      });
  }); 

  it('GET /posts should return an error', () => {
    request(app)
    .get('/posts')
    .expect(500)
    .end((err, res) => {
        expect(res.body.error).to.equal('database error');
      });
  });  
});
