import Hero from '../components/Hero'
import ServiceOverview from '../components/ServiceOverview'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <>
      <div className='font-sans '>
        <Hero />
        <ServiceOverview />

        <div className='py-8 md:py-12 px-4 bg-slate-200 md:px-44'>
          <h2 className=' text-2xl md:text-3xl text-blue-800 font-bold text-center mb-5'>
            What Our Client Say
          </h2>
          <Slider />
        </div>
      </div>
    </>
  )
}

export default Home
