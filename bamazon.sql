/* Creating and utilizing the datbase bamazon */
DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

/* Creates a table "products" with columns (product_name, department_name, price, stock_quantity) */
CREATE TABLE products (
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(100) NULL,
    department_name VARCHAR(100) NULL,
    price NUMERIC(10,2) NULL,
    stock_quantity INT NULL,
    PRIMARY KEY(item_id)
);

/* Create content to populate into 'products' table/'s rows */

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Playstation 5", "Electronics", 349.99, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Apple Ipod Touch", "Electronics", 199.99, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Chicken Nuggets", "Meat", 2.00, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hot Dogs", "Meat", 1.00, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("T-Shirt", "Clothing", 9.25, 40);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hoodie", "Clothing", 12.80, 18);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Vin's Diesel", "Automotive", 50.00, 13);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Car Wash", "Automotive", 5.50, 16);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Tea Tree oil", "Health & Beauty", 8.99, 80);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Body Wash", "Health & Beauty", 5.99, 30);



