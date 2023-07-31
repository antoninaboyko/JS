import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const productSchema = new Schema ({
    title: String,
    price: Number,
    rating: Number,
    category: String,
    brand: String,
    name: String,
    product_name: String,
    })

const customerSchema = new Schema({
    name: String,
    product_name: String,
    });
        
const Product = mongoose.model('Product', productSchema);
const Customer = mongoose.model('Customer', customerSchema);
        
export { Product, Customer };
