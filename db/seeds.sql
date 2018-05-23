DROP DATABASE IF EXISTS userAuth_db;

CREATE DATABASE userAuth_db;

USE userAuth_db;

CREATE TABLE users (
  id int(11) NOT NULL AUTO_INCREMENT,
  email varchar(30) NOT NULL,
  password varchar(30) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO users ( email, password)
VALUES ("sirishk", lama);

INSERT INTO users ( email, password)
VALUES ("asifk", trumpwall );

INSERT INTO users ( email, password)
VALUES ("andrewb", mambo );
