import { useState } from 'react'
import emailjs from '@emailjs/browser'

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
  const [message, setMessage] = useState({ text: '', type: '' })

  const onchange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.fullName]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <header>Book a Service</header>

      <main>
        <form onSubmit={onSubmit}></form>
      </main>
    </div>
  )
}

export default Booking
