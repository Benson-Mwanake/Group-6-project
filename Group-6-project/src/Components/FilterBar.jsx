import React from 'react'

function FilterBar({filter, setFilter}) {
  return (
    <div className='filter-bar'>
        <button onClick={() => setFilter('All')} className={filter === 'All' ? 'active' : ''}>All</button>
        <button onClick={() => setFilter('Lost')} className={filter === 'Lost' ? 'active' : ''}>Lost</button>
    </div>
  )
}

export default FilterBar