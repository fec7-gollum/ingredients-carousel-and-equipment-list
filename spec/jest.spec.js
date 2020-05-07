const app = require('../server/index.js')
const supertest = require("supertest");
const request = supertest(app);

test("equipment should have a length of 12", async done => {
  const response = await request.get("/api/equipment/100");

  expect(response.status).toBe(200);
  expect(response.body.length).toBe(12);
  done();
});
test("ingredients should have a length of 12", async done => {
  const response = await request.get("/api/ingredients/100");

  expect(response.status).toBe(200);
  expect(response.body.length).toBe(12);
  done();
});
test("Equipment should have the correct properties", async done => {
  const response = await request.get("/api/ingredients/100");

  const obj = response.body[0]
  expect(response.status).toBe(200);
  expect(obj.id).toExist;
  expect(obj.description).toExist;
  expect(obj.imgUrl).toExist;
  expect(obj.purchaseUrl).toExist;
  expect(obj.recipeId).toExist;
  done();
});
test("Ingredients should have the correct properties", async done => {
  const response = await request.get("/api/ingredients/100");

  const obj = response.body[0]
  expect(response.status).toBe(200);
  expect(obj.id).toExist;
  expect(obj.description).toExist;
  expect(obj.imgUrl).toExist;
  expect(obj.recipeId).toExist;
  done();
});


import React from 'react';
import { mount } from 'enzyme';
import App from '/Users/Max/Documents/HackReactor/FEC/ingredients-carousel-and-equipment-list/client/src/index.jsx';

describe('First React component test with Enzyme', () => {
  it('renders without crashing', () => {
     mount(<App />);
   });
});

