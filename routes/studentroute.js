const express = require('express')
const router = express.Router()

const { createStudent} = require('../controller/studentControl')

//router method
router.get('/',(req,res) =>{
    res.send('Router Method !!')
})
//route for create
router.post('/student',createStudent)
router.post('/student',createStudent)


module.export = router;

