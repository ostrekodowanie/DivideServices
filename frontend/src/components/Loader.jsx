import loader from '../assets/loader.svg'

export default function Loader() {
    return (
        <div className="absolute flex items-center animate-spin m-auto right-[44%] md:right-[47%] top-[40%]">
            <img className='w-16' src={loader} alt="Loading..." />
        </div>
    )
}