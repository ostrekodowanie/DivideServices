import { useState } from 'react'
import { Link } from 'react-router-dom'
import { main, arrow, shadow, activeusers } from '../assets/home'
import Clap from '../components/Clap'

export default function Home() {
    return (
        <>
            <section className="padding pt-[1.4in] xl:pt-[2.2in] flex flex-col lg:flex-row justify-between relative min-h-[70vh]">
                <div className="flex flex-col gap-8">
                    <h1 className="text-4xl lg:text-5xl lg:leading-tight xl:text-[4rem] max-w-[4.2in] xl:leading-tight leading-snug font-semibold"><span className='text-primary'>Divide</span> your business<br /><Clap classes={'top-3'} /> solutions.</h1>
                    <p className='text-[#4A454F] font-medium xl:text-md max-w-[3.5in]'>Make your work routine become easier and faster</p>
                    <CTA />
                </div>
                <MainImage />
            </section>
            <Stats />
            <Steps />
        </>
    )
}

const CTA = () => {
    return (
        <div className="flex items-center flex-wrap gap-4 mt-2">
            <Link className='rounded-3xl py-2 px-6 hover:bg-[#6C25C3] hover:scale-105 transition duration-[250ms] bg-primary text-white flex items-center' to='/services'>Our services <img className='ml-2 max-h-[1em]' src={arrow} alt="" /></Link>
            <Link className='py-2 px-6 hover:text-primary transition duration-[250ms]' to='/contact'>Contact</Link>
        </div>
    )
}

const MainImage = () => {
    return (
        <div className='lg:max-w-[60%] relative self-end ml-auto mt-8 md:mt-0'>
            <img src={main} alt='' />
            <img className='absolute -bottom-[2in] -z-10 w-[150%]' src={shadow} alt='' />
        </div>
    )
}

const Stats = () => {
    return (
        <div className='bg-primary padding py-12 md:py-16 xl:py-20 gap-12 flex flex-col md:grid md:grid-cols-2 xl:flex xl:justify-between xl:flex-row items-center'>
            <div className='grid grid-cols-auto max-w-max'>
                <div className='bg-secondary rounded-full mr-4 h-16 w-16 flex items-center justify-center row-[1/3]'>
                    <img className='max-w-[50%] max-h-[50%]' src={activeusers} alt="" />
                </div>
                <h3 className='text-[#FAFAFA]/60'>Clients</h3>
                <p className='text-[#FAFAFA] font-semibold text-2xl'>941</p>
            </div>
            <div className='grid grid-cols-auto max-w-max'>
                <div className='bg-secondary rounded-full mr-4 h-16 w-16 flex items-center justify-center row-span-2'>
                    <img className='max-w-[50%] max-h-[50%]' src={activeusers} alt="" />
                </div>
                <h3 className='text-[#FAFAFA]/60'>Projects</h3>
                <p className='text-[#FAFAFA] font-semibold text-2xl'>187</p>
            </div>
            <div className='grid grid-cols-auto max-w-max'>
                <div className='bg-secondary rounded-full mr-4 h-16 w-16 flex items-center justify-center row-span-2'>
                    <img className='max-w-[50%] max-h-[50%]' src={activeusers} alt="" />
                </div>
                <h3 className='text-[#FAFAFA]/60'>Clients</h3>
                <p className='text-[#FAFAFA] font-semibold text-2xl'>12.000</p>
            </div>
            <div className='grid grid-cols-auto max-w-max'>
                <div className='bg-secondary rounded-full mr-4 h-16 w-16 flex items-center justify-center row-span-2'>
                    <img className='max-w-[50%] max-h-[50%]' src={activeusers} alt="" />
                </div>
                <h3 className='text-[#FAFAFA]/60'>Clients</h3>
                <p className='text-[#FAFAFA] font-semibold text-2xl'>12.000</p>
            </div>
        </div>
    )
}

const scrollerSteps = [
    {
        title: 'Headline Name',
        p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum purus massa venenatis, gravida. Cursus scelerisque adipiscing venenatis et integer duis a eu viverra. Scelerisque non pharetra pharetra, blandit.'
    },
    {
        title: 'Headline Name',
        p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum purus massa venenatis, gravida. Cursus scelerisque adipiscing venenatis et integer duis a eu viverra. Scelerisque non pharetra pharetra, blandit.'
    },
    {
        title: 'Headline Name',
        p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum purus massa venenatis, gravida. Cursus scelerisque adipiscing venenatis et integer duis a eu viverra. Scelerisque non pharetra pharetra, blandit.'
    },
]

const Scroller = props => {
    return (
        <div className={`pl-8 py-6 md:py-10 md:pl-20 flex flex-col gap-4 ${props.active === props.id ? 'bg-insideShadowPrimary' : 'bg-insideShadowGray'}`}>
            <h4 className='text-primary'>Step {props.id + 1}</h4>
            <h3 className='font-semibold text-2xl md:text-3xl'>{props.title}</h3>
            <p className='text-[#4A454F] max-w-md leading-relaxed'>{props.p}</p>
        </div>
    )
}

const Steps = () => {
    const [active, setActive] = useState(0)
    return (
        <section className='padding py-[1in] xl:py-[1.4in] flex flex-col gap-8 justify-center'>
            <h2 className='grid grid-cols-auto items-center gap-x-4 md:gap-y-2 md:mb-8 font-semibold text-xl'>
                <span className='text-6xl md:text-8xl text-primary row-[1/3]'>3</span>
                <span className='md:text-3xl md:self-end'>Divide your work tasks</span>
                <span className='md:text-3xl md:self-start'>into smaller steps</span>
            </h2>
            <div className='flex'>
                <div className='bg-[#F9F5FE] rounded-md w-3 justify-self-stretch grid grid-rows-[repeat(3,1fr)]'>
                    <div className='bg-primary rounded-md'></div>
                </div>
                <div className='flex flex-col w-full'>
                    {scrollerSteps.map((step, i) => <Scroller active={active} {...step} id={i} key={i} />)}
                </div>
            </div>
        </section>
    )
}