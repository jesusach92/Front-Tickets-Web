import axios from "axios"

const URI = "http://192.168.1.164:3001"
const apiInstance = axios.create({baseURL: URI
})

const useAxios = () => {
  
    return apiInstance
}


export default useAxios


