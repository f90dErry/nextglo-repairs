const Testimonials = ({ item }) => {
  return (
    <div className='w-full md:w-2/3 lg:w-2/3'>
      <div
        key={item.name}
        className='bg-white p-6 h-[30vh] md:h-[25vh] rounded-lg shadow-md'
      >
        <div className='flex items-center'>
          <img
            src={item.image}
            alt={item.name}
            className='w-12 h-12 rounded-full mr-4 object-cover'
          />
          <h3 className='font-semibold'>{item.name}</h3>
        </div>

        <p className='text-gray-700 mt-5 '> {item.text} </p>
        <h3 className='font-semibold pt-2'>{item.location}</h3>
      </div>
    </div>
  )
}

export default Testimonials
