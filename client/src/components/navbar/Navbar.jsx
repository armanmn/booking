import './Navbar.css'
import logo from "../../images/inlobbyLogo.png";

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navContainer">
            <img className='logo' src={logo} alt="inLOBBY.com" />
            <div className="navItems">
                <button className="navButton">Register</button>
                <button className="navButton">Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar