 mongodb://localhost:27017/shop
 db.createCollection("products")
 db.createCollection("customers")

 db.products.insertMany([
  { "title": "iPhone 13", "price": 949, "rating": 4.69, "category": "smartphones", "brand": "Apple"},
  { "title": "iPhone 14", "price": 1299, "rating": 4.44, "category": "smartphones", "brand": "Apple"},
  { "title": "Macbook", "price": 1500, "rating": 4.89, "category": "laptops", "brand": "Apple"}
])
db.customers.insertMany([
  {  "name": "Mike", "product_id": "6404f5ec7013e101cd45a8ff"},
  { "name": "Mike", "product_id": "6404f5ec7013e101cd45a901"},
  { "name": "Bob", "product_id": "6404f5ec7013e101cd45a900"}
])