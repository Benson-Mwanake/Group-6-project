import ItemList from "../Components/ItemList"
import FilterBar from '../Components/FilterBar'
import { useEffect, useState } from 'react'
import './Home.css'

function Home() {
  const [items, setItems] = useState([])
  const [filter, setFilter] = useState('All')

  useEffect(() => {
    fetch('http://localhost:3000/items')
      .then(res => res.json())
      .then(data => setItems(data))
  }, [])

const filteredItems = filter === 'All'
  ? items
  : items.filter(item => item.type.toLowerCase() === filter.toLowerCase());

  return (
    <div>
      <FilterBar filter={filter} setFilter={setFilter} />
      <ItemList items={filteredItems} />
    </div>
  )
}

export default Home
