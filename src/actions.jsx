// Action constant bindings
export const ADD_NEW_ITEM = "ADD_NEW_ITEM"
export const FETCH_INVENTORY_SUCCESS = "FETCH_INVENTORY_SUCCESS"
export const FETCH_REMOVED_SUCCESS = "FETCH_REMOVED_SUCCESS"
export const FETCH_REMAINING_SUCCESS = "FETCH_REMAINING_SUCCESS"

// Action creator function to add new item
export const addItem = (item) => async (dispatch) => {
  try {
    const response = await fetch("https://inventory-storage-app-backend-student-neog.replit.app/add-to-store", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type" : "application/json"
      }
    })

    const data = await response.json()
    if (data.success === true) {
      dispatch({type: ADD_NEW_ITEM, payload: data.data})
    }
  } catch (error) {
    console.error("Error adding new item", error)
  }
} 

// Action creator function to add new item
export const removeItem = (item) => async (dispatch) => {
  try {
    const response = await fetch("https://inventory-storage-app-backend-student-neog.replit.app/remove-from-store", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type" : "application/json"
      }
    })

    const data = await response.json()
    if (data.success === true) {
      dispatch({type: ADD_NEW_ITEM, payload: data.data})
    }
  } catch (error) {
    console.error("Error adding new item", error)
  }
}

// Action creator function to fetch inventory data
export const fetchInventory = () => async (dispatch) => {
  try {
    const response = await fetch("https://inventory-storage-app-backend-student-neog.replit.app/storage-items")
    
    const data = await response.json()
    if (data) {
      dispatch({type: FETCH_INVENTORY_SUCCESS, payload: data})
    }
  } catch (error) {
    console.error("Error fetching inventory", error)
  }
} 

// Action creator function to fetch inventory data
export const fetchRemovedItems = () => async (dispatch) => {
  try {
    const response = await fetch("https://inventory-storage-app-backend-student-neog.replit.app/dispatched-from-store")

    const data = await response.json()
    if (data) {
      dispatch({type: FETCH_REMOVED_SUCCESS, payload: data})
    }
  } catch (error) {
    console.error("Error fetching inventory", error)
  }
} 