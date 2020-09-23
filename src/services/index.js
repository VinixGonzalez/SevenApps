import axios from "axios";

const API = axios.create({
  baseURL: "https://random-persons.herokuapp.com",
});

export default API;
