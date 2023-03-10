const sequelize = require("./config/config")
const mysql = require("mysql2")
const { printTable } = require("console-table-printer");
const inquirer = require("inquirer");
const start = require("./assets/questions")

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "password",
    database: "employees_db",
  },
  console.log(`Connected to the employees_db database.`)
);
db.connect(() => {
  startMenu();
});































