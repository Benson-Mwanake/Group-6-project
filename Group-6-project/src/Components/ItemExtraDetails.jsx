import { useNavigate } from 'react-router-dom';
import '../App.css';

function ItemExtraDetails({ item }) {
  const navigate = useNavigate();

  const handleDelete = () => {
    fetch(`https://json-server-9hl1.onrender.com/items/${item.id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(() => {
        console.log('Item deleted successfully');
        navigate('/Item-List');
      })
      .catch(error => {
        console.error('Error deleting item:', error);
      });
  };

  return (
     <div className="item-card general">
      <h3>{item.title}</h3>
      <p><strong>Type:</strong> {item.type}</p>
      <p><strong>Location:</strong> {item.location}</p>
      <img src={item.image} alt={item.title} />
      <p>{item.description}</p>
      <p><strong>Contact:</strong> {item.contactInfo}</p>
      <p><strong>Day:</strong> {item.DateLost} <strong>Time:</strong> {item.TimeLost}</p>
      <p><strong>Reward:</strong> {item.Reward}</p>
      <button onClick={handleDelete} className="delete-button">
        Delete Item
      </button>
    </div>
  );
}

export default ItemExtraDetails;