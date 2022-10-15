import { useState, useEffect } from "react"
import { arrowLeft, logo } from "../assets/header"
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
        <header className="flex items-center justify-between padding min-h-[6rem] xl:min-h-[7rem] fixed z-50 top-0 right-0 left-0 bg-background">
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

    

    return (
        <div className={`flex flex-col items-center gap-4 justify-center sm:gap-8 absolute top-0 left-full transition-transform duration-300 h-screen w-full bg-background ${nav ? '-translate-x-full' : ''} sm:flex-row sm:relative sm:h-auto sm:w-auto sm:translate-x-0 sm:left-auto`}>
            <CustomLink className="text-sm" to='/'>Home</CustomLink>
            <CustomLink className="text-sm" to='/products'>Products</CustomLink>
            <CustomLink className="text-sm" to='/support'>Support</CustomLink>
            {!logged ? <div className="flex flex-col sm:flex-row mt-8 gap-4 sm:mt-0 ml-2 items-center">
                <Link className="rounded-3xl text-sm font-medium py-2 px-6 border-[1px] border-primary text-primary hover:scale-105 transition duration-[250ms]" to='/login'>Login</Link>
                <Link className="rounded-3xl text-sm font-medium py-2 px-6 bg-primary text-white hover:bg-[#6C25C3] hover:scale-105 transition duration-[250ms]" to='/signup'>Sign up</Link>
            </div> : <ProfileMenu dispatch={dispatch} />}
        </div>
    )
}

const ProfileMenu = ({ dispatch }) => {
    const [active, setActive] = useState(false)
    const auth = useSelector(state => state.login)
    const location = useLocation()
    const { username } = auth.info

    useEffect(() => {
        setActive(false)
    }, [location])

    const handleLogout = async () => {
        let { refresh } = auth.info.tokens
        const response = await axios.post('/api/logout', refresh, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if(response.status === 200) return dispatch(logout())
    }

    return (
        <div className="relative flex flex-col items-center">
            <span onClick={() => setActive(prev => !prev)} className="font-semibold cursor-pointer flex items-center gap-2">{username} <img className={`rotate-180 transition-transform ${active ? '-rotate-90' : ''}`} src={arrowLeft} alt="" /></span>
            {active && <div className="profile-menu flex flex-col shadow-outsideShadowPrimary bg-white font-medium rounded-xl overflow-hidden absolute top-[150%] text-sm">
                <a className="py-3 px-5 hover:text-primary border-b-[1px] border-[#E6E6E6]" href='https://apps.divideproject.works'>My Apps</a>
                <CustomLink className="py-3 px-5 border-b-[1px] border-[#E6E6E6]" to='/profile'>Preferences</CustomLink>
                <span onClick={handleLogout} className="text-red-400 cursor-pointer py-3 px-5">Log out</span>
            </div>}
        </div>
    )
}

const CustomLink = ({children, to, className}) => {
    const activePath = useResolvedPath(to)
    const isActive = useMatch({path: `${activePath.pathname}/*`, end: true})
    return <Link to={to} className={`${className} transition-colors font-medium ${isActive ? 'text-primary' : 'hover:text-primary'}`}>{children}</Link>
}