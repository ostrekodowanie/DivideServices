import { Link } from 'react-router-dom'
import { main, arrow, shadow, activeusers } from '../assets/home'

export default function Home() {
    return (
        <>
            <section className="padding pt-[1.4in] xl:pt-[2.2in] flex flex-col lg:flex-row justify-between relative min-h-[70vh]">
                <div className="flex flex-col gap-8">
                    <h1 className="text-4xl lg:text-5xl lg:leading-tight xl:text-6xl max-w-[4in] xl:leading-tight leading-snug font-semibold"><span className='text-primary font-extrabold'>Divide</span> your business solutions.</h1>
                    <p className='text-[#4A454F] xl:text-md max-w-[3.5in]'>Make your work routine become easier and faster</p>
                    <CTA />
                </div>
                <div className='max-w-[60%] relative self-end ml-auto'>
                    <img src={main} alt='' />
                    <img className='absolute -bottom-[2in] -z-10 w-[150%]' src={shadow} alt='' />
                </div>
            </section>
            <Stats />
        </>
    )
}

const CTA = () => {
    return (
        <div className="flex items-center flex-wrap gap-4 mt-2">
            <Link className='rounded-3xl py-2 px-6 bg-primary text-white flex items-center' to='/services'>Our services <img className='ml-2 max-h-[1em]' src={arrow} alt="" /></Link>
            <Link className='py-2 px-6' to='/contact'>Contact</Link>
        </div>
    )
}

const Stats = () => {
    return (
        <div className='bg-primary padding py-24 gap-4 grid md:grid-cols-2 xl:grid-cols-4 items-center'>
            <div className='grid grid-rows-2'>
                <div className='bg-secondary rounded-full h-16 w-16 flex items-center justify-center row-span-2'>
                    <img className='max-w-[50%] max-h-[50%]' src={activeusers} alt="" />
                </div>
            </div>
            <div className='grid grid-rows-2'>
                <div className='bg-secondary rounded-full h-16 w-16 flex items-center justify-center row-span-2'>
                    <img className='max-w-[50%] max-h-[50%]' src={activeusers} alt="" />
                </div>
            </div>
            <div className='grid grid-rows-2'>
                <div className='bg-secondary rounded-full h-16 w-16 flex items-center justify-center row-span-2'>
                    <img className='max-w-[50%] max-h-[50%]' src={activeusers} alt="" />
                </div>
            </div>
            <div className='grid grid-rows-2'>
                <div className='bg-secondary rounded-full h-16 w-16 flex items-center justify-center row-span-2'>
                    <img className='max-w-[50%] max-h-[50%]' src={activeusers} alt="" />
                </div>
            </div>
        </div>
    )
}