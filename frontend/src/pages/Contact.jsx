import Clap from "../components/Clap"
import { shadow } from '../assets/home'
import contact from '../assets/contact.png'
import { useState } from "react"
import axios from "axios"
import { useState } from "react"

export default function Contact() {
    return (
        <section className="padding pt-[1.4in] xl:pt-[1.8in] flex flex-col xl:flex-row justify-between relative xl:gap-12 min-h-screen">
            <div className='flex flex-col xl:max-w-[45%]'>
                <div className="flex items-center gap-x-4 mb-8 lg:gap-x-8">
                    <Clap maxH='auto' classes='' />
                    <h1 className="text-2xl lg:text-4xl lg:leading-tight max-w-[4.2in] xl:leading-tight leading-snug font-semibold flex flex-col">Do you have<span className='text-primary'>a question?</span></h1>
                </div>
                <Form />
            </div>
            <ContactImage />
        </section>
    )
}

const ContactImage = () => {
    return (
        <div className='xl:max-w-[60%] relative xl:self-end mx-auto xl:ml-auto mt-8 xl:mt-0'>
            <img src={contact} alt='' />
            <img className='absolute -bottom-[2in] -z-10 w-[150%]' src={shadow} alt='' />
        </div>
    )
}

const Form = () => {
    const [info, setInfo] = useState({
        name: '',
        surname: '',
        email: '',
        phone_number: '',
        message: ''
    })

    const handleSubmit = async e => {
        e.preventDefault()
        const response = await axios.post('/api/contact', JSON.stringify(info), {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if(response.status === 200) return setAlert('Message has been sent!')
        return setAlert('Error')
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col md:grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
                <label htmlFor="name">Name</label>
                <input className="rounded-3xl px-6 py-2 shadow-outsideShadowPrimary" onChange={e => setInfo({...info, name: e.target.value})} type="text" name="name" id="name" placeholder="Josh" />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="surname">Surname</label>
                <input className="rounded-3xl px-6 py-2 shadow-outsideShadowPrimary" onChange={e => setInfo({...info, surname: e.target.value})} type="text" name="surname" id="surname" placeholder="Davis" />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="email">Email</label>
                <input className="rounded-3xl px-6 py-2 shadow-outsideShadowPrimary" onChange={e => setInfo({...info, email: e.target.value})} type="email" name="email" id="email" placeholder="example@mail.com" />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="phone">Phone Number</label>
                <input className="rounded-3xl px-6 py-2 shadow-outsideShadowPrimary" onChange={e => setInfo({...info, phone_number: e.target.value})} type="tel" name="phone" id="phone" placeholder="756 287 492" />
            </div>
            <div className="flex flex-col gap-2 col-span-2">
                <label htmlFor="message">Message</label>
                <textarea className="rounded-3xl px-6 py-4 shadow-outsideShadowPrimary min-h-[3in] xl:min-h-[2in]" onChange={e => setInfo({...info, message: e.target.value})} name="message" id="message" placeholder="Write your message here..." />
            </div>
            <button className="rounded-3xl py-2 px-6 max-w-max mt-8 bg-primary text-white hover:bg-[#6C25C3] hover:scale-105 transition duration-[250ms]">Send Message</button>
        </form>
    )
}