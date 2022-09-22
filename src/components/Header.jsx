import { useState } from "react"
import { logo } from "../assets/header"
import { Link } from 'react-router-dom'

export default function Header() {
    const [nav, setNav] = useState(false)
    return (
        <header className="flex items-center justify-between padding min-h-[6rem] fixed top-0 right-0 left-0">
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
        <div className={`flex flex-col items-center justify-center gap-[4vw] absolute top-0 left-full transition-transform duration-300 h-screen w-full bg-white ${nav ? '-translate-x-full' : ''} sm:flex-row sm:relative sm:h-auto sm:w-auto sm:translate-x-0 sm:left-auto`}>
            <Link to='/'>Home</Link>
            <Link to='/services'>Services</Link>
            <Link to='/contact'>Contact</Link>
        </div>
    )
}