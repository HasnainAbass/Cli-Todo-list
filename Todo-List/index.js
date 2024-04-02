#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = "true";
while (condition) {
    let addTask = await inquirer.prompt([
        {
            message: "what you watnt to add in your tools",
            name: "todo",
            type: "input"
        },
        {
            message: "Do you want to add more ?",
            name: "addmore",
            type: "confirm",
            default: "false"
        }
    ]);
    todos.push(addTask.todo);
    condition = addTask.addmore;
    console.log(todos);
}
