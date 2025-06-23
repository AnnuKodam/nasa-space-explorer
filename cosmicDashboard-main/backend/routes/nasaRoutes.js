const express = require('express');
const { getApod, getMarsRoverPhotos, getNeowsFeed } = require('../controllers/nasaController');
const router = express.Router();

// Route for Astronomy Picture of the Day
router.get('/apod', getApod);

// Route for Mars Rover Photos with query parameters for filtering
router.get('/mars-photos', getMarsRoverPhotos);

// Route for Near Earth Object Web Service
router.get('/neows', getNeowsFeed);

module.exports = router;