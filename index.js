// import the get main function
const getTotalCostOfShoppingBasket = require('./lib/getTotalCostOfShoppingBasket')


// this is your shopping basket of goods
const shoppingBasket = ['Apple', 'Oranges', 'Garlic', 'Papayas', 'Papayas', 'Papayas', 'Oranges']


// You can add as many free items into this specialOffers object.  
// this means that with Papayas you get the third one free

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

const totalCost = getTotalCostOfShoppingBasket(shoppingBasket, priceIndex, specialOffers);

console.log('\nTotal : £' + totalCost.toFixed(2));
