const express = require("express")
const todobackendRoute = express()
const { v4: uuidv4 } = require("uuid")

const todoList = [
    {
        name: "The name",
        description: "The description of the todo",
        imageUrl: "http://www.myimage....",
        completed: false,
        _id: uuidv4()
    },

    {
        name: "NAME",
        description: "DESCRIPTION",
        imageUrl: "http://IMAGE",
        completed: true,
        _id: uuidv4()
    }
]

//Get Entire Todo List
todobackendRoute.get("/", (req, res) => {
    console.log("Get Request sent")
    res.send(todoList)
})

//Get Single Todo List
todobackendRoute.get("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const foundTodoList = todoList.find(todo => todo._id === todoId)
    res.send(foundTodoList)
})

// Create Todo List Item
todobackendRoute.post("/", (req, res) => {
    const newTodoList = req.body
    newTodoList._id = uuidv4()
    todoList.push(newTodoList)
    res.send(`${newTodoList.name} has been added to your Todo List`)
})

//Delete Single Todo List
todobackendRoute.delete("/:todoId", (req, res) =>{
    const todoId = req.params.todoId
    const todoIndex = todoList.findIndex(todo => todo._id === todoId)
    todoList.splice(todoIndex, 1)
    res.send("Successfuly Deleted Todo Item")
})

//Update single todo item
todobackendRoute.put("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todoList.findIndex(todo => todo._id === todoId)
    const updatedTodo = Object.assign(todoList[todoIndex], req.body)
    res.send(updatedTodo)
})





module.exports = todobackendRoute