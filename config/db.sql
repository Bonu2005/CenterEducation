-- Active: 1738121653817@@127.0.0.1@3306@qwerty

CREATE DATABASE qwerty;

use qwerty

alter table users modify column createdAt datetime DEFAULT CURRENT_TIMESTAMP;
alter table users modify column updatedAt datetime DEFAULT CURRENT_TIMESTAMP;

