import { useState } from "react"
import { Link } from "react-router-dom"
import axios from 'axios'
import { useLocation, useNavigate } from "react-router"
import { useDispatch } from "react-redux"
import { login } from "../reducers/auth"
import jwtDecode from "jwt-decode"
import Loader from "../components/Loader"
import contact from '../assets/contact.svg'

export default function Login() {
    const location = useLocation()
    return (
        <section className="padding flex flex-col lg:flex-row items-center justify-between gap-8 min-h-screen">
            <div className="flex flex-col">
                <h1 className="text-4xl xl:text-[2.5rem] font-semibold mb-8">{location.pathname.split('/').pop() === 'login' ? 'Log In' : 'Change Password'}</h1>
                {location.pathname.split('/').pop() === 'login' ? <Form /> : location.pathname.split('/').pop() === 'recovery' ? <Recovery /> : <ChangePassword />}
            </div>
            <ContactImage />
        </section>
    )
}

const ContactImage = () => {
    return (
        <div className='relative xl:self-end xl:ml-auto mt-8 xl:mt-0'>
            <img src={contact} alt='' />
        </div>
    )
}

const Form = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [alert, setAlert] = useState('')
    const [cred, setCred] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = async e => {
        e.preventDefault()
        setAlert('loading')
        try {
            const response = await axios.post('/api/login', JSON.stringify(cred), {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            let user = jwtDecode(response.data.access)
            dispatch(login({
                id: user.user_id,
                username: user.username,
                email: user.email,
                tokens: response.data
            }))
            return navigate('/products')
            
        } catch(err) {
            return setAlert(err.response.data.detail)
        }
    }

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <div className="flex flex-col gap-2">
                <label className="ml-6" htmlFor="email">Email</label>
                <input className="rounded-3xl px-6 py-2 shadow-outsideShadowPrimary" required onChange={e => setCred({...cred, email: e.target.value})} type='email' name='email' placeholder="examplemail@mail.com" />
            </div>
            <div className="flex flex-col gap-2">
                <label className="ml-6" htmlFor="password">Password</label>
                <input className="rounded-3xl px-6 py-2 shadow-outsideShadowPrimary" required onChange={e => setCred({...cred, password: e.target.value})} type='password' name='password' placeholder="Password" />
            </div>
            {alert && alert !== 'loading' && <p className="text-red-400">{alert}</p>}
            <button className="rounded-3xl py-2 px-6 bg-primary mb-6 mt-3 text-white max-w-max" type='submit'>Log in</button>
            <Link className='text-primary' to='/login/recovery'>Forgot your password?</Link>
            {alert === 'loading' && <Loader />}
        </form>
    )
}

const Recovery = () => {
    const [alert, setAlert] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = async e => {
        e.preventDefault()
        setAlert('loading')
        const response = await axios.post('/api/login/recovery', email, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if(response.status === 200) {
            return setAlert('Message has been sent.')
        }
        return setAlert('User not found')
    }

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <div className="flex flex-col gap-2">
                <label className="ml-6" htmlFor="email">Email</label>
                <input className="rounded-3xl px-6 py-2 shadow-outsideShadowPrimary" required onChange={e => setEmail(e.target.value)} type='email' name='email' placeholder="examplemail@mail.com" />
            </div>
            {alert && alert !== 'loading' ? <p className={alert === 'Message has been sent.' ? 'text-green-400' : 'text-red-400'}>{alert}</p> : <></>}
            <button className="rounded-3xl py-2 px-6 bg-primary mb-6 mt-3 text-white max-w-max" type='submit'>Send message</button>
            <Link className='text-primary' to='/login'>Remember your password?</Link>
            {alert === 'loading' && <Loader />}
        </form>
    )
}

const PWD_REGEX = /(?=.*[a-z])(?=.*[0-9])/

const ChangePassword = () => {
    const [alert, setAlert] = useState('')
    const [password, setPassword] = useState({
        pwd: '',
        confPwd: ''
    })
    
    const handleSubmit = e => {
        e.preventDefault()
        setAlert('loading')
        if(password.confPwd !== password.pwd) return setAlert("Passwords didn't match!")
        if(password.pwd.length < 8) return setAlert("Password must contain at least 8 characters.")
        if(!PWD_REGEX.test(password.pwd)) return setAlert("Password must contain at 1 number.")

        let token = location.pathname.split('/').pop()

        axios.patch('/api/login/recovery/complete', JSON.stringify({
            password: password.pwd,
            token: token,
            uidb64: 'Nw'
        }), {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(() => setAlert('Your password has been changed successfully!'))
        .catch(err => setAlert(err.data[0]))
    }

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <div className="flex flex-col gap-2">
                <label className="ml-6" htmlFor="password">Password</label>
                <input className="rounded-3xl px-6 py-2 shadow-outsideShadowPrimary" required onChange={e => setPassword({...password, pwd: e.target.value})} type='password' name='password' placeholder="Password" />
            </div>
            <div className="flex flex-col gap-2">
                <label className="ml-6" htmlFor="confirm_password">Confirm password</label>
                <input className="rounded-3xl px-6 py-2 shadow-outsideShadowPrimary" required onChange={e => setPassword({...password, confPwd: e.target.value})} type='password' name='confirm_password' placeholder="Confirm password" />
            </div>
            {alert && alert !== 'loading' ? <p className={alert === 'Your password has been changed successfully!' ? 'text-green-400' : 'text-red-400'}>{alert}</p> : <></>}
            <button className="rounded-3xl py-2 px-6 bg-primary mb-6 mt-3 text-white max-w-max" type='submit'>Change password</button>
            {alert === 'loading' && <Loader />}
        </form>
    )
}