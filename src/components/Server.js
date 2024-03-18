import { ShopContext } from "../context/shopContextProvider";

Menclothing: price_1OvUcaLvjLBvWE7QS4S0XYBx
const {  } = useContext(ShopContext);
const express = require('express');
var cors = require('cors');
const stripe = require('stripe')('sk_test_51OvTvzLvjLBvWE7QVkQ8msgWQ0tEQzFb7Jo3XGxSt3IpmK4MK9LscQ6eYjFvjN83ha5h4YUlujOWc1wI8zKX9eY0007GBKgh9S')

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post('/checkout', async (req, res) => {


    const items = req.body.items
    let lineItems = [];
    items.forEach(item) => {
        lineItems.push(item
    };
})