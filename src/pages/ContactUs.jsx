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
        <h1 className='text-4xl font-bold text-blue-800'>Contact Us</h1>
        <p className='mx-5 my-3 text-gray-500 font-medium'>
          We are available 24/7 to answer your questions. Feel free to reach out
          to us.
        </p>
      </header>

      <section className=' md:flex md:justify-center md:gap-52 py-10 bg-white mx-auto'>
        <div className='flex flex-col gap-10 mx-5'>
          {topSection.map((item) => (
            <div key={item.name}>
              <p className='text-xl font-bold text-blue-800 flex gap-3 items-center'>
                <item.icon className='text-blue-800' />
                {item.name}
              </p>
              <p className='font-medium text-gray-500'>{item.tel}</p>
              <p className='font-medium text-gray-500'>{item.email}</p>
            </div>
          ))}
        </div>

        <form className='mt-16 mb-4 md:my-0 md:w-[600px] ' onSubmit={onSubmit}>
          <div className='flex flex-col gap-4 mx-5 md:grid md:grid-cols-2 md:gap-4 md:gap-y-6'>
            <input
              type='text'
              placeholder='Name'
              className='bg-blue-50 border-none rounded-md p-3 md:p-5'
              onChange={onChange}
              name='name'
              value={name}
            />
            <input
              type='email'
              placeholder='Email'
              className='bg-blue-50 border-none rounded-md p-3 md:p-5'
              onChange={onChange}
              name='email'
              value={email}
            />
            <input
              type='text'
              placeholder='Subject'
              className='bg-blue-50 border-none rounded-md p-3 md:p-5 col-span-2'
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

      <section className='flex flex-col md:flex-row items-center md:items-start justify-center md:gap-52 mx-auto '>
        <div className='my-8'>
          <h2 className='text-center text-3xl font-bold text-blue-800'>
            Find Us
          </h2>
          <p className='text-center text-gray-500 font-medium my-5 '>
            We are located at the following address
            <br />
            New Road, Madina <br />
            Accra Ghana
          </p>
        </div>

        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.3340966811993!2d-0.16740412409692773!3d5.664733994316726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9cbf1848b629%3A0x2408dff829db5d2f!2sNEXTGLO!5e0!3m2!1sen!2sgh!4v1735057124666!5m2!1sen!2sgh'
          className='md:w-[900px] pb-6 md:py-10 md:h-[450px] filter grayscale w-[350px] h-[400px] '
          allowFullScreen=''
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
      </section>
    </div>
  )
}

export default ContactUs
