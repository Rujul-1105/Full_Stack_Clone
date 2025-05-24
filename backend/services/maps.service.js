const axios = require('axios');
const API = process.env.GOOGLE_MAPS_API_KEY;

module.exports.getAddressCoordinate = async(address)=>{
    const encodedAddress = encodeURIComponent(address);
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${API}`;
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
        console.error('Error fetching coordinates:', error.response?.data || error.message);
        throw error;
    }
}



module.exports.getDistanceTime = async (origin, destination) => {
  if (!origin || !destination) {
    throw new Error("Origin and Destination are required");
  }

  const API = process.env.GOOGLE_MAPS_API_KEY;
  const url =
    "https://maps.google.com/maps/api/distancematrix/json?origins=" +
    encodeURIComponent(origin) +
    "&destinations=" +
    encodeURIComponent(destination) +
    "&key=" +
    API;

  try {
    const response = await axios.get(url);
    if (response.data.status == "OK") {
      if (response.data.rows[0].elements[0].status == "ZERO RESULTS ") {
        throw new Error("No Routes Found");
      }
      return response.data.rows[0].elements[0];
    } else {
      throw new Error("Unable to find distance and time ");
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};



module.exports.getSuggestions = async(input) => {
    if(!input){
        throw new Error(' query is required')
    }
    const API = process.env.GOOGLE_MAPS_API_KEY
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${API}`;
    try {
        const response = await axios.get(url);
        if (response.data.status === 'OK'){
            return response.data.predictions
        }else{
            throw new Error('Unable to fetch suggestions');
        }
    }
    catch (error) {
        console.error('Error fetching suggestions:', error.response?.data || error.message);
        throw error;
    }

}