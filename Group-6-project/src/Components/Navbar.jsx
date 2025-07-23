import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <p>Lost & Found</p>
      <div className="link-btn">
        <Link to="/"  className="nav-link">Home</Link>
        <Link to="/new"  className="nav-link">Post Item</Link>
        <Link  to="/items/:id "  className="nav-link">Items</Link>
      </div>
    </nav>
  )
}

export default Navbar