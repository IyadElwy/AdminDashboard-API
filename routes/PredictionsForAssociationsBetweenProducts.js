const express = require("express");

//////////////////////////////////////////////////////////

const predictionControllers = require('../controllers/PredictionControllers');

//////////////////////////////////////////////////////////

const router = express.Router();

router.route('/')
    .get(predictionControllers.getAllPredictions);

router.route('/getdata')
    .get(predictionControllers.getData);

/////////////////////////////////////////////////////////////

module.exports = router;