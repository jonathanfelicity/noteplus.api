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
getAllNote = (req, res)=>{
	Note.find()
		.then((results)=>{
			res.json(results)
		})
		.catch((err)=>{
			if(err) throw err
		})
}

// GETTING SINGLE NOTE
getSingleNote = (req, res)=>{
	Note.findById(req.params.id)
		.then((results)=>{
			res.json(results)
		})
		.catch((err)=>{
			if(err) throw err
	})
}