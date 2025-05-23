import React from 'react'
import { offer } from '../assets/images'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} width={773} height={687} className="object-contain w-full"/>
      </div>
      <div className="flex flex-col justify-start gap-5">
        <h1 className="font-bold font-palanquin text-4xl max-w-xl"><span className="text-coral-red ">Special</span> Offers</h1>
        <p className="text-lg font-montserrat text-slate-gray max-w-lg leading-8">
        Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalled value that sets us apart.
        </p>

        <p className="text-lg font-montserrat text-slate-gray max-w-lg leading-8">
          Navigate a realm of possibilities designed to fulfil your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.
        </p>
      <div className="mt-6 flex flex-wrap gap-4">
      <Button label="Shop Now" iconUrl={arrowRight}/>
      <Button label="Learn more" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray"/>
      </div>
      </div>
    </section>
  )
}

export default SpecialOffer