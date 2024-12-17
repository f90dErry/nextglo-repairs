import { useState } from 'react'

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
