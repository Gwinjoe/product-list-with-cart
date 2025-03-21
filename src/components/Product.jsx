import React, {useState, useEffect} from 'react'
import cart from "/assets/images/icon-add-to-cart.svg";
import increment from "/assets/images/icon-increment-quantity.svg"
import decrement from "/assets/images/icon-decrement-quantity.svg"

//
//
//
//
//
//
//
//
//


const Product = ({img, name, category, price, onclick, items, setItems, itemQuantity, setItemQuantity}) => {
const [size, setSize] = useState("")
const [itemInCart, setItemInCart] = useState(false);

const itemToBeAdded = {
    id: `${name}${price}${category}`,
    image: img,
    name: name, 
    category: category,
    price: price,
    quantity: 1
}


const decrementQuantity = (itemToBeAdded) => {
    const isItem = items.find(item => item.id === itemToBeAdded.id);
    if (isItem.quantity > 1) { 
        isItem.quantity--


    setItemQuantity(isItem.quantity)
    setItems([...items])
    itemToBeAdded.quantity
    } else {
        setItemInCart(false)
        removeItemFromCart(itemToBeAdded)
        
    }

    
}


const removeItemFromCart = (itemToBeAdded) => {
    const isItem = items.find(item => item.id === itemToBeAdded.id);
    if (isItem.quantity === 1) {
      const newItems =  items.filter(item =>  item.id !== itemToBeAdded.id)
      setItems([...newItems])
    }
    console.log(items)
    

}

const incrementQuantity = (itemToBeAdded) => {
    const isItem = items.find(item => item.id === itemToBeAdded.id);
    if (isItem.quantity >= 1) { 
       isItem.quantity++
        setItemQuantity(isItem.quantity)
       setItems([...items])
    } 
    
    
}



const handleClick = () => {
    setItemInCart(true)
    
    onclick(itemToBeAdded)

    setItemQuantity(itemToBeAdded.quantity)
     
    
    

}

const decreaseQuantity = () => {
    decrementQuantity(itemToBeAdded)
}

const increaseQuantity = () => {
    incrementQuantity(itemToBeAdded)

}


 
    useEffect(() => {
        setSize(
            window.innerWidth < 720 ? 'mobile' : window.innerWidth < 1440 ? "tablet" : "desktop"
        )
       
    })

   


  return (
    <div className='flex flex-col gap-8'>
        <div className="w-full relative">
            <img className={`size-fit rounded-2xl ${itemInCart ? " border-2 border-[var(--red)]" : ""}`} src={img[`${size}`]} alt={name} />
            <div className="absolute bottom-[-20px] w-full flex justify-center">
                
                    {
                       itemInCart ? (
                        <div className="flex items-center justify-between gap-8 text-[var(--rose900)] font-bold border border-[var(--rose400)]  px-3 py-3 rounded-full bg-[var(--red)]  hover:text-[var(--red)] hover:border-[var(--red)]" >
                            <div className="rounded-full border border-white bg-transparent p-0.5 cursor-pointer" onClick={decreaseQuantity}>
                              <img src={decrement} className='size-3  '/>
                            </div>
                            <div className="text-white text-sm">{
                                 itemQuantity
                                }</div>
                            <div className="rounded-full border border-white bg-transparent p-0.5 cursor-pointer" onClick={increaseQuantity}>
                                <img src={increment} className='size-3  '/>
                            </div>
                        </div>
                       ) : (
<div className="flex items-center justify-center gap-3 text-[var(--rose900)] font-bold border border-[var(--rose400)]  px-7 py-3 rounded-full bg-[var(--rose50)] cursor-pointer hover:text-[var(--red)] hover:border-[var(--red)]" onClick={handleClick}>

    <img src={cart} className='size-5' />
    <span className="text-[var(--rose900)/2] text-sm">Add to Cart</span>
</div>
                       )
                    }
                
            </div>
        </div>
        <div className="w-full flex flex-col gap-0.5">
            <p className="text-sm text-[var(--rose400)]">{category + " " + size}</p>
            <p className='font-bold text-lg text-[var(--rose900)]'>{name}</p>
            <p className="text-lg text-[var(--red)] text-opacity-[-0.5]">${price.toFixed(2)}</p>
        </div> 
    </div>
  )
}

export default Product
