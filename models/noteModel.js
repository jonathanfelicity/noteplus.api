const mongoose = require('mongoose')


const Schema = mongoose.Schema

const noteSchema = new Schema({
	title: {
		type: String,
		require: true
	},
	body: {
		type: String,
		require: true
	},
	author: {
		type: String,
		require: true
	}	
}, { timestamps: true })


const Note = mongoose.model('Blog', noteSchema)

module.exports = Note