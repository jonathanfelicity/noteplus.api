const { Router } = require('express')
const mongoose = require('mongoose')
const Note = require('../models/noteModel')
const crudController = require('../controllers/crudController')


const router = Router()

// CREATING NEW NOTE 
router.post('/', crudController.createNote)

// GETTING ALL NOTES
router.get('/', crudController.getAllNote)

// GETING SINGLE NOTE
router.get('/:id?', crudController.getSingleNote)

// UPDATING NOTE
router.put('/', crudController.updateNote)
   
// DELETING NOTE
router.delete('/:id?', crudController.deleteNote)


module.exports = router