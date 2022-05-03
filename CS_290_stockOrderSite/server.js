'use strict';

const PORT = 3000;

// The variable stocks has the same value as the variable stocks in the file 'stocks.js'
const stocks = require('./stocks.js').stocks;

const express = require("express");
const app = express();


app.use(express.urlencoded({
    extended: true
}));

app.use(express.static('public'));
// Note: Don't add or change anything above this line.

/**
 * Find company name based on stock symbol 
 * @param {userSelection} stock symbol
 * @return company name
*/ 
function findStockBySymbol(userSelection) {
    for (let i = 0; i < stocks.length; i++) {
        let sTicker = stocks[i].symbol;
        
        if (sTicker === userSelection) {
            return stocks[i].company;
        }
    }
}

/**
 * Get stock price based on company symbol 
 * @param {userSelection} stock symbol
 * @return stock price
*/ 
function getStockPrice(userSelection) {
    for (let i = 0; i < stocks.length; i++) {
        let sTicker = stocks[i].symbol;
        
        if (sTicker === userSelection) {
            return stocks[i].price;
        }
    }
}

/**
 * Route handler for stock order requests
 */
app.post("/stock-order", (req, res) => {
    let userSelection = req.body.Stock;
    let companyName = findStockBySymbol(userSelection);
    let stockPrice = getStockPrice(userSelection)
    let totalCharge = (stockPrice * req.body.amount).toLocaleString("en-US", {style:"currency", currency:"USD"});

    let purchaseMsg = "You placed an order to buy " + companyName + " stocks. " +
                      "The price of one stock is $" + stockPrice + " and the total price for this order is " + totalCharge + ".";

    res.send(purchaseMsg);
});

/**
 * Find stock with highest or lowest price 
 * @param {userSelection} string indicating user choice
 * @return stock object
*/ 
function findStockByPrice(userSelection) {
    let highestStock = stocks[0]
    let lowestStock = stocks[0]

    if (userSelection === "highest price") {
        for (let i = 0; i < stocks.length - 1; i++) {
            if (stocks[i].price > highestStock.price) {
                highestStock = stocks[i];
            }
        }
        return highestStock;
    } else {
        for (let i = 0; i < stocks.length; i++) {
            if (stocks[i].price < lowestStock.price) {
                lowestStock = stocks[i]
            }
        }
        return lowestStock;
    }
}

/**
 * Route handler for stock search requests
 */
 app.post("/find-stock", (req, res) => {
     let userSelection = req.body.find_stock;
     let stockObj = findStockByPrice(userSelection);
     
     let highLow = "higest price";
     if (userSelection == "lowest price") {
         highLow = "lowest price";
     }

     let priceMsg = "The stock with the " + highLow + " is " + stockObj.company +
                    ", symbol: " + stockObj.symbol + ", at a price of $" + stockObj.price + ".";

     res.send(priceMsg);
});


// Note: Don't add or change anything below this line.
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});