const config = require('config')
const express = require('express')
const mongoose = require('mongoose')
const Note = require('./models/noteModel')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

// CONNECTING TO DB
mongoose.connect(config.get('dbUri'))
	// START SERVER ONLY IF CONNECTED TO DB
	.then(()=>{
		app.listen(config.get('port'))
	})
	.catch((err)=>{
		if(err) throw err
	})

// ROUTES
app.use('/', require('./routes/crudRoute'))

// 404 PAGE
app.use((req, res)=>{
	res.status(404).json('Resource Not Found')
})