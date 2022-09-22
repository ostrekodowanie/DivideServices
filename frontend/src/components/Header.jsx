import { useState } from "react"
import { logo } from "../assets/header"
import { Link } from 'react-router-dom'

export default function Header() {
    const [nav, setNav] = useState(false)
    return (
        <header className="flex items-center justify-between padding min-h-[6rem] xl:min-h-[7rem] fixed z-50 top-0 right-0 left-0 bg-white">
            <Logo />
            <Burger nav={nav} setNav={setNav} />
            <Navbar nav={nav} />
        </header>
    )
}

const Logo = () => <img className="max-h-8" src={logo} alt='' />

const Burger = ({ nav, setNav }) => {
    return (
        <div className='burger flex flex-col relative z-50 sm:hidden h-6 w-8 justify-between cursor-pointer' onClick={() => setNav(prev => !prev)}>
            <div style={nav ? {position: 'absolute', top: '50%', transform: 'translateY(-50%) rotate(45deg)'} : {}} className={lineStyle}></div>
            <div style={nav ? {display: 'none'} : {}} className={lineStyle}></div>
            <div style={nav ? {position: 'absolute', top: '50%', transform: 'translateY(-50%) rotate(-45deg)'} : {}} className={lineStyle}></div>
        </div>
    )
}

const lineStyle = 'h-[3px] w-full bg-primary transition-transform'

const Navbar = ({ nav }) => {
    return (
        <div className={`flex flex-col items-center justify-center gap-[3vw] absolute top-0 left-full transition-transform duration-300 h-screen w-full bg-white ${nav ? '-translate-x-full' : ''} sm:flex-row sm:relative sm:h-auto sm:w-auto sm:translate-x-0 sm:left-auto`}>
            <Link className="text-sm" to='/'>Home</Link>
            <Link className="text-sm" to='/services'>Services</Link>
            <Link className="text-sm" to='/contact'>Contact</Link>
            <div className="flex flex-col sm:flex-row mt-2 sm:mt-0 ml-2 items-center gap-[2vw]">
                <Link className="text-sm" to='/login'>Login</Link>
                <Link className="rounded-3xl text-sm py-2 px-6 bg-primary text-white" to='/signup'>Sign up</Link>
            </div>
        </div>
    )
}