import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/mirec--clone/us-central1/api", //THE API URL
});

export default instance;
