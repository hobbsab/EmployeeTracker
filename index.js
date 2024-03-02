const pool = require ('./config/connection')
const inquirer = require('inquirer')

const viewEmployee = async() => {
    try {
        const result = await pool.query("SELECT first_name FROM employee");
        console.log(result)
       } catch (err) {
         console.error('Error executing query', err);
         res.status(500).send('Internal Server Error');
       }
}
const viewRole = async() => {
    try {
        const result = await pool.query("SELECT title FROM role");
        console.log(result)
       } catch (err) {
         console.error('Error executing query', err);
         res.status(500).send('Internal Server Error');
       }
}
const viewDepartment = async() => {
    try {
        const result = await pool.query("SELECT name FROM department");
        console.log(result)
       } catch (err) {
         console.error('Error executing query', err);
         res.status(500).send('Internal Server Error');
       }
}

const addDepartment = async(department) => {
    try {
        const result = await pool.query(`INSERT INTO department (name) values ('${department}')`);
        console.log(result)
       } catch (err) {
         console.error('Error executing query', err);
         res.status(500).send('Internal Server Error');
       }
}

const addEmployee = async(department) => {
    try {
        const result = await pool.query(`INSERT INTO employee (first_name) values ('${employee}')`);
        console.log(result)
       } catch (err) {
         console.error('Error executing query', err);
         res.status(500).send('Internal Server Error');
       }
}

const addRole = async(department) => {
    try {
        const result = await pool.query(`INSERT INTO role (title) values ('${role}')`);
        console.log(result)
       } catch (err) {
         console.error('Error executing query', err);
         res.status(500).send('Internal Server Error');
       }
}


//     const result = await pool.query(`INSERT INTO department (name) values ('${department}')`);
// }

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