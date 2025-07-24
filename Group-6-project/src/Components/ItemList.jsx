import React from "react";
import ItemCard from "./ItemCard";
import '../App.css'

function ItemList({ items }) {
  if (!items.length) return <p>Searching for items</p>;

  return (
    <div className="item-list general">
      {items.map((item) => (
        <div key={item.id}>
          <ItemCard item={item} />
        </div>
      ))}
    </div>
  );
}

export default ItemList;
