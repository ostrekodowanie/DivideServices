import { useState } from "react"
import { Link } from "react-router-dom"
import axios from 'axios'
import { useNavigate } from "react-router"
import { useDispatch} from "react-redux"
import { login } from "../reducers/auth"
import jwtDecode from "jwt-decode"

export default function Login() {
    return (
        <section className="padding pt-[1.4in] xl:pt-[2.2in] flex flex-col items-center">
            <h1 className="text-4xl font-bold mb-8">Login</h1>
            <Form />
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
        try {
            const response = await axios.post('/api/token', JSON.stringify(cred), {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            console.log(response.data.tokens.access)
            console.log(jwtDecode(response.data.tokens.access))
            dispatch(login(jwtDecode(response.data.tokens.access)))
            
        } catch(err) {
            return setAlert(err.response.data.detail)
        }
    }

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <input className="py-2 px-6 border-b-[1px] border-primary outline-none" onChange={e => setCred({...cred, email: e.target.value})} type='email' name='email' placeholder="Email" />
            <input className="py-2 px-6 border-b-[1px] border-primary outline-none" onChange={e => setCred({...cred, password: e.target.value})} type='password' name='password' placeholder="Password" />
            <Link className='text-primary my-6' to='/login/recovery'>Forgot your password?</Link>
            <button className="rounded-3xl py-2 px-6 bg-primary text-white" type='submit'>Log in</button>
            {alert ? <p className="text-red-400">{alert}</p> : <></>}
        </form>
    )
}