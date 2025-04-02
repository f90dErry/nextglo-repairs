import { experience } from '../data'

const Experience = () => {
  return (
    <div className='py-8 md:py-12 px-4 md:px-44'>
      <h1>Experience the best Gadget Repair Service in Ghana</h1>

      {experience.map((item, index) => (
        <div key={index} className='flex gap-3 flex-col md:flex-row'>
          <div className='flex flex-col items-center justify-center gap-4 p-4 bg-red-600 '>
            <item.icon className='text-6xl rounded-full p-2 text-blue-800 bg-blue-200' />
            <h4>{item.title}</h4>
            <p className='text-center'>{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Experience
