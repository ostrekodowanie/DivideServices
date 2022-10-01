import { clapLeft, clapRight, clapNoise } from "../assets/clap"

export default function Clap(props) {
    return (
        <div className={`inline-flex relative mr-3 ${props.classes}`}>
            <img className="absolute z-10 -top-2 -left-2 lg:-top-[0.7vw] lg:-left-[0.7vw] clap-noise max-h-[38%]" src={clapNoise} alt="" />
            <img className={`max-h-[${props.maxH}] clap-left`} src={clapLeft} alt='' />
            <img className={`max-h-[${props.maxH}] absolute left-2 lg:left-3 clap-right`} src={clapRight} alt='' />
        </div>
    )
}