import React, { useContext } from 'react'
import { Data } from "./Product-cart";
const Products = () => {
  const { dataValue, itemsValue } = useContext(Data);
  const [data, setData] = dataValue;
  const [items, setItems] = itemsValue;

  return (
    <div className="flex-1 flex-row border">
      <h1 className="font-extrabold text-4xl mb-6">Desserts</h1>
      <div className="flex gap-8 flex-wrap ">
        {data && data.length ? (
          data.map(({ image, name, category, price }) => (
            <div key={`${image.thumbnail}${name}`} className="w-[230px]">
              <div className="rounded-xl relative">
                <img src={image.desktop} alt="" className=" object-cover rounded-xl" />
                <div className="absolute bottom-[-20px] w-full flex justify-center text-sm">
                  {
                    items.length ? (<div className='p-3 bg-[var(--red)]'>kdjk</div>) : (<div className="p-3  bg-white rounded-full border border-[var(--red)] text-sm">Add to Cart</div>)
                  }
                </div>
              </div>

              <div>
                <p className="text-sm text-[var(--rose500)] font-medium ">{category}</p>
                <h3 className="text-md text-[var(--rose900)] font-medium">{name}</h3>
                <p className="text-md text-[var(--red)] font-medium">${price.toFixed(2)}</p>
              </div>
            </div>
          ))
        ) : (
          <div>loading...</div>
        )}
      </div>
    </div >
  )
}

export default Products
