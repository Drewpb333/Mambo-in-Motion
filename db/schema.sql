DROP DATABASE IF EXISTS userAuth_db;

CREATE DATABASE userAuth_db;

USE userAuth_db;

CREATE TABLE users (
  id int(11) NOT NULL AUTO_INCREMENT,
  username varchar(30) NOT NULL,
  password varchar(30) NOT NULL,
  PRIMARY KEY (id)
);