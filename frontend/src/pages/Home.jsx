import { useState } from 'react'
import { Link } from 'react-router-dom'
import { main, arrow, shadow, activeusers, fashion, drive, purpleDots, pinkDots } from '../assets/home'
import Clap from '../components/Clap'

export default function Home() {
    return (
        <>
            <section className="padding pt-[1.4in] xl:pt-[1.6in] flex flex-col lg:flex-row justify-between relative">
                <div className="flex flex-col xl:my-12 gap-6">
                    <h1 className="text-4xl lg:text-5xl lg:leading-tight xl:text-[4rem] max-w-[4.2in] xl:leading-tight leading-snug font-semibold"><span className='text-primary'>Divide</span> your business<br /><Clap maxH='1em' classes='top-3' /> solutions.</h1>
                    <p className='text-[#4A454F] xl:text-md'>Make your work routine become easier and faster</p>
                    <CTA />
                </div>
                <MainImage />
            </section>
            <Stats />
            <Introduction order='right' img={fashion} />
            <Introduction order='left' img={fashion} />
            <Opinions />
            <Steps />
        </>
    )
}

const CTA = () => {
    return (
        <div className="flex items-center flex-wrap gap-7 mt-2">
            <Link className='rounded-3xl py-2 px-6 hover:bg-[#6C25C3] hover:scale-105 transition duration-[250ms] bg-primary text-white flex items-center' to='/products'>Our services <img className='ml-2 max-h-[1em]' src={arrow} alt="" /></Link>
            <Link className='py-2 hover:text-primary transition duration-[250ms]' to='/contact'>Contact</Link>
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
                <div className='bg-secondary rounded-full mr-4 h-16 w-16 flex items-center justify-center row-[1/3]'>
                    <img className='max-w-[50%] max-h-[50%]' src={activeusers} alt="" />
                </div>
                <h3 className='text-[#FAFAFA]/60 font-medium'>Clients</h3>
                <p className='text-[#FAFAFA] font-semibold text-2xl'>941</p>
            </div>
            <div className='grid grid-cols-auto max-w-max'>
                <div className='bg-secondary rounded-full mr-4 h-16 w-16 flex items-center justify-center row-span-2'>
                    <img className='max-w-[50%] max-h-[50%]' src={activeusers} alt="" />
                </div>
                <h3 className='text-[#FAFAFA]/60 font-medium'>Projects</h3>
                <p className='text-[#FAFAFA] font-semibold text-2xl'>187</p>
            </div>
            <div className='grid grid-cols-auto max-w-max'>
                <div className='bg-secondary rounded-full mr-4 h-16 w-16 flex items-center justify-center row-span-2'>
                    <img className='max-w-[50%] max-h-[50%]' src={activeusers} alt="" />
                </div>
                <h3 className='text-[#FAFAFA]/60 font-medium'>Clients</h3>
                <p className='text-[#FAFAFA] font-semibold text-2xl'>12.000</p>
            </div>
            <div className='grid grid-cols-auto max-w-max'>
                <div className='bg-secondary rounded-full mr-4 h-16 w-16 flex items-center justify-center row-span-2'>
                    <img className='max-w-[50%] max-h-[50%]' src={activeusers} alt="" />
                </div>
                <h3 className='text-[#FAFAFA]/60 font-medium'>Clients</h3>
                <p className='text-[#FAFAFA] font-semibold text-2xl'>12.000</p>
            </div>
        </div>
    )
}

const Introduction = ({ order, img }) => {
    return (
        <section className='padding py-[1in] xl:py-[1.4in] flex flex-col'>
            <div className={`flex flex-col ${order === 'left' ? 'xl:flex-row-reverse' : 'xl:flex-row'} xl:items-center gap-28 md:gap-36 xl:gap-48`}>
                <div className='flex flex-col gap-6'>
                    <h2 className='text-4xl leading-normal font-semibold max-w-[6in] xl:max-w-[5in]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                    <p className='text-[#4A454F] leading-loose max-w-[5.5in] xl:max-w-[4in]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At pretium cursus in in sed congue risus. Etiam cursus orci quis neque ac enim morbi. Elit, pulvinar nisl, tortor vel parturient. Placerat consectetur sit gravida tellus lectus amet, ac, id arcu.</p>
                    <button className="rounded-3xl mt-2 max-w-max text-sm py-2 px-6 bg-primary text-white hover:bg-[#6C25C3] hover:scale-105 transition duration-[250ms]">Get a quote</button>
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
        <section className='padding py-12 xl:py-[1in] flex flex-col gap-16 bg-white mt-16'>
            <div className='flex items-center gap-8'>
                <Clap />
                <div className='flex flex-col gap-2'>
                    <h2 className='font-semibold text-2xl lg:text-4xl'>Our solutions</h2>
                    <h3 className='text-[#4A454F] lg:text-lg'>Designed to use on daily basis</h3>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row justify-between gap-12'>
                <div className='rounded-3xl shadow-outsideGray p-8 flex flex-col gap-4'>
                    <div className='w-24 h-24 bg-[#FAFAFA] rounded-full' />
                    <h3 className='font-semibold lg:text-xl'>Sebastian Magnucki</h3>
                    <p className='text-[#4A454F] leading-loose'><q> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget lectus morbi gravida arcu, urna elit nisl. Suspendisse eleifend odio tempus, mattis enim. </q></p>
                </div>
                <div className='rounded-3xl shadow-outsideGray p-8 flex flex-col gap-4'>
                    <div className='w-24 h-24 bg-[#FAFAFA] rounded-full' /> 
                    <h3 className='font-semibold lg:text-xl'>Sebastian Magnucki</h3>
                    <p className='text-[#4A454F] leading-loose'><q> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget lectus morbi gravida arcu, urna elit nisl. Suspendisse eleifend odio tempus, mattis enim. </q></p>
                </div>
                <div className='rounded-3xl shadow-outsideGray p-8 flex flex-col gap-4'>
                    <div className='w-24 h-24 bg-[#FAFAFA] rounded-full' />
                    <h3 className='font-semibold lg:text-xl'>Sebastian Magnucki</h3>
                    <p className='text-[#4A454F] leading-loose'><q> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget lectus morbi gravida arcu, urna elit nisl. Suspendisse eleifend odio tempus, mattis enim. </q></p>
                </div>
            </div> 
        </section>
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
                <div className='bg-[#F9F5FE] rounded-md w-3 justify-self-stretch grid grid-rows-[repeat(3,1fr)] transition-transform ease-in-out' style={{transform: `translateY(100% * ${active})`}}>
                    <div className='bg-primary rounded-md'></div>
                </div>
                <div className='flex flex-col w-full overflow-hidden rounded-3xl'>
                    {scrollerSteps.map((step, i) => <Scroller active={active} {...step} id={i} key={i} />)}
                </div>
            </div>
        </section>
    )
}

const Scroller = props => {
    return (
        <div className={`pl-8 py-6 md:py-10 md:pl-20 flex flex-col gap-4 ${props.active === props.id ? 'bg-insideShadowPrimary' : 'bg-insideShadowGray'}`}>
            <h4 className='text-primary'>Step {props.id + 1}</h4>
            <h3 className='font-semibold text-2xl md:text-3xl'>{props.title}</h3>
            <p className='text-[#4A454F] max-w-md leading-relaxed'>{props.p}</p>
        </div>
    )
}