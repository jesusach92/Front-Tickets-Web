import useMediaQuery from '@mui/material/useMediaQuery'
import Movil from './Section/Movil'
import Tablet from './Section/Tablet'
import Web from './Section/Web'

const Section = () => {
  const movil = useMediaQuery('(max-width: 600px)')
  const tablet = useMediaQuery('(max-width:900px)') 
  return (
    (movil && tablet) ?(<Movil/>):(tablet?(<Tablet/>):(<Web/>))
  )
}

export default Section