import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Main = () => {
    const [pruebas, setPruebas] = useState([])
  
    const getData = async()=>{
        const {data} = await axios.get("http://localhost:8080/Prueba2")
        setPruebas(data)
    }
    useEffect(() => {
      getData()
    
    }, [])
    
    return (

    <div>
        {pruebas.map((element,index) =>(
            <h1 key={index}>{element}</h1>
        ))}


    </div>
  )
}

export default Main