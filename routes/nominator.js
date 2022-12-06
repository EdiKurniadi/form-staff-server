const nominatorRouter = require('express').Router();
const nominatorController = require('../controller/nominator');

nominatorRouter.post('/addVoter/:id', nominatorController.addVoter)
nominatorRouter.get('/allNominators', nominatorController.getAllNominators)

module.exports = nominatorRouter;

