import { useSelector, useDispatch } from 'react-redux'
import { fetchInventory } from '../actions'
import { useEffect } from 'react'

const Inventory = () => {
  const dispatch = useDispatch()
  const inventory = useSelector((state) => state.inventory)

  useEffect(() => {
    dispatch(fetchInventory())
  }, [])

  const totalInventory = inventory.reduce((acc, curr) => acc += curr.itemQuantity, 0)
  
  return (
    <div>
      <h1>Inventory Items</h1>
      <ul>
        {inventory.map((item, index) => (
      <li key={index}>{item.itemName}: {item.itemQuantity}</li>
        ))}
      </ul>
      <h2>Total Inventory Items: {totalInventory}</h2>
    </div>
  )
}

export default Inventory