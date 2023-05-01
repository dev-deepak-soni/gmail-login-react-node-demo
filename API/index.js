const express = require('express')

const app = express()

var cors = require('cors')

app.use(cors())

require('dotenv').config()

const port = process.env.PORT || 5000

const test = require('./router/Test');
const login = require('./router/Login');
const loginWithGoogle = require('./router/LoginWithGoogle');
const googlelogin = require('./router/GoogleLogin');

app.use(express.json());

app.use('/', login)
app.use('/forgetpass', login)
app.use('/loginwithgoogle', loginWithGoogle)
app.use('/googlelogin', googlelogin)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);  
  console.log('Press Ctrl+C to quit.');
})