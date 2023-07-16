
SELECT category, COUNT(*) AS total FROM product JOIN customer GROUP BY category;

SELECT category, COUNT(DISTINCT brand) AS unique_brands FROM product JOIN customer GROUP BY category;

SELECT productID FROM customer JOIN product ON customer.productID=product.id;

SELECT productID  AS Quantity FROM customer JOIN product ON customer.productID=product.id  ORDER BY product.id DESC;

SELECT PRODUCT, price, category FROM product JOIN customer AS c ON product.id = productID ORDER BY category, price DESC;