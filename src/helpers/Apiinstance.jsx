import axios from "axios"

const URI = "http://localhost:3001"

export const AUTH = axios.create({baseURL:`${URI}/auth`})