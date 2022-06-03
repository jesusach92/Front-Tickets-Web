import { useContext } from "react"
import {SessionContext} from "../session/SessionContext"


const Router = () => {
  const session = useContext(SessionContext)
  return (
    session?.token ?(<>Hola</>):(<>123</>)
    
  )
}

export default Router