import axios from "axios";

// create axios instance with custom configuration
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    // set the rawg.io api key
    key: "56c6a03e2fdf49c19767f0da5f5bacb1" // with this key, the key will be included in query string of every http request
  }
})