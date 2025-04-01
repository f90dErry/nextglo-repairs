import addo from './assets/images/addo.jpg'
import baweezy from './assets/images/baweezy.jpg'
import sleepingKen from './assets/images/sleepingKen.jpg'
import auntie5g from './assets/images/auntie5g.jpg'
import $40m from './assets/images/$40m.jpg'
import Staycation from './assets/images/1yr.jpg'
import { FaWhatsapp } from 'react-icons/fa'
import { MdOutlineMail } from 'react-icons/md'
import { LiaBusinessTimeSolid } from 'react-icons/lia'
import { BsTwitterX } from 'react-icons/bs'
import { SiWhatsapp } from 'react-icons/si'
import { FaFacebookF } from 'react-icons/fa6'
import { FiInstagram } from 'react-icons/fi'
import iPhone16 from './assets/images/iPhone16.jpg'
import M4mac from './assets/images/M4mac.jpg'
import iPadpro from './assets/images/iPadpro.jpg'
import iwatch from './assets/images/iwatch.jpg'

// testimonials section
export const clients = [
  {
    name: 'Addo Dee',
    image: addo,
    text: 'Fast and reliable service! My iPhone stopped charging, and they fixed it within 30 minutes. Highly recommend!',
  },
  {
    name: 'Baweezy',
    image: baweezy,
    text: 'I was worried about my iPad’s cracked screen, but they replaced it quickly and at a great price. Excellent work!',
  },
  {
    name: 'Ken Ofori-Atta',
    image: sleepingKen,
    text: 'Superb experience! My MacBook had a keyboard issue, and they fixed it in no time. Great customer service!',
  },
  {
    name: 'Auntie 5G',
    image: auntie5g,
    text: 'They saved my phone! I had water damage, and they managed to restore it completely. Amazing work!',
  },
  {
    name: '$40M Theif',
    image: $40m,
    text: 'Quick and professional. My iPad battery wasn’t lasting, and they replaced it the same day. Works perfectly now!',
  },
  {
    name: '1yr Staycation',
    image: Staycation,
    text: 'Top-notch service! My laptop was running slow, and they upgraded the SSD, making it super fast. Very happy!',
  },
]

// Booking page
export const deviceModels = {
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
    'SE gen1',
    'SE gen2',
    'SE gen3',
  ],
  iPad: ['iPad Pro', 'iPad', 'iPad mini', 'iPad Air', 'iPad mini 4'],
  MacBook: ['MacBook Pro', 'MacBook Air', 'MacBook'],
  Laptop: ['Lenovo', 'HP', 'Dell', 'Samsung'],
  Desktop: ['iMac', 'Windows', 'Mac Mini'],
  Watch: [
    'Series 1',
    'Series 2',
    'Series 3',
    'Series 4',
    'Series 5',
    'Series 6',
    'Series 7',
    'Series 8',
    'Series 9',
    'Series 10',
    'Ultra 1',
    'Ultra 2',
    'SE gen1',
    'SE gen2',
  ],
}

// constact us page
export const topSection = [
  {
    name: 'WhatsApp',
    icon: FaWhatsapp,
    tel: '+233 20 560 0915',
  },
  {
    name: 'Email Us',
    icon: MdOutlineMail,
    email: 'nextglolab@gmail.com',
  },
  {
    name: 'Opening Hours',
    icon: LiaBusinessTimeSolid,
    tel: 'Mon - Sat: 8:00am - 8:00pm',
  },
]

// Footer
export const footerElements = [
  { link: '/', linkName: 'Home' },
  { link: '/about-us', linkName: 'About Us' },
  { link: '/services', linkName: 'Services' },
  { link: '/booking', linkName: 'Booking' },
  { link: '/contact-us', linkName: 'Contact Us' },
]

export const socialIcons = [
  {
    path: 'https://www.instagram.com/nextglostores/',
    name: 'Instagram',
    icon: FiInstagram,
  },
  { path: 'https://x.com/nextglo', name: 'X (Twitter)', icon: BsTwitterX },
  {
    path: 'https://web.facebook.com/nextglo/?_rdc=1&_rdr',
    name: 'Facebook',
    icon: FaFacebookF,
  },
  {
    path: 'https://www.instagram.com/nextglostores/',
    name: 'Whatsapp',
    icon: SiWhatsapp,
  },
]

// Navbar
export const navElements = [
  { link: '/', linkName: 'Home' },
  { link: '/about-us', linkName: 'About Us' },
  { link: '/services', linkName: 'Services' },
  { link: '/booking', linkName: 'Booking' },
  { link: '/contact-us', linkName: 'Contact Us' },
]

// Services page
export const services = [
  {
    id: 1,
    title: 'iPhone Repair',
    test: '',
    image: iPhone16,
  },
  {
    id: 2,
    title: 'Laptop Repair',
    test: '',
    image: M4mac,
  },
  {
    id: 3,
    title: 'iPad Repair',
    test: '',
    image: iPadpro,
  },
  {
    id: 4,
    title: 'Smart Watch Repair',
    test: '',
    image: iwatch,
  },
]
export const notes = [
  {
    title: 'Screen Repair',
    note: `A cracked or shattered screen can disrupt the functionality and appearance of your device. Our technicians use premium-quality replacement screens to restore the display’s clarity and touch responsiveness. Repairs are completed with precision, ensuring your device looks and works like new.`,
  },
  {
    title: 'Water Damage',
    note: `Spilled water or accidental submersion can cause internal damage to your device. Our technicians perform thorough diagnostics, clean corrosion, and repair or replace damaged components to restore your device’s functionality and prevent further issues.`,
  },
  {
    title: 'Battery Replacement',
    note: `Is your device draining quickly or shutting down unexpectedly? A faulty battery can impact performance and usability. We replace old batteries with high-quality, durable ones, ensuring your device runs efficiently and lasts longer throughout the day.`,
  },
  {
    title: 'Hardware Issue',
    note: `Faulty buttons, damaged ports, or malfunctioning components can limit your device's capabilities. With advanced tools and expertise, we repair or replace defective hardware to bring your device back to full functionality, ensuring long-lasting performance.`,
  },
  {
    title: 'Software Issue',
    note: `Experiencing freezing, app crashes, or operating system errors? Software glitches can disrupt your workflow. Our experts diagnose and resolve these issues by reinstalling or updating software, removing bugs, and optimizing performance to restore smooth functionality.`,
  },
  {
    title: 'Other',
    note: `Not sure what’s wrong with your device? From unusual sounds to unexplained malfunctions, we’re here to help. Our skilled team conducts comprehensive diagnostics to identify and fix any issue, providing a tailored solution to get your device working perfectly again.`,
  },
]
