import axios from 'axios';

async function cleanText(text) {
    try {
        // Send POST request to the cleaning server
        const response = await axios.post('http://localhost:8000/clean', { text });
        return response.data.cleanedText;
    } catch (err) {
        // Error in the server with status code outside 2xx
        if (err.response) {
            console.log('Server error: '.response.status, err.response.data);
        } 
        // No response received from server
        else if (err.request) {
            console.log('No response received from server.', err.request);
        }
        // Something went wrong in setting up the request
        else {
            console.log('Error in setting up request:', err.message);
        }
    }
}

export default cleanText;