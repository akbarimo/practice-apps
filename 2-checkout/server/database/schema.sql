DROP DATABASE IF EXISTS checkout;
CREATE DATABASE checkout;

USE checkout;

CREATE TABLE responses (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user VARCHAR(20) NOT NULL,
  email VARCHAR(50) NOT NULL UNIQUE,
  password VARCHAR(50) NOT NULL,
  address VARCHAR(50) NOT NULL,
  city VARCHAR(20) NOT NULL,
  state VARCHAR(20) NOT NULL,
  zip VARCHAR(10) NOT NULL,
  number VARCHAR(15) NOT NULL,
  card VARCHAR(25) NOT NULL,
  expiry VARCHAR(5) NOT NULL,
  cvv VARCHAR(5) NOT NULL,
  billingZip VARCHAR(10) NOT NULL
);