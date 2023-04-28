import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "56c6a03e2fdf49c19767f0da5f5bacb1" 
  }
})