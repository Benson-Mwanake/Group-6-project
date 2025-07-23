import { Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import AddItem from "./Pages/AddItem"
import ItemDetails from "./Pages/ItemDetails"
import Landingpage from "./Pages/Landingpage"

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/Item-List" element={<Home />} />
        <Route path="/Add-Item" element={<AddItem />} />
        <Route path="/Item-List/:id" element={<ItemDetails />} />
      </Routes>
    </div>
  )
}

export default App
