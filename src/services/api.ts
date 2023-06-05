import axios from "axios"

export const api = axios.create({
  //baseURL: "https://contacts-back-end.onrender.com",
  baseURL:'http://localhost:3000',
  timeout: 10000,
})