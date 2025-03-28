import Hero from '../components/Hero'
import ServiceOverview from '../components/ServiceOverview'
import Testimonials from '../components/Testimonials'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <>
      <div className='font-sans '>
        <Hero />
        <ServiceOverview />
        <Slider />
      </div>
    </>
  )
}

export default Home
