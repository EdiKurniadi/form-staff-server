const mongoose = require('mongoose');


const NominatorSchema = new mongoose.Schema({
	name : {type:String, required:true, unique:true},
	voter : {type:Number, default:0},
})


module.exports = mongoose.model('Nominator', NominatorSchema);