import { Link } from 'react-router-dom'
import logo from '../../../assets/logo.png'
import Auth from '../Auth'


const Web = () => {
  return (
    <div className='navbar-Web'> 
    <Link to="/"><img src={logo} alt="Texin" className="logo-Web"></img></Link>
      <div>
    <Link to="/" className='links'>Nuevo Ticket</Link>
    <Auth></Auth>
    </div>
</div>
  )
}

export default Web