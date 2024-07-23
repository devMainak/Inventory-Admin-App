import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Inventory from './pages/Inventory'
import Removed from './pages/Removed'
import Remaining from './pages/Remaining'
import AddItemsForm from './pages/AddItemsForm'

export default function App() {
  return (
    <>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/inventory">Inventory</Link>
            </li>
            <li>
              <Link to="/removed">Removed Items</Link>
            </li>
            <li>
              <Link to="/remaining">Remaining Items</Link>
            </li>
            <li>
              <Link to="/">Add New Items</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/inventory" element={<Inventory/>} />
          <Route path="/removed" element={<Removed/>} />
          <Route path="/remaining" element={<Remaining/>} />
          <Route path="/" element={<AddItemsForm/>} />
        </Routes>
      </Router>
    </>
  )
}
