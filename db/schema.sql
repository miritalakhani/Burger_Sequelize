### Schema

CREATE database burgers_db;

USE burgers_db;

CREATE TABLE burgers(
id INTEGER(11) auto_increment NOT NULL,
burger_name VARCHAR(100) NOT NULL,
devoured BOOLEAN DEFAULT NULL,
date TIMESTAMP, 
PRIMARY KEY (id)
);