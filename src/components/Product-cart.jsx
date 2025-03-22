import React, { createContext, useEffect } from 'react'
import Products from './Products'
import Cart from './Cart'
import { useState } from 'react';
import rawdata from "../constants/data.json"

export const Data = createContext(undefined);

const ProductCart = () => {
  const [data, setData] = useState([]);
  const [items, setItems] = useState([...data])

  useEffect(() => {
    setData([...rawdata])
  }, [])
  return (
    <Data.Provider value={{
      dataValue: [data, setData],
      itemsValue: [items, setItems],
    }}>
      <div className="flex gap-10 p-20">
        <Products />
        <Cart />
      </div>
    </Data.Provider>
  )
}

export default ProductCart
