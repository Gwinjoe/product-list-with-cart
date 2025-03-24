import React, { useContext, useState } from 'react'
import carbonIcon from "/assets/images/icon-carbon-neutral.svg"
import noItemIcon from "/assets/images/illustration-empty-cart.svg"
import { Data } from "./Product-cart"
import removeIcon from "/assets/images/icon-remove-item.svg"

const Cart = ({ setModal }) => {
  const { dataValue, itemsValue } = useContext(Data);
  const [data, setData] = dataValue;
  const [items, setItems] = itemsValue;

  const popItem = (id) => {
    const modItem = items.map(item => {
      if (item.id === id) {
        return { ...item, showIncrement: false, quantity: 0 }
      }
      return item;
    })

    setItems(
      modItem.filter(item => item.showIncrement === true)
    )
  }
  return (
    <div className="min-w-[400px] max2xl:flex-1 max-sm:min-w-full">
      <div className="bg-white rounded-xl border-none flex gap-5 flex-col px-3 py-7">
        <h2 className="text-[var(--red)] font-bold text-2xl">Your Cart({items.length})</h2>
        <div >
          {
            items && items.length ? (
              <div className='flex flex-col gap-4'>
                {
                  items.map(({ name, image, category, price, id, quantity, showIncrement }) => (
                    <div key={id} className="flex flex-col p-2 border-b">
                      <div className="flex  justify-between items-center">
                        <div className="flex flex-col gap-2">
                          <p className="text-sm text-[var(--rose900)] font-medium">{name}</p>
                          <div className="flex gap-4">
                            <p className="text-md text-[var(--red)] font-medium">{quantity}x</p>
                            <p className="text-sm text-[var(--rose500)] font-light">@${price.toFixed(2)}</p>
                            <p className="text-sm text-[var(--rose500)] font-medium">${(price * quantity).toFixed(2)}</p>
                          </div>
                        </div>
                        <button className="border size-5 flex justify-center rounded-full p-1" onClick={() => {
                          popItem(id)
                        }}>
                          <img src={removeIcon} alt="" />
                        </button>
                      </div>

                    </div>

                  ))
                }
                <div className="flex justify-between">
                  <p className="text-sm text-[var(--rose900)] font-medium">Your order total</p>
                  <p className="text-xl font-bold">${items.reduce((p, c) => {

                    const price = c.price * c.quantity;
                    const total = p + +price;
                    return total;
                  }, 0).toFixed(2)}</p>
                </div>

                <div className="w-full flex items-center gap-3 justify-center p-3 bg-[var(--rose50)] rounded-xl">
                  <img src={carbonIcon} />
                  <p className="text-sm text-[var(--rose900)]">This is a <span className="text-black font-medium">Carbon-neutral</span> delivery.</p>
                </div>

                <button className="w-full text-sm font-medium text-white rounded-full bg-[var(--red)] py-3" onClick={() => {
                  setModal(true)
                }}>Confirm Order</button>

              </div>
            ) : (
              <div className="flex flex-col items-center gap-8 justify-center">
                <img src={noItemIcon} alt="" />
                <p className="text-[var(--rose500)] text-sm font-medium">Your added items will appear here.</p>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Cart
