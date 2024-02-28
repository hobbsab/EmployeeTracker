const pool = require ('./config/connection')
const inquirer = require('inquirer')

const viewEmployee = async() => {
    const result = await pool.query("SELECT * FROM employee");
    console.log(result[0]);
}
const viewRole = async() => {
    const result = await pool.query("SELECT * FROM role");
    console.log(result[0]);
}
const viewDepartment = async() => {
    const result = await pool.query("SELECT * FROM department");
    console.log(result[0]);
    return result [0];
}

const addDepartment = async(department) => {
    const result = await pool.query(`INSERT INTO department (name) values ('${department}')`);
}

// categories to select
const start = async () => {
    const response = await inquirer.prompt([
        {
            type: "list",
            message: "choose an option below:",
            name: "selection",
            choices:[
                {
                    name: "view employees",
                    value: "VIEW EMP"
                },
                {
                    name: "view roles",
                    value: "VIEW ROLE"
                },
                {
                    name: "view department",
                    value: "VIEW DEPT"
                },   
                {
                    name: "add department",
                    value: "ADD DEPT"
                },  
                {
                    name: "add employees",
                    value: "ADD EMP"
                },   
                {
                    name: "add roles",
                    value: "ADD ROLE"
                },
                {
                    name: "update employees",
                    value: "UPDATE EMP"
                },
            ]
        }
    ])

const { selection } = response

    switch(selection){
        case "VIEW EMP":
            viewEmployee();
            break
        case "VIEW ROLE":
            viewRole();
            break
        case "VIEW DEPT":
            viewDepartment();
            break
        case "ADD DEPT":
            addDepartment();
            break
        case "ADD EMP":
            addEmployee();
            break
        case "ADD ROLE":
            addRole();
            break
        case "UPDATE EMP":
            updateEmployee();
            break
        case "QUIT":
            quit();
            break
}
    console.log(response)
}

start();

//create class for employee