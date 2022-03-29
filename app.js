const express = require('express')
const tasksRouter = require('./routes/tasksRouter')

const PORT = process.env.PORT || 3001

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).json({message: "This is an API"})
})

app.use('/tasks', tasksRouter)

app.all('*', (req, res) => {
  res.status(404).json({message: "This endpoint doesn't exist"})
})

app.listen(PORT, () => {console.log(`Server started on port ${PORT}`)})
