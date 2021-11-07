const { Router } = require('express')
const mongoose = require('mongoose')
const Note = require('../models/noteModel')


const router = Router()

// CREATING NEW NOTE 
router.post('/', (req, res)=>{
	const { title, body, author } = req.body
	const note = new Note({
		title: title,
		body: body,
		author: author
	})
	note.save()
	.then((result)=>{
		res.json(result)
	})
	.catch((err)=>{
		if(err) throw err
	})
})

// GETTING ALL NOTES
router.get('/', (req, res)=>{
	Note.find()
		.then((results)=>{
			res.json(results)
		})
		.catch((err)=>{
			if(err) throw err
		})
})

// GETING SINGLE NOTE
router.get('/:id?', (req, res)=>{
	Note.findById(req.params.id)
	.then((results)=>{
		res.json(results)
	})
	.catch((err)=>{
		if(err) throw err
	})
})



// UPDATING NOTE
router.put('/', (req, res)=>{
	const { title, body, author } = req.body
	Note.findByIdAndUpdate(req.params.id)
		.then((results)=>{
			res.json(results)
		})
		.catch((err)=>{
			if(err) throw err   
		})
})
   
// DELETING NOTE
router.delete('/:id?', (req, res)=>{
	Note.findByIdAndDelete(req.params.id)
		.then((results)=>{
			res.json(results)
		})
		.catch((err)=>{
			if(err) throw err
		})
})


module.exports = router