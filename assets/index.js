const { printTable } = require("console-table-printer");
const inquirer = require("inquirer");

function start() {
    //inquirer to prompt choices to the user
    inquirer
        .prompt([
            {
                type: "list",
                name: "startMenu",
                message: "What would you like to do?",
                choices: [
                    "view all departments",
                    "view all roles",
                    "view all employees",
                    "add a department",
                    "add a role",
                    "add an employee",
                    "update an employee role"
                ]
            }
        ])
        .then(({ start }) => {
            //switch statements to display choices
            switch (start) {
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
        printTable(res);
        homeMenu();
    });

const viewRole = () =>
    db.query(`SELECT * FROM role`, (err, res) => {
        if (err) throw err;
        printTable(res);
        homeMenu();
    });

const viewEmp = () =>
    db.query(`SELECT * FROM employee`, (err, res) => {
        if (err) throw err;
        printTable(res);
        homeMenu();
    });

module.exports = start;
