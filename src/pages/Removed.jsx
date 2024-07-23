import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchRemovedItems } from '../actions'

const Removed = () => {
  const dispatch = useDispatch()
  const removedItems = useSelector((state) => state.removedItems)

  useEffect(() => {
    dispatch(fetchRemovedItems())
  }, [])

  const totalRemovedItems = removedItems.reduce((acc, curr) => acc += curr.itemQuantity, 0)
  
  return (
    <div>
      <h1>Removed Items From Inventory</h1>
      <ul>
        { removedItems.map((item, index) => (
      <li key={index}>{item.itemName}: {item.itemQuantity}</li>
        ))}
      </ul>
      <h2>Removed Items Total: {totalRemovedItems}</h2>
    </div>
  )
}

export default Removed