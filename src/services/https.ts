import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

const https = axios.create({
  baseURL: BASE_URL,
});

export default https;
