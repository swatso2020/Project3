import axios from "axios";

// endpoint from api
const BaseUrl = "https://api.yelp.com/v3/events?categories=food&location=miami&start_date>1606958848"

export default {
  logIn: function (email, password) {
    return axios.post("/api/auth/login", { email, password });
  },
  verifyAuthentication: function () {
    return axios.get("/api/auth/login", {
      headers: {
        Authorization: localStorage.getItem("authorization-token")
      }
    })
  },
  // calls api and retrieve places based on user input
  searchPlaces: function (query) {
    return axios.get(BaseUrl + query);
  },
  // Gets saved places saved in db
  getPlaces: function () {
    return axios.get("/api/places");
  },
  // Gets the place with the given id
  getAPlace: function (id) {
    return axios.get("/api/places/" + id);
  },
  // Deletes the place with the given id
  deletePlace: function (id) {
    return axios.delete("/api/places/" + id);
  },
  // Saves a place from the user
  savePlace: function (placeData) {
    return axios.post("/api/places", placeData);
  }
};