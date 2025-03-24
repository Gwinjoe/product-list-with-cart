import React, { useContext, useState } from 'react'
import { Data } from "./Product-cart";
import cartIcon from "/assets/images/icon-add-to-cart.svg";
import incrementIcon from "/assets/images/icon-increment-quantity.svg";
import decrementIcon from "/assets/images/icon-decrement-quantity.svg"
import { useEffect } from 'react';



const Products = () => {
  const { dataValue, itemsValue } = useContext(Data);
  const [data, setData] = dataValue;
  const [items, setItems] = itemsValue;


  useEffect(() => {
    console.log(items)
    console.log(data)
  }, [items, data])

  const addItem = (itemToBeAdded) => {
    setItems([...items, itemToBeAdded])
    console.log(itemToBeAdded.id)
  }

  const decrementItem = (itemToBeAdded) => {
    const modItem = items.map(item => {
      if (item.quantity === 1) {
        return item.id === itemToBeAdded.id ? { ...item, quantity: item.quantity - 1, showIncrement: false } : item
      }
      return item.id === itemToBeAdded.id ? { ...item, quantity: item.quantity - 1 } : item
    })
    setItems(
      modItem.filter(item => item.showIncrement === true)
    )
    console.log(items)
  }

  const incrementItem = (itemToBeAdded) => {
    const modItem = items.map(item => {
      return item.id === itemToBeAdded.id ? { ...item, quantity: item.quantity + 1 } : item
    })
    setItems([...modItem])
    console.log(items)
  }

  const getItemQuantity = (itemToBeAdded) => {
    const existingItem = items.find(item => item.id === itemToBeAdded.id);
    if (existingItem) {
      return existingItem.quantity;
    }
  }
  return (
    <div className="flex-2">
      <h1 className="font-extrabold text-4xl mb-6">Desserts</h1>
      <div className="flex gap-8 flex-wrap justify-center ">
        {data && data.length ? (
          data.map(({ image, name, category, price }) => {
            const id = `${price}${name}${category}`;
            let showIncrement = true;
            const itemToBeAdded = {
              id: id,
              showIncrement: true,
              name,
              image,
              category,
              price,
              quantity: 1,
            }

            const existingItem = items.find(item => item.id === itemToBeAdded.id);
            return (
              <div key={`${Math.floor(Math.random() * 1000)}${name}`} className="w-[230px] flex-grow">
                <div className={`rounded-xl relative w-full `}>
                  <img src={image.desktop} alt="" className={`object-cover rounded-xl ${existingItem ? "border-2 border-[var(--red)]" : ""}`} />
                  <div className="absolute bottom-[-18px] w-full flex justify-center items-center  text-sm">
                    {
                      existingItem && existingItem.showIncrement ? (<div className='px-3 bg-[var(--red)] rounded-full py-2 flex gap-8 items-center'>
                        <button className="rounded-full border border-white size-4 flex justify-center p-0.5" onClick={() => {
                          decrementItem(itemToBeAdded)
                        }}>
                          <img src={decrementIcon} alt="" />
                        </button>
                        <div className="text-white text-sm">{getItemQuantity(itemToBeAdded)}</div>
                        <button className="border size-4 flex justify-center rounded-full p-0.5" onClick={() => {
                          incrementItem(itemToBeAdded)
                        }}>
                          <img src={incrementIcon} alt="" />
                        </button>
                      </div>) : (
                        <button className=" flex gap-2 items-center px-4 py-2 bg-white font-medium rounded-full border border-[var(--red)] text-sm" onClick={() => {
                          addItem(itemToBeAdded);
                        }}>
                          <img src={cartIcon} />
                          <span className="text-sm">Add to Cart</span>
                        </button>)
                    }
                  </div>
                </div>

                <div className="mt-[25px]">
                  <p className="text-sm text-[var(--rose500)] font-medium">{category}</p>
                  <h3 className="text-md text-[var(--rose900)] font-medium">{name}</h3>
                  <p className="text-md text-[var(--red)] font-medium">${price.toFixed(2)}</p>
                </div>
              </div>

            )
          })
        ) : (
          <div>loading...</div>
        )}
      </div>
    </div >
  )
}

export default Products
