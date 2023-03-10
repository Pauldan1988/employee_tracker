const sequelize = require("./config/config");
const mysql = require("mysql2");
const { printTable } = require("console-table-printer");
const inquirer = require("inquirer");
const start = require("./assets/questions");

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
  start();
});

function start() {
  //inquirer to prompt choices to the user
  inquirer
    .prompt([
      {
        type: "list",
        name: "start",
        message: "What would you like to do?",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update an employee role",
          "Quit",
        ],
      },
    ])
    .then(({ answer }) => {
      //switch statements to display choices
      switch (answer.choice) {
        case "View all Departments":
          viewDept();
          return;

        case "View all Rolls":
          viewRole();
          return;

        case "View all Employees":
          viewEmp();
          return;

        case "Add a Department":
          addEmp();
          return;

        case "Add a Role":
          addRole();
          return;

        case "Add an Employee":
          addEmp();
          return;

        case "Update an Employee Role":
          updateRole();
          return;
      }
    });
}

const viewDept = () =>
  db.query(`SELECT * FROM department`, (err, res) => {
    if (err) throw err;
    console.log("Viewing all Departments");
    console.table(res);
    inquirer
      .prompt([
        {
          name: "viewD",
          message: "Select an option",
          type: "choice",
          choices: ["Main Menu", "Quit"],
        },
      ])
      .then(({answer}) => {
        switch (answer.choice) {
          case "Main Menu":
            start();
          case "Quit":
            quit();
        }
      });
  });

const viewRole = () =>
  db.query(`SELECT * FROM role`, (err, res) => {
    if (err) throw err;
    console.log("Viewing all Roles");
    console.table(res);
    inquirer
      .prompt([
        {
          name: "viewR",
          message: "Select an option",
          type: "choice",
          choices: ["Main Menu", "Quit"],
        },
      ])
      .then(({answer}) => {
        switch (answer.choice) {
          case "Main Menu":
            start();
          case "Quit":
            quit();
        }
      });
  });

const viewEmp = () =>
  db.query(`SELECT * FROM employee`, (err, res) => {
    if (err) throw err;
    console.log("Viewing all Employees");
    console.table(res);
    inquirer
      .prompt([
        {
          name: "viewE",
          message: "Select an option",
          type: "choice",
          choices: ["Main Menu", "Quit"],
        },
      ])
      .then(({answer}) => {
        switch (answer.choice) {
          case "Main Menu":
            start();
          case "Quit":
            quit();
        }
      });
  });

function addEmp() {
  inquirer.prompt([
    {
      name: "firstName",
      message: "Enter a first name:",
      type: "input",
    },

    {
      name: "lastName",
      message: "Enter a last name:",
      type: "input",
    },

    {
      name: "roleID",
      message: "Add a Role:",
      type: "input",
    },

    {
      name: "managerID",
      message: "Add a Manager:",
      type: "input",
    },
  ])
  .then()
}
