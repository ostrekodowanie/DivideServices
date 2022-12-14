import axios from "axios"
import { useState, useEffect } from "react"
import { useSelector } from 'react-redux'
import { useLocation } from "react-router"

export default function Account() {
    return (
        <div className="flex flex-col lg:p-8 gap-8">
            <General />
            <Password />
            <Email />
        </div>
    )
}

const inputStyles = "px-6 py-2 rounded-3xl bg-[#F5F5F5] focus:bg-[#E9DDF8] border-primary focus:border-[1px] outline-none"

const General = () => {
    const auth = useSelector(state => state.login.info)
    const { id, username } = auth
    const [status, setStatus] = useState(undefined)
    const [general, setGeneral] = useState({
        username: '',
        name: '',
        surname: '',
        phone_number: ''
    })

    useEffect(() => {
        if(username) setGeneral(prev => {
            return {
                ...prev,
                username: username
            }
        })
        axios.post('/api/orders/user', id, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.data)
        .then(data => setGeneral(prev => {
            return {
                ...prev,
                name: data.name,
                surname: data.surname,
                phone_number: data.phone_number,
            }
        }))
    }, [])

    const handleSubmit = async e => {
        e.preventDefault()
        const resp = await axios.patch(`/api/account/${id}`, JSON.stringify(general), {
            headers: {
                'Content-Type': 'application/json'
            }
        }).catch(() => setStatus(false))
        if(resp.status === 200) return setStatus(true)
    }

    return (
        <div className="bg-white flex flex-col rounded-xl">
            <h2 className="font-medium w-full h-full py-4 px-[8vw] md:px-[12vw] lg:px-6 bg-[#F7F5FA] lg:hidden">Password</h2>
            <form onSubmit={handleSubmit} className="flex flex-col px-[8vw] md:px-[12vw] lg:px-6 py-6 gap-4 max-w-[6in]">
                <h2 className="font-medium hidden lg:block mb-2 text-xl">General</h2>
                <div className="flex flex-col gap-2">
                    <label className="text-[#4A454F] text-sm font-medium ml-6" htmlFor="username">Username</label>
                    <input className={inputStyles} value={general.username} onChange={e => setGeneral(prev => {
                        return {
                            ...prev,
                            username: e.target.value
                        }
                    })} required autoComplete="off" type="text" id="username" name='username' />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-[#4A454F] text-sm font-medium ml-6" htmlFor="name">Name</label>
                    <input className={inputStyles} value={general.name} onChange={e => setGeneral(prev => {
                        return {
                            ...prev,
                            name: e.target.value
                        }
                    })} required autoComplete="off" type="text" id="name" name='name' />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-[#4A454F] text-sm font-medium ml-6" htmlFor="Surname">Surname</label>
                    <input className={inputStyles} value={general.surname} onChange={e => setGeneral(prev => {
                        return {
                            ...prev,
                            surname: e.target.value
                        }
                    })} required autoComplete="off" type="text" id="Surname" name='Surname' />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-[#4A454F] text-sm font-medium ml-6" htmlFor="phone">Phone Number</label>
                    <input className={inputStyles} value={general.phone_number} onChange={e => setGeneral(prev => {
                        return {
                            ...prev,
                            phone_number: e.target.value
                        }
                    })} required autoComplete="off" type="tel" id="phone" name='phone' />
                </div>
                <div className="flex items-center gap-4 mt-4">
                    <button type="submit" className="rounded-3xl text-sm max-w-max py-2 px-6 bg-primary text-white hover:bg-[#6C25C3] hover:scale-105 transition duration-[250ms]">Change</button>
                    {status ? <span className="text-green-400 animate-ping">???</span> : status === false && <span className="text-red-400 animate-ping">X</span>}
                </div>
            </form>
        </div>
    )
}

const Password = () => {
    const { id } = useSelector(state => state.login.info)
    const [status, setStatus] = useState(undefined)
    const [password, setPassword] = useState({
        password: '',
        newPassword: '',
        confPassword: '',
    })

    const handleSubmit = async e => {
        e.preventDefault()
        if(password.newPassword !== password.confPassword)  return
        if(password.password === password.newPassword) return
        const resp = await axios.post('/api/account/password', JSON.stringify({
            user_id: id,
            current_password: password.password,
            new_password: password.newPassword
        }), {
            headers: {
                'Content-Type': 'application/json'
            }
        }).catch(() => setStatus(false))
        if(resp.status === 200) return setStatus(true)
    }

    return (
        <div className="bg-white flex flex-col rounded-xl">
            <h2 className="font-medium w-full h-full py-4 px-[8vw] md:px-[12vw] lg:px-6 bg-[#F7F5FA] lg:hidden">Password</h2>
            <form onSubmit={handleSubmit} className="flex flex-col px-[8vw] md:px-[12vw] lg:px-6 py-6 gap-4 max-w-[6in]">
                <h2 className="font-medium hidden lg:block mb-2 text-xl">Password</h2>
                <div className="flex flex-col gap-2">
                    <label className="text-[#4A454F] text-sm font-medium ml-6" htmlFor="password">Current Password</label>
                    <input className={inputStyles} onChange={e => setPassword(prev => {
                        return {
                            ...prev,
                            password: e.target.value
                        }
                    })} required autoComplete="off" type="password" id="password" name='password' />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-[#4A454F] text-sm font-medium ml-6" htmlFor="newPassword">New Password</label>
                    <input className={inputStyles} onChange={e => setPassword(prev => {
                        return {
                            ...prev,
                            newPassword: e.target.value
                        }
                    })} required autoComplete="off" type="password" id="newPassword" name='newPassword' />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-[#4A454F] text-sm font-medium ml-6" htmlFor="repeatNewPassword">Confirm Password</label>
                    <input className={inputStyles} onChange={e => setPassword(prev => {
                        return {
                            ...prev,
                            confPassword: e.target.value
                        }
                    })} required autoComplete="off" type="password" id="repeatNewPassword" name='repeatNewPassword' />
                </div>
                <div className="flex items-center gap-4 mt-4">
                    <button type="submit" className="rounded-3xl text-sm max-w-max py-2 px-6 bg-primary text-white hover:bg-[#6C25C3] hover:scale-105 transition duration-[250ms]">Change password</button>
                    {status ? <span className="text-green-400 animate-ping">???</span> : status === false && <span className="text-red-400 animate-ping">X</span>}
                </div>
            </form>
        </div>
    )
}

const Email = () => {
    const { id } = useSelector(state => state.login.info)
    const location = useLocation()
    const [status, setStatus] = useState({
        data: '',
        ok: false
    })
    const [email, setEmail] = useState({
        newEmail: '',
        confirmEmail: ''
    })

    const handleEmail = async e => {
        e.preventDefault()
        if(email.newEmail !== email.confirmEmail) return
        const resp = await axios.post('/api/account/email', JSON.stringify({
            user_id: id,
            new_email: email.newEmail
        }), {
            headers: {
                'Content-Type': 'application/json'
            }
        }).catch(err => setStatus({
            data: err.response.data,
            ok: false
        }))
        if(resp.status === 200) return setStatus({
            data: "Check your current email for the verification message.",
            ok: true
        })
    }

    useEffect(() => {
        if(location.search) {
            axios.get(`/api/account/email${location.search}`)
                .then(res => res.data)
                .then(data => setStatus({
                    data: data,
                    ok: true
                }))
                .catch(err => setStatus({
                    data: err.response.data,
                    ok: false
                }))
        }
    }, [])

    return (
        <div className="bg-white flex flex-col rounded-xl">
            <h2 className="font-medium px-[8vw] md:px-[12vw] lg:px-6 py-4 w-full h-full bg-[#F7F5FA] lg:hidden">Email</h2>
            <form onSubmit={handleEmail} className="flex flex-col py-6 gap-4 px-[8vw] md:px-[12vw] lg:px-6 max-w-[6in]">
                <h2 className="font-medium hidden lg:block mb-2 text-xl">Email</h2>
                <div className="flex flex-col gap-2">
                    <label className="text-[#4A454F] text-sm font-medium ml-6" htmlFor="newEmail">New Email</label>
                    <input className={inputStyles} onChange={e => setEmail(prev => {
                        return {
                            ...prev,
                            newEmail: e.target.value
                        }
                    })} required autoComplete="off" type="email" id="newEmail" name='newEmail' />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-[#4A454F] text-sm font-medium ml-6" htmlFor="confirmNewEmail">Confirm New Email</label>
                    <input className={inputStyles} onChange={e => setEmail(prev => {
                        return {
                            ...prev,
                            confirmEmail: e.target.value
                        }
                    })} required autoComplete="off" type="email" id="confirmNewEmail" name='confirmNewEmail' />
                </div>
                <div className="flex items-center gap-4 mt-4">
                    <button className="rounded-3xl text-sm max-w-max py-2 px-6 bg-primary text-white hover:bg-[#6C25C3] hover:scale-105 transition duration-[250ms]">Change email</button>
                    {status.data && <span className={`text-${status.ok ? 'green' : 'red'}-400`}>{status.data}</span>}
                </div>
            </form>
        </div>
    )
}