const express = require('express')
const router = express.Router()

router.post('/',(req,res)=> {
  res.json({success : true , status : 200, message : 'Login Successfully!'});
})


module.exports = router