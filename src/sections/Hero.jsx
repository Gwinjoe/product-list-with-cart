import { useState } from 'react'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
import { shoes, statistics } from '../constants'
import { bigShoe1 } from '../assets/images'
import ShoeCard from '../components/ShoeCard'
const Hero = () => {
    const [bigShoe, setbigShoe] = useState(bigShoe1)

  return (
    <section id="home" className="w-full min-h-screen  justify-center flex flex-col xl:flex-row gap-10 max-container ">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-coral-red font-montserrat text-xl">
          Our Summer Collections
        </p>
        <h1 className="mt-10 font-palanquin text-6xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span> <br/>
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat leading-8 text-lg text-slate-gray mt-6 mb-14 sm:max-w-sm">Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
        <Button label="Shop Now" iconUrl={arrowRight}/>

        <div className="flex justify-start max-lg:justify-around items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat)=> (
            <div>
              <p className="font-bold font-palanquin text-4xl">{stat.value}</p>
              <p className="font-montserrat text-slate-gray leading-7">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen bg-cover bg-center bg-primary bg-hero max-xl:py-40 xl:rounded-bl-full xl:border-blue-500">
        <img src={bigShoe} alt="Shoe Collection" width={600} height={490} 
          className="relative object-contain z-10 mb-48 mt-24"
        />

        <div className="absolute bottom-[-3rem] flex justify-center items-center gap-4 px-2 lg:gap-6 sm:left-[10%]">
          {shoes.map((shoe)=>(
            <div key={shoe.bigShoe}>
            <ShoeCard 
              imgUrl={shoe}
              changeBigShoeImage={(theShoe)=>{setbigShoe(theShoe)}}
              bigShoeImage={bigShoe}
            />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero