import React, { useContext, useState } from 'react'
import carbonIcon from "/assets/images/icon-carbon-neutral.svg"
import noItemIcon from "/assets/images/illustration-empty-cart.svg"
import { Data } from "./Product-cart"

const Cart = () => {
  const { dataValue, itemsValue } = useContext(Data);
  const [data, setData] = dataValue;
  const [items, setItems] = itemsValue;
  return (
    <div className="w-[400px] border">
      <div className="bg-white rounded-xl border-none flex gap-5 flex-col  p-5">
        <h2 className="text-[var(--red)] font-bold text-2xl">Your Cart({items.length})</h2>
        <div>
          {
            items && items.length ? (
              <div>
                <div>you have items in your cart</div>
              </div>
            ) : (
              <div className="flex items-center justify-center">
                <img src={noItemIcon} alt="" />
              </div>
            )
          }
        </div>
        <div className="flex justify-between">
          <p className="text-sm text-[var(--rose900)] font-medium">Your order total</p>
          <p className="text-xl font-bold">${46.00}</p>
        </div>

        <div className="w-full flex items-center gap-3 justify-center p-3 bg-[var(--rose50)] rounded-xl">
          <img src={carbonIcon} />
          <p className="text-sm text-[var(--rose900)]">This is a <span className="text-black font-medium">Carbon-neutral</span> delivery.</p>
        </div>

        <button className="w-full text-sm font-medium text-white rounded-full bg-[var(--red)] py-3">Confirm Order</button>
      </div>
    </div>
  )
}

export default Cart
