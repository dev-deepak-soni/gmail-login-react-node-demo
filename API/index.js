const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 8002

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})
