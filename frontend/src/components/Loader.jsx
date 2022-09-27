export default function Loader() {
    return (
        <div className="absolute flex items-center animate-spin m-auto right-[50%]">
            <div className="rounded-[50%] h-16 w-16 border-8 border-primary bg-white" />
            <div className='absolute -right-2 bg-white h-5 w-5' />
        </div>
    )
}