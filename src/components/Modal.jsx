import React, { useContext } from 'react'
import orderConfirmedIcon from "/assets/images/icon-order-confirmed.svg"
import { Data } from './Product-cart'

const Modal = ({ setModal }) => {
  const { itemsValue, dataValue } = useContext(Data)
  const [items, setItems] = itemsValue;


  const handleClose = () => {
    setItems([])
    setModal(false)
  }
  return (
    <div className="bg-white min-w-[500px] max-md:min-w-[100%] rounded-md p-6 max-md:w-full max-md:absolute max-md:bottom-0 flex flex-col gap-3">
      <div>
        <img src={orderConfirmedIcon} alt="" />
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-4xl text-black font-bold">Order Confirmed</p>
        <p className="text-sm text-[var(--rose500)] opacity-50 font-medium">We hope you enjoy your food!</p>
      </div>
      <div className="flex flex-col gap-4 max-h-[300px] overflow-scroll">
        {
          items.map(({ name, image, category, price, id, quantity, showIncrement }) => (
            <div key={id} className="flex items-center p-2 border-b">
              <div className="flex gap-3 justify-center w-full">
                <div className="size-15 rounded-md">
                  <img src={image.thumbnail} alt="" className="object-cover rounded-md" />
                </div>
                <div className="flex  justify-between items-center w-full">
                  <div className="flex flex-col gap-2">
                    <p className="text-sm text-[var(--rose900)] font-medium">{name}</p>
                    <div className="flex gap-4 items-center">
                      <p className="text-md text-[var(--red)] font-medium">{quantity}x</p>
                      <p className="text-sm text-[var(--rose500)] font-light">@${price.toFixed(2)}</p>
                    </div>
                  </div>

                  <p className="text-sm text-[var(--rose500)] font-medium">${(price * quantity).toFixed(2)}</p>

                </div>


              </div>
            </div>

          ))
        }

      </div>
      <div className='flex justify-between'>
        <p className="text-sm text-[var(--rose500)] font-medium">Order Total</p>
        <p className="text-xl font-bold">${items.reduce((p, c) => {

          const price = c.price * c.quantity;
          const total = p + +price;
          return total;
        }, 0).toFixed(2)}</p>
      </div>
      <div></div>
      <button className="w-full text-sm mt-4 font-medium text-white rounded-full bg-[var(--red)] py-3" onClick={() => {
        handleClose()
      }}>Start New Order</button>
    </div >
  )
}

export default Modal
