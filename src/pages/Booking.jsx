import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'

const deviceModels = {
  iPhone: [
    '5',
    '5s',
    '6',
    '6+',
    '6s',
    '6s+',
    '7',
    '7+',
    '8',
    '8+',
    'X',
    'Xs',
    'Xr',
    'Xsmax',
    '11',
    '11Pro',
    '11PM',
    '12',
    '12Mini',
    '12Pro',
    '12PM',
    '13',
    '13Mini',
    '13Pro',
    '13PM',
    '14',
    '14Plus',
    '14Pro',
    '14PM',
    '15',
    '15Plus',
    '15Pro',
    '15PM',
    '16',
    '16Plus',
    '16Pro',
    '16PM',
  ],
  iPad: ['iPad Pro', 'iPad', 'iPad mini', 'iPad Air', 'iPad mini 4'],
  MacBook: ['MacBook Pro', 'MacBook Air', 'MacBook'],
  Laptop: ['Lenovo', 'HP', 'Dell', 'Samsung'],
  Desktop: ['iMac', 'Windows', 'Mac Mini'],
}

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
    console.log(name, value)

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
        from_name: fullName,
        from_email: email,
        phone: phone,
        device_type: deviceType,
        device_model: deviceModel,
        issue_type: issueType,
        message: issueDescription,
        preferred_date: date,
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
    <div className='max-w2xl mx-auto p-4'>
      <header className='text-3xl font-bold text-center mb-8'>
        Book a Service
      </header>

      <main>
        <form onSubmit={onSubmit} className='space-y-6'>
          <div>
            <label className=''>Full Name</label>
            <input
              name='fullName'
              type='text'
              value={fullName}
              onChange={onChange}
              required
              className=''
            />
          </div>

          <div>
            <label className=''>Email</label>
            <input
              type='email'
              name='email'
              value={email}
              onChange={onChange}
              required
              className=''
            />
          </div>

          <div>
            <label className=''>Telephone Number</label>
            <input
              type='tel'
              name='phone'
              value={phone}
              onChange={onChange}
              required
              className=''
            />
          </div>

          <div>
            <label className=''> Device Type</label>
            <select
              name='deviceType'
              value={deviceType}
              required
              className=''
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

          <div>
            <label className=''> Device Model</label>
            <select
              name='deviceModel'
              value={deviceModel}
              required
              className=''
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

          <div>
            <label className=''>Issue Type</label>
            <select
              name='issueType'
              value={issueType}
              onChange={onChange}
              required
              className=''
            >
              <option value=''>Select issue type</option>
              <option value='screen'>Screen Repair</option>
              <option value='battery'>Battery Replacement</option>
              <option value='software'>Software Issue</option>
              <option value='hardware'>Hardware Problem</option>
              <option value='other'>Other</option>
            </select>
          </div>

          <div>
            <label className=''>Issue Description</label>
            <textarea
              name='issueDescription'
              value={issueDescription}
              onChange={onChange}
              className=''
            ></textarea>
          </div>

          <div>
            <label className=''>Preferred Date</label>
            <input
              type='date'
              name='date'
              value={date}
              onChange={onChange}
              required
              className=''
            />
          </div>

          <button
            type='submit'
            disabled={isLoading}
            className={`w-full py-2 px-4 rounded transition-colors ${
              isLoading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-500 hover:bg-blue-600 text-white'
            }`}
          >
            {isLoading ? 'Sending...' : 'Book Service'}
          </button>
        </form>
      </main>
    </div>
  )
}

export default Booking
