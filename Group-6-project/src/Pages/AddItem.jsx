import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'

function AddItem() {
  const [formData, setFormData] = useState({
    title: '',
    type: 'Lost',
    location: '',
    image: '',
    description: '',
    contactInfo: '',
    DateLost: '',
    TimeLost: '',
    Reward: ''
  })

  const navigate = useNavigate()

  function handleChange(e) {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()

    fetch('http://localhost:3000/items', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(() => {
        navigate('/Item-List')
      })
  }

  return (
    <div className="add-item general">
      <h2>Post New Item</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} required />

        <label>Type:</label>
        <select name="type" value={formData.type} onChange={handleChange}>
          <option value="Lost">Lost</option>
          <option value="Found">Found</option>
        </select>

        <label>Location:</label>
        <input type="text" name="location" value={formData.location} onChange={handleChange} required />

        <label>Image URL:</label>
        <input type="url" name="image" value={formData.image} onChange={handleChange} required />

        <label>Description:</label>
        <textarea name="description" value={formData.description} onChange={handleChange} required />

        <label>Contact Info:</label>
        <input type="text" name="contactInfo" value={formData.contactInfo} onChange={handleChange} required />

        <label>Date Lost:</label>
        <input type="date" name="DateLost" value={formData.DateLost} onChange={handleChange} required />

        <label>Time Lost:</label>
        <input type="time" name="TimeLost" value={formData.TimeLost} onChange={handleChange} required />

        <label>Reward (optional):</label>
        <input type="text" name="Reward" value={formData.Reward} onChange={handleChange} />

        <button type="submit">Add Item</button>
      </form>
    </div>
  )
}

export default AddItem