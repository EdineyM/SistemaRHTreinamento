import axios from "axios";

const api = axios.create({
  baseURL: 'https://localhost:44329'
})

export default api