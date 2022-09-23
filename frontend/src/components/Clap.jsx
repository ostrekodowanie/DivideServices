import { clapLeft, clapRight } from "../assets/home"

export default function Clap({classes}) {
    return (
        <div className={`inline-flex relative mr-3 ${classes}`}>
            <img className="max-h-[1em] clap-left" src={clapLeft} alt='' />
            <img className="max-h-[1em] absolute left-3 clap-right" src={clapRight} alt='' />
        </div>
    )
}