import axios from "axios"

export const api = axios.create({
  baseURL:"http://localhost:3000",
  //baseURL: "https://contacts-back-end.onrender.com",
  timeout: 10000,
})