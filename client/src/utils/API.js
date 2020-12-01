import axios from "axios";

export default {
  // Gets saved places
  getPlaces: function() {
    return axios.get("/api/places");
  },
  // Gets the place with the given id
  getAPlace: function(id) {
    return axios.get("/api/places/" + id);
  },
  // Deletes the place with the given id
  deletePlace: function(id) {
    return axios.delete("/api/places/" + id);
  },
  // Saves a place from the user
  savePlace: function(placeData) {
    return axios.post("/api/places", placeData);
  }
};