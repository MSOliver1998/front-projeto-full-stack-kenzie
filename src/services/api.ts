import axios from "axios"

export const api = axios.create({
  baseURL: "https://contacts-back-end.onrender.com",
  timeout: 10000,
})