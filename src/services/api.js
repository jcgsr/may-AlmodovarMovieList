import axios from "axios";

const api = axios.create({
  baseURL: "https://almodovar-98fa1-default-rtdb.firebaseio.com/",
});

export default api;
