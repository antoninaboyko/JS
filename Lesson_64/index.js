import express from 'express';
import mongoose from 'mongoose';
import { Product, Customer } from './model/product.js';

const url = 'mongodb://127.0.0.1:27017/shop';
const PORT = 3000;
const app = express();

mongoose.connect(url)
  .then(() => {
    console.log('Connected to DB');
    app.listen(PORT, () => {
      console.log(`Server started on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(`DB connection error: ${err}`);
  });

app.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    const customers = await Customer.find();
    const productsHtml = products.map((product) => `
      <div >
        <p>Price: ${product.price}</p>
      </div>
    `);
    const customersHtml = customers.map((customer) => `
      <div >
        <h2> ${customer.name}   ${customer.product_name}</h2>
      </div>
    `);
    const html = `
    <div style="border: 1px solid #000; 
      width: fit-content; 
      margin: 0 0 20px 0; 
      padding: 0 10px">
      <h1>Users purchases:</h1>
      ${customersHtml.join('')}
      ${productsHtml.join('')}
      </div>
      
      
    `;

    res.send(html);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error');
  }
});





