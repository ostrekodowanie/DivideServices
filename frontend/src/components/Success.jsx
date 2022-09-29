import Clap from "../components/Clap"

export const Success = ({ title, msg }) => {
    return (
        <div className="flex flex-col gap-4">
            <Clap />
            <h2 className="font-semibold text-3xl"><span className="text-primary">Success, {title}</span></h2>
            <p className="text-[#A199AA]">{msg}</p>
            <Link className="rounded-3xl py-2 px-6 bg-primary text-white mb-6 mt-3 max-w-max" to='/login'>Log in</Link>
        </div>
    )
}