import { Link } from 'react-router-dom'
import './ItemList.css'

function ItemCard({ item }) {
  return (
    <div className="item-card">
      <h3>{item.title}</h3>
      <p><strong>Type:</strong> {item.type}</p>
      <p><strong>Location:</strong> {item.location}</p>
      <img src={item.image}/>
      <p>{item.description}</p>
      <Link to={`/items/${item.id}`}>View Details</Link>
    </div>
  )
}

export default ItemCard