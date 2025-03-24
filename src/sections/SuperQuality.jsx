import { shoe8 } from "../assets/images"
import Button from "../components/Button"
const SuperQuality = () => {
  return (
    <section id="about-us" className="max-container max-sm:mt-10 flex-col lg:flex-row flex gap-6 lg:gap-10 items-center justify-between">
      <div className="flex flex-col justify-start gap-5">
        <h1 className="font-bold font-palanquin text-4xl max-w-xl">We Provide You <span className="text-coral-red ">Super Quality</span> Shoes</h1>
        <p className="text-lg font-montserrat text-slate-gray max-w-lg leading-8">
        Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.
        </p>

        <p className="text-lg font-montserrat text-slate-gray max-w-lg leading-8">
        Our dedication to detail and excellence ensures your satisfaction
        </p>
      <div className="mt-6">
      <Button label="View Details"/>
      </div>
      </div>

      <div className="max-sm:mt-5">
        <img src={shoe8}/>
      </div>
    </section>
  )
}

export default SuperQuality