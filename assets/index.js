const inquirer = require("inquirer")
const { printTable } = require("console-table-printer")
const mysql = require("mysq12")

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'employees_db'
  });