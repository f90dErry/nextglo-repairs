import { experience } from '../data'

const Experience = () => {
  return (
    <div className='py-8 md:py-12 px-3 md:px-44'>
      <h1 className='text-2xl font-bold text-center text-blue-800 pb-2'>
        Experience the best Gadget Repair Service in Ghana
      </h1>

      <div className='flex flex-col md:flex-row gap-4'>
        {experience.map((item, index) => (
          <div key={index} className='md:w-1/4 h-auto'>
            <div className='flex flex-col items-center justify-center gap-2 px-4 py-6 bg-slate-600'>
              <item.icon className='text-6xl rounded-full p-2 text-blue-800 bg-blue-200' />
              <h4 className='font-semibold'>{item.title}</h4>
              <p className='text-center'>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
