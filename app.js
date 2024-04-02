// import express from "express";
// require('dotenv').config();
const express = require("express");
require('dotenv').config({path: '/env'});
const app = express();

const dbHost = process.env.PORT;
// console.log(process.env.PORT);
console.log(dbHost);
exports  app;