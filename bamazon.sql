CREATE DATABASE bamazon;

use bamazon;

CREATE TABLE products (
item_id INTEGER(10) AUTO_INCREMENT NOT NULL,
PRIMARY KEY(item_id),
product_name VARCHAR(30),
department_name VARCHAR(30),
price INTEGER(10),
stock_quantity INTEGER(10)
);products

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("The Art of War by Sun Tsu", "Literature", 12.00, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Empire of the Sun DVD", "Film", 17.00, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Audio Recording of a Sunrise", "Audio", 569999.00, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Capri Sun Drink Pouch", "Food", 7.00, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Photograph of the Sun", "Art", 2.00, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Written Description of the Sun", "Literature", 3.00, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Recoding of Carl Sagan Describing the Sun", "Audio", 1.00, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Child's Painting of the Sun", "Art", 69.00, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("SUNN0))) Discography", "Audio", 76.00, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Black Hole Sun cassette single", "Audio", 52.00, 1);

SELECT * FROM products;


