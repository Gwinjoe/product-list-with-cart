import { products } from "../constants"
import PopularProductCard from "../components/PopularProductCard"
const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h1 className="font-bold font-palanquin text-4xl">Our <span className="text-coral-red ">Popular</span> Products</h1>
        <p className="text-lg font-montserrat text-slate-gray max-w-xl">Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value</p>
      </div>
      
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
       { products.map((product)=>(
          <PopularProductCard 
            key={product.name} {...product}
          />
        ))}
      </div>
    </section>
  )
}

export default PopularProducts