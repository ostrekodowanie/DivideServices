import { useState } from "react"
import { Link } from "react-router-dom"
import axios from 'axios'
import { useLocation, useNavigate } from "react-router"
import { useDispatch} from "react-redux"
import { login } from "../reducers/auth"
import jwtDecode from "jwt-decode"
import Loader from "../components/Loader"

export default function Login() {
    const location = useLocation()
    return (
        <section className="padding pt-[1.4in] xl:pt-[2.2in] flex flex-col items-center min-h-screen">
            <h1 className="text-4xl font-bold mb-8">{location.pathname.split('/').pop() === 'login' ? 'Log In' : 'Change Password'}</h1>
            {location.pathname.split('/').pop() === 'login' ? <Form /> : location.pathname.split('/').pop() === 'recovery' ? <Recovery /> : <ChangePassword />}
        </section>
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
            return navigate('/services')
            
        } catch(err) {
            return setAlert(err.response.data.detail)
        }
    }

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <input className="py-2 px-6 border-b-[1px] border-primary outline-none" onChange={e => setCred({...cred, email: e.target.value})} type='email' name='email' placeholder="Email" />
            <input className="py-2 px-6 border-b-[1px] mb-3 border-primary outline-none" onChange={e => setCred({...cred, password: e.target.value})} type='password' name='password' placeholder="Password" />
            {alert && alert !== 'loading' ? <p className="text-red-400">{alert}</p> : <></>}
            <button className="rounded-3xl py-2 px-6 bg-primary mb-6 mt-3 text-white" type='submit'>Log in</button>
            <Link className='text-primary' to='/login/recovery'>Forgot your password?</Link>
            {alert === 'loading' ? <Loader /> : <></>}
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
            <input className="py-2 px-6 border-b-[1px] border-primary outline-none" required onChange={e => setEmail(e.target.value)} type='email' name='email' placeholder="Email" />
            {alert && alert !== 'loading' ? <p className={alert === 'Message has been sent.' ? 'text-green-400' : 'text-red-400'}>{alert}</p> : <></>}
            <button className="rounded-3xl py-2 px-6 bg-primary mb-6 mt-3 text-white" type='submit'>Send message</button>
            <Link className='text-primary' to='/login'>Remember your password?</Link>
            {alert === 'loading' ? <Loader /> : <></>}
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
            <input className="py-2 px-6 border-b-[1px] border-primary outline-none" onChange={e => setPassword({...password, pwd: e.target.value})} type='password' name='password' placeholder="Password" />
            <input className="py-2 px-6 border-b-[1px] border-primary outline-none" onChange={e => setPassword({...password, confPwd: e.target.value})} type='password' name='confirm_password' placeholder="Confirm password" />
            {alert && alert !== 'loading' ? <p className={alert === 'Your password has been changed successfully!' ? 'text-green-400' : 'text-red-400'}>{alert}</p> : <></>}
            <button className="rounded-3xl py-2 px-6 bg-primary mb-6 mt-3 text-white" type='submit'>Change password</button>
            {alert === 'loading' ? <Loader /> : <></>}
        </form>
    )
}