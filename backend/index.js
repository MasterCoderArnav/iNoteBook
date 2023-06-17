const connectToDB = require('./db');
connectToDB();
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Arnav!')
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})