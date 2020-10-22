// Require the necessary libraries

const express = require('express')
const cors = require('cors')
const app = express()
const pool = require('./database/db')
const todos = require('./routes/todos')

// middleware
app.use(cors()) // have cross origin resource sharing, which is usually blocked by default
app.use(express.json()) // have access to response.body

app.use('/todos', todos)

app.get('/', (req, res) => {
    res.send('Hello, Moto!')
})

const PORT = 5000
app.listen(PORT, () => {
    console.log(`Server running on port : ${PORT}`);
})
