'use strict'

const _ = require('lodash');

// The function creates counters for all the products so we know how many of each product there are.
// Then if the item is on special offer we know when to give away a free item. I.e if it is the third Papaya we should give that for free and not add it to the total


function getTotalCostOfShoppingBasket(shoppingBasket, priceIndex, specialOffers) {


  if (!shoppingBasket || !priceIndex || !specialOffers) {

    throw new Error('You must feed all arguments to getTotalCostOfShoppingBasket(): shoppingBasket, priceIndex, specialOffers');

  }

  // create counters for every item
  var uniqItem = _.uniq(shoppingBasket);
  var itemCounter = [];
  for (var i = 0; i < uniqItem.length; i++) {
    itemCounter[uniqItem[i]] = 0;
  }

  var totalCost = 0.00;

  // keep a papaya counter to track every third papaya
  var papayasCount = 0;

  for (var i = shoppingBasket.length - 1; i >= 0; i--) {
    itemCounter[shoppingBasket[i]]++;

    if (shoppingBasket[i] == 'Papayas') {
      papayasCount++;
    }

    // if the item is on special offer and it is time for the free one then do not add its price to the total
    if (shoppingBasket[i] in specialOffers && itemCounter[shoppingBasket[i]] == specialOffers[shoppingBasket[i]]) {
      console.log(shoppingBasket[i] + ' : Free');
      itemCounter[shoppingBasket[i]] = 0;
    } else {
      console.log(shoppingBasket[i] + ' : £' + priceIndex[shoppingBasket[i]]);
      totalCost += priceIndex[shoppingBasket[i]];

    }
  }
  return totalCost;
}

module.exports = getTotalCostOfShoppingBasket;
