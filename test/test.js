'use strict';

const getTotalCostOfShoppingBasket = require('../lib/getTotalCostOfShoppingBasket');
const expect = require('chai').expect;


const shoppingBasket = ['Apple', 'Oranges', 'Garlic', 'Papayas', 'Papayas', 'Papayas', 'Oranges']
const emptyShoppingBasket = [];

const specialOffers = {
  'Papayas': 3
}

// this is the prices of all the goods
const priceIndex = {

  'Apple': 0.25,
  'Oranges': 0.30,
  'Garlic': 0.15,
  'Papayas': 0.50
}

describe('Testing the correct input and return for getTotalCostOfShoppingBasket function', () => {

  it('getTotalCostOfShoppingBasket should be an function', () => {

    expect(getTotalCostOfShoppingBasket).to.be.a('function');

  });

  it('getTotalCostOfShoppingBasket Should return a number', () => {


    const totalCost = getTotalCostOfShoppingBasket(shoppingBasket, priceIndex, specialOffers);

    expect(totalCost).to.be.a('Number');

  });

  it('return 0 if empty array is passed', () => {

    expect(getTotalCostOfShoppingBasket(emptyShoppingBasket, priceIndex, specialOffers)).to.equal(0);

  });

});
