const axios = require('axios');
const { API } = process.env.GOOGLE_MAPS_API_KEY;

module.exports.getAddressCoordinate = async(address)=>{
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${API}`;
    try {
        const response = await axios.get(url);
        if (response.data.status === 'OK') {
            const location = response.data.results[0].geometry.location;
            return {
                lat: location.lat,
                lng: location.lng
            };
        } else {
            throw new Error('Unable to get coordinates');
        }
    } catch (error) {
        console.error('Error fetching coordinates:', error);
        throw error;
    }

}