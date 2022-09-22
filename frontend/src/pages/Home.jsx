import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <>
            <section className="padding py-[1.4in] xl:py-[2.2in]">
                <div className="flex flex-col gap-8">
                    <h1 className="text-4xl xl:text-6xl max-w-[4in] xl:leading-tight leading-snug font-semibold"><span className='text-primary'>Divide</span> your business solutions.</h1>
                    <p className='text-[#4A454F] xl:text-lg max-w-sm'>Make your work routine become easier and faster</p>
                    <CTA />
                </div>
            </section>
            <div className='bg-primary h-[1.5in]'></div>
        </>
    )
}

const CTA = () => {
    return (
        <div className="flex items-center flex-wrap gap-4 mt-2">
            <Link className='rounded-3xl py-2 px-6 bg-primary text-white' to='/services'>Our services</Link>
            <Link className='py-2 px-6' to='/contact'>Contact</Link>
        </div>
    )
}