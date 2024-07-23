const AddItemsForm = () => {
  return (
    <div>
      <h1>Inventory Admin App</h1>
      <form>
        <label htmlFor="itemName" >Item Name:</label>
        <br/>
        <input id="itemName" type="text"/>
        <br/><br/>
        <label htmlFor="itemQuantity" >Item Quantity:</label>
        <br/>
        <input id="itemQuantity" type="number"/>
        <br/><br/>
        <label htmlFor="entryType" >Entry Type:</label>
        <br/>
        <select id="entryType">
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