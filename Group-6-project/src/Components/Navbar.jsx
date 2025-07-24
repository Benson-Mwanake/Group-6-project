import { Link } from 'react-router-dom'
import '../App.css'

function Navbar() {
  return (
    <nav className="navbar">
      <p className='nav-p'>Lost & Found</p>
      <div className="link-btn">
        <Link to="/" className='nav-link'>Home</Link>
        <Link to="/Add-Item"  className="nav-link">Post Item</Link>
        <Link to="/Item-List"  className="nav-link">Items</Link>
      </div>
    </nav>
  )
}

export default Navbar