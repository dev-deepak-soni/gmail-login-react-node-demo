const express = require('express')

const app = express()

var cors = require('cors')

app.use(cors())

require('dotenv').config()

const config = require('./config/config')

const port = process.env.PORT || 5000

const test = require('./router/Test');
const login = require('./router/Login');
const loginWithGoogle = require('./router/LoginWithGoogle');

app.use(express.json());

app.use('/', login)
app.use('/forgetpass', login)
app.use('/loginwithgoogle', loginWithGoogle)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);  
  console.log('Press Ctrl+C to quit.');
})