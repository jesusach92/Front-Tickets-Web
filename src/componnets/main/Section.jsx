import useMediaQuery from '@mui/material/useMediaQuery'
import Movil from './Section/Movil'
import Web from './Section/Web'

const Section = () => {
  const movil = useMediaQuery('(max-width:600px)')
  return (
    (movil?(<Movil/>):(<Web/>))
  )
}

export default Section