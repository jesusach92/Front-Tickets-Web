import axios from "axios"

const URI = "http://192.168.1.164:3001"

export const AUTH = axios.create({baseURL:`${URI}/auth`})