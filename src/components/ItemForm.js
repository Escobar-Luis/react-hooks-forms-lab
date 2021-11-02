import React, { useState } from "react";
import { v4 as uuid } from "uuid";



function ItemForm({onItemFormSubmit}) {
  const [itemName, setItemName] = useState('')
  
  function addName (event) {
    setItemName(event.target.value)
  }
  
  const [itemCategory, setItemCategory] = useState('Produce')
  
  function addCategory (event) {
    setItemCategory(event.target.value)
  }

function createItem (event) {
  event.preventDefault();
  onItemFormSubmit({
    id: uuid(), // the `uuid` library can be used to generate a unique id
    name: itemName,
    category: itemCategory,
  })
}
  
  return (
    <form className="NewItem">
      <label>
        Name:
        <input value={itemName} onChange={addName}type="text" name="name" />
      </label>

      <label>
        Category:
        <select value={itemCategory} onChange={addCategory} name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button onSubmit={createItem}type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
