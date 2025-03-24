import React, { createContext, useEffect } from 'react'
import Products from './Products'
import Cart from './Cart'
import { useState } from 'react';
import rawdata from "../constants/data.json"
import Modal from './Modal';

export const Data = createContext(undefined);

const ProductCart = () => {
  const [data, setData] = useState([]);
  const [items, setItems] = useState([])
  const [isModalOpen, setModal] = useState(false)

  useEffect(() => {
    setData([...rawdata])
  }, [])
  return (
    <Data.Provider value={{
      dataValue: [data, setData],
      itemsValue: [items, setItems],
    }}>
      <div className="flex max-lg:flex-col gap-10 max-sm:p-8 p-20">
        <Products />
        <Cart setModal={(value) => setModal(value)} />
        {isModalOpen && <div className="fixed min-h-screen  flex justify-center items-center min-w-full top-0 bottom-0 left-0 right-0 bg-black bg-opacity-50">
          <Modal setModal={(value) => setModal(value)} />
        </div>}
      </div>
    </Data.Provider>
  )
}

export default ProductCart
