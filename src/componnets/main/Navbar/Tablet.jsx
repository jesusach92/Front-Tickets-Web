import { Link } from 'react-router-dom'
import logo from '../../../assets/logo.png'
import Auth from '../Auth'

const Tablet = () => {
  return (
    <div className='navbar-Tablet'>
    <Link to="/"><img src={logo} alt="Texin" className="logo-tablet"></img></Link>
    <Auth></Auth>
    
</div>
  )
}

export default Tablet