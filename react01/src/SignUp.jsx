import React, { useState } from 'react';

function SignUp() {
  const [formData, setFormData] = useState({ product: "", quantity: 0 });
  const [items, setItems] = useState([]);
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState(0);

  const handleChange = (e) => {
    setFormData(currData => {
      return {
        ...currData,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleItem = (e) => {
    setItem(e.target.value);
  };

  const handleQuantity = (e) => {
    setQuantity(e.target.value);
  };

  const handleItems = (e) => {
    if(item||quantity){
    e.preventDefault(); 
    setItems(currItems => {
      return [...currItems, { item: item, quantity: quantity }];
    });
    setItem("");
    setQuantity(0);
  }
  else{
    alert("Fill the item field first!");
  }
  };

  return (
    <div>
      <form className='flex flex-col gap-y-2 text-start'>
        <h2 className='text-3xl font-bold'>Product: {formData.product}</h2>
        <h2 className='text-3xl font-bold'>Quantity: {formData.quantity}</h2>

        <input
          className='p-3 rounded-lg text-xl font-semibold'
          type="text"
          placeholder='Product Name'
          name='product'
          id='product'
          onChange={handleChange}
          value={formData.product}
        />
        <input
          className='p-3 rounded-lg text-xl font-semibold'
          type="range"
          placeholder='Product Quantity'
          name='quantity'
          id='quantity'
          onChange={handleChange}
          value={formData.quantity}
        />

        <h2 className='text-3xl underline'>Shopping List</h2>
        <input
          onChange={handleItem}
          value={item} 
          placeholder='Item Name'
          type="text"
          className='p-2 rounded-lg text-xl font-semibold'
        />
        <input
          onChange={handleQuantity} 
          value={quantity} 
          placeholder='Item Quantity'
          type="number"
          className='p-2 rounded-lg text-xl font-semibold'
        />

        <button type="button" onClick={handleItems} className=''>Add Item</button> 

        <div className='bg-white bg-opacity-20 p-2 mt-2 rounded-lg'>
          {
            items.map((i, index) => (
              <li key={index} className='text-black'>{i.item} ~ {i.quantity}</li>
            ))
          }
        </div>
      </form>
    </div>
  );
}

export default SignUp;
