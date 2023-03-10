const { printTable } = require("console-table-printer");
const inquirer = require("inquirer");


const empQ  = [
    
    {
        name: "firstName",
        message: "Add a first name:",
        type: "input"
    },

    {
        name: "lastName",
        message: "Add a last name:",
        type: "input"
    },

    {
        name: "roleID",
        message: "Add a Role:",
        type: "input"
    },

    {
        name: "managerID",
        message: "Add a Manager:",
        type: "input"
    }
]

const roleQ = [
    
    {
        name: "title",
        message: "Add a Title for the Role:",
        type: "input"
    },

    {
        name: "deptID:",
        message: "Add a Department ID:",
        type: "input"
    },

    {
        name: "salary",
        message: "Enter a salary:",
        type: "input"
    }
]

const addDept = [

    {
        name: "deptName:",
        message: "Add a new Department name:",
        type: "input"
    }
]

const choices = [

    {
        name: "empID",
        message: "To update their Role. Select an Employee ID:",
        type: "input"
    },

    {
        name: "roleID",
        message: "To update their Role. Select one:",
        type: "input"
    }
]

inquirer.prompt