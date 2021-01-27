'use strict';

const  app  = require('../routes');
const { expect } = require('chai');
const  request  = require('supertest');

describe('routes', () => {
  it('GET /groot should return a translation', () => {
    request(app)
    .get('/groot')
    .expect(200)
    .end((err, res) => {
        expect(err).to.be.null;
        expect(res.body.translated).to.equal('I am Groot!');
      });
  }); 

  it('GET /groot should return an error', () => {
    request(app)
    .get('/groot')
    .expect(!200)
    .end((err, res) => {
        expect(res.body.error).to.equal('I am Groot!');
      });
  });  
});
