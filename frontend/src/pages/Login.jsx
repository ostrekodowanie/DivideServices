import { useState } from "react"

export default function Login() {
    return (
        <section className="padding pt-[1.4in] xl:pt-[2.2in] flex flex-col items-center">
            <h1 className="text-4xl font-bold mb-8">Login</h1>
            <Form />
        </section>
    )
}

const Form = () => {
    const [cred, setCred] = useState({
        username: '',
        password: ''
    })

    const handleSubmit = e => {
        e.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <input onChange={e => setCred({...cred, username: e.target.value})} type='text' name='username' placeholder="Username" />
            <input onChange={e => setCred({...cred, password: e.target.value})} type='password' name='password' placeholder="Password" />
        </form>
    )
}