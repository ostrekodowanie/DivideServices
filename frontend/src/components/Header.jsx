import { useState, useEffect } from "react"
import { logo } from "../assets/header"
import { Link, useResolvedPath, useMatch, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import { logout } from "../reducers/auth"
import axios from "axios"

export default function Header() {
    const [nav, setNav] = useState(false)
    const location = useLocation()

    useEffect(() => {
        setNav(false)
        window.scrollTo(0, 0)
    }, [location])

    return (
        <header className="flex items-center justify-between padding min-h-[6rem] xl:min-h-[7rem] fixed z-50 top-0 right-0 left-0 bg-white">
            <Logo />
            <Burger nav={nav} setNav={setNav} />
            <Navbar nav={nav} />
        </header>
    )
}

const Logo = () => <Link to='/'><img className="max-h-8" src={logo} alt='' /></Link>

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
    const dispatch = useDispatch()
    const auth = useSelector(state => state.login)
    const { logged } = auth
    const { username } = auth.info

    const handleLogout = async () => {
        const response = await axios.post('/api/logout').catch(err => console.log(err))
        if(response.status === 200) return dispatch(logout())
    }

    return (
        <div className={`flex flex-col items-center justify-center gap-[3vw] absolute top-0 left-full transition-transform duration-300 h-screen w-full bg-white ${nav ? '-translate-x-full' : ''} sm:flex-row sm:relative sm:h-auto sm:w-auto sm:translate-x-0 sm:left-auto`}>
            <CustomLink className="text-sm" to='/'>Home</CustomLink>
            <CustomLink className="text-sm" to='/services'>Products</CustomLink>
            <CustomLink className="text-sm" to='/contact'>Contact</CustomLink>
            {!logged ? <div className="flex flex-col sm:flex-row mt-2 sm:mt-0 ml-2 items-center gap-[2vw] lg:gap-[1.5vw]">
                <CustomLink className="text-sm" to='/login'>Login</CustomLink>
                <Link className="rounded-3xl text-sm py-2 px-6 bg-primary text-white hover:bg-[#6C25C3] hover:scale-105 transition duration-[250ms]" to='/signup'>Sign up</Link>
            </div> : <span className="font-semibold cursor-pointer" onClick={handleLogout}>{username}</span>}
        </div>
    )
}

const CustomLink = ({children, to, className, props}) => {
    const activePath = useResolvedPath(to)
    const isActive = useMatch({path: `${activePath.pathname}/*`, end: true})
    return <Link to={to} className={`${className} transition ${isActive ? 'text-primary font-semibold' : 'hover:text-primary'}`}>{children}</Link>
}