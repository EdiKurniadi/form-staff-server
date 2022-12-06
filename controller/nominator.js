const Nominator = require('../models/nominator');

exports.addVoter = (req,res) => {
	Nominator.findByIdAndUpdate(req.params.id)
	.then(result => {
		result.voter++;
		return result.save()
	})
	.then(data => res.status(200).json(data))
	.catch(err => res.status(500).json(err))	
}


exports.getAllNominators = (req, res, next) => {
	Nominator.find()
		.then(result => {
		res.status(200).json(result)
	})
	.catch((err) => console.log(err));
}