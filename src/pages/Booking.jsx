import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'
import { deviceModels } from '../data'

const Booking = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    deviceType: '',
    deviceModel: '',
    issueType: '',
    issueDescription: '',
    date: '',
  })

  const {
    fullName,
    email,
    phone,
    deviceType,
    deviceModel,
    issueType,
    issueDescription,
    date,
  } = formData

  const [isLoading, setIsLoading] = useState(false)

  const onChange = (e) => {
    const { name, value } = e.target

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
      ...(name === 'deviceType' && { deviceModel: '' }),
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const templateParams = {
        fullName,
        email,
        phone,
        deviceType,
        deviceModel,
        issueType,
        issueDescription,
        date,
      }

      await emailjs.send(
        'service_dzzletb',
        'template_hc53zjs',
        templateParams,
        'Q-E3wmSDPWa1VY3Ox'
      )
      toast.success('Booking successfull! We will contact you soon.')

      setFormData({
        fullName: '',
        email: '',
        phone: '',
        deviceType: '',
        deviceModel: '',
        issueType: '',
        issueDescription: '',
        date: '',
      })
    } catch (error) {
      console.error('Error:', error)
      toast.error('Booking Failed, Please try again')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='mx-auto p-4 bg-blue-50'>
      <header className='text-3xl font-bold text-center my-8 text-blue-900'>
        Book a Service
      </header>

      <p className='text-center mb-8 text-gray-700'>
        Please fill out the form below to book a service. We will get back to
        you as soon as possible.
      </p>

      <main className='md:flex md:mb-10 mb-8 md:justify-center md:w-[50%] md:mx-auto'>
        <form
          onSubmit={onSubmit}
          className='gap-5 grid-cols-1 md:gap-x-[70px] grid md:grid-cols-2 items-start font-sans text-blue-900'
        >
          <div className='mx-auto'>
            <label className='font-semibold'>Full Name</label>
            <input
              name='fullName'
              type='text'
              value={fullName}
              onChange={onChange}
              required
              placeholder='John Doe'
              className='block bg-gray-100 text-gray-900 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 w-72'
            />
          </div>

          <div className='mx-auto'>
            <label className='mb-2 font-semibold'>Email</label>
            <input
              type='email'
              name='email'
              value={email}
              onChange={onChange}
              required
              placeholder='example@email.com'
              className='block bg-gray-100 text-gray-900 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 w-72'
            />
          </div>

          <div className='mx-auto'>
            <label className='mb-2 font-semibold'>Telephone Number</label>
            <input
              type='tel'
              name='phone'
              value={phone}
              onChange={onChange}
              required
              placeholder='020 560 0915'
              className='block bg-gray-100 text-gray-900 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 w-72'
            />
          </div>

          <div className='mx-auto'>
            <label className='mb-2 font-semibold'> Device Type</label>
            <select
              name='deviceType'
              value={deviceType}
              required
              className='block bg-gray-100 text-gray-900 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 w-72'
              onChange={onChange}
            >
              <option>Select device type</option>
              {Object.keys(deviceModels).map((device) => (
                <option key={device} value={device}>
                  {device}
                </option>
              ))}
            </select>
          </div>

          <div className='mx-auto'>
            <label className='mb-2 font-semibold'> Device Model</label>
            <select
              name='deviceModel'
              value={deviceModel}
              required
              className='block bg-gray-100 text-gray-900 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 w-72'
              onChange={onChange}
            >
              <option>Select device Model</option>
              {deviceType &&
                deviceModels[deviceType].map((model) => (
                  <option key={model} value={model}>
                    {model}
                  </option>
                ))}
            </select>
          </div>

          <div className='mx-auto'>
            <label className='mb-2 font-semibold'>Issue Type</label>
            <select
              name='issueType'
              value={issueType}
              onChange={onChange}
              required
              className='block bg-gray-100 text-gray-900 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 w-72'
            >
              <option value=''>Select issue type</option>
              <option value='screen'>Screen Repair</option>
              <option value='battery'>Battery Replacement</option>
              <option value='software'>Software Issue</option>
              <option value='hardware'>Hardware Problem</option>
              <option value='water'>Water Damage</option>
              <option value='other'>Other</option>
            </select>
          </div>

          <div className='mx-auto'>
            <label className='mb-2 font-semibold'>Issue Description</label>
            <textarea
              name='issueDescription'
              value={issueDescription}
              onChange={onChange}
              className='block bg-gray-100 text-gray-900 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 w-72 h-[150px]'
            ></textarea>
          </div>

          {/* <div>
            <label className='mb-2 font-semibold'>Preferred Date</label>
            <input
              type='date'
              name='date'
              value={date}
              onChange={onChange}
              required
              className='block bg-gray-100 text-gray-900 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 w-64'
            />
          </div> */}

          <button
            type='submit'
            disabled={isLoading}
            className={`w-48 py-3 mx-auto md:mt-3 mt-2 rounded-lg transition-colors ${
              isLoading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-700 hover:bg-blue-800 text-xl  md:text-lg font-bold text-white'
            }`}
          >
            {isLoading ? 'Sending...' : 'Submit'}
          </button>
        </form>
      </main>
    </div>
  )
}

export default Booking
