import { Link } from 'react-router-dom'
import '../App.css'

function ItemCard({ item }) {
  return (
    <>
    <div id='item-card2' className="item-card general">
      <img src={item.image}/>
      <div className='text-cont'>
      <h3>{item.title}</h3>
      <p><strong>Type:</strong> {item.type}</p>
      <p><strong>Location:</strong> {item.location}</p>
      <p className='desc'>{item.description}</p>
      <Link className='link' to={`/Item-List/${item.id}`}>More</Link>
      </div>
    </div>
    </>
  )
}

export default ItemCard