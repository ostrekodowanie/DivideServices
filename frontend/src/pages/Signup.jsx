import { useState } from "react"
import { useNavigate } from "react-router"
import axios from 'axios'

export default function Signup() {
    return (
        <section className="padding pt-[1.4in] xl:pt-[2.2in] flex flex-col items-center">
            <h1 className="text-4xl font-bold mb-8">Signup</h1>
            <Form />
        </section>
    )
}

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
        
        const response = await axios.post('/api/signup', JSON.stringify(cred), {
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if(response.status !== 201) return setAlert(response.data)
        else navigate('/login')
    }

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <input onChange={e => setCred({...cred, username: e.target.value})} type='text' name='username' placeholder="Username" />
            <input onChange={e => setCred({...cred, email: e.target.value})} type='text' name='email' placeholder="Email" />
            <input onChange={e => setCred({...cred, password: e.target.value})} type='password' name='password' placeholder="Password" />
            <input onChange={e => setConfPwd(e.target.value)} type='password' name='confPassword' placeholder="Confirm password" />
            <button className="rounded-3xl py-2 px-6 bg-primary text-white" type='submit'>Sign up</button>
            {alert ? <p className="text-red-400">{alert}</p> : <></>}
        </form>
    )
}