import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemExtraDetails from '../Components/ItemExtraDetails'

const ItemDetails = () => {
  const { id } = useParams()
  const [item, setItem] = useState(null)

  useEffect(() => {
    fetch(`http://localhost:3000/items/${id}`)
      .then(res => res.json())
      .then(data => setItem(data))
  }, [id])

  if (!item) return <p>Loading...</p>

  return (
    <div>
      <ItemExtraDetails item={item} />
    </div>
  )
}

export default ItemDetails
