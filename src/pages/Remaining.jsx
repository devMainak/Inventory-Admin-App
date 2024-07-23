import { useSelector, useDispatch } from 'react-redux'
  import { fetchInventory, fetchRemovedItems } from '../actions'
  import { useEffect } from 'react'

const Remaining = () => {
  const dispatch = useDispatch()
  const inventory = useSelector((state) => state.inventory)
  const removedItems = useSelector((state) => state.removedItems)

  useEffect(() => {
    dispatch(fetchInventory())
  }, [])

  useEffect(() => {
    dispatch(fetchRemovedItems())
  }, [])

  const totalInventoryItems = inventory.reduce((acc, curr) => acc += curr.itemQuantity, 0)
  const totalRemovedItems = removedItems.reduce((acc, curr) => acc += curr.itemQuantity, 0)

  const totalRemainingItems = totalInventoryItems - totalRemovedItems
  
  return (
    <div>
      <h1>Remaining Items in Inventory</h1>
      <h2>Inventory Total: {totalRemainingItems}</h2>
    </div>
  )
}

export default Remaining