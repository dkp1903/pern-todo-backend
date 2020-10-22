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
        const newTodo = await pool.query('INSERT INTO perntodotable (description, priority, date    ) VALUES($1, $2, $3)', 
        [description, priority, date])
        console.log(date)
        console.log(priority)

        res.json(newTodo)
        
    } catch(err){
        console.error(err.message)
    }
})

// Get all todos

// Get a todo


//Update a todo

// Remove a todo 
const PORT = 5000
app.listen(PORT, () => {
    console.log(`Server running on port : ${PORT}`);
})
