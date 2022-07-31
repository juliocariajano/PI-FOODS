/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Recipe, conn } = require('../../src/db.js');
const agent = session(app);
const recipe = {
  name: 'Milanea a la napolitana',
  summary:'Comida espectacular'
};

describe('Recipe routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Recipe.sync({ force: true })
    .then(() => Recipe.create(recipe)));
  describe('GET /recipe', () => {
    it('should get 200', () =>
      agent.get('/recipe').expect(200)
    );
  });
  
  describe('GET /type', () => {
    it('should get 200', () =>
      agent.get('/type').expect(200)
    );
  });
  describe("GET /recipe/:id", () => {
    it('should get 200', () =>
      agent.get("/recipe/23").expect(200)
    );
  });
  
  describe("GET /recipe?name=xxx", () => {
    it("Si se recibe name devolver 200", () =>
      agent.get("/recipe?name=cauliflower"));
  });

});
