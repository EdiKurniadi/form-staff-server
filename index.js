const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nominatorRouter = require('./routes/nominator');


const app = express();

app.use((req,res,next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, PATCH, DELETE, OPTIONS');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
	next();
})

app.use(cors());
app.use(express.json());

app.use('/', nominatorRouter)

app.listen(3002, () => {
	mongoose
		.connect('mongodb+srv://edikurniadi:a7s303ugCy4GQh5p@form-app.1n91rft.mongodb.net/form-app?retryWrites=true&w=majority', {
			useNewUrlParser : true,
			useUnifiedTopology : true,
			})
		.then( () => console.log('db success connected'))
		.catch(err => console.log(err))
})

//mongodb+srv://edikurniadi:sTjbfIHeNm4GLkGN@pemilihanmtofthemonth.r9k7gfb.mongodb.net/form-app?retryWrites=true&w=majority
//mongodb://127.0.0.1:27017/form-app