import React, { useEffect, useState } from 'react'
import jsonData from './constants/data.json'
import Product from './components/Product';
import emptyimg from "/assets/images/illustration-empty-cart.svg"
import Cart from "./components/Cart"

const App = () => {

  const [itemQuantity, setItemQuantity] = useState(0)

  const [items, setItems] = useState([]);

  const [datas, setData] = useState([]);
  useEffect(()=> {
   const datas = jsonData;

   setData([...datas]);

  }, []) 


  
  return (
    <div className='p-8 max-sm:p-6 w-full bg-[var(--rose50)]'>
    <div className="flex p-8 max-sm:p-0 flex-row justify-between max-sm:justify-normal max-sm:flex-col gap-8">
    <div className="flex flex-col">
        <h1 className='font-extrabold text-4xl mb-8'>Desserts</h1>
        <div className="grid grid-cols-3 w-full size-fit max-sm:grid-cols-1 gap-x-6 gap-y-8">{
            datas.map(({image, name, category, price, onclick})=> (
              <Product img={image} name={name} category={category} price={price} key={name} items={items} setItems={setItems} itemQuantity={itemQuantity} setItemQuantity={setItemQuantity} onclick={(itemToBeAdded) => {
                
               const isItem = items.find((item) => item.name === itemToBeAdded.name)
               if (!isItem) {
                 setItems([...items, itemToBeAdded])
                }
              }} 


            />
            ))
          }</div>
      </div>
      
          <div className="min-w-[32%] rounded-xl max-sm:w-full max-sm:max-w-full h-fit bg-white p-5 ">
            <p className="text-3xl font-extrabold text-[var(--red)] mb-3">
             Your Cart (<span className="text-3xl">{items.length}</span>)
            </p>


            {
              items.length === 0 ? (<div className="flex flex-col items-center justify-center gap-3 mt-8 mb-4">
              <img src={emptyimg} alt="no items" className='size-30'/>
              <p className='text-opacity-15 text-sm font-bold text-[var(--rose500)]'>Your added items will appear here</p>
            </div>) : (
                <div className="flex flex-col gap-3">
                  {
                    items.map(({id, name, price, quantity, category, image})=> (
                      <Cart key={id} name={name} price={price} quantity={quantity} category={category} items={items} setItems={setItems} img={image} itemQuantity={itemQuantity} setItemQuantity={setItemQuantity}   />
                    ))
                  }
                  
                  <div className='mt-5 flex justify-between items-center mb-5'>
                <p className="text-sm text-[var(--rose300)] font-semibold">Your Order</p>
            <p className='font-bold text-xl text-[var(--rose900)]'>${46}.00</p>


                  </div>

                    <div>
                      <img src={} />
                    </div>
                  <button className="w-full rounded-full bg-[var(--red)] text-white p-4">Confirm Order</button>
                </div>
            )

            }
            
          </div>
    </div>
    </div>
    
  )
}

export default App
