import React, { useContext } from 'react'
import { Data } from "./Product-cart";
import cartIcon from "/assets/images/icon-add-to-cart.svg";
import incrementIcon from "/assets/images/icon-increment-quantity.svg";
import decrementIcon from "/assets/images/icon-decrement-quantity.svg"



const Products = () => {
  const { dataValue, itemsValue } = useContext(Data);
  const [data, setData] = dataValue;
  const [items, setItems] = itemsValue;

  const addItem = (itemToBeAdded) => {
    const existingItem = items.find(item => item.id === itemToBeAdded.id);
    if (existingItem) {
      setItem(items => {
        existingItem.quantity++
      })
    } else {
      setItems([...items, itemToBeAdded])
    }
  }

  const getItemQuantity = () => {
    const existingItem = item.find(item => item.id === itemToBeAdded.id);
    if (existingItem) {
      console.log(existingItem)
      return existingItem.quantity;
    }
    return "n"
  }
  return (
    <div className="flex-1 flex-row border">
      <h1 className="font-extrabold text-4xl mb-6">Desserts</h1>
      <div className="flex gap-8 flex-wrap ">
        {data && data.length ? (
          data.map(({ image, name, category, price }) => {
            const id = `${image.thumbnail}${image.desktop}${name}`
            const itemToBeAdded = {
              id,
              name,
              category,
              price,
              quantity: 1,
            }

            return (
              <div key={`${image.thumbnail}${name}`} className="w-[230px]">
                <div className="rounded-xl relative">
                  <img src={image.desktop} alt="" className=" object-cover rounded-xl" />
                  <div className="absolute bottom-[-18px] w-full flex justify-center text-sm">
                    {
                      items.length ? (<div className='px-3 bg-[var(--red)] rounded-full py-2 flex gap-2 justify-center items-center'>
                        <button className="rounded-full border-white p-2">
                          <img src={decrementIcon} alt="" />
                        </button>
                        <span>{itemToBeAdded.quantity}</span>
                        <button>
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
