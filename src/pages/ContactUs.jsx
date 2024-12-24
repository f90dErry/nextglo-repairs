import { FaWhatsapp } from 'react-icons/fa'
import { MdOutlineMail } from 'react-icons/md'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'

const ContactUs = () => {
  const topSection = [
    { name: 'WhatsApp', icon: FaWhatsapp, tel: '+233 20 560 0915' },
    {
      name: 'Email Us',
      icon: MdOutlineMail,
      email: 'nextglolab@gmail.com',
    },
  ]

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const { name, email, subject, message } = formData

  const [isLoading, setIsLoading] = useState(false)

  const onChange = (e) => {
    const { name, value } = e.target

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const templateParams = {
        name,
        email,
        subject,
        message,
      }

      await emailjs.send(
        'service_w9ncwyr',
        'template_co9j8c2',
        templateParams,
        'Q-E3wmSDPWa1VY3Ox'
      )
      toast.success('Message sent successfully')

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
    } catch (error) {
      toast.error('Message not sent. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='font-sans bg-blue-50'>
      <header className='text-center py-10'>
        <h1 className='text-3xl font-bold text-blue-800'>Contact Us</h1>
        <p className='mx-5 my-3 text-gray-500 font-medium'>
          We are available 24/7 to answer your questions. Feel free to reach out
          to us.
        </p>
      </header>

      <section className=' md:flex md:justify-center md:gap-52 py-10 bg-white mx-auto'>
        <div className='flex flex-col gap-10 mx-5'>
          {topSection.map((item) => (
            <div>
              <p className='text-lg font-bold text-blue-800 flex gap-3 items-center'>
                <item.icon className='text-blue-800' />
                {item.name}
              </p>
              <p className='font-medium text-gray-500'>{item.tel}</p>
              <p className='font-medium text-gray-500'>{item.email}</p>
            </div>
          ))}
        </div>

        <form className='mt-16 mb-4 md:my-0 md:w-[600px] ' onSubmit={onSubmit}>
          <div className='flex flex-col gap-4 mx-5 md:grid md:grid-cols-2 md:gap-3'>
            <input
              type='text'
              placeholder='Name'
              className='bg-blue-50 border-none rounded-md p-3'
              onChange={onChange}
              name='name'
              value={name}
            />
            <input
              type='email'
              placeholder='Email'
              className='bg-blue-50 border-none rounded-md p-3'
              onChange={onChange}
              name='email'
              value={email}
            />
            <input
              type='email'
              placeholder='Subject'
              className='bg-blue-50 border-none rounded-md p-3 col-span-2'
              onChange={onChange}
              name='subject'
              value={subject}
            />
            <textarea
              placeholder='Message'
              className='bg-blue-50 border-none h-52 rounded-md mb-4 col-span-2'
              onChange={onChange}
              name='message'
              value={message}
            />
            <button
              type='submit'
              disabled={isLoading}
              className={`text-white p-3 rounded-lg font-bold w-[150px] transition-colors ${
                isLoading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'md:bg-blue-800 md:hover:bg-blue-700 bg-blue-800 md:text-lg font-bold text-white'
              }`}
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default ContactUs
