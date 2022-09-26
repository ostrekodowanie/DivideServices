import { useState } from "react"
import { useNavigate } from "react-router"
import { useLocation } from "react-router"
import { Link } from "react-router-dom"
import axios from 'axios'

export default function Signup() {
    const location = useLocation()
    return (
        <section className="padding pt-[1.4in] xl:pt-[2.2in] flex flex-col items-center min-h-screen">
            <h1 className="text-4xl font-bold mb-8">Sign Up</h1>
            {location.pathname.includes('token') ? <Verified /> : <Form />}
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
        if(cred.password !== confPwd) return setAlert("Passwords didn't match!")
        if(cred.password.length < 8) return setAlert("Password must contain at least 8 characters.")
        if(!PWD_REGEX.test(cred.password)) return setAlert("Password must contain at 1 number.")

        try {
            await axios.post('/api/signup', JSON.stringify(cred), {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            return navigate('/login')
        } catch(err) {
            if(err.response.data.email) return setAlert(err.response.data.email)
            return setAlert(err.response.data.username)
        }
    }

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <input className="py-2 px-6 border-b-[1px] border-primary outline-none" onChange={e => setCred({...cred, username: e.target.value})} type='text' name='username' placeholder="Username" />
            <input className="py-2 px-6 border-b-[1px] border-primary outline-none" onChange={e => setCred({...cred, email: e.target.value})} type='text' name='email' placeholder="Email" />
            <input className="py-2 px-6 border-b-[1px] border-primary outline-none" onChange={e => setCred({...cred, password: e.target.value})} type='password' name='password' placeholder="Password" />
            <input className="py-2 px-6 border-b-[1px] mb-3 border-primary outline-none" onChange={e => setConfPwd(e.target.value)} type='password' name='confPassword' placeholder="Confirm password" />
            {alert ? <p className="text-red-400">{alert}</p> : <></>}
            <button className="rounded-3xl py-2 px-6 bg-primary text-white mb-6 mt-3" type='submit'>Sign up</button>
            <span>Already have an account? <Link className="text-primary" to='/login'>Log in.</Link></span>
        </form>
    )
}

const Verified = () => {
    return (
        <>
            <h2>Your account has been verified</h2>
            <Link className="rounded-3xl py-2 px-6 bg-primary text-white hover:bg-[#6C25C3] hover:scale-105 transition duration-[250ms]" to='/login'>Log in</Link>
        </>
    )
}