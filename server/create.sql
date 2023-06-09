CREATE DATABASE roots;

USE roots;

CREATE TABLE books (
    bcode INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    availability VARCHAR(20),
    author VARCHAR(255) NOT NULL,
    holdby VARCHAR(255)
);

CREATE TABLE libmem (
    idno INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255),
    ph VARCHAR(20)
);

CREATE TABLE libname (
    idno INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    pass VARCHAR(255)
);
