import { useState, useEffect } from "react"
import { useNavigate } from "react-router"
import { useLocation } from "react-router"
import { Link } from "react-router-dom"
import axios from 'axios'
import Loader from "../components/Loader"
import { Success } from "../components/Success"

export default function Signup() {
    const location = useLocation()
    let url = location.pathname.split('/').pop()
    return (
        <section className="padding pt-[1.4in] xl:pt-[2.2in] flex flex-col items-center min-h-screen">
            <div className="flex flex-col">
                <h1 className="text-4xl xl:text-[2.5rem] font-semibold mb-8">Sign Up</h1>
                {url === 'signup' ? <Form /> : url === 'success' ? <Success msg='We have sent you a verification email, please check your mailbox.' title='account created' /> : <Verified />}
            </div>
        </section>
    )
}

const PWD_REGEX = /(?=.*[a-z])(?=.*[0-9])/

const Form = () => {
    const navigate = useNavigate()
    const [alert, setAlert] = useState('')
    const [confPwd, setConfPwd] = useState('')
    const [cred, setCred] = useState({
        username: '',
        email: '',
        password: ''
    })

    const handleSubmit = async e => {
        e.preventDefault()
        setAlert('loading')
        if(cred.password !== confPwd) return setAlert("Passwords didn't match!")
        if(cred.password.length < 8) return setAlert("Password must contain at least 8 characters.")
        if(!PWD_REGEX.test(cred.password)) return setAlert("Password must contain at 1 number.")

        try {
            await axios.post('/api/signup', JSON.stringify(cred), {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            return navigate('/signup/success')
        } catch(err) {
            if(err.response.data.email) return setAlert(err.response.data.email)
            return setAlert(err.response.data.username)
        }
    }

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <div className="flex flex-col gap-2">
                <label className="ml-6" htmlFor="username">Username</label>
                <input className="rounded-3xl px-6 py-2 shadow-outsideShadowPrimary" onChange={e => setCred({...cred, username: e.target.value})} type='text' name='username' id='username' placeholder="exampleusername" />
            </div>
            <div className="flex flex-col gap-2">
                <label className="ml-6" htmlFor="email">Email</label>
                <input className="rounded-3xl px-6 py-2 shadow-outsideShadowPrimary" onChange={e => setCred({...cred, email: e.target.value})} type='text' name='email' id='email' placeholder="examplemail@gmail.com" />
            </div>
            <div className="flex flex-col gap-2">
                <label className="ml-6" htmlFor="password">Password</label>
                <input className="rounded-3xl px-6 py-2 shadow-outsideShadowPrimary" onChange={e => setCred({...cred, password: e.target.value})} type='password' name='password' id="password" placeholder="Password" />
            </div>
            <div className="flex flex-col gap-2">
                <label className="ml-6" htmlFor="confPassword">Confirm password</label>
                <input className="rounded-3xl px-6 py-2 shadow-outsideShadowPrimary" onChange={e => setConfPwd(e.target.value)} type='password' name='confPassword' id="confPassword" placeholder="Confirm password" />
            </div>
            <span className="text-sm">Already have an account? <Link className="text-primary" to='/login'>Log in.</Link></span>
            {alert && alert !== 'loading' ? <p className="text-red-400">{alert}</p> : <></>}
            <button className="rounded-3xl py-2 px-6 bg-primary text-white mb-6 mt-3 max-w-max" type='submit'>Sign up</button>
            {alert === 'loading' ? <Loader /> : <></>}
        </form>
    )
}

const Verified = () => {
    const location = useLocation()
    const [alert, setAlert] = useState('loading')
    const [status, setStatus] = useState('')
    useEffect(() => {
       let token = location.pathname.split('=').pop()
        axios.get(`/api/signup/activate?token=${token}`)
            .then(res => [res.data, res.status])
            .then(data => {
                console.log(data)
            })
    }, [])

    return (
        <>
            {alert && alert === 'loading' ? <Loader /> : status === 200 ? <Success msg='Congratulations! You have verified your account, go ahead and explore our products.' title='account verified' /> : <h2>{alert}</h2>}
            <Link className="rounded-3xl py-2 px-6 bg-primary text-white hover:bg-[#6C25C3] hover:scale-105 transition duration-[250ms]" to='/login'>Log in</Link>
        </>
    )
}
