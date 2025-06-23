const axios = require('axios');

const NASA_API_KEY = process.env.NASA_API_KEY;
const NASA_API_URL = 'https://api.nasa.gov';

// Controller for APOD
const getApod = async (req, res) => {
    try {
        console.log(`getting APOD`);
        const response = await axios.get(`${NASA_API_URL}/planetary/apod?api_key=${NASA_API_KEY}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching APOD data', error: error.message });
    }
};

// Controller for Mars Rover Photos
const getMarsRoverPhotos = async (req, res) => {
    // Get query params from frontend request, with defaults
    const { rover = 'curiosity', sol = 1000, camera = 'fhaz' } = req.query;
    try {
        console.log(`Fetching Mars Rover photos for rover: ${rover}, sol: ${sol}, camera: ${camera}`);
        const response = await axios.get(`${NASA_API_URL}/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&camera=${camera}&api_key=${NASA_API_KEY}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching Mars Rover photos', error: error.message });
    }
};

// Controller for Near-Earth Objects
const getNeowsFeed = async (req, res) => {
    // Example: Fetch for a specific date range (today)
    const today = new Date().toISOString().split('T')[0];
    try {
        console.log(`${NASA_API_URL}/neo/rest/v1/feed?start_date=${today}&api_key=${NASA_API_KEY}`);
        const response = await axios.get(`${NASA_API_URL}/neo/rest/v1/feed?start_date=${today}&api_key=${NASA_API_KEY}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching NEO data', error: error.message });
    }
}

module.exports = {
    getApod,
    getMarsRoverPhotos,
    getNeowsFeed
};