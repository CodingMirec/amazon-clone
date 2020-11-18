import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-mirec--clone.cloudfunctions.net/api",
  // "http://localhost:5001/mirec--clone/us-central1/api", //THE API URL
});

export default instance;
