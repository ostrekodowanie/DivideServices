import Clap from "../components/Clap"
import { Link } from "react-router-dom"

export const Success = ({ title, msg }) => {
    return (
        <div className="flex flex-col gap-4">
            <Clap />
            <h2 className="font-semibold text-3xl"><span className="text-primary">Success,</span> {title}</h2>
            <p className="text-[#A199AA] max-w-[4in]">{msg}</p>
            <Link className="rounded-3xl py-2 px-6 bg-primary text-white mb-6 mt-3 max-w-max" to='/login'>Log in</Link>
        </div>
    )
}