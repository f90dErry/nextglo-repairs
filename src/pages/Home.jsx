import Hero from '../components/Hero'
import ServiceOverview from '../components/ServiceOverview'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <>
      <div className='font-sans '>
        <Hero />
        <ServiceOverview />

        <div className='py-8 md:py-12 px-4 bg-blue-400'>
          <h2 className=' text-2xl md:text-3xl text-white font-bold text-center mb-5'>
            What Our Client Say
          </h2>
        </div>
        {/* <Slider /> */}
      </div>
    </>
  )
}

export default Home
