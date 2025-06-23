import axios from 'axios';
const apiClient = axios.create({
    // IMPORTANT: Replace this with your actual backend URL when deployed
    baseURL: 'http://localhost:5000/api', 
});

export const fetchApod = () => apiClient.get('/apod');
export const fetchMarsPhotos = (params) => apiClient.get('/mars-photos', { params });
export const fetchNeows = () => apiClient.get('/neows');