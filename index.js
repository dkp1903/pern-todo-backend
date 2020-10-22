// Require the necessary libraries

const express = require('express')
const cors = require('cors')
const app = express()
const pool = require('./db')

// middleware
app.use(cors()) // have cross origin resource sharing, which is usually blocked by default
app.use(express.json()) // have access to response.body

// Routes

//add a todo
app.post('/todos', async (req, res) => {
    try {
        const {description} = req.body
        const {priority} = req.body
        const date = new Date()
        const newTodo = await pool.query('INSERT INTO perntodotable (description, priority, date) VALUES($1, $2, $3) RETURNING *', 
        [description, priority, date])
        console.log(date)
        console.log(priority)

        res.json(newTodo.rows[0])
        
    } catch(err){
        console.error(err.message)
    }
})

// Get all todos
app.get('/todos', async (req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM perntodotable")
        res.json(allTodos.rows)
        
    } catch (error) {
        console.error(error.message)
        
    }
})

// Get a todo
app.get('/todos/:id', async (req, res) => {
    try {
        const {id} = req.params
        const todo = await pool.query("SELECT * FROM perntodotable WHERE todo_id = $1", [id])
        res.json(todo.rows[0])
    } catch (error) {
        console.error(error.message)
    }
})


//Update a todo
app.put('/todos/:id', async (req, res) => {
    try {
        const {id} = req.params
        const {description} = req.body
        const updateTodo = await pool.query("UPDATE perntodotable SET description = $1 WHERE todo_id = $2", [description, id])

        res.json('Todo Updated')
    } catch (error) {
        console.error(error.message)
    }
})

// Remove a todo 
app.delete('/todos/:id', async (req, res) => {
    try {
        const {id} = req.params
        const deleteTodo = await pool.query("DELETE FROM perntodotable WHERE todo_id = $1", [id])
        res.json('Todo Deleted')
    } catch (error) {
        console.error(error.message)
    }
})

// Sort by Priority

app.get('/todos/priority/:priority', async (req, res) => {
    try {
        const {priority} = req.params
        const priorityWiseTodos = await pool.query("SELECT * FROM perntodotable WHERE priority = $1", [priority])
        res.json(priorityWiseTodos.rows)
    } catch (error) {
        console.error(error.message)
    }
})



const PORT = 5000
app.listen(PORT, () => {
    console.log(`Server running on port : ${PORT}`);
})
