import { Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import AddItem from "./Pages/AddItem"
import ItemDetails from "./Pages/ItemDetails"

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<AddItem />} />
        <Route path="/items/:id" element={<ItemDetails />} />
      </Routes>
    </div>
  )
}

export default App
