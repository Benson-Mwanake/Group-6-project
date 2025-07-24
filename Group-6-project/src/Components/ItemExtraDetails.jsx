import '../App.css'

function ItemExtraDetails({ item }) {
  return (
     <div className="item-card "id='item-card3'>
      <h3>{item.title}</h3>
      <p><strong>Type:</strong> {item.type}</p>
      <p><strong>Location:</strong> {item.location}</p>
      <img src={item.image} alt={item.title} />
      <p>{item.description}</p>
      <p><strong>Contact:</strong> {item.contactInfo}</p>
      <p><strong>Day:</strong> {item.DateLost} <strong>Time:</strong> {item.TimeLost}</p>
      <p><strong>Reward:</strong> {item.Reward}</p>
    </div>
  )
}

export default ItemExtraDetails

