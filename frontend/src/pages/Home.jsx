import { useState } from 'react'
import { Link } from 'react-router-dom'
import { main, arrow, shadow, activeusers, fashion, purpleDots, pinkDots, phone } from '../assets/home'
import Clap from '../components/Clap'

export default function Home() {
    return (
        <>
            <section className="padding pt-[1.4in] xl:pt-[1.6in] flex flex-col lg:flex-row justify-between relative min-h-[75vh]">
                <div className="flex flex-col xl:my-12 gap-6">
                    <h1 className="text-4xl lg:text-5xl lg:leading-tight xl:text-[4rem] max-w-[4.2in] xl:leading-tight leading-snug font-semibold"><span className='bg-primary bg-clip-text text-transparent'>Divide</span> your business<br /><Clap maxH='1em' classes='top-3' /> solutions.</h1>
                    <p className='text-[#4A454F] xl:text-md'>Make your work routine become easier and faster</p>
                    <CTA />
                </div>
                <MainImage />
            </section>
            <Stats />
            <Introduction order='right' img={fashion} title='Gain the most profits with our accessible and reliable products.' p='Our products are designed to help you improve your incomes and create a workspace for your ideas. You can either buy product from our store or order one specifically filling your needs.' />
            <Introduction order='left' img={fashion} title='Let us improve your productivity by increasing your speed.' p='We can help you with many things related to our field, anything between changing the color of the button to programming a website modified specifically for your expactations.' />
            <Opinions />
            <Steps />
            <Stats />
            <Questions />
        </>
    )
}

const CTA = () => {
    return (
        <div className="flex items-center flex-wrap gap-7 mt-2">
            <Link className='rounded-3xl py-2 px-6 hover:bg-[#6C25C3] hover:scale-105 transition duration-[250ms] bg-primary text-white flex items-center' to='/products'>Our services <img className='ml-2 max-h-[1em]' src={arrow} alt="" /></Link>
            <Link className='py-2 hover:text-primary transition duration-[250ms]' to='/support'>Contact</Link>
        </div>
    )
}

const MainImage = () => {
    return (
        <div className='lg:max-w-[58%] relative self-end ml-auto mt-8 md:mt-0'>
            <img src={main} alt='' />
            <img className='absolute -bottom-[2in] -z-10 w-[150%]' src={shadow} alt='' />
        </div>
    )
}

const Stats = () => {
    return (
        <div className='bg-primary padding xl:mb-12 py-12 xl:py-16 gap-12 flex flex-col md:grid md:grid-cols-2 xl:flex xl:justify-between xl:flex-row items-center'>
            <div className='grid grid-cols-auto max-w-max'>
                <div className='bg-[#ECECEE] rounded-full mr-4 h-16 w-16 flex items-center justify-center row-[1/3]'>
                    <img className='max-w-[50%] max-h-[50%]' src={activeusers} alt="" />
                </div>
                <h3 className='text-[#FAFAFA]/60 font-medium'>Clients</h3>
                <p className='text-[#FAFAFA] font-semibold text-2xl'>179</p>
            </div>
            <div className='grid grid-cols-auto max-w-max'>
                <div className='bg-[#ECECEE] rounded-full mr-4 h-16 w-16 flex items-center justify-center row-span-2'>
                    <img className='max-w-[50%] max-h-[50%]' src={activeusers} alt="" />
                </div>
                <h3 className='text-[#FAFAFA]/60 font-medium'>Products</h3>
                <p className='text-[#FAFAFA] font-semibold text-2xl'>134</p>
            </div>
            <div className='grid grid-cols-auto max-w-max'>
                <div className='bg-[#ECECEE] rounded-full mr-4 h-16 w-16 flex items-center justify-center row-span-2'>
                    <img className='max-w-[50%] max-h-[50%]' src={activeusers} alt="" />
                </div>
                <h3 className='text-[#FAFAFA]/60 font-medium'>Libraries</h3>
                <p className='text-[#FAFAFA] font-semibold text-2xl'>1</p>
            </div>
            <div className='grid grid-cols-auto max-w-max'>
                <div className='bg-[#ECECEE] rounded-full mr-4 h-16 w-16 flex items-center justify-center row-span-2'>
                    <img className='max-w-[50%] max-h-[50%]' src={activeusers} alt="" />
                </div>
                <h3 className='text-[#FAFAFA]/60 font-medium'>Websites</h3>
                <p className='text-[#FAFAFA] font-semibold text-2xl'>76</p>
            </div>
        </div>
    )
}

const Introduction = ({ order, img, title, p }) => {
    return (
        <section className='padding py-[1in] xl:py-[1.4in] flex flex-col'>
            <div className={`flex flex-col ${order === 'left' ? 'xl:flex-row-reverse' : 'xl:flex-row'} xl:items-center gap-28 md:gap-36 xl:gap-48`}>
                <div className='flex flex-col gap-6'>
                    <h2 className='text-4xl leading-normal font-semibold max-w-[6in] xl:max-w-[5in]'>{title}</h2>
                    <p className='text-[#4A454F] leading-loose max-w-[5.5in] xl:max-w-[4in]'>{p}</p>
                    <Link to='/products' className="rounded-3xl mt-2 max-w-max text-sm py-2 px-6 bg-primary text-white hover:bg-[#6C25C3] hover:scale-105 transition duration-[250ms]">Check out</Link>
                </div>
                <div className={order === 'left' ? 'xl:ml-[-12vw] 2xl:ml-[-18vw] lg:mr-auto relative' : 'xl:mr-[-12vw] 2xl:mr-[-18vw] lg:ml-auto relative'}>
                    <img className='shadow-outsideShadowPrimary rounded-3xl relative z-10' src={img} alt="" />
                    <div className={`${order === 'left' ? 'top-6 md:top-10 left-0 rounded-xl xl:rounded-br-xl w-[60%]' : 'bottom-4 md:bottom-10 right-0 rounded-xl xl:rounded-tl-xl w-[90%]'} bg-[#852FF2]/10 h-full absolute`} />
                    <img className={`absolute max-w-[20%] ${order === 'left' ? '-bottom-4 -right-4 md:-bottom-12 md:-right-12' : '-left-4 -bottom-4 md:-bottom-12 md:-left-12'}`} src={pinkDots} alt="" />
                    <img className={`absolute max-w-[20%] ${order === 'left' ? '-top-4 md:-top-10 left-[50%]' : '-top-6 md:-top-14 right-[50%]'}`} src={purpleDots} alt="" />
                </div>
            </div>
        </section>
    )
}

const Opinions = () => {
    return (
        <section className='padding py-12 xl:py-[1in] flex flex-col gap-16 bg-[#F7F5FA] mt-16'>
            <div className='flex items-center gap-8'>
                <Clap />
                <div className='flex flex-col gap-2'>
                    <h2 className='font-semibold text-2xl lg:text-4xl'>Our solutions</h2>
                    <h3 className='text-[#4A454F] lg:text-lg'>Designed to use on daily basis</h3>
                </div>
            </div>
            <div className='flex flex-col md:grid grid-cols-3 justify-between gap-10'>
                <div className='rounded-3xl shadow-outsideShadowPrimary p-7 flex flex-col gap-4 pb-[3rem]'>
                    <img className='max-w-full rounded-xl max-h-[3in] object-cover shadow-[0px_4px_60px_rgba(179,126,242,0.15)]' src='/images/fashion_project.png' alt="" />
                    <h3 className='font-semibold lg:text-xl mt-4'>Fashion Template</h3>
                    <p className='text-[#4A454F] leading-loose'>Fashion website template providing complex functionality and great UI / UX design.</p>
                    <Link to='/products/fashion-template-2' className="rounded-3xl mt-2 max-w-max text-sm py-2 px-6 bg-primary text-white hover:bg-[#6C25C3] hover:scale-105 transition duration-[250ms]">Check out</Link>
                </div>
                <div className='rounded-3xl shadow-outsideShadowPrimary p-7 flex flex-col gap-4'>
                    <img className='max-w-full rounded-xl max-h-[3in] object-cover shadow-[0px_4px_60px_rgba(179,126,242,0.15)]' src='/images/invoicegenerator_L2NF32n.PNG' alt="" /> 
                    <h3 className='font-semibold lg:text-xl mt-4'>Invoice Generator</h3>
                    <p className='text-[#4A454F] leading-loose'>Small web application with which you can generate invoices for payments in your business.</p>
                    <Link to='/products/invoice-generator-4' className="rounded-3xl mt-2 max-w-max text-sm py-2 px-6 bg-primary text-white hover:bg-[#6C25C3] hover:scale-105 transition duration-[250ms]">Check out</Link>
                </div>
                <div className='rounded-3xl shadow-outsideShadowPrimary p-7 flex flex-col gap-4'>
                    <img className='max-w-full rounded-xl max-h-[3in] object-cover shadow-[0px_4px_60px_rgba(179,126,242,0.15)]' src='/images/fashion_project.png' alt="" />
                    <h3 className='font-semibold lg:text-xl mt-4'>ControlJS</h3>
                    <p className='text-[#4A454F] leading-loose'>Tiny library for animations in ReactJS allowing developers to import the Control component.</p>
                    <a target='_blank' href='https://github.com/ostrekodowanie/ControlJS' className="rounded-3xl mt-2 max-w-max text-sm py-2 px-6 bg-primary text-white hover:bg-[#6C25C3] hover:scale-105 transition duration-[250ms]">Check out</a>
                </div>
            </div> 
        </section>
    )
}

const Steps = () => {
    return (
        <section className='padding py-[1in] xl:py-[1.4in] flex flex-col xl:flex-row gap-8 xl:gap-[1.6in] justify-center'>
            <div className='flex flex-col gap-8'>
                <h2 className='flex flex-col font-semibold mb-6 xl:mb-12 md:gap-4 text-3xl md:text-[2.6rem]'>
                    <span>Divide your tasks</span>
                    <span>into <span className='bg-primary bg-clip-text text-transparent'>smaller steps</span></span>
                </h2>
                <div className='bg-transparent h-[2.5in] xl:h-[3.5in] w-[0.35rem] items-center rounded-full flex flex-col justify-between'>
                    <div className='relative bg-primary rounded-full flex h-5 w-5 border-[2px] shadow-[0px_10px_28px_rgba(43,40,239,0.5)] border-white'>
                        <div className='absolute left-12 xl:left-[0.6in] -mt-2 flex flex-col gap-2'>
                            <h3 className='font-medium text-lg xl:text-2xl'>Discover our product</h3>
                            <p className='sm:w-[3in] w-[2.5in] text-sm xl:text-base text-[#A1A1A1] leading-relaxed'>Choose from products designed to help you maximize your results.</p>
                        </div>
                    </div>
                    <div className='relative bg-primary rounded-full flex h-5 w-5 border-[2px] shadow-[0px_10px_28px_rgba(43,40,239,0.5)] border-white'>
                        <div className='absolute left-12 xl:left-[0.6in] -mt-2 flex flex-col gap-2'>
                            <h3 className='font-medium text-lg xl:text-2xl'>Learn to use</h3>
                            <p className='sm:w-[3in] w-[2.5in] text-sm xl:text-base text-[#A1A1A1] leading-relaxed'>Easy to use products allow you to use them always the same way.</p>
                        </div>
                    </div>
                    <div className='relative bg-primary rounded-full flex h-5 w-5 border-[2px] shadow-[0px_10px_28px_rgba(43,40,239,0.5)] border-white'>
                        <div className='absolute left-12 xl:left-[0.6in] -mt-2 flex flex-col gap-2'>
                            <h3 className='font-medium text-lg xl:text-2xl'>Make your work easier</h3>
                            <p className='sm:w-[3in] w-[2.5in] text-sm xl:text-base text-[#A1A1A1] leading-relaxed'>As far as you purchase one of our products, you will always have a tool making it easier.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative bg-transparent mt-20 xl:mt-0">
                <img className='absolute -bottom-8 -left-8' src={purpleDots} alt="" />
                <img className='max-h-[7in] border-[5px] border-[#ECECEC]/30 rounded-2xl relative z-10 shadow-outsideShadowPrimary' src={phone} alt="" />
             </div>
        </section>
    )
}

const questions = [
    {
        question: 'How can I order a product tailored specifically for myself?',
        answer: "You can reach out to us through our contact form or write via email divideproject.business@gmail.com."
    },
    {
        question: 'How much time do I have to wait to get the access to the purchased app?',
        answer: "Usually you'll get your product instantly after you pay for it, but in some instances there can be some delay between purchase and access."
    },
    {
        question: 'How much time do I have to wait to get the access to the purchased app?',
        answer: "Usually you'll get your product instantly after you pay for it, but in some instances there can be some delay between purchase and access."
    },
    {
        question: 'How much time do I have to wait to get the access to the purchased app?',
        answer: "Usually you'll get your product instantly after you pay for it, but in some instances there can be some delay between purchase and access."
    },
]

const Questions = () => {
    const [active, setActive] = useState(null)

    return (
        <section className='padding py-[1in] xl:py-[1.4in] flex flex-col bg-background relative'>
            <h2 className='text-2xl lg:text-4xl font-semibold mb-8'>Frequently Asked Questions</h2>
            <img className='absolute right-[7vw] md:right-[10vw] 2xl:right-[15vw] bottom-12 xl:bottom-24' src={purpleDots} alt="" />
            <img className='absolute left-[6vw] md:left-[9vw] 2xl:left-[14vw] top-[2.6in]' src={purpleDots} alt="" />
            <div className='rounded-3xl overflow-hidden'>
                {questions.map((question, i) => <Question {...question} i={i} active={i === active ? true : false} setActive={setActive} key={i}/>)}
            </div>
        </section>
    )
}

const Question = props => {
    return (
        <div className={`flex flex-col gap-3 transition relative ${props.active ? 'bg-white shadow-outsideShadowPrimary z-10 p-8': 'bg-background py-4 px-8'}`}>
            <div className='flex items-center justify-between'>
                <h3 className={`${props.active ? 'text-black font-medium' : 'text-[#17131C]/40'} text-xl transition`}>{props.question}</h3>
                <button className='h-12 w-12 text-primary text-xl font-medium rounded-full bg-[#E9DAFC]' onClick={() => props.active ? props.setActive(null) : props.setActive(props.i)}>
                    {props.active ? '-' : '+'}
                </button>
            </div>
            {props.active && <div className='flex gap-4 profile-menu'>
                <div className='w-4 mt-4 h-[2px] bg-primary' />
                <p className='inter font-medium text-[#4A454F] max-w-[5in] leading-loose'>{props.answer}</p>    
            </div>}
        </div>
    )
}