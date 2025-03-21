import React from 'react'
import removeIcon from "/assets/images/icon-remove-item.svg"

const Cart = ({img, name, quantity, id, price, category, items, setItems, setItemQuantity, itemQuantity, onclick}) => {


  const itemToBeDeleted = {
    id: `${name}${price}${category}`,
    name: name, 
    category: category,
    price: price,
    
}


  const removeItem = () => {
    const isItemInCart = items.find((item)=> item.id === itemToBeDeleted.id)
    if (isItemInCart) {
      isItemInCart.quantity = 0
      setItemQuantity(isItemInCart.quantity)
    }
    console.log(isItemInCart)
    const newItems = items.filter(item => item.id !== isItemInCart.id)

    setItems([...newItems])
  }

  return (

    <div className="w-full flex justify-between items-center align-center border-b-[1px] px-4 py-2">
        <div className="w-full flex gap-2 flex-col">
            <p className='font-bold text-lg text-[var(--rose900)]'>{name}</p>
            <div className='w-full flex gap-3'>
                <p className="text-sm text-[var(--red)] text-opacity-[-0.5] font-bold">{quantity}x</p>
                <p className="text-sm text-[var(--rose300)] text-opacity-[-0.5]">@ ${price.toFixed(2)}</p>
                <p className="text-sm text-[var(--rose500)] font-semibold text-opacity-5">${(price * quantity).toFixed(2)}</p>
            </div>
        </div>
            <div className="cursor-pointer" onClick={removeItem}>
              <img src={removeIcon}/>
            </div>

      </div>


    
 
  )
}

export default Cart
