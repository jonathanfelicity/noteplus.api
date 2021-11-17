const Note = require('../models/noteModel')



// CREATING NEW NOTE 
const createNote = (req, res)=>{
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
}

// GETTING ALL NOTES
const getAllNote = (req, res)=>{
	Note.find()
		.then((results)=>{
			res.json(results)
		})
		.catch((err)=>{
			if(err) throw err
		})
}

// GETTING SINGLE NOTE
const getSingleNote = (req, res)=>{
	Note.findById(req.params.id)
		.then((results)=>{
			res.json(results)
		})
		.catch((err)=>{
			if(err) throw err
	})
}

// UPDATING NOTE
const updateNote = (req, res)=>{
	const { title, body, author } = req.body
	Note.findByIdAndUpdate(req.params.id)
		.then((results)=>{
			res.json(results)
		})
		.catch((err)=>{
			if(err) throw err   
		})
}

// DELETING NOTE
const deleteNote = (req, res)=>{
	Note.findByIdAndDelete(req.params.id)
		.then((results)=>{
			res.json(results)
		})
		.catch((err)=>{
			if(err) throw err
		})
}


module.exports = {
	createNote,
	getAllNote,
	getSingleNote,
	updateNote,
	deleteNote
}