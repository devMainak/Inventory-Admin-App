import { ADD_NEW_ITEM, FETCH_INVENTORY_SUCCESS, FETCH_REMOVED_SUCCESS, FETCH_REMAINING_SUCCESS } from './actions'
const initialState = {
  inventory: [],
  removedItems: [],
  remainingItems: []
}

const inventoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_ITEM:
      if (action.payload.entryType === "Add to Storage")
      {
        return {...state, inventory: [...state.inventory, action.payload]}
      } else {
        return {...state, removedItems: [...state.removedItems, action.payload]}
      }
    case FETCH_INVENTORY_SUCCESS:
      return {...state, inventory: action.payload}
    case FETCH_REMOVED_SUCCESS:
      return {...state, removedItems: action.payload}
    case FETCH_REMAINING_SUCCESS:
      return {...state, remainingItems: action.payload}
    default:
      return state
  }
}

export default inventoryReducer