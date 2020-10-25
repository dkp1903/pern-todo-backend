// Routes
const express = require('express')
const app = express.Router()
const pool = require('../database/db')

//add a todo
app.post('/', async (req, res) => {
    try {
        const {description} = req.body
        const {priority} = req.body
        const {date} = req.body
        const {completed} = req.body
        const newTodo = await pool.query('INSERT INTO perntable (description, priority, completed, date) VALUES($1, $2, $3, $4) RETURNING *', 
        [description, priority, completed, date])
        res.json(newTodo.rows[0])
        
    } catch(err){
        console.error(err.message)
    }
})

// Get all todos
app.get('/', async (req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM perntable")
        res.json(allTodos.rows)
        
    } catch (error) {
        console.error(error.message)
        
    }
})

// Get a todo
app.get('/:id', async (req, res) => {
    try {
        const {id} = req.params
        const todo = await pool.query("SELECT * FROM perntable WHERE todo_id = $1", [id])
        res.json(todo.rows[0])
    } catch (error) {
        console.error(error.message)
    }
})


//Update a todo
app.put('/:id', async (req, res) => {
    try {
        const {id} = req.params
        const {description} = req.body
        const updateTodo = await pool.query("UPDATE perntable SET description = $1 WHERE todo_id = $2", [description, id])

        res.json('Todo Updated')
    } catch (error) {
        console.error(error.message)
    }
})

// Remove a todo 
app.delete('/:id', async (req, res) => {
    try {
        const {id} = req.params
        const deleteTodo = await pool.query("DELETE FROM perntable WHERE todo_id = $1", [id])
        res.json('Todo Deleted')
    } catch (error) {
        console.error(error.message)
    }
})

// Search routes - Added multiple routes to allow ease of access
// Search by Priority

app.get('/priority/:quantity', async (req, res) => {
    try {
        const {quantity} = req.params
        const searchRes = await pool.query("SELECT * FROM perntable WHERE priority = $1", [quantity])
        res.json(searchRes.rows)
    } catch (error) {
        console.error(error.message)
    }
})

// search by description

app.get('/description/:quantity', async (req, res) => {
    try {
        const {quantity} = req.params
        const searchRes = await pool.query("SELECT * FROM perntable WHERE description ~* $1", [quantity])
        res.json(searchRes.rows)

    } catch (error) {
        console.error(error.message)
    }
})

// Search by state

app.get('/completed/:quantity', async (req, res) => {
    try {
        const {quantity} = req.params
        const searchRes = await pool.query("SELECT * FROM perntable WHERE completed = $1", [quantity])
        res.json(searchRes.rows)
        
    } catch (error) {
        console.error(error.message)
    }
})

// Search by date

app.get('/date/:quantity', async (req, res) => {
    try {
        const {quantity} = req.params
        const searchRes = await pool.query("SELECT * FROM perntable WHERE date ~* $1", [quantity])
        res.json(searchRes.rows)
        
    } catch (error) {
        console.error(error.message)
    }
})

module.exports = app