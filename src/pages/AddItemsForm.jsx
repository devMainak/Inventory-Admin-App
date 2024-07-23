import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItem, removeItem } from '../actions'

const AddItemsForm = () => {
  const [itemName, setItemName] = useState("")
  const [itemQuantity, setItemQuantity] = useState(0)
  const [entryType, setEntryType] = useState("Add to Storage")
  const dispatch = useDispatch()
  
  // function to handle add item form
  const handleAddItem = (e) => {
    e.preventDefault()
    if (entryType === "Add to Storage")
    {
      dispatch(addItem({itemName, itemQuantity: parseFloat(itemQuantity), entryType}))
    } else {
      dispatch(removeItem({itemName, itemQuantity: parseFloat(itemQuantity), entryType}))
    }
  }
  
  return (
    <div>
      <h1>Inventory Admin App</h1>
      <form onSubmit={handleAddItem}>
        <label htmlFor="itemName" >Item Name:</label>
        <br/>
        <input onChange={(e) => setItemName(e.target.value)} value={itemName} id="itemName" type="text"/>
        <br/><br/>
        <label htmlFor="itemQuantity" >Item Quantity:</label>
        <br/>
        <input onChange={(e) => setItemQuantity(e.target.value)} value={itemQuantity} id="itemQuantity" type="number"/>
        <br/><br/>
        <label htmlFor="entryType" >Entry Type:</label>
        <br/>
        <select onChange={(e) => setEntryType(e.target.value)} value={entryType} id="entryType">
          <option value="Add to Storage">Add to Storage</option>
          <option value="Remove from Storage">Remove from Storage</option>
        </select>
        <br/><br/>
        <button type="submit">Add Item Data</button>
      </form>
    </div>
  )
}

export default AddItemsForm