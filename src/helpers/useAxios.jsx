import axios from "axios"
import { useContext } from "react"
import { SessionContext } from "../componnets/session/SessionContext"

const URI = "http://192.168.1.164:3001"
const apiInstance = axios.create({baseURL: URI
})

const useAxios = () => {
    const [{user},] = useContext(SessionContext)
  
    return apiInstance
}


export default useAxios


