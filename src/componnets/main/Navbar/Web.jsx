import { Tooltip } from '@mui/material'
import { Link } from 'react-router-dom'
import logo from '../../../assets/logo.png'
import Auth from '../Auth'


const Web = () => {
  return (
    <div className='navbar-Web'> 
    <Tooltip title="Inicio" disableInteractive>
    <Link to="/"><img src={logo} alt="Texin" className="logo-Web"></img></Link>
    </Tooltip>
      <div>
        <Tooltip title="Crea un nuevo Ticket" arrow>
    <Link to="/" className='links'>Nuevo Ticket</Link>
    </Tooltip>
    <Auth></Auth>
    </div>
</div>
  )
}

export default Web