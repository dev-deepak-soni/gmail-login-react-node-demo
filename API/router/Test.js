const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
   res.send('hello test home');
})

router.get('/a',(req,res)=>{
    res.send('hello test a');
})

module.exports = router;