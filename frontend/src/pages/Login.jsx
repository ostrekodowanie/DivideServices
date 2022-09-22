import { useState } from "react"
import axios from 'axios'

export default function Login() {
    return (
        <section className="padding pt-[1.4in] xl:pt-[2.2in] flex flex-col items-center">
            <h1 className="text-4xl font-bold mb-8">Login</h1>
            <Form />
        </section>
    )
}

const Form = () => {
    const [alert, setAlert] = useState('')
    const [cred, setCred] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = async e => {
        e.preventDefault()
        const response = await axios.post('/api/login', JSON.stringify(cred), {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if(response.status !== 200) return setAlert(response.data)
    }

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <input onChange={e => setCred({...cred, email: e.target.value})} type='email' name='email' placeholder="Email" />
            <input onChange={e => setCred({...cred, password: e.target.value})} type='password' name='password' placeholder="Password" />
            <button className="rounded-3xl py-2 px-6 bg-primary text-white" type='submit'>Log in</button>
            {alert ? <p className="text-red-400">{alert}</p> : <></>}
        </form>
    )
}