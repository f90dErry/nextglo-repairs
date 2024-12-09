import Hero from '../components/Hero'
import ServiceOverview from '../components/ServiceOverview'
import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <>
      <div className=' m-3'>
        <Hero />
        <ServiceOverview />
        <Testimonials />
      </div>
    </>
  )
}

export default Home
