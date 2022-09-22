import { useState } from "react"

export default function Signup() {
    return (
        <section className="padding pt-[1.4in] xl:pt-[2.2in] flex flex-col items-center">
            <h1 className="text-4xl font-bold mb-8">Signup</h1>
            <Form />
        </section>
    )
}

const Form = () => {
    const [cred, setCred] = useState({
        username: '',
        email: '',
        password: '',
        confPassword: ''
    })

    const handleSubmit = e => {
        e.preventDefault()
        if(cred.password !== cred.confPassword) return
    }

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <input onChange={e => setCred({...cred, username: e.target.value})} type='text' name='username' placeholder="Username" />
            <input onChange={e => setCred({...cred, email: e.target.value})} type='text' name='email' placeholder="Email" />
            <input onChange={e => setCred({...cred, password: e.target.value})} type='password' name='password' placeholder="Password" />
            <input onChange={e => setCred({...cred, confPassword: e.target.value})} type='text' name='confPassword' placeholder="Confirm password" />
        </form>
    )
}