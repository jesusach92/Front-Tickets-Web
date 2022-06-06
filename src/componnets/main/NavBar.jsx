import useMediaQuery from '@mui/material/useMediaQuery'
import Movil from './Navbar/Movil'
import Tablet from './Navbar/Tablet'
import Web from './Navbar/Web'

const NavBar = () => {
  const movil = useMediaQuery('(max-width: 600px)')
  const tablet = useMediaQuery('(max-width:900px)') 
  return (
    (movil && tablet) ?(<Movil/>):(tablet?(<Tablet/>):(<Web/>))
  )
}

export default NavBar