// Import modules
const express = require('express');
const path = require('path');
const app = express();
const food = require('./singleton');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

//GET command
console.log("works");
app.get('/foods', async (req, res) => {
  try {
    const products = await food.getAll();
    // they will print to the console when someone request the food items
    console.log(products);
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
})

console.log(food);

module.exports = app;