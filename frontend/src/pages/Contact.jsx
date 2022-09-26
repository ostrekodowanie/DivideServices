import Clap from "../components/Clap"
import { shadow } from '../assets/home'

export default function Contact() {
    return (
        <section className="padding pt-[1.4in] xl:pt-[2.2in] flex flex-col lg:flex-row justify-between relative">
            <div className='flex flex-col'>
                <div className="flex items-center gap-x-4 lg:gap-x-8">
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
        <div className='lg:max-w-[60%] relative self-end ml-auto mt-8 md:mt-0'>
            <img className='absolute -bottom-[2in] -z-10 w-[150%]' src={shadow} alt='' />
        </div>
    )
}

const Form = () => {
    return (
        <form></form>
    )
}