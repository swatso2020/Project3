import axios from "axios";

// endpoint from api

const object = 
  {
  logIn: function (email, password) {
    return axios.post("/api/auth/login", { email, password })
  ;
  },
  verifyAuthentication: function () {
    return axios.get("/api/auth/login", {
      headers: {

        Authorization:localStorage.getItem("authorization-token")

      }
    })
  },
  // calls api and retrieve places based on user input
  searchPlaces: async function (query) {
    const queryUrl = "http://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term="+ query +"&location=miami"
   const response = await axios.get(queryUrl, {
      
      headers: {

        Authorization: "Bearer 7m9YFK7IxQ65bCEeWVqANj4x8EXKbBVNbqRholruzDengYIvfK0ceLbMGdN59F3XH8YTzp_fivrLrxR7VewRxsixBpy5q_HjFgnRTm3vn_zl8RidOjh9NOOBaD28X3Yx"
      }
      
    })
    return response
    ;
  },
  // Gets saved places saved in db
  getPlaces: function () {
    return axios.get("/api/places");
  },
  createUser: function () {
    return axios.get("/api/createUser");
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
  },
  getYelp: function() {
    return axios.get("/api/yelp");
  },
  getYelpfind: function() {
    return axios.get("/api/yelpfind");
  },
  getYp: function() {
    return axios.get("/api/yp");
  }
};

export default object