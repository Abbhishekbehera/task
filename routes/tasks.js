const express = require('express')
const router = express.Router()
const tasklisting=require('../models/tasklisting')
const mongoose=require('mongoose')
const methodOverride=require('method-override')
const taskController=require('../controllers/tasksController')


router.get('/',taskController.index)
router.get('/new',taskController.new)
router.get('/:id',taskController.show)
router.post('/',taskController.create)
router.get('/:id/edit',taskController.edit)
router.put('/:id',taskController.update)
router.delete('/:id',taskController.delete)

module.exports=router