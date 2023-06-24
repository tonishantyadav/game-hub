import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a1e0d2ac274940febfe785aef6da80bb",
  },
});
